import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

/**
 * Content Security Policy — the browser may only load code, styles, images and fonts from this site.
 * - script-src needs 'unsafe-inline' because Next.js inlines its hydration data on static pages
 *   (nonces would force every page to render per request). It still blocks scripts from any other domain.
 * - Dev additionally needs 'unsafe-eval' and websockets for hot reload.
 * - frame-ancestors 'none' + X-Frame-Options stop the site being embedded (clickjacking).
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "media-src 'self'",
  "object-src 'none'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  // Turn off powerful browser features the site never uses
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=(), browsing-topics=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // HTTPS only for two years (production — localhost runs on http)
  ...(isDev ? [] : [{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }]),
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Never publish source maps of the browser bundles
  productionBrowserSourceMaps: false,
  // A stray package-lock.json in the user's home folder otherwise confuses root detection
  turbopack: { root: process.cwd() },
  experimental: {
    // Turbopack's on-disk dev cache writes run for 15–25 s on this Windows setup (antivirus scanning .next),
    // stalling page compiles. Off by default = steady ~1 s compiles; set NEXT_DEV_DISK_CACHE=1 to re-enable
    // (worth it once the project folder is excluded from Windows Defender — faster dev restarts).
    turbopackFileSystemCacheForDev: process.env.NEXT_DEV_DISK_CACHE === "1",
  },
  images: {
    // Next 16 only allows quality 75 unless listed here; the site uses 65–70 for large background photos
    qualities: [60, 65, 70, 75],
  },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      // The enquiry API is same-origin only: no CORS headers are ever sent, and responses aren't cached
      { source: "/api/(.*)", headers: [{ key: "Cache-Control", value: "no-store" }, { key: "X-Robots-Tag", value: "noindex" }] },
    ];
  },
};

export default nextConfig;
