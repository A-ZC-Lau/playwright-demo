import { Locator } from "@playwright/test";

function JobCard (parent : Locator, nth ?: number) {
	const target = `[data-testid="job-card"]`;
	return {
		get _root () {
			const l = parent.locator(target);
			if (nth) {
				return l.nth(nth);
			}
			return l;
		},
		get teaser () {
			return this._root.locator(`[data-testid="job-card-teaser"]`);
		},
	};
}

export function Results (parent : Locator) {
	return {
		get _root () {
			return parent.locator(`[aria-label="Search Results"]`);
		},
		/** specifying index returns specific job card 0 indexed */
		GetJobCard (index ?: number) {
			return JobCard(parent, index);
		},
	};
}

