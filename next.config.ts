import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.gdgoenkakupwara.com",
      },
      {
        protocol: "https",
        hostname: "gdgoenkakupwara.com",
      },
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
  async redirects() {
    return [
      {
        source: "/team",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/know-us/mandatory-disclosure/staff",
        destination: "/know-us/mandatory-disclosure#staff",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
