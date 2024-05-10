import { test } from "@playwright/test";
import { routes } from "../routes/seek";
import { Model } from "../models/login";

const username = process.env.username;
const password = process.env.password;

const authFile = "session_storage/user.json";

test("setup", async function ({page}) {
	if (!username || !password) {
		return;
	}

	const model = Model(page.locator("body"));

	await page.goto(routes.login);
	await model.username.fill(username);
	await model.password.fill(password);
	await model.sign_in.click();
	await page.waitForURL(routes._root);

	await page.context().storageState({ path : authFile });
});
