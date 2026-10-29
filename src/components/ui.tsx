import type { ReactNode } from "react";

export function Section({
  id,
  label,
  title,
  intro,
  children,
}: {
  id: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-14 sm:py-20">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">{label}</p>
          <h2 id={`${id}-title`} className="mt-2 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
        </div>
        {intro && <p className="max-w-sm text-muted sm:text-right">{intro}</p>}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function Chip({ children, small = false }: { children: ReactNode; small?: boolean }) {
  return (
    <li
      className={`rounded-md border border-border bg-surface text-muted ${small ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-sm"}`}
    >
      {children}
    </li>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50 ${className}`}>
      {children}
    </div>
  );
}

const linkStyles = {
  primary: "bg-accent text-accent-fg shadow-lg shadow-accent/25 hover:-translate-y-0.5",
  secondary: "border border-border bg-surface text-fg hover:border-accent hover:-translate-y-0.5",
};

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof linkStyles;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${linkStyles[variant]}`}
    >
      {children}
    </a>
  );
}
