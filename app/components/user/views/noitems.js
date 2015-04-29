define(['marionette', 'vent', 'text!../templates/noitem.html'],
function(Marionette, vent //Libraries
    //Templates
    , noitem_template
) {


    var NoItemsView = Backbone.Marionette.ItemView.extend({
		tagName: "tr",
        template: _.template(noitem_template)
    });

    return NoItemsView;

});