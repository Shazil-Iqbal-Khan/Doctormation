import { cn } from "@/lib/utils";
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
    <section id="problem" className="border-y border-border bg-surface/50 py-16 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The daily reality"
          title="Healthcare teams spend too much time on repetitive tasks"
          description="Before automation, most patient interaction is manual — and it compounds every single day."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {problems.map((problem, i) => (
            <Reveal
              as="li"
              key={problem.title}
              delay={i * 70}
              className={cn(
                "group rounded-[1.9rem] glass-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card",
                i === 0 ? "lg:col-span-3 lg:row-span-2 lg:flex lg:flex-col lg:justify-center" : "lg:col-span-3",
              )}
            >
              <span className="grid size-11 place-items-center rounded-2xl surface-glass text-primary transition-transform duration-500 group-hover:scale-105">
                <problem.icon className="size-5" strokeWidth={1.6} />
              </span>
              <h3 className={cn("mt-5 font-semibold", i === 0 ? "text-xl sm:text-2xl" : "text-lg")}>
                {problem.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{problem.body}</p>
            </Reveal>
          ))}

          <Reveal
            as="li"
            delay={350}
            className="grid place-items-center rounded-[1.9rem] surface-accent p-8 text-center lg:col-span-3"
          >
            <div>
              <p className="font-display text-2xl leading-snug font-semibold">
                What if these tasks could happen automatically?
              </p>
              <p className="mt-2.5 text-sm opacity-80">That is exactly what Medrelay does.</p>
            </div>
          </Reveal>
        </ul>
      </Container>
    </section>
  );
}
