import { Locator } from "@playwright/test";

// LeftLinks - Job Search, Profile, Career advice, Explore companies

export function RightLinks (parent : Locator) {
	return {
		get _root () {
			return parent.locator(`[data-automation="desktop-auth-links-wrapper"]`);
		},
		get employers_link () {
			return this._root.locator(`[data-automation="employers_link"]`);
		},
		/** this also serves as profile access once logged in */
		get sign_in_register () {
			return this._root.locator(`[data-automation="sign-in-register"]`);
		},
	};
}
