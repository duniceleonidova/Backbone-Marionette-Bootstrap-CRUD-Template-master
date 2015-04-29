define(['backbone_relational','vent'], function(RelationalModel,vent){

	var User = Backbone.RelationalModel.extend({
    
    initialize: function(){
      //Tell everyon that view has been initialized
      vent.trigger("user:model:initialize",{model:this});
    }

  });

  return User;

});