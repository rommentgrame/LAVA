import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/LAVA',
  assetPrefix: '/LAVA/',
};

export default nextConfig;
