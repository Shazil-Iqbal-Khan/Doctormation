import { Building2, KeyRound, Lock, ScrollText, ServerCog, Stethoscope } from "lucide-react";
import { Container, Reveal, SectionHeading } from "./primitives";

const pillars = [
  { icon: Lock, title: "Encrypted end to end", body: "Patient data is encrypted in transit and at rest across every workflow." },
  { icon: KeyRound, title: "Role-based access", body: "Staff only see the conversations and records their role permits." },
  { icon: ScrollText, title: "Full audit trail", body: "Every automated action is logged with time, channel and outcome." },
  { icon: ServerCog, title: "Deployed to your setup", body: "Cloud or on-premise deployment aligned with your IT policy." },
  { icon: Stethoscope, title: "No medical advice", body: "The assistant never diagnoses or prescribes — clinical scope stays human." },
  { icon: Building2, title: "Built for institutions", body: "Multi-department, multi-doctor and multi-branch configurations." },
];

const testimonials = [
  {
    quote:
      "Our front desk used to lose half the day to phone calls about timings and reports. Now those never reach a human, and bookings still go up.",
    name: "Dr. Ayesha Rahman",
    role: "Medical Director, 180-bed multispecialty hospital",
  },
  {
    quote:
      "The reminders alone changed our economics. No-shows dropped sharply within the first month and clinics run on schedule.",
    name: "Faisal Khan",
    role: "Operations Head, diagnostic clinic network",
  },
  {
    quote:
      "Patients message on WhatsApp at midnight and get a real answer. That confidence is the biggest difference we've seen.",
    name: "Dr. Hassan Ali",
    role: "Consultant Cardiologist",
  },
];

export function Trust() {
  return (
    <section id="solutions" className="border-y border-border bg-surface/50 py-16 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Trust & security"
          title="Built for the standards healthcare demands"
          description="Patient trust is the product. Security, privacy and clinical boundaries are designed in from the start."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={(i % 3) * 80}
              className="rounded-[1.9rem] glass-card p-6 transition-transform duration-500 hover:-translate-y-1"
            >
              <span className="grid size-10 place-items-center rounded-2xl surface-glass text-primary">
                <pillar.icon className="size-4.5" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal
              as="article"
              key={item.name}
              delay={i * 90}
              className="flex flex-col justify-between rounded-[1.9rem] glass-card p-6"
            >
              <p className="text-[15px] leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
