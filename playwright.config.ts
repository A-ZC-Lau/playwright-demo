import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir : "./tests",
	/**
	avoid using globalSetup as it doesn't have traces
	"Using globalSetup and globalTeardown will not produce traces or artifacts. If you want to produce traces and artifacts, use project dependencies."
	*/
	// globalSetup : "./global.setup.ts",\
	expect : {
		timeout : 10_000,
	},
	reporter : [
		["list", { printSteps : true }],
		["html", { open : "on-failure" }],
	],
	use : {
		trace : "on",
		video : "on",
	},
	projects : [
		{
			name : "authentication",
			testMatch : "global.setup.ts",
		},
		{
			name : "e2e",
			use : { ...devices["Desktop Chrome"] },
			dependencies : ["authentication"],
		},
		{
			name : "unit",
			use : { ...devices["Desktop Chrome"] },
		},
		{
			name : "backend",
			testDir : "./tests-backend",
			use : { ...devices["Desktop Chrome"] },
		},
	],
	// long timeout if there are lots of tests being run
	timeout : 20_000,
});
