import { HeartPulse, ShieldCheck, UserCog } from "lucide-react";
import { Container, Reveal, SectionHeading } from "./primitives";

const points = [
  {
    icon: UserCog,
    title: "AI handles the repetition",
    body: "Timings, bookings, reminders, report statuses and routine questions — the work that fills your staff's day.",
  },
  {
    icon: HeartPulse,
    title: "Your team handles the care",
    body: "Clinical judgement, sensitive conversations and complex cases always stay with qualified humans.",
  },
  {
    icon: ShieldCheck,
    title: "Clear boundaries by design",
    body: "The AI never gives medical advice or diagnoses. You define exactly what it is allowed to do.",
  },
];

export function HumanAi() {
  return (
    <section className="relative overflow-hidden border-y border-border py-20 sm:py-28">
      <div className="absolute inset-0 surface-ink" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] grid-lines [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]"
        aria-hidden
      />
      <Container className="relative text-ink-foreground">
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="Human + AI"
            title={
              <>
                AI does not replace your staff.
                <br />
                It removes the work that drains them.
              </>
            }
            className="[&_h2]:text-ink-foreground [&_p]:text-ink-foreground/70 [&_span]:border-ink-foreground/20 [&_span]:bg-ink-foreground/8 [&_span]:text-ink-foreground/70"
          />
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {points.map((point, i) => (
            <Reveal
              key={point.title}
              delay={i * 90}
              className="rounded-3xl border border-ink-foreground/12 bg-ink-foreground/6 p-6 backdrop-blur-sm"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-ink-foreground/12">
                <point.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink-foreground">{point.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-foreground/70">{point.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
