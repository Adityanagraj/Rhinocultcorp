"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";

type Slide = {
  src: string;
  alt: string;
  caption: string;
};

const slides: Slide[] = [
  {
    src: "/hero/hero-slide-drinkware.jpg",
    alt: "Premium branded drinkware — tumblers, bottles and mugs ready for your logo",
    caption: "Premium drinkware",
  },
  {
    src: "/hero/hero-slide-onboarding.jpg",
    alt: "Curated corporate onboarding welcome kit with tote, notebook and tech essentials",
    caption: "Onboarding kits",
  },
  {
    src: "/hero/hero-slide-tech.jpg",
    alt: "Branded tech essentials — wireless charger, earbuds, speaker and power bank",
    caption: "Tech essentials",
  },
  {
    src: "/hero/hero-slide-festival.jpg",
    alt: "Festival and special-occasion corporate gift hamper with gourmet treats",
    caption: "Festival gifting",
  },
  {
    src: "/hero/hero-slide-sustainable.jpg",
    alt: "Sustainable corporate gifts — bamboo tumbler, eco tote and plantable stationery",
    caption: "Sustainable gifts",
  },
];

const AUTO_MS = 4500;

/**
 * Auto-advancing hero carousel. Works on mobile and desktop with the same
 * 16:9 frames (taller crop on small screens via object-cover). Pauses on
 * hover/focus and respects prefers-reduced-motion.
 */
export default function HeroCarousel() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, []);

  const goTo = useCallback((i: number) => setIndex(i), []);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [go, paused, reduceMotion]);

  return (
    <div
      className="reveal-rise mx-auto max-w-5xl"
      style={{ animationDelay: "0ms" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-1.5 shadow-[0_50px_90px_-55px_rgba(23,21,15,0.5)] sm:rounded-[1.75rem] sm:p-2">
        <div
          className="relative aspect-[4/5] w-full overflow-hidden rounded-xl sm:aspect-[16/9] sm:rounded-[1.4rem]"
          aria-roledescription="carousel"
          aria-label="Corporate gifting highlights"
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                i === index ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1024px"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/55 to-transparent"
              />
              <p className="absolute bottom-4 left-4 rounded-full bg-bg/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur sm:bottom-5 sm:left-5 sm:text-sm">
                {slide.caption}
              </p>
            </div>
          ))}

          {/* Prev / next */}
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-ink/45 text-white backdrop-blur transition hover:bg-ink/65 sm:left-3 sm:h-10 sm:w-10"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-ink/45 text-white backdrop-blur transition hover:bg-ink/65 sm:right-3 sm:h-10 sm:w-10"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 py-3 sm:py-3.5">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Go to slide ${i + 1}: ${slide.caption}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-accent" : "w-2 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
