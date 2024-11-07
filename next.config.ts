import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {};

export default withSentryConfig(nextConfig, {
  org: "vincent-anjiri",
  project: "javascript-nextjs",

  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false,
  hideSourceMaps: true,
  disableLogger: true,
});
