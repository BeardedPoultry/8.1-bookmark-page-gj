import BookmarkListView from './views/bookmark-list';
(function(){
  'use strict';

  $(document).ready(function(){
    var bookmarks = new Backbone.Collection([
      {title: "Google", url: "http://google.com"},
      {title: "Twitter", url: "http://twitter.com"},
      {title: "Cool", url: "http://cool.com"},
    ]);

    var listView = new BookmarkListView({collection: bookmarks});
    $('body').prepend(listView.el);
  });
})();