"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useHydrated } from "@/components/ui/useHydrated";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Slide-in distance. */
  y?: number;
  className?: string;
};

/**
 * Scroll reveal that is safe by construction: it renders fully-visible markup on
 * the server and the first client paint, and only opts into the hidden->visible
 * animation *after* it has mounted on the client. Consequences:
 *  - If the client bundle never runs (no-JS, blocked chunks), content stays visible.
 *  - If `prefers-reduced-motion` is set, no motion component is used at all.
 * Below-the-fold elements are off-screen when the swap happens, so there is no flash.
 */
export default function Reveal({ children, delay = 0, y = 24, className }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const hydrated = useHydrated();

  if (!hydrated || reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
