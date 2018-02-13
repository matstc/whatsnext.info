requirejs.config({
  paths: {jquery: 'jquery-2.1.0'},
  deps: ["jquery", "require"],
  callback: function(jquery, require){
    require(['app', 'sammy', 'bootstrap'], function(app, sammy){
      window.app = app;
      jquery(document).ready(app.init);

      sammy(function(){
        this.get("/", function(){
          this.redirect("#/about");
        });

        this.get("#/about", function(){
          app.viewModel.activate(location.hash);
          $(document.head.getElementsByTagName("title")).text("What's Next? — About");
          jquery.getJSON('/contributors', app.viewModel.contributors);
        });

        this.get("#/:language", function(){
          app.viewModel.repositories([]);
          skippedLanguages = ['programming', 'rails', 'meteor'];
          if ($.inArray(this.params['language'], skippedLanguages) == -1){
            jquery.getJSON('/repositories/' + this.params['language'], app.viewModel.repositories);
          }

          app.viewModel.activate(location.hash);

          if(typeof window !== "undefined" && app.viewModel.activeLanguage()){
            var language = app.viewModel.activeLanguage();

            jquery.getJSON('/resources/' + language.name.toLowerCase(), language.resources);

            setTimeout(function(){
              var toScroll = jquery("h1#section")[0].getBoundingClientRect().top + jquery(document.body).scrollTop() - 20;
              jquery("html, body").animate({ scrollTop: toScroll + "px" });
            }, 200);

            $(document.head.getElementsByTagName("title")).text("What's Next? — " + language.name);
          }
        });
      }).run();
    });
  }
});
