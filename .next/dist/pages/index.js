'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/tkay/coding/personal/nexThrone/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/tkay/coding/personal/nexThrone/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/tkay/coding/personal/nexThrone/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/tkay/coding/personal/nexThrone/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/tkay/coding/personal/nexThrone/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/tkay/coding/personal/nexThrone/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/tkay/coding/personal/nexThrone/node_modules/next/dist/lib/css.js');

var _link = require('/Users/tkay/coding/personal/nexThrone/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _posts = require('../data/posts');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: (0, _css.style)(styles.header) },
          _react2.default.createElement(
            'h3',
            null,
            ' NEXTHRONE - THE REVELATION OF GAME OF THRONES\' CHARACTERS '
          )
        ),
        _react2.default.createElement(
          'table',
          { className: (0, _css.style)(styles.table) },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                { className: (0, _css.style)(styles.th) },
                'Character'
              ),
              _react2.default.createElement(
                'th',
                { className: (0, _css.style)(styles.th) },
                'Real Name'
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            this.props.posts.map(function (post, i) {
              return _react2.default.createElement(
                'tr',
                { key: i },
                _react2.default.createElement(
                  'td',
                  { className: (0, _css.style)(styles.td) },
                  post.codeName
                ),
                _react2.default.createElement(
                  'td',
                  { className: (0, _css.style)(styles.td) },
                  _react2.default.createElement(
                    _link2.default,
                    { href: '/account?id=' + post.id },
                    post.realName
                  )
                )
              );
            })
          )
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps() {
      return { posts: _posts2.default };
    }
  }]);
  return _class;
}(_react2.default.Component);

exports.default = _class;


var styles = {
  th: {
    background: '#00cccc',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: '12px',
    padding: '12px 35px'
  },

  header: {
    font: '15px Monaco',
    textAlign: 'center'
  },

  table: {
    fontFamily: 'Arial',
    margin: '25px auto',
    borderCollapse: 'collapse',
    border: '1px solid #eee',
    borderBottom: '2px solid #00cccc'
  },

  td: {
    color: '#999',
    border: '1px solid #eee',
    padding: '12px 35px',
    borderCollapse: 'collapse'
  },

  list: {
    padding: '50px',
    textAlign: 'center'
  },

  photo: {
    display: 'inline-block'
  },

  photoLink: {
    color: '#333',
    verticalAlign: 'middle',
    cursor: 'pointer',
    background: '#eee',
    display: 'inline-block',
    width: '250px',
    height: '250px',
    lineHeight: '250px',
    margin: '10px',
    border: '2px solid transparent',
    ':hover': {
      borderColor: 'blue'
    }
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsImhlYWRlciIsInRhYmxlIiwidGgiLCJwcm9wcyIsInBvc3RzIiwibWFwIiwicG9zdCIsImkiLCJ0ZCIsImNvZGVOYW1lIiwiaWQiLCJyZWFsTmFtZSIsIkNvbXBvbmVudCIsImJhY2tncm91bmQiLCJjb2xvciIsInRleHRUcmFuc2Zvcm0iLCJmb250U2l6ZSIsInBhZGRpbmciLCJmb250IiwidGV4dEFsaWduIiwiZm9udEZhbWlseSIsIm1hcmdpbiIsImJvcmRlckNvbGxhcHNlIiwiYm9yZGVyIiwiYm9yZGVyQm90dG9tIiwibGlzdCIsInBob3RvIiwiZGlzcGxheSIsInBob3RvTGluayIsInZlcnRpY2FsQWxpZ24iLCJjdXJzb3IiLCJ3aWR0aCIsImhlaWdodCIsImxpbmVIZWlnaHQiLCJib3JkZXJDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBT1k7QUFDUixhQUNFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxZQUFLLFdBQVcsZ0JBQU1BLE9BQU9DLE1BQWIsQ0FBaEI7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FEQTtBQUlBO0FBQUE7QUFBQSxZQUFPLFdBQVcsZ0JBQU1ELE9BQU9FLEtBQWIsQ0FBbEI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsa0JBQUksV0FBVyxnQkFBTUYsT0FBT0csRUFBYixDQUFmO0FBQUE7QUFBQSxlQURKO0FBRUk7QUFBQTtBQUFBLGtCQUFJLFdBQVcsZ0JBQU1ILE9BQU9HLEVBQWIsQ0FBZjtBQUFBO0FBQUE7QUFGSjtBQURGLFdBREY7QUFPRTtBQUFBO0FBQUE7QUFFTSxpQkFBS0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxHQUFqQixDQUFzQixVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxxQkFDbEI7QUFBQTtBQUFBLGtCQUFJLEtBQUtBLENBQVQ7QUFDSTtBQUFBO0FBQUEsb0JBQUksV0FBVyxnQkFBTVIsT0FBT1MsRUFBYixDQUFmO0FBQW1DRix1QkFBS0c7QUFBeEMsaUJBREo7QUFFSTtBQUFBO0FBQUEsb0JBQUksV0FBVyxnQkFBTVYsT0FBT1MsRUFBYixDQUFmO0FBQ0U7QUFBQTtBQUFBLHNCQUFNLHVCQUFxQkYsS0FBS0ksRUFBaEM7QUFBd0NKLHlCQUFLSztBQUE3QztBQURGO0FBRkosZUFEa0I7QUFBQSxhQUF0QjtBQUZOO0FBUEY7QUFKQSxPQURGO0FBMkJEOzs7c0NBaEN3QjtBQUN2QixhQUFPLEVBQUVQLHNCQUFGLEVBQVA7QUFDRDs7O0VBSDBCLGdCQUFNUSxTOzs7OztBQW9DbkMsSUFBTWIsU0FBUztBQUNiRyxNQUFJO0FBQ0ZXLGdCQUFZLFNBRFY7QUFFRkMsV0FBTyxNQUZMO0FBR0ZDLG1CQUFlLFdBSGI7QUFJRkMsY0FBVSxNQUpSO0FBS0ZDLGFBQVM7QUFMUCxHQURTOztBQVNiakIsVUFBUTtBQUNOa0IsVUFBTSxhQURBO0FBRU5DLGVBQVc7QUFGTCxHQVRLOztBQWNibEIsU0FBTztBQUNMbUIsZ0JBQVksT0FEUDtBQUVMQyxZQUFRLFdBRkg7QUFHTEMsb0JBQWdCLFVBSFg7QUFJTEMsWUFBUSxnQkFKSDtBQUtMQyxrQkFBYztBQUxULEdBZE07O0FBc0JiaEIsTUFBSTtBQUNGTSxXQUFPLE1BREw7QUFFRlMsWUFBUSxnQkFGTjtBQUdGTixhQUFTLFdBSFA7QUFJRkssb0JBQWdCO0FBSmQsR0F0QlM7O0FBNkJiRyxRQUFNO0FBQ0pSLGFBQVMsTUFETDtBQUVKRSxlQUFXO0FBRlAsR0E3Qk87O0FBa0NiTyxTQUFPO0FBQ0xDLGFBQVM7QUFESixHQWxDTTs7QUFzQ2JDLGFBQVc7QUFDVGQsV0FBTyxNQURFO0FBRVRlLG1CQUFlLFFBRk47QUFHVEMsWUFBUSxTQUhDO0FBSVRqQixnQkFBWSxNQUpIO0FBS1RjLGFBQVMsY0FMQTtBQU1USSxXQUFPLE9BTkU7QUFPVEMsWUFBUSxPQVBDO0FBUVRDLGdCQUFZLE9BUkg7QUFTVFosWUFBUSxNQVRDO0FBVVRFLFlBQVEsdUJBVkM7QUFXVCxjQUFVO0FBQ1JXLG1CQUFhO0FBREw7QUFYRDtBQXRDRSxDQUFmIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90a2F5L2NvZGluZy9wZXJzb25hbC9uZXhUaHJvbmUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gJ25leHQvY3NzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHBvc3RzIGZyb20gJy4uL2RhdGEvcG9zdHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICByZXR1cm4geyBwb3N0czogcG9zdHMgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMuaGVhZGVyKX0+XG4gICAgICAgIDxoMz4gTkVYVEhST05FIC0gVEhFIFJFVkVMQVRJT04gT0YgR0FNRSBPRiBUSFJPTkVTJyBDSEFSQUNURVJTIDwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy50YWJsZSl9PlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMudGgpfT5DaGFyYWN0ZXI8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMudGgpfT5SZWFsIE5hbWU8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMucG9zdHMubWFwKCAocG9zdCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLnRkKX0+eyBwb3N0LmNvZGVOYW1lIH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy50ZCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9hY2NvdW50P2lkPSR7cG9zdC5pZH1gfT57IHBvc3QucmVhbE5hbWUgfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICB0aDoge1xuICAgIGJhY2tncm91bmQ6ICcjMDBjY2NjJyxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgcGFkZGluZzogJzEycHggMzVweCcsXG4gIH0sXG5cbiAgaGVhZGVyOiB7XG4gICAgZm9udDogJzE1cHggTW9uYWNvJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gIH0sXG5cbiAgdGFibGU6IHtcbiAgICBmb250RmFtaWx5OiAnQXJpYWwnLFxuICAgIG1hcmdpbjogJzI1cHggYXV0bycsXG4gICAgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnLFxuICAgIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCAjMDBjY2NjJ1xuICB9LFxuXG4gIHRkOiB7XG4gICAgY29sb3I6ICcjOTk5JyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2VlZScsXG4gICAgcGFkZGluZzogJzEycHggMzVweCcsXG4gICAgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZSdcbiAgfSxcblxuICBsaXN0OiB7XG4gICAgcGFkZGluZzogJzUwcHgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgfSxcblxuICBwaG90bzoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gIH0sXG5cbiAgcGhvdG9MaW5rOiB7XG4gICAgY29sb3I6ICcjMzMzJyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2VlZScsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgd2lkdGg6ICcyNTBweCcsXG4gICAgaGVpZ2h0OiAnMjUwcHgnLFxuICAgIGxpbmVIZWlnaHQ6ICcyNTBweCcsXG4gICAgbWFyZ2luOiAnMTBweCcsXG4gICAgYm9yZGVyOiAnMnB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6ICdibHVlJ1xuICAgIH1cbiAgfVxufVxuIl19