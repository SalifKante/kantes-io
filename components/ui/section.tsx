import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: ReactNode;
  /** `surface` tints the band, used to separate adjacent sections. */
  variant?: "default" | "surface";
}

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={
        variant === "surface"
          ? "border-y border-border bg-surface"
          : undefined
      }
    >
      <div className="container-page py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-balance sm:text-4xl">
            {title}
          </h2>
          {lead ? (
            <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
              {lead}
            </p>
          ) : null}
        </div>
        <div className="mt-12 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
