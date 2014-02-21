requirejs.config({
  paths: {jquery: 'jquery-2.1.0'}
});

define(['jquery', 'app', 'sammy'], function(jquery, app, sammy){
  window.app = app;
  jquery(document).ready(app.init);

  if (typeof sammy === "undefined") // this happens once in a while (!)
    location.reload()

  sammy(function(){
    this.get("/", function(){
      this.redirect("#/about");
    });

    this.get("#/about", function(){
      app.viewModel.go(location.hash);
    });

    this.get("#/:language", function(){
      jquery.getJSON('/repositories/' + this.params['language'], app.viewModel.repositories);
      app.viewModel.go(location.hash);
    });
  }).run();

});

