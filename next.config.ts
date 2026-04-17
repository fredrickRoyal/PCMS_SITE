import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "143.198.243.102",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
