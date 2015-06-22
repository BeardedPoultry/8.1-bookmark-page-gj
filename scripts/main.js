import BookmarkListView from './views/bookmark-list';

import {BookmarkCollection} from './models/bookmark';

import './ajax-config';
(function(){
  'use strict';

  $(document).ready(function(){
    var bookmarks = new BookmarkCollection();
    bookmarks.fetch();
    var listView = new BookmarkListView({collection: bookmarks});
    $('body').prepend(listView.el);
  });
})();
