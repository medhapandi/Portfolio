import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Uncomment and set basePath if deploying to a subpath (e.g., /repo-name)
  // basePath: "/your-repo-name",
  // assetPrefix: "/your-repo-name/",
};

export default nextConfig;
