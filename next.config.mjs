/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build every page as plain HTML into `out/` so the site can be hosted anywhere
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
