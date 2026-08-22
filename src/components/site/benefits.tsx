import { Container, Reveal, SectionHeading } from "./primitives";
import { useCountUp } from "@/hooks/use-reveal";

const metrics = [
  { value: 82, suffix: "%", label: "of routine requests resolved without staff" },
  { value: 3.2, suffix: "s", label: "average first response time", decimals: 1 },
  { value: 38, suffix: "%", label: "fewer appointment no-shows" },
  { value: 24, suffix: "/7", label: "patient availability, every day" },
];

const benefits = [
  "Fewer missed calls, messages and walk-in queues",
  "Lower administrative cost per patient handled",
  "Faster bookings and shorter waiting times",
  "Higher patient satisfaction and repeat visits",
  "Consistent follow-up after every appointment",
  "Full visibility into demand across departments",
];

function Metric({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <p className="font-display text-4xl font-semibold sm:text-5xl">
      <span ref={ref}>{animated.toFixed(decimals)}</span>
      <span className="text-primary">{suffix}</span>
    </p>
  );
}

export function Benefits() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Outcomes"
          title="What hospitals actually gain"
          description="Automation pays for itself in staff hours, retained patients and fewer empty appointment slots."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal
              key={metric.label}
              delay={i * 80}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft"
            >
              <Metric value={metric.value} suffix={metric.suffix} decimals={metric.decimals} />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{metric.label}</p>
            </Reveal>
          ))}
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <Reveal
              as="li"
              key={benefit}
              delay={(i % 3) * 70}
              className="rounded-2xl border border-border bg-surface/60 px-5 py-4 text-sm text-muted-foreground"
            >
              {benefit}
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
