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
