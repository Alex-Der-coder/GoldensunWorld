import path from "node:path";

/** @type {import('next').NextConfig} */
export default {
  output: "standalone",
  images: { unoptimized: true },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(process.cwd());
    return config;
  },
};
