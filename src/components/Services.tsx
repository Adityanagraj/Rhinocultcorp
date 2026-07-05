import { Coffee, Shirt, Watch, Backpack, Package, Cookie } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const services = [
  {
    icon: Coffee,
    title: "Drinkware",
    body: "Premium mugs, tumblers, and bottles branded to keep your identity in hand every day.",
  },
  {
    icon: Shirt,
    title: "T-shirts & Polos",
    body: "Soft, durable tees and polos with custom logos for teams, events, and giveaways.",
  },
  {
    icon: Watch,
    title: "Tech Wearables",
    body: "Smartwatches, bands, and connected accessories that pair everyday tech with your brand.",
  },
  {
    icon: Backpack,
    title: "Bags",
    body: "Backpacks, totes, and laptop bags built to travel and to be seen.",
  },
  {
    icon: Package,
    title: "Onboarding Kits",
    body: "Curated welcome kits that make new hires and clients feel valued from day one.",
  },
  {
    icon: Cookie,
    title: "Eatables",
    body: "Gourmet treats and snack hampers that add a delicious, memorable touch.",
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
          subtitle="A complete suite of services to take your business from idea to impact."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08}>
            <div className="card-hover surface-card h-full rounded-2xl p-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-bg">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
