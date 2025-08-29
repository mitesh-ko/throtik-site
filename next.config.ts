import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    distDir: 'out',
    assetPrefix: '/prefix/',
    // trailingSlash: true,
    // assetPrefix: '.',


    // time in seconds of no pages generating during static
    // generation before timing out
    staticPageGenerationTimeout: 1000,
    reactStrictMode: false
};

export default nextConfig;
