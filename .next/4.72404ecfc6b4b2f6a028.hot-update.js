webpackHotUpdate(4,{

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(73);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css = __webpack_require__(72);
	
	var _lodash = __webpack_require__(126);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _link = __webpack_require__(124);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _posts = __webpack_require__(120);
	
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
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/account"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/account") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hY2NvdW50LmpzP2Y2ZTQiXSwibmFtZXMiOlsiXyIsImlkIiwidXJsIiwicXVlcnkiLCJpdGVtIiwiZmluZCIsInN0eWxlcyIsIm1haW4iLCJoZWFkZXIiLCJwYW5lbCIsImhlYWRpbmciLCJjb2RlTmFtZSIsInJlYWxOYW1lIiwic3RvcnkiLCJzaW5nbGVQaG90byIsImRpc3BsYXlfc3JjIiwicGFkZGluZyIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmbG9hdCIsIm1hcmdpblJpZ2h0Iiwid2lkdGgiLCJib3JkZXIiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7S0FBYUEsQzs7QUFDYjs7OztBQUNBOzs7Ozs7OzttQkFFZSxnQkFBZ0M7QUFBQSxPQUFiQyxFQUFhLFFBQTdCQyxHQUE2QixDQUF0QkMsS0FBc0IsQ0FBYkYsRUFBYTs7QUFDN0MsT0FBTUcsT0FBUUosRUFBRUssSUFBRixrQkFBYyxFQUFFSixJQUFJQSxFQUFOLEVBQWQsQ0FBZDs7QUFFQSxVQUNFO0FBQUE7QUFBQSxPQUFLLFdBQVcsZ0JBQU1LLE9BQU9DLElBQWIsQ0FBaEI7QUFDRTtBQUFBO0FBQUEsU0FBSyxXQUFXLGdCQUFNRCxPQUFPRSxNQUFiLENBQWhCO0FBRWtCO0FBQUE7QUFBQSxXQUFNLE1BQUssR0FBWDtBQUFBO0FBQUEsUUFGbEI7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEYsTUFERjtBQU1FO0FBQUE7QUFBQSxTQUFLLFdBQVcsZ0JBQU1GLE9BQU9HLEtBQWIsQ0FBaEI7QUFDRTtBQUFBO0FBQUEsV0FBSSxXQUFXLGdCQUFNSCxPQUFPSSxPQUFiLENBQWY7QUFBQTtBQUNlTixjQUFLTyxRQURwQjtBQUVFLGtEQUZGO0FBR0Usa0RBSEY7QUFBQTtBQUllUCxjQUFLUSxRQUpwQjtBQUtFLGtEQUxGO0FBTUUsa0RBTkY7QUFBQTtBQVFFLGtEQVJGO0FBU0Usa0RBVEY7QUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFTUixnQkFBS1MsS0FBZDtBQUFBO0FBQUE7QUFWRjtBQURGLE1BTkY7QUFxQkU7QUFBQTtBQUFBLFNBQUssV0FBVyxnQkFBTVAsT0FBT1EsV0FBYixDQUFoQjtBQUNFLDhDQUFLLEtBQU1WLEtBQUtXLFdBQWhCLEVBQTZCLEtBQUtYLEtBQUtRLFFBQXZDLEVBQWlELE9BQU8sR0FBeEQsRUFBNkQsUUFBUSxHQUFyRTtBQURGO0FBckJGLElBREY7QUEyQkQsRTs7QUFHRCxLQUFNTixTQUFTO0FBQ2JDLFNBQU07QUFDSlMsY0FBUztBQURMLElBRE87O0FBS2JSLFdBQVE7QUFDTlMsV0FBTSxhQURBO0FBRU5DLGdCQUFXO0FBRkwsSUFMSzs7QUFVYlQsVUFBTztBQUNMVSxZQUFPLE9BREY7QUFFTEMsa0JBQWEsT0FGUjtBQUdMQyxZQUFPO0FBSEYsSUFWTTs7QUFnQmJQLGdCQUFhO0FBQ1hRLGFBQVEsZ0JBREc7QUFFWEQsWUFBTyxPQUZJO0FBR1hFLGFBQVEsT0FIRztBQUlYSixZQUFPO0FBSkksSUFoQkE7O0FBdUJiVCxZQUFTO0FBQ1BPLFdBQU07QUFEQztBQXZCSSxFQUFmIiwiZmlsZSI6IjQuNzI0MDRlY2ZjNmI0YjJmNmEwMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSAnbmV4dC9jc3MnXG5pbXBvcnQgKiBhcyAgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgcG9zdHMgZnJvbSAnLi4vZGF0YS9wb3N0cydcblxuZXhwb3J0IGRlZmF1bHQgKHsgdXJsOiB7IHF1ZXJ5OiB7IGlkIH0gfSB9KSA9PiB7XG4gIGNvbnN0IGl0ZW0gPSAgXy5maW5kKHBvc3RzLCB7IGlkOiBpZCB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy5tYWluKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLmhlYWRlcil9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5Ib21lPC9MaW5rPlxuICAgICAgICA8aDM+IE5FWFRIUk9ORSAtIFRIRSBSRVZFTEFUSU9OIE9GIEdBTUUgT0YgVEhST05FUycgQ0hBUkFDVEVSUyA8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLnBhbmVsKX0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy5oZWFkaW5nKX0+XG4gICAgICAgICAgQ2hhcmFjdGVyOiB7IGl0ZW0uY29kZU5hbWUgfVxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICBSZWFsIE5hbWU6IHsgaXRlbS5yZWFsTmFtZSB9XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIEJyaWVmIERlc2NyaXB0aW9uOlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8c3Bhbj4geyBpdGVtLnN0b3J5IH0gPC9zcGFuPlxuICAgICAgICA8L2gxPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMuc2luZ2xlUGhvdG8pfT5cbiAgICAgICAgPGltZyBzcmM9eyBpdGVtLmRpc3BsYXlfc3JjfSBhbHQ9e2l0ZW0ucmVhbE5hbWV9IHdpZHRoPXs1MDB9IGhlaWdodD17NTAwfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIG1haW46IHtcbiAgICBwYWRkaW5nOiAnNTBweCdcbiAgfSxcblxuICBoZWFkZXI6IHtcbiAgICBmb250OiAnMTVweCBNb25hY28nLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgfSxcblxuICBwYW5lbDoge1xuICAgIGZsb2F0OiAncmlnaHQnLFxuICAgIG1hcmdpblJpZ2h0OiAnMTQwcHgnLFxuICAgIHdpZHRoOiAnMzAwcHgnXG4gIH0sXG5cbiAgc2luZ2xlUGhvdG86IHtcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzk5OScsXG4gICAgd2lkdGg6ICc1MDBweCcsXG4gICAgaGVpZ2h0OiAnNTAwcHgnLFxuICAgIGZsb2F0OiAnbGVmdCdcbiAgfSxcblxuICBoZWFkaW5nOiB7XG4gICAgZm9udDogJzE1cHggTW9uYWNvJ1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9hY2NvdW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==