import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'rrdesigns.s3.ca-central-1.amazonaws.com',
      port: '',
      pathname: '/**'
    }]
  },
  /* config options here */
};

export default nextConfig;
