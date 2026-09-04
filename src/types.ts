/**
 * Shape of `cv.json`. It follows the JSON Resume schema, with a few extra
 * fields this site uses (`basics.theme`, and the per-role `location`,
 * `responsibilities`, `achievements` and `skills`).
 *
 * Sections that are optional here are simply omitted from `cv.json` when empty.
 */
export interface CV {
	basics: Basics;
	work: Work[];
	education: Education[];
	certificates?: Certificate[];
	skills?: Skill[];
	projects?: Project[];
	languages?: Language[];
	volunteer?: Volunteer[];
	awards?: Award[];
	publications?: Publication[];
	interests?: Interest[];
	references?: Reference[];
}

/** Palettes defined in `src/styles/global.css`. */
export type ThemeName = "default" | "blue" | "red" | "green" | "cyber";

/** ISO-8601 date, e.g. `2024-06-01`. */
export type DateString = string;

export interface Basics {
	name: string;
	label: string;
	image: string;
	email?: string;
	phone?: string;
	url: string;
	summary: string;
	theme?: ThemeName;
	location: Location;
	profiles: Profile[];
}

export interface Location {
	address?: string;
	postalCode?: string;
	city: string;
	countryCode?: string;
	region: string;
}

/** Networks with a matching icon in `src/components/ui/SocialIcon.astro`. */
export type Network = "GitHub" | "LinkedIn" | "X";

export interface Profile {
	network: Network | string;
	username: string;
	url: string;
}

export interface Work {
	name: string;
	position: string;
	url?: string;
	startDate: DateString;
	endDate?: DateString | null;
	location?: string;
	/** e.g. "Remote", "On site". Snake-cased to match the JSON Resume extras. */
	location_type?: string;
	summary?: string | string[];
	responsibilities?: string[];
	achievements?: string[];
	skills?: string[];
}

export interface Education {
	institution: string;
	url?: string;
	area: string;
	studyType?: string;
	startDate: DateString;
	endDate?: DateString | null;
	score?: string;
	courses?: string[];
}

export interface Certificate {
	name: string;
	date: DateString;
	issuer: string;
	url?: string;
}

export interface Skill {
	name: string;
	level?: string;
	keywords?: string[];
}

export interface Project {
	name: string;
	isActive: boolean;
	description: string;
	highlights: string[];
	url?: string;
	github?: string;
}

export interface Language {
	language: string;
	fluency: string;
}

export interface Volunteer {
	organization: string;
	position: string;
	url?: string;
	startDate: DateString;
	endDate?: DateString | null;
	summary?: string;
	highlights?: string[];
}

export interface Award {
	title: string;
	date: DateString;
	awarder: string;
	summary?: string;
}

export interface Publication {
	name: string;
	publisher: string;
	releaseDate: DateString;
	url?: string;
	summary?: string;
}

export interface Interest {
	name: string;
	keywords?: string[];
}

export interface Reference {
	name: string;
	reference: string;
}
