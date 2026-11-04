"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useHydrated } from "@/components/ui/useHydrated";

type SlideInProps = {
  children: ReactNode;
  /** Direction the element slides in from. */
  from?: "left" | "right" | "up";
  delay?: number;
  className?: string;
};

const offsets = {
  left: { x: -56, y: 0 },
  right: { x: 56, y: 0 },
  up: { x: 0, y: 48 },
} as const;

/**
 * Directional scroll reveal. Like {@link Reveal}, it renders visible markup on the
 * server / first paint and only enables the animation after mounting on the client,
 * so content is never permanently stuck invisible if JS does not run.
 */
export default function SlideIn({ children, from = "up", delay = 0, className }: SlideInProps) {
  const reduceMotion = useReducedMotion();
  const hydrated = useHydrated();

  if (!hydrated || reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = offsets[from];
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
