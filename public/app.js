define(['knockout', 'jquery'], function(ko, jquery){
  var Language = function(name){
    this.name = name;
    this.url = '#/' + name;
    return this;
  };

  var languagesViewModel = {
      languages: [
        new Language('javascript'),
        new Language('ruby'),
        new Language('python')
        ]
  };

  var init = function(){
    ko.applyBindings(languagesViewModel);
  };

  return {init: init, Language: Language};
});

