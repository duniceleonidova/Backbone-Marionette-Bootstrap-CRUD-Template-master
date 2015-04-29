define(['marionette','vent' //Libraries
       ,'text!../templates/item.html' //Templates
  ], 
function(Marionette,vent //Libraries
        ,item_template
){

  var ItemView = Backbone.Marionette.LayoutView.extend({
    template: _.template(item_template),
    tagName: "tr",
    className: 'record',
    events: {

    },
    initialize: function(){
      //Tell everyon that view has been initialized
      vent.trigger("user:list:item:initialize",{view:this});
    },
    onBeforeRender: function(){
      //Tell everyon that view has been almost rendered
      vent.trigger("user:list:item:onBeforeRender",{view:this});
    },
    onRender: function(){
      //Tell everyon that view has been rendered
      vent.trigger("user:list:item:onRender",{view:this});
    }
  });

  return ItemView;

});