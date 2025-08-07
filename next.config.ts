import type { NextConfig } from "next";
import type { Configuration, RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
  devIndicators: false,

  /**
   * Rekomendasi: `domains` sudah usang (deprecated).
   * Gunakan `remotePatterns` untuk keamanan dan fleksibilitas yang lebih baik.
   */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/**", // Izinkan semua path di bawah hostname ini
      },
    ],
  },

  webpack(config: Configuration) {
    // Pastikan config.module dan config.module.rules ada
    if (!config.module?.rules) {
      throw new Error("Webpack config is missing module.rules");
    }

    // Temukan rule untuk file SVG dengan cara yang type-safe
    const fileLoaderRule = config.module.rules.find(
      (rule): rule is RuleSetRule =>
        typeof rule === "object" &&
        rule !== null &&
        "test" in rule &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg")
    );

    if (!fileLoaderRule) {
      throw new Error("Could not find existing SVG rule in webpack config.");
    }

    // Keluarkan SVG dari rule bawaan Next.js
    fileLoaderRule.exclude = /\.svg$/i;

    // Tambahkan aturan baru untuk menangani SVG
    config.module.rules.push(
      // Aturan untuk mengimpor SVG sebagai URL (misal: `import logo from './logo.svg?url'`)
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      // Aturan untuk mengimpor SVG sebagai komponen React (default)
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: ["@svgr/webpack"],
      }
    );

    return config;
  },
};

export default nextConfig;
