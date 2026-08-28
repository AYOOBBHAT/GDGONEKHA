import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gdgoenkabaramulla.com",
      },
      {
        protocol: "https",
        hostname: "gdgoenkabaramulla.com",
      },
    ],
  },
};

export default nextConfig;
