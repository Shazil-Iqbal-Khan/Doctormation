import { Check, CheckCheck, MessageCircle } from "lucide-react";
import { Container, Reveal, SectionHeading } from "./primitives";

const thread = [
  { from: "patient", text: "Hi, I need an appointment with a skin specialist this week.", time: "10:02" },
  {
    from: "ai",
    text: "Of course. Dr. Sana Iqbal (Dermatology) has Wednesday 4:30 PM or Thursday 11:00 AM. Which suits you?",
    time: "10:02",
  },
  { from: "patient", text: "Thursday 11 please.", time: "10:03" },
  {
    from: "ai",
    text: "Booked ✅ Thursday, 11:00 AM with Dr. Sana Iqbal, Clinic B — 2nd floor. Token #14. I'll remind you a day before.",
    time: "10:03",
  },
  { from: "patient", text: "Also, are my blood test reports ready?", time: "10:05" },
  {
    from: "ai",
    text: "Yes — your CBC panel was released at 9:40 AM. Sending the PDF now.",
    time: "10:05",
  },
];

const highlights = [
  "Replies in seconds, 24/7 — including nights and public holidays",
  "Understands Urdu, English and mixed conversational language",
  "Confirms real availability before booking anything",
  "Escalates sensitive or complex cases to your staff instantly",
];

export function WhatsAppSection() {
  return (
    <section className="border-y border-border bg-surface/50 py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Patient conversations"
              title="Real conversations, handled without your front desk"
              description="Patients message like they always do. The AI understands, checks your systems and completes the request."
            />
            <ul className="mt-8 space-y-3">
              {highlights.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 70} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-3" />
                  </span>
                  {item}
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={140} className="relative mx-auto w-full max-w-[400px]">
            <div className="rounded-[2.2rem] border border-border bg-card p-3 shadow-float">
              <div className="flex items-center gap-3 rounded-t-[1.6rem] surface-ink px-4 py-3">
                <span className="grid size-9 place-items-center rounded-full bg-ink-foreground/12">
                  <MessageCircle className="size-4" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">Medrelay Care Assistant</p>
                  <p className="font-mono text-[10px] text-ink-foreground/60">online · typically replies instantly</p>
                </div>
              </div>
              <div className="space-y-2.5 bg-surface/60 px-3 py-4">
                {thread.map((msg, i) => (
                  <div
                    key={i}
                    className={msg.from === "ai" ? "flex justify-end" : "flex justify-start"}
                  >
                    <div
                      className={
                        msg.from === "ai"
                          ? "max-w-[85%] rounded-2xl rounded-br-md bg-accent px-3.5 py-2.5 text-[12.5px] leading-relaxed text-accent-foreground"
                          : "max-w-[85%] rounded-2xl rounded-bl-md border border-border bg-card px-3.5 py-2.5 text-[12.5px] leading-relaxed"
                      }
                    >
                      {msg.text}
                      <span className="mt-1 flex items-center justify-end gap-1 font-mono text-[9px] opacity-60">
                        {msg.time}
                        {msg.from === "ai" ? <CheckCheck className="size-3" /> : null}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-b-[1.6rem] border-t border-border bg-card px-4 py-3 font-mono text-[10px] text-muted-foreground">
                Automated by Medrelay · human takeover available
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
