import { Locator } from "@playwright/test";

import * as SEARCH from "./_components/search";
import * as SEARCH_RESULTS from "./_components/search_results";
export type * as SEARCH_RESULTS from "./_components/search_results";

/** the unique contents of this page (not used across several pages) */
// export function Content (parent : Locator) {
// }

export function Model (parent : Locator) {
	return {
		search : SEARCH.Content(parent),
		search_results : SEARCH_RESULTS.Content(parent),
	};
}
export type Model = ReturnType<typeof Model>
type a = SEARCH_RESULTS.JobCard
