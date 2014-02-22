require("./spec_helper");

var jquery = requirejs('jquery');
var bindings = requirejs('bindings');

describe("the striped binding", function(){
  it("sets the odd class when $index is odd", function(){
    var elem = jquery("<div></div>");
    bindings.striped.update(elem, null, null, null, {'$index': function(){return 1;}});
    assert.equal(elem.attr("class"), "odd");
  });

  it("sets the even class when $index is even", function(){
    var elem = jquery("<div></div>");
    bindings.striped.update(elem, null, null, null, {'$index': function(){return 2;}});
    assert.equal(elem.attr("class"), "even");
  });
});


describe("the rank binding", function(){
  it("gives the one-based index including prefix", function(){
    var elem = jquery("<div></div>");
    bindings.rank.update(elem, function(){return "#";}, null, null, {'$index': function(){return 0;}});
    assert.equal(elem.text(), "#1");
  });
});
