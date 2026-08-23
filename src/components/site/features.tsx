import {
  BellRing,
  CalendarCheck,
  FileText,
  MessageCircle,
  PhoneCall,
  Sparkles,
  Star,
  UserCog,
} from "lucide-react";
import { Container, Reveal, SectionHeading } from "./primitives";

const features = [
  {
    icon: Sparkles,
    title: "AI Patient Assistant",
    body: "Answers routine patient questions 24/7 with your hospital's own information.",
    visual: (
      <div className="space-y-2">
        <div className="w-4/5 rounded-xl rounded-bl-sm bg-muted px-3 py-2 text-[11px]">
          What are Dr. Ahmed&apos;s OPD timings?
        </div>
        <div className="ml-auto w-4/5 rounded-xl rounded-br-sm bg-accent px-3 py-2 text-[11px] text-accent-foreground">
          Mon–Fri, 9:00 AM to 1:00 PM, Cardiology, 2nd floor.
        </div>
      </div>
    ),
  },
  {
    icon: CalendarCheck,
    title: "Smart Appointment Automation",
    body: "Books, reschedules and cancels appointments against real availability.",
    visual: (
      <div className="space-y-2">
        {[
          { t: "3:00 PM", s: "Available" },
          { t: "4:15 PM", s: "Full" },
          { t: "5:30 PM", s: "Booked" },
        ].map((r) => (
          <div
            key={r.t}
            className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-xl border border-border bg-card px-3 py-2"
          >
            <span className="font-mono text-[10px] text-muted-foreground">{r.t}</span>
            <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 font-mono text-[9px] text-muted-foreground">
              {r.s}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    body: "Patients communicate with your hospital on the channel they already use.",
    visual: (
      <div className="grid grid-cols-3 gap-2">
        {["Booking", "Reports", "Timings"].map((c) => (
          <div key={c} className="rounded-xl bg-muted px-2 py-3 text-center text-[10px] text-muted-foreground">
            {c}
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: PhoneCall,
    title: "AI Voice Calls",
    body: "Automated voice calls for reminders, confirmations and follow-up workflows.",
    visual: (
      <div className="flex items-end gap-1">
        {[8, 16, 26, 14, 30, 20, 34, 18, 24, 12, 28, 16].map((h, i) => (
          <span key={i} className="w-2 rounded-full bg-primary/40" style={{ height: h }} />
        ))}
      </div>
    ),
  },
  {
    icon: BellRing,
    title: "Patient Follow-ups",
    body: "Automatically check in with patients after appointments and procedures.",
    visual: (
      <div className="space-y-2">
        {["Day 1 · Recovery check", "Day 3 · Medication reminder", "Day 7 · Review visit"].map((r) => (
          <div key={r} className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <span className="size-1.5 shrink-0 rounded-full bg-signal" />
            <span className="truncate">{r}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: FileText,
    title: "Reports & Requests",
    body: "Handles report-status checks and common information requests without staff.",
    visual: (
      <div className="rounded-xl border border-border bg-card p-3">
        <p className="text-[11px] font-medium">CBC Panel — Ready</p>
        <p className="mt-1 font-mono text-[10px] text-muted-foreground">Shared with patient · 11:42 AM</p>
      </div>
    ),
  },
  {
    icon: Star,
    title: "Feedback Automation",
    body: "Collects patient feedback and review requests right after the visit.",
    visual: (
      <div className="flex items-center gap-1.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} className="size-4 fill-chart-4 text-chart-4" />
        ))}
        <span className="ml-2 font-mono text-[10px] text-muted-foreground">4.8 avg</span>
      </div>
    ),
  },
  {
    icon: UserCog,
    title: "Human Escalation",
    body: "When a case needs a person, the conversation is routed to the right staff member.",
    visual: (
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 rounded-xl border border-destructive/25 bg-destructive/5 px-3 py-2.5">
        <span className="truncate text-[11px]">Insurance dispute — Usman S.</span>
        <span className="shrink-0 font-mono text-[9px] text-destructive">FRONT DESK</span>
      </div>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="border-y border-border bg-surface/50 py-16 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Automation capabilities"
          title="Everything your front desk repeats, handled automatically"
          description="Each capability is configurable per department, doctor and workflow — you decide what the AI is allowed to do."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal
              as="li"
              key={feature.title}
              delay={(i % 4) * 80}
              className="group flex flex-col rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-muted text-primary transition-colors group-hover:bg-accent">
                <feature.icon className="size-4.5" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
              <div className="mt-5 grid min-h-[104px] items-end rounded-2xl bg-surface/70 p-3">
                {feature.visual}
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
