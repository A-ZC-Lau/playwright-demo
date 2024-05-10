import { Locator } from "@playwright/test";

import * as PROFILE_MENU from "./_components/profile_menu";

function Content (parent : Locator) {
	return {
		get name () {
			return parent.locator(`[data-automation="inline-nudge-name"]`);
		},
	};
}

export function Model (parent : Locator) {
	return {
		// we can import other reused components into this, won't be doing it for demo purposes
		//
		content : Content(parent),
		profile_menu : PROFILE_MENU.Model(parent),
	};
}
