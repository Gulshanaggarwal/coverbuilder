/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "firebasestorage.googleapis.com"]
  }
}

module.exports = nextConfig
