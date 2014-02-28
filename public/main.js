requirejs.config({
  paths: {jquery: 'jquery-2.1.0'}
});

define(['jquery', 'app', 'sammy', 'bootstrap'], function(jquery, app, sammy){
  window.app = app;
  jquery(document).ready(app.init);

  if (typeof sammy === "undefined") // this happens once in a while (!)
    location.reload()

  sammy(function(){
    this.get("/", function(){
      this.redirect("#/about");
    });

    this.get("#/about", function(){
      app.viewModel.activate(location.hash);
      $(document.head.getElementsByTagName("title")).text("What's Next? — About");
    });

    this.get("#/:language", function(){
      app.viewModel.repositories([]);

      if (this.params['language'] !== 'programming'){
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

