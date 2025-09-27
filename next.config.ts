// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // 👇 This disables ESLint checks during `next build`
    ignoreDuringBuilds: true,
  },
  /* your other config options here */
};

export default nextConfig;
