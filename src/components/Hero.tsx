import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, site } from "@/config/site";

const stats = [
  { value: "500+", label: "Products to brand" },
  { value: "50+", label: "Brands trust us" },
  { value: "48h", label: "Quote turnaround" },
];

/**
 * Hero uses CSS keyframe entrance (see `.reveal-rise` in globals.css) rather than
 * JS-driven motion, so all content is always rendered visible in SSR and never
 * depends on hydration to appear. The product banner is featured full-width so it
 * reads well on both desktop and mobile.
 */
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-10 pb-20 sm:pt-14 sm:pb-24">
      {/* Subtle background texture for character */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_15%_0%,rgba(187,77,52,0.06),transparent_60%),radial-gradient(50%_40%_at_100%_20%,rgba(23,22,20,0.05),transparent_55%)]"
      />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* Featured product banner — portrait on mobile, landscape on larger screens */}
        <div
          className="reveal-rise mx-auto max-w-5xl"
          style={{ animationDelay: "0ms" }}
        >
          {/* Mobile: portrait */}
          <div className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-line bg-surface p-1.5 shadow-[0_50px_90px_-55px_rgba(23,21,15,0.5)] md:hidden">
            <Image
              src="/hero-corporate-gifts-mobile.png"
              alt="A curated spread of premium branded gifts drinkware, luggage, tech accessories, notebooks and gift sets, each customizable with your logo."
              width={576}
              height={1024}
              priority
              sizes="(max-width: 768px) 100vw, 576px"
              className="h-auto w-full rounded-xl"
            />
          </div>

          {/* Desktop / browser: landscape */}
          <div className="hidden overflow-hidden rounded-[1.75rem] border border-line bg-surface p-2 shadow-[0_50px_90px_-55px_rgba(23,21,15,0.5)] md:block">
            <Image
              src="/hero-corporate-gifts.png"
              alt="A curated spread of premium branded gifts drinkware, luggage, tech accessories, notebooks and gift sets, each customizable with your logo."
              width={1024}
              height={576}
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="h-auto w-full rounded-[1.4rem]"
            />
          </div>
        </div>

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

        {/* Stats */}
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
