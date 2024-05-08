import { Locator } from "@playwright/test";

export function Model (parent : Locator) {
	return {
		get header () {
			return {
				get _root () {
					return parent.locator("something");
				},
			};
		},
	};
}
