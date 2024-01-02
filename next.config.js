/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.imgur.com",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
