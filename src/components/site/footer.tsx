import { Mail, Stethoscope } from "lucide-react";
import { Container } from "./primitives";

const groups = [
  {
    title: "Product",
    links: [
      { label: "Command center", href: "#product" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Trust & security", href: "#solutions" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Hospitals", href: "#solutions" },
      { label: "Clinics", href: "#solutions" },
      { label: "Individual doctors", href: "#solutions" },
      { label: "Diagnostic centers", href: "#solutions" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="about" className="border-t border-border bg-card">
      <Container className="grid grid-cols-2 gap-8 py-12 sm:gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:py-14">
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl surface-ink">
              <Stethoscope className="size-4.5" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Medrelay<span className="text-primary">.</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            AI automation systems for hospitals, clinics and doctors — built to reduce administrative load and give
            patients faster, more reliable care experiences.
          </p>
        </div>

        {groups.map((group) => (
          <div key={group.title}>
            <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">{group.title}</p>
            <ul className="mt-4 space-y-2.5">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">Contact</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href="mailto:hello@medrelay.ai"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-3.5" /> hello@medrelay.ai
              </a>
            </li>
            <li>
              <a href="#demo" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Book a demo
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} Medrelay. All rights reserved.
        </p>
        <p className="font-mono text-[11px] text-muted-foreground">
          Medrelay does not provide medical advice or diagnosis.
        </p>
      </Container>
    </footer>
  );
}
