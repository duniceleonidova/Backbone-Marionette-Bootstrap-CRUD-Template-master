define(['backbone','vent'
       ,'../models/user'
], 
function(Backbone,vent
        ,User
){

	var Users = Backbone.Collection.extend({
    //Set API url
  	url: window.app_base_url + window.app_api_url + window.app_api_version + '/users',
    //Save Old Sync
  	sync:  Backbone.sync,
    //Set model
  	model: User,
    //Initialize collection
  	initialize: function(){
		vent.trigger("user:collection:initialize",{collection:this});
  	},
    parse: function(response) {
		console.log('response', response)
		 //Add Server DB Count
		 this.count = response.count;
		 //Return Records
		  return response.records;
    }
	});

	return Users;

});
