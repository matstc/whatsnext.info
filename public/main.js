requirejs.config({
  paths: {jquery: 'jquery-2.1.0'}
});

define(['jquery', 'app', 'sammy'], function(jquery, app, sammy){
  jquery(document).ready(app.init);

  sammy(function(){
    this.get("#/:language", function(){
      console.log("loading " + this.params['language']);

      jquery.getJSON('/repositories/' + this.params['language'], function(json){
        console.log('received data from server: ' + json);
        app.viewModel.repositories(json);
      });
    });
  }).run();

});

