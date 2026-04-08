import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    // framer-motion requires 'unsafe-inline' styles and blob: workers.
    // next/font self-hosts Google Fonts at build time so no external font CSP
    // entry is needed. Radix UI and Base UI are pure JS/CSS — no extra origins.
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Inline scripts are emitted by Next.js for hydration; nonce-based CSP
      // requires a custom server, so 'unsafe-inline' is the practical choice
      // for a static/Vercel deployment. Remove if you add a nonce middleware.
      "script-src 'self' 'unsafe-inline'",
      // framer-motion injects inline styles at runtime
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      // framer-motion uses blob: workers internally
      "worker-src blob:",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
