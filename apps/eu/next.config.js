/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@eroticreviews/schema'],
  
  // No built-in i18n routing (we handle it manually in middleware)
  // This gives us full control per ER 4.0 spec
}

module.exports = nextConfig
