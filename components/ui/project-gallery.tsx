"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import { PROJECT_IMAGE } from "@/content/projects";

export interface GallerySlide {
  src: string;
  title: string;
}

interface ProjectGalleryProps {
  slides: GallerySlide[];
  /** Accessible label prefix for each thumbnail trigger. */
  openLabel: string;
}

const CLOSED = -1;

export function ProjectGallery({ slides, openLabel }: ProjectGalleryProps) {
  const [index, setIndex] = useState(CLOSED);

  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2">
        {slides.map((slide, position) => (
          <li key={slide.src}>
            <button
              type="button"
              onClick={() => setIndex(position)}
              aria-label={`${openLabel}: ${slide.title}`}
              className="group block w-full overflow-hidden rounded-xl border border-border bg-background text-start transition-colors hover:border-accent"
            >
              <span className="relative block aspect-[1366/768] overflow-hidden">
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </span>
              <span className="block px-4 py-3 text-sm text-muted transition-colors group-hover:text-foreground">
                {slide.title}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox
        open={index !== CLOSED}
        index={Math.max(index, 0)}
        close={() => setIndex(CLOSED)}
        slides={slides.map((slide) => ({
          src: slide.src,
          title: slide.title,
          width: PROJECT_IMAGE.width,
          height: PROJECT_IMAGE.height,
        }))}
        plugins={[Captions, Zoom]}
        controller={{ closeOnBackdropClick: true }}
        styles={{ container: { backdropFilter: "blur(4px)" } }}
      />
    </>
  );
}
