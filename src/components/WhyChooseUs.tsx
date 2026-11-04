import { Gem, Timer, Users, TrendingUp, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

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
    // Desktop-only: hidden on mobile, active from md breakpoint up.
    <section id="why-us" className="hidden scroll-mt-24 bg-surface-2 md:block">
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

        <div className="mt-14 grid gap-5 pb-28 md:grid-cols-2">
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
    </section>
  );
}
