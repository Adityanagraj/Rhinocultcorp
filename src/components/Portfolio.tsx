import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

type Project = {
  title: string;
  category: string;
  platform: string;
  description: string;
  image: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "Client Appreciation Swag",
    category: "Corporate Gifting · Client Success",
    platform: "LinkedIn",
    description:
      "A curated corporate swag program that turned client appreciation into a memorable, on-brand experience celebrated by our partners.",
    image: "/portfolio-client-appreciation.png",
    href: "https://www.linkedin.com/posts/rhinocult_clientsuccess-clientappreciation-corparateswags-activity-7396552633668464640-Bs30",
  },
  {
    title: "Google Workshop Kits",
    category: "Event Merchandise · Workshop",
    platform: "Instagram",
    description:
      "Custom merchandise and welcome kits designed for a Google workshop  see the experience come to life in our reel.",
    image: "/portfolio-google-workshop.png",
    href: "https://www.instagram.com/reel/DQThvBOE_vm/",
  },
];

export default function Portfolio() {
  return (
    <Section id="work" className="bg-surface-2">
      <Reveal>
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Projects we are <span className="emphasis text-accent">proud of</span>
            </>
          }
          subtitle="A glimpse of recent engagements  tap any project to see it on social."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.1}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover surface-card group block overflow-hidden rounded-2xl p-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-bg/85 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
                  {p.platform}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 px-4 py-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                    {p.category}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
                </div>
                <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-ink transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
