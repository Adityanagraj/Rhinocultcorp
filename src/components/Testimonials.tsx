import { Quote, Star } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

const testimonials = [
  {
    quote:
      "It was last miniute requirement for our Bengaluru Event and they were able to pull it off Successfully all thanks to Mayur and entire team of Rhinocult",
    name: "Dona Boast",
    role: "Marketing",
    initials: "DB",
  },
  {
    quote:
      "The most professional team we've worked with. Fast, thoughtful, and genuinely invested in our success.",
    name: "lakshit Paul",
    role: "HRBP",
    initials: "LP",
  },
  {
    quote:
      "We started our collabaration with rhinocult corparate back in 2022 and had a very good relationship with entire team each and every detail is taken into consideration without miss.",
    name: "Megha Arora",
    role: "Founder, GoAvoAI",
    initials: "MA",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <Reveal>
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Loved by the teams we <span className="emphasis text-accent">work with</span>
            </>
          }
          subtitle="Don't just take our word for it — here's what our clients say."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <figure className="card-hover surface-card flex h-full flex-col rounded-2xl p-6">
              <Quote size={28} className="text-accent" strokeWidth={1.5} />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={15} className="fill-[#c99a3f] text-[#c99a3f]" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-sm font-semibold text-bg">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{t.name}</span>
                  <span className="block text-xs text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
