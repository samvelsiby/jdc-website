import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // A stray package-lock.json in the parent home directory makes Next.js
  // misdetect the workspace root — pin it explicitly to this project.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
