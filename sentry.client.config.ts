import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://a98aac57e87eed9c54917fe3c13c4fa5@o4508097021870080.ingest.us.sentry.io/4508099792535552",

  // Replay may only be enabled for the client-side

  integrations: [Sentry.replayIntegration()],

  // Set tracesSampleRate to 1.0 to capture 100%

  // of transactions for tracing.

  // We recommend adjusting this value in production

  tracesSampleRate: 1.0,

  // Capture Replay for 10% of all sessions,

  // plus for 100% of sessions with an error

  replaysSessionSampleRate: 0.1,

  replaysOnErrorSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a

  // `release` value here - use the environment variable `SENTRY_RELEASE`, so

  // that it will also get attached to your source maps
});
