import Image from "next/image";

type Client = {
  name: string;
  /** Optional logo path under /public. If set, the logo image is shown instead of the wordmark. */
  logo?: string;
};

const clients: Client[] = [
  { name: "Google" },
  { name: "GoAvoAI" },
  { name: "Atria University" },
  { name: "Microsoft" },
  { name: "Salesforce" },
  { name: "66 Gears" },
  { name: "Amazon" },
  { name: "Meta" },
  { name: "Nvidia" },
  { name: "Civo" },
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
          <ul className="flex w-max animate-marquee items-center gap-10 group-hover:[animation-play-state:paused] sm:gap-16">
            {track.map((c, i) => (
              <li key={`${c.name}-${i}`} aria-hidden={i >= clients.length} className="shrink-0">
                {c.logo ? (
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={120}
                    height={36}
                    className="h-7 w-auto opacity-60 grayscale transition-opacity hover:opacity-100 sm:h-8"
                  />
                ) : (
                  <span className="font-display whitespace-nowrap text-xl font-semibold text-ink/55 transition-colors hover:text-ink sm:text-2xl">
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
