/* eslint-disable @next/next/no-img-element */
type Brand = {
  name: string;
  /** Path to an official brand SVG under /public. If absent, the name is shown as a wordmark. */
  logo?: string;
};

const brands: Brand[] = [
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "Mokobara", logo: "/logos/mokobara.png" },
  { name: "Swiss Military" },
  { name: "Godrej", logo: "/logos/godrej.png" },
  { name: "Adidas", logo: "/logos/adidas.svg" },
  { name: "Rare Rabbit" },
  { name: "Stanley" },
];

export default function Brands() {
  // Duplicate the list so the marquee can loop seamlessly.
  const track = [...brands, ...brands];

  return (
    <section aria-label="Our sourcing partners" className="border-b border-line bg-surface-2/60 py-10 sm:py-12">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-muted">
          Our partners for sourcing your gifts
        </p>

        <div className="marquee-mask group relative mt-7 overflow-hidden">
          <ul className="flex w-max animate-marquee-reverse items-center gap-12 group-hover:[animation-play-state:paused] sm:gap-20">
            {track.map((b, i) => (
              <li
                key={`${b.name}-${i}`}
                aria-hidden={i >= brands.length}
                className="group/logo flex shrink-0 flex-col items-center gap-2"
              >
                {b.logo ? (
                  <>
                    <img
                      src={b.logo}
                      alt={`${b.name} logo`}
                      className="h-7 w-auto opacity-50 grayscale transition-all duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0 sm:h-8"
                    />
                    <span className="text-brand-gradient text-[0.7rem] font-semibold uppercase tracking-[0.14em]">
                      {b.name}
                    </span>
                  </>
                ) : (
                  <span className="font-display whitespace-nowrap text-xl font-semibold text-ink/50 transition-colors hover:text-ink sm:text-2xl">
                    {b.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
