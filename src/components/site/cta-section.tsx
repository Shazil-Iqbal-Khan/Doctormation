import { ArrowRight, CalendarCheck, Clock, MessageCircle } from "lucide-react";
import { Container, Cta, Eyebrow, Reveal } from "./primitives";

const bullets = [
  { icon: Clock, text: "30-minute walkthrough, no preparation needed" },
  { icon: MessageCircle, text: "See a live WhatsApp and voice automation" },
  { icon: CalendarCheck, text: "Get a rollout plan for your departments" },
];

export function CtaSection() {
  return (
    <section id="demo" className="py-16 sm:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-border p-8 shadow-float sm:p-14">
          <div className="absolute inset-0 surface-ink" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 opacity-10 grid-lines [mask-image:radial-gradient(60%_60%_at_20%_0%,black,transparent)]"
            aria-hidden
          />
          <div className="relative grid gap-10 text-ink-foreground lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Eyebrow className="border-ink-foreground/20 bg-ink-foreground/8 text-ink-foreground/70">
                <span className="size-1.5 rounded-full bg-signal" />
                Book a demo
              </Eyebrow>
              <h2 className="mt-6 text-3xl leading-[1.06] font-semibold text-ink-foreground sm:text-[2.7rem]">
                See your hospital&apos;s workflows automated in 30 minutes
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-foreground/70">
                We&apos;ll map your current patient journey, show the automations running live, and give you a clear
                implementation plan for your team.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Cta size="lg" variant="accent" href="mailto:hello@medrelay.ai?subject=Demo%20request">
                  Book a Demo <ArrowRight className="size-4" />
                </Cta>
                <Cta size="lg" variant="ghostLight" href="mailto:hello@medrelay.ai?subject=Talk%20to%20the%20team">
                  Talk to our team
                </Cta>
              </div>
            </div>

            <ul className="grid gap-3">
              {bullets.map((bullet) => (
                <li
                  key={bullet.text}
                  className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-2xl border border-ink-foreground/12 bg-ink-foreground/6 px-5 py-4 text-sm text-ink-foreground/80"
                >
                  <span className="grid size-9 place-items-center rounded-xl bg-ink-foreground/12">
                    <bullet.icon className="size-4" />
                  </span>
                  {bullet.text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
