/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    loader: "akamai",
    path: "/",
    domains: ["localhost", "atrios-next.io"],
  },

  env: {
    PUBLIC_URL: "/",
  },
};

module.exports = nextConfig;
