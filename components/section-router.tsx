"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

import { SECTION_IDS, TOP_ID, type SectionId } from "@/content/sections";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollToSection(id: string, behavior: ScrollBehavior) {
  const target =
    id === TOP_ID ? document.getElementById(TOP_ID) : document.getElementById(id);
  if (!target) return;

  if (id === TOP_ID) {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  target.scrollIntoView({ behavior, block: "start" });
}

/**
 * Keeps the address bar and the scroll position in sync without ever handing a
 * navigation to the router: the whole site is one document, so section changes
 * are `history` updates only. Route entry, back/forward and scrolling are all
 * handled here.
 */
export function SectionRouter({ section }: { section?: SectionId }) {
  const locale = useLocale();

  // Direct entry on a section route lands at the top; jump to the section.
  useEffect(() => {
    if (!section) return;
    // Wait a frame so images and fonts have laid out before measuring.
    const frame = requestAnimationFrame(() => scrollToSection(section, "auto"));
    return () => cancelAnimationFrame(frame);
  }, [section]);

  // Scroll spy — rewrites the path to whichever section holds the reading line.
  useEffect(() => {
    const elements = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }

        const active = SECTION_IDS.find((id) => visible.has(id));
        const path = active ? `/${locale}/${active}` : `/${locale}`;

        if (window.location.pathname !== path) {
          window.history.replaceState(null, "", path);
        }
      },
      // A band across the middle of the viewport, so one section is active.
      { rootMargin: "-45% 0px -50% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [locale]);

  // Back/forward should move the page, not just the URL.
  useEffect(() => {
    const onPopState = () => {
      const [, , segment] = window.location.pathname.split("/");
      scrollToSection(
        segment || TOP_ID,
        prefersReducedMotion() ? "auto" : "smooth",
      );
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return null;
}

/**
 * Anchor props for a section: a real `href` so the link can be copied, opened
 * in a new tab and crawled, upgraded on plain clicks to an in-document scroll
 * that records the section as a route.
 */
export function useSectionLink(id: string, onNavigate?: () => void) {
  const locale = useLocale();
  const href = id === TOP_ID ? `/${locale}` : `/${locale}/${id}`;

  return {
    href,
    onClick(event: React.MouseEvent<HTMLAnchorElement>) {
      // Leave modified clicks to the browser.
      if (
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      ) {
        return;
      }

      event.preventDefault();
      onNavigate?.();
      window.history.pushState(null, "", href);
      scrollToSection(id, prefersReducedMotion() ? "auto" : "smooth");
    },
  };
}
