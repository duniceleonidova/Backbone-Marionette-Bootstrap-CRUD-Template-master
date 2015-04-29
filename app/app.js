define(['backbone', 'marionette', 'vent',
        //App Components
        'components/user/index'
    ],
    function(Backbone, Marionette, vent,
        //App Components
        User
        ){

  //Create Aoo
  MyApp = new Backbone.Marionette.Application();

  //Add App Reagions
  MyApp.addRegions({
  	header: 	"#header",
  	container:  "#content",
  	footer:     "#footer"
  });

  //Main Application View
  MyApp.addInitializer(function(options){
    vent.trigger("app:initializer");
  });

  //Render Views from other events
  vent.on("app:render", function(render){
    MyApp[render.region].show(render.view);
  });
  
  //Close Views from other events
  vent.on("app:view_close", function(region){
    MyApp[region].empty();
  });

  return MyApp;
});