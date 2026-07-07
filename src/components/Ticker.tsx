import { Sparkles } from "lucide-react";

const phrases = [
  "Successfully shipped 500+ corporate orders PAN India",
  "Trusted by 50+ brands for premium gifting",
  "On-time delivery, every time",
];

/**
 * Full-bleed accent ticker with continuously scrolling copy. Reuses the shared
 * `.animate-marquee` utility (see globals.css); the item list is duplicated so
 * the -50% keyframe shift loops seamlessly. Motion is disabled automatically
 * under `prefers-reduced-motion`.
 */
export default function Ticker() {
  const track = [...phrases, ...phrases];

  return (
    <section
      aria-label="Company highlights"
      className="overflow-hidden border-y border-accent-strong/30 bg-accent text-white"
    >
      <div className="group relative flex overflow-hidden py-3 sm:py-3.5">
        <ul className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
          {track.map((phrase, i) => (
            <li
              key={`${phrase}-${i}`}
              aria-hidden={i >= phrases.length}
              className="flex shrink-0 items-center gap-3 px-6 sm:gap-4 sm:px-8"
            >
              <Sparkles size={15} className="shrink-0 text-white/70" aria-hidden />
              <span className="whitespace-nowrap text-sm font-medium tracking-wide sm:text-[0.95rem]">
                {phrase}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
