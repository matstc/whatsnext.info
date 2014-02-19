requirejs.config({
  paths: {jquery: 'jquery-2.1.0'}
});

define(['jquery', 'app'], function(jquery, app){
  jquery(document).ready(app.init);
});

