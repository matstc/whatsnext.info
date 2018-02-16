import $ from 'jquery'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'bootstrap/dist/js/bootstrap.js'

import './styles.css'
import { initSammyRoutes } from './sammy-routes'
import app from './app'


$(function() {
  window.app = app
  app.init()
  initSammyRoutes()
})
