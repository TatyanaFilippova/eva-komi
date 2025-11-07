import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // Обязательно для статического экспорта
  },
  eslint: {
    // Игнорировать ESLint во время сборки
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://evakuator-service11.ru/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
