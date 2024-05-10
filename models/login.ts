import { Locator } from "@playwright/test";

export function Model (parent : Locator) {
	return {
		get password () {
			return parent.locator("#password");
		},
		get sign_in () {
			return parent.locator(`[data-cy="login"]`);
		},
		get username () {
			return parent.locator("#emailAddress");
		},
	};
}
