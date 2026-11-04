import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Absolute project root (this config file's directory). Prefer this over
// process.cwd() so Turbopack cannot latch onto a parent folder that happens
// to contain another node_modules (e.g. /Users/.../Desktop/node_modules).
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Allow loading dev resources (HMR / client chunks) when the site is opened
  // via 127.0.0.1 as well as localhost, so hydration works during local testing.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
