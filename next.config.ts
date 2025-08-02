/** @type {import('next').NextConfig} */

const nextConfig = {
  devIndicators: false,
  images: {
    domains: ['storage.googleapis.com'],
  },
  webpack(config) {
    // Temukan rule file loader untuk svg
    const fileLoaderRule = config.module.rules.find(
      (rule) =>
        rule.test &&
        typeof rule.test === 'object' &&
        rule.test instanceof RegExp &&
        rule.test.test('file.svg')
    );

    if (!fileLoaderRule) {
      throw new Error("Could not find existing SVG rule in webpack config.");
    }

    // Keluarkan svg dari rule tersebut
    fileLoaderRule.exclude = /\.svg$/i;

    // Tambahkan aturan baru untuk svg
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: ['@svgr/webpack'],
      }
    );

    return config;
  },
};

module.exports = nextConfig;
