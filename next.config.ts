import type { NextConfig } from "next";

// note that the github pages workflow overwrites next.config
// so any values here are only for development

const nextConfig: NextConfig = {
  // output: "export",
  
  // disabled because:
  // a) i dislike the optimized links that next.js generates
  // b) it doesn't work with github pages
  // images: {
  //   unoptimized: true,
  // },

  // GNU Terry Pratchett
  async headers() {
    return [
      {
        // match all routes
        source: '/:path*',
        headers: [
          {
            key: 'X-Clacks-Overhead',
            value: 'GNU Terry Pratchett',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
