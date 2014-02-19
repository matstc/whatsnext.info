requirejs = require('requirejs');
requirejs.config({ baseUrl: 'public', nodeRequire: require });
assert = requirejs('assert-plus');

app = requirejs('app');

describe("language", function(){
  it("has a name", function(){
    assert.equal(new app.Language('name').name, 'name');
  });

  it("has a url that contains its name", function(){
    var language = new app.Language('brainfck');
    assert.equal(language.url, '#/brainfck');
  });
});
