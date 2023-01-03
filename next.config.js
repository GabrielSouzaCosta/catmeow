const { withPlaiceholder } = require('@plaiceholder/next')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'cdn2.thecatapi.com', '28.media.tumblr.com']
  },
}

module.exports = withPlaiceholder(nextConfig)
