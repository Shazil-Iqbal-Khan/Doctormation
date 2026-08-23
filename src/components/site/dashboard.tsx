import { Activity, BarChart3, Clock, Users } from "lucide-react";
import { CommandCenter } from "./command-center";
import { Container, Reveal, SectionHeading } from "./primitives";

const stats = [
  { icon: Users, label: "Conversations handled", value: "12,480", note: "last 30 days" },
  { icon: Clock, label: "Staff hours saved", value: "640 hrs", note: "per month" },
  { icon: Activity, label: "Requests automated", value: "82%", note: "without staff" },
  { icon: BarChart3, label: "No-show reduction", value: "-38%", note: "after reminders" },
];

export function DashboardShowcase() {
  return (
    <section id="product" className="relative overflow-hidden py-16 sm:py-28">
      <div className="pointer-events-none absolute inset-0 surface-hero opacity-60" aria-hidden />
      <Container className="relative">
        <SectionHeading
          eyebrow="Hospital command center"
          title="One dashboard for every automated patient conversation"
          description="Your team sees every message, booking and follow-up in real time — with full control to step in whenever a case needs a human."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="grid gap-3 sm:grid-cols-2">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 80}
                className="rounded-3xl border border-border bg-card p-5 shadow-soft"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-muted text-primary">
                  <stat.icon className="size-4.5" />
                </span>
                <p className="mt-4 font-display text-2xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                <p className="mt-3 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                  {stat.note}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <CommandCenter />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
