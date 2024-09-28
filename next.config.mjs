/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['media.beehiiv.com'], // Add any remote image domains here
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ucarecdn.com", // Allow ucarecdn.com images
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // If you want to add custom webpack configuration
    return config;
  },
}

export default nextConfig;