/** @type {import('next').NextConfig} */

const WORDPRESS_SITE = process.env.WORDPRESS_SITE || []

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [WORDPRESS_SITE],
  },
};

module.exports = nextConfig;
