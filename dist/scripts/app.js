require.register("main", function(exports, require, module){
  'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewsBookmarkList = require('./views/bookmark-list');

var _viewsBookmarkList2 = _interopRequireDefault(_viewsBookmarkList);

var _modelsBookmark = require('./models/bookmark');

require('./ajax-config');

(function () {
  'use strict';

  $(document).ready(function () {
    var bookmarks = new _modelsBookmark.BookmarkCollection();
    bookmarks.fetch();
    var listView = new _viewsBookmarkList2['default']({ collection: bookmarks });
    $('body').prepend(listView.el);
  });
})();
  
});

require.register("models/bookmark", function(exports, require, module){
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Bookmark = Backbone.Model.extend({
  idAttribute: "objectId"
});

var BookmarkCollection = Backbone.Collection.extend({
  url: "https://api.parse.com/1/classes/link",

  model: Bookmark,

  parse: function parse(response) {
    return response.results;
  }
});

exports["default"] = { Bookmark: Bookmark, BookmarkCollection: BookmarkCollection };
module.exports = exports["default"];
  
});

require.register("views/bookmark-item", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = Backbone.View.extend({
  template: JST['bookmark-item'],

  tagName: 'li',

  events: {
    'click .bookmark-edit-button': 'editBookmark',
    'submit .bookmark-edit-form': 'saveBookmark'
  },

  initialize: function initialize() {
    this.render();
    this.listenTo(this.model, 'change', this.render);
  },

  render: function render() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  editBookmark: function editBookmark(e) {
    console.log(this.model.toJSON());
  },

  saveBookmark: function saveBookmark(e) {
    e.preventDefault();
    var title = this.$('.bookmark-title').val();
    var url = this.$('.bookmark-url').val();
    this.model.save({
      title: title,
      url: url
    });
  }
});
module.exports = exports['default'];
  
});

require.register("views/bookmark-list", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _bookmarkItem = require('./bookmark-item');

var _bookmarkItem2 = _interopRequireDefault(_bookmarkItem);

exports['default'] = Backbone.View.extend({

  tagName: 'ul',

  initialize: function initialize() {
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function render() {
    this.renderChildren();
  },

  renderChildren: function renderChildren() {
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map((function (child) {
      var view = new _bookmarkItem2['default']({
        model: child
      });
      this.$el.append(view.el);
      return view;
    }).bind(this));

    return this;
  },

  remove: function remove() {
    _.invoke(this.children || [], 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }
});
module.exports = exports['default'];
  
});

require.register("views/bookmark-views", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = Backbone.View.extend({
	template: JST['bookmark-item'],
	initialize: function initialize() {
		this.render();
	},
	render: function render() {
		this.$el.html(this.template(this.model.toJSON()));
	}
});
module.exports = exports['default'];
  
});

//# sourceMappingURL=app.js.map