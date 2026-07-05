import { FolderOpen } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import CatalogueCard from "@/components/CatalogueCard";
import { GradientLink } from "@/components/ui/GradientButton";
import { catalogues } from "@/config/catalogues";

const ALL_CATALOGUES_URL =
  "https://drive.google.com/drive/folders/1REUU7Z7mFoFX3-HHIpYMXpVsQBM8ksEf";

export default function Catalogues() {
  return (
    <Section id="catalogues">
      <Reveal>
        <SectionHeading
          eyebrow="Catalogues"
          title={
            <>
              Browse our <span className="emphasis text-accent">catalogues & brochures</span>
            </>
          }
          subtitle="Swipe or scroll sideways to browse, then tap any catalogue to open it in Google Drive."
        />
      </Reveal>

      <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-4 sm:-mx-8 sm:scroll-px-8 sm:px-8">
        {catalogues.map((c, i) => (
          <Reveal
            key={c.title}
            delay={(i % 3) * 0.08}
            className="w-[78%] shrink-0 snap-start sm:w-[320px]"
          >
            <CatalogueCard catalogue={c} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <GradientLink href={ALL_CATALOGUES_URL} external variant="outline">
          <FolderOpen size={18} />
          View all catalogues
        </GradientLink>
      </Reveal>
    </Section>
  );
}
