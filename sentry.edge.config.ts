import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://a98aac57e87eed9c54917fe3c13c4fa5@o4508097021870080.ingest.us.sentry.io/4508099792535552",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
