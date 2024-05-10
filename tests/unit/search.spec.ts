import {test} from "@playwright/test";

import { routes } from "../../routes/seek";
import * as MOCK from "../../mock/index";
import * as SEARCH_MOCK from "../../mock/search";
import * as HOME from "../../models/home";

const card1 : SEARCH_MOCK.MakeAdvertiserInput = {
	advertiser : "card1 description",
	bulletPoints : [
		"card1 bullet 1",
		"card1 bullet 2",
	],
	displayType : "standard",
	salary : "$100 - $200",
	teaser : "card1 teaser",
	title : "title1",
};
const advertiser1 = SEARCH_MOCK.MakeAdvertiser(card1);
const searchMock = MOCK.SearchMock();
searchMock["api/chalice-search/v4/search"] = SEARCH_MOCK.CreateSearchResults([advertiser1]);

test("mock 3 card and check data", async function ({page}) {
	const body = page.locator("body");

	await MOCK.Mock(page, searchMock);

	await page.goto(routes._root);
	const modelHome = HOME.Model(body);
	await modelHome.search.keywords.type("automation test demo");

	const jc1 = modelHome.search_results.GetJobCard(0);
	await test.expect(jc1.bulletpoints.GetBulletPoint(0)).toHaveText(card1.bulletPoints[0]);
	await test.expect(jc1.bulletpoints.GetBulletPoint(1)).toHaveText(card1.bulletPoints[1]);
	await test.expect(jc1.company).toHaveText(card1.advertiser);
	await test.expect(jc1.salary).toHaveText(card1.salary);
	await test.expect(jc1.featured).not.toBeVisible();
	await test.expect(jc1.teaser).toHaveText(card1.teaser);
	await test.expect(jc1.title).toHaveText(card1.title);
});
