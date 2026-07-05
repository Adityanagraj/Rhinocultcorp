import Image from "next/image";
import { ArrowUpRight, FileText } from "lucide-react";
import type { Catalogue } from "@/config/catalogues";

const accentMap: Record<Catalogue["accent"], string> = {
  brand: "bg-[#f5ebe6] text-[#bb4d34]",
  cyan: "bg-[#eceef2] text-[#3f5069]",
  violet: "bg-[#f0edf2] text-[#5b4b6b]",
};

export default function CatalogueCard({ catalogue }: { catalogue: Catalogue }) {
  const accent = accentMap[catalogue.accent];

  return (
    <a
      href={catalogue.driveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover surface-card group relative flex flex-col overflow-hidden rounded-2xl p-6"
    >
      {/* Thumbnail / preview area */}
      <div className={`relative mb-5 grid h-40 place-items-center overflow-hidden rounded-xl ${accent}`}>
        {catalogue.image ? (
          <Image
            src={catalogue.image}
            alt={catalogue.title}
            fill
            sizes="(max-width: 768px) 78vw, 320px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <FileText size={44} className="relative opacity-70" strokeWidth={1.5} />
        )}
        <span className="absolute bottom-3 left-3 rounded-full border border-line bg-surface/90 px-2.5 py-1 text-[11px] font-medium text-ink-soft backdrop-blur">
          {catalogue.badge}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-ink">{catalogue.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{catalogue.description}</p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-accent">
        Open in Google Drive
        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </a>
  );
}
