/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set explicit workspace root to avoid lockfile warnings
  outputFileTracingRoot: require('path').resolve(__dirname),

  // Exclude problematic files from being processed
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        'better-sqlite3': false,
        'bcryptjs': false,
      };
    }
    return config;
  }
}

module.exports = nextConfig