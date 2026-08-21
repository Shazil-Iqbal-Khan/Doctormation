import { ClipboardX, FolderTree, MessagesSquare, PhoneIncoming, Timer } from "lucide-react";
import { Container, Reveal, SectionHeading } from "./primitives";

const problems = [
  {
    icon: MessagesSquare,
    title: "Constant patient messages",
    body: "Staff repeatedly answer the same questions about timings, doctors, fees and departments.",
  },
  {
    icon: Timer,
    title: "Manual appointment management",
    body: "Receptionists spend their day checking availability, booking, rescheduling and confirming.",
  },
  {
    icon: ClipboardX,
    title: "Missed follow-ups",
    body: "Patients slip through the cracks after an appointment because nobody had time to call back.",
  },
  {
    icon: PhoneIncoming,
    title: "Too many repetitive calls",
    body: "Routine requests occupy phone lines that urgent patients actually need.",
  },
  {
    icon: FolderTree,
    title: "Scattered information",
    body: "Conversations, notes and admin work live across phones, notebooks and separate systems.",
  },
];

export function Problem() {
  return (
    <section id="solutions" className="border-y border-border bg-surface/50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The daily reality"
          title="Healthcare teams spend too much time on repetitive tasks"
          description="Before automation, most patient interaction is manual — and it compounds every single day."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, i) => (
            <Reveal
              as="li"
              key={problem.title}
              delay={i * 70}
              className="group rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-muted text-muted-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <problem.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{problem.body}</p>
            </Reveal>
          ))}

          <Reveal
            as="li"
            delay={350}
            className="grid place-items-center rounded-3xl border border-dashed border-primary/30 bg-card/40 p-6 text-center"
          >
            <div>
              <p className="font-display text-xl leading-snug font-semibold">
                What if these tasks could happen automatically?
              </p>
              <p className="mt-2 text-sm text-muted-foreground">That is exactly what Medrelay does.</p>
            </div>
          </Reveal>
        </ul>
      </Container>
    </section>
  );
}
