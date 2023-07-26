/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const repository = "cocoa-desktop-clone"
const nextConfig = {
  basePath: debug ? "" : `/${repository}`,
  output: "export",
  images: { unoptimized: debug }
}

module.exports = nextConfig
