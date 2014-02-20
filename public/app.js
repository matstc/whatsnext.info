define(['knockout', 'jquery'], function(ko, jquery){
  var Language = function(name, shortName, color){
    this.name = name;
    this.url = '#/' + name.toLowerCase();
    this.shortName = shortName;
    this.color = color;
    return this;
  };

  var viewModel = {
      languages: [
        new Language('JavaScript', 'JS', '#EDCB5C'),
        new Language('Ruby', 'rb', '#ff6161'),
        new Language('Python', 'py', '#99A0FF')
        ],
      repositories: ko.observableArray([])
  };

  var init = function(){
    ko.applyBindings(viewModel);
  };

  return {init: init, Language: Language, viewModel: viewModel};
});

