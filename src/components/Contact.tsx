import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Section, { SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { buildWhatsAppUrl, site } from "@/config/site";

export default function Contact() {
  const details = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Office", value: site.address },
  ];

  return (
    <Section id="contact">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something <span className="emphasis text-accent">remarkable</span>
            </>
          }
          subtitle="Reach us by email, phone, or WhatsApp — we'll get back within one business day."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-3">
            {details.map((d) => {
              const content = (
                <div className="surface-card flex h-full flex-col gap-3 rounded-2xl p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface-2">
                    <d.icon size={18} className="text-accent" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted">{d.label}</p>
                    <p className="mt-1 text-sm text-ink">{d.value}</p>
                  </div>
                </div>
              );
              return d.href ? (
                <a key={d.label} href={d.href} className="block transition-opacity hover:opacity-70">
                  {content}
                </a>
              ) : (
                <div key={d.label}>{content}</div>
              );
            })}
          </div>

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-3 rounded-2xl border border-[#1f9d55]/30 bg-[#1f9d55]/[0.06] p-5 transition-colors hover:bg-[#1f9d55]/[0.12]"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#1f9d55]/15">
              <MessageCircle size={18} className="text-[#1f9d55]" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted">WhatsApp</p>
              <p className="text-sm text-ink">Chat with us instantly</p>
            </div>
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
