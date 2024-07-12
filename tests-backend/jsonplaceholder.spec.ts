import {test} from "@playwright/test";


test(`get "posts"`, async function ({request}) {
	const res = await request.get("https://jsonplaceholder.typicode.com/posts");
	const j = await res.json();

	test.expect(j).toHaveLength(100);
});
