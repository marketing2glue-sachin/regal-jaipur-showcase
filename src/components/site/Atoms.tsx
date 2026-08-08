import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal, RevealText } from "./Reveal";

const base =
  "group relative inline-flex items-center justify-center gap-3 overflow-hidden px-9 py-4 text-[0.7rem] uppercase tracking-[0.3em] transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]";

const variants = {
  gold: "border border-primary/70 text-primary hover:text-primary-foreground",
  ivory: "border border-foreground/25 text-foreground hover:text-primary-foreground",
  ghost: "text-primary/80 hover:text-primary",
} as const;

type LuxAction = {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

function Fill({ variant }: { variant: keyof typeof variants }) {
  if (variant === "ghost") return null;
  return (
    <span
      aria-hidden
      className={cn(
        "absolute inset-0 origin-bottom scale-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100",
        variant === "gold" ? "bg-primary" : "bg-foreground",
      )}
    />
  );
}

export function LuxLink({
  to,
  children,
  variant = "gold",
  className,
}: LuxAction & { to: string }) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      <Fill variant={variant} />
      <span className="relative z-10">{children}</span>
    </Link>
  );
}

export function LuxAnchor({
  href,
  children,
  variant = "gold",
  className,
}: LuxAction & { href: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className={cn(base, variants[variant], className)}
    >
      <Fill variant={variant} />
      <span className="relative z-10">{children}</span>
    </a>
  );
}

export function LuxButton({
  children,
  variant = "gold",
  className,
  type = "submit",
}: LuxAction & { type?: "submit" | "button" }) {
  return (
    <button type={type} className={cn(base, variants[variant], className)}>
      <Fill variant={variant} />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

export function Diamond({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("inline-block h-1.5 w-1.5 rotate-45 bg-primary/80", className)}
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal className="eyebrow block">
          <span className="inline-flex items-center gap-3">
            <Diamond className="h-1 w-1" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <h2 className="display mt-6 text-4xl text-balance sm:text-5xl lg:text-6xl">
        <RevealText text={title} />
      </h2>
      {intro ? (
        <Reveal delay={200}>
          <p className="mt-7 text-base leading-relaxed font-light text-muted-foreground text-pretty">
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Ornament({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)} aria-hidden>
      <span className="rule-gold max-w-[120px] flex-1" />
      <Diamond />
      <span className="rule-gold max-w-[120px] flex-1" />
    </div>
  );
}

export function CtaRow({
  primaryLabel,
  primaryHref,
  whatsappHref,
  whatsappLabel = "Chat on WhatsApp",
  className,
}: {
  primaryLabel: string;
  primaryHref: string;
  whatsappHref: string;
  whatsappLabel?: string;
  className?: string;
}) {
  const isRoute = primaryHref.startsWith("/");
  return (
    <Reveal
      className={cn("flex flex-wrap items-center justify-center gap-5", className)}
      delay={150}
    >
      {isRoute ? (
        <LuxLink to={primaryHref}>{primaryLabel}</LuxLink>
      ) : (
        <LuxAnchor href={primaryHref}>{primaryLabel}</LuxAnchor>
      )}
      <LuxAnchor href={whatsappHref} variant="ivory">
        {whatsappLabel}
      </LuxAnchor>
    </Reveal>
  );
}
