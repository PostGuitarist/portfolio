import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// One JSON file per app: src/content/apps/<slug>.json
const apps = defineCollection({
	loader: glob({ pattern: "*.json", base: "./src/content/apps" }),
	schema: z.object({
		name: z.string(),
		tagline: z.string(),
		description: z.string().optional(),
		icon: z.string().optional(),
		appStoreUrl: z.string().url().optional(),
		supportEmail: z.string().email().optional(),
		// Drafts only render in `astro dev`, never in production builds.
		draft: z.boolean().default(false),
	}),
});

// Legal docs live next to their app: src/content/legal/<app-slug>/<doc>.md
const legal = defineCollection({
	loader: glob({ pattern: "*/*.md", base: "./src/content/legal" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		lastUpdated: z.coerce.date(),
		order: z.number().default(0),
	}),
});

export const collections = { apps, legal };
