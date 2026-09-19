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
  async redirects() {
    return [
      {
        source: "/team",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/book-list",
        destination: "/curriculum",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // File has no extension but is a PDF (verified via magic bytes).
        source: "/documents/mandatory-disclosure/managing-body",
        headers: [
          {
            key: "Content-Type",
            value: "application/pdf",
          },
          {
            key: "Content-Disposition",
            value: 'inline; filename="managing-body.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
