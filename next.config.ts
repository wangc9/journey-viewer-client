import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  crossOrigin: "use-credentials",
  async rewrites() {
    return [
      {
        source: "/:locale*/relay-SaGx/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/:locale*/relay-SaGx/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
      {
        source: "/:locale*/relay-SaGx/flags",
        destination: "https://eu.i.posthog.com/flags",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
