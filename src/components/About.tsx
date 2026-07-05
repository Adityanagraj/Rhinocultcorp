import { Target, HeartHandshake, Rocket, ShieldCheck } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const values = [
  {
    icon: Target,
    title: "Outcome-driven",
    body: "Every decision maps to a measurable result. We obsess over impact, not vanity metrics.",
  },
  {
    icon: HeartHandshake,
    title: "True partnership",
    body: "We embed with your team, share context openly, and treat your goals as our own.",
  },
  {
    icon: Rocket,
    title: "Built to scale",
    body: "Whether you're ordering for 10 employees or 10,000 clients, we're equipped to scale seamlessly and deliver personalized gifting solutions tailored to your needs",
  },
  {
    icon: ShieldCheck,
    title: "Reliable delivery",
    body: "Clear timelines, honest communication, and craftsmanship you can depend on.",
  },
];

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="About us"
            title={
              <>
                In-house Manufacturing where strategy meets <span className="emphasis text-accent">exceptional craft</span>
              </>
            }
            subtitle=""
          />
          <p className="mt-6 text-muted">
            What began in 2022 with a vision to serve our clients has grown into a passion for creating exceptional gifting experiences.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="card-hover surface-card h-full rounded-2xl p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface-2">
                  <v.icon size={20} className="text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
