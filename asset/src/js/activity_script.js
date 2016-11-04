/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/src/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);

	var _tingleMin = __webpack_require__(2);

	var _tingleMin2 = _interopRequireDefault(_tingleMin);

	__webpack_require__(3);

	__webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	({

	    // 获取元素
	    modal: null, shadow: null, share_for_love: null, dating: null, receive: null, shares: null,

	    // 初始化函数
	    init: function init() {

	        var _this = this;

	        this.shadow = this.$("#shadow")[0];
	        this.share_for_love = this.$("#share_for_love")[0];
	        this.dating = this.$("#dating")[0] || null;
	        this.receive = this.$("#receive")[0] || null;
	        this.shares = this.$(".share_icon");

	        // 定义弹出层
	        this.modal = new _tingleMin2.default.modal({
	            footer: true, stickyFooter: false,
	            onOpen: function onOpen() {
	                console.log("modal open");
	            },
	            onClose: function onClose() {
	                console.log("modal closed");
	            }
	        });

	        var i = 0,
	            shares_len = this.shares.length;
	        // 如果是 "我要约会" 页面
	        if (this.dating) {
	            this.dating.onclick = this.dating_func.bind(this);
	        }
	        // 如果是 "领取花花" 页面
	        if (this.receive) {
	            this.receive.onclick = this.receive_func.bind(this);
	        }
	        //点击阴影区域 底部分享隐藏
	        this.shadow.onclick = this.shadow_func.bind(this);
	        // 触发分享
	        for (; i < shares_len; i += 1) {
	            this.shares[i].onclick = this.share_to_otherplace.bind(this);
	        }
	    },

	    // 选取元素
	    $: function $(selectors) {
	        return document.querySelectorAll(selectors);
	    },

	    // 我要约会
	    dating_func: function dating_func() {
	        var _this = this;
	        var user_id = this.$("#save_user_id")[0].value;

	        this.dating.value = "请等一下哦...";

	        fetch("/change_flowers?user_id=" + user_id).then(function (response) {
	            return response.json();
	        }).then(function (json) {
	            if (json.error) {
	                _this.create_error_modal(json.message);
	            } else {
	                _this.modal.setContent("<div>恭喜你获得一朵玫瑰花！快去送给你喜欢的那个TA吧！</div>");
	                _this.modal.setFooterContent("<input type='button' id='longing_for_love' class='longing_for_love' value='去送花' />");
	                _this.modal.open();

	                _this.dating.value = "我要约会";

	                var longing_for_love = _this.$("#longing_for_love")[0];
	                longing_for_love.onclick = _this.longing_for_love_func.bind(_this);
	            }
	        }).catch(function (error) {
	            console.log("parsing failed", error);
	        });
	    },

	    // 填写手机号码领取花花吧！
	    receive_func: function receive_func() {
	        var _this = this;
	        var user_id = this.$("#save_user_id")[0].value;
	        var phone_num = this.$("#phone_value")[0].value;
	        if (phone_num.length == 0) {
	            this.create_error_modal("手机号码不能为空!");
	            return;
	        }

	        this.receive.value = "请等一下哦...";

	        fetch("/change_flowers?user_id=" + user_id + "&phone_num=" + phone_num).then(function (response) {
	            return response.json();
	        }).then(function (json) {
	            if (json.error) {
	                _this.create_error_modal(json.message);
	            } else {
	                _this.modal.setContent("<div>" + json.message + "</div>");
	                _this.modal.setFooterContent("<input type='button' id='look_at_the_flowers' class='longing_for_love' value='去看看' />");
	                _this.modal.open();

	                _this.receive.value = "立即领取";

	                var look_at_the_flowers = _this.$("#look_at_the_flowers")[0];
	                look_at_the_flowers.onclick = _this.look_at_the_flowers_func.bind(_this);
	            }
	        }).catch(function (error) {
	            console.log("parsing failed", error);
	        });
	    },

	    // 去送花！
	    longing_for_love_func: function longing_for_love_func() {
	        this.modal.close();
	        this.shadow.style.display = "block";
	        this.share_for_love.style.bottom = 0;
	    },

	    // 去看看！
	    look_at_the_flowers_func: function look_at_the_flowers_func() {
	        this.modal.close();
	    },

	    //点击阴影区域 底部分享隐藏
	    shadow_func: function shadow_func() {
	        if (this.share_for_love.style.bottom == "0px") {
	            this.shadow.style.display = "none";
	            this.share_for_love.style.bottom = -125 + "px";
	        }
	    },

	    // 触发分享
	    share_to_otherplace: function share_to_otherplace(event) {
	        var node, share_url, share_target;

	        node = event.target.id;
	        share_url = location.href.replace(/false/, "true");

	        if (node == "share_to_qq") {
	            console.log("成功分享到QQ啦！");
	            truelove.shareUrl(share_url, 1);
	        }
	        if (node == "share_to_truelove") {
	            console.log("成功分享到初恋啦！");
	            truelove.shareUrl(share_url, 2);
	        }
	        if (node == "share_to_wechat") {
	            console.log("成功分享到wechat啦！");
	            truelove.shareUrl(share_url, 3);
	        }
	    },

	    // 创建错误弹窗
	    create_error_modal: function create_error_modal(error_message) {
	        this.modal.setContent("<div>" + error_message + "</div>");
	        this.modal.setFooterContent("<input type='button' id='error_modal_close' class='longing_for_love' value='关闭' />");
	        this.modal.open();

	        var error_modal_close = this.$("#error_modal_close")[0];
	        error_modal_close.onclick = function () {
	            this.modal.close();
	        }.bind(this);
	    }

	}).init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	(function (self) {
	  'use strict';

	  if (self.fetch) {
	    return;
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && function () {
	      try {
	        new Blob();
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  };

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name);
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name');
	    }
	    return name.toLowerCase();
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value);
	    }
	    return value;
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function next() {
	        var value = items.shift();
	        return { done: value === undefined, value: value };
	      }
	    };

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function () {
	        return iterator;
	      };
	    }

	    return iterator;
	  }

	  function Headers(headers) {
	    this.map = {};

	    if (headers instanceof Headers) {
	      headers.forEach(function (value, name) {
	        this.append(name, value);
	      }, this);
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function (name) {
	        this.append(name, headers[name]);
	      }, this);
	    }
	  }

	  Headers.prototype.append = function (name, value) {
	    name = normalizeName(name);
	    value = normalizeValue(value);
	    var list = this.map[name];
	    if (!list) {
	      list = [];
	      this.map[name] = list;
	    }
	    list.push(value);
	  };

	  Headers.prototype['delete'] = function (name) {
	    delete this.map[normalizeName(name)];
	  };

	  Headers.prototype.get = function (name) {
	    var values = this.map[normalizeName(name)];
	    return values ? values[0] : null;
	  };

	  Headers.prototype.getAll = function (name) {
	    return this.map[normalizeName(name)] || [];
	  };

	  Headers.prototype.has = function (name) {
	    return this.map.hasOwnProperty(normalizeName(name));
	  };

	  Headers.prototype.set = function (name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)];
	  };

	  Headers.prototype.forEach = function (callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function (name) {
	      this.map[name].forEach(function (value) {
	        callback.call(thisArg, value, name, this);
	      }, this);
	    }, this);
	  };

	  Headers.prototype.keys = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push(name);
	    });
	    return iteratorFor(items);
	  };

	  Headers.prototype.values = function () {
	    var items = [];
	    this.forEach(function (value) {
	      items.push(value);
	    });
	    return iteratorFor(items);
	  };

	  Headers.prototype.entries = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push([name, value]);
	    });
	    return iteratorFor(items);
	  };

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'));
	    }
	    body.bodyUsed = true;
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function (resolve, reject) {
	      reader.onload = function () {
	        resolve(reader.result);
	      };
	      reader.onerror = function () {
	        reject(reader.error);
	      };
	    });
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    reader.readAsArrayBuffer(blob);
	    return fileReaderReady(reader);
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    reader.readAsText(blob);
	    return fileReaderReady(reader);
	  }

	  function Body() {
	    this.bodyUsed = false;

	    this._initBody = function (body) {
	      this._bodyInit = body;
	      if (typeof body === 'string') {
	        this._bodyText = body;
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body;
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body;
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString();
	      } else if (!body) {
	        this._bodyText = '';
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	        throw new Error('unsupported BodyInit type');
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8');
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type);
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	        }
	      }
	    };

	    if (support.blob) {
	      this.blob = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob');
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]));
	        }
	      };

	      this.arrayBuffer = function () {
	        return this.blob().then(readBlobAsArrayBuffer);
	      };

	      this.text = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob);
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text');
	        } else {
	          return Promise.resolve(this._bodyText);
	        }
	      };
	    } else {
	      this.text = function () {
	        var rejected = consumed(this);
	        return rejected ? rejected : Promise.resolve(this._bodyText);
	      };
	    }

	    if (support.formData) {
	      this.formData = function () {
	        return this.text().then(decode);
	      };
	    }

	    this.json = function () {
	      return this.text().then(JSON.parse);
	    };

	    return this;
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method;
	  }

	  function Request(input, options) {
	    options = options || {};
	    var body = options.body;
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read');
	      }
	      this.url = input.url;
	      this.credentials = input.credentials;
	      if (!options.headers) {
	        this.headers = new Headers(input.headers);
	      }
	      this.method = input.method;
	      this.mode = input.mode;
	      if (!body) {
	        body = input._bodyInit;
	        input.bodyUsed = true;
	      }
	    } else {
	      this.url = input;
	    }

	    this.credentials = options.credentials || this.credentials || 'omit';
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers);
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET');
	    this.mode = options.mode || this.mode || null;
	    this.referrer = null;

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests');
	    }
	    this._initBody(body);
	  }

	  Request.prototype.clone = function () {
	    return new Request(this);
	  };

	  function decode(body) {
	    var form = new FormData();
	    body.trim().split('&').forEach(function (bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	    return form;
	  }

	  function headers(xhr) {
	    var head = new Headers();
	    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n');
	    pairs.forEach(function (header) {
	      var split = header.trim().split(':');
	      var key = split.shift().trim();
	      var value = split.join(':').trim();
	      head.append(key, value);
	    });
	    return head;
	  }

	  Body.call(Request.prototype);

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }

	    this.type = 'default';
	    this.status = options.status;
	    this.ok = this.status >= 200 && this.status < 300;
	    this.statusText = options.statusText;
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
	    this.url = options.url || '';
	    this._initBody(bodyInit);
	  }

	  Body.call(Response.prototype);

	  Response.prototype.clone = function () {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    });
	  };

	  Response.error = function () {
	    var response = new Response(null, { status: 0, statusText: '' });
	    response.type = 'error';
	    return response;
	  };

	  var redirectStatuses = [301, 302, 303, 307, 308];

	  Response.redirect = function (url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code');
	    }

	    return new Response(null, { status: status, headers: { location: url } });
	  };

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function (input, init) {
	    return new Promise(function (resolve, reject) {
	      var request;
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input;
	      } else {
	        request = new Request(input, init);
	      }

	      var xhr = new XMLHttpRequest();

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL;
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL');
	        }

	        return;
	      }

	      xhr.onload = function () {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        };
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };

	      xhr.onerror = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.ontimeout = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.open(request.method, request.url, true);

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true;
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob';
	      }

	      request.headers.forEach(function (value, name) {
	        xhr.setRequestHeader(name, value);
	      });

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	    });
	  };
	  self.fetch.polyfill = true;
	})(typeof self !== 'undefined' ? self : undefined);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	!function (t, o) {
	   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (o), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = o() : t.tingle = o();
	}(undefined, function () {
	  function t(t) {
	    this.modal, this.modalCloseBtn, this.modalWrapper, this.modalBox, this.modalBoxContent, this.modalBoxFooter, this.modalContent;var o = { onClose: null, onOpen: null, stickyFooter: !1, footer: !1, cssClass: [] };this.opts = a({}, o, t), this.init();
	  }function o() {
	    this.modal.classList.contains("tingle-modal--visible") && (this.isOverflow() ? this.modal.classList.add("tingle-modal--overflow") : this.modal.classList.remove("tingle-modal--overflow"), !this.isOverflow() && this.opts.stickyFooter ? this.setStickyFooter(!1) : this.isOverflow() && this.opts.stickyFooter && (i.call(this), this.setStickyFooter(!0)));
	  }function i() {
	    this.modalBoxFooter && (this.modalBoxFooter.style.width = this.modalBox.clientWidth + "px", this.modalBoxFooter.style.left = this.modalBox.offsetLeft + "px");
	  }function e() {
	    this.modal = c("div", "tingle-modal"), this.modal.style.display = "none", this.opts.cssClass.forEach(function (t) {
	      "string" == typeof t && this.modal.classList.add(t);
	    }, this), this.modalCloseBtn = c("button", "tingle-modal__close"), this.modalCloseBtn.innerHTML = "×", this.modalBox = c("div", "tingle-modal-box"), this.modalBoxContent = c("div", "tingle-modal-box__content"), this.modalBox.appendChild(this.modalBoxContent), this.modal.appendChild(this.modalCloseBtn), this.modal.appendChild(this.modalBox);
	  }function n() {
	    this.modalBoxFooter = c("div", "tingle-modal-box__footer"), this.modalBox.appendChild(this.modalBoxFooter);
	  }function s() {
	    h(this.modalCloseBtn, "click", this.close.bind(this)), h(this.modal, "click", this.close.bind(this)), h(this.modalBox, "click", l), window.addEventListener("resize", o.bind(this));
	  }function l(t) {
	    t.stopPropagation();
	  }function d() {
	    m(this.modalCloseBtn, "click", this.close.bind(this)), m(this.modal, "click", this.close.bind(this)), m(this.modalBox, "click", l);
	  }function a() {
	    for (var t = 1; t < arguments.length; t++) {
	      for (var o in arguments[t]) {
	        arguments[t].hasOwnProperty(o) && (arguments[0][o] = arguments[t][o]);
	      }
	    }return arguments[0];
	  }function r(t) {
	    return "undefined" != typeof t.length && "undefined" != typeof t.item;
	  }function h(t, o, i) {
	    r(t) ? [].forEach.call(t, function (t) {
	      t.addEventListener(o, i);
	    }) : t.addEventListener(o, i);
	  }function m(t, o, i) {
	    r(t) ? [].forEach.call(t, function (t) {
	      t.removeEventListener(o, i);
	    }) : t.removeEventListener(o, i);
	  }function c(t, o) {
	    var t = document.createElement(t);return o && t.classList.add(o), t;
	  }function p() {
	    var t,
	        o = document.createElement("tingle-test-transition"),
	        i = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };for (t in i) {
	      if (void 0 !== o.style[t]) return i[t];
	    }
	  }var f = document.querySelector("body"),
	      u = p();return t.prototype.init = function () {
	    this.modal || (e.call(this), s.call(this), document.body.insertBefore(this.modal, document.body.firstChild), this.opts.footer && this.addFooter());
	  }, t.prototype.destroy = function () {
	    null !== this.modal && (d.call(this), this.modal.parentNode.removeChild(this.modal), this.modal = null);
	  }, t.prototype.open = function (t) {
	    this.modal.style.removeProperty ? this.modal.style.removeProperty("display") : this.modal.style.removeAttribute("display"), f.classList.add("tingle-enabled"), this.setStickyFooter(this.opts.stickyFooter), this.modal.classList.add("tingle-modal--visible");var i = this;u && this.modal.addEventListener(u, function e() {
	      "function" == typeof i.opts.onOpen && i.opts.onOpen.call(i), i.modal.removeEventListener(u, e, !1);
	    }, !1), o.call(this);
	  }, t.prototype.close = function (t) {
	    this.modal.style.display = "none", f.classList.remove("tingle-enabled"), this.modal.classList.remove("tingle-modal--visible"), "function" == typeof this.opts.onClose && this.opts.onClose.call(this);
	  }, t.prototype.setContent = function (t) {
	    "string" == typeof t ? this.modalBoxContent.innerHTML = t : (this.modalBoxContent.innerHTML = "", this.modalBoxContent.appendChild(t));
	  }, t.prototype.getContent = function () {
	    return this.modalBoxContent;
	  }, t.prototype.addFooter = function () {
	    n.call(this);
	  }, t.prototype.setFooterContent = function (t) {
	    this.modalBoxFooter.innerHTML = t;
	  }, t.prototype.getFooterContent = function () {
	    return this.modalBoxFooter;
	  }, t.prototype.setStickyFooter = function (t) {
	    this.isOverflow() || (t = !1), t ? this.modalBox.contains(this.modalBoxFooter) && (this.modalBox.removeChild(this.modalBoxFooter), this.modal.appendChild(this.modalBoxFooter), this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"), i.call(this), this.modalBoxContent.style["padding-bottom"] = this.modalBoxFooter.clientHeight + 20 + "px", h(this.modalBoxFooter, "click", l)) : this.modalBoxFooter && (this.modalBox.contains(this.modalBoxFooter) || (this.modal.removeChild(this.modalBoxFooter), this.modalBox.appendChild(this.modalBoxFooter), this.modalBoxFooter.style.width = "auto", this.modalBoxFooter.style.left = "", this.modalBoxContent.style["padding-bottom"] = "", this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky")));
	  }, t.prototype.addFooterBtn = function (t, o, i) {
	    var e = document.createElement("button");return e.innerHTML = t, e.addEventListener("click", i), "string" == typeof o && o.length && o.split(" ").forEach(function (t) {
	      e.classList.add(t);
	    }), this.modalBoxFooter.appendChild(e), e;
	  }, t.prototype.resize = function () {
	    console.warn("Resize is deprecated and will be removed in version 1.0");
	  }, t.prototype.isOverflow = function () {
	    var t = window.innerHeight,
	        o = this.modalBox.clientHeight,
	        i = t > o ? !1 : !0;return i;
	  }, { modal: t };
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./activity.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./activity.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "*{\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n}\r\nhtml, body{\r\n\tfont-size: 14px;\r\n\tfont-family: 微软雅黑;\r\n}\r\n.longing_for_love{\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: 30px;\r\n\tmargin-top: 10px;\r\n\tborder-radius: 6px;\r\n\tbackground-color: #FF1493;\r\n\tborder: 1px solid #FF1493;\r\n\tfont-family: 微软雅黑;\r\n\tfont-size: 0.8rem;\r\n\tcolor: #FFF;\r\n}\r\n#h5_activity_show .activity_title{\r\n\twidth: 100%;\r\n\theight: 50px;\r\n\tline-height: 50px;\r\n\ttext-align: center;\r\n\tfont-size: 1rem;\r\n\tcolor: #FFF;\r\n\tbackground-color: #FF1493;\r\n}\r\n#h5_activity_show .activity_show_main{\r\n\twidth: 100%;\r\n}\r\n#h5_activity_show .activity_show_main .activity_post{\r\n\twidth: 100%;\r\n\tmargin-bottom: 10px;\r\n}\r\n#h5_activity_show .activity_show_main .activity_post img{\r\n\twidth: 100%;\r\n}\r\n#h5_activity_show .activity_show_main .activity_flower{\r\n\twidth: 80%;\r\n\tmargin: 20px 10%;\r\n}\r\n#h5_activity_show .activity_show_main .activity_flower .vows{\r\n\tfont-size: 0.8rem;\r\n\tline-height: 20px;\r\n}\r\n#h5_activity_show .activity_show_main .activity_flower .flower_img{\r\n\tmargin-top: 10px;\r\n\twidth: 100%;\r\n}\r\n#h5_activity_show .activity_show_main .activity_flower .phone_value{\r\n\tdisplay: block;\r\n\tbox-sizing: border-box;\r\n\twidth: 100%;\r\n\theight: 40px;\r\n\tpadding: 10px;\r\n\tmargin-top: 10px;\r\n\tborder-radius: 6px;\r\n\tbackground-color: #FFF;\r\n\tborder: 1px solid #FF1493;\r\n\tfont-family: 微软雅黑;\r\n\tfont-size: 0.8rem;\r\n}\r\n#h5_activity_show .activity_show_main .activity_detail p{\r\n\tbox-sizing: border-box;\r\n\tfont-size: 0.8rem;\r\n\tcolor: #FF1493;\r\n\twidth: 100%;\r\n\tpadding: 10px 10px;\r\n}\r\n.hidden{\r\n\tdisplay: none;\r\n}\r\n/* 阴影层 */\r\n.shadow{\r\n\tdisplay: none;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: rgba( 0, 0, 0, .5 );\r\n}\r\n/* 底部分享 */\r\n.share_for_love{\r\n        color: #FF1493;\r\n        width: 100%;\r\n        height: 125px;\r\n        background-color: #FFF;\r\n        position: fixed;\r\n        bottom: -125px;\r\n        transition: bottom .5s;\r\n        -webkit-transition: bottom .5s;\r\n        -moz-transition: bottom .5s;\r\n}\r\n.share_for_love p{\r\n\t\tfont-size: 12px;\r\n        height: 30px;\r\n        box-sizing: border-box;\r\n\t\tpadding-top: 10px;\r\n        padding-left: 10px;\r\n        line-height: 30px;\r\n}\r\n.share_for_love div{\r\n\t\tpadding-top: 10px;\r\n        width: 100%;\r\n        height: 70px;\r\n}\r\n.share_icon{\r\n        float: left;\r\n        display: inline-block;\r\n        width: 28%;\r\n        height: 100%;\r\n        margin-left: 4%;\r\n        background: url(" + __webpack_require__(6) + ") no-repeat center center;\r\n\t\toverflow: hidden;\r\n}\r\n\r\n/* 弹出层样式重置 */\r\n.tingle-modal{\r\n\tbackground: rgba( 0, 0, 0, .5 ) !important;\r\n}\r\n.tingle-modal-box{\r\n\twidth: 75% !important;\r\n}\r\n.tingle-modal-box__footer{\r\n\tbackground-color: #FFF !important;\r\n}\r\n.tingle-modal__close{\r\n\tdisplay: none;\r\n}", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAwCAYAAABE1blzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ2ODk2RUNEQkNCRDExRTU4NjdERDMwNEM0NjhBNjhFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ2ODk2RUNFQkNCRDExRTU4NjdERDMwNEM0NjhBNjhFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDY4OTZFQ0JCQ0JEMTFFNTg2N0REMzA0QzQ2OEE2OEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDY4OTZFQ0NCQ0JEMTFFNTg2N0REMzA0QzQ2OEE2OEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6xgpMhAAALtElEQVR42rRaCXRVxRmeufe+JC/LIyELhDwgBDQiCUsiAmEpS2QRTwXXioptOKWIh6UiQlGKbY8WT6EoIKJQLAJFDkhFoBrgIJEGT0ELEYlCIEjCJmQhZCFvuTP9771z313efUvy0jl8zHuz//P/8/3/zItQWXEeGRNFWPtoyLFWoyRCeYSxaCo1jBVOoijYCBZjsOYUB5oH+0qFoMJRfReM+PM3c22fflsknLg4ga+qy5ZakJT4ayTHWeoenb3bO6bPbsRzXtTGhHUTUVbCXarNthWXTxO+u1qAaxozQFBKeiaf9Q7N+txTeM8OGh/VgClrj602VinEmgapJrtJOP5qQ1b06iMrbEfPTQm23TTNUe15eNA77qn9N6BOMXWapi1233JhCHHfXimI3nZ8kXDswkNgIZzUhmompPSN4u94xudsdc0oWCZtMAowlqwWRUBqbKNbUNSeb2fGrD68Crd6Y4NrAfsWQWNszd6JuZvcUwesI5mdfwihPjADyttKKydHbT/xMnf68nDLNiYhZUHttibX9II/uqYNXiGbAbYUsMK4uUQ7X/ZVh1ZHfVI2O1zBrBK5J+Mrz5Cs/WSQs4Q4HZUkKe4nxMG5rW1K587X9Be+qR4nfFH+FFfT5PQ7b9RCSGyejCLv0N77W343YTp12OuAE4zrMwhIfeaJ7cuLN9o+O10UaOVY/R+jDk40CDWBmjC17CNmpZa1rHhsHO1kr9ULyannDRPt7EVv/mqpcOC7IsRx0AL7Acs5q8M6mNoEAgoKOHaWYyrzYcxp5TxiAAK8VDMgdvHuA7jFlYCIJgxnNgn+ZPU425Zjr8kmwUnABiA554zlPJYn0RbCsTbWQD6o45nAc8p4glrmP59VOXfxZl702i/XYGaNEjhZKsrsstUdG72ieJO8haZF+GlOXy7vNseA2wClvUGrPs3pNCWpwW8dunYc22CAraT8Ob6k4glZi5RqJiqRi+2jbxaDz+lhtauByuRybKEFc5uA4OT+vna8XkMWFsPr+zIr440WEv330pWo1WNHImECSiptciUKe0/OU3dCgWbjAc+Mfrd158Z83oKfQS7AWTZZEW88j8p3C4uqb3baSs4+gxQTRbIq+ZKzTyOXx2G1w9rOajspLcSsOaQ7i5QLrdXQlsJpZXwQLjBbECiFP1g+S5JLUM4fnOcvfngO8Zx/yOHvcU0+Cgd14mF6Bus+Mt1jRvMhxuZM3rm6Ng/X3O4pyGq8XNcXV9YMlrUVanUQ4coxoMnhYsvQGocVgFODUFQXymFEnElnxMGZH9N0xzmJ9XHFjWH88QtP4qbWzjSggMoI/Pc/jRSwxDT/vTxJNplQi6M6xx4omKRhqhCjkHXiqOxN7lkjZko3FtXS0IjeWzzTBr9s+9fpBfzeU68CkQi+sbBpGVfq+8kmyp+7Plz2ZaFMj2JjtN5mIbUo328x+nr4R7JST7hnjpglh3XqrUFtGC00eaYM/IPYN/2wbUPJNlTf3N0qsMK3mp0yi+Ir9f1VgqACAx8KMJ+AfE7eQALmdj74uwFDf16b2/P00AXAkB5EdRtA2Req+G5yV9pR98JJo2ly/GVkWIcSoCCX6OCQlwi4trGXmd6x2T1gzeFSA3Urvkiu40OFYSboGFdfTnqmnCT3dDnqO9jUIKUxbk2Oq3TPf2AsjY+pMbsZGs3f4XB9S1egWV5xuJyBctVFaA6W86NwinXhnC+8CxMY6fpQX7k48q4PAhKSQZPqPTShwjNj5FPgxkRpHURdT1zULQ41u5KQPj7kzfGiUiYHuQbnq9Wpsaf6uU0w9xEEjzi89zakvzX4aVETXr170Owuh7yP3zfHEA+nOC4IyO2Jk8+BH7lQ7TvGhOT13EUGOD9BibFXcbMrBf1Yl8+drv45vnarn8LuOMwXGCvu0siH9M04bH99bx0SgTi9ED9CuEW9IsuV7/Jnlrs+mOFbMRlx17seO2jt4HevwfmLp7nOPQISeJcsNbXiatifhNgbYtGIR2iftFLFNTHzze/5sfho3hLu+2sP8DuOv42uN/S1eJYKw79TpL+/kbzu/0TF9W28QerUkp+53ZuXuR2xGIHDAt9KLUIh2Y4d9pveeYUjSO/UUtUPUeW2zwINYLJ7ux70Lp08SByf+yawKiUWVywrEF+gbLgmETKw+6ch36gQygSMAhRGTd/QQ4t6kF/UI9BYW61Pg/rtB//j/dXIR2hKfIXphMuPH+p4ngVbERFFFxHJ4rjnJx7lPyzdTJtdyZb2ioN7etqn69HYlZ9dC2Dqkq+bB5gGSNdXRD39/tdwPVri2f6bg9QvgouLuYmi+RZzkExGZf8VZSb/GzPWolbPJaay2+v27/cumng/SXOct9Qc1oHztxiS32NHgG15EXAWsMAsHEv3AYqFJ9cv0t9KpHk42WWmOM7Lw7DLK06KqyKF975GDexFja8llFq+njQs+Uel+NL4ApqZciKoD9QtQr4P2ng3CLjTQrh1gJUAeximu9z22DuPUzXowuzhl6bGnUM3bvVXVUMezH0JJmxRlRS3qpgHEywA5soXRTEJPteBWV6G/DhUV5tnujX/g5uJa389jttY8gmu+GlsOERDB/bYFbvy8xpT9VzArDaS8uqoR9fsc++eewdh9mRBsrp8oewofOuVUkJznLvUI5Kw5tAvIJMeT78ErAL8HvAWYBegCnAM8Iz5lbxu9nuNZNaYybSfc4/ZbBRou4wkBz0h5w3TQvtKGmmH1+kKmCJHViz4QjQvcyPJce6k6Z1OkUfuK1Lf0jutO7wMsu2MtQKlYYAtgBOAPH1FzYy1rWTmqEfJz7LfVqMU5IMupBrdd1XcxpIzpnFfB8S007UOVTdUuUXZODd5YsgT4uxxg1Dn2EqpKHH9kdGQLWvDoAOZNp/VF9549i3x6q4j88mMkVNoov2KLzxjIP0yPiWTB7xiGmuQrIX2pwxVQMF4Y1ZUx1zAEtT2Z91owGaWb9RXXPnT9j3dtr5YjMuqHkeX6u4HkuJodteDNLf7noQ/7zOz1QsosidlgvQkYxgLnHfS+hIHzDi2nYNLg62XlAcwOO3qaStagZi2ECJuEQkB10VQ/qghZi5OYb4uklSlCAgazByc61d7e33J3ew9rb2JZ+dSOp/lbew7KwyXECod69X/XuuXjA5MDsCONhKF9AvWnAjnbZScfsCnGpYqTL/qtTflMDYMNy0EpEU45+qMqvebgwro+NucBshKO0iTUvw4JCxqR+iVCOe6AHgj6GObLv2lgwTkeZsghWC2IG36M0KyRfS7G0LPZ1x6ryUsATttmrsXsn0dIaHo8XZP7JZ6JKdwqIE88scMk+b/JeAoIDXCaZZnXHz3oLlQCNGpiDnvPpEK2XC9tiAxPbUqt3DoTvAPlyCuTUdeMgmq7u6APZSUsdTSZ1Ea/KGhbvqqLPBdhwC9pGcCCLbh/kekO6Cci15R+6zWMR8nl0Muss98tA1l5fcDm+WUJwev7vnBK+Wiksvl4T1ZQH4AiXRqt4q1LVbrD+kmOn/4Wyl0G840GVFy33GhS2Vn5U3poCRdpR4KJFzYfjBl2wLpTzXGAN6UjlQkK2q+1YgufHMGedyeSIapZbHqC91+WBN0oLAdfdpHC91ddi5azOj860hWd6exGZ39TxlqrG9oD1NKsa4UpuwJp0ObI5luu5d8zfya9OclN9srpKTBc6fK0YXyc8jtcoXTpUT66YWx7o2wA+NQJBMs/ThpWTycp9lAIHOAXJyhSEbJpTr2mSif5WPQJQ0lJ3dG8TF2Pcl4oOE+IJnVkB+xIpn0M2///wSUQ4cHXpUWL8DCHwYBn4L8QVi4vS0CKjmVc7s9RkzpnHw6KSFhm90WvRUaXg/GoqEEFDqIzaQ/wPuYQQqY7wcUsLOSxfFcJlxfUqmIpI1AvMDDXZeX+oBt0maO467wHF8G7fa1NDbtzUhP9/jcRISpowTUJ4myjzAot09R0yY4+qiyA6Vuw33Qyg92UPqfAAMAyfkb5+9uqc8AAAAASUVORK5CYII="

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./tingle.min.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./tingle.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".tingle-modal *{box-sizing:border-box}.tingle-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1000;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;visibility:hidden;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow-y:auto;background:rgba(0,0,0,.8);opacity:0;cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAANpJREFUOBGNkz0KAjEQhYPYWXgCKws7LcXWyt7WG4i9jegBvIJ4AvEyXsRCsBDiN0sGkiE/O/A2O9n3viS7rPPeb9ETrVzPwrtHDzR1XF5I6oPWLQaeq5hDXQRw0I6xCuF5HH7Tz7oFuTkhrSyEhza8THaLoQhphpWUg/QOFyA/AFpy5nTbGrIjxvg4AiiGBzYc+rGZH9KPzFy+ZbX4bX9l+VDZr5NQMMbhbtvMxccpQ3JhpTchtXATQviItIpvW0CY7HHm8c9UDRd2chbABt3RQk2tEe8O3dDkD4JQ4iOR7BMpAAAAAElFTkSuQmCC),pointer;-webkit-transition:opacity .2s ease;transition:opacity .2s ease;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.tingle-modal--confirm .tingle-modal-box{text-align:center}.tingle-modal--noClose{cursor:default}.tingle-modal--noClose .tingle-modal__close{display:none}.tingle-modal__close{position:fixed;top:1vw;right:1vw;z-index:1000;padding:0;width:40px;height:40px;border:none;border-radius:50%;background:0 0;color:#fff;font-size:40px;line-height:normal;cursor:pointer}.tingle-modal-box{position:relative;margin-top:auto;margin-bottom:auto;width:60%;border-radius:4px;background:#fff;opacity:1;cursor:auto;-webkit-transition:-webkit-transform .3s cubic-bezier(.175,.885,.32,1.275);transition:transform .3s cubic-bezier(.175,.885,.32,1.275);-webkit-transform:scale(.7);-ms-transform:scale(.7);transform:scale(.7);-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.tingle-modal-box__content{padding:3rem 2rem}.tingle-modal-box__footer{padding:1.5rem 2rem;width:auto;border-bottom-right-radius:4px;border-bottom-left-radius:4px;background-color:#f5f5f5;cursor:auto}.tingle-modal-box__footer::after{display:table;clear:both;content:\"\"}.tingle-modal-box__footer--sticky{position:fixed;bottom:-200px;z-index:10001;opacity:1;-webkit-transition:bottom .3s ease-in-out .3s;transition:bottom .3s ease-in-out .3s}.tingle-enabled{overflow:hidden;height:100%}.tingle-modal--visible .tingle-modal-box__footer{bottom:0}.tingle-enabled .tingle-content-wrapper{-webkit-filter:blur(15px);filter:blur(15px)}.tingle-modal--visible{visibility:visible;opacity:1}.tingle-modal--visible .tingle-modal-box{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.tingle-modal--overflow{padding-top:5vh}.tingle-btn{display:inline-block;margin:0 .5rem;padding:1rem 2rem;border:none;background-color:grey;box-shadow:none;color:#fff;vertical-align:middle;text-decoration:none;font-size:inherit;font-family:inherit;line-height:normal;cursor:pointer;-webkit-transition:background-color .4s;transition:background-color .4s}.tingle-btn--primary{background-color:#3498db}.tingle-btn--danger{background-color:#e74c3c}.tingle-btn--default{background-color:#34495e}.tingle-btn--pull-left{float:left}.tingle-btn--pull-right{float:right}", ""]);

	// exports


/***/ }
/******/ ]);