'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/tkay/coding/personal/nexThrone/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/tkay/coding/personal/nexThrone/node_modules/next/dist/lib/css.js');

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

var _link = require('/Users/tkay/coding/personal/nexThrone/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _posts = require('../data/posts');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var id = _ref.url.query.id;

  var item = _.find(_posts2.default, { id: id });

  return _react2.default.createElement(
    'div',
    { className: (0, _css.style)(styles.main) },
    _react2.default.createElement(
      'div',
      { className: (0, _css.style)(styles.header) },
      _react2.default.createElement(
        _link2.default,
        { href: '/' },
        'Home'
      ),
      _react2.default.createElement(
        'h3',
        null,
        ' NEXTHRONE - THE REVELATION OF GAME OF THRONES\' CHARACTERS '
      )
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _css.style)(styles.panel) },
      _react2.default.createElement(
        'h1',
        { className: (0, _css.style)(styles.heading) },
        'Character: ',
        item.codeName,
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        'Real Name: ',
        item.realName,
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        'Brief Description:',
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'span',
          null,
          ' ',
          item.story,
          ' '
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _css.style)(styles.singlePhoto) },
      _react2.default.createElement('img', { src: item.display_src, alt: item.realName, width: 500, height: 500 })
    )
  );
};

var styles = {
  main: {
    padding: '50px'
  },

  header: {
    font: '15px Monaco',
    textAlign: 'center'
  },

  panel: {
    float: 'right',
    marginRight: '140px',
    width: '300px'
  },

  singlePhoto: {
    border: '1px solid #999',
    width: '500px',
    height: '500px',
    float: 'left'
  },

  heading: {
    font: '15px Monaco'
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FjY291bnQuanMiXSwibmFtZXMiOlsiXyIsImlkIiwidXJsIiwicXVlcnkiLCJpdGVtIiwiZmluZCIsInN0eWxlcyIsIm1haW4iLCJoZWFkZXIiLCJwYW5lbCIsImhlYWRpbmciLCJjb2RlTmFtZSIsInJlYWxOYW1lIiwic3RvcnkiLCJzaW5nbGVQaG90byIsImRpc3BsYXlfc3JjIiwicGFkZGluZyIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmbG9hdCIsIm1hcmdpblJpZ2h0Iiwid2lkdGgiLCJib3JkZXIiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0lBQWFBLEM7O0FBQ2I7Ozs7QUFDQTs7Ozs7Ozs7a0JBRWUsZ0JBQWdDO0FBQUEsTUFBYkMsRUFBYSxRQUE3QkMsR0FBNkIsQ0FBdEJDLEtBQXNCLENBQWJGLEVBQWE7O0FBQzdDLE1BQU1HLE9BQVFKLEVBQUVLLElBQUYsa0JBQWMsRUFBRUosSUFBSUEsRUFBTixFQUFkLENBQWQ7O0FBRUEsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFXLGdCQUFNSyxPQUFPQyxJQUFiLENBQWhCO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVyxnQkFBTUQsT0FBT0UsTUFBYixDQUFoQjtBQUVrQjtBQUFBO0FBQUEsVUFBTSxNQUFLLEdBQVg7QUFBQTtBQUFBLE9BRmxCO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGLEtBREY7QUFNRTtBQUFBO0FBQUEsUUFBSyxXQUFXLGdCQUFNRixPQUFPRyxLQUFiLENBQWhCO0FBQ0U7QUFBQTtBQUFBLFVBQUksV0FBVyxnQkFBTUgsT0FBT0ksT0FBYixDQUFmO0FBQUE7QUFDZU4sYUFBS08sUUFEcEI7QUFFRSxpREFGRjtBQUdFLGlEQUhGO0FBQUE7QUFJZVAsYUFBS1EsUUFKcEI7QUFLRSxpREFMRjtBQU1FLGlEQU5GO0FBQUE7QUFRRSxpREFSRjtBQVNFLGlEQVRGO0FBVUU7QUFBQTtBQUFBO0FBQUE7QUFBU1IsZUFBS1MsS0FBZDtBQUFBO0FBQUE7QUFWRjtBQURGLEtBTkY7QUFxQkU7QUFBQTtBQUFBLFFBQUssV0FBVyxnQkFBTVAsT0FBT1EsV0FBYixDQUFoQjtBQUNFLDZDQUFLLEtBQU1WLEtBQUtXLFdBQWhCLEVBQTZCLEtBQUtYLEtBQUtRLFFBQXZDLEVBQWlELE9BQU8sR0FBeEQsRUFBNkQsUUFBUSxHQUFyRTtBQURGO0FBckJGLEdBREY7QUEyQkQsQzs7QUFHRCxJQUFNTixTQUFTO0FBQ2JDLFFBQU07QUFDSlMsYUFBUztBQURMLEdBRE87O0FBS2JSLFVBQVE7QUFDTlMsVUFBTSxhQURBO0FBRU5DLGVBQVc7QUFGTCxHQUxLOztBQVViVCxTQUFPO0FBQ0xVLFdBQU8sT0FERjtBQUVMQyxpQkFBYSxPQUZSO0FBR0xDLFdBQU87QUFIRixHQVZNOztBQWdCYlAsZUFBYTtBQUNYUSxZQUFRLGdCQURHO0FBRVhELFdBQU8sT0FGSTtBQUdYRSxZQUFRLE9BSEc7QUFJWEosV0FBTztBQUpJLEdBaEJBOztBQXVCYlQsV0FBUztBQUNQTyxVQUFNO0FBREM7QUF2QkksQ0FBZiIsImZpbGUiOiJhY2NvdW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90a2F5L2NvZGluZy9wZXJzb25hbC9uZXhUaHJvbmUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0ICogYXMgIF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHBvc3RzIGZyb20gJy4uL2RhdGEvcG9zdHMnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IHVybDogeyBxdWVyeTogeyBpZCB9IH0gfSkgPT4ge1xuICBjb25zdCBpdGVtID0gIF8uZmluZChwb3N0cywgeyBpZDogaWQgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMubWFpbil9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy5oZWFkZXIpfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+SG9tZTwvTGluaz5cbiAgICAgICAgPGgzPiBORVhUSFJPTkUgLSBUSEUgUkVWRUxBVElPTiBPRiBHQU1FIE9GIFRIUk9ORVMnIENIQVJBQ1RFUlMgPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy5wYW5lbCl9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMuaGVhZGluZyl9PlxuICAgICAgICAgIENoYXJhY3RlcjogeyBpdGVtLmNvZGVOYW1lIH1cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgUmVhbCBOYW1lOiB7IGl0ZW0ucmVhbE5hbWUgfVxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICBCcmllZiBEZXNjcmlwdGlvbjpcbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPHNwYW4+IHsgaXRlbS5zdG9yeSB9IDwvc3Bhbj5cbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLnNpbmdsZVBob3RvKX0+XG4gICAgICAgIDxpbWcgc3JjPXsgaXRlbS5kaXNwbGF5X3NyY30gYWx0PXtpdGVtLnJlYWxOYW1lfSB3aWR0aD17NTAwfSBoZWlnaHQ9ezUwMH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuY29uc3Qgc3R5bGVzID0ge1xuICBtYWluOiB7XG4gICAgcGFkZGluZzogJzUwcHgnXG4gIH0sXG5cbiAgaGVhZGVyOiB7XG4gICAgZm9udDogJzE1cHggTW9uYWNvJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gIH0sXG5cbiAgcGFuZWw6IHtcbiAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICBtYXJnaW5SaWdodDogJzE0MHB4JyxcbiAgICB3aWR0aDogJzMwMHB4J1xuICB9LFxuXG4gIHNpbmdsZVBob3RvOiB7XG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICM5OTknLFxuICAgIHdpZHRoOiAnNTAwcHgnLFxuICAgIGhlaWdodDogJzUwMHB4JyxcbiAgICBmbG9hdDogJ2xlZnQnXG4gIH0sXG5cbiAgaGVhZGluZzoge1xuICAgIGZvbnQ6ICcxNXB4IE1vbmFjbydcbiAgfVxufVxuIl19