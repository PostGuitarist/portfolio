import { getCollection, type CollectionEntry } from "astro:content";

export type App = CollectionEntry<"apps">;
export type LegalDoc = CollectionEntry<"legal">;

export async function getApps(): Promise<App[]> {
	const apps = await getCollection("apps", ({ data }) => import.meta.env.DEV || !data.draft);
	return apps.sort((a, b) => a.data.name.localeCompare(b.data.name));
}

// Legal doc ids look like "<app-slug>/<doc-slug>"
export function splitDocId(id: string) {
	const [app, doc] = id.split("/");
	return { app, doc };
}

export async function getDocsForApp(appId: string): Promise<LegalDoc[]> {
	const docs = await getCollection("legal", ({ id }) => splitDocId(id).app === appId);
	return docs.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export function formatDate(date: Date) {
	return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}
