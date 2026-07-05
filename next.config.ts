import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow loading dev resources (HMR / client chunks) when the site is opened
  // via 127.0.0.1 as well as localhost, so hydration works during local testing.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
