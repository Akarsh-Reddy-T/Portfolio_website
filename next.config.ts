import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "portfolio-site";
const isDev = process.env.NODE_ENV === "development";
const basePath = isDev ? "" : process.env.NEXT_PUBLIC_BASE_PATH || `/${repoName}`;

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: { unoptimized: true },
  trailingSlash: true
};

export default nextConfig;
