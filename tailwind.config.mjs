/**
 * Wraps a CSS custom property holding a bare `R, G, B` triplet so Tailwind can
 * still apply opacity modifiers to it (`text-skin-hue/50`).
 */
function withOpacity(variableName) {
	return ({ opacityValue }) => (opacityValue === undefined ? `rgb(var(${variableName}))` : `rgba(var(${variableName}), ${opacityValue})`);
}

/**
 * A single `colors.skin` palette drives every colour utility (text-, bg-,
 * border-, ring-, from-, divide-, …). The previous config declared the palette
 * separately per utility, which silently dropped classes such as
 * `ring-skin-muted` and made `from-skin-hue` resolve to a different token than
 * `text-skin-hue`.
 */
const skin = {
	base: withOpacity("--color-text-base"),
	muted: withOpacity("--color-text-muted"),
	inverted: withOpacity("--color-text-inverted"),
	fill: withOpacity("--color-fill"),
	surface: withOpacity("--color-surface"),
	border: withOpacity("--color-border"),
	subtle: withOpacity("--muted"),
	hue: withOpacity("--color"),
	"hue-soft": withOpacity("--color-accent-soft"),
	"button-accent": withOpacity("--color-button-accent"),
	"button-accent-hover": withOpacity("--color-button-accent-hover"),
	"button-muted": withOpacity("--color-button-muted"),
};

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: { skin },
			boxShadow: {
				card: "var(--shadow-card)",
				"card-hover": "var(--shadow-card-hover)",
			},
			transitionTimingFunction: {
				"out-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
			},
			keyframes: {
				"fade-up": {
					from: { opacity: "0", transform: "translateY(10px)" },
					to: { opacity: "1", transform: "none" },
				},
				"draw-line": {
					from: { transform: "scaleY(0)" },
					to: { transform: "scaleY(1)" },
				},
			},
			animation: {
				"fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
				"draw-line": "draw-line 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
			},
		},
	},
	plugins: [],
};
