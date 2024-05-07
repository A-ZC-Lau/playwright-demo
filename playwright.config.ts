import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir : "./tests",
	/**
	 avoid using globalSetup as it doesn't have traces
	 "Using globalSetup and globalTeardown will not produce traces or artifacts. If you want to produce traces and artifacts, use project dependencies."
	*/
	// globalSetup : "./global.setup.ts",
	projects : [
		{
			name : "setup authentication",
			testMatch : /global\.setup\.ts/,
		},
		{
			name : "chromium",
			use : { ...devices["Desktop Chrome"] },
			dependencies : ["setup authentication"],
		},
	],
	// long timeout if there are lots of tests being run
	timeout : 60_000,
});
