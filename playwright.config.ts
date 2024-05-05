import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	// ...
	projects: [
	{
		name: 'setup db',
		testMatch: /global\.setup\.ts/,
	},
	// {
	//   other project
	// }
]
});
