webpackJsonp([13],{

/***/ 351:
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },

/***/ 380:
/***/ function(module, exports) {

	"use strict";

	module.exports = function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }

	  return false;
	};

/***/ },

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(389);

/***/ },

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(43);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _contains = __webpack_require__(380);

	var _contains2 = _interopRequireDefault(_contains);

	var _addEventListener = __webpack_require__(271);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	var _Popup = __webpack_require__(390);

	var _Popup2 = _interopRequireDefault(_Popup);

	var _utils = __webpack_require__(405);

	var _getContainerRenderMixin = __webpack_require__(406);

	var _getContainerRenderMixin2 = _interopRequireDefault(_getContainerRenderMixin);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function noop() {}

	function returnEmptyString() {
	  return '';
	}

	var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];

	var Trigger = _react2["default"].createClass({
	  displayName: 'Trigger',

	  propTypes: {
	    children: _react.PropTypes.any,
	    action: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.string)]),
	    showAction: _react.PropTypes.any,
	    hideAction: _react.PropTypes.any,
	    getPopupClassNameFromAlign: _react.PropTypes.any,
	    onPopupVisibleChange: _react.PropTypes.func,
	    afterPopupVisibleChange: _react.PropTypes.func,
	    popup: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.func]).isRequired,
	    popupStyle: _react.PropTypes.object,
	    prefixCls: _react.PropTypes.string,
	    popupClassName: _react.PropTypes.string,
	    popupPlacement: _react.PropTypes.string,
	    builtinPlacements: _react.PropTypes.object,
	    popupTransitionName: _react.PropTypes.string,
	    popupAnimation: _react.PropTypes.any,
	    mouseEnterDelay: _react.PropTypes.number,
	    mouseLeaveDelay: _react.PropTypes.number,
	    zIndex: _react.PropTypes.number,
	    focusDelay: _react.PropTypes.number,
	    blurDelay: _react.PropTypes.number,
	    getPopupContainer: _react.PropTypes.func,
	    destroyPopupOnHide: _react.PropTypes.bool,
	    mask: _react.PropTypes.bool,
	    onPopupAlign: _react.PropTypes.func,
	    popupAlign: _react.PropTypes.object,
	    popupVisible: _react.PropTypes.bool,
	    maskTransitionName: _react.PropTypes.string,
	    maskAnimation: _react.PropTypes.string
	  },

	  mixins: [(0, _getContainerRenderMixin2["default"])({
	    autoMount: false,

	    isVisible: function isVisible(instance) {
	      return instance.state.popupVisible;
	    },
	    getContainer: function getContainer(instance) {
	      var popupContainer = document.createElement('div');
	      var mountNode = instance.props.getPopupContainer ? instance.props.getPopupContainer((0, _reactDom.findDOMNode)(instance)) : document.body;
	      mountNode.appendChild(popupContainer);
	      return popupContainer;
	    },
	    getComponent: function getComponent(instance) {
	      var props = instance.props;
	      var state = instance.state;

	      var mouseProps = {};
	      if (instance.isMouseEnterToShow()) {
	        mouseProps.onMouseEnter = instance.onPopupMouseEnter;
	      }
	      if (instance.isMouseLeaveToHide()) {
	        mouseProps.onMouseLeave = instance.onPopupMouseLeave;
	      }
	      return _react2["default"].createElement(_Popup2["default"], _extends({
	        prefixCls: props.prefixCls,
	        destroyPopupOnHide: props.destroyPopupOnHide,
	        visible: state.popupVisible,
	        className: props.popupClassName,
	        action: props.action,
	        align: instance.getPopupAlign(),
	        onAlign: props.onPopupAlign,
	        animation: props.popupAnimation,
	        getClassNameFromAlign: instance.getPopupClassNameFromAlign
	      }, mouseProps, {
	        getRootDomNode: instance.getRootDomNode,
	        style: props.popupStyle,
	        mask: props.mask,
	        zIndex: props.zIndex,
	        transitionName: props.popupTransitionName,
	        maskAnimation: props.maskAnimation,
	        maskTransitionName: props.maskTransitionName
	      }), typeof props.popup === 'function' ? props.popup() : props.popup);
	    }
	  })],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-trigger-popup',
	      getPopupClassNameFromAlign: returnEmptyString,
	      onPopupVisibleChange: noop,
	      afterPopupVisibleChange: noop,
	      onPopupAlign: noop,
	      popupClassName: '',
	      mouseEnterDelay: 0,
	      mouseLeaveDelay: 0.1,
	      focusDelay: 0,
	      blurDelay: 0.15,
	      popupStyle: {},
	      destroyPopupOnHide: false,
	      popupAlign: {},
	      defaultPopupVisible: false,
	      mask: false,
	      action: [],
	      showAction: [],
	      hideAction: []
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var popupVisible = void 0;
	    if ('popupVisible' in props) {
	      popupVisible = !!props.popupVisible;
	    } else {
	      popupVisible = !!props.defaultPopupVisible;
	    }
	    return {
	      popupVisible: popupVisible
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    ALL_HANDLERS.forEach(function (h) {
	      _this['fire' + h] = function (e) {
	        _this.fireEvents(h, e);
	      };
	    });
	  },
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate({}, {
	      popupVisible: this.state.popupVisible
	    });
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(_ref) {
	    var popupVisible = _ref.popupVisible;

	    if (popupVisible !== undefined) {
	      this.setState({
	        popupVisible: popupVisible
	      });
	    }
	  },
	  componentDidUpdate: function componentDidUpdate(_, prevState) {
	    var props = this.props;
	    var state = this.state;
	    this.renderComponent(null, function () {
	      if (prevState.popupVisible !== state.popupVisible) {
	        props.afterPopupVisibleChange(state.popupVisible);
	      }
	    });
	    if (this.isClickToHide()) {
	      if (state.popupVisible) {
	        if (!this.clickOutsideHandler) {
	          this.clickOutsideHandler = (0, _addEventListener2["default"])(document, 'mousedown', this.onDocumentClick);
	          this.touchOutsideHandler = (0, _addEventListener2["default"])(document, 'touchstart', this.onDocumentClick);
	        }
	        return;
	      }
	    }
	    if (this.clickOutsideHandler) {
	      this.clickOutsideHandler.remove();
	      this.touchOutsideHandler.remove();
	      this.clickOutsideHandler = null;
	      this.touchOutsideHandler = null;
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.clearDelayTimer();
	    if (this.clickOutsideHandler) {
	      this.clickOutsideHandler.remove();
	      this.touchOutsideHandler.remove();
	      this.clickOutsideHandler = null;
	      this.touchOutsideHandler = null;
	    }
	  },
	  onMouseEnter: function onMouseEnter(e) {
	    this.fireEvents('onMouseEnter', e);
	    this.delaySetPopupVisible(true, this.props.mouseEnterDelay);
	  },
	  onMouseLeave: function onMouseLeave(e) {
	    this.fireEvents('onMouseLeave', e);
	    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
	  },
	  onPopupMouseEnter: function onPopupMouseEnter() {
	    this.clearDelayTimer();
	  },
	  onPopupMouseLeave: function onPopupMouseLeave(e) {
	    // https://github.com/react-component/trigger/pull/13
	    // react bug?
	    if (e.relatedTarget && !e.relatedTarget.setTimeout && this._component && (0, _contains2["default"])(this._component.getPopupDomNode(), e.relatedTarget)) {
	      return;
	    }
	    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
	  },
	  onFocus: function onFocus(e) {
	    this.fireEvents('onFocus', e);
	    // incase focusin and focusout
	    this.clearDelayTimer();
	    if (this.isFocusToShow()) {
	      this.focusTime = Date.now();
	      this.delaySetPopupVisible(true, this.props.focusDelay);
	    }
	  },
	  onMouseDown: function onMouseDown(e) {
	    this.fireEvents('onMouseDown', e);
	    this.preClickTime = Date.now();
	  },
	  onTouchStart: function onTouchStart(e) {
	    this.fireEvents('onTouchStart', e);
	    this.preTouchTime = Date.now();
	  },
	  onBlur: function onBlur(e) {
	    this.fireEvents('onBlur', e);
	    this.clearDelayTimer();
	    if (this.isBlurToHide()) {
	      this.delaySetPopupVisible(false, this.props.blurDelay);
	    }
	  },
	  onClick: function onClick(event) {
	    this.fireEvents('onClick', event);
	    // focus will trigger click
	    if (this.focusTime) {
	      var preTime = void 0;
	      if (this.preClickTime && this.preTouchTime) {
	        preTime = Math.min(this.preClickTime, this.preTouchTime);
	      } else if (this.preClickTime) {
	        preTime = this.preClickTime;
	      } else if (this.preTouchTime) {
	        preTime = this.preTouchTime;
	      }
	      if (Math.abs(preTime - this.focusTime) < 20) {
	        return;
	      }
	      this.focusTime = 0;
	    }
	    this.preClickTime = 0;
	    this.preTouchTime = 0;
	    event.preventDefault();
	    var nextVisible = !this.state.popupVisible;
	    if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
	      this.setPopupVisible(!this.state.popupVisible);
	    }
	  },
	  onDocumentClick: function onDocumentClick(event) {
	    var target = event.target;
	    var root = (0, _reactDom.findDOMNode)(this);
	    var popupNode = this.getPopupDomNode();
	    if (!(0, _contains2["default"])(root, target) && !(0, _contains2["default"])(popupNode, target)) {
	      this.setPopupVisible(false);
	    }
	  },
	  getPopupDomNode: function getPopupDomNode() {
	    // for test
	    if (this._component) {
	      return this._component.isMounted() ? this._component.getPopupDomNode() : null;
	    }
	    return null;
	  },
	  getRootDomNode: function getRootDomNode() {
	    return _reactDom2["default"].findDOMNode(this);
	  },
	  getPopupClassNameFromAlign: function getPopupClassNameFromAlign(align) {
	    var className = [];
	    var props = this.props;
	    var popupPlacement = props.popupPlacement;
	    var builtinPlacements = props.builtinPlacements;
	    var prefixCls = props.prefixCls;

	    if (popupPlacement && builtinPlacements) {
	      className.push((0, _utils.getPopupClassNameFromAlign)(builtinPlacements, prefixCls, align));
	    }
	    if (props.getPopupClassNameFromAlign) {
	      className.push(props.getPopupClassNameFromAlign(align));
	    }
	    return className.join(' ');
	  },
	  getPopupAlign: function getPopupAlign() {
	    var props = this.props;
	    var popupPlacement = props.popupPlacement;
	    var popupAlign = props.popupAlign;
	    var builtinPlacements = props.builtinPlacements;

	    if (popupPlacement && builtinPlacements) {
	      return (0, _utils.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
	    }
	    return popupAlign;
	  },
	  setPopupVisible: function setPopupVisible(popupVisible) {
	    this.clearDelayTimer();
	    if (this.state.popupVisible !== popupVisible) {
	      if (!('popupVisible' in this.props)) {
	        this.setState({
	          popupVisible: popupVisible
	        });
	      }
	      this.props.onPopupVisibleChange(popupVisible);
	    }
	  },
	  delaySetPopupVisible: function delaySetPopupVisible(visible, delayS) {
	    var _this2 = this;

	    var delay = delayS * 1000;
	    this.clearDelayTimer();
	    if (delay) {
	      this.delayTimer = setTimeout(function () {
	        _this2.setPopupVisible(visible);
	        _this2.clearDelayTimer();
	      }, delay);
	    } else {
	      this.setPopupVisible(visible);
	    }
	  },
	  clearDelayTimer: function clearDelayTimer() {
	    if (this.delayTimer) {
	      clearTimeout(this.delayTimer);
	      this.delayTimer = null;
	    }
	  },
	  createTwoChains: function createTwoChains(event) {
	    var childPros = this.props.children.props;
	    var props = this.props;
	    if (childPros[event] && props[event]) {
	      return this['fire' + event];
	    }
	    return childPros[event] || props[event];
	  },
	  isClickToShow: function isClickToShow() {
	    var _props = this.props;
	    var action = _props.action;
	    var showAction = _props.showAction;

	    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
	  },
	  isClickToHide: function isClickToHide() {
	    var _props2 = this.props;
	    var action = _props2.action;
	    var hideAction = _props2.hideAction;

	    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
	  },
	  isMouseEnterToShow: function isMouseEnterToShow() {
	    var _props3 = this.props;
	    var action = _props3.action;
	    var showAction = _props3.showAction;

	    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
	  },
	  isMouseLeaveToHide: function isMouseLeaveToHide() {
	    var _props4 = this.props;
	    var action = _props4.action;
	    var hideAction = _props4.hideAction;

	    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
	  },
	  isFocusToShow: function isFocusToShow() {
	    var _props5 = this.props;
	    var action = _props5.action;
	    var showAction = _props5.showAction;

	    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
	  },
	  isBlurToHide: function isBlurToHide() {
	    var _props6 = this.props;
	    var action = _props6.action;
	    var hideAction = _props6.hideAction;

	    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
	  },
	  forcePopupAlign: function forcePopupAlign() {
	    if (this.state.popupVisible && this.popupInstance && this.popupInstance.alignInstance) {
	      this.popupInstance.alignInstance.forceAlign();
	    }
	  },
	  fireEvents: function fireEvents(type, e) {
	    var childCallback = this.props.children.props[type];
	    if (childCallback) {
	      childCallback(e);
	    }
	    var callback = this.props[type];
	    if (callback) {
	      callback(e);
	    }
	  },
	  render: function render() {
	    var props = this.props;
	    var children = props.children;
	    var child = _react2["default"].Children.only(children);
	    var newChildProps = {};

	    if (this.isClickToHide() || this.isClickToShow()) {
	      newChildProps.onClick = this.onClick;
	      newChildProps.onMouseDown = this.onMouseDown;
	      newChildProps.onTouchStart = this.onTouchStart;
	    } else {
	      newChildProps.onClick = this.createTwoChains('onClick');
	      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
	      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
	    }
	    if (this.isMouseEnterToShow()) {
	      newChildProps.onMouseEnter = this.onMouseEnter;
	    } else {
	      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
	    }
	    if (this.isMouseLeaveToHide()) {
	      newChildProps.onMouseLeave = this.onMouseLeave;
	    } else {
	      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
	    }
	    if (this.isFocusToShow() || this.isBlurToHide()) {
	      newChildProps.onFocus = this.onFocus;
	      newChildProps.onBlur = this.onBlur;
	    } else {
	      newChildProps.onFocus = this.createTwoChains('onFocus');
	      newChildProps.onBlur = this.createTwoChains('onBlur');
	    }

	    return _react2["default"].cloneElement(child, newChildProps);
	  }
	});

	exports["default"] = Trigger;
	module.exports = exports['default'];

/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(43);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _rcAlign = __webpack_require__(391);

	var _rcAlign2 = _interopRequireDefault(_rcAlign);

	var _rcAnimate = __webpack_require__(261);

	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

	var _PopupInner = __webpack_require__(403);

	var _PopupInner2 = _interopRequireDefault(_PopupInner);

	var _LazyRenderBox = __webpack_require__(404);

	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	var Popup = _react2["default"].createClass({
	  displayName: 'Popup',

	  propTypes: {
	    visible: _react.PropTypes.bool,
	    style: _react.PropTypes.object,
	    getClassNameFromAlign: _react.PropTypes.func,
	    onAlign: _react.PropTypes.func,
	    getRootDomNode: _react.PropTypes.func,
	    onMouseEnter: _react.PropTypes.func,
	    align: _react.PropTypes.any,
	    destroyPopupOnHide: _react.PropTypes.bool,
	    className: _react.PropTypes.string,
	    prefixCls: _react.PropTypes.string,
	    onMouseLeave: _react.PropTypes.func
	  },

	  componentDidMount: function componentDidMount() {
	    this.rootNode = this.getPopupDomNode();
	  },
	  onAlign: function onAlign(popupDomNode, align) {
	    var props = this.props;
	    var alignClassName = props.getClassNameFromAlign(props.align);
	    var currentAlignClassName = props.getClassNameFromAlign(align);
	    if (alignClassName !== currentAlignClassName) {
	      this.currentAlignClassName = currentAlignClassName;
	      popupDomNode.className = this.getClassName(currentAlignClassName);
	    }
	    props.onAlign(popupDomNode, align);
	  },
	  getPopupDomNode: function getPopupDomNode() {
	    return _reactDom2["default"].findDOMNode(this.refs.popup);
	  },
	  getTarget: function getTarget() {
	    return this.props.getRootDomNode();
	  },
	  getMaskTransitionName: function getMaskTransitionName() {
	    var props = this.props;
	    var transitionName = props.maskTransitionName;
	    var animation = props.maskAnimation;
	    if (!transitionName && animation) {
	      transitionName = props.prefixCls + '-' + animation;
	    }
	    return transitionName;
	  },
	  getTransitionName: function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.prefixCls + '-' + props.animation;
	    }
	    return transitionName;
	  },
	  getClassName: function getClassName(currentAlignClassName) {
	    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
	  },
	  getPopupElement: function getPopupElement() {
	    var props = this.props;
	    var align = props.align;
	    var style = props.style;
	    var visible = props.visible;
	    var prefixCls = props.prefixCls;
	    var destroyPopupOnHide = props.destroyPopupOnHide;

	    var className = this.getClassName(this.currentAlignClassName || props.getClassNameFromAlign(align));
	    var hiddenClassName = prefixCls + '-hidden';
	    if (!visible) {
	      this.currentAlignClassName = null;
	    }
	    var newStyle = _extends({}, style, this.getZIndexStyle());
	    var popupInnerProps = {
	      className: className,
	      prefixCls: prefixCls,
	      ref: 'popup',
	      onMouseEnter: props.onMouseEnter,
	      onMouseLeave: props.onMouseLeave,
	      style: newStyle
	    };
	    if (destroyPopupOnHide) {
	      return _react2["default"].createElement(_rcAnimate2["default"], {
	        component: '',
	        exclusive: true,
	        transitionAppear: true,
	        transitionName: this.getTransitionName()
	      }, visible ? _react2["default"].createElement(_rcAlign2["default"], {
	        target: this.getTarget,
	        key: 'popup',
	        ref: this.saveAlign,
	        monitorWindowResize: true,
	        align: align,
	        onAlign: this.onAlign
	      }, _react2["default"].createElement(_PopupInner2["default"], _extends({
	        visible: true
	      }, popupInnerProps), props.children)) : null);
	    }
	    return _react2["default"].createElement(_rcAnimate2["default"], {
	      component: '',
	      exclusive: true,
	      transitionAppear: true,
	      transitionName: this.getTransitionName(),
	      showProp: 'xVisible'
	    }, _react2["default"].createElement(_rcAlign2["default"], {
	      target: this.getTarget,
	      key: 'popup',
	      ref: this.saveAlign,
	      monitorWindowResize: true,
	      xVisible: visible,
	      childrenProps: { visible: 'xVisible' },
	      disabled: !visible,
	      align: align,
	      onAlign: this.onAlign
	    }, _react2["default"].createElement(_PopupInner2["default"], _extends({
	      hiddenClassName: hiddenClassName
	    }, popupInnerProps), props.children)));
	  },
	  getZIndexStyle: function getZIndexStyle() {
	    var style = {};
	    var props = this.props;
	    if (props.zIndex !== undefined) {
	      style.zIndex = props.zIndex;
	    }
	    return style;
	  },
	  getMaskElement: function getMaskElement() {
	    var props = this.props;
	    var maskElement = void 0;
	    if (props.mask) {
	      var maskTransition = this.getMaskTransitionName();
	      maskElement = _react2["default"].createElement(_LazyRenderBox2["default"], {
	        style: this.getZIndexStyle(),
	        key: 'mask',
	        className: props.prefixCls + '-mask',
	        hiddenClassName: props.prefixCls + '-mask-hidden',
	        visible: props.visible
	      });
	      if (maskTransition) {
	        maskElement = _react2["default"].createElement(_rcAnimate2["default"], {
	          key: 'mask',
	          showProp: 'visible',
	          transitionAppear: true,
	          component: '',
	          transitionName: maskTransition
	        }, maskElement);
	      }
	    }
	    return maskElement;
	  },
	  saveAlign: function saveAlign(align) {
	    this.alignInstance = align;
	  },
	  render: function render() {
	    return _react2["default"].createElement('div', null, this.getMaskElement(), this.getPopupElement());
	  }
	});

	exports["default"] = Popup;
	module.exports = exports['default'];

/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Align = __webpack_require__(392);

	var _Align2 = _interopRequireDefault(_Align);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	exports["default"] = _Align2["default"]; // export this package's api

	module.exports = exports['default'];

/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(43);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _domAlign = __webpack_require__(393);

	var _domAlign2 = _interopRequireDefault(_domAlign);

	var _addEventListener = __webpack_require__(271);

	var _addEventListener2 = _interopRequireDefault(_addEventListener);

	var _isWindow = __webpack_require__(402);

	var _isWindow2 = _interopRequireDefault(_isWindow);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function buffer(fn, ms) {
	  var timer = void 0;

	  function clear() {
	    if (timer) {
	      clearTimeout(timer);
	      timer = null;
	    }
	  }

	  function bufferFn() {
	    clear();
	    timer = setTimeout(fn, ms);
	  }

	  bufferFn.clear = clear;

	  return bufferFn;
	}

	var Align = _react2["default"].createClass({
	  displayName: 'Align',

	  propTypes: {
	    childrenProps: _react.PropTypes.object,
	    align: _react.PropTypes.object.isRequired,
	    target: _react.PropTypes.func,
	    onAlign: _react.PropTypes.func,
	    monitorBufferTime: _react.PropTypes.number,
	    monitorWindowResize: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    children: _react.PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      target: function target() {
	        return window;
	      },
	      onAlign: function onAlign() {},

	      monitorBufferTime: 50,
	      monitorWindowResize: false,
	      disabled: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    var props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    this.forceAlign();
	    if (!props.disabled && props.monitorWindowResize) {
	      this.startMonitorWindowResize();
	    }
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var reAlign = false;
	    var props = this.props;

	    if (!props.disabled) {
	      if (prevProps.disabled || prevProps.align !== props.align) {
	        reAlign = true;
	      } else {
	        var lastTarget = prevProps.target();
	        var currentTarget = props.target();
	        if ((0, _isWindow2["default"])(lastTarget) && (0, _isWindow2["default"])(currentTarget)) {
	          reAlign = false;
	        } else if (lastTarget !== currentTarget) {
	          reAlign = true;
	        }
	      }
	    }

	    if (reAlign) {
	      this.forceAlign();
	    }

	    if (props.monitorWindowResize && !props.disabled) {
	      this.startMonitorWindowResize();
	    } else {
	      this.stopMonitorWindowResize();
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  },
	  startMonitorWindowResize: function startMonitorWindowResize() {
	    if (!this.resizeHandler) {
	      this.bufferMonitor = buffer(this.forceAlign, this.props.monitorBufferTime);
	      this.resizeHandler = (0, _addEventListener2["default"])(window, 'resize', this.bufferMonitor);
	    }
	  },
	  stopMonitorWindowResize: function stopMonitorWindowResize() {
	    if (this.resizeHandler) {
	      this.bufferMonitor.clear();
	      this.resizeHandler.remove();
	      this.resizeHandler = null;
	    }
	  },
	  forceAlign: function forceAlign() {
	    var props = this.props;
	    if (!props.disabled) {
	      var source = _reactDom2["default"].findDOMNode(this);
	      props.onAlign(source, (0, _domAlign2["default"])(source, props.target(), props.align));
	    }
	  },
	  render: function render() {
	    var _props = this.props;
	    var childrenProps = _props.childrenProps;
	    var children = _props.children;

	    var child = _react2["default"].Children.only(children);
	    if (childrenProps) {
	      var newProps = {};
	      for (var prop in childrenProps) {
	        if (childrenProps.hasOwnProperty(prop)) {
	          newProps[prop] = this.props[childrenProps[prop]];
	        }
	      }
	      return _react2["default"].cloneElement(child, newProps);
	    }
	    return child;
	  }
	});

	exports["default"] = Align;
	module.exports = exports['default'];

/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(394);

	var _utils2 = _interopRequireDefault(_utils);

	var _getOffsetParent = __webpack_require__(396);

	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

	var _getVisibleRectForElement = __webpack_require__(397);

	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);

	var _adjustForViewport = __webpack_require__(398);

	var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);

	var _getRegion = __webpack_require__(399);

	var _getRegion2 = _interopRequireDefault(_getRegion);

	var _getElFuturePos = __webpack_require__(400);

	var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	// http://yiminghe.iteye.com/blog/1124720

	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */

	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}

	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}

	function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
	}

	function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
	}

	function flip(points, reg, map) {
	  var ret = [];
	  _utils2["default"].each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}

	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}

	function convertOffset(str, offsetLen) {
	  var n = void 0;
	  if (/%$/.test(str)) {
	    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
	  } else {
	    n = parseInt(str, 10);
	  }
	  return n || 0;
	}

	function normalizeOffset(offset, el) {
	  offset[0] = convertOffset(offset[0], el.width);
	  offset[1] = convertOffset(offset[1], el.height);
	}

	function domAlign(el, refNode, align) {
	  var points = align.points;
	  var offset = align.offset || [0, 0];
	  var targetOffset = align.targetOffset || [0, 0];
	  var overflow = align.overflow;
	  var target = align.target || refNode;
	  var source = align.source || el;
	  offset = [].concat(offset);
	  targetOffset = [].concat(targetOffset);
	  overflow = overflow || {};
	  var newOverflowCfg = {};

	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = (0, _getVisibleRectForElement2["default"])(source);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = (0, _getRegion2["default"])(source);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = (0, _getRegion2["default"])(target);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, refNodeRegion);
	  // 当前节点将要被放置的位置
	  var elFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2["default"].merge(elRegion, elFuturePos);

	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var newPoints = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        var newOffset = flipOffset(offset, 0);
	        var newTargetOffset = flipOffset(targetOffset, 0);
	        var newElFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, newPoints, newOffset, newTargetOffset);
	        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = newPoints;
	          offset = newOffset;
	          targetOffset = newTargetOffset;
	        }
	      }
	    }

	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var _newPoints = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        var _newOffset = flipOffset(offset, 1);
	        var _newTargetOffset = flipOffset(targetOffset, 1);
	        var _newElFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, _newPoints, _newOffset, _newTargetOffset);
	        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = _newPoints;
	          offset = _newOffset;
	          targetOffset = _newTargetOffset;
	        }
	      }
	    }

	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = (0, _getElFuturePos2["default"])(elRegion, refNodeRegion, points, offset, targetOffset);
	      _utils2["default"].mix(newElRegion, elFuturePos);
	    }

	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);

	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);

	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = (0, _adjustForViewport2["default"])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }

	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2["default"].css(source, 'width', _utils2["default"].width(source) + newElRegion.width - elRegion.width);
	  }

	  if (newElRegion.height !== elRegion.height) {
	    _utils2["default"].css(source, 'height', _utils2["default"].height(source) + newElRegion.height - elRegion.height);
	  }

	  // https://github.com/kissyteam/kissy/issues/190
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2["default"].offset(source, {
	    left: newElRegion.left,
	    top: newElRegion.top
	  }, {
	    useCssRight: align.useCssRight,
	    useCssBottom: align.useCssBottom,
	    useCssTransform: align.useCssTransform
	  });

	  return {
	    points: points,
	    offset: offset,
	    targetOffset: targetOffset,
	    overflow: newOverflowCfg
	  };
	}

	domAlign.__getOffsetParent = _getOffsetParent2["default"];

	domAlign.__getVisibleRectForElement = _getVisibleRectForElement2["default"];

	exports["default"] = domAlign;
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/

	module.exports = exports['default'];

/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _propertyUtils = __webpack_require__(395);

	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

	var getComputedStyleX = void 0;

	function force(x, y) {
	  return x + y;
	}

	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}

	function getClientPosition(elem) {
	  var box = void 0;
	  var x = void 0;
	  var y = void 0;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();

	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

	  x = box.left;
	  y = box.top;

	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.

	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.

	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;

	  return {
	    left: x,
	    top: y
	  };
	}

	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}

	function getScrollLeft(w) {
	  return getScroll(w);
	}

	function getScrollTop(w) {
	  return getScroll(w, true);
	}

	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = elem.ownerDocument;
	  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }

	  return val;
	}

	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';

	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];

	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;

	    // Revert the changed values
	    style[LEFT] = left;

	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}

	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}

	function getOffsetDirection(dir, option) {
	  if (dir === 'left') {
	    return option.useCssRight ? 'right' : dir;
	  }
	  return option.useCssBottom ? 'bottom' : dir;
	}

	function oppositeOffsetDirection(dir) {
	  if (dir === 'left') {
	    return 'right';
	  } else if (dir === 'right') {
	    return 'left';
	  } else if (dir === 'top') {
	    return 'bottom';
	  } else if (dir === 'bottom') {
	    return 'top';
	  }
	}

	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setLeftTop(elem, offset, option) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var presetH = -999;
	  var presetV = -999;
	  var horizontalProperty = getOffsetDirection('left', option);
	  var verticalProperty = getOffsetDirection('top', option);
	  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
	  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

	  if (horizontalProperty !== 'left') {
	    presetH = 999;
	  }

	  if (verticalProperty !== 'top') {
	    presetV = 999;
	  }
	  var originalTransition = '';
	  var originalOffset = getOffset(elem);
	  if ('left' in offset || 'top' in offset) {
	    originalTransition = (0, _propertyUtils.getTransitionProperty)(elem) || '';
	    (0, _propertyUtils.setTransitionProperty)(elem, 'none');
	  }
	  if ('left' in offset) {
	    elem.style[oppositeHorizontalProperty] = '';
	    elem.style[horizontalProperty] = presetH + 'px';
	  }
	  if ('top' in offset) {
	    elem.style[oppositeVerticalProperty] = '';
	    elem.style[verticalProperty] = presetV + 'px';
	  }
	  var old = getOffset(elem);
	  var originalStyle = {};
	  for (var key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      var dir = getOffsetDirection(key, option);
	      var preset = key === 'left' ? presetH : presetV;
	      var off = originalOffset[key] - old[key];
	      if (dir === key) {
	        originalStyle[dir] = preset + off;
	      } else {
	        originalStyle[dir] = preset - off;
	      }
	    }
	  }
	  css(elem, originalStyle);
	  // force relayout
	  force(elem.offsetTop, elem.offsetLeft);
	  if ('left' in offset || 'top' in offset) {
	    (0, _propertyUtils.setTransitionProperty)(elem, originalTransition);
	  }
	  var ret = {};
	  for (var _key in offset) {
	    if (offset.hasOwnProperty(_key)) {
	      var _dir = getOffsetDirection(_key, option);
	      var _off = offset[_key] - originalOffset[_key];
	      if (_key === _dir) {
	        ret[_dir] = originalStyle[_dir] + _off;
	      } else {
	        ret[_dir] = originalStyle[_dir] - _off;
	      }
	    }
	  }
	  css(elem, ret);
	}

	function setTransform(elem, offset) {
	  var originalOffset = getOffset(elem);
	  var originalXY = (0, _propertyUtils.getTransformXY)(elem);
	  var resultXY = { x: originalXY.x, y: originalXY.y };
	  if ('left' in offset) {
	    resultXY.x = originalXY.x + offset.left - originalOffset.left;
	  }
	  if ('top' in offset) {
	    resultXY.y = originalXY.y + offset.top - originalOffset.top;
	  }
	  (0, _propertyUtils.setTransformXY)(elem, resultXY);
	}

	function setOffset(elem, offset, option) {
	  if (option.useCssRight || option.useCssBottom) {
	    setLeftTop(elem, offset, option);
	  } else if (option.useCssTransform && (0, _propertyUtils.getTransformName)() in document.body.style) {
	    setTransform(elem, offset, option);
	  } else {
	    setLeftTop(elem, offset, option);
	  }
	}

	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}

	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}

	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;

	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = void 0;

	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }

	  callback.call(elem);

	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}

	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = void 0;
	  var j = void 0;
	  var i = void 0;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = void 0;
	        if (prop === 'border') {
	          cssProp = '' + prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}

	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}

	var domUtils = {};

	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };

	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});

	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, ex) {
	  var extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}

	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};

	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	    args[_key2] = arguments[_key2];
	  }

	  var val = void 0;
	  var elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}

	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

	  domUtils[name] = function (elem, v) {
	    var val = v;
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});

	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
	}

	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value, option) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value, option || {});
	    } else {
	      return getOffset(el);
	    }
	  },

	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i = void 0;
	    var ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },

	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};

	    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
	      args[_key3] = arguments[_key3];
	    }

	    for (var i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },

	  viewportWidth: 0,
	  viewportHeight: 0
	};

	mix(utils, domUtils);

	exports["default"] = utils;
	module.exports = exports['default'];

/***/ },

/***/ 395:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTransformName = getTransformName;
	exports.setTransitionProperty = setTransitionProperty;
	exports.getTransitionProperty = getTransitionProperty;
	exports.getTransformXY = getTransformXY;
	exports.setTransformXY = setTransformXY;
	var vendorPrefix = void 0;

	var jsCssMap = {
	  Webkit: '-webkit-',
	  Moz: '-moz-',
	  // IE did it wrong again ...
	  ms: '-ms-',
	  O: '-o-'
	};

	function getVendorPrefix() {
	  if (vendorPrefix !== undefined) {
	    return vendorPrefix;
	  }
	  vendorPrefix = '';
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';
	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      vendorPrefix = key;
	    }
	  }
	  return vendorPrefix;
	}

	function getTransitionName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
	}

	function getTransformName() {
	  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
	}

	function setTransitionProperty(node, value) {
	  var name = getTransitionName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transitionProperty') {
	      node.style.transitionProperty = value;
	    }
	  }
	}

	function setTransform(node, value) {
	  var name = getTransformName();
	  if (name) {
	    node.style[name] = value;
	    if (name !== 'transform') {
	      node.style.transform = value;
	    }
	  }
	}

	function getTransitionProperty(node) {
	  return node.style.transitionProperty || node.style[getTransitionName()];
	}

	function getTransformXY(node) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
	    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
	  }
	  return {
	    x: 0,
	    y: 0
	  };
	}

	var matrix2d = /matrix\((.*)\)/;
	var matrix3d = /matrix3d\((.*)\)/;

	function setTransformXY(node, xy) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	  if (transform && transform !== 'none') {
	    var arr = void 0;
	    var match2d = transform.match(matrix2d);
	    if (match2d) {
	      match2d = match2d[1];
	      arr = match2d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[4] = xy.x;
	      arr[5] = xy.y;
	      setTransform(node, 'matrix(' + arr.join(',') + ')');
	    } else {
	      var match3d = transform.match(matrix3d)[1];
	      arr = match3d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[12] = xy.x;
	      arr[13] = xy.y;
	      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
	    }
	  } else {
	    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
	  }
	}

/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(394);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	/**
	 * 得到会导致元素显示不全的祖先元素
	 */

	function getOffsetParent(element) {
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = element.ownerDocument;
	  var body = doc.body;
	  var parent = void 0;
	  var positionStyle = _utils2["default"].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }

	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2["default"].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}

	exports["default"] = getOffsetParent;
	module.exports = exports['default'];

/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(394);

	var _utils2 = _interopRequireDefault(_utils);

	var _getOffsetParent = __webpack_require__(396);

	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	/**
	 * 获得元素的显示部分的区域
	 */
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = (0, _getOffsetParent2["default"])(element);
	  var scrollX = void 0;
	  var scrollY = void 0;
	  var winSize = void 0;
	  var doc = element.ownerDocument;
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement;

	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && _utils2["default"].css(el, 'overflow') !== 'visible') {
	      var pos = _utils2["default"].offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = (0, _getOffsetParent2["default"])(el);
	  }

	  // Clip by window's viewport.
	  scrollX = _utils2["default"].getWindowScrollLeft(win);
	  scrollY = _utils2["default"].getWindowScrollTop(win);
	  visibleRect.left = Math.max(visibleRect.left, scrollX);
	  visibleRect.top = Math.max(visibleRect.top, scrollY);
	  winSize = {
	    width: _utils2["default"].viewportWidth(win),
	    height: _utils2["default"].viewportHeight(win)
	  };
	  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
	  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}

	exports["default"] = getVisibleRectForElement;
	module.exports = exports['default'];

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(394);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2["default"].clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };

	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }

	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }

	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }

	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }

	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }

	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }

	  return _utils2["default"].mix(pos, size);
	}

	exports["default"] = adjustForViewport;
	module.exports = exports['default'];

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(394);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function getRegion(node) {
	  var offset = void 0;
	  var w = void 0;
	  var h = void 0;
	  if (!_utils2["default"].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2["default"].offset(node);
	    w = _utils2["default"].outerWidth(node);
	    h = _utils2["default"].outerHeight(node);
	  } else {
	    var win = _utils2["default"].getWindow(node);
	    offset = {
	      left: _utils2["default"].getWindowScrollLeft(win),
	      top: _utils2["default"].getWindowScrollTop(win)
	    };
	    w = _utils2["default"].viewportWidth(win);
	    h = _utils2["default"].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}

	exports["default"] = getRegion;
	module.exports = exports['default'];

/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getAlignOffset = __webpack_require__(401);

	var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var xy = void 0;
	  var diff = void 0;
	  var p1 = void 0;
	  var p2 = void 0;

	  xy = {
	    left: elRegion.left,
	    top: elRegion.top
	  };

	  p1 = (0, _getAlignOffset2["default"])(refNodeRegion, points[1]);
	  p2 = (0, _getAlignOffset2["default"])(elRegion, points[0]);

	  diff = [p2.left - p1.left, p2.top - p1.top];

	  return {
	    left: xy.left - diff[0] + offset[0] - targetOffset[0],
	    top: xy.top - diff[1] + offset[1] - targetOffset[1]
	  };
	}

	exports["default"] = getElFuturePos;
	module.exports = exports['default'];

/***/ },

/***/ 401:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */

	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;
	  var x = void 0;
	  var y = void 0;

	  x = region.left;
	  y = region.top;

	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }

	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }

	  return {
	    left: x,
	    top: y
	  };
	}

	exports["default"] = getAlignOffset;
	module.exports = exports['default'];

/***/ },

/***/ 402:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = isWindow;
	function isWindow(obj) {
	  /* eslint no-eq-null: 0 */
	  /* eslint eqeqeq: 0 */
	  return obj != null && obj == obj.window;
	}
	module.exports = exports['default'];

/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _LazyRenderBox = __webpack_require__(404);

	var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	var PopupInner = _react2["default"].createClass({
	  displayName: 'PopupInner',

	  propTypes: {
	    hiddenClassName: _react.PropTypes.string,
	    className: _react.PropTypes.string,
	    prefixCls: _react.PropTypes.string,
	    onMouseEnter: _react.PropTypes.func,
	    onMouseLeave: _react.PropTypes.func,
	    children: _react.PropTypes.any
	  },
	  render: function render() {
	    var props = this.props;
	    var className = props.className;
	    if (!props.visible) {
	      className += ' ' + props.hiddenClassName;
	    }
	    return _react2["default"].createElement('div', {
	      className: className,
	      onMouseEnter: props.onMouseEnter,
	      onMouseLeave: props.onMouseLeave,
	      style: props.style
	    }, _react2["default"].createElement(_LazyRenderBox2["default"], { className: props.prefixCls + '-content', visible: props.visible }, props.children));
	  }
	});

	exports["default"] = PopupInner;
	module.exports = exports['default'];

/***/ },

/***/ 404:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	var LazyRenderBox = _react2["default"].createClass({
	  displayName: 'LazyRenderBox',

	  propTypes: {
	    children: _react.PropTypes.any,
	    className: _react.PropTypes.string,
	    visible: _react.PropTypes.bool,
	    hiddenClassName: _react.PropTypes.string
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return nextProps.hiddenClassName || nextProps.visible;
	  },
	  render: function render() {
	    var _props = this.props;
	    var hiddenClassName = _props.hiddenClassName;
	    var visible = _props.visible;

	    var props = _objectWithoutProperties(_props, ['hiddenClassName', 'visible']);

	    if (hiddenClassName || _react2["default"].Children.count(props.children) > 1) {
	      if (!visible && hiddenClassName) {
	        props.className += ' ' + hiddenClassName;
	      }
	      return _react2["default"].createElement('div', props);
	    }

	    return _react2["default"].Children.only(props.children);
	  }
	});

	exports["default"] = LazyRenderBox;
	module.exports = exports['default'];

/***/ },

/***/ 405:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports.getAlignFromPlacement = getAlignFromPlacement;
	exports.getPopupClassNameFromAlign = getPopupClassNameFromAlign;
	function isPointsEq(a1, a2) {
	  return a1[0] === a2[0] && a1[1] === a2[1];
	}

	function getAlignFromPlacement(builtinPlacements, placementStr, align) {
	  var baseAlign = builtinPlacements[placementStr] || {};
	  return _extends({}, baseAlign, align);
	}

	function getPopupClassNameFromAlign(builtinPlacements, prefixCls, align) {
	  var points = align.points;
	  for (var placement in builtinPlacements) {
	    if (builtinPlacements.hasOwnProperty(placement)) {
	      if (isPointsEq(builtinPlacements[placement].points, points)) {
	        return prefixCls + '-placement-' + placement;
	      }
	    }
	  }
	  return '';
	}

/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports["default"] = getContainerRenderMixin;

	var _reactDom = __webpack_require__(43);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function defaultGetContainer() {
	  var container = document.createElement('div');
	  document.body.appendChild(container);
	  return container;
	}

	function getContainerRenderMixin(config) {
	  var _config$autoMount = config.autoMount;
	  var autoMount = _config$autoMount === undefined ? true : _config$autoMount;
	  var _config$autoDestroy = config.autoDestroy;
	  var autoDestroy = _config$autoDestroy === undefined ? true : _config$autoDestroy;
	  var isVisible = config.isVisible;
	  var getComponent = config.getComponent;
	  var _config$getContainer = config.getContainer;
	  var getContainer = _config$getContainer === undefined ? defaultGetContainer : _config$getContainer;

	  var mixin = void 0;

	  function _renderComponent(instance, componentArg, ready) {
	    if (!isVisible || instance._component || isVisible(instance)) {
	      if (!instance._container) {
	        instance._container = getContainer(instance);
	      }
	      _reactDom2["default"].unstable_renderSubtreeIntoContainer(instance, getComponent(instance, componentArg), instance._container, function callback() {
	        instance._component = this;
	        if (ready) {
	          ready.call(this);
	        }
	      });
	    }
	  }

	  if (autoMount) {
	    mixin = _extends({}, mixin, {
	      componentDidMount: function componentDidMount() {
	        _renderComponent(this);
	      },
	      componentDidUpdate: function componentDidUpdate() {
	        _renderComponent(this);
	      }
	    });
	  }

	  if (!autoMount || !autoDestroy) {
	    mixin = _extends({}, mixin, {
	      renderComponent: function renderComponent(componentArg, ready) {
	        _renderComponent(this, componentArg, ready);
	      }
	    });
	  }

	  function _removeContainer(instance) {
	    if (instance._container) {
	      var container = instance._container;
	      _reactDom2["default"].unmountComponentAtNode(container);
	      container.parentNode.removeChild(container);
	      instance._container = null;
	    }
	  }

	  if (autoDestroy) {
	    mixin = _extends({}, mixin, {
	      componentWillUnmount: function componentWillUnmount() {
	        _removeContainer(this);
	      }
	    });
	  } else {
	    mixin = _extends({}, mixin, {
	      removeContainer: function removeContainer() {
	        _removeContainer(this);
	      }
	    });
	  }

	  return mixin;
	}
	module.exports = exports['default'];

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(248);

	__webpack_require__(519);

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(520);
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

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".ant-notification {\n  position: fixed;\n  z-index: 1010;\n  width: 335px;\n  margin-right: 24px;\n}\n.ant-notification-notice {\n  padding: 16px;\n  border-radius: 6px;\n  box-shadow: 0 1px 8px rgba(100, 100, 100, 0.2);\n  border: 1px solid #d9d9d9;\n  background: #fff;\n  line-height: 1.5;\n  position: relative;\n  margin-bottom: 10px;\n  overflow: hidden;\n}\n.ant-notification-notice-message {\n  font-size: 14px;\n  color: #666;\n  margin-bottom: 4px;\n}\n.ant-notification-notice-description {\n  font-size: 12px;\n  color: #999;\n}\n.ant-notification-notice-with-icon .ant-notification-notice-message {\n  font-size: 14px;\n  color: #666;\n  margin-left: 51px;\n  margin-bottom: 4px;\n}\n.ant-notification-notice-with-icon .ant-notification-notice-description {\n  margin-left: 51px;\n  font-size: 12px;\n  color: #999;\n}\n.ant-notification-notice-icon {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  margin-top: -17px;\n  font-size: 34px;\n}\n.ant-notification-notice-icon-success {\n  color: #87d068;\n}\n.ant-notification-notice-icon-info {\n  color: #2db7f5;\n}\n.ant-notification-notice-icon-warning {\n  color: #fa0;\n}\n.ant-notification-notice-icon-error {\n  color: #f50;\n}\n.ant-notification-notice-close-x:after {\n  font-size: 12px;\n  content: \"\\E62D\";\n  font-family: \"anticon\";\n  cursor: pointer;\n}\n.ant-notification-notice-close {\n  position: absolute;\n  right: 16px;\n  top: 10px;\n  color: #999;\n  outline: none;\n}\n.ant-notification-notice-btn {\n  float: right;\n  margin-top: 16px;\n}\n.ant-notification .notification-fade-effect {\n  -webkit-animation-duration: 0.24s;\n          animation-duration: 0.24s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.ant-notification-fade-enter,\n.ant-notification-fade-appear {\n  opacity: 0;\n  -webkit-animation-duration: 0.24s;\n          animation-duration: 0.24s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.ant-notification-fade-leave {\n  -webkit-animation-duration: 0.24s;\n          animation-duration: 0.24s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.ant-notification-fade-enter.ant-notification-fade-enter-active,\n.ant-notification-fade-appear.ant-notification-fade-appear-active {\n  -webkit-animation-name: NotificationFadeIn;\n          animation-name: NotificationFadeIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.ant-notification-fade-leave.ant-notification-fade-leave-active {\n  -webkit-animation-name: NotificationFadeOut;\n          animation-name: NotificationFadeOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n@-webkit-keyframes NotificationFadeIn {\n  0% {\n    opacity: 0;\n    left: 335px;\n  }\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n@keyframes NotificationFadeIn {\n  0% {\n    opacity: 0;\n    left: 335px;\n  }\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes NotificationFadeOut {\n  0% {\n    opacity: 1;\n    margin-bottom: 10px;\n    padding-top: 16px;\n    padding-bottom: 16px;\n    max-height: 150px;\n  }\n  100% {\n    opacity: 0;\n    margin-bottom: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    max-height: 0;\n  }\n}\n@keyframes NotificationFadeOut {\n  0% {\n    opacity: 1;\n    margin-bottom: 10px;\n    padding-top: 16px;\n    padding-bottom: 16px;\n    max-height: 150px;\n  }\n  100% {\n    opacity: 0;\n    margin-bottom: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    max-height: 0;\n  }\n}\n", ""]);

	// exports


/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _rcNotification = __webpack_require__(302);

	var _rcNotification2 = _interopRequireDefault(_rcNotification);

	var _icon = __webpack_require__(279);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	var defaultTop = 24;
	var notificationInstance = void 0;
	var defaultDuration = 4.5;

	function getNotificationInstance() {
	  if (notificationInstance) {
	    return notificationInstance;
	  }
	  notificationInstance = _rcNotification2["default"].newInstance({
	    prefixCls: 'ant-notification',
	    style: {
	      top: defaultTop,
	      right: 0
	    }
	  });
	  return notificationInstance;
	}

	function notice(args) {
	  var prefixCls = args.prefixCls || 'ant-notification-notice';

	  var duration = void 0;
	  if (args.duration === undefined) {
	    duration = defaultDuration;
	  } else {
	    duration = args.duration;
	  }

	  var iconType = '';
	  switch (args.icon) {
	    case 'success':
	      iconType = 'check-circle-o';
	      break;
	    case 'info':
	      iconType = 'info-circle-o';
	      break;
	    case 'error':
	      iconType = 'cross-circle-o';
	      break;
	    case 'warning':
	      iconType = 'exclamation-circle-o';
	      break;
	    default:
	      iconType = 'info-circle';
	  }

	  getNotificationInstance().notice({
	    content: _react2["default"].createElement('div', { className: prefixCls + '-content ' + (args.icon ? prefixCls + '-with-icon' : '') }, args.icon ? _react2["default"].createElement(_icon2["default"], { className: prefixCls + '-icon ' + prefixCls + '-icon-' + args.icon, type: iconType }) : null, _react2["default"].createElement('div', { className: prefixCls + '-message' }, args.message), _react2["default"].createElement('div', { className: prefixCls + '-description' }, args.description), args.btn ? _react2["default"].createElement('span', { className: prefixCls + '-btn' }, args.btn) : null),
	    duration: duration,
	    closable: true,
	    onClose: args.onClose,
	    key: args.key,
	    style: {}
	  });
	}

	var api = {
	  open: function open(args) {
	    notice(args);
	  },
	  close: function close(key) {
	    if (notificationInstance) {
	      notificationInstance.removeNotice(key);
	    }
	  },
	  config: function config(options) {
	    if ('top' in options) {
	      defaultTop = options.top;
	    }
	    if ('duration' in options) {
	      defaultDuration = options.duration;
	    }
	  },
	  destroy: function destroy() {
	    if (notificationInstance) {
	      notificationInstance.destroy();
	      notificationInstance = null;
	    }
	  }
	};

	['success', 'info', 'warning', 'error'].forEach(function (type) {
	  api[type] = function (args) {
	    return api.open(_extends({}, args, { icon: type }));
	  };
	});

	api.warn = api.warning;

	exports["default"] = api;
	module.exports = exports['default'];

/***/ },

/***/ 571:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _css = __webpack_require__(572);

	var _cascader = __webpack_require__(575);

	var _cascader2 = _interopRequireDefault(_cascader);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _city_code = __webpack_require__(580);

	__webpack_require__(581);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CitySwitcher = function (_React$Component) {
		_inherits(CitySwitcher, _React$Component);

		function CitySwitcher(props) {
			_classCallCheck(this, CitySwitcher);

			var _this = _possibleConstructorReturn(this, (CitySwitcher.__proto__ || Object.getPrototypeOf(CitySwitcher)).call(this, props));

			_this.state = {
				area_text: "未选择"
			};
			return _this;
		}

		_createClass(CitySwitcher, [{
			key: "onCitySwitch",
			value: function onCitySwitch(value, selectedOptions) {
				var area_code = "";
				for (var i = 0; i < value.length; i++) {
					area_code = area_code + String(value[i]);
				};
				this.props.onSwitch(area_code);
				this.setState({ area_text: selectedOptions.map(function (o) {
						return o.label;
					}).join(" , ") });
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;

				var options = _city_code.city_code;
				return _react2.default.createElement(
					"div",
					{ className: "city_switch" },
					_react2.default.createElement(
						"span",
						{ className: "city_name" },
						this.state.area_text
					),
					_react2.default.createElement(
						_cascader2.default,
						{ options: options, onChange: function onChange(value, selectedOptions) {
								return _this2.onCitySwitch(value, selectedOptions);
							} },
						_react2.default.createElement(
							"a",
							{ href: "#" },
							"切换城市"
						)
					)
				);
			}
		}]);

		return CitySwitcher;
	}(_react2.default.Component);

	exports.default = CitySwitcher;

/***/ },

/***/ 572:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(248);

	__webpack_require__(573);

	__webpack_require__(287);

/***/ },

/***/ 573:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(574);
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

/***/ 574:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".ant-cascader {\n  font-size: 12px;\n}\n.ant-cascader-input.ant-input {\n  display: block;\n  cursor: pointer;\n  width: 100%;\n  z-index: 1;\n  background: transparent;\n  color: transparent;\n}\n.ant-cascader-picker {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  vertical-align: middle;\n  font-size: 12px;\n  background-color: #fff;\n  border-radius: 6px;\n}\n.ant-cascader-picker-disabled {\n  cursor: not-allowed;\n}\n.ant-cascader-picker-label {\n  position: absolute;\n  left: 0;\n  height: 20px;\n  line-height: 20px;\n  top: 50%;\n  margin-top: -10px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  width: 100%;\n  padding: 0 12px 0 8px;\n}\n.ant-cascader-picker-clear {\n  opacity: 0;\n  position: absolute;\n  right: 8px;\n  z-index: 2;\n  background: #fff;\n  top: 50%;\n  font-size: 12px;\n  color: #ccc;\n  width: 12px;\n  height: 12px;\n  margin-top: -6px;\n  line-height: 12px;\n  cursor: pointer;\n  -webkit-transition: color 0.3s ease, opacity 0.15s ease;\n  transition: color 0.3s ease, opacity 0.15s ease;\n}\n.ant-cascader-picker-clear:hover {\n  color: #999;\n}\n.ant-cascader-picker:hover .ant-cascader-picker-clear {\n  opacity: 1;\n}\n.ant-cascader-picker-arrow {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  right: 8px;\n  width: 12px;\n  height: 12px;\n  margin-top: -6px;\n  line-height: 12px;\n  color: #999;\n  display: inline-block;\n  font-size: 12px;\n  font-size: 8px \\9;\n  -webkit-transform: scale(0.66666667) rotate(0deg);\n      -ms-transform: scale(0.66666667) rotate(0deg);\n          transform: scale(0.66666667) rotate(0deg);\n  /* IE6-IE8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=1, M12=0, M21=0, M22=1)\";\n  zoom: 1;\n}\n:root .ant-cascader-picker-arrow {\n  -webkit-filter: none;\n          filter: none;\n}\n:root .ant-cascader-picker-arrow {\n  font-size: 12px;\n}\n.ant-cascader-picker-arrow:before {\n  -webkit-transition: -webkit-transform 0.2s ease;\n  transition: -webkit-transform 0.2s ease;\n  transition: transform 0.2s ease;\n  transition: transform 0.2s ease, -webkit-transform 0.2s ease;\n}\n.ant-cascader-picker-arrow.ant-cascader-picker-arrow-expand {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n}\n.ant-cascader-picker-arrow.ant-cascader-picker-arrow-expand:before {\n  -webkit-transform: rotate(180deg);\n      -ms-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.ant-cascader-menus {\n  font-size: 12px;\n  background: #fff;\n  position: absolute;\n  z-index: 1050;\n  border: 1px solid #d9d9d9;\n  border-radius: 6px;\n  box-shadow: 0 1px 6px rgba(100, 100, 100, 0.2);\n  white-space: nowrap;\n}\n.ant-cascader-menus-empty,\n.ant-cascader-menus-hidden {\n  display: none;\n}\n.ant-cascader-menus.slide-up-enter.slide-up-enter-active.ant-cascader-menus-placement-bottomLeft,\n.ant-cascader-menus.slide-up-appear.slide-up-appear-active.ant-cascader-menus-placement-bottomLeft {\n  -webkit-animation-name: antSlideUpIn;\n          animation-name: antSlideUpIn;\n}\n.ant-cascader-menus.slide-up-enter.slide-up-enter-active.ant-cascader-menus-placement-topLeft,\n.ant-cascader-menus.slide-up-appear.slide-up-appear-active.ant-cascader-menus-placement-topLeft {\n  -webkit-animation-name: antSlideDownIn;\n          animation-name: antSlideDownIn;\n}\n.ant-cascader-menus.slide-up-leave.slide-up-leave-active.ant-cascader-menus-placement-bottomLeft {\n  -webkit-animation-name: antSlideUpOut;\n          animation-name: antSlideUpOut;\n}\n.ant-cascader-menus.slide-up-leave.slide-up-leave-active.ant-cascader-menus-placement-topLeft {\n  -webkit-animation-name: antSlideDownOut;\n          animation-name: antSlideDownOut;\n}\n.ant-cascader-menu {\n  display: inline-block;\n  vertical-align: top;\n  min-width: 111px;\n  height: 180px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  border-right: 1px solid #e9e9e9;\n  overflow: auto;\n}\n.ant-cascader-menu:first-child {\n  border-radius: 6px 0 0 6px;\n}\n.ant-cascader-menu:last-child {\n  border-right-color: transparent;\n  margin-right: -1px;\n  border-radius: 0 6px 6px 0;\n}\n.ant-cascader-menu:only-child {\n  border-radius: 6px;\n}\n.ant-cascader-menu-item {\n  padding: 7px 26px 7px 16px;\n  cursor: pointer;\n  white-space: nowrap;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.ant-cascader-menu-item:hover {\n  background: #eaf8fe;\n}\n.ant-cascader-menu-item-disabled {\n  cursor: not-allowed;\n  color: #ccc;\n}\n.ant-cascader-menu-item-disabled:hover {\n  background: transparent;\n}\n.ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled),\n.ant-cascader-menu-item-active:not(.ant-cascader-menu-item-disabled):hover {\n  background-color: #f7f7f7;\n  font-weight: bold;\n}\n.ant-cascader-menu-item-expand {\n  position: relative;\n}\n.ant-cascader-menu-item-expand:after {\n  font-family: 'anticon';\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  content: \"\\E600\";\n  display: inline-block;\n  font-size: 12px;\n  font-size: 8px \\9;\n  -webkit-transform: scale(0.66666667) rotate(0deg);\n      -ms-transform: scale(0.66666667) rotate(0deg);\n          transform: scale(0.66666667) rotate(0deg);\n  /* IE6-IE8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=1, M12=0, M21=0, M22=1)\";\n  zoom: 1;\n  color: #999;\n  position: absolute;\n  right: 15px;\n}\n:root .ant-cascader-menu-item-expand:after {\n  -webkit-filter: none;\n          filter: none;\n}\n:root .ant-cascader-menu-item-expand:after {\n  font-size: 12px;\n}\n", ""]);

	// exports


/***/ },

/***/ 575:
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

	var _class, _temp, _initialiseProps;

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _rcCascader = __webpack_require__(576);

	var _rcCascader2 = _interopRequireDefault(_rcCascader);

	var _input = __webpack_require__(290);

	var _input2 = _interopRequireDefault(_input);

	var _icon = __webpack_require__(279);

	var _icon2 = _interopRequireDefault(_icon);

	var _arrayTreeFilter = __webpack_require__(579);

	var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

	var _classnames = __webpack_require__(277);

	var _classnames2 = _interopRequireDefault(_classnames);

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

	var Cascader = (_temp = _class = function (_React$Component) {
	  _inherits(Cascader, _React$Component);

	  function Cascader(props) {
	    _classCallCheck(this, Cascader);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    _initialiseProps.call(_this);

	    var value = void 0;
	    if ('value' in props) {
	      value = props.value;
	    } else if ('defaultValue' in props) {
	      value = props.defaultValue;
	    }
	    _this.state = {
	      value: value || [],
	      popupVisible: false
	    };
	    return _this;
	  }

	  Cascader.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if ('value' in nextProps) {
	      this.setState({ value: nextProps.value || [] });
	    }
	  };

	  Cascader.prototype.getLabel = function getLabel() {
	    var _this2 = this;

	    var _props = this.props;
	    var options = _props.options;
	    var displayRender = _props.displayRender;

	    var selectedOptions = (0, _arrayTreeFilter2["default"])(options, function (o, level) {
	      return o.value === _this2.state.value[level];
	    });
	    var label = selectedOptions.map(function (o) {
	      return o.label;
	    });
	    return displayRender(label, selectedOptions);
	  };

	  Cascader.prototype.render = function render() {
	    var _classNames, _classNames2;

	    var props = this.props;
	    var prefixCls = props.prefixCls;
	    var children = props.children;
	    var placeholder = props.placeholder;
	    var size = props.size;
	    var disabled = props.disabled;
	    var className = props.className;
	    var style = props.style;
	    var allowClear = props.allowClear;

	    var otherProps = _objectWithoutProperties(props, ['prefixCls', 'children', 'placeholder', 'size', 'disabled', 'className', 'style', 'allowClear']);

	    var sizeCls = (0, _classnames2["default"])({
	      'ant-input-lg': size === 'large',
	      'ant-input-sm': size === 'small'
	    });
	    var clearIcon = allowClear && !disabled && this.state.value.length > 0 ? _react2["default"].createElement(_icon2["default"], { type: 'cross-circle',
	      className: prefixCls + '-picker-clear',
	      onClick: this.clearSelection
	    }) : null;
	    var arrowCls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-picker-arrow', true), _defineProperty(_classNames, prefixCls + '-picker-arrow-expand', this.state.popupVisible), _classNames));
	    var pickerCls = (0, _classnames2["default"])((_classNames2 = {}, _defineProperty(_classNames2, className, !!className), _defineProperty(_classNames2, prefixCls + '-picker', true), _defineProperty(_classNames2, prefixCls + '-picker-disabled', disabled), _classNames2));

	    // Fix bug of https://github.com/facebook/react/pull/5004
	    // and https://fb.me/react-unknown-prop
	    var inputProps = (0, _object2["default"])(otherProps, ['onChange', 'options', 'popupPlacement', 'transitionName', 'displayRender', 'onPopupVisibleChange', 'changeOnSelect', 'expandTrigger', 'popupVisible', 'getPopupContainer', 'loadData', 'popupClassName']);

	    return _react2["default"].createElement(_rcCascader2["default"], _extends({}, props, {
	      value: this.state.value,
	      popupVisible: this.state.popupVisible,
	      onPopupVisibleChange: this.handlePopupVisibleChange,
	      onChange: this.handleChange
	    }), children || _react2["default"].createElement('span', {
	      style: style,
	      className: pickerCls
	    }, _react2["default"].createElement(_input2["default"], _extends({}, inputProps, {
	      placeholder: this.state.value && this.state.value.length > 0 ? null : placeholder,
	      className: prefixCls + '-input ' + sizeCls,
	      value: null,
	      disabled: disabled,
	      readOnly: true
	    })), _react2["default"].createElement('span', { className: prefixCls + '-picker-label' }, this.getLabel()), clearIcon, _react2["default"].createElement(_icon2["default"], { type: 'down', className: arrowCls })));
	  };

	  return Cascader;
	}(_react2["default"].Component), _class.defaultProps = {
	  prefixCls: 'ant-cascader',
	  placeholder: 'Please select',
	  transitionName: 'slide-up',
	  popupPlacement: 'bottomLeft',
	  onChange: function onChange() {},

	  options: [],
	  displayRender: function displayRender(label) {
	    return label.join(' / ');
	  },
	  disabled: false,
	  allowClear: true,
	  onPopupVisibleChange: function onPopupVisibleChange() {}
	}, _initialiseProps = function _initialiseProps() {
	  var _this3 = this;

	  this.handleChange = function (value, selectedOptions) {
	    _this3.setValue(value, selectedOptions);
	  };

	  this.handlePopupVisibleChange = function (popupVisible) {
	    _this3.setState({ popupVisible: popupVisible });
	    _this3.props.onPopupVisibleChange(popupVisible);
	  };

	  this.setValue = function (value) {
	    var selectedOptions = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	    if (!('value' in _this3.props)) {
	      _this3.setState({ value: value });
	    }
	    _this3.props.onChange(value, selectedOptions);
	  };

	  this.clearSelection = function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    _this3.setValue([]);
	    _this3.setState({ popupVisible: false });
	  };
	}, _temp);
	exports["default"] = Cascader;
	module.exports = exports['default'];

/***/ },

/***/ 576:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Cascader = __webpack_require__(577);

	var _Cascader2 = _interopRequireDefault(_Cascader);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	exports["default"] = _Cascader2["default"]; // export this package's api

	module.exports = exports['default'];

/***/ },

/***/ 577:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _rcTrigger = __webpack_require__(388);

	var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

	var _Menus = __webpack_require__(578);

	var _Menus2 = _interopRequireDefault(_Menus);

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
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
	}

	var BUILT_IN_PLACEMENTS = {
	  bottomLeft: {
	    points: ['tl', 'bl'],
	    offset: [0, 4],
	    overflow: {
	      adjustX: 1,
	      adjustY: 1
	    }
	  },
	  topLeft: {
	    points: ['bl', 'tl'],
	    offset: [0, -4],
	    overflow: {
	      adjustX: 1,
	      adjustY: 1
	    }
	  },
	  bottomRight: {
	    points: ['tr', 'br'],
	    offset: [0, 4],
	    overflow: {
	      adjustX: 1,
	      adjustY: 1
	    }
	  },
	  topRight: {
	    points: ['br', 'tr'],
	    offset: [0, -4],
	    overflow: {
	      adjustX: 1,
	      adjustY: 1
	    }
	  }
	};

	var Cascader = function (_React$Component) {
	  _inherits(Cascader, _React$Component);

	  function Cascader(props) {
	    _classCallCheck(this, Cascader);

	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

	    _this.setPopupVisible = function (popupVisible) {
	      if (!('popupVisible' in _this.props)) {
	        _this.setState({ popupVisible: popupVisible });
	      }
	      // sync activeValue with value when panel open
	      if (popupVisible && !_this.state.visible) {
	        _this.setState({
	          activeValue: _this.state.value
	        });
	      }
	      _this.props.onPopupVisibleChange(popupVisible);
	    };

	    _this.handleChange = function (options, setProps) {
	      _this.props.onChange(options.map(function (o) {
	        return o.value;
	      }), options);
	      _this.setPopupVisible(setProps.visible);
	    };

	    _this.handlePopupVisibleChange = function (popupVisible) {
	      _this.setPopupVisible(popupVisible);
	    };

	    _this.handleSelect = function (_ref) {
	      var info = _objectWithoutProperties(_ref, []);

	      if ('value' in _this.props) {
	        delete info.value;
	      }
	      _this.setState(info);
	    };

	    var initialValue = [];
	    if ('value' in props) {
	      initialValue = props.value || [];
	    } else if ('defaultValue' in props) {
	      initialValue = props.defaultValue || [];
	    }

	    _this.state = {
	      popupVisible: props.popupVisible,
	      activeValue: initialValue,
	      value: initialValue
	    };
	    return _this;
	  }

	  Cascader.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if ('value' in nextProps && this.props.value !== nextProps.value) {
	      var newValues = {
	        value: nextProps.value || [],
	        activeValue: nextProps.value || []
	      };
	      // allow activeValue diff from value
	      // https://github.com/ant-design/ant-design/issues/2767
	      if ('loadData' in nextProps) {
	        delete newValues.activeValue;
	      }
	      this.setState(newValues);
	    }
	    if ('popupVisible' in nextProps) {
	      this.setState({
	        popupVisible: nextProps.popupVisible
	      });
	    }
	  };

	  Cascader.prototype.getPopupDOMNode = function getPopupDOMNode() {
	    return this.refs.trigger.getPopupDomNode();
	  };

	  Cascader.prototype.render = function render() {
	    var props = this.props;
	    var prefixCls = props.prefixCls;
	    var transitionName = props.transitionName;
	    var popupClassName = props.popupClassName;
	    var popupPlacement = props.popupPlacement;

	    var restProps = _objectWithoutProperties(props, ['prefixCls', 'transitionName', 'popupClassName', 'popupPlacement']);
	    // Did not show popup when there is no options


	    var menus = _react2["default"].createElement('div', null);
	    var emptyMenuClassName = '';
	    if (props.options && props.options.length > 0) {
	      menus = _react2["default"].createElement(_Menus2["default"], _extends({}, props, {
	        value: this.state.value,
	        activeValue: this.state.activeValue,
	        onSelect: this.handleSelect,
	        onChange: this.handleChange,
	        visible: this.state.popupVisible
	      }));
	    } else {
	      emptyMenuClassName = ' ' + prefixCls + '-menus-empty';
	    }
	    return _react2["default"].createElement(_rcTrigger2["default"], _extends({ ref: 'trigger'
	    }, restProps, {
	      popupPlacement: popupPlacement,
	      builtinPlacements: BUILT_IN_PLACEMENTS,
	      popupTransitionName: transitionName,
	      action: props.disabled ? [] : ['click'],
	      popupVisible: props.disabled ? false : this.state.popupVisible,
	      onPopupVisibleChange: this.handlePopupVisibleChange,
	      prefixCls: prefixCls + '-menus',
	      popupClassName: popupClassName + emptyMenuClassName,
	      popup: menus
	    }), props.children);
	  };

	  return Cascader;
	}(_react2["default"].Component);

	Cascader.defaultProps = {
	  options: [],
	  onChange: function onChange() {},
	  onPopupVisibleChange: function onPopupVisibleChange() {},

	  disabled: false,
	  transitionName: '',
	  prefixCls: 'rc-cascader',
	  popupClassName: '',
	  popupPlacement: 'bottomLeft'
	};

	Cascader.propTypes = {
	  value: _react2["default"].PropTypes.array,
	  defaultValue: _react2["default"].PropTypes.array,
	  options: _react2["default"].PropTypes.array.isRequired,
	  onChange: _react2["default"].PropTypes.func,
	  onPopupVisibleChange: _react2["default"].PropTypes.func,
	  popupVisible: _react2["default"].PropTypes.bool,
	  disabled: _react2["default"].PropTypes.bool,
	  transitionName: _react2["default"].PropTypes.string,
	  popupClassName: _react2["default"].PropTypes.string,
	  popupPlacement: _react2["default"].PropTypes.string,
	  prefixCls: _react2["default"].PropTypes.string,
	  dropdownMenuColumnStyle: _react2["default"].PropTypes.object
	};

	exports["default"] = Cascader;
	module.exports = exports['default'];

/***/ },

/***/ 578:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _arrayTreeFilter = __webpack_require__(579);

	var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

	var _reactDom = __webpack_require__(43);

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

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
	}

	var Menus = function (_React$Component) {
	  _inherits(Menus, _React$Component);

	  function Menus() {
	    _classCallCheck(this, Menus);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  Menus.prototype.componentDidMount = function componentDidMount() {
	    this.scrollActiveItemToView();
	  };

	  Menus.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (!prevProps.visible && this.props.visible) {
	      this.scrollActiveItemToView();
	    }
	  };

	  Menus.prototype.onSelect = function onSelect(targetOption, menuIndex) {
	    if (!targetOption || targetOption.disabled) {
	      return;
	    }
	    var activeValue = this.props.activeValue;
	    activeValue = activeValue.slice(0, menuIndex + 1);
	    activeValue[menuIndex] = targetOption.value;
	    var activeOptions = this.getActiveOptions(activeValue);
	    if (targetOption.isLeaf === false && !targetOption.children && this.props.loadData) {
	      if (this.props.changeOnSelect) {
	        this.props.onChange(activeOptions, { visible: true });
	      }
	      this.props.onSelect({ activeValue: activeValue });
	      this.props.loadData(activeOptions);
	      return;
	    }
	    var onSelectArgument = {};
	    if (!targetOption.children || !targetOption.children.length) {
	      this.props.onChange(activeOptions, { visible: false });
	      // set value to activeValue when select leaf option
	      onSelectArgument.value = activeValue;
	    } else if (this.props.changeOnSelect) {
	      this.props.onChange(activeOptions, { visible: true });
	      // set value to activeValue on every select
	      onSelectArgument.value = activeValue;
	    }
	    onSelectArgument.activeValue = activeValue;
	    this.props.onSelect(onSelectArgument);
	  };

	  Menus.prototype.getOption = function getOption(option, menuIndex) {
	    var _props = this.props;
	    var prefixCls = _props.prefixCls;
	    var expandTrigger = _props.expandTrigger;

	    var onSelect = this.onSelect.bind(this, option, menuIndex);
	    var expandProps = {
	      onClick: onSelect
	    };
	    var menuItemCls = prefixCls + '-menu-item';
	    var hasChildren = option.children && option.children.length > 0;
	    if (hasChildren || option.isLeaf === false) {
	      menuItemCls += ' ' + prefixCls + '-menu-item-expand';
	    }
	    if (expandTrigger === 'hover' && hasChildren) {
	      expandProps = {
	        onMouseEnter: this.delayOnSelect.bind(this, onSelect),
	        onMouseLeave: this.delayOnSelect.bind(this)
	      };
	    }
	    if (this.isActiveOption(option)) {
	      menuItemCls += ' ' + prefixCls + '-menu-item-active';
	      expandProps.ref = 'activeItem' + menuIndex;
	    }
	    if (option.disabled) {
	      menuItemCls += ' ' + prefixCls + '-menu-item-disabled';
	    }
	    if (option.loading) {
	      menuItemCls += ' ' + prefixCls + '-menu-item-loading';
	    }
	    var title = '';
	    if (option.title) {
	      title = option.title;
	    } else if (typeof option.label === 'string') {
	      title = option.label;
	    }
	    return _react2["default"].createElement('li', _extends({
	      key: option.value,
	      className: menuItemCls,
	      title: title
	    }, expandProps), option.label);
	  };

	  Menus.prototype.getActiveOptions = function getActiveOptions(values) {
	    var activeValue = values || this.props.activeValue;
	    var options = this.props.options;
	    return (0, _arrayTreeFilter2["default"])(options, function (o, level) {
	      return o.value === activeValue[level];
	    });
	  };

	  Menus.prototype.getShowOptions = function getShowOptions() {
	    var options = this.props.options;

	    var result = this.getActiveOptions().map(function (activeOption) {
	      return activeOption.children;
	    }).filter(function (activeOption) {
	      return !!activeOption;
	    });
	    result.unshift(options);
	    return result;
	  };

	  Menus.prototype.delayOnSelect = function delayOnSelect(onSelect) {
	    var _this2 = this;

	    if (this.delayTimer) {
	      clearTimeout(this.delayTimer);
	      this.delayTimer = null;
	    }
	    if (typeof onSelect === 'function') {
	      this.delayTimer = setTimeout(function () {
	        onSelect();
	        _this2.delayTimer = null;
	      }, 150);
	    }
	  };

	  Menus.prototype.scrollActiveItemToView = function scrollActiveItemToView() {
	    // scroll into view
	    var optionsLength = this.getShowOptions().length;
	    for (var i = 0; i < optionsLength; i++) {
	      var itemComponent = this.refs['activeItem' + i];
	      if (itemComponent) {
	        var target = (0, _reactDom.findDOMNode)(itemComponent);
	        target.parentNode.scrollTop = target.offsetTop;
	      }
	    }
	  };

	  Menus.prototype.isActiveOption = function isActiveOption(option) {
	    return this.props.activeValue.some(function (value) {
	      return value === option.value;
	    });
	  };

	  Menus.prototype.render = function render() {
	    var _this3 = this;

	    var _props2 = this.props;
	    var prefixCls = _props2.prefixCls;
	    var dropdownMenuColumnStyle = _props2.dropdownMenuColumnStyle;

	    return _react2["default"].createElement('div', null, this.getShowOptions().map(function (options, menuIndex) {
	      return _react2["default"].createElement('ul', { className: prefixCls + '-menu', key: menuIndex, style: dropdownMenuColumnStyle }, options.map(function (option) {
	        return _this3.getOption(option, menuIndex);
	      }));
	    }));
	  };

	  return Menus;
	}(_react2["default"].Component);

	Menus.defaultProps = {
	  options: [],
	  value: [],
	  activeValue: [],
	  onChange: function onChange() {},
	  onSelect: function onSelect() {},

	  prefixCls: 'rc-cascader-menus',
	  visible: false,
	  expandTrigger: 'click',
	  changeOnSelect: false
	};

	Menus.propTypes = {
	  value: _react2["default"].PropTypes.array,
	  activeValue: _react2["default"].PropTypes.array,
	  options: _react2["default"].PropTypes.array.isRequired,
	  prefixCls: _react2["default"].PropTypes.string,
	  expandTrigger: _react2["default"].PropTypes.string,
	  onChange: _react2["default"].PropTypes.func,
	  onSelect: _react2["default"].PropTypes.func,
	  loadData: _react2["default"].PropTypes.func,
	  visible: _react2["default"].PropTypes.bool,
	  changeOnSelect: _react2["default"].PropTypes.bool,
	  dropdownMenuColumnStyle: _react2["default"].PropTypes.object
	};

	exports["default"] = Menus;
	module.exports = exports['default'];

/***/ },

/***/ 579:
/***/ function(module, exports) {

	'use strict';

	function arrayTreeFilter(data, filterFn, options) {
	  options = options || {};
	  options.childrenKeyName = options.childrenKeyName || 'children';
	  var children = data || [];
	  var result = [];
	  var level = 0;
	  var foundItem;
	  do {
	    var foundItem = children.filter(function (item) {
	      return filterFn(item, level);
	    })[0];
	    if (!foundItem) {
	      break;
	    }
	    result.push(foundItem);
	    children = foundItem[options.childrenKeyName] || [];
	    level += 1;
	  } while (children.length > 0);
	  return result;
	}

	module.exports = arrayTreeFilter;

/***/ },

/***/ 580:
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  city_code: [{
	    label: "所有城市",
	    value: 10000
	  }, {
	    label: "安徽省",
	    value: 10001,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "阜阳市",
	      value: 128
	    }, {
	      label: "蚌埠市",
	      value: 126
	    }, {
	      label: "池州市",
	      value: 299
	    }, {
	      label: "淮南市",
	      value: 250
	    }, {
	      label: "宿州市",
	      value: 370
	    }, {
	      label: "马鞍山市",
	      value: 358
	    }, {
	      label: "宣城市",
	      value: 190
	    }, {
	      label: "淮北市",
	      value: 253
	    }, {
	      label: "巢湖市",
	      value: 251
	    }, {
	      label: "铜陵市",
	      value: 337
	    }, {
	      label: "六安市",
	      value: 298
	    }, {
	      label: "安庆市",
	      value: 130
	    }, {
	      label: "合肥市",
	      value: 127
	    }, {
	      label: "黄山市",
	      value: 252
	    }, {
	      label: "亳州市",
	      value: 188
	    }, {
	      label: "芜湖市",
	      value: 129
	    }, {
	      label: "滁州市",
	      value: 189
	    }]
	  }, {
	    label: "内蒙古自治区",
	    value: 10002,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "锡林郭勒盟",
	      value: 63
	    }, {
	      label: "乌海市",
	      value: 123
	    }, {
	      label: "赤峰市",
	      value: 297
	    }, {
	      label: "阿拉善盟",
	      value: 230
	    }, {
	      label: "通辽市",
	      value: 64
	    }, {
	      label: "鄂尔多斯市",
	      value: 283
	    }, {
	      label: "呼伦贝尔市",
	      value: 61
	    }, {
	      label: "巴彦淖尔市",
	      value: 169
	    }, {
	      label: "呼和浩特市",
	      value: 321
	    }, {
	      label: "乌兰察布市",
	      value: 168
	    }, {
	      label: "包头市",
	      value: 229
	    }, {
	      label: "兴安盟",
	      value: 62
	    }]
	  }, {
	    label: "湖北省",
	    value: 10003,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "咸宁市",
	      value: 362
	    }, {
	      label: "十堰市",
	      value: 216
	    }, {
	      label: "天门市",
	      value: 10304
	    }, {
	      label: "宜昌市",
	      value: 270
	    }, {
	      label: "随州市",
	      value: 371
	    }, {
	      label: "襄樊市",
	      value: 156
	    }, {
	      label: "神农架林区",
	      value: 10308
	    }, {
	      label: "鄂州市",
	      value: 122
	    }, {
	      label: "恩施土家族苗族自治州",
	      value: 373
	    }, {
	      label: "荆门市",
	      value: 217
	    }, {
	      label: "仙桃市",
	      value: 10312
	    }, {
	      label: "孝感市",
	      value: 310
	    }, {
	      label: "武汉市",
	      value: 218
	    }, {
	      label: "荆州市",
	      value: 157
	    }, {
	      label: "潜江市",
	      value: 10316
	    }, {
	      label: "黄石市",
	      value: 311
	    }, {
	      label: "黄冈市",
	      value: 271
	    }]
	  }, {
	    label: "浙江省",
	    value: 10004,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "衢州市",
	      value: 243
	    }, {
	      label: "嘉兴市",
	      value: 334
	    }, {
	      label: "舟山市",
	      value: 245
	    }, {
	      label: "湖州市",
	      value: 294
	    }, {
	      label: "杭州市",
	      value: 179
	    }, {
	      label: "台州市",
	      value: 244
	    }, {
	      label: "绍兴市",
	      value: 293
	    }, {
	      label: "宁波市",
	      value: 180
	    }, {
	      label: "金华市",
	      value: 333
	    }, {
	      label: "温州市",
	      value: 178
	    }, {
	      label: "丽水市",
	      value: 292
	    }]
	  }, {
	    label: "云南省",
	    value: 10005,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "文山壮族苗族自治州",
	      value: 177
	    }, {
	      label: "玉溪市",
	      value: 106
	    }, {
	      label: "迪庆藏族自治州",
	      value: 115
	    }, {
	      label: "保山市",
	      value: 112
	    }, {
	      label: "西双版纳傣族自治州",
	      value: 109
	    }, {
	      label: "昭通市",
	      value: 336
	    }, {
	      label: "丽江市",
	      value: 114
	    }, {
	      label: "大理白族自治州",
	      value: 111
	    }, {
	      label: "普洱市",
	      value: 108
	    }, {
	      label: "德宏傣族景颇族自治州",
	      value: 116
	    }, {
	      label: "临沧市",
	      value: 110
	    }, {
	      label: "昆明市",
	      value: 104
	    }, {
	      label: "楚雄彝族自治州",
	      value: 105
	    }, {
	      label: "怒江傈僳族自治州",
	      value: 113
	    }, {
	      label: "曲靖市",
	      value: 249
	    }, {
	      label: "红河哈尼族彝族自治州",
	      value: 107
	    }]
	  }, {
	    label: "陕西省",
	    value: 10006,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "榆林市",
	      value: 231
	    }, {
	      label: "咸阳市",
	      value: 323
	    }, {
	      label: "安康市",
	      value: 324
	    }, {
	      label: "渭南市",
	      value: 170
	    }, {
	      label: "西安市",
	      value: 233
	    }, {
	      label: "白河县",
	      value: 10607
	    }, {
	      label: "延安市",
	      value: 284
	    }, {
	      label: "铜川市",
	      value: 232
	    }, {
	      label: "汉中市",
	      value: 352
	    }, {
	      label: "宝鸡市",
	      value: 171
	    }]
	  }, {
	    label: "贵州省",
	    value: 10007,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "黔东南苗族侗族自治州",
	      value: 342
	    }, {
	      label: "安顺市",
	      value: 263
	    }, {
	      label: "黔南布依族苗族自治州",
	      value: 306
	    }, {
	      label: "铜仁地区",
	      value: 205
	    }, {
	      label: "贵阳市",
	      value: 146
	    }, {
	      label: "黔西南布依族苗族自治州",
	      value: 343
	    }, {
	      label: "六盘水市",
	      value: 147
	    }, {
	      label: "毕节地区",
	      value: 206
	    }, {
	      label: "遵义市",
	      value: 262
	    }]
	  }, {
	    label: "广西壮族自治区",
	    value: 10008,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "贺州市",
	      value: 260
	    }, {
	      label: "桂林市",
	      value: 142
	    }, {
	      label: "梧州市",
	      value: 304
	    }, {
	      label: "河池市",
	      value: 143
	    }, {
	      label: "北海市",
	      value: 295
	    }, {
	      label: "防城港市",
	      value: 204
	    }, {
	      label: "来宾市",
	      value: 202
	    }, {
	      label: "钦州市",
	      value: 145
	    }, {
	      label: "崇左市",
	      value: 144
	    }, {
	      label: "贵港市",
	      value: 341
	    }, {
	      label: "南宁市",
	      value: 261
	    }, {
	      label: "玉林市",
	      value: 361
	    }, {
	      label: "柳州市",
	      value: 305
	    }, {
	      label: "百色市",
	      value: 203
	    }]
	  }, {
	    label: "黑龙江省",
	    value: 10009,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "黑河市",
	      value: 39
	    }, {
	      label: "鸡西市",
	      value: 46
	    }, {
	      label: "鹤岗市",
	      value: 43
	    }, {
	      label: "绥化市",
	      value: 44
	    }, {
	      label: "双鸭山市",
	      value: 45
	    }, {
	      label: "大庆市",
	      value: 50
	    }, {
	      label: "大兴安岭地区",
	      value: 38
	    }, {
	      label: "伊春市",
	      value: 40
	    }, {
	      label: "佳木斯市",
	      value: 42
	    }, {
	      label: "哈尔滨市",
	      value: 48
	    }, {
	      label: "七台河市",
	      value: 47
	    }, {
	      label: "齐齐哈尔市",
	      value: 41
	    }, {
	      label: "牡丹江市",
	      value: 49
	    }]
	  }, {
	    label: "天津市",
	    value: 10010,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "天津市",
	      value: 332
	    }]
	  }, {
	    label: "甘肃省",
	    value: 10011,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "定西市",
	      value: 136
	    }, {
	      label: "金昌市",
	      value: 34
	    }, {
	      label: "白银市",
	      value: 35
	    }, {
	      label: "陇南市",
	      value: 256
	    }, {
	      label: "天水市",
	      value: 196
	    }, {
	      label: "武威市",
	      value: 118
	    }, {
	      label: "临夏回族自治州",
	      value: 182
	    }, {
	      label: "张掖市",
	      value: 117
	    }, {
	      label: "甘南藏族自治州",
	      value: 247
	    }, {
	      label: "平凉市",
	      value: 359
	    }, {
	      label: "兰州市",
	      value: 36
	    }, {
	      label: "酒泉市",
	      value: 37
	    }, {
	      label: "嘉峪关市",
	      value: 33
	    }, {
	      label: "庆阳市",
	      value: 135
	    }]
	  }, {
	    label: "重庆市",
	    value: 10012,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "重庆市",
	      value: 132
	    }]
	  }, {
	    label: "吉林省",
	    value: 10013,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "白城市",
	      value: 51
	    }, {
	      label: "辽源市",
	      value: 183
	    }, {
	      label: "延边朝鲜族自治州",
	      value: 54
	    }, {
	      label: "通化市",
	      value: 165
	    }, {
	      label: "长春市",
	      value: 53
	    }, {
	      label: "白山市",
	      value: 57
	    }, {
	      label: "吉林市",
	      value: 55
	    }, {
	      label: "松原市",
	      value: 52
	    }, {
	      label: "四平市",
	      value: 56
	    }]
	  }, {
	    label: "四川省",
	    value: 10014,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "阿坝藏族羌族自治州",
	      value: 185
	    }, {
	      label: "南充市",
	      value: 291
	    }, {
	      label: "甘孜藏族自治州",
	      value: 73
	    }, {
	      label: "眉山市",
	      value: 77
	    }, {
	      label: "成都市",
	      value: 75
	    }, {
	      label: "宜宾市",
	      value: 186
	    }, {
	      label: "自贡市",
	      value: 78
	    }, {
	      label: "凉山彝族自治州",
	      value: 80
	    }, {
	      label: "攀枝花市",
	      value: 81
	    }, {
	      label: "广安市",
	      value: 241
	    }, {
	      label: "泸州市",
	      value: 331
	    }, {
	      label: "达州市",
	      value: 369
	    }, {
	      label: "德阳市",
	      value: 74
	    }, {
	      label: "绵阳市",
	      value: 240
	    }, {
	      label: "雅安市",
	      value: 76
	    }, {
	      label: "广元市",
	      value: 329
	    }, {
	      label: "巴中市",
	      value: 239
	    }, {
	      label: "遂宁市",
	      value: 330
	    }, {
	      label: "内江市",
	      value: 248
	    }, {
	      label: "资阳市",
	      value: 242
	    }, {
	      label: "乐山市",
	      value: 79
	    }]
	  }, {
	    label: "广东省",
	    value: 10015,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "潮州市",
	      value: 201
	    }, {
	      label: "惠州市",
	      value: 301
	    }, {
	      label: "揭阳市",
	      value: 259
	    }, {
	      label: "梅州市",
	      value: 141
	    }, {
	      label: "广州市",
	      value: 257
	    }, {
	      label: "汕尾市",
	      value: 339
	    }, {
	      label: "韶关市",
	      value: 137
	    }, {
	      label: "云浮市",
	      value: 258
	    }, {
	      label: "深圳市",
	      value: 340
	    }, {
	      label: "河源市",
	      value: 200
	    }, {
	      label: "珠海市",
	      value: 140
	    }, {
	      label: "阳江市",
	      value: 199
	    }, {
	      label: "汕头市",
	      value: 303
	    }, {
	      label: "佛山市",
	      value: 138
	    }, {
	      label: "清远市",
	      value: 197
	    }, {
	      label: "江门市",
	      value: 302
	    }, {
	      label: "东莞市",
	      value: 119
	    }, {
	      label: "湛江市",
	      value: 198
	    }, {
	      label: "茂名市",
	      value: 139
	    }, {
	      label: "中山市",
	      value: 187
	    }, {
	      label: "肇庆市",
	      value: 338
	    }]
	  }, {
	    label: "江西省",
	    value: 10016,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "吉安市",
	      value: 318
	    }, {
	      label: "九江市",
	      value: 349
	    }, {
	      label: "宜春市",
	      value: 278
	    }, {
	      label: "新余市",
	      value: 164
	    }, {
	      label: "南昌市",
	      value: 163
	    }, {
	      label: "抚州市",
	      value: 226
	    }, {
	      label: "鹰潭市",
	      value: 279
	    }, {
	      label: "景德镇市",
	      value: 225
	    }, {
	      label: "赣州市",
	      value: 365
	    }, {
	      label: "萍乡市",
	      value: 350
	    }, {
	      label: "上饶市",
	      value: 364
	    }]
	  }, {
	    label: "青海省",
	    value: 10017,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "黄南藏族自治州",
	      value: 70
	    }, {
	      label: "果洛藏族自治州",
	      value: 72
	    }, {
	      label: "西宁市",
	      value: 66
	    }, {
	      label: "玉树藏族自治州",
	      value: 71
	    }, {
	      label: "海东地区",
	      value: 69
	    }, {
	      label: "海西蒙古族藏族自治州",
	      value: 65
	    }, {
	      label: "海北藏族自治州",
	      value: 67
	    }]
	  }, {
	    label: "辽宁省",
	    value: 10018,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "盘锦市",
	      value: 228
	    }, {
	      label: "鞍山市",
	      value: 320
	    }, {
	      label: "抚顺市",
	      value: 184
	    }, {
	      label: "铁岭市",
	      value: 60
	    }, {
	      label: "本溪市",
	      value: 227
	    }, {
	      label: "丹东市",
	      value: 282
	    }, {
	      label: "朝阳市",
	      value: 280
	    }, {
	      label: "锦州市",
	      value: 166
	    }, {
	      label: "葫芦岛市",
	      value: 319
	    }, {
	      label: "营口市",
	      value: 281
	    }, {
	      label: "沈阳市",
	      value: 58
	    }, {
	      label: "阜新市",
	      value: 59
	    }, {
	      label: "大连市",
	      value: 167
	    }, {
	      label: "辽阳市",
	      value: 351
	    }]
	  }, {
	    label: "香港特别行政区",
	    value: 10019,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "香港特别行政区",
	      value: 2912
	    }]
	  }, {
	    label: "台湾省",
	    value: 10020,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "屏东县",
	      value: 12002
	    }, {
	      label: "苗栗县",
	      value: 12003
	    }, {
	      label: "台东县",
	      value: 12004
	    }, {
	      label: "台中县",
	      value: 12005
	    }, {
	      label: "台北市",
	      value: 12006
	    }, {
	      label: "彰化县",
	      value: 12007
	    }, {
	      label: "高雄市",
	      value: 12008
	    }, {
	      label: "花莲县",
	      value: 12009
	    }, {
	      label: "基隆市",
	      value: 12010
	    }, {
	      label: "南投县",
	      value: 12011
	    }, {
	      label: "新竹市",
	      value: 12012
	    }, {
	      label: "澎湖县",
	      value: 12013
	    }, {
	      label: "云林县",
	      value: 12014
	    }, {
	      label: "台中市",
	      value: 12015
	    }, {
	      label: "嘉义市",
	      value: 12016
	    }, {
	      label: "嘉义县",
	      value: 12017
	    }, {
	      label: "台北县",
	      value: 12018
	    }, {
	      label: "台南县",
	      value: 12019
	    }, {
	      label: "宜兰县",
	      value: 12020
	    }, {
	      label: "桃园县",
	      value: 12021
	    }, {
	      label: "高雄县",
	      value: 12022
	    }, {
	      label: "新竹县",
	      value: 12023
	    }]
	  }, {
	    label: "山东省",
	    value: 10021,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "日照市",
	      value: 173
	    }, {
	      label: "淄博市",
	      value: 354
	    }, {
	      label: "滨州市",
	      value: 235
	    }, {
	      label: "枣庄市",
	      value: 172
	    }, {
	      label: "莱芜市",
	      value: 124
	    }, {
	      label: "东营市",
	      value: 174
	    }, {
	      label: "菏泽市",
	      value: 353
	    }, {
	      label: "烟台市",
	      value: 326
	    }, {
	      label: "临沂市",
	      value: 234
	    }, {
	      label: "潍坊市",
	      value: 287
	    }, {
	      label: "德州市",
	      value: 372
	    }, {
	      label: "济宁市",
	      value: 286
	    }, {
	      label: "济南市",
	      value: 288
	    }, {
	      label: "泰安市",
	      value: 325
	    }, {
	      label: "聊城市",
	      value: 366
	    }, {
	      label: "青岛市",
	      value: 236
	    }, {
	      label: "威海市",
	      value: 175
	    }]
	  }, {
	    label: "西藏自治区",
	    value: 10022,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "日喀则地区",
	      value: 102
	    }, {
	      label: "那曲地区",
	      value: 101
	    }, {
	      label: "拉萨市",
	      value: 100
	    }, {
	      label: "阿里地区",
	      value: 103
	    }, {
	      label: "昌都地区",
	      value: 99
	    }, {
	      label: "林芝地区",
	      value: 98
	    }, {
	      label: "山南地区",
	      value: 97
	    }]
	  }, {
	    label: "福建省",
	    value: 10023,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "龙岩市",
	      value: 193
	    }, {
	      label: "三明市",
	      value: 254
	    }, {
	      label: "宁德市",
	      value: 192
	    }, {
	      label: "泉州市",
	      value: 134
	    }, {
	      label: "福州市",
	      value: 300
	    }, {
	      label: "漳州市",
	      value: 255
	    }, {
	      label: "厦门市",
	      value: 194
	    }, {
	      label: "南平市",
	      value: 133
	    }, {
	      label: "莆田市",
	      value: 195
	    }]
	  }, {
	    label: "新疆维吾尔自治区",
	    value: 10024,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "和田地区",
	      value: 82
	    }, {
	      label: "吐鲁番地区",
	      value: 89
	    }, {
	      label: "阿拉尔市",
	      value: 12404
	    }, {
	      label: "哈密地区",
	      value: 91
	    }, {
	      label: "伊犁哈萨克自治州",
	      value: 90
	    }, {
	      label: "昌吉回族自治州",
	      value: 93
	    }, {
	      label: "图木舒克市",
	      value: 12408
	    }, {
	      label: "博尔塔拉蒙古自治州",
	      value: 88
	    }, {
	      label: "塔城地区",
	      value: 94
	    }, {
	      label: "五家渠市",
	      value: 12411
	    }, {
	      label: "巴音郭楞蒙古自治州",
	      value: 86
	    }, {
	      label: "阿勒泰地区",
	      value: 96
	    }, {
	      label: "阿克苏地区",
	      value: 85
	    }, {
	      label: "乌鲁木齐市",
	      value: 92
	    }, {
	      label: "克孜勒苏柯尔克孜自治州",
	      value: 84
	    }, {
	      label: "石河子市",
	      value: 12417
	    }, {
	      label: "克拉玛依市",
	      value: 95
	    }, {
	      label: "喀什地区",
	      value: 83
	    }]
	  }, {
	    label: "北京市",
	    value: 10025,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "北京市",
	      value: 131
	    }]
	  }, {
	    label: "山西省",
	    value: 10026,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "运城市",
	      value: 328
	    }, {
	      label: "长治市",
	      value: 356
	    }, {
	      label: "忻州��",
	      value: 12604
	    }, {
	      label: "晋城市",
	      value: 290
	    }, {
	      label: "太原市",
	      value: 176
	    }, {
	      label: "临汾市",
	      value: 368
	    }, {
	      label: "朔州市",
	      value: 237
	    }, {
	      label: "大同市",
	      value: 355
	    }, {
	      label: "晋中市",
	      value: 238
	    }, {
	      label: "阳泉市",
	      value: 357
	    }, {
	      label: "吕梁市",
	      value: 327
	    }]
	  }, {
	    label: "河南省",
	    value: 10027,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "漯河市",
	      value: 344
	    }, {
	      label: "洛阳市",
	      value: 153
	    }, {
	      label: "周口市",
	      value: 308
	    }, {
	      label: "平顶山市",
	      value: 213
	    }, {
	      label: "三门峡市",
	      value: 212
	    }, {
	      label: "安阳市",
	      value: 267
	    }, {
	      label: "驻马店市",
	      value: 269
	    }, {
	      label: "鹤壁市",
	      value: 215
	    }, {
	      label: "南阳市",
	      value: 309
	    }, {
	      label: "济源市",
	      value: 1277
	    }, {
	      label: "新乡市",
	      value: 152
	    }, {
	      label: "商丘市",
	      value: 154
	    }, {
	      label: "焦作市",
	      value: 211
	    }, {
	      label: "郑州市",
	      value: 268
	    }, {
	      label: "濮阳市",
	      value: 209
	    }, {
	      label: "信阳市",
	      value: 214
	    }, {
	      label: "开封市",
	      value: 210
	    }, {
	      label: "许昌市",
	      value: 155
	    }]
	  }, {
	    label: "上海市",
	    value: 10028,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "上海市",
	      value: 289
	    }]
	  }, {
	    label: "河北省",
	    value: 10029,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "承德市",
	      value: 207
	    }, {
	      label: "邯郸市",
	      value: 151
	    }, {
	      label: "沧州市",
	      value: 149
	    }, {
	      label: "邢台市",
	      value: 266
	    }, {
	      label: "石家庄市",
	      value: 150
	    }, {
	      label: "廊坊市",
	      value: 191
	    }, {
	      label: "保定市",
	      value: 307
	    }, {
	      label: "唐山市",
	      value: 265
	    }, {
	      label: "张家口市",
	      value: 264
	    }, {
	      label: "秦皇岛市",
	      value: 148
	    }, {
	      label: "衡水市",
	      value: 208
	    }]
	  }, {
	    label: "海南省",
	    value: 10030,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "南沙群岛",
	      value: 13002
	    }, {
	      label: "临高县",
	      value: 13003
	    }, {
	      label: "中沙群岛的岛礁及其海域",
	      value: 13004
	    }, {
	      label: "白沙黎族自治县",
	      value: 13005
	    }, {
	      label: "海口市",
	      value: 125
	    }, {
	      label: "昌江黎族自治县",
	      value: 13007
	    }, {
	      label: "三亚市",
	      value: 121
	    }, {
	      label: "五指山市",
	      value: 13009
	    }, {
	      label: "乐东黎族自治县",
	      value: 13010
	    }, {
	      label: "儋州市",
	      value: 13011
	    }, {
	      label: "陵水黎族自治县",
	      value: 13012
	    }, {
	      label: "文昌市",
	      value: 13013
	    }, {
	      label: "万宁市",
	      value: 13014
	    }, {
	      label: "保亭黎族苗族自治县",
	      value: 13015
	    }, {
	      label: "东方市",
	      value: 13016
	    }, {
	      label: "琼中黎族苗族自治县",
	      value: 13017
	    }, {
	      label: "定安县",
	      value: 13018
	    }, {
	      label: "屯昌县",
	      value: 13019
	    }, {
	      label: "西沙群岛",
	      value: 13020
	    }, {
	      label: "澄迈县",
	      value: 13021
	    }]
	  }, {
	    label: "澳门特别行政区",
	    value: 10031,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "澳门特别行政区",
	      value: 2911
	    }]
	  }, {
	    label: "宁夏回族自治区",
	    value: 10032,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "固原市",
	      value: 246
	    }, {
	      label: "中卫市",
	      value: 181
	    }, {
	      label: "银川市",
	      value: 360
	    }, {
	      label: "石嘴山市",
	      value: 335
	    }, {
	      label: "吴忠市",
	      value: 322
	    }]
	  }, {
	    label: "江苏省",
	    value: 10033,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "镇江市",
	      value: 160
	    }, {
	      label: "徐州市",
	      value: 316
	    }, {
	      label: "常州市",
	      value: 348
	    }, {
	      label: "泰州市",
	      value: 276
	    }, {
	      label: "苏州市",
	      value: 224
	    }, {
	      label: "南通市",
	      value: 161
	    }, {
	      label: "宿迁市",
	      value: 277
	    }, {
	      label: "连云港市",
	      value: 347
	    }, {
	      label: "淮安市",
	      value: 162
	    }, {
	      label: "南京市",
	      value: 315
	    }, {
	      label: "盐城市",
	      value: 223
	    }, {
	      label: "无锡市",
	      value: 317
	    }, {
	      label: "扬州市",
	      value: 346
	    }]
	  }, {
	    label: "湖南省",
	    value: 10034,
	    children: [{
	      label: "不限",
	      value: 0
	    }, {
	      label: "永州市",
	      value: 314
	    }, {
	      label: "湘潭市",
	      value: 313
	    }, {
	      label: "衡阳市",
	      value: 159
	    }, {
	      label: "怀化市",
	      value: 363
	    }, {
	      label: "邵阳市",
	      value: 273
	    }, {
	      label: "岳阳市",
	      value: 220
	    }, {
	      label: "娄底市",
	      value: 221
	    }, {
	      label: "常德市",
	      value: 219
	    }, {
	      label: "湘西土家族苗族自治州",
	      value: 274
	    }, {
	      label: "张家界市",
	      value: 312
	    }, {
	      label: "长沙市",
	      value: 158
	    }, {
	      label: "益阳市",
	      value: 272
	    }, {
	      label: "株洲市",
	      value: 222
	    }, {
	      label: "郴州市",
	      value: 275
	    }]
	  }]

	};

/***/ },

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(582);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./city_switch.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./city_switch.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".city_switch {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n  .city_switch .city_name {\n    padding-right: 10px; }\n", ""]);

	// exports


/***/ },

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _css = __webpack_require__(247);

	var _modal = __webpack_require__(255);

	var _modal2 = _interopRequireDefault(_modal);

	var _css2 = __webpack_require__(252);

	var _button = __webpack_require__(275);

	var _button2 = _interopRequireDefault(_button);

	var _css3 = __webpack_require__(287);

	var _input = __webpack_require__(290);

	var _input2 = _interopRequireDefault(_input);

	var _css4 = __webpack_require__(518);

	var _notification = __webpack_require__(521);

	var _notification2 = _interopRequireDefault(_notification);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(181);

	var _fetch = __webpack_require__(306);

	var _dataURItoBlob = __webpack_require__(586);

	var _city_switch = __webpack_require__(571);

	var _city_switch2 = _interopRequireDefault(_city_switch);

	var _cropperModal = __webpack_require__(587);

	var _cropperModal2 = _interopRequireDefault(_cropperModal);

	var _richEditor = __webpack_require__(595);

	var _richEditor2 = _interopRequireDefault(_richEditor);

	__webpack_require__(605);

	__webpack_require__(607);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PublishActivity = function (_React$Component) {
		_inherits(PublishActivity, _React$Component);

		function PublishActivity(props) {
			_classCallCheck(this, PublishActivity);

			var _this2 = _possibleConstructorReturn(this, (PublishActivity.__proto__ || Object.getPrototypeOf(PublishActivity)).call(this, props));

			window.scrollTo(0, 0);
			_this2.state = {
				area_code: "",
				preview_loading: false,
				publish_loading: false,
				activity_cover: "",
				activity_subject: "",
				activity_content: "",
				look_up_view_visible: false
			};
			return _this2;
		}

		// 获取地区


		_createClass(PublishActivity, [{
			key: "get_area_code",
			value: function get_area_code(area_code) {
				this.setState({ area_code: area_code });
			}

			// 获取活动封面剪裁数据

		}, {
			key: "passUrlData",
			value: function passUrlData(result) {
				this.setState({ activity_cover: result });
			}
		}, {
			key: "handleChange",
			value: function handleChange(event) {
				this.setState({ activity_subject: event.target.value });
				console.log(event.target.value);
			}

			// 获取富文本编辑器内容

		}, {
			key: "set_content",
			value: function set_content(content) {
				this.setState({ activity_content: content });
				console.log(content);
			}

			// 活动预览

		}, {
			key: "handlePreview",
			value: function handlePreview() {
				this.setState({ look_up_view_visible: true });
			}

			// 关闭

		}, {
			key: "look_up_view_close",
			value: function look_up_view_close() {
				this.setState({ look_up_view_visible: false });
			}

			// 发布活动

		}, {
			key: "handlePublish",
			value: function handlePublish(event) {
				var _this = this;
				var area_code = this.state.area_code;
				var activity_cover = this.state.activity_cover;
				var activity_subject = this.state.activity_subject;
				var activity_content = this.state.activity_content;

				if (area_code == "") {
					_notification2.default["warning"]({
						message: "小提示",
						description: "你还没选择将要发送的城市哦"
					});
					return false;
				}

				if (activity_cover == "") {
					_notification2.default["warning"]({
						message: "小提示",
						description: "快上传一张图片作为活动封面吧！"
					});
					return false;
				}

				if (activity_subject == "") {
					_notification2.default["warning"]({
						message: "小提示",
						description: "这么着急的提交？要去约会吗？先把活动主题确定好吧！"
					});
					return false;
				}

				// 文字匹配
				if (!new RegExp("[\\u4E00-\\u9FFF]+", "g").test(activity_content)) {
					_notification2.default["warning"]({
						message: "小提示",
						description: "活动的内容如果不写点什么的话就没什么意义啦！"
					});
					return false;
				}

				this.setState({ publish_loading: true });

				var activityCover = new FormData();
				activityCover.append("activity_cover", (0, _dataURItoBlob.dataURItoBlob)(activity_cover));

				// 上传活动封面
				(0, _fetch.fetch_data_post)("/api/uploadActivityCover", activityCover, {}).then(function (result) {
					if (result.body.error) {
						_notification2.default["error"]({
							message: "错误",
							description: result.body.message
						});
						return false;
					}
					activity_cover = result.body.FileList;
					var activity_data = {
						truelove_admin_token: "truelove_admin_token",
						activity_cover: activity_cover,
						area_code: area_code,
						activity_subject: activity_subject,
						activity_content: activity_content
					};
					(0, _fetch.fetch_data_post)("/api/publish_activity", activity_data).then(function (result) {
						if (result.body.error) {
							_notification2.default["error"]({
								message: "错误",
								description: result.body.message
							});
							return false;
						}
						_notification2.default["success"]({
							message: "成功",
							description: result.body.message
						});
						_this.setState({ publish_loading: false });
						_reactRouter.browserHistory.push("/truelove_admin/activity_manage");
					}).catch(function (error) {
						return console.log(error);
					});
				}).catch(function (error) {
					return console.log(error);
				});
			}
		}, {
			key: "render",
			value: function render() {
				var _this3 = this;

				return _react2.default.createElement(
					"div",
					{ className: "publish_activity_wrap" },
					_react2.default.createElement(
						"div",
						{ className: "city_switch_wrap" },
						_react2.default.createElement(_city_switch2.default, { onSwitch: function onSwitch(area_code) {
								return _this3.get_area_code(area_code);
							} }),
						_react2.default.createElement(
							"p",
							null,
							"选择好城市之后，所发布活动将只对所选城市注册用户可见"
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "activity_cover_show" },
						"上传活动封面：",
						_react2.default.createElement(
							"div",
							{ className: "activity_cover" },
							this.state.activity_cover == "" ? _react2.default.createElement(
								"span",
								{ className: "activity_cover_text" },
								"还没有上传活动封面哦！"
							) : _react2.default.createElement("img", { src: this.state.activity_cover })
						),
						_react2.default.createElement(_cropperModal2.default, { aspectRatio: 12 / 5, passUrlData: function passUrlData(result) {
								return _this3.passUrlData(result);
							} })
					),
					_react2.default.createElement(
						"div",
						{ className: "activity_subject" },
						"活动主题：",
						_react2.default.createElement(_input2.default, { placeholder: "请填写活动主题", onChange: function onChange(event) {
								return _this3.handleChange(event);
							} })
					),
					_react2.default.createElement(
						"div",
						{ className: "activity_content_edit" },
						"编辑活动内容：",
						_react2.default.createElement(_richEditor2.default, { id: "editor", onValue: function onValue(value) {
								return _this3.set_content(value);
							} })
					),
					_react2.default.createElement(
						"div",
						{ className: "activity_publish_btn" },
						_react2.default.createElement(
							_button2.default,
							{ type: "primary", loading: this.state.preview_loading, onClick: function onClick() {
									return _this3.handlePreview();
								} },
							"活动预览"
						),
						_react2.default.createElement(
							_button2.default,
							{ type: "primary", loading: this.state.publish_loading, onClick: function onClick(event) {
									return _this3.handlePublish(event);
								} },
							"发布活动"
						)
					),
					_react2.default.createElement(
						_modal2.default,
						{ wrapClassName: "look_up_view",
							title: "活动预览",
							width: 600,
							visible: this.state.look_up_view_visible,
							onOk: function onOk() {
								return _this3.look_up_view_close();
							},
							onCancel: function onCancel() {
								return _this3.look_up_view_close();
							}
						},
						_react2.default.createElement(
							"div",
							{ className: "look_up_view_content" },
							_react2.default.createElement(
								"div",
								{ className: "activity_show" },
								_react2.default.createElement(
									"iframe",
									{ srcDoc: this.state.activity_content, frameBorder: "0", width: "100%", height: "350px" },
									this.state.activity_content
								)
							)
						)
					)
				);
			}
		}]);

		return PublishActivity;
	}(_react2.default.Component);

	exports.default = PublishActivity;

/***/ },

/***/ 586:
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  dataURItoBlob: function dataURItoBlob(dataURI) {
	    var binary = atob(dataURI.split(',')[1]);
	    var array = [];
	    for (var i = 0; i < binary.length; i++) {
	      array.push(binary.charCodeAt(i));
	    }
	    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
	  }
	};

/***/ },

/***/ 587:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _css = __webpack_require__(247);

	var _modal = __webpack_require__(255);

	var _modal2 = _interopRequireDefault(_modal);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _reactCropper = __webpack_require__(588);

	var _reactCropper2 = _interopRequireDefault(_reactCropper);

	var _upload = __webpack_require__(590);

	var _upload2 = _interopRequireDefault(_upload);

	__webpack_require__(593);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CropperModal = function (_React$Component) {
		_inherits(CropperModal, _React$Component);

		function CropperModal(props) {
			_classCallCheck(this, CropperModal);

			var _this = _possibleConstructorReturn(this, (CropperModal.__proto__ || Object.getPrototypeOf(CropperModal)).call(this, props));

			_this.state = {
				crop_visible: false,
				src: null
			};
			return _this;
		}

		_createClass(CropperModal, [{
			key: "cropImage",
			value: function cropImage() {
				if (typeof this.cropper.getCroppedCanvas() === "undefined") {
					return;
				};

				// 传递剪裁数据给父组件
				this.props.passUrlData(this.cropper.getCroppedCanvas().toDataURL("image/jpeg", "0.9"));
				this.crop_close();
			}
		}, {
			key: "onChange",
			value: function onChange(e) {
				var _this2 = this;

				e.preventDefault();
				var files = void 0;
				if (e.dataTransfer) {
					files = e.dataTransfer.files;
				} else if (e.target) {
					files = e.target.files;
				}
				var reader = new FileReader();
				reader.onload = function () {
					_this2.setState({ src: reader.result });
				};
				reader.readAsDataURL(files[0]);
				this.crop_show();
			}
		}, {
			key: "crop_show",
			value: function crop_show() {
				this.setState({ crop_visible: true });
			}
		}, {
			key: "crop_close",
			value: function crop_close() {
				this.setState({ crop_visible: false });
			}
		}, {
			key: "render",
			value: function render() {
				var _this3 = this;

				return _react2.default.createElement(
					"div",
					{ className: "upload_head" },
					_react2.default.createElement(
						_modal2.default,
						{
							wrapClassName: "activity_cover_modal",
							width: "680px",
							title: "图片剪裁",
							visible: this.state.crop_visible,
							onOk: function onOk() {
								return _this3.cropImage();
							},
							onCancel: function onCancel() {
								return _this3.crop_close();
							}
						},
						_react2.default.createElement(_reactCropper2.default, {
							style: { height: 400, width: "100%" },
							aspectRatio: this.props.aspectRatio,
							preview: "",
							guides: false,
							src: this.state.src,
							ref: function ref(cropper) {
								_this3.cropper = cropper;
							}
						})
					),
					_react2.default.createElement(_upload2.default, { onChange: function onChange(e) {
							return _this3.onChange(e);
						} })
				);
			}
		}]);

		return CropperModal;
	}(_react2.default.Component);

	exports.default = CropperModal;

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _cropperjs = __webpack_require__(589);

	var _cropperjs2 = _interopRequireDefault(_cropperjs);

	var _reactDom = __webpack_require__(43);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
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
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var optionProps = ['dragMode', 'aspectRatio', 'data',
	// unchangeable props start from here
	'viewMode', 'preview', 'responsive', 'restore', 'checkCrossOrigin', 'checkOrientation', 'modal', 'guides', 'center', 'highlight', 'background', 'autoCrop', 'autoCropArea', 'movable', 'rotatable', 'scalable', 'zoomable', 'zoomOnTouch', 'zoomOnWheel', 'wheelZoomRation', 'cropBoxMovable', 'cropBoxResizable', 'toggleDragModeOnDblclick', 'minContainerWidth', 'minContainerHeight', 'minCanvasWidth', 'minCanvasHeight', 'minCropBoxWidth', 'minCropBoxHeight', 'ready', 'cropstart', 'cropmove', 'cropend', 'crop', 'zoom'];

	var unchangeableProps = optionProps.slice(3);

	var ReactCropper = function (_Component) {
	  _inherits(ReactCropper, _Component);

	  function ReactCropper() {
	    _classCallCheck(this, ReactCropper);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReactCropper).apply(this, arguments));
	  }

	  _createClass(ReactCropper, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var options = Object.keys(this.props).filter(function (propKey) {
	        return optionProps.indexOf(propKey) !== -1;
	      }).reduce(function (prevOptions, propKey) {
	        return _extends({}, prevOptions, _defineProperty({}, propKey, _this2.props[propKey]));
	      }, {});

	      this.cropper = new _cropperjs2.default(this.img, options);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this3 = this;

	      if (nextProps.src !== this.props.src) {
	        this.cropper.reset().clear().replace(nextProps.src);
	      }
	      if (nextProps.aspectRatio !== this.props.aspectRatio) {
	        this.setAspectRatio(nextProps.aspectRatio);
	      }
	      if (nextProps.data !== this.props.data) {
	        this.setData(nextProps.data);
	      }
	      if (nextProps.dragMode !== this.props.dragMode) {
	        this.setDragMode(nextProps.dragMode);
	      }
	      if (nextProps.cropBoxData !== this.props.cropBoxData) {
	        this.setCropBoxData(nextProps.cropBoxData);
	      }
	      if (nextProps.canvasData !== this.props.canvasData) {
	        this.setCanvasData(nextProps.canvasData);
	      }
	      if (nextProps.moveTo !== this.props.moveTo) {
	        if (nextProps.moveTo.length > 1) {
	          this.moveTo(nextProps.moveTo[0], nextProps.moveTo[1]);
	        } else {
	          this.moveTo(nextProps.moveTo[0]);
	        }
	      }
	      if (nextProps.zoomTo !== this.props.zoomTo) {
	        this.zoomTo(nextProps.zoomTo);
	      }
	      if (nextProps.rotateTo !== this.props.rotateTo) {
	        this.rotateTo(nextProps.rotateTo);
	      }
	      if (nextProps.scaleX !== this.props.scaleX) {
	        this.scaleX(nextProps.scaleX);
	      }
	      if (nextProps.scaleY !== this.props.scaleY) {
	        this.scaleY(nextProps.scaleY);
	      }
	      if (nextProps.enable !== this.props.enable) {
	        if (nextProps.enable) {
	          this.enable();
	        } else {
	          this.disable();
	        }
	      }

	      Object.keys(nextProps).forEach(function (propKey) {
	        if (nextProps[propKey] !== _this3.props[propKey] && unchangeableProps.indexOf(propKey) !== -1) {
	          throw new Error('prop: ' + propKey + ' can\'t be change after componentDidMount');
	        }
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.img) {
	        // Destroy the cropper, this makes sure events such as resize are cleaned up and do not leak
	        this.cropper.destroy();
	        delete this.img;
	        delete this.cropper;
	      }
	    }
	  }, {
	    key: 'setDragMode',
	    value: function setDragMode(mode) {
	      return this.cropper.setDragMode(mode);
	    }
	  }, {
	    key: 'setAspectRatio',
	    value: function setAspectRatio(aspectRatio) {
	      return this.cropper.setAspectRatio(aspectRatio);
	    }
	  }, {
	    key: 'getCroppedCanvas',
	    value: function getCroppedCanvas(options) {
	      return this.cropper.getCroppedCanvas(options);
	    }
	  }, {
	    key: 'setCropBoxData',
	    value: function setCropBoxData(data) {
	      return this.cropper.setCropBoxData(data);
	    }
	  }, {
	    key: 'getCropBoxData',
	    value: function getCropBoxData() {
	      return this.cropper.getCropBoxData();
	    }
	  }, {
	    key: 'setCanvasData',
	    value: function setCanvasData(data) {
	      return this.cropper.setCanvasData(data);
	    }
	  }, {
	    key: 'getCanvasData',
	    value: function getCanvasData() {
	      return this.cropper.getCanvasData();
	    }
	  }, {
	    key: 'getImageData',
	    value: function getImageData() {
	      return this.cropper.getImageData();
	    }
	  }, {
	    key: 'getContainerData',
	    value: function getContainerData() {
	      return this.cropper.getContainerData();
	    }
	  }, {
	    key: 'setData',
	    value: function setData(data) {
	      return this.cropper.setData(data);
	    }
	  }, {
	    key: 'getData',
	    value: function getData(rounded) {
	      return this.cropper.getData(rounded);
	    }
	  }, {
	    key: 'crop',
	    value: function crop() {
	      return this.cropper.crop();
	    }
	  }, {
	    key: 'move',
	    value: function move(offsetX, offsetY) {
	      return this.cropper.move(offsetX, offsetY);
	    }
	  }, {
	    key: 'moveTo',
	    value: function moveTo(x, y) {
	      return this.cropper.moveTo(x, y);
	    }
	  }, {
	    key: 'zoom',
	    value: function zoom(ratio) {
	      return this.cropper.zoom(ratio);
	    }
	  }, {
	    key: 'zoomTo',
	    value: function zoomTo(ratio) {
	      return this.cropper.zoomTo(ratio);
	    }
	  }, {
	    key: 'rotate',
	    value: function rotate(degree) {
	      return this.cropper.rotate(degree);
	    }
	  }, {
	    key: 'rotateTo',
	    value: function rotateTo(degree) {
	      return this.cropper.rotateTo(degree);
	    }
	  }, {
	    key: 'enable',
	    value: function enable() {
	      return this.cropper.enable();
	    }
	  }, {
	    key: 'disable',
	    value: function disable() {
	      return this.cropper.disable();
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      return this.cropper.reset();
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      return this.cropper.clear();
	    }
	  }, {
	    key: 'replace',
	    value: function replace(url, onlyColorChanged) {
	      return this.cropper.replace(url, onlyColorChanged);
	    }
	  }, {
	    key: 'scale',
	    value: function scale(scaleX, scaleY) {
	      return this.cropper.scale(scaleX, scaleY);
	    }
	  }, {
	    key: 'scaleX',
	    value: function scaleX(_scaleX) {
	      return this.cropper.scaleX(_scaleX);
	    }
	  }, {
	    key: 'scaleY',
	    value: function scaleY(_scaleY) {
	      return this.cropper.scaleY(_scaleY);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      var _props = this.props;
	      var src = _props.src;
	      var alt = _props.alt;
	      var crossOrigin = _props.crossOrigin;

	      return _react2.default.createElement('div', {
	        src: null,
	        crossOrigin: null,
	        alt: null,
	        style: this.props.style,
	        className: this.props.className
	      }, _react2.default.createElement('img', {
	        crossOrigin: crossOrigin,
	        ref: function ref(img) {
	          _this4.img = img;
	        },
	        src: src,
	        alt: alt === undefined ? 'picture' : alt,
	        style: { opacity: 0 }
	      }));
	    }
	  }]);

	  return ReactCropper;
	}(_react.Component);

	ReactCropper.propTypes = {
	  style: _react.PropTypes.object,
	  className: _react.PropTypes.string,

	  // react cropper options
	  crossOrigin: _react.PropTypes.string,
	  src: _react.PropTypes.string,
	  alt: _react.PropTypes.string,

	  // props of option can be changed after componentDidmount
	  aspectRatio: _react.PropTypes.number,
	  dragMode: _react.PropTypes.oneOf(['crop', 'move', 'none']),
	  data: _react.PropTypes.shape({
	    x: _react.PropTypes.number,
	    y: _react.PropTypes.number,
	    width: _react.PropTypes.number,
	    height: _react.PropTypes.number,
	    rotate: _react.PropTypes.number,
	    scaleX: _react.PropTypes.number,
	    scaleY: _react.PropTypes.number
	  }),
	  scaleX: _react.PropTypes.number,
	  scaleY: _react.PropTypes.number,
	  enable: _react.PropTypes.bool,
	  cropBoxData: _react.PropTypes.shape({
	    left: _react.PropTypes.number,
	    top: _react.PropTypes.number,
	    width: _react.PropTypes.number,
	    hegiht: _react.PropTypes.number
	  }),
	  canvasData: _react.PropTypes.shape({
	    left: _react.PropTypes.number,
	    top: _react.PropTypes.number,
	    width: _react.PropTypes.number,
	    hegiht: _react.PropTypes.number
	  }),
	  zoomTo: _react.PropTypes.number,
	  moveTo: _react.PropTypes.arrayOf(_react.PropTypes.number),
	  rotateTo: _react.PropTypes.number,

	  // cropperjs options
	  // https://github.com/fengyuanchen/cropperjs#options
	  // aspectRatio, dragMode, data
	  viewMode: _react.PropTypes.oneOf([0, 1, 2, 3]),
	  preview: _react.PropTypes.string,
	  responsive: _react.PropTypes.bool,
	  restore: _react.PropTypes.bool,
	  checkCrossOrigin: _react.PropTypes.bool,
	  checkOrientation: _react.PropTypes.bool,
	  modal: _react.PropTypes.bool,
	  guides: _react.PropTypes.bool,
	  center: _react.PropTypes.bool,
	  highlight: _react.PropTypes.bool,
	  background: _react.PropTypes.bool,
	  autoCrop: _react.PropTypes.bool,
	  autoCropArea: _react.PropTypes.number,
	  movable: _react.PropTypes.bool,
	  rotatable: _react.PropTypes.bool,
	  scalable: _react.PropTypes.bool,
	  zoomable: _react.PropTypes.bool,
	  zoomOnTouch: _react.PropTypes.bool,
	  zoomOnWheel: _react.PropTypes.bool,
	  wheelZoomRation: _react.PropTypes.number,
	  cropBoxMovable: _react.PropTypes.bool,
	  cropBoxResizable: _react.PropTypes.bool,
	  toggleDragModeOnDblclick: _react.PropTypes.bool,
	  minContainerWidth: _react.PropTypes.number,
	  minContainerHeight: _react.PropTypes.number,
	  minCanvasWidth: _react.PropTypes.number,
	  minCanvasHeight: _react.PropTypes.number,
	  minCropBoxWidth: _react.PropTypes.number,
	  minCropBoxHeight: _react.PropTypes.number,
	  ready: _react.PropTypes.func,
	  cropstart: _react.PropTypes.func,
	  cropmove: _react.PropTypes.func,
	  cropend: _react.PropTypes.func,
	  crop: _react.PropTypes.func,
	  zoom: _react.PropTypes.func
	};

	ReactCropper.defaultProps = {
	  src: null,
	  dragMode: 'crop',
	  data: null,
	  scaleX: 1,
	  scaleY: 1,
	  enable: true,
	  zoomTo: 1,
	  rotateTo: 0
	};

	exports.default = ReactCropper;

/***/ },

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};/*!
	 * Cropper.js v0.8.1
	 * https://github.com/fengyuanchen/cropperjs
	 *
	 * Copyright (c) 2015-2016 Fengyuan Chen
	 * Released under the MIT license
	 *
	 * Date: 2016-09-03T04:55:16.458Z
	 */(function webpackUniversalModuleDefinition(root,factory){if(( false?'undefined':_typeof2(exports))==='object'&&( false?'undefined':_typeof2(module))==='object')module.exports=factory();else if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else{var a=factory();for(var i in a){((typeof exports==='undefined'?'undefined':_typeof2(exports))==='object'?exports:root)[i]=a[i];}}})(undefined,function(){return(/******/function(modules){// webpackBootstrap
	/******/// The module cache
	/******/var installedModules={};/******//******/// The require function
	/******/function __webpack_require__(moduleId){/******//******/// Check if module is in cache
	/******/if(installedModules[moduleId])/******/return installedModules[moduleId].exports;/******//******/// Create a new module (and put it into the cache)
	/******/var module=installedModules[moduleId]={/******/exports:{},/******/id:moduleId,/******/loaded:false/******/};/******//******/// Execute the module function
	/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******//******/// Flag the module as loaded
	/******/module.loaded=true;/******//******/// Return the exports of the module
	/******/return module.exports;/******/}/******//******//******/// expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m=modules;/******//******/// expose the module cache
	/******/__webpack_require__.c=installedModules;/******//******/// __webpack_public_path__
	/******/__webpack_require__.p="";/******//******/// Load entry module and return exports
	/******/return __webpack_require__(0);/******/}(/************************************************************************//******/[/* 0 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _defaults=__webpack_require__(1);var _defaults2=_interopRequireDefault(_defaults);var _template=__webpack_require__(2);var _template2=_interopRequireDefault(_template);var _render=__webpack_require__(3);var _render2=_interopRequireDefault(_render);var _preview=__webpack_require__(5);var _preview2=_interopRequireDefault(_preview);var _events=__webpack_require__(6);var _events2=_interopRequireDefault(_events);var _handlers=__webpack_require__(7);var _handlers2=_interopRequireDefault(_handlers);var _change=__webpack_require__(8);var _change2=_interopRequireDefault(_change);var _methods=__webpack_require__(9);var _methods2=_interopRequireDefault(_methods);var _utilities=__webpack_require__(4);var $=_interopRequireWildcard(_utilities);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}// Constants
	var NAMESPACE='cropper';// Classes
	var CLASS_HIDDEN=NAMESPACE+'-hidden';// Events
	var EVENT_ERROR='error';var EVENT_LOAD='load';var EVENT_READY='ready';var EVENT_CROP='crop';// RegExps
	var REGEXP_DATA_URL=/^data:/;var REGEXP_DATA_URL_JPEG=/^data:image\/jpeg.*;base64,/;var AnotherCropper=void 0;var Cropper=function(){function Cropper(element,options){_classCallCheck(this,Cropper);var self=this;self.element=element;self.options=$.extend({},_defaults2.default,$.isPlainObject(options)&&options);self.loaded=false;self.ready=false;self.complete=false;self.rotated=false;self.cropped=false;self.disabled=false;self.replaced=false;self.limited=false;self.wheeling=false;self.isImg=false;self.originalUrl='';self.canvasData=null;self.cropBoxData=null;self.previews=null;self.init();}_createClass(Cropper,[{key:'init',value:function init(){var self=this;var element=self.element;var tagName=element.tagName.toLowerCase();var url=void 0;if($.getData(element,NAMESPACE)){return;}$.setData(element,NAMESPACE,self);if(tagName==='img'){self.isImg=true;// e.g.: "img/picture.jpg"
	self.originalUrl=url=element.getAttribute('src');// Stop when it's a blank image
	if(!url){return;}// e.g.: "http://example.com/img/picture.jpg"
	url=element.src;}else if(tagName==='canvas'&&window.HTMLCanvasElement){url=element.toDataURL();}self.load(url);}},{key:'load',value:function load(url){var self=this;var options=self.options;var element=self.element;if(!url){return;}self.url=url;self.imageData={};if(!options.checkOrientation||!window.ArrayBuffer){self.clone();return;}// XMLHttpRequest disallows to open a Data URL in some browsers like IE11 and Safari
	if(REGEXP_DATA_URL.test(url)){if(REGEXP_DATA_URL_JPEG){self.read($.dataURLToArrayBuffer(url));}else{self.clone();}return;}var xhr=new XMLHttpRequest();xhr.onerror=xhr.onabort=function(){self.clone();};xhr.onload=function(){self.read(xhr.response);};if(options.checkCrossOrigin&&$.isCrossOriginURL(url)&&element.crossOrigin){url=$.addTimestamp(url);}xhr.open('get',url);xhr.responseType='arraybuffer';xhr.send();}},{key:'read',value:function read(arrayBuffer){var self=this;var options=self.options;var orientation=$.getOrientation(arrayBuffer);var imageData=self.imageData;var rotate=0;var scaleX=1;var scaleY=1;if(orientation>1){self.url=$.arrayBufferToDataURL(arrayBuffer);switch(orientation){// flip horizontal
	case 2:scaleX=-1;break;// rotate left 180°
	case 3:rotate=-180;break;// flip vertical
	case 4:scaleY=-1;break;// flip vertical + rotate right 90°
	case 5:rotate=90;scaleY=-1;break;// rotate right 90°
	case 6:rotate=90;break;// flip horizontal + rotate right 90°
	case 7:rotate=90;scaleX=-1;break;// rotate left 90°
	case 8:rotate=-90;break;}}if(options.rotatable){imageData.rotate=rotate;}if(options.scalable){imageData.scaleX=scaleX;imageData.scaleY=scaleY;}self.clone();}},{key:'clone',value:function clone(){var self=this;var element=self.element;var url=self.url;var crossOrigin=void 0;var crossOriginUrl=void 0;var start=void 0;var stop=void 0;if(self.options.checkCrossOrigin&&$.isCrossOriginURL(url)){crossOrigin=element.crossOrigin;if(crossOrigin){crossOriginUrl=url;}else{crossOrigin='anonymous';// Bust cache when there is not a "crossOrigin" property
	crossOriginUrl=$.addTimestamp(url);}}self.crossOrigin=crossOrigin;self.crossOriginUrl=crossOriginUrl;var image=$.createElement('img');if(crossOrigin){image.crossOrigin=crossOrigin;}image.src=crossOriginUrl||url;self.image=image;self.onStart=start=$.proxy(self.start,self);self.onStop=stop=$.proxy(self.stop,self);if(self.isImg){if(element.complete){self.start();}else{$.addListener(element,EVENT_LOAD,start);}}else{$.addListener(image,EVENT_LOAD,start);$.addListener(image,EVENT_ERROR,stop);$.addClass(image,'cropper-hide');element.parentNode.insertBefore(image,element.nextSibling);}}},{key:'start',value:function start(event){var self=this;var image=self.isImg?self.element:self.image;if(event){$.removeListener(image,EVENT_LOAD,self.onStart);$.removeListener(image,EVENT_ERROR,self.onStop);}$.getImageSize(image,function(naturalWidth,naturalHeight){$.extend(self.imageData,{naturalWidth:naturalWidth,naturalHeight:naturalHeight,aspectRatio:naturalWidth/naturalHeight});self.loaded=true;self.build();});}},{key:'stop',value:function stop(){var self=this;var image=self.image;$.removeListener(image,EVENT_LOAD,self.onStart);$.removeListener(image,EVENT_ERROR,self.onStop);$.removeChild(image);self.image=null;}},{key:'build',value:function build(){var self=this;var options=self.options;var element=self.element;var image=self.image;var container=void 0;var cropper=void 0;var canvas=void 0;var dragBox=void 0;var cropBox=void 0;var face=void 0;if(!self.loaded){return;}// Unbuild first when replace
	if(self.ready){self.unbuild();}var template=$.createElement('div');template.innerHTML=_template2.default;// Create cropper elements
	self.container=container=element.parentNode;self.cropper=cropper=$.getByClass(template,'cropper-container')[0];self.canvas=canvas=$.getByClass(cropper,'cropper-canvas')[0];self.dragBox=dragBox=$.getByClass(cropper,'cropper-drag-box')[0];self.cropBox=cropBox=$.getByClass(cropper,'cropper-crop-box')[0];self.viewBox=$.getByClass(cropper,'cropper-view-box')[0];self.face=face=$.getByClass(cropBox,'cropper-face')[0];$.appendChild(canvas,image);// Hide the original image
	$.addClass(element,CLASS_HIDDEN);// Inserts the cropper after to the current image
	container.insertBefore(cropper,element.nextSibling);// Show the image if is hidden
	if(!self.isImg){$.removeClass(image,'cropper-hide');}self.initPreview();self.bind();options.aspectRatio=Math.max(0,options.aspectRatio)||NaN;options.viewMode=Math.max(0,Math.min(3,Math.round(options.viewMode)))||0;if(options.autoCrop){self.cropped=true;if(options.modal){$.addClass(dragBox,'cropper-modal');}}else{$.addClass(cropBox,CLASS_HIDDEN);}if(!options.guides){$.addClass($.getByClass(cropBox,'cropper-dashed'),CLASS_HIDDEN);}if(!options.center){$.addClass($.getByClass(cropBox,'cropper-center'),CLASS_HIDDEN);}if(options.background){$.addClass(cropper,'cropper-bg');}if(!options.highlight){$.addClass(face,'cropper-invisible');}if(options.cropBoxMovable){$.addClass(face,'cropper-move');$.setData(face,'action','all');}if(!options.cropBoxResizable){$.addClass($.getByClass(cropBox,'cropper-line'),CLASS_HIDDEN);$.addClass($.getByClass(cropBox,'cropper-point'),CLASS_HIDDEN);}self.setDragMode(options.dragMode);self.render();self.ready=true;self.setData(options.data);// Call the "ready" option asynchronously to keep "image.cropper" is defined
	self.completing=setTimeout(function(){if($.isFunction(options.ready)){$.addListener(element,EVENT_READY,options.ready,true);}$.dispatchEvent(element,EVENT_READY);$.dispatchEvent(element,EVENT_CROP,self.getData());self.complete=true;},0);}},{key:'unbuild',value:function unbuild(){var self=this;if(!self.ready){return;}if(!self.complete){clearTimeout(self.completing);}self.ready=false;self.complete=false;self.initialImageData=null;// Clear `initialCanvasData` is necessary when replace
	self.initialCanvasData=null;self.initialCropBoxData=null;self.containerData=null;self.canvasData=null;// Clear `cropBoxData` is necessary when replace
	self.cropBoxData=null;self.unbind();self.resetPreview();self.previews=null;self.viewBox=null;self.cropBox=null;self.dragBox=null;self.canvas=null;self.container=null;$.removeChild(self.cropper);self.cropper=null;}}],[{key:'noConflict',value:function noConflict(){window.Cropper=AnotherCropper;return Cropper;}},{key:'setDefaults',value:function setDefaults(options){$.extend(_defaults2.default,$.isPlainObject(options)&&options);}}]);return Cropper;}();$.extend(Cropper.prototype,_render2.default);$.extend(Cropper.prototype,_preview2.default);$.extend(Cropper.prototype,_events2.default);$.extend(Cropper.prototype,_handlers2.default);$.extend(Cropper.prototype,_change2.default);$.extend(Cropper.prototype,_methods2.default);if(typeof window!=='undefined'){AnotherCropper=window.Cropper;window.Cropper=Cropper;}exports.default=Cropper;/***/},/* 1 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default={// Define the view mode of the cropper
	viewMode:0,// 0, 1, 2, 3
	// Define the dragging mode of the cropper
	dragMode:'crop',// 'crop', 'move' or 'none'
	// Define the aspect ratio of the crop box
	aspectRatio:NaN,// An object with the previous cropping result data
	data:null,// A selector for adding extra containers to preview
	preview:'',// Re-render the cropper when resize the window
	responsive:true,// Restore the cropped area after resize the window
	restore:true,// Check if the current image is a cross-origin image
	checkCrossOrigin:true,// Check the current image's Exif Orientation information
	checkOrientation:true,// Show the black modal
	modal:true,// Show the dashed lines for guiding
	guides:true,// Show the center indicator for guiding
	center:true,// Show the white modal to highlight the crop box
	highlight:true,// Show the grid background
	background:true,// Enable to crop the image automatically when initialize
	autoCrop:true,// Define the percentage of automatic cropping area when initializes
	autoCropArea:0.8,// Enable to move the image
	movable:true,// Enable to rotate the image
	rotatable:true,// Enable to scale the image
	scalable:true,// Enable to zoom the image
	zoomable:true,// Enable to zoom the image by dragging touch
	zoomOnTouch:true,// Enable to zoom the image by wheeling mouse
	zoomOnWheel:true,// Define zoom ratio when zoom the image by wheeling mouse
	wheelZoomRatio:0.1,// Enable to move the crop box
	cropBoxMovable:true,// Enable to resize the crop box
	cropBoxResizable:true,// Toggle drag mode between "crop" and "move" when click twice on the cropper
	toggleDragModeOnDblclick:true,// Size limitation
	minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,// Shortcuts of events
	ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null};/***/},/* 2 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default='<div class="cropper-container">'+'<div class="cropper-wrap-box">'+'<div class="cropper-canvas"></div>'+'</div>'+'<div class="cropper-drag-box"></div>'+'<div class="cropper-crop-box">'+'<span class="cropper-view-box"></span>'+'<span class="cropper-dashed dashed-h"></span>'+'<span class="cropper-dashed dashed-v"></span>'+'<span class="cropper-center"></span>'+'<span class="cropper-face"></span>'+'<span class="cropper-line line-e" data-action="e"></span>'+'<span class="cropper-line line-n" data-action="n"></span>'+'<span class="cropper-line line-w" data-action="w"></span>'+'<span class="cropper-line line-s" data-action="s"></span>'+'<span class="cropper-point point-e" data-action="e"></span>'+'<span class="cropper-point point-n" data-action="n"></span>'+'<span class="cropper-point point-w" data-action="w"></span>'+'<span class="cropper-point point-s" data-action="s"></span>'+'<span class="cropper-point point-ne" data-action="ne"></span>'+'<span class="cropper-point point-nw" data-action="nw"></span>'+'<span class="cropper-point point-sw" data-action="sw"></span>'+'<span class="cropper-point point-se" data-action="se"></span>'+'</div>'+'</div>';/***/},/* 3 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _utilities=__webpack_require__(4);var $=_interopRequireWildcard(_utilities);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}exports.default={render:function render(){var self=this;self.initContainer();self.initCanvas();self.initCropBox();self.renderCanvas();if(self.cropped){self.renderCropBox();}},initContainer:function initContainer(){var self=this;var options=self.options;var element=self.element;var container=self.container;var cropper=self.cropper;var containerData=void 0;$.addClass(cropper,'cropper-hidden');$.removeClass(element,'cropper-hidden');self.containerData=containerData={width:Math.max(container.offsetWidth,Number(options.minContainerWidth)||200),height:Math.max(container.offsetHeight,Number(options.minContainerHeight)||100)};$.setStyle(cropper,{width:containerData.width,height:containerData.height});$.addClass(element,'cropper-hidden');$.removeClass(cropper,'cropper-hidden');},// Canvas (image wrapper)
	initCanvas:function initCanvas(){var self=this;var viewMode=self.options.viewMode;var containerData=self.containerData;var imageData=self.imageData;var rotated=Math.abs(imageData.rotate)===90;var naturalWidth=rotated?imageData.naturalHeight:imageData.naturalWidth;var naturalHeight=rotated?imageData.naturalWidth:imageData.naturalHeight;var aspectRatio=naturalWidth/naturalHeight;var canvasWidth=containerData.width;var canvasHeight=containerData.height;if(containerData.height*aspectRatio>containerData.width){if(viewMode===3){canvasWidth=containerData.height*aspectRatio;}else{canvasHeight=containerData.width/aspectRatio;}}else if(viewMode===3){canvasHeight=containerData.width/aspectRatio;}else{canvasWidth=containerData.height*aspectRatio;}var canvasData={naturalWidth:naturalWidth,naturalHeight:naturalHeight,aspectRatio:aspectRatio,width:canvasWidth,height:canvasHeight};canvasData.oldLeft=canvasData.left=(containerData.width-canvasWidth)/2;canvasData.oldTop=canvasData.top=(containerData.height-canvasHeight)/2;self.canvasData=canvasData;self.limited=viewMode===1||viewMode===2;self.limitCanvas(true,true);self.initialImageData=$.extend({},imageData);self.initialCanvasData=$.extend({},canvasData);},limitCanvas:function limitCanvas(sizeLimited,positionLimited){var self=this;var options=self.options;var viewMode=options.viewMode;var containerData=self.containerData;var canvasData=self.canvasData;var aspectRatio=canvasData.aspectRatio;var cropBoxData=self.cropBoxData;var cropped=self.cropped&&cropBoxData;var minCanvasWidth=void 0;var minCanvasHeight=void 0;var newCanvasLeft=void 0;var newCanvasTop=void 0;if(sizeLimited){minCanvasWidth=Number(options.minCanvasWidth)||0;minCanvasHeight=Number(options.minCanvasHeight)||0;if(viewMode>1){minCanvasWidth=Math.max(minCanvasWidth,containerData.width);minCanvasHeight=Math.max(minCanvasHeight,containerData.height);if(viewMode===3){if(minCanvasHeight*aspectRatio>minCanvasWidth){minCanvasWidth=minCanvasHeight*aspectRatio;}else{minCanvasHeight=minCanvasWidth/aspectRatio;}}}else if(viewMode>0){if(minCanvasWidth){minCanvasWidth=Math.max(minCanvasWidth,cropped?cropBoxData.width:0);}else if(minCanvasHeight){minCanvasHeight=Math.max(minCanvasHeight,cropped?cropBoxData.height:0);}else if(cropped){minCanvasWidth=cropBoxData.width;minCanvasHeight=cropBoxData.height;if(minCanvasHeight*aspectRatio>minCanvasWidth){minCanvasWidth=minCanvasHeight*aspectRatio;}else{minCanvasHeight=minCanvasWidth/aspectRatio;}}}if(minCanvasWidth&&minCanvasHeight){if(minCanvasHeight*aspectRatio>minCanvasWidth){minCanvasHeight=minCanvasWidth/aspectRatio;}else{minCanvasWidth=minCanvasHeight*aspectRatio;}}else if(minCanvasWidth){minCanvasHeight=minCanvasWidth/aspectRatio;}else if(minCanvasHeight){minCanvasWidth=minCanvasHeight*aspectRatio;}canvasData.minWidth=minCanvasWidth;canvasData.minHeight=minCanvasHeight;canvasData.maxWidth=Infinity;canvasData.maxHeight=Infinity;}if(positionLimited){if(viewMode){newCanvasLeft=containerData.width-canvasData.width;newCanvasTop=containerData.height-canvasData.height;canvasData.minLeft=Math.min(0,newCanvasLeft);canvasData.minTop=Math.min(0,newCanvasTop);canvasData.maxLeft=Math.max(0,newCanvasLeft);canvasData.maxTop=Math.max(0,newCanvasTop);if(cropped&&self.limited){canvasData.minLeft=Math.min(cropBoxData.left,cropBoxData.left+(cropBoxData.width-canvasData.width));canvasData.minTop=Math.min(cropBoxData.top,cropBoxData.top+(cropBoxData.height-canvasData.height));canvasData.maxLeft=cropBoxData.left;canvasData.maxTop=cropBoxData.top;if(viewMode===2){if(canvasData.width>=containerData.width){canvasData.minLeft=Math.min(0,newCanvasLeft);canvasData.maxLeft=Math.max(0,newCanvasLeft);}if(canvasData.height>=containerData.height){canvasData.minTop=Math.min(0,newCanvasTop);canvasData.maxTop=Math.max(0,newCanvasTop);}}}}else{canvasData.minLeft=-canvasData.width;canvasData.minTop=-canvasData.height;canvasData.maxLeft=containerData.width;canvasData.maxTop=containerData.height;}}},renderCanvas:function renderCanvas(changed){var self=this;var canvasData=self.canvasData;var imageData=self.imageData;var rotate=imageData.rotate;var aspectRatio=void 0;var rotatedData=void 0;if(self.rotated){self.rotated=false;// Computes rotated sizes with image sizes
	rotatedData=$.getRotatedSizes({width:imageData.width,height:imageData.height,degree:rotate});aspectRatio=rotatedData.width/rotatedData.height;if(aspectRatio!==canvasData.aspectRatio){canvasData.left-=(rotatedData.width-canvasData.width)/2;canvasData.top-=(rotatedData.height-canvasData.height)/2;canvasData.width=rotatedData.width;canvasData.height=rotatedData.height;canvasData.aspectRatio=aspectRatio;canvasData.naturalWidth=imageData.naturalWidth;canvasData.naturalHeight=imageData.naturalHeight;// Computes rotated sizes with natural image sizes
	if(rotate%180){rotatedData=$.getRotatedSizes({width:imageData.naturalWidth,height:imageData.naturalHeight,degree:rotate});canvasData.naturalWidth=rotatedData.width;canvasData.naturalHeight=rotatedData.height;}self.limitCanvas(true,false);}}if(canvasData.width>canvasData.maxWidth||canvasData.width<canvasData.minWidth){canvasData.left=canvasData.oldLeft;}if(canvasData.height>canvasData.maxHeight||canvasData.height<canvasData.minHeight){canvasData.top=canvasData.oldTop;}canvasData.width=Math.min(Math.max(canvasData.width,canvasData.minWidth),canvasData.maxWidth);canvasData.height=Math.min(Math.max(canvasData.height,canvasData.minHeight),canvasData.maxHeight);self.limitCanvas(false,true);canvasData.oldLeft=canvasData.left=Math.min(Math.max(canvasData.left,canvasData.minLeft),canvasData.maxLeft);canvasData.oldTop=canvasData.top=Math.min(Math.max(canvasData.top,canvasData.minTop),canvasData.maxTop);$.setStyle(self.canvas,{width:canvasData.width,height:canvasData.height,left:canvasData.left,top:canvasData.top});self.renderImage();if(self.cropped&&self.limited){self.limitCropBox(true,true);}if(changed){self.output();}},renderImage:function renderImage(changed){var self=this;var canvasData=self.canvasData;var imageData=self.imageData;var newImageData=void 0;var reversedData=void 0;var reversedWidth=void 0;var reversedHeight=void 0;if(imageData.rotate){reversedData=$.getRotatedSizes({width:canvasData.width,height:canvasData.height,degree:imageData.rotate,aspectRatio:imageData.aspectRatio},true);reversedWidth=reversedData.width;reversedHeight=reversedData.height;newImageData={width:reversedWidth,height:reversedHeight,left:(canvasData.width-reversedWidth)/2,top:(canvasData.height-reversedHeight)/2};}$.extend(imageData,newImageData||{width:canvasData.width,height:canvasData.height,left:0,top:0});var transform=$.getTransform(imageData);$.setStyle(self.image,{width:imageData.width,height:imageData.height,marginLeft:imageData.left,marginTop:imageData.top,WebkitTransform:transform,msTransform:transform,transform:transform});if(changed){self.output();}},initCropBox:function initCropBox(){var self=this;var options=self.options;var aspectRatio=options.aspectRatio;var autoCropArea=Number(options.autoCropArea)||0.8;var canvasData=self.canvasData;var cropBoxData={width:canvasData.width,height:canvasData.height};if(aspectRatio){if(canvasData.height*aspectRatio>canvasData.width){cropBoxData.height=cropBoxData.width/aspectRatio;}else{cropBoxData.width=cropBoxData.height*aspectRatio;}}self.cropBoxData=cropBoxData;self.limitCropBox(true,true);// Initialize auto crop area
	cropBoxData.width=Math.min(Math.max(cropBoxData.width,cropBoxData.minWidth),cropBoxData.maxWidth);cropBoxData.height=Math.min(Math.max(cropBoxData.height,cropBoxData.minHeight),cropBoxData.maxHeight);// The width/height of auto crop area must large than "minWidth/Height"
	cropBoxData.width=Math.max(cropBoxData.minWidth,cropBoxData.width*autoCropArea);cropBoxData.height=Math.max(cropBoxData.minHeight,cropBoxData.height*autoCropArea);cropBoxData.oldLeft=cropBoxData.left=canvasData.left+(canvasData.width-cropBoxData.width)/2;cropBoxData.oldTop=cropBoxData.top=canvasData.top+(canvasData.height-cropBoxData.height)/2;self.initialCropBoxData=$.extend({},cropBoxData);},limitCropBox:function limitCropBox(sizeLimited,positionLimited){var self=this;var options=self.options;var aspectRatio=options.aspectRatio;var containerData=self.containerData;var canvasData=self.canvasData;var cropBoxData=self.cropBoxData;var limited=self.limited;var minCropBoxWidth=void 0;var minCropBoxHeight=void 0;var maxCropBoxWidth=void 0;var maxCropBoxHeight=void 0;if(sizeLimited){minCropBoxWidth=Number(options.minCropBoxWidth)||0;minCropBoxHeight=Number(options.minCropBoxHeight)||0;// The min/maxCropBoxWidth/Height must be less than containerWidth/Height
	minCropBoxWidth=Math.min(minCropBoxWidth,containerData.width);minCropBoxHeight=Math.min(minCropBoxHeight,containerData.height);maxCropBoxWidth=Math.min(containerData.width,limited?canvasData.width:containerData.width);maxCropBoxHeight=Math.min(containerData.height,limited?canvasData.height:containerData.height);if(aspectRatio){if(minCropBoxWidth&&minCropBoxHeight){if(minCropBoxHeight*aspectRatio>minCropBoxWidth){minCropBoxHeight=minCropBoxWidth/aspectRatio;}else{minCropBoxWidth=minCropBoxHeight*aspectRatio;}}else if(minCropBoxWidth){minCropBoxHeight=minCropBoxWidth/aspectRatio;}else if(minCropBoxHeight){minCropBoxWidth=minCropBoxHeight*aspectRatio;}if(maxCropBoxHeight*aspectRatio>maxCropBoxWidth){maxCropBoxHeight=maxCropBoxWidth/aspectRatio;}else{maxCropBoxWidth=maxCropBoxHeight*aspectRatio;}}// The minWidth/Height must be less than maxWidth/Height
	cropBoxData.minWidth=Math.min(minCropBoxWidth,maxCropBoxWidth);cropBoxData.minHeight=Math.min(minCropBoxHeight,maxCropBoxHeight);cropBoxData.maxWidth=maxCropBoxWidth;cropBoxData.maxHeight=maxCropBoxHeight;}if(positionLimited){if(limited){cropBoxData.minLeft=Math.max(0,canvasData.left);cropBoxData.minTop=Math.max(0,canvasData.top);cropBoxData.maxLeft=Math.min(containerData.width,canvasData.left+canvasData.width)-cropBoxData.width;cropBoxData.maxTop=Math.min(containerData.height,canvasData.top+canvasData.height)-cropBoxData.height;}else{cropBoxData.minLeft=0;cropBoxData.minTop=0;cropBoxData.maxLeft=containerData.width-cropBoxData.width;cropBoxData.maxTop=containerData.height-cropBoxData.height;}}},renderCropBox:function renderCropBox(){var self=this;var options=self.options;var containerData=self.containerData;var cropBoxData=self.cropBoxData;if(cropBoxData.width>cropBoxData.maxWidth||cropBoxData.width<cropBoxData.minWidth){cropBoxData.left=cropBoxData.oldLeft;}if(cropBoxData.height>cropBoxData.maxHeight||cropBoxData.height<cropBoxData.minHeight){cropBoxData.top=cropBoxData.oldTop;}cropBoxData.width=Math.min(Math.max(cropBoxData.width,cropBoxData.minWidth),cropBoxData.maxWidth);cropBoxData.height=Math.min(Math.max(cropBoxData.height,cropBoxData.minHeight),cropBoxData.maxHeight);self.limitCropBox(false,true);cropBoxData.oldLeft=cropBoxData.left=Math.min(Math.max(cropBoxData.left,cropBoxData.minLeft),cropBoxData.maxLeft);cropBoxData.oldTop=cropBoxData.top=Math.min(Math.max(cropBoxData.top,cropBoxData.minTop),cropBoxData.maxTop);if(options.movable&&options.cropBoxMovable){// Turn to move the canvas when the crop box is equal to the container
	$.setData(self.face,'action',cropBoxData.width===containerData.width&&cropBoxData.height===containerData.height?'move':'all');}$.setStyle(self.cropBox,{width:cropBoxData.width,height:cropBoxData.height,left:cropBoxData.left,top:cropBoxData.top});if(self.cropped&&self.limited){self.limitCanvas(true,true);}if(!self.disabled){self.output();}},output:function output(){var self=this;self.preview();if(self.complete){$.dispatchEvent(self.element,'crop',self.getData());}}};/***/},/* 4 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};exports.typeOf=typeOf;exports.isNumber=isNumber;exports.isUndefined=isUndefined;exports.isObject=isObject;exports.isPlainObject=isPlainObject;exports.isFunction=isFunction;exports.isArray=isArray;exports.toArray=toArray;exports.trim=trim;exports.each=each;exports.extend=extend;exports.proxy=proxy;exports.setStyle=setStyle;exports.hasClass=hasClass;exports.addClass=addClass;exports.removeClass=removeClass;exports.toggleClass=toggleClass;exports.hyphenate=hyphenate;exports.getData=getData;exports.setData=setData;exports.removeData=removeData;exports.removeListener=removeListener;exports.dispatchEvent=dispatchEvent;exports.getEvent=getEvent;exports.getOffset=getOffset;exports.getTouchesCenter=getTouchesCenter;exports.getByTag=getByTag;exports.getByClass=getByClass;exports.createElement=createElement;exports.appendChild=appendChild;exports.removeChild=removeChild;exports.empty=empty;exports.isCrossOriginURL=isCrossOriginURL;exports.addTimestamp=addTimestamp;exports.getImageSize=getImageSize;exports.getTransform=getTransform;exports.getRotatedSizes=getRotatedSizes;exports.getSourceCanvas=getSourceCanvas;exports.getStringFromCharCode=getStringFromCharCode;exports.getOrientation=getOrientation;exports.dataURLToArrayBuffer=dataURLToArrayBuffer;exports.arrayBufferToDataURL=arrayBufferToDataURL;// RegExps
	var REGEXP_DATA_URL_HEAD=/^data:([^;]+);base64,/;var REGEXP_HYPHENATE=/([a-z\d])([A-Z])/g;var REGEXP_ORIGINS=/^(https?:)\/\/([^:\/\?#]+):?(\d*)/i;var REGEXP_SPACES=/\s+/;var REGEXP_SUFFIX=/^(width|height|left|top|marginLeft|marginTop)$/;var REGEXP_TRIM=/^\s+(.*)\s+$/;var REGEXP_USERAGENT=/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i;var navigator=window.navigator;var IS_SAFARI_OR_UIWEBVIEW=navigator&&REGEXP_USERAGENT.test(navigator.userAgent);// Utilities
	var objectProto=Object.prototype;var toString=objectProto.toString;var hasOwnProperty=objectProto.hasOwnProperty;var slice=Array.prototype.slice;var fromCharCode=String.fromCharCode;function typeOf(obj){return toString.call(obj).slice(8,-1).toLowerCase();}function isNumber(num){return typeof num==='number'&&!isNaN(num);}function isUndefined(obj){return typeof obj==='undefined';}function isObject(obj){return(typeof obj==='undefined'?'undefined':_typeof(obj))==='object'&&obj!==null;}function isPlainObject(obj){if(!isObject(obj)){return false;}try{var _constructor=obj.constructor;var prototype=_constructor.prototype;return _constructor&&prototype&&hasOwnProperty.call(prototype,'isPrototypeOf');}catch(e){return false;}}function isFunction(fn){return typeOf(fn)==='function';}function isArray(arr){return Array.isArray?Array.isArray(arr):typeOf(arr)==='array';}function toArray(obj,offset){offset=offset>=0?offset:0;if(Array.from){return Array.from(obj).slice(offset);}return slice.call(obj,offset);}function trim(str){if(typeof str==='string'){str=str.trim?str.trim():str.replace(REGEXP_TRIM,'$1');}return str;}function each(obj,callback){if(obj&&isFunction(callback)){var i=void 0;if(isArray(obj)||isNumber(obj.length)/* array-like */){var length=obj.length;for(i=0;i<length;i++){if(callback.call(obj,obj[i],i,obj)===false){break;}}}else if(isObject(obj)){Object.keys(obj).forEach(function(key){callback.call(obj,obj[key],key,obj);});}}return obj;}function extend(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var deep=args[0]===true;var data=deep?args[1]:args[0];if(args.length>1){// if (Object.assign) {
	//   return Object.assign.apply(Object, args);
	// }
	args.shift();args.forEach(function(arg){if(isObject(arg)){Object.keys(arg).forEach(function(key){if(deep&&isObject(data[key])){extend(true,data[key],arg[key]);}else{data[key]=arg[key];}});}});}return data;}function proxy(fn,context){for(var _len2=arguments.length,args=Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){args[_key2-2]=arguments[_key2];}return function(){for(var _len3=arguments.length,args2=Array(_len3),_key3=0;_key3<_len3;_key3++){args2[_key3]=arguments[_key3];}return fn.apply(context,args.concat(args2));};}function setStyle(element,styles){var style=element.style;each(styles,function(value,property){if(REGEXP_SUFFIX.test(property)&&isNumber(value)){value+='px';}style[property]=value;});}function hasClass(element,value){return element.classList?element.classList.contains(value):element.className.indexOf(value)>-1;}function addClass(element,value){if(isNumber(element.length)){each(element,function(elem){addClass(elem,value);});return;}if(element.classList){element.classList.add(value);return;}var className=trim(element.className);if(!className){element.className=value;}else if(className.indexOf(value)<0){element.className=className+' '+value;}}function removeClass(element,value){if(isNumber(element.length)){each(element,function(elem){removeClass(elem,value);});return;}if(element.classList){element.classList.remove(value);return;}if(element.className.indexOf(value)>=0){element.className=element.className.replace(value,'');}}function toggleClass(element,value,added){if(isNumber(element.length)){each(element,function(elem){toggleClass(elem,value,added);});return;}// IE10-11 doesn't support the second parameter of `classList.toggle`
	if(added){addClass(element,value);}else{removeClass(element,value);}}function hyphenate(str){return str.replace(REGEXP_HYPHENATE,'$1-$2').toLowerCase();}function getData(element,name){if(isObject(element[name])){return element[name];}else if(element.dataset){return element.dataset[name];}return element.getAttribute('data-'+hyphenate(name));}function setData(element,name,data){if(isObject(data)){element[name]=data;}else if(element.dataset){element.dataset[name]=data;}else{element.setAttribute('data-'+hyphenate(name),data);}}function removeData(element,name){if(isObject(element[name])){delete element[name];}else if(element.dataset){delete element.dataset[name];}else{element.removeAttribute('data-'+hyphenate(name));}}function removeListener(element,type,handler){var types=trim(type).split(REGEXP_SPACES);if(types.length>1){each(types,function(t){removeListener(element,t,handler);});return;}if(element.removeEventListener){element.removeEventListener(type,handler,false);}else if(element.detachEvent){element.detachEvent('on'+type,handler);}}function addListener(element,type,_handler,once){var types=trim(type).split(REGEXP_SPACES);var originalHandler=_handler;if(types.length>1){each(types,function(t){addListener(element,t,_handler);});return;}if(once){_handler=function handler(){for(var _len4=arguments.length,args=Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4];}removeListener(element,type,_handler);return originalHandler.apply(element,args);};}if(element.addEventListener){element.addEventListener(type,_handler,false);}else if(element.attachEvent){element.attachEvent('on${type}',_handler);}}exports.addListener=addListener;function dispatchEvent(element,type,data){if(element.dispatchEvent){var event=void 0;// Event and CustomEvent on IE9-11 are global objects, not constructors
	if(isFunction(Event)&&isFunction(CustomEvent)){if(isUndefined(data)){event=new Event(type,{bubbles:true,cancelable:true});}else{event=new CustomEvent(type,{detail:data,bubbles:true,cancelable:true});}}else if(isUndefined(data)){event=document.createEvent('Event');event.initEvent(type,true,true);}else{event=document.createEvent('CustomEvent');event.initCustomEvent(type,true,true,data);}// IE9+
	return element.dispatchEvent(event);}else if(element.fireEvent){// IE6-10 (native events only)
	return element.fireEvent('on'+type);}return true;}function getEvent(event){var e=event||window.event;// Fix target property (IE8)
	if(!e.target){e.target=e.srcElement||document;}if(!isNumber(e.pageX)&&isNumber(e.clientX)){var eventDoc=event.target.ownerDocument||document;var doc=eventDoc.documentElement;var body=eventDoc.body;e.pageX=e.clientX+((doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0));e.pageY=e.clientY+((doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0));}return e;}function getOffset(element){var doc=document.documentElement;var box=element.getBoundingClientRect();return{left:box.left+((window.scrollX||doc&&doc.scrollLeft||0)-(doc&&doc.clientLeft||0)),top:box.top+((window.scrollY||doc&&doc.scrollTop||0)-(doc&&doc.clientTop||0))};}function getTouchesCenter(touches){var length=touches.length;var pageX=0;var pageY=0;if(length){each(touches,function(touch){pageX+=touch.pageX;pageY+=touch.pageY;});pageX/=length;pageY/=length;}return{pageX:pageX,pageY:pageY};}function getByTag(element,tagName){return element.getElementsByTagName(tagName);}function getByClass(element,className){return element.getElementsByClassName?element.getElementsByClassName(className):element.querySelectorAll('.'+className);}function createElement(tagName){return document.createElement(tagName);}function appendChild(element,elem){element.appendChild(elem);}function removeChild(element){if(element.parentNode){element.parentNode.removeChild(element);}}function empty(element){while(element.firstChild){element.removeChild(element.firstChild);}}function isCrossOriginURL(url){var parts=url.match(REGEXP_ORIGINS);return parts&&(parts[1]!==location.protocol||parts[2]!==location.hostname||parts[3]!==location.port);}function addTimestamp(url){var timestamp='timestamp='+new Date().getTime();return url+(url.indexOf('?')===-1?'?':'&')+timestamp;}function getImageSize(image,callback){// Modern browsers (ignore Safari)
	if(image.naturalWidth&&!IS_SAFARI_OR_UIWEBVIEW){callback(image.naturalWidth,image.naturalHeight);return;}// IE8: Don't use `new Image()` here
	var newImage=createElement('img');newImage.onload=function load(){callback(this.width,this.height);};newImage.src=image.src;}function getTransform(data){var transforms=[];var rotate=data.rotate;var scaleX=data.scaleX;var scaleY=data.scaleY;// Rotate should come first before scale to match orientation transform
	if(isNumber(rotate)&&rotate!==0){transforms.push('rotate('+rotate+'deg)');}if(isNumber(scaleX)&&scaleX!==1){transforms.push('scaleX('+scaleX+')');}if(isNumber(scaleY)&&scaleY!==1){transforms.push('scaleY('+scaleY+')');}return transforms.length?transforms.join(' '):'none';}function getRotatedSizes(data,reversed){var deg=Math.abs(data.degree)%180;var arc=(deg>90?180-deg:deg)*Math.PI/180;var sinArc=Math.sin(arc);var cosArc=Math.cos(arc);var width=data.width;var height=data.height;var aspectRatio=data.aspectRatio;var newWidth=void 0;var newHeight=void 0;if(!reversed){newWidth=width*cosArc+height*sinArc;newHeight=width*sinArc+height*cosArc;}else{newWidth=width/(cosArc+sinArc/aspectRatio);newHeight=newWidth/aspectRatio;}return{width:newWidth,height:newHeight};}function getSourceCanvas(image,data){var canvas=createElement('canvas');var context=canvas.getContext('2d');var dstX=0;var dstY=0;var dstWidth=data.naturalWidth;var dstHeight=data.naturalHeight;var rotate=data.rotate;var scaleX=data.scaleX;var scaleY=data.scaleY;var scalable=isNumber(scaleX)&&isNumber(scaleY)&&(scaleX!==1||scaleY!==1);var rotatable=isNumber(rotate)&&rotate!==0;var advanced=rotatable||scalable;var canvasWidth=dstWidth*Math.abs(scaleX||1);var canvasHeight=dstHeight*Math.abs(scaleY||1);var translateX=void 0;var translateY=void 0;var rotated=void 0;if(scalable){translateX=canvasWidth/2;translateY=canvasHeight/2;}if(rotatable){rotated=getRotatedSizes({width:canvasWidth,height:canvasHeight,degree:rotate});canvasWidth=rotated.width;canvasHeight=rotated.height;translateX=canvasWidth/2;translateY=canvasHeight/2;}canvas.width=canvasWidth;canvas.height=canvasHeight;if(advanced){dstX=-dstWidth/2;dstY=-dstHeight/2;context.save();context.translate(translateX,translateY);}// Rotate should come first before scale as in the "getTransform" function
	if(rotatable){context.rotate(rotate*Math.PI/180);}if(scalable){context.scale(scaleX,scaleY);}context.drawImage(image,Math.floor(dstX),Math.floor(dstY),Math.floor(dstWidth),Math.floor(dstHeight));if(advanced){context.restore();}return canvas;}function getStringFromCharCode(dataView,start,length){var str='';var i=start;for(length+=start;i<length;i++){str+=fromCharCode(dataView.getUint8(i));}return str;}function getOrientation(arrayBuffer){var dataView=new DataView(arrayBuffer);var length=dataView.byteLength;var orientation=void 0;var exifIDCode=void 0;var tiffOffset=void 0;var firstIFDOffset=void 0;var littleEndian=void 0;var endianness=void 0;var app1Start=void 0;var ifdStart=void 0;var offset=void 0;var i=void 0;// Only handle JPEG image (start by 0xFFD8)
	if(dataView.getUint8(0)===0xFF&&dataView.getUint8(1)===0xD8){offset=2;while(offset<length){if(dataView.getUint8(offset)===0xFF&&dataView.getUint8(offset+1)===0xE1){app1Start=offset;break;}offset++;}}if(app1Start){exifIDCode=app1Start+4;tiffOffset=app1Start+10;if(getStringFromCharCode(dataView,exifIDCode,4)==='Exif'){endianness=dataView.getUint16(tiffOffset);littleEndian=endianness===0x4949;if(littleEndian||endianness===0x4D4D/* bigEndian */){if(dataView.getUint16(tiffOffset+2,littleEndian)===0x002A){firstIFDOffset=dataView.getUint32(tiffOffset+4,littleEndian);if(firstIFDOffset>=0x00000008){ifdStart=tiffOffset+firstIFDOffset;}}}}}if(ifdStart){length=dataView.getUint16(ifdStart,littleEndian);for(i=0;i<length;i++){offset=ifdStart+i*12+2;if(dataView.getUint16(offset,littleEndian)===0x0112/* Orientation */){// 8 is the offset of the current tag's value
	offset+=8;// Get the original orientation value
	orientation=dataView.getUint16(offset,littleEndian);// Override the orientation with its default value for Safari
	if(IS_SAFARI_OR_UIWEBVIEW){dataView.setUint16(offset,1,littleEndian);}break;}}}return orientation;}function dataURLToArrayBuffer(dataURL){var base64=dataURL.replace(REGEXP_DATA_URL_HEAD,'');var binary=atob(base64);var length=binary.length;var arrayBuffer=new ArrayBuffer(length);var dataView=new Uint8Array(arrayBuffer);var i=void 0;for(i=0;i<length;i++){dataView[i]=binary.charCodeAt(i);}return arrayBuffer;}// Only available for JPEG image
	function arrayBufferToDataURL(arrayBuffer){var dataView=new Uint8Array(arrayBuffer);var length=dataView.length;var base64='';var i=void 0;for(i=0;i<length;i++){base64+=fromCharCode(dataView[i]);}return'data:image/jpeg;base64,'+btoa(base64);}/***/},/* 5 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _utilities=__webpack_require__(4);var $=_interopRequireWildcard(_utilities);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}var DATA_PREVIEW='preview';exports.default={initPreview:function initPreview(){var self=this;var preview=self.options.preview;var image=$.createElement('img');var crossOrigin=self.crossOrigin;var url=crossOrigin?self.crossOriginUrl:self.url;if(crossOrigin){image.crossOrigin=crossOrigin;}image.src=url;$.appendChild(self.viewBox,image);self.image2=image;if(!preview){return;}var previews=document.querySelectorAll(preview);self.previews=previews;$.each(previews,function(element){var img=$.createElement('img');// Save the original size for recover
	$.setData(element,DATA_PREVIEW,{width:element.offsetWidth,height:element.offsetHeight,html:element.innerHTML});if(crossOrigin){img.crossOrigin=crossOrigin;}img.src=url;/**
		       * Override img element styles
		       * Add `display:block` to avoid margin top issue
		       * Add `height:auto` to override `height` attribute on IE8
		       * (Occur only when margin-top <= -height)
		       */img.style.cssText='display:block;'+'width:100%;'+'height:auto;'+'min-width:0!important;'+'min-height:0!important;'+'max-width:none!important;'+'max-height:none!important;'+'image-orientation:0deg!important;"';$.empty(element);$.appendChild(element,img);});},resetPreview:function resetPreview(){$.each(this.previews,function(element){var data=$.getData(element,DATA_PREVIEW);$.setStyle(element,{width:data.width,height:data.height});element.innerHTML=data.html;$.removeData(element,DATA_PREVIEW);});},preview:function preview(){var self=this;var imageData=self.imageData;var canvasData=self.canvasData;var cropBoxData=self.cropBoxData;var cropBoxWidth=cropBoxData.width;var cropBoxHeight=cropBoxData.height;var width=imageData.width;var height=imageData.height;var left=cropBoxData.left-canvasData.left-imageData.left;var top=cropBoxData.top-canvasData.top-imageData.top;var transform=$.getTransform(imageData);var transforms={WebkitTransform:transform,msTransform:transform,transform:transform};if(!self.cropped||self.disabled){return;}$.setStyle(self.image2,$.extend({width:width,height:height,marginLeft:-left,marginTop:-top},transforms));$.each(self.previews,function(element){var data=$.getData(element,DATA_PREVIEW);var originalWidth=data.width;var originalHeight=data.height;var newWidth=originalWidth;var newHeight=originalHeight;var ratio=1;if(cropBoxWidth){ratio=originalWidth/cropBoxWidth;newHeight=cropBoxHeight*ratio;}if(cropBoxHeight&&newHeight>originalHeight){ratio=originalHeight/cropBoxHeight;newWidth=cropBoxWidth*ratio;newHeight=originalHeight;}$.setStyle(element,{width:newWidth,height:newHeight});$.setStyle($.getByTag(element,'img')[0],$.extend({width:width*ratio,height:height*ratio,marginLeft:-left*ratio,marginTop:-top*ratio},transforms));});}};/***/},/* 6 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _utilities=__webpack_require__(4);var $=_interopRequireWildcard(_utilities);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}// Events
	var EVENT_MOUSE_DOWN='mousedown touchstart pointerdown MSPointerDown';var EVENT_MOUSE_MOVE='mousemove touchmove pointermove MSPointerMove';var EVENT_MOUSE_UP='mouseup touchend touchcancel pointerup pointercancel'+' MSPointerUp MSPointerCancel';var EVENT_WHEEL='wheel mousewheel DOMMouseScroll';var EVENT_DBLCLICK='dblclick';var EVENT_RESIZE='resize';var EVENT_CROP_START='cropstart';var EVENT_CROP_MOVE='cropmove';var EVENT_CROP_END='cropend';var EVENT_CROP='crop';var EVENT_ZOOM='zoom';exports.default={bind:function bind(){var self=this;var options=self.options;var element=self.element;var cropper=self.cropper;if($.isFunction(options.cropstart)){$.addListener(element,EVENT_CROP_START,options.cropstart);}if($.isFunction(options.cropmove)){$.addListener(element,EVENT_CROP_MOVE,options.cropmove);}if($.isFunction(options.cropend)){$.addListener(element,EVENT_CROP_END,options.cropend);}if($.isFunction(options.crop)){$.addListener(element,EVENT_CROP,options.crop);}if($.isFunction(options.zoom)){$.addListener(element,EVENT_ZOOM,options.zoom);}$.addListener(cropper,EVENT_MOUSE_DOWN,self.onCropStart=$.proxy(self.cropStart,self));if(options.zoomable&&options.zoomOnWheel){$.addListener(cropper,EVENT_WHEEL,self.onWheel=$.proxy(self.wheel,self));}if(options.toggleDragModeOnDblclick){$.addListener(cropper,EVENT_DBLCLICK,self.onDblclick=$.proxy(self.dblclick,self));}$.addListener(document,EVENT_MOUSE_MOVE,self.onCropMove=$.proxy(self.cropMove,self));$.addListener(document,EVENT_MOUSE_UP,self.onCropEnd=$.proxy(self.cropEnd,self));if(options.responsive){$.addListener(window,EVENT_RESIZE,self.onResize=$.proxy(self.resize,self));}},unbind:function unbind(){var self=this;var options=self.options;var element=self.element;var cropper=self.cropper;if($.isFunction(options.cropstart)){$.removeListener(element,EVENT_CROP_START,options.cropstart);}if($.isFunction(options.cropmove)){$.removeListener(element,EVENT_CROP_MOVE,options.cropmove);}if($.isFunction(options.cropend)){$.removeListener(element,EVENT_CROP_END,options.cropend);}if($.isFunction(options.crop)){$.removeListener(element,EVENT_CROP,options.crop);}if($.isFunction(options.zoom)){$.removeListener(element,EVENT_ZOOM,options.zoom);}$.removeListener(cropper,EVENT_MOUSE_DOWN,self.onCropStart);if(options.zoomable&&options.zoomOnWheel){$.removeListener(cropper,EVENT_WHEEL,self.onWheel);}if(options.toggleDragModeOnDblclick){$.removeListener(cropper,EVENT_DBLCLICK,self.onDblclick);}$.removeListener(document,EVENT_MOUSE_MOVE,self.onCropMove);$.removeListener(document,EVENT_MOUSE_UP,self.onCropEnd);if(options.responsive){$.removeListener(window,EVENT_RESIZE,self.onResize);}}};/***/},/* 7 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.REGEXP_ACTIONS=undefined;var _utilities=__webpack_require__(4);var $=_interopRequireWildcard(_utilities);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}var REGEXP_ACTIONS=exports.REGEXP_ACTIONS=/^(e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/;exports.default={resize:function resize(){var self=this;var restore=self.options.restore;var container=self.container;var containerData=self.containerData;// Check `container` is necessary for IE8
	if(self.disabled||!containerData){return;}var ratio=container.offsetWidth/containerData.width;var canvasData=void 0;var cropBoxData=void 0;// Resize when width changed or height changed
	if(ratio!==1||container.offsetHeight!==containerData.height){if(restore){canvasData=self.getCanvasData();cropBoxData=self.getCropBoxData();}self.render();if(restore){self.setCanvasData($.each(canvasData,function(n,i){canvasData[i]=n*ratio;}));self.setCropBoxData($.each(cropBoxData,function(n,i){cropBoxData[i]=n*ratio;}));}}},dblclick:function dblclick(){var self=this;if(self.disabled){return;}self.setDragMode($.hasClass(self.dragBox,'cropper-crop')?'move':'crop');},wheel:function wheel(event){var self=this;var e=$.getEvent(event);var ratio=Number(self.options.wheelZoomRatio)||0.1;var delta=1;if(self.disabled){return;}e.preventDefault();// Limit wheel speed to prevent zoom too fast (#21)
	if(self.wheeling){return;}self.wheeling=true;setTimeout(function(){self.wheeling=false;},50);if(e.deltaY){delta=e.deltaY>0?1:-1;}else if(e.wheelDelta){delta=-e.wheelDelta/120;}else if(e.detail){delta=e.detail>0?1:-1;}self.zoom(-delta*ratio,e);},cropStart:function cropStart(event){var self=this;var options=self.options;var e=$.getEvent(event);var touches=e.touches;var touchesLength=void 0;var touch=void 0;var action=void 0;if(self.disabled){return;}if(touches){touchesLength=touches.length;if(touchesLength>1){if(options.zoomable&&options.zoomOnTouch&&touchesLength===2){touch=touches[1];self.startX2=touch.pageX;self.startY2=touch.pageY;action='zoom';}else{return;}}touch=touches[0];}action=action||$.getData(e.target,'action');if(REGEXP_ACTIONS.test(action)){if($.dispatchEvent(self.element,'cropstart',{originalEvent:e,action:action})===false){return;}e.preventDefault();self.action=action;self.cropping=false;self.startX=touch?touch.pageX:e.pageX;self.startY=touch?touch.pageY:e.pageY;if(action==='crop'){self.cropping=true;$.addClass(self.dragBox,'cropper-modal');}}},cropMove:function cropMove(event){var self=this;var options=self.options;var e=$.getEvent(event);var touches=e.touches;var action=self.action;var touchesLength=void 0;var touch=void 0;if(self.disabled){return;}if(touches){touchesLength=touches.length;if(touchesLength>1){if(options.zoomable&&options.zoomOnTouch&&touchesLength===2){touch=touches[1];self.endX2=touch.pageX;self.endY2=touch.pageY;}else{return;}}touch=touches[0];}if(action){if($.dispatchEvent(self.element,'cropmove',{originalEvent:e,action:action})===false){return;}e.preventDefault();self.endX=touch?touch.pageX:e.pageX;self.endY=touch?touch.pageY:e.pageY;self.change(e.shiftKey,action==='zoom'?e:null);}},cropEnd:function cropEnd(event){var self=this;var options=self.options;var e=$.getEvent(event);var action=self.action;if(self.disabled){return;}if(action){e.preventDefault();if(self.cropping){self.cropping=false;$.toggleClass(self.dragBox,'cropper-modal',self.cropped&&options.modal);}self.action='';$.dispatchEvent(self.element,'cropend',{originalEvent:e,action:action});}}};/***/},/* 8 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _utilities=__webpack_require__(4);var $=_interopRequireWildcard(_utilities);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}// Actions
	var ACTION_EAST='e';var ACTION_WEST='w';var ACTION_SOUTH='s';var ACTION_NORTH='n';var ACTION_SOUTH_EAST='se';var ACTION_SOUTH_WEST='sw';var ACTION_NORTH_EAST='ne';var ACTION_NORTH_WEST='nw';exports.default={change:function change(shiftKey,originalEvent){var self=this;var options=self.options;var containerData=self.containerData;var canvasData=self.canvasData;var cropBoxData=self.cropBoxData;var aspectRatio=options.aspectRatio;var action=self.action;var width=cropBoxData.width;var height=cropBoxData.height;var left=cropBoxData.left;var top=cropBoxData.top;var right=left+width;var bottom=top+height;var minLeft=0;var minTop=0;var maxWidth=containerData.width;var maxHeight=containerData.height;var renderable=true;var offset=void 0;// Locking aspect ratio in "free mode" by holding shift key
	if(!aspectRatio&&shiftKey){aspectRatio=width&&height?width/height:1;}if(self.limited){minLeft=cropBoxData.minLeft;minTop=cropBoxData.minTop;maxWidth=minLeft+Math.min(containerData.width,canvasData.width,canvasData.left+canvasData.width);maxHeight=minTop+Math.min(containerData.height,canvasData.height,canvasData.top+canvasData.height);}var range={x:self.endX-self.startX,y:self.endY-self.startY};if(aspectRatio){range.X=range.y*aspectRatio;range.Y=range.x/aspectRatio;}switch(action){// Move crop box
	case'all':left+=range.x;top+=range.y;break;// Resize crop box
	case ACTION_EAST:if(range.x>=0&&(right>=maxWidth||aspectRatio&&(top<=minTop||bottom>=maxHeight))){renderable=false;break;}width+=range.x;if(aspectRatio){height=width/aspectRatio;top-=range.Y/2;}if(width<0){action=ACTION_WEST;width=0;}break;case ACTION_NORTH:if(range.y<=0&&(top<=minTop||aspectRatio&&(left<=minLeft||right>=maxWidth))){renderable=false;break;}height-=range.y;top+=range.y;if(aspectRatio){width=height*aspectRatio;left+=range.X/2;}if(height<0){action=ACTION_SOUTH;height=0;}break;case ACTION_WEST:if(range.x<=0&&(left<=minLeft||aspectRatio&&(top<=minTop||bottom>=maxHeight))){renderable=false;break;}width-=range.x;left+=range.x;if(aspectRatio){height=width/aspectRatio;top+=range.Y/2;}if(width<0){action=ACTION_EAST;width=0;}break;case ACTION_SOUTH:if(range.y>=0&&(bottom>=maxHeight||aspectRatio&&(left<=minLeft||right>=maxWidth))){renderable=false;break;}height+=range.y;if(aspectRatio){width=height*aspectRatio;left-=range.X/2;}if(height<0){action=ACTION_NORTH;height=0;}break;case ACTION_NORTH_EAST:if(aspectRatio){if(range.y<=0&&(top<=minTop||right>=maxWidth)){renderable=false;break;}height-=range.y;top+=range.y;width=height*aspectRatio;}else{if(range.x>=0){if(right<maxWidth){width+=range.x;}else if(range.y<=0&&top<=minTop){renderable=false;}}else{width+=range.x;}if(range.y<=0){if(top>minTop){height-=range.y;top+=range.y;}}else{height-=range.y;top+=range.y;}}if(width<0&&height<0){action=ACTION_SOUTH_WEST;height=0;width=0;}else if(width<0){action=ACTION_NORTH_WEST;width=0;}else if(height<0){action=ACTION_SOUTH_EAST;height=0;}break;case ACTION_NORTH_WEST:if(aspectRatio){if(range.y<=0&&(top<=minTop||left<=minLeft)){renderable=false;break;}height-=range.y;top+=range.y;width=height*aspectRatio;left+=range.X;}else{if(range.x<=0){if(left>minLeft){width-=range.x;left+=range.x;}else if(range.y<=0&&top<=minTop){renderable=false;}}else{width-=range.x;left+=range.x;}if(range.y<=0){if(top>minTop){height-=range.y;top+=range.y;}}else{height-=range.y;top+=range.y;}}if(width<0&&height<0){action=ACTION_SOUTH_EAST;height=0;width=0;}else if(width<0){action=ACTION_NORTH_EAST;width=0;}else if(height<0){action=ACTION_SOUTH_WEST;height=0;}break;case ACTION_SOUTH_WEST:if(aspectRatio){if(range.x<=0&&(left<=minLeft||bottom>=maxHeight)){renderable=false;break;}width-=range.x;left+=range.x;height=width/aspectRatio;}else{if(range.x<=0){if(left>minLeft){width-=range.x;left+=range.x;}else if(range.y>=0&&bottom>=maxHeight){renderable=false;}}else{width-=range.x;left+=range.x;}if(range.y>=0){if(bottom<maxHeight){height+=range.y;}}else{height+=range.y;}}if(width<0&&height<0){action=ACTION_NORTH_EAST;height=0;width=0;}else if(width<0){action=ACTION_SOUTH_EAST;width=0;}else if(height<0){action=ACTION_NORTH_WEST;height=0;}break;case ACTION_SOUTH_EAST:if(aspectRatio){if(range.x>=0&&(right>=maxWidth||bottom>=maxHeight)){renderable=false;break;}width+=range.x;height=width/aspectRatio;}else{if(range.x>=0){if(right<maxWidth){width+=range.x;}else if(range.y>=0&&bottom>=maxHeight){renderable=false;}}else{width+=range.x;}if(range.y>=0){if(bottom<maxHeight){height+=range.y;}}else{height+=range.y;}}if(width<0&&height<0){action=ACTION_NORTH_WEST;height=0;width=0;}else if(width<0){action=ACTION_SOUTH_WEST;width=0;}else if(height<0){action=ACTION_NORTH_EAST;height=0;}break;// Move canvas
	case'move':self.move(range.x,range.y);renderable=false;break;// Zoom canvas
	case'zoom':self.zoom(function(x1,y1,x2,y2){var z1=Math.sqrt(x1*x1+y1*y1);var z2=Math.sqrt(x2*x2+y2*y2);return(z2-z1)/z1;}(Math.abs(self.startX-self.startX2),Math.abs(self.startY-self.startY2),Math.abs(self.endX-self.endX2),Math.abs(self.endY-self.endY2)),originalEvent);self.startX2=self.endX2;self.startY2=self.endY2;renderable=false;break;// Create crop box
	case'crop':if(!range.x||!range.y){renderable=false;break;}offset=$.getOffset(self.cropper);left=self.startX-offset.left;top=self.startY-offset.top;width=cropBoxData.minWidth;height=cropBoxData.minHeight;if(range.x>0){action=range.y>0?ACTION_SOUTH_EAST:ACTION_NORTH_EAST;}else if(range.x<0){left-=width;action=range.y>0?ACTION_SOUTH_WEST:ACTION_NORTH_WEST;}if(range.y<0){top-=height;}// Show the crop box if is hidden
	if(!self.cropped){$.removeClass(self.cropBox,'cropper-hidden');self.cropped=true;if(self.limited){self.limitCropBox(true,true);}}break;// No default
	}if(renderable){cropBoxData.width=width;cropBoxData.height=height;cropBoxData.left=left;cropBoxData.top=top;self.action=action;self.renderCropBox();}// Override
	self.startX=self.endX;self.startY=self.endY;}};/***/},/* 9 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _utilities=__webpack_require__(4);var $=_interopRequireWildcard(_utilities);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}exports.default={// Show the crop box manually
	crop:function crop(){var self=this;if(self.ready&&!self.disabled){if(!self.cropped){self.cropped=true;self.limitCropBox(true,true);if(self.options.modal){$.addClass(self.dragBox,'cropper-modal');}$.removeClass(self.cropBox,'cropper-hidden');}self.setCropBoxData(self.initialCropBoxData);}return self;},// Reset the image and crop box to their initial states
	reset:function reset(){var self=this;if(self.ready&&!self.disabled){self.imageData=$.extend({},self.initialImageData);self.canvasData=$.extend({},self.initialCanvasData);self.cropBoxData=$.extend({},self.initialCropBoxData);self.renderCanvas();if(self.cropped){self.renderCropBox();}}return self;},// Clear the crop box
	clear:function clear(){var self=this;if(self.cropped&&!self.disabled){$.extend(self.cropBoxData,{left:0,top:0,width:0,height:0});self.cropped=false;self.renderCropBox();self.limitCanvas();// Render canvas after crop box rendered
	self.renderCanvas();$.removeClass(self.dragBox,'cropper-modal');$.addClass(self.cropBox,'cropper-hidden');}return self;},/**
		   * Replace the image's src and rebuild the cropper
		   *
		   * @param {String} url
		   * @param {Boolean} onlyColorChanged (optional)
		   */replace:function replace(url,onlyColorChanged){var self=this;if(!self.disabled&&url){if(self.isImg){self.element.src=url;}if(onlyColorChanged){self.url=url;self.image.src=url;if(self.ready){self.image2.src=url;$.each(self.previews,function(element){$.getByTag(element,'img')[0].src=url;});}}else{if(self.isImg){self.replaced=true;}// Clear previous data
	self.options.data=null;self.load(url);}}return self;},// Enable (unfreeze) the cropper
	enable:function enable(){var self=this;if(self.ready){self.disabled=false;$.removeClass(self.cropper,'cropper-disabled');}return self;},// Disable (freeze) the cropper
	disable:function disable(){var self=this;if(self.ready){self.disabled=true;$.addClass(self.cropper,'cropper-disabled');}return self;},// Destroy the cropper and remove the instance from the image
	destroy:function destroy(){var self=this;var element=self.element;var image=self.image;if(self.loaded){if(self.isImg&&self.replaced){element.src=self.originalUrl;}self.unbuild();$.removeClass(element,'cropper-hidden');}else if(self.isImg){$.removeListener(element,'load',self.start);}else if(image){$.removeChild(image);}$.removeData(element,'cropper');return self;},/**
		   * Move the canvas with relative offsets
		   *
		   * @param {Number} offsetX
		   * @param {Number} offsetY (optional)
		   */move:function move(offsetX,offsetY){var self=this;var canvasData=self.canvasData;return self.moveTo($.isUndefined(offsetX)?offsetX:canvasData.left+Number(offsetX),$.isUndefined(offsetY)?offsetY:canvasData.top+Number(offsetY));},/**
		   * Move the canvas to an absolute point
		   *
		   * @param {Number} x
		   * @param {Number} y (optional)
		   */moveTo:function moveTo(x,y){var self=this;var canvasData=self.canvasData;var changed=false;// If "y" is not present, its default value is "x"
	if($.isUndefined(y)){y=x;}x=Number(x);y=Number(y);if(self.ready&&!self.disabled&&self.options.movable){if($.isNumber(x)){canvasData.left=x;changed=true;}if($.isNumber(y)){canvasData.top=y;changed=true;}if(changed){self.renderCanvas(true);}}return self;},/**
		   * Zoom the canvas with a relative ratio
		   *
		   * @param {Number} ratio
		   * @param {Event} _originalEvent (private)
		   */zoom:function zoom(ratio,_originalEvent){var self=this;var canvasData=self.canvasData;ratio=Number(ratio);if(ratio<0){ratio=1/(1-ratio);}else{ratio=1+ratio;}return self.zoomTo(canvasData.width*ratio/canvasData.naturalWidth,_originalEvent);},/**
		   * Zoom the canvas to an absolute ratio
		   *
		   * @param {Number} ratio
		   * @param {Event} _originalEvent (private)
		   */zoomTo:function zoomTo(ratio,_originalEvent){var self=this;var options=self.options;var canvasData=self.canvasData;var width=canvasData.width;var height=canvasData.height;var naturalWidth=canvasData.naturalWidth;var naturalHeight=canvasData.naturalHeight;var newWidth=void 0;var newHeight=void 0;var offset=void 0;var center=void 0;ratio=Number(ratio);if(ratio>=0&&self.ready&&!self.disabled&&options.zoomable){newWidth=naturalWidth*ratio;newHeight=naturalHeight*ratio;if($.dispatchEvent(self.element,'zoom',{originalEvent:_originalEvent,oldRatio:width/naturalWidth,ratio:newWidth/naturalWidth})===false){return self;}if(_originalEvent){offset=$.getOffset(self.cropper);center=_originalEvent.touches?$.getTouchesCenter(_originalEvent.touches):{pageX:_originalEvent.pageX,pageY:_originalEvent.pageY};// Zoom from the triggering point of the event
	canvasData.left-=(newWidth-width)*((center.pageX-offset.left-canvasData.left)/width);canvasData.top-=(newHeight-height)*((center.pageY-offset.top-canvasData.top)/height);}else{// Zoom from the center of the canvas
	canvasData.left-=(newWidth-width)/2;canvasData.top-=(newHeight-height)/2;}canvasData.width=newWidth;canvasData.height=newHeight;self.renderCanvas(true);}return self;},/**
		   * Rotate the canvas with a relative degree
		   *
		   * @param {Number} degree
		   */rotate:function rotate(degree){var self=this;return self.rotateTo((self.imageData.rotate||0)+Number(degree));},/**
		   * Rotate the canvas to an absolute degree
		   * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#rotate()
		   *
		   * @param {Number} degree
		   */rotateTo:function rotateTo(degree){var self=this;degree=Number(degree);if($.isNumber(degree)&&self.ready&&!self.disabled&&self.options.rotatable){self.imageData.rotate=degree%360;self.rotated=true;self.renderCanvas(true);}return self;},/**
		   * Scale the image
		   * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function#scale()
		   *
		   * @param {Number} scaleX
		   * @param {Number} scaleY (optional)
		   */scale:function scale(scaleX,scaleY){var self=this;var imageData=self.imageData;var changed=false;// If "scaleY" is not present, its default value is "scaleX"
	if($.isUndefined(scaleY)){scaleY=scaleX;}scaleX=Number(scaleX);scaleY=Number(scaleY);if(self.ready&&!self.disabled&&self.options.scalable){if($.isNumber(scaleX)){imageData.scaleX=scaleX;changed=true;}if($.isNumber(scaleY)){imageData.scaleY=scaleY;changed=true;}if(changed){self.renderImage(true);}}return self;},/**
		   * Scale the abscissa of the image
		   *
		   * @param {Number} scaleX
		   */scaleX:function scaleX(_scaleX){var self=this;var scaleY=self.imageData.scaleY;return self.scale(_scaleX,$.isNumber(scaleY)?scaleY:1);},/**
		   * Scale the ordinate of the image
		   *
		   * @param {Number} scaleY
		   */scaleY:function scaleY(_scaleY){var self=this;var scaleX=self.imageData.scaleX;return self.scale($.isNumber(scaleX)?scaleX:1,_scaleY);},/**
		   * Get the cropped area position and size data (base on the original image)
		   *
		   * @param {Boolean} rounded (optional)
		   * @return {Object} data
		   */getData:function getData(rounded){var self=this;var options=self.options;var imageData=self.imageData;var canvasData=self.canvasData;var cropBoxData=self.cropBoxData;var ratio=void 0;var data=void 0;if(self.ready&&self.cropped){data={x:cropBoxData.left-canvasData.left,y:cropBoxData.top-canvasData.top,width:cropBoxData.width,height:cropBoxData.height};ratio=imageData.width/imageData.naturalWidth;$.each(data,function(n,i){n/=ratio;data[i]=rounded?Math.round(n):n;});}else{data={x:0,y:0,width:0,height:0};}if(options.rotatable){data.rotate=imageData.rotate||0;}if(options.scalable){data.scaleX=imageData.scaleX||1;data.scaleY=imageData.scaleY||1;}return data;},/**
		   * Set the cropped area position and size with new data
		   *
		   * @param {Object} data
		   */setData:function setData(data){var self=this;var options=self.options;var imageData=self.imageData;var canvasData=self.canvasData;var cropBoxData={};var rotated=void 0;var scaled=void 0;var ratio=void 0;if($.isFunction(data)){data=data.call(self.element);}if(self.ready&&!self.disabled&&$.isPlainObject(data)){if(options.rotatable){if($.isNumber(data.rotate)&&data.rotate!==imageData.rotate){imageData.rotate=data.rotate;self.rotated=rotated=true;}}if(options.scalable){if($.isNumber(data.scaleX)&&data.scaleX!==imageData.scaleX){imageData.scaleX=data.scaleX;scaled=true;}if($.isNumber(data.scaleY)&&data.scaleY!==imageData.scaleY){imageData.scaleY=data.scaleY;scaled=true;}}if(rotated){self.renderCanvas();}else if(scaled){self.renderImage();}ratio=imageData.width/imageData.naturalWidth;if($.isNumber(data.x)){cropBoxData.left=data.x*ratio+canvasData.left;}if($.isNumber(data.y)){cropBoxData.top=data.y*ratio+canvasData.top;}if($.isNumber(data.width)){cropBoxData.width=data.width*ratio;}if($.isNumber(data.height)){cropBoxData.height=data.height*ratio;}self.setCropBoxData(cropBoxData);}return self;},/**
		   * Get the container size data
		   *
		   * @return {Object} data
		   */getContainerData:function getContainerData(){var self=this;return self.ready?self.containerData:{};},/**
		   * Get the image position and size data
		   *
		   * @return {Object} data
		   */getImageData:function getImageData(){var self=this;return self.loaded?self.imageData:{};},/**
		   * Get the canvas position and size data
		   *
		   * @return {Object} data
		   */getCanvasData:function getCanvasData(){var self=this;var canvasData=self.canvasData;var data={};if(self.ready){$.each(['left','top','width','height','naturalWidth','naturalHeight'],function(n){data[n]=canvasData[n];});}return data;},/**
		   * Set the canvas position and size with new data
		   *
		   * @param {Object} data
		   */setCanvasData:function setCanvasData(data){var self=this;var canvasData=self.canvasData;var aspectRatio=canvasData.aspectRatio;if($.isFunction(data)){data=data.call(self.element);}if(self.ready&&!self.disabled&&$.isPlainObject(data)){if($.isNumber(data.left)){canvasData.left=data.left;}if($.isNumber(data.top)){canvasData.top=data.top;}if($.isNumber(data.width)){canvasData.width=data.width;canvasData.height=data.width/aspectRatio;}else if($.isNumber(data.height)){canvasData.height=data.height;canvasData.width=data.height*aspectRatio;}self.renderCanvas(true);}return self;},/**
		   * Get the crop box position and size data
		   *
		   * @return {Object} data
		   */getCropBoxData:function getCropBoxData(){var self=this;var cropBoxData=self.cropBoxData;var data=void 0;if(self.ready&&self.cropped){data={left:cropBoxData.left,top:cropBoxData.top,width:cropBoxData.width,height:cropBoxData.height};}return data||{};},/**
		   * Set the crop box position and size with new data
		   *
		   * @param {Object} data
		   */setCropBoxData:function setCropBoxData(data){var self=this;var cropBoxData=self.cropBoxData;var aspectRatio=self.options.aspectRatio;var widthChanged=void 0;var heightChanged=void 0;if($.isFunction(data)){data=data.call(self.element);}if(self.ready&&self.cropped&&!self.disabled&&$.isPlainObject(data)){if($.isNumber(data.left)){cropBoxData.left=data.left;}if($.isNumber(data.top)){cropBoxData.top=data.top;}if($.isNumber(data.width)){widthChanged=true;cropBoxData.width=data.width;}if($.isNumber(data.height)){heightChanged=true;cropBoxData.height=data.height;}if(aspectRatio){if(widthChanged){cropBoxData.height=cropBoxData.width/aspectRatio;}else if(heightChanged){cropBoxData.width=cropBoxData.height*aspectRatio;}}self.renderCropBox();}return self;},/**
		   * Get a canvas drawn the cropped image
		   *
		   * @param {Object} options (optional)
		   * @return {HTMLCanvasElement} canvas
		   */getCroppedCanvas:function getCroppedCanvas(options){var self=this;if(!self.ready||!window.HTMLCanvasElement){return null;}// Return the whole canvas if not cropped
	if(!self.cropped){return $.getSourceCanvas(self.image,self.imageData);}if(!$.isPlainObject(options)){options={};}var data=self.getData();var originalWidth=data.width;var originalHeight=data.height;var aspectRatio=originalWidth/originalHeight;var scaledWidth=void 0;var scaledHeight=void 0;var scaledRatio=void 0;if($.isPlainObject(options)){scaledWidth=options.width;scaledHeight=options.height;if(scaledWidth){scaledHeight=scaledWidth/aspectRatio;scaledRatio=scaledWidth/originalWidth;}else if(scaledHeight){scaledWidth=scaledHeight*aspectRatio;scaledRatio=scaledHeight/originalHeight;}}// The canvas element will use `Math.floor` on a float number, so floor first
	var canvasWidth=Math.floor(scaledWidth||originalWidth);var canvasHeight=Math.floor(scaledHeight||originalHeight);var canvas=$.createElement('canvas');var context=canvas.getContext('2d');canvas.width=canvasWidth;canvas.height=canvasHeight;if(options.fillColor){context.fillStyle=options.fillColor;context.fillRect(0,0,canvasWidth,canvasHeight);}// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage
	var parameters=function(){var source=$.getSourceCanvas(self.image,self.imageData);var sourceWidth=source.width;var sourceHeight=source.height;var canvasData=self.canvasData;var params=[source];// Source canvas
	var srcX=data.x+canvasData.naturalWidth*(Math.abs(data.scaleX||1)-1)/2;var srcY=data.y+canvasData.naturalHeight*(Math.abs(data.scaleY||1)-1)/2;var srcWidth=void 0;var srcHeight=void 0;// Destination canvas
	var dstX=void 0;var dstY=void 0;var dstWidth=void 0;var dstHeight=void 0;if(srcX<=-originalWidth||srcX>sourceWidth){srcX=srcWidth=dstX=dstWidth=0;}else if(srcX<=0){dstX=-srcX;srcX=0;srcWidth=dstWidth=Math.min(sourceWidth,originalWidth+srcX);}else if(srcX<=sourceWidth){dstX=0;srcWidth=dstWidth=Math.min(originalWidth,sourceWidth-srcX);}if(srcWidth<=0||srcY<=-originalHeight||srcY>sourceHeight){srcY=srcHeight=dstY=dstHeight=0;}else if(srcY<=0){dstY=-srcY;srcY=0;srcHeight=dstHeight=Math.min(sourceHeight,originalHeight+srcY);}else if(srcY<=sourceHeight){dstY=0;srcHeight=dstHeight=Math.min(originalHeight,sourceHeight-srcY);}params.push(Math.floor(srcX),Math.floor(srcY),Math.floor(srcWidth),Math.floor(srcHeight));// Scale destination sizes
	if(scaledRatio){dstX*=scaledRatio;dstY*=scaledRatio;dstWidth*=scaledRatio;dstHeight*=scaledRatio;}// Avoid "IndexSizeError" in IE and Firefox
	if(dstWidth>0&&dstHeight>0){params.push(Math.floor(dstX),Math.floor(dstY),Math.floor(dstWidth),Math.floor(dstHeight));}return params;}();context.drawImage.apply(context,_toConsumableArray(parameters));return canvas;},/**
		   * Change the aspect ratio of the crop box
		   *
		   * @param {Number} aspectRatio
		   */setAspectRatio:function setAspectRatio(aspectRatio){var self=this;var options=self.options;if(!self.disabled&&!$.isUndefined(aspectRatio)){// 0 -> NaN
	options.aspectRatio=Math.max(0,aspectRatio)||NaN;if(self.ready){self.initCropBox();if(self.cropped){self.renderCropBox();}}}return self;},/**
		   * Change the drag mode
		   *
		   * @param {String} mode (optional)
		   */setDragMode:function setDragMode(mode){var self=this;var options=self.options;var dragBox=self.dragBox;var face=self.face;var croppable=void 0;var movable=void 0;if(self.loaded&&!self.disabled){croppable=mode==='crop';movable=options.movable&&mode==='move';mode=croppable||movable?mode:'none';$.setData(dragBox,'action',mode);$.toggleClass(dragBox,'cropper-crop',croppable);$.toggleClass(dragBox,'cropper-move',movable);if(!options.cropBoxMovable){// Sync drag mode to crop box when it is not movable
	$.setData(face,'action',mode);$.toggleClass(face,'cropper-crop',croppable);$.toggleClass(face,'cropper-move',movable);}}return self;}};/***/}/******/]));});;//# sourceMappingURL=cropper.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(351)(module)))

/***/ },

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(591);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Upload = function (_React$Component) {
		_inherits(Upload, _React$Component);

		function Upload() {
			_classCallCheck(this, Upload);

			return _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).apply(this, arguments));
		}

		_createClass(Upload, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"a",
					{ href: "javascript:;", className: "file" },
					"上传",
					_react2.default.createElement("input", { type: "file", onChange: this.props.onChange })
				);
			}
		}]);

		return Upload;
	}(_react2.default.Component);

	exports.default = Upload;

/***/ },

/***/ 591:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(592);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./upload.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./upload.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 592:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".file {\n  position: relative;\n  text-decoration: none;\n  text-align: center;\n  line-height: 25px;\n  display: inline-block;\n  width: 100px;\n  height: 25px;\n  background-color: #FFF;\n  border: 1px solid #d9d9d9;\n  color: #666;\n  font-size: 12px;\n  border-radius: 5px; }\n  .file input {\n    position: absolute;\n    left: 0;\n    top: 0;\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n    opacity: 0; }\n\n.file:hover {\n  border: 1px solid #2db7f5;\n  color: #2db7f5; }\n", ""]);

	// exports


/***/ },

/***/ 593:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(594);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./cropper.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./cropper.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 594:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*!\n * Cropper.js v0.8.1\n * https://github.com/fengyuanchen/cropperjs\n *\n * Copyright (c) 2015-2016 Fengyuan Chen\n * Released under the MIT license\n *\n * Date: 2016-09-03T04:55:16.458Z\n */\n\n.cropper-container {\n  font-size: 0;\n  line-height: 0;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  direction: ltr;\n}\n.cropper-container img {\n  display: block;\n  min-width: 0 !important;\n  max-width: none !important;\n  min-height: 0 !important;\n  max-height: none !important;\n  width: 100%;\n  height: 100%;\n  image-orientation: 0deg;\n}\n.cropper-wrap-box,\n.cropper-canvas,\n.cropper-drag-box,\n.cropper-crop-box,\n.cropper-modal {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.cropper-wrap-box {\n  overflow: hidden;\n}\n.cropper-drag-box {\n  opacity: 0;\n  background-color: #fff;\n}\n.cropper-modal {\n  opacity: .5;\n  background-color: #000;\n}\n.cropper-view-box {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n}\n.cropper-dashed {\n  position: absolute;\n  display: block;\n  opacity: .5;\n  border: 0 dashed #eee;\n}\n.cropper-dashed.dashed-h {\n  top: 33.33333333%;\n  left: 0;\n  width: 100%;\n  height: 33.33333333%;\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n}\n.cropper-dashed.dashed-v {\n  top: 0;\n  left: 33.33333333%;\n  width: 33.33333333%;\n  height: 100%;\n  border-right-width: 1px;\n  border-left-width: 1px;\n}\n.cropper-center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  width: 0;\n  height: 0;\n  opacity: .75;\n}\n.cropper-center:before,\n.cropper-center:after {\n  position: absolute;\n  display: block;\n  content: ' ';\n  background-color: #eee;\n}\n.cropper-center:before {\n  top: 0;\n  left: -3px;\n  width: 7px;\n  height: 1px;\n}\n.cropper-center:after {\n  top: -3px;\n  left: 0;\n  width: 1px;\n  height: 7px;\n}\n.cropper-face,\n.cropper-line,\n.cropper-point {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: .1;\n}\n.cropper-face {\n  top: 0;\n  left: 0;\n  background-color: #fff;\n}\n.cropper-line {\n  background-color: #39f;\n}\n.cropper-line.line-e {\n  top: 0;\n  right: -3px;\n  width: 5px;\n  cursor: e-resize;\n}\n.cropper-line.line-n {\n  top: -3px;\n  left: 0;\n  height: 5px;\n  cursor: n-resize;\n}\n.cropper-line.line-w {\n  top: 0;\n  left: -3px;\n  width: 5px;\n  cursor: w-resize;\n}\n.cropper-line.line-s {\n  bottom: -3px;\n  left: 0;\n  height: 5px;\n  cursor: s-resize;\n}\n.cropper-point {\n  width: 5px;\n  height: 5px;\n  opacity: .75;\n  background-color: #39f;\n}\n.cropper-point.point-e {\n  top: 50%;\n  right: -3px;\n  margin-top: -3px;\n  cursor: e-resize;\n}\n.cropper-point.point-n {\n  top: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: n-resize;\n}\n.cropper-point.point-w {\n  top: 50%;\n  left: -3px;\n  margin-top: -3px;\n  cursor: w-resize;\n}\n.cropper-point.point-s {\n  bottom: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: s-resize;\n}\n.cropper-point.point-ne {\n  top: -3px;\n  right: -3px;\n  cursor: ne-resize;\n}\n.cropper-point.point-nw {\n  top: -3px;\n  left: -3px;\n  cursor: nw-resize;\n}\n.cropper-point.point-sw {\n  bottom: -3px;\n  left: -3px;\n  cursor: sw-resize;\n}\n.cropper-point.point-se {\n  right: -3px;\n  bottom: -3px;\n  width: 20px;\n  height: 20px;\n  cursor: se-resize;\n  opacity: 1;\n}\n.cropper-point.point-se:before {\n  position: absolute;\n  right: -50%;\n  bottom: -50%;\n  display: block;\n  width: 200%;\n  height: 200%;\n  content: ' ';\n  opacity: 0;\n  background-color: #39f;\n}\n@media (min-width: 768px) {\n  .cropper-point.point-se {\n    width: 15px;\n    height: 15px;\n  }\n}\n@media (min-width: 992px) {\n  .cropper-point.point-se {\n    width: 10px;\n    height: 10px;\n  }\n}\n@media (min-width: 1200px) {\n  .cropper-point.point-se {\n    width: 5px;\n    height: 5px;\n    opacity: .75;\n  }\n}\n.cropper-invisible {\n  opacity: 0;\n}\n.cropper-bg {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC\");\n}\n.cropper-hide {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n}\n.cropper-hidden {\n  display: none !important;\n}\n.cropper-move {\n  cursor: move;\n}\n.cropper-crop {\n  cursor: crosshair;\n}\n.cropper-disabled .cropper-drag-box,\n.cropper-disabled .cropper-face,\n.cropper-disabled .cropper-line,\n.cropper-disabled .cropper-point {\n  cursor: not-allowed;\n}\n", ""]);

	// exports


/***/ },

/***/ 595:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(10);

	var _react2 = _interopRequireDefault(_react);

	var _wangeditor = __webpack_require__(596);

	var _wangeditor2 = _interopRequireDefault(_wangeditor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Editor = function (_React$Component) {
		_inherits(Editor, _React$Component);

		function Editor(props) {
			_classCallCheck(this, Editor);

			return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));
		}

		_createClass(Editor, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var _this = this;
				var id = this.props.id;
				_wangeditor2.default.config.printLog = false;
				this.editor = new _wangeditor2.default(id);
				this.editor.config.uploadImgUrl = "/api/uploadTextPic";
				this.editor.config.uploadParams = {
					truelove_admin_token: localStorage.truelove_admin_token
				};
				this.editor.config.menus = ['source', '|', 'bold', 'underline', 'italic', 'strikethrough', 'eraser', 'forecolor', 'bgcolor', '|', 'quote', 'fontfamily', 'fontsize', 'head', 'unorderlist', 'orderlist', 'alignleft', 'aligncenter', 'alignright', '|', 'link', 'unlink', '|', 'img', '|', 'fullscreen'];
				this.editor.onchange = function () {
					if (_this.props.onValue) {
						_this.props.onValue(this.$txt.html());
					}
				};
				this.editor.create();
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					{ style: { "width": "852px", "marginTop": "30px" } },
					_react2.default.createElement("div", { id: this.props.id, style: { "width": "100%", "height": "380px" }, contentEditable: "true" })
				);
			}
		}]);

		return Editor;
	}(_react2.default.Component);

	exports.default = Editor;

/***/ },

/***/ 596:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};(function(factory){if(typeof window.define==='function'){if(window.define.amd){// AMD模式
	window.define('wangEditor',["jquery"],factory);}else if(window.define.cmd){// CMD模式
	window.define(function(require,exports,module){return factory;});}else{// 全局模式
	factory(window.jQuery);}}else if(( false?'undefined':_typeof(module))==="object"&&_typeof(module.exports)==="object"){// commonjs
	// 引用 css —— webapck
	// window.wangEditorCssPath ? require(window.wangEditorCssPath) : require('../css/wangEditor.css');
	module.exports=factory(// 传入 jquery ，支持使用 npm 方式或者自己定义jquery的路径
	__webpack_require__(597),__webpack_require__(598));}else{// 全局模式
	factory(window.jQuery);}})(function($){// 验证是否引用jquery
	if(!$||!$.fn||!$.fn.jquery){alert('在引用wangEditor.js之前，先引用jQuery，否则无法使用 wangEditor');return;}// 定义扩展函数
	var _e=function _e(fn){var E=window.wangEditor;if(E){// 执行传入的函数
	fn(E,$);}};// 定义构造函数
	(function(window,$){if(window.wangEditor){// 重复引用
	alert('一个页面不能重复引用 wangEditor.js 或 wangEditor.min.js ！！！');return;}// 编辑器（整体）构造函数
	var E=function E(elem){// 支持 id 和 element 两种形式
	if(typeof elem==='string'){elem='#'+elem;}// ---------------获取基本节点------------------
	var $elem=$(elem);if($elem.length!==1){return;}var nodeName=$elem[0].nodeName;if(nodeName!=='TEXTAREA'&&nodeName!=='DIV'){// 只能是 textarea 和 div ，其他类型的元素不行
	return;}this.valueNodeName=nodeName.toLowerCase();this.$valueContainer=$elem;// 记录 elem 的 prev 和 parent（最后渲染 editor 要用到）
	this.$prev=$elem.prev();this.$parent=$elem.parent();// ------------------初始化------------------
	this.init();};E.fn=E.prototype;E.$body=$('body');E.$document=$(document);E.$window=$(window);E.userAgent=navigator.userAgent;E.getComputedStyle=window.getComputedStyle;E.w3cRange=typeof document.createRange==='function';E.hostname=location.hostname.toLowerCase();E.websiteHost='wangeditor.github.io|www.wangeditor.com|wangeditor.coding.me';E.isOnWebsite=E.websiteHost.indexOf(E.hostname)>=0;E.docsite='http://www.kancloud.cn/wangfupeng/wangeditor2/113961';// 暴露给全局对象
	window.wangEditor=E;// 注册 plugin 事件，用于用户自定义插件
	// 用户在引用 wangEditor.js 之后，还可以通过 E.plugin() 注入自定义函数，
	// 该函数将会在 editor.create() 方法的最后一步执行
	E.plugin=function(fn){if(!E._plugins){E._plugins=[];}if(typeof fn==='function'){E._plugins.push(fn);}};})(window,$);// editor 绑定事件
	_e(function(E,$){E.fn.init=function(){// 初始化 editor 默认配置
	this.initDefaultConfig();// 增加container
	this.addEditorContainer();// 增加编辑区域
	this.addTxt();// 增加menuContainer
	this.addMenuContainer();// 初始化菜单集合
	this.menus={};// 初始化commandHooks
	this.commandHooks();};});// editor api
	_e(function(E,$){// 预定义 ready 事件
	E.fn.ready=function(fn){if(!this.readyFns){this.readyFns=[];}this.readyFns.push(fn);};// 处理ready事件
	E.fn.readyHeadler=function(){var fns=this.readyFns;while(fns.length){fns.shift().call(this);}};// 更新内容到 $valueContainer
	E.fn.updateValue=function(){var editor=this;var $valueContainer=editor.$valueContainer;var $txt=editor.txt.$txt;if($valueContainer===$txt){// 传入生成编辑器的div，即是编辑区域
	return;}var value=$txt.html();$valueContainer.val(value);};// 获取初始化的内容
	E.fn.getInitValue=function(){var editor=this;var $valueContainer=editor.$valueContainer;var currentValue='';var nodeName=editor.valueNodeName;if(nodeName==='div'){currentValue=$valueContainer.html();}else if(nodeName==='textarea'){currentValue=$valueContainer.val();}return currentValue;};// 触发菜单updatestyle
	E.fn.updateMenuStyle=function(){var menus=this.menus;$.each(menus,function(k,menu){menu.updateSelected();});};// 除了传入的 menuIds，其他全部启用
	E.fn.enableMenusExcept=function(menuIds){if(this._disabled){// 编辑器处于禁用状态，则不执行改操作
	return;}// menuIds参数：支持数组和字符串
	menuIds=menuIds||[];if(typeof menuIds==='string'){menuIds=[menuIds];}$.each(this.menus,function(k,menu){if(menuIds.indexOf(k)>=0){return;}menu.disabled(false);});};// 除了传入的 menuIds，其他全部禁用
	E.fn.disableMenusExcept=function(menuIds){if(this._disabled){// 编辑器处于禁用状态，则不执行改操作
	return;}// menuIds参数：支持数组和字符串
	menuIds=menuIds||[];if(typeof menuIds==='string'){menuIds=[menuIds];}$.each(this.menus,function(k,menu){if(menuIds.indexOf(k)>=0){return;}menu.disabled(true);});};// 隐藏所有 dropPanel droplist modal
	E.fn.hideDropPanelAndModal=function(){var menus=this.menus;$.each(menus,function(k,menu){var m=menu.dropPanel||menu.dropList||menu.modal;if(m&&m.hide){m.hide();}});};});// selection range API
	_e(function(E,$){// 用到 w3c range 的函数，如果检测到浏览器不支持 w3c range，则赋值为空函数
	var ieRange=!E.w3cRange;function emptyFn(){}// 设置或读取当前的range
	E.fn.currentRange=function(cr){if(cr){this._rangeData=cr;}else{return this._rangeData;}};// 将当前选区折叠
	E.fn.collapseRange=function(range,opt){// opt 参数说明：'start'-折叠到开始; 'end'-折叠到结束
	opt=opt||'end';opt=opt==='start'?true:false;range=range||this.currentRange();if(range){// 合并，保存
	range.collapse(opt);this.currentRange(range);}};// 获取选区的文字
	E.fn.getRangeText=ieRange?emptyFn:function(range){range=range||this.currentRange();if(!range){return;}return range.toString();};// 获取选区对应的DOM对象
	E.fn.getRangeElem=ieRange?emptyFn:function(range){range=range||this.currentRange();var dom=range.commonAncestorContainer;if(dom.nodeType===1){return dom;}else{return dom.parentNode;}};// 选区内容是否为空？
	E.fn.isRangeEmpty=ieRange?emptyFn:function(range){range=range||this.currentRange();if(range&&range.startContainer){if(range.startContainer===range.endContainer){if(range.startOffset===range.endOffset){return true;}}}return false;};// 保存选区数据
	E.fn.saveSelection=ieRange?emptyFn:function(range){var self=this,_parentElem,selection,txt=self.txt.$txt.get(0);if(range){_parentElem=range.commonAncestorContainer;}else{selection=document.getSelection();if(selection.getRangeAt&&selection.rangeCount){range=document.getSelection().getRangeAt(0);_parentElem=range.commonAncestorContainer;}}// 确定父元素一定要包含在编辑器区域内
	if(_parentElem&&($.contains(txt,_parentElem)||txt===_parentElem)){// 保存选择区域
	self.currentRange(range);}};// 恢复选中区域
	E.fn.restoreSelection=ieRange?emptyFn:function(range){var selection;range=range||this.currentRange();if(!range){return;}// 使用 try catch 来防止 IE 某些情况报错
	try{selection=document.getSelection();selection.removeAllRanges();selection.addRange(range);}catch(ex){E.error('执行 editor.restoreSelection 时，IE可能会有异常，不影响使用');}};// 根据elem恢复选区
	E.fn.restoreSelectionByElem=ieRange?emptyFn:function(elem,opt){// opt参数说明：'start'-折叠到开始，'end'-折叠到结束，'all'-全部选中
	if(!elem){return;}opt=opt||'end';// 默认为折叠到结束
	// 根据elem获取选区
	this.setRangeByElem(elem);// 根据 opt 折叠选区
	if(opt==='start'){this.collapseRange(this.currentRange(),'start');}if(opt==='end'){this.collapseRange(this.currentRange(),'end');}// 恢复选区
	this.restoreSelection();};// 初始化选区
	E.fn.initSelection=ieRange?emptyFn:function(){var editor=this;if(editor.currentRange()){//如果currentRange有值，则不用再初始化
	return;}var range;var $txt=editor.txt.$txt;var $firstChild=$txt.children().first();if($firstChild.length){editor.restoreSelectionByElem($firstChild.get(0));}};// 根据元素创建选区
	E.fn.setRangeByElem=ieRange?emptyFn:function(elem){var editor=this;var txtElem=editor.txt.$txt.get(0);if(!elem||!$.contains(txtElem,elem)){return;}// 找到elem的第一个 textNode 和 最后一个 textNode
	var firstTextNode=elem.firstChild;while(firstTextNode){if(firstTextNode.nodeType===3){break;}// 继续向下
	firstTextNode=firstTextNode.firstChild;}var lastTextNode=elem.lastChild;while(lastTextNode){if(lastTextNode.nodeType===3){break;}// 继续向下
	lastTextNode=lastTextNode.lastChild;}var range=document.createRange();if(firstTextNode&&lastTextNode){// 说明 elem 有内容，能取到子元素
	range.setStart(firstTextNode,0);range.setEnd(lastTextNode,lastTextNode.textContent.length);}else{// 说明 elem 无内容
	range.setStart(elem,0);range.setEnd(elem,0);}// 保存选区
	editor.saveSelection(range);};});// selection range API - IE8及以下
	_e(function(E,$){if(E.w3cRange){// 说明支持 W3C 的range方法
	return;}// -----------------IE8时，需要重写以下方法-------------------
	// 获取选区的文字
	E.fn.getRangeText=function(range){range=range||this.currentRange();if(!range){return;}return range.text;};// 获取选区对应的DOM对象
	E.fn.getRangeElem=function(range){range=range||this.currentRange();if(!range){return;}var dom=range.parentElement();if(dom.nodeType===1){return dom;}else{return dom.parentNode;}};// 选区内容是否为空？
	E.fn.isRangeEmpty=function(range){range=range||this.currentRange();if(range&&range.text){return false;}return true;};// 保存选区数据
	E.fn.saveSelection=function(range){var self=this,_parentElem,selection,txt=self.txt.$txt.get(0);if(range){_parentElem=range.parentElement();}else{range=document.selection.createRange();if(typeof range.parentElement==='undefined'){//IE6、7中，insertImage后会执行此处
	//由于找不到range.parentElement，所以干脆将_parentElem赋值为null
	_parentElem=null;}else{_parentElem=range.parentElement();}}// 确定父元素一定要包含在编辑器区域内
	if(_parentElem&&($.contains(txt,_parentElem)||txt===_parentElem)){// 保存选择区域
	self.currentRange(range);}};// 恢复选中区域
	E.fn.restoreSelection=function(currentRange){var editor=this,selection,range;currentRange=currentRange||editor.currentRange();if(!currentRange){return;}range=document.selection.createRange();try{// 此处，plupload上传上传图片时，IE8-会报一个『参数无效』的错误
	range.setEndPoint('EndToEnd',currentRange);}catch(ex){}if(currentRange.text.length===0){try{// IE8 插入表情会报错
	range.collapse(false);}catch(ex){}}else{range.setEndPoint('StartToStart',currentRange);}range.select();};});// editor command hooks
	_e(function(E,$){E.fn.commandHooks=function(){var editor=this;var commandHooks={};// insertHtml
	commandHooks.insertHtml=function(html){var $elem=$(html);var rangeElem=editor.getRangeElem();var targetElem;targetElem=editor.getLegalTags(rangeElem);if(!targetElem){return;}$(targetElem).after($elem);};// 保存到对象
	editor.commandHooks=commandHooks;};});// editor command API
	_e(function(E,$){// 基本命令
	E.fn.command=function(e,commandName,commandValue,callback){var editor=this;var hooks;function commandFn(){if(!commandName){return;}if(editor.queryCommandSupported(commandName)){// 默认命令
	document.execCommand(commandName,false,commandValue);}else{// hooks 命令
	hooks=editor.commandHooks;if(commandName in hooks){hooks[commandName](commandValue);}}}this.customCommand(e,commandFn,callback);};// 针对一个elem对象执行基础命令
	E.fn.commandForElem=function(elemOpt,e,commandName,commandValue,callback){// 取得查询elem的查询条件和验证函数
	var selector;var check;if(typeof elemOpt==='string'){selector=elemOpt;}else{selector=elemOpt.selector;check=elemOpt.check;}// 查询elem
	var rangeElem=this.getRangeElem();rangeElem=this.getSelfOrParentByName(rangeElem,selector,check);// 根据elem设置range
	if(rangeElem){this.setRangeByElem(rangeElem);}// 然后执行基础命令
	this.command(e,commandName,commandValue,callback);};// 自定义命令
	E.fn.customCommand=function(e,commandFn,callback){var editor=this;var range=editor.currentRange();if(!range){// 目前没有选区，则无法执行命令
	e&&e.preventDefault();return;}// 记录内容，以便撤销（执行命令之前就要记录）
	editor.undoRecord();// 恢复选区（有 range 参数）
	this.restoreSelection(range);// 执行命令事件
	commandFn.call(editor);// 保存选区（无参数，要从浏览器直接获取range信息）
	this.saveSelection();// 重新恢复选区（无参数，要取得刚刚从浏览器得到的range信息）
	this.restoreSelection();// 执行 callback
	if(callback&&typeof callback==='function'){callback.call(editor);}// 最后插入空行
	editor.txt.insertEmptyP();// 包裹暴露的img和text
	editor.txt.wrapImgAndText();// 更新内容
	editor.updateValue();// 更新菜单样式
	editor.updateMenuStyle();// 隐藏 dropPanel dropList modal  设置 200ms 间隔
	function hidePanelAndModal(){editor.hideDropPanelAndModal();}setTimeout(hidePanelAndModal,200);if(e){e.preventDefault();}};// 封装 document.queryCommandValue 函数
	// IE8 直接执行偶尔会报错，因此直接用 try catch 封装一下
	E.fn.queryCommandValue=function(commandName){var result='';try{result=document.queryCommandValue(commandName);}catch(ex){}return result;};// 封装 document.queryCommandState 函数
	// IE8 直接执行偶尔会报错，因此直接用 try catch 封装一下
	E.fn.queryCommandState=function(commandName){var result=false;try{result=document.queryCommandState(commandName);}catch(ex){}return result;};// 封装 document.queryCommandSupported 函数
	E.fn.queryCommandSupported=function(commandName){var result=false;try{result=document.queryCommandSupported(commandName);}catch(ex){}return result;};});// dom selector
	_e(function(E,$){var matchesSelector;// matchesSelector hook
	function _matchesSelectorForIE(selector){var elem=this;var $elems=$(selector);var result=false;// 用jquery查找 selector 所有对象，如果其中有一个和传入 elem 相同，则证明 elem 符合 selector
	$elems.each(function(){if(this===elem){result=true;return false;}});return result;}// 从当前的elem，往上去查找合法标签 如 p head table blockquote ul ol 等
	E.fn.getLegalTags=function(elem){var legalTags=this.config.legalTags;if(!legalTags){E.error('配置项中缺少 legalTags 的配置');return;}return this.getSelfOrParentByName(elem,legalTags);};// 根据条件，查询自身或者父元素，符合即返回
	E.fn.getSelfOrParentByName=function(elem,selector,check){if(!elem||!selector){return;}if(!matchesSelector){// 定义 matchesSelector 函数
	matchesSelector=elem.webkitMatchesSelector||elem.mozMatchesSelector||elem.oMatchesSelector||elem.matchesSelector;}if(!matchesSelector){// 如果浏览器本身不支持 matchesSelector 则使用自定义的hook
	matchesSelector=_matchesSelectorForIE;}var txt=this.txt.$txt.get(0);while(elem&&txt!==elem&&$.contains(txt,elem)){if(matchesSelector.call(elem,selector)){// 符合 selector 查询条件
	if(!check){// 没有 check 验证函数，直接返回即可
	return elem;}if(check(elem)){// 如果有 check 验证函数，还需 check 函数的确认
	return elem;}}// 如果上一步没经过验证，则将跳转到父元素
	elem=elem.parentNode;}return;};});// undo redo
	_e(function(E,$){var length=20;// 缓存的最大长度
	function _getRedoList(editor){if(editor._redoList==null){editor._redoList=[];}return editor._redoList;}function _getUndoList(editor){if(editor._undoList==null){editor._undoList=[];}return editor._undoList;}// 数据处理
	function _handle(editor,data,type){// var range = data.range;
	// var range2 = range.cloneRange && range.cloneRange();
	var val=data.val;var html=editor.txt.$txt.html();if(val==null){return;}if(val===html){if(type==='redo'){editor.redo();return;}else if(type==='undo'){editor.undo();return;}else{return;}}// 保存数据
	editor.txt.$txt.html(val);// 更新数据到textarea（有必要的话）
	editor.updateValue();// onchange 事件
	if(editor.onchange&&typeof editor.onchange==='function'){editor.onchange.call(editor);}// ?????
	// 注释：$txt 被重新赋值之后，range会被重置，cloneRange() 也不好使
	// // 重置选区
	// if (range2) {
	//     editor.restoreSelection(range2);
	// }
	}// 记录
	E.fn.undoRecord=function(){var editor=this;var $txt=editor.txt.$txt;var val=$txt.html();var undoList=_getUndoList(editor);var redoList=_getRedoList(editor);var currentVal=undoList.length?undoList[0]:'';if(val===currentVal.val){return;}// 清空 redolist
	if(redoList.length){redoList=[];}// 添加数据到 undoList
	undoList.unshift({range:editor.currentRange(),// 将当前的range也记录下
	val:val});// 限制 undoList 长度
	if(undoList.length>length){undoList.pop();}};// undo 操作
	E.fn.undo=function(){var editor=this;var undoList=_getUndoList(editor);var redoList=_getRedoList(editor);if(!undoList.length){return;}// 取出 undolist 第一个值，加入 redolist
	var data=undoList.shift();redoList.unshift(data);// 并修改编辑器的内容
	_handle(this,data,'undo');};// redo 操作
	E.fn.redo=function(){var editor=this;var undoList=_getUndoList(editor);var redoList=_getRedoList(editor);if(!redoList.length){return;}// 取出 redolist 第一个值，加入 undolist
	var data=redoList.shift();undoList.unshift(data);// 并修改编辑器的内容
	_handle(this,data,'redo');};});// 暴露给用户的 API
	_e(function(E,$){// 创建编辑器
	E.fn.create=function(){var editor=this;// 检查 E.$body 是否有值
	// 如果在 body 之前引用了 js 文件，body 尚未加载，可能没有值
	if(!E.$body||E.$body.length===0){E.$body=$('body');E.$document=$(document);E.$window=$(window);}// 执行 addMenus 之前：
	// 1. 允许用户修改 editor.UI 自定义配置UI
	// 2. 允许用户通过修改 editor.menus 来自定义配置菜单
	// 因此要在 create 时执行，而不是 init           
	editor.addMenus();// 渲染
	editor.renderMenus();editor.renderMenuContainer();editor.renderTxt();editor.renderEditorContainer();// 绑定事件
	editor.eventMenus();editor.eventMenuContainer();editor.eventTxt();// 处理ready事件
	editor.readyHeadler();// 初始化选区
	editor.initSelection();// $txt 快捷方式
	editor.$txt=editor.txt.$txt;// 执行用户自定义事件，通过 E.ready() 添加
	var _plugins=E._plugins;if(_plugins&&_plugins.length){$.each(_plugins,function(k,val){val.call(editor);});}};// 禁用编辑器
	E.fn.disable=function(){this.txt.$txt.removeAttr('contenteditable');this.disableMenusExcept();// 先禁用，再记录状态
	this._disabled=true;};// 启用编辑器
	E.fn.enable=function(){// 先解除状态记录，再启用
	this._disabled=false;this.txt.$txt.attr('contenteditable','true');this.enableMenusExcept();};// 销毁编辑器
	E.fn.destroy=function(){var self=this;var $valueContainer=self.$valueContainer;var $editorContainer=self.$editorContainer;var valueNodeName=self.valueNodeName;if(valueNodeName==='div'){// div 生成的编辑器
	$valueContainer.removeAttr('contenteditable');$editorContainer.after($valueContainer);$editorContainer.hide();}else{// textarea 生成的编辑器
	$valueContainer.show();$editorContainer.hide();}};// 撤销 销毁编辑器
	E.fn.undestroy=function(){var self=this;var $valueContainer=self.$valueContainer;var $editorContainer=self.$editorContainer;var $menuContainer=self.menuContainer.$menuContainer;var valueNodeName=self.valueNodeName;if(valueNodeName==='div'){// div 生成的编辑器
	$valueContainer.attr('contenteditable','true');$menuContainer.after($valueContainer);$editorContainer.show();}else{// textarea 生成的编辑器
	$valueContainer.hide();$editorContainer.show();}};// 清空内容的快捷方式
	E.fn.clear=function(){var editor=this;var $txt=editor.txt.$txt;$txt.html('<p><br></p>');editor.restoreSelectionByElem($txt.find('p').get(0));};});// menuContainer 构造函数
	_e(function(E,$){// 定义构造函数
	var MenuContainer=function MenuContainer(editor){this.editor=editor;this.init();};MenuContainer.fn=MenuContainer.prototype;// 暴露给 E 即 window.wangEditor
	E.MenuContainer=MenuContainer;});// MenuContainer.fn bind fn
	_e(function(E,$){var MenuContainer=E.MenuContainer;// 初始化
	MenuContainer.fn.init=function(){var self=this;var $menuContainer=$('<div class="wangEditor-menu-container clearfix"></div>');self.$menuContainer=$menuContainer;// change shadow
	self.changeShadow();};// 编辑区域滚动时，增加shadow
	MenuContainer.fn.changeShadow=function(){var $menuContainer=this.$menuContainer;var editor=this.editor;var $txt=editor.txt.$txt;$txt.on('scroll',function(){if($txt.scrollTop()>10){$menuContainer.addClass('wangEditor-menu-shadow');}else{$menuContainer.removeClass('wangEditor-menu-shadow');}});};});// MenuContainer.fn API
	_e(function(E,$){var MenuContainer=E.MenuContainer;MenuContainer.fn.render=function(){var $menuContainer=this.$menuContainer;var $editorContainer=this.editor.$editorContainer;$editorContainer.append($menuContainer);};// 获取菜单栏的高度
	MenuContainer.fn.height=function(){var $menuContainer=this.$menuContainer;return $menuContainer.height();};// 添加菜单
	MenuContainer.fn.appendMenu=function(groupIdx,menu){// 判断是否需要新增一个菜单组
	this._addGroup(groupIdx);// 增加菜单（返回 $menuItem）
	return this._addOneMenu(menu);};MenuContainer.fn._addGroup=function(groupIdx){var $menuContainer=this.$menuContainer;var $menuGroup;if(!this.$currentGroup||this.currentGroupIdx!==groupIdx){$menuGroup=$('<div class="menu-group clearfix"></div>');$menuContainer.append($menuGroup);this.$currentGroup=$menuGroup;this.currentGroupIdx=groupIdx;}};MenuContainer.fn._addOneMenu=function(menu){var $menuNormal=menu.$domNormal;var $menuSelected=menu.$domSelected;var $menuGroup=this.$currentGroup;var $item=$('<div class="menu-item clearfix"></div>');$menuSelected.hide();$item.append($menuNormal).append($menuSelected);$menuGroup.append($item);return $item;};});// menu 构造函数
	_e(function(E,$){// 定义构造函数
	var Menu=function Menu(opt){this.editor=opt.editor;this.id=opt.id;this.title=opt.title;this.$domNormal=opt.$domNormal;this.$domSelected=opt.$domSelected||opt.$domNormal;// document.execCommand 的参数
	this.commandName=opt.commandName;this.commandValue=opt.commandValue;this.commandNameSelected=opt.commandNameSelected||opt.commandName;this.commandValueSelected=opt.commandValueSelected||opt.commandValue;};Menu.fn=Menu.prototype;// 暴露给 E 即 window.wangEditor
	E.Menu=Menu;});// Menu.fn 初始化绑定的事件
	_e(function(E,$){var Menu=E.Menu;// 初始化UI
	Menu.fn.initUI=function(){var editor=this.editor;var uiConfig=editor.UI.menus;var menuId=this.id;var menuUI=uiConfig[menuId];if(this.$domNormal&&this.$domSelected){// 自定义的菜单中，已经传入了 $dom 无需从配置文件中查找生成
	return;}if(menuUI==null){E.warn('editor.UI配置中，没有菜单 "'+menuId+'" 的UI配置，只能取默认值');// 必须写成 uiConfig['default'];
	// 写成 uiConfig.default IE8会报错
	menuUI=uiConfig['default'];}// 正常状态
	this.$domNormal=$(menuUI.normal);// 选中状态
	if(/^\./.test(menuUI.selected)){// 增加一个样式
	this.$domSelected=this.$domNormal.clone().addClass(menuUI.selected.slice(1));}else{// 一个新的dom对象
	this.$domSelected=$(menuUI.selected);}};});// Menu.fn API
	_e(function(E,$){var Menu=E.Menu;// 渲染菜单
	Menu.fn.render=function(groupIdx){// 渲染UI
	this.initUI();var editor=this.editor;var menuContainer=editor.menuContainer;var $menuItem=menuContainer.appendMenu(groupIdx,this);var onRender=this.onRender;// 渲染tip
	this._renderTip($menuItem);// 执行 onRender 函数
	if(onRender&&typeof onRender==='function'){onRender.call(this);}};Menu.fn._renderTip=function($menuItem){var self=this;var editor=self.editor;var title=self.title;var $tip=$('<div class="menu-tip"></div>');// var $triangle = $('<i class="tip-triangle"></i>'); // 小三角
	// 计算 tip 宽度
	var $tempDiv;if(!self.tipWidth){// 设置一个纯透明的 p（absolute;top:-10000px;不会显示在内容区域）
	// 内容赋值为 title ，为了计算tip宽度
	$tempDiv=$('<p style="opacity:0; filter:Alpha(opacity=0); position:absolute;top:-10000px;">'+title+'</p>');// 先添加到body，计算完再 remove
	E.$body.append($tempDiv);editor.ready(function(){var editor=this;var titleWidth=$tempDiv.outerWidth()+5;// 多出 5px 的冗余
	var currentWidth=$tip.outerWidth();var currentMarginLeft=parseFloat($tip.css('margin-left'),10);// 计算完，拿到数据，则弃用
	$tempDiv.remove();$tempDiv=null;// 重新设置样式
	$tip.css({width:titleWidth,'margin-left':currentMarginLeft+(currentWidth-titleWidth)/2});// 存储
	self.tipWidth=titleWidth;});}// $tip.append($triangle);
	$tip.append(title);$menuItem.append($tip);function show(){$tip.show();}function hide(){$tip.hide();}var timeoutId;$menuItem.find('a').on('mouseenter',function(e){if(!self.active()&&!self.disabled()){timeoutId=setTimeout(show,200);}}).on('mouseleave',function(e){timeoutId&&clearTimeout(timeoutId);hide();}).on('click',hide);};// 绑定事件
	Menu.fn.bindEvent=function(){var self=this;var $domNormal=self.$domNormal;var $domSelected=self.$domSelected;// 试图获取该菜单定义的事件（未selected），没有则自己定义
	var clickEvent=self.clickEvent;if(!clickEvent){clickEvent=function clickEvent(e){// -----------dropPanel dropList modal-----------
	var dropObj=self.dropPanel||self.dropList||self.modal;if(dropObj&&dropObj.show){if(dropObj.isShowing){dropObj.hide();}else{dropObj.show();}return;}// -----------command-----------
	var editor=self.editor;var commandName;var commandValue;var selected=self.selected;if(selected){commandName=self.commandNameSelected;commandValue=self.commandValueSelected;}else{commandName=self.commandName;commandValue=self.commandValue;}if(commandName){// 执行命令
	editor.command(e,commandName,commandValue);}else{// 提示
	E.warn('菜单 "'+self.id+'" 未定义click事件');e.preventDefault();}};}// 获取菜单定义的selected情况下的点击事件
	var clickEventSelected=self.clickEventSelected||clickEvent;// 将事件绑定到菜单dom上
	$domNormal.click(function(e){if(!self.disabled()){clickEvent.call(self,e);self.updateSelected();}e.preventDefault();});$domSelected.click(function(e){if(!self.disabled()){clickEventSelected.call(self,e);self.updateSelected();}e.preventDefault();});};// 更新选中状态
	Menu.fn.updateSelected=function(){var self=this;var editor=self.editor;// 试图获取用户自定义的判断事件
	var updateSelectedEvent=self.updateSelectedEvent;if(!updateSelectedEvent){// 用户未自定义，则设置默认值
	updateSelectedEvent=function updateSelectedEvent(){var self=this;var editor=self.editor;var commandName=self.commandName;var commandValue=self.commandValue;if(commandValue){if(editor.queryCommandValue(commandName).toLowerCase()===commandValue.toLowerCase()){return true;}}else if(editor.queryCommandState(commandName)){return true;}return false;};}// 获取结果
	var result=updateSelectedEvent.call(self);result=!!result;// 存储结果、显示效果
	self.changeSelectedState(result);};// 切换选中状态、显示效果
	Menu.fn.changeSelectedState=function(state){var self=this;var selected=self.selected;if(state!=null&&typeof state==='boolean'){if(selected===state){// 计算结果和当前的状态一样
	return;}// 存储结果
	self.selected=state;// 切换菜单的显示
	if(state){// 选中
	self.$domNormal.hide();self.$domSelected.show();}else{// 未选中
	self.$domNormal.show();self.$domSelected.hide();}}// if
	};// 点击菜单，显示了 dropPanel modal 时，菜单的状态 
	Menu.fn.active=function(active){if(active==null){return this._activeState;}this._activeState=active;};Menu.fn.activeStyle=function(active){var selected=this.selected;var $dom=this.$domNormal;var $domSelected=this.$domSelected;if(active){$dom.addClass('active');$domSelected.addClass('active');}else{$dom.removeClass('active');$domSelected.removeClass('active');}// 记录状态 （ menu hover 时会取状态用 ）
	this.active(active);};// 菜单的启用和禁用
	Menu.fn.disabled=function(opt){// 参数为空，取值
	if(opt==null){return!!this._disabled;}if(this._disabled===opt){// 要设置的参数值和当前参数只一样，无需再次设置
	return;}var $dom=this.$domNormal;var $domSelected=this.$domSelected;// 设置样式
	if(opt){$dom.addClass('disable');$domSelected.addClass('disable');}else{$dom.removeClass('disable');$domSelected.removeClass('disable');}// 存储
	this._disabled=opt;};});// dropList 构造函数
	_e(function(E,$){// 定义构造函数
	var DropList=function DropList(editor,menu,opt){this.editor=editor;this.menu=menu;// list 的数据源，格式 {'commandValue': 'title', ...}
	this.data=opt.data;// 要为每个item自定义的模板
	this.tpl=opt.tpl;// 为了执行 editor.commandForElem 而传入的elem查询方式
	this.selectorForELemCommand=opt.selectorForELemCommand;// 执行事件前后的钩子
	this.beforeEvent=opt.beforeEvent;this.afterEvent=opt.afterEvent;// 初始化
	this.init();};DropList.fn=DropList.prototype;// 暴露给 E 即 window.wangEditor
	E.DropList=DropList;});// dropList fn bind
	_e(function(E,$){var DropList=E.DropList;// init
	DropList.fn.init=function(){var self=this;// 生成dom对象
	self.initDOM();// 绑定command事件
	self.bindEvent();// 声明隐藏的事件
	self.initHideEvent();};// 初始化dom结构
	DropList.fn.initDOM=function(){var self=this;var data=self.data;var tpl=self.tpl||'<span>{#title}</span>';var $list=$('<div class="wangEditor-drop-list clearfix"></div>');var itemContent;var $item;$.each(data,function(commandValue,title){itemContent=tpl.replace(/{#commandValue}/ig,commandValue).replace(/{#title}/ig,title);$item=$('<a href="#" commandValue="'+commandValue+'"></a>');$item.append(itemContent);$list.append($item);});self.$list=$list;};// 绑定事件
	DropList.fn.bindEvent=function(){var self=this;var editor=self.editor;var menu=self.menu;var commandName=menu.commandName;var selectorForELemCommand=self.selectorForELemCommand;var $list=self.$list;// 执行事件前后的钩子函数
	var beforeEvent=self.beforeEvent;var afterEvent=self.afterEvent;$list.on('click','a[commandValue]',function(e){// 正式命令执行之前
	if(beforeEvent&&typeof beforeEvent==='function'){beforeEvent.call(e);}// 执行命令
	var commandValue=$(e.currentTarget).attr('commandValue');if(menu.selected&&editor.isRangeEmpty()&&selectorForELemCommand){// 当前处于选中状态，并且选中内容为空
	editor.commandForElem(selectorForELemCommand,e,commandName,commandValue);}else{// 当前未处于选中状态，或者有选中内容。则执行默认命令
	editor.command(e,commandName,commandValue);}// 正式命令之后的钩子
	if(afterEvent&&typeof afterEvent==='function'){afterEvent.call(e);}});};// 点击其他地方，立即隐藏 droplist
	DropList.fn.initHideEvent=function(){var self=this;// 获取 list elem
	var thisList=self.$list.get(0);E.$body.on('click',function(e){if(!self.isShowing){return;}var trigger=e.target;// 获取菜单elem
	var menu=self.menu;var menuDom;if(menu.selected){menuDom=menu.$domSelected.get(0);}else{menuDom=menu.$domNormal.get(0);}if(menuDom===trigger||$.contains(menuDom,trigger)){// 说明由本菜单点击触发的
	return;}if(thisList===trigger||$.contains(thisList,trigger)){// 说明由本list点击触发的
	return;}// 其他情况，隐藏 list
	self.hide();});E.$window.scroll(function(){self.hide();});E.$window.on('resize',function(){self.hide();});};});// dropListfn api
	_e(function(E,$){var DropList=E.DropList;// 渲染
	DropList.fn._render=function(){var self=this;var editor=self.editor;var $list=self.$list;// 渲染到页面
	editor.$editorContainer.append($list);// 记录状态
	self.rendered=true;};// 定位
	DropList.fn._position=function(){var self=this;var $list=self.$list;var editor=self.editor;var menu=self.menu;var $menuContainer=editor.menuContainer.$menuContainer;var $menuDom=menu.selected?menu.$domSelected:menu.$domNormal;// 注意这里的 offsetParent() 要返回 .menu-item 的 position
	// 因为 .menu-item 是 position:relative
	var menuPosition=$menuDom.offsetParent().position();// 取得 menu 的位置、尺寸属性
	var menuTop=menuPosition.top;var menuLeft=menuPosition.left;var menuHeight=$menuDom.offsetParent().height();var menuWidth=$menuDom.offsetParent().width();// 取得 list 的尺寸属性
	var listWidth=$list.outerWidth();// var listHeight = $list.outerHeight();
	// 取得 $txt 的尺寸
	var txtWidth=editor.txt.$txt.outerWidth();// ------------开始计算-------------
	// 初步计算 list 位置属性
	var top=menuTop+menuHeight;var left=menuLeft+menuWidth/2;var marginLeft=0-menuWidth/2;// 如果超出了有边界，则要左移（且和右侧有间隙）
	var valWithTxt=left+listWidth-txtWidth;if(valWithTxt>-10){marginLeft=marginLeft-valWithTxt-10;}// 设置样式
	$list.css({top:top,left:left,'margin-left':marginLeft});// 如果因为向下滚动而导致菜单fixed，则再加一步处理
	if(editor._isMenufixed){top=top+($menuContainer.offset().top+$menuContainer.outerHeight()-$list.offset().top);// 重新设置top
	$list.css({top:top});}};// 显示
	DropList.fn.show=function(){var self=this;var menu=self.menu;if(!self.rendered){// 第一次show之前，先渲染
	self._render();}if(self.isShowing){return;}var $list=self.$list;$list.show();// 定位
	self._position();// 记录状态
	self.isShowing=true;// 菜单状态
	menu.activeStyle(true);};// 隐藏
	DropList.fn.hide=function(){var self=this;var menu=self.menu;if(!self.isShowing){return;}var $list=self.$list;$list.hide();// 记录状态
	self.isShowing=false;// 菜单状态
	menu.activeStyle(false);};});// dropPanel 构造函数
	_e(function(E,$){// 定义构造函数
	var DropPanel=function DropPanel(editor,menu,opt){this.editor=editor;this.menu=menu;this.$content=opt.$content;this.width=opt.width||200;this.height=opt.height;this.onRender=opt.onRender;// init
	this.init();};DropPanel.fn=DropPanel.prototype;// 暴露给 E 即 window.wangEditor
	E.DropPanel=DropPanel;});// dropPanel fn bind
	_e(function(E,$){var DropPanel=E.DropPanel;// init
	DropPanel.fn.init=function(){var self=this;// 生成dom对象
	self.initDOM();// 声明隐藏的事件
	self.initHideEvent();};// init DOM
	DropPanel.fn.initDOM=function(){var self=this;var $content=self.$content;var width=self.width;var height=self.height;var $panel=$('<div class="wangEditor-drop-panel clearfix"></div>');var $triangle=$('<div class="tip-triangle"></div>');$panel.css({width:width,height:height?height:'auto'});$panel.append($triangle);$panel.append($content);// 添加对象数据
	self.$panel=$panel;self.$triangle=$triangle;};// 点击其他地方，立即隐藏 dropPanel
	DropPanel.fn.initHideEvent=function(){var self=this;// 获取 panel elem
	var thisPanle=self.$panel.get(0);E.$body.on('click',function(e){if(!self.isShowing){return;}var trigger=e.target;// 获取菜单elem
	var menu=self.menu;var menuDom;if(menu.selected){menuDom=menu.$domSelected.get(0);}else{menuDom=menu.$domNormal.get(0);}if(menuDom===trigger||$.contains(menuDom,trigger)){// 说明由本菜单点击触发的
	return;}if(thisPanle===trigger||$.contains(thisPanle,trigger)){// 说明由本panel点击触发的
	return;}// 其他情况，隐藏 panel
	self.hide();});E.$window.scroll(function(e){self.hide();});E.$window.on('resize',function(){self.hide();});};});// dropPanel fn api
	_e(function(E,$){var DropPanel=E.DropPanel;// 渲染
	DropPanel.fn._render=function(){var self=this;var onRender=self.onRender;var editor=self.editor;var $panel=self.$panel;// 渲染到页面
	editor.$editorContainer.append($panel);// 渲染后的回调事件
	onRender&&onRender.call(self);// 记录状态
	self.rendered=true;};// 定位
	DropPanel.fn._position=function(){var self=this;var $panel=self.$panel;var $triangle=self.$triangle;var editor=self.editor;var $menuContainer=editor.menuContainer.$menuContainer;var menu=self.menu;var $menuDom=menu.selected?menu.$domSelected:menu.$domNormal;// 注意这里的 offsetParent() 要返回 .menu-item 的 position
	// 因为 .menu-item 是 position:relative
	var menuPosition=$menuDom.offsetParent().position();// 取得 menu 的位置、尺寸属性
	var menuTop=menuPosition.top;var menuLeft=menuPosition.left;var menuHeight=$menuDom.offsetParent().height();var menuWidth=$menuDom.offsetParent().width();// 取得 panel 的尺寸属性
	var panelWidth=$panel.outerWidth();// var panelHeight = $panel.outerHeight();
	// 取得 $txt 的尺寸
	var txtWidth=editor.txt.$txt.outerWidth();// ------------开始计算-------------
	// 初步计算 panel 位置属性
	var top=menuTop+menuHeight;var left=menuLeft+menuWidth/2;var marginLeft=0-panelWidth/2;var marginLeft2=marginLeft;// 下文用于和 marginLeft 比较，来设置三角形tip的位置
	// 如果超出了左边界，则移动回来（要和左侧有10px间隙）
	if(0-marginLeft>left-10){marginLeft=0-(left-10);}// 如果超出了有边界，则要左移（且和右侧有10px间隙）
	var valWithTxt=left+panelWidth+marginLeft-txtWidth;if(valWithTxt>-10){marginLeft=marginLeft-valWithTxt-10;}// 设置样式
	$panel.css({top:top,left:left,'margin-left':marginLeft});// 如果因为向下滚动而导致菜单fixed，则再加一步处理
	if(editor._isMenufixed){top=top+($menuContainer.offset().top+$menuContainer.outerHeight()-$panel.offset().top);// 重新设置top
	$panel.css({top:top});}// 设置三角形 tip 的位置
	$triangle.css({'margin-left':marginLeft2-marginLeft-5});};// focus 第一个 input
	DropPanel.fn.focusFirstInput=function(){var self=this;var $panel=self.$panel;$panel.find('input[type=text],textarea').each(function(){var $input=$(this);if($input.attr('disabled')==null){$input.focus();return false;}});};// 显示
	DropPanel.fn.show=function(){var self=this;var menu=self.menu;if(!self.rendered){// 第一次show之前，先渲染
	self._render();}if(self.isShowing){return;}var $panel=self.$panel;$panel.show();// 定位
	self._position();// 记录状态
	self.isShowing=true;// 菜单状态
	menu.activeStyle(true);if(E.w3cRange){// 高级浏览器
	self.focusFirstInput();}else{// 兼容 IE8 input placeholder
	E.placeholderForIE8($panel);}};// 隐藏
	DropPanel.fn.hide=function(){var self=this;var menu=self.menu;if(!self.isShowing){return;}var $panel=self.$panel;$panel.hide();// 记录状态
	self.isShowing=false;// 菜单状态
	menu.activeStyle(false);};});// modal 构造函数
	_e(function(E,$){// 定义构造函数
	var Modal=function Modal(editor,menu,opt){this.editor=editor;this.menu=menu;this.$content=opt.$content;this.init();};Modal.fn=Modal.prototype;// 暴露给 E 即 window.wangEditor
	E.Modal=Modal;});// modal fn bind
	_e(function(E,$){var Modal=E.Modal;Modal.fn.init=function(){var self=this;// 初始化dom
	self.initDom();// 初始化隐藏事件
	self.initHideEvent();};// 初始化dom
	Modal.fn.initDom=function(){var self=this;var $content=self.$content;var $modal=$('<div class="wangEditor-modal"></div>');var $close=$('<div class="wangEditor-modal-close"><i class="wangeditor-menu-img-cancel-circle"></i></div>');$modal.append($close);$modal.append($content);// 记录数据
	self.$modal=$modal;self.$close=$close;};// 初始化隐藏事件
	Modal.fn.initHideEvent=function(){var self=this;var $close=self.$close;var modal=self.$modal.get(0);// 点击 $close 按钮，隐藏
	$close.click(function(){self.hide();});// 点击其他部分，隐藏
	E.$body.on('click',function(e){if(!self.isShowing){return;}var trigger=e.target;// 获取菜单elem
	var menu=self.menu;var menuDom;if(menu){if(menu.selected){menuDom=menu.$domSelected.get(0);}else{menuDom=menu.$domNormal.get(0);}if(menuDom===trigger||$.contains(menuDom,trigger)){// 说明由本菜单点击触发的
	return;}}if(modal===trigger||$.contains(modal,trigger)){// 说明由本panel点击触发的
	return;}// 其他情况，隐藏 panel
	self.hide();});};});// modal fn api
	_e(function(E,$){var Modal=E.Modal;// 渲染
	Modal.fn._render=function(){var self=this;var editor=self.editor;var $modal=self.$modal;// $modal的z-index，在配置的z-index基础上再 +10
	$modal.css('z-index',editor.config.zindex+10+'');// 渲染到body最后面
	E.$body.append($modal);// 记录状态
	self.rendered=true;};// 定位
	Modal.fn._position=function(){var self=this;var $modal=self.$modal;var top=$modal.offset().top;var width=$modal.outerWidth();var height=$modal.outerHeight();var marginLeft=0-width/2;var marginTop=0-height/2;var sTop=E.$window.scrollTop();// 保证modal最顶部，不超过浏览器上边框
	if(height/2>top){marginTop=0-top;}$modal.css({'margin-left':marginLeft+'px','margin-top':marginTop+sTop+'px'});};// 显示
	Modal.fn.show=function(){var self=this;var menu=self.menu;if(!self.rendered){// 第一次show之前，先渲染
	self._render();}if(self.isShowing){return;}// 记录状态
	self.isShowing=true;var $modal=self.$modal;$modal.show();// 定位
	self._position();// 激活菜单状态
	menu&&menu.activeStyle(true);};// 隐藏
	Modal.fn.hide=function(){var self=this;var menu=self.menu;if(!self.isShowing){return;}// 记录状态
	self.isShowing=false;// 隐藏
	var $modal=self.$modal;$modal.hide();// 菜单状态
	menu&&menu.activeStyle(false);};});// txt 构造函数
	_e(function(E,$){// 定义构造函数
	var Txt=function Txt(editor){this.editor=editor;// 初始化
	this.init();};Txt.fn=Txt.prototype;// 暴露给 E 即 window.wangEditor
	E.Txt=Txt;});// Txt.fn bind fn
	_e(function(E,$){var Txt=E.Txt;// 初始化
	Txt.fn.init=function(){var self=this;var editor=self.editor;var $valueContainer=editor.$valueContainer;var currentValue=editor.getInitValue();var $txt;if($valueContainer.get(0).nodeName==='DIV'){// 如果传入生成编辑器的元素就是div，则直接使用
	$txt=$valueContainer;$txt.addClass("wangEditor-txt");$txt.attr('contentEditable','true');}else{// 如果不是div（是textarea），则创建一个div
	$txt=$('<div class="wangEditor-txt" contentEditable="true">'+currentValue+'</div>');}// 试图最后插入一个空行，ready之后才行
	editor.ready(function(){self.insertEmptyP();});self.$txt=$txt;// 删除时，如果没有内容了，就添加一个 <p><br></p>
	self.contentEmptyHandle();// enter时，不能使用 div 换行
	self.bindEnterForDiv();// enter时，用 p 包裹 text
	self.bindEnterForText();// tab 插入4个空格
	self.bindTabEvent();// 处理粘贴内容
	self.bindPasteFilter();// $txt.formatText() 方法
	self.bindFormatText();// 定义 $txt.html() 方法
	self.bindHtml();};// 删除时，如果没有内容了，就添加一个 <p><br></p>
	Txt.fn.contentEmptyHandle=function(){var self=this;var editor=self.editor;var $txt=self.$txt;var $p;$txt.on('keydown',function(e){if(e.keyCode!==8){return;}var txtHtml=$.trim($txt.html().toLowerCase());if(txtHtml==='<p><br></p>'){// 如果最后还剩余一个空行，就不再继续删除了
	e.preventDefault();return;}});$txt.on('keyup',function(e){if(e.keyCode!==8){return;}var txtHtml=$.trim($txt.html().toLowerCase());// ff时用 txtHtml === '<br>' 判断，其他用 !txtHtml 判断
	if(!txtHtml||txtHtml==='<br>'){// 内容空了
	$p=$('<p><br/></p>');$txt.html('');// 一定要先清空，否则在 ff 下有问题
	$txt.append($p);editor.restoreSelectionByElem($p.get(0));}});};// enter时，不能使用 div 换行
	Txt.fn.bindEnterForDiv=function(){var tags=E.config.legalTags;// 配置中编辑器要求的合法标签，如 p head table blockquote ul ol 等
	var self=this;var editor=self.editor;var $txt=self.$txt;var $keydownDivElem;function divHandler(){if(!$keydownDivElem){return;}var $pElem=$('<p>'+$keydownDivElem.html()+'</p>');$keydownDivElem.after($pElem);$keydownDivElem.remove();}$txt.on('keydown keyup',function(e){if(e.keyCode!==13){return;}// 查找合法标签
	var rangeElem=editor.getRangeElem();var targetElem=editor.getLegalTags(rangeElem);var $targetElem;var $pElem;if(!targetElem){// 没找到合法标签，就去查找 div
	targetElem=editor.getSelfOrParentByName(rangeElem,'div');if(!targetElem){return;}$targetElem=$(targetElem);if(e.type==='keydown'){// 异步执行（同步执行会出现问题）
	$keydownDivElem=$targetElem;setTimeout(divHandler,0);}if(e.type==='keyup'){// 将 div 的内容移动到 p 里面，并移除 div
	$pElem=$('<p>'+$targetElem.html()+'</p>');$targetElem.after($pElem);$targetElem.remove();// 如果是回车结束，将选区定位到行首
	editor.restoreSelectionByElem($pElem.get(0),'start');}}});};// enter时，用 p 包裹 text
	Txt.fn.bindEnterForText=function(){var self=this;var $txt=self.$txt;var handle;$txt.on('keyup',function(e){if(e.keyCode!==13){return;}if(!handle){handle=function handle(){self.wrapImgAndText();};}setTimeout(handle);});};// tab 时，插入4个空格
	Txt.fn.bindTabEvent=function(){var self=this;var editor=self.editor;var $txt=self.$txt;$txt.on('keydown',function(e){if(e.keyCode!==9){// 只监听 tab 按钮
	return;}// 如果浏览器支持 insertHtml 则插入4个空格。如果不支持，就不管了
	if(editor.queryCommandSupported('insertHtml')){editor.command(e,'insertHtml','&nbsp;&nbsp;&nbsp;&nbsp;');}});};// 处理粘贴内容
	Txt.fn.bindPasteFilter=function(){var self=this;var editor=self.editor;var resultHtml='';//存储最终的结果
	var $txt=self.$txt;var legalTags=editor.config.legalTags;var legalTagArr=legalTags.split(',');$txt.on('paste',function(e){if(!editor.config.pasteFilter){// 配置中取消了粘贴过滤
	return;}var currentNodeName=editor.getRangeElem().nodeName;if(currentNodeName==='TD'||currentNodeName==='TH'){// 在表格的单元格中粘贴，忽略所有内容。否则会出现异常情况
	return;}resultHtml='';// 先清空 resultHtml
	var pasteHtml,$paste;var data=e.clipboardData||e.originalEvent.clipboardData;var ieData=window.clipboardData;if(editor.config.pasteText){// 只粘贴纯文本
	if(data&&data.getData){// w3c
	pasteHtml=data.getData('text/plain');}else if(ieData&&ieData.getData){// IE
	pasteHtml=ieData.getData('text');}else{// 其他情况
	return;}// 拼接为 <p> 标签
	if(pasteHtml){resultHtml='<p>'+pasteHtml+'</p>';}}else{// 粘贴过滤了样式的、只有标签的 html
	if(data&&data.getData){// w3c
	// 获取粘贴过来的html
	pasteHtml=data.getData('text/html');if(pasteHtml){// 创建dom
	$paste=$('<div>'+pasteHtml+'</div>');// 处理，并将结果存储到 resultHtml 『全局』变量
	handle($paste.get(0));}else{// 得不到html，试图获取text
	pasteHtml=data.getData('text/plain');if(pasteHtml){// 替换特殊字符
	pasteHtml=pasteHtml.replace(/[ ]/g,'&nbsp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'</p><p>');// 拼接
	resultHtml='<p>'+pasteHtml+'</p>';// 查询链接
	resultHtml=resultHtml.replace(/<p>(https?:\/\/.*?)<\/p>/ig,function(match,link){return'<p><a href="'+link+'" target="_blank">'+link+'</p>';});}}}else if(ieData&&ieData.getData){// IE 直接从剪切板中取出纯文本格式
	resultHtml=ieData.getData('text');if(!resultHtml){return;}// 拼接为 <p> 标签
	resultHtml='<p>'+resultHtml+'</p>';resultHtml=resultHtml.replace(new RegExp('\n','g'),'</p><p>');}else{// 其他情况
	return;}}// 执行命令
	if(resultHtml){editor.command(e,'insertHtml',resultHtml);// 删除内容为空的 p 和嵌套的 p
	self.clearEmptyOrNestP();}});// 处理粘贴的内容
	function handle(elem){if(!elem||!elem.nodeType||!elem.nodeName){return;}var $elem;var nodeName=elem.nodeName.toLowerCase();var nodeType=elem.nodeType;// 只处理文本和普通node标签
	if(nodeType!==3&&nodeType!==1){return;}$elem=$(elem);// 如果是容器，则继续深度遍历
	if(nodeName==='div'){$.each(elem.childNodes,function(){// elem.childNodes 可获取TEXT节点，而 $elem.children() 就获取不到
	handle(this);});return;}if(legalTagArr.indexOf(nodeName)>=0){// 如果是合法标签之内的，则根据元素类型，获取值
	resultHtml+=getResult(elem);}else if(nodeType===3){// 如果是文本，则直接插入 p 标签
	resultHtml+='<p>'+elem.textContent+'</p>';}else if(nodeName==='br'){// <br>保留
	resultHtml+='<br/>';}else{// 忽略的标签
	if(['meta','style','script','object','form','iframe','hr'].indexOf(nodeName)>=0){return;}// 其他标签，移除属性，插入 p 标签
	$elem=$(removeAttrs(elem));// 注意，这里的 clone() 是必须的，否则会出错
	resultHtml+=$('<div>').append($elem.clone()).html();}}// 获取元素的结果
	function getResult(elem){var nodeName=elem.nodeName.toLowerCase();var $elem;var htmlForP='';var htmlForLi='';if(['blockquote'].indexOf(nodeName)>=0){// 直接取出元素text即可
	$elem=$(elem);return'<'+nodeName+'>'+$elem.text()+'</'+nodeName+'>';}else if(['p','h1','h2','h3','h4','h5'].indexOf(nodeName)>=0){//p head 取出 text 和链接
	elem=removeAttrs(elem);$elem=$(elem);htmlForP=$elem.html();// 剔除 a img 之外的元素
	htmlForP=htmlForP.replace(/<.*?>/ig,function(tag){if(tag==='</a>'||tag.indexOf('<a ')===0||tag.indexOf('<img ')===0){return tag;}else{return'';}});return'<'+nodeName+'>'+htmlForP+'</'+nodeName+'>';}else if(['ul','ol'].indexOf(nodeName)>=0){// ul ol元素，获取子元素（li元素）的text link img，再拼接
	$elem=$(elem);$elem.children().each(function(){var $li=$(removeAttrs(this));var html=$li.html();html=html.replace(/<.*?>/ig,function(tag){if(tag==='</a>'||tag.indexOf('<a ')===0||tag.indexOf('<img ')===0){return tag;}else{return'';}});htmlForLi+='<li>'+html+'</li>';});return'<'+nodeName+'>'+htmlForLi+'</'+nodeName+'>';}else{// 其他元素，移除元素属性
	$elem=$(removeAttrs(elem));return $('<div>').append($elem).html();}}// 移除一个元素（子元素）的attr
	function removeAttrs(elem){var attrs=elem.attributes||[];var attrNames=[];var exception=['href','target','src','alt','rowspan','colspan'];//例外情况
	// 先存储下elem中所有 attr 的名称
	$.each(attrs,function(key,attr){if(attr&&attr.nodeType===2){attrNames.push(attr.nodeName);}});// 再根据名称删除所有attr
	$.each(attrNames,function(key,attr){if(exception.indexOf(attr)<0){// 除了 exception 规定的例外情况，删除其他属性
	elem.removeAttribute(attr);}});// 递归子节点
	var children=elem.childNodes;if(children.length){$.each(children,function(key,value){removeAttrs(value);});}return elem;}};// 绑定 $txt.formatText() 方法
	Txt.fn.bindFormatText=function(){var self=this;var editor=self.editor;var $txt=self.$txt;var legalTags=E.config.legalTags;var legalTagArr=legalTags.split(',');var length=legalTagArr.length;var regArr=[];// 将 E.config.legalTags 配置的有效字符，生成正则表达式
	$.each(legalTagArr,function(k,tag){var reg='\>\\s*\<('+tag+')\>';regArr.push(new RegExp(reg,'ig'));});// 增加 li 
	regArr.push(new RegExp('\>\\s*\<(li)\>','ig'));// 增加 tr
	regArr.push(new RegExp('\>\\s*\<(tr)\>','ig'));// 增加 code
	regArr.push(new RegExp('\>\\s*\<(code)\>','ig'));// 生成 formatText 方法
	$txt.formatText=function(){var $temp=$('<div>');var html=$txt.html();// 去除空格
	html=html.replace(/\s*</ig,'<');// 段落、表格之间换行
	$.each(regArr,function(k,reg){if(!reg.test(html)){return;}html=html.replace(reg,function(matchStr,tag){return'>\n<'+tag+'>';});});$temp.html(html);return $temp.text();};};// 定制 $txt.html 方法
	Txt.fn.bindHtml=function(){var self=this;var editor=self.editor;var $txt=self.$txt;var $valueContainer=editor.$valueContainer;var valueNodeName=editor.valueNodeName;$txt.html=function(html){var result;if(valueNodeName==='div'){// div 生成的编辑器，取值、赋值，都直接触发jquery的html方法
	result=$.fn.html.call($txt,html);}// textarea 生成的编辑器，则需要考虑赋值时，也给textarea赋值
	if(html===undefined){// 取值，直接触发jquery原生html方法
	result=$.fn.html.call($txt);// 替换 html 中，src和href属性中的 & 字符。
	// 因为 .html() 或者 .innerHTML 会把所有的 & 字符都改成 &amp; 但是 src 和 href 中的要保持 &
	result=result.replace(/(href|src)\=\"(.*)\"/igm,function(a,b,c){return b+'="'+c.replace('&amp;','&')+'"';});}else{// 赋值，需要同时给 textarea 赋值
	result=$.fn.html.call($txt,html);$valueContainer.val(html);}if(html===undefined){return result;}else{// 手动触发 change 事件，因为 $txt 监控了 change 事件来判断是否需要执行 editor.onchange 
	$txt.change();}};};});// Txt.fn api
	_e(function(E,$){var Txt=E.Txt;var txtChangeEventNames='propertychange change click keyup input paste';// 渲染
	Txt.fn.render=function(){var $txt=this.$txt;var $editorContainer=this.editor.$editorContainer;$editorContainer.append($txt);};// 计算高度
	Txt.fn.initHeight=function(){var editor=this.editor;var $txt=this.$txt;var valueContainerHeight=editor.$valueContainer.height();var menuHeight=editor.menuContainer.height();var txtHeight=valueContainerHeight-menuHeight;// 限制最小为 50px
	txtHeight=txtHeight<50?50:txtHeight;$txt.height(txtHeight);// 记录原始高度
	editor.valueContainerHeight=valueContainerHeight;// 设置 max-height
	this.initMaxHeight(txtHeight,menuHeight);};// 计算最大高度
	Txt.fn.initMaxHeight=function(txtHeight,menuHeight){var editor=this.editor;var $menuContainer=editor.menuContainer.$menuContainer;var $txt=this.$txt;var $wrap=$('<div>');// 需要浏览器支持 max-height，否则不管
	if(window.getComputedStyle&&'max-height'in window.getComputedStyle($txt.get(0))){// 获取 max-height 并判断是否有值
	var maxHeight=parseInt(editor.$valueContainer.css('max-height'));if(isNaN(maxHeight)){return;}// max-height 和『全屏』暂时有冲突
	if(editor.menus.fullscreen){E.warn('max-height和『全屏』菜单一起使用时，会有一些问题尚未解决，请暂时不要两个同时使用');return;}// 标记
	editor.useMaxHeight=true;// 设置maxheight
	$wrap.css({'max-height':maxHeight-menuHeight+'px','overflow-y':'auto'});$txt.css({'height':'auto','overflow-y':'visible','min-height':txtHeight+'px'});// 滚动式，菜单阴影
	$wrap.on('scroll',function(){if($txt.parent().scrollTop()>10){$menuContainer.addClass('wangEditor-menu-shadow');}else{$menuContainer.removeClass('wangEditor-menu-shadow');}});// 需在编辑器区域外面再包裹一层
	$txt.wrap($wrap);}};// 保存选区
	Txt.fn.saveSelectionEvent=function(){var $txt=this.$txt;var editor=this.editor;var timeoutId;var dt=Date.now();function save(){editor.saveSelection();}// 同步保存选区
	function saveSync(){// 100ms之内，不重复保存
	if(Date.now()-dt<100){return;}dt=Date.now();save();}// 异步保存选区
	function saveAync(){// 节流，防止高频率重复操作
	if(timeoutId){clearTimeout(timeoutId);}timeoutId=setTimeout(save,300);}// txt change 、focus、blur 时随时保存选区
	$txt.on(txtChangeEventNames+' focus blur',function(e){// 先同步保存选区，为了让接下来就马上要执行 editor.getRangeElem() 的程序
	// 能够获取到正确的 rangeElem
	saveSync();// 再异步保存选区，为了确定更加准确的选区，为后续的操作做准备
	saveAync();});// 鼠标拖拽选择时，可能会拖拽到编辑器区域外面再松手，此时 $txt 就监听不到 click事件了
	$txt.on('mousedown',function(){$txt.on('mouseleave.saveSelection',function(e){// 先同步后异步，如上述注释
	saveSync();saveAync();// 顺道吧菜单状态也更新了
	editor.updateMenuStyle();});}).on('mouseup',function(){$txt.off('mouseleave.saveSelection');});};// 随时更新 value
	Txt.fn.updateValueEvent=function(){var $txt=this.$txt;var editor=this.editor;var timeoutId,oldValue;// 触发 onchange 事件
	function doOnchange(){var val=$txt.html();if(oldValue===val){// 无变化
	return;}// 触发 onchange 事件
	if(editor.onchange&&typeof editor.onchange==='function'){editor.onchange.call(editor);}// 更新内容
	editor.updateValue();// 记录最新内容
	oldValue=val;}// txt change 时随时更新内容
	$txt.on(txtChangeEventNames,function(e){// 初始化
	if(oldValue==null){oldValue=$txt.html();}// 监控内容变化（停止操作 100ms 之后立即执行）
	if(timeoutId){clearTimeout(timeoutId);}timeoutId=setTimeout(doOnchange,100);});};// 随时更新 menustyle
	Txt.fn.updateMenuStyleEvent=function(){var $txt=this.$txt;var editor=this.editor;// txt change 时随时更新内容
	$txt.on(txtChangeEventNames,function(e){editor.updateMenuStyle();});};// 最后插入试图插入 <p><br><p>
	Txt.fn.insertEmptyP=function(){var $txt=this.$txt;var $children=$txt.children();if($children.length===0){$txt.append($('<p><br></p>'));return;}if($.trim($children.last().html()).toLowerCase()!=='<br>'){$txt.append($('<p><br></p>'));}};// 将编辑器暴露出来的文字和图片，都用 p 来包裹
	Txt.fn.wrapImgAndText=function(){var $txt=this.$txt;var $imgs=$txt.children('img');var txt=$txt[0];var childNodes=txt.childNodes;var childrenLength=childNodes.length;var i,childNode,p;// 处理图片
	$imgs.length&&$imgs.each(function(){$(this).wrap('<p>');});// 处理文字
	for(i=0;i<childrenLength;i++){childNode=childNodes[i];if(childNode.nodeType===3&&childNode.textContent&&$.trim(childNode.textContent)){$(childNode).wrap('<p>');}}};// 清空内容为空的<p>，以及重复包裹的<p>（在windows下的chrome粘贴文字之后，会出现上述情况）
	Txt.fn.clearEmptyOrNestP=function(){var $txt=this.$txt;var $pList=$txt.find('p');$pList.each(function(){var $p=$(this);var $children=$p.children();var childrenLength=$children.length;var $firstChild;var content=$.trim($p.html());// 内容为空的p
	if(!content){$p.remove();return;}// 嵌套的p
	if(childrenLength===1){$firstChild=$children.first();if($firstChild.get(0)&&$firstChild.get(0).nodeName==='P'){$p.html($firstChild.html());}}});};// 获取 scrollTop
	Txt.fn.scrollTop=function(val){var self=this;var editor=self.editor;var $txt=self.$txt;if(editor.useMaxHeight){return $txt.parent().scrollTop(val);}else{return $txt.scrollTop(val);}};// 鼠标hover时候，显示p、head的高度
	Txt.fn.showHeightOnHover=function(){var editor=this.editor;var $editorContainer=editor.$editorContainer;var menuContainer=editor.menuContainer;var $txt=this.$txt;var $tip=$('<i class="height-tip"><i>');var isTipInTxt=false;function addAndShowTip($target){if(!isTipInTxt){$editorContainer.append($tip);isTipInTxt=true;}var txtTop=$txt.position().top;var txtHeight=$txt.outerHeight();var height=$target.height();var top=$target.position().top;var marginTop=parseInt($target.css('margin-top'),10);var paddingTop=parseInt($target.css('padding-top'),10);var marginBottom=parseInt($target.css('margin-bottom'),10);var paddingBottom=parseInt($target.css('padding-bottom'),10);// 计算初步的结果
	var resultHeight=height+paddingTop+marginTop+paddingBottom+marginBottom;var resultTop=top+menuContainer.height();// var spaceValue;
	// // 判断是否超出下边界
	// spaceValue = (resultTop + resultHeight) - (txtTop + txtHeight);
	// if (spaceValue > 0) {
	//     resultHeight = resultHeight - spaceValue;
	// }
	// // 判断是否超出了下边界
	// spaceValue = txtTop > resultTop;
	// if (spaceValue) {
	//     resultHeight = resultHeight - spaceValue;
	//     top = top + spaceValue;
	// }
	// 按照最终结果渲染
	$tip.css({height:height+paddingTop+marginTop+paddingBottom+marginBottom,top:top+menuContainer.height()});}function removeTip(){if(!isTipInTxt){return;}$tip.remove();isTipInTxt=false;}$txt.on('mouseenter','ul,ol,blockquote,p,h1,h2,h3,h4,h5,table,pre',function(e){addAndShowTip($(e.currentTarget));}).on('mouseleave',function(){removeTip();});};});// 工具函数
	_e(function(E,$){// IE8 [].indexOf()
	if(!Array.prototype.indexOf){//IE低版本不支持 arr.indexOf 
	Array.prototype.indexOf=function(elem){var i=0,length=this.length;for(;i<length;i++){if(this[i]===elem){return i;}}return-1;};//IE低版本不支持 arr.lastIndexOf
	Array.prototype.lastIndexOf=function(elem){var length=this.length;for(length=length-1;length>=0;length--){if(this[length]===elem){return length;}}return-1;};}// IE8 Date.now()
	if(!Date.now){Date.now=function(){return new Date().valueOf();};}// console.log && console.warn && console.error
	var console=window.console;var emptyFn=function emptyFn(){};$.each(['info','log','warn','error'],function(key,value){if(console==null){E[value]=emptyFn;}else{E[value]=function(info){// 通过配置来控制打印输出
	if(E.config&&E.config.printLog){console[value]('wangEditor提示: '+info);}};}});// 获取随机数
	E.random=function(){return Math.random().toString().slice(2);};// 浏览器是否支持 placeholder
	E.placeholder='placeholder'in document.createElement('input');// 兼容IE8的 input placeholder
	E.placeholderForIE8=function($container){if(E.placeholder){return;}$container.find('input[placeholder]').each(function(){var $input=$(this);var placeholder=$input.attr('placeholder');if($input.val()===''){$input.css('color','#666');$input.val(placeholder);$input.on('focus.placeholder click.placeholder',function(){$input.val('');$input.css('color','#333');$input.off('focus.placeholder click.placeholder');});}});};});// 语言包
	_e(function(E,$){E.langs={};// 中文
	E.langs['zh-cn']={bold:'粗体',underline:'下划线',italic:'斜体',forecolor:'文字颜色',bgcolor:'背景色',strikethrough:'删除线',eraser:'清空格式',source:'源码',quote:'引用',fontfamily:'字体',fontsize:'字号',head:'标题',orderlist:'有序列表',unorderlist:'无序列表',alignleft:'左对齐',aligncenter:'居中',alignright:'右对齐',link:'链接',text:'文本',submit:'提交',cancel:'取消',unlink:'取消链接',table:'表格',emotion:'表情',img:'图片',video:'视频','width':'宽','height':'高',location:'位置',loading:'加载中',searchlocation:'搜索位置',dynamicMap:'动态地图',clearLocation:'清除位置',langDynamicOneLocation:'动态地图只能显示一个位置',insertcode:'插入代码',undo:'撤销',redo:'重复',fullscreen:'全屏',openLink:'打开链接'};// 英文
	E.langs.en={bold:'Bold',underline:'Underline',italic:'Italic',forecolor:'Color',bgcolor:'Backcolor',strikethrough:'Strikethrough',eraser:'Eraser',source:'Codeview',quote:'Quote',fontfamily:'Font family',fontsize:'Font size',head:'Head',orderlist:'Ordered list',unorderlist:'Unordered list',alignleft:'Align left',aligncenter:'Align center',alignright:'Align right',link:'Insert link',text:'Text',submit:'Submit',cancel:'Cancel',unlink:'Unlink',table:'Table',emotion:'Emotions',img:'Image',video:'Video','width':'width','height':'height',location:'Location',loading:'Loading',searchlocation:'search',dynamicMap:'Dynamic',clearLocation:'Clear',langDynamicOneLocation:'Only one location in dynamic map',insertcode:'Insert Code',undo:'Undo',redo:'Redo',fullscreen:'Full screnn',openLink:'open link'};});// 全局配置
	_e(function(E,$){E.config={};// 全屏时的 z-index
	E.config.zindex=10000;// 是否打印log
	E.config.printLog=true;// 菜单吸顶：false - 不吸顶；number - 吸顶，值为top值
	E.config.menuFixed=0;// 编辑源码时，过滤 javascript
	E.config.jsFilter=true;// 编辑器允许的标签
	E.config.legalTags='p,h1,h2,h3,h4,h5,h6,blockquote,table,ul,ol,pre';// 语言包
	E.config.lang=E.langs['zh-cn'];// 菜单配置
	E.config.menus=['source','|','bold','underline','italic','strikethrough','eraser','forecolor','bgcolor','|','quote','fontfamily','fontsize','head','unorderlist','orderlist','alignleft','aligncenter','alignright','|','link','unlink','table','emotion','|','img','video','location','insertcode','|','undo','redo','fullscreen'];// 颜色配置
	E.config.colors={// 'value': 'title'
	'#880000':'暗红色','#800080':'紫色','#ff0000':'红色','#ff00ff':'鲜粉色','#000080':'深蓝色','#0000ff':'蓝色','#00ffff':'湖蓝色','#008080':'蓝绿色','#008000':'绿色','#808000':'橄榄色','#00ff00':'浅绿色','#ffcc00':'橙黄色','#808080':'灰色','#c0c0c0':'银色','#000000':'黑色','#ffffff':'白色'};// 字体
	E.config.familys=['宋体','黑体','楷体','微软雅黑','Arial','Verdana','Georgia','Times New Roman','Microsoft JhengHei','Trebuchet MS','Courier New','Impact','Comic Sans MS','Consolas'];// 字号
	E.config.fontsizes={// 格式：'value': 'title'
	1:'12px',2:'13px',3:'16px',4:'18px',5:'24px',6:'32px',7:'48px'};// 表情包
	E.config.emotionsShow='icon';// 显示项，默认为'icon'，也可以配置成'value'
	E.config.emotions={// 'default': {
	//     title: '默认',
	//     data: './emotions.data'
	// },
	'weibo':{title:'微博表情',data:[{icon:'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7a/shenshou_thumb.gif',value:'[草泥马]'},{icon:'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/60/horse2_thumb.gif',value:'[神马]'},{icon:'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/fuyun_thumb.gif',value:'[浮云]'},{icon:'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c9/geili_thumb.gif',value:'[给力]'},{icon:'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/f2/wg_thumb.gif',value:'[围观]'},{icon:'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/70/vw_thumb.gif',value:'[威武]'},{icon:'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6e/panda_thumb.gif',value:'[熊猫]'},{icon:'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/81/rabbit_thumb.gif',value:'[兔子]'},{icon:'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/otm_thumb.gif',value:'[奥特曼]'},{icon:'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/15/j_thumb.gif',value:'[囧]'},{icon:'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/89/hufen_thumb.gif',value:'[互粉]'},{icon:'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c4/liwu_thumb.gif',value:'[礼物]'},{icon:'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/ac/smilea_thumb.gif',value:'[呵呵]'},{icon:'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/0b/tootha_thumb.gif',value:'[哈哈]'}]}};// 百度地图的key
	E.config.mapAk='TVhjYjq1ICT2qqL5LdS8mwas';// 上传图片的配置
	// server地址
	E.config.uploadImgUrl='';// 超时时间
	E.config.uploadTimeout=20*1000;// 用于存储上传回调事件
	E.config.uploadImgFns={};// 自定义上传图片的filename
	// E.config.uploadImgFileName = 'customFileName';
	// 自定义上传，设置为 true 之后，显示上传图标
	E.config.customUpload=false;// 自定义上传的init事件
	// E.config.customUploadInit = function () {....};
	// 自定义上传时传递的参数（如 token）
	E.config.uploadParams={/* token: 'abcdef12345' */};// 自定义上传是的header参数
	E.config.uploadHeaders={/* 'Accept' : 'text/x-json' */};// 隐藏网络图片，默认为 false
	E.config.hideLinkImg=false;// 是否过滤粘贴内容
	E.config.pasteFilter=true;// 是否粘贴纯文本，当 editor.config.pasteFilter === false 时候，此配置将失效
	E.config.pasteText=false;// 插入代码时，默认的语言
	E.config.codeDefaultLang='javascript';});// 全局UI
	_e(function(E,$){E.UI={};// 为菜单自定义配置的UI
	E.UI.menus={// 这个 default 不加引号，在 IE8 会报错
	'default':{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-command"></i></a>',selected:'.selected'},bold:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-bold"></i></a>',selected:'.selected'},underline:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-underline"></i></a>',selected:'.selected'},italic:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-italic"></i></a>',selected:'.selected'},forecolor:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-pencil"></i></a>',selected:'.selected'},bgcolor:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-brush"></i></a>',selected:'.selected'},strikethrough:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-strikethrough"></i></a>',selected:'.selected'},eraser:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-eraser"></i></a>',selected:'.selected'},quote:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-quotes-left"></i></a>',selected:'.selected'},source:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-code"></i></a>',selected:'.selected'},fontfamily:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-font2"></i></a>',selected:'.selected'},fontsize:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-text-height"></i></a>',selected:'.selected'},head:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-header"></i></a>',selected:'.selected'},orderlist:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-list-numbered"></i></a>',selected:'.selected'},unorderlist:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-list-bullet"></i></a>',selected:'.selected'},alignleft:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-align-left"></i></a>',selected:'.selected'},aligncenter:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-align-center"></i></a>',selected:'.selected'},alignright:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-align-right"></i></a>',selected:'.selected'},link:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-link"></i></a>',selected:'.selected'},unlink:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-unlink"></i></a>',selected:'.selected'},table:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-table"></i></a>',selected:'.selected'},emotion:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-happy"></i></a>',selected:'.selected'},img:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-picture"></i></a>',selected:'.selected'},video:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-play"></i></a>',selected:'.selected'},location:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-location"></i></a>',selected:'.selected'},insertcode:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-terminal"></i></a>',selected:'.selected'},undo:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-ccw"></i></a>',selected:'.selected'},redo:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-cw"></i></a>',selected:'.selected'},fullscreen:{normal:'<a href="#" tabindex="-1"><i class="wangeditor-menu-img-enlarge2"></i></a>',selected:'<a href="#" tabindex="-1" class="selected"><i class="wangeditor-menu-img-shrink2"></i></a>'}};});// 对象配置
	_e(function(E,$){E.fn.initDefaultConfig=function(){var editor=this;editor.config=$.extend({},E.config);editor.UI=$.extend({},E.UI);};});// 增加 container
	_e(function(E,$){E.fn.addEditorContainer=function(){this.$editorContainer=$('<div class="wangEditor-container"></div>');};});// 增加编辑区域对象
	_e(function(E,$){E.fn.addTxt=function(){var editor=this;var txt=new E.Txt(editor);editor.txt=txt;};});// 增加menuContainer对象
	_e(function(E,$){E.fn.addMenuContainer=function(){var editor=this;editor.menuContainer=new E.MenuContainer(editor);};});// 增加menus
	_e(function(E,$){// 存储创建菜单的函数
	E.createMenuFns=[];E.createMenu=function(fn){E.createMenuFns.push(fn);};// 创建所有菜单
	E.fn.addMenus=function(){var editor=this;var menuIds=editor.config.menus;// 检验 menuId 是否在配置中存在
	function check(menuId){if(menuIds.indexOf(menuId)>=0){return true;}return false;}// 遍历所有的菜单创建函数，并执行
	$.each(E.createMenuFns,function(k,createMenuFn){createMenuFn.call(editor,check);});};});// bold菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='bold';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.bold,commandName:'Bold'});// 定义选中状态下的click事件
	menu.clickEventSelected=function(e){var isRangeEmpty=editor.isRangeEmpty();if(!isRangeEmpty){// 如果选区有内容，则执行基础命令
	editor.command(e,'Bold');}else{// 如果选区没有内容
	editor.commandForElem('b,strong,h1,h2,h3,h4,h5',e,'Bold');}};// 增加到editor对象中
	editor.menus[menuId]=menu;});});// underline菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='underline';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.underline,commandName:'Underline'});// 定义选中状态下的click事件
	menu.clickEventSelected=function(e){var isRangeEmpty=editor.isRangeEmpty();if(!isRangeEmpty){// 如果选区有内容，则执行基础命令
	editor.command(e,'Underline');}else{// 如果选区没有内容
	editor.commandForElem('u,a',e,'Underline');}};// 增加到editor对象中
	editor.menus[menuId]=menu;});});// italic 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='italic';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.italic,commandName:'Italic'});// 定义选中状态下的click事件
	menu.clickEventSelected=function(e){var isRangeEmpty=editor.isRangeEmpty();if(!isRangeEmpty){// 如果选区有内容，则执行基础命令
	editor.command(e,'Italic');}else{// 如果选区没有内容
	editor.commandForElem('i',e,'Italic');}};// 增加到editor对象中
	editor.menus[menuId]=menu;});});// forecolor 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='forecolor';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;var configColors=editor.config.colors;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.forecolor});// 创建 dropPanel
	var $content=$('<div></div>');$.each(configColors,function(k,v){$content.append(['<a href="#" class="color-item"','    title="'+v+'" commandValue="'+k+'" ','    style="color: '+k+'" ','><i class="wangeditor-menu-img-pencil"></i></a>'].join(''));});$content.on('click','a[commandValue]',function(e){// 执行命令
	var $elem=$(this);var commandValue=$elem.attr('commandValue');if(menu.selected&&editor.isRangeEmpty()){// 当前处于选中状态，并且选中内容为空
	editor.commandForElem('font[color]',e,'forecolor',commandValue);}else{// 当前未处于选中状态，或者有选中内容。则执行默认命令
	editor.command(e,'forecolor',commandValue);}});menu.dropPanel=new E.DropPanel(editor,menu,{$content:$content,width:125});// 定义 update selected 事件
	menu.updateSelectedEvent=function(){var rangeElem=editor.getRangeElem();rangeElem=editor.getSelfOrParentByName(rangeElem,'font[color]');if(rangeElem){return true;}return false;};// 增加到editor对象中
	editor.menus[menuId]=menu;});});// bgcolor 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='bgcolor';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;var configColors=editor.config.colors;// 检查元素是否有 background-color: 内联样式
	function checkElemFn(elem){var cssText;if(elem&&elem.style&&elem.style.cssText!=null){cssText=elem.style.cssText;if(cssText&&cssText.indexOf('background-color:')>=0){return true;}}return false;}// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.bgcolor});// 创建 dropPanel
	var $content=$('<div></div>');$.each(configColors,function(k,v){$content.append(['<a href="#" class="color-item"','    title="'+v+'" commandValue="'+k+'" ','    style="color: '+k+'" ','><i class="wangeditor-menu-img-brush"></i></a>'].join(''));});$content.on('click','a[commandValue]',function(e){// 执行命令
	var $elem=$(this);var commandValue=$elem.attr('commandValue');if(menu.selected&&editor.isRangeEmpty()){// 当前处于选中状态，并且选中内容为空。使用 commandForElem 执行命令
	editor.commandForElem({selector:'span,font',check:checkElemFn},e,'BackColor',commandValue);}else{// 当前未处于选中状态，或者有选中内容。则执行默认命令
	editor.command(e,'BackColor',commandValue);}});menu.dropPanel=new E.DropPanel(editor,menu,{$content:$content,width:125});// 定义 update selected 事件
	menu.updateSelectedEvent=function(){var rangeElem=editor.getRangeElem();rangeElem=editor.getSelfOrParentByName(rangeElem,'span,font',checkElemFn);if(rangeElem){return true;}return false;};// 增加到editor对象中
	editor.menus[menuId]=menu;});});// strikethrough 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='strikethrough';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.strikethrough,commandName:'StrikeThrough'});// 定义选中状态下的click事件
	menu.clickEventSelected=function(e){var isRangeEmpty=editor.isRangeEmpty();if(!isRangeEmpty){// 如果选区有内容，则执行基础命令
	editor.command(e,'StrikeThrough');}else{// 如果选区没有内容
	editor.commandForElem('strike',e,'StrikeThrough');}};// 增加到editor对象中
	editor.menus[menuId]=menu;});});// eraser 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='eraser';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.eraser,commandName:'RemoveFormat'});// 定义点击事件
	menu.clickEvent=function(e){var isRangeEmpty=editor.isRangeEmpty();if(!isRangeEmpty){// 选区不是空的，则执行默认命令
	editor.command(e,'RemoveFormat');return;}var $clearElem;// 自定义的命令函数
	function commandFn(){var editor=this;var rangeElem;var pElem,$pElem;var quoteElem,$quoteElem;var listElem,$listElem;// 获取选区 elem
	rangeElem=editor.getRangeElem();// 第一步，获取 quote 父元素
	quoteElem=editor.getSelfOrParentByName(rangeElem,'blockquote');if(quoteElem){$quoteElem=$(quoteElem);$clearElem=$('<p>'+$quoteElem.text()+'</p>');$quoteElem.after($clearElem).remove();}// 第二步，获取 p h 父元素
	pElem=editor.getSelfOrParentByName(rangeElem,'p,h1,h2,h3,h4,h5');if(pElem){$pElem=$(pElem);$clearElem=$('<p>'+$pElem.text()+'</p>');$pElem.after($clearElem).remove();}// 第三步，获取list
	listElem=editor.getSelfOrParentByName(rangeElem,'ul,ol');if(listElem){$listElem=$(listElem);$clearElem=$('<p>'+$listElem.text()+'</p>');$listElem.after($clearElem).remove();}}// 自定义 callback 事件
	function callback(){// callback中，设置range为clearElem
	var editor=this;if($clearElem){editor.restoreSelectionByElem($clearElem.get(0));}}// 执行自定义命令
	editor.customCommand(e,commandFn,callback);};// 增加到editor对象中
	editor.menus[menuId]=menu;});});// source 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='source';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;var txtHtml;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.source});menu.isShowCode=false;// 更新内容
	function updateValue(){var $code=menu.$codeTextarea;var $txt=editor.txt.$txt;var value=$.trim($code.val());// 取值
	if(!value){value='<p><br></p>';}// 过滤js代码
	if(editor.config.jsFilter){value=value.replace(/<script[\s\S]*?<\/script>/ig,'');}// 赋值
	$txt.html(value);}// 定义click事件
	menu.clickEvent=function(e){var self=this;var editor=self.editor;var $txt=editor.txt.$txt;var txtOuterHeight=$txt.outerHeight();var txtHeight=$txt.height();if(!self.$codeTextarea){self.$codeTextarea=$('<textarea class="code-textarea"></textarea>');}var $code=self.$codeTextarea;$code.css({height:txtHeight,'margin-top':txtOuterHeight-txtHeight});// 赋值
	$code.val($txt.html());// 渲染
	$txt.after($code).hide();$code.show();// 更新状态
	menu.isShowCode=true;// 执行 updateSelected 事件
	this.updateSelected();// 禁用其他菜单
	editor.disableMenusExcept('source');// 记录当前html值
	txtHtml=$txt.html();};// 定义选中状态下的click事件
	menu.clickEventSelected=function(e){var self=this;var editor=self.editor;var $txt=editor.txt.$txt;var $code=self.$codeTextarea;var value;if(!$code){return;}// 更新内容
	updateValue();// 渲染
	$code.after($txt).hide();$txt.show();// 更新状态
	menu.isShowCode=false;// 执行 updateSelected 事件
	this.updateSelected();// 启用其他菜单
	editor.enableMenusExcept('source');// 判断是否执行 onchange 事件
	if($txt.html()!==txtHtml){if(editor.onchange&&typeof editor.onchange==='function'){editor.onchange.call(editor);}}};// 定义切换选中状态事件
	menu.updateSelectedEvent=function(){return this.isShowCode;};// 增加到editor对象中
	editor.menus[menuId]=menu;});});// quote 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='quote';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.quote,commandName:'formatBlock',commandValue:'blockquote'});// 定义click事件
	menu.clickEvent=function(e){var rangeElem=editor.getRangeElem();var $rangeElem;if(!rangeElem){e.preventDefault();return;}var currentQuote=editor.getSelfOrParentByName(rangeElem,'blockquote');var $quote;if(currentQuote){// 说明当前在quote之内，不做任何处理
	e.preventDefault();return;}rangeElem=editor.getLegalTags(rangeElem);$rangeElem=$(rangeElem);// 无文字，则不允许执行引用
	if(!$rangeElem.text()){return;}if(!rangeElem){// 执行默认命令
	// IE8 下执行此处（不过，经测试代码无效，也不报错）
	editor.command(e,'formatBlock','blockquote');return;}// 自定义command事件
	function commandFn(){$quote=$('<p>'+$rangeElem.text()+'</p>');$rangeElem.after($quote).remove();$quote.wrap('<blockquote>');}// 自定义 callback 事件
	function callback(){// callback中，设置range为quote
	var editor=this;if($quote){editor.restoreSelectionByElem($quote.get(0));}}// 执行自定义命令
	editor.customCommand(e,commandFn,callback);};// 定义选中状态下的click事件
	menu.clickEventSelected=function(e){var rangeElem;var quoteElem;var $lastChild;// 获取当前选区的elem，并试图往上找 quote 元素
	rangeElem=editor.getRangeElem();quoteElem=editor.getSelfOrParentByName(rangeElem,'blockquote');if(!quoteElem){// 没找到，则返回
	e.preventDefault();return;}// 自定义的command事件
	function commandFn(){var $quoteElem;var $children;$quoteElem=$(quoteElem);$children=$quoteElem.children();if($children.length){$children.each(function(k){var $item=$(this);if($item.get(0).nodeName==='P'){$quoteElem.after($item);}else{$quoteElem.after('<p>'+$item.text()+'</p>');}$lastChild=$item;// 记录最后一个子元素，用于callback中的range定位
	});$quoteElem.remove();return;}}// 自定义的callback函数
	function callback(){// callback中，设置range为lastChild
	var editor=this;if($lastChild){editor.restoreSelectionByElem($lastChild.get(0));}}// 执行自定义命令
	editor.customCommand(e,commandFn,callback);};// 定义更新选中状态的事件
	menu.updateSelectedEvent=function(){var self=this;//菜单对象
	var editor=self.editor;var rangeElem;rangeElem=editor.getRangeElem();rangeElem=editor.getSelfOrParentByName(rangeElem,'blockquote');if(rangeElem){return true;}return false;};// 增加到editor对象中
	editor.menus[menuId]=menu;// --------------- 两次点击 enter 跳出引用 ---------------
	editor.ready(function(){var editor=this;var $txt=editor.txt.$txt;var isPrevEnter=false;// 是不是刚刚在quote中按了 enter 键
	$txt.on('keydown',function(e){if(e.keyCode!==13){// 不是 enter 键
	isPrevEnter=false;return;}var rangeElem=editor.getRangeElem();rangeElem=editor.getSelfOrParentByName(rangeElem,'blockquote');if(!rangeElem){// 选区不是 quote
	isPrevEnter=false;return;}if(!isPrevEnter){// 最近没有在qote中按enter键
	isPrevEnter=true;return;}var currentRangeElem=editor.getRangeElem();var $currentRangeElem=$(currentRangeElem);if($currentRangeElem.length){$currentRangeElem.parent().after($currentRangeElem);}// 设置选区
	editor.restoreSelectionByElem(currentRangeElem,'start');isPrevEnter=false;// 阻止默认行文
	e.preventDefault();});});// editor.ready(
	// --------------- 处理quote中无内容时不能删除的问题 ---------------
	editor.ready(function(){var editor=this;var $txt=editor.txt.$txt;var $rangeElem;function commandFn(){$rangeElem&&$rangeElem.remove();}function callback(){if(!$rangeElem){return;}var $prev=$rangeElem.prev();if($prev.length){// 有 prev 则定位到 prev 最后
	editor.restoreSelectionByElem($prev.get(0));}else{// 无 prev 则初始化选区
	editor.initSelection();}}$txt.on('keydown',function(e){if(e.keyCode!==8){// 不是 backspace 键
	return;}var rangeElem=editor.getRangeElem();rangeElem=editor.getSelfOrParentByName(rangeElem,'blockquote');if(!rangeElem){// 选区不是 quote
	return;}$rangeElem=$(rangeElem);var text=$rangeElem.text();if(text){// quote 中还有内容
	return;}editor.customCommand(e,commandFn,callback);});// $txt.on
	});// editor.ready(
	});});// 字体 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='fontfamily';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;var configFamilys=editor.config.familys;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.fontfamily,commandName:'fontName'});// 初始化数据
	var data={};/*
	            data 需要的结构
	            {
	                'commandValue': 'title'
	                ...
	            }
	        */$.each(configFamilys,function(k,v){// configFamilys 是数组，data 是对象
	data[v]=v;});// 创建droplist
	var tpl='<span style="font-family:{#commandValue};">{#title}</span>';menu.dropList=new E.DropList(editor,menu,{data:data,tpl:tpl,selectorForELemCommand:'font[face]'// 为了执行 editor.commandForElem 而传入的elem查询方式
	});// 定义 update selected 事件
	menu.updateSelectedEvent=function(){var rangeElem=editor.getRangeElem();rangeElem=editor.getSelfOrParentByName(rangeElem,'font[face]');if(rangeElem){return true;}return false;};// 增加到editor对象中
	editor.menus[menuId]=menu;});});// 字号 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='fontsize';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;var configSize=editor.config.fontsizes;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.fontsize,commandName:'fontSize'});// 初始化数据
	var data=configSize;/*
	            data 需要的结构
	            {
	                'commandValue': 'title'
	                ...
	            }
	        */// 创建droplist
	var tpl='<span style="font-size:{#title};">{#title}</span>';menu.dropList=new E.DropList(editor,menu,{data:data,tpl:tpl,selectorForELemCommand:'font[size]'// 为了执行 editor.commandForElem 而传入的elem查询方式
	});// 定义 update selected 事件
	menu.updateSelectedEvent=function(){var rangeElem=editor.getRangeElem();rangeElem=editor.getSelfOrParentByName(rangeElem,'font[size]');if(rangeElem){return true;}return false;};// 增加到editor对象中
	editor.menus[menuId]=menu;});});// head 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='head';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.head,commandName:'formatBlock'});// 初始化数据
	var data={'<h1>':'标题1','<h2>':'标题2','<h3>':'标题3','<h4>':'标题4','<h5>':'标题5'};/*
	            data 需要的结构
	            {
	                'commandValue': 'title'
	                ...
	            }
	        */var isOrderedList;function beforeEvent(e){if(editor.queryCommandState('InsertOrderedList')){isOrderedList=true;// 先取消有序列表
	editor.command(e,'InsertOrderedList');}else{isOrderedList=false;}}function afterEvent(e){if(isOrderedList){// 再设置有序列表
	editor.command(e,'InsertOrderedList');}}// 创建droplist
	var tpl='{#commandValue}{#title}';menu.dropList=new E.DropList(editor,menu,{data:data,tpl:tpl,// 对 ol 直接设置 head，会出现每个 li 的 index 都变成 1 的问题，因此要先取消 ol，然后设置 head，最后再增加上 ol
	beforeEvent:beforeEvent,afterEvent:afterEvent});// 定义 update selected 事件
	menu.updateSelectedEvent=function(){var rangeElem=editor.getRangeElem();rangeElem=editor.getSelfOrParentByName(rangeElem,'h1,h2,h3,h4,h5');if(rangeElem){return true;}return false;};// 增加到editor对象中
	editor.menus[menuId]=menu;});});// unorderlist 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='unorderlist';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.unorderlist,commandName:'InsertUnorderedList'});// 增加到editor对象中
	editor.menus[menuId]=menu;});});// orderlist 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='orderlist';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.orderlist,commandName:'InsertOrderedList'});// 增加到editor对象中
	editor.menus[menuId]=menu;});});// alignleft 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='alignleft';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.alignleft,commandName:'JustifyLeft'});// 定义 update selected 事件
	menu.updateSelectedEvent=function(){var rangeElem=editor.getRangeElem();rangeElem=editor.getSelfOrParentByName(rangeElem,'p,h1,h2,h3,h4,h5,li',function(elem){var cssText;if(elem&&elem.style&&elem.style.cssText!=null){cssText=elem.style.cssText;if(cssText&&/text-align:\s*left;/.test(cssText)){return true;}}if($(elem).attr('align')==='left'){// ff 中，设置align-left之后，会是 <p align="left">xxx</p>
	return true;}return false;});if(rangeElem){return true;}return false;};// 增加到editor对象中
	editor.menus[menuId]=menu;});});// aligncenter 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='aligncenter';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.aligncenter,commandName:'JustifyCenter'});// 定义 update selected 事件
	menu.updateSelectedEvent=function(){var rangeElem=editor.getRangeElem();rangeElem=editor.getSelfOrParentByName(rangeElem,'p,h1,h2,h3,h4,h5,li',function(elem){var cssText;if(elem&&elem.style&&elem.style.cssText!=null){cssText=elem.style.cssText;if(cssText&&/text-align:\s*center;/.test(cssText)){return true;}}if($(elem).attr('align')==='center'){// ff 中，设置align-center之后，会是 <p align="center">xxx</p>
	return true;}return false;});if(rangeElem){return true;}return false;};// 增加到editor对象中
	editor.menus[menuId]=menu;});});// alignright 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='alignright';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.alignright,commandName:'JustifyRight'});// 定义 update selected 事件
	menu.updateSelectedEvent=function(){var rangeElem=editor.getRangeElem();rangeElem=editor.getSelfOrParentByName(rangeElem,'p,h1,h2,h3,h4,h5,li',function(elem){var cssText;if(elem&&elem.style&&elem.style.cssText!=null){cssText=elem.style.cssText;if(cssText&&/text-align:\s*right;/.test(cssText)){return true;}}if($(elem).attr('align')==='right'){// ff 中，设置align-right之后，会是 <p align="right">xxx</p>
	return true;}return false;});if(rangeElem){return true;}return false;};// 增加到editor对象中
	editor.menus[menuId]=menu;});});// link 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='link';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.link});// 创建 dropPanel
	var $content=$('<div></div>');var $div1=$('<div style="margin:20px 10px;" class="clearfix"></div>');var $div2=$div1.clone();var $div3=$div1.clone().css('margin','0 10px');var $textInput=$('<input type="text" class="block" placeholder="'+lang.text+'"/>');var $urlInput=$('<input type="text" class="block" placeholder="'+lang.link+'"/>');var $btnSubmit=$('<button class="right">'+lang.submit+'</button>');var $btnCancel=$('<button class="right gray">'+lang.cancel+'</button>');$div1.append($textInput);$div2.append($urlInput);$div3.append($btnSubmit).append($btnCancel);$content.append($div1).append($div2).append($div3);menu.dropPanel=new E.DropPanel(editor,menu,{$content:$content,width:300});// 定义click事件
	menu.clickEvent=function(e){var menu=this;var dropPanel=menu.dropPanel;// -------------隐藏----------------
	if(dropPanel.isShowing){dropPanel.hide();return;}// -------------显示----------------
	// 重置 input
	$textInput.val('');$urlInput.val('http://');// 获取url
	var url='';var rangeElem=editor.getRangeElem();rangeElem=editor.getSelfOrParentByName(rangeElem,'a');if(rangeElem){url=rangeElem.href||'';}// 获取 text
	var text='';var isRangeEmpty=editor.isRangeEmpty();if(!isRangeEmpty){// 选区不是空
	text=editor.getRangeText()||'';}else if(rangeElem){// 如果选区空，并且在 a 标签之内
	text=rangeElem.textContent||rangeElem.innerHTML;}// 设置 url 和 text
	url&&$urlInput.val(url);text&&$textInput.val(text);// 如果有选区内容，textinput 不能修改
	if(!isRangeEmpty){$textInput.attr('disabled',true);}else{$textInput.removeAttr('disabled');}// 显示（要设置好了所有input的值和属性之后再显示）
	dropPanel.show();};// 定义 update selected 事件
	menu.updateSelectedEvent=function(){var rangeElem=editor.getRangeElem();rangeElem=editor.getSelfOrParentByName(rangeElem,'a');if(rangeElem){return true;}return false;};// 『取消』 按钮
	$btnCancel.click(function(e){e.preventDefault();menu.dropPanel.hide();});// 『确定』按钮
	$btnSubmit.click(function(e){e.preventDefault();var rangeElem=editor.getRangeElem();var targetElem=editor.getSelfOrParentByName(rangeElem,'a');var isRangeEmpty=editor.isRangeEmpty();var $linkElem,linkHtml;var commandFn,callback;var $txt=editor.txt.$txt;var $oldLinks,$newLinks;var uniqId='link'+E.random();// 获取数据
	var url=$.trim($urlInput.val());var text=$.trim($textInput.val());if(!url){menu.dropPanel.focusFirstInput();return;}if(!text){text=url;}if(!isRangeEmpty){// 选中区域有内容，则执行默认命令
	// 获取目前 txt 内所有链接，并为当前链接做一个标记
	$oldLinks=$txt.find('a');$oldLinks.attr(uniqId,'1');// 执行命令 
	editor.command(e,'createLink',url);// 去的没有标记的链接，即刚刚插入的链接
	$newLinks=$txt.find('a').not('['+uniqId+']');$newLinks.attr('target','_blank');// 增加 _blank
	// 去掉之前做的标记
	$oldLinks.removeAttr(uniqId);}else if(targetElem){// 无选中区域，在 a 标签之内，修改该 a 标签的内容和链接
	$linkElem=$(targetElem);commandFn=function commandFn(){$linkElem.attr('href',url);$linkElem.text(text);};callback=function callback(){var editor=this;editor.restoreSelectionByElem(targetElem);};// 执行命令
	editor.customCommand(e,commandFn,callback);}else{// 无选中区域，不在 a 标签之内，插入新的链接
	linkHtml='<a href="'+url+'" target="_blank">'+text+'</a>';if(E.userAgent.indexOf('Firefox')>0){linkHtml+='<span>&nbsp;</span>';}editor.command(e,'insertHtml',linkHtml);}});// 增加到editor对象中
	editor.menus[menuId]=menu;});});// unlink 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='unlink';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.unlink,commandName:'unLink'});// click 事件
	menu.clickEvent=function(e){var isRangeEmpty=editor.isRangeEmpty();if(!isRangeEmpty){// 有选中区域，或者IE8，执行默认命令
	editor.command(e,'unLink');return;}// 无选中区域...
	var rangeElem=editor.getRangeElem();var aElem=editor.getSelfOrParentByName(rangeElem,'a');if(!aElem){// 不在 a 之内，返回
	e.preventDefault();return;}// 在 a 之内
	var $a=$(aElem);var $span=$('<span>'+$a.text()+'</span>');function commandFn(){$a.after($span).remove();}function callback(){editor.restoreSelectionByElem($span.get(0));}editor.customCommand(e,commandFn,callback);};// 增加到editor对象中
	editor.menus[menuId]=menu;});});// table 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='table';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.table});// dropPanel 内容
	var $content=$('<div style="font-size: 14px; color: #666; text-align:right;"></div>');var $table=$('<table class="choose-table" style="margin-bottom:10px;margin-top:5px;">');var $row=$('<span>0</span>');var $rowspan=$('<span> 行 </span>');var $col=$('<span>0</span>');var $colspan=$('<span> 列</span>');var $tr;var i,j;// 创建一个n行n列的表格
	for(i=0;i<15;i++){$tr=$('<tr index="'+(i+1)+'">');for(j=0;j<20;j++){$tr.append($('<td index="'+(j+1)+'">'));}$table.append($tr);}$content.append($table);$content.append($row).append($rowspan).append($col).append($colspan);// 定义table事件
	$table.on('mouseenter','td',function(e){var $currentTd=$(e.currentTarget);var currentTdIndex=$currentTd.attr('index');var $currentTr=$currentTd.parent();var currentTrIndex=$currentTr.attr('index');// 显示
	$row.text(currentTrIndex);$col.text(currentTdIndex);// 遍历设置背景颜色
	$table.find('tr').each(function(){var $tr=$(this);var trIndex=$tr.attr('index');if(parseInt(trIndex,10)<=parseInt(currentTrIndex,10)){// 该行需要可能需要设置背景色
	$tr.find('td').each(function(){var $td=$(this);var tdIndex=$td.attr('index');if(parseInt(tdIndex,10)<=parseInt(currentTdIndex,10)){// 需要设置背景色
	$td.addClass('active');}else{// 需要移除背景色
	$td.removeClass('active');}});}else{// 改行不需要设置背景色
	$tr.find('td').removeClass('active');}});}).on('mouseleave',function(e){// mouseleave 删除背景色
	$table.find('td').removeClass('active');$row.text(0);$col.text(0);});// 插入表格
	$table.on('click','td',function(e){var $currentTd=$(e.currentTarget);var currentTdIndex=$currentTd.attr('index');var $currentTr=$currentTd.parent();var currentTrIndex=$currentTr.attr('index');var rownum=parseInt(currentTrIndex,10);var colnum=parseInt(currentTdIndex,10);// -------- 拼接tabel html --------
	var i,j;var tableHtml='<table>';for(i=0;i<rownum;i++){tableHtml+='<tr>';for(j=0;j<colnum;j++){tableHtml+='<td><span>&nbsp;</span></td>';}tableHtml+='</tr>';}tableHtml+='</table>';// -------- 执行命令 --------
	editor.command(e,'insertHtml',tableHtml);});// 创建 panel
	menu.dropPanel=new E.DropPanel(editor,menu,{$content:$content,width:262});// 增加到editor对象中
	editor.menus[menuId]=menu;});});// emotion 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='emotion';if(!check(menuId)){return;}var editor=this;var config=editor.config;var lang=config.lang;var configEmotions=config.emotions;var emotionsShow=config.emotionsShow;// 记录每一个表情图片的地址
	editor.emotionUrls=[];// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.emotion});// 添加表情图片的函数
	function insertEmotionImgs(data,$tabContent){// 添加表情图片
	$.each(data,function(k,emotion){var src=emotion.icon||emotion.url;var value=emotion.value||emotion.title;// 通过配置 editor.config.emotionsShow 的值来修改插入到编辑器的内容（图片/value）
	var commandValue=emotionsShow==='icon'?src:value;var $command=$('<a href="#" commandValue="'+commandValue+'"></a>');var $img=$('<img>');$img.attr('_src',src);// 先将 src 复制到 '_src' 属性，先不加载
	$command.append($img);$tabContent.append($command);// 记录下每一个表情图片的地址
	editor.emotionUrls.push(src);});}// 拼接 dropPanel 内容
	var $panelContent=$('<div class="panel-tab"></div>');var $tabContainer=$('<div class="tab-container"></div>');var $contentContainer=$('<div class="content-container emotion-content-container"></div>');$.each(configEmotions,function(k,emotion){var title=emotion.title;var data=emotion.data;E.log('正在处理 '+title+' 表情的数据...');// 增加该组表情的tab和content
	var $tab=$('<a href="#">'+title+' </a>');$tabContainer.append($tab);var $tabContent=$('<div class="content"></div>');$contentContainer.append($tabContent);// tab 切换事件
	$tab.click(function(e){$tabContainer.children().removeClass('selected');$contentContainer.children().removeClass('selected');$tabContent.addClass('selected');$tab.addClass('selected');e.preventDefault();});// 处理data
	if(typeof data==='string'){// url 形式，需要通过ajax从该url获取数据
	E.log('将通过 '+data+' 地址ajax下载表情包');$.get(data,function(result){result=$.parseJSON(result);E.log('下载完毕，得到 '+result.length+' 个表情');insertEmotionImgs(result,$tabContent);});}else if(Object.prototype.toString.call(data).toLowerCase().indexOf('array')>0){// 数组，即 data 直接就是表情包数据
	insertEmotionImgs(data,$tabContent);}else{// 其他情况，data格式不对
	E.error('data 数据格式错误，请修改为正确格式，参考文档：'+E.docsite);return;}});$panelContent.append($tabContainer).append($contentContainer);// 默认显示第一个tab
	$tabContainer.children().first().addClass('selected');$contentContainer.children().first().addClass('selected');// 插入表情command事件
	$contentContainer.on('click','a[commandValue]',function(e){var $a=$(e.currentTarget);var commandValue=$a.attr('commandValue');var img;// commandValue 有可能是图片url，也有可能是表情的 value，需要区别对待
	if(emotionsShow==='icon'){// 插入图片
	editor.command(e,'InsertImage',commandValue);}else{// 插入value
	editor.command(e,'insertHtml','<span>'+commandValue+'</span>');}e.preventDefault();});// 添加panel
	menu.dropPanel=new E.DropPanel(editor,menu,{$content:$panelContent,width:350});// 定义click事件（异步加载表情图片）
	menu.clickEvent=function(e){var menu=this;var dropPanel=menu.dropPanel;// -------------隐藏-------------
	if(dropPanel.isShowing){dropPanel.hide();return;}// -------------显示-------------
	dropPanel.show();// 异步加载图片
	if(menu.imgLoaded){return;}$contentContainer.find('img').each(function(){var $img=$(this);var _src=$img.attr('_src');$img.on('error',function(){E.error('加载不出表情图片 '+_src);});$img.attr('src',_src);$img.removeAttr('_src');});menu.imgLoaded=true;};// 增加到editor对象中
	editor.menus[menuId]=menu;});});// img 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='img';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.img});// 创建 panel content
	var $panelContent=$('<div class="panel-tab"></div>');var $tabContainer=$('<div class="tab-container"></div>');var $contentContainer=$('<div class="content-container"></div>');$panelContent.append($tabContainer).append($contentContainer);// tab
	var $uploadTab=$('<a href="#">上传图片</a>');var $linkTab=$('<a href="#">网络图片</a>');$tabContainer.append($uploadTab).append($linkTab);// 上传图片 content
	var $uploadContent=$('<div class="content"></div>');$contentContainer.append($uploadContent);// 网络图片 content
	var $linkContent=$('<div class="content"></div>');$contentContainer.append($linkContent);linkContentHandler(editor,menu,$linkContent);// 添加panel
	menu.dropPanel=new E.DropPanel(editor,menu,{$content:$panelContent,width:400,onRender:function onRender(){// 渲染后的回调事件，用于执行自定义上传的init
	// 因为渲染之后，上传面板的dom才会被渲染到页面，才能让第三方空间获取到
	var init=editor.config.customUploadInit;init&&init.call(editor);}});// 增加到editor对象中
	editor.menus[menuId]=menu;// tab 切换事件
	function tabToggle(){$uploadTab.click(function(e){$tabContainer.children().removeClass('selected');$contentContainer.children().removeClass('selected');$uploadContent.addClass('selected');$uploadTab.addClass('selected');e.preventDefault();});$linkTab.click(function(e){$tabContainer.children().removeClass('selected');$contentContainer.children().removeClass('selected');$linkContent.addClass('selected');$linkTab.addClass('selected');e.preventDefault();// focus input
	if(E.placeholder){$linkContent.find('input[type=text]').focus();}});// 默认情况
	// $uploadTab.addClass('selected');
	// $uploadContent.addClass('selected');
	$uploadTab.click();}// 隐藏上传图片
	function hideUploadImg(){$tabContainer.remove();$uploadContent.remove();$linkContent.addClass('selected');}// 隐藏网络图片
	function hideLinkImg(){$tabContainer.remove();$linkContent.remove();$uploadContent.addClass('selected');}// 判断用户是否配置了上传图片
	editor.ready(function(){var editor=this;var config=editor.config;var uploadImgUrl=config.uploadImgUrl;var customUpload=config.customUpload;var linkImg=config.hideLinkImg;var $uploadImgPanel;if(uploadImgUrl||customUpload){// 第一，暴露出 $uploadContent 以便用户自定义 ！！！重要
	editor.$uploadContent=$uploadContent;// 第二，绑定tab切换事件
	tabToggle();if(linkImg){// 隐藏网络图片
	hideLinkImg();}}else{// 未配置上传图片功能
	hideUploadImg();}// 点击 $uploadContent 立即隐藏 dropPanel
	// 为了兼容IE8、9的上传，因为IE8、9使用 modal 上传
	// 这里使用异步，为了不妨碍高级浏览器通过点击 $uploadContent 选择文件
	function hidePanel(){menu.dropPanel.hide();}$uploadContent.click(function(){setTimeout(hidePanel);});});});// --------------- 处理网络图片content ---------------
	function linkContentHandler(editor,menu,$linkContent){var lang=editor.config.lang;var $urlContainer=$('<div style="margin:20px 10px 10px 10px;"></div>');var $urlInput=$('<input type="text" class="block" placeholder="http://"/>');$urlContainer.append($urlInput);var $btnSubmit=$('<button class="right">'+lang.submit+'</button>');var $btnCancel=$('<button class="right gray">'+lang.cancel+'</button>');$linkContent.append($urlContainer).append($btnSubmit).append($btnCancel);// 取消
	$btnCancel.click(function(e){e.preventDefault();menu.dropPanel.hide();});// callback 
	function callback(){$urlInput.val('');}// 确定
	$btnSubmit.click(function(e){e.preventDefault();var url=$.trim($urlInput.val());if(!url){// 无内容
	$urlInput.focus();return;}var imgHtml='<img style="max-width:100%;" src="'+url+'"/>';editor.command(e,'insertHtml',imgHtml,callback);});}});// video 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='video';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;var reg=/^<(iframe)|(embed)/i;// <iframe... 或者 <embed... 格式
	// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.video});// 创建 panel 内容
	var $content=$('<div></div>');var $linkInputContainer=$('<div style="margin:20px 10px;"></div>');var $linkInput=$('<input type="text" class="block" placeholder=\'格式如：<iframe src="..." frameborder=0 allowfullscreen></iframe>\'/>');$linkInputContainer.append($linkInput);var $sizeContainer=$('<div style="margin:20px 10px;"></div>');var $widthInput=$('<input type="text" value="640" style="width:50px;text-align:center;"/>');var $heightInput=$('<input type="text" value="498" style="width:50px;text-align:center;"/>');$sizeContainer.append('<span> '+lang.width+' </span>').append($widthInput).append('<span> px &nbsp;&nbsp;&nbsp;</span>').append('<span> '+lang.height+' </span>').append($heightInput).append('<span> px </span>');var $btnContainer=$('<div></div>');var $howToCopy=$('<a href="http://www.kancloud.cn/wangfupeng/wangeditor2/134973" target="_blank" style="display:inline-block;margin-top:10px;margin-left:10px;color:#999;">如何复制视频链接？</a>');var $btnSubmit=$('<button class="right">'+lang.submit+'</button>');var $btnCancel=$('<button class="right gray">'+lang.cancel+'</button>');$btnContainer.append($howToCopy).append($btnSubmit).append($btnCancel);$content.append($linkInputContainer).append($sizeContainer).append($btnContainer);// 取消按钮
	$btnCancel.click(function(e){e.preventDefault();$linkInput.val('');menu.dropPanel.hide();});// 确定按钮
	$btnSubmit.click(function(e){e.preventDefault();var link=$.trim($linkInput.val());var $link;var width=parseInt($widthInput.val());var height=parseInt($heightInput.val());var $div=$('<div>');var html='<p>{content}</p>';// 验证数据
	if(!link){menu.dropPanel.focusFirstInput();return;}if(!reg.test(link)){alert('视频链接格式错误！');menu.dropPanel.focusFirstInput();return;}if(isNaN(width)||isNaN(height)){alert('宽度或高度不是数字！');return;}$link=$(link);// 设置高度和宽度
	$link.attr('width',width).attr('height',height);// 拼接字符串
	html=html.replace('{content}',$div.append($link).html());// 执行命令
	editor.command(e,'insertHtml',html);$linkInput.val('');});// 创建panel
	menu.dropPanel=new E.DropPanel(editor,menu,{$content:$content,width:400});// 增加到editor对象中
	editor.menus[menuId]=menu;});});// location 菜单
	_e(function(E,$){// 判断浏览器的 input 是否支持 keyup
	var inputKeyup=function(input){return'onkeyup'in input;}(document.createElement('input'));// 百度地图的key
	E.baiduMapAk='TVhjYjq1ICT2qqL5LdS8mwas';// 一个页面中，如果有多个编辑器，地图会出现问题。这个参数记录一下，如果超过 1 就提示
	E.numberOfLocation=0;E.createMenu(function(check){var menuId='location';if(!check(menuId)){return;}if(++E.numberOfLocation>1){E.error('目前不支持在一个页面多个编辑器上同时使用地图，可通过自定义菜单配置去掉地图菜单');return;}var editor=this;var config=editor.config;var lang=config.lang;var ak=config.mapAk;// 地图的变量存储到这个地方
	editor.mapData={};var mapData=editor.mapData;// ---------- 地图事件 ----------
	mapData.markers=[];mapData.mapContainerId='map'+E.random();mapData.clearLocations=function(){var map=mapData.map;if(!map){return;}map.clearOverlays();//同时，清空marker数组
	mapData.markers=[];};mapData.searchMap=function(){var map=mapData.map;if(!map){return;}var BMap=window.BMap;var cityName=$cityInput.val();var locationName=$searchInput.val();var myGeo,marker;if(cityName!==''){if(!locationName||locationName===''){map.centerAndZoom(cityName,11);}//地址解析
	if(locationName&&locationName!==''){myGeo=new BMap.Geocoder();// 将地址解析结果显示在地图上,并调整地图视野
	myGeo.getPoint(locationName,function(point){if(point){map.centerAndZoom(point,13);marker=new BMap.Marker(point);map.addOverlay(marker);marker.enableDragging();//允许拖拽
	mapData.markers.push(marker);//将marker加入到数组中
	}else{// alert('未找到');
	map.centerAndZoom(cityName,11);//找不到则重新定位到城市
	}},cityName);}}// if(cityName !== '')
	};// load script 之后的 callback
	var hasCallback=false;window.baiduMapCallBack=function(){// 避免重复加载
	if(hasCallback){return;}else{hasCallback=true;}var BMap=window.BMap;if(!mapData.map){// 创建Map实例
	mapData.map=new BMap.Map(mapData.mapContainerId);}var map=mapData.map;map.centerAndZoom(new BMap.Point(116.404,39.915),11);// 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl());//添加地图类型控件
	map.setCurrentCity("北京");// 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);//开启鼠标滚轮缩放
	//根据IP定位
	function locationFun(result){var cityName=result.name;map.setCenter(cityName);// 设置城市名称
	$cityInput.val(cityName);if(E.placeholder){$searchInput.focus();}var timeoutId,_searchFn;if(inputKeyup){// 并绑定搜索事件 - input 支持 keyup
	_searchFn=function searchFn(e){if(e.type==='keyup'&&e.keyCode===13){e.preventDefault();}if(timeoutId){clearTimeout(timeoutId);}timeoutId=setTimeout(mapData.searchMap,500);};$cityInput.on('keyup change paste',_searchFn);$searchInput.on('keyup change paste',_searchFn);}else{// 并绑定搜索事件 - input 不支持 keyup
	_searchFn=function searchFn(){if(!$content.is(':visible')){// panel 不显示了，就不用再监控了
	clearTimeout(timeoutId);return;}var currentCity='';var currentSearch='';var city=$cityInput.val();var search=$searchInput.val();if(city!==currentCity||search!==currentSearch){// 刚获取的数据和之前的数据不一致，执行查询
	mapData.searchMap();// 更新数据
	currentCity=city;currentSearch=search;}// 继续监控
	if(timeoutId){clearTimeout(timeoutId);}timeoutId=setTimeout(_searchFn,1000);};// 开始监控
	timeoutId=setTimeout(_searchFn,1000);}}var myCity=new BMap.LocalCity();myCity.get(locationFun);//鼠标点击，创建位置
	map.addEventListener("click",function(e){var marker=new BMap.Marker(new BMap.Point(e.point.lng,e.point.lat));map.addOverlay(marker);marker.enableDragging();mapData.markers.push(marker);//加入到数组中
	},false);};mapData.loadMapScript=function(){var script=document.createElement("script");script.type="text/javascript";script.src="https://api.map.baidu.com/api?v=2.0&ak="+ak+"&s=1&callback=baiduMapCallBack";// baiduMapCallBack是一个本地函数
	try{// IE10- 报错
	document.body.appendChild(script);}catch(ex){E.error('加载地图过程中发生错误');}};// 初始化地图
	mapData.initMap=function(){if(window.BMap){// 不是第一次，直接处理地图即可
	window.baiduMapCallBack();}else{// 第一次，先加载地图 script，再处理地图（script加载完自动执行处理）
	mapData.loadMapScript();}};// ---------- 创建 menu 对象 ----------
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.location});editor.menus[menuId]=menu;// ---------- 构建UI ----------
	// panel content 
	var $content=$('<div></div>');// 搜索框
	var $inputContainer=$('<div style="margin:10px 0;"></div>');var $cityInput=$('<input type="text"/>');$cityInput.css({width:'80px','text-align':'center'});var $searchInput=$('<input type="text"/>');$searchInput.css({width:'300px','margin-left':'10px'}).attr('placeholder',lang.searchlocation);var $clearBtn=$('<button class="right link">'+lang.clearLocation+'</button>');$inputContainer.append($clearBtn).append($cityInput).append($searchInput);$content.append($inputContainer);// 清除位置按钮
	$clearBtn.click(function(e){$searchInput.val('');$searchInput.focus();mapData.clearLocations();e.preventDefault();});// 地图
	var $map=$('<div id="'+mapData.mapContainerId+'"></div>');$map.css({height:'260px',width:'100%',position:'relative','margin-top':'10px',border:'1px solid #f1f1f1'});var $mapLoading=$('<span>'+lang.loading+'</span>');$mapLoading.css({position:'absolute',width:'100px','text-align':'center',top:'45%',left:'50%','margin-left':'-50px'});$map.append($mapLoading);$content.append($map);// 按钮
	var $btnContainer=$('<div style="margin:10px 0;"></div>');var $btnSubmit=$('<button class="right">'+lang.submit+'</button>');var $btnCancel=$('<button class="right gray">'+lang.cancel+'</button>');var $checkLabel=$('<label style="display:inline-block;margin-top:10px;color:#666;"></label>');var $check=$('<input type="checkbox">');$checkLabel.append($check).append('<span style="display:inline-block;margin-left:5px;">  '+lang.dynamicMap+'</span>');$btnContainer.append($checkLabel).append($btnSubmit).append($btnCancel);$content.append($btnContainer);function callback(){$searchInput.val('');}// 『取消』按钮事件
	$btnCancel.click(function(e){e.preventDefault();callback();menu.dropPanel.hide();});// 『确定』按钮事件
	$btnSubmit.click(function(e){e.preventDefault();var map=mapData.map,isDynamic=$check.is(':checked'),markers=mapData.markers,center=map.getCenter(),centerLng=center.lng,centerLat=center.lat,zoom=map.getZoom(),size=map.getSize(),sizeWidth=size.width,sizeHeight=size.height,position,src,iframe;if(isDynamic){//动态地址
	src='http://ueditor.baidu.com/ueditor/dialogs/map/show.html#';}else{//静态地址
	src='http://api.map.baidu.com/staticimage?';}//src参数
	src=src+'center='+centerLng+','+centerLat+'&zoom='+zoom+'&width='+sizeWidth+'&height='+sizeHeight;if(markers.length>0){src=src+'&markers=';//添加所有的marker
	$.each(markers,function(key,value){position=value.getPosition();if(key>0){src=src+'|';}src=src+position.lng+','+position.lat;});}if(isDynamic){if(markers.length>1){alert(lang.langDynamicOneLocation);return;}src+='&markerStyles=l,A';//插入iframe
	iframe='<iframe class="ueditor_baidumap" src="{src}" frameborder="0" width="'+sizeWidth+'" height="'+sizeHeight+'"></iframe>';iframe=iframe.replace('{src}',src);editor.command(e,'insertHtml',iframe,callback);}else{//插入图片
	editor.command(e,'insertHtml','<img style="max-width:100%;" src="'+src+'"/>',callback);}});// 根据 UI 创建菜单 panel
	menu.dropPanel=new E.DropPanel(editor,menu,{$content:$content,width:500});// ---------- 事件 ----------
	// render 时执行事件
	menu.onRender=function(){if(ak===E.baiduMapAk){E.warn('建议在配置中自定义百度地图的mapAk，否则可能影响地图功能，文档：'+E.docsite);}};// click 事件
	menu.clickEvent=function(e){var menu=this;var dropPanel=menu.dropPanel;var firstTime=false;// -------------隐藏-------------
	if(dropPanel.isShowing){dropPanel.hide();return;}// -------------显示-------------
	if(!mapData.map){// 第一次，先加载地图
	firstTime=true;}dropPanel.show();mapData.initMap();if(!firstTime){$searchInput.focus();}};});});// insertcode 菜单
	_e(function(E,$){// 加载 highlightjs 代码
	function loadHljs(){if(E.userAgent.indexOf('MSIE 8')>0){// 不支持 IE8
	return;}if(window.hljs){// 不要重复加载
	return;}var script=document.createElement("script");script.type="text/javascript";script.src="//cdn.bootcss.com/highlight.js/9.2.0/highlight.min.js";document.body.appendChild(script);}E.createMenu(function(check){var menuId='insertcode';if(!check(menuId)){return;}// 加载 highlightjs 代码
	setTimeout(loadHljs,0);var editor=this;var config=editor.config;var lang=config.lang;var $txt=editor.txt.$txt;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.insertcode});// click 事件
	menu.clickEvent=function(e){var menu=this;var dropPanel=menu.dropPanel;// 隐藏
	if(dropPanel.isShowing){dropPanel.hide();return;}// 显示
	$textarea.val('');dropPanel.show();// highlightjs 语言列表
	var hljs=window.hljs;if(hljs&&hljs.listLanguages){if($langSelect.children().length!==0){return;}$langSelect.css({'margin-top':'9px','margin-left':'5px'});$.each(hljs.listLanguages(),function(key,lang){if(lang==='xml'){lang='html';}if(lang===config.codeDefaultLang){$langSelect.append('<option value="'+lang+'" selected="selected">'+lang+'</option>');}else{$langSelect.append('<option value="'+lang+'">'+lang+'</option>');}});}else{$langSelect.hide();}};// 选中状态下的 click 事件
	menu.clickEventSelected=function(e){var menu=this;var dropPanel=menu.dropPanel;// 隐藏
	if(dropPanel.isShowing){dropPanel.hide();return;}// 显示
	dropPanel.show();var rangeElem=editor.getRangeElem();var targetElem=editor.getSelfOrParentByName(rangeElem,'pre');var $targetElem;var className;if(targetElem){// 确定找到 pre 之后，再找 code
	targetElem=editor.getSelfOrParentByName(rangeElem,'code');}if(!targetElem){return;}$targetElem=$(targetElem);// 赋值内容
	$textarea.val($targetElem.text());if($langSelect){// 赋值语言
	className=$targetElem.attr('class');if(className){$langSelect.val(className.split(' ')[0]);}}};// 定义更新选中状态的事件
	menu.updateSelectedEvent=function(){var self=this;//菜单对象
	var editor=self.editor;var rangeElem;rangeElem=editor.getRangeElem();rangeElem=editor.getSelfOrParentByName(rangeElem,'pre');if(rangeElem){return true;}return false;};// 创建 panel
	var $content=$('<div></div>');var $textarea=$('<textarea></textarea>');var $langSelect=$('<select></select>');contentHandle($content);menu.dropPanel=new E.DropPanel(editor,menu,{$content:$content,width:500});// 增加到editor对象中
	editor.menus[menuId]=menu;// ------ 增加 content 内容 ------
	function contentHandle($content){// textarea 区域
	var $textareaContainer=$('<div></div>');$textareaContainer.css({margin:'15px 5px 5px 5px',height:'160px','text-align':'center'});$textarea.css({width:'100%',height:'100%',padding:'10px'});$textarea.on('keydown',function(e){// 取消 tab 键默认行为
	if(e.keyCode===9){e.preventDefault();}});$textareaContainer.append($textarea);$content.append($textareaContainer);// 按钮区域
	var $btnContainer=$('<div></div>');var $btnSubmit=$('<button class="right">'+lang.submit+'</button>');var $btnCancel=$('<button class="right gray">'+lang.cancel+'</button>');$btnContainer.append($btnSubmit).append($btnCancel).append($langSelect);$content.append($btnContainer);// 取消按钮
	$btnCancel.click(function(e){e.preventDefault();menu.dropPanel.hide();});// 确定按钮
	var codeTpl='<pre style="max-width:100%;overflow-x:auto;"><code{#langClass}>{#content}</code></pre>';$btnSubmit.click(function(e){e.preventDefault();var val=$textarea.val();if(!val){// 无内容
	$textarea.focus();return;}var rangeElem=editor.getRangeElem();if($.trim($(rangeElem).text())&&codeTpl.indexOf('<p><br></p>')!==0){codeTpl='<p><br></p>'+codeTpl;}var lang=$langSelect?$langSelect.val():'';// 获取高亮语言
	var langClass='';var doHightlight=function doHightlight(){$txt.find('pre code').each(function(i,block){var $block=$(block);if($block.attr('codemark')){// 有 codemark 标记的代码块，就不再重新格式化了
	return;}else if(window.hljs){// 新代码块，格式化之后，立即标记 codemark
	window.hljs.highlightBlock(block);$block.attr('codemark','1');}});};// 语言高亮样式
	if(lang){langClass=' class="'+lang+' hljs"';}// 替换标签
	val=val.replace(/&/gm,'&amp;').replace(/</gm,'&lt;').replace(/>/gm,'&gt;');// ---- menu 未选中状态 ----
	if(!menu.selected){// 拼接html
	var html=codeTpl.replace('{#langClass}',langClass).replace('{#content}',val);editor.command(e,'insertHtml',html,doHightlight);return;}// ---- menu 选中状态 ----
	var targetElem=editor.getSelfOrParentByName(rangeElem,'pre');var $targetElem;if(targetElem){// 确定找到 pre 之后，再找 code
	targetElem=editor.getSelfOrParentByName(rangeElem,'code');}if(!targetElem){return;}$targetElem=$(targetElem);function commandFn(){var className;if(lang){className=$targetElem.attr('class');if(className!==lang+' hljs'){$targetElem.attr('class',lang+' hljs');}}$targetElem.html(val);}function callback(){editor.restoreSelectionByElem(targetElem);doHightlight();}editor.customCommand(e,commandFn,callback);});}// ------ enter 时，不另起标签，只换行 ------
	$txt.on('keydown',function(e){if(e.keyCode!==13){return;}var rangeElem=editor.getRangeElem();var targetElem=editor.getSelfOrParentByName(rangeElem,'code');if(!targetElem){return;}editor.command(e,'insertHtml','\n');});// ------ 点击时，禁用其他标签 ------
	function updateMenu(){var rangeElem=editor.getRangeElem();var targetElem=editor.getSelfOrParentByName(rangeElem,'code');if(targetElem){// 在 code 之内，禁用其他菜单
	editor.disableMenusExcept('insertcode');}else{// 不是在 code 之内，启用其他菜单
	editor.enableMenusExcept('insertcode');}}$txt.on('keydown click',function(e){// 此处必须使用 setTimeout 异步处理，否则不对
	setTimeout(updateMenu);});});});// undo 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='undo';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.undo});// click 事件
	menu.clickEvent=function(e){editor.undo();};// 增加到editor对象中
	editor.menus[menuId]=menu;// ------------ 初始化时、enter 时、打字中断时，做记录 ------------
	// ------------ ctrl + z 是调用记录撤销，而不是使用浏览器默认的撤销 ------------
	editor.ready(function(){var editor=this;var $txt=editor.txt.$txt;var timeoutId;// 执行undo记录
	function undo(){editor.undoRecord();}$txt.on('keydown',function(e){var keyCode=e.keyCode;// 撤销 ctrl + z
	if(e.ctrlKey&&keyCode===90){editor.undo();return;}if(keyCode===13){// enter 做记录
	undo();}else{// keyup 之后 1s 之内不操作，则做一次记录
	if(timeoutId){clearTimeout(timeoutId);}timeoutId=setTimeout(undo,1000);}});// 初始化做记录
	editor.undoRecord();});});});// redo 菜单
	_e(function(E,$){E.createMenu(function(check){var menuId='redo';if(!check(menuId)){return;}var editor=this;var lang=editor.config.lang;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.redo});// click 事件
	menu.clickEvent=function(e){editor.redo();};// 增加到editor对象中
	editor.menus[menuId]=menu;});});// 全屏 菜单
	_e(function(E,$){// 记录全屏时的scrollTop
	var scrollTopWhenFullScreen;E.createMenu(function(check){var menuId='fullscreen';if(!check(menuId)){return;}var editor=this;var $txt=editor.txt.$txt;var config=editor.config;var zIndexConfig=config.zindex||10000;var lang=config.lang;var isSelected=false;var zIndex;var maxHeight;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,id:menuId,title:lang.fullscreen});// 定义click事件
	menu.clickEvent=function(e){// 增加样式
	var $editorContainer=editor.$editorContainer;$editorContainer.addClass('wangEditor-fullscreen');// （先保存当前的）再设置z-index
	zIndex=$editorContainer.css('z-index');$editorContainer.css('z-index',zIndexConfig);var $wrapper;var txtHeight=$txt.height();var txtOuterHeight=$txt.outerHeight();if(editor.useMaxHeight){// 记录 max-height，并暂时去掉maxheight
	maxHeight=$txt.css('max-height');$txt.css('max-height','none');// 如果使用了maxHeight， 将$txt从它的父元素中移出来
	$wrapper=$txt.parent();$wrapper.after($txt);$wrapper.remove();$txt.css('overflow-y','auto');}// 设置高度到全屏
	var menuContainer=editor.menuContainer;$txt.height(E.$window.height()-menuContainer.height()-(txtOuterHeight-txtHeight)// 去掉内边距和外边距
	);// 取消menuContainer的内联样式（menu吸顶时，会为 menuContainer 设置一些内联样式）
	editor.menuContainer.$menuContainer.attr('style','');// 保存状态
	isSelected=true;// 记录编辑器是否全屏
	editor.isFullScreen=true;// 记录设置全屏时的高度
	scrollTopWhenFullScreen=E.$window.scrollTop();};// 定义选中状态的 click 事件
	menu.clickEventSelected=function(e){// 取消样式
	var $editorContainer=editor.$editorContainer;$editorContainer.removeClass('wangEditor-fullscreen');$editorContainer.css('z-index',zIndex);// 还原height
	if(editor.useMaxHeight){$txt.css('max-height',maxHeight);}else{// editor.valueContainerHeight 在 editor.txt.initHeight() 中事先保存了
	editor.$valueContainer.css('height',editor.valueContainerHeight);}// 重新计算高度
	editor.txt.initHeight();// 保存状态
	isSelected=false;// 记录编辑器是否全屏
	editor.isFullScreen=false;// 还原scrollTop
	if(scrollTopWhenFullScreen!=null){E.$window.scrollTop(scrollTopWhenFullScreen);}};// 定义选中事件
	menu.updateSelectedEvent=function(e){return isSelected;};// 增加到editor对象中
	editor.menus[menuId]=menu;});});// 渲染menus
	_e(function(E,$){E.fn.renderMenus=function(){var editor=this;var menus=editor.menus;var menuIds=editor.config.menus;var menuContainer=editor.menuContainer;var menu;var groupIdx=0;$.each(menuIds,function(k,v){if(v==='|'){groupIdx++;return;}menu=menus[v];if(menu){menu.render(groupIdx);}});};});// 渲染menus
	_e(function(E,$){E.fn.renderMenuContainer=function(){var editor=this;var menuContainer=editor.menuContainer;var $editorContainer=editor.$editorContainer;menuContainer.render();};});// 渲染 txt
	_e(function(E,$){E.fn.renderTxt=function(){var editor=this;var txt=editor.txt;txt.render();// ready 时候，计算txt的高度
	editor.ready(function(){txt.initHeight();});};});// 渲染 container
	_e(function(E,$){E.fn.renderEditorContainer=function(){var editor=this;var $valueContainer=editor.$valueContainer;var $editorContainer=editor.$editorContainer;var $txt=editor.txt.$txt;var $prev,$parent;// 将编辑器渲染到页面中
	if($valueContainer===$txt){$prev=editor.$prev;$parent=editor.$parent;if($prev&&$prev.length){// 有前置节点，就插入到前置节点的后面
	$prev.after($editorContainer);}else{// 没有前置节点，就直接插入到父元素
	$parent.prepend($editorContainer);}}else{$valueContainer.after($editorContainer);$valueContainer.hide();}// 设置宽度（这样设置宽度有问题）
	// $editorContainer.css('width', $valueContainer.css('width'));
	};});// 菜单事件
	_e(function(E,$){// 绑定每个菜单的click事件
	E.fn.eventMenus=function(){var menus=this.menus;// 绑定菜单的点击事件
	$.each(menus,function(k,v){v.bindEvent();});};});// 菜单container事件
	_e(function(E,$){E.fn.eventMenuContainer=function(){};});// 编辑区域事件
	_e(function(E,$){E.fn.eventTxt=function(){var txt=this.txt;// txt内容变化时，保存选区
	txt.saveSelectionEvent();// txt内容变化时，随时更新 value
	txt.updateValueEvent();// txt内容变化时，随时更新 menu style
	txt.updateMenuStyleEvent();// // 鼠标hover时，显示 p head 高度（暂时关闭这个功能）
	// if (!/ie/i.test(E.userAgent)) {
	//     // 暂时不支持IE
	//     txt.showHeightOnHover();
	// }
	};});// 上传图片事件
	_e(function(E,$){E.plugin(function(){var editor=this;var fns=editor.config.uploadImgFns;// editor.config.uploadImgFns = {} 在config文件中定义了
	// -------- 定义load函数 --------
	fns.onload||(fns.onload=function(resultText,xhr){E.log('上传结束，返回结果为 '+resultText);var editor=this;var originalName=editor.uploadImgOriginalName||'';// 上传图片时，已经将图片的名字存在 editor.uploadImgOriginalName
	var img;if(resultText.indexOf('error|')===0){// 提示错误
	E.warn('上传失败：'+resultText.split('|')[1]);alert(resultText.split('|')[1]);}else{E.log('上传成功，即将插入编辑区域，结果为：'+resultText);// 将结果插入编辑器
	img=document.createElement('img');img.onload=function(){var html='<img src="'+resultText+'" alt="'+originalName+'" style="max-width:100%;"/>';editor.command(null,'insertHtml',html);E.log('已插入图片，地址 '+resultText);img=null;};img.onerror=function(){E.error('使用返回的结果获取图片，发生错误。请确认以下结果是否正确：'+resultText);img=null;};img.src=resultText;}});// -------- 定义tiemout函数 --------
	fns.ontimeout||(fns.ontimeout=function(xhr){E.error('上传图片超时');alert('上传图片超时');});// -------- 定义error函数 --------
	fns.onerror||(fns.onerror=function(xhr){E.error('上传上图片发生错误');alert('上传上图片发生错误');});});});// xhr 上传图片
	_e(function(E,$){if(!window.FileReader||!window.FormData){// 如果不支持html5的文档操作，直接返回
	return;}E.plugin(function(){var editor=this;var config=editor.config;var uploadImgUrl=config.uploadImgUrl;var uploadTimeout=config.uploadTimeout;// 获取配置中的上传事件
	var uploadImgFns=config.uploadImgFns;var onload=uploadImgFns.onload;var ontimeout=uploadImgFns.ontimeout;var onerror=uploadImgFns.onerror;if(!uploadImgUrl){return;}// -------- 将以base64的图片url数据转换为Blob --------
	function convertBase64UrlToBlob(urlData,filetype){//去掉url的头，并转换为byte
	var bytes=window.atob(urlData.split(',')[1]);//处理异常,将ascii码小于0的转换为大于0
	var ab=new ArrayBuffer(bytes.length);var ia=new Uint8Array(ab);var i;for(i=0;i<bytes.length;i++){ia[i]=bytes.charCodeAt(i);}return new Blob([ab],{type:filetype});}// -------- 插入图片的方法 --------
	function insertImg(src,event){var img=document.createElement('img');img.onload=function(){var html='<img src="'+src+'" style="max-width:100%;"/>';editor.command(event,'insertHtml',html);E.log('已插入图片，地址 '+src);img=null;};img.onerror=function(){E.error('使用返回的结果获取图片，发生错误。请确认以下结果是否正确：'+src);img=null;};img.src=src;}// -------- onprogress 事件 --------
	function updateProgress(e){if(e.lengthComputable){var percentComplete=e.loaded/e.total;editor.showUploadProgress(percentComplete*100);}}// -------- xhr 上传图片 --------
	editor.xhrUploadImg=function(opt){// opt 数据
	var event=opt.event;var fileName=opt.filename||'';var base64=opt.base64;var fileType=opt.fileType||'image/png';// 无扩展名则默认使用 png
	var name=opt.name||'wangEditor_upload_file';var loadfn=opt.loadfn||onload;var errorfn=opt.errorfn||onerror;var timeoutfn=opt.timeoutfn||ontimeout;// 上传参数（如 token）
	var params=editor.config.uploadParams||{};// headers
	var headers=editor.config.uploadHeaders||{};// 获取文件扩展名
	var fileExt='png';// 默认为 png
	if(fileName.indexOf('.')>0){// 原来的文件名有扩展名
	fileExt=fileName.slice(fileName.lastIndexOf('.')-fileName.length+1);}else if(fileType.indexOf('/')>0&&fileType.split('/')[1]){// 文件名没有扩展名，通过类型获取，如从 'image/png' 取 'png'
	fileExt=fileType.split('/')[1];}// ------------ begin 预览模拟上传 ------------
	if(E.isOnWebsite){E.log('预览模拟上传');insertImg(base64,event);return;}// ------------ end 预览模拟上传 ------------
	// 变量声明
	var xhr=new XMLHttpRequest();var timeoutId;var src;var formData=new FormData();// 超时处理
	function timeoutCallback(){if(timeoutId){clearTimeout(timeoutId);}if(xhr&&xhr.abort){xhr.abort();}// 超时了就阻止默认行为
	event.preventDefault();// 执行回调函数，提示什么内容，都应该在回调函数中定义
	timeoutfn&&timeoutfn.call(editor,xhr);// 隐藏进度条
	editor.hideUploadProgress();}xhr.onload=function(){if(timeoutId){clearTimeout(timeoutId);}// 记录文件名到 editor.uploadImgOriginalName ，插入图片时，可做 alt 属性用
	editor.uploadImgOriginalName=fileName;if(fileName.indexOf('.')>0){editor.uploadImgOriginalName=fileName.split('.')[0];}// 执行load函数，任何操作，都应该在load函数中定义
	loadfn&&loadfn.call(editor,xhr.responseText,xhr);// 隐藏进度条
	editor.hideUploadProgress();};xhr.onerror=function(){if(timeoutId){clearTimeout(timeoutId);}// 超时了就阻止默认行为
	event.preventDefault();// 执行error函数，错误提示，应该在error函数中定义
	errorfn&&errorfn.call(editor,xhr);// 隐藏进度条
	editor.hideUploadProgress();};// xhr.onprogress = updateProgress;
	xhr.upload.onprogress=updateProgress;// 填充数据
	formData.append(name,convertBase64UrlToBlob(base64,fileType),E.random()+'.'+fileExt);// 添加参数
	$.each(params,function(key,value){formData.append(key,value);});// 开始上传
	xhr.open('POST',uploadImgUrl,true);// xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");  // 将参数解析成传统form的方式上传
	// 修改自定义配置的headers
	$.each(headers,function(key,value){xhr.setRequestHeader(key,value);});// 跨域上传时，传cookie
	xhr.withCredentials=true;// 发送数据
	xhr.send(formData);timeoutId=setTimeout(timeoutCallback,uploadTimeout);E.log('开始上传...并开始超时计算');};});});// 进度条
	_e(function(E,$){E.plugin(function(){var editor=this;var menuContainer=editor.menuContainer;var menuHeight=menuContainer.height();var $editorContainer=editor.$editorContainer;var width=$editorContainer.width();var $progress=$('<div class="wangEditor-upload-progress"></div>');// 渲染事件
	var isRender=false;function render(){if(isRender){return;}isRender=true;$progress.css({top:menuHeight+'px'});$editorContainer.append($progress);}// ------ 显示进度 ------
	editor.showUploadProgress=function(progress){if(timeoutId){clearTimeout(timeoutId);}// 显示之前，先判断是否渲染
	render();$progress.show();$progress.width(progress*width/100);};// ------ 隐藏进度条 ------
	var timeoutId;function hideProgress(){$progress.hide();timeoutId=null;}editor.hideUploadProgress=function(time){if(timeoutId){clearTimeout(timeoutId);}time=time||750;timeoutId=setTimeout(hideProgress,time);};});});// upload img 插件
	_e(function(E,$){E.plugin(function(){var editor=this;var config=editor.config;var uploadImgUrl=config.uploadImgUrl;var uploadTimeout=config.uploadTimeout;var event;if(!uploadImgUrl){return;}// 获取editor的上传dom
	var $uploadContent=editor.$uploadContent;if(!$uploadContent){return;}// 自定义UI，并添加到上传dom节点上
	var $uploadIcon=$('<div class="upload-icon-container"><i class="wangeditor-menu-img-upload"></i></div>');$uploadContent.append($uploadIcon);// ---------- 构建上传对象 ----------
	var upfile=new E.UploadFile({editor:editor,uploadUrl:uploadImgUrl,timeout:uploadTimeout,fileAccept:'image/*'// 只允许选择图片 
	});// 选择本地文件，上传
	$uploadIcon.click(function(e){event=e;upfile.selectFiles();});});});// h5 方式上传图片
	_e(function(E,$){if(!window.FileReader||!window.FormData){// 如果不支持html5的文档操作，直接返回
	return;}// 构造函数
	var UploadFile=function UploadFile(opt){this.editor=opt.editor;this.uploadUrl=opt.uploadUrl;this.timeout=opt.timeout;this.fileAccept=opt.fileAccept;this.multiple=true;};UploadFile.fn=UploadFile.prototype;// clear
	UploadFile.fn.clear=function(){this.$input.val('');E.log('input value 已清空');};// 渲染
	UploadFile.fn.render=function(){var self=this;if(self._hasRender){// 不要重复渲染
	return;}E.log('渲染dom');var fileAccept=self.fileAccept;var acceptTpl=fileAccept?'accept="'+fileAccept+'"':'';var multiple=self.multiple;var multipleTpl=multiple?'multiple="multiple"':'';var $input=$('<input type="file" '+acceptTpl+' '+multipleTpl+'/>');var $container=$('<div style="visibility:hidden;"></div>');$container.append($input);E.$body.append($container);// onchange 事件
	$input.on('change',function(e){self.selected(e,$input.get(0));});// 记录对象数据
	self.$input=$input;// 记录
	self._hasRender=true;};// 选择
	UploadFile.fn.selectFiles=function(){var self=this;E.log('使用 html5 方式上传');// 先渲染
	self.render();// 选择
	E.log('选择文件');self.$input.click();};// 选中文件之后
	UploadFile.fn.selected=function(e,input){var self=this;var files=input.files||[];if(files.length===0){return;}E.log('选中 '+files.length+' 个文件');// 遍历选中的文件，预览、上传
	$.each(files,function(key,value){self.upload(value);});};// 上传单个文件
	UploadFile.fn.upload=function(file){var self=this;var editor=self.editor;var filename=file.name||'';var fileType=file.type||'';var uploadImgFns=editor.config.uploadImgFns;var uploadFileName=editor.config.uploadImgFileName||'wangEditorH5File';var onload=uploadImgFns.onload;var ontimeout=uploadImgFns.ontimeout;var onerror=uploadImgFns.onerror;var reader=new FileReader();if(!onload||!ontimeout||!onerror){E.error('请为编辑器配置上传图片的 onload ontimeout onerror 回调事件');return;}E.log('开始执行 '+filename+' 文件的上传');// 清空 input 数据
	function clearInput(){self.clear();}// onload事件
	reader.onload=function(e){E.log('已读取'+filename+'文件');var base64=e.target.result||this.result;editor.xhrUploadImg({event:e,filename:filename,base64:base64,fileType:fileType,name:uploadFileName,loadfn:function loadfn(resultText,xhr){clearInput();// 执行配置中的方法
	var editor=this;onload.call(editor,resultText,xhr);},errorfn:function errorfn(xhr){clearInput();if(E.isOnWebsite){alert('wangEditor官网暂时没有服务端，因此报错。实际项目中不会发生');}// 执行配置中的方法
	var editor=this;onerror.call(editor,xhr);},timeoutfn:function timeoutfn(xhr){clearInput();if(E.isOnWebsite){alert('wangEditor官网暂时没有服务端，因此超时。实际项目中不会发生');}// 执行配置中的方法
	var editor=this;ontimeout(editor,xhr);}});};// 开始取文件
	reader.readAsDataURL(file);};// 暴露给 E
	E.UploadFile=UploadFile;});// form方式上传图片
	_e(function(E,$){if(window.FileReader&&window.FormData){// 如果支持 html5 上传，则返回
	return;}// 构造函数
	var UploadFile=function UploadFile(opt){this.editor=opt.editor;this.uploadUrl=opt.uploadUrl;this.timeout=opt.timeout;this.fileAccept=opt.fileAccept;this.multiple=false;};UploadFile.fn=UploadFile.prototype;// clear
	UploadFile.fn.clear=function(){this.$input.val('');E.log('input value 已清空');};// 隐藏modal
	UploadFile.fn.hideModal=function(){this.modal.hide();};// 渲染
	UploadFile.fn.render=function(){var self=this;var editor=self.editor;var uploadFileName=editor.config.uploadImgFileName||'wangEditorFormFile';if(self._hasRender){// 不要重复渲染
	return;}// 服务器端路径
	var uploadUrl=self.uploadUrl;E.log('渲染dom');// 创建 form 和 iframe
	var iframeId='iframe'+E.random();var $iframe=$('<iframe name="'+iframeId+'" id="'+iframeId+'" frameborder="0" width="0" height="0"></iframe>');var multiple=self.multiple;var multipleTpl=multiple?'multiple="multiple"':'';var $p=$('<p>选择图片并上传</p>');var $input=$('<input type="file" '+multipleTpl+' name="'+uploadFileName+'"/>');var $btn=$('<input type="submit" value="上传"/>');var $form=$('<form enctype="multipart/form-data" method="post" action="'+uploadUrl+'" target="'+iframeId+'"></form>');var $container=$('<div style="margin:10px 20px;"></div>');$form.append($p).append($input).append($btn);// 增加用户配置的参数，如 token
	$.each(editor.config.uploadParams,function(key,value){$form.append($('<input type="hidden" name="'+key+'" value="'+value+'"/>'));});$container.append($form);$container.append($iframe);self.$input=$input;self.$iframe=$iframe;// 生成 modal
	var modal=new E.Modal(editor,undefined,{$content:$container});self.modal=modal;// 记录
	self._hasRender=true;};// 绑定 iframe load 事件
	UploadFile.fn.bindLoadEvent=function(){var self=this;if(self._hasBindLoad){// 不要重复绑定
	return;}var editor=self.editor;var $iframe=self.$iframe;var iframe=$iframe.get(0);var iframeWindow=iframe.contentWindow;var onload=editor.config.uploadImgFns.onload;// 定义load事件
	function onloadFn(){var resultText=$.trim(iframeWindow.document.body.innerHTML);if(!resultText){return;}// 获取文件名
	var fileFullName=self.$input.val();// 结果如 C:\folder\abc.png 格式
	var fileOriginalName=fileFullName;if(fileFullName.lastIndexOf('\\')>=0){// 获取 abc.png 格式
	fileOriginalName=fileFullName.slice(fileFullName.lastIndexOf('\\')+1);if(fileOriginalName.indexOf('.')>0){// 获取 abc （即不带扩展名的文件名）
	fileOriginalName=fileOriginalName.split('.')[0];}}// 将文件名暂存到 editor.uploadImgOriginalName ，插入图片时，可作为 alt 属性来用
	editor.uploadImgOriginalName=fileOriginalName;// 执行load函数，插入图片的操作，应该在load函数中执行
	onload.call(editor,resultText);// 清空 input 数据
	self.clear();// 隐藏modal
	self.hideModal();}// 绑定 load 事件
	if(iframe.attachEvent){iframe.attachEvent('onload',onloadFn);}else{iframe.onload=onloadFn;}// 记录
	self._hasBindLoad=true;};UploadFile.fn.show=function(){var self=this;var modal=self.modal;function show(){modal.show();self.bindLoadEvent();}setTimeout(show);};// 选择
	UploadFile.fn.selectFiles=function(){var self=this;E.log('使用 form 方式上传');// 先渲染
	self.render();// 先清空
	self.clear();// 显示
	self.show();};// 暴露给 E
	E.UploadFile=UploadFile;});// upload img 插件 粘贴图片
	_e(function(E,$){E.plugin(function(){var editor=this;var txt=editor.txt;var $txt=txt.$txt;var config=editor.config;var uploadImgUrl=config.uploadImgUrl;var uploadFileName=config.uploadImgFileName||'wangEditorPasteFile';var pasteEvent;var $imgsBeforePaste;// 未配置上传图片url，则忽略
	if(!uploadImgUrl){return;}// -------- 非 chrome 下，通过查找粘贴的图片的方式上传 --------
	function findPasteImgAndUpload(){var reg=/^data:(image\/\w+);base64/;var $imgs=$txt.find('img');E.log('粘贴后，检查到编辑器有'+$imgs.length+'个图片。开始遍历图片，试图找到刚刚粘贴过来的图片');$.each($imgs,function(){var img=this;var $img=$(img);var flag;var base64=$img.attr('src');var type;// 判断当前图片是否是粘贴之前的
	$imgsBeforePaste.each(function(){if(img===this){// 当前图片是粘贴之前的
	flag=true;return false;}});// 当前图片是粘贴之前的，则忽略
	if(flag){return;}E.log('找到一个粘贴过来的图片');if(reg.test(base64)){// 得到的粘贴的图片是 base64 格式，符合要求
	E.log('src 是 base64 格式，可以上传');type=base64.match(reg)[1];editor.xhrUploadImg({event:pasteEvent,base64:base64,fileType:type,name:uploadFileName});}else{E.log('src 为 '+base64+' ，不是 base64 格式，暂时不支持上传');}// 最终移除原图片
	$img.remove();});E.log('遍历结束');}// 开始监控粘贴事件
	$txt.on('paste',function(e){pasteEvent=e;var data=pasteEvent.clipboardData||pasteEvent.originalEvent.clipboardData;var text;var items;// -------- 试图获取剪切板中的文字，有文字的情况下，就不处理图片粘贴 --------
	if(data==null){text=window.clipboardData&&window.clipboardData.getData('text');}else{text=data.getData('text/plain')||data.getData('text/html');}if(text){return;}items=data&&data.items;if(items){// -------- chrome 可以用 data.items 取出图片 -----
	E.log('通过 data.items 得到了数据');$.each(items,function(key,value){var fileType=value.type||'';if(fileType.indexOf('image')<0){// 不是图片
	return;}var file=value.getAsFile();var reader=new FileReader();E.log('得到一个粘贴图片');reader.onload=function(e){E.log('读取到粘贴的图片');// 执行上传
	var base64=e.target.result||this.result;editor.xhrUploadImg({event:pasteEvent,base64:base64,fileType:fileType,name:uploadFileName});};//读取粘贴的文件
	reader.readAsDataURL(file);});}else{// -------- 非 chrome 不能用 data.items 取图片 -----
	E.log('未从 data.items 得到数据，使用检测粘贴图片的方式');// 获取
	$imgsBeforePaste=$txt.find('img');E.log('粘贴前，检查到编辑器有'+$imgsBeforePaste.length+'个图片');// 异步上传找到的图片
	setTimeout(findPasteImgAndUpload,0);}});});});// 拖拽上传图片 插件 
	_e(function(E,$){E.plugin(function(){var editor=this;var txt=editor.txt;var $txt=txt.$txt;var config=editor.config;var uploadImgUrl=config.uploadImgUrl;var uploadFileName=config.uploadImgFileName||'wangEditorDragFile';// 未配置上传图片url，则忽略
	if(!uploadImgUrl){return;}// 阻止浏览器默认行为
	E.$document.on('dragleave drop dragenter dragover',function(e){e.preventDefault();});// 监控 $txt drop 事件
	$txt.on('drop',function(dragEvent){dragEvent.preventDefault();var originalEvent=dragEvent.originalEvent;var files=originalEvent.dataTransfer&&originalEvent.dataTransfer.files;if(!files||!files.length){return;}$.each(files,function(k,file){var type=file.type;var name=file.name;if(type.indexOf('image/')<0){// 只接收图片
	return;}E.log('得到图片 '+name);var reader=new FileReader();reader.onload=function(e){E.log('读取到图片 '+name);// 执行上传
	var base64=e.target.result||this.result;editor.xhrUploadImg({event:dragEvent,base64:base64,fileType:type,name:uploadFileName});};//读取粘贴的文件
	reader.readAsDataURL(file);});});});});// 编辑器区域 table toolbar
	_e(function(E,$){E.plugin(function(){var editor=this;var txt=editor.txt;var $txt=txt.$txt;// 说明：设置了 max-height 之后，$txt.parent() 负责滚动处理
	var $currentTxt=editor.useMaxHeight?$txt.parent():$txt;var $currentTable;// 用到的dom节点
	var isRendered=false;var $toolbar=$('<div class="txt-toolbar"></div>');var $triangle=$('<div class="tip-triangle"></div>');var $delete=$('<a href="#"><i class="wangeditor-menu-img-trash-o"></i></a>');var $zoomSmall=$('<a href="#"><i class="wangeditor-menu-img-search-minus"></i></a>');var $zoomBig=$('<a href="#"><i class="wangeditor-menu-img-search-plus"></i></a>');// 渲染到页面
	function render(){if(isRendered){return;}// 绑定事件
	bindEvent();// 拼接 渲染到页面上
	$toolbar.append($triangle).append($delete).append($zoomSmall).append($zoomBig);editor.$editorContainer.append($toolbar);isRendered=true;}// 绑定事件
	function bindEvent(){// 统一执行命令的方法
	var commandFn;function command(e,callback){if(commandFn){editor.customCommand(e,commandFn,callback);}}// 删除
	$delete.click(function(e){commandFn=function commandFn(){$currentTable.remove();};command(e,function(){setTimeout(hide,100);});});// 放大
	$zoomBig.click(function(e){commandFn=function commandFn(){$currentTable.css({width:'100%'});};command(e,function(){setTimeout(show);});});// 缩小
	$zoomSmall.click(function(e){commandFn=function commandFn(){$currentTable.css({width:'auto'});};command(e,function(){setTimeout(show);});});}// 显示 toolbar
	function show(){if(editor._disabled){// 编辑器已经被禁用，则不让显示
	return;}if($currentTable==null){return;}$currentTable.addClass('clicked');var tablePosition=$currentTable.position();var tableTop=tablePosition.top;var tableLeft=tablePosition.left;var tableHeight=$currentTable.outerHeight();var tableWidth=$currentTable.outerWidth();// --- 定位 toolbar ---
	// 计算初步结果
	var top=tableTop+tableHeight;var left=tableLeft;var marginLeft=0;var txtTop=$currentTxt.position().top;var txtHeight=$currentTxt.outerHeight();if(top>txtTop+txtHeight){// top 不得超出编辑范围
	top=txtTop+txtHeight;}// 显示（方便计算 margin）
	$toolbar.show();// 计算 margin
	var width=$toolbar.outerWidth();marginLeft=tableWidth/2-width/2;// 定位
	$toolbar.css({top:top+5,left:left,'margin-left':marginLeft});// 如果定位太靠左了
	if(marginLeft<0){// 得到三角形的margin-left
	$toolbar.css('margin-left','0');$triangle.hide();}else{$triangle.show();}}// 隐藏 toolbar
	function hide(){if($currentTable==null){return;}$currentTable.removeClass('clicked');$currentTable=null;$toolbar.hide();}// click table 事件
	$currentTxt.on('click','table',function(e){var $table=$(e.currentTarget);// 渲染
	render();if($currentTable&&$currentTable.get(0)===$table.get(0)){setTimeout(hide,100);return;}// 显示 toolbar
	$currentTable=$table;show();// 阻止冒泡
	e.preventDefault();e.stopPropagation();}).on('click keydown scroll',function(e){setTimeout(hide,100);});E.$body.on('click keydown scroll',function(e){setTimeout(hide,100);});});});// 编辑器区域 img toolbar
	_e(function(E,$){if(E.userAgent.indexOf('MSIE 8')>0){return;}E.plugin(function(){var editor=this;var lang=editor.config.lang;var txt=editor.txt;var $txt=txt.$txt;// 说明：设置了 max-height 之后，$txt.parent() 负责滚动处理
	var $currentTxt=editor.useMaxHeight?$txt.parent():$txt;var $editorContainer=editor.$editorContainer;var $currentImg;var currentLink='';// 用到的dom节点
	var isRendered=false;var $dragPoint=$('<div class="img-drag-point"></div>');var $toolbar=$('<div class="txt-toolbar"></div>');var $triangle=$('<div class="tip-triangle"></div>');var $menuContainer=$('<div></div>');var $delete=$('<a href="#"><i class="wangeditor-menu-img-trash-o"></i></a>');var $zoomSmall=$('<a href="#"><i class="wangeditor-menu-img-search-minus"></i></a>');var $zoomBig=$('<a href="#"><i class="wangeditor-menu-img-search-plus"></i></a>');// var $floatLeft = $('<a href="#"><i class="wangeditor-menu-img-align-left"></i></a>');
	// var $noFloat = $('<a href="#"><i class="wangeditor-menu-img-align-justify"></i></a>');
	// var $floatRight = $('<a href="#"><i class="wangeditor-menu-img-align-right"></i></a>');
	var $alignLeft=$('<a href="#"><i class="wangeditor-menu-img-align-left"></i></a>');var $alignCenter=$('<a href="#"><i class="wangeditor-menu-img-align-center"></i></a>');var $alignRight=$('<a href="#"><i class="wangeditor-menu-img-align-right"></i></a>');var $link=$('<a href="#"><i class="wangeditor-menu-img-link"></i></a>');var $unLink=$('<a href="#"><i class="wangeditor-menu-img-unlink"></i></a>');var $linkInputContainer=$('<div style="display:none;"></div>');var $linkInput=$('<input type="text" style="height:26px; margin-left:10px; width:200px;"/>');var $linkBtnSubmit=$('<button class="right">'+lang.submit+'</button>');var $linkBtnCancel=$('<button class="right gray">'+lang.cancel+'</button>');// 记录是否正在拖拽
	var isOnDrag=false;// 获取 / 设置 链接
	function imgLink(e,url){if(!$currentImg){return;}var commandFn;var callback=function callback(){// 及时保存currentLink
	if(url!=null){currentLink=url;}};var $link;var inLink=false;var $parent=$currentImg.parent();if($parent.get(0).nodeName.toLowerCase()==='a'){// 父元素就是图片链接
	$link=$parent;inLink=true;}else{// 父元素不是图片链接，则重新创建一个链接
	$link=$('<a target="_blank"></a>');}if(url==null){// url 无值，是获取链接
	return $link.attr('href')||'';}else if(url===''){// url 是空字符串，是取消链接
	if(inLink){commandFn=function commandFn(){$currentImg.unwrap();};}}else{// url 有值，是设置链接
	if(url===currentLink){return;}commandFn=function commandFn(){$link.attr('href',url);if(!inLink){// 当前图片未包含在链接中，则包含进来
	$currentImg.wrap($link);}};}// 执行命令
	if(commandFn){editor.customCommand(e,commandFn,callback);}}// 渲染到页面
	function render(){if(isRendered){return;}// 绑定事件
	bindToolbarEvent();bindDragEvent();// 菜单放入 container
	$menuContainer.append($delete).append($zoomSmall).append($zoomBig)// .append($floatLeft)
	// .append($noFloat)
	// .append($floatRight);
	.append($alignLeft).append($alignCenter).append($alignRight).append($link).append($unLink);// 链接input放入container
	$linkInputContainer.append($linkInput).append($linkBtnCancel).append($linkBtnSubmit);// 拼接 渲染到页面上
	$toolbar.append($triangle).append($menuContainer).append($linkInputContainer);editor.$editorContainer.append($toolbar).append($dragPoint);isRendered=true;}// 绑定toolbar事件
	function bindToolbarEvent(){// 统一执行命令的方法
	var commandFn;function customCommand(e,callback){if(commandFn){editor.customCommand(e,commandFn,callback);}}// 删除
	$delete.click(function(e){// 删除之前先unlink
	imgLink(e,'');// 删除图片
	commandFn=function commandFn(){$currentImg.remove();};customCommand(e,function(){setTimeout(hide,100);});});// 放大
	$zoomBig.click(function(e){commandFn=function commandFn(){var img=$currentImg.get(0);var width=img.width;var height=img.height;width=width*1.1;height=height*1.1;$currentImg.css({width:width+'px',height:height+'px'});};customCommand(e,function(){setTimeout(show);});});// 缩小
	$zoomSmall.click(function(e){commandFn=function commandFn(){var img=$currentImg.get(0);var width=img.width;var height=img.height;width=width*0.9;height=height*0.9;$currentImg.css({width:width+'px',height:height+'px'});};customCommand(e,function(){setTimeout(show);});});// // 左浮动
	// $floatLeft.click(function (e) {
	//     commandFn = function () {
	//         $currentImg.css({
	//             float: 'left'
	//         });
	//     };
	//     customCommand(e, function () {
	//         setTimeout(hide, 100);
	//     });
	// });
	// alignLeft
	$alignLeft.click(function(e){commandFn=function commandFn(){// 如果 img 增加了链接，那么 img.parent() 就是 a 标签，设置 align 没用的，因此必须找到 P 父节点来设置 align
	$currentImg.parents('p').css({'text-align':'left'}).attr('align','left');};customCommand(e,function(){setTimeout(hide,100);});});// // 右浮动
	// $floatRight.click(function (e) {
	//     commandFn = function () {
	//         $currentImg.css({
	//             float: 'right'
	//         });
	//     };
	//     customCommand(e, function () {
	//         setTimeout(hide, 100);
	//     });
	// });
	// alignRight
	$alignRight.click(function(e){commandFn=function commandFn(){// 如果 img 增加了链接，那么 img.parent() 就是 a 标签，设置 align 没用的，因此必须找到 P 父节点来设置 align
	$currentImg.parents('p').css({'text-align':'right'}).attr('align','right');};customCommand(e,function(){setTimeout(hide,100);});});// // 无浮动
	// $noFloat.click(function (e) {
	//     commandFn = function () {
	//         $currentImg.css({
	//             float: 'none'
	//         });
	//     };
	//     customCommand(e, function () {
	//         setTimeout(hide, 100);
	//     });
	// });
	// alignCenter
	$alignCenter.click(function(e){commandFn=function commandFn(){// 如果 img 增加了链接，那么 img.parent() 就是 a 标签，设置 align 没用的，因此必须找到 P 父节点来设置 align
	$currentImg.parents('p').css({'text-align':'center'}).attr('align','center');};customCommand(e,function(){setTimeout(hide,100);});});// link
	// 显示链接input
	$link.click(function(e){e.preventDefault();// 获取当前链接，并显示
	currentLink=imgLink(e);$linkInput.val(currentLink);$menuContainer.hide();$linkInputContainer.show();});// 设置链接
	$linkBtnSubmit.click(function(e){e.preventDefault();var url=$.trim($linkInput.val());if(url){// 设置链接，同时会自动更新 currentLink 的值
	imgLink(e,url);}// 隐藏 toolbar
	setTimeout(hide);});// 取消设置链接
	$linkBtnCancel.click(function(e){e.preventDefault();// 重置链接 input
	$linkInput.val(currentLink);$menuContainer.show();$linkInputContainer.hide();});// unlink
	$unLink.click(function(e){e.preventDefault();// 执行 unlink
	imgLink(e,'');// 隐藏 toolbar
	setTimeout(hide);});}// 绑定drag事件
	function bindDragEvent(){var _x,_y;var dragMarginLeft,dragMarginTop;var imgWidth,imgHeight;function mousemove(e){var diffX,diffY;// 计算差额
	diffX=e.pageX-_x;diffY=e.pageY-_y;// --------- 计算拖拽点的位置 ---------
	var currentDragMarginLeft=dragMarginLeft+diffX;var currentDragMarginTop=dragMarginTop+diffY;$dragPoint.css({'margin-left':currentDragMarginLeft,'margin-top':currentDragMarginTop});// --------- 计算图片的大小 ---------
	var currentImgWidth=imgWidth+diffX;var currentImggHeight=imgHeight+diffY;$currentImg&&$currentImg.css({width:currentImgWidth,height:currentImggHeight});}$dragPoint.on('mousedown',function(e){if(!$currentImg){return;}// 当前鼠标位置
	_x=e.pageX;_y=e.pageY;// 当前拖拽点的位置
	dragMarginLeft=parseFloat($dragPoint.css('margin-left'),10);dragMarginTop=parseFloat($dragPoint.css('margin-top'),10);// 当前图片的大小
	imgWidth=$currentImg.width();imgHeight=$currentImg.height();// 隐藏 $toolbar
	$toolbar.hide();// 绑定计算事件
	E.$document.on('mousemove._dragResizeImg',mousemove);E.$document.on('mouseup._dragResizeImg',function(e){// 取消绑定
	E.$document.off('mousemove._dragResizeImg');E.$document.off('mouseup._dragResizeImg');// 隐藏，并还原拖拽点的位置
	hide();$dragPoint.css({'margin-left':dragMarginLeft,'margin-top':dragMarginTop});// 记录
	isOnDrag=false;});// 记录
	isOnDrag=true;});}// 显示 toolbar
	function show(){if(editor._disabled){// 编辑器已经被禁用，则不让显示
	return;}if($currentImg==null){return;}$currentImg.addClass('clicked');var imgPosition=$currentImg.position();var imgTop=imgPosition.top;var imgLeft=imgPosition.left;var imgHeight=$currentImg.outerHeight();var imgWidth=$currentImg.outerWidth();// --- 定位 dragpoint ---
	$dragPoint.css({top:imgTop+imgHeight,left:imgLeft+imgWidth});// --- 定位 toolbar ---
	// 计算初步结果
	var top=imgTop+imgHeight;var left=imgLeft;var marginLeft=0;var txtTop=$currentTxt.position().top;var txtHeight=$currentTxt.outerHeight();if(top>txtTop+txtHeight){// top 不得超出编辑范围
	top=txtTop+txtHeight;}else{// top 超出编辑范围，dragPoint就不显示了
	$dragPoint.show();}// 显示（方便计算 margin）
	$toolbar.show();// 计算 margin
	var width=$toolbar.outerWidth();marginLeft=imgWidth/2-width/2;// 定位
	$toolbar.css({top:top+5,left:left,'margin-left':marginLeft});// 如果定位太靠左了
	if(marginLeft<0){// 得到三角形的margin-left
	$toolbar.css('margin-left','0');$triangle.hide();}else{$triangle.show();}// disable 菜单
	editor.disableMenusExcept();}// 隐藏 toolbar
	function hide(){if($currentImg==null){return;}$currentImg.removeClass('clicked');$currentImg=null;$toolbar.hide();$dragPoint.hide();// enable 菜单
	editor.enableMenusExcept();}// 判断img是否是一个表情
	function isEmotion(imgSrc){var result=false;if(!editor.emotionUrls){return result;}$.each(editor.emotionUrls,function(index,url){var flag=false;if(imgSrc===url){result=true;flag=true;}if(flag){return false;// break 循环
	}});return result;}// click img 事件
	$currentTxt.on('mousedown','img',function(e){e.preventDefault();}).on('click','img',function(e){var $img=$(e.currentTarget);var src=$img.attr('src');if(!src||isEmotion(src)){// 是一个表情图标
	return;}// ---------- 不是表情图标 ---------- 
	// 渲染
	render();if($currentImg&&$currentImg.get(0)===$img.get(0)){setTimeout(hide,100);return;}// 显示 toolbar
	$currentImg=$img;show();// 默认显示menuContainer，其他默认隐藏
	$menuContainer.show();$linkInputContainer.hide();// 阻止冒泡
	e.preventDefault();e.stopPropagation();}).on('click keydown scroll',function(e){if(!isOnDrag){setTimeout(hide,100);}});});});// 编辑区域 link toolbar
	_e(function(E,$){E.plugin(function(){var editor=this;var lang=editor.config.lang;var $txt=editor.txt.$txt;// 当前命中的链接
	var $currentLink;var $toolbar=$('<div class="txt-toolbar"></div>');var $triangle=$('<div class="tip-triangle"></div>');var $triggerLink=$('<a href="#" target="_blank"><i class="wangeditor-menu-img-link"></i> '+lang.openLink+'</a>');var isRendered;// 记录当前的显示/隐藏状态
	var isShow=false;var showTimeoutId,hideTimeoutId;var showTimeoutIdByToolbar,hideTimeoutIdByToolbar;// 渲染 dom
	function render(){if(isRendered){return;}$toolbar.append($triangle).append($triggerLink);editor.$editorContainer.append($toolbar);isRendered=true;}// 定位
	function setPosition(){if(!$currentLink){return;}var position=$currentLink.position();var left=position.left;var top=position.top;var height=$currentLink.height();// 初步计算top值
	var topResult=top+height+5;// 判断 toolbar 是否超过了编辑器区域的下边界
	var menuHeight=editor.menuContainer.height();var txtHeight=editor.txt.$txt.outerHeight();if(topResult>menuHeight+txtHeight){topResult=menuHeight+txtHeight+5;}// 最终设置
	$toolbar.css({top:topResult,left:left});}// 显示 toolbar
	function show(){if(isShow){return;}if(!$currentLink){return;}render();$toolbar.show();// 设置链接
	var href=$currentLink.attr('href');$triggerLink.attr('href',href);// 定位
	setPosition();isShow=true;}// 隐藏 toolbar
	function hide(){if(!isShow){return;}if(!$currentLink){return;}$toolbar.hide();isShow=false;}// $txt 绑定事件
	$txt.on('mouseenter','a',function(e){// 延时 500ms 显示toolbar
	if(showTimeoutId){clearTimeout(showTimeoutId);}showTimeoutId=setTimeout(function(){var a=e.currentTarget;var $a=$(a);$currentLink=$a;var $img=$a.children('img');if($img.length){// 该链接下包含一个图片
	// 图片点击时，隐藏toolbar
	$img.click(function(e){hide();});if($img.hasClass('clicked')){// 图片还处于clicked状态，则不显示toolbar
	return;}}// 显示toolbar
	show();},500);}).on('mouseleave','a',function(e){// 延时 500ms 隐藏toolbar
	if(hideTimeoutId){clearTimeout(hideTimeoutId);}hideTimeoutId=setTimeout(hide,500);}).on('click keydown scroll',function(e){setTimeout(hide,100);});// $toolbar 绑定事件
	$toolbar.on('mouseenter',function(e){// 先中断掉 $txt.mouseleave 导致的隐藏
	if(hideTimeoutId){clearTimeout(hideTimeoutId);}}).on('mouseleave',function(e){// 延时 500ms 显示toolbar
	if(showTimeoutIdByToolbar){clearTimeout(showTimeoutIdByToolbar);}showTimeoutIdByToolbar=setTimeout(hide,500);});});});// menu吸顶
	_e(function(E,$){E.plugin(function(){var editor=this;var menuFixed=editor.config.menuFixed;if(menuFixed===false||typeof menuFixed!=='number'){// 没有配置菜单吸顶
	return;}var bodyMarginTop=parseFloat(E.$body.css('margin-top'),10);if(isNaN(bodyMarginTop)){bodyMarginTop=0;}var $editorContainer=editor.$editorContainer;var editorTop=$editorContainer.offset().top;var editorHeight=$editorContainer.outerHeight();var $menuContainer=editor.menuContainer.$menuContainer;var menuCssPosition=$menuContainer.css('position');var menuCssTop=$menuContainer.css('top');var menuTop=$menuContainer.offset().top;var menuHeight=$menuContainer.outerHeight();var $txt=editor.txt.$txt;E.$window.scroll(function(){//全屏模式不支持
	if(editor.isFullScreen){return;}var sTop=E.$window.scrollTop();// 需要重新计算宽度，因为浏览器可能此时出现滚动条
	var menuWidth=$menuContainer.width();// 如果 menuTop === 0 说明此前编辑器一直隐藏，后来显示出来了，要重新计算相关数据
	if(menuTop===0){menuTop=$menuContainer.offset().top;editorTop=$editorContainer.offset().top;editorHeight=$editorContainer.outerHeight();menuHeight=$menuContainer.outerHeight();}if(sTop>=menuTop&&sTop+menuFixed+menuHeight+30<editorTop+editorHeight){// 吸顶
	$menuContainer.css({position:'fixed',top:menuFixed});// 固定宽度
	$menuContainer.width(menuWidth);// 增加body margin-top
	E.$body.css({'margin-top':bodyMarginTop+menuHeight});// 记录
	if(!editor._isMenufixed){editor._isMenufixed=true;}}else{// 取消吸顶
	$menuContainer.css({position:menuCssPosition,top:menuCssTop});// 取消宽度固定
	$menuContainer.css('width','100%');// 还原 body margin-top
	E.$body.css({'margin-top':bodyMarginTop});// 撤销记录
	if(editor._isMenufixed){editor._isMenufixed=false;}}});});});// 缩进 菜单插件
	_e(function(E,$){// 用 createMenu 方法创建菜单
	E.createMenu(function(check){// 定义菜单id，不要和其他菜单id重复。编辑器自带的所有菜单id，可通过『参数配置-自定义菜单』一节查看
	var menuId='indent';// check将检查菜单配置（『参数配置-自定义菜单』一节描述）中是否该菜单id，如果没有，则忽略下面的代码。
	if(!check(menuId)){return;}// this 指向 editor 对象自身
	var editor=this;// 创建 menu 对象
	var menu=new E.Menu({editor:editor,// 编辑器对象
	id:menuId,// 菜单id
	title:'缩进',// 菜单标题
	// 正常状态和选中装下的dom对象，样式需要自定义
	$domNormal:$('<a href="#" tabindex="-1"><i class="wangeditor-menu-img-indent-left"></i></a>'),$domSelected:$('<a href="#" tabindex="-1" class="selected"><i class="wangeditor-menu-img-indent-left"></i></a>')});// 菜单正常状态下，点击将触发该事件
	menu.clickEvent=function(e){var elem=editor.getRangeElem();var p=editor.getSelfOrParentByName(elem,'p');var $p;if(!p){// 未找到 p 元素，则忽略
	return e.preventDefault();}$p=$(p);// 使用自定义命令
	function commandFn(){$p.css('text-indent','2em');}editor.customCommand(e,commandFn);};// 菜单选中状态下，点击将触发该事件
	menu.clickEventSelected=function(e){var elem=editor.getRangeElem();var p=editor.getSelfOrParentByName(elem,'p');var $p;if(!p){// 未找到 p 元素，则忽略
	return e.preventDefault();}$p=$(p);// 使用自定义命令
	function commandFn(){$p.css('text-indent','0');}editor.customCommand(e,commandFn);};// 根据当前选区，自定义更新菜单的选中状态或者正常状态
	menu.updateSelectedEvent=function(){// 获取当前选区所在的父元素
	var elem=editor.getRangeElem();var p=editor.getSelfOrParentByName(elem,'p');var $p;var indent;if(!p){// 未找到 p 元素，则标记为未处于选中状态
	return false;}$p=$(p);indent=$p.css('text-indent');if(!indent||indent==='0px'){// 得到的p，text-indent 属性是 0，则标记为未处于选中状态
	return false;}// 找到 p 元素，并且 text-indent 不是 0，则标记为选中状态
	return true;};// 增加到editor对象中
	editor.menus[menuId]=menu;});});// 行高 菜单插件
	_e(function(E,$){// 用 createMenu 方法创建菜单
	E.createMenu(function(check){// 定义菜单id，不要和其他菜单id重复。编辑器自带的所有菜单id，可通过『参数配置-自定义菜单』一节查看
	var menuId='lineheight';// check将检查菜单配置（『参数配置-自定义菜单』一节描述）中是否该菜单id，如果没有，则忽略下面的代码。
	if(!check(menuId)){return;}// this 指向 editor 对象自身
	var editor=this;// 由于浏览器自身不支持 lineHeight 命令，因此要做一个hook
	editor.commandHooks.lineHeight=function(value){var rangeElem=editor.getRangeElem();var targetElem=editor.getSelfOrParentByName(rangeElem,'p,h1,h2,h3,h4,h5,pre');if(!targetElem){return;}$(targetElem).css('line-height',value+'');};// 创建 menu 对象
	var menu=new E.Menu({editor:editor,// 编辑器对象
	id:menuId,// 菜单id
	title:'行高',// 菜单标题
	commandName:'lineHeight',// 命令名称
	// 正常状态和选中装下的dom对象，样式需要自定义
	$domNormal:$('<a href="#" tabindex="-1"><i class="wangeditor-menu-img-arrows-v"></i></a>'),$domSelected:$('<a href="#" tabindex="-1" class="selected"><i class="wangeditor-menu-img-arrows-v"></i></a>')});// 数据源
	var data={// 格式： 'value' : 'title'
	'1.0':'1.0倍','1.5':'1.5倍','1.8':'1.8倍','2.0':'2.0倍','2.5':'2.5倍','3.0':'3.0倍'};// 为menu创建droplist对象
	var tpl='<span style="line-height:{#commandValue}">{#title}</span>';menu.dropList=new E.DropList(editor,menu,{data:data,// 传入数据源
	tpl:tpl// 传入模板
	});// 增加到editor对象中
	editor.menus[menuId]=menu;});});// 自定义上传
	_e(function(E,$){E.plugin(function(){var editor=this;var customUpload=editor.config.customUpload;if(!customUpload){return;}else if(editor.config.uploadImgUrl){alert('自定义上传无效，详看浏览器日志console.log');E.error('已经配置了 uploadImgUrl ，就不能再配置 customUpload ，两者冲突。将导致自定义上传无效。');return;}var $uploadContent=editor.$uploadContent;if(!$uploadContent){E.error('自定义上传，无法获取 editor.$uploadContent');}// UI
	var $uploadIcon=$('<div class="upload-icon-container"><i class="wangeditor-menu-img-upload"></i></div>');$uploadContent.append($uploadIcon);// 设置id，并暴露
	var btnId='upload'+E.random();var containerId='upload'+E.random();$uploadIcon.attr('id',btnId);$uploadContent.attr('id',containerId);editor.customUploadBtnId=btnId;editor.customUploadContainerId=containerId;});});// 版权提示
	_e(function(E,$){E.info('本页面富文本编辑器由 wangEditor 提供 http://wangeditor.github.io/ ');});// 最终返回wangEditor构造函数
	return window.wangEditor;});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(351)(module)))

/***/ },

/***/ 597:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};/*!
	 * jQuery JavaScript Library v2.2.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:23Z
	 */(function(global,factory){if(( false?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){// For CommonJS and CommonJS-like environments where a proper `window`
	// is present, execute the factory and get jQuery.
	// For environments that do not have a `window` with a `document`
	// (such as Node.js), expose a factory as module.exports.
	// This accentuates the need for the creation of a real `window`.
	// e.g. var jQuery = require("jquery")(window);
	// See ticket #14549 for more info.
	module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else{factory(global);}// Pass this if window is not defined yet
	})(typeof window!=="undefined"?window:undefined,function(window,noGlobal){// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr=[];var document=window.document;var _slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var version="2.2.4",// Define a local copy of jQuery
	jQuery=function jQuery(selector,context){// The jQuery object is actually just the init constructor 'enhanced'
	// Need init if jQuery is called (just allow error to be thrown if not included)
	return new jQuery.fn.init(selector,context);},// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,// Matches dashed string for camelizing
	rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,// Used by jQuery.camelCase as callback to replace()
	fcamelCase=function fcamelCase(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={// The current version of jQuery being used
	jquery:version,constructor:jQuery,// Start with an empty selector
	selector:"",// The default length of a jQuery object is 0
	length:0,toArray:function toArray(){return _slice.call(this);},// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get:function get(num){return num!=null?// Return just the one element from the set
	num<0?this[num+this.length]:this[num]:// Return all the elements in a clean array
	_slice.call(this);},// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack:function pushStack(elems){// Build a new jQuery matched element set
	var ret=jQuery.merge(this.constructor(),elems);// Add the old object onto the stack (as a reference)
	ret.prevObject=this;ret.context=this.context;// Return the newly-formed element set
	return ret;},// Execute a callback for every element in the matched set.
	each:function each(callback){return jQuery.each(this,callback);},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function slice(){return this.pushStack(_slice.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function end(){return this.prevObject||this.constructor();},// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;// Handle a deep copy situation
	if(typeof target==="boolean"){deep=target;// Skip the boolean and the target
	target=arguments[i]||{};i++;}// Handle case when target is a string or something (possible in deep copy)
	if((typeof target==="undefined"?"undefined":_typeof(target))!=="object"&&!jQuery.isFunction(target)){target={};}// Extend jQuery itself if only one argument is passed
	if(i===length){target=this;i--;}for(;i<length;i++){// Only deal with non-null/undefined values
	if((options=arguments[i])!=null){// Extend the base object
	for(name in options){src=target[name];copy=options[name];// Prevent never-ending loop
	if(target===copy){continue;}// Recurse if we're merging plain objects or arrays
	if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}// Never move original objects, clone them
	target[name]=jQuery.extend(deep,clone,copy);// Don't bring in undefined values
	}else if(copy!==undefined){target[name]=copy;}}}}// Return the modified object
	return target;};jQuery.extend({// Unique for each copy of jQuery on the page
	expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
	isReady:true,error:function error(msg){throw new Error(msg);},noop:function noop(){},isFunction:function isFunction(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray,isWindow:function isWindow(obj){return obj!=null&&obj===obj.window;},isNumeric:function isNumeric(obj){// parseFloat NaNs numeric-cast false positives (null|true|false|"")
	// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	// subtraction forces infinities to NaN
	// adding 1 corrects loss of precision from parseFloat (#15100)
	var realStringObj=obj&&obj.toString();return!jQuery.isArray(obj)&&realStringObj-parseFloat(realStringObj)+1>=0;},isPlainObject:function isPlainObject(obj){var key;// Not plain objects:
	// - Any object or value whose internal [[Class]] property is not "[object Object]"
	// - DOM nodes
	// - window
	if(jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}// Not own constructor property must be Object
	if(obj.constructor&&!hasOwn.call(obj,"constructor")&&!hasOwn.call(obj.constructor.prototype||{},"isPrototypeOf")){return false;}// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own
	for(key in obj){}return key===undefined||hasOwn.call(obj,key);},isEmptyObject:function isEmptyObject(obj){var name;for(name in obj){return false;}return true;},type:function type(obj){if(obj==null){return obj+"";}// Support: Android<4.0, iOS<6 (functionish RegExp)
	return(typeof obj==="undefined"?"undefined":_typeof(obj))==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj==="undefined"?"undefined":_typeof(obj);},// Evaluates a script in a global context
	globalEval:function globalEval(code){var script,indirect=eval;code=jQuery.trim(code);if(code){// If the code includes a valid, prologue position
	// strict mode pragma, execute code by injecting a
	// script tag into the document.
	if(code.indexOf("use strict")===1){script=document.createElement("script");script.text=code;document.head.appendChild(script).parentNode.removeChild(script);}else{// Otherwise, avoid the DOM node creation, insertion
	// and removal by using an indirect global eval
	indirect(code);}}},// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase:function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function each(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}return obj;},// Support: Android<4.1
	trim:function trim(text){return text==null?"":(text+"").replace(rtrim,"");},// results is for internal usage only
	makeArray:function makeArray(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}return ret;},inArray:function inArray(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},merge:function merge(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}first.length=i;return first;},grep:function grep(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;// Go through the array, only saving the items
	// that pass the validator function
	for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}return matches;},// arg is for internal usage only
	map:function map(elems,callback,arg){var length,value,i=0,ret=[];// Go through the array, translating each of the items to their new values
	if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}// Go through every key on the object,
	}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}// Flatten any nested arrays
	return concat.apply([],ret);},// A global GUID counter for objects
	guid:1,// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy:function proxy(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if(!jQuery.isFunction(fn)){return undefined;}// Simulated bind
	args=_slice.call(arguments,2);proxy=function proxy(){return fn.apply(context||this,args.concat(_slice.call(arguments)));};// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now,// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support:support});// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}/* jshint ignore: end */// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length=!!obj&&"length"in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj;}var Sizzle=/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,// Local document vars
	setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,// Instance-specific data
	expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function sortOrder(a,b){if(a===b){hasDuplicate=true;}return 0;},// General-purpose constants
	MAX_NEGATIVE=1<<31,// Instance methods
	hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf=function indexOf(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// Regular expressions
	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace="[\\x20\\t\\r\\n\\f]",// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+// Operator (capture 2)
	"*([*^$|!~]?=)"+whitespace+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
	"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
	// 1. quoted (capture 3; capture 4 or capture 5)
	"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+// 2. simple (capture 6)
	"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+// 3. anything else (capture 2)
	".*"+")\\)|)",// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),// For use in libraries implementing .is()
	// We use this for POS matching in `select`
	"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g,// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function funescape(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;// NaN means non-codepoint
	// Support: Firefox<24
	// Workaround erroneous numeric interpretation of +"0x"
	return high!==high||escapedWhitespace?escaped:high<0?// BMP codepoint
	String.fromCharCode(high+0x10000):// Supplemental Plane codepoint (surrogate pair)
	String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler=function unloadHandler(){setDocument();};// Optimize for push.apply( _, NodeList )
	try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes);// Support: Android<4.0
	// Detect silently failing push.apply
	arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?// Leverage slice if possible
	function(target,els){push_native.apply(target,slice.call(els));}:// Support: IE<9
	// Otherwise append directly
	function(target,els){var j=target.length,i=0;// Can't trust NodeList.length
	while(target[j++]=els[i++]){}target.length=j-1;}};}function Sizzle(selector,context,results,seed){var m,i,elem,nid,nidselect,match,groups,newSelector,newContext=context&&context.ownerDocument,// nodeType defaults to 9, since context defaults to document
	nodeType=context?context.nodeType:9;results=results||[];// Return early from calls with invalid selector or context
	if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}// Try to shortcut find operations (as opposed to filters) in HTML documents
	if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}context=context||document;if(documentIsHTML){// If the selector is sufficiently simple, try using a "get*By*" DOM method
	// (excepting DocumentFragment context, where the methods don't exist)
	if(nodeType!==11&&(match=rquickExpr.exec(selector))){// ID selector
	if(m=match[1]){// Document context
	if(nodeType===9){if(elem=context.getElementById(m)){// Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(elem.id===m){results.push(elem);return results;}}else{return results;}// Element context
	}else{// Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}// Type selector
	}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;// Class selector
	}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}// Take advantage of querySelectorAll
	if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector;// qSA looks outside Element context, which is not what we want
	// Thanks to Andrew Dupont for this workaround technique
	// Support: IE <=8
	// Exclude object elements
	}else if(context.nodeName.toLowerCase()!=="object"){// Capture the context ID, setting it first if necessary
	if(nid=context.getAttribute("id")){nid=nid.replace(rescape,"\\$&");}else{context.setAttribute("id",nid=expando);}// Prefix every selector in the list
	groups=tokenize(selector);i=groups.length;nidselect=ridentifier.test(nid)?"#"+nid:"[id='"+nid+"']";while(i--){groups[i]=nidselect+" "+toSelector(groups[i]);}newSelector=groups.join(",");// Expand context for sibling selectors
	newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(nid===expando){context.removeAttribute("id");}}}}}}// All others
	return select(selector.replace(rtrim,"$1"),context,results,seed);}/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */function createCache(){var keys=[];function cache(key,value){// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
	if(keys.push(key+" ")>Expr.cacheLength){// Only keep the most recent entries
	delete cache[keys.shift()];}return cache[key+" "]=value;}return cache;}/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */function markFunction(fn){fn[expando]=true;return fn;}/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */function assert(fn){var div=document.createElement("div");try{return!!fn(div);}catch(e){return false;}finally{// Remove from its parent by default
	if(div.parentNode){div.parentNode.removeChild(div);}// release memory in IE
	div=null;}}/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-(~a.sourceIndex||MAX_NEGATIVE);// Use IE sourceIndex if available on both nodes
	if(diff){return diff;}// Check if b follows a
	if(cur){while(cur=cur.nextSibling){if(cur===b){return-1;}}}return a?1:-1;}/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;// Match elements found at the specified indexes
	while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j]);}}});});}/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}// Expose support vars for convenience
	support=Sizzle.support={};/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */isXML=Sizzle.isXML=function(elem){// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */setDocument=Sizzle.setDocument=function(node){var hasCompare,parent,doc=node?node.ownerDocument||node:preferredDoc;// Return early if doc is invalid or already selected
	if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}// Update global variables
	document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if((parent=document.defaultView)&&parent.top!==parent){// Support: IE 11
	if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,false);// Support: IE 9 - 10 only
	}else if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler);}}/* Attributes
		---------------------------------------------------------------------- */// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes=assert(function(div){div.className="i";return!div.getAttribute("className");});/* getElement(s)By*
		---------------------------------------------------------------------- */// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName=assert(function(div){div.appendChild(document.createComment(""));return!div.getElementsByTagName("*").length;});// Support: IE<9
	support.getElementsByClassName=rnative.test(document.getElementsByClassName);// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById=assert(function(div){docElem.appendChild(div).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});// ID find and filter
	if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var m=context.getElementById(id);return m?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else{// Support: IE6/7
	// getElementById is not reliable as a find shortcut
	delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};}// Tag
	Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);// DocumentFragment nodes don't have gEBTN
	}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
	results=context.getElementsByTagName(tag);// Filter out possible comments
	if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem);}}return tmp;}return results;};// Class
	Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};/* QSA/matchesSelector
		---------------------------------------------------------------------- */// QSA and matchesSelector support
	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches=[];// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA=[];if(support.qsa=rnative.test(document.querySelectorAll)){// Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert(function(div){// Select is set to empty string on purpose
	// This is to test IE's treatment of not explicitly
	// setting a boolean content attribute,
	// since its presence should be enough
	// http://bugs.jquery.com/ticket/12359
	docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";// Support: IE8, Opera 11-12.16
	// Nothing should be selected when empty strings follow ^= or $= or *=
	// The test attribute must be unknown in Opera but "safe" for WinRT
	// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
	if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}// Support: IE8
	// Boolean attributes and "value" are not treated correctly
	if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
	if(!div.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}// Webkit/Opera - :checked should return selected option elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}// Support: Safari 8+, iOS 8+
	// https://bugs.webkit.org/show_bug.cgi?id=136851
	// In-page `selector#id sibing-combinator selector` fails
	if(!div.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(div){// Support: Windows 8 Native Apps
	// The type and name attributes are restricted during .innerHTML assignment
	var input=document.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D");// Support: IE8
	// Enforce case-sensitivity of name attribute
	if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
	// IE8 throws error here and will not see later tests
	if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");}// Opera 10-11 does not throw on post-comma invalid pseudos
	div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(div){// Check to see if it's possible to do matchesSelector
	// on a disconnected node (IE 9)
	support.disconnectedMatch=matches.call(div,"div");// This should fail with an exception
	// Gecko does not error, returns false instead
	matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));/* Contains
		---------------------------------------------------------------------- */hasCompare=rnative.test(docElem.compareDocumentPosition);// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true;}}}return false;};/* Sorting
		---------------------------------------------------------------------- */// Document order sorting
	sortOrder=hasCompare?function(a,b){// Flag for duplicate removal
	if(a===b){hasDuplicate=true;return 0;}// Sort on method existence if only one input has compareDocumentPosition
	var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}// Calculate position if both inputs belong to the same document
	compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):// Otherwise we know they are disconnected
	1;// Disconnected nodes
	if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){// Choose the first element that is related to our preferred document
	if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}// Maintain original order
	return sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;}return compare&4?-1:1;}:function(a,b){// Exit early if the nodes are identical
	if(a===b){hasDuplicate=true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];// Parentless nodes are either documents or disconnected
	if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;// If the nodes are siblings, we can do a quick check
	}else if(aup===bup){return siblingCheck(a,b);}// Otherwise we need full lists of their ancestors for comparison
	cur=a;while(cur=cur.parentNode){ap.unshift(cur);}cur=b;while(cur=cur.parentNode){bp.unshift(cur);}// Walk down the tree looking for a discrepancy
	while(ap[i]===bp[i]){i++;}return i?// Do a sibling check if the nodes have a common ancestor
	siblingCheck(ap[i],bp[i]):// Otherwise nodes in our document sort first
	ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){// Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);}// Make sure that attribute selectors are quoted
	expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);// IE 9's matchesSelector returns false on disconnected nodes
	if(ret||support.disconnectedMatch||// As well, disconnected nodes are said to be in a document
	// fragment in IE 9
	elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){// Set document vars if needed
	if((context.ownerDocument||context)!==document){setDocument(context);}return contains(context,elem);};Sizzle.attr=function(elem,name){// Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()],// Don't get fooled by Object.prototype properties (jQuery #13807)
	val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i);}}while(j--){results.splice(duplicates[j],1);}}// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput=null;return results;};/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){// If no nodeType, this is expected to be an array
	while(node=elem[i++]){// Do not traverse comment nodes
	ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){// Use textContent for elements
	// innerText usage removed for consistency of new lines (jQuery #11153)
	if(typeof elem.textContent==="string"){return elem.textContent;}else{// Traverse its children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}// Do not include comment or processing instruction nodes
	return ret;};Expr=Sizzle.selectors={// Can be adjusted by the user
	cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function ATTR(match){match[1]=match[1].replace(runescape,funescape);// Move the given value to match[3] whether quoted or unquoted
	match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}return match.slice(0,4);},"CHILD":function CHILD(match){/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){// nth-* requires argument
	if(!match[3]){Sizzle.error(match[0]);}// numeric x and y parameters for Expr.filter.CHILD
	// remember that false/true cast respectively to 0/1
	match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd");// other types prohibit arguments
	}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function PSEUDO(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}// Accept quoted arguments as-is
	if(match[3]){match[2]=match[4]||match[5]||"";// Strip excess characters from unquoted arguments
	}else if(unquoted&&rpseudo.test(unquoted)&&(// Get excess from tokenize (recursively)
	excess=tokenize(unquoted,true))&&(// advance to the next closing parenthesis
	excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){// excess is a negative index
	match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}// Return only captures needed by the pseudo filter method (type and argument)
	return match.slice(0,3);}},filter:{"TAG":function TAG(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function CLASS(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function ATTR(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}if(!operator){return true;}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function CHILD(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?// Shortcut for :nth-*(n)
	function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){// :(first|last|only)-(child|of-type)
	if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}// Reverse direction for :only-* (if we haven't yet done so)
	start=dir=type==="only"&&!start&&"nextSibling";}return true;}start=[forward?parent.firstChild:parent.lastChild];// non-xml :nth-child(...) stores cache data on `parent`
	if(forward&&useCache){// Seek `elem` from a previously-cached index
	// ...in a gzip-friendly way
	node=parent;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||(// Fallback to seeking `elem` from the start
	diff=nodeIndex=0)||start.pop()){// When found, cache indexes on `parent` and break
	if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{// Use previously-cached element index if available
	if(useCache){// ...in a gzip-friendly way
	node=elem;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}// xml :nth-child(...)
	// or :nth-last-child(...) or :nth(-last)?-of-type(...)
	if(diff===false){// Use the same loop as above to seek `elem` from the start
	while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){// Cache the index of each encountered element
	if(useCache){outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}if(node===elem){break;}}}}}// Incorporate the offset, then check against cycle size
	diff-=last;return diff===first||diff%first===0&&diff/first>=0;}};},"PSEUDO":function PSEUDO(pseudo,argument){// pseudo-class names are case-insensitive
	// http://www.w3.org/TR/selectors/#pseudo-classes
	// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
	// Remember that setFilters inherits from pseudos
	var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);// The user may use createPseudo to indicate that
	// arguments are needed to create the filter function
	// just as Sizzle does
	if(fn[expando]){return fn(argument);}// But maintain support for old signatures
	if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{// Potentially complex pseudos
	"not":markFunction(function(selector){// Trim the selector passed to compile
	// to avoid treating leading and trailing
	// spaces as combinators
	var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;// Match elements unmatched by `matcher`
	while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);// Don't keep the element (issue #299)
	input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),// "Whether an element is represented by a :lang() selector
	// is based solely on the element's language value
	// being equal to the identifier C,
	// or beginning with the identifier C immediately followed by "-".
	// The matching of C against the element's language value is performed case-insensitively.
	// The identifier C does not have to be a valid language name."
	// http://www.w3.org/TR/selectors/#lang-pseudo
	"lang":markFunction(function(lang){// lang value must be a valid identifier
	if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),// Miscellaneous
	"target":function target(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function root(elem){return elem===docElem;},"focus":function focus(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},// Boolean properties
	"enabled":function enabled(elem){return elem.disabled===false;},"disabled":function disabled(elem){return elem.disabled===true;},"checked":function checked(elem){// In CSS3, :checked should return both checked and selected elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected;},"selected":function selected(elem){// Accessing this property makes selected-by-default
	// options in Safari work properly
	if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected===true;},// Contents
	"empty":function empty(elem){// http://www.w3.org/TR/selectors/#empty-pseudo
	// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
	//   but not by others (comment: 8; processing instruction: 7; etc.)
	// nodeType < 6 works because attributes (2) do not appear as children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}return true;},"parent":function parent(elem){return!Expr.pseudos["empty"](elem);},// Element/input types
	"header":function header(elem){return rheader.test(elem.nodeName);},"input":function input(elem){return rinputs.test(elem.nodeName);},"button":function button(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function text(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&(// Support: IE<8
	// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
	(attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},// Position-in-collection
	"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];// Add button/input type pseudos
	for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}// Easy API for creating new setFilters
	function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){// Comma and first run
	if(!matched||(match=rcomma.exec(soFar))){if(match){// Don't consume trailing commas as valid
	soFar=soFar.slice(match[0].length)||soFar;}groups.push(tokens=[]);}matched=false;// Combinators
	if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched,// Cast descendant combinators to space
	type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}// Filters
	for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}if(!matched){break;}}// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly?soFar.length:soFar?Sizzle.error(selector):// Cache the tokens
	tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first?// Check against closest ancestor/preceding element
	function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}:// Check against all ancestor/preceding elements
	function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
	if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if((oldCache=uniqueCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){// Assign to newCache so results back-propagate to previous elements
	return newCache[2]=oldCache[2];}else{// Reuse newcache so results back-propagate to previous elements
	uniqueCache[dir]=newCache;// A match means we're done; a fail means we have to keep checking
	if(newCache[2]=matcher(elem,context,xml)){return true;}}}}}};}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,// Get initial elements from seed or context
	elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
	matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
	postFinder||(seed?preFilter:preexisting||postFilter)?// ...intermediate processing is necessary
	[]:// ...otherwise use results directly
	results:matcherIn;// Find primary matches
	if(matcher){matcher(matcherIn,matcherOut,context,xml);}// Apply postFilter
	if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);// Un-match failing elements by moving them back to matcherIn
	i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}if(seed){if(postFinder||preFilter){if(postFinder){// Get the final matcherOut by condensing this intermediate into postFinder contexts
	temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){// Restore matcherIn since elem is not yet a final match
	temp.push(matcherIn[i]=elem);}}postFinder(null,matcherOut=[],temp,xml);}// Move matched elements from seed to results to keep them synchronized
	i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}// Add elements to results, through postFinder if defined
	}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
	matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));// Avoid hanging onto element (issue #299)
	checkContext=null;return ret;}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);// Return special upon seeing a positional matcher
	if(matcher[expando]){// Find the next relative operator (if any) for proper handling
	j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
	tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function superMatcher(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,// We must always have either seed elements or outermost context
	elems=seed||byElement&&Expr.find["TAG"]("*",outermost),// Use integer dirruns iff this is the outermost matcher
	dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||0.1,len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}// Add elements passing elementMatchers directly to results
	// Support: IE<9, Safari
	// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
	for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}while(matcher=elementMatchers[j++]){if(matcher(elem,context||document,xml)){results.push(elem);break;}}if(outermost){dirruns=dirrunsUnique;}}// Track unmatched elements for set filters
	if(bySet){// They will have gone through all possible matchers
	if(elem=!matcher&&elem){matchedCount--;}// Lengthen the array for every element, matched or not
	if(seed){unmatched.push(elem);}}}// `i` is now the count of elements visited above, and adding it to `matchedCount`
	// makes the latter nonnegative.
	matchedCount+=i;// Apply set filters to unmatched elements
	// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
	// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
	// no element matchers and no seed.
	// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
	// case, which will result in a "00" `matchedCount` that differs from `i` but is also
	// numerically zero.
	if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml);}if(seed){// Reintegrate element matches to eliminate the need for sorting
	if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}// Discard index placeholder values to get only actual matches
	setMatched=condense(setMatched);}// Add matches to results
	push.apply(results,setMatched);// Seedless set matches succeeding multiple successful matchers stipulate sorting
	if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results);}}// Override manipulation of globals by nested matchers
	if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile=Sizzle.compile=function(selector,match/* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){// Generate a function of recursive functions that can be used to check each element
	if(!match){match=tokenize(selector);}i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}// Cache the compiled function
	cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));// Save selector and tokenization
	cached.selector=selector;}return cached;};/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);results=results||[];// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if(match.length===1){// Reduce context if the leading compound selector is an ID
	tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;// Precompiled matchers will still verify ancestry, so step up a level
	}else if(compiled){context=context.parentNode;}selector=selector.slice(tokens.shift().value.length);}// Fetch a seed set for right-to-left matching
	i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];// Abort if we hit a combinator
	if(Expr.relative[type=token.type]){break;}if(find=Expr.find[type]){// Search, expanding context for leading sibling combinators
	if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){// If seed is empty or no tokens remain, we can return early
	tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}}// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};// One-time assignments
	// Sort stability
	support.sortStable=expando.split("").sort(sortOrder).join("")===expando;// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates=!!hasDuplicate;// Initialize against the default document
	setDocument();// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached=assert(function(div1){// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition(document.createElement("div"))&1;});// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if(!assert(function(div){return div.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}return Sizzle;}(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;var dir=function dir(elem,_dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[_dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;};var _siblings=function _siblings(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}return matched;};var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;var risSimple=/^.[^:#\[\.,]*$/;// Implement the identical functionality for filter and not
	function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){/* jshint -W018 */return!!qualifier.call(elem,i,elem)!==not;});}if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not;});}if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}qualifier=jQuery.filter(qualifier,elements);}return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not;});}jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function find(selector){var i,len=this.length,ret=[],self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}// Needed because $( selector, context ) becomes $( context ).find( selector )
	ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret;},filter:function filter(selector){return this.pushStack(winnow(this,selector||[],false));},not:function not(selector){return this.pushStack(winnow(this,selector||[],true));},is:function is(selector){return!!winnow(this,// If this is a positional/relative selector, check membership in the returned set
	// so $("p:first").is("p:last") won't return true for a doc with two "p".
	typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});// Initialize a jQuery object
	// A central reference to the root jQuery(document)
	var rootjQuery,// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;// HANDLE: $(""), $(null), $(undefined), $(false)
	if(!selector){return this;}// Method init() accepts an alternate rootjQuery
	// so migrate can support jQuery.sub (gh-2101)
	root=root||rootjQuery;// Handle HTML strings
	if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){// Assume that strings that start and end with <> are HTML and skip the regex check
	match=[null,selector,null];}else{match=rquickExpr.exec(selector);}// Match html or make sure no context is specified for #id
	if(match&&(match[1]||!context)){// HANDLE: $(html) -> $(array)
	if(match[1]){context=context instanceof jQuery?context[0]:context;// Option to run scripts is true for back-compat
	// Intentionally let the error be thrown if parseHTML is not present
	jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));// HANDLE: $(html, props)
	if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){// Properties of context are called as methods if possible
	if(jQuery.isFunction(this[match])){this[match](context[match]);// ...and otherwise set as attributes
	}else{this.attr(match,context[match]);}}}return this;// HANDLE: $(#id)
	}else{elem=document.getElementById(match[2]);// Support: Blackberry 4.6
	// gEBID returns nodes no longer in the document (#6963)
	if(elem&&elem.parentNode){// Inject the element directly into the jQuery object
	this.length=1;this[0]=elem;}this.context=document;this.selector=selector;return this;}// HANDLE: $(expr, $(...))
	}else if(!context||context.jquery){return(context||root).find(selector);// HANDLE: $(expr, context)
	// (which is just equivalent to: $(context).find(expr)
	}else{return this.constructor(context).find(selector);}// HANDLE: $(DOMElement)
	}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;// HANDLE: $(function)
	// Shortcut for document ready
	}else if(jQuery.isFunction(selector)){return root.ready!==undefined?root.ready(selector):// Execute immediately if ready is not present
	selector(jQuery);}if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}return jQuery.makeArray(selector,this);};// Give the init function the jQuery prototype for later instantiation
	init.prototype=jQuery.fn;// Initialize central reference
	rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function has(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function closest(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){// Always skip document fragments
	if(cur.nodeType<11&&(pos?pos.index(cur)>-1:// Don't pass non-elements to Sizzle
	cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},// Determine the position of an element within the set
	index:function index(elem){// No argument, return index in parent
	if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;}// Index in selector
	if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}// Locate the position of the desired element
	return indexOf.call(this,// If it receives a jQuery object, the first element is used
	elem.jquery?elem[0]:elem);},add:function add(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function addBack(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function parents(elem){return dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return dir(elem,"parentNode",until);},next:function next(elem){return sibling(elem,"nextSibling");},prev:function prev(elem){return sibling(elem,"previousSibling");},nextAll:function nextAll(elem){return dir(elem,"nextSibling");},prevAll:function prevAll(elem){return dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function siblings(elem){return _siblings((elem.parentNode||{}).firstChild,elem);},children:function children(elem){return _siblings(elem.firstChild);},contents:function contents(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}if(this.length>1){// Remove duplicates
	if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}// Reverse order for parents* and prev-derivatives
	if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnotwhite=/\S+/g;// Convert String-formatted options into Object-formatted ones
	function createOptions(options){var object={};jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true;});return object;}/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */jQuery.Callbacks=function(options){// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var// Flag to know if list is currently firing
	firing,// Last fire value for non-forgettable lists
	memory,// Flag to know if list was already fired
	_fired,// Flag to prevent firing
	_locked,// Actual callback list
	list=[],// Queue of execution data for repeatable lists
	queue=[],// Index of currently firing callback (modified by add/remove as needed)
	firingIndex=-1,// Fire callbacks
	fire=function fire(){// Enforce single-firing
	_locked=options.once;// Execute callbacks for all pending executions,
	// respecting firingIndex overrides and runtime changes
	_fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){// Run callback and check for early termination
	if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){// Jump to end and forget the data so .add doesn't re-fire
	firingIndex=list.length;memory=false;}}}// Forget the data if we're done with it
	if(!options.memory){memory=false;}firing=false;// Clean up if we're done firing for good
	if(_locked){// Keep an empty list if we have data for future add calls
	if(memory){list=[];// Otherwise, this object is spent
	}else{list="";}}},// Actual Callbacks object
	self={// Add a callback or a collection of callbacks to the list
	add:function add(){if(list){// If we have memory from a past run, we should fire after adding
	if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}(function add(args){jQuery.each(args,function(_,arg){if(jQuery.isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){// Inspect recursively
	add(arg);}});})(arguments);if(memory&&!firing){fire();}}return this;},// Remove a callback from the list
	remove:function remove(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);// Handle firing indexes
	if(index<=firingIndex){firingIndex--;}}});return this;},// Check if a given callback is in the list.
	// If no argument is given, return whether or not list has callbacks attached.
	has:function has(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},// Remove all callbacks from the list
	empty:function empty(){if(list){list=[];}return this;},// Disable .fire and .add
	// Abort any current/pending executions
	// Clear all callbacks and values
	disable:function disable(){_locked=queue=[];list=memory="";return this;},disabled:function disabled(){return!list;},// Disable .fire
	// Also disable .add unless we have memory (since it would have no effect)
	// Abort any pending executions
	lock:function lock(){_locked=queue=[];if(!memory){list=memory="";}return this;},locked:function locked(){return!!_locked;},// Call all callbacks with the given context and arguments
	fireWith:function fireWith(context,args){if(!_locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}return this;},// Call all the callbacks with the given arguments
	fire:function fire(){self.fireWith(this,arguments);return this;},// To know if the callbacks have already been called at least once
	fired:function fired(){return!!_fired;}};return self;};jQuery.extend({Deferred:function Deferred(func){var tuples=[// action, add listener, listener list, final state
	["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],_state="pending",_promise={state:function state(){return _state;},always:function always(){deferred.done(arguments).fail(arguments);return this;},then:function then()/* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i];// deferred[ done | fail | progress ] for forwarding actions to newDefer
	deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this===_promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();},// Get a promise for this deferred
	// If obj is provided, the promise aspect is added to the object
	promise:function promise(obj){return obj!=null?jQuery.extend(obj,_promise):_promise;}},deferred={};// Keep pipe for back-compat
	_promise.pipe=_promise.then;// Add list-specific methods
	jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];// promise[ done | fail | progress ] = list.add
	_promise[tuple[1]]=list.add;// Handle state
	if(stateString){list.add(function(){// state = [ resolved | rejected ]
	_state=stateString;// [ reject_list | resolve_list ].disable; progress_list.lock
	},tuples[i^1][2].disable,tuples[2][2].lock);}// deferred[ resolve | reject | notify ]
	deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?_promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});// Make the deferred a promise
	_promise.promise(deferred);// Call given func if any
	if(func){func.call(deferred,deferred);}// All done!
	return deferred;},// Deferred helper
	when:function when(subordinate/* , ..., subordinateN */){var i=0,resolveValues=_slice.call(arguments),length=resolveValues.length,// the count of uncompleted subordinates
	remaining=length!==1||subordinate&&jQuery.isFunction(subordinate.promise)?length:0,// the master Deferred.
	// If resolveValues consist of only a single Deferred, just use that.
	deferred=remaining===1?subordinate:jQuery.Deferred(),// Update function for both resolve and progress values
	updateFunc=function updateFunc(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?_slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(! --remaining){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts;// Add listeners to Deferred subordinates; treat others as resolved
	if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().progress(updateFunc(i,progressContexts,progressValues)).done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject);}else{--remaining;}}}// If we're not waiting on anything, resolve the master
	if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}return deferred.promise();}});// The deferred used on DOM ready
	var readyList;jQuery.fn.ready=function(fn){// Add the callback
	jQuery.ready.promise().done(fn);return this;};jQuery.extend({// Is the DOM ready to be used? Set to true once it occurs.
	isReady:false,// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait:1,// Hold (or release) the ready event
	holdReady:function holdReady(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},// Handle when the DOM is ready
	ready:function ready(wait){// Abort if there are pending holds or we're already ready
	if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}// Remember that the DOM is ready
	jQuery.isReady=true;// If a normal DOM Ready event fired, decrement, and wait if need be
	if(wait!==true&&--jQuery.readyWait>0){return;}// If there are functions bound, to execute
	readyList.resolveWith(document,[jQuery]);// Trigger any bound ready events
	if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready");}}});/**
	 * The ready event handler and self cleanup method
	 */function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE9-10 only
	// Older IE sometimes signals "interactive" too soon
	if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout(jQuery.ready);}else{// Use the handy event callback
	document.addEventListener("DOMContentLoaded",completed);// A fallback to window.onload, that will always work
	window.addEventListener("load",completed);}}return readyList.promise(obj);};// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access=function access(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;// Sets many values
	if(jQuery.type(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}// Sets one value
	}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}if(bulk){// Bulk operations run against the entire set
	if(raw){fn.call(elems,value);fn=null;// ...except when executing function values
	}else{bulk=fn;fn=function fn(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}return chainable?elems:// Gets
	bulk?fn.call(elems):len?fn(elems[0],key):emptyGet;};var acceptData=function acceptData(owner){// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */return owner.nodeType===1||owner.nodeType===9||!+owner.nodeType;};function Data(){this.expando=jQuery.expando+Data.uid++;}Data.uid=1;Data.prototype={register:function register(owner,initial){var value=initial||{};// If it is a node unlikely to be stringify-ed or looped over
	// use plain assignment
	if(owner.nodeType){owner[this.expando]=value;// Otherwise secure it in a non-enumerable, non-writable property
	// configurability must be true to allow the property to be
	// deleted with the delete operator
	}else{Object.defineProperty(owner,this.expando,{value:value,writable:true,configurable:true});}return owner[this.expando];},cache:function cache(owner){// We can accept data for non-element nodes in modern browsers,
	// but we should not, see #8335.
	// Always return an empty object.
	if(!acceptData(owner)){return{};}// Check if the owner object already has a cache
	var value=owner[this.expando];// If not, create one
	if(!value){value={};// We can accept data for non-element nodes in modern browsers,
	// but we should not, see #8335.
	// Always return an empty object.
	if(acceptData(owner)){// If it is a node unlikely to be stringify-ed or looped over
	// use plain assignment
	if(owner.nodeType){owner[this.expando]=value;// Otherwise secure it in a non-enumerable property
	// configurable must be true to allow the property to be
	// deleted when data is removed
	}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}return value;},set:function set(owner,data,value){var prop,cache=this.cache(owner);// Handle: [ owner, key, value ] args
	if(typeof data==="string"){cache[data]=value;// Handle: [ owner, { properties } ] args
	}else{// Copy the properties one-by-one to the cache object
	for(prop in data){cache[prop]=data[prop];}}return cache;},get:function get(owner,key){return key===undefined?this.cache(owner):owner[this.expando]&&owner[this.expando][key];},access:function access(owner,key,value){var stored;// In cases where either:
	//
	//   1. No key was specified
	//   2. A string key was specified, but no value provided
	//
	// Take the "read" path and allow the get method to determine
	// which value to return, respectively either:
	//
	//   1. The entire cache object
	//   2. The data stored at the key
	//
	if(key===undefined||key&&typeof key==="string"&&value===undefined){stored=this.get(owner,key);return stored!==undefined?stored:this.get(owner,jQuery.camelCase(key));}// When the key is not a string, or both a key and value
	// are specified, set or extend (existing objects) with either:
	//
	//   1. An object of properties
	//   2. A key and value
	//
	this.set(owner,key,value);// Since the "set" path can have two possible entry points
	// return the expected data based on which path was taken[*]
	return value!==undefined?value:key;},remove:function remove(owner,key){var i,name,camel,cache=owner[this.expando];if(cache===undefined){return;}if(key===undefined){this.register(owner);}else{// Support array or space separated string of keys
	if(jQuery.isArray(key)){// If "name" is an array of keys...
	// When data is initially created, via ("key", "val") signature,
	// keys will be converted to camelCase.
	// Since there is no way to tell _how_ a key was added, remove
	// both plain key and camelCase key. #12786
	// This will only penalize the array argument path.
	name=key.concat(key.map(jQuery.camelCase));}else{camel=jQuery.camelCase(key);// Try the string as a key before any manipulation
	if(key in cache){name=[key,camel];}else{// If a key with the spaces exists, use it.
	// Otherwise, create an array by matching non-whitespace
	name=camel;name=name in cache?[name]:name.match(rnotwhite)||[];}}i=name.length;while(i--){delete cache[name[i]];}}// Remove the expando if there's no more data
	if(key===undefined||jQuery.isEmptyObject(cache)){// Support: Chrome <= 35-45+
	// Webkit & Blink performance suffers when deleting properties
	// from DOM nodes, so set to undefined instead
	// https://code.google.com/p/chromium/issues/detail?id=378607
	if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function hasData(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function dataAttr(elem,key,data){var name;// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:// Only convert to a number if it doesn't change the string
	+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){}// Make sure we set the data so it isn't changed later
	dataUser.set(elem,key,data);}else{data=undefined;}}return data;}jQuery.extend({hasData:function hasData(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function data(elem,name,_data){return dataUser.access(elem,name,_data);},removeData:function removeData(elem,name){dataUser.remove(elem,name);},// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data:function _data(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function _removeData(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function data(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;// Gets all values
	if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){// Support: IE11+
	// The attrs elements can be null (#14894)
	if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}dataPriv.set(elem,"hasDataAttrs",true);}}return data;}// Sets multiple values
	if((typeof key==="undefined"?"undefined":_typeof(key))==="object"){return this.each(function(){dataUser.set(this,key);});}return access(this,function(value){var data,camelKey;// The calling jQuery object (element matches) is not empty
	// (and therefore has an element appears at this[ 0 ]) and the
	// `value` parameter was not undefined. An empty jQuery object
	// will result in `undefined` for elem = this[ 0 ] which will
	// throw an exception if an attempt to read a data cache is made.
	if(elem&&value===undefined){// Attempt to get data from the cache
	// with the key as-is
	data=dataUser.get(elem,key)||// Try to find dashed key if it exists (gh-2779)
	// This is for 2.2.x only
	dataUser.get(elem,key.replace(rmultiDash,"-$&").toLowerCase());if(data!==undefined){return data;}camelKey=jQuery.camelCase(key);// Attempt to get data from the cache
	// with the key camelized
	data=dataUser.get(elem,camelKey);if(data!==undefined){return data;}// Attempt to "discover" the data in
	// HTML5 custom data-* attrs
	data=dataAttr(elem,camelKey,undefined);if(data!==undefined){return data;}// We tried really hard, but the data doesn't exist.
	return;}// Set the data...
	camelKey=jQuery.camelCase(key);this.each(function(){// First, attempt to store a copy or reference of any
	// data that might've been store with a camelCased key.
	var data=dataUser.get(this,camelKey);// For HTML5 data-* attribute interop, we have to
	// store property names with dashes in a camelCase form.
	// This might not apply to all properties...*
	dataUser.set(this,camelKey,value);// *... In the case of properties that might _actually_
	// have dashes, we need to also store a copy of that
	// unchanged property.
	if(key.indexOf("-")>-1&&data!==undefined){dataUser.set(this,key,value);}});},null,value,arguments.length>1,null,true);},removeData:function removeData(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function queue(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);// Speed up dequeue by getting out quickly if this is just a lookup
	if(data){if(!queue||jQuery.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}return queue||[];}},dequeue:function dequeue(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function next(){jQuery.dequeue(elem,type);};// If the fx queue is dequeued, always remove the progress sentinel
	if(fn==="inprogress"){fn=queue.shift();startLength--;}if(fn){// Add a progress sentinel to prevent the fx queue from being
	// automatically dequeued
	if(type==="fx"){queue.unshift("inprogress");}// Clear up the last queue stop function
	delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength&&hooks){hooks.empty.fire();}},// Not public - generate a queueHooks object, or return the current one
	_queueHooks:function _queueHooks(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);// Ensure a hooks for this queue
	jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function clearQueue(type){return this.queue(type||"fx",[]);},// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise:function promise(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function isHidden(elem,el){// isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),// Starting value computation is required for potential unit mismatches
	initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){// Trust units reported by jQuery.css
	unit=unit||initialInUnit[3];// Make sure we update the tween properties later on
	valueParts=valueParts||[];// Iteratively approximate from a nonzero starting point
	initialInUnit=+initial||1;do{// If previous iteration zeroed out, double until we get *something*.
	// Use string for doubling so we don't accidentally see scale as unchanged below
	scale=scale||".5";// Adjust and apply
	initialInUnit=initialInUnit/scale;jQuery.style(elem,prop,initialInUnit+unit);// Update scale, tolerating zero or NaN from tween.cur()
	// Break the loop if scale is unchanged or perfect, or if we've just had enough.
	}while(scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations);}if(valueParts){initialInUnit=+initialInUnit||+initial||0;// Apply relative offset (+=/-=) if specified
	adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}return adjusted;}var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([\w:-]+)/;var rscriptType=/^$|\/(?:java|ecma)script/i;// We have to close these tags to support XHTML (#13200)
	var wrapMap={// Support: IE9
	option:[1,"<select multiple='multiple'>","</select>"],// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};// Support: IE9
	wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){// Support: IE9-11+
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret=typeof context.getElementsByTagName!=="undefined"?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!=="undefined"?context.querySelectorAll(tag||"*"):[];return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret;}// Mark scripts as having already been evaluated
	function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){// Add nodes directly
	if(jQuery.type(elem)==="object"){// Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,elem.nodeType?[elem]:elem);// Convert non-html into a text node
	}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));// Convert html into DOM nodes
	}else{tmp=tmp||fragment.appendChild(context.createElement("div"));// Deserialize a standard representation
	tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];// Descend through wrappers to the right content
	j=wrap[0];while(j--){tmp=tmp.lastChild;}// Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,tmp.childNodes);// Remember the top-level container
	tmp=fragment.firstChild;// Ensure the created nodes are orphaned (#12392)
	tmp.textContent="";}}}// Remove wrapper from fragment
	fragment.textContent="";i=0;while(elem=nodes[i++]){// Skip elements already in the context collection (trac-4087)
	if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}continue;}contains=jQuery.contains(elem.ownerDocument,elem);// Append to fragment
	tmp=getAll(fragment.appendChild(elem),"script");// Preserve script evaluation history
	if(contains){setGlobalEval(tmp);}// Capture executables
	if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}return fragment;}(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");// Support: Android 4.0-4.3, Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}function returnFalse(){return false;}// Support: IE9
	// See #13393 for more info
	function safeActiveElement(){try{return document.activeElement;}catch(err){}}function _on(elem,types,selector,data,fn,one){var origFn,type;// Types can be a map of types/handlers
	if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-Object, selector, data )
	if(typeof selector!=="string"){// ( types-Object, data )
	data=data||selector;selector=undefined;}for(type in types){_on(elem,type,selector,data,types[type],one);}return elem;}if(data==null&&fn==null){// ( types, fn )
	fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){// ( types, selector, fn )
	fn=data;data=undefined;}else{// ( types, data, fn )
	fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return elem;}if(one===1){origFn=fn;fn=function fn(event){// Can use an empty set, since event contains the info
	jQuery().off(event);return origFn.apply(this,arguments);};// Use same guid so caller can remove using origFn
	fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */jQuery.event={global:{},add:function add(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);// Don't attach events to noData or text/comment nodes (but allow plain objects)
	if(!elemData){return;}// Caller can pass in an object of custom data in lieu of the handler
	if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}// Make sure that the handler has a unique ID, used to find/remove it later
	if(!handler.guid){handler.guid=jQuery.guid++;}// Init the element's event structure and main handler, if this is the first
	if(!(events=elemData.events)){events=elemData.events={};}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){// Discard the second event of a jQuery.event.trigger() and
	// when an event is called after a page has unloaded
	return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}// Handle multiple events separated by a space
	types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// There *must* be a type, no attaching namespace-only handlers
	if(!type){continue;}// If event changes its type, use the special event handlers for the changed type
	special=jQuery.event.special[type]||{};// If selector defined, determine special event api type, otherwise given type
	type=(selector?special.delegateType:special.bindType)||type;// Update special based on newly reset type
	special=jQuery.event.special[type]||{};// handleObj is passed to all event handlers
	handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);// Init the event handler queue if we're the first
	if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;// Only use addEventListener if the special events handler returns false
	if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}// Add to the element's handler list, delegates in front
	if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}// Keep track of which events have ever been used, for event optimization
	jQuery.event.global[type]=true;}},// Detach an event or set of events from an element
	remove:function remove(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}// Once for each type.namespace in types; type may be omitted
	types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// Unbind all events (on this namespace, if provided) for the element
	if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");// Remove matching events
	origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}}// Remove generic event handler if we removed something and no more handlers exist
	// (avoids potential for endless recursion during removal of special event handlers)
	if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}}// Remove data and the expando if it's no longer used
	if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function dispatch(event){// Make a writable jQuery.Event from the native event object
	event=jQuery.event.fix(event);var i,j,ret,matched,handleObj,handlerQueue=[],args=_slice.call(arguments),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};// Use the fix-ed jQuery.Event rather than the (read-only) native event
	args[0]=event;event.delegateTarget=this;// Call the preDispatch hook for the mapped type, and let it bail if desired
	if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}// Determine handlers
	handlerQueue=jQuery.event.handlers.call(this,event,handlers);// Run delegates first; they may want to stop propagation beneath us
	i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){// Triggered event must either 1) have no namespace, or 2) have namespace(s)
	// a subset or equal to those in the bound event (both can have no namespace).
	if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}// Call the postDispatch hook for the mapped type
	if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function handlers(event,_handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=_handlers.delegateCount,cur=event.target;// Support (at least): Chrome, IE9
	// Find delegate handlers
	// Black-hole SVG <use> instance trees (#13180)
	//
	// Support: Firefox<=42+
	// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
	if(delegateCount&&cur.nodeType&&(event.type!=="click"||isNaN(event.button)||event.button<1)){for(;cur!==this;cur=cur.parentNode||this){// Don't check non-elements (#13208)
	// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
	if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=_handlers[i];// Don't conflict with Object.prototype properties (#13203)
	sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}if(matches[sel]){matches.push(handleObj);}}if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}}// Add the remaining (directly-bound) handlers
	if(delegateCount<_handlers.length){handlerQueue.push({elem:this,handlers:_handlers.slice(delegateCount)});}return handlerQueue;},// Includes some event props shared by KeyEvent and MouseEvent
	props:("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase "+"metaKey relatedTarget shiftKey target timeStamp view which").split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function filter(event,original){// Add which for key events
	if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}return event;}},mouseHooks:{props:("button buttons clientX clientY offsetX offsetY pageX pageY "+"screenX screenY toElement").split(" "),filter:function filter(event,original){var eventDoc,doc,body,button=original.button;// Calculate pageX/Y if missing and clientX/Y available
	if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);}// Add which for click: 1 === left; 2 === middle; 3 === right
	// Note: button is not normalized, so don't use it
	if(!event.which&&button!==undefined){event.which=button&1?1:button&2?3:button&4?2:0;}return event;}},fix:function fix(event){if(event[jQuery.expando]){return event;}// Create a writable copy of the event object and normalize some properties
	var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];}// Support: Cordova 2.5 (WebKit) (#13255)
	// All events should have a target; Cordova deviceready doesn't
	if(!event.target){event.target=document;}// Support: Safari 6.0+, Chrome<28
	// Target should not be a text node (#504, #13143)
	if(event.target.nodeType===3){event.target=event.target.parentNode;}return fixHook.filter?fixHook.filter(event,originalEvent):event;},special:{load:{// Prevent triggered image.load events from bubbling to window.load
	noBubble:true},focus:{// Fire native event if possible so blur/focus sequence is correct
	trigger:function trigger(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function trigger(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{// For checkbox, fire native event so checked state will be right
	trigger:function trigger(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();return false;}},// For cross-browser consistency, don't fire native .click() on links
	_default:function _default(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function postDispatch(event){// Support: Firefox 20+
	// Firefox doesn't alert if the returnValue field is not set.
	if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){// This "if" is needed for plain objects
	if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){// Allow instantiation without the 'new' keyword
	if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}// Event object
	if(src&&src.type){this.originalEvent=src;this.type=src.type;// Events bubbling up the document may have been marked as prevented
	// by a handler lower down the tree; reflect the correct value.
	this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&// Support: Android<4.0
	src.returnValue===false?returnTrue:returnFalse;// Event type
	}else{this.type=src;}// Put explicitly provided properties onto the event object
	if(props){jQuery.extend(this,props);}// Create a timestamp if incoming event doesn't have one
	this.timeStamp=src&&src.timeStamp||jQuery.now();// Mark it as fixed
	this[jQuery.expando]=true;};// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}this.stopPropagation();}};// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function handle(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;// For mouseenter/leave call the handler if related is outside the target.
	// NB: No relatedTarget if the mouse left/entered the browser window
	if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};});jQuery.fn.extend({on:function on(types,selector,data,fn){return _on(this,types,selector,data,fn);},one:function one(types,selector,data,fn){return _on(this,types,selector,data,fn,1);},off:function off(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){// ( event )  dispatched jQuery.Event
	handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-object [, selector] )
	for(type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){// ( types [, fn] )
	fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml=/<script|<style|<link/i,// checked="checked" or checked
	rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;// Manipulating tables requires a tbody
	function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;}// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}return elem;}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}// 1. Copy private data: events, handlers, etc.
	if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}// 2. Copy user data
	if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}// Fix IE bugs, see support tests
	function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
	if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;// Fails to return the selected option to the default selected state when cloning options
	}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}function domManip(collection,args,callback,ignored){// Flatten any nested arrays
	args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);// We can't cloneNode fragments that contain checked, in WebKit
	if(isFunction||l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value)){return collection.each(function(index){var self=collection.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}domManip(self,args,callback,ignored);});}if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}// Require either new content or an interest in ignored elements to invoke the callback
	if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;// Use the original fragment for the last item
	// instead of the first because it can end up
	// being emptied incorrectly in certain situations (#8070).
	for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);// Keep references to cloned scripts for later restoration
	if(hasScripts){// Support: Android<4.1, PhantomJS<2
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(scripts,getAll(node,"script"));}}callback.call(collection[i],node,i);}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;// Reenable scripts
	jQuery.map(scripts,restoreScript);// Evaluate executable scripts on first document insertion
	for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){// Optional AJAX dependency, but won't run scripts if not present
	if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{jQuery.globalEval(node.textContent.replace(rcleanScript,""));}}}}}}return collection;}function _remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}node.parentNode.removeChild(node);}}return elem;}jQuery.extend({htmlPrefilter:function htmlPrefilter(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function clone(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);// Fix IE cloning issues
	if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
	destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}// Copy the events from the original to the clone
	if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}// Preserve script evaluation history
	destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}// Return the cloned set
	return clone;},cleanData:function cleanData(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);// This is a shortcut to avoid jQuery.event.remove's overhead
	}else{jQuery.removeEvent(elem,type,data.handle);}}}// Support: Chrome <= 35-45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataPriv.expando]=undefined;}if(elem[dataUser.expando]){// Support: Chrome <= 35-45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({// Keep domManip exposed until 3.0 (gh-2225)
	domManip:domManip,detach:function detach(selector){return _remove(this,selector,true);},remove:function remove(selector){return _remove(this,selector);},text:function text(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function append(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function prepend(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function before(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function after(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function empty(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){// Prevent memory leaks
	jQuery.cleanData(getAll(elem,false));// Remove any remaining nodes
	elem.textContent="";}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}// See if we can take a shortcut and just use innerHTML
	if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};// Remove element nodes and prevent memory leaks
	if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}elem=0;// If using innerHTML throws an exception, use the fallback method
	}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(){var ignored=[];// Make the changes, replacing each non-ignored context element with the new content
	return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}// Force callback invocation
	},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);// Support: QtWebKit
	// .get() because push.apply(_, arraylike) throws
	push.apply(ret,elems.get());}return this.pushStack(ret);};});var iframe,elemdisplay={// Support: Firefox
	// We have to pre-define these values for FF (#10227)
	HTML:"block",BODY:"block"};/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */// Called only from within defaultDisplay
	function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.css(elem[0],"display");// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();return display;}/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc);// If the simple way fails, read from inside an iframe
	if(display==="none"||!display){// Use the already-created iframe if possible
	iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
	doc=iframe[0].contentDocument;// Support: IE
	doc.write();doc.close();display=actualDisplay(nodeName,doc);iframe.detach();}// Store the correct default display
	elemdisplay[nodeName]=display;}return display;}var rmargin=/^margin/;var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function getStyles(elem){// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
	// IE throws on elements created in popups
	// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
	var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}return view.getComputedStyle(elem);};var swap=function swap(elem,options,callback,args){var ret,name,old={};// Remember the old values, and insert the new ones
	for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.apply(elem,args||[]);// Revert the old values
	for(name in options){elem.style[name]=old[name];}return ret;};var documentElement=document.documentElement;(function(){var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");// Finish early in limited (non-browser) environments
	if(!div.style){return;}// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+"padding:0;margin-top:1px;position:absolute";container.appendChild(div);// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests(){div.style.cssText=// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;"+"position:relative;display:block;"+"margin:auto;border:1px;padding:1px;"+"top:1%;width:50%";div.innerHTML="";documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";reliableMarginLeftVal=divStyle.marginLeft==="2px";boxSizingReliableVal=divStyle.width==="4px";// Support: Android 4.0 - 4.3 only
	// Some styles come back with percentage values, even though they shouldn't
	div.style.marginRight="50%";pixelMarginRightVal=divStyle.marginRight==="4px";documentElement.removeChild(container);}jQuery.extend(support,{pixelPosition:function pixelPosition(){// This test is executed only once but we still do memoizing
	// since we can use the boxSizingReliable pre-computing.
	// No need to check if the test was already performed, though.
	computeStyleTests();return pixelPositionVal;},boxSizingReliable:function boxSizingReliable(){if(boxSizingReliableVal==null){computeStyleTests();}return boxSizingReliableVal;},pixelMarginRight:function pixelMarginRight(){// Support: Android 4.0-4.3
	// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
	// since that compresses better and they're computed together anyway.
	if(boxSizingReliableVal==null){computeStyleTests();}return pixelMarginRightVal;},reliableMarginLeft:function reliableMarginLeft(){// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
	if(boxSizingReliableVal==null){computeStyleTests();}return reliableMarginLeftVal;},reliableMarginRight:function reliableMarginRight(){// Support: Android 2.3
	// Check if div with explicit width and no margin-right incorrectly
	// gets computed margin-right based on width of container. (#3333)
	// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	// This support function is only executed once so no memoizing is needed.
	var ret,marginDiv=div.appendChild(document.createElement("div"));// Reset CSS: box-sizing; display; margin; border; padding
	marginDiv.style.cssText=div.style.cssText=// Support: Android 2.3
	// Vendor-prefix box-sizing
	"-webkit-box-sizing:content-box;box-sizing:content-box;"+"display:block;margin:0;border:0;padding:0";marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";documentElement.appendChild(container);ret=!parseFloat(window.getComputedStyle(marginDiv).marginRight);documentElement.removeChild(container);div.removeChild(marginDiv);return ret;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);ret=computed?computed.getPropertyValue(name)||computed[name]:undefined;// Support: Opera 12.1x only
	// Fall back to style even without computed
	// computed is undefined for elems on document fragments
	if((ret===""||ret===undefined)&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if(computed){// A tribute to the "awesome hack by Dean Edwards"
	// Android Browser returns percentage for some values,
	// but width seems to be reliably pixels.
	// This is against the CSSOM draft spec:
	// http://dev.w3.org/csswg/cssom/#resolved-values
	if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){// Remember the original values
	width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;// Put in the new values to get a computed value out
	style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;// Revert the changed values
	style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}return ret!==undefined?// Support: IE9-11+
	// IE returns zIndex value as an integer.
	ret+"":ret;}function addGetHookIf(conditionFn,hookFn){// Define the hook, we'll check on the first run if it's really needed.
	return{get:function get(){if(conditionFn()){// Hook not needed (or it's not possible to use it due
	// to missing dependency), remove it.
	delete this.get;return;}// Hook needed; redefine it so that the support test is not executed again.
	return(this.get=hookFn).apply(this,arguments);}};}var// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"],emptyStyle=document.createElement("div").style;// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name){// Shortcut for names that are not vendor prefixed
	if(name in emptyStyle){return name;}// Check for vendor prefixed names
	var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}function setPositiveNumber(elem,value,subtract){// Any relative (+/-) values have already been
	// normalized at this point
	var matches=rcssNum.exec(value);return matches?// Guard against undefined "subtract", e.g., when used as in cssHooks
	Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?// If we already have the right measurement, avoid augmentation
	4:// Otherwise initialize for horizontal or vertical properties
	name==="width"?1:0,val=0;for(;i<4;i+=2){// Both box models exclude margin, so add it if we want it
	if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}if(isBorderBox){// border-box includes padding, so remove it if we want content
	if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}// At this point, extra isn't border nor margin, so remove border
	if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{// At this point, extra isn't content, so add padding
	val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);// At this point, extra isn't content nor padding, so add border
	if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}return val;}function getWidthOrHeight(elem,name,extra){// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if(val<=0||val==null){// Fall back to computed then uncomputed css if necessary
	val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}// Computed unit is not pixels. Stop here and return.
	if(rnumnonpx.test(val)){return val;}// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);// Normalize "", auto, and prepare for extra
	val=parseFloat(val)||0;}// Use the active box-sizing model to add/subtract irrelevant styles
	return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)+"px";}function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}values[index]=dataPriv.get(elem,"olddisplay");display=elem.style.display;if(show){// Reset the inline display of this element to learn if it is
	// being hidden by cascaded rules or not
	if(!values[index]&&display==="none"){elem.style.display="";}// Set elements which have been overridden with display: none
	// in a stylesheet to whatever the default browser style is
	// for such an element
	if(elem.style.display===""&&isHidden(elem)){values[index]=dataPriv.access(elem,"olddisplay",defaultDisplay(elem.nodeName));}}else{hidden=isHidden(elem);if(display!=="none"||!hidden){dataPriv.set(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}}// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}return elements;}jQuery.extend({// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks:{opacity:{get:function get(elem,computed){if(computed){// We should always get a number back from opacity
	var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},// Don't automatically add "px" to these possibly-unitless properties
	cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps:{"float":"cssFloat"},// Get and set the style property on a DOM Node
	style:function style(elem,name,value,extra){// Don't set styles on text and comment nodes
	if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}// Make sure that we're working with the right name
	var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);// Gets hook for the prefixed version, then unprefixed version
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// Check if we're setting a value
	if(value!==undefined){type=typeof value==="undefined"?"undefined":_typeof(value);// Convert "+=" or "-=" to relative numbers (#7345)
	if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);// Fixes bug #9237
	type="number";}// Make sure that null and NaN values aren't set (#7116)
	if(value==null||value!==value){return;}// If a number was passed in, add the unit (except for certain CSS properties)
	if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}// Support: IE9-11+
	// background-* props affect original clone's values
	if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}// If a hook was provided, use that value, otherwise just set the specified value
	if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value;}}else{// If a hook was provided get the non-computed value from there
	if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}// Otherwise just get the value from the style object
	return style[name];}},css:function css(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name);// Make sure that we're working with the right name
	name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);// Try prefixed name followed by the unprefixed name
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// If a hook was provided get the computed value from there
	if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}// Otherwise, if a way to get the computed value exists, use that
	if(val===undefined){val=curCSS(elem,name,styles);}// Convert "normal" to computed value
	if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}// Make numeric if forced or a qualifier was provided and val looks numeric
	if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function get(elem,computed,extra){if(computed){// Certain elements can have dimension info if we invisibly show them
	// but it must have a current display style that would benefit
	return rdisplayswap.test(jQuery.css(elem,"display"))&&elem.offsetWidth===0?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function set(elem,value,extra){var matches,styles=extra&&getStyles(elem),subtract=extra&&augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles);// Convert to pixels if value adjustment is needed
	if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[name]=value;value=jQuery.css(elem,name);}return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});// Support: Android 2.3
	jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}});// These hooks are used by animate to expand properties
	jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function expand(value){var i=0,expanded={},// Assumes a single number if not a string
	parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function css(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}return map;}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function show(){return showHide(this,true);},hide:function hide(){return showHide(this);},toggle:function toggle(state){if(typeof state==="boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHidden(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function init(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function run(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function get(tween){var result;// Use a property on the element directly when it is not a DOM element,
	// or when there is no matching style property that exists.
	if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}// Passing an empty string as a 3rd parameter to .css will automatically
	// attempt a parseFloat and fallback to a string if the parse fails.
	// Simple values such as "10px" are parsed to Float;
	// complex values such as "rotate(1rad)" are returned as-is.
	result=jQuery.css(tween.elem,tween.prop,"");// Empty strings, null, undefined and "auto" are converted to 0.
	return!result||result==="auto"?0:result;},set:function set(tween){// Use step hook for back compat.
	// Use cssHook if its there.
	// Use .style if available and use plain properties where available.
	if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function set(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function linear(p){return p;},swing:function swing(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;// Back Compat <1.8 extension point
	jQuery.fx.step={};var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;// Animations created synchronously will run synchronously
	function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return fxNow=jQuery.now();}// Generate parameters to create a standard animation
	function genFx(type,includeWidth){var which,i=0,attrs={height:type};// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}if(includeWidth){attrs.opacity=attrs.width=type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){// We're done with this property
	return tween;}}}function defaultPrefilter(elem,props,opts){/* jshint validthis: true */var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=dataPriv.get(elem,"fxshow");// Handle queue: false promises
	if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){// Ensure the complete handler is called before this completes
	anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}// Height/width overflow pass
	if(elem.nodeType===1&&("height"in props||"width"in props)){// Make sure that nothing sneaks out
	// Record all 3 overflow attributes because IE9-10 do not
	// change the overflow attribute when overflowX and
	// overflowY are set to the same value
	opts.overflow=[style.overflow,style.overflowX,style.overflowY];// Set display property to inline-block for height/width
	// animations on inline elements that are having width/height animated
	display=jQuery.css(elem,"display");// Test default display if display is currently "none"
	checkDisplay=display==="none"?dataPriv.get(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){style.display="inline-block";}}if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}// show/hide pass
	for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){// If there is dataShow left over from a stopped hide or show
	// and we are going to proceed with show, we should pretend to be hidden
	if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else{continue;}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);// Any non-fx value stops us from restoring the original display value
	}else{display=undefined;}}if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{});}// Store state if its toggle - enables .stop().toggle() to "reverse"
	if(toggle){dataShow.hidden=!hidden;}if(hidden){jQuery(elem).show();}else{anim.done(function(){jQuery(elem).hide();});}anim.done(function(){var prop;dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}}// If this is a noop like .hide().hide(), restore an overwritten display value
	}else if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){style.display=display;}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;// camelCase, specialEasing and expand cssHook pass
	for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}if(index!==name){props[name]=value;delete props[index];}hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];// Not quite $.extend, this won't overwrite existing keys.
	// Reusing 'index' because we have the correct "name"
	for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){// Don't match elem in the :animated selector
	delete tick.elem;}),tick=function tick(){if(stopped){return false;}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),// Support: Android 2.3
	// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
	temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function createTween(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function stop(gotoEnd){var index=0,// If we are going to the end, we want to run all the tweens
	// otherwise we skip this part
	length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}// Resolve when we played the last frame; otherwise, reject
	if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(jQuery.isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result);}return result;}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));// attach callbacks from options
	return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function tweener(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnotwhite);}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function prefilter(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&(typeof speed==="undefined"?"undefined":_typeof(speed))==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;// Normalize opt.queue - true/undefined/null -> "fx"
	if(opt.queue==null||opt.queue===true){opt.queue="fx";}// Queueing
	opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function fadeTo(speed,to,easing,callback){// Show any hidden elements after setting opacity to 0
	return this.filter(isHidden).css("opacity",0).show()// Animate to the value specified
	.end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function doAnimation(){// Operate on a copy of prop so per-property easing won't be lost
	var anim=Animation(this,jQuery.extend({},prop),optall);// Empty animations, or finishing resolves immediately
	if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue&&type!==false){this.queue(type||"fx",[]);}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}// Start the next in the queue if the last step wasn't forced.
	// Timers currently will call their complete callbacks, which
	// will dequeue but only if they were gotoEnd.
	if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function finish(type){if(type!==false){type=type||"fx";}return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;// Enable finishing flag on private data
	data.finish=true;// Empty the queue first
	jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}// Look for any active animations, and finish them
	for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}// Look for any animations in the old queue and finish them
	for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}// Turn off finishing flag
	delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});// Generate shortcuts for custom animations
	jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];// Checks the timer has not already been removed
	if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else{jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=window.setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){window.clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200,// Default speed
	_default:400};// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn=input.value!=="";// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected=opt.selected;// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled=true;support.optDisabled=!opt.disabled;// Support: IE<=11+
	// An input loses its value after becoming a radio
	input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function attr(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function attr(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set attributes on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;}// Fallback to prop when attributes are not supported
	if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}// All attributes are lowercase
	// Grab necessary hook if one is defined
	if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}elem.setAttribute(name,value+"");return value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}ret=jQuery.find.attr(elem,name);// Non-existent attributes return null, we normalize to undefined
	return ret==null?undefined:ret;},attrHooks:{type:{set:function set(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}},removeAttr:function removeAttr(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){propName=jQuery.propFix[name]||name;// Boolean attributes get special treatment (#10870)
	if(jQuery.expr.match.bool.test(name)){// Set corresponding property to false
	elem[propName]=false;}elem.removeAttribute(name);}}}});// Hooks for boolean attributes
	boolHook={set:function set(elem,value,name){if(value===false){// Remove boolean attributes when set to false
	jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle;if(!isXML){// Avoid an infinite loop by temporarily removing this function from the getter
	handle=attrHandle[name];attrHandle[name]=ret;ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;attrHandle[name]=handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function prop(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function removeProp(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function prop(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set properties on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;}if(nType!==1||!jQuery.isXMLDoc(elem)){// Fix name and attach hooks
	name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}return elem[name]=value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}return elem[name];},propHooks:{tabIndex:{get:function get(elem){// elem.tabIndex doesn't always return the
	// correct value when it hasn't been explicitly set
	// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	// Use proper attribute retrieval(#12072)
	var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1;}}},propFix:{"for":"htmlFor","class":"className"}});// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if(!support.optSelected){jQuery.propHooks.selected={get:function get(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}return null;},set:function set(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});var rclass=/[\t\r\n\f]/g;function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}jQuery.fn.extend({addClass:function addClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while(elem=this[i++]){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}// Only assign if different to avoid unneeded rendering.
	finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},removeClass:function removeClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}if(!arguments.length){return this.attr("class","");}if(typeof value==="string"&&value){classes=value.match(rnotwhite)||[];while(elem=this[i++]){curValue=getClass(elem);// This expression is here for better compressibility (see addClass)
	cur=elem.nodeType===1&&(" "+curValue+" ").replace(rclass," ");if(cur){j=0;while(clazz=classes[j++]){// Remove *all* instances
	while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}// Only assign if different to avoid unneeded rendering.
	finalValue=jQuery.trim(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=typeof value==="undefined"?"undefined":_typeof(value);if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}return this.each(function(){var className,i,self,classNames;if(type==="string"){// Toggle individual class names
	i=0;self=jQuery(this);classNames=value.match(rnotwhite)||[];while(className=classNames[i++]){// Check each className given, space separated list
	if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}// Toggle whole class name
	}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){// Store className if set
	dataPriv.set(this,"__className__",className);}// If the element has a class name or if we're passed `false`,
	// then remove the whole classname (if there was one, the above saved it).
	// Otherwise bring back whatever was previously saved (if anything),
	// falling back to the empty string if nothing was stored.
	if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function hasClass(selector){var className,elem,i=0;className=" "+selector+" ";while(elem=this[i++]){if(elem.nodeType===1&&(" "+getClass(elem)+" ").replace(rclass," ").indexOf(className)>-1){return true;}}return false;}});var rreturn=/\r/g,rspaces=/[\x20\t\r\n\f]+/g;jQuery.fn.extend({val:function val(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;return typeof ret==="string"?// Handle most common string cases
	ret.replace(rreturn,""):// Handle cases where value is null/undef or number
	ret==null?"":ret;}return;}isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}// Treat null/undefined as ""; convert numbers to string
	if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];// If set returns undefined, fall back to normal setting
	if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:// Support: IE10-11+
	// option.text throws exceptions (#14686, #14858)
	// Strip and collapse whitespace
	// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
	jQuery.trim(jQuery.text(elem)).replace(rspaces," ");}},select:{get:function get(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;// Loop through all the selected options
	for(;i<max;i++){option=options[i];// IE8-9 doesn't update selected after form reset (#2551)
	if((option.selected||i===index)&&(// Don't return options that are disabled or in a disabled optgroup
	support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){// Get the specific value for the option
	value=jQuery(option).val();// We don't need an array for one selects
	if(one){return value;}// Multi-Selects return an array
	values.push(value);}}return values;},set:function set(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}}// Force browsers to behave consistently when non-matching value is set
	if(!optionSet){elem.selectedIndex=-1;}return values;}}}});// Radios and checkboxes getter/setter
	jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function set(elem,value){if(jQuery.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1;}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});// Return jQuery for attributes-only inclusion
	var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function trigger(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;// Don't do events on text and comment nodes
	if(elem.nodeType===3||elem.nodeType===8){return;}// focus/blur morphs to focusin/out; ensure we're not firing them right now
	if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf(".")>-1){// Namespaced trigger; create a regexp to match event type in handle()
	namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}ontype=type.indexOf(":")<0&&"on"+type;// Caller can pass in a jQuery.Event object, Object, or just an event type string
	event=event[jQuery.expando]?event:new jQuery.Event(type,(typeof event==="undefined"?"undefined":_typeof(event))==="object"&&event);// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
	event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;// Clean up the event in case it is being reused
	event.result=undefined;if(!event.target){event.target=elem;}// Clone any incoming data and prepend the event, creating the handler arg list
	data=data==null?[event]:jQuery.makeArray(data,[event]);// Allow special events to draw outside the lines
	special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}// Determine event propagation path in advance, per W3C events spec (#9951)
	// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
	if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}// Only add window if we got to document (e.g., not plain obj or detached DOM)
	if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}// Fire handlers on the event path
	i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;// jQuery handler
	handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}// Native handler
	handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}event.type=type;// If nobody prevented the default action, do it now
	if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){// Call a native DOM method on the target with the same name name as the event.
	// Don't do default actions on window, that's where global variables be (#6170)
	if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){// Don't re-trigger an onFOO event when we call its FOO() method
	tmp=elem[ontype];if(tmp){elem[ontype]=null;}// Prevent re-triggering of the same event, since we already bubbled it above
	jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}return event.result;},// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate:function simulate(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){// Handle event binding
	jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function hover(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});support.focusin="onfocusin"in window;// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){// Attach a single capturing handler on the document while someone wants focusin/focusout
	var handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function setup(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function teardown(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}var location=window.location;var nonce=jQuery.now();var rquery=/\?/;// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON=function(data){return JSON.parse(data+"");};// Cross-browser xml parsing
	jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;}// Support: IE9
	try{xml=new window.DOMParser().parseFromString(data,"text/xml");}catch(e){xml=undefined;}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}return xml;};var rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,// #7653, #8125, #8152: local protocol detection
	rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */prefilters={},/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */transports={},// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes="*/".concat("*"),// Anchor tag for parsing the document origin
	originAnchor=document.createElement("a");originAnchor.href=location.href;// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure){// dataTypeExpression is optional and defaults to "*"
	return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func)){// For each dataType in the dataTypeExpression
	while(dataType=dataTypes[i++]){// Prepend if requested
	if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);// Otherwise append
	}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;}/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;// Remove auto dataType and get content-type in the process
	while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}// Check if we're dealing with a known content-type
	if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}// Check to see if we have a response for the expected dataType
	if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{// Try convertible dataTypes
	for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}}// Or just use first one
	finalDataType=finalDataType||firstDataType;}// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}}/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},// Work with a copy of dataTypes in case we need to modify it for conversion
	dataTypes=s.dataTypes.slice();// Create converters map with lowercased keys
	if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}current=dataTypes.shift();// Convert to each sequential dataType
	while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}// Apply the dataFilter if provided
	if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}prev=current;current=dataTypes.shift();if(current){// There's only work to do if current dataType is non-auto
	if(current==="*"){current=prev;// Convert response if prev dataType is non-auto and differs from current
	}else if(prev!=="*"&&prev!==current){// Seek a direct converter
	conv=converters[prev+" "+current]||converters["* "+current];// If none found, seek a pair
	if(!conv){for(conv2 in converters){// If conv2 outputs current
	tmp=conv2.split(" ");if(tmp[1]===current){// If prev can be converted to accepted input
	conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){// Condense equivalence converters
	if(conv===true){conv=converters[conv2];// Otherwise, insert the intermediate dataType
	}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}break;}}}}// Apply converter (if not an equivalence)
	if(conv!==true){// Unless errors are allowed to bubble, catch and return them
	if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}return{state:"success",data:response};}jQuery.extend({// Counter for holding the number of active queries
	active:0,// Last-Modified header cache for next request
	lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
	// Keys separate source (or catchall "*") and destination types with a single space
	converters:{// Convert anything to text
	"* text":String,// Text to html (true = no transformation)
	"text html":true,// Evaluate text as a json expression
	"text json":jQuery.parseJSON,// Parse text as xml
	"text xml":jQuery.parseXML},// For options that shouldn't be deep extended:
	// you can add your own custom options here if
	// and when you create one that shouldn't be
	// deep extended (see ajaxExtend)
	flatOptions:{url:true,context:true}},// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup:function ajaxSetup(target,settings){return settings?// Building a settings object
	ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):// Extending ajaxSettings
	ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),// Main method
	ajax:function ajax(url,options){// If url is an object, simulate pre-1.5 signature
	if((typeof url==="undefined"?"undefined":_typeof(url))==="object"){options=url;url=undefined;}// Force options to be an object
	options=options||{};var transport,// URL without anti-cache param
	cacheURL,// Response headers
	responseHeadersString,responseHeaders,// timeout handle
	timeoutTimer,// Url cleanup var
	urlAnchor,// To know if global events are to be dispatched
	fireGlobals,// Loop variable
	i,// Create the final options object
	s=jQuery.ajaxSetup({},options),// Callbacks context
	callbackContext=s.context||s,// Context for global events is callbackContext if it is a DOM node or jQuery collection
	globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,// Deferreds
	deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),// Status-dependent callbacks
	_statusCode=s.statusCode||{},// Headers (they are sent all at once)
	requestHeaders={},requestHeadersNames={},// The jqXHR state
	state=0,// Default abort message
	strAbort="canceled",// Fake xhr
	jqXHR={readyState:0,// Builds headers hashtable if needed
	getResponseHeader:function getResponseHeader(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2];}}match=responseHeaders[key.toLowerCase()];}return match==null?null:match;},// Raw string
	getAllResponseHeaders:function getAllResponseHeaders(){return state===2?responseHeadersString:null;},// Caches the header
	setRequestHeader:function setRequestHeader(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}return this;},// Overrides response content-type header
	overrideMimeType:function overrideMimeType(type){if(!state){s.mimeType=type;}return this;},// Status-dependent callbacks
	statusCode:function statusCode(map){var code;if(map){if(state<2){for(code in map){// Lazy-add the new callback in a way that preserves old ones
	_statusCode[code]=[_statusCode[code],map[code]];}}else{// Execute the appropriate callbacks
	jqXHR.always(map[jqXHR.status]);}}return this;},// Cancel the request
	abort:function abort(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}};// Attach deferreds
	deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;// Remove hash character (#7531: and string promotion)
	// Add protocol if not provided (prefilters might expect it)
	// Handle falsy url in the settings object (#10093: consistency with old signature)
	// We also use the url parameter if available
	s.url=((url||s.url||location.href)+"").replace(rhash,"").replace(rprotocol,location.protocol+"//");// Alias method option to type as per ticket #12004
	s.type=options.method||options.type||s.method||s.type;// Extract dataTypes list
	s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];// A cross-domain request is in order when the origin doesn't match the current origin.
	if(s.crossDomain==null){urlAnchor=document.createElement("a");// Support: IE8-11+
	// IE throws exception if url is malformed, e.g. http://example.com:80x/
	try{urlAnchor.href=s.url;// Support: IE8-11+
	// Anchor's host property isn't correctly set when s.url is relative
	urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
	// it can be rejected by the transport if it is invalid
	s.crossDomain=true;}}// Convert data if not already a string
	if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}// Apply prefilters
	inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);// If request was aborted inside a prefilter, stop there
	if(state===2){return jqXHR;}// We can fire global events as of now if asked to
	// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
	fireGlobals=jQuery.event&&s.global;// Watch for a new set of requests
	if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}// Uppercase the type
	s.type=s.type.toUpperCase();// Determine if request has content
	s.hasContent=!rnoContent.test(s.type);// Save the URL in case we're toying with the If-Modified-Since
	// and/or If-None-Match header later on
	cacheURL=s.url;// More options handling for requests with no content
	if(!s.hasContent){// If data is available, append data to url
	if(s.data){cacheURL=s.url+=(rquery.test(cacheURL)?"&":"?")+s.data;// #9682: remove data so that it's not used in an eventual retry
	delete s.data;}// Add anti-cache in url if needed
	if(s.cache===false){s.url=rts.test(cacheURL)?// If there is already a '_' parameter, set its value
	cacheURL.replace(rts,"$1_="+nonce++):// Otherwise add one to the end
	cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++;}}// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}// Set the correct header, if data is being sent
	if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}// Set the Accepts header for the server, depending on the dataType
	jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);// Check for headers option
	for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}// Allow custom headers/mimetypes and early abort
	if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){// Abort if not done already and return
	return jqXHR.abort();}// Aborting is no longer a cancellation
	strAbort="abort";// Install callbacks on deferreds
	for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);}// Get transport
	transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);// If no transport, we auto-abort
	if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;// Send global event
	if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}// If request was aborted inside ajaxSend, stop there
	if(state===2){return jqXHR;}// Timeout
	if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{state=1;transport.send(requestHeaders,done);}catch(e){// Propagate exception as error if not done
	if(state<2){done(-1,e);// Simply rethrow otherwise
	}else{throw e;}}}// Callback for when everything is done
	function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;// Called once
	if(state===2){return;}// State is "done" now
	state=2;// Clear timeout if it exists
	if(timeoutTimer){window.clearTimeout(timeoutTimer);}// Dereference transport for early garbage collection
	// (no matter how long the jqXHR object will be used)
	transport=undefined;// Cache response headers
	responseHeadersString=headers||"";// Set readyState
	jqXHR.readyState=status>0?4:0;// Determine if successful
	isSuccess=status>=200&&status<300||status===304;// Get response data
	if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}// Convert no matter what (that way responseXXX fields are always set)
	response=ajaxConvert(s,response,jqXHR,isSuccess);// If successful, handle type chaining
	if(isSuccess){// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}// if no content
	if(status===204||s.type==="HEAD"){statusText="nocontent";// if not modified
	}else if(status===304){statusText="notmodified";// If we have data, let's convert it
	}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{// Extract error from statusText and normalize for non-aborts
	error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}// Set data for the fake xhr object
	jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";// Success/Error
	if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}// Status-dependent callbacks
	jqXHR.statusCode(_statusCode);_statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}// Complete
	completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);// Handle the global AJAX counter
	if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){// Shift arguments if data argument was omitted
	if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}// The url can be an options object (which then must have .url)
	return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,// Make this explicit, since user can override this through ajaxSetup (#11264)
	type:"GET",dataType:"script",async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function wrapAll(html){var wrap;if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}if(this[0]){// The elements to wrap the target around
	wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function wrap(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function unwrap(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});jQuery.expr.filters.hidden=function(elem){return!jQuery.expr.filters.visible(elem);};jQuery.expr.filters.visible=function(elem){// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	// Use OR instead of AND as the element is not visible if either is true
	// See tickets #10406 and #13132
	return elem.offsetWidth>0||elem.offsetHeight>0||elem.getClientRects().length>0;};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){// Serialize array item.
	jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){// Treat each array item as a scalar.
	add(prefix,v);}else{// Item is non-scalar (array or object), encode its numeric index.
	buildParams(prefix+"["+((typeof v==="undefined"?"undefined":_typeof(v))==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){// Serialize object item.
	for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{// Serialize scalar item.
	add(prefix,obj);}}// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param=function(a,traditional){var prefix,s=[],add=function add(key,value){// If value is a function, invoke it and return its value
	value=jQuery.isFunction(value)?value():value==null?"":value;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};// Set traditional to true for jQuery <= 1.3.2 behavior.
	if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;}// If an array was passed in, assume that it is an array of form elements.
	if(jQuery.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){// Serialize the form elements
	jQuery.each(a,function(){add(this.name,this.value);});}else{// If traditional, encode the "old" way (the way 1.3.2 or older
	// did it), otherwise encode params recursively.
	for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}// Return the resulting serialization
	return s.join("&").replace(r20,"+");};jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
	var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
	return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={// File protocol always yields status code 0, assume 200
	0:200,// Support: IE9
	// #1450: sometimes IE returns 1223 when it should be 204
	1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials"in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var _callback,errorCallback;// Cross domain only allowed if supported through XMLHttpRequest
	if(support.cors||xhrSupported&&!options.crossDomain){return{send:function send(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);// Apply custom fields if provided
	if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}// Override mime type if needed
	if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}// X-Requested-With header
	// For cross-domain requests, seeing as conditions for a preflight are
	// akin to a jigsaw puzzle, we simply never set it to be sure.
	// (it can always be set on a per-request basis or even using ajaxSetup)
	// For same-domain requests, won't change header if already provided.
	if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}// Set headers
	for(i in headers){xhr.setRequestHeader(i,headers[i]);}// Callback
	_callback=function callback(type){return function(){if(_callback){_callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){// Support: IE9
	// On a manual native abort, IE9 throws
	// errors on any property access that is not readyState
	if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(// File: protocol always yields status 0; see #8605, #14207
	xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,// Support: IE9 only
	// IE9 has no XHR2 but throws on binary (trac-11426)
	// For XHR2 non-text, let the caller handle it (gh-2498)
	(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};// Listen to events
	xhr.onload=_callback();errorCallback=xhr.onerror=_callback("error");// Support: IE9
	// Use onreadystatechange to replace onabort
	// to handle uncaught aborts
	if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){// Check readyState before timeout as it changes
	if(xhr.readyState===4){// Allow onerror to be called first,
	// but that will not handle a native abort
	// Also, save errorCallback to a variable
	// as xhr.onerror cannot be accessed
	window.setTimeout(function(){if(_callback){errorCallback();}});}};}// Create the abort callback
	_callback=_callback("abort");try{// Do send the request (this may raise an exception)
	xhr.send(options.hasContent&&options.data||null);}catch(e){// #14683: Only rethrow if this hasn't been notified as an error yet
	if(_callback){throw e;}}},abort:function abort(){if(_callback){_callback();}}};}});// Install script dataType
	jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}});// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";}});// Bind script tag hack transport
	jQuery.ajaxTransport("script",function(s){// This transport only deals with cross domain requests
	if(s.crossDomain){var script,_callback2;return{send:function send(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",_callback2=function callback(evt){script.remove();_callback2=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});// Use native DOM manipulation to avoid our domManip AJAX trickery
	document.head.appendChild(script[0]);},abort:function abort(){if(_callback2){_callback2();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
	jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;this[callback]=true;return callback;}});// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if(jsonProp||s.dataTypes[0]==="jsonp"){// Get callback name, remembering preexisting value associated with it
	callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;// Insert callback into url or form data
	if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}// Use data converter to retrieve json after script execution
	s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}return responseContainer[0];};// Force json dataType
	s.dataTypes[0]="json";// Install callback
	overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};// Clean-up function (fires after converters)
	jqXHR.always(function(){// If previous value didn't exist - remove it
	if(overwritten===undefined){jQuery(window).removeProp(callbackName);// Otherwise restore preexisting value
	}else{window[callbackName]=overwritten;}// Save back as free
	if(s[callbackName]){// Make sure that re-using the options doesn't screw things around
	s.jsonpCallback=originalSettings.jsonpCallback;// Save the callback name for future use
	oldCallbacks.push(callbackName);}// Call if it was a function and we have a response
	if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer=overwritten=undefined;});// Delegate to script
	return"script";}});// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}if(typeof context==="boolean"){keepScripts=context;context=false;}context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];// Single tag
	if(parsed){return[context.createElement(parsed[1])];}parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);};// Keep a copy of the old load method
	var _load=jQuery.fn.load;/**
	 * Load a url into a page
	 */jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=jQuery.trim(url.slice(off));url=url.slice(0,off);}// If it's a function
	if(jQuery.isFunction(params)){// We assume that it's the callback
	callback=params;params=undefined;// Otherwise, build a param string
	}else if(params&&(typeof params==="undefined"?"undefined":_typeof(params))==="object"){type="POST";}// If we have elements to modify, make the request
	if(self.length>0){jQuery.ajax({url:url,// If "type" variable is undefined, then "GET" method will be used.
	// Make value of this field explicit since
	// user can override it through ajaxSetup method
	type:type||"GET",dataType:"html",data:params}).done(function(responseText){// Save response for use in complete callback
	response=arguments;self.html(selector?// If a selector was specified, locate the right elements in a dummy div
	// Exclude scripts to avoid IE 'Permission Denied' errors
	jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):// Otherwise use the full result
	responseText);// If the request succeeds, this function gets "data", "status", "jqXHR"
	// but they are ignored because response was set above.
	// If it fails, this function gets "jqXHR", "status", "error"
	}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}return this;};// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};/**
	 * Gets a window from an element
	 */function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView;}jQuery.offset={setOffset:function setOffset(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};// Set position first, in-case top/left are set even on static elem
	if(position==="static"){elem.style.position="relative";}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;// Need to be able to calculate position if either
	// top or left is auto and position is either absolute or fixed
	if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(jQuery.isFunction(options)){// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
	options=options.call(elem,i,jQuery.extend({},curOffset));}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function offset(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var docElem,win,elem=this[0],box={top:0,left:0},doc=elem&&elem.ownerDocument;if(!doc){return;}docElem=doc.documentElement;// Make sure it's not a disconnected DOM node
	if(!jQuery.contains(docElem,elem)){return box;}box=elem.getBoundingClientRect();win=getWindow(doc);return{top:box.top+win.pageYOffset-docElem.clientTop,left:box.left+win.pageXOffset-docElem.clientLeft};},position:function position(){if(!this[0]){return;}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
	// because it is its only offset parent
	if(jQuery.css(elem,"position")==="fixed"){// Assume getBoundingClientRect is there when computed position is fixed
	offset=elem.getBoundingClientRect();}else{// Get *real* offsetParent
	offsetParent=this.offsetParent();// Get correct offsets
	offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}// Add offsetParent borders
	parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);}// Subtract parent offsets and element margins
	return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent||documentElement;});}});// Create scrollLeft and scrollTop methods
	jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);// If curCSS returns percentage, fallback to offset
	return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){// Margin is only for outerHeight, outerWidth
	jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
	// isn't a whole lot we can do. See pull request at this URL for discussion:
	// https://github.com/jquery/jquery/pull/764
	return elem.document.documentElement["client"+name];}// Get document width or height
	if(elem.nodeType===9){doc=elem.documentElement;// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
	// whichever is greatest
	return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}return value===undefined?// Get width or height on the element, requesting but not forcing parseFloat
	jQuery.css(elem,type,extra):// Set width or height on the element
	jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});jQuery.fn.extend({bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){// ( namespace ) or ( selector, types [, fn] )
	return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},size:function size(){return this.length;}});jQuery.fn.andSelf=jQuery.fn.addBack;// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return jQuery;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}var// Map over jQuery in case of overwrite
	_jQuery=window.jQuery,// Map over the $ in case of overwrite
	_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}return jQuery;};// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if(!noGlobal){window.jQuery=window.$=jQuery;}return jQuery;});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(351)(module)))

/***/ },

/***/ 598:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(599);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js!./wangEditor.css", function() {
				var newContent = require("!!./../../../css-loader/index.js!./wangEditor.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/* 编辑器边框颜色 */\n/* 菜单颜色、上边框颜色 */\n/* 菜单选中状态的颜色 */\n/* input focus 时的颜色 */\n/* 按钮颜色 */\n/* tab selected 状态下的颜色 */\n.wangEditor-container {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  z-index: 1;\n  width: 100%;\n}\n.wangEditor-container a:focus,\n.wangEditor-container button:focus {\n  outline: none;\n}\n.wangEditor-container,\n.wangEditor-container * {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  line-height: 1;\n}\n.wangEditor-container img {\n  border: none;\n}\n.wangEditor-container .clearfix:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n.wangEditor-container .clearfix {\n  *zoom: 1;\n}\n.wangEditor-container textarea {\n  border: none;\n}\n.wangEditor-container textarea:focus {\n  outline: none;\n}\n.wangEditor-container .height-tip {\n  position: absolute;\n  width: 3px;\n  background-color: #ccc;\n  left: 0;\n  transition: top .2s;\n}\n.wangEditor-container .txt-toolbar {\n  position: absolute;\n  background-color: #fff;\n  padding: 3px 5px;\n  border-top: 2px solid #666;\n  box-shadow: 1px 3px 3px #999;\n  border-left: 1px\\9 solid\\9 #ccc\\9;\n  border-bottom: 1px\\9 solid\\9 #999\\9;\n  border-right: 1px\\9 solid\\9 #999\\9;\n}\n.wangEditor-container .txt-toolbar .tip-triangle {\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: 5px solid;\n  border-color: transparent transparent #666 transparent;\n  top: -12px;\n  left: 50%;\n  margin-left: -5px;\n}\n.wangEditor-container .txt-toolbar a {\n  color: #666;\n  display: inline-block;\n  margin: 0 3px;\n  padding: 5px;\n  text-decoration: none;\n  border-radius: 3px;\n}\n.wangEditor-container .txt-toolbar a:hover {\n  background-color: #f1f1f1;\n}\n.wangEditor-container .img-drag-point {\n  display: block;\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  cursor: se-resize;\n  background-color: #666;\n  margin-left: -6px;\n  margin-top: -6px;\n  box-shadow: 1px 1px 5px #999;\n}\n.wangEditor-container .wangEditor-upload-progress {\n  position: absolute;\n  height: 1px;\n  background: #1e88e5;\n  width: 0;\n  display: none;\n  -webkit-transition: width .5s;\n  -o-transition: width .5s;\n  transition: width .5s;\n}\n.wangEditor-fullscreen {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.wangEditor-container .code-textarea {\n  resize: none;\n  width: 100%;\n  font-size: 14px;\n  line-height: 1.5;\n  font-family: 'Verdana';\n  color: #333;\n  padding: 0 15px 0 15px;\n}\n.wangEditor-menu-container {\n  width: 100%;\n  border-bottom: 1px solid #f1f1f1;\n  background-color: #fff;\n}\n.wangEditor-menu-container a {\n  text-decoration: none;\n}\n.wangEditor-menu-container .menu-group {\n  float: left;\n  padding: 0 8px;\n  border-right: 1px solid #f1f1f1;\n}\n.wangEditor-menu-container .menu-item {\n  float: left;\n  position: relative;\n  text-align: center;\n  height: 31px;\n  width: 35px;\n}\n.wangEditor-menu-container .menu-item:hover {\n  background-color: #f1f1f1;\n}\n.wangEditor-menu-container .menu-item a {\n  display: block;\n  text-align: center;\n  color: #666;\n  width: 100%;\n  padding: 8px 0;\n  font-size: 0.9em;\n}\n.wangEditor-menu-container .menu-item .selected {\n  color: #1e88e5;\n}\n.wangEditor-menu-container .menu-item .active {\n  background-color: #f1f1f1;\n}\n.wangEditor-menu-container .menu-item .disable {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n}\n.wangEditor-menu-container .menu-tip {\n  display: block;\n  position: absolute;\n  z-index: 20;\n  width: 60px;\n  text-align: center;\n  background-color: #666;\n  color: #fff;\n  padding: 7px 0;\n  font-size: 12px;\n  top: 100%;\n  left: 50%;\n  margin-left: -30px;\n  border-radius: 2px;\n  box-shadow: 1px 1px 5px #999;\n  display: none;\n  /*// 小三角\n        .tip-triangle {\n            display: block;\n            position: absolute;\n            width: 0;\n            height: 0;\n            border:5px solid;\n            border-color: transparent transparent @fore-color transparent;\n            top: -10px;\n            left: 50%;\n            margin-left: -5px;\n        }*/\n}\n.wangEditor-menu-container .menu-tip-40 {\n  width: 40px;\n  margin-left: -20px;\n}\n.wangEditor-menu-container .menu-tip-50 {\n  width: 50px;\n  margin-left: -25px;\n}\n.wangEditor-menu-shadow {\n  /*border-bottom-width: 0;*/\n  border-bottom: 1px\\9 solid\\9 #f1f1f1\\9;\n  box-shadow: 0 1px 3px #999;\n}\n.wangEditor-container .wangEditor-txt {\n  width: 100%;\n  text-align: left;\n  padding: 15px;\n  padding-top: 0;\n  margin-top: 5px;\n  overflow-y: auto;\n}\n.wangEditor-container .wangEditor-txt p,\n.wangEditor-container .wangEditor-txt h1,\n.wangEditor-container .wangEditor-txt h2,\n.wangEditor-container .wangEditor-txt h3,\n.wangEditor-container .wangEditor-txt h4,\n.wangEditor-container .wangEditor-txt h5 {\n  margin: 10px 0;\n  line-height: 1.8;\n}\n.wangEditor-container .wangEditor-txt p *,\n.wangEditor-container .wangEditor-txt h1 *,\n.wangEditor-container .wangEditor-txt h2 *,\n.wangEditor-container .wangEditor-txt h3 *,\n.wangEditor-container .wangEditor-txt h4 *,\n.wangEditor-container .wangEditor-txt h5 * {\n  line-height: 1.8;\n}\n.wangEditor-container .wangEditor-txt ul,\n.wangEditor-container .wangEditor-txt ol {\n  padding-left: 20px;\n}\n.wangEditor-container .wangEditor-txt img {\n  cursor: pointer;\n}\n.wangEditor-container .wangEditor-txt img.clicked {\n  box-shadow: 1px 1px 10px #999;\n}\n.wangEditor-container .wangEditor-txt table.clicked {\n  box-shadow: 1px 1px 10px #999;\n}\n.wangEditor-container .wangEditor-txt pre code {\n  line-height: 1.5;\n}\n.wangEditor-container .wangEditor-txt:focus {\n  outline: none;\n}\n.wangEditor-container .wangEditor-txt blockquote {\n  display: block;\n  border-left: 8px solid #d0e5f2;\n  padding: 5px 10px;\n  margin: 10px 0;\n  line-height: 1.4;\n  font-size: 100%;\n  background-color: #f1f1f1;\n}\n.wangEditor-container .wangEditor-txt table {\n  border: none;\n  border-collapse: collapse;\n}\n.wangEditor-container .wangEditor-txt table td,\n.wangEditor-container .wangEditor-txt table th {\n  border: 1px solid #999;\n  padding: 3px 5px;\n  min-width: 50px;\n  height: 20px;\n}\n.wangEditor-container .wangEditor-txt pre {\n  border: 1px solid #ccc;\n  background-color: #f8f8f8;\n  padding: 10px;\n  margin: 5px 0px;\n  font-size: 0.8em;\n  border-radius: 3px;\n}\n.wangEditor-drop-list {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  overflow: hidden;\n  z-index: 10;\n  transition: height .7s;\n  border-top: 1px solid #f1f1f1;\n  box-shadow: 1px 3px 3px #999;\n  border-left: 1px\\9 solid\\9 #ccc\\9;\n  border-bottom: 1px\\9 solid\\9 #999\\9;\n  border-right: 1px\\9 solid\\9 #999\\9;\n}\n.wangEditor-drop-list a {\n  text-decoration: none;\n  display: block;\n  color: #666;\n  padding: 3px 5px;\n}\n.wangEditor-drop-list a:hover {\n  background-color: #f1f1f1;\n}\n.wangEditor-drop-panel,\n.txt-toolbar {\n  display: none;\n  position: absolute;\n  padding: 10px;\n  font-size: 14px;\n  /*border: 1px\\9 solid\\9 #cccccc\\9;*/\n  background-color: #fff;\n  z-index: 10;\n  border-top: 2px solid #666;\n  box-shadow: 1px 3px 3px #999;\n  border-left: 1px\\9 solid\\9 #ccc\\9;\n  border-bottom: 1px\\9 solid\\9 #999\\9;\n  border-right: 1px\\9 solid\\9 #999\\9;\n}\n.wangEditor-drop-panel .tip-triangle,\n.txt-toolbar .tip-triangle {\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: 5px solid;\n  border-color: transparent transparent #666 transparent;\n  top: -12px;\n  left: 50%;\n  margin-left: -5px;\n}\n.wangEditor-drop-panel a,\n.txt-toolbar a {\n  text-decoration: none;\n}\n.wangEditor-drop-panel input[type=text],\n.txt-toolbar input[type=text] {\n  border: none;\n  border-bottom: 1px solid #ccc;\n  font-size: 14px;\n  height: 20px;\n  color: #333;\n  padding: 3px 0;\n}\n.wangEditor-drop-panel input[type=text]:focus,\n.txt-toolbar input[type=text]:focus {\n  outline: none;\n  border-bottom: 2px solid #1e88e5;\n}\n.wangEditor-drop-panel input[type=text].block,\n.txt-toolbar input[type=text].block {\n  display: block;\n  width: 100%;\n}\n.wangEditor-drop-panel textarea,\n.txt-toolbar textarea {\n  border: 1px solid #ccc;\n}\n.wangEditor-drop-panel textarea:focus,\n.txt-toolbar textarea:focus {\n  outline: none;\n  border-color: #1e88e5;\n}\n.wangEditor-drop-panel button,\n.txt-toolbar button {\n  font-size: 14px;\n  color: #1e88e5;\n  border: none;\n  padding: 10px;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.wangEditor-drop-panel button:hover,\n.txt-toolbar button:hover {\n  background-color: #f1f1f1;\n}\n.wangEditor-drop-panel button:focus,\n.txt-toolbar button:focus {\n  outline: none;\n}\n.wangEditor-drop-panel button.right,\n.txt-toolbar button.right {\n  float: right;\n  margin-left: 10px;\n}\n.wangEditor-drop-panel button.gray,\n.txt-toolbar button.gray {\n  color: #999;\n}\n.wangEditor-drop-panel button.link,\n.txt-toolbar button.link {\n  padding: 5px 10px;\n}\n.wangEditor-drop-panel button.link:hover,\n.txt-toolbar button.link:hover {\n  background-color: #fff;\n  text-decoration: underline;\n}\n.wangEditor-drop-panel .color-item,\n.txt-toolbar .color-item {\n  display: block;\n  float: left;\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  padding: 2px;\n  border-radius: 2px;\n  text-decoration: underline;\n}\n.wangEditor-drop-panel .color-item:hover,\n.txt-toolbar .color-item:hover {\n  background-color: #f1f1f1;\n}\n.wangEditor-drop-panel .list-menu-item,\n.txt-toolbar .list-menu-item {\n  display: block;\n  float: left;\n  color: #333;\n  padding: 5px 5px;\n  border-radius: 2px;\n}\n.wangEditor-drop-panel .list-menu-item:hover,\n.txt-toolbar .list-menu-item:hover {\n  background-color: #f1f1f1;\n}\n.wangEditor-drop-panel table.choose-table,\n.txt-toolbar table.choose-table {\n  border: none;\n  border-collapse: collapse;\n}\n.wangEditor-drop-panel table.choose-table td,\n.txt-toolbar table.choose-table td {\n  border: 1px solid #ccc;\n  width: 16px;\n  height: 12px;\n}\n.wangEditor-drop-panel table.choose-table td.active,\n.txt-toolbar table.choose-table td.active {\n  background-color: #ccc;\n  opacity: .5;\n  filter: alpha(opacity=50);\n}\n.wangEditor-drop-panel .panel-tab .tab-container,\n.txt-toolbar .panel-tab .tab-container {\n  margin-bottom: 5px;\n}\n.wangEditor-drop-panel .panel-tab .tab-container a,\n.txt-toolbar .panel-tab .tab-container a {\n  display: inline-block;\n  color: #999;\n  text-align: center;\n  margin: 0 5px;\n  padding: 5px 5px;\n}\n.wangEditor-drop-panel .panel-tab .tab-container a.selected,\n.txt-toolbar .panel-tab .tab-container a.selected {\n  color: #1e88e5;\n  border-bottom: 2px solid #1e88e5;\n}\n.wangEditor-drop-panel .panel-tab .content-container .content,\n.txt-toolbar .panel-tab .content-container .content {\n  display: none;\n}\n.wangEditor-drop-panel .panel-tab .content-container .content a,\n.txt-toolbar .panel-tab .content-container .content a {\n  display: inline-block;\n  margin: 2px;\n  padding: 2px;\n  border-radius: 2px;\n}\n.wangEditor-drop-panel .panel-tab .content-container .content a:hover,\n.txt-toolbar .panel-tab .content-container .content a:hover {\n  background-color: #f1f1f1;\n}\n.wangEditor-drop-panel .panel-tab .content-container .selected,\n.txt-toolbar .panel-tab .content-container .selected {\n  display: block;\n}\n.wangEditor-drop-panel .panel-tab .emotion-content-container,\n.txt-toolbar .panel-tab .emotion-content-container {\n  height: 200px;\n  overflow-y: auto;\n}\n.wangEditor-drop-panel .upload-icon-container,\n.txt-toolbar .upload-icon-container {\n  color: #ccc;\n  text-align: center;\n  margin: 20px 20px 15px 20px !important;\n  padding: 5px !important;\n  font-size: 65px;\n  cursor: pointer;\n  border: 2px dotted #f1f1f1;\n  display: block !important;\n}\n.wangEditor-drop-panel .upload-icon-container:hover,\n.txt-toolbar .upload-icon-container:hover {\n  color: #666;\n  border-color: #ccc;\n}\n.wangEditor-modal {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: #fff;\n  border-top: 1px solid #f1f1f1;\n  box-shadow: 1px 3px 3px #999;\n  border-top: 1px\\9 solid\\9 #ccc\\9;\n  border-left: 1px\\9 solid\\9 #ccc\\9;\n  border-bottom: 1px\\9 solid\\9 #999\\9;\n  border-right: 1px\\9 solid\\9 #999\\9;\n}\n.wangEditor-modal .wangEditor-modal-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-top: -25px;\n  margin-right: -25px;\n  font-size: 1.5em;\n  color: #666;\n  cursor: pointer;\n}\n@font-face {\n  font-family: 'icomoon';\n  src: url(" + __webpack_require__(600) + ");\n  src: url(" + __webpack_require__(601) + "?#iefix-qdfu1s) format('embedded-opentype'), url(" + __webpack_require__(602) + ") format('truetype'), url(" + __webpack_require__(603) + ") format('woff'), url(" + __webpack_require__(604) + "#icomoon) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n[class^=\"wangeditor-menu-img-\"],\n[class*=\" wangeditor-menu-img-\"] {\n  font-family: 'icomoon';\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.wangeditor-menu-img-link:before {\n  content: \"\\E800\";\n}\n.wangeditor-menu-img-unlink:before {\n  content: \"\\E801\";\n}\n.wangeditor-menu-img-code:before {\n  content: \"\\E802\";\n}\n.wangeditor-menu-img-cancel:before {\n  content: \"\\E803\";\n}\n.wangeditor-menu-img-terminal:before {\n  content: \"\\E804\";\n}\n.wangeditor-menu-img-angle-down:before {\n  content: \"\\E805\";\n}\n.wangeditor-menu-img-font:before {\n  content: \"\\E806\";\n}\n.wangeditor-menu-img-bold:before {\n  content: \"\\E807\";\n}\n.wangeditor-menu-img-italic:before {\n  content: \"\\E808\";\n}\n.wangeditor-menu-img-header:before {\n  content: \"\\E809\";\n}\n.wangeditor-menu-img-align-left:before {\n  content: \"\\E80A\";\n}\n.wangeditor-menu-img-align-center:before {\n  content: \"\\E80B\";\n}\n.wangeditor-menu-img-align-right:before {\n  content: \"\\E80C\";\n}\n.wangeditor-menu-img-list-bullet:before {\n  content: \"\\E80D\";\n}\n.wangeditor-menu-img-indent-left:before {\n  content: \"\\E80E\";\n}\n.wangeditor-menu-img-indent-right:before {\n  content: \"\\E80F\";\n}\n.wangeditor-menu-img-list-numbered:before {\n  content: \"\\E810\";\n}\n.wangeditor-menu-img-underline:before {\n  content: \"\\E811\";\n}\n.wangeditor-menu-img-table:before {\n  content: \"\\E812\";\n}\n.wangeditor-menu-img-eraser:before {\n  content: \"\\E813\";\n}\n.wangeditor-menu-img-text-height:before {\n  content: \"\\E814\";\n}\n.wangeditor-menu-img-brush:before {\n  content: \"\\E815\";\n}\n.wangeditor-menu-img-pencil:before {\n  content: \"\\E816\";\n}\n.wangeditor-menu-img-minus:before {\n  content: \"\\E817\";\n}\n.wangeditor-menu-img-picture:before {\n  content: \"\\E818\";\n}\n.wangeditor-menu-img-file-image:before {\n  content: \"\\E819\";\n}\n.wangeditor-menu-img-cw:before {\n  content: \"\\E81A\";\n}\n.wangeditor-menu-img-ccw:before {\n  content: \"\\E81B\";\n}\n.wangeditor-menu-img-music:before {\n  content: \"\\E911\";\n}\n.wangeditor-menu-img-play:before {\n  content: \"\\E912\";\n}\n.wangeditor-menu-img-location:before {\n  content: \"\\E947\";\n}\n.wangeditor-menu-img-happy:before {\n  content: \"\\E9DF\";\n}\n.wangeditor-menu-img-sigma:before {\n  content: \"\\EA67\";\n}\n.wangeditor-menu-img-enlarge2:before {\n  content: \"\\E98B\";\n}\n.wangeditor-menu-img-shrink2:before {\n  content: \"\\E98C\";\n}\n.wangeditor-menu-img-newspaper:before {\n  content: \"\\E904\";\n}\n.wangeditor-menu-img-camera:before {\n  content: \"\\E90F\";\n}\n.wangeditor-menu-img-video-camera:before {\n  content: \"\\E914\";\n}\n.wangeditor-menu-img-file-zip:before {\n  content: \"\\E92B\";\n}\n.wangeditor-menu-img-stack:before {\n  content: \"\\E92E\";\n}\n.wangeditor-menu-img-credit-card:before {\n  content: \"\\E93F\";\n}\n.wangeditor-menu-img-address-book:before {\n  content: \"\\E944\";\n}\n.wangeditor-menu-img-envelop:before {\n  content: \"\\E945\";\n}\n.wangeditor-menu-img-drawer:before {\n  content: \"\\E95C\";\n}\n.wangeditor-menu-img-download:before {\n  content: \"\\E960\";\n}\n.wangeditor-menu-img-upload:before {\n  content: \"\\E961\";\n}\n.wangeditor-menu-img-lock:before {\n  content: \"\\E98F\";\n}\n.wangeditor-menu-img-unlocked:before {\n  content: \"\\E990\";\n}\n.wangeditor-menu-img-wrench:before {\n  content: \"\\E991\";\n}\n.wangeditor-menu-img-eye:before {\n  content: \"\\E9CE\";\n}\n.wangeditor-menu-img-eye-blocked:before {\n  content: \"\\E9D1\";\n}\n.wangeditor-menu-img-command:before {\n  content: \"\\EA4E\";\n}\n.wangeditor-menu-img-font2:before {\n  content: \"\\EA5C\";\n}\n.wangeditor-menu-img-libreoffice:before {\n  content: \"\\EADE\";\n}\n.wangeditor-menu-img-quotes-left:before {\n  content: \"\\E977\";\n}\n.wangeditor-menu-img-strikethrough:before {\n  content: \"\\EA65\";\n}\n.wangeditor-menu-img-desktop:before {\n  content: \"\\F108\";\n}\n.wangeditor-menu-img-tablet:before {\n  content: \"\\F10A\";\n}\n.wangeditor-menu-img-search-plus:before {\n  content: \"\\F00E\";\n}\n.wangeditor-menu-img-search-minus:before {\n  content: \"\\F010\";\n}\n.wangeditor-menu-img-trash-o:before {\n  content: \"\\F014\";\n}\n.wangeditor-menu-img-align-justify:before {\n  content: \"\\F039\";\n}\n.wangeditor-menu-img-arrows-v:before {\n  content: \"\\F07D\";\n}\n.wangeditor-menu-img-sigma2:before {\n  content: \"\\EA68\";\n}\n.wangeditor-menu-img-omega:before {\n  content: \"\\E900\";\n}\n.wangeditor-menu-img-cancel-circle:before {\n  content: \"\\E901\";\n}\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n  -webkit-text-size-adjust: none;\n}\n.hljs-comment,\n.diff .hljs-header {\n  color: #998;\n  font-style: italic;\n}\n.hljs-keyword,\n.css .rule .hljs-keyword,\n.hljs-winutils,\n.nginx .hljs-title,\n.hljs-subst,\n.hljs-request,\n.hljs-status {\n  color: #333;\n  font-weight: bold;\n}\n.hljs-number,\n.hljs-hexcolor,\n.ruby .hljs-constant {\n  color: #008080;\n}\n.hljs-string,\n.hljs-tag .hljs-value,\n.hljs-doctag,\n.tex .hljs-formula {\n  color: #d14;\n}\n.hljs-title,\n.hljs-id,\n.scss .hljs-preprocessor {\n  color: #900;\n  font-weight: bold;\n}\n.hljs-list .hljs-keyword,\n.hljs-subst {\n  font-weight: normal;\n}\n.hljs-class .hljs-title,\n.hljs-type,\n.vhdl .hljs-literal,\n.tex .hljs-command {\n  color: #458;\n  font-weight: bold;\n}\n.hljs-tag,\n.hljs-tag .hljs-title,\n.hljs-rule .hljs-property,\n.django .hljs-tag .hljs-keyword {\n  color: #000080;\n  font-weight: normal;\n}\n.hljs-attribute,\n.hljs-variable,\n.lisp .hljs-body,\n.hljs-name {\n  color: #008080;\n}\n.hljs-regexp {\n  color: #009926;\n}\n.hljs-symbol,\n.ruby .hljs-symbol .hljs-string,\n.lisp .hljs-keyword,\n.clojure .hljs-keyword,\n.scheme .hljs-keyword,\n.tex .hljs-special,\n.hljs-prompt {\n  color: #990073;\n}\n.hljs-built_in {\n  color: #0086b3;\n}\n.hljs-preprocessor,\n.hljs-pragma,\n.hljs-pi,\n.hljs-doctype,\n.hljs-shebang,\n.hljs-cdata {\n  color: #999;\n  font-weight: bold;\n}\n.hljs-deletion {\n  background: #fdd;\n}\n.hljs-addition {\n  background: #dfd;\n}\n.diff .hljs-change {\n  background: #0086b3;\n}\n.hljs-chunk {\n  color: #aaa;\n}\n", ""]);

	// exports


/***/ },

/***/ 600:
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ },

/***/ 601:
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ },

/***/ 602:
/***/ function(module, exports) {

	module.exports = "data:application/x-font-ttf;base64,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"

/***/ },

/***/ 603:
/***/ function(module, exports) {

	module.exports = "data:application/font-woff;base64,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"

/***/ },

/***/ 604:
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+R2VuZXJhdGVkIGJ5IEljb01vb248L21ldGFkYXRhPgo8ZGVmcz4KPGZvbnQgaWQ9Imljb21vb24iIGhvcml6LWFkdi14PSIxMDI0Ij4KPGZvbnQtZmFjZSB1bml0cy1wZXItZW09IjEwMjQiIGFzY2VudD0iOTYwIiBkZXNjZW50PSItNjQiIC8+CjxtaXNzaW5nLWdseXBoIGhvcml6LWFkdi14PSIxMDI0IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4MjA7IiBob3Jpei1hZHYteD0iNTEyIiBkPSIiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODAwOyIgZ2x5cGgtbmFtZT0ibGluayIgaG9yaXotYWR2LXg9Ijk1MCIgZD0iTTgzMS40ODggMjY0LjcwNHEwIDIzLjU1Mi0xNS4zNiAzOC45MTJsLTExOC43ODQgMTE4Ljc4NHEtMTYuMzg0IDE2LjM4NC0zOC45MTIgMTYuMzg0LTI0LjU3NiAwLTQwLjk2LTE4LjQzMiAxLjAyNC0xLjAyNCAxMC4yNC0xMC4yNHQxMi4yODgtMTIuMjg4IDkuMjE2LTExLjI2NCA3LjE2OC0xNC4zMzYgMi4wNDgtMTUuMzZxMC0yMy41NTItMTYuMzg0LTM4LjkxMnQtMzguOTEyLTE2LjM4NHEtOC4xOTIgMC0xNS4zNiAyLjA0OHQtMTQuMzM2IDcuMTY4LTExLjI2NCA5LjIxNi0xMi4yODggMTIuMjg4LTEwLjI0IDEwLjI0cS0xOS40NTYtMTcuNDA4LTE5LjQ1Ni00MC45NnQxNi4zODQtMzguOTEybDExNy43Ni0xMTguNzg0cTE1LjM2LTE1LjM2IDM4LjkxMi0xNS4zNiAyMi41MjggMCAzOC45MTIgMTUuMzZsODMuOTY4IDgyLjk0NHExNS4zNiAxNi4zODQgMTUuMzYgMzcuODg4ek00MzAuMDgwIDY2OC4xNnEwIDIyLjUyOC0xNS4zNiAzOC45MTJsLTExNy43NiAxMTcuNzZxLTE2LjM4NCAxNi4zODQtMzguOTEyIDE2LjM4NHQtMzguOTEyLTE1LjM2bC04My45NjgtODMuOTY4cS0xNi4zODQtMTUuMzYtMTYuMzg0LTM3Ljg4OHQxNi4zODQtMzguOTEybDExOC43ODQtMTE4Ljc4NHExNS4zNi0xNS4zNiAzOC45MTItMTUuMzZ0NDAuOTYgMTcuNDA4cS0yLjA0OCAyLjA0OC0xMS4yNjQgMTEuMjY0dC0xMi4yODggMTIuMjg4LTguMTkyIDEwLjI0LTcuMTY4IDE0LjMzNi0yLjA0OCAxNi4zODRxMCAyMi41MjggMTUuMzYgMzguOTEydDM4LjkxMiAxNS4zNnE5LjIxNiAwIDE2LjM4NC0yLjA0OHQxNC4zMzYtNy4xNjggMTAuMjQtOC4xOTIgMTIuMjg4LTEyLjI4OCAxMS4yNjQtMTEuMjY0cTE4LjQzMiAxNy40MDggMTguNDMyIDQxLjk4NHpNOTQyLjA4MCAyNjQuNzA0cTAtNjguNjA4LTQ5LjE1Mi0xMTUuNzEybC04My45NjgtODIuOTQ0cS00Ny4xMDQtNDguMTI4LTExNS43MTItNDguMTI4LTY5LjYzMiAwLTExNi43MzYgNDkuMTUybC0xMTcuNzYgMTE3Ljc2cS00Ny4xMDQgNDguMTI4LTQ3LjEwNCAxMTYuNzM2IDAgNjkuNjMyIDUwLjE3NiAxMTguNzg0bC01MC4xNzYgNTAuMTc2cS00OS4xNTItNTAuMTc2LTExOC43ODQtNTAuMTc2LTY4LjYwOCAwLTExNi43MzYgNDguMTI4bC0xMTguNzg0IDExOC43ODRxLTQ4LjEyOCA0OC4xMjgtNDguMTI4IDExNi43MzZ0NDguMTI4IDExNS43MTJsODMuOTY4IDgzLjk2OHE0OC4xMjggNDcuMTA0IDExNi43MzYgNDcuMTA0dDExNi43MzYtNDguMTI4bDExNi43MzYtMTE4Ljc4NHE0OC4xMjgtNDcuMTA0IDQ4LjEyOC0xMTUuNzEyIDAtNzAuNjU2LTUwLjE3Ni0xMTkuODA4bDUwLjE3Ni01MC4xNzZxNDkuMTUyIDUwLjE3NiAxMTguNzg0IDUwLjE3NiA2OC42MDggMCAxMTYuNzM2LTQ4LjEyOGwxMTguNzg0LTExOC43ODRxNDguMTI4LTQ4LjEyOCA0OC4xMjgtMTE2LjczNnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODAxOyIgZ2x5cGgtbmFtZT0idW5saW5rIiBob3Jpei1hZHYteD0iOTUwIiBkPSJNMjUwLjg4IDIzMy45ODRsLTE0Ni40MzItMTQ2LjQzMnEtNS4xMi01LjEyLTEzLjMxMi01LjEyLTYuMTQ0IDAtMTMuMzEyIDUuMTItNS4xMiA1LjEyLTUuMTIgMTMuMzEydDUuMTIgMTMuMzEybDE0Ni40MzIgMTQ1LjQwOHE2LjE0NCA1LjEyIDEzLjMxMiA1LjEydDEzLjMxMi01LjEycTUuMTItNS4xMiA1LjEyLTEyLjI4OHQtNS4xMi0xMy4zMTJ6TTM0Ny4xMzYgMjEwLjQzMnYtMTgzLjI5NnEwLTguMTkyLTUuMTItMTMuMzEydC0xMy4zMTItNS4xMi0xMi4yODggNS4xMi01LjEyIDEzLjMxMnYxODMuMjk2cTAgOC4xOTIgNS4xMiAxMy4zMTJ0MTIuMjg4IDUuMTIgMTMuMzEyLTUuMTIgNS4xMi0xMy4zMTJ6TTIxOS4xMzYgMzM4LjQzMnEwLTguMTkyLTUuMTItMTMuMzEydC0xMy4zMTItNS4xMmgtMTgyLjI3MnEtOC4xOTIgMC0xMy4zMTIgNS4xMnQtNS4xMiAxMy4zMTIgNS4xMiAxMy4zMTIgMTMuMzEyIDUuMTJoMTgyLjI3MnE4LjE5MiAwIDEzLjMxMi01LjEydDUuMTItMTMuMzEyek05NDIuMDgwIDI2NC43MDRxMC02OC42MDgtNDkuMTUyLTExNS43MTJsLTgzLjk2OC04Mi45NDRxLTQ3LjEwNC00OC4xMjgtMTE1LjcxMi00OC4xMjgtNjkuNjMyIDAtMTE2LjczNiA0OS4xNTJsLTE5MC40NjQgMTkxLjQ4OHEtMTIuMjg4IDExLjI2NC0yNC41NzYgMzEuNzQ0bDEzNy4yMTYgMTAuMjQgMTU1LjY0OC0xNTYuNjcycTE1LjM2LTE1LjM2IDM4LjkxMi0xNS4zNnQzOC45MTIgMTUuMzZsODMuOTY4IDgyLjk0NHExNS4zNiAxNi4zODQgMTUuMzYgMzcuODg4IDAgMjMuNTUyLTE1LjM2IDM4LjkxMmwtMTU2LjY3MiAxNTcuNjk2IDEwLjI0IDEzNi4xOTJxMjAuNDgtMTIuMjg4IDMxLjc0NC0yMy41NTJsMTkyLjUxMi0xOTIuNTEycTQ4LjEyOC00OS4xNTIgNDguMTI4LTExNi43MzZ6TTU4OC44IDY3OC40bC0xMzYuMTkyLTEwLjI0LTE1NS42NDggMTU2LjY3MnEtMTYuMzg0IDE2LjM4NC0zOC45MTIgMTYuMzg0dC0zOC45MTItMTUuMzZsLTgzLjk2OC04My45NjhxLTE2LjM4NC0xNS4zNi0xNi4zODQtMzcuODg4dDE2LjM4NC0zOC45MTJsMTU2LjY3Mi0xNTYuNjcyLTEwLjI0LTEzNy4yMTZxLTIwLjQ4IDEyLjI4OC0zMi43NjggMjQuNTc2bC0xOTEuNDg4IDE5MS40ODhxLTQ4LjEyOCA0OS4xNTItNDguMTI4IDExNi43MzYgMCA2OC42MDggNDguMTI4IDExNS43MTJsODMuOTY4IDgzLjk2OHE0OC4xMjggNDcuMTA0IDExNi43MzYgNDcuMTA0dDExNi43MzYtNDguMTI4bDE5MC40NjQtMTkxLjQ4OHExMi4yODgtMTIuMjg4IDIzLjU1Mi0zMi43Njh6TTk1MS4yOTYgNjMxLjI5NnEwLTguMTkyLTUuMTItMTMuMzEydC0xMy4zMTItNS4xMmgtMTgzLjI5NnEtOC4xOTIgMC0xMy4zMTIgNS4xMnQtNS4xMiAxMy4zMTIgNS4xMiAxMi4yODggMTMuMzEyIDUuMTJoMTgzLjI5NnE4LjE5MiAwIDEzLjMxMi01LjEydDUuMTItMTIuMjg4ek02NDAgOTQxLjU2OHYtMTgyLjI3MnEwLTguMTkyLTUuMTItMTMuMzEydC0xMy4zMTItNS4xMi0xMy4zMTIgNS4xMi01LjEyIDEzLjMxMnYxODIuMjcycTAgOC4xOTIgNS4xMiAxMy4zMTJ0MTMuMzEyIDUuMTIgMTMuMzEyLTUuMTIgNS4xMi0xMy4zMTJ6TTg3Mi40NDggODU1LjU1MmwtMTQ2LjQzMi0xNDYuNDMycS02LjE0NC01LjEyLTEzLjMxMi01LjEydC0xMi4yODggNS4xMnEtNS4xMiA2LjE0NC01LjEyIDEzLjMxMnQ1LjEyIDEzLjMxMmwxNDUuNDA4IDE0NS40MDhxNi4xNDQgNS4xMiAxMy4zMTIgNS4xMnQxMy4zMTItNS4xMnE1LjEyLTUuMTIgNS4xMi0xMi4yODh0LTUuMTItMTMuMzEyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4MDI7IiBnbHlwaC1uYW1lPSJjb2RlIiBob3Jpei1hZHYteD0iMTA5NyIgZD0iTTM1Mi4yNTYgMTYwLjI1NmwtMjguNjcyLTI4LjY3MnEtNS4xMi01LjEyLTEyLjI4OC01LjEydC0xMy4zMTIgNS4xMmwtMjY2LjI0IDI2Ni4yNHEtNi4xNDQgNi4xNDQtNi4xNDQgMTMuMzEydDYuMTQ0IDEzLjMxMmwyNjYuMjQgMjY2LjI0cTUuMTIgNi4xNDQgMTMuMzEyIDYuMTQ0dDEyLjI4OC02LjE0NGwyOC42NzItMjguNjcycTYuMTQ0LTUuMTIgNi4xNDQtMTMuMzEydC02LjE0NC0xMi4yODhsLTIyNC4yNTYtMjI1LjI4IDIyNC4yNTYtMjI0LjI1NnE2LjE0NC02LjE0NCA2LjE0NC0xMy4zMTJ0LTYuMTQ0LTEzLjMxMnpNNjkwLjE3NiA3NzAuNTZsLTIxMi45OTItNzM4LjMwNHEtMi4wNDgtNy4xNjgtOS4yMTYtMTEuMjY0dC0xMy4zMTItMS4wMjRsLTM0LjgxNiA5LjIxNnEtOC4xOTIgMy4wNzItMTEuMjY0IDkuMjE2dC0yLjA0OCAxNC4zMzZsMjEyLjk5MiA3MzcuMjhxMy4wNzIgOC4xOTIgOS4yMTYgMTEuMjY0dDEzLjMxMiAyLjA0OGwzNS44NC0xMC4yNHE3LjE2OC0yLjA0OCAxMS4yNjQtOS4yMTZ0MS4wMjQtMTMuMzEyek0xMDY1Ljk4NCAzOTcuODI0bC0yNjYuMjQtMjY2LjI0cS02LjE0NC01LjEyLTEzLjMxMi01LjEydC0xMy4zMTIgNS4xMmwtMjguNjcyIDI4LjY3MnEtNS4xMiA2LjE0NC01LjEyIDEzLjMxMnQ1LjEyIDEzLjMxMmwyMjQuMjU2IDIyNC4yNTYtMjI0LjI1NiAyMjUuMjhxLTUuMTIgNS4xMi01LjEyIDEyLjI4OHQ1LjEyIDEzLjMxMmwyOC42NzIgMjguNjcycTYuMTQ0IDYuMTQ0IDEzLjMxMiA2LjE0NHQxMy4zMTItNi4xNDRsMjY2LjI0LTI2Ni4yNHE1LjEyLTUuMTIgNS4xMi0xMy4zMTJ0LTUuMTItMTMuMzEyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4MDM7IiBnbHlwaC1uYW1lPSJjYW5jZWwiIGhvcml6LWFkdi14PSI4MDQiIGQ9Ik03NDEuMzc2IDIwNC4yODhxMC0yMi41MjgtMTUuMzYtMzguOTEybC03Ny44MjQtNzcuODI0cS0xNi4zODQtMTUuMzYtMzguOTEyLTE1LjM2dC0zOC45MTIgMTUuMzZsLTE2Ny45MzYgMTY4Ljk2LTE2Ny45MzYtMTY4Ljk2cS0xNi4zODQtMTUuMzYtMzguOTEyLTE1LjM2dC0zOC45MTIgMTUuMzZsLTc3LjgyNCA3Ny44MjRxLTE2LjM4NCAxNi4zODQtMTYuMzg0IDM4LjkxMnQxNi4zODQgMzguOTEybDE2Ny45MzYgMTY3LjkzNi0xNjcuOTM2IDE2Ny45MzZxLTE2LjM4NCAxNi4zODQtMTYuMzg0IDM4LjkxMnQxNi4zODQgMzguOTEybDc3LjgyNCA3Ny44MjRxMTYuMzg0IDE2LjM4NCAzOC45MTIgMTYuMzg0dDM4LjkxMi0xNi4zODRsMTY3LjkzNi0xNjcuOTM2IDE2Ny45MzYgMTY3LjkzNnExNi4zODQgMTYuMzg0IDM4LjkxMiAxNi4zODR0MzguOTEyLTE2LjM4NGw3Ny44MjQtNzcuODI0cTE1LjM2LTE1LjM2IDE1LjM2LTM4LjkxMnQtMTUuMzYtMzguOTEybC0xNjcuOTM2LTE2Ny45MzYgMTY3LjkzNi0xNjcuOTM2cTE1LjM2LTE1LjM2IDE1LjM2LTM4LjkxMnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODA0OyIgZ2x5cGgtbmFtZT0idGVybWluYWwiIGhvcml6LWFkdi14PSI5NTAiIGQ9Ik0zMzMuODI0IDM5Ny44MjRsLTI2Ni4yNC0yNjYuMjRxLTUuMTItNS4xMi0xMi4yODgtNS4xMnQtMTMuMzEyIDUuMTJsLTI4LjY3MiAyOC42NzJxLTYuMTQ0IDYuMTQ0LTYuMTQ0IDEzLjMxMnQ2LjE0NCAxMy4zMTJsMjI0LjI1NiAyMjQuMjU2LTIyNC4yNTYgMjI1LjI4cS02LjE0NCA1LjEyLTYuMTQ0IDEyLjI4OHQ2LjE0NCAxMy4zMTJsMjguNjcyIDI4LjY3MnE1LjEyIDYuMTQ0IDEzLjMxMiA2LjE0NHQxMi4yODgtNi4xNDRsMjY2LjI0LTI2Ni4yNHE2LjE0NC01LjEyIDYuMTQ0LTEzLjMxMnQtNi4xNDQtMTMuMzEyek05NTEuMjk2IDEzNi43MDR2LTM1Ljg0cTAtOC4xOTItNS4xMi0xMy4zMTJ0LTEzLjMxMi01LjEyaC01NDguODY0cS04LjE5MiAwLTEzLjMxMiA1LjEydC01LjEyIDEzLjMxMnYzNS44NHEwIDguMTkyIDUuMTIgMTMuMzEydDEzLjMxMiA1LjEyaDU0OC44NjRxOC4xOTIgMCAxMy4zMTItNS4xMnQ1LjEyLTEzLjMxMnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODA1OyIgZ2x5cGgtbmFtZT0iYW5nbGUtZG93biIgaG9yaXotYWR2LXg9IjY1NyIgZD0iTTYxNC40IDUzOS4xMzZxMC03LjE2OC02LjE0NC0xMy4zMTJsLTI2Ni4yNC0yNjYuMjRxLTUuMTItNS4xMi0xMy4zMTItNS4xMnQtMTIuMjg4IDUuMTJsLTI2Ni4yNCAyNjYuMjRxLTYuMTQ0IDYuMTQ0LTYuMTQ0IDEzLjMxMnQ2LjE0NCAxMy4zMTJsMjcuNjQ4IDI4LjY3MnE2LjE0NCA2LjE0NCAxMy4zMTIgNi4xNDR0MTMuMzEyLTYuMTQ0bDIyNC4yNTYtMjI0LjI1NiAyMjUuMjggMjI0LjI1NnE1LjEyIDYuMTQ0IDEzLjMxMiA2LjE0NHQxMi4yODgtNi4xNDRsMjguNjcyLTI4LjY3MnE2LjE0NC01LjEyIDYuMTQ0LTEzLjMxMnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODA2OyIgZ2x5cGgtbmFtZT0iZm9udCIgaG9yaXotYWR2LXg9Ijk1MCIgZD0iTTQxNC43MiA2NDAuNTEybC05Ny4yOC0yNTcuMDI0cTE4LjQzMiAwIDc3LjgyNC0xLjAyNHQ5MS4xMzYtMS4wMjRxMTEuMjY0IDAgMzIuNzY4IDEuMDI0LTQ5LjE1MiAxNDQuMzg0LTEwNC40NDggMjU4LjA0OHpNMCA4LjcwNGwxLjAyNCA0NS4wNTZxMTMuMzEyIDQuMDk2IDMxLjc0NCA3LjE2OHQzMi43NjggNi4xNDQgMjguNjcyIDguMTkyIDI1LjYgMTcuNDA4IDE3LjQwOCAyOC42NzJsMTM1LjE2OCAzNTIuMjU2IDE1OS43NDQgNDEzLjY5Nmg3My43MjhxNC4wOTYtOC4xOTIgNi4xNDQtMTIuMjg4bDExNi43MzYtMjc0LjQzMnExOS40NTYtNDUuMDU2IDYxLjQ0LTE0Ny40NTZ0NjQuNTEyLTE1Ni42NzJxOS4yMTYtMTkuNDU2IDMzLjc5Mi04Mi45NDR0NDAuOTYtOTYuMjU2cTExLjI2NC0yNS42IDE5LjQ1Ni0zMS43NDQgMTEuMjY0LTkuMjE2IDUwLjE3Ni0xNy40MDh0NDguMTI4LTExLjI2NHE0LjA5Ni0yMi41MjggNC4wOTYtMzIuNzY4IDAtMi4wNDgtMS4wMjQtNy4xNjh0MC04LjE5MnEtMzUuODQgMC0xMDguNTQ0IDUuMTJ0LTEwOS41NjggNC4wOTZxLTQzLjAwOCAwLTEyMi44OC00LjA5NnQtMTAxLjM3Ni00LjA5NnEwIDI0LjU3NiAyLjA0OCA0NC4wMzJsNzQuNzUyIDE2LjM4NHExLjAyNCAwIDcuMTY4IDEuMDI0dDkuMjE2IDIuMDQ4IDguMTkyIDMuMDcyIDkuMjE2IDQuMDk2IDYuMTQ0IDQuMDk2IDUuMTIgNi4xNDQgMS4wMjQgOC4xOTJxMCA5LjIxNi0xNy40MDggNTUuMjk2dC00MC45NiAxMDEuMzc2LTI0LjU3NiA1Ny4zNDRsLTI1Ny4wMjQgMS4wMjRxLTE0LjMzNi0zMy43OTItNDQuMDMyLTExMS42MTZ0LTI4LjY3Mi05My4xODRxMC0xMi4yODggOC4xOTItMjEuNTA0dDI0LjU3Ni0xNC4zMzYgMjcuNjQ4LTcuMTY4IDMyLjc2OC01LjEyIDIzLjU1Mi0yLjA0OHExLjAyNC0xMS4yNjQgMS4wMjQtMzIuNzY4IDAtNS4xMi0yLjA0OC0xNi4zODQtMzIuNzY4IDAtOTkuMzI4IDYuMTQ0dC05OS4zMjggNi4xNDRxLTUuMTIgMC0xNS4zNi0zLjA3MnQtMTIuMjg4LTIuMDQ4cS00Ni4wODAtOC4xOTItMTA3LjUyLTguMTkyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4MDc7IiBnbHlwaC1uYW1lPSJib2xkIiBob3Jpei1hZHYteD0iODA0IiBkPSJNMzE3LjQ0IDkwLjYyNHE0MS45ODQtMTguNDMyIDc5Ljg3Mi0xOC40MzIgMjE1LjA0MCAwIDIxNS4wNDAgMTkxLjQ4OCAwIDY1LjUzNi0yMy41NTIgMTAzLjQyNC0xNS4zNiAyNC41NzYtMzUuODQgNDEuOTg0dC0zNy44ODggMjYuNjI0LTQ2LjA4MCAxNC4zMzYtNDguMTI4IDYuMTQ0LTU0LjI3MiAxLjAyNHEtNDAuOTYgMC01Ny4zNDQtNi4xNDQgMC0yOS42OTYgMC05MC4xMTJ0LTEuMDI0LTkxLjEzNnEwLTQuMDk2IDAtMzcuODg4dDAtNTUuMjk2IDIuMDQ4LTQ4LjEyOCA3LjE2OC0zNy44ODh6TTMwOS4yNDggNTE3LjYzMnEyMy41NTItNC4wOTYgNjIuNDY0LTQuMDk2IDQ3LjEwNCAwIDgxLjkyIDcuMTY4dDYyLjQ2NCAyNS42IDQxLjk4NCA1MS4yIDE1LjM2IDgwLjg5NnEwIDM5LjkzNi0xNi4zODQgNjkuNjMydC00Ni4wODAgNDcuMTA0LTYxLjQ0IDI0LjU3Ni03MC42NTYgOC4xOTJxLTI4LjY3MiAwLTc0Ljc1Mi03LjE2OCAwLTI4LjY3MiAzLjA3Mi04Ni4wMTZ0Mi4wNDgtODcuMDQwcTAtMTUuMzYgMC00Ni4wODB0LTEuMDI0LTQ1LjA1NnEwLTI2LjYyNCAxLjAyNC0zOC45MTJ6TTAgOC43MDRsMS4wMjQgNTQuMjcycTkuMjE2IDIuMDQ4IDQ5LjE1MiA5LjIxNnQ2MC40MTYgMTUuMzZxNC4wOTYgNy4xNjggNy4xNjggMTUuMzZ0NC4wOTYgMTkuNDU2IDQuMDk2IDE4LjQzMiAxLjAyNCAyMS41MDQgMCAxOS40NTZ2MzYuODY0cTAgNTYxLjE1Mi0xMi4yODggNTg1LjcyOC0yLjA0OCA1LjEyLTEyLjI4OCA4LjE5MnQtMjUuNiA2LjE0NC0yOC42NzIgNC4wOTYtMjcuNjQ4IDMuMDcyLTE3LjQwOCAyLjA0OGwtMi4wNDggNDcuMTA0cTU2LjMyIDEuMDI0IDE5NC41NiA2LjE0NHQyMTIuOTkyIDUuMTJxMTMuMzEyIDAgMzguOTEyIDB0MzguOTEyIDBxMzkuOTM2IDAgNzcuODI0LTcuMTY4dDczLjcyOC0yNC41NzYgNjEuNDQtMzkuOTM2IDQxLjk4NC02MC40MTYgMTYuMzg0LTc3LjgyNHEwLTI5LjY5Ni05LjIxNi01NS4yOTZ0LTIyLjUyOC00MC45Ni0zNi44NjQtMzIuNzY4LTQxLjk4NC0yNS42LTQ4LjEyOC0yMi41MjhxODguMDY0LTIwLjQ4IDE0Ny40NTYtNzYuOHQ1OC4zNjgtMTQyLjMzNnEwLTU2LjMyLTIwLjQ4LTEwMi40dC01My4yNDgtNzQuNzUyLTc4Ljg0OC00OC4xMjgtOTMuMTg0LTI3LjY0OC0xMDAuMzUyLTguMTkycS0yNS42IDAtNzUuNzc2IDIuMDQ4dC03NS43NzYgMS4wMjRxLTYwLjQxNiAwLTE3NS4xMDQtNi4xNDR0LTEzMi4wOTYtNy4xNjh6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTgwODsiIGdseXBoLW5hbWU9Iml0YWxpYyIgaG9yaXotYWR2LXg9IjU4NSIgZD0iTTAgOS43MjhsMTAuMjQgNDkuMTUycTMuMDcyIDEuMDI0IDQ2LjA4MCAxMi4yODh0NjMuNDg4IDIxLjUwNHExNi4zODQgMTkuNDU2IDIzLjU1MiA1Ny4zNDQgMS4wMjQgNC4wOTYgMzUuODQgMTY1Ljg4OHQ2NC41MTIgMzEwLjI3MiAyOS42OTYgMTY4Ljk2djE0LjMzNnEtMTMuMzEyIDcuMTY4LTMwLjcyIDExLjI2NHQtMzkuOTM2IDQuMDk2LTMyLjc2OCAzLjA3MmwxMC4yNCA1OS4zOTJxMTkuNDU2LTIuMDQ4IDY4LjYwOC00LjA5NnQ4Ni4wMTYtNC4wOTYgNjguNjA4LTEuMDI0cTI3LjY0OCAwIDU2LjMyIDEuMDI0dDY4LjYwOCA0LjA5NiA1Ni4zMiA0LjA5NnEtMi4wNDgtMjIuNTI4LTEwLjI0LTUxLjItMTcuNDA4LTYuMTQ0LTU4LjM2OC0xNi4zODR0LTYxLjQ0LTE5LjQ1NnEtNS4xMi0xMC4yNC04LjE5Mi0yMy41NTJ0LTUuMTItMjMuNTUyLTQuMDk2LTI1LjYtNC4wOTYtMjQuNTc2cS0xNS4zNi04My45NjgtNTAuMTc2LTIzOS42MTZ0LTQ0LjAzMi0yMDIuNzUycS0xLjAyNC01LjEyLTcuMTY4LTMyLjc2OHQtMTEuMjY0LTUyLjIyNC05LjIxNi00Ny4xMDQtNC4wOTYtMzIuNzY4bDEuMDI0LTEwLjI0cTkuMjE2LTMuMDcyIDEwNS40NzItMTguNDMyLTIuMDQ4LTI0LjU3Ni05LjIxNi01Ni4zMi02LjE0NCAwLTE4LjQzMi0xLjAyNHQtMTguNDMyLTEuMDI0cS0xNi4zODQgMC01MC4xNzYgNi4xNDR0LTQ5LjE1MiA2LjE0NHEtNzguODQ4IDEuMDI0LTExNy43NiAxLjAyNC0yOC42NzIgMC04MC44OTYtNS4xMnQtNjkuNjMyLTYuMTQ0eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4MDk7IiBnbHlwaC1uYW1lPSJoZWFkZXIiIGQ9Ik05NjEuNTM2IDguNzA0cS0yNS42IDAtNzUuNzc2IDIuMDQ4dC03Ni44IDIuMDQ4cS0yNC41NzYgMC03NC43NTItMi4wNDh0LTc1Ljc3Ni0yLjA0OHEtMTQuMzM2IDAtMjEuNTA0IDEyLjI4OHQtNy4xNjggMjUuNnEwIDE3LjQwOCA5LjIxNiAyNi42MjR0MjIuNTI4IDkuMjE2IDI5LjY5NiA0LjA5NiAyNS42IDkuMjE2cTE4LjQzMiAxMS4yNjQgMTguNDMyIDc5Ljg3MnYyMjMuMjMycTAgMTIuMjg4LTEuMDI0IDE3LjQwOC03LjE2OCAzLjA3Mi0yOC42NzIgMy4wNzJoLTM4NS4wMjRxLTIyLjUyOCAwLTI5LjY5Ni0zLjA3MiAwLTUuMTIgMC0xNy40MDhsLTEuMDI0LTIxMS45NjhxMC04MC44OTYgMjEuNTA0LTk0LjIwOCA5LjIxNi01LjEyIDI2LjYyNC03LjE2OHQzMi43NjgtMi4wNDggMjUuNi04LjE5MiAxMS4yNjQtMjYuNjI0cTAtMTQuMzM2LTcuMTY4LTI2LjYyNHQtMjAuNDgtMTMuMzEycS0yNi42MjQgMC03OS44NzIgMi4wNDh0LTc4Ljg0OCAyLjA0OHEtMjQuNTc2IDAtNzIuNzA0LTIuMDQ4dC03Mi43MDQtMi4wNDhxLTEzLjMxMiAwLTIwLjQ4IDEyLjI4OHQtNy4xNjggMjUuNnEwIDE3LjQwOCA5LjIxNiAyNS42dDIwLjQ4IDEwLjI0IDI2LjYyNCA0LjA5NiAyNC41NzYgOS4yMTZxMTguNDMyIDEzLjMxMiAxOC40MzIgODEuOTJsLTEuMDI0IDMxLjc0NHY0NjQuODk2cTAgMi4wNDggMS4wMjQgMTQuMzM2dDAgMjEuNTA0LTEuMDI0IDIxLjUwNC0yLjA0OCAyNC41NzYtNC4wOTYgMjAuNDgtNi4xNDQgMTguNDMyLTkuMjE2IDEwLjI0cS04LjE5MiA1LjEyLTI1LjYgNi4xNDR0LTI5LjY5NiAyLjA0OC0yMy41NTIgNy4xNjgtMTAuMjQgMjYuNjI0cTAgMTQuMzM2IDYuMTQ0IDI2LjYyNHQyMC40OCAxMy4zMTJxMjYuNjI0IDAgNzkuODcyLTIuMDQ4dDc4Ljg0OC0yLjA0OHEyMy41NTIgMCA3Mi43MDQgMi4wNDh0NzEuNjggMi4wNDhxMTQuMzM2IDAgMjEuNTA0LTEzLjMxMnQ3LjE2OC0yNi42MjRxMC0xNy40MDgtOS4yMTYtMjUuNnQtMjIuNTI4LTguMTkyLTI4LjY3Mi0yLjA0OC0yNC41NzYtNy4xNjhxLTE5LjQ1Ni0xMi4yODgtMTkuNDU2LTkyLjE2bDEuMDI0LTE4Mi4yNzJxMC0xMi4yODggMC0xOC40MzIgNy4xNjgtMi4wNDggMjIuNTI4LTIuMDQ4aDM5OS4zNnExNC4zMzYgMCAyMS41MDQgMi4wNDggMS4wMjQgNi4xNDQgMS4wMjQgMTguNDMydjE4Mi4yNzJxMCA3OS44NzItMTkuNDU2IDkyLjE2LTEwLjI0IDYuMTQ0LTMzLjc5MiA3LjE2OHQtMzcuODg4IDcuMTY4LTE0LjMzNiAyOC42NzJxMCAxNC4zMzYgNy4xNjggMjYuNjI0dDIxLjUwNCAxMy4zMTJxMjQuNTc2IDAgNzUuNzc2LTIuMDQ4dDc0Ljc1Mi0yLjA0OHEyNC41NzYgMCA3My43MjggMi4wNDh0NzMuNzI4IDIuMDQ4cTE0LjMzNiAwIDIxLjUwNC0xMy4zMTJ0Ny4xNjgtMjYuNjI0cTAtMTcuNDA4LTEwLjI0LTI1LjZ0LTIyLjUyOC04LjE5Mi0yOS42OTYtMi4wNDgtMjQuNTc2LTcuMTY4cS0yMC40OC0xMy4zMTItMjAuNDgtOTIuMTZsMS4wMjQtNTM4LjYyNHEwLTY3LjU4NCAxOS40NTYtNzkuODcyIDkuMjE2LTYuMTQ0IDI1LjYtNy4xNjh0MzAuNzItMy4wNzIgMjMuNTUyLTkuMjE2IDEwLjI0LTI0LjU3NnEwLTE1LjM2LTYuMTQ0LTI3LjY0OHQtMjAuNDgtMTMuMzEyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4MGE7IiBnbHlwaC1uYW1lPSJhbGlnbi1sZWZ0IiBkPSJNMTAyNCAxOTJ2LTcyLjcwNHEwLTE1LjM2LTExLjI2NC0yNS42dC0yNS42LTExLjI2NGgtOTUwLjI3MnEtMTUuMzYgMC0yNS42IDExLjI2NHQtMTEuMjY0IDI1LjZ2NzIuNzA0cTAgMTUuMzYgMTEuMjY0IDI1LjZ0MjUuNiAxMS4yNjRoOTUwLjI3MnExNS4zNiAwIDI1LjYtMTEuMjY0dDExLjI2NC0yNS42ek04MDQuODY0IDQxMS4xMzZ2LTcyLjcwNHEwLTE1LjM2LTExLjI2NC0yNS42dC0yNS42LTExLjI2NGgtNzMxLjEzNnEtMTUuMzYgMC0yNS42IDExLjI2NHQtMTEuMjY0IDI1LjZ2NzIuNzA0cTAgMTUuMzYgMTEuMjY0IDI1LjZ0MjUuNiAxMS4yNjRoNzMxLjEzNnExNS4zNiAwIDI1LjYtMTEuMjY0dDExLjI2NC0yNS42ek05NTEuMjk2IDYzMS4yOTZ2LTczLjcyOHEwLTE0LjMzNi0xMS4yNjQtMjUuNnQtMjUuNi0xMS4yNjRoLTg3Ny41NjhxLTE1LjM2IDAtMjUuNiAxMS4yNjR0LTExLjI2NCAyNS42djczLjcyOHEwIDE0LjMzNiAxMS4yNjQgMjUuNnQyNS42IDEwLjI0aDg3Ny41NjhxMTQuMzM2IDAgMjUuNi0xMC4yNHQxMS4yNjQtMjUuNnpNNzMxLjEzNiA4NTAuNDMydi03My43MjhxMC0xNC4zMzYtMTAuMjQtMjUuNnQtMjUuNi0xMC4yNGgtNjU4LjQzMnEtMTUuMzYgMC0yNS42IDEwLjI0dC0xMS4yNjQgMjUuNnY3My43MjhxMCAxNC4zMzYgMTEuMjY0IDI1LjZ0MjUuNiAxMS4yNjRoNjU4LjQzMnExNC4zMzYgMCAyNS42LTExLjI2NHQxMC4yNC0yNS42eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4MGI7IiBnbHlwaC1uYW1lPSJhbGlnbi1jZW50ZXIiIGQ9Ik0xMDI0IDE5MnYtNzIuNzA0cTAtMTUuMzYtMTEuMjY0LTI1LjZ0LTI1LjYtMTEuMjY0aC05NTAuMjcycS0xNS4zNiAwLTI1LjYgMTEuMjY0dC0xMS4yNjQgMjUuNnY3Mi43MDRxMCAxNS4zNiAxMS4yNjQgMjUuNnQyNS42IDExLjI2NGg5NTAuMjcycTE1LjM2IDAgMjUuNi0xMS4yNjR0MTEuMjY0LTI1LjZ6TTgwNC44NjQgNDExLjEzNnYtNzIuNzA0cTAtMTUuMzYtMTEuMjY0LTI1LjZ0LTI1LjYtMTEuMjY0aC01MTJxLTE0LjMzNiAwLTI1LjYgMTEuMjY0dC0xMS4yNjQgMjUuNnY3Mi43MDRxMCAxNS4zNiAxMS4yNjQgMjUuNnQyNS42IDExLjI2NGg1MTJxMTUuMzYgMCAyNS42LTExLjI2NHQxMS4yNjQtMjUuNnpNOTUxLjI5NiA2MzEuMjk2di03My43MjhxMC0xNC4zMzYtMTEuMjY0LTI1LjZ0LTI1LjYtMTEuMjY0aC04MDQuODY0cS0xNC4zMzYgMC0yNS42IDExLjI2NHQtMTEuMjY0IDI1LjZ2NzMuNzI4cTAgMTQuMzM2IDExLjI2NCAyNS42dDI1LjYgMTAuMjRoODA0Ljg2NHExNC4zMzYgMCAyNS42LTEwLjI0dDExLjI2NC0yNS42ek03MzEuMTM2IDg1MC40MzJ2LTczLjcyOHEwLTE0LjMzNi0xMC4yNC0yNS42dC0yNS42LTEwLjI0aC0zNjYuNTkycS0xNC4zMzYgMC0yNS42IDEwLjI0dC0xMC4yNCAyNS42djczLjcyOHEwIDE0LjMzNiAxMC4yNCAyNS42dDI1LjYgMTEuMjY0aDM2Ni41OTJxMTQuMzM2IDAgMjUuNi0xMS4yNjR0MTAuMjQtMjUuNnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODBjOyIgZ2x5cGgtbmFtZT0iYWxpZ24tcmlnaHQiIGQ9Ik0xMDI0IDE5MnYtNzIuNzA0cTAtMTUuMzYtMTEuMjY0LTI1LjZ0LTI1LjYtMTEuMjY0aC05NTAuMjcycS0xNS4zNiAwLTI1LjYgMTEuMjY0dC0xMS4yNjQgMjUuNnY3Mi43MDRxMCAxNS4zNiAxMS4yNjQgMjUuNnQyNS42IDExLjI2NGg5NTAuMjcycTE1LjM2IDAgMjUuNi0xMS4yNjR0MTEuMjY0LTI1LjZ6TTEwMjQgNDExLjEzNnYtNzIuNzA0cTAtMTUuMzYtMTEuMjY0LTI1LjZ0LTI1LjYtMTEuMjY0aC03MzEuMTM2cS0xNC4zMzYgMC0yNS42IDExLjI2NHQtMTEuMjY0IDI1LjZ2NzIuNzA0cTAgMTUuMzYgMTEuMjY0IDI1LjZ0MjUuNiAxMS4yNjRoNzMxLjEzNnExNS4zNiAwIDI1LjYtMTEuMjY0dDExLjI2NC0yNS42ek0xMDI0IDYzMS4yOTZ2LTczLjcyOHEwLTE0LjMzNi0xMS4yNjQtMjUuNnQtMjUuNi0xMS4yNjRoLTg3Ny41NjhxLTE0LjMzNiAwLTI1LjYgMTEuMjY0dC0xMS4yNjQgMjUuNnY3My43MjhxMCAxNC4zMzYgMTEuMjY0IDI1LjZ0MjUuNiAxMC4yNGg4NzcuNTY4cTE1LjM2IDAgMjUuNi0xMC4yNHQxMS4yNjQtMjUuNnpNMTAyNCA4NTAuNDMydi03My43MjhxMC0xNC4zMzYtMTEuMjY0LTI1LjZ0LTI1LjYtMTAuMjRoLTY1OC40MzJxLTE0LjMzNiAwLTI1LjYgMTAuMjR0LTEwLjI0IDI1LjZ2NzMuNzI4cTAgMTQuMzM2IDEwLjI0IDI1LjZ0MjUuNiAxMS4yNjRoNjU4LjQzMnExNS4zNiAwIDI1LjYtMTEuMjY0dDExLjI2NC0yNS42eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4MGQ7IiBnbHlwaC1uYW1lPSJsaXN0LWJ1bGxldCIgZD0iTTIxOS4xMzYgMTU1LjEzNnEwLTQ1LjA1Ni0zMS43NDQtNzcuODI0dC03Ny44MjQtMzEuNzQ0LTc3LjgyNCAzMS43NDQtMzEuNzQ0IDc3LjgyNCAzMS43NDQgNzcuODI0IDc3LjgyNCAzMS43NDQgNzcuODI0LTMxLjc0NCAzMS43NDQtNzcuODI0ek0yMTkuMTM2IDQ0OHEwLTQ2LjA4MC0zMS43NDQtNzcuODI0dC03Ny44MjQtMzEuNzQ0LTc3LjgyNCAzMS43NDQtMzEuNzQ0IDc3LjgyNCAzMS43NDQgNzcuODI0IDc3LjgyNCAzMS43NDQgNzcuODI0LTMxLjc0NCAzMS43NDQtNzcuODI0ek0xMDI0IDIxMC40MzJ2LTEwOS41NjhxMC03LjE2OC01LjEyLTEzLjMxMnQtMTMuMzEyLTUuMTJoLTY5NC4yNzJxLTguMTkyIDAtMTMuMzEyIDUuMTJ0LTUuMTIgMTMuMzEydjEwOS41NjhxMCA3LjE2OCA1LjEyIDEyLjI4OHQxMy4zMTIgNi4xNDRoNjk0LjI3MnE3LjE2OCAwIDEzLjMxMi02LjE0NHQ1LjEyLTEyLjI4OHpNMjE5LjEzNiA3NDAuODY0cTAtNDYuMDgwLTMxLjc0NC03Ny44MjR0LTc3LjgyNC0zMS43NDQtNzcuODI0IDMxLjc0NC0zMS43NDQgNzcuODI0IDMxLjc0NCA3Ny44MjQgNzcuODI0IDMxLjc0NCA3Ny44MjQtMzEuNzQ0IDMxLjc0NC03Ny44MjR6TTEwMjQgNTAzLjI5NnYtMTEwLjU5MnEwLTcuMTY4LTUuMTItMTIuMjg4dC0xMy4zMTItNS4xMmgtNjk0LjI3MnEtOC4xOTIgMC0xMy4zMTIgNS4xMnQtNS4xMiAxMi4yODh2MTEwLjU5MnEwIDcuMTY4IDUuMTIgMTIuMjg4dDEzLjMxMiA1LjEyaDY5NC4yNzJxNy4xNjggMCAxMy4zMTItNS4xMnQ1LjEyLTEyLjI4OHpNMTAyNCA3OTUuMTM2di0xMDkuNTY4cTAtNy4xNjgtNS4xMi0xMi4yODh0LTEzLjMxMi02LjE0NGgtNjk0LjI3MnEtOC4xOTIgMC0xMy4zMTIgNi4xNDR0LTUuMTIgMTIuMjg4djEwOS41NjhxMCA4LjE5MiA1LjEyIDEzLjMxMnQxMy4zMTIgNS4xMmg2OTQuMjcycTcuMTY4IDAgMTMuMzEyLTUuMTJ0NS4xMi0xMy4zMTJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTgwZTsiIGdseXBoLW5hbWU9ImluZGVudC1sZWZ0IiBkPSJNMjE5LjEzNiA2NDguNzA0di0zMjguNzA0cTAtNy4xNjgtNS4xMi0xMy4zMTJ0LTEzLjMxMi01LjEycS03LjE2OCAwLTEyLjI4OCA1LjEybC0xNjQuODY0IDE2NC44NjRxLTUuMTIgNS4xMi01LjEyIDEzLjMxMnQ1LjEyIDEzLjMxMmwxNjQuODY0IDE2My44NHE1LjEyIDUuMTIgMTIuMjg4IDUuMTIgOC4xOTIgMCAxMy4zMTItNS4xMnQ1LjEyLTEzLjMxMnpNMTAyNCAyMTAuNDMydi0xMDkuNTY4cTAtNy4xNjgtNS4xMi0xMy4zMTJ0LTEzLjMxMi01LjEyaC05ODcuMTM2cS03LjE2OCAwLTEzLjMxMiA1LjEydC01LjEyIDEzLjMxMnYxMDkuNTY4cTAgNy4xNjggNS4xMiAxMi4yODh0MTMuMzEyIDYuMTQ0aDk4Ny4xMzZxNy4xNjggMCAxMy4zMTItNi4xNDR0NS4xMi0xMi4yODh6TTEwMjQgNDI5LjU2OHYtMTA5LjU2OHEwLTcuMTY4LTUuMTItMTMuMzEydC0xMy4zMTItNS4xMmgtNjIxLjU2OHEtNy4xNjggMC0xMy4zMTIgNS4xMnQtNS4xMiAxMy4zMTJ2MTA5LjU2OHEwIDcuMTY4IDUuMTIgMTMuMzEydDEzLjMxMiA1LjEyaDYyMS41NjhxNy4xNjggMCAxMy4zMTItNS4xMnQ1LjEyLTEzLjMxMnpNMTAyNCA2NDguNzA0di0xMDkuNTY4cTAtNy4xNjgtNS4xMi0xMi4yODh0LTEzLjMxMi02LjE0NGgtNjIxLjU2OHEtNy4xNjggMC0xMy4zMTIgNi4xNDR0LTUuMTIgMTIuMjg4djEwOS41NjhxMCA4LjE5MiA1LjEyIDEzLjMxMnQxMy4zMTIgNS4xMmg2MjEuNTY4cTcuMTY4IDAgMTMuMzEyLTUuMTJ0NS4xMi0xMy4zMTJ6TTEwMjQgODY4Ljg2NHYtMTA5LjU2OHEwLTguMTkyLTUuMTItMTMuMzEydC0xMy4zMTItNS4xMmgtOTg3LjEzNnEtNy4xNjggMC0xMy4zMTIgNS4xMnQtNS4xMiAxMy4zMTJ2MTA5LjU2OHEwIDcuMTY4IDUuMTIgMTIuMjg4dDEzLjMxMiA2LjE0NGg5ODcuMTM2cTcuMTY4IDAgMTMuMzEyLTYuMTQ0dDUuMTItMTIuMjg4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4MGY7IiBnbHlwaC1uYW1lPSJpbmRlbnQtcmlnaHQiIGQ9Ik0yMDAuNzA0IDQ4NC44NjRxMC04LjE5Mi01LjEyLTEzLjMxMmwtMTYzLjg0LTE2NC44NjRxLTUuMTItNS4xMi0xMy4zMTItNS4xMi03LjE2OCAwLTEzLjMxMiA1LjEydC01LjEyIDEzLjMxMnYzMjguNzA0cTAgOC4xOTIgNS4xMiAxMy4zMTJ0MTMuMzEyIDUuMTIgMTMuMzEyLTUuMTJsMTYzLjg0LTE2My44NHE1LjEyLTUuMTIgNS4xMi0xMy4zMTJ6TTEwMjQgMjEwLjQzMnYtMTA5LjU2OHEwLTcuMTY4LTUuMTItMTMuMzEydC0xMy4zMTItNS4xMmgtOTg3LjEzNnEtNy4xNjggMC0xMy4zMTIgNS4xMnQtNS4xMiAxMy4zMTJ2MTA5LjU2OHEwIDcuMTY4IDUuMTIgMTIuMjg4dDEzLjMxMiA2LjE0NGg5ODcuMTM2cTcuMTY4IDAgMTMuMzEyLTYuMTQ0dDUuMTItMTIuMjg4ek0xMDI0IDQyOS41Njh2LTEwOS41NjhxMC03LjE2OC01LjEyLTEzLjMxMnQtMTMuMzEyLTUuMTJoLTYyMS41NjhxLTcuMTY4IDAtMTMuMzEyIDUuMTJ0LTUuMTIgMTMuMzEydjEwOS41NjhxMCA3LjE2OCA1LjEyIDEzLjMxMnQxMy4zMTIgNS4xMmg2MjEuNTY4cTcuMTY4IDAgMTMuMzEyLTUuMTJ0NS4xMi0xMy4zMTJ6TTEwMjQgNjQ4LjcwNHYtMTA5LjU2OHEwLTcuMTY4LTUuMTItMTIuMjg4dC0xMy4zMTItNi4xNDRoLTYyMS41NjhxLTcuMTY4IDAtMTMuMzEyIDYuMTQ0dC01LjEyIDEyLjI4OHYxMDkuNTY4cTAgOC4xOTIgNS4xMiAxMy4zMTJ0MTMuMzEyIDUuMTJoNjIxLjU2OHE3LjE2OCAwIDEzLjMxMi01LjEydDUuMTItMTMuMzEyek0xMDI0IDg2OC44NjR2LTEwOS41NjhxMC04LjE5Mi01LjEyLTEzLjMxMnQtMTMuMzEyLTUuMTJoLTk4Ny4xMzZxLTcuMTY4IDAtMTMuMzEyIDUuMTJ0LTUuMTIgMTMuMzEydjEwOS41NjhxMCA3LjE2OCA1LjEyIDEyLjI4OHQxMy4zMTIgNi4xNDRoOTg3LjEzNnE3LjE2OCAwIDEzLjMxMi02LjE0NHQ1LjEyLTEyLjI4OHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODEwOyIgZ2x5cGgtbmFtZT0ibGlzdC1udW1iZXJlZCIgZD0iTTIxOC4xMTIgMzQuMzA0cTAtNDYuMDgwLTMxLjc0NC03MS42OHQtNzYuOC0yNi42MjRxLTYxLjQ0IDAtOTguMzA0IDM3Ljg4OGwzMS43NDQgNTAuMTc2cTI4LjY3Mi0yNS42IDYxLjQ0LTI1LjYgMTYuMzg0IDAgMjguNjcyIDguMTkydDEyLjI4OCAyNC41NzZxMCAzNS44NC02MC40MTYgMzEuNzQ0bC0xNC4zMzYgMzEuNzQ0cTQuMDk2IDYuMTQ0IDE4LjQzMiAyNC41NzZ0MjQuNTc2IDMxLjc0NCAyMC40OCAyMS41MDR2MS4wMjRxLTkuMjE2IDAtMjcuNjQ4LTEuMDI0dC0yNy42NDggMHYtMzAuNzJoLTYwLjQxNnY4Ny4wNDBoMTkwLjQ2NHYtNTAuMTc2bC01NC4yNzItNjYuNTZxMjguNjcyLTYuMTQ0IDQ2LjA4MC0yNy42NDh0MTcuNDA4LTUwLjE3NnpNMjE5LjEzNiAzOTIuNzA0di05MS4xMzZoLTIwNi44NDhxLTQuMDk2IDIwLjQ4LTQuMDk2IDMwLjcyIDAgMjkuNjk2IDE0LjMzNiA1My4yNDh0MzEuNzQ0IDM4LjkxMiAzNy44ODggMjcuNjQ4IDMxLjc0NCAyNC41NzYgMTQuMzM2IDI1LjZxMCAxNC4zMzYtOS4yMTYgMjIuNTI4dC0yMi41MjggNy4xNjhxLTI1LjYgMC00Ni4wODAtMzIuNzY4bC00OC4xMjggMzMuNzkycTEzLjMxMiAyOC42NzIgNDAuOTYgNDUuMDU2dDYwLjQxNiAxNi4zODRxNDAuOTYgMCA2OS42MzItMjMuNTUydDI4LjY3Mi02NC41MTJxMC0yOC42NzItMTkuNDU2LTUyLjIyNHQtNDMuMDA4LTM2Ljg2NC00My4wMDgtMjguNjcyLTIwLjQ4LTMwLjcyaDcyLjcwNHYzNC44MTZoNjAuNDE2ek0xMDI0IDIxMC40MzJ2LTEwOS41NjhxMC04LjE5Mi01LjEyLTEzLjMxMnQtMTMuMzEyLTUuMTJoLTY5NC4yNzJxLTguMTkyIDAtMTMuMzEyIDUuMTJ0LTUuMTIgMTMuMzEydjEwOS41NjhxMCA4LjE5MiA1LjEyIDEzLjMxMnQxMy4zMTIgNS4xMmg2OTQuMjcycTcuMTY4IDAgMTMuMzEyLTYuMTQ0dDUuMTItMTIuMjg4ek0yMTkuMTM2IDcyNC40OHYtNTcuMzQ0aC0xOTEuNDg4djU3LjM0NGg2MS40NHEwIDIyLjUyOCAwIDY5LjYzMnQxLjAyNCA2OC42MDh2Ny4xNjhoLTEuMDI0cS01LjEyLTEwLjI0LTI4LjY3Mi0zMC43MmwtNDAuOTYgNDMuMDA4IDc3LjgyNCA3Mi43MDRoNjAuNDE2di0yMzAuNGg2MS40NHpNMTAyNCA1MDMuMjk2di0xMTAuNTkycTAtNy4xNjgtNS4xMi0xMi4yODh0LTEzLjMxMi01LjEyaC02OTQuMjcycS04LjE5MiAwLTEzLjMxMiA1LjEydC01LjEyIDEyLjI4OHYxMTAuNTkycTAgNy4xNjggNS4xMiAxMi4yODh0MTMuMzEyIDUuMTJoNjk0LjI3MnE3LjE2OCAwIDEzLjMxMi01LjEydDUuMTItMTIuMjg4ek0xMDI0IDc5NS4xMzZ2LTEwOS41NjhxMC03LjE2OC01LjEyLTEyLjI4OHQtMTMuMzEyLTYuMTQ0aC02OTQuMjcycS04LjE5MiAwLTEzLjMxMiA2LjE0NHQtNS4xMiAxMi4yODh2MTA5LjU2OHEwIDguMTkyIDUuMTIgMTMuMzEydDEzLjMxMiA1LjEyaDY5NC4yNzJxNy4xNjggMCAxMy4zMTItNS4xMnQ1LjEyLTEzLjMxMnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODExOyIgZ2x5cGgtbmFtZT0idW5kZXJsaW5lIiBob3Jpei1hZHYteD0iODc4IiBkPSJNMjcuNjQ4IDgzMy4wMjRxLTIxLjUwNCAxLjAyNC0yNS42IDIuMDQ4bC0yLjA0OCA1MC4xNzZxNy4xNjggMCAyMi41MjggMCAzNC44MTYgMCA2NC41MTItMi4wNDggNzUuNzc2LTQuMDk2IDk0LjIwOC00LjA5NiA0OS4xNTIgMCA5Ni4yNTYgMi4wNDggNjYuNTYgMi4wNDggODMuOTY4IDMuMDcyIDMxLjc0NCAwIDQ5LjE1MiAxLjAyNGwtMS4wMjQtOC4xOTIgMS4wMjQtMzYuODY0di01LjEycS0zMy43OTItNS4xMi03MC42NTYtNS4xMi0zMy43OTIgMC00NS4wNTYtMTQuMzM2LTcuMTY4LTcuMTY4LTcuMTY4LTc0Ljc1MiAwLTguMTkyIDAtMTguNDMydDAtMTUuMzZsMS4wMjQtMTMxLjA3MiA4LjE5Mi0xNTkuNzQ0cTMuMDcyLTcwLjY1NiAyOC42NzItMTE0LjY4OCAyMC40OC0zMy43OTIgNTUuMjk2LTUzLjI0OCA1MC4xNzYtMjYuNjI0IDEwMC4zNTItMjYuNjI0IDU5LjM5MiAwIDEwOS41NjggMTYuMzg0IDMxLjc0NCAxMC4yNCA1Ni4zMiAyOC42NzIgMjcuNjQ4IDIwLjQ4IDM3Ljg4OCAzNi44NjQgMjAuNDggMzEuNzQ0IDI5LjY5NiA2NC41MTIgMTIuMjg4IDQxLjk4NCAxMi4yODggMTMxLjA3MiAwIDQ1LjA1Ni0yLjA0OCA3My43Mjh0LTYuMTQ0IDY5LjYzMi04LjE5MiA5MS4xMzZsLTIuMDQ4IDMzLjc5MnEtMy4wNzIgMzcuODg4LTEzLjMxMiA1MC4xNzYtMTkuNDU2IDIwLjQ4LTQ0LjAzMiAxOS40NTZsLTU3LjM0NC0xLjAyNC04LjE5MiAyLjA0OCAxLjAyNCA0OS4xNTJoNDguMTI4bDExNi43MzYtNi4xNDRxNDQuMDMyLTIuMDQ4IDExMi42NCA2LjE0NGwxMC4yNC0yLjA0OHEzLjA3Mi0yMS41MDQgMy4wNzItMjguNjcyIDAtNC4wOTYtMi4wNDgtMTcuNDA4LTI1LjYtNy4xNjgtNDguMTI4LTguMTkyLTQxLjk4NC02LjE0NC00NS4wNTYtOS4yMTYtOC4xOTItOS4yMTYtOC4xOTItMjMuNTUyIDAtNC4wOTYgMC0xNS4zNnQxLjAyNC0xNy40MDhxNS4xMi0xMS4yNjQgMTMuMzEyLTIyNi4zMDQgMy4wNzItMTExLjYxNi05LjIxNi0xNzQuMDgwLTguMTkyLTQzLjAwOC0yMy41NTItNjkuNjMyLTIxLjUwNC0zNi44NjQtNjMuNDg4LTcwLjY1Ni00My4wMDgtMzIuNzY4LTEwNC40NDgtNTAuMTc2LTYyLjQ2NC0xOS40NTYtMTQ1LjQwOC0xOS40NTYtOTUuMjMyIDAtMTYyLjgxNiAyNi42MjR0LTEwMS4zNzYgNjkuNjMycS0zNC44MTYgNDMuMDA4LTQ4LjEyOCAxMTEuNjE2LTkuMjE2IDQ1LjA1Ni05LjIxNiAxMzUuMTY4djE5MC40NjRxMCAxMDcuNTItOS4yMTYgMTIxLjg1Ni0xNC4zMzYgMjAuNDgtODMuOTY4IDIxLjUwNHpNODc3LjU2OCAyNy4xMzZ2MzYuODY0cTAgOC4xOTItNS4xMiAxMy4zMTJ0LTEzLjMxMiA1LjEyaC04NDAuNzA0cS04LjE5MiAwLTEzLjMxMi01LjEydC01LjEyLTEzLjMxMnYtMzYuODY0cTAtOC4xOTIgNS4xMi0xMy4zMTJ0MTMuMzEyLTUuMTJoODQwLjcwNHE4LjE5MiAwIDEzLjMxMiA1LjEydDUuMTIgMTMuMzEyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4MTI7IiBnbHlwaC1uYW1lPSJ0YWJsZSIgaG9yaXotYWR2LXg9Ijk1MCIgZD0iTTI5Mi44NjQgMTczLjU2OHYxMDkuNTY4cTAgOC4xOTItNS4xMiAxMy4zMTJ0LTEzLjMxMiA1LjEyaC0xODMuMjk2cS03LjE2OCAwLTEzLjMxMi01LjEydC01LjEyLTEzLjMxMnYtMTA5LjU2OHEwLTguMTkyIDUuMTItMTMuMzEydDEzLjMxMi01LjEyaDE4My4yOTZxOC4xOTIgMCAxMy4zMTIgNS4xMnQ1LjEyIDEzLjMxMnpNMjkyLjg2NCAzOTIuNzA0djExMC41OTJxMCA3LjE2OC01LjEyIDEyLjI4OHQtMTMuMzEyIDUuMTJoLTE4My4yOTZxLTcuMTY4IDAtMTMuMzEyLTUuMTJ0LTUuMTItMTIuMjg4di0xMTAuNTkycTAtNy4xNjggNS4xMi0xMi4yODh0MTMuMzEyLTUuMTJoMTgzLjI5NnE4LjE5MiAwIDEzLjMxMiA1LjEydDUuMTIgMTIuMjg4ek01ODQuNzA0IDE3My41Njh2MTA5LjU2OHEwIDguMTkyLTUuMTIgMTMuMzEydC0xMi4yODggNS4xMmgtMTgzLjI5NnEtOC4xOTIgMC0xMy4zMTItNS4xMnQtNS4xMi0xMy4zMTJ2LTEwOS41NjhxMC04LjE5MiA1LjEyLTEzLjMxMnQxMy4zMTItNS4xMmgxODMuMjk2cTcuMTY4IDAgMTIuMjg4IDUuMTJ0NS4xMiAxMy4zMTJ6TTI5Mi44NjQgNjEyLjg2NHYxMDkuNTY4cTAgOC4xOTItNS4xMiAxMy4zMTJ0LTEzLjMxMiA1LjEyaC0xODMuMjk2cS03LjE2OCAwLTEzLjMxMi01LjEydC01LjEyLTEzLjMxMnYtMTA5LjU2OHEwLTguMTkyIDUuMTItMTMuMzEydDEzLjMxMi01LjEyaDE4My4yOTZxOC4xOTIgMCAxMy4zMTIgNS4xMnQ1LjEyIDEzLjMxMnpNNTg0LjcwNCAzOTIuNzA0djExMC41OTJxMCA3LjE2OC01LjEyIDEyLjI4OHQtMTIuMjg4IDUuMTJoLTE4My4yOTZxLTguMTkyIDAtMTMuMzEyLTUuMTJ0LTUuMTItMTIuMjg4di0xMTAuNTkycTAtNy4xNjggNS4xMi0xMi4yODh0MTMuMzEyLTUuMTJoMTgzLjI5NnE3LjE2OCAwIDEyLjI4OCA1LjEydDUuMTIgMTIuMjg4ek04NzcuNTY4IDE3My41Njh2MTA5LjU2OHEwIDguMTkyLTUuMTIgMTMuMzEydC0xMy4zMTIgNS4xMmgtMTgyLjI3MnEtOC4xOTIgMC0xMy4zMTItNS4xMnQtNS4xMi0xMy4zMTJ2LTEwOS41NjhxMC04LjE5MiA1LjEyLTEzLjMxMnQxMy4zMTItNS4xMmgxODIuMjcycTguMTkyIDAgMTMuMzEyIDUuMTJ0NS4xMiAxMy4zMTJ6TTU4NC43MDQgNjEyLjg2NHYxMDkuNTY4cTAgOC4xOTItNS4xMiAxMy4zMTJ0LTEyLjI4OCA1LjEyaC0xODMuMjk2cS04LjE5MiAwLTEzLjMxMi01LjEydC01LjEyLTEzLjMxMnYtMTA5LjU2OHEwLTguMTkyIDUuMTItMTMuMzEydDEzLjMxMi01LjEyaDE4My4yOTZxNy4xNjggMCAxMi4yODggNS4xMnQ1LjEyIDEzLjMxMnpNODc3LjU2OCAzOTIuNzA0djExMC41OTJxMCA3LjE2OC01LjEyIDEyLjI4OHQtMTMuMzEyIDUuMTJoLTE4Mi4yNzJxLTguMTkyIDAtMTMuMzEyLTUuMTJ0LTUuMTItMTIuMjg4di0xMTAuNTkycTAtNy4xNjggNS4xMi0xMi4yODh0MTMuMzEyLTUuMTJoMTgyLjI3MnE4LjE5MiAwIDEzLjMxMiA1LjEydDUuMTIgMTIuMjg4ek04NzcuNTY4IDYxMi44NjR2MTA5LjU2OHEwIDguMTkyLTUuMTIgMTMuMzEydC0xMy4zMTIgNS4xMmgtMTgyLjI3MnEtOC4xOTIgMC0xMy4zMTItNS4xMnQtNS4xMi0xMy4zMTJ2LTEwOS41NjhxMC04LjE5MiA1LjEyLTEzLjMxMnQxMy4zMTItNS4xMmgxODIuMjcycTguMTkyIDAgMTMuMzEyIDUuMTJ0NS4xMiAxMy4zMTJ6TTk1MS4yOTYgNzk1LjEzNnYtNjIxLjU2OHEwLTM3Ljg4OC0yNy42NDgtNjQuNTEydC02NC41MTItMjYuNjI0aC03NjhxLTM2Ljg2NCAwLTY0LjUxMiAyNi42MjR0LTI2LjYyNCA2NC41MTJ2NjIxLjU2OHEwIDM3Ljg4OCAyNi42MjQgNjQuNTEydDY0LjUxMiAyNy42NDhoNzY4cTM3Ljg4OCAwIDY0LjUxMi0yNy42NDh0MjcuNjQ4LTY0LjUxMnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODEzOyIgZ2x5cGgtbmFtZT0iZXJhc2VyIiBob3Jpei1hZHYteD0iMTA5NyIgZD0iTTUxMiAxNTUuMTM2bDE5Mi41MTIgMjIwLjE2aC00MzkuMjk2bC0xOTIuNTEyLTIyMC4xNmg0MzkuMjk2ek0xMDkwLjU2IDc3MC41NnE5LjIxNi0xOS40NTYgNi4xNDQtNDAuOTZ0LTE3LjQwOC0zNi44NjRsLTUxMi01ODUuNzI4cS0yMi41MjgtMjQuNTc2LTU1LjI5Ni0yNC41NzZoLTQzOS4yOTZxLTIxLjUwNCAwLTM4LjkxMiAxMS4yNjR0LTI3LjY0OCAzMS43NDRxLTguMTkyIDE5LjQ1Ni01LjEyIDQwLjk2dDE3LjQwOCAzNi44NjRsNTEyIDU4NS43MjhxMjEuNTA0IDI0LjU3NiA1NC4yNzIgMjQuNTc2aDQzOS4yOTZxMjEuNTA0IDAgMzkuOTM2LTExLjI2NHQyNi42MjQtMzEuNzQ0eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4MTQ7IiBnbHlwaC1uYW1lPSJ0ZXh0LWhlaWdodCIgZD0iTTk5Ni4zNTIgMTU1LjEzNnExOS40NTYgMCAyNC41NzYtMTAuMjR0LTYuMTQ0LTI1LjZsLTcyLjcwNC05Mi4xNnEtMTEuMjY0LTE1LjM2LTI3LjY0OC0xNS4zNnQtMjcuNjQ4IDE1LjM2bC03Mi43MDQgOTIuMTZxLTExLjI2NCAxNS4zNi02LjE0NCAyNS42dDIzLjU1MiAxMC4yNGg0Ni4wODB2NTg1LjcyOGgtNDYuMDgwcS0xOC40MzIgMC0yMy41NTIgMTAuMjR0Ni4xNDQgMjUuNmw3Mi43MDQgOTIuMTZxMTEuMjY0IDE1LjM2IDI3LjY0OCAxNS4zNnQyNy42NDgtMTUuMzZsNzIuNzA0LTkyLjE2cTExLjI2NC0xNS4zNiA2LjE0NC0yNS42dC0yNC41NzYtMTAuMjRoLTQ1LjA1NnYtNTg1LjcyOGg0NS4wNTZ6TTQ2LjA4MCA4ODYuMjcybDMwLjcyLTE1LjM2cTcuMTY4LTMuMDcyIDEyMC44MzItMy4wNzIgMjUuNiAwIDc1Ljc3NiAxLjAyNHQ3NC43NTIgMS4wMjRxMjEuNTA0IDAgNjEuNDQgMHQ2MS40NCAwaDE2Ny45MzZxMy4wNzIgMCAxMi4yODggMHQxMS4yNjQgMCA5LjIxNiAxLjAyNCAxMC4yNCA1LjEyIDguMTkyIDEwLjI0bDI0LjU3NiAxLjAyNHEyLjA0OCAwIDcuMTY4LTEuMDI0dDguMTkyIDBxMS4wMjQtNjMuNDg4IDEuMDI0LTE5MS40ODggMC00Ni4wODAtMi4wNDgtNjIuNDY0LTIyLjUyOC04LjE5Mi0zOC45MTItMTAuMjQtMTQuMzM2IDI0LjU3Ni0zMS43NDQgNzIuNzA0LTEuMDI0IDUuMTItNi4xNDQgMjcuNjQ4dC04LjE5MiA0MS45ODQtNC4wOTYgMjAuNDhxLTMuMDcyIDQuMDk2LTcuMTY4IDcuMTY4dC04LjE5MiAzLjA3Mi04LjE5MiAxLjAyNC0xMC4yNCAxLjAyNC05LjIxNi0xLjAyNHEtOS4yMTYgMC0zNy44ODggMS4wMjR0LTQzLjAwOCAwLTM1Ljg0LTEuMDI0LTQwLjk2LTQuMDk2cS01LjEyLTQ2LjA4MC00LjA5Ni03Ni44IDAtNTQuMjcyIDEuMDI0LTIyMi4yMDh0MS4wMjQtMjYwLjA5NnEwLTkuMjE2LTEuMDI0LTQwLjk2dDAtNTIuMjI0IDcuMTY4LTM4LjkxMnEyMi41MjgtMTIuMjg4IDcwLjY1Ni0yNC41NzZ0NjguNjA4LTIxLjUwNHEyLjA0OC0yMi41MjggMi4wNDgtMjguNjcyIDAtOC4xOTItMS4wMjQtMTYuMzg0bC0xOS40NTYtMS4wMjRxLTQ0LjAzMi0xLjAyNC0xMjQuOTI4IDUuMTJ0LTExNy43NiA1LjEycS0yOC42NzIgMC04Ny4wNDAtNS4xMnQtODYuMDE2LTUuMTJxLTIuMDQ4IDI5LjY5Ni0yLjA0OCAyOS42OTZ2NS4xMnE5LjIxNiAxNS4zNiAzNC44MTYgMjQuNTc2dDU2LjMyIDE3LjQwOCA0NS4wNTYgMTUuMzZxMTAuMjQgMjMuNTUyIDEwLjI0IDIxOC4xMTIgMCA1OC4zNjgtMS4wMjQgMTczLjA1NnQtMi4wNDggMTc0LjA4MHY2Ni41NnEwIDEuMDI0IDAgOC4xOTJ0MS4wMjQgMTQuMzM2LTEuMDI0IDE1LjM2LTIuMDQ4IDEzLjMxMi0zLjA3MiA4LjE5MnEtNi4xNDQgNy4xNjgtOTIuMTYgNy4xNjgtMTguNDMyIDAtNTMuMjQ4LTcuMTY4dC00NS4wNTYtMTUuMzZxLTExLjI2NC03LjE2OC0xOS40NTYtNDAuOTZ0LTE4LjQzMi02My40ODgtMjQuNTc2LTMwLjcycS0yMy41NTIgMTUuMzYtMzEuNzQ0IDI1LjZ2MjE4LjExMnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODE1OyIgZ2x5cGgtbmFtZT0iYnJ1c2giIGQ9Ik05MjIuNjI0IDk2MHEzOS45MzYgMCA3MC42NTYtMjYuNjI0dDI5LjY5Ni02Ni41NnEwLTM1Ljg0LTI1LjYtODYuMDE2LTE4OS40NC0zNTkuNDI0LTI2Ni4yNC00MzAuMDgwLTU1LjI5Ni01Mi4yMjQtMTIzLjkwNC01Mi4yMjQtNzIuNzA0IDAtMTIzLjkwNCA1My4yNDh0LTUyLjIyNCAxMjQuOTI4cTAgNzMuNzI4IDUzLjI0OCAxMjEuODU2bDM2NC41NDQgMzMwLjc1MnEzMy43OTIgMzAuNzIgNzMuNzI4IDMwLjcyek00MDMuNDU2IDM2OS4xNTJxMjIuNTI4LTQzLjAwOCA2MC40MTYtNzQuNzUydDg2LjAxNi00My4wMDhsMS4wMjQtNDAuOTZxMi4wNDgtMTIxLjg1Ni03My43MjgtMTk3LjYzMnQtMTk5LjY4LTc2LjhxLTY5LjYzMiAwLTEyMy45MDQgMjYuNjI0dC04OC4wNjQgNzIuNzA0LTQ5LjE1MiAxMDQuNDQ4LTE2LjM4NCAxMjUuOTUycTQuMDk2LTMuMDcyIDIzLjU1Mi0xNy40MDh0MzUuODQtMjUuNiAzMi43NjgtMjAuNDggMjYuNjI0LTkuMjE2cTIzLjU1MiAwIDMxLjc0NCAyMC40OCAxNC4zMzYgMzcuODg4IDMyLjc2OCA2NC41MTJ0MzkuOTM2IDQzLjAwOCA1MC4xNzYgMjcuNjQ4IDU4LjM2OCAxNC4zMzYgNzEuNjggNi4xNDR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTgxNjsiIGdseXBoLW5hbWU9InBlbmNpbCIgaG9yaXotYWR2LXg9Ijg3OCIgZD0iTTIwNy44NzIgODIuNDMybDUxLjIgNTIuMjI0LTEzNC4xNDQgMTM0LjE0NC01Mi4yMjQtNTIuMjI0di02MS40NGg3My43Mjh2LTcyLjcwNGg2MS40NHpNNTA1Ljg1NiA2MTIuODY0cTAgMTIuMjg4LTEyLjI4OCAxMi4yODgtNS4xMiAwLTkuMjE2LTQuMDk2bC0zMTAuMjcyLTMwOS4yNDhxLTQuMDk2LTQuMDk2LTQuMDk2LTEwLjI0IDAtMTIuMjg4IDEzLjMxMi0xMi4yODggNS4xMiAwIDkuMjE2IDQuMDk2bDMxMC4yNzIgMzA5LjI0OHEzLjA3MiA0LjA5NiAzLjA3MiAxMC4yNHpNNDc1LjEzNiA3MjIuNDMybDIzNy41NjgtMjM3LjU2OC00NzUuMTM2LTQ3Ni4xNmgtMjM3LjU2OHYyMzguNTkyek04NjUuMjggNjY3LjEzNnEwLTI5LjY5Ni0yMC40OC01MS4ybC05NS4yMzItOTUuMjMyLTIzNy41NjggMjM4LjU5MiA5NS4yMzIgOTQuMjA4cTIwLjQ4IDIxLjUwNCA1MS4yIDIxLjUwNCAyOS42OTYgMCA1Mi4yMjQtMjEuNTA0bDEzNC4xNDQtMTM0LjE0NHEyMC40OC0yMi41MjggMjAuNDgtNTIuMjI0eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU4MTc7IiBnbHlwaC1uYW1lPSJtaW51cyIgaG9yaXotYWR2LXg9IjgwNCIgZD0iTTgwNC44NjQgNTM5LjEzNnYtMTA5LjU2OHEwLTIyLjUyOC0xNi4zODQtMzguOTEydC0zOC45MTItMTUuMzZoLTY5NC4yNzJxLTIzLjU1MiAwLTM4LjkxMiAxNS4zNnQtMTYuMzg0IDM4LjkxMnYxMDkuNTY4cTAgMjMuNTUyIDE2LjM4NCAzOC45MTJ0MzguOTEyIDE2LjM4NGg2OTQuMjcycTIyLjUyOCAwIDM4LjkxMi0xNi4zODR0MTYuMzg0LTM4LjkxMnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODE4OyIgZ2x5cGgtbmFtZT0icGljdHVyZSIgaG9yaXotYWR2LXg9IjEwOTciIGQ9Ik0zNjUuNTY4IDYzMS4yOTZxMC00Ni4wODAtMzEuNzQ0LTc3LjgyNHQtNzcuODI0LTMyLjc2OC03Ny44MjQgMzIuNzY4LTMxLjc0NCA3Ny44MjQgMzEuNzQ0IDc2LjggNzcuODI0IDMyLjc2OCA3Ny44MjQtMzIuNzY4IDMxLjc0NC03Ni44ek05NTEuMjk2IDQxMS4xMzZ2LTI1NmgtODA0Ljg2NHYxMDkuNTY4bDE4Mi4yNzIgMTgzLjI5NiA5Mi4xNi05MS4xMzYgMjkxLjg0IDI5MS44NHpNMTAwNS41NjggODEzLjU2OGgtOTE0LjQzMnEtNy4xNjggMC0xMi4yODgtNS4xMnQtNi4xNDQtMTMuMzEydi02OTQuMjcycTAtOC4xOTIgNi4xNDQtMTMuMzEydDEyLjI4OC01LjEyaDkxNC40MzJxNy4xNjggMCAxMy4zMTIgNS4xMnQ1LjEyIDEzLjMxMnY2OTQuMjcycTAgNy4xNjgtNS4xMiAxMy4zMTJ0LTEzLjMxMiA1LjEyek0xMDk2LjcwNCA3OTUuMTM2di02OTQuMjcycTAtMzcuODg4LTI2LjYyNC02NC41MTJ0LTY0LjUxMi0yNy42NDhoLTkxNC40MzJxLTM2Ljg2NCAwLTY0LjUxMiAyNy42NDh0LTI2LjYyNCA2NC41MTJ2Njk0LjI3MnEwIDM3Ljg4OCAyNi42MjQgNjQuNTEydDY0LjUxMiAyNy42NDhoOTE0LjQzMnEzNy44ODggMCA2NC41MTItMjcuNjQ4dDI2LjYyNC02NC41MTJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTgxOTsiIGdseXBoLW5hbWU9ImZpbGUtaW1hZ2UiIGhvcml6LWFkdi14PSI4NzgiIGQ9Ik04MzguNjU2IDc0Mi45MTJxMTYuMzg0LTE2LjM4NCAyNy42NDgtNDMuMDA4dDExLjI2NC01MS4ydi02NTcuNDA4cTAtMjMuNTUyLTE1LjM2LTM4LjkxMnQtMzguOTEyLTE2LjM4NGgtNzY4cS0yMy41NTIgMC0zOC45MTIgMTYuMzg0dC0xNi4zODQgMzguOTEydjkxMy40MDhxMCAyMy41NTIgMTYuMzg0IDM4LjkxMnQzOC45MTIgMTYuMzg0aDUxMnEyMi41MjggMCA1MC4xNzYtMTEuMjY0dDQzLjAwOC0yNy42NDh6TTU4NC43MDQgODgyLjE3NnYtMjE1LjA0MGgyMTUuMDQwcS01LjEyIDE2LjM4NC0xMi4yODggMjMuNTUybC0xNzkuMiAxNzkuMnEtNi4xNDQgNy4xNjgtMjMuNTUyIDEyLjI4OHpNODA0Ljg2NCA4LjcwNHY1ODUuNzI4aC0yMzcuNTY4cS0yMy41NTIgMC0zOC45MTIgMTUuMzZ0LTE2LjM4NCAzOC45MTJ2MjM4LjU5MmgtNDM5LjI5NnYtODc4LjU5Mmg3MzIuMTZ6TTczMS4xMzYgMjY0LjcwNHYtMTgyLjI3MmgtNTg0LjcwNHYxMDkuNTY4bDEwOS41NjggMTA5LjU2OCA3Mi43MDQtNzIuNzA0IDIyMC4xNiAyMTkuMTM2ek0yNTYgMzc1LjI5NnEtNDYuMDgwIDAtNzcuODI0IDMxLjc0NHQtMzEuNzQ0IDc3LjgyNCAzMS43NDQgNzcuODI0IDc3LjgyNCAzMS43NDQgNzcuODI0LTMxLjc0NCAzMS43NDQtNzcuODI0LTMxLjc0NC03Ny44MjQtNzcuODI0LTMxLjc0NHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlODFhOyIgZ2x5cGgtbmFtZT0iY3ciIGhvcml6LWFkdi14PSI4NzgiIGQ9Ik04NzcuNTY4IDgxMy41Njh2LTI1NnEwLTE0LjMzNi0xMC4yNC0yNS42dC0yNi42MjQtMTEuMjY0aC0yNTZxLTIzLjU1MiAwLTMyLjc2OCAyMy41NTItMTAuMjQgMjIuNTI4IDcuMTY4IDM4LjkxMmw3OC44NDggNzguODQ4cS04My45NjggNzguODQ4LTE5OC42NTYgNzguODQ4LTU5LjM5MiAwLTExMy42NjQtMjMuNTUydC05My4xODQtNjIuNDY0LTYzLjQ4OC05My4xODQtMjIuNTI4LTExMy42NjQgMjIuNTI4LTExMy42NjQgNjMuNDg4LTkzLjE4NCA5My4xODQtNjIuNDY0IDExMy42NjQtMjMuNTUycTY3LjU4NCAwIDEyOCAyOS42OTZ0MTAyLjQgODMuOTY4cTQuMDk2IDYuMTQ0IDEzLjMxMiA3LjE2OCA4LjE5MiAwIDE0LjMzNi01LjEybDc3LjgyNC03OC44NDhxNS4xMi00LjA5NiA2LjE0NC0xMS4yNjR0LTUuMTItMTMuMzEycS02MS40NC03NS43NzYtMTUwLjUyOC0xMTYuNzM2dC0xODYuMzY4LTQxLjk4NHEtODkuMDg4IDAtMTcxLjAwOCAzNC44MTZ0LTEzOS4yNjQgOTQuMjA4LTk0LjIwOCAxNDAuMjg4LTM0LjgxNiAxNjkuOTg0IDM0LjgxNiAxNjkuOTg0IDk0LjIwOCAxNDAuMjg4IDEzOS4yNjQgOTQuMjA4IDE3MS4wMDggMzQuODE2cTgzLjk2OCAwIDE2MS43OTItMzEuNzQ0dDE0MC4yODgtOTAuMTEybDczLjcyOCA3My43MjhxMTYuMzg0IDE4LjQzMiAzOS45MzYgOC4xOTIgMjIuNTI4LTkuMjE2IDIyLjUyOC0zMy43OTJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTgxYjsiIGdseXBoLW5hbWU9ImNjdyIgaG9yaXotYWR2LXg9Ijg3OCIgZD0iTTg3Ny41NjggNDQ4cTAtODkuMDg4LTM0LjgxNi0xNjkuOTg0dC05My4xODQtMTQwLjI4OC0xNDAuMjg4LTk0LjIwOC0xNjkuOTg0LTM0LjgxNnEtOTguMzA0IDAtMTg3LjM5MiA0MS45ODR0LTE1MC41MjggMTE2LjczNnEtNC4wOTYgNi4xNDQtNC4wOTYgMTMuMzEydDUuMTIgMTEuMjY0bDc3LjgyNCA3OC44NDhxNi4xNDQgNS4xMiAxNC4zMzYgNS4xMiA5LjIxNi0xLjAyNCAxMy4zMTItNy4xNjggNDEuOTg0LTU0LjI3MiAxMDIuNC04My45Njh0MTI5LjAyNC0yOS42OTZxNTkuMzkyIDAgMTEyLjY0IDIzLjU1MnQ5NC4yMDggNjIuNDY0IDYyLjQ2NCA5My4xODQgMjIuNTI4IDExMy42NjQtMjIuNTI4IDExMy42NjQtNjIuNDY0IDkzLjE4NC05NC4yMDggNjIuNDY0LTExMi42NCAyMy41NTJxLTU2LjMyIDAtMTA3LjUyLTIwLjQ4dC05Mi4xNi01OC4zNjhsNzguODQ4LTc4Ljg0OHExNy40MDgtMTYuMzg0IDguMTkyLTM4LjkxMi0xMC4yNC0yMy41NTItMzMuNzkyLTIzLjU1MmgtMjU2cS0xNS4zNiAwLTI1LjYgMTEuMjY0dC0xMS4yNjQgMjUuNnYyNTZxMCAyNC41NzYgMjIuNTI4IDMzLjc5MiAyMi41MjggMTAuMjQgMzkuOTM2LTguMTkybDczLjcyOC03My43MjhxNjEuNDQgNTguMzY4IDE0MC4yODggOTAuMTEydDE2Mi44MTYgMzEuNzQ0cTg5LjA4OCAwIDE2OS45ODQtMzQuODE2dDE0MC4yODgtOTQuMjA4IDkzLjE4NC0xNDAuMjg4IDM0LjgxNi0xNjkuOTg0eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDA7IiBnbHlwaC1uYW1lPSJvbWVnYSIgZD0iTTcwNCA2NGgyNTZsNjQgMTI4di0yNTZoLTM4NHYyMTQuMjE0YzEzMS4xMTIgNTYuNDg0IDIyNCAxOTcuMTYyIDIyNCAzNjEuNzg2IDAgMjE0LjQzMi0xNTcuNTk4IDM4Mi4yNjYtMzUyIDM4Mi4yNjYtMTk0LjQwNiAwLTM1Mi0xNjcuODMyLTM1Mi0zODIuMjY2IDAtMTY0LjYyNCA5Mi44ODYtMzA1LjMwMiAyMjQtMzYxLjc4NnYtMjE0LjIxNGgtMzg0djI1Nmw2NC0xMjhoMjU2djMyLjU5Yy0xODcuNjMgNjYuNDYtMzIwIDIyNy40MDItMzIwIDQxNS40MSAwIDI0Ny40MjQgMjI5LjIzIDQ0OCA1MTIgNDQ4czUxMi0yMDAuNTc2IDUxMi00NDhjMC0xODguMDA4LTEzMi4zNy0zNDguOTUtMzIwLTQxNS40MXYtMzIuNTl6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMTsiIGdseXBoLW5hbWU9ImNhbmNlbC1jaXJjbGUiIGQ9Ik01MTIgOTYwYy0yODIuNzcgMC01MTItMjI5LjIzLTUxMi01MTJzMjI5LjIzLTUxMiA1MTItNTEyIDUxMiAyMjkuMjMgNTEyIDUxMi0yMjkuMjMgNTEyLTUxMiA1MTJ6TTUxMiAzMmMtMjI5Ljc1IDAtNDE2IDE4Ni4yNS00MTYgNDE2czE4Ni4yNSA0MTYgNDE2IDQxNiA0MTYtMTg2LjI1IDQxNi00MTYtMTg2LjI1LTQxNi00MTYtNDE2ek02NzIgNzA0bC0xNjAtMTYwLTE2MCAxNjAtOTYtOTYgMTYwLTE2MC0xNjAtMTYwIDk2LTk2IDE2MCAxNjAgMTYwLTE2MCA5NiA5Ni0xNjAgMTYwIDE2MCAxNjB6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwNDsiIGdseXBoLW5hbWU9Im5ld3NwYXBlciIgZD0iTTg5NiA3MDR2MTI4aC04OTZ2LTcwNGMwLTM1LjM0NiAyOC42NTQtNjQgNjQtNjRoODY0YzUzLjAyMiAwIDk2IDQyLjk3OCA5NiA5NnY1NDRoLTEyOHpNODMyIDEyOGgtNzY4djY0MGg3Njh2LTY0MHpNMTI4IDY0MGg2NDB2LTY0aC02NDB6TTUxMiA1MTJoMjU2di02NGgtMjU2ek01MTIgMzg0aDI1NnYtNjRoLTI1NnpNNTEyIDI1NmgxOTJ2LTY0aC0xOTJ6TTEyOCA1MTJoMzIwdi0zMjBoLTMyMHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTBmOyIgZ2x5cGgtbmFtZT0iY2FtZXJhIiBkPSJNMzA0IDM1MmMwLTExNC44NzYgOTMuMTI0LTIwOCAyMDgtMjA4czIwOCA5My4xMjQgMjA4IDIwOC05My4xMjQgMjA4LTIwOCAyMDgtMjA4LTkzLjEyNC0yMDgtMjA4ek05NjAgNzA0aC0yMjRjLTE2IDY0LTMyIDEyOC05NiAxMjhoLTI1NmMtNjQgMC04MC02NC05Ni0xMjhoLTIyNGMtMzUuMiAwLTY0LTI4LjgtNjQtNjR2LTU3NmMwLTM1LjIgMjguOC02NCA2NC02NGg4OTZjMzUuMiAwIDY0IDI4LjggNjQgNjR2NTc2YzAgMzUuMi0yOC44IDY0LTY0IDY0ek01MTIgNjhjLTE1Ni44NSAwLTI4NCAxMjcuMTQ4LTI4NCAyODQgMCAxNTYuODUgMTI3LjE1IDI4NCAyODQgMjg0IDE1Ni44NTIgMCAyODQtMTI3LjE1IDI4NC0yODQgMC0xNTYuODUyLTEyNy4xNDYtMjg0LTI4NC0yODR6TTk2MCA1MTJoLTEyOHY2NGgxMjh2LTY0eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MTE7IiBnbHlwaC1uYW1lPSJtdXNpYyIgZD0iTTk2MCA5NjBoNjR2LTczNmMwLTg4LjM2Ni0xMDAuMjktMTYwLTIyNC0xNjBzLTIyNCA3MS42MzQtMjI0IDE2MGMwIDg4LjM2OCAxMDAuMjkgMTYwIDIyNCAxNjAgNjIuNjg0IDAgMTE5LjM0Mi0xOC40IDE2MC00OC4wNDB2MzY4LjA0MGwtNTEyLTExMy43Nzh2LTQ5NC4yMjJjMC04OC4zNjYtMTAwLjI4OC0xNjAtMjI0LTE2MHMtMjI0IDcxLjYzNC0yMjQgMTYwYzAgODguMzY4IDEwMC4yODggMTYwIDIyNCAxNjAgNjIuNjg0IDAgMTE5LjM0Mi0xOC40IDE2MC00OC4wNDB2NjI0LjA0MGw1NzYgMTI4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MTI7IiBnbHlwaC1uYW1lPSJwbGF5IiBkPSJNOTgxLjE4OCA3OTkuODkyYy0xNDMuNjMyIDIwLjY1LTMwMi4zMzIgMzIuMTA4LTQ2OS4xODYgMzIuMTA4LTE2Ni44NiAwLTMyNS41NTYtMTEuNDU4LTQ2OS4xOTQtMzIuMTA4LTI3LjUzLTEwNy43MjYtNDIuODA4LTIyNi43NS00Mi44MDgtMzUxLjg5MiAwLTEyNS4xNCAxNS4yNzgtMjQ0LjE2NiA0Mi44MDgtMzUxLjg5IDE0My42MzgtMjAuNjUyIDMwMi4zMzYtMzIuMTEgNDY5LjE5NC0zMi4xMSAxNjYuODU0IDAgMzI1LjU1MiAxMS40NTggNDY5LjE4NiAzMi4xMSAyNy41MzIgMTA3LjcyNCA0Mi44MTIgMjI2Ljc1IDQyLjgxMiAzNTEuODkgMCAxMjUuMTQyLTE1LjI4IDI0NC4xNjYtNDIuODEyIDM1MS44OTJ6TTM4NC4wMDIgMjU2djM4NGwzMjAtMTkyLTMyMC0xOTJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkxNDsiIGdseXBoLW5hbWU9InZpZGVvLWNhbWVyYSIgZD0iTTM4NCA2NzJjMCA4OC4zNjYgNzEuNjM0IDE2MCAxNjAgMTYwczE2MC03MS42MzQgMTYwLTE2MGMwLTg4LjM2Ni03MS42MzQtMTYwLTE2MC0xNjBzLTE2MCA3MS42MzQtMTYwIDE2MHpNMCA2NzJjMCA4OC4zNjYgNzEuNjM0IDE2MCAxNjAgMTYwczE2MC03MS42MzQgMTYwLTE2MGMwLTg4LjM2Ni03MS42MzQtMTYwLTE2MC0xNjBzLTE2MCA3MS42MzQtMTYwIDE2MHpNNzY4IDM1MnY5NmMwIDM1LjItMjguOCA2NC02NCA2NGgtNjQwYy0zNS4yIDAtNjQtMjguOC02NC02NHYtMzIwYzAtMzUuMiAyOC44LTY0IDY0LTY0aDY0MGMzNS4yIDAgNjQgMjguOCA2NCA2NHY5NmwyNTYtMTYwdjQ0OGwtMjU2LTE2MHpNNjQwIDE5MmgtNTEydjE5Mmg1MTJ2LTE5MnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTJiOyIgZ2x5cGgtbmFtZT0iZmlsZS16aXAiIGQ9Ik05MTcuODA2IDczMC45MjRjLTIyLjIwOCAzMC4yOTItNTMuMTc0IDY1LjctODcuMTc4IDk5LjcwNHMtNjkuNDEyIDY0Ljk2NC05OS43MDQgODcuMTc4Yy01MS41NzQgMzcuODItNzYuNTkyIDQyLjE5NC05MC45MjQgNDIuMTk0aC00OTZjLTQ0LjExMiAwLTgwLTM1Ljg4OC04MC04MHYtODY0YzAtNDQuMTEyIDM1Ljg4NC04MCA4MC04MGg3MzZjNDQuMTEyIDAgODAgMzUuODg4IDgwIDgwdjYyNGMwIDE0LjMzMi00LjM3MiAzOS4zNS00Mi4xOTQgOTAuOTI0djAgMHpNNzg1LjM3NCA3ODUuMzc0YzMwLjctMzAuNyA1NC44LTU4LjM5OCA3Mi41OC04MS4zNzRoLTE1My45NTR2MTUzLjk0NmMyMi45OC0xNy43OCA1MC42NzgtNDEuODc4IDgxLjM3NC03Mi41NzJ2MCAwek04OTYgMTZjMC04LjY3Mi03LjMyOC0xNi0xNi0xNmgtNzM2Yy04LjY3MiAwLTE2IDcuMzI4LTE2IDE2djg2NGMwIDguNjcyIDcuMzI4IDE2IDE2IDE2IDAgMCA0OTUuOTU2IDAuMDAyIDQ5NiAwdi0yMjRjMC0xNy42NzIgMTQuMzIyLTMyIDMyLTMyaDIyNHYtNjI0ek0yNTYgODk2aDEyOHYtNjRoLTEyOHY2NHpNMzg0IDgzMmgxMjh2LTY0aC0xMjh2NjR6TTI1NiA3NjhoMTI4di02NGgtMTI4djY0ek0zODQgNzA0aDEyOHYtNjRoLTEyOHY2NHpNMjU2IDY0MGgxMjh2LTY0aC0xMjh2NjR6TTM4NCA1NzZoMTI4di02NGgtMTI4djY0ek0yNTYgNTEyaDEyOHYtNjRoLTEyOHY2NHpNMzg0IDQ0OGgxMjh2LTY0aC0xMjh2NjR6TTI1NiAxMTJjMC0yNi40IDIxLjYtNDggNDgtNDhoMTYwYzI2LjQgMCA0OCAyMS42IDQ4IDQ4djE2MGMwIDI2LjQtMjEuNiA0OC00OCA0OGgtODB2NjRoLTEyOHYtMjcyek00NDggMTkydi02NGgtMTI4djY0aDEyOHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTJlOyIgZ2x5cGgtbmFtZT0ic3RhY2siIGQ9Ik0xMDI0IDY0MGwtNTEyIDI1Ni01MTItMjU2IDUxMi0yNTYgNTEyIDI1NnpNNTEyIDgxMS4wMzBsMzQyLjA1OC0xNzEuMDMwLTM0Mi4wNTgtMTcxLjAzMC0zNDIuMDU4IDE3MS4wMzAgMzQyLjA1OCAxNzEuMDMwek05MjEuNDQ0IDQ5OS4yNzhsMTAyLjU1Ni01MS4yNzgtNTEyLTI1Ni01MTIgMjU2IDEwMi41NTYgNTEuMjc4IDQwOS40NDQtMjA0LjcyMnpNOTIxLjQ0NCAzMDcuMjc4bDEwMi41NTYtNTEuMjc4LTUxMi0yNTYtNTEyIDI1NiAxMDIuNTU2IDUxLjI3OCA0MDkuNDQ0LTIwNC43MjJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkzZjsiIGdseXBoLW5hbWU9ImNyZWRpdC1jYXJkIiBkPSJNOTI4IDgzMmgtODMyYy01Mi44IDAtOTYtNDMuMi05Ni05NnYtNTc2YzAtNTIuOCA0My4yLTk2IDk2LTk2aDgzMmM1Mi44IDAgOTYgNDMuMiA5NiA5NnY1NzZjMCA1Mi44LTQzLjIgOTYtOTYgOTZ6TTk2IDc2OGg4MzJjMTcuMzQ2IDAgMzItMTQuNjU0IDMyLTMydi05NmgtODk2djk2YzAgMTcuMzQ2IDE0LjY1NCAzMiAzMiAzMnpNOTI4IDEyOGgtODMyYy0xNy4zNDYgMC0zMiAxNC42NTQtMzIgMzJ2Mjg4aDg5NnYtMjg4YzAtMTcuMzQ2LTE0LjY1NC0zMi0zMi0zMnpNMTI4IDMyMGg2NHYtMTI4aC02NHpNMjU2IDMyMGg2NHYtMTI4aC02NHpNMzg0IDMyMGg2NHYtMTI4aC02NHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTQ0OyIgZ2x5cGgtbmFtZT0iYWRkcmVzcy1ib29rIiBkPSJNMTkyIDk2MHYtMTAyNGg3Njh2MTAyNGgtNzY4ek01NzYgNzAzLjY3YzcwLjUxIDAgMTI3LjY3LTU3LjE2IDEyNy42Ny0xMjcuNjdzLTU3LjE2LTEyNy42Ny0xMjcuNjctMTI3LjY3LTEyNy42NyA1Ny4xNi0xMjcuNjcgMTI3LjY3IDU3LjE2IDEyNy42NyAxMjcuNjcgMTI3LjY3djB6TTc2OCAxOTJoLTM4NHY2NGMwIDcwLjY5NiA1Ny4zMDYgMTI4IDEyOCAxMjh2MGgxMjhjNzAuNjk2IDAgMTI4LTU3LjMwNCAxMjgtMTI4di02NHpNNjQgODk2aDk2di0xOTJoLTk2djE5MnpNNjQgNjQwaDk2di0xOTJoLTk2djE5MnpNNjQgMzg0aDk2di0xOTJoLTk2djE5MnpNNjQgMTI4aDk2di0xOTJoLTk2djE5MnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTQ1OyIgZ2x5cGgtbmFtZT0iZW52ZWxvcCIgZD0iTTkyOCA4MzJoLTgzMmMtNTIuOCAwLTk2LTQzLjItOTYtOTZ2LTY0MGMwLTUyLjggNDMuMi05NiA5Ni05Nmg4MzJjNTIuOCAwIDk2IDQzLjIgOTYgOTZ2NjQwYzAgNTIuOC00My4yIDk2LTk2IDk2ek0zOTguNzQgNDA5LjYyOGwtMjcwLjc0LTIxMC44OTJ2NTAxLjY0MmwyNzAuNzQtMjkwLjc1ek0xNzYuMzggNzA0aDY3MS4yNGwtMzM1LjYyLTI1Mi0zMzUuNjIgMjUyek00MDkuMjg4IDM5OC4zMDJsMTAyLjcxMi0xMTAuMzAyIDEwMi43MSAxMTAuMzAyIDIxMC41NTQtMjcwLjMwMmgtNjI2LjUyOGwyMTAuNTUyIDI3MC4zMDJ6TTYyNS4yNiA0MDkuNjI4bDI3MC43NCAyOTAuNzV2LTUwMS42NDJsLTI3MC43NCAyMTAuODkyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5NDc7IiBnbHlwaC1uYW1lPSJsb2NhdGlvbiIgZD0iTTUxMiA5NjBjLTE3Ni43MzIgMC0zMjAtMTQzLjI2OC0zMjAtMzIwIDAtMzIwIDMyMC03MDQgMzIwLTcwNHMzMjAgMzg0IDMyMCA3MDRjMCAxNzYuNzMyLTE0My4yNyAzMjAtMzIwIDMyMHpNNTEyIDQ0OGMtMTA2LjA0MCAwLTE5MiA4NS45Ni0xOTIgMTkyczg1Ljk2IDE5MiAxOTIgMTkyIDE5Mi04NS45NiAxOTItMTkyLTg1Ljk2LTE5Mi0xOTItMTkyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5NWM7IiBnbHlwaC1uYW1lPSJkcmF3ZXIiIGQ9Ik0xMDE2Ljk4OCAzMDcuOTlsLTI1NiAzMjBjLTYuMDc0IDcuNTkyLTE1LjI2NiAxMi4wMTAtMjQuOTg4IDEyLjAxMGgtNDQ4Yy05LjcyIDAtMTguOTE2LTQuNDE4LTI0Ljk4OC0xMi4wMTBsLTI1Ni0zMjBjLTQuNTM4LTUuNjc0LTcuMDEyLTEyLjcyNC03LjAxMi0xOS45OXYtMjg4YzAtMzUuMzQ2IDI4LjY1NC02NCA2NC02NGg4OTZjMzUuMzQ4IDAgNjQgMjguNjU0IDY0IDY0djI4OGMwIDcuMjY2LTIuNDcyIDE0LjMxNi03LjAxMiAxOS45OXpNOTYwIDI1NmgtMjI0bC0xMjgtMTI4aC0xOTJsLTEyOCAxMjhoLTIyNHYyMC43NzZsMjM5LjM4IDI5OS4yMjRoNDE3LjI0bDIzOS4zOC0yOTkuMjI0di0yMC43NzZ6TTczNiA0NDhoLTQ0OGMtMTcuNjcyIDAtMzIgMTQuMzI4LTMyIDMyczE0LjMyOCAzMiAzMiAzMmg0NDhjMTcuNjc0IDAgMzItMTQuMzI4IDMyLTMycy0xNC4zMjYtMzItMzItMzJ6TTgwMCAzMjBoLTU3NmMtMTcuNjcyIDAtMzIgMTQuMzI2LTMyIDMyczE0LjMyOCAzMiAzMiAzMmg1NzZjMTcuNjc0IDAgMzItMTQuMzI2IDMyLTMycy0xNC4zMjYtMzItMzItMzJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTk2MDsiIGdseXBoLW5hbWU9ImRvd25sb2FkIiBkPSJNNTEyIDM4NGwyNTYgMjU2aC0xOTJ2MjU2aC0xMjh2LTI1NmgtMTkyek03NDQuNzI2IDQ4OC43MjhsLTcxLjc0LTcxLjc0MiAyNjAuMDgwLTk2Ljk4Ni00MjEuMDY2LTE1Ny4wMTgtNDIxLjA2NiAxNTcuMDE4IDI2MC4wODAgOTYuOTg2LTcxLjc0MiA3MS43NDItMjc5LjI3Mi0xMDQuNzI4di0yNTZsNTEyLTE5MiA1MTIgMTkydjI1NnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTYxOyIgZ2x5cGgtbmFtZT0idXBsb2FkIiBkPSJNNDQ4IDM4NGgxMjh2MjU2aDE5MmwtMjU2IDI1Ni0yNTYtMjU2aDE5MnpNNjQwIDUyOHYtOTguNzEybDI5My4wNjYtMTA5LjI4OC00MjEuMDY2LTE1Ny4wMTgtNDIxLjA2NiAxNTcuMDE4IDI5My4wNjYgMTA5LjI4OHY5OC43MTJsLTM4NC0xNDR2LTI1Nmw1MTItMTkyIDUxMiAxOTJ2MjU2eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5Nzc7IiBnbHlwaC1uYW1lPSJxdW90ZXMtbGVmdCIgZD0iTTIyNSA1MTJjMTIzLjcxMiAwIDIyNC0xMDAuMjkgMjI0LTIyNCAwLTEyMy43MTItMTAwLjI4OC0yMjQtMjI0LTIyNHMtMjI0IDEwMC4yODgtMjI0IDIyNGwtMSAzMmMwIDI0Ny40MjQgMjAwLjU3NiA0NDggNDQ4IDQ0OHYtMTI4Yy04NS40NzQgMC0xNjUuODM0LTMzLjI4Ni0yMjYuMjc0LTkzLjcyNi0xMS42MzQtMTEuNjM2LTIyLjI1Mi0yNC4wMTYtMzEuODMtMzcuMDIwIDExLjQzOCAxLjggMjMuMTYgMi43NDYgMzUuMTA0IDIuNzQ2ek04MDEgNTEyYzEyMy43MSAwIDIyNC0xMDAuMjkgMjI0LTIyNCAwLTEyMy43MTItMTAwLjI5LTIyNC0yMjQtMjI0cy0yMjQgMTAwLjI4OC0yMjQgMjI0bC0xIDMyYzAgMjQ3LjQyNCAyMDAuNTc2IDQ0OCA0NDggNDQ4di0xMjhjLTg1LjQ3NCAwLTE2NS44MzQtMzMuMjg2LTIyNi4yNzQtOTMuNzI2LTExLjYzNi0xMS42MzYtMjIuMjU0LTI0LjAxNi0zMS44MzItMzcuMDIwIDExLjQ0IDEuOCAyMy4xNiAyLjc0NiAzNS4xMDYgMi43NDZ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTk4YjsiIGdseXBoLW5hbWU9ImVubGFyZ2UyIiBkPSJNMTAyNCA5NjB2LTQxNmwtMTYwIDE2MC0xOTItMTkyLTk2IDk2IDE5MiAxOTItMTYwIDE2MHpNNDQ4IDI4OGwtMTkyLTE5MiAxNjAtMTYwaC00MTZ2NDE2bDE2MC0xNjAgMTkyIDE5MnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOThjOyIgZ2x5cGgtbmFtZT0ic2hyaW5rMiIgZD0iTTQ0OCAzODR2LTQxNmwtMTYwIDE2MC0xOTItMTkyLTk2IDk2IDE5MiAxOTItMTYwIDE2MHpNMTAyNCA4NjRsLTE5Mi0xOTIgMTYwLTE2MGgtNDE2djQxNmwxNjAtMTYwIDE5MiAxOTJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTk4ZjsiIGdseXBoLW5hbWU9ImxvY2siIGQ9Ik01OTIgNTEyaC0xNnYxOTJjMCAxMDUuODctODYuMTMgMTkyLTE5MiAxOTJoLTEyOGMtMTA1Ljg3IDAtMTkyLTg2LjEzLTE5Mi0xOTJ2LTE5MmgtMTZjLTI2LjQgMC00OC0yMS42LTQ4LTQ4di00ODBjMC0yNi40IDIxLjYtNDggNDgtNDhoNTQ0YzI2LjQgMCA0OCAyMS42IDQ4IDQ4djQ4MGMwIDI2LjQtMjEuNiA0OC00OCA0OHpNMTkyIDcwNGMwIDM1LjI5IDI4LjcxIDY0IDY0IDY0aDEyOGMzNS4yOSAwIDY0LTI4LjcxIDY0LTY0di0xOTJoLTI1NnYxOTJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTk5MDsiIGdseXBoLW5hbWU9InVubG9ja2VkIiBkPSJNNzY4IDg5NmMxMDUuODcgMCAxOTItODYuMTMgMTkyLTE5MnYtMTkyaC0xMjh2MTkyYzAgMzUuMjktMjguNzEgNjQtNjQgNjRoLTEyOGMtMzUuMjkgMC02NC0yOC43MS02NC02NHYtMTkyaDE2YzI2LjQgMCA0OC0yMS42IDQ4LTQ4di00ODBjMC0yNi40LTIxLjYtNDgtNDgtNDhoLTU0NGMtMjYuNCAwLTQ4IDIxLjYtNDggNDh2NDgwYzAgMjYuNCAyMS42IDQ4IDQ4IDQ4aDQwMHYxOTJjMCAxMDUuODcgODYuMTMgMTkyIDE5MiAxOTJoMTI4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5OTE7IiBnbHlwaC1uYW1lPSJ3cmVuY2giIGQ9Ik0xMDAyLjkzNCAxNDIuMTI0bC00NjAuNTUyIDM5NC43NmMyMS40NDggNDAuMjk4IDMzLjYxOCA4Ni4yODIgMzMuNjE4IDEzNS4xMTYgMCAxNTkuMDU4LTEyOC45NDIgMjg4LTI4OCAyODgtMjkuMDk0IDAtNTcuMTcyLTQuMzMyLTgzLjY0Ni0xMi4zNTRsMTY2LjM5LTE2Ni4zOWMyNC44OS0yNC44OSAyNC44OS02NS42MiAwLTkwLjUxbC0xMDEuNDktMTAxLjQ5Yy0yNC44OS0yNC44OS02NS42Mi0yNC44OS05MC41MSAwbC0xNjYuMzkgMTY2LjM5Yy04LjAyMi0yNi40NzQtMTIuMzU0LTU0LjU1Mi0xMi4zNTQtODMuNjQ2IDAtMTU5LjA1OCAxMjguOTQyLTI4OCAyODgtMjg4IDQ4LjgzNCAwIDk0LjgxOCAxMi4xNyAxMzUuMTE2IDMzLjYybDM5NC43Ni00NjAuNTUyYzIyLjkwOC0yNi43MjQgNjIuMDE2LTI4LjIyNiA4Ni45MDQtMy4zMzhsMTAxLjQ5MiAxMDEuNDkyYzI0Ljg4OCAyNC44ODggMjMuMzg2IDYzLjk5NC0zLjMzOCA4Ni45MDJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTljZTsiIGdseXBoLW5hbWU9ImV5ZSIgZD0iTTUxMiA3NjhjLTIyMy4zMTggMC00MTYuODgyLTEzMC4wNDItNTEyLTMyMCA5NS4xMTgtMTg5Ljk1OCAyODguNjgyLTMyMCA1MTItMzIwIDIyMy4zMTIgMCA0MTYuODc2IDEzMC4wNDIgNTEyIDMyMC05NS4xMTYgMTg5Ljk1OC0yODguNjg4IDMyMC01MTIgMzIwek03NjQuNDUgNTk4LjI5NmM2MC4xNjItMzguMzc0IDExMS4xNDItODkuNzc0IDE0OS40MzQtMTUwLjI5Ni0zOC4yOTItNjAuNTIyLTg5LjI3NC0xMTEuOTIyLTE0OS40MzYtMTUwLjI5Ni03NS41OTQtNDguMjE4LTE2Mi44OS03My43MDQtMjUyLjQ0OC03My43MDQtODkuNTYgMC0xNzYuODU4IDI1LjQ4Ni0yNTIuNDUyIDczLjcwNC02MC4xNTggMzguMzcyLTExMS4xMzggODkuNzcyLTE0OS40MzIgMTUwLjI5NiAzOC4yOTIgNjAuNTI0IDg5LjI3NCAxMTEuOTI0IDE0OS40MzQgMTUwLjI5NiAzLjkxOCAyLjUgNy44NzYgNC45MjIgMTEuODYgNy4zLTkuOTYtMjcuMzI4LTE1LjQxLTU2LjgyMi0xNS40MS04Ny41OTYgMC0xNDEuMzgyIDExNC42MTYtMjU2IDI1Ni0yNTYgMTQxLjM4MiAwIDI1NiAxMTQuNjE4IDI1NiAyNTYgMCAzMC43NzQtNS40NTIgNjAuMjY4LTE1LjQwOCA4Ny41OTggMy45NzgtMi4zNzggNy45MzgtNC44MDIgMTEuODU4LTcuMzAydjB6TTUxMiA1NDRjMC01My4wMjAtNDIuOTgtOTYtOTYtOTZzLTk2IDQyLjk4LTk2IDk2IDQyLjk4IDk2IDk2IDk2IDk2LTQyLjk4MiA5Ni05NnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOWQxOyIgZ2x5cGgtbmFtZT0iZXllLWJsb2NrZWQiIGQ9Ik05NDUuOTQyIDk0NS45NDJjLTE4Ljc0NiAxOC43NDQtNDkuMTM2IDE4Ljc0NC02Ny44ODIgMGwtMjAyLjE2NC0yMDIuMTY0Yy01MS45MzggMTUuNzU0LTEwNi45NDggMjQuMjIyLTE2My44OTYgMjQuMjIyLTIyMy4zMTggMC00MTYuODgyLTEzMC4wNDItNTEyLTMyMCA0MS4xMjItODIuMTI0IDEwMC42NDgtMTUzLjA0MCAxNzMuMDIyLTIwNy4wOTZsLTE1OC45NjItMTU4Ljk2MmMtMTguNzQ2LTE4Ljc0Ni0xOC43NDYtNDkuMTM2IDAtNjcuODgyIDkuMzcyLTkuMzc0IDIxLjY1Ni0xNC4wNjAgMzMuOTQtMTQuMDYwczI0LjU2OCA0LjY4NiAzMy45NDIgMTQuMDU4bDg2NCA4NjRjMTguNzQ0IDE4Ljc0NiAxOC43NDQgNDkuMTM4IDAgNjcuODg0ek00MTYgNjQwYzQyLjI0IDAgNzguMDgyLTI3LjI5NCA5MC45Mi02NS4xOTZsLTEyMS43MjQtMTIxLjcyNGMtMzcuOTAyIDEyLjgzOC02NS4xOTYgNDguNjgtNjUuMTk2IDkwLjkyIDAgNTMuMDIwIDQyLjk4IDk2IDk2IDk2ek0xMTAuMTE2IDQ0OGMzOC4yOTIgNjAuNTI0IDg5LjI3NCAxMTEuOTI0IDE0OS40MzQgMTUwLjI5NiAzLjkxOCAyLjUgNy44NzYgNC45MjIgMTEuODYyIDcuMy05Ljk2Mi0yNy4zMjgtMTUuNDEyLTU2LjgyMi0xNS40MTItODcuNTk2IDAtNTQuODkgMTcuMjg2LTEwNS43MzggNDYuNy0xNDcuNDE4bC02MC45MjQtNjAuOTI0Yy01Mi40NDYgMzYuODQyLTk3LjIwMiA4My44ODItMTMxLjY2IDEzOC4zNDJ6TTc2OCA1MThjMCAyNy4xNjYtNC4yNTYgNTMuMzM0LTEyLjEwMiA3Ny44OThsLTMyMS44MDgtMzIxLjgwOGMyNC41NjgtNy44NDIgNTAuNzQyLTEyLjA5MCA3Ny45MS0xMi4wOTAgMTQxLjM4MiAwIDI1NiAxMTQuNjE4IDI1NiAyNTZ6TTgzMC4wMjYgNjcwLjAyNmwtNjkuMzYyLTY5LjM2MmMxLjI2NC0wLjc4NiAyLjUzLTEuNTY4IDMuNzg2LTIuMzY4IDYwLjE2Mi0zOC4zNzQgMTExLjE0Mi04OS43NzQgMTQ5LjQzNC0xNTAuMjk2LTM4LjI5Mi02MC41MjItODkuMjc0LTExMS45MjItMTQ5LjQzNi0xNTAuMjk2LTc1LjU5NC00OC4yMTgtMTYyLjg5LTczLjcwNC0yNTIuNDQ4LTczLjcwNC0zOC42NjQgMC03Ni45MDIgNC43Ni0xMTMuOTYyIDE0LjA0MGwtNzYuODk0LTc2Ljg5NGM1OS43MTgtMjEuNDYyIDEyMy45NS0zMy4xNDYgMTkwLjg1Ni0zMy4xNDYgMjIzLjMxIDAgNDE2Ljg3NiAxMzAuMDQyIDUxMiAzMjAtNDUuMDIyIDg5LjkxNi0xMTIuMTE4IDE2Ni4zOTYtMTkzLjk3NCAyMjIuMDI2eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5ZGY7IiBnbHlwaC1uYW1lPSJoYXBweSIgZD0iTTUxMi02NGMyODIuNzcgMCA1MTIgMjI5LjIzIDUxMiA1MTJzLTIyOS4yMyA1MTItNTEyIDUxMi01MTItMjI5LjIzLTUxMi01MTIgMjI5LjIzLTUxMiA1MTItNTEyek01MTIgODY0YzIyOS43NSAwIDQxNi0xODYuMjUgNDE2LTQxNnMtMTg2LjI1LTQxNi00MTYtNDE2LTQxNiAxODYuMjUtNDE2IDQxNiAxODYuMjUgNDE2IDQxNiA0MTZ6TTUxMiAzNjEuMjRjMTE1Ljk1IDAgMjI2LjIzIDMwLjgwNiAzMjAgODQuOTItMTQuNTc0LTE3OC40MzgtMTUzLjEyOC0zMTguMTYtMzIwLTMxOC4xNi0xNjYuODY4IDAtMzA1LjQyMiAxMzkuODcyLTMyMCAzMTguMzA0IDkzLjc3LTU0LjExMiAyMDQuMDUwLTg1LjA2NCAzMjAtODUuMDY0ek0yNTYgNjA4YzAgNTMuMDE5IDI4LjY1NCA5NiA2NCA5NnM2NC00Mi45ODEgNjQtOTZjMC01My4wMTktMjguNjU0LTk2LTY0LTk2cy02NCA0Mi45ODEtNjQgOTZ6TTY0MCA2MDhjMCA1My4wMTkgMjguNjU0IDk2IDY0IDk2czY0LTQyLjk4MSA2NC05NmMwLTUzLjAxOS0yOC42NTQtOTYtNjQtOTZzLTY0IDQyLjk4MS02NCA5NnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlYTRlOyIgZ2x5cGgtbmFtZT0iY29tbWFuZCIgZD0iTTczNiA2NGMtODguMjI0IDAtMTYwIDcxLjc3Ni0xNjAgMTYwdjk2aC0xMjh2LTk2YzAtODguMjI0LTcxLjc3Ni0xNjAtMTYwLTE2MHMtMTYwIDcxLjc3Ni0xNjAgMTYwIDcxLjc3NiAxNjAgMTYwIDE2MGg5NnYxMjhoLTk2Yy04OC4yMjQgMC0xNjAgNzEuNzc2LTE2MCAxNjBzNzEuNzc2IDE2MCAxNjAgMTYwIDE2MC03MS43NzYgMTYwLTE2MHYtOTZoMTI4djk2YzAgODguMjI0IDcxLjc3NiAxNjAgMTYwIDE2MHMxNjAtNzEuNzc2IDE2MC0xNjAtNzEuNzc2LTE2MC0xNjAtMTYwaC05NnYtMTI4aDk2Yzg4LjIyNCAwIDE2MC03MS43NzYgMTYwLTE2MHMtNzEuNzc0LTE2MC0xNjAtMTYwek02NDAgMzIwdi05NmMwLTUyLjkzNCA0My4wNjYtOTYgOTYtOTZzOTYgNDMuMDY2IDk2IDk2LTQzLjA2NiA5Ni05NiA5NmgtOTZ6TTI4OCAzMjBjLTUyLjkzNCAwLTk2LTQzLjA2Ni05Ni05NnM0My4wNjYtOTYgOTYtOTYgOTYgNDMuMDY2IDk2IDk2djk2aC05NnpNNDQ4IDM4NGgxMjh2MTI4aC0xMjh2LTEyOHpNNjQwIDU3Nmg5NmM1Mi45MzQgMCA5NiA0My4wNjYgOTYgOTZzLTQzLjA2NiA5Ni05NiA5Ni05Ni00My4wNjYtOTYtOTZ2LTk2ek0yODggNzY4Yy01Mi45MzQgMC05Ni00My4wNjYtOTYtOTZzNDMuMDY2LTk2IDk2LTk2aDk2djk2YzAgNTIuOTM0LTQzLjA2NCA5Ni05NiA5NnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlYTVjOyIgZ2x5cGgtbmFtZT0iZm9udDIiIGQ9Ik03OTkuNTk2IDk0My43OTJjLTkwLjUyNiAwLTE0OC42MiAxNi4yMDgtMjQxLjg0OCAxNi4yMDgtMzAxLjI4NCAwLTQ0MS43OTItMTcxLjU4NC00NDEuNzkyLTM0NS44NzIgMC0xMDIuNjc4IDQ4LjY0LTEzNi40NTggMTQ0LjU2NC0xMzYuNDU4LTYuNzU4IDE0Ljg2NC0xOC45MTQgMzEuMDgwLTE4LjkxNCAxMDQuMDM0IDAgMjA0LjAxMCA3Ny4wMDYgMjYzLjQ1OCAxNzUuNjM2IDI2Ny41MSAwIDAtODAuOTE4LTc5My4zNzQtMzE1Ljc3OC04ODguNTQydi0yNC42NzJoMzE2LjU5NGwxMDguMDI2IDUxMmgxOTcuODQ0bDQ0LjA3MiAxMjhoLTIxNC45MDhsNTEuOTQ0IDI0Ni4xOWM1OS40NDYtMTIuMTU2IDExNy41NDItMjQuMzE2IDE2Ny41MzItMjQuMzE2IDYyLjE0OCAwIDExOC44OTQgMTguOTE0IDE0OS45NjggMTYyLjEyNi0zNy44MjYtMTIuMTYtNzguMzYyLTE2LjIwOC0xMjIuOTQtMTYuMjA4eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGVhNjU7IiBnbHlwaC1uYW1lPSJzdHJpa2V0aHJvdWdoIiBkPSJNMTAyNCA0NDh2LTY0aC0yMzQuNTA2YzI3LjUwNC0zOC41MSA0Mi41MDYtODIuNjkyIDQyLjUwNi0xMjggMC03MC44NzgtMzYuNjYtMTM5LjAyNi0xMDAuNTgtMTg2Ljk2NC01OS4zNTgtNDQuNTE4LTEzNy4yODQtNjkuMDM2LTIxOS40Mi02OS4wMzYtODIuMTM4IDAtMTYwLjA2MiAyNC41MTgtMjE5LjQyIDY5LjAzNi02My45MiA0Ny45MzgtMTAwLjU4IDExNi4wODYtMTAwLjU4IDE4Ni45NjRoMTI4YzAtNjkuMzgyIDg3LjkyNi0xMjggMTkyLTEyOHMxOTIgNTguNjE4IDE5MiAxMjhjMCA2OS4zODItODcuOTI2IDEyOC0xOTIgMTI4aC01MTJ2NjRoMjk5LjUxOGMtMi4zMzggMS42NTQtNC42NTYgMy4zMjQtNi45MzggNS4wMzYtNjMuOTIgNDcuOTQtMTAwLjU4IDExNi4wODYtMTAwLjU4IDE4Ni45NjRzMzYuNjYgMTM5LjAyNCAxMDAuNTggMTg2Ljk2NGM1OS4zNTggNDQuNTE4IDEzNy4yODIgNjkuMDM2IDIxOS40MiA2OS4wMzYgODIuMTM2IDAgMTYwLjA2Mi0yNC41MTggMjE5LjQyLTY5LjAzNiA2My45Mi00Ny45NCAxMDAuNTgtMTE2LjA4NiAxMDAuNTgtMTg2Ljk2NGgtMTI4YzAgNjkuMzgyLTg3LjkyNiAxMjgtMTkyIDEyOHMtMTkyLTU4LjYxOC0xOTItMTI4YzAtNjkuMzgyIDg3LjkyNi0xMjggMTkyLTEyOCA3OC45NzggMCAxNTQuMDU0LTIyLjY3OCAyMTIuNDgyLTY0aDI5OS41MTh6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZWE2NzsiIGdseXBoLW5hbWU9InNpZ21hIiBkPSJNOTQxLjYwNiAyMjUuMjkybDQ0LjM5NCA5NC43MDhoMzhsLTY0LTM4NGgtOTYwdjc0LjI0MmwzMzEuNTQ2IDM5MS4yMTItMzMxLjU0NiAzMzEuNTQ2djIyN2g5ODBsNDQtMjU2aC0zNC4zNzZsLTE4LjcyIDM4Ljg4Yy0zNS4zMTggNzMuMzY0LTYxLjkwNCA4OS4xMi0xMzguOTA0IDg5LjEyaC02NjJsMzUzLjA1Ni0zNTMuMDU2LTI5Ny40Mi0zNTAuOTQ0aDU0Mi4zNjRjMTE2LjAwOCAwIDE0Ni42NDggNDEuNTc4IDE3My42MDYgOTcuMjkyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGVhNjg7IiBnbHlwaC1uYW1lPSJzaWdtYTIiIGQ9Ik05NDEuNjA2IDIyNS4yOTJsNDQuMzk0IDk0LjcwOGgzOGwtNjQtMzg0aC05NjB2NzQuMjQybDMzMS41NDYgMzkxLjIxMi0zMzEuNTQ2IDMzMS41NDZ2MjI3aDk4MGw0NC0yNTZoLTM0LjM3NmwtMTguNzIgMzguODhjLTM1LjMxOCA3My4zNjQtNjEuOTA0IDg5LjEyLTEzOC45MDQgODkuMTJoLTY2MmwzNTMuMDU2LTM1My4wNTYtMjk3LjQyLTM1MC45NDRoNTQyLjM2NGMxMTYuMDA4IDAgMTQ2LjY0OCA0MS41NzggMTczLjYwNiA5Ny4yOTJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZWFkZTsiIGdseXBoLW5hbWU9ImxpYnJlb2ZmaWNlIiBkPSJNNTM0LjYyNiA5MzcuMzcyYy0xMi40NDQgMTIuNDQ0LTM3LjAyNiAyMi42MjgtNTQuNjI2IDIyLjYyOGgtMzg0Yy0xNy42IDAtMzItMTQuNC0zMi0zMnYtOTYwYzAtMTcuNiAxNC40LTMyIDMyLTMyaDc2OGMxNy42IDAgMzIgMTQuNCAzMiAzMnY1NzZjMCAxNy42LTEwLjE4MiA0Mi4xODItMjIuNjI2IDU0LjYyNmwtMzM4Ljc0OCAzMzguNzQ2ek04MzIgMGgtNzA0djg5NmgzNTEuMTU4YzIuOTE2LTAuNDggOC40MDgtMi43NTQgMTAuODEtNC40NzhsMzM3LjU1Ni0zMzcuNTU0YzEuNzIyLTIuNDAyIDMuOTk2LTcuODk0IDQuNDc2LTEwLjgxdi01NDMuMTU4ek04NjQgOTYwaC0xOTJjLTE3LjYgMC0yMS44MTgtMTAuMTgyLTkuMzc0LTIyLjYyNmwyMTAuNzQ2LTIxMC43NDZjMTIuNDQ2LTEyLjQ0NiAyMi42MjgtOC4yMjggMjIuNjI4IDkuMzcydjE5MmMwIDE3LjYtMTQuNCAzMi0zMiAzMnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hmMDBlOyIgZ2x5cGgtbmFtZT0ic2VhcmNoLXBsdXMiIGhvcml6LWFkdi14PSI5NTEiIGQ9Ik01ODUuMTQzIDQ5My43MTR2LTM2LjU3MXEwLTcuNDI5LTUuNDI5LTEyLjg1N3QtMTIuODU3LTUuNDI5aC0xMjh2LTEyOHEwLTcuNDI5LTUuNDI5LTEyLjg1N3QtMTIuODU3LTUuNDI5aC0zNi41NzFxLTcuNDI5IDAtMTIuODU3IDUuNDI5dC01LjQyOSAxMi44NTd2MTI4aC0xMjhxLTcuNDI5IDAtMTIuODU3IDUuNDI5dC01LjQyOSAxMi44NTd2MzYuNTcxcTAgNy40MjkgNS40MjkgMTIuODU3dDEyLjg1NyA1LjQyOWgxMjh2MTI4cTAgNy40MjkgNS40MjkgMTIuODU3dDEyLjg1NyA1LjQyOWgzNi41NzFxNy40MjkgMCAxMi44NTctNS40Mjl0NS40MjktMTIuODU3di0xMjhoMTI4cTcuNDI5IDAgMTIuODU3LTUuNDI5dDUuNDI5LTEyLjg1N3pNNjU4LjI4NiA0NzUuNDI4cTAgMTA1LjcxNC03NS4xNDMgMTgwLjg1N3QtMTgwLjg1NyA3NS4xNDMtMTgwLjg1Ny03NS4xNDMtNzUuMTQzLTE4MC44NTcgNzUuMTQzLTE4MC44NTcgMTgwLjg1Ny03NS4xNDMgMTgwLjg1NyA3NS4xNDMgNzUuMTQzIDE4MC44NTd6TTk1MC44NTcgMHEwLTMwLjI4Ni0yMS40MjktNTEuNzE0dC01MS43MTQtMjEuNDI5cS0zMC44NTcgMC01MS40MjkgMjEuNzE0bC0xOTYgMTk1LjQyOXEtMTAyLjI4Ni03MC44NTctMjI4LTcwLjg1Ny04MS43MTQgMC0xNTYuMjg2IDMxLjcxNHQtMTI4LjU3MSA4NS43MTQtODUuNzE0IDEyOC41NzEtMzEuNzE0IDE1Ni4yODYgMzEuNzE0IDE1Ni4yODYgODUuNzE0IDEyOC41NzEgMTI4LjU3MSA4NS43MTQgMTU2LjI4NiAzMS43MTQgMTU2LjI4Ni0zMS43MTQgMTI4LjU3MS04NS43MTQgODUuNzE0LTEyOC41NzEgMzEuNzE0LTE1Ni4yODZxMC0xMjUuNzE0LTcwLjg1Ny0yMjhsMTk2LTE5NnEyMS4xNDMtMjEuMTQzIDIxLjE0My01MS40Mjl6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZjAxMDsiIGdseXBoLW5hbWU9InNlYXJjaC1taW51cyIgaG9yaXotYWR2LXg9Ijk1MSIgZD0iTTU4NS4xNDMgNDkzLjcxNHYtMzYuNTcxcTAtNy40MjktNS40MjktMTIuODU3dC0xMi44NTctNS40MjloLTMyOS4xNDNxLTcuNDI5IDAtMTIuODU3IDUuNDI5dC01LjQyOSAxMi44NTd2MzYuNTcxcTAgNy40MjkgNS40MjkgMTIuODU3dDEyLjg1NyA1LjQyOWgzMjkuMTQzcTcuNDI5IDAgMTIuODU3LTUuNDI5dDUuNDI5LTEyLjg1N3pNNjU4LjI4NiA0NzUuNDI4cTAgMTA1LjcxNC03NS4xNDMgMTgwLjg1N3QtMTgwLjg1NyA3NS4xNDMtMTgwLjg1Ny03NS4xNDMtNzUuMTQzLTE4MC44NTcgNzUuMTQzLTE4MC44NTcgMTgwLjg1Ny03NS4xNDMgMTgwLjg1NyA3NS4xNDMgNzUuMTQzIDE4MC44NTd6TTk1MC44NTcgMHEwLTMwLjI4Ni0yMS40MjktNTEuNzE0dC01MS43MTQtMjEuNDI5cS0zMC44NTcgMC01MS40MjkgMjEuNzE0bC0xOTYgMTk1LjQyOXEtMTAyLjI4Ni03MC44NTctMjI4LTcwLjg1Ny04MS43MTQgMC0xNTYuMjg2IDMxLjcxNHQtMTI4LjU3MSA4NS43MTQtODUuNzE0IDEyOC41NzEtMzEuNzE0IDE1Ni4yODYgMzEuNzE0IDE1Ni4yODYgODUuNzE0IDEyOC41NzEgMTI4LjU3MSA4NS43MTQgMTU2LjI4NiAzMS43MTQgMTU2LjI4Ni0zMS43MTQgMTI4LjU3MS04NS43MTQgODUuNzE0LTEyOC41NzEgMzEuNzE0LTE1Ni4yODZxMC0xMjUuNzE0LTcwLjg1Ny0yMjhsMTk2LTE5NnEyMS4xNDMtMjEuMTQzIDIxLjE0My01MS40Mjl6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZjAxNDsiIGdseXBoLW5hbWU9InRyYXNoLW8iIGhvcml6LWFkdi14PSI4MDUiIGQ9Ik0yOTIuNTcxIDUzMC4yODZ2LTMyOS4xNDNxMC04LTUuMTQzLTEzLjE0M3QtMTMuMTQzLTUuMTQzaC0zNi41NzFxLTggMC0xMy4xNDMgNS4xNDN0LTUuMTQzIDEzLjE0M3YzMjkuMTQzcTAgOCA1LjE0MyAxMy4xNDN0MTMuMTQzIDUuMTQzaDM2LjU3MXE4IDAgMTMuMTQzLTUuMTQzdDUuMTQzLTEzLjE0M3pNNDM4Ljg1NyA1MzAuMjg2di0zMjkuMTQzcTAtOC01LjE0My0xMy4xNDN0LTEzLjE0My01LjE0M2gtMzYuNTcxcS04IDAtMTMuMTQzIDUuMTQzdC01LjE0MyAxMy4xNDN2MzI5LjE0M3EwIDggNS4xNDMgMTMuMTQzdDEzLjE0MyA1LjE0M2gzNi41NzFxOCAwIDEzLjE0My01LjE0M3Q1LjE0My0xMy4xNDN6TTU4NS4xNDMgNTMwLjI4NnYtMzI5LjE0M3EwLTgtNS4xNDMtMTMuMTQzdC0xMy4xNDMtNS4xNDNoLTM2LjU3MXEtOCAwLTEzLjE0MyA1LjE0M3QtNS4xNDMgMTMuMTQzdjMyOS4xNDNxMCA4IDUuMTQzIDEzLjE0M3QxMy4xNDMgNS4xNDNoMzYuNTcxcTggMCAxMy4xNDMtNS4xNDN0NS4xNDMtMTMuMTQzek02NTguMjg2IDExNi41NzF2NTQxLjcxNGgtNTEydi01NDEuNzE0cTAtMTIuNTcxIDQtMjMuMTQzdDguMjg2LTE1LjQyOSA2LTQuODU3aDQ3NS40MjlxMS43MTQgMCA2IDQuODU3dDguMjg2IDE1LjQyOSA0IDIzLjE0M3pNMjc0LjI4NiA3MzEuNDI4aDI1NmwtMjcuNDI5IDY2Ljg1N3EtNCA1LjE0My05LjcxNCA2LjI4NmgtMTgxLjE0M3EtNS43MTQtMS4xNDMtOS43MTQtNi4yODZ6TTgwNC41NzEgNzEzLjE0M3YtMzYuNTcxcTAtOC01LjE0My0xMy4xNDN0LTEzLjE0My01LjE0M2gtNTQuODU3di01NDEuNzE0cTAtNDcuNDI5LTI2Ljg1Ny04MnQtNjQuNTcxLTM0LjU3MWgtNDc1LjQyOXEtMzcuNzE0IDAtNjQuNTcxIDMzLjQyOXQtMjYuODU3IDgwLjg1N3Y1NDRoLTU0Ljg1N3EtOCAwLTEzLjE0MyA1LjE0M3QtNS4xNDMgMTMuMTQzdjM2LjU3MXEwIDggNS4xNDMgMTMuMTQzdDEzLjE0MyA1LjE0M2gxNzYuNTcxbDQwIDk1LjQyOXE4LjU3MSAyMS4xNDMgMzAuODU3IDM2dDQ1LjE0MyAxNC44NTdoMTgyLjg1N3EyMi44NTcgMCA0NS4xNDMtMTQuODU3dDMwLjg1Ny0zNmw0MC05NS40MjloMTc2LjU3MXE4IDAgMTMuMTQzLTUuMTQzdDUuMTQzLTEzLjE0M3oiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hmMDM5OyIgZ2x5cGgtbmFtZT0iYWxpZ24tanVzdGlmeSIgZD0iTTEwMjQgMTgyLjg1N3YtNzMuMTQzcTAtMTQuODU3LTEwLjg1Ny0yNS43MTR0LTI1LjcxNC0xMC44NTdoLTk1MC44NTdxLTE0Ljg1NyAwLTI1LjcxNCAxMC44NTd0LTEwLjg1NyAyNS43MTR2NzMuMTQzcTAgMTQuODU3IDEwLjg1NyAyNS43MTR0MjUuNzE0IDEwLjg1N2g5NTAuODU3cTE0Ljg1NyAwIDI1LjcxNC0xMC44NTd0MTAuODU3LTI1LjcxNHpNMTAyNCA0MDIuMjg2di03My4xNDNxMC0xNC44NTctMTAuODU3LTI1LjcxNHQtMjUuNzE0LTEwLjg1N2gtOTUwLjg1N3EtMTQuODU3IDAtMjUuNzE0IDEwLjg1N3QtMTAuODU3IDI1LjcxNHY3My4xNDNxMCAxNC44NTcgMTAuODU3IDI1LjcxNHQyNS43MTQgMTAuODU3aDk1MC44NTdxMTQuODU3IDAgMjUuNzE0LTEwLjg1N3QxMC44NTctMjUuNzE0ek0xMDI0IDYyMS43MTR2LTczLjE0M3EwLTE0Ljg1Ny0xMC44NTctMjUuNzE0dC0yNS43MTQtMTAuODU3aC05NTAuODU3cS0xNC44NTcgMC0yNS43MTQgMTAuODU3dC0xMC44NTcgMjUuNzE0djczLjE0M3EwIDE0Ljg1NyAxMC44NTcgMjUuNzE0dDI1LjcxNCAxMC44NTdoOTUwLjg1N3ExNC44NTcgMCAyNS43MTQtMTAuODU3dDEwLjg1Ny0yNS43MTR6TTEwMjQgODQxLjE0M3YtNzMuMTQzcTAtMTQuODU3LTEwLjg1Ny0yNS43MTR0LTI1LjcxNC0xMC44NTdoLTk1MC44NTdxLTE0Ljg1NyAwLTI1LjcxNCAxMC44NTd0LTEwLjg1NyAyNS43MTR2NzMuMTQzcTAgMTQuODU3IDEwLjg1NyAyNS43MTR0MjUuNzE0IDEwLjg1N2g5NTAuODU3cTE0Ljg1NyAwIDI1LjcxNC0xMC44NTd0MTAuODU3LTI1LjcxNHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hmMDdkOyIgZ2x5cGgtbmFtZT0iYXJyb3dzLXYiIGhvcml6LWFkdi14PSI0MzkiIGQ9Ik00MDIuMjg2IDc2OHEwLTE0Ljg1Ny0xMC44NTctMjUuNzE0dC0yNS43MTQtMTAuODU3aC03My4xNDN2LTU4NS4xNDNoNzMuMTQzcTE0Ljg1NyAwIDI1LjcxNC0xMC44NTd0MTAuODU3LTI1LjcxNC0xMC44NTctMjUuNzE0bC0xNDYuMjg2LTE0Ni4yODZxLTEwLjg1Ny0xMC44NTctMjUuNzE0LTEwLjg1N3QtMjUuNzE0IDEwLjg1N2wtMTQ2LjI4NiAxNDYuMjg2cS0xMC44NTcgMTAuODU3LTEwLjg1NyAyNS43MTR0MTAuODU3IDI1LjcxNCAyNS43MTQgMTAuODU3aDczLjE0M3Y1ODUuMTQzaC03My4xNDNxLTE0Ljg1NyAwLTI1LjcxNCAxMC44NTd0LTEwLjg1NyAyNS43MTQgMTAuODU3IDI1LjcxNGwxNDYuMjg2IDE0Ni4yODZxMTAuODU3IDEwLjg1NyAyNS43MTQgMTAuODU3dDI1LjcxNC0xMC44NTdsMTQ2LjI4Ni0xNDYuMjg2cTEwLjg1Ny0xMC44NTcgMTAuODU3LTI1LjcxNHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hmMTA4OyIgZ2x5cGgtbmFtZT0iZGVza3RvcCIgaG9yaXotYWR2LXg9IjEwOTciIGQ9Ik0xMDI0IDM4NHY0NzUuNDI5cTAgNy40MjktNS40MjkgMTIuODU3dC0xMi44NTcgNS40MjloLTkxNC4yODZxLTcuNDI5IDAtMTIuODU3LTUuNDI5dC01LjQyOS0xMi44NTd2LTQ3NS40MjlxMC03LjQyOSA1LjQyOS0xMi44NTd0MTIuODU3LTUuNDI5aDkxNC4yODZxNy40MjkgMCAxMi44NTcgNS40Mjl0NS40MjkgMTIuODU3ek0xMDk3LjE0MyA4NTkuNDI4di02MjEuNzE0cTAtMzcuNzE0LTI2Ljg1Ny02NC41NzF0LTY0LjU3MS0yNi44NTdoLTMxMC44NTdxMC0yMS4xNDMgOS4xNDMtNDQuMjg2dDE4LjI4Ni00MC41NzEgOS4xNDMtMjQuODU3cTAtMTQuODU3LTEwLjg1Ny0yNS43MTR0LTI1LjcxNC0xMC44NTdoLTI5Mi41NzFxLTE0Ljg1NyAwLTI1LjcxNCAxMC44NTd0LTEwLjg1NyAyNS43MTRxMCA4IDkuMTQzIDI1LjE0M3QxOC4yODYgNDAgOS4xNDMgNDQuNTcxaC0zMTAuODU3cS0zNy43MTQgMC02NC41NzEgMjYuODU3dC0yNi44NTcgNjQuNTcxdjYyMS43MTRxMCAzNy43MTQgMjYuODU3IDY0LjU3MXQ2NC41NzEgMjYuODU3aDkxNC4yODZxMzcuNzE0IDAgNjQuNTcxLTI2Ljg1N3QyNi44NTctNjQuNTcxeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGYxMGE7IiBnbHlwaC1uYW1lPSJ0YWJsZXQiIGhvcml6LWFkdi14PSI2NTgiIGQ9Ik0zNjUuNzE0IDE0Ni4yODZxMCAxNC44NTctMTAuODU3IDI1LjcxNHQtMjUuNzE0IDEwLjg1Ny0yNS43MTQtMTAuODU3LTEwLjg1Ny0yNS43MTQgMTAuODU3LTI1LjcxNCAyNS43MTQtMTAuODU3IDI1LjcxNCAxMC44NTcgMTAuODU3IDI1LjcxNHpNNTg1LjE0MyAyMzcuNzE0djU0OC41NzFxMCA3LjQyOS01LjQyOSAxMi44NTd0LTEyLjg1NyA1LjQyOWgtNDc1LjQyOXEtNy40MjkgMC0xMi44NTctNS40Mjl0LTUuNDI5LTEyLjg1N3YtNTQ4LjU3MXEwLTcuNDI5IDUuNDI5LTEyLjg1N3QxMi44NTctNS40MjloNDc1LjQyOXE3LjQyOSAwIDEyLjg1NyA1LjQyOXQ1LjQyOSAxMi44NTd6TTY1OC4yODYgNzg2LjI4NnYtNjIxLjcxNHEwLTM3LjcxNC0yNi44NTctNjQuNTcxdC02NC41NzEtMjYuODU3aC00NzUuNDI5cS0zNy43MTQgMC02NC41NzEgMjYuODU3dC0yNi44NTcgNjQuNTcxdjYyMS43MTRxMCAzNy43MTQgMjYuODU3IDY0LjU3MXQ2NC41NzEgMjYuODU3aDQ3NS40MjlxMzcuNzE0IDAgNjQuNTcxLTI2Ljg1N3QyNi44NTctNjQuNTcxeiIgLz4KPC9mb250PjwvZGVmcz48L3N2Zz4="

/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(606);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./publish_activity.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./publish_activity.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".publish_activity_wrap .activity_cover_show, .publish_activity_wrap .activity_subject, .publish_activity_wrap .activity_content_edit, .publish_activity_wrap .activity_publish_btn {\n  width: 85%;\n  margin: 25px auto;\n  padding: 10px; }\n  .publish_activity_wrap .activity_cover_show .activity_cover_text, .publish_activity_wrap .activity_subject .activity_cover_text, .publish_activity_wrap .activity_content_edit .activity_cover_text, .publish_activity_wrap .activity_publish_btn .activity_cover_text {\n    display: inline-block;\n    width: 80%;\n    height: 200px;\n    text-align: center;\n    line-height: 200px;\n    border: 1px solid #2db7f5; }\n  .publish_activity_wrap .activity_cover_show img, .publish_activity_wrap .activity_subject img, .publish_activity_wrap .activity_content_edit img, .publish_activity_wrap .activity_publish_btn img {\n    width: 80%; }\n  .publish_activity_wrap .activity_cover_show .activity_cover, .publish_activity_wrap .activity_subject .activity_cover, .publish_activity_wrap .activity_content_edit .activity_cover, .publish_activity_wrap .activity_publish_btn .activity_cover {\n    margin-top: 20px;\n    margin-bottom: 20px; }\n  .publish_activity_wrap .activity_cover_show .ant-input, .publish_activity_wrap .activity_subject .ant-input, .publish_activity_wrap .activity_content_edit .ant-input, .publish_activity_wrap .activity_publish_btn .ant-input {\n    width: 450px;\n    margin-left: 20px; }\n  .publish_activity_wrap .activity_cover_show .ant-btn, .publish_activity_wrap .activity_subject .ant-btn, .publish_activity_wrap .activity_content_edit .ant-btn, .publish_activity_wrap .activity_publish_btn .ant-btn {\n    margin-right: 20px; }\n", ""]);

	// exports


/***/ },

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(608);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./look_up_view.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./look_up_view.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".look_up_view_content {\n  width: 100%;\n  height: 380px;\n  overflow-y: scroll;\n  overflow-x: hidden; }\n  .look_up_view_content .activity_show p {\n    font-size: 14px; }\n", ""]);

	// exports


/***/ }

});