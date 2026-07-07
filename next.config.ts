import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow loading dev resources (HMR / client chunks) when the site is opened
  // via 127.0.0.1 as well as localhost, so hydration works during local testing.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  // Pin the Turbopack workspace root to this project. Without this, Turbopack can
  // infer the wrong root (a stray lockfile / node_modules exists in a parent
  // folder), fail to resolve the `next` package, and 404 the app routes in dev.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
