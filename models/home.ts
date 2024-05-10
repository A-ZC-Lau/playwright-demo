import { Locator } from "@playwright/test";

import * as SEARCH from "./_components/search";
import * as SEARCH_RESULTS from "./_components/search_results";
import * as HEADER from "./_components/header";
import * as PROFILE_MENU from "./_components/profile_menu";
export type * as SEARCH_RESULTS from "./_components/search_results";

/** the unique contents of this page (not used across several pages) */
// export function Content (parent : Locator) {
// }

export function Model (parent : Locator) {
	return {
		header : HEADER.Model(parent),
		profile_menu : PROFILE_MENU.Model(parent),
		search : SEARCH.Model(parent),
		search_results : SEARCH_RESULTS.Model(parent),
	};
}
export type Model = ReturnType<typeof Model>
