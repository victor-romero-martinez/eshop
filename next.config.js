/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        hostname: "i.dummyjson.com",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
