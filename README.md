# intro

My demo at using Playwright. Using Seek as it has a relatively simple API to intercept and mock.

# install
```
npm install

npx playwright install
```

# run

## Unit test

`npm run test-unit search.spec.ts`

## E2E test

*Note: E2E test doesn't work due to captcha, this is here only as a demo/theory

If no session storage has been saved previously, `username` and `password` will be required. `name` will always be required for checking purposes

e.g.

`username=email@email.com password=1234 name="john smith" npm run test-e2e user_profile.spec.ts`

# results/aftermath

Artifacts are located in `test-results` trace files and videos are always saved to double check that the tests are performing as expected

run `npm run show-report` in order to see trace file (when successful)
