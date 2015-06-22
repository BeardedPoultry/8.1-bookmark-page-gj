export default Backbone.View.extend({
	template: JST['bookmark-item'],
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
	}
});