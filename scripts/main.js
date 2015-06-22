(function(){
  'use strict';

  $(document).ready(function(){
    var bookmarks = new Backbone.Collection([
      {title: "Google", url: "http://google.com"},
      {title: "Facbook", url: "http"}
    ]);
  });
})();
