'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateEditProjectPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reselect = require('reselect');

var _MetaDataInput = require('./MetaDataInput');

var _MetaDataInput2 = _interopRequireDefault(_MetaDataInput);

var _selectors = require('./selectors');

var _reactBootstrap = require('react-bootstrap');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * CreateEditProjectPage
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// import { FormattedMessage } from 'react-intl';

// import messages from './messages';


var CreateEditProjectPage = exports.CreateEditProjectPage = function (_React$PureComponent) {
  _inherits(CreateEditProjectPage, _React$PureComponent);

  function CreateEditProjectPage() {
    _classCallCheck(this, CreateEditProjectPage);

    return _possibleConstructorReturn(this, (CreateEditProjectPage.__proto__ || Object.getPrototypeOf(CreateEditProjectPage)).apply(this, arguments));
  }

  _createClass(CreateEditProjectPage, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactHelmet2.default, {
          title: 'CreateEditProjectPage',
          meta: [{ name: 'description', content: 'Description of CreateEditProjectPage' }]
        }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'form',
            null,
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              {
                controlId: 'formBasicText'
              },
              _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                null,
                'MetaData:'
              ),
              _react2.default.createElement(_MetaDataInput2.default, {
                metaData: this.props.metaData,
                onMetaDataUpdated: this.props.metaDataUpdated
              }),
              _react2.default.createElement(_reactBootstrap.FormControl.Feedback, null)
            )
          )
        )
      );
    }
  }]);

  return CreateEditProjectPage;
}(_react2.default.PureComponent);

CreateEditProjectPage.propTypes = {
  dispatch: _react.PropTypes.func.isRequired
};

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  metaData: (0, _selectors.makeSelectMetaData)()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    metaDataUpdated: function metaDataUpdated(newMetaData) {
      return dispatch((0, _actions.makeMetaDataUpdatedAction)(newMetaData));
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CreateEditProjectPage);

//# sourceMappingURL=index-compiled.js.map