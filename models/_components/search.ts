import { Locator } from "@playwright/test";

export function Content (parent : Locator) {
	return {
		get _root () {
			return parent.locator("#SearchBar");
		},
		get keywords () {
			return this._root.locator("#keywords-input");
		},
		get where () {
			return this._root.locator("#SearchBar__Where");
		},
	};
}
