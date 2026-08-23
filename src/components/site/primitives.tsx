import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-4 text-[1.75rem] leading-[1.12] font-semibold sm:mt-5 sm:text-4xl lg:text-[2.9rem]">{title}</h2>
      {description ? (
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)}>{children}</div>;
}

const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-ink-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-card",
        accent: "surface-accent shadow-soft hover:-translate-y-0.5 hover:shadow-card",
        outline:
          "border border-border bg-card/60 text-foreground hover:border-foreground/25 hover:bg-card",
        ghostLight:
          "border border-ink-foreground/25 text-ink-foreground hover:bg-ink-foreground/10",
      },
      size: {
        md: "h-11 px-5",
        lg: "h-13 px-7 text-[0.95rem]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Cta({
  className,
  variant,
  size,
  href = "#demo",
  children,
}: VariantProps<typeof ctaVariants> & { className?: string; href?: string; children: ReactNode }) {
  return (
    <a href={href} className={cn(ctaVariants({ variant, size }), className)}>
      {children}
    </a>
  );
}
