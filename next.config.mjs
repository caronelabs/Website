/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for deployment to Cloudflare Pages
  // Remove this if you need server-side features
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
