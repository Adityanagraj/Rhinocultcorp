import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

type Destination = {
  name: string;
  image: string;
  alt: string;
};

const destinations: Destination[] = [
  {
    name: "USA",
    image: "/countries/usa-liberty.jpg",
    alt: "Statue of Liberty in New York Harbor, USA",
  },
  {
    name: "Canada",
    image: "/countries/canada.jpg",
    alt: "CN Tower in Toronto, Canada",
  },
  {
    name: "UAE",
    image: "/countries/uae.jpg",
    alt: "Dubai skyline, United Arab Emirates",
  },
  {
    name: "UK",
    image: "/countries/uk.jpg",
    alt: "London cityscape, United Kingdom",
  },
  {
    name: "Singapore",
    image: "/countries/singapore.jpg",
    alt: "Marina Bay skyline, Singapore",
  },
  {
    name: "Australia",
    image: "/countries/australia.jpg",
    alt: "Sydney harbour, Australia",
  },
];

/**
 * Horizontal destination carousel — layout inspired by common corporate-gifting
 * "send gifts abroad" patterns: square landmark cards with the country label
 * centered beneath each image.
 */
export default function SendGiftsAbroad() {
  return (
    <Section id="abroad" className="bg-surface">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Send Gifts Abroad
          </h2>
          <p className="mt-3 text-base text-muted sm:text-lg">
            We deliver Corporate Gifts across 50+ countries
          </p>
        </div>
      </Reveal>

      <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 sm:-mx-8 sm:gap-5 sm:scroll-px-8 sm:px-8">
        {destinations.map((d, i) => (
          <Reveal
            key={d.name}
            delay={(i % 3) * 0.06}
            className="w-[46%] shrink-0 snap-start sm:w-[220px]"
          >
            <figure className="flex flex-col items-center">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-surface-2 shadow-[0_18px_40px_-30px_rgba(23,21,15,0.45)]">
                <Image
                  src={d.image}
                  alt={d.alt}
                  fill
                  sizes="(max-width: 640px) 46vw, 220px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 text-center text-base font-semibold text-ink sm:text-lg">
                {d.name}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
