import { Locator } from "@playwright/test";

export function Header (parent : Locator) {
	return {
		get _root () {
			return parent.locator("header.AppHeader");
		},
		/** user icon (profile) */
		get user () {
			return this._root.locator("div.AppHeader-user button.AppHeader-logo");
		},
	};
}
