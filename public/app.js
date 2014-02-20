define(['knockout', 'jquery'], function(ko, jquery){

  var Language = function(name, shortName, color){
    this.name = name;
    this.hash = '#/' + name.toLowerCase();
    this.shortName = shortName;
    this.color = color;
    this.active = ko.observable(false);
    return this;
  };

  var NavItem = function(hash){
    this.hash = hash;
    return this;
  };

  var viewModel = {
      languages: [
        new Language('Ruby', 'rb', '#ff6161'),
        new Language('JavaScript', 'JS', '#EDCB5C'),
        new Language('Python', 'py', '#242BFF'),
        new Language('CSS', '{}', '#88f')
        ],
      about: new NavItem("#/about"),
      repositories: ko.observableArray([]),
      activeNavItem: ko.observable(null),
      go: function(hash){
        this.activeNavItem(this.languages.concat(this.about).filter(function(navItem){
          return navItem.hash === hash;
        })[0]);
      }
  };

  viewModel.activeLanguage = ko.computed(function(){
    if(viewModel.activeNavItem() && viewModel.activeNavItem().constructor === Language){
      return viewModel.activeNavItem();
    }
    return null;
  });

  var init = function(){
    ko.applyBindings(viewModel);
  };

  return {init: init, NavItem: NavItem, Language: Language, viewModel: viewModel};
});

