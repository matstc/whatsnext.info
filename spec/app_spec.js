requirejs = require('requirejs');
requirejs.config({ baseUrl: 'public', nodeRequire: require });
assert = requirejs('assert-plus');

app = requirejs('app');

describe("block", function(){
  it("should", function(){
    assert.equal(true, false);
  });
});
