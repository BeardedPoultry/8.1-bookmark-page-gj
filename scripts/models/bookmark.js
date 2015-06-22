var Bookmark = Backbone.Model.extend({
  idAttribute: 'objectId'
});

var BookmarkCollection = Backbone.Collection.extend({
  url: "https://api.parse.com/1/classes/Bookmark",

  model: Bookmark,

  parse: function(response) {
    return response.results;
  }
});

export default {Bookmark, BookmarkCollection};
