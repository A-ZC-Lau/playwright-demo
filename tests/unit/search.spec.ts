import {test} from "@playwright/test";

import { routes } from "../../routes/seek";
import * as HOME from "../../models/home";


test("mock 3 card and check data", async function ({page}) {
	const body = page.locator("body");

	await page.goto(routes._root);
	const modelHome = HOME.Search.Content(body);
});
