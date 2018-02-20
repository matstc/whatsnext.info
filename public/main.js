import $ from 'jquery'

// CSS
import '../css/main.scss'
import 'bootstrap'
import '../css/styles.css'

import app from './app'


$(function() {
  window.app = app
  app.init()
  initSammyRoutes()
})

// on small screens (when navbar toggler shows)
// make sure navbar collapses after clicking a nav item
$(function() {
  $('.navbar-collapse ul li a').click(function(){
    $('.navbar-toggler:visible').click();
  });
})


