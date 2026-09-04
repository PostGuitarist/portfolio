/** Year portion of an ISO date, parsed as UTC so timezones cannot shift it. */
export function getYear(date: string): number {
	return new Date(`${date.slice(0, 10)}T00:00:00Z`).getUTCFullYear();
}

/**
 * Renders a résumé date range, e.g. `2021 - 2025` or `2024 - Present`.
 * A missing `endDate` means the role or course is ongoing.
 */
export function formatYearRange(startDate: string, endDate?: string | null, ongoingLabel = "Present"): string {
	return `${getYear(startDate)} - ${endDate ? getYear(endDate) : ongoingLabel}`;
}
