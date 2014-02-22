define(['knockout', 'jquery', 'bindings'], function(ko, jquery){

  var Language = function(name, shortName, color){
    this.name = name;
    this.hash = '#/' + name.toLowerCase();
    this.shortName = shortName;
    this.color = color;
    this.active = ko.observable(false);
    this.resources = ko.observable(null);
    return this;
  };

  var NavItem = function(hash){
    this.hash = hash;
    return this;
  };

  var viewModel = new function(){
    var self = this;
    self.languages = [
      new Language('Ruby', 'rb', '#ff6161'),
      new Language('JavaScript', 'JS', '#EDCB5C'),
      new Language('CoffeeScript', 'CS', '#222'),
      new Language('Python', 'py', '#242BFF'),
      new Language('CSS', '{}', '#88f')
      ];

    self.about = new NavItem("#/about");
    self.onAbout = function(){ return self.activeNavItem() === self.about; };
    self.repositories = ko.observableArray([]);
    self.activeNavItem = ko.observable(null);
    self.activeCss = function(item){ return self.activeNavItem() === item ? "active" : ""; };

    self.activate = function(hash){
      self.activeNavItem(self.languages.concat(self.about).filter(function(navItem){
        return navItem.hash === hash;
      })[0]);
    };

    self.activeLanguage = ko.computed(function(){
      if(self.activeNavItem() && self.activeNavItem().constructor === Language){
        return self.activeNavItem();
      }
      return null;
    });

    return self;
  };

  var init = function(){
    ko.applyBindings(viewModel);
  };

  return {init: init, NavItem: NavItem, Language: Language, viewModel: viewModel};
});

