import { Locator } from "@playwright/test";

export function Model (parent : Locator) {
	return {
		get _root () {
			return parent.locator("#SearchBar");
		},
		get keywords () {
			return this._root.locator("#keywords-input");
		},
		get submit () {
			return this._root.locator(`#searchButton`);
		},
		get where () {
			return this._root.locator("#SearchBar__Where");
		},
	};
}
