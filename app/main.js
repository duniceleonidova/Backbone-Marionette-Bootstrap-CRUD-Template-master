require.config({
  paths : {
    //Main
    jquery : 'vendor/jquery/dist/jquery',
    'jquery.ui' : 'vendor/jquery-ui/jquery-ui',
    'jquery.touchswipe' : 'vendor/jquery-touchswipe/jquery.touchSwipe',
    underscore : 'vendor/underscore/underscore',
    backbone : 'vendor/backbone/backbone',
    backbone_relational : 'vendor/backbone.relational/backbone-relational',
    marionette : 'vendor/marionette/lib/backbone.marionette',
    imgcache : 'vendor/imgcache.js/js/imgcache',
    imagesloaded : 'vendor/imagesloaded/imagesloaded',
    lawnchair : 'vendor/lawnchair/lawnchair',
    'backbone.offline': 'vendor/backbone-offline/backbone.offline',
    bootstrap : 'vendor/bootstrap/bootstrap',
    moment : 'vendor/moment/moment',
    //RequireJS Plugin
    text: 'vendor/text/text', 
    //App
    app: 'app',
    vent: 'vent',
  },
  shim : {
    jquery : {
      exports : 'jquery'
    },
    jquery_ui : {
      exports : 'jquery_ui'
    },
    jquery_touchswipe : {
      exports : 'jquery_touchswipe'
    },
    underscore : {
      exports : '_'
    },
    backbone : {
      deps : ['jquery', 'underscore'],
      exports : 'backbone'
    },
    marionette : {
      deps : ['jquery', 'underscore', 'backbone'],
      exports : 'marionette'
    },
    backbone_relational : {
      deps : ['backbone']
    },
    lawnchair: {
      exports: 'lawnchair'
    },
    'backbone.offline': {
      deps: ['underscore', 'backbone', 'lawnchair'],
      exports: 'offline'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'bootstrap'
    },
    imgcache: {
      deps: ['imagesloaded'],
      exports: 'imgcache'
    }
  },
  waitSeconds: 0
});

require(['app'], function(MyApp) {

  var options = {};

  MyApp.start(options);

})