/* eslint-disable @next/next/no-img-element */
type Client = {
  name: string;
  /** Path to an official brand SVG under /public. If absent, the name is shown as a wordmark. */
  logo?: string;
};

const clients: Client[] = [
  { name: "Google", logo: "/logos/google.svg" },
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "Atria University", logo: "/logos/atria.png" },
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Salesforce", logo: "/logos/salesforce.svg" },
  { name: "66 Gears" },
  { name: "Goavo", logo: "/logos/goavo.png" },
  { name: "Meta", logo: "/logos/meta.svg" },
  { name: "Nvidia", logo: "/logos/nvidia.svg" },
];

export default function Clients() {
  // Duplicate the list so the marquee can loop seamlessly.
  const track = [...clients, ...clients];

  return (
    <section aria-label="Our esteemed clients" className="border-y border-line bg-surface-2/60 py-10 sm:py-12">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-muted">
          Trusted by teams at
        </p>

        <div className="marquee-mask group relative mt-7 overflow-hidden">
          <ul className="flex w-max animate-marquee items-center gap-12 group-hover:[animation-play-state:paused] sm:gap-20">
            {track.map((c, i) => (
              <li
                key={`${c.name}-${i}`}
                aria-hidden={i >= clients.length}
                className="group/logo flex shrink-0 flex-col items-center gap-2"
              >
                {c.logo ? (
                  <>
                    <img
                      src={c.logo}
                      alt={`${c.name} logo`}
                      className="h-7 w-auto object-contain transition-transform duration-300 group-hover/logo:scale-110 sm:h-8"
                    />
                    <span className="text-brand-gradient text-[0.7rem] font-semibold uppercase tracking-[0.14em]">
                      {c.name}
                    </span>
                  </>
                ) : (
                  <span className="font-display whitespace-nowrap text-xl font-semibold text-ink/70 transition-colors hover:text-ink sm:text-2xl">
                    {c.name}
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
