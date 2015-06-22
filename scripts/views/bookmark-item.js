export default Backbone.View.extend({
  template: JST['bookmark-item'],

  tagName: 'li',

  events: {
    'click .bookmark-edit-button': 'editBookmark',
    'submit .bookmark-edit-form': 'saveBookmark'
  },

  initialize: function(){
    this.render();
    this.listenTo(this.model, 'change', this.render);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  editBookmark: function(e) {
    console.log(this.model.toJSON());
  },

  saveBookmark: function(e) {
    e.preventDefault();
    var title = this.$('.bookmark-title').val();
    var url = this.$('.bookmark-url').val();
    this.model.save({
      title: title,
      url: url
    });
  }
});
