"use client";

import type { ReactNode } from "react";

import { useSectionLink } from "@/components/section-router";

interface SectionLinkProps {
  section: string;
  className?: string;
  children: ReactNode;
}

export function SectionLink({ section, className, children }: SectionLinkProps) {
  const props = useSectionLink(section);

  return (
    <a {...props} className={className}>
      {children}
    </a>
  );
}
