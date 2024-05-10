import {Locator, test} from "@playwright/test";

import { routes } from "../../routes/seek";
import * as MOCK from "../../mock/index";
import * as SEARCH_MOCK from "../../mock/search";
import * as HOME from "../../models/home";
async function CheckCard (
	card : HOME.SEARCH_RESULTS.JobCard,
	data : SEARCH_MOCK.MakeAdvertiserInput,
) {
	for (const [i, value] of data.bulletPoints.entries()) {
		await test.expect(card.bulletpoints.GetBulletPoint(i)).toHaveText(value);
	}
	await test.expect(card.featured).toBeVisible({visible : data.featured});
	await test.expect(card.company).toHaveText(data.advertiser);
	await test.expect(card.salary).toHaveText(data.salary);
	await test.expect(card.teaser).toHaveText(data.teaser);
	await test.expect(card.title).toHaveText(data.title);
}

const card1 : SEARCH_MOCK.MakeAdvertiserInput = {
	advertiser : "card1 advertiser",
	bulletPoints : [
		"card1 bullet 1",
		"card1 bullet 2",
	],
	featured : true,
	salary : "$100 - $200",
	teaser : "card1 teaser",
	title : "title1",
};
const card2 : SEARCH_MOCK.MakeAdvertiserInput = {
	advertiser : "card2 advertiser",
	bulletPoints : [
		"card2 bullet 1",
		"card2 bullet 2",
		"card2 bullet 3",
	],
	featured : false,
	salary : "word based salary",
	teaser : "some lengthy teaser to be filled into here",
	title : "title2",
};
const advertiser1 = SEARCH_MOCK.MakeAdvertiser(card1);
const advertiser2 = SEARCH_MOCK.MakeAdvertiser(card2);
const searchMock = MOCK.SearchMock();
searchMock["api/chalice-search/v4/search"] = SEARCH_MOCK.CreateSearchResults([advertiser1, advertiser2]);

test("mock 2 cards and check data", async function ({page}) {
	const body = page.locator("body");

	await MOCK.Mock(page, searchMock);

	await page.goto(routes._root);
	const modelHome = HOME.Model(body);
	await modelHome.search.keywords.type("automation test demo");
	await modelHome.search.submit.click();

	const jc1 = modelHome.search_results.GetJobCard(0);
	await test.step("checks for card1", async function () {
		await CheckCard(jc1, card1);
	});
	await test.step("checks for card2", async function () {
		await CheckCard(modelHome.search_results.GetJobCard(1), card2);
	});
});
