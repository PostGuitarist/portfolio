import * as amplitude from "@amplitude/unified";

// Amplitude ingestion key — public by design; move to an env var when you set up environments.
const AMPLITUDE_API_KEY = "b7c0d5e2d3aa6c69766e06ceae6e1dd5";

amplitude.initAll(AMPLITUDE_API_KEY, {
  analytics: { autocapture: true },
  sessionReplay: { sampleRate: 1 },
});

amplitude.track("Viewed Home Page", { prompt_version: "BA400.4" }); // helps improve this setup flow — safe to remove once you've verified the event lands
