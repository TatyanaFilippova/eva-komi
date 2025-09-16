import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Обязательно для статического экспорта
  },
};

export default nextConfig;
