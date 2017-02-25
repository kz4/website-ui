'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reselect = require('reselect');

var _selectors = require('./selectors');

var _reactBootstrap = require('react-bootstrap');

var _modal = require('components/ModelWrapper/modal');

var _modal2 = _interopRequireDefault(_modal);

var _Heading = require('./Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _MetaDataDisplay = require('./MetaDataDisplay');

var _MetaDataDisplay2 = _interopRequireDefault(_MetaDataDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ProjectPage
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ProjectPage = exports.ProjectPage = function (_React$PureComponent) {
  _inherits(ProjectPage, _React$PureComponent);

  function ProjectPage() {
    _classCallCheck(this, ProjectPage);

    return _possibleConstructorReturn(this, (ProjectPage.__proto__ || Object.getPrototypeOf(ProjectPage)).apply(this, arguments));
  }

  _createClass(ProjectPage, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactHelmet2.default, {
          title: 'Login',
          meta: [{ name: 'description', content: 'Description of Login' }]
        }),
        _react2.default.createElement(
          _reactBootstrap.Grid,
          { fluid: true },
          _react2.default.createElement(
            _reactBootstrap.Row,
            { className: 'show-grid page-header' },
            _react2.default.createElement(
              _reactBootstrap.Col,
              { md: 12 },
              _react2.default.createElement(_Heading2.default, { title: this.props.title })
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Row,
            { className: 'show-grid' },
            _react2.default.createElement(
              _reactBootstrap.Panel,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12, md: 8 },
                'Project Metadata',
                _react2.default.createElement(_MetaDataDisplay2.default, { metaData: this.props.metaData })
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 6, md: 4 },
                _react2.default.createElement(_reactBootstrap.Image, { responsive: true, src: 'http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg' })
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Row,
            { className: 'show-grid' },
            _react2.default.createElement(
              _reactBootstrap.Panel,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { md: 12 },
                this.props.description
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Row,
            null,
            _react2.default.createElement(
              _reactBootstrap.Panel,
              { header: 'Data Sets' },
              _react2.default.createElement(
                _reactBootstrap.Col,
                { md: 12 },
                _react2.default.createElement(_modal2.default, null)
              )
            )
          )
        )
      );
    }
  }]);

  return ProjectPage;
}(_react2.default.PureComponent);

ProjectPage.propTypes = {
  dispatch: _react.PropTypes.func.isRequired
};

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  title: (0, _selectors.makeSelectProjectPageTitle)(),
  description: (0, _selectors.makeSelectProjectPageDescription)(),
  metaData: (0, _selectors.makeSelectProjectPageMetaData)()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProjectPage);

//# sourceMappingURL=index-compiled.js.map