import { Brain, Database, MessageCircle, Send, User, Workflow } from "lucide-react";
import { Container, Reveal, SectionHeading } from "./primitives";

const steps = [
  { icon: User, label: "Patient", body: "A patient reaches out with a request, any time of day." },
  { icon: MessageCircle, label: "WhatsApp / Voice", body: "The message arrives on the channel patients already use." },
  { icon: Brain, label: "AI understands", body: "Intent, doctor, department and timing are extracted instantly." },
  { icon: Workflow, label: "Automation acts", body: "Availability is checked and the action is performed end to end." },
  { icon: Database, label: "Systems updated", body: "The appointment and conversation are stored in your database." },
  { icon: Send, label: "Instant response", body: "The patient receives confirmation and a timely reminder." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title="From patient message to completed action"
          description="No forms, no apps to install, no staff intervention for routine requests."
        />

        <div className="relative mt-14">
          <div
            className="pointer-events-none absolute top-[46px] right-0 left-0 hidden lg:block"
            aria-hidden
          >
            <svg viewBox="0 0 1000 2" preserveAspectRatio="none" className="h-0.5 w-full">
              <line
                x1="0"
                y1="1"
                x2="1000"
                y2="1"
                stroke="var(--color-primary)"
                strokeOpacity="0.45"
                strokeWidth="2"
                className="dash-flow"
              />
            </svg>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.label} delay={i * 90} className="relative">
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl surface-accent">
                      <step.icon className="size-5" />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold">{step.label}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
