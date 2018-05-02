# Issue in @vue/test-utils@1.0.0-beta.15

Seems like [prvious issue](https://github.com/vuejs/vue-test-utils/issues/502) with incorrect order of depdendencies evaluation was not fully fixed.

## Setup
```
npm install
run run test
```

Expected: all tests pass

Resulting output:
```
 FAIL  tests/unit/App.spec.js
  App.vue
    ✕ renders props.msg when passed (21ms)

  ● App.vue › renders props.msg when passed

    expect(received).toEqual(expected)

    Expected value to equal:
      "1,2,3,4,5"
    Received:
      "1,2,3"

      14 |     wrapper.vm.collection.push(4, 5);
      15 |     expect(wrapper.vm.stringified).toEqual('1,2,3,4,5');
    > 16 |     expect(wrapper.vm.data).toEqual('1,2,3,4,5');
      17 |   })
      18 | })
      19 |

      at Object.<anonymous> (tests/unit/App.spec.js:16:29)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
```
