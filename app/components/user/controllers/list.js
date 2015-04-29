define(['vent', '../collections/users'],
    function(vent, Users) {
	
        vent.on("user:list:initialize", function(options) {
            //Assign collection
            options.view.collection = new Users();
        }); //END app:initializer

        //Fetch Collection
        vent.on("user:list:onRender", function(options) {
            vent.trigger("user:list:search:start", {
                view: options.view
            });
            options.view.collection.fetch({
                headers: {
                    'x-access-token': window.access_token
                },
                success: function(err) {
                    vent.trigger("user:list:search:stop", {
                        view: options.view
                    });
                    console.log("Fetch successful");
                },
                error: function(err) {
                    vent.trigger("user:list:search:error", {
                        view: options.view
                    });
                    console.log('err', arguments)
                }
            });
        });


        vent.on("user:list:search:start", function(options) {
            var $table = options.view.$('.table');
            $table.addClass('whirl')
        })

        vent.on("user:list:search:stop", function(options) {
            var $table = options.view.$('.table');
            $table.removeClass('whirl')
        })

        vent.on("user:list:search:error", function(options) {
            var $table = options.view.$('.table');
            $table.removeClass('whirl')
        })

    });