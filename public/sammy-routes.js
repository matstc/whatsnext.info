import sammy from 'sammy'

export function initSammyRoutes(){
  sammy(function(){
    this.get("/", function(){
      this.redirect("#/about")
    })

    this.get("#/about", function(){
      app.viewModel.activate(location.hash)
      $(document.head.getElementsByTagName("title")).text("What's Next? — About")
      $.getJSON('/contributors', app.viewModel.contributors)
    })

    this.get("#/:language", function(){
      app.viewModel.repositories([])
      var skippedLanguages = ['programming', 'rails', 'meteor']
      if ($.inArray(this.params['language'], skippedLanguages) == -1){
        $.getJSON('/repositories/' + this.params['language'], app.viewModel.repositories)
      }

      app.viewModel.activate(location.hash)

      if(typeof window !== 'undefined' && app.viewModel.activeLanguage()){
        var language = app.viewModel.activeLanguage()

        $.getJSON('/resources/' + language.name.toLowerCase(), language.resources)

        $(document.head.getElementsByTagName('title')).text("What's Next? — " + language.name)
      }
    })
  }).run()
}
