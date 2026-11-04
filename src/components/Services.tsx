import { Coffee, Shirt, Watch, Backpack, Package, Cookie, ArrowUpRight } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const services = [
  {
    icon: Coffee,
    title: "Drinkware",
    body: "Premium mugs, tumblers, and bottles branded to keep your identity in hand every day.",
    href: "https://drive.google.com/file/d/15-HGEMVcb6aFKp9vyyMkKFIH686iPrXB/view",
  },
  {
    icon: Shirt,
    title: "T-shirts & Polos",
    body: "Soft, durable tees and polos with custom logos for teams, events, and giveaways.",
    href: "https://rhinocult.com",
  },
  {
    icon: Watch,
    title: "Tech Wearables",
    body: "Smartwatches, bands, and connected accessories that pair everyday tech with your brand.",
    href: "https://drive.google.com/file/d/10XPGPPEbsNx3YObtTMiXcHIHrtH2-71j/view",
  },
  {
    icon: Backpack,
    title: "Bags",
    body: "Backpacks, totes, and laptop bags built to travel and to be seen.",
    href: "https://drive.google.com/file/d/1ZAwyvCH-W5N3h9aGVkAmnwG9j3vG5kcs/view?usp=sharing",
  },
  {
    icon: Package,
    title: "Onboarding Kits",
    body: "Curated welcome kits that make new hires and clients feel valued from day one.",
    href: "https://drive.google.com/file/d/1tg_3-kwRkj0-VsIyr9i9HL0lbwnKJlME/view",
  },
  {
    icon: Cookie,
    title: "Eatables",
    body: "Gourmet treats and snack hampers that add a delicious, memorable touch.",
    href: "https://drive.google.com/file/d/1XCLNMrcMosaGABms8QjCGSyA3G29L4TR/view",
  },
];

export default function Services() {
  return (
    <Section id="offerings">
      <Reveal>
        <SectionHeading
          eyebrow="Our offerings"
          title={
            <>
              Everything you need, <span className="emphasis text-accent">under one roof</span>
            </>
          }
          subtitle="A complete suite of services to take your business from idea to impact. Tap any category to browse its catalogue."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover surface-card group flex h-full flex-col rounded-2xl p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-bg">
                  <s.icon size={22} />
                </div>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
