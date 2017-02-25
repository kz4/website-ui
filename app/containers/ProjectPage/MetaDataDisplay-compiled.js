'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral([''], ['']),
    _templateObject2 = _taggedTemplateLiteral(['\npadding-left: 1em;\nlist-style: none;\n'], ['\npadding-left: 1em;\nlist-style: none;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MetaDataListItem = _styledComponents2.default.li(_templateObject);

var MetaDataList = _styledComponents2.default.ul(_templateObject2);

var getMetaDataList = function getMetaDataList(obj) {
  return _react2.default.createElement(
    MetaDataList,
    null,
    Object.entries(obj).map(function (_ref, reactKey) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      if (typeof value === 'string') {
        return _react2.default.createElement(
          MetaDataListItem,
          { key: reactKey },
          key,
          ': ',
          value
        );
      } else {
        var innerList = getMetaDataList(value);
        return _react2.default.createElement(
          MetaDataListItem,
          { key: reactKey },
          key,
          ': ',
          _react2.default.createElement(
            MetaDataList,
            null,
            innerList
          )
        );
      }
    })
  );
};

var MetaDataDisplay = function MetaDataDisplay(props) {
  return getMetaDataList(props.metaData);
};

MetaDataDisplay.propTypes = {
  metaData: _react.PropTypes.object.isRequired
};

exports.default = MetaDataDisplay;

//# sourceMappingURL=MetaDataDisplay-compiled.js.map