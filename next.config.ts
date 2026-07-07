import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Allow loading dev resources (HMR / client chunks) when the site is opened
  // via 127.0.0.1 as well as localhost, so hydration works during local testing.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  // Pin the Turbopack workspace root to this project. Without this, Turbopack can
  // infer the wrong root (when a lockfile exists in a parent folder), fail to
  // resolve the `next` package, and return 404 for the app routes in `next dev`.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
