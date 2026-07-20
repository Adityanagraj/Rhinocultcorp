import Section, { SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import CatalogueCard from "@/components/CatalogueCard";
import ViewAllCataloguesButton from "@/components/ViewAllCataloguesButton";
import { catalogues } from "@/config/catalogues";

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

      <ViewAllCataloguesButton />
    </Section>
  );
}
