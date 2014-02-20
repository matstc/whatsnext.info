define(['knockout', 'jquery'], function(ko, jquery){

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

        if(typeof window !== "undefined" && this.activeNavItem().constructor === Language){
          var language = viewModel.activeNavItem();
          jquery.getJSON('/resources/' + language.name.toLowerCase(), language.resources);

          setTimeout(function(){
            var toScroll = jquery("h1#section")[0].getBoundingClientRect().top + jquery(document.body).scrollTop() - 40;
            jquery("html, body").animate({ scrollTop: toScroll + "px" });
          }, 100);
        }
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

