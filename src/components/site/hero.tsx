import { ArrowRight, CalendarCheck, MessageCircle, PhoneCall, Play, Sparkles } from "lucide-react";
import { CommandCenter } from "./command-center";
import { Container, Cta, Eyebrow, Reveal } from "./primitives";

const chips = [
  { label: "WhatsApp automation", icon: MessageCircle },
  { label: "Appointment booking", icon: CalendarCheck },
  { label: "AI voice calls", icon: PhoneCall },
  { label: "Patient follow-ups", icon: Sparkles },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-14 sm:pt-36 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 surface-hero" aria-hidden />
      <div
        className="pointer-events-none absolute -top-24 -left-24 size-[420px] rounded-full bg-mint soft-blob float-slow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-10 right-[-10%] size-[380px] rounded-full bg-peach soft-blob float-slow [animation-delay:-3s]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-[0.22] grid-lines [mask-image:radial-gradient(65%_55%_at_50%_0%,black,transparent)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="min-w-0">
            <Reveal>
              <Eyebrow>
                <span className="size-1.5 rounded-full bg-signal" />
                Healthcare workflow automation
              </Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-[2.1rem] leading-[1.05] font-semibold sm:mt-6 sm:text-6xl lg:text-[4.1rem]">
                AI-powered automation for modern healthcare
                <span className="text-primary">.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
                Automate patient communication, appointments, follow-ups and everyday hospital workflows —
                while your staff focus on what matters most: patient care.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <Cta size="lg" href="#demo" className="w-full sm:w-auto">
                  Book a Demo <ArrowRight className="size-4" />
                </Cta>
                <Cta size="lg" variant="outline" href="#how-it-works" className="w-full sm:w-auto">
                  <Play className="size-3.5" /> See How It Works
                </Cta>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <ul className="mt-10 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <li
                    key={chip.label}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-2 text-xs text-muted-foreground"
                  >
                    <chip.icon className="size-3.5 shrink-0 text-primary" />
                    {chip.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="absolute -top-6 -left-4 z-10 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-card float-slow sm:block">
              <p className="font-mono text-[10px] tracking-wider text-muted-foreground">AVG. FIRST REPLY</p>
              <p className="mt-1 font-display text-xl font-semibold">3.2 sec</p>
            </div>
            <div
              className="absolute -right-3 -bottom-6 z-10 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-card float-slow sm:block"
              style={{ animationDelay: "1.4s" }}
            >
              <p className="font-mono text-[10px] tracking-wider text-muted-foreground">AUTOMATED THIS WEEK</p>
              <p className="mt-1 font-display text-xl font-semibold">4,820 requests</p>
            </div>
            <CommandCenter />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
