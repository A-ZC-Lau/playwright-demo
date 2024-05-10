import { Locator } from "@playwright/test";

export function Model (parent : Locator) {
	return {
		get _root () {
			return parent.locator(`[role=menu]`).nth(0); // this is the top menu (there is a bottom one)
		},
		get profile () {
			return this._root.locator(`[data-automation="profile"]`);
		},
	};
}
