import Image from "next/image";
import { ArrowUpRight, Leaf, Sparkles } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { buildWhatsAppUrl } from "@/config/site";

type Insight = {
  eyebrow: string;
  title: string;
  excerpt: string;
  body: string[];
  image: string;
  icon: typeof Leaf;
  cta: string;
  href: string;
};

const insights: Insight[] = [
  {
    eyebrow: "Sustainability",
    title: "Gifts that leave a lighter footprint",
    excerpt:
      "Corporate gifting does not have to mean excess. The most memorable gifts today are useful, beautiful, and thoughtfully sourced.",
    body: [
      "We help brands choose eco-conscious drinkware, plantable stationery, reusable everyday essentials, and packaging that feels premium without the plastic waste.",
      "Every sustainable pick still gets the Rhinocult finish: clean branding, careful packing, and delivery that feels intentional for your people and the planet.",
    ],
    image: "/insight-sustainability.png",
    icon: Leaf,
    cta: "Ask about sustainable kits",
    href: buildWhatsAppUrl(
      "Hi! I'd like to explore sustainable / eco-friendly corporate gifting options with Rhinocult.",
    ),
  },
  {
    eyebrow: "Festival & occasions",
    title: "Festival & special occasion gifting, done with grace",
    excerpt:
      "Diwali, year-end, client milestones, onboarding days the occasion changes, the feeling should not: warm, personal, and on-brand.",
    body: [
      "From festive hampers and gourmet treats to elegant branded keepsakes, we curate sets that celebrate culture without looking generic or overdone.",
      "Share your occasion, headcount, and brand guidelines we handle curation, mockups, packaging, and pan-India delivery so the moment lands beautifully.",
    ],
    image: "/insight-festival-gifting.png",
    icon: Sparkles,
    cta: "Plan an occasion hamper",
    href: buildWhatsAppUrl(
      "Hi! I'd like help planning festival / special occasion corporate gifts with Rhinocult.",
    ),
  },
];

/**
 * Editorial "ideas" section — written posts for Sustainability and Festival
 * gifting. Keeps Portfolio as social proof; this is thought-leadership content
 * with WhatsApp CTAs for conversion.
 */
export default function Insights() {
  return (
    <Section id="insights">
      <Reveal>
        <SectionHeading
          eyebrow="Ideas & occasions"
          title={
            <>
              Gifting with <span className="emphasis text-accent">purpose</span>
            </>
          }
          subtitle="Two themes teams ask us about most — how to gift sustainably, and how to celebrate festivals and milestones with taste."
        />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:gap-10">
        {insights.map((post, i) => {
          const reverse = i % 2 === 1;
          return (
            <Reveal key={post.title} delay={i * 0.08}>
              <article className="surface-card overflow-hidden rounded-[1.75rem] lg:grid lg:grid-cols-2 lg:items-stretch">
                <div
                  className={`relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px] ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div
                  className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface-2 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
                    <post.icon size={13} className="text-accent" />
                    {post.eyebrow}
                  </span>

                  <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 space-y-3">
                    {post.body.map((para) => (
                      <p key={para.slice(0, 40)} className="text-sm leading-relaxed text-muted">
                        {para}
                      </p>
                    ))}
                  </div>

                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-ink-soft"
                  >
                    {post.cta}
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
