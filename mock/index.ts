import { Page } from "@playwright/test";

/**
 * the type of mocks necessary to access any page in a real test
 */
function StandardMock (page : Page) {
	page.route("abc", (route) => {
		// route.fulfill();
	});
	return {
		"api/chalice-search/v4/search" : () => {
			page.route();
		},
	};
}

/**
 * all of these mocks should filter by request method GET, otherwise it will also affect other methods
 * it also makes no sense to mock POST/PUT methods as these are things you probably want to thoroughly check
 */
function Mock (page : Page, mocks : Record<string, unknown>) {

}
