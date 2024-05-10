import { Page } from "@playwright/test";

import { example_search_response } from "./search";

/**
 * the type of mocks necessary for search to fill with results
 * greatly simplified for demo (still relies on whatever other API calls SEEK requires)
 */
export function SearchMock () {
	return {
		"api/chalice-search/v4/search" : example_search_response,
	};
}

/**
 * all of these mocks should filter by request method GET, otherwise it will also affect other methods
 * it also makes no sense to mock POST/PUT methods as these are things you probably want to thoroughly check
 */
export async function Mock (page : Page, mocks : Record<string, any>) {
	for (const key in mocks) {
		await page.route(key, (route) => {
			if (route.request().method() === "get") {
				route.fulfill(mocks[key]);
			}
		});
	}
}
