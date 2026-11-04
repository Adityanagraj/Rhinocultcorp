import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, site } from "@/config/site";
import HeroCarousel from "@/components/HeroCarousel";

const stats = [
  { value: "2000+", label: "Products delivered" },
  { value: "500+", label: "Brands trust us" },
  { value: "1hr", label: "Quote turnaround" },
];

/**
 * Hero with an auto-advancing product carousel (mobile + desktop) and CSS
 * entrance animations for the copy block so content stays visible without JS.
 */
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-10 pb-20 sm:pt-14 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_15%_0%,rgba(187,77,52,0.06),transparent_60%),radial-gradient(50%_40%_at_100%_20%,rgba(23,22,20,0.05),transparent_55%)]"
      />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <HeroCarousel />

        <div className="mx-auto mt-12 max-w-3xl text-center sm:mt-14">
          <span
            className="reveal-rise inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-muted"
            style={{ animationDelay: "0ms" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Corporate Gifting Solutions
          </span>

          <h1
            className="reveal-rise font-display mt-6 text-[2.1rem] font-semibold leading-[1.06] tracking-tight text-ink sm:text-5xl md:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            Because every gift tells a,{" "}
            <span className="emphasis text-accent">story</span>.
          </h1>

          <p
            className="reveal-rise mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {site.description}
          </p>

          <div
            className="reveal-rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/35 hover:bg-ink/[0.04] sm:w-auto"
            >
              <MessageCircle size={16} className="text-[#1f9d55]" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <dl className="reveal-rise mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-line pt-8 text-center sm:gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs text-muted sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
