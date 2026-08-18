import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted">
      {children}
    </li>
  );
}

export function TagList({ children }: { children: ReactNode }) {
  return <ul className="flex flex-wrap gap-2">{children}</ul>;
}
