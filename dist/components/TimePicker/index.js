"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _isValid = _interopRequireDefault(require("date-fns/isValid"));

var _isEqual = _interopRequireDefault(require("date-fns/isEqual"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TimePicker = /*#__PURE__*/function (_PureComponent) {
  _inherits(TimePicker, _PureComponent);

  var _super = _createSuper(TimePicker);

  function TimePicker(props, context) {
    var _this;

    _classCallCheck(this, TimePicker);

    _this = _super.call(this, props, context);
    _this.state = {
      currentTime: new Date(),
      hours: 0,
      minutes: 0,
      typePicker: ""
    };
    return _this;
  }

  _createClass(TimePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          ranges = _this$props.ranges,
          order = _this$props.order;
      /**
       * Определяем это стартовый TimePicker или конечный
       * @type {string}
       */

      var typePicker = order ? "end" : "start";
      var currentTime = typePicker === "end" ? ranges[0].endDate : ranges[0].startDate;
      this.setState({
        typePicker: typePicker
      });
      this.setState({
        currentTime: currentTime
      });
      this.setState({
        hours: currentTime.getHours()
      });
      this.setState({
        minutes: currentTime.getMinutes()
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var currentTime = prevProps.currentTime; // if (!isEqual(this.state.currentTime, this.props.currentTime)) {
      //     this.setState({value: this.formatDate(this.props)});
      // }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          hours = _this$state.hours,
          minutes = _this$state.minutes;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)('rdrTimePicker')
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: (0, _classnames.default)('rdrTimePicker__label')
      }, "\u0412\u0440\u0435\u043C\u044F"), /*#__PURE__*/_react.default.createElement("input", {
        value: hours,
        className: (0, _classnames.default)('custom-time__input-hours'),
        type: "number",
        style: {
          textAlign: "center",
          fontSize: "16px",
          width: "2.5em"
        },
        onChange: function onChange(e) {
          e.preventDefault();

          _this2.setState({
            hours: "".concat(e.target.value)
          });

          _this2.props.onChangeTime({
            type: _this2.state.typePicker,
            hours: +e.target.value,
            minutes: _this2.state.minutes
          });
        },
        min: "0",
        max: "23"
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: (0, _classnames.default)('rdrTimePicker__divider')
      }, ":"), /*#__PURE__*/_react.default.createElement("input", {
        value: minutes,
        className: (0, _classnames.default)('custom-time__input-minutes'),
        type: "number",
        style: {
          textAlign: "center",
          fontSize: "16px",
          width: "2.5em"
        },
        onChange: function onChange(e) {
          e.preventDefault();

          _this2.setState({
            minutes: "".concat(e.target.value)
          });

          _this2.props.onChangeTime({
            type: _this2.state.typePicker,
            hours: _this2.state.hours,
            minutes: +e.target.value
          });
        },
        min: "0",
        max: "59"
      }));
    }
  }]);

  return TimePicker;
}(_react.PureComponent);

TimePicker.propTypes = {
  value: _propTypes.default.object,
  placeholder: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,
  dateOptions: _propTypes.default.object,
  dateDisplayFormat: _propTypes.default.string,
  className: _propTypes.default.string,
  update: _propTypes.default.func.isRequired
};
TimePicker.defaultProps = {
  readOnly: true,
  disabled: false,
  dateDisplayFormat: 'MMM d, yyyy h:mma'
};
var _default = TimePicker;
exports.default = _default;