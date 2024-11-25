import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/portafolio',
  assetPrefix: '/portafolio/',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;