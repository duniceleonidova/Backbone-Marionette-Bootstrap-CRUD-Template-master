define(['vent'
       ,'backbone.offline'
      ], 
function(vent
       ,Offline
      ){
    
  //Collection Offline Setup
  vent.on("user:collection:initialize", function(options){
    options.collection.storage = new Offline.Storage('users', this, {autoPush: false});
  });//END app:initializer

});