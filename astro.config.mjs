import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

import { basics } from "./cv.json";

// https://astro.build/config
export default defineConfig({
	site: basics.url,
	// The portfolio is fully static; prerendering it removes the serverless
	// cold start that `output: "server"` was paying for on every request.
	output: "static",
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
	integrations: [
		// Base styles are applied by src/styles/global.css, which also owns the
		// design tokens, so the integration must not inject a second copy.
		tailwind({ applyBaseStyles: false }),
	],
	prefetch: true,
});
