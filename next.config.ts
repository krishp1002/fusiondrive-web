import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [],
    // Local images in /public are served directly — no remote patterns needed
  },
}

export default nextConfig
