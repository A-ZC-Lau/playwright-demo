import {test} from "@playwright/test";

import * as PROFILE from "../../models/profile";
import { routes } from "../../routes/seek";


/**
 * this test requires environment variables
 */
test("check user profile after logging in", async function ({page}) {
	const name = process.env.name;
	if (typeof name !== "string") {
		test.fail(`"name" environment variable not provided`);
	}

	await page.goto(routes._root);
	const model = PROFILE.Model(page.locator("body"));
	await model.profile_menu.profile.click();
	await test.expect(model.content.name).toHaveText(name);
});
