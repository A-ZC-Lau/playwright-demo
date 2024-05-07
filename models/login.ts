import { Locator } from "@playwright/test";

export function Model (parent : Locator) {
	return {
		get password () {
			return parent.locator("input[name=password]");
		},
		get sign_in () {
			return parent.locator("input[name=commit]");
		},
		get username () {
			return parent.locator("input[name=login]");
		},
	};
}
