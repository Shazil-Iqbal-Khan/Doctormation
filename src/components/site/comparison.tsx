import { Check, X } from "lucide-react";
import { Container, Reveal, SectionHeading } from "./primitives";

const rows = [
  { label: "Response time", manual: "Minutes to hours, only in office hours", ai: "Seconds, 24/7" },
  { label: "Missed calls & messages", manual: "Common during peak OPD hours", ai: "Nothing goes unanswered" },
  { label: "Appointment booking", manual: "Manual entry, double-bookings", ai: "Checked against live availability" },
  { label: "Follow-ups & reminders", manual: "Often skipped when staff are busy", ai: "Sent automatically, every time" },
  { label: "Scaling patient volume", manual: "Requires hiring more staff", ai: "Handles spikes without extra cost" },
  { label: "Record of conversations", manual: "Scattered notes and phone logs", ai: "Fully logged and searchable" },
];

export function Comparison() {
  return (
    <section className="py-16 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Before and after"
          title="Traditional front desk vs. automated workflows"
          description="Nothing is taken away from your team — the repetitive load is."
        />

        <Reveal className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
          <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-[1.1fr_1fr_1fr] sm:divide-x sm:divide-y-0">
            <div className="hidden px-6 py-4 font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase sm:block">
              Workflow
            </div>
            <div className="hidden bg-surface/50 px-6 py-4 font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase sm:block">
              Manual today
            </div>
            <div className="hidden surface-ink px-6 py-4 font-mono text-[10px] tracking-[0.16em] uppercase sm:block">
              With Medrelay
            </div>
          </div>
          <ul className="divide-y divide-border">
            {rows.map((row) => (
              <li
                key={row.label}
                className="grid gap-3 p-5 sm:grid-cols-[1.1fr_1fr_1fr] sm:items-center sm:gap-6 sm:p-6"
              >
                <p className="text-sm font-semibold">{row.label}</p>
                <div className="min-w-0">
                  <p className="mb-1 font-mono text-[9px] tracking-[0.16em] text-muted-foreground uppercase sm:hidden">
                    Manual today
                  </p>
                  <p className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-destructive/10 text-destructive">
                      <X className="size-3" />
                    </span>
                    {row.manual}
                  </p>
                </div>
                <div className="min-w-0">
                  <p className="mb-1 font-mono text-[9px] tracking-[0.16em] text-primary uppercase sm:hidden">
                    With Medrelay
                  </p>
                  <p className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                      <Check className="size-3" />
                    </span>
                    {row.ai}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
