require("./spec_helper");
var assert = require('assert');
var app = require('../../public/app');
app = app.default;

describe("language", function(){
  it("has a name", function(){
    assert.equal(app.Language('name').name, 'name');
  });

  it("has a hash that contains its name downcased", function(){
    var language = new app.Language('JavaScript');
    assert.equal(language.hash, '#/javascript');
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
  it("sets active language from name", function(){
    app.viewModel.activate(app.viewModel.languages[0].hash);
    assert.equal(app.viewModel.activeNavItem(), app.viewModel.languages[0]);

    app.viewModel.activate(app.viewModel.languages[1].hash);
    assert.equal(app.viewModel.activeNavItem(), app.viewModel.languages[1]);
  });
});
