import Image from "next/image";
import { ArrowUpRight, FileText } from "lucide-react";
import type { Catalogue } from "@/config/catalogues";

const accentMap: Record<Catalogue["accent"], string> = {
  brand: "bg-[#f5ebe6] text-[#bb4d34]",
  cyan: "bg-[#eceef2] text-[#3f5069]",
  violet: "bg-[#f0edf2] text-[#5b4b6b]",
};

export default function CatalogueCard({ catalogue }: { catalogue: Catalogue }) {
  const hasImage = Boolean(catalogue.image);

  return (
    <a
      href={catalogue.driveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[1.5rem] border border-line bg-surface shadow-[0_30px_60px_-45px_rgba(23,21,15,0.5)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_50px_90px_-45px_rgba(23,21,15,0.6)]"
    >
      {/* Full-bleed image or accent-tinted fallback */}
      {hasImage ? (
        <>
          <Image
            src={catalogue.image as string}
            alt={catalogue.title}
            fill
            sizes="(max-width: 768px) 78vw, 320px"
            className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.07]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/0"
          />
        </>
      ) : (
        <div className={`absolute inset-0 grid place-items-center ${accentMap[catalogue.accent]}`}>
          <FileText size={64} strokeWidth={1.25} className="opacity-40" />
        </div>
      )}

      {/* Top row: badge + open arrow */}
      <div className="absolute inset-x-4 top-4 flex items-center justify-between">
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-medium backdrop-blur ${
            hasImage
              ? "border border-white/25 bg-ink/35 text-white"
              : "border border-line bg-surface/90 text-ink-soft"
          }`}
        >
          {catalogue.badge}
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-surface/95 text-ink shadow-sm transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight size={16} />
        </span>
      </div>

      {/* Content overlay */}
      <div className={`relative p-5 ${hasImage ? "text-white" : "text-ink"}`}>
        <h3 className="font-display text-xl font-semibold leading-tight">{catalogue.title}</h3>
        <p
          className={`mt-1.5 line-clamp-2 text-sm leading-relaxed ${
            hasImage ? "text-white/80" : "text-muted"
          }`}
        >
          {catalogue.description}
        </p>
        <span
          className={`mt-4 inline-flex items-center gap-1.5 text-sm font-medium ${
            hasImage ? "text-white" : "text-ink"
          }`}
        >
          Open in Google Drive
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </a>
  );
}
