"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Gem, Timer, Users, TrendingUp, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { useHydrated } from "@/components/ui/useHydrated";

type Reason = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const reasons: Reason[] = [
  {
    icon: Gem,
    title: "Craft you can feel",
    body: "From product selection to the final finish, we meticulously craft every detail to match your brand's standards.",
  },
  {
    icon: Timer,
    title: "On time, every time",
    body: "Clear milestones and honest communication. We respect deadlines and keep you in the loop.",
  },
  {
    icon: Users,
    title: "100% Quality Assurance",
    body: "From product quality to packaging, every order is carefully inspected to ensure you receive nothing but the best.",
  },
  {
    icon: TrendingUp,
    title: "Built out of Bengaluru",
    body: "Bengaluru being home for budding startups to gaint corparates everyone is here, our stragic location plays a vital role in satisfying our customers.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-surface-2">
      <div className="mx-auto w-full max-w-6xl px-5 pt-20 sm:px-8 sm:pt-28">
        <Reveal>
          <SectionHeading
            className="mx-auto text-center"
            eyebrow="Why choose us"
            title={
              <>
                Reasons teams keep <span className="emphasis text-accent">coming back</span>
              </>
            }
            subtitle=""
          />
        </Reveal>

        {/* Desktop: clean, elegant grid */}
        <div className="mt-14 hidden gap-5 pb-28 md:grid md:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 2) * 0.08}>
              <div className="card-hover surface-card flex h-full items-start gap-5 rounded-2xl p-7">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink text-bg">
                  <r.icon size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm font-semibold tabular-nums text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-ink">{r.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{r.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/*
        Mobile deck: each reason is a near-full-height block in the NORMAL page flow
        (no nested scroller — a nested scroll container was trapping the page scroll).
        As the user scrolls the page, each card rises from the bottom and settles into
        the screen, one per scroll, via framer-motion whileInView against the viewport.
      */}
      <div className="mt-6 pb-20 md:hidden" aria-label="Why choose us — scroll through reasons">
        {reasons.map((r, i) => (
          <div
            key={r.title}
            className="flex min-h-[82svh] items-center justify-center px-5"
          >
            <DeckCard reason={r} index={i} total={reasons.length} />
          </div>
        ))}
      </div>
    </section>
  );
}

type DeckCardProps = {
  reason: Reason;
  index: number;
  total: number;
};

function DeckCard({ reason, index, total }: DeckCardProps) {
  const reduceMotion = useReducedMotion();
  const hydrated = useHydrated();

  const Icon = reason.icon;

  const inner = (
    <div className="surface-card relative flex w-full max-w-md flex-col justify-between rounded-[1.75rem] p-8 shadow-[0_40px_80px_-50px_rgba(23,22,20,0.45)]">
      <div className="flex items-center justify-between">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-bg">
          <Icon size={26} />
        </div>
        <span className="font-display text-4xl font-semibold tabular-nums text-accent/25">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-10">
        <h3 className="font-display text-2xl font-semibold leading-tight text-ink">
          {reason.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">{reason.body}</p>
      </div>

      {/* Deck progress dots */}
      <div className="mt-10 flex items-center gap-2">
        {Array.from({ length: total }).map((_, d) => (
          <span
            key={d}
            className={`h-1.5 rounded-full transition-all ${
              d === index ? "w-6 bg-accent" : "w-1.5 bg-ink/15"
            }`}
          />
        ))}
      </div>
    </div>
  );

  // SSR / first paint / reduced-motion: fully visible, no JS dependency.
  if (!hydrated || reduceMotion) {
    return <div className="w-full max-w-md">{inner}</div>;
  }

  return (
    <motion.div
      className="w-full max-w-md"
      initial={{ opacity: 0, y: 90, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ amount: 0.4, once: false }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {inner}
    </motion.div>
  );
}
