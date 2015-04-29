define(['marionette','vent' //Libraries
    //Views
    ,'./item'
	,'./noitems'
    //Controllers
    ,'../controllers/list'
    //Templates
    ,'text!../templates/list.html'
	   
	], 
	function(Marionette,vent //Libraries
    //Views
    ,ItemView
	,NoItemsView
    //Controllers
    ,ListController
    //Templates
    ,list_template
    ){

	var ListView = Backbone.Marionette.CompositeView.extend({
		template: _.template(list_template),
		childView: ItemView,
		className: 'row',
		childViewContainer: ".list-items",
		
		events: {
		  
		},

		initialize: function(){
		  //Tell everyon that view has been initialized
		  //			vent.trigger("user:list:initialize",{view:this});
		},

		
		onBeforeRender: function(){
		  //Tell everyon that view has been almost rendered
		  vent.trigger("user:list:onBeforeRender",{view:this});
		},
		onRender: function(){
		  //Tell everyon that view has been rendered
		  vent.trigger("user:list:onRender",{view:this});
		},
		emptyView: NoItemsView

	});

  return ListView;

});