This repository contains code to reproduce specific regression issue introduced in the `@vue/test-utils@1.1.3` package.
Issue link: https://github.com/vuejs/vue-test-utils/issues/1923

### To reproduce the issue

1. Install dependencies with `npm install`
1. Run unit test with `npm run test`

It is expected for unit-test to fail

To verify this is regression issue, simply update `@vue/test-utils` to version `1.1.2`:

1. `npm install --save-dev --save-exact @vue/test-utils@1.1.2`
1. `npm run test`

This time unit test should successfully pass. Issue is reproduced starting from `v1.1.3`
