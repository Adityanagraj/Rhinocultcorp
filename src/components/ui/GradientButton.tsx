import type { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30";

const variants = {
  solid:
    "bg-ink text-bg hover:bg-ink-soft hover:-translate-y-0.5",
  outline:
    "border border-ink/20 bg-transparent text-ink hover:border-ink/40 hover:bg-ink/5",
} as const;

export function GradientLink({
  children,
  href,
  external = false,
  variant = "solid",
  className = "",
}: LinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
