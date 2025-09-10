import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '094vdmb7lw.ufs.sh'
      }
    ],
  },
};

export default nextConfig;
