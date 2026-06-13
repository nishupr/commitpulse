import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Prevent Turbopack from bundling next/og through its shared module context,
  // which causes the "Next.js package not found" HMR panic on dynamic routes.
  serverExternalPackages: ['next/og', '@resvg/resvg-js'],
  // Allow contributors to set their own local IP via env var for dev origin allowlist
  allowedDevOrigins: process.env.NEXT_ALLOWED_DEV_ORIGINS
    ? process.env.NEXT_ALLOWED_DEV_ORIGINS.split(',')
    : [],
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
};

export default nextConfig;
