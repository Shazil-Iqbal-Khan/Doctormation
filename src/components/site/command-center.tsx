import {
  Activity,
  ArrowUpRight,
  BellRing,
  CalendarDays,
  CheckCircle2,
  MessageSquare,
  PhoneCall,
  ShieldAlert,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useCountUp } from "@/hooks/use-reveal";

const stats = [
  { label: "Patient conversations", value: 4820, suffix: "", delta: "+12.4%", icon: MessageSquare },
  { label: "Appointments booked", value: 1236, suffix: "", delta: "+8.1%", icon: CalendarDays },
  { label: "Handled by automation", value: 87, suffix: "%", delta: "+5.6%", icon: Sparkles },
  { label: "Escalated to staff", value: 42, suffix: "", delta: "-3.2%", icon: ShieldAlert },
];

const activity = [
  {
    name: "Ayesha Khan",
    action: "Appointment booked — Dr. Ahmed Raza, Cardiology",
    time: "2 min ago",
    channel: "WhatsApp",
    state: "Automated",
  },
  {
    name: "Bilal Farooq",
    action: "Lab report status shared — CBC panel ready",
    time: "9 min ago",
    channel: "WhatsApp",
    state: "Automated",
  },
  {
    name: "Hina Malik",
    action: "Post-visit follow-up call completed",
    time: "17 min ago",
    channel: "AI Voice",
    state: "Automated",
  },
  {
    name: "Usman Sheikh",
    action: "Insurance query — routed to front desk",
    time: "24 min ago",
    channel: "WhatsApp",
    state: "Escalated",
  },
  {
    name: "Sara Iqbal",
    action: "Feedback collected — 5/5 after visit",
    time: "38 min ago",
    channel: "WhatsApp",
    state: "Automated",
  },
];

const schedule = [
  { time: "09:00", doctor: "Dr. Ahmed Raza", dept: "Cardiology", filled: 7, total: 8 },
  { time: "11:30", doctor: "Dr. Naila Yousuf", dept: "Dermatology", filled: 5, total: 6 },
  { time: "14:00", doctor: "Dr. Kamran Ali", dept: "Orthopedics", filled: 8, total: 8 },
  { time: "16:30", doctor: "Dr. Sana Tariq", dept: "Pediatrics", filled: 4, total: 7 },
];

const queue = [
  { label: "Follow-ups pending", value: "36", tone: "default" as const },
  { label: "Reminders queued today", value: "112", tone: "default" as const },
  { label: "Awaiting human reply", value: "5", tone: "alert" as const },
];

function Stat({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
  const { ref, value } = useCountUp(stat.value, 1200 + index * 120);
  const Icon = stat.icon;
  return (
    <div className="rounded-2xl border border-border bg-card p-3.5 sm:p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground">
          <Icon className="size-3.5" />
        </span>
        <span className="font-mono text-[10px] text-muted-foreground">{stat.delta}</span>
      </div>
      <span ref={ref} className="mt-3 block font-display text-xl font-semibold sm:text-2xl">
        {Math.round(value).toLocaleString()}
        {stat.suffix}
      </p>
      <p className="mt-0.5 truncate text-[11px] text-muted-foreground sm:text-xs">{stat.label}</p>
    </div>
  );
}

function Sparkline() {
  const points = [12, 20, 16, 28, 24, 36, 30, 44, 40, 54, 48, 62];
  const d = points
    .map((p, i) => `${(i / (points.length - 1)) * 100},${64 - (p / 70) * 56}`)
    .join(" L ");
  return (
    <svg viewBox="0 0 100 64" preserveAspectRatio="none" className="h-20 w-full">
      <defs>
        <linearGradient id="cc-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-mint)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-mint)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`M ${d} L 100,64 L 0,64 Z`} fill="url(#cc-fill)" />
      <path
        d={`M ${d}`}
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="1.6"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CommandCenter({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border border-border bg-card/80 shadow-float backdrop-blur",
        className,
      )}
    >
      {/* window chrome */}
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border bg-surface/70 px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex shrink-0 gap-1.5">
            <span className="size-2.5 rounded-full bg-destructive/40" />
            <span className="size-2.5 rounded-full bg-chart-4/60" />
            <span className="size-2.5 rounded-full bg-signal/60" />
          </div>
          <span className="grid size-6 shrink-0 place-items-center rounded-md surface-ink">
            <Stethoscope className="size-3.5" />
          </span>
          <p className="truncate font-display text-sm font-semibold">Hospital AI Command Center</p>
        </div>
        <span className="hidden items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 font-mono text-[10px] text-muted-foreground sm:inline-flex">
          <span className="size-1.5 animate-pulse rounded-full bg-signal" /> LIVE
        </span>
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Stat key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        <div className="grid gap-3 lg:grid-cols-[1.35fr_1fr]">
          {/* activity feed */}
          <div className="rounded-2xl border border-border bg-card p-4">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <p className="truncate text-sm font-semibold">Recent patient activity</p>
              <span className="inline-flex shrink-0 items-center gap-1 font-mono text-[10px] text-muted-foreground">
                LAST 60 MIN <ArrowUpRight className="size-3" />
              </span>
            </div>
            <ul className="mt-3 divide-y divide-border">
              {activity.map((item) => (
                <li key={item.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 py-2.5">
                  <div className="min-w-0">
                    <div className="flex min-w-0 items-center gap-2">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-muted font-mono text-[10px] text-muted-foreground">
                        {item.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                      <p className="truncate text-xs font-medium">{item.name}</p>
                      <span className="hidden shrink-0 rounded-full bg-muted px-2 py-0.5 font-mono text-[9px] text-muted-foreground sm:inline">
                        {item.channel}
                      </span>
                    </div>
                    <p className="mt-1 truncate pl-8 text-[11px] text-muted-foreground">{item.action}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[9px]",
                        item.state === "Automated"
                          ? "bg-accent text-accent-foreground"
                          : "bg-destructive/10 text-destructive",
                      )}
                    >
                      {item.state === "Automated" ? (
                        <CheckCircle2 className="size-2.5" />
                      ) : (
                        <BellRing className="size-2.5" />
                      )}
                      {item.state}
                    </span>
                    <p className="mt-1 font-mono text-[9px] text-muted-foreground">{item.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            {/* AI activity */}
            <div className="rounded-2xl border border-border bg-card p-4">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
                <p className="truncate text-sm font-semibold">AI assistant activity</p>
                <Activity className="size-3.5 shrink-0 text-muted-foreground" />
              </div>
              <Sparkline />
              <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                <span>MON</span>
                <span>WED</span>
                <span>FRI</span>
                <span>SUN</span>
              </div>
            </div>

            {/* schedule */}
            <div className="rounded-2xl border border-border bg-card p-4">
              <p className="text-sm font-semibold">Today&apos;s appointment slots</p>
              <ul className="mt-3 space-y-2.5">
                {schedule.map((row) => (
                  <li key={row.time} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
                    <span className="shrink-0 font-mono text-[10px] text-muted-foreground">{row.time}</span>
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-medium">{row.doctor}</p>
                      <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary/70"
                          style={{ width: `${(row.filled / row.total) * 100}%` }}
                        />
                      </div>
                    </div>
                    <span className="shrink-0 font-mono text-[10px] text-muted-foreground">
                      {row.filled}/{row.total}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {queue.map((q) => (
                <div key={q.label} className="rounded-xl border border-border bg-surface/60 p-2.5">
                  <p
                    className={cn(
                      "font-display text-base font-semibold",
                      q.tone === "alert" && "text-destructive",
                    )}
                  >
                    {q.value}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">{q.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border bg-surface/60 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2">
            <PhoneCall className="size-3.5 shrink-0 text-primary" />
            <p className="truncate text-[11px] text-muted-foreground">
              AI voice agent calling 18 patients for tomorrow&apos;s appointment reminders
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-accent px-2.5 py-1 font-mono text-[9px] text-accent-foreground">
            RUNNING
          </span>
        </div>
      </div>
    </div>
  );
}
