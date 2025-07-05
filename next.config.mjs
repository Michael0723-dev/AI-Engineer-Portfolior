/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "standalone",
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  swcMinify: true,
  reactStrictMode: true,
}

export default nextConfig
