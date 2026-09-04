export type ThemePreference = "system" | "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

const PREFERENCES: ThemePreference[] = ["system", "light", "dark"];

/** `true` while the OS is asking for a dark UI. */
export function prefersDark(): boolean {
	return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/**
 * Reads the saved preference, falling back to "system".
 * Older builds stored the *resolved* theme, so "light"/"dark" stay valid values.
 * Storage can throw in private browsing modes, hence the try/catch.
 */
export function getStoredPreference(): ThemePreference {
	try {
		const stored = localStorage.getItem(THEME_STORAGE_KEY);
		return PREFERENCES.includes(stored as ThemePreference) ? (stored as ThemePreference) : "system";
	} catch {
		return "system";
	}
}

export function resolvePreference(preference: ThemePreference): "light" | "dark" {
	return preference === "system" ? (prefersDark() ? "dark" : "light") : preference;
}

/** Applies a preference to the document without persisting it. */
export function applyPreference(preference: ThemePreference): void {
	document.documentElement.classList.toggle("dark", resolvePreference(preference) === "dark");
}

/** Applies a preference and remembers it for the next visit. */
export function setPreference(preference: ThemePreference): void {
	applyPreference(preference);
	try {
		localStorage.setItem(THEME_STORAGE_KEY, preference);
	} catch {
		/* Storage unavailable — the choice simply will not persist. */
	}
}

/** Keeps the page in sync while the preference is "system". */
export function watchSystemTheme(onChange: () => void): void {
	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", onChange);
}
