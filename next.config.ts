import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  ...(isProd && { output: "export" }),
  basePath: isProd ? "/Endo5" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
