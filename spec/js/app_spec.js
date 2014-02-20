requirejs = require('requirejs');
requirejs.config({ baseUrl: 'public', nodeRequire: require });
assert = requirejs('assert-plus');

app = requirejs('app');

describe("language", function(){
  it("has a name", function(){
    assert.equal(new app.Language('name').name, 'name');
  });

  it("has a url that contains its name downcased", function(){
    var language = new app.Language('JavaScript');
    assert.equal(language.url, '#/javascript');
  });

  it("has a color assigned", function(){
    var language = new app.Language('JavaScript', 'JS', '#fff15c');
    assert.equal(language.color, '#fff15c');
  });

  it("has a short name", function(){
    var language = new app.Language('JavaScript', 'JS');
    assert.equal(language.shortName, 'JS');
  });

});

describe("view model", function(){
  it("sets active language from url name", function(){
    app.viewModel.activateLanguage(app.viewModel.languages[0].name.toLowerCase());
    assert.equal(app.viewModel.activeLanguage(), app.viewModel.languages[0]);

    app.viewModel.activateLanguage(app.viewModel.languages[1].name.toLowerCase());
    assert.equal(app.viewModel.activeLanguage(), app.viewModel.languages[1]);
  });
});
