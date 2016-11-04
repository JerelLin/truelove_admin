webpackJsonp([15],{

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(248);

	__webpack_require__(317);

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(318);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../../../css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".ant-spin {\n  color: #2db7f5;\n  vertical-align: middle;\n  text-align: center;\n  opacity: 0;\n  position: absolute;\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  font-size: 12px;\n  display: none;\n}\n.ant-spin-spinning {\n  opacity: 1;\n  position: static;\n  display: inline-block;\n}\n.ant-spin-nested-loading {\n  position: relative;\n}\n.ant-spin-nested-loading .ant-spin {\n  position: absolute;\n  top: 50%;\n  height: 20px;\n  line-height: 20px;\n  margin-top: -10px;\n  z-index: 4;\n  text-align: center;\n  width: 100%;\n}\n.ant-spin-nested-loading .ant-spin-dot {\n  display: inline-block;\n}\n.ant-spin-container {\n  -webkit-transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.ant-spin-nested-loading > .ant-spin-container {\n  opacity: 0.7;\n  -webkit-filter: blur(1px);\n  filter: blur(1px);\n  -webkit-filter: progid\\:DXImageTransform\\.Microsoft\\.Blur(PixelRadius\\=1, MakeShadow\\=false);\n          filter: progid\\:DXImageTransform\\.Microsoft\\.Blur(PixelRadius\\=1, MakeShadow\\=false);\n  /* IE6~IE9 */\n  position: relative;\n}\n.ant-spin-nested-loading > .ant-spin-container:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: transparent;\n}\n.ant-spin-tip {\n  color: #999;\n}\n.ant-spin-dot {\n  position: relative;\n  display: block;\n  width: 20px;\n  height: 20px;\n}\n.ant-spin-dot:before,\n.ant-spin-dot:after {\n  content: '';\n  border-radius: 50%;\n  background-color: #2db7f5;\n  -webkit-animation: antSpinBounce 2.2s infinite ease-in-out;\n          animation: antSpinBounce 2.2s infinite ease-in-out;\n  display: block;\n  position: absolute;\n  opacity: 0.5;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.ant-spin-dot:after {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n}\n.ant-spin-sm .ant-spin-dot {\n  width: 12px;\n  height: 12px;\n}\n.ant-spin-lg .ant-spin-dot {\n  width: 32px;\n  height: 32px;\n}\n.ant-spin-text,\n.ant-spin.ant-spin-show-text .ant-spin-dot {\n  display: none;\n}\n.ant-spin.ant-spin-show-text .ant-spin-text {\n  display: block;\n}\n@-webkit-keyframes antSpinBounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes antSpinBounce {\n  0%,\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /* IE10+ */\n  .ant-spin-nested-loading > .ant-spin-container {\n    background: #fff;\n    opacity: 0.5;\n  }\n}\n", ""]);

	// exports


/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = undefined;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _class, _temp;

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(43);

	var _classnames = __webpack_require__(277);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _isCssAnimationSupported = __webpack_require__(320);

	var _isCssAnimationSupported2 = _interopRequireDefault(_isCssAnimationSupported);

	var _warning = __webpack_require__(186);

	var _warning2 = _interopRequireDefault(_warning);

	var _object = __webpack_require__(293);

	var _object2 = _interopRequireDefault(_object);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function _defaults(obj, defaults) {
	  var keys = Object.getOwnPropertyNames(defaults);for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];var value = Object.getOwnPropertyDescriptor(defaults, key);if (value && value.configurable && obj[key] === undefined) {
	      Object.defineProperty(obj, key, value);
	    }
	  }return obj;
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
	}

	var Spin = (_temp = _class = function (_React$Component) {
	  _inherits(Spin, _React$Component);

	  function Spin(props) {
	    _classCallCheck(this, Spin);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    var spinning = _this.getSpinning(props);
	    _this.state = {
	      spinning: spinning
	    };
	    return _this;
	  }

	  Spin.prototype.isNestedPattern = function isNestedPattern() {
	    return !!(this.props && this.props.children);
	  };

	  Spin.prototype.componentDidMount = function componentDidMount() {
	    (0, _warning2["default"])(!('spining' in this.props), '`spining` property of Popover is a spell mistake, use `spinning` instead.');
	    if (!(0, _isCssAnimationSupported2["default"])()) {
	      // Show text in IE8/9
	      (0, _reactDom.findDOMNode)(this).className += ' ' + this.props.prefixCls + '-show-text';
	    }
	  };

	  Spin.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.debounceTimeout) {
	      clearTimeout(this.debounceTimeout);
	    }
	  };

	  Spin.prototype.getSpinning = function getSpinning(props) {
	    // Backwards support
	    if ('spining' in props) {
	      (0, _warning2["default"])(false, '`spining` property of Spin is a spell mistake, use `spinning` instead.');
	      return props.spining;
	    }
	    return props.spinning;
	  };

	  Spin.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this2 = this;

	    var currentSpinning = this.getSpinning(this.props);
	    var spinning = this.getSpinning(nextProps);
	    if (this.debounceTimeout) {
	      clearTimeout(this.debounceTimeout);
	    }
	    if (currentSpinning && !spinning) {
	      this.debounceTimeout = setTimeout(function () {
	        return _this2.setState({ spinning: spinning });
	      }, 500);
	    } else {
	      this.setState({ spinning: spinning });
	    }
	  };

	  Spin.prototype.render = function render() {
	    var _classNames;

	    var _props = this.props;
	    var className = _props.className;
	    var size = _props.size;
	    var prefixCls = _props.prefixCls;
	    var tip = _props.tip;

	    var restProps = _objectWithoutProperties(_props, ['className', 'size', 'prefixCls', 'tip']);

	    var spinning = this.state.spinning;

	    var spinClassName = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-sm', size === 'small'), _defineProperty(_classNames, prefixCls + '-lg', size === 'large'), _defineProperty(_classNames, prefixCls + '-spinning', spinning), _defineProperty(_classNames, prefixCls + '-show-text', !!this.props.tip), _defineProperty(_classNames, className, !!className), _classNames));

	    // fix https://fb.me/react-unknown-prop
	    var divProps = (0, _object2["default"])(restProps, ['spinning']);

	    var spinElement = _react2["default"].createElement('div', _extends({}, divProps, { className: spinClassName }), _react2["default"].createElement('span', { className: prefixCls + '-dot' }), _react2["default"].createElement('div', { className: prefixCls + '-text' }, tip || '加载中...'));

	    if (this.isNestedPattern()) {
	      return _react2["default"].createElement('div', _extends({}, divProps, { className: spinning ? prefixCls + '-nested-loading' : '' }), spinElement, _react2["default"].createElement('div', { className: prefixCls + '-container' }, this.props.children));
	    }
	    return spinElement;
	  };

	  return Spin;
	}(_react2["default"].Component), _class.defaultProps = {
	  prefixCls: 'ant-spin',
	  spinning: true
	}, _class.propTypes = {
	  className: _react2["default"].PropTypes.string,
	  size: _react2["default"].PropTypes.oneOf(['small', 'default', 'large'])
	}, _temp);
	exports["default"] = Spin;
	module.exports = exports['default'];

/***/ },

/***/ 320:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var animation = void 0;

	function isCssAnimationSupported() {
	  if (animation !== undefined) {
	    return animation;
	  }
	  var domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');
	  var elm = document.createElement('div');
	  if (elm.style.animationName !== undefined) {
	    animation = true;
	  }
	  if (animation !== undefined) {
	    for (var i = 0; i < domPrefixes.length; i++) {
	      if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
	        animation = true;
	        break;
	      }
	    }
	  }
	  animation = animation || false;
	  return animation;
	}

	exports["default"] = isCssAnimationSupported;
	module.exports = exports['default'];

/***/ },

/***/ 612:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _css = __webpack_require__(316);

	var _spin = __webpack_require__(319);

	var _spin2 = _interopRequireDefault(_spin);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(181);

	var _fetch = __webpack_require__(306);

	var _reactFrameComponent = __webpack_require__(613);

	var _reactFrameComponent2 = _interopRequireDefault(_reactFrameComponent);

	__webpack_require__(614);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ActivityDetail = function (_React$Component) {
		_inherits(ActivityDetail, _React$Component);

		function ActivityDetail(props) {
			_classCallCheck(this, ActivityDetail);

			var _this2 = _possibleConstructorReturn(this, (ActivityDetail.__proto__ || Object.getPrototypeOf(ActivityDetail)).call(this, props));

			window.scrollTo(0, 0);
			_this2.state = {
				loading: false,
				activity_cover: "",
				activity_content: ""
			};
			return _this2;
		}

		_createClass(ActivityDetail, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var _this = this;
				var query = this.props.location.query;

				var activity_id = query.activity_id;
				_this.setState({ loading: true });
				(0, _fetch.fetch_data_get)("/api/get_activity_detail", { truelove_admin_token: localStorage.truelove_admin_token, activity_id: activity_id }).then(function (result) {
					_this.setState({
						loading: false,
						activity_cover: result.body.activity_detail.activity_cover,
						activity_content: result.body.activity_detail.activity_content
					});
				}).catch(function (error) {
					console.log(error);
				});
			}

			// 动态设置iframe高度

		}, {
			key: "setIframeHeight",
			value: function setIframeHeight() {
				var activity_iframe = this.refs.activity_iframe;
				activity_iframe.height = activity_iframe.contentWindow.document.documentElement.scrollHeight || activity_iframe.contentWindow.document.body.scrollHeight;
			}
		}, {
			key: "render",
			value: function render() {
				var _this3 = this;

				return _react2.default.createElement(
					"div",
					{ className: "activity_detail_wrap" },
					_react2.default.createElement(
						"div",
						{ className: "back" },
						_react2.default.createElement(
							_reactRouter.Link,
							{ to: "/truelove_admin/activity_manage" },
							"返回发布活动列表"
						)
					),
					_react2.default.createElement(
						_spin2.default,
						{ spinning: this.state.loading },
						_react2.default.createElement(
							"div",
							{ className: "activity_cover_display" },
							_react2.default.createElement("img", { src: this.state.activity_cover })
						),
						_react2.default.createElement(
							"div",
							{ className: "iframe_box" },
							_react2.default.createElement("iframe", { name: "activity_iframe", ref: "activity_iframe", frameBorder: "0", width: "100%", height: "100%", scrolling: "no", onLoad: function onLoad() {
									return _this3.setIframeHeight();
								}, srcDoc: this.state.activity_content })
						)
					)
				);
			}
		}]);

		return ActivityDetail;
	}(_react2.default.Component);

	exports.default = ActivityDetail;

/***/ },

/***/ 613:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(10);
	var ReactDOM = __webpack_require__(43);
	var assign = __webpack_require__(13);

	var hasConsole = typeof window !== 'undefined' && window.console;
	var noop = function noop() {};
	var swallowInvalidHeadWarning = noop;
	var resetWarnings = noop;

	if (hasConsole) {
	  var originalError = console.error;
	  // Rendering a <head> into a body is technically invalid although it
	  // works. We swallow React's validateDOMNesting warning if that is the
	  // message to avoid confusion
	  swallowInvalidHeadWarning = function swallowInvalidHeadWarning() {
	    console.error = function (msg) {
	      if (/<head>/.test(msg)) return;
	      originalError.call(console, msg);
	    };
	  };
	  resetWarnings = function resetWarnings() {
	    console.error = originalError;
	  };
	}

	var Frame = React.createClass({
	  // React warns when you render directly into the body since browser extensions
	  // also inject into the body and can mess up React. For this reason
	  // initialContent initialContent is expected to have a div inside of the body
	  // element that we render react into.
	  propTypes: {
	    style: React.PropTypes.object,
	    head: React.PropTypes.node,
	    initialContent: React.PropTypes.string,
	    mountTarget: React.PropTypes.string,
	    contentDidMount: React.PropTypes.func,
	    contentDidUpdate: React.PropTypes.func
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      initialContent: '<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>',
	      contentDidMount: function contentDidMount() {},
	      contentDidUpdate: function contentDidUpdate() {}
	    };
	  },
	  render: function render() {
	    var props = assign({}, this.props);
	    delete props.head;
	    delete props.initialContent;
	    delete props.mountTarget;
	    delete props.contentDidMount;
	    delete props.contentDidUpdate;
	    // The iframe isn't ready so we drop children from props here. #12, #17
	    return React.createElement('iframe', assign({}, props, { children: undefined }));
	  },
	  componentDidMount: function componentDidMount() {
	    this._isMounted = true;
	    this.renderFrameContents();
	  },
	  renderFrameContents: function renderFrameContents() {
	    if (!this._isMounted) {
	      return;
	    }

	    var doc = this.getDoc();
	    if (doc && doc.readyState === 'complete') {
	      var contents = React.createElement('div', { className: 'frame-content' }, this.props.head, this.props.children);

	      var initialRender = !this._setInitialContent;
	      if (!this._setInitialContent) {
	        doc.open();
	        doc.write(this.props.initialContent);
	        doc.close();
	        this._setInitialContent = true;
	      }

	      swallowInvalidHeadWarning();

	      // unstable_renderSubtreeIntoContainer allows us to pass this component as
	      // the parent, which exposes context to any child components.
	      var callback = initialRender ? this.props.contentDidMount : this.props.contentDidUpdate;
	      var mountTarget = this.getMountTarget();

	      ReactDOM.unstable_renderSubtreeIntoContainer(this, contents, mountTarget, callback);

	      resetWarnings();
	    } else {
	      setTimeout(this.renderFrameContents, 0);
	    }
	  },
	  getMountTarget: function getMountTarget() {
	    var doc = this.getDoc();

	    if (this.props.mountTarget) {
	      return doc.querySelector(this.props.mountTarget);
	    }

	    return doc.body.children[0];
	  },
	  getDoc: function getDoc() {
	    return ReactDOM.findDOMNode(this).contentDocument;
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this.renderFrameContents();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._isMounted = false;

	    var doc = this.getDoc();
	    if (doc) {
	      ReactDOM.unmountComponentAtNode(this.getMountTarget());
	    }
	  }
	});

	module.exports = Frame;

/***/ },

/***/ 614:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(615);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./activity_detail.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./activity_detail.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 615:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".activity_detail_wrap .back {\n  padding: 20px 0; }\n\n.activity_detail_wrap .activity_cover_display {\n  width: 100%;\n  height: 225px;\n  overflow: hidden; }\n  .activity_detail_wrap .activity_cover_display img {\n    width: 100%; }\n\n.activity_detail_wrap .iframe_box {\n  margin-top: 20px; }\n", ""]);

	// exports


/***/ }

});