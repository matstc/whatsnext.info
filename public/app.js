define(['knockout', 'jquery'], function(ko, jquery){
  var Language = function(name){
    this.name = name;
    this.url = '#/' + name;
    return this;
  };

  var viewModel = {
      languages: [
        new Language('javascript'),
        new Language('ruby'),
        new Language('python')
        ],
      repositories: ko.observableArray([])
  };

  var init = function(){
    ko.applyBindings(viewModel);
  };

  return {init: init, Language: Language, viewModel: viewModel};
});

