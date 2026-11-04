"use client";

import { useEffect, useRef, useState } from "react";
import { FolderOpen, Sparkles } from "lucide-react";
import { useReducedMotion } from "framer-motion";

const ALL_CATALOGUES_URL =
  "https://drive.google.com/drive/folders/1REUU7Z7mFoFX3-HHIpYMXpVsQBM8ksEf";

/** Decorative sparkle dots positioned around the button. */
const SPARKS = [
  { top: "8%", left: "6%", delay: "0s", size: 6 },
  { top: "18%", left: "92%", delay: "0.35s", size: 5 },
  { top: "72%", left: "4%", delay: "0.7s", size: 5 },
  { top: "78%", left: "90%", delay: "0.15s", size: 7 },
  { top: "-6%", left: "48%", delay: "0.5s", size: 6 },
  { top: "102%", left: "52%", delay: "0.9s", size: 5 },
  { top: "40%", left: "-4%", delay: "1.1s", size: 4 },
  { top: "48%", left: "102%", delay: "0.25s", size: 4 },
] as const;

/**
 * Large "View all catalogues" CTA. When the user scrolls near it, sparkle
 * particles and a soft glow activate (disabled under prefers-reduced-motion).
 */
export default function ViewAllCataloguesButton() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setNear(entry.isIntersecting);
      },
      // Fire a bit before the button fully enters the viewport so the sparkle
      // feels like a "landing near it" moment on both mobile and desktop.
      { rootMargin: "0px 0px -12% 0px", threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <div ref={ref} className="relative mt-12 flex justify-center px-2 sm:mt-14">
      {/* Soft radial glow behind the button when near */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-28 w-[min(100%,28rem)] -translate-y-1/2 rounded-full bg-accent/25 blur-3xl transition-opacity duration-700 ${
          near ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Orbiting sparkle dots */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
          near ? "opacity-100" : "opacity-0"
        }`}
      >
        {SPARKS.map((s, i) => (
          <span
            key={i}
            className="catalogue-spark absolute rounded-full bg-accent"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
            }}
          />
        ))}
      </div>

      <a
        href={ALL_CATALOGUES_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative inline-flex w-full max-w-md items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-base font-semibold text-bg shadow-[0_18px_40px_-22px_rgba(23,22,20,0.55)] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 sm:w-auto sm:px-12 sm:py-5 sm:text-lg ${
          near
            ? "catalogue-cta-pulse scale-[1.03] shadow-[0_22px_50px_-18px_rgba(187,77,52,0.55)] ring-2 ring-accent/40"
            : "hover:-translate-y-0.5 hover:bg-ink-soft"
        }`}
      >
        <span
          className={`grid h-9 w-9 place-items-center rounded-full bg-bg/15 transition-transform duration-500 sm:h-10 sm:w-10 ${
            near ? "scale-110" : "group-hover:scale-105"
          }`}
        >
          {near && !reduceMotion ? (
            <Sparkles size={20} className="text-accent" />
          ) : (
            <FolderOpen size={20} />
          )}
        </span>
        View all catalogues
        {near && !reduceMotion ? (
          <Sparkles
            size={18}
            className="catalogue-spark-icon text-accent"
            aria-hidden
          />
        ) : null}
      </a>
    </div>
  );
}
