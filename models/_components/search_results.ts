import { Locator } from "@playwright/test";

function JobCard (parent : Locator, nth ?: number) {
	const target = `[data-testid="job-card"]`;
	return {
		get _root () {
			const l = parent.locator(target);
			if (typeof nth === "number") {
				return l.nth(nth);
			}
			return l;
		},
		get bulletpoints () {
			const root = this._root;
			return {
				GetBulletPoint (nth ?: number) {
					const b = root.locator("ul li");
					if (typeof nth === "number") {
						return b.nth(nth);
					}
					return b;
				},
			};
		},
		get company () {
			return this._root.locator(`[data-automation="jobCompany"]`);
		},
		get classification () {
			return this._root.locator(`[data-automation="jobClassification"]`);
		},
		get featured () {
			return this._root.locator(`[title="Featured"]`);
		},
		get location () {
			return this._root.locator(`[data-automation="jobLocation"]`);
		},
		get salary () {
			return this._root.locator(`[data-automation="jobSalary"]`);
		},
		get sub_classification () {
			return this._root.locator(`[data-automation="jobSubClassification"]`);
		},
		get title () {
			return this._root.locator(`[data-automation="jobTitle"]`);
		},
		get teaser () {
			return this._root.locator(`[data-automation="jobShortDescription"]`);
		},
	};
}
export type JobCard = ReturnType<typeof JobCard>

export function Model (parent : Locator) {
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

