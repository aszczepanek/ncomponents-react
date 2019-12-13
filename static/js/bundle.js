(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/ncomponents-react/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(35);
} else {}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components_DatepickerInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatepickerInput", function() { return _components_DatepickerInput__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _components_DatepickerView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _components_Multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multiselect", function() { return _components_Multiselect__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _components_SelectInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectInput", function() { return _components_SelectInput__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _components_Dropdown__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _components_DropdownView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _components_TimepickerInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerInput", function() { return _components_TimepickerInput__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _components_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _components_Tooltip__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony import */ var _components_Popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return _components_Popover__WEBPACK_IMPORTED_MODULE_8__["a"]; });

/* harmony import */ var _utils_asyncItemsProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28);
/* harmony import */ var _utils_asyncItemsProvider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_asyncItemsProvider__WEBPACK_IMPORTED_MODULE_9__);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return toInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isDate; });
function toInt(str){return parseInt(str,10);}function isString(value){return typeof value==='string';}function isNumber(value){return typeof value==='number';}function isDate(value){return Object.prototype.toString.call(value)==='[object Date]';}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return keyCodes; });
/* unused harmony export keyNames */
var keyCodes={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,escape:27,space:32,pageup:33,pagedown:34,end:35,home:36,leftarrow:37,uparrow:38,rightarrow:39,downarrow:40,tilde:192,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,semicolon:186,equal:187,comma:188,dash:189,period:190,slash:191,backslash:220,openbracket:219,closebracket:221,singlequote:222};var keyNames={};var anyKeyCodes=keyCodes;for(var _key in anyKeyCodes){if(keyCodes.hasOwnProperty(_key)){keyNames[anyKeyCodes[_key]]=_key;}}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }

  if (false) {}

  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(36);
} else {}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return domEventHelpers; });
var domEventHelpers={stopPropagationAndPrevent:stopPropagationAndPrevent,stopPropagation:stopPropagation,preventDefault:preventDefault};function stopPropagationAndPrevent(ev){ev.stopPropagation();ev.nativeEvent.stopImmediatePropagation();ev.preventDefault();}function stopPropagation(ev){ev.stopPropagation();ev.nativeEvent.stopImmediatePropagation();}function preventDefault(ev){ev.preventDefault();}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.6
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;

for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/

var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */


function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  } // NOTE: 1 DOM access here


  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */


function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }

  return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */


function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */

function isIE(version) {
  if (version === 11) {
    return isIE11;
  }

  if (version === 10) {
    return isIE10;
  }

  return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */


function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...


  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }

  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */


function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */


function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  } // Here we make sure to give as "start" the element that comes first in the DOM


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1; // Get common ancestor container

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one


  var element1root = getRoot(element1);

  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */


function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */


function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */


function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */


function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */


function getBoundingClientRect(element) {
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11

  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }; // subtract scrollbar size from sizes

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons

  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };
  return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */


function isFixed(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }

  return isFixed(getParentNode(element));
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */


function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }

  var el = element.parentElement;

  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }

  return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */


function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference); // Handle viewport case

  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;

    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));

      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  } // Add paddings


  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-')[1];
  return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */


function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */


function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */


function getOppositePlacement(placement) {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */


function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0]; // Get popper node sizes

  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  }; // depending by the popper placement we have to compute its offsets slightly differently

  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  } // use `filter` to obtain the same behavior of `find`


  return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  } // use `find` + `indexOf` if `findIndex` isn't supported


  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */


function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }

    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */


function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  }; // compute reference element offsets

  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed; // compute the popper offsets

  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback

  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */


function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */


function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;

    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }

  return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */


function destroy() {
  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners(); // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it

  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }

  return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */


function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }

  scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  }); // Scroll event listener on scroll parents

  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */


function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  }); // Reset state

  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */


function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */


function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = ''; // add unit if the value is numeric and is one of the following

    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }

    element.style[prop] = styles[prop] + unit;
  });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];

    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */


function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element

  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */


function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations

  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
  return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */


function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthOddness = reference.width % 2 === popper.width % 2;
  var bothOddWidth = reference.width % 2 === 1 && popper.width % 2 === 1;

  var noRound = function noRound(v) {
    return v;
  };

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthOddness ? Math.round : Math.floor;
  var verticalToInteger = !shouldRound ? noRound : Math.round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;

  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }

  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed

  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.

  var left = void 0,
      top = void 0;

  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }

  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }

  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  } // Attributes


  var attributes = {
    'x-placement': data.placement
  }; // Update `data` attributes, styles and arrowStyles

  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */


function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';

    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }

  return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function arrow(data, options) {
  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //
  // top/left side

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  } // bottom/right side


  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available

  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */


function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }

  return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */


var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */

function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';
  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;

    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;

    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;

    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future

      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }

  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */


function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2]; // If it's not a number it's an operator, I guess

  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;

    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;

      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;

    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */


function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one

  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  }); // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space

  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  } // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.


  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []) // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  }); // Loop trough the offsets arrays and execute the operations

  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */


function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var basePlacement = placement.split('-')[0];
  var offsets = void 0;

  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken

  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  } // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself


  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification

  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed

  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];

      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }

      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];

      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }

      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */


var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: offset,

    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: preventOverflow,

    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],

    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: arrow,

    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: flip,

    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',

    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,

    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,

    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: computeStyle,

    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,

    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',

    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: applyStyle,

    /** @prop {Function} */
    onLoad: applyStyleOnLoad,

    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */

var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods

var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }; // make update() debounced, so that it only runs at most once-per-tick


    this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

    this.options = _extends({}, Popper.Defaults, options); // init state

    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    }; // get reference and popper elements (allow jQuery wrappers)

    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    }); // Refactoring modifiers' list (Object => Array)

    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    }) // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    }); // fire the first update to position the popper in the right place

    this.update();
    var eventsEnabled = this.options.eventsEnabled;

    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  } // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
/* harmony default export */ __webpack_exports__["a"] = (Popper);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(25)))

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateUtils; });
/* harmony import */ var _utils_typeHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
var R_ISO8601_STR=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;// 1        2       3         4          5          6          7          8  9     10      11
var DATETIME_FORMATS={"DAY":["niedziela","poniedzia\u0142ek","wtorek","\u015Broda","czwartek","pi\u0105tek","sobota"],"FIRSTDAYOFWEEK":1,"MONTH":["stycznia","lutego","marca","kwietnia","maja","czerwca","lipca","sierpnia","wrze\u015Bnia","pa\u017Adziernika","listopada","grudnia"],"SHORTDAY":["nd","pn","wt","\u015Br","czw","pt","so"],"SHORTMONTH":["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","pa\u017A","lis","gru"],"STANDALONEMONTH":["stycze\u0144","luty","marzec","kwiecie\u0144","maj","czerwiec","lipiec","sierpie\u0144","wrzesie\u0144","pa\u017Adziernik","listopad","grudzie\u0144"],"WEEKENDRANGE":[5,6]};var DATE_FORMATS_GETTERS={yyyy:dateGetter('FullYear',4,0,false,true),yy:dateGetter('FullYear',2,0,true,true),y:dateGetter('FullYear',1,0,false,true),MMMM:dateStrGetter('Month'),MMM:dateStrGetter('Month',true),MM:dateGetter('Month',2,1),M:dateGetter('Month',1,1),LLLL:dateStrGetter('Month',false,true),dd:dateGetter('Date',2),d:dateGetter('Date',1),HH:dateGetter('Hours',2),H:dateGetter('Hours',1),hh:dateGetter('Hours',2,-12),h:dateGetter('Hours',1,-12),mm:dateGetter('Minutes',2),m:dateGetter('Minutes',1),ss:dateGetter('Seconds',2),s:dateGetter('Seconds',1),// while ISO 8601 requires fractions to be prefixed with `.` or `,`
// we can be just safely rely on using `sss` since we currently don't support single or two digit fractions
sss:dateGetter('Milliseconds',3),EEEE:dateStrGetter('Day'),EEE:dateStrGetter('Day',true),Z:timeZoneGetter,ww:weekGetter(2),w:weekGetter(1)};var DATE_FORMATS_SPLIT=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/;var NUMBER_STRING=/^\-?\d+$/;var namedPatterns={ISO8601:'yyyy-MM-ddTHH:mm:ss.sssZ',ISO8601_SECONDS:'yyyy-MM-ddTHH:mm:ssZ',"dateTime":"d.MM.yyyy HH:mm","fullDate":"EEEE, d MMMM y","longDate":"d MMMM y","medium":"d MMM y HH:mm:ss","mediumDate":"d.MM.yyyy","mediumTime":"HH:mm:ss","short":"dd.MM.y HH:mm","shortDate":"dd.MM.y","shortTime":"HH:mm"};var dateUtils={namedPatterns:namedPatterns,parseISO:parseISO,formatDate:formatDate};function parseISO(string){var match;if(match=string.match(R_ISO8601_STR)){var date=new Date(0),tzHour=0,tzMin=0,dateSetter=match[8]?date.setUTCFullYear:date.setFullYear,timeSetter=match[8]?date.setUTCHours:date.setHours;if(match[9]){tzHour=Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_0__[/* toInt */ "d"])(match[9]+match[10]);tzMin=Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_0__[/* toInt */ "d"])(match[9]+match[11]);}dateSetter.call(date,Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_0__[/* toInt */ "d"])(match[1]),Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_0__[/* toInt */ "d"])(match[2])-1,Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_0__[/* toInt */ "d"])(match[3]));var h=Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_0__[/* toInt */ "d"])(match[4]||0)-tzHour;var m=Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_0__[/* toInt */ "d"])(match[5]||0)-tzMin;var s=Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_0__[/* toInt */ "d"])(match[6]||0);var ms=Math.round(parseFloat('0.'+(match[7]||0))*1000);timeSetter.call(date,h,m,s,ms);return date;}return undefined;}function formatDate(date,format){var text='',parts=[],fn,match;format=format||'mediumDate';format=namedPatterns[format]||format;if(Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "c"])(date)){date=NUMBER_STRING.test(date)?Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_0__[/* toInt */ "d"])(date):parseISO(date);}if(Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_0__[/* isNumber */ "b"])(date)){date=new Date(date);}if(!Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_0__[/* isDate */ "a"])(date)||!isFinite(date.getTime())){return date;}var remainingFormat=format;while(remainingFormat){match=DATE_FORMATS_SPLIT.exec(remainingFormat);if(match){parts=concat(parts,match,1);remainingFormat=parts.pop();}else{parts.push(remainingFormat);remainingFormat=undefined;}}var dateTimezoneOffset=date.getTimezoneOffset();parts.forEach(function(value){fn=DATE_FORMATS_GETTERS[value];text+=fn?fn(date,DATETIME_FORMATS,dateTimezoneOffset):value==="''"?"'":value.replace(/(^'|'$)/g,'').replace(/''/g,"'");});return text;};function concat(array1,array2,index){return array1.concat([].slice.call(array2,index));}function padNumber(num,digits,trim,negWrap){var neg='';if(num<0||negWrap&&num<=0){if(negWrap){num=-num+1;}else{num=-num;neg='-';}}num=''+num;while(num.length<digits){num='0'+num;}if(trim){num=num.substr(num.length-digits);}return neg+num;}function dateGetter(name,size,offset,trim,negWrap){offset=offset||0;return function(date){var value=date['get'+name]();if(offset){if(offset>0||value>-offset){value+=offset;}}if(value===0&&offset==-12)value=12;return padNumber(value,size,trim,negWrap);};}function dateStrGetter(name,shortForm,standAlone){return function(date,formats){var value=date['get'+name]();var propPrefix=(standAlone?'STANDALONE':'')+(shortForm?'SHORT':'');var get=uppercase(propPrefix+name);return formats[get][value];};}function timeZoneGetter(date,formats,offset){var zone=-1*offset;var paddedZone=zone>=0?"+":"";paddedZone+=padNumber(Math[zone>0?'floor':'ceil'](zone/60),2)+padNumber(Math.abs(zone%60),2);return paddedZone;}function weekGetter(size){return function(date){var firstThurs=getFirstThursdayOfYear(date.getFullYear()),thisThurs=getThursdayThisWeek(date);var diff=+thisThurs-+firstThurs,result=1+Math.round(diff/6.048e8);// 6.048e8 ms per week
return padNumber(result,size);};}function getFirstThursdayOfYear(year){// 0 = index of January
var dayOfWeekOnFirst=new Date(year,0,1).getDay();// 4 = index of Thursday (+1 to account for 1st = 5)
// 11 = index of *next* Thursday (+1 account for 1st = 12)
return new Date(year,0,(dayOfWeekOnFirst<=4?5:12)-dayOfWeekOnFirst);}function getThursdayThisWeek(datetime){return new Date(datetime.getFullYear(),datetime.getMonth(),// 4 = index of Thursday
datetime.getDate()+(4-datetime.getDay()));}function uppercase(string){return Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "c"])(string)?string.toUpperCase():string;}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBodyPortal; });
function toClassNames(obj){return Object.keys(obj).filter(function(x){return obj[x];}).join(' ');}function getBodyPortal(){var id='ncomponents-react-body-portal';var el=document.getElementById(id);if(!el){el=document.createElement('div');el.id=id;// el.style.position = 'absolute';
// el.style.top = '0px';
// el.style.left = '0px';
// el.style.width = '100vh';
document.body.appendChild(el);}return el;}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectUtils; });
var selectUtils={formatItemDisplay:formatItemDisplay};function formatItemDisplay(item,display){if(typeof display!=="function"){if(typeof item==="string")return item;if(typeof item==="number")return item.toString();}var displayValue;if(display){if(typeof display==="string"){displayValue=item[display];}else if(typeof display==="function"){try{displayValue=display(item);}catch(e){console.error(e);return"Display function error";}}else{return"Invalid display parameter";}}else{displayValue=item["label"];}if(typeof displayValue==="string")return displayValue;if(typeof displayValue==="number")return displayValue.toString();return(displayValue||"").toString();}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateAdapterFactory; });
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _utils_typeHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
var DateAdapterFactory=/*#__PURE__*/function(){function DateAdapterFactory(){Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this,DateAdapterFactory);this.adapters={};this.initAdapters();}Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(DateAdapterFactory,[{key:"getForFormat",value:function getForFormat(format){if(!this.adapters[format]){throw new Error('dateAdapterFactory: format not supported - '+format);}return this.adapters[format];}},{key:"initAdapters",value:function initAdapters(){this.createAdapter('iso',_utils_dateUtils__WEBPACK_IMPORTED_MODULE_2__[/* dateUtils */ "a"].parseISO);this.createAdapter('ISO',_utils_dateUtils__WEBPACK_IMPORTED_MODULE_2__[/* dateUtils */ "a"].parseISO);this.createAdapter('iso8601',_utils_dateUtils__WEBPACK_IMPORTED_MODULE_2__[/* dateUtils */ "a"].parseISO);this.createAdapter('ISO8601',_utils_dateUtils__WEBPACK_IMPORTED_MODULE_2__[/* dateUtils */ "a"].parseISO);this.createAdapter('ISO8601_SECONDS',_utils_dateUtils__WEBPACK_IMPORTED_MODULE_2__[/* dateUtils */ "a"].parseISO);this.createAdapter('yyyy-MM-dd',_utils_dateUtils__WEBPACK_IMPORTED_MODULE_2__[/* dateUtils */ "a"].parseISO);this.createAdapter('yyyy-MM-ddTHH:mm',_utils_dateUtils__WEBPACK_IMPORTED_MODULE_2__[/* dateUtils */ "a"].parseISO);this.createAdapter('yyyy-MM-ddTHH:mm:ss',_utils_dateUtils__WEBPACK_IMPORTED_MODULE_2__[/* dateUtils */ "a"].parseISO);this.createAdapter('d.MM.yyyy',parserForDayMonthYearUsingRegex(/(\d{1,2})\.(\d\d)\.(\d{4})/));this.createAdapter('HH:mm',parserForHourMinuteUsingRegex(/(\d\d):?(\d\d)/));this.createAdapter('HH:mm:ss',parserForHourMinuteSecondUsingRegex(/(\d\d):?(\d\d):?(\d\d)/));this.createAdapter('Date',function parse(value){return Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_3__[/* isDate */ "a"])(value)?value:undefined;});this.createAdapter('unix',unixTimestampParser);}},{key:"createAdapter",value:function createAdapter(formatName,parseFn){var formatPattern=_utils_dateUtils__WEBPACK_IMPORTED_MODULE_2__[/* dateUtils */ "a"].namedPatterns[formatName]||formatName;this.adapters[formatName]={parse:parseFn,format:this.createFormatter(formatPattern),formatName:formatName,formatPattern:formatPattern};}},{key:"createFormatter",value:function createFormatter(formatPattern){if(formatPattern=='Date'){return function(date){return date;};}else if(formatPattern=="unix"){return function(date){if(typeof date==='string'){date=new Date(date);}return Math.floor(date.getTime()/1000);};}else{return function(date){return _utils_dateUtils__WEBPACK_IMPORTED_MODULE_2__[/* dateUtils */ "a"].formatDate(date,formatPattern);};}}}]);return DateAdapterFactory;}();function parserForDayMonthYearUsingRegex(regex){return function parseDayMonthYear(str){var match;if(match=str.match(regex)){// jshint ignore:line
return new Date(Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_3__[/* toInt */ "d"])(match[3]),Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_3__[/* toInt */ "d"])(match[2])-1,Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_3__[/* toInt */ "d"])(match[1]));}return undefined;};}function parserForHourMinuteUsingRegex(regex){return function parseHourMinute(str){var match;if(match=str.match(regex)){// jshint ignore:line
return new Date(1970,0,1,Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_3__[/* toInt */ "d"])(match[1]),Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_3__[/* toInt */ "d"])(match[2]));}return undefined;};}function parserForHourMinuteSecondUsingRegex(regex){return function parseHourMinuteSecond(str){var match;if(match=str.match(regex)){// jshint ignore:line
return new Date(1970,0,1,Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_3__[/* toInt */ "d"])(match[1]),Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_3__[/* toInt */ "d"])(match[2]),Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_3__[/* toInt */ "d"])(match[3]));}return undefined;};}function unixTimestampParser(unixTimestamp){return new Date(Number(unixTimestamp)*1000);}var dateAdapterFactory=new DateAdapterFactory();

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerView; });
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12);
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13);
/* harmony import */ var _utils_typeHelpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8);
/* harmony import */ var _utils_domEventHelpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11);
/* harmony import */ var _utils_reactHelpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14);
var DatepickerView=/*#__PURE__*/function(_React$Component){Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(DatepickerView,_React$Component);function DatepickerView(props){var _this;Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this,DatepickerView);_this=Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this,Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(DatepickerView).call(this,props));_this.popper=void 0;_this.rootEl=react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();_this.state={currentDate:_this.getFocusDate()};_this.onMouseWheel=_this.onMouseWheel.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this)));_this.prevMonth=_this.prevMonth.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this)));_this.nextMonth=_this.nextMonth.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this)));return _this;}Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(DatepickerView,[{key:"render",value:function render(){return react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.createPortal(this.renderView(),Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_13__[/* getBodyPortal */ "a"])());}},{key:"renderView",value:function renderView(){var yearMonthHeader=_utils_dateUtils__WEBPACK_IMPORTED_MODULE_10__[/* dateUtils */ "a"].formatDate(this.state.currentDate,"LLLL yyyy");return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:DatepickerView.rootClassName,onClick:_utils_domEventHelpers__WEBPACK_IMPORTED_MODULE_12__[/* domEventHelpers */ "a"].stopPropagationAndPrevent,onMouseDown:_utils_domEventHelpers__WEBPACK_IMPORTED_MODULE_12__[/* domEventHelpers */ "a"].stopPropagationAndPrevent,onWheel:this.onMouseWheel,ref:this.rootEl},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("thead",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{className:DatepickerView.btnClassName,onClick:this.prevMonth},DatepickerView.prevMonthHtml)),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th",{colSpan:5},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{className:DatepickerView.btnClassName},yearMonthHeader)),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{className:DatepickerView.btnClassName,onClick:this.nextMonth},DatepickerView.nextMonthHtml))),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr",null,this.renderDaysOfWeek())),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody",null,this.renderMonth())));}},{key:"renderDaysOfWeek",value:function renderDaysOfWeek(){return this.generateDaysInWeek().map(function(x){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th",{key:x.label},x.label);});}},{key:"renderMonth",value:function renderMonth(){var _this2=this;return this.generateMonth().map(function(week,i){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr",{key:i},week.map(function(d){var _toClassNames;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td",{key:d.label},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button",{onClick:function onClick(){return _this2.select(d);},className:Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_13__[/* toClassNames */ "b"])((_toClassNames={},Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_toClassNames,DatepickerView.btnClassName,true),Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_toClassNames,DatepickerView.btnSelectedClassName,d.isSelected),Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_toClassNames,"muted",d.isMuted),_toClassNames))},d.label));}));});}},{key:"componentDidMount",value:function componentDidMount(){this.popper=new popper_js__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"](this.props.popoverRef,this.rootEl.current,{placement:this.props.placement});this.popper.scheduleUpdate();}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(this.popper){this.popper.destroy();}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var propValueChanged=false;if(Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_11__[/* isDate */ "a"])(prevProps.value)&&Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_11__[/* isDate */ "a"])(this.props.value)){propValueChanged=prevProps.value.getTime()!=this.props.value.getTime();}else{propValueChanged=prevProps.value!=this.props.value;}if(propValueChanged){this.setState({currentDate:this.getFocusDate()});}}},{key:"getFocusDate",value:function getFocusDate(){if(typeof this.props.value==="number"){// Assume unix
return new Date(this.props.value*1000);}return _utils_dateUtils__WEBPACK_IMPORTED_MODULE_10__[/* dateUtils */ "a"].parseISO(this.props.value||"")||new Date();}},{key:"onMouseWheel",value:function onMouseWheel(ev){if(!ev.shiftKey)return;ev.stopPropagation();var delta=ev.deltaY>0?1:-1;if(delta<0){ev.altKey?this.prevYear():this.prevMonth();}else{ev.altKey?this.nextYear():this.nextMonth();}}},{key:"prevMonth",value:function prevMonth(){var date=new Date(this.state.currentDate);date.setMonth(date.getMonth()-1);this.setState({currentDate:date});}},{key:"nextMonth",value:function nextMonth(){var date=new Date(this.state.currentDate);date.setMonth(date.getMonth()+1);this.setState({currentDate:date});}},{key:"prevYear",value:function prevYear(){var date=new Date(this.state.currentDate);date.setFullYear(date.getFullYear()-1);this.setState({currentDate:date});}},{key:"nextYear",value:function nextYear(){var date=new Date(this.state.currentDate);date.setFullYear(date.getFullYear()+1);this.setState({currentDate:date});}},{key:"select",value:function select(d){this.props.onSelect&&this.props.onSelect(d.date);}},{key:"generateDaysInWeek",value:function generateDaysInWeek(){var daysOfWeek=[];var dayNames={};var d=new Date();for(var i=0;i<7;i++){dayNames[d.getDay()]=_utils_dateUtils__WEBPACK_IMPORTED_MODULE_10__[/* dateUtils */ "a"].formatDate(d,"EEE");d.setDate(d.getDate()+1);}var idx=DatepickerView.firstDayOfWeek;for(i=0;i<7;i++){daysOfWeek.push({label:dayNames[idx]});idx=(idx+1)%7;}return daysOfWeek;}},{key:"generateMonth",value:function generateMonth(){var currentModel=this.getFocusDate();var date=this.state.currentDate;var month=date.getMonth();var year=date.getFullYear();var d=new Date(date.getFullYear(),date.getMonth(),1);if(d.getDay()===0&&d.getDay()!=DatepickerView.firstDayOfWeek){d.setDate(d.getDate()-7+DatepickerView.firstDayOfWeek);}else{d.setDate(d.getDate()-d.getDay()+DatepickerView.firstDayOfWeek);}var weeks=[];while(d.getMonth()<=month&&d.getFullYear()<=year||d.getTime()<date.getTime()){var week=[];for(var i=0;i<7;i++){week.push({date:new Date(d),label:d.getDate(),isMuted:date.getMonth()!=d.getMonth()||date.getFullYear()!=d.getFullYear(),isSelected:currentModel&&currentModel.getDate()==d.getDate()&&currentModel.getMonth()==d.getMonth()&&currentModel.getFullYear()==d.getFullYear()});d.setDate(d.getDate()+1);}weeks.push(week);}return weeks;}}]);return DatepickerView;}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);DatepickerView.rootClassName="n-datepicker-view";DatepickerView.btnClassName="";DatepickerView.btnSelectedClassName="selected";DatepickerView.prevMonthHtml="<";DatepickerView.nextMonthHtml=">";DatepickerView.firstDayOfWeek=1;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownView; });
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
/* harmony import */ var _utils_selectUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15);
/* harmony import */ var _utils_domEventHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var _utils_reactHelpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14);
var DropdownView=/*#__PURE__*/function(_React$Component){Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(DropdownView,_React$Component);function DropdownView(props){var _this;Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this,DropdownView);_this=Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this,Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(DropdownView).call(this,props));_this.popper=void 0;_this.rootEl=react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();_this.onDocumentClick=_this.onDocumentClick.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this)));return _this;}Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(DropdownView,[{key:"render",value:function render(){if(this.props.renderInBody){return react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.createPortal(this.renderView(),Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_11__[/* getBodyPortal */ "a"])());}else{return this.renderView();}}},{key:"renderView",value:function renderView(){var _this2=this;var minWidth=this.props.popoverRef.getBoundingClientRect().width;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:DropdownView.rootClassName,onMouseDown:_utils_domEventHelpers__WEBPACK_IMPORTED_MODULE_10__[/* domEventHelpers */ "a"].stopPropagationAndPrevent,ref:this.rootEl,style:{minWidth:minWidth}},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul",null,this.props.items.map(function(x,i){return _this2.renderItem(x,i);})));}},{key:"renderItem",value:function renderItem(item,index){var _this3=this;if(this.props.renderItem){return this.props.renderItem(item,index);}return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li",{key:index,onClick:function onClick(){return _this3.props.onSelect(item);}},this.props.renderDisplay?this.props.renderDisplay(item,index):this.formatItemDisplay(item));}},{key:"componentDidMount",value:function componentDidMount(){this.popper=new popper_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"](this.props.popoverRef,this.rootEl.current,{placement:this.props.placement});this.popper.scheduleUpdate();document.addEventListener("click",this.onDocumentClick);}},{key:"componentDidUpdate",value:function componentDidUpdate(){this.popper&&this.popper.update();}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(this.popper){this.popper.destroy();}document.removeEventListener("click",this.onDocumentClick);}},{key:"formatItemDisplay",value:function formatItemDisplay(item){return _utils_selectUtils__WEBPACK_IMPORTED_MODULE_9__[/* selectUtils */ "a"].formatItemDisplay(item,this.props.display);}},{key:"onDocumentClick",value:function onDocumentClick(){this.props.onOutsideClick&&this.props.onOutsideClick();}}]);return DropdownView;}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);DropdownView.rootClassName="n-dropdown";

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inferDateFormat; });
/* harmony import */ var _utils_typeHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
var regexInferChain=[{pattern:/^\d\d:\d\d$/,format:'HH:mm'},{pattern:/^\d\d:\d\d:\d\d$/,format:'HH:mm:ss'},{pattern:/^\d{4}-\d\d-\d\d$/,format:'yyyy-MM-dd'},{pattern:/^\d{4}-\d\d-\d\dT\d\d:\d\d$/,format:'yyyy-MM-ddTHH:mm'},{pattern:/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d$/,format:'yyyy-MM-ddTHH:mm:ss'},{pattern:/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,format:'ISO8601'}];function inferDateFormat(value){if(Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_0__[/* isDate */ "a"])(value))return'Date';if(!Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "c"])(value))return undefined;for(var i=0;i<regexInferChain.length;i++){var formatCandidate=regexInferChain[i];if(formatCandidate.pattern.test(value))return formatCandidate.format;}return undefined;}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return datePartUpdater; });
/* harmony import */ var _utils_typeHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
var options={timeForDefaultDate:{hours:12,minutes:0}};var datePartUpdater={options:options,setDate:setDate,setTime:setTime};function setDate(originalDate,valueToSet){validateInput(originalDate,valueToSet);var year=valueToSet.getFullYear();var month=valueToSet.getMonth();var date=valueToSet.getDate();var result=originalDate?new Date(originalDate):createDefaultForDate(valueToSet);result.setFullYear(year);result.setMonth(month);result.setDate(date);return result;}function setTime(originalDate,valueToSet){validateInput(originalDate,valueToSet);var hours=valueToSet.getHours();var minutes=valueToSet.getMinutes();var seconds=valueToSet.getSeconds();var result=originalDate?new Date(originalDate):createDefaultForTime(valueToSet);result.setHours(hours);result.setMinutes(minutes);result.setSeconds(seconds);result.setMilliseconds(0);return result;}function createDefaultForDate(valueToSet){var now=new Date();var year=now.getFullYear();var month=now.getMonth();var date=now.getDate();if(year==valueToSet.getFullYear()&&month==valueToSet.getMonth()&&date==valueToSet.getDate()){return new Date();}else{return new Date(valueToSet.getFullYear(),valueToSet.getMonth(),valueToSet.getDate(),options.timeForDefaultDate.hours,options.timeForDefaultDate.minutes,0);}}function createDefaultForTime(valueToSet){return new Date();}function validateInput(originalDate,valueToSet){assertNotNull(valueToSet,"valueToSet");assertIsNullOrValidDate(valueToSet,"valueToSet");assertIsNullOrValidDate(originalDate,"originalDate");}function assertNotNull(value,paramName){if(value===null||value===undefined)error(paramName+" is null");}function assertIsNullOrValidDate(value,paramName){if(value===null||value===undefined)return;if(!Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_0__[/* isDate */ "a"])(value))error(paramName+" is not Date type");if(isNaN(value))error(paramName+" is invalid date object");}function error(msg){throw"datePartUpdater: "+msg;}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopperTrigger; });
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var PopperTrigger=/*#__PURE__*/function(_React$Component){Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(PopperTrigger,_React$Component);function PopperTrigger(props){var _this;Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this,PopperTrigger);_this=Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this,Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(PopperTrigger).call(this,props));_this.handleClick=_this.handleClick.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this)));_this.handleMouseOver=_this.handleMouseOver.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this)));_this.handleMouseOut=_this.handleMouseOut.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this)));_this.handleFocus=_this.handleFocus.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this)));_this.handleBlur=_this.handleBlur.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this)));_this.handleDocumentClick=_this.handleDocumentClick.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this)));_this.state={show:false};return _this;}Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(PopperTrigger,[{key:"render",value:function render(){var _this$props=this.props,trigger=_this$props.trigger,disabled=_this$props.disabled;var show=this.state.show;var child=this.getChildAsElement();var triggers=normalizeTriggers(trigger);var triggerProps={};if(triggers.indexOf("click")>=0){triggerProps.onClick=this.handleClick;}if(triggers.indexOf("hover")>=0){triggerProps.onMouseOver=this.handleMouseOver;triggerProps.onMouseOut=this.handleMouseOut;}if(triggers.indexOf("focus")>=0){triggerProps.onFocus=this.handleFocus;triggerProps.onBlur=this.handleBlur;}return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment,null,Object(react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"])(child,triggerProps),show&&!disabled&&this.renderContent());}},{key:"renderContent",value:function renderContent(){var content=this.props.content;if(typeof content==="function"){return content();}else{return content;}}},{key:"hide",value:function hide(){this.setState({show:false});}},{key:"show",value:function show(){this.setState({show:true});}},{key:"toggle",value:function toggle(){this.state.show?this.hide():this.show();}},{key:"componentDidMount",value:function componentDidMount(){if(this.props.closeOnDocumentClick){document.addEventListener("click",this.handleDocumentClick);}}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(this.props.closeOnDocumentClick){document.removeEventListener("click",this.handleDocumentClick);}}},{key:"handleDocumentClick",value:function handleDocumentClick(){this.hide();}},{key:"handleClick",value:function handleClick(ev){this.toggle();ev.nativeEvent.stopImmediatePropagation();var _this$getChildProps=this.getChildProps(),onClick=_this$getChildProps.onClick;onClick&&onClick(ev);}},{key:"handleMouseOver",value:function handleMouseOver(ev){this.show();var _this$getChildProps2=this.getChildProps(),onMouseOver=_this$getChildProps2.onMouseOver;onMouseOver&&onMouseOver(ev);}},{key:"handleMouseOut",value:function handleMouseOut(ev){this.hide();var _this$getChildProps3=this.getChildProps(),onMouseOut=_this$getChildProps3.onMouseOut;onMouseOut&&onMouseOut(ev);}},{key:"handleFocus",value:function handleFocus(ev){this.show();var _this$getChildProps4=this.getChildProps(),onFocus=_this$getChildProps4.onFocus;onFocus&&onFocus(ev);}},{key:"handleBlur",value:function handleBlur(ev){this.hide();var _this$getChildProps5=this.getChildProps(),onBlur=_this$getChildProps5.onBlur;onBlur&&onBlur(ev);}},{key:"getChildAsElement",value:function getChildAsElement(){return typeof this.props.children==="object"?react__WEBPACK_IMPORTED_MODULE_6___default.a.Children.only(this.props.children):react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",null,this.props.children);}},{key:"getChildProps",value:function getChildProps(){return this.getChildAsElement().props;}}]);return PopperTrigger;}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);function normalizeTriggers(trigger){return Array.isArray(trigger)?trigger:[trigger];}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerInput; });
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_dateAdapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _DatepickerView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19);
/* harmony import */ var _utils_typeHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var _utils_dateFormatInferer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21);
/* harmony import */ var _utils_datePartUpdater__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22);
/* harmony import */ var _utils_keyCodeMap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9);
var DatepickerInput=/*#__PURE__*/function(_Component){Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(DatepickerInput,_Component);function DatepickerInput(props){var _this;Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this,DatepickerInput);_this=Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this,Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(DatepickerInput).call(this,props));_this.datepicker=void 0;_this.inputRef=react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();_this.modelDateAdapter=void 0;_this.viewDateAdapter=void 0;_this.state={isInputFocused:false,inputValue:"",datepickerVisible:false};_this.modelDateAdapter=_utils_dateAdapter__WEBPACK_IMPORTED_MODULE_8__[/* dateAdapterFactory */ "a"].getForFormat(_this.props.modelFormat||DatepickerInput.defaultModelFormat);_this.viewDateAdapter=_utils_dateAdapter__WEBPACK_IMPORTED_MODULE_8__[/* dateAdapterFactory */ "a"].getForFormat(_this.props.viewFormat||DatepickerInput.defaultViewFormat);_this.onDateSelect=_this.onDateSelect.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this)));_this.onFocus=_this.onFocus.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this)));_this.onBlur=_this.onBlur.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this)));_this.onChange=_this.onChange.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this)));_this.onKeydown=_this.onKeydown.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this)));_this.onMouseWheel=_this.onMouseWheel.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this)));return _this;}Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(DatepickerInput,[{key:"render",value:function render(){var viewValue=this.getViewValue();var datepickerVisible=this.state.datepickerVisible;var datepickerView=datepickerVisible?this.renderDatepickerView():undefined;var _this$props=this.props,value=_this$props.value,onChange=_this$props.onChange,modelFormat=_this$props.modelFormat,viewFormat=_this$props.viewFormat,placement=_this$props.placement,className=_this$props.className,restProps=Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_this$props,["value","onChange","modelFormat","viewFormat","placement","className"]);var classNames=[className,DatepickerInput.rootClassName].filter(Boolean).join(" ");return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input",Object.assign({},restProps,{className:classNames,type:"text",ref:this.inputRef,value:viewValue,onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.onChange,onWheel:this.onMouseWheel,onKeyDown:this.onKeydown})),datepickerView);}},{key:"renderDatepickerView",value:function renderDatepickerView(){var placement=this.props.placement||DatepickerInput.defaultPlacement;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_DatepickerView__WEBPACK_IMPORTED_MODULE_9__[/* DatepickerView */ "a"],{placement:placement,popoverRef:this.inputRef.current,value:this.props.value,onSelect:this.onDateSelect});}},{key:"onFocus",value:function onFocus(ev){this.setState({isInputFocused:true,inputValue:ev.target.value,datepickerVisible:true});this.props.onFocus&&this.props.onFocus(ev);}},{key:"onBlur",value:function onBlur(ev){this.setState({isInputFocused:false,inputValue:"",datepickerVisible:false});this.props.onBlur&&this.props.onBlur(ev);}},{key:"onChange",value:function onChange(ev){this.setState({inputValue:ev.target.value});var parsedValue=this.parseInputValue(ev.target.value);this.updateModel(parsedValue);}},{key:"onKeydown",value:function onKeydown(ev){switch(ev.keyCode){case _utils_keyCodeMap__WEBPACK_IMPORTED_MODULE_13__[/* keyCodes */ "a"].downarrow:ev.preventDefault();ev.stopPropagation();if(ev.shiftKey){this.addMonth(-1);}else{this.addDate(-1);}break;case _utils_keyCodeMap__WEBPACK_IMPORTED_MODULE_13__[/* keyCodes */ "a"].uparrow:ev.preventDefault();ev.stopPropagation();if(ev.shiftKey){this.addMonth(1);}else{this.addDate(1);}break;default:break;}this.props.onKeyDown&&this.props.onKeyDown(ev);}},{key:"onMouseWheel",value:function onMouseWheel(ev){if(!ev.shiftKey)return;ev.stopPropagation();var delta=ev.deltaY<0?1:-1;if(ev.altKey){this.addMonth(delta);}else{this.addDate(delta);}}},{key:"onDateSelect",value:function onDateSelect(value){var newModel=this.getModelWithDatePartUpdated(value);this.updateModel(newModel);if(this.inputRef.current){this.inputRef.current.blur();}}},{key:"getViewValue",value:function getViewValue(){if(this.state.isInputFocused){return this.state.inputValue;}else{var date=this.convertToDateModelValue(this.props.value);if(this.props.value&&!date)return"?";else if(date)return this.viewDateAdapter.format(date);else return"";}}},{key:"parseInputValue",value:function parseInputValue(value){if(!value)return undefined;// TODO configurable
var newDate=this.viewDateAdapter.parse(value);if(!newDate){return this.props.value;}else{var newModelValue=this.getModelWithDatePartUpdated(newDate);return this.modelDateAdapter.format(newModelValue);}}},{key:"getModelWithDatePartUpdated",value:function getModelWithDatePartUpdated(newDate){var modelDate=this.convertToDateModelValue(this.props.value);return _utils_datePartUpdater__WEBPACK_IMPORTED_MODULE_12__[/* datePartUpdater */ "a"].setDate(modelDate,newDate);}},{key:"updateModel",value:function updateModel(newValue){var newModel=this.modelDateAdapter.format(newValue||"");if(this.props.onChange&&newModel!=this.props.value){this.props.onChange(newModel);}}},{key:"convertToDateModelValue",value:function convertToDateModelValue(value){if(!value)return undefined;if(Object(_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_10__[/* isDate */ "a"])(value))return value;var result=this.modelDateAdapter.parse(value);if(!result){var inferredDateFormat=Object(_utils_dateFormatInferer__WEBPACK_IMPORTED_MODULE_11__[/* inferDateFormat */ "a"])(value);if(inferredDateFormat){var adapter=_utils_dateAdapter__WEBPACK_IMPORTED_MODULE_8__[/* dateAdapterFactory */ "a"].getForFormat(inferredDateFormat);result=adapter.parse(value);}}return result;}},{key:"addDate",value:function addDate(delta){var curDate=this.convertToDateModelValue(this.props.value);if(curDate){curDate.setDate(curDate.getDate()+delta);if(this.state.isInputFocused){this.setState({inputValue:this.viewDateAdapter.format(curDate)});}this.updateModel(curDate);}}},{key:"addMonth",value:function addMonth(delta){var curDate=this.convertToDateModelValue(this.props.value);if(curDate){curDate.setMonth(curDate.getMonth()+delta);if(this.state.isInputFocused){this.setState({inputValue:this.viewDateAdapter.format(curDate)});}this.updateModel(curDate);}}},{key:"show",value:function show(){if(this.state.datepickerVisible)return;this.setState({datepickerVisible:true});}},{key:"hide",value:function hide(){if(!this.state.datepickerVisible)return;this.setState({datepickerVisible:false});}},{key:"toggle",value:function toggle(){this.setState({datepickerVisible:!this.state.datepickerVisible});}}]);return DatepickerInput;}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);DatepickerInput.rootClassName="n-datepicker";DatepickerInput.defaultModelFormat="ISO8601";DatepickerInput.defaultViewFormat="yyyy-MM-dd";DatepickerInput.defaultPlacement="bottom-start";

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dropdown; });
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _DropdownView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20);
var Dropdown=/*#__PURE__*/function(_React$Component){Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Dropdown,_React$Component);function Dropdown(props){var _this;Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this,Dropdown);_this=Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this,Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Dropdown).call(this,props));_this.clientX=0;_this.clientY=0;_this.onClick=_this.onClick.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this)));_this.onMousemove=_this.onMousemove.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this)));_this.onContextmenu=_this.onContextmenu.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this)));_this.hide=_this.hide.bind(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this)));_this.state={dropdownVisible:false};return _this;}Object(C_Home_Repo_ncomponents_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Dropdown,[{key:"render",value:function render(){var newChild=react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(this.props.children,this.getClonedChildProps());var dropdownView=this.renderDropdownView();return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment,null,newChild,dropdownView);}},{key:"renderDropdownView",value:function renderDropdownView(){if(!this.state.dropdownVisible)return null;if(!this.state.popperRef)return null;var placement=this.props.placement||Dropdown.defaultPlacement;var renderInBody=typeof this.props.renderInBody==="undefined"?Dropdown.defaultRenderInBody:this.props.renderInBody;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_DropdownView__WEBPACK_IMPORTED_MODULE_8__[/* DropdownView */ "a"],{items:this.props.items,placement:placement,popoverRef:this.state.popperRef,onSelect:this.props.onSelect,onOutsideClick:this.hide,display:this.props.display,renderInBody:renderInBody,renderDisplay:this.props.renderDisplay,renderItem:this.props.renderItem});}},{key:"getClonedChildProps",value:function getClonedChildProps(){var result={};if(this.props.contextMenu){result.onContextMenu=this.onContextmenu;result.onMouseMove=this.onMousemove;}else{result.onClick=this.onClick;}return result;}},{key:"onClick",value:function onClick(){this.toggle();}},{key:"onContextmenu",value:function onContextmenu(ev){ev.stopPropagation();ev.preventDefault();if(this.state.dropdownVisible){this.updatePopperRef();}else{this.show();}this.props.children.props;}},{key:"onMousemove",value:function onMousemove(ev){this.clientX=ev.clientX;this.clientY=ev.clientY;}},{key:"getPopperRef",value:function getPopperRef(){var _this2=this;if(this.props.contextMenu){return{getBoundingClientRect:function getBoundingClientRect(){return{width:0,height:0,left:_this2.clientX,right:_this2.clientX,top:_this2.clientY,bottom:_this2.clientY};},clientHeight:0,clientWidth:0};}else{return react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(this);}}},{key:"updatePopperRef",value:function updatePopperRef(){this.setState({popperRef:this.getPopperRef()});}},{key:"show",value:function show(){if(this.state.dropdownVisible)return;this.setState({dropdownVisible:true,popperRef:this.getPopperRef()});}},{key:"hide",value:function hide(){if(!this.state.dropdownVisible)return;this.setState({dropdownVisible:false});}},{key:"toggle",value:function toggle(){this.state.dropdownVisible?this.hide():this.show();}}]);return Dropdown;}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);Dropdown.defaultPlacement="bottom-start";Dropdown.defaultRenderInBody=false;

/***/ }),
/* 28 */
/***/ (function(module, exports) {



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/lib/utils/keyCodeMap.ts
var keyCodeMap = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(10);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/popper.js/dist/esm/popper.js
var popper = __webpack_require__(12);

// EXTERNAL MODULE: ./src/lib/utils/domEventHelpers.ts
var domEventHelpers = __webpack_require__(11);

// EXTERNAL MODULE: ./src/lib/utils/selectUtils.ts
var selectUtils = __webpack_require__(15);

// EXTERNAL MODULE: ./src/lib/utils/reactHelpers.ts
var reactHelpers = __webpack_require__(14);

// CONCATENATED MODULE: ./src/lib/components/SelectView.tsx
var SelectView_SelectView=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(SelectView,_React$Component);function SelectView(props){var _this;Object(classCallCheck["a" /* default */])(this,SelectView);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(SelectView).call(this,props));_this.popper=void 0;_this.rootEl=react_default.a.createRef();_this.currentAsyncItemsPromise=void 0;_this.unmounted=false;_this.state={focusedIndex:-1,items:[],asyncPending:false,asyncError:false};_this.onDocumentClick=_this.onDocumentClick.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));return _this;}Object(createClass["a" /* default */])(SelectView,[{key:"render",value:function render(){return react_dom_default.a.createPortal(this.renderView(),Object(reactHelpers["a" /* getBodyPortal */])());}},{key:"renderView",value:function renderView(){var minWidth=this.props.popoverRef.getBoundingClientRect().width;return react_default.a.createElement("div",{className:SelectView.rootClassName,onMouseDown:domEventHelpers["a" /* domEventHelpers */].stopPropagationAndPrevent,ref:this.rootEl,style:{minWidth:minWidth}},react_default.a.createElement("ul",null,this.renderMessageItem(),this.renderNoResultMessage(),this.renderItems()));}},{key:"renderItems",value:function renderItems(){var _this2=this;return this.state.items.map(function(item,i){var itemKey=_this2.getItemKey(item);var focused=i==_this2.state.focusedIndex;return react_default.a.createElement("li",{key:itemKey,className:Object(reactHelpers["b" /* toClassNames */])({focused:focused}),onClick:function onClick(){return _this2.select(item);}},_this2.formatItemDisplay(item));});}},{key:"renderMessageItem",value:function renderMessageItem(){if(this.state.asyncError){var asyncDataProvider=this.getAsyncDataProvider();return react_default.a.createElement("li",null,asyncDataProvider&&asyncDataProvider.errorFeddback||"Błąd");}if(this.state.asyncPending){var _asyncDataProvider=this.getAsyncDataProvider();return react_default.a.createElement("li",null,_asyncDataProvider&&_asyncDataProvider.loadingFeedback||"Wczytywanie...");}var message=this.props.message;return message&&react_default.a.createElement("li",null,message);}},{key:"renderNoResultMessage",value:function renderNoResultMessage(){if(!this.state.asyncError||!this.state.asyncPending)return null;if(this.state.items&&this.state.items.length)return null;var noResultMessage=this.props.noResultMessage||"Brak wyników";return react_default.a.createElement("li",null,noResultMessage);}},{key:"componentDidMount",value:function componentDidMount(){this.popper=new popper["a" /* default */](this.props.popoverRef,this.rootEl.current,{placement:this.props.placement});this.popper.scheduleUpdate();document.addEventListener("click",this.onDocumentClick);this.updateFilteredItems();}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,prevState){if(prevProps.items!=this.props.items||prevProps.filterToken!=this.props.filterToken){this.updateFilteredItems();}if(prevProps.items!=this.props.items&&this.state.focusedIndex!==0){this.resetfocusedIndex();}else if(prevProps.filterToken!=this.props.filterToken){this.setState({focusedIndex:this.props.filterToken?0:-1});}if(prevState.items!=this.state.items){this.popper&&this.popper.update();}}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(this.popper){this.popper.destroy();}document.removeEventListener("click",this.onDocumentClick);this.unmounted=true;}},{key:"onDocumentClick",value:function onDocumentClick(){this.props.onOutsideClick&&this.props.onOutsideClick();}},{key:"select",value:function select(item){this.props.onSelect&&this.props.onSelect(item);}},{key:"getItemKey",value:function getItemKey(item){if(typeof item==="string")return item;if(typeof item==="number")return item;return item[this.props.itemKey||"id"];}},{key:"formatItemDisplay",value:function formatItemDisplay(item){return selectUtils["a" /* selectUtils */].formatItemDisplay(item,this.props.display);}},{key:"selectFocused",value:function selectFocused(){if(!this.props.items)return;if(this.state.focusedIndex>=0&&this.state.focusedIndex<this.state.items.length){var focusedItem=this.state.items[this.state.focusedIndex];this.select(focusedItem);}}},{key:"focusNext",value:function focusNext(){if(!this.state.items)return;this.setState({focusedIndex:(this.state.focusedIndex+1)%this.state.items.length});this.scrollToFocused();}},{key:"focusPrev",value:function focusPrev(){if(!this.props.items)return;var newfocusedIndex=this.state.focusedIndex-1;if(newfocusedIndex<0)newfocusedIndex=this.state.items.length-1;this.setState({focusedIndex:newfocusedIndex});this.scrollToFocused();}// @Watch("items")
},{key:"resetfocusedIndex",value:function resetfocusedIndex(){this.setState({focusedIndex:0});this.scrollToFocused();}},{key:"scrollToFocused",value:function scrollToFocused(){var _this3=this;Promise.resolve().then(function(){if(_this3.rootEl.current){var focusedEl=_this3.rootEl.current.querySelector(".focused");if(focusedEl){focusedEl.scrollIntoView(false);}}});}},{key:"getAsyncDataProvider",value:function getAsyncDataProvider(){return Array.isArray(this.props.items)?undefined:this.props.items;}},{key:"updateFilteredItems",value:function updateFilteredItems(){var _this4=this;if(Array.isArray(this.props.items)){this.setState({items:this.localFilterItems(this.props.items)});}else{var asyncItemsProvider=this.props.items;this.setState({asyncPending:true,asyncError:false});var promise=this.currentAsyncItemsPromise=asyncItemsProvider.getItems(this.props.filterToken||"").then(function(res){if(promise!=_this4.currentAsyncItemsPromise)return;if(_this4.unmounted)return;var items=asyncItemsProvider.enableSelectLocalFiltering?_this4.localFilterItems(res):res;_this4.setState({items:items,asyncError:false,asyncPending:false});},function(err){if(promise!=_this4.currentAsyncItemsPromise)return;if(_this4.unmounted)return;_this4.setState({items:[],asyncError:true,asyncPending:false});});}}},{key:"localFilterItems",value:function localFilterItems(items){var _this5=this;var filterToken=(this.props.filterToken||"").toLowerCase();if(filterToken){items=items.filter(function(x){var display=_this5.formatItemDisplay(x).toLowerCase();return display.indexOf(filterToken)>=0;});}return items;}},{key:"onKeydown",value:function onKeydown(event){switch(event.keyCode){case keyCodeMap["a" /* keyCodes */].downarrow:event.preventDefault();event.stopPropagation();this.focusNext();break;case keyCodeMap["a" /* keyCodes */].uparrow:event.preventDefault();event.stopPropagation();this.focusPrev();break;case keyCodeMap["a" /* keyCodes */].enter:event.preventDefault();event.stopPropagation();this.selectFocused();break;default:break;}}}]);return SelectView;}(react_default.a.Component);SelectView_SelectView.rootClassName="n-dropdown n-select";
// CONCATENATED MODULE: ./src/lib/components/SelectInput.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectInput_SelectInput; });
var SelectInput_SelectInput=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(SelectInput,_Component);function SelectInput(props){var _this;Object(classCallCheck["a" /* default */])(this,SelectInput);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(SelectInput).call(this,props));_this.selectView=void 0;_this.inputRef=react_default.a.createRef();_this.itemByKeyKeyValue=void 0;_this.itemByKey=void 0;_this.itemByKeyLoaded=false;_this.state={isInputFocused:false,isDirty:false,inputValue:"",filterToken:"",selectVisible:false};_this.onFocus=_this.onFocus.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.onBlur=_this.onBlur.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.onChange=_this.onChange.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.onKeydown=_this.onKeydown.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.onClick=_this.onClick.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.onSelect=_this.onSelect.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.hide=_this.hide.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));return _this;}Object(createClass["a" /* default */])(SelectInput,[{key:"render",value:function render(){var viewValue=this.getViewValue();var selectVisible=this.state.selectVisible;var selectView=selectVisible?this.renderSelectView():undefined;var _this$props=this.props,value=_this$props.value,items=_this$props.items,itemKey=_this$props.itemKey,itemKeyAsModel=_this$props.itemKeyAsModel,display=_this$props.display,placement=_this$props.placement,nonStrict=_this$props.nonStrict,onChange=_this$props.onChange,className=_this$props.className,onChangeNonStrict=_this$props.onChangeNonStrict,restProps=Object(objectWithoutProperties["a" /* default */])(_this$props,["value","items","itemKey","itemKeyAsModel","display","placement","nonStrict","onChange","className","onChangeNonStrict"]);var classNames=[className,SelectInput.rootClassName].filter(Boolean).join(" ");return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("input",Object.assign({},restProps,{className:classNames,type:"text",ref:this.inputRef,value:viewValue,onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.onChange,onKeyDown:this.onKeydown,onClick:this.onClick})),selectView);}},{key:"renderSelectView",value:function renderSelectView(){var _this2=this;var placement=this.props.placement||SelectInput.defaultPlacement;var filterToken=this.getFilterTokenForView();return react_default.a.createElement(SelectView_SelectView,{items:this.props.items,filterToken:filterToken,placement:placement,popoverRef:this.inputRef.current,onSelect:this.onSelect,onOutsideClick:this.hide,display:this.props.display,itemKey:this.props.itemKey,ref:function ref(view){return _this2.selectView=view||undefined;}});}},{key:"getFilterTokenForView",value:function getFilterTokenForView(){var _this$props2=this.props,value=_this$props2.value,nonStrict=_this$props2.nonStrict;if(value===undefined||value===null||value===""||nonStrict)return this.state.filterToken;else return"";}},{key:"onFocus",value:function onFocus(ev){this.setState({isInputFocused:true,isDirty:false,inputValue:ev.target.value,filterToken:"",selectVisible:true});this.inputRef.current.select();this.props.onFocus&&this.props.onFocus(ev);}},{key:"onBlur",value:function onBlur(ev){this.setState({isInputFocused:false,isDirty:false,inputValue:"",filterToken:"",selectVisible:false});this.props.onBlur&&this.props.onBlur(ev);}},{key:"onClick",value:function onClick(ev){ev.stopPropagation();ev.preventDefault();ev.nativeEvent.stopImmediatePropagation();this.show();this.props.onClick&&this.props.onClick(ev);}},{key:"onChange",value:function onChange(ev){var filterToken=ev.target.value;if(!this.props.nonStrict){this.updateModel(undefined);}else{this.updateModel(ev.target.value);}if(!this.state.selectVisible)this.show();this.setState({filterToken:filterToken,inputValue:ev.target.value,isDirty:true});}},{key:"onKeydown",value:function onKeydown(ev){switch(ev.keyCode){case keyCodeMap["a" /* keyCodes */].downarrow:case keyCodeMap["a" /* keyCodes */].uparrow:ev.preventDefault();ev.stopPropagation();this.selectView&&this.selectView.onKeydown(ev);if(!this.selectView)this.show();break;case keyCodeMap["a" /* keyCodes */].enter:case keyCodeMap["a" /* keyCodes */].tab:this.selectView&&this.selectView.onKeydown(ev);break;default:break;}this.props.onKeyDown&&this.props.onKeyDown(ev);}},{key:"onSelect",value:function onSelect(value){this.updateModel(value);this.hide();this.setState({isDirty:false});//this.getInputElement().blur();
}},{key:"updateModel",value:function updateModel(newValue,nonStrictValue){var modelValue=newValue;if(nonStrictValue){if(this.props.onChangeNonStrict){this.props.onChangeNonStrict(modelValue);}}else{if(this.props.onChange){this.props.onChange(modelValue);if(this.props.itemKeyAsModel&&!Array.isArray(this.props.items)){this.itemByKey=modelValue;this.itemByKeyKeyValue=modelValue?this.getItemKey(modelValue):undefined;this.itemByKeyLoaded=true;}}}if(!this.state.isInputFocused||newValue!==undefined){this.setState({inputValue:this.formatItemDisplay(newValue)});}}},{key:"getViewValue",value:function getViewValue(){if(this.state.isInputFocused&&this.state.isDirty){return this.state.inputValue;}else{return this.formatModelDisplay();}}},{key:"formatModelDisplay",value:function formatModelDisplay(){var value=this.props.value;if(value===undefined||value==null){return"";}else{if(this.props.itemKeyAsModel){var keyValue=value;if(this.itemByKeyKeyValue!=keyValue){this.tryToLoadItemByKey(keyValue);}return this.formatItemDisplay(this.itemByKey||value);}else{return this.formatItemDisplay(value);}}}},{key:"tryToLoadItemByKey",value:function tryToLoadItemByKey(keyValue){var _this3=this;this.itemByKey=undefined;this.itemByKeyKeyValue=keyValue;this.itemByKeyLoaded=false;if(Array.isArray(this.props.items)){var item=this.props.items.filter(function(x){return _this3.getItemKey(x)==keyValue;})[0];this.itemByKeyLoaded=true;this.itemByKey=item;}else{var asyncItemProvider=this.props.items;asyncItemProvider.getItemByKey(keyValue).then(function(res){if(_this3.itemByKeyKeyValue!=keyValue)return;_this3.itemByKey=res;_this3.itemByKeyLoaded;_this3.forceUpdate();});}}},{key:"formatItemDisplay",value:function formatItemDisplay(item){return selectUtils["a" /* selectUtils */].formatItemDisplay(item,this.props.display);}},{key:"getItemKey",value:function getItemKey(item){if(typeof item==="string")return item;if(typeof item==="number")return item;return item[this.props.itemKey||"id"];}},{key:"show",value:function show(){if(this.state.selectVisible)return;this.setState({selectVisible:true});}},{key:"hide",value:function hide(){if(!this.state.selectVisible)return;this.setState({selectVisible:false});}},{key:"toggle",value:function toggle(){this.setState({selectVisible:!this.state.selectVisible});}}]);return SelectInput;}(react["Component"]);SelectInput_SelectInput.rootClassName="n-select";SelectInput_SelectInput.defaultPlacement="bottom-start";

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/lib/utils/dateAdapter.ts
var dateAdapter = __webpack_require__(16);

// EXTERNAL MODULE: ./src/lib/utils/typeHelpers.ts
var typeHelpers = __webpack_require__(8);

// EXTERNAL MODULE: ./src/lib/utils/dateFormatInferer.ts
var dateFormatInferer = __webpack_require__(21);

// EXTERNAL MODULE: ./src/lib/utils/datePartUpdater.ts
var datePartUpdater = __webpack_require__(22);

// EXTERNAL MODULE: ./src/lib/utils/keyCodeMap.ts
var keyCodeMap = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(10);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/popper.js/dist/esm/popper.js
var popper = __webpack_require__(12);

// EXTERNAL MODULE: ./src/lib/utils/domEventHelpers.ts
var domEventHelpers = __webpack_require__(11);

// EXTERNAL MODULE: ./src/lib/utils/reactHelpers.ts
var reactHelpers = __webpack_require__(14);

// CONCATENATED MODULE: ./src/lib/components/TimepickerView.tsx
var TimepickerView_TimepickerView=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(TimepickerView,_React$Component);function TimepickerView(props){var _this;Object(classCallCheck["a" /* default */])(this,TimepickerView);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(TimepickerView).call(this,props));_this.closestModelTimeItem=void 0;_this.popper=void 0;_this.rootEl=react_default.a.createRef();_this.viewDateAdapter=void 0;_this.viewDateAdapter=dateAdapter["a" /* dateAdapterFactory */].getForFormat(_this.props.viewFormat);_this.state={// currentDate: this.getFocusDate()
};return _this;}Object(createClass["a" /* default */])(TimepickerView,[{key:"render",value:function render(){return react_dom_default.a.createPortal(this.renderView(),Object(reactHelpers["a" /* getBodyPortal */])());}},{key:"renderView",value:function renderView(){return react_default.a.createElement("div",{className:TimepickerView.rootClassName,onClick:domEventHelpers["a" /* domEventHelpers */].stopPropagationAndPrevent,onMouseDown:domEventHelpers["a" /* domEventHelpers */].stopPropagationAndPrevent,ref:this.rootEl},react_default.a.createElement("ul",null,this.renderHours()));}},{key:"renderHours",value:function renderHours(){var _this2=this;var items=this.generateTimeItems();this.closestModelTimeItem=undefined;if(this.props.currentModelDateValue){var modelDateTime=this.createTimeObj(this.props.currentModelDateValue.getHours(),this.props.currentModelDateValue.getMinutes()).getTime();var itemsReversed=items.slice().reverse();var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=itemsReversed[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var x=_step.value;if(x.date.getTime()<=modelDateTime){x.isSelected=true;this.closestModelTimeItem=x;break;}}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}}return items.map(function(x){return react_default.a.createElement("li",{key:x.label,onClick:function onClick(){return _this2.select(x);},className:Object(reactHelpers["b" /* toClassNames */])({selected:x.isSelected,muted:x.isMuted})},x.label);});}},{key:"componentDidMount",value:function componentDidMount(){this.popper=new popper["a" /* default */](this.props.popoverRef,this.rootEl.current,{placement:this.props.placement});this.popper.scheduleUpdate();this.scrollToClosestModelValue();}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(this.popper){this.popper.destroy();}}},{key:"componentDidUpdate",value:function componentDidUpdate(){this.scrollToClosestModelValue();}},{key:"scrollToClosestModelValue",value:function scrollToClosestModelValue(){var _this3=this;if(!this.scrollToClosestModelValue)return;Promise.resolve().then(function(){if(!_this3.rootEl.current)return;var el=_this3.rootEl.current;var element=el.querySelector("li.selected");if(!element)return;el.scrollTop=element.offsetTop-element.clientHeight*2;});}},{key:"select",value:function select(d){this.props.onSelect&&this.props.onSelect(d.date);}},{key:"createTimeObj",value:function createTimeObj(hours,minutes){return new Date(1970,0,1,hours,minutes,0);}},{key:"generateTimeItems",value:function generateTimeItems(){var maxMinutes=60*24;var step=30;var result=[];var d=this.createTimeObj(0,0);for(var i=0;i<maxMinutes;i+=step){result.push({date:new Date(d),isMuted:false,isSelected:false,label:this.viewDateAdapter.format(d)});d.setMinutes(d.getMinutes()+step);}return result;}}]);return TimepickerView;}(react_default.a.Component);TimepickerView_TimepickerView.rootClassName="n-timepicker-view";
// CONCATENATED MODULE: ./src/lib/components/TimepickerInput.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimepickerInput_TimepickerInput; });
var TimepickerInput_TimepickerInput=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(TimepickerInput,_Component);function TimepickerInput(props){var _this;Object(classCallCheck["a" /* default */])(this,TimepickerInput);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(TimepickerInput).call(this,props));_this.timepicker=void 0;_this.inputRef=react_default.a.createRef();_this.modelDateAdapter=void 0;_this.viewDateAdapter=void 0;_this.state={isInputFocused:false,inputValue:"",timepickerVisible:false};_this.modelDateAdapter=dateAdapter["a" /* dateAdapterFactory */].getForFormat(_this.props.modelFormat||TimepickerInput.defaultModelFormat);_this.viewDateAdapter=dateAdapter["a" /* dateAdapterFactory */].getForFormat(_this.props.viewFormat||TimepickerInput.defaultViewFormat);_this.onTimeSelect=_this.onTimeSelect.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.onFocus=_this.onFocus.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.onBlur=_this.onBlur.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.onChange=_this.onChange.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.onKeydown=_this.onKeydown.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.onMouseWheel=_this.onMouseWheel.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));return _this;}Object(createClass["a" /* default */])(TimepickerInput,[{key:"render",value:function render(){var viewValue=this.getViewValue();var timepickerVisible=this.state.timepickerVisible;var timepickerView=timepickerVisible?this.renderTimepickerView():undefined;var _this$props=this.props,value=_this$props.value,onChange=_this$props.onChange,modelFormat=_this$props.modelFormat,viewFormat=_this$props.viewFormat,placement=_this$props.placement,className=_this$props.className,restProps=Object(objectWithoutProperties["a" /* default */])(_this$props,["value","onChange","modelFormat","viewFormat","placement","className"]);var classNames=[className,TimepickerInput.rootClassName].filter(Boolean).join(" ");return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("input",Object.assign({},restProps,{className:classNames,type:"text",ref:this.inputRef,value:viewValue,onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.onChange,onWheel:this.onMouseWheel,onKeyDown:this.onKeydown})),timepickerView);}},{key:"renderTimepickerView",value:function renderTimepickerView(){var placement=this.props.placement||TimepickerInput.defaultPlacement;var viewFormat=this.props.viewFormat||TimepickerInput.defaultViewFormat;var currentModelValue=this.convertToDateModelValue(this.props.value);return react_default.a.createElement(TimepickerView_TimepickerView,{placement:placement,popoverRef:this.inputRef.current,viewFormat:viewFormat,currentModelDateValue:currentModelValue,onSelect:this.onTimeSelect});}},{key:"onFocus",value:function onFocus(ev){this.setState({isInputFocused:true,inputValue:ev.target.value,timepickerVisible:true});this.props.onFocus&&this.props.onFocus(ev);}},{key:"onBlur",value:function onBlur(ev){this.setState({isInputFocused:false,inputValue:"",timepickerVisible:false});this.props.onBlur&&this.props.onBlur(ev);}},{key:"onChange",value:function onChange(ev){var parsedValue=this.parseInputValue(ev.target.value);var updatedInputRenderValue=ev.target.value;if(parsedValue){var viewParsed=this.viewDateAdapter.format(parsedValue);var viewModel=this.viewDateAdapter.format(this.convertToDateModelValue(this.props.value)||"");if(viewParsed!=viewModel){updatedInputRenderValue=viewParsed;}}this.setState({inputValue:updatedInputRenderValue});this.updateModel(parsedValue);}},{key:"onKeydown",value:function onKeydown(ev){switch(ev.keyCode){case keyCodeMap["a" /* keyCodes */].downarrow:ev.preventDefault();ev.stopPropagation();if(ev.shiftKey){this.addHour(-1);}else{this.addMinute(-1);}break;case keyCodeMap["a" /* keyCodes */].uparrow:ev.preventDefault();ev.stopPropagation();if(ev.shiftKey){this.addHour(1);}else{this.addMinute(1);}break;default:break;}this.props.onKeyDown&&this.props.onKeyDown(ev);}},{key:"onMouseWheel",value:function onMouseWheel(ev){if(!ev.shiftKey)return;ev.stopPropagation();var delta=ev.deltaY<0?1:-1;if(ev.altKey){this.addHour(delta);}else{this.addMinute(delta);}}},{key:"onTimeSelect",value:function onTimeSelect(value){var newModel=this.getModelWithTimePartUpdated(value);this.updateModel(newModel);if(this.inputRef.current){this.inputRef.current.blur();}}},{key:"getViewValue",value:function getViewValue(){if(this.state.isInputFocused){return this.state.inputValue;}else{var date=this.convertToDateModelValue(this.props.value);if(this.props.value&&!date)return"?";else if(date)return this.viewDateAdapter.format(date);else return"";}}},{key:"parseInputValue",value:function parseInputValue(value){if(!value)return undefined;// TODO configurable
var newDate=this.viewDateAdapter.parse(value);if(!newDate){return this.convertToDateModelValue(this.props.value);}else{var newModelValue=this.getModelWithTimePartUpdated(newDate);return newModelValue;}}},{key:"getModelWithTimePartUpdated",value:function getModelWithTimePartUpdated(newDate){var modelDate=this.convertToDateModelValue(this.props.value);return datePartUpdater["a" /* datePartUpdater */].setTime(modelDate,newDate);}},{key:"updateModel",value:function updateModel(newValue){var newModel=this.modelDateAdapter.format(newValue||"");if(this.props.onChange&&newModel!=this.props.value){this.props.onChange(newModel);}}},{key:"convertToDateModelValue",value:function convertToDateModelValue(value){if(!value)return undefined;if(Object(typeHelpers["a" /* isDate */])(value))return value;var result=this.modelDateAdapter.parse(value);if(!result){var inferredDateFormat=Object(dateFormatInferer["a" /* inferDateFormat */])(value);if(inferredDateFormat){var adapter=dateAdapter["a" /* dateAdapterFactory */].getForFormat(inferredDateFormat);result=adapter.parse(value);}}return result;}},{key:"addMinute",value:function addMinute(delta){var curDate=this.convertToDateModelValue(this.props.value);if(curDate){curDate.setMinutes(curDate.getMinutes()+delta);if(this.state.isInputFocused){this.setState({inputValue:this.viewDateAdapter.format(curDate)});}this.updateModel(curDate);}}},{key:"addHour",value:function addHour(delta){var curDate=this.convertToDateModelValue(this.props.value);if(curDate){curDate.setHours(curDate.getHours()+delta);if(this.state.isInputFocused){this.setState({inputValue:this.viewDateAdapter.format(curDate)});}this.updateModel(curDate);}}},{key:"show",value:function show(){if(this.state.timepickerVisible)return;this.setState({timepickerVisible:true});}},{key:"hide",value:function hide(){if(!this.state.timepickerVisible)return;this.setState({timepickerVisible:false});}},{key:"toggle",value:function toggle(){this.setState({timepickerVisible:!this.state.timepickerVisible});}}]);return TimepickerInput;}(react["Component"]);TimepickerInput_TimepickerInput.rootClassName="n-timepicker";TimepickerInput_TimepickerInput.defaultModelFormat="ISO8601";TimepickerInput_TimepickerInput.defaultViewFormat="HH:mm";TimepickerInput_TimepickerInput.defaultPlacement="bottom-start";

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(10);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./src/lib/components/PopperTrigger.tsx
var PopperTrigger = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/popper.js/dist/esm/popper.js
var popper = __webpack_require__(12);

// CONCATENATED MODULE: ./src/lib/components/TooltipElement.tsx
var TooltipElement_TooltipElement=/*#__PURE__*/function(_React$PureComponent){Object(inherits["a" /* default */])(TooltipElement,_React$PureComponent);function TooltipElement(){var _getPrototypeOf2;var _this;Object(classCallCheck["a" /* default */])(this,TooltipElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=Object(possibleConstructorReturn["a" /* default */])(this,(_getPrototypeOf2=Object(getPrototypeOf["a" /* default */])(TooltipElement)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.popper=void 0;_this.tooltipRef=react_default.a.createRef();return _this;}Object(createClass["a" /* default */])(TooltipElement,[{key:"render",value:function render(){return react_default.a.createElement("div",{className:TooltipElement.rootClassName,ref:this.tooltipRef},this.props.children,react_default.a.createElement("span",{className:TooltipElement.arrowClassName}));}},{key:"componentDidMount",value:function componentDidMount(){this.createPopper();}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(this.props.popperRef!=prevProps.popperRef){this.createPopper();}this.popper&&this.popper.update();}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.destroyPopper();}},{key:"createPopper",value:function createPopper(){this.destroyPopper();if(!this.tooltipRef.current)return;this.popper=new popper["a" /* default */](this.props.popperRef,this.tooltipRef.current,{placement:this.props.placement||TooltipElement.defaultPlacement,modifiers:{arrow:{enabled:true,element:"n-arrow"}}});this.popper.scheduleUpdate();}},{key:"destroyPopper",value:function destroyPopper(){if(this.popper){this.popper.destroy();}}}]);return TooltipElement;}(react_default.a.PureComponent);TooltipElement_TooltipElement.rootClassName="n-tooltip";TooltipElement_TooltipElement.arrowClassName="n-arrow";TooltipElement_TooltipElement.defaultPlacement="auto";
// CONCATENATED MODULE: ./src/lib/components/Tooltip.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tooltip_Tooltip; });
var Tooltip_Tooltip=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(Tooltip,_React$Component);function Tooltip(props){var _this;Object(classCallCheck["a" /* default */])(this,Tooltip);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(Tooltip).call(this,props));_this.popperTriggerRef=react_default.a.createRef();_this.renderTooltipElement=_this.renderTooltipElement.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));return _this;}Object(createClass["a" /* default */])(Tooltip,[{key:"render",value:function render(){var trigger=this.props.trigger||Tooltip.defaultTrigger;return react_default.a.createElement(PopperTrigger["a" /* PopperTrigger */],{ref:this.popperTriggerRef,trigger:trigger,content:this.renderTooltipElement,disabled:this.props.disabled},this.props.children);}},{key:"renderTooltipElement",value:function renderTooltipElement(){if(!this.popperTriggerRef.current)return null;var popperRef=react_dom_default.a.findDOMNode(this.popperTriggerRef.current);if(!popperRef)return null;return react_default.a.createElement(TooltipElement_TooltipElement,{popperRef:popperRef,placement:this.props.placement},this.props.content);}}]);return Tooltip;}(react_default.a.Component);Tooltip_Tooltip.defaultTrigger="hover";

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(10);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./src/lib/components/PopperTrigger.tsx
var PopperTrigger = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/popper.js/dist/esm/popper.js
var popper = __webpack_require__(12);

// EXTERNAL MODULE: ./src/lib/utils/domEventHelpers.ts
var domEventHelpers = __webpack_require__(11);

// CONCATENATED MODULE: ./src/lib/components/PopoverElement.tsx
var PopoverElement_PopoverElement=/*#__PURE__*/function(_React$PureComponent){Object(inherits["a" /* default */])(PopoverElement,_React$PureComponent);function PopoverElement(){var _getPrototypeOf2;var _this;Object(classCallCheck["a" /* default */])(this,PopoverElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=Object(possibleConstructorReturn["a" /* default */])(this,(_getPrototypeOf2=Object(getPrototypeOf["a" /* default */])(PopoverElement)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.popper=void 0;_this.popoverRef=react_default.a.createRef();return _this;}Object(createClass["a" /* default */])(PopoverElement,[{key:"render",value:function render(){var header=this.props.header;return react_default.a.createElement("div",{className:PopoverElement.rootClassName,ref:this.popoverRef,onClick:domEventHelpers["a" /* domEventHelpers */].stopPropagation},header&&react_default.a.createElement("div",{className:PopoverElement.headerClassName},header),react_default.a.createElement("div",{className:PopoverElement.contentClassName},this.props.children),react_default.a.createElement("span",{className:PopoverElement.arrowClassName}));}},{key:"componentDidMount",value:function componentDidMount(){this.createPopper();}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(this.props.popperRef!=prevProps.popperRef){this.createPopper();}this.popper&&this.popper.update();}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.destroyPopper();}},{key:"createPopper",value:function createPopper(){this.destroyPopper();if(!this.popoverRef.current)return;this.popper=new popper["a" /* default */](this.props.popperRef,this.popoverRef.current,{placement:this.props.placement||PopoverElement.defaultPlacement,modifiers:{arrow:{enabled:true,element:PopoverElement.arrowClassName}}});this.popper.scheduleUpdate();}},{key:"destroyPopper",value:function destroyPopper(){if(this.popper){this.popper.destroy();}}}]);return PopoverElement;}(react_default.a.PureComponent);PopoverElement_PopoverElement.rootClassName="n-popover";PopoverElement_PopoverElement.headerClassName="n-popover-header";PopoverElement_PopoverElement.contentClassName="n-popover-content";PopoverElement_PopoverElement.arrowClassName="n-arrow";PopoverElement_PopoverElement.defaultPlacement="auto";
// CONCATENATED MODULE: ./src/lib/components/Popover.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Popover_Popover; });
var Popover_Popover=/*#__PURE__*/function(_React$PureComponent){Object(inherits["a" /* default */])(Popover,_React$PureComponent);function Popover(props){var _this;Object(classCallCheck["a" /* default */])(this,Popover);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(Popover).call(this,props));_this.popperTriggerRef=react_default.a.createRef();_this.renderPopoverElement=_this.renderPopoverElement.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));return _this;}Object(createClass["a" /* default */])(Popover,[{key:"render",value:function render(){var trigger=this.props.trigger||Popover.defaultTrigger;return react_default.a.createElement(PopperTrigger["a" /* PopperTrigger */],{ref:this.popperTriggerRef,trigger:trigger,content:this.renderPopoverElement,disabled:this.props.disabled,closeOnDocumentClick:true},this.props.children);}},{key:"renderPopoverElement",value:function renderPopoverElement(){if(!this.popperTriggerRef.current)return null;var popperRef=react_dom_default.a.findDOMNode(this.popperTriggerRef.current);if(!popperRef)return null;return react_default.a.createElement(PopoverElement_PopoverElement,{popperRef:popperRef,placement:this.props.placement,header:this.props.header},this.props.content);}}]);return Popover;}(react_default.a.PureComponent);Popover_Popover.defaultTrigger="click";

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/lib/utils/selectUtils.ts
var selectUtils = __webpack_require__(15);

// EXTERNAL MODULE: ./src/lib/utils/keyCodeMap.ts
var keyCodeMap = __webpack_require__(9);

// EXTERNAL MODULE: ./src/lib/utils/domEventHelpers.ts
var domEventHelpers = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(10);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/popper.js/dist/esm/popper.js
var popper = __webpack_require__(12);

// EXTERNAL MODULE: ./src/lib/utils/reactHelpers.ts
var reactHelpers = __webpack_require__(14);

// CONCATENATED MODULE: ./src/lib/components/MultiselectView.tsx
var MultiselectView_MultiselectView=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(MultiselectView,_React$Component);function MultiselectView(props){var _this;Object(classCallCheck["a" /* default */])(this,MultiselectView);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(MultiselectView).call(this,props));_this.popper=void 0;_this.rootEl=react_default.a.createRef();_this.filterInputRef=react_default.a.createRef();_this.state={filterToken:"",focusedIndex:-1};_this.onKeydown=_this.onKeydown.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.onFilterTokenChange=_this.onFilterTokenChange.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.onDocumentClick=_this.onDocumentClick.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));return _this;}Object(createClass["a" /* default */])(MultiselectView,[{key:"render",value:function render(){var minWidth=this.props.popoverRef.getBoundingClientRect().width;var result=react_default.a.createElement("div",{className:MultiselectView.rootClassName,onClick:domEventHelpers["a" /* domEventHelpers */].stopPropagationAndPrevent,ref:this.rootEl,style:{minWidth:minWidth}},this.renderFilterInput(),this.renderItems());return this.props.disablePortalRender?result:react_dom_default.a.createPortal(result,Object(reactHelpers["a" /* getBodyPortal */])());}},{key:"renderFilterInput",value:function renderFilterInput(){if(!this.props.filterable)return;return react_default.a.createElement("div",{ref:this.rootEl},react_default.a.createElement("input",{type:"text",ref:this.filterInputRef,onChange:this.onFilterTokenChange,onKeyDown:this.onKeydown}));}},{key:"renderItems",value:function renderItems(){var _this2=this;var focusedIndex=this.state.focusedIndex;var filteredItems=this.getFilteredItems();return react_default.a.createElement("ul",null,filteredItems.map(function(item,i){return react_default.a.createElement("li",{key:_this2.getItemKey(item),className:Object(reactHelpers["b" /* toClassNames */])({focused:i==focusedIndex,selected:_this2.isSelected(item)}),onClick:function onClick(){return _this2.select(item);}},_this2.formatItemDisplay(item));}));}},{key:"componentDidMount",value:function componentDidMount(){this.focusInput();this.popper=new popper["a" /* default */](this.props.popoverRef,this.rootEl.current,{placement:this.props.placement});this.popper.scheduleUpdate();document.addEventListener("click",this.onDocumentClick);}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(this.popper){this.popper.destroy();}document.removeEventListener("click",this.onDocumentClick);}},{key:"onDocumentClick",value:function onDocumentClick(){this.props.onOutsideClick&&this.props.onOutsideClick();}},{key:"onKeydown",value:function onKeydown(event){switch(event.keyCode){case keyCodeMap["a" /* keyCodes */].downarrow:event.preventDefault();event.stopPropagation();this.focusNext();break;case keyCodeMap["a" /* keyCodes */].uparrow:event.preventDefault();event.stopPropagation();this.focusPrev();break;case keyCodeMap["a" /* keyCodes */].space:event.preventDefault();event.stopPropagation();this.toggleFocused();break;default:this.props.onKeyDown&&this.props.onKeyDown(event);break;}}},{key:"getFilteredItems",value:function getFilteredItems(){var _this3=this;var _this$props=this.props,filterable=_this$props.filterable,items=_this$props.items;var filterToken=this.state.filterToken;if(!filterable||!filterToken||!items)return items||[];var token=filterToken.toLowerCase();return items.filter(function(x){return _this3.formatItemDisplay(x).toLowerCase().indexOf(token)>=0;});}},{key:"focusNext",value:function focusNext(){if(!this.props.items)return;var filtered=this.getFilteredItems();this.setState({focusedIndex:(this.state.focusedIndex+1)%filtered.length});}},{key:"focusPrev",value:function focusPrev(){if(!this.props.items)return;var newfocusedIndex=this.state.focusedIndex-1;if(newfocusedIndex<0){var filtered=this.getFilteredItems();newfocusedIndex=filtered.length-1;}this.setState({focusedIndex:newfocusedIndex});}},{key:"resetfocusedIndex",value:function resetfocusedIndex(){this.setState(function(prev,next){return{focusedIndex:prev.filterToken?0:-1};});}},{key:"focusInput",value:function focusInput(){if(this.filterInputRef.current){this.filterInputRef.current.focus();}}},{key:"getFocusedItem",value:function getFocusedItem(){var filteredItems=this.getFilteredItems();if(!filteredItems.length||this.state.focusedIndex<0)return undefined;return filteredItems[this.state.focusedIndex];}},{key:"toggleFocused",value:function toggleFocused(){var focusedItem=this.getFocusedItem();if(!focusedItem)return;this.select(focusedItem);}},{key:"select",value:function select(item){this.props.onSelect(item);}},{key:"isSelected",value:function isSelected(item){var key=this.getItemKey(item);var selected=this.props.selected||[];var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=selected[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var s=_step.value;if(this.getItemKey(s)==key)return true;}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}return false;}},{key:"getItemKey",value:function getItemKey(item){if(typeof item==="string")return item;if(typeof item==="number")return item;return item[this.props.itemKey||"id"];}},{key:"formatItemDisplay",value:function formatItemDisplay(item){return selectUtils["a" /* selectUtils */].formatItemDisplay(item,this.props.display);}},{key:"onFilterTokenChange",value:function onFilterTokenChange(ev){this.setState({filterToken:ev.target.value});this.resetfocusedIndex();}}]);return MultiselectView;}(react_default.a.Component);MultiselectView_MultiselectView.rootClassName="n-dropdown n-multiselect-view";
// CONCATENATED MODULE: ./src/lib/components/Multiselect.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Multiselect_Multiselect; });
var currentOpenMultiselect;var Multiselect_Multiselect=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(Multiselect,_React$Component);function Multiselect(props){var _this;Object(classCallCheck["a" /* default */])(this,Multiselect);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(Multiselect).call(this,props));_this.multiselectView=void 0;_this.elRef=react_default.a.createRef();_this.state={multiselectVisible:false};_this.onKeydown=_this.onKeydown.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.onFocus=_this.onFocus.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.formatItemDisplay=_this.formatItemDisplay.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.onItemSelect=_this.onItemSelect.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.clear=_this.clear.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.defaultRenderSelectedItems=_this.defaultRenderSelectedItems.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));_this.hide=_this.hide.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));return _this;}Object(createClass["a" /* default */])(Multiselect,[{key:"render",value:function render(){var _this$props=this.props,value=_this$props.value,className=_this$props.className,items=_this$props.items,onChange=_this$props.onChange,itemKey=_this$props.itemKey,display=_this$props.display,placement=_this$props.placement,filterable=_this$props.filterable,clearButton=_this$props.clearButton,disablePortalRender=_this$props.disablePortalRender,sortOnChange=_this$props.sortOnChange,children=_this$props.children,restProps=Object(objectWithoutProperties["a" /* default */])(_this$props,["value","className","items","onChange","itemKey","display","placement","filterable","clearButton","disablePortalRender","sortOnChange","children"]);var classNames=[className,Multiselect.rootClassName].filter(Boolean).join(" ");return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("div",Object.assign({},restProps,{className:classNames,onFocus:this.onFocus,onKeyDown:this.onKeydown,tabIndex:0,onClick:domEventHelpers["a" /* domEventHelpers */].stopPropagationAndPrevent,ref:this.elRef}),this.renderSelectedItems()),this.renderMultiselectView());}},{key:"renderSelectedItems",value:function renderSelectedItems(){if(this.props.children){return this.props.children({formatItemDisplay:this.formatItemDisplay,clear:this.clear,props:this.props,selectedItems:this.props.value||[],defaultRenderSelectedItems:this.defaultRenderSelectedItems});}else{return this.defaultRenderSelectedItems();}}},{key:"renderMultiselectView",value:function renderMultiselectView(){var _this2=this;if(!this.state.multiselectVisible)return undefined;var placement=this.props.placement||Multiselect.defaultPlacement;return react_default.a.createElement(MultiselectView_MultiselectView,{disablePortalRender:this.props.disablePortalRender,display:this.props.display,items:this.props.items,itemKey:this.props.itemKey,filterable:this.props.filterable,selected:this.props.value,onSelect:this.onItemSelect,placement:placement,popoverRef:this.elRef.current,onOutsideClick:this.hide,onKeyDown:this.onKeydown,ref:function ref(view){return _this2.multiselectView=view||undefined;}});}},{key:"defaultRenderSelectedItems",value:function defaultRenderSelectedItems(){return Multiselect.defaultRenderSelectedItems({formatItemDisplay:this.formatItemDisplay,clear:this.clear,selectedItems:this.props.value||[],props:this.props});}},{key:"onFocus",value:function onFocus(ev){this.show();this.props.onFocus&&this.props.onFocus(ev);}},{key:"onKeydown",value:function onKeydown(ev){switch(ev.keyCode){case keyCodeMap["a" /* keyCodes */].tab:if(ev.shiftKey&&this.elRef.current!=document.activeElement){break;}if(!ev.shiftKey&&this.elRef.current==document.activeElement&&this.props.filterable&&this.multiselectView){ev.stopPropagation();ev.preventDefault();this.multiselectView.focusInput();break;}this.hide();break;case keyCodeMap["a" /* keyCodes */].escape:this.hide();break;case keyCodeMap["a" /* keyCodes */].uparrow:case keyCodeMap["a" /* keyCodes */].downarrow:case keyCodeMap["a" /* keyCodes */].space:if(this.multiselectView){this.multiselectView.onKeydown(ev);}break;default:break;}this.props.onKeyDown&&this.props.onKeyDown(ev);}},{key:"formatItemDisplay",value:function formatItemDisplay(item){return selectUtils["a" /* selectUtils */].formatItemDisplay(item,this.props.display);}},{key:"getItemKey",value:function getItemKey(item){if(typeof item==="string")return item;if(typeof item==="number")return item;return item[this.props.itemKey||"id"];}},{key:"onItemSelect",value:function onItemSelect(item){var _this3=this;var newModel=(this.props.value||[]).slice();var key=this.getItemKey(item);var existingItem=newModel.filter(function(x){return _this3.getItemKey(x)==key;})[0];if(existingItem!==undefined){var idx=newModel.indexOf(existingItem);newModel.splice(idx,1);}else{newModel.push(item);}if(this.props.sortOnChange)newModel.sort();this.props.onChange&&this.props.onChange(newModel);}},{key:"clear",value:function clear(ev){ev&&ev.stopPropagation();this.props.onChange([]);}},{key:"show",value:function show(){if(this.state.multiselectVisible)return;if(currentOpenMultiselect){currentOpenMultiselect.hide();}currentOpenMultiselect=this;this.setState({multiselectVisible:true});}},{key:"hide",value:function hide(){if(!this.state.multiselectVisible)return;if(currentOpenMultiselect==this){currentOpenMultiselect=undefined;}this.setState({multiselectVisible:false});}},{key:"toggle",value:function toggle(){this.setState({multiselectVisible:!this.state.multiselectVisible});}}]);return Multiselect;}(react_default.a.Component);Multiselect_Multiselect.rootClassName="n-multiselect";Multiselect_Multiselect.defaultPlacement="bottom-start";Multiselect_Multiselect.defaultRenderSelectedItems=function(_ref){var props=_ref.props,selectedItems=_ref.selectedItems,formatItemDisplay=_ref.formatItemDisplay,clear=_ref.clear;return react_default.a.createElement(react_default.a.Fragment,null,selectedItems.map(function(x){return formatItemDisplay(x);}).join(", ")||"-",props.clearButton&&react_default.a.createElement("button",{onClick:clear,onMouseDown:domEventHelpers["a" /* domEventHelpers */].stopPropagationAndPrevent},"Clear"));};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var k = __webpack_require__(24),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.concurrent_mode") : 60111,
    y = n ? Symbol.for("react.forward_ref") : 60112,
    z = n ? Symbol.for("react.suspense") : 60113,
    aa = n ? Symbol.for("react.memo") : 60115,
    ba = n ? Symbol.for("react.lazy") : 60116,
    A = "function" === typeof Symbol && Symbol.iterator;

function ca(a, b, d, c, e, g, h, f) {
  if (!a) {
    a = void 0;
    if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
      var l = [d, c, e, g, h, f],
          m = 0;
      a = Error(b.replace(/%s/g, function () {
        return l[m++];
      }));
      a.name = "Invariant Violation";
    }
    a.framesToPop = 1;
    throw a;
  }
}

function B(a) {
  for (var b = arguments.length - 1, d = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 0; c < b; c++) {
    d += "&args[]=" + encodeURIComponent(arguments[c + 1]);
  }

  ca(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", d);
}

var C = {
  isMounted: function isMounted() {
    return !1;
  },
  enqueueForceUpdate: function enqueueForceUpdate() {},
  enqueueReplaceState: function enqueueReplaceState() {},
  enqueueSetState: function enqueueSetState() {}
},
    D = {};

function E(a, b, d) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = d || C;
}

E.prototype.isReactComponent = {};

E.prototype.setState = function (a, b) {
  "object" !== typeof a && "function" !== typeof a && null != a ? B("85") : void 0;
  this.updater.enqueueSetState(this, a, b, "setState");
};

E.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function F() {}

F.prototype = E.prototype;

function G(a, b, d) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = d || C;
}

var H = G.prototype = new F();
H.constructor = G;
k(H, E.prototype);
H.isPureReactComponent = !0;
var I = {
  current: null
},
    J = {
  current: null
},
    K = Object.prototype.hasOwnProperty,
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, d) {
  var c = void 0,
      e = {},
      g = null,
      h = null;
  if (null != b) for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
    K.call(b, c) && !L.hasOwnProperty(c) && (e[c] = b[c]);
  }
  var f = arguments.length - 2;
  if (1 === f) e.children = d;else if (1 < f) {
    for (var l = Array(f), m = 0; m < f; m++) {
      l[m] = arguments[m + 2];
    }

    e.children = l;
  }
  if (a && a.defaultProps) for (c in f = a.defaultProps, f) {
    void 0 === e[c] && (e[c] = f[c]);
  }
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: h,
    props: e,
    _owner: J.current
  };
}

function da(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function N(a) {
  return "object" === typeof a && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var O = /\/+/g,
    P = [];

function Q(a, b, d, c) {
  if (P.length) {
    var e = P.pop();
    e.result = a;
    e.keyPrefix = b;
    e.func = d;
    e.context = c;
    e.count = 0;
    return e;
  }

  return {
    result: a,
    keyPrefix: b,
    func: d,
    context: c,
    count: 0
  };
}

function R(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > P.length && P.push(a);
}

function S(a, b, d, c) {
  var e = typeof a;
  if ("undefined" === e || "boolean" === e) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (e) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return d(c, a, "" === b ? "." + T(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
    e = a[h];
    var f = b + T(e, h);
    g += S(e, f, d, c);
  } else if (null === a || "object" !== typeof a ? f = null : (f = A && a[A] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), h = 0; !(e = a.next()).done;) {
    e = e.value, f = b + T(e, h++), g += S(e, f, d, c);
  } else "object" === e && (d = "" + a, B("31", "[object Object]" === d ? "object with keys {" + Object.keys(a).join(", ") + "}" : d, ""));
  return g;
}

function U(a, b, d) {
  return null == a ? 0 : S(a, "", b, d);
}

function T(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function ea(a, b) {
  a.func.call(a.context, b, a.count++);
}

function fa(a, b, d) {
  var c = a.result,
      e = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? V(a, c, d, function (a) {
    return a;
  }) : null != a && (N(a) && (a = da(a, e + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(O, "$&/") + "/") + d)), c.push(a));
}

function V(a, b, d, c, e) {
  var g = "";
  null != d && (g = ("" + d).replace(O, "$&/") + "/");
  b = Q(b, g, c, e);
  U(a, fa, b);
  R(b);
}

function W() {
  var a = I.current;
  null === a ? B("321") : void 0;
  return a;
}

var X = {
  Children: {
    map: function map(a, b, d) {
      if (null == a) return a;
      var c = [];
      V(a, c, null, b, d);
      return c;
    },
    forEach: function forEach(a, b, d) {
      if (null == a) return a;
      b = Q(null, null, b, d);
      U(a, ea, b);
      R(b);
    },
    count: function count(a) {
      return U(a, function () {
        return null;
      }, null);
    },
    toArray: function toArray(a) {
      var b = [];
      V(a, b, null, function (a) {
        return a;
      });
      return b;
    },
    only: function only(a) {
      N(a) ? void 0 : B("143");
      return a;
    }
  },
  createRef: function createRef() {
    return {
      current: null
    };
  },
  Component: E,
  PureComponent: G,
  createContext: function createContext(a, b) {
    void 0 === b && (b = null);
    a = {
      $$typeof: w,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    a.Provider = {
      $$typeof: v,
      _context: a
    };
    return a.Consumer = a;
  },
  forwardRef: function forwardRef(a) {
    return {
      $$typeof: y,
      render: a
    };
  },
  lazy: function lazy(a) {
    return {
      $$typeof: ba,
      _ctor: a,
      _status: -1,
      _result: null
    };
  },
  memo: function memo(a, b) {
    return {
      $$typeof: aa,
      type: a,
      compare: void 0 === b ? null : b
    };
  },
  useCallback: function useCallback(a, b) {
    return W().useCallback(a, b);
  },
  useContext: function useContext(a, b) {
    return W().useContext(a, b);
  },
  useEffect: function useEffect(a, b) {
    return W().useEffect(a, b);
  },
  useImperativeHandle: function useImperativeHandle(a, b, d) {
    return W().useImperativeHandle(a, b, d);
  },
  useDebugValue: function useDebugValue() {},
  useLayoutEffect: function useLayoutEffect(a, b) {
    return W().useLayoutEffect(a, b);
  },
  useMemo: function useMemo(a, b) {
    return W().useMemo(a, b);
  },
  useReducer: function useReducer(a, b, d) {
    return W().useReducer(a, b, d);
  },
  useRef: function useRef(a) {
    return W().useRef(a);
  },
  useState: function useState(a) {
    return W().useState(a);
  },
  Fragment: r,
  StrictMode: t,
  Suspense: z,
  createElement: M,
  cloneElement: function cloneElement(a, b, d) {
    null === a || void 0 === a ? B("267", a) : void 0;
    var c = void 0,
        e = k({}, a.props),
        g = a.key,
        h = a.ref,
        f = a._owner;

    if (null != b) {
      void 0 !== b.ref && (h = b.ref, f = J.current);
      void 0 !== b.key && (g = "" + b.key);
      var l = void 0;
      a.type && a.type.defaultProps && (l = a.type.defaultProps);

      for (c in b) {
        K.call(b, c) && !L.hasOwnProperty(c) && (e[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
      }
    }

    c = arguments.length - 2;
    if (1 === c) e.children = d;else if (1 < c) {
      l = Array(c);

      for (var m = 0; m < c; m++) {
        l[m] = arguments[m + 2];
      }

      e.children = l;
    }
    return {
      $$typeof: p,
      type: a.type,
      key: g,
      ref: h,
      props: e,
      _owner: f
    };
  },
  createFactory: function createFactory(a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  },
  isValidElement: N,
  version: "16.8.6",
  unstable_ConcurrentMode: x,
  unstable_Profiler: u,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentDispatcher: I,
    ReactCurrentOwner: J,
    assign: k
  }
},
    Y = {
  default: X
},
    Z = Y && X || Y;
module.exports = Z.default || Z;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/


var aa = __webpack_require__(0),
    n = __webpack_require__(24),
    r = __webpack_require__(37);

function ba(a, b, c, d, e, f, g, h) {
  if (!a) {
    a = void 0;
    if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
      var l = [c, d, e, f, g, h],
          k = 0;
      a = Error(b.replace(/%s/g, function () {
        return l[k++];
      }));
      a.name = "Invariant Violation";
    }
    a.framesToPop = 1;
    throw a;
  }
}

function x(a) {
  for (var b = arguments.length - 1, c = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 0; d < b; d++) {
    c += "&args[]=" + encodeURIComponent(arguments[d + 1]);
  }

  ba(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", c);
}

aa ? void 0 : x("227");

function ca(a, b, c, d, e, f, g, h, l) {
  var k = Array.prototype.slice.call(arguments, 3);

  try {
    b.apply(c, k);
  } catch (m) {
    this.onError(m);
  }
}

var da = !1,
    ea = null,
    fa = !1,
    ha = null,
    ia = {
  onError: function onError(a) {
    da = !0;
    ea = a;
  }
};

function ja(a, b, c, d, e, f, g, h, l) {
  da = !1;
  ea = null;
  ca.apply(ia, arguments);
}

function ka(a, b, c, d, e, f, g, h, l) {
  ja.apply(this, arguments);

  if (da) {
    if (da) {
      var k = ea;
      da = !1;
      ea = null;
    } else x("198"), k = void 0;

    fa || (fa = !0, ha = k);
  }
}

var la = null,
    ma = {};

function na() {
  if (la) for (var a in ma) {
    var b = ma[a],
        c = la.indexOf(a);
    -1 < c ? void 0 : x("96", a);

    if (!oa[c]) {
      b.extractEvents ? void 0 : x("97", a);
      oa[c] = b;
      c = b.eventTypes;

      for (var d in c) {
        var e = void 0;
        var f = c[d],
            g = b,
            h = d;
        pa.hasOwnProperty(h) ? x("99", h) : void 0;
        pa[h] = f;
        var l = f.phasedRegistrationNames;

        if (l) {
          for (e in l) {
            l.hasOwnProperty(e) && qa(l[e], g, h);
          }

          e = !0;
        } else f.registrationName ? (qa(f.registrationName, g, h), e = !0) : e = !1;

        e ? void 0 : x("98", d, a);
      }
    }
  }
}

function qa(a, b, c) {
  ra[a] ? x("100", a) : void 0;
  ra[a] = b;
  sa[a] = b.eventTypes[c].dependencies;
}

var oa = [],
    pa = {},
    ra = {},
    sa = {},
    ta = null,
    ua = null,
    va = null;

function wa(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = va(c);
  ka(d, b, void 0, a);
  a.currentTarget = null;
}

function xa(a, b) {
  null == b ? x("30") : void 0;
  if (null == a) return b;

  if (Array.isArray(a)) {
    if (Array.isArray(b)) return a.push.apply(a, b), a;
    a.push(b);
    return a;
  }

  return Array.isArray(b) ? [a].concat(b) : [a, b];
}

function ya(a, b, c) {
  Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a);
}

var za = null;

function Aa(a) {
  if (a) {
    var b = a._dispatchListeners,
        c = a._dispatchInstances;
    if (Array.isArray(b)) for (var d = 0; d < b.length && !a.isPropagationStopped(); d++) {
      wa(a, b[d], c[d]);
    } else b && wa(a, b, c);
    a._dispatchListeners = null;
    a._dispatchInstances = null;
    a.isPersistent() || a.constructor.release(a);
  }
}

var Ba = {
  injectEventPluginOrder: function injectEventPluginOrder(a) {
    la ? x("101") : void 0;
    la = Array.prototype.slice.call(a);
    na();
  },
  injectEventPluginsByName: function injectEventPluginsByName(a) {
    var b = !1,
        c;

    for (c in a) {
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        ma.hasOwnProperty(c) && ma[c] === d || (ma[c] ? x("102", c) : void 0, ma[c] = d, b = !0);
      }
    }

    b && na();
  }
};

function Ca(a, b) {
  var c = a.stateNode;
  if (!c) return null;
  var d = ta(c);
  if (!d) return null;
  c = d[b];

  a: switch (b) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d;
      break a;

    default:
      a = !1;
  }

  if (a) return null;
  c && "function" !== typeof c ? x("231", b, typeof c) : void 0;
  return c;
}

function Da(a) {
  null !== a && (za = xa(za, a));
  a = za;
  za = null;
  if (a && (ya(a, Aa), za ? x("95") : void 0, fa)) throw a = ha, fa = !1, ha = null, a;
}

var Ea = Math.random().toString(36).slice(2),
    Fa = "__reactInternalInstance$" + Ea,
    Ga = "__reactEventHandlers$" + Ea;

function Ha(a) {
  if (a[Fa]) return a[Fa];

  for (; !a[Fa];) {
    if (a.parentNode) a = a.parentNode;else return null;
  }

  a = a[Fa];
  return 5 === a.tag || 6 === a.tag ? a : null;
}

function Ia(a) {
  a = a[Fa];
  return !a || 5 !== a.tag && 6 !== a.tag ? null : a;
}

function Ja(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  x("33");
}

function Ka(a) {
  return a[Ga] || null;
}

function La(a) {
  do {
    a = a.return;
  } while (a && 5 !== a.tag);

  return a ? a : null;
}

function Ma(a, b, c) {
  if (b = Ca(a, c.dispatchConfig.phasedRegistrationNames[b])) c._dispatchListeners = xa(c._dispatchListeners, b), c._dispatchInstances = xa(c._dispatchInstances, a);
}

function Na(a) {
  if (a && a.dispatchConfig.phasedRegistrationNames) {
    for (var b = a._targetInst, c = []; b;) {
      c.push(b), b = La(b);
    }

    for (b = c.length; 0 < b--;) {
      Ma(c[b], "captured", a);
    }

    for (b = 0; b < c.length; b++) {
      Ma(c[b], "bubbled", a);
    }
  }
}

function Oa(a, b, c) {
  a && c && c.dispatchConfig.registrationName && (b = Ca(a, c.dispatchConfig.registrationName)) && (c._dispatchListeners = xa(c._dispatchListeners, b), c._dispatchInstances = xa(c._dispatchInstances, a));
}

function Pa(a) {
  a && a.dispatchConfig.registrationName && Oa(a._targetInst, null, a);
}

function Qa(a) {
  ya(a, Na);
}

var Ra = !("undefined" === typeof window || !window.document || !window.document.createElement);

function Sa(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}

var Ta = {
  animationend: Sa("Animation", "AnimationEnd"),
  animationiteration: Sa("Animation", "AnimationIteration"),
  animationstart: Sa("Animation", "AnimationStart"),
  transitionend: Sa("Transition", "TransitionEnd")
},
    Ua = {},
    Va = {};
Ra && (Va = document.createElement("div").style, "AnimationEvent" in window || (delete Ta.animationend.animation, delete Ta.animationiteration.animation, delete Ta.animationstart.animation), "TransitionEvent" in window || delete Ta.transitionend.transition);

function Wa(a) {
  if (Ua[a]) return Ua[a];
  if (!Ta[a]) return a;
  var b = Ta[a],
      c;

  for (c in b) {
    if (b.hasOwnProperty(c) && c in Va) return Ua[a] = b[c];
  }

  return a;
}

var Xa = Wa("animationend"),
    Ya = Wa("animationiteration"),
    Za = Wa("animationstart"),
    $a = Wa("transitionend"),
    ab = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    bb = null,
    cb = null,
    db = null;

function eb() {
  if (db) return db;
  var a,
      b = cb,
      c = b.length,
      d,
      e = "value" in bb ? bb.value : bb.textContent,
      f = e.length;

  for (a = 0; a < c && b[a] === e[a]; a++) {
    ;
  }

  var g = c - a;

  for (d = 1; d <= g && b[c - d] === e[f - d]; d++) {
    ;
  }

  return db = e.slice(a, 1 < d ? 1 - d : void 0);
}

function fb() {
  return !0;
}

function gb() {
  return !1;
}

function y(a, b, c, d) {
  this.dispatchConfig = a;
  this._targetInst = b;
  this.nativeEvent = c;
  a = this.constructor.Interface;

  for (var e in a) {
    a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c) : "target" === e ? this.target = d : this[e] = c[e]);
  }

  this.isDefaultPrevented = (null != c.defaultPrevented ? c.defaultPrevented : !1 === c.returnValue) ? fb : gb;
  this.isPropagationStopped = gb;
  return this;
}

n(y.prototype, {
  preventDefault: function preventDefault() {
    this.defaultPrevented = !0;
    var a = this.nativeEvent;
    a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = fb);
  },
  stopPropagation: function stopPropagation() {
    var a = this.nativeEvent;
    a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = fb);
  },
  persist: function persist() {
    this.isPersistent = fb;
  },
  isPersistent: gb,
  destructor: function destructor() {
    var a = this.constructor.Interface,
        b;

    for (b in a) {
      this[b] = null;
    }

    this.nativeEvent = this._targetInst = this.dispatchConfig = null;
    this.isPropagationStopped = this.isDefaultPrevented = gb;
    this._dispatchInstances = this._dispatchListeners = null;
  }
});
y.Interface = {
  type: null,
  target: null,
  currentTarget: function currentTarget() {
    return null;
  },
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp: function timeStamp(a) {
    return a.timeStamp || Date.now();
  },
  defaultPrevented: null,
  isTrusted: null
};

y.extend = function (a) {
  function b() {}

  function c() {
    return d.apply(this, arguments);
  }

  var d = this;
  b.prototype = d.prototype;
  var e = new b();
  n(e, c.prototype);
  c.prototype = e;
  c.prototype.constructor = c;
  c.Interface = n({}, d.Interface, a);
  c.extend = d.extend;
  hb(c);
  return c;
};

hb(y);

function ib(a, b, c, d) {
  if (this.eventPool.length) {
    var e = this.eventPool.pop();
    this.call(e, a, b, c, d);
    return e;
  }

  return new this(a, b, c, d);
}

function jb(a) {
  a instanceof this ? void 0 : x("279");
  a.destructor();
  10 > this.eventPool.length && this.eventPool.push(a);
}

function hb(a) {
  a.eventPool = [];
  a.getPooled = ib;
  a.release = jb;
}

var kb = y.extend({
  data: null
}),
    lb = y.extend({
  data: null
}),
    mb = [9, 13, 27, 32],
    nb = Ra && "CompositionEvent" in window,
    ob = null;
Ra && "documentMode" in document && (ob = document.documentMode);
var pb = Ra && "TextEvent" in window && !ob,
    qb = Ra && (!nb || ob && 8 < ob && 11 >= ob),
    rb = String.fromCharCode(32),
    sb = {
  beforeInput: {
    phasedRegistrationNames: {
      bubbled: "onBeforeInput",
      captured: "onBeforeInputCapture"
    },
    dependencies: ["compositionend", "keypress", "textInput", "paste"]
  },
  compositionEnd: {
    phasedRegistrationNames: {
      bubbled: "onCompositionEnd",
      captured: "onCompositionEndCapture"
    },
    dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
  },
  compositionStart: {
    phasedRegistrationNames: {
      bubbled: "onCompositionStart",
      captured: "onCompositionStartCapture"
    },
    dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
  },
  compositionUpdate: {
    phasedRegistrationNames: {
      bubbled: "onCompositionUpdate",
      captured: "onCompositionUpdateCapture"
    },
    dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
  }
},
    tb = !1;

function ub(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== mb.indexOf(b.keyCode);

    case "keydown":
      return 229 !== b.keyCode;

    case "keypress":
    case "mousedown":
    case "blur":
      return !0;

    default:
      return !1;
  }
}

function vb(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}

var wb = !1;

function xb(a, b) {
  switch (a) {
    case "compositionend":
      return vb(b);

    case "keypress":
      if (32 !== b.which) return null;
      tb = !0;
      return rb;

    case "textInput":
      return a = b.data, a === rb && tb ? null : a;

    default:
      return null;
  }
}

function yb(a, b) {
  if (wb) return "compositionend" === a || !nb && ub(a, b) ? (a = eb(), db = cb = bb = null, wb = !1, a) : null;

  switch (a) {
    case "paste":
      return null;

    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length) return b.char;
        if (b.which) return String.fromCharCode(b.which);
      }

      return null;

    case "compositionend":
      return qb && "ko" !== b.locale ? null : b.data;

    default:
      return null;
  }
}

var zb = {
  eventTypes: sb,
  extractEvents: function extractEvents(a, b, c, d) {
    var e = void 0;
    var f = void 0;
    if (nb) b: {
      switch (a) {
        case "compositionstart":
          e = sb.compositionStart;
          break b;

        case "compositionend":
          e = sb.compositionEnd;
          break b;

        case "compositionupdate":
          e = sb.compositionUpdate;
          break b;
      }

      e = void 0;
    } else wb ? ub(a, c) && (e = sb.compositionEnd) : "keydown" === a && 229 === c.keyCode && (e = sb.compositionStart);
    e ? (qb && "ko" !== c.locale && (wb || e !== sb.compositionStart ? e === sb.compositionEnd && wb && (f = eb()) : (bb = d, cb = "value" in bb ? bb.value : bb.textContent, wb = !0)), e = kb.getPooled(e, b, c, d), f ? e.data = f : (f = vb(c), null !== f && (e.data = f)), Qa(e), f = e) : f = null;
    (a = pb ? xb(a, c) : yb(a, c)) ? (b = lb.getPooled(sb.beforeInput, b, c, d), b.data = a, Qa(b)) : b = null;
    return null === f ? b : null === b ? f : [f, b];
  }
},
    Ab = null,
    Bb = null,
    Cb = null;

function Db(a) {
  if (a = ua(a)) {
    "function" !== typeof Ab ? x("280") : void 0;
    var b = ta(a.stateNode);
    Ab(a.stateNode, a.type, b);
  }
}

function Eb(a) {
  Bb ? Cb ? Cb.push(a) : Cb = [a] : Bb = a;
}

function Fb() {
  if (Bb) {
    var a = Bb,
        b = Cb;
    Cb = Bb = null;
    Db(a);
    if (b) for (a = 0; a < b.length; a++) {
      Db(b[a]);
    }
  }
}

function Gb(a, b) {
  return a(b);
}

function Hb(a, b, c) {
  return a(b, c);
}

function Ib() {}

var Jb = !1;

function Kb(a, b) {
  if (Jb) return a(b);
  Jb = !0;

  try {
    return Gb(a, b);
  } finally {
    if (Jb = !1, null !== Bb || null !== Cb) Ib(), Fb();
  }
}

var Lb = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};

function Mb(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!Lb[a.type] : "textarea" === b ? !0 : !1;
}

function Nb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}

function Ob(a) {
  if (!Ra) return !1;
  a = "on" + a;
  var b = a in document;
  b || (b = document.createElement("div"), b.setAttribute(a, "return;"), b = "function" === typeof b[a]);
  return b;
}

function Pb(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}

function Qb(a) {
  var b = Pb(a) ? "checked" : "value",
      c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
      d = "" + a[b];

  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get,
        f = c.set;
    Object.defineProperty(a, b, {
      configurable: !0,
      get: function get() {
        return e.call(this);
      },
      set: function set(a) {
        d = "" + a;
        f.call(this, a);
      }
    });
    Object.defineProperty(a, b, {
      enumerable: c.enumerable
    });
    return {
      getValue: function getValue() {
        return d;
      },
      setValue: function setValue(a) {
        d = "" + a;
      },
      stopTracking: function stopTracking() {
        a._valueTracker = null;
        delete a[b];
      }
    };
  }
}

function Rb(a) {
  a._valueTracker || (a._valueTracker = Qb(a));
}

function Sb(a) {
  if (!a) return !1;
  var b = a._valueTracker;
  if (!b) return !0;
  var c = b.getValue();
  var d = "";
  a && (d = Pb(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), !0) : !1;
}

var Tb = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
Tb.hasOwnProperty("ReactCurrentDispatcher") || (Tb.ReactCurrentDispatcher = {
  current: null
});
var Ub = /^(.*)[\\\/]/,
    z = "function" === typeof Symbol && Symbol.for,
    Vb = z ? Symbol.for("react.element") : 60103,
    Wb = z ? Symbol.for("react.portal") : 60106,
    Xb = z ? Symbol.for("react.fragment") : 60107,
    Yb = z ? Symbol.for("react.strict_mode") : 60108,
    Zb = z ? Symbol.for("react.profiler") : 60114,
    $b = z ? Symbol.for("react.provider") : 60109,
    ac = z ? Symbol.for("react.context") : 60110,
    bc = z ? Symbol.for("react.concurrent_mode") : 60111,
    cc = z ? Symbol.for("react.forward_ref") : 60112,
    dc = z ? Symbol.for("react.suspense") : 60113,
    ec = z ? Symbol.for("react.memo") : 60115,
    fc = z ? Symbol.for("react.lazy") : 60116,
    gc = "function" === typeof Symbol && Symbol.iterator;

function hc(a) {
  if (null === a || "object" !== typeof a) return null;
  a = gc && a[gc] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}

function ic(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;

  switch (a) {
    case bc:
      return "ConcurrentMode";

    case Xb:
      return "Fragment";

    case Wb:
      return "Portal";

    case Zb:
      return "Profiler";

    case Yb:
      return "StrictMode";

    case dc:
      return "Suspense";
  }

  if ("object" === typeof a) switch (a.$$typeof) {
    case ac:
      return "Context.Consumer";

    case $b:
      return "Context.Provider";

    case cc:
      var b = a.render;
      b = b.displayName || b.name || "";
      return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");

    case ec:
      return ic(a.type);

    case fc:
      if (a = 1 === a._status ? a._result : null) return ic(a);
  }
  return null;
}

function jc(a) {
  var b = "";

  do {
    a: switch (a.tag) {
      case 3:
      case 4:
      case 6:
      case 7:
      case 10:
      case 9:
        var c = "";
        break a;

      default:
        var d = a._debugOwner,
            e = a._debugSource,
            f = ic(a.type);
        c = null;
        d && (c = ic(d.type));
        d = f;
        f = "";
        e ? f = " (at " + e.fileName.replace(Ub, "") + ":" + e.lineNumber + ")" : c && (f = " (created by " + c + ")");
        c = "\n    in " + (d || "Unknown") + f;
    }

    b += c;
    a = a.return;
  } while (a);

  return b;
}

var kc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    lc = Object.prototype.hasOwnProperty,
    mc = {},
    nc = {};

function oc(a) {
  if (lc.call(nc, a)) return !0;
  if (lc.call(mc, a)) return !1;
  if (kc.test(a)) return nc[a] = !0;
  mc[a] = !0;
  return !1;
}

function pc(a, b, c, d) {
  if (null !== c && 0 === c.type) return !1;

  switch (typeof b) {
    case "function":
    case "symbol":
      return !0;

    case "boolean":
      if (d) return !1;
      if (null !== c) return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;

    default:
      return !1;
  }
}

function qc(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pc(a, b, c, d)) return !0;
  if (d) return !1;
  if (null !== c) switch (c.type) {
    case 3:
      return !b;

    case 4:
      return !1 === b;

    case 5:
      return isNaN(b);

    case 6:
      return isNaN(b) || 1 > b;
  }
  return !1;
}

function C(a, b, c, d, e) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
}

var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
  D[a] = new C(a, 0, !1, a, null);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
  var b = a[0];
  D[b] = new C(b, 1, !1, a[1], null);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
  D[a] = new C(a, 2, !1, a.toLowerCase(), null);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
  D[a] = new C(a, 2, !1, a, null);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
  D[a] = new C(a, 3, !1, a.toLowerCase(), null);
});
["checked", "multiple", "muted", "selected"].forEach(function (a) {
  D[a] = new C(a, 3, !0, a, null);
});
["capture", "download"].forEach(function (a) {
  D[a] = new C(a, 4, !1, a, null);
});
["cols", "rows", "size", "span"].forEach(function (a) {
  D[a] = new C(a, 6, !1, a, null);
});
["rowSpan", "start"].forEach(function (a) {
  D[a] = new C(a, 5, !1, a.toLowerCase(), null);
});
var rc = /[\-:]([a-z])/g;

function sc(a) {
  return a[1].toUpperCase();
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
  var b = a.replace(rc, sc);
  D[b] = new C(b, 1, !1, a, null);
});
"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
  var b = a.replace(rc, sc);
  D[b] = new C(b, 1, !1, a, "http://www.w3.org/1999/xlink");
});
["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
  var b = a.replace(rc, sc);
  D[b] = new C(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace");
});
["tabIndex", "crossOrigin"].forEach(function (a) {
  D[a] = new C(a, 1, !1, a.toLowerCase(), null);
});

function tc(a, b, c, d) {
  var e = D.hasOwnProperty(b) ? D[b] : null;
  var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;
  f || (qc(b, c, e, d) && (c = null), d || null === e ? oc(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}

function uc(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;

    default:
      return "";
  }
}

function vc(a, b) {
  var c = b.checked;
  return n({}, b, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != c ? c : a._wrapperState.initialChecked
  });
}

function wc(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue,
      d = null != b.checked ? b.checked : b.defaultChecked;
  c = uc(null != b.value ? b.value : c);
  a._wrapperState = {
    initialChecked: d,
    initialValue: c,
    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
  };
}

function xc(a, b) {
  b = b.checked;
  null != b && tc(a, "checked", b, !1);
}

function yc(a, b) {
  xc(a, b);
  var c = uc(b.value),
      d = b.type;
  if (null != c) {
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);
  } else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? zc(a, b.type, c) : b.hasOwnProperty("defaultValue") && zc(a, b.type, uc(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}

function Ac(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }

  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !a.defaultChecked;
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}

function zc(a, b, c) {
  if ("number" !== b || a.ownerDocument.activeElement !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}

var Bc = {
  change: {
    phasedRegistrationNames: {
      bubbled: "onChange",
      captured: "onChangeCapture"
    },
    dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
  }
};

function Cc(a, b, c) {
  a = y.getPooled(Bc.change, a, b, c);
  a.type = "change";
  Eb(c);
  Qa(a);
  return a;
}

var Dc = null,
    Ec = null;

function Fc(a) {
  Da(a);
}

function Gc(a) {
  var b = Ja(a);
  if (Sb(b)) return a;
}

function Hc(a, b) {
  if ("change" === a) return b;
}

var Ic = !1;
Ra && (Ic = Ob("input") && (!document.documentMode || 9 < document.documentMode));

function Jc() {
  Dc && (Dc.detachEvent("onpropertychange", Kc), Ec = Dc = null);
}

function Kc(a) {
  "value" === a.propertyName && Gc(Ec) && (a = Cc(Ec, a, Nb(a)), Kb(Fc, a));
}

function Lc(a, b, c) {
  "focus" === a ? (Jc(), Dc = b, Ec = c, Dc.attachEvent("onpropertychange", Kc)) : "blur" === a && Jc();
}

function Mc(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return Gc(Ec);
}

function Nc(a, b) {
  if ("click" === a) return Gc(b);
}

function Oc(a, b) {
  if ("input" === a || "change" === a) return Gc(b);
}

var Pc = {
  eventTypes: Bc,
  _isInputEventSupported: Ic,
  extractEvents: function extractEvents(a, b, c, d) {
    var e = b ? Ja(b) : window,
        f = void 0,
        g = void 0,
        h = e.nodeName && e.nodeName.toLowerCase();
    "select" === h || "input" === h && "file" === e.type ? f = Hc : Mb(e) ? Ic ? f = Oc : (f = Mc, g = Lc) : (h = e.nodeName) && "input" === h.toLowerCase() && ("checkbox" === e.type || "radio" === e.type) && (f = Nc);
    if (f && (f = f(a, b))) return Cc(f, c, d);
    g && g(a, e, b);
    "blur" === a && (a = e._wrapperState) && a.controlled && "number" === e.type && zc(e, "number", e.value);
  }
},
    Qc = y.extend({
  view: null,
  detail: null
}),
    Rc = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};

function Sc(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Rc[a]) ? !!b[a] : !1;
}

function Tc() {
  return Sc;
}

var Uc = 0,
    Vc = 0,
    Wc = !1,
    Xc = !1,
    Yc = Qc.extend({
  screenX: null,
  screenY: null,
  clientX: null,
  clientY: null,
  pageX: null,
  pageY: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  getModifierState: Tc,
  button: null,
  buttons: null,
  relatedTarget: function relatedTarget(a) {
    return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement);
  },
  movementX: function movementX(a) {
    if ("movementX" in a) return a.movementX;
    var b = Uc;
    Uc = a.screenX;
    return Wc ? "mousemove" === a.type ? a.screenX - b : 0 : (Wc = !0, 0);
  },
  movementY: function movementY(a) {
    if ("movementY" in a) return a.movementY;
    var b = Vc;
    Vc = a.screenY;
    return Xc ? "mousemove" === a.type ? a.screenY - b : 0 : (Xc = !0, 0);
  }
}),
    Zc = Yc.extend({
  pointerId: null,
  width: null,
  height: null,
  pressure: null,
  tangentialPressure: null,
  tiltX: null,
  tiltY: null,
  twist: null,
  pointerType: null,
  isPrimary: null
}),
    $c = {
  mouseEnter: {
    registrationName: "onMouseEnter",
    dependencies: ["mouseout", "mouseover"]
  },
  mouseLeave: {
    registrationName: "onMouseLeave",
    dependencies: ["mouseout", "mouseover"]
  },
  pointerEnter: {
    registrationName: "onPointerEnter",
    dependencies: ["pointerout", "pointerover"]
  },
  pointerLeave: {
    registrationName: "onPointerLeave",
    dependencies: ["pointerout", "pointerover"]
  }
},
    ad = {
  eventTypes: $c,
  extractEvents: function extractEvents(a, b, c, d) {
    var e = "mouseover" === a || "pointerover" === a,
        f = "mouseout" === a || "pointerout" === a;
    if (e && (c.relatedTarget || c.fromElement) || !f && !e) return null;
    e = d.window === d ? d : (e = d.ownerDocument) ? e.defaultView || e.parentWindow : window;
    f ? (f = b, b = (b = c.relatedTarget || c.toElement) ? Ha(b) : null) : f = null;
    if (f === b) return null;
    var g = void 0,
        h = void 0,
        l = void 0,
        k = void 0;
    if ("mouseout" === a || "mouseover" === a) g = Yc, h = $c.mouseLeave, l = $c.mouseEnter, k = "mouse";else if ("pointerout" === a || "pointerover" === a) g = Zc, h = $c.pointerLeave, l = $c.pointerEnter, k = "pointer";
    var m = null == f ? e : Ja(f);
    e = null == b ? e : Ja(b);
    a = g.getPooled(h, f, c, d);
    a.type = k + "leave";
    a.target = m;
    a.relatedTarget = e;
    c = g.getPooled(l, b, c, d);
    c.type = k + "enter";
    c.target = e;
    c.relatedTarget = m;
    d = b;
    if (f && d) a: {
      b = f;
      e = d;
      k = 0;

      for (g = b; g; g = La(g)) {
        k++;
      }

      g = 0;

      for (l = e; l; l = La(l)) {
        g++;
      }

      for (; 0 < k - g;) {
        b = La(b), k--;
      }

      for (; 0 < g - k;) {
        e = La(e), g--;
      }

      for (; k--;) {
        if (b === e || b === e.alternate) break a;
        b = La(b);
        e = La(e);
      }

      b = null;
    } else b = null;
    e = b;

    for (b = []; f && f !== e;) {
      k = f.alternate;
      if (null !== k && k === e) break;
      b.push(f);
      f = La(f);
    }

    for (f = []; d && d !== e;) {
      k = d.alternate;
      if (null !== k && k === e) break;
      f.push(d);
      d = La(d);
    }

    for (d = 0; d < b.length; d++) {
      Oa(b[d], "bubbled", a);
    }

    for (d = f.length; 0 < d--;) {
      Oa(f[d], "captured", c);
    }

    return [a, c];
  }
};

function bd(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}

var cd = Object.prototype.hasOwnProperty;

function dd(a, b) {
  if (bd(a, b)) return !0;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
  var c = Object.keys(a),
      d = Object.keys(b);
  if (c.length !== d.length) return !1;

  for (d = 0; d < c.length; d++) {
    if (!cd.call(b, c[d]) || !bd(a[c[d]], b[c[d]])) return !1;
  }

  return !0;
}

function ed(a) {
  var b = a;
  if (a.alternate) for (; b.return;) {
    b = b.return;
  } else {
    if (0 !== (b.effectTag & 2)) return 1;

    for (; b.return;) {
      if (b = b.return, 0 !== (b.effectTag & 2)) return 1;
    }
  }
  return 3 === b.tag ? 2 : 3;
}

function fd(a) {
  2 !== ed(a) ? x("188") : void 0;
}

function gd(a) {
  var b = a.alternate;
  if (!b) return b = ed(a), 3 === b ? x("188") : void 0, 1 === b ? null : a;

  for (var c = a, d = b;;) {
    var e = c.return,
        f = e ? e.alternate : null;
    if (!e || !f) break;

    if (e.child === f.child) {
      for (var g = e.child; g;) {
        if (g === c) return fd(e), a;
        if (g === d) return fd(e), b;
        g = g.sibling;
      }

      x("188");
    }

    if (c.return !== d.return) c = e, d = f;else {
      g = !1;

      for (var h = e.child; h;) {
        if (h === c) {
          g = !0;
          c = e;
          d = f;
          break;
        }

        if (h === d) {
          g = !0;
          d = e;
          c = f;
          break;
        }

        h = h.sibling;
      }

      if (!g) {
        for (h = f.child; h;) {
          if (h === c) {
            g = !0;
            c = f;
            d = e;
            break;
          }

          if (h === d) {
            g = !0;
            d = f;
            c = e;
            break;
          }

          h = h.sibling;
        }

        g ? void 0 : x("189");
      }
    }
    c.alternate !== d ? x("190") : void 0;
  }

  3 !== c.tag ? x("188") : void 0;
  return c.stateNode.current === c ? a : b;
}

function hd(a) {
  a = gd(a);
  if (!a) return null;

  for (var b = a;;) {
    if (5 === b.tag || 6 === b.tag) return b;
    if (b.child) b.child.return = b, b = b.child;else {
      if (b === a) break;

      for (; !b.sibling;) {
        if (!b.return || b.return === a) return null;
        b = b.return;
      }

      b.sibling.return = b.return;
      b = b.sibling;
    }
  }

  return null;
}

var id = y.extend({
  animationName: null,
  elapsedTime: null,
  pseudoElement: null
}),
    jd = y.extend({
  clipboardData: function clipboardData(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  }
}),
    kd = Qc.extend({
  relatedTarget: null
});

function ld(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}

var md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
},
    nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
},
    od = Qc.extend({
  key: function key(a) {
    if (a.key) {
      var b = md[a.key] || a.key;
      if ("Unidentified" !== b) return b;
    }

    return "keypress" === a.type ? (a = ld(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? nd[a.keyCode] || "Unidentified" : "";
  },
  location: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  repeat: null,
  locale: null,
  getModifierState: Tc,
  charCode: function charCode(a) {
    return "keypress" === a.type ? ld(a) : 0;
  },
  keyCode: function keyCode(a) {
    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  },
  which: function which(a) {
    return "keypress" === a.type ? ld(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  }
}),
    pd = Yc.extend({
  dataTransfer: null
}),
    qd = Qc.extend({
  touches: null,
  targetTouches: null,
  changedTouches: null,
  altKey: null,
  metaKey: null,
  ctrlKey: null,
  shiftKey: null,
  getModifierState: Tc
}),
    rd = y.extend({
  propertyName: null,
  elapsedTime: null,
  pseudoElement: null
}),
    sd = Yc.extend({
  deltaX: function deltaX(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function deltaY(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: null,
  deltaMode: null
}),
    td = [["abort", "abort"], [Xa, "animationEnd"], [Ya, "animationIteration"], [Za, "animationStart"], ["canplay", "canPlay"], ["canplaythrough", "canPlayThrough"], ["drag", "drag"], ["dragenter", "dragEnter"], ["dragexit", "dragExit"], ["dragleave", "dragLeave"], ["dragover", "dragOver"], ["durationchange", "durationChange"], ["emptied", "emptied"], ["encrypted", "encrypted"], ["ended", "ended"], ["error", "error"], ["gotpointercapture", "gotPointerCapture"], ["load", "load"], ["loadeddata", "loadedData"], ["loadedmetadata", "loadedMetadata"], ["loadstart", "loadStart"], ["lostpointercapture", "lostPointerCapture"], ["mousemove", "mouseMove"], ["mouseout", "mouseOut"], ["mouseover", "mouseOver"], ["playing", "playing"], ["pointermove", "pointerMove"], ["pointerout", "pointerOut"], ["pointerover", "pointerOver"], ["progress", "progress"], ["scroll", "scroll"], ["seeking", "seeking"], ["stalled", "stalled"], ["suspend", "suspend"], ["timeupdate", "timeUpdate"], ["toggle", "toggle"], ["touchmove", "touchMove"], [$a, "transitionEnd"], ["waiting", "waiting"], ["wheel", "wheel"]],
    ud = {},
    vd = {};

function wd(a, b) {
  var c = a[0];
  a = a[1];
  var d = "on" + (a[0].toUpperCase() + a.slice(1));
  b = {
    phasedRegistrationNames: {
      bubbled: d,
      captured: d + "Capture"
    },
    dependencies: [c],
    isInteractive: b
  };
  ud[a] = b;
  vd[c] = b;
}

[["blur", "blur"], ["cancel", "cancel"], ["click", "click"], ["close", "close"], ["contextmenu", "contextMenu"], ["copy", "copy"], ["cut", "cut"], ["auxclick", "auxClick"], ["dblclick", "doubleClick"], ["dragend", "dragEnd"], ["dragstart", "dragStart"], ["drop", "drop"], ["focus", "focus"], ["input", "input"], ["invalid", "invalid"], ["keydown", "keyDown"], ["keypress", "keyPress"], ["keyup", "keyUp"], ["mousedown", "mouseDown"], ["mouseup", "mouseUp"], ["paste", "paste"], ["pause", "pause"], ["play", "play"], ["pointercancel", "pointerCancel"], ["pointerdown", "pointerDown"], ["pointerup", "pointerUp"], ["ratechange", "rateChange"], ["reset", "reset"], ["seeked", "seeked"], ["submit", "submit"], ["touchcancel", "touchCancel"], ["touchend", "touchEnd"], ["touchstart", "touchStart"], ["volumechange", "volumeChange"]].forEach(function (a) {
  wd(a, !0);
});
td.forEach(function (a) {
  wd(a, !1);
});
var xd = {
  eventTypes: ud,
  isInteractiveTopLevelEventType: function isInteractiveTopLevelEventType(a) {
    a = vd[a];
    return void 0 !== a && !0 === a.isInteractive;
  },
  extractEvents: function extractEvents(a, b, c, d) {
    var e = vd[a];
    if (!e) return null;

    switch (a) {
      case "keypress":
        if (0 === ld(c)) return null;

      case "keydown":
      case "keyup":
        a = od;
        break;

      case "blur":
      case "focus":
        a = kd;
        break;

      case "click":
        if (2 === c.button) return null;

      case "auxclick":
      case "dblclick":
      case "mousedown":
      case "mousemove":
      case "mouseup":
      case "mouseout":
      case "mouseover":
      case "contextmenu":
        a = Yc;
        break;

      case "drag":
      case "dragend":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "dragstart":
      case "drop":
        a = pd;
        break;

      case "touchcancel":
      case "touchend":
      case "touchmove":
      case "touchstart":
        a = qd;
        break;

      case Xa:
      case Ya:
      case Za:
        a = id;
        break;

      case $a:
        a = rd;
        break;

      case "scroll":
        a = Qc;
        break;

      case "wheel":
        a = sd;
        break;

      case "copy":
      case "cut":
      case "paste":
        a = jd;
        break;

      case "gotpointercapture":
      case "lostpointercapture":
      case "pointercancel":
      case "pointerdown":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerup":
        a = Zc;
        break;

      default:
        a = y;
    }

    b = a.getPooled(e, b, c, d);
    Qa(b);
    return b;
  }
},
    yd = xd.isInteractiveTopLevelEventType,
    zd = [];

function Ad(a) {
  var b = a.targetInst,
      c = b;

  do {
    if (!c) {
      a.ancestors.push(c);
      break;
    }

    var d;

    for (d = c; d.return;) {
      d = d.return;
    }

    d = 3 !== d.tag ? null : d.stateNode.containerInfo;
    if (!d) break;
    a.ancestors.push(c);
    c = Ha(d);
  } while (c);

  for (c = 0; c < a.ancestors.length; c++) {
    b = a.ancestors[c];
    var e = Nb(a.nativeEvent);
    d = a.topLevelType;

    for (var f = a.nativeEvent, g = null, h = 0; h < oa.length; h++) {
      var l = oa[h];
      l && (l = l.extractEvents(d, b, f, e)) && (g = xa(g, l));
    }

    Da(g);
  }
}

var Bd = !0;

function E(a, b) {
  if (!b) return null;
  var c = (yd(a) ? Cd : Dd).bind(null, a);
  b.addEventListener(a, c, !1);
}

function Ed(a, b) {
  if (!b) return null;
  var c = (yd(a) ? Cd : Dd).bind(null, a);
  b.addEventListener(a, c, !0);
}

function Cd(a, b) {
  Hb(Dd, a, b);
}

function Dd(a, b) {
  if (Bd) {
    var c = Nb(b);
    c = Ha(c);
    null === c || "number" !== typeof c.tag || 2 === ed(c) || (c = null);

    if (zd.length) {
      var d = zd.pop();
      d.topLevelType = a;
      d.nativeEvent = b;
      d.targetInst = c;
      a = d;
    } else a = {
      topLevelType: a,
      nativeEvent: b,
      targetInst: c,
      ancestors: []
    };

    try {
      Kb(Ad, a);
    } finally {
      a.topLevelType = null, a.nativeEvent = null, a.targetInst = null, a.ancestors.length = 0, 10 > zd.length && zd.push(a);
    }
  }
}

var Fd = {},
    Gd = 0,
    Hd = "_reactListenersID" + ("" + Math.random()).slice(2);

function Id(a) {
  Object.prototype.hasOwnProperty.call(a, Hd) || (a[Hd] = Gd++, Fd[a[Hd]] = {});
  return Fd[a[Hd]];
}

function Jd(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;

  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}

function Kd(a) {
  for (; a && a.firstChild;) {
    a = a.firstChild;
  }

  return a;
}

function Ld(a, b) {
  var c = Kd(a);
  a = 0;

  for (var d; c;) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b) return {
        node: c,
        offset: b - a
      };
      a = d;
    }

    a: {
      for (; c;) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }

        c = c.parentNode;
      }

      c = void 0;
    }

    c = Kd(c);
  }
}

function Md(a, b) {
  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Md(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
}

function Nd() {
  for (var a = window, b = Jd(); b instanceof a.HTMLIFrameElement;) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = !1;
    }

    if (c) a = b.contentWindow;else break;
    b = Jd(a.document);
  }

  return b;
}

function Od(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}

function Pd() {
  var a = Nd();

  if (Od(a)) {
    if ("selectionStart" in a) var b = {
      start: a.selectionStart,
      end: a.selectionEnd
    };else a: {
      b = (b = a.ownerDocument) && b.defaultView || window;
      var c = b.getSelection && b.getSelection();

      if (c && 0 !== c.rangeCount) {
        b = c.anchorNode;
        var d = c.anchorOffset,
            e = c.focusNode;
        c = c.focusOffset;

        try {
          b.nodeType, e.nodeType;
        } catch (A) {
          b = null;
          break a;
        }

        var f = 0,
            g = -1,
            h = -1,
            l = 0,
            k = 0,
            m = a,
            p = null;

        b: for (;;) {
          for (var t;;) {
            m !== b || 0 !== d && 3 !== m.nodeType || (g = f + d);
            m !== e || 0 !== c && 3 !== m.nodeType || (h = f + c);
            3 === m.nodeType && (f += m.nodeValue.length);
            if (null === (t = m.firstChild)) break;
            p = m;
            m = t;
          }

          for (;;) {
            if (m === a) break b;
            p === b && ++l === d && (g = f);
            p === e && ++k === c && (h = f);
            if (null !== (t = m.nextSibling)) break;
            m = p;
            p = m.parentNode;
          }

          m = t;
        }

        b = -1 === g || -1 === h ? null : {
          start: g,
          end: h
        };
      } else b = null;
    }
    b = b || {
      start: 0,
      end: 0
    };
  } else b = null;

  return {
    focusedElem: a,
    selectionRange: b
  };
}

function Qd(a) {
  var b = Nd(),
      c = a.focusedElem,
      d = a.selectionRange;

  if (b !== c && c && c.ownerDocument && Md(c.ownerDocument.documentElement, c)) {
    if (null !== d && Od(c)) if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
      a = a.getSelection();
      var e = c.textContent.length,
          f = Math.min(d.start, e);
      d = void 0 === d.end ? f : Math.min(d.end, e);
      !a.extend && f > d && (e = d, d = f, f = e);
      e = Ld(c, f);
      var g = Ld(c, d);
      e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
    }
    b = [];

    for (a = c; a = a.parentNode;) {
      1 === a.nodeType && b.push({
        element: a,
        left: a.scrollLeft,
        top: a.scrollTop
      });
    }

    "function" === typeof c.focus && c.focus();

    for (c = 0; c < b.length; c++) {
      a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
    }
  }
}

var Rd = Ra && "documentMode" in document && 11 >= document.documentMode,
    Sd = {
  select: {
    phasedRegistrationNames: {
      bubbled: "onSelect",
      captured: "onSelectCapture"
    },
    dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
  }
},
    Td = null,
    Ud = null,
    Vd = null,
    Wd = !1;

function Xd(a, b) {
  var c = b.window === b ? b.document : 9 === b.nodeType ? b : b.ownerDocument;
  if (Wd || null == Td || Td !== Jd(c)) return null;
  c = Td;
  "selectionStart" in c && Od(c) ? c = {
    start: c.selectionStart,
    end: c.selectionEnd
  } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
    anchorNode: c.anchorNode,
    anchorOffset: c.anchorOffset,
    focusNode: c.focusNode,
    focusOffset: c.focusOffset
  });
  return Vd && dd(Vd, c) ? null : (Vd = c, a = y.getPooled(Sd.select, Ud, a, b), a.type = "select", a.target = Td, Qa(a), a);
}

var Yd = {
  eventTypes: Sd,
  extractEvents: function extractEvents(a, b, c, d) {
    var e = d.window === d ? d.document : 9 === d.nodeType ? d : d.ownerDocument,
        f;

    if (!(f = !e)) {
      a: {
        e = Id(e);
        f = sa.onSelect;

        for (var g = 0; g < f.length; g++) {
          var h = f[g];

          if (!e.hasOwnProperty(h) || !e[h]) {
            e = !1;
            break a;
          }
        }

        e = !0;
      }

      f = !e;
    }

    if (f) return null;
    e = b ? Ja(b) : window;

    switch (a) {
      case "focus":
        if (Mb(e) || "true" === e.contentEditable) Td = e, Ud = b, Vd = null;
        break;

      case "blur":
        Vd = Ud = Td = null;
        break;

      case "mousedown":
        Wd = !0;
        break;

      case "contextmenu":
      case "mouseup":
      case "dragend":
        return Wd = !1, Xd(c, d);

      case "selectionchange":
        if (Rd) break;

      case "keydown":
      case "keyup":
        return Xd(c, d);
    }

    return null;
  }
};
Ba.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
ta = Ka;
ua = Ia;
va = Ja;
Ba.injectEventPluginsByName({
  SimpleEventPlugin: xd,
  EnterLeaveEventPlugin: ad,
  ChangeEventPlugin: Pc,
  SelectEventPlugin: Yd,
  BeforeInputEventPlugin: zb
});

function Zd(a) {
  var b = "";
  aa.Children.forEach(a, function (a) {
    null != a && (b += a);
  });
  return b;
}

function $d(a, b) {
  a = n({
    children: void 0
  }, b);
  if (b = Zd(b.children)) a.children = b;
  return a;
}

function ae(a, b, c, d) {
  a = a.options;

  if (b) {
    b = {};

    for (var e = 0; e < c.length; e++) {
      b["$" + c[e]] = !0;
    }

    for (c = 0; c < a.length; c++) {
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
    }
  } else {
    c = "" + uc(c);
    b = null;

    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = !0;
        d && (a[e].defaultSelected = !0);
        return;
      }

      null !== b || a[e].disabled || (b = a[e]);
    }

    null !== b && (b.selected = !0);
  }
}

function be(a, b) {
  null != b.dangerouslySetInnerHTML ? x("91") : void 0;
  return n({}, b, {
    value: void 0,
    defaultValue: void 0,
    children: "" + a._wrapperState.initialValue
  });
}

function ce(a, b) {
  var c = b.value;
  null == c && (c = b.defaultValue, b = b.children, null != b && (null != c ? x("92") : void 0, Array.isArray(b) && (1 >= b.length ? void 0 : x("93"), b = b[0]), c = b), null == c && (c = ""));
  a._wrapperState = {
    initialValue: uc(c)
  };
}

function de(a, b) {
  var c = uc(b.value),
      d = uc(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}

function ee(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && (a.value = b);
}

var fe = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg"
};

function ge(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";

    case "math":
      return "http://www.w3.org/1998/Math/MathML";

    default:
      return "http://www.w3.org/1999/xhtml";
  }
}

function he(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? ge(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}

var ie = void 0,
    je = function (a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function () {
      return a(b, c, d, e);
    });
  } : a;
}(function (a, b) {
  if (a.namespaceURI !== fe.svg || "innerHTML" in a) a.innerHTML = b;else {
    ie = ie || document.createElement("div");
    ie.innerHTML = "<svg>" + b + "</svg>";

    for (b = ie.firstChild; a.firstChild;) {
      a.removeChild(a.firstChild);
    }

    for (; b.firstChild;) {
      a.appendChild(b.firstChild);
    }
  }
});

function ke(a, b) {
  if (b) {
    var c = a.firstChild;

    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }

  a.textContent = b;
}

var le = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
},
    me = ["Webkit", "ms", "Moz", "O"];
Object.keys(le).forEach(function (a) {
  me.forEach(function (b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    le[b] = le[a];
  });
});

function ne(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || le.hasOwnProperty(a) && le[a] ? ("" + b).trim() : b + "px";
}

function oe(a, b) {
  a = a.style;

  for (var c in b) {
    if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"),
          e = ne(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
  }
}

var pe = n({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});

function qe(a, b) {
  b && (pe[a] && (null != b.children || null != b.dangerouslySetInnerHTML ? x("137", a, "") : void 0), null != b.dangerouslySetInnerHTML && (null != b.children ? x("60") : void 0, "object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML ? void 0 : x("61")), null != b.style && "object" !== typeof b.style ? x("62", "") : void 0);
}

function re(a, b) {
  if (-1 === a.indexOf("-")) return "string" === typeof b.is;

  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;

    default:
      return !0;
  }
}

function se(a, b) {
  a = 9 === a.nodeType || 11 === a.nodeType ? a : a.ownerDocument;
  var c = Id(a);
  b = sa[b];

  for (var d = 0; d < b.length; d++) {
    var e = b[d];

    if (!c.hasOwnProperty(e) || !c[e]) {
      switch (e) {
        case "scroll":
          Ed("scroll", a);
          break;

        case "focus":
        case "blur":
          Ed("focus", a);
          Ed("blur", a);
          c.blur = !0;
          c.focus = !0;
          break;

        case "cancel":
        case "close":
          Ob(e) && Ed(e, a);
          break;

        case "invalid":
        case "submit":
        case "reset":
          break;

        default:
          -1 === ab.indexOf(e) && E(e, a);
      }

      c[e] = !0;
    }
  }
}

function te() {}

var ue = null,
    ve = null;

function we(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }

  return !1;
}

function xe(a, b) {
  return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}

var ye = "function" === typeof setTimeout ? setTimeout : void 0,
    ze = "function" === typeof clearTimeout ? clearTimeout : void 0,
    Ae = r.unstable_scheduleCallback,
    Be = r.unstable_cancelCallback;

function Ce(a, b, c, d, e) {
  a[Ga] = e;
  "input" === c && "radio" === e.type && null != e.name && xc(a, e);
  re(c, d);
  d = re(c, e);

  for (var f = 0; f < b.length; f += 2) {
    var g = b[f],
        h = b[f + 1];
    "style" === g ? oe(a, h) : "dangerouslySetInnerHTML" === g ? je(a, h) : "children" === g ? ke(a, h) : tc(a, g, h, d);
  }

  switch (c) {
    case "input":
      yc(a, e);
      break;

    case "textarea":
      de(a, e);
      break;

    case "select":
      b = a._wrapperState.wasMultiple, a._wrapperState.wasMultiple = !!e.multiple, c = e.value, null != c ? ae(a, !!e.multiple, c, !1) : b !== !!e.multiple && (null != e.defaultValue ? ae(a, !!e.multiple, e.defaultValue, !0) : ae(a, !!e.multiple, e.multiple ? [] : "", !1));
  }
}

function De(a) {
  for (a = a.nextSibling; a && 1 !== a.nodeType && 3 !== a.nodeType;) {
    a = a.nextSibling;
  }

  return a;
}

function Ee(a) {
  for (a = a.firstChild; a && 1 !== a.nodeType && 3 !== a.nodeType;) {
    a = a.nextSibling;
  }

  return a;
}

new Set();
var Fe = [],
    Ge = -1;

function F(a) {
  0 > Ge || (a.current = Fe[Ge], Fe[Ge] = null, Ge--);
}

function G(a, b) {
  Ge++;
  Fe[Ge] = a.current;
  a.current = b;
}

var He = {},
    H = {
  current: He
},
    I = {
  current: !1
},
    Ie = He;

function Je(a, b) {
  var c = a.type.contextTypes;
  if (!c) return He;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
  var e = {},
      f;

  for (f in c) {
    e[f] = b[f];
  }

  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}

function J(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}

function Ke(a) {
  F(I, a);
  F(H, a);
}

function Le(a) {
  F(I, a);
  F(H, a);
}

function Me(a, b, c) {
  H.current !== He ? x("168") : void 0;
  G(H, b, a);
  G(I, c, a);
}

function Ne(a, b, c) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if ("function" !== typeof d.getChildContext) return c;
  d = d.getChildContext();

  for (var e in d) {
    e in a ? void 0 : x("108", ic(b) || "Unknown", e);
  }

  return n({}, c, d);
}

function Oe(a) {
  var b = a.stateNode;
  b = b && b.__reactInternalMemoizedMergedChildContext || He;
  Ie = H.current;
  G(H, b, a);
  G(I, I.current, a);
  return !0;
}

function Pe(a, b, c) {
  var d = a.stateNode;
  d ? void 0 : x("169");
  c ? (b = Ne(a, b, Ie), d.__reactInternalMemoizedMergedChildContext = b, F(I, a), F(H, a), G(H, b, a)) : F(I, a);
  G(I, c, a);
}

var Qe = null,
    Re = null;

function Se(a) {
  return function (b) {
    try {
      return a(b);
    } catch (c) {}
  };
}

function Te(a) {
  if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
  var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (b.isDisabled || !b.supportsFiber) return !0;

  try {
    var c = b.inject(a);
    Qe = Se(function (a) {
      return b.onCommitFiberRoot(c, a);
    });
    Re = Se(function (a) {
      return b.onCommitFiberUnmount(c, a);
    });
  } catch (d) {}

  return !0;
}

function Ue(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.contextDependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.effectTag = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childExpirationTime = this.expirationTime = 0;
  this.alternate = null;
}

function K(a, b, c, d) {
  return new Ue(a, b, c, d);
}

function Ve(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}

function We(a) {
  if ("function" === typeof a) return Ve(a) ? 1 : 0;

  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === cc) return 11;
    if (a === ec) return 14;
  }

  return 2;
}

function Xe(a, b) {
  var c = a.alternate;
  null === c ? (c = K(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.effectTag = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
  c.childExpirationTime = a.childExpirationTime;
  c.expirationTime = a.expirationTime;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  c.contextDependencies = a.contextDependencies;
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}

function Ye(a, b, c, d, e, f) {
  var g = 2;
  d = a;
  if ("function" === typeof a) Ve(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
    case Xb:
      return Ze(c.children, e, f, b);

    case bc:
      return $e(c, e | 3, f, b);

    case Yb:
      return $e(c, e | 2, f, b);

    case Zb:
      return a = K(12, c, b, e | 4), a.elementType = Zb, a.type = Zb, a.expirationTime = f, a;

    case dc:
      return a = K(13, c, b, e), a.elementType = dc, a.type = dc, a.expirationTime = f, a;

    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case $b:
          g = 10;
          break a;

        case ac:
          g = 9;
          break a;

        case cc:
          g = 11;
          break a;

        case ec:
          g = 14;
          break a;

        case fc:
          g = 16;
          d = null;
          break a;
      }
      x("130", null == a ? a : typeof a, "");
  }
  b = K(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.expirationTime = f;
  return b;
}

function Ze(a, b, c, d) {
  a = K(7, a, d, b);
  a.expirationTime = c;
  return a;
}

function $e(a, b, c, d) {
  a = K(8, a, d, b);
  b = 0 === (b & 1) ? Yb : bc;
  a.elementType = b;
  a.type = b;
  a.expirationTime = c;
  return a;
}

function af(a, b, c) {
  a = K(6, a, null, b);
  a.expirationTime = c;
  return a;
}

function bf(a, b, c) {
  b = K(4, null !== a.children ? a.children : [], a.key, b);
  b.expirationTime = c;
  b.stateNode = {
    containerInfo: a.containerInfo,
    pendingChildren: null,
    implementation: a.implementation
  };
  return b;
}

function cf(a, b) {
  a.didError = !1;
  var c = a.earliestPendingTime;
  0 === c ? a.earliestPendingTime = a.latestPendingTime = b : c < b ? a.earliestPendingTime = b : a.latestPendingTime > b && (a.latestPendingTime = b);
  df(b, a);
}

function ef(a, b) {
  a.didError = !1;
  if (0 === b) a.earliestPendingTime = 0, a.latestPendingTime = 0, a.earliestSuspendedTime = 0, a.latestSuspendedTime = 0, a.latestPingedTime = 0;else {
    b < a.latestPingedTime && (a.latestPingedTime = 0);
    var c = a.latestPendingTime;
    0 !== c && (c > b ? a.earliestPendingTime = a.latestPendingTime = 0 : a.earliestPendingTime > b && (a.earliestPendingTime = a.latestPendingTime));
    c = a.earliestSuspendedTime;
    0 === c ? cf(a, b) : b < a.latestSuspendedTime ? (a.earliestSuspendedTime = 0, a.latestSuspendedTime = 0, a.latestPingedTime = 0, cf(a, b)) : b > c && cf(a, b);
  }
  df(0, a);
}

function ff(a, b) {
  a.didError = !1;
  a.latestPingedTime >= b && (a.latestPingedTime = 0);
  var c = a.earliestPendingTime,
      d = a.latestPendingTime;
  c === b ? a.earliestPendingTime = d === b ? a.latestPendingTime = 0 : d : d === b && (a.latestPendingTime = c);
  c = a.earliestSuspendedTime;
  d = a.latestSuspendedTime;
  0 === c ? a.earliestSuspendedTime = a.latestSuspendedTime = b : c < b ? a.earliestSuspendedTime = b : d > b && (a.latestSuspendedTime = b);
  df(b, a);
}

function gf(a, b) {
  var c = a.earliestPendingTime;
  a = a.earliestSuspendedTime;
  c > b && (b = c);
  a > b && (b = a);
  return b;
}

function df(a, b) {
  var c = b.earliestSuspendedTime,
      d = b.latestSuspendedTime,
      e = b.earliestPendingTime,
      f = b.latestPingedTime;
  e = 0 !== e ? e : f;
  0 === e && (0 === a || d < a) && (e = d);
  a = e;
  0 !== a && c > a && (a = c);
  b.nextExpirationTimeToWorkOn = e;
  b.expirationTime = a;
}

function L(a, b) {
  if (a && a.defaultProps) {
    b = n({}, b);
    a = a.defaultProps;

    for (var c in a) {
      void 0 === b[c] && (b[c] = a[c]);
    }
  }

  return b;
}

function hf(a) {
  var b = a._result;

  switch (a._status) {
    case 1:
      return b;

    case 2:
      throw b;

    case 0:
      throw b;

    default:
      a._status = 0;
      b = a._ctor;
      b = b();
      b.then(function (b) {
        0 === a._status && (b = b.default, a._status = 1, a._result = b);
      }, function (b) {
        0 === a._status && (a._status = 2, a._result = b);
      });

      switch (a._status) {
        case 1:
          return a._result;

        case 2:
          throw a._result;
      }

      a._result = b;
      throw b;
  }
}

var jf = new aa.Component().refs;

function kf(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : n({}, b, c);
  a.memoizedState = c;
  d = a.updateQueue;
  null !== d && 0 === a.expirationTime && (d.baseState = c);
}

var tf = {
  isMounted: function isMounted(a) {
    return (a = a._reactInternalFiber) ? 2 === ed(a) : !1;
  },
  enqueueSetState: function enqueueSetState(a, b, c) {
    a = a._reactInternalFiber;
    var d = lf();
    d = mf(d, a);
    var e = nf(d);
    e.payload = b;
    void 0 !== c && null !== c && (e.callback = c);
    of();
    pf(a, e);
    qf(a, d);
  },
  enqueueReplaceState: function enqueueReplaceState(a, b, c) {
    a = a._reactInternalFiber;
    var d = lf();
    d = mf(d, a);
    var e = nf(d);
    e.tag = rf;
    e.payload = b;
    void 0 !== c && null !== c && (e.callback = c);
    of();
    pf(a, e);
    qf(a, d);
  },
  enqueueForceUpdate: function enqueueForceUpdate(a, b) {
    a = a._reactInternalFiber;
    var c = lf();
    c = mf(c, a);
    var d = nf(c);
    d.tag = sf;
    void 0 !== b && null !== b && (d.callback = b);
    of();
    pf(a, d);
    qf(a, c);
  }
};

function uf(a, b, c, d, e, f, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !dd(c, d) || !dd(e, f) : !0;
}

function vf(a, b, c) {
  var d = !1,
      e = He;
  var f = b.contextType;
  "object" === typeof f && null !== f ? f = M(f) : (e = J(b) ? Ie : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Je(a, e) : He);
  b = new b(c, f);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = tf;
  a.stateNode = b;
  b._reactInternalFiber = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}

function wf(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && tf.enqueueReplaceState(b, b.state, null);
}

function xf(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = jf;
  var f = b.contextType;
  "object" === typeof f && null !== f ? e.context = M(f) : (f = J(b) ? Ie : H.current, e.context = Je(a, f));
  f = a.updateQueue;
  null !== f && (yf(a, f, c, e, d), e.state = a.memoizedState);
  f = b.getDerivedStateFromProps;
  "function" === typeof f && (kf(a, b, f, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && tf.enqueueReplaceState(e, e.state, null), f = a.updateQueue, null !== f && (yf(a, f, c, e, d), e.state = a.memoizedState));
  "function" === typeof e.componentDidMount && (a.effectTag |= 4);
}

var zf = Array.isArray;

function Af(a, b, c) {
  a = c.ref;

  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      var d = void 0;
      c && (1 !== c.tag ? x("309") : void 0, d = c.stateNode);
      d ? void 0 : x("147", a);
      var e = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;

      b = function b(a) {
        var b = d.refs;
        b === jf && (b = d.refs = {});
        null === a ? delete b[e] : b[e] = a;
      };

      b._stringRef = e;
      return b;
    }

    "string" !== typeof a ? x("284") : void 0;
    c._owner ? void 0 : x("290", a);
  }

  return a;
}

function Bf(a, b) {
  "textarea" !== a.type && x("31", "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, "");
}

function Cf(a) {
  function b(b, c) {
    if (a) {
      var d = b.lastEffect;
      null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
      c.nextEffect = null;
      c.effectTag = 8;
    }
  }

  function c(c, d) {
    if (!a) return null;

    for (; null !== d;) {
      b(c, d), d = d.sibling;
    }

    return null;
  }

  function d(a, b) {
    for (a = new Map(); null !== b;) {
      null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
    }

    return a;
  }

  function e(a, b, c) {
    a = Xe(a, b, c);
    a.index = 0;
    a.sibling = null;
    return a;
  }

  function f(b, c, d) {
    b.index = d;
    if (!a) return c;
    d = b.alternate;
    if (null !== d) return d = d.index, d < c ? (b.effectTag = 2, c) : d;
    b.effectTag = 2;
    return c;
  }

  function g(b) {
    a && null === b.alternate && (b.effectTag = 2);
    return b;
  }

  function h(a, b, c, d) {
    if (null === b || 6 !== b.tag) return b = af(c, a.mode, d), b.return = a, b;
    b = e(b, c, d);
    b.return = a;
    return b;
  }

  function l(a, b, c, d) {
    if (null !== b && b.elementType === c.type) return d = e(b, c.props, d), d.ref = Af(a, b, c), d.return = a, d;
    d = Ye(c.type, c.key, c.props, null, a.mode, d);
    d.ref = Af(a, b, c);
    d.return = a;
    return d;
  }

  function k(a, b, c, d) {
    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = bf(c, a.mode, d), b.return = a, b;
    b = e(b, c.children || [], d);
    b.return = a;
    return b;
  }

  function m(a, b, c, d, f) {
    if (null === b || 7 !== b.tag) return b = Ze(c, a.mode, d, f), b.return = a, b;
    b = e(b, c, d);
    b.return = a;
    return b;
  }

  function p(a, b, c) {
    if ("string" === typeof b || "number" === typeof b) return b = af("" + b, a.mode, c), b.return = a, b;

    if ("object" === typeof b && null !== b) {
      switch (b.$$typeof) {
        case Vb:
          return c = Ye(b.type, b.key, b.props, null, a.mode, c), c.ref = Af(a, null, b), c.return = a, c;

        case Wb:
          return b = bf(b, a.mode, c), b.return = a, b;
      }

      if (zf(b) || hc(b)) return b = Ze(b, a.mode, c, null), b.return = a, b;
      Bf(a, b);
    }

    return null;
  }

  function t(a, b, c, d) {
    var e = null !== b ? b.key : null;
    if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);

    if ("object" === typeof c && null !== c) {
      switch (c.$$typeof) {
        case Vb:
          return c.key === e ? c.type === Xb ? m(a, b, c.props.children, d, e) : l(a, b, c, d) : null;

        case Wb:
          return c.key === e ? k(a, b, c, d) : null;
      }

      if (zf(c) || hc(c)) return null !== e ? null : m(a, b, c, d, null);
      Bf(a, c);
    }

    return null;
  }

  function A(a, b, c, d, e) {
    if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);

    if ("object" === typeof d && null !== d) {
      switch (d.$$typeof) {
        case Vb:
          return a = a.get(null === d.key ? c : d.key) || null, d.type === Xb ? m(b, a, d.props.children, e, d.key) : l(b, a, d, e);

        case Wb:
          return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
      }

      if (zf(d) || hc(d)) return a = a.get(c) || null, m(b, a, d, e, null);
      Bf(b, d);
    }

    return null;
  }

  function v(e, g, h, k) {
    for (var l = null, m = null, q = g, u = g = 0, B = null; null !== q && u < h.length; u++) {
      q.index > u ? (B = q, q = null) : B = q.sibling;
      var w = t(e, q, h[u], k);

      if (null === w) {
        null === q && (q = B);
        break;
      }

      a && q && null === w.alternate && b(e, q);
      g = f(w, g, u);
      null === m ? l = w : m.sibling = w;
      m = w;
      q = B;
    }

    if (u === h.length) return c(e, q), l;

    if (null === q) {
      for (; u < h.length; u++) {
        if (q = p(e, h[u], k)) g = f(q, g, u), null === m ? l = q : m.sibling = q, m = q;
      }

      return l;
    }

    for (q = d(e, q); u < h.length; u++) {
      if (B = A(q, e, u, h[u], k)) a && null !== B.alternate && q.delete(null === B.key ? u : B.key), g = f(B, g, u), null === m ? l = B : m.sibling = B, m = B;
    }

    a && q.forEach(function (a) {
      return b(e, a);
    });
    return l;
  }

  function R(e, g, h, k) {
    var l = hc(h);
    "function" !== typeof l ? x("150") : void 0;
    h = l.call(h);
    null == h ? x("151") : void 0;

    for (var m = l = null, q = g, u = g = 0, B = null, w = h.next(); null !== q && !w.done; u++, w = h.next()) {
      q.index > u ? (B = q, q = null) : B = q.sibling;
      var v = t(e, q, w.value, k);

      if (null === v) {
        q || (q = B);
        break;
      }

      a && q && null === v.alternate && b(e, q);
      g = f(v, g, u);
      null === m ? l = v : m.sibling = v;
      m = v;
      q = B;
    }

    if (w.done) return c(e, q), l;

    if (null === q) {
      for (; !w.done; u++, w = h.next()) {
        w = p(e, w.value, k), null !== w && (g = f(w, g, u), null === m ? l = w : m.sibling = w, m = w);
      }

      return l;
    }

    for (q = d(e, q); !w.done; u++, w = h.next()) {
      w = A(q, e, u, w.value, k), null !== w && (a && null !== w.alternate && q.delete(null === w.key ? u : w.key), g = f(w, g, u), null === m ? l = w : m.sibling = w, m = w);
    }

    a && q.forEach(function (a) {
      return b(e, a);
    });
    return l;
  }

  return function (a, d, f, h) {
    var k = "object" === typeof f && null !== f && f.type === Xb && null === f.key;
    k && (f = f.props.children);
    var l = "object" === typeof f && null !== f;
    if (l) switch (f.$$typeof) {
      case Vb:
        a: {
          l = f.key;

          for (k = d; null !== k;) {
            if (k.key === l) {
              if (7 === k.tag ? f.type === Xb : k.elementType === f.type) {
                c(a, k.sibling);
                d = e(k, f.type === Xb ? f.props.children : f.props, h);
                d.ref = Af(a, k, f);
                d.return = a;
                a = d;
                break a;
              } else {
                c(a, k);
                break;
              }
            } else b(a, k);
            k = k.sibling;
          }

          f.type === Xb ? (d = Ze(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Ye(f.type, f.key, f.props, null, a.mode, h), h.ref = Af(a, d, f), h.return = a, a = h);
        }

        return g(a);

      case Wb:
        a: {
          for (k = f.key; null !== d;) {
            if (d.key === k) {
              if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                c(a, d.sibling);
                d = e(d, f.children || [], h);
                d.return = a;
                a = d;
                break a;
              } else {
                c(a, d);
                break;
              }
            } else b(a, d);
            d = d.sibling;
          }

          d = bf(f, a.mode, h);
          d.return = a;
          a = d;
        }

        return g(a);
    }
    if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f, h), d.return = a, a = d) : (c(a, d), d = af(f, a.mode, h), d.return = a, a = d), g(a);
    if (zf(f)) return v(a, d, f, h);
    if (hc(f)) return R(a, d, f, h);
    l && Bf(a, f);
    if ("undefined" === typeof f && !k) switch (a.tag) {
      case 1:
      case 0:
        h = a.type, x("152", h.displayName || h.name || "Component");
    }
    return c(a, d);
  };
}

var Df = Cf(!0),
    Ef = Cf(!1),
    Ff = {},
    N = {
  current: Ff
},
    Gf = {
  current: Ff
},
    Hf = {
  current: Ff
};

function If(a) {
  a === Ff ? x("174") : void 0;
  return a;
}

function Jf(a, b) {
  G(Hf, b, a);
  G(Gf, a, a);
  G(N, Ff, a);
  var c = b.nodeType;

  switch (c) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : he(null, "");
      break;

    default:
      c = 8 === c ? b.parentNode : b, b = c.namespaceURI || null, c = c.tagName, b = he(b, c);
  }

  F(N, a);
  G(N, b, a);
}

function Kf(a) {
  F(N, a);
  F(Gf, a);
  F(Hf, a);
}

function Lf(a) {
  If(Hf.current);
  var b = If(N.current);
  var c = he(b, a.type);
  b !== c && (G(Gf, a, a), G(N, c, a));
}

function Mf(a) {
  Gf.current === a && (F(N, a), F(Gf, a));
}

var Nf = 0,
    Of = 2,
    Pf = 4,
    Qf = 8,
    Rf = 16,
    Sf = 32,
    Tf = 64,
    Uf = 128,
    Vf = Tb.ReactCurrentDispatcher,
    Wf = 0,
    Xf = null,
    O = null,
    P = null,
    Yf = null,
    Q = null,
    Zf = null,
    $f = 0,
    ag = null,
    bg = 0,
    cg = !1,
    dg = null,
    eg = 0;

function fg() {
  x("321");
}

function gg(a, b) {
  if (null === b) return !1;

  for (var c = 0; c < b.length && c < a.length; c++) {
    if (!bd(a[c], b[c])) return !1;
  }

  return !0;
}

function hg(a, b, c, d, e, f) {
  Wf = f;
  Xf = b;
  P = null !== a ? a.memoizedState : null;
  Vf.current = null === P ? ig : jg;
  b = c(d, e);

  if (cg) {
    do {
      cg = !1, eg += 1, P = null !== a ? a.memoizedState : null, Zf = Yf, ag = Q = O = null, Vf.current = jg, b = c(d, e);
    } while (cg);

    dg = null;
    eg = 0;
  }

  Vf.current = kg;
  a = Xf;
  a.memoizedState = Yf;
  a.expirationTime = $f;
  a.updateQueue = ag;
  a.effectTag |= bg;
  a = null !== O && null !== O.next;
  Wf = 0;
  Zf = Q = Yf = P = O = Xf = null;
  $f = 0;
  ag = null;
  bg = 0;
  a ? x("300") : void 0;
  return b;
}

function lg() {
  Vf.current = kg;
  Wf = 0;
  Zf = Q = Yf = P = O = Xf = null;
  $f = 0;
  ag = null;
  bg = 0;
  cg = !1;
  dg = null;
  eg = 0;
}

function mg() {
  var a = {
    memoizedState: null,
    baseState: null,
    queue: null,
    baseUpdate: null,
    next: null
  };
  null === Q ? Yf = Q = a : Q = Q.next = a;
  return Q;
}

function ng() {
  if (null !== Zf) Q = Zf, Zf = Q.next, O = P, P = null !== O ? O.next : null;else {
    null === P ? x("310") : void 0;
    O = P;
    var a = {
      memoizedState: O.memoizedState,
      baseState: O.baseState,
      queue: O.queue,
      baseUpdate: O.baseUpdate,
      next: null
    };
    Q = null === Q ? Yf = a : Q.next = a;
    P = O.next;
  }
  return Q;
}

function og(a, b) {
  return "function" === typeof b ? b(a) : b;
}

function pg(a) {
  var b = ng(),
      c = b.queue;
  null === c ? x("311") : void 0;
  c.lastRenderedReducer = a;

  if (0 < eg) {
    var d = c.dispatch;

    if (null !== dg) {
      var e = dg.get(c);

      if (void 0 !== e) {
        dg.delete(c);
        var f = b.memoizedState;

        do {
          f = a(f, e.action), e = e.next;
        } while (null !== e);

        bd(f, b.memoizedState) || (qg = !0);
        b.memoizedState = f;
        b.baseUpdate === c.last && (b.baseState = f);
        c.lastRenderedState = f;
        return [f, d];
      }
    }

    return [b.memoizedState, d];
  }

  d = c.last;
  var g = b.baseUpdate;
  f = b.baseState;
  null !== g ? (null !== d && (d.next = null), d = g.next) : d = null !== d ? d.next : null;

  if (null !== d) {
    var h = e = null,
        l = d,
        k = !1;

    do {
      var m = l.expirationTime;
      m < Wf ? (k || (k = !0, h = g, e = f), m > $f && ($f = m)) : f = l.eagerReducer === a ? l.eagerState : a(f, l.action);
      g = l;
      l = l.next;
    } while (null !== l && l !== d);

    k || (h = g, e = f);
    bd(f, b.memoizedState) || (qg = !0);
    b.memoizedState = f;
    b.baseUpdate = h;
    b.baseState = e;
    c.lastRenderedState = f;
  }

  return [b.memoizedState, c.dispatch];
}

function rg(a, b, c, d) {
  a = {
    tag: a,
    create: b,
    destroy: c,
    deps: d,
    next: null
  };
  null === ag ? (ag = {
    lastEffect: null
  }, ag.lastEffect = a.next = a) : (b = ag.lastEffect, null === b ? ag.lastEffect = a.next = a : (c = b.next, b.next = a, a.next = c, ag.lastEffect = a));
  return a;
}

function sg(a, b, c, d) {
  var e = mg();
  bg |= a;
  e.memoizedState = rg(b, c, void 0, void 0 === d ? null : d);
}

function tg(a, b, c, d) {
  var e = ng();
  d = void 0 === d ? null : d;
  var f = void 0;

  if (null !== O) {
    var g = O.memoizedState;
    f = g.destroy;

    if (null !== d && gg(d, g.deps)) {
      rg(Nf, c, f, d);
      return;
    }
  }

  bg |= a;
  e.memoizedState = rg(b, c, f, d);
}

function ug(a, b) {
  if ("function" === typeof b) return a = a(), b(a), function () {
    b(null);
  };
  if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
    b.current = null;
  };
}

function vg() {}

function wg(a, b, c) {
  25 > eg ? void 0 : x("301");
  var d = a.alternate;
  if (a === Xf || null !== d && d === Xf) {
    if (cg = !0, a = {
      expirationTime: Wf,
      action: c,
      eagerReducer: null,
      eagerState: null,
      next: null
    }, null === dg && (dg = new Map()), c = dg.get(b), void 0 === c) dg.set(b, a);else {
      for (b = c; null !== b.next;) {
        b = b.next;
      }

      b.next = a;
    }
  } else {
    of();
    var e = lf();
    e = mf(e, a);
    var f = {
      expirationTime: e,
      action: c,
      eagerReducer: null,
      eagerState: null,
      next: null
    },
        g = b.last;
    if (null === g) f.next = f;else {
      var h = g.next;
      null !== h && (f.next = h);
      g.next = f;
    }
    b.last = f;
    if (0 === a.expirationTime && (null === d || 0 === d.expirationTime) && (d = b.lastRenderedReducer, null !== d)) try {
      var l = b.lastRenderedState,
          k = d(l, c);
      f.eagerReducer = d;
      f.eagerState = k;
      if (bd(k, l)) return;
    } catch (m) {} finally {}
    qf(a, e);
  }
}

var kg = {
  readContext: M,
  useCallback: fg,
  useContext: fg,
  useEffect: fg,
  useImperativeHandle: fg,
  useLayoutEffect: fg,
  useMemo: fg,
  useReducer: fg,
  useRef: fg,
  useState: fg,
  useDebugValue: fg
},
    ig = {
  readContext: M,
  useCallback: function useCallback(a, b) {
    mg().memoizedState = [a, void 0 === b ? null : b];
    return a;
  },
  useContext: M,
  useEffect: function useEffect(a, b) {
    return sg(516, Uf | Tf, a, b);
  },
  useImperativeHandle: function useImperativeHandle(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return sg(4, Pf | Sf, ug.bind(null, b, a), c);
  },
  useLayoutEffect: function useLayoutEffect(a, b) {
    return sg(4, Pf | Sf, a, b);
  },
  useMemo: function useMemo(a, b) {
    var c = mg();
    b = void 0 === b ? null : b;
    a = a();
    c.memoizedState = [a, b];
    return a;
  },
  useReducer: function useReducer(a, b, c) {
    var d = mg();
    b = void 0 !== c ? c(b) : b;
    d.memoizedState = d.baseState = b;
    a = d.queue = {
      last: null,
      dispatch: null,
      lastRenderedReducer: a,
      lastRenderedState: b
    };
    a = a.dispatch = wg.bind(null, Xf, a);
    return [d.memoizedState, a];
  },
  useRef: function useRef(a) {
    var b = mg();
    a = {
      current: a
    };
    return b.memoizedState = a;
  },
  useState: function useState(a) {
    var b = mg();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = b.queue = {
      last: null,
      dispatch: null,
      lastRenderedReducer: og,
      lastRenderedState: a
    };
    a = a.dispatch = wg.bind(null, Xf, a);
    return [b.memoizedState, a];
  },
  useDebugValue: vg
},
    jg = {
  readContext: M,
  useCallback: function useCallback(a, b) {
    var c = ng();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && gg(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  },
  useContext: M,
  useEffect: function useEffect(a, b) {
    return tg(516, Uf | Tf, a, b);
  },
  useImperativeHandle: function useImperativeHandle(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return tg(4, Pf | Sf, ug.bind(null, b, a), c);
  },
  useLayoutEffect: function useLayoutEffect(a, b) {
    return tg(4, Pf | Sf, a, b);
  },
  useMemo: function useMemo(a, b) {
    var c = ng();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && gg(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  },
  useReducer: pg,
  useRef: function useRef() {
    return ng().memoizedState;
  },
  useState: function useState(a) {
    return pg(og, a);
  },
  useDebugValue: vg
},
    xg = null,
    yg = null,
    zg = !1;

function Ag(a, b) {
  var c = K(5, null, null, 0);
  c.elementType = "DELETED";
  c.type = "DELETED";
  c.stateNode = b;
  c.return = a;
  c.effectTag = 8;
  null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}

function Bg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, !0) : !1;

    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;

    case 13:
      return !1;

    default:
      return !1;
  }
}

function Cg(a) {
  if (zg) {
    var b = yg;

    if (b) {
      var c = b;

      if (!Bg(a, b)) {
        b = De(c);

        if (!b || !Bg(a, b)) {
          a.effectTag |= 2;
          zg = !1;
          xg = a;
          return;
        }

        Ag(xg, c);
      }

      xg = a;
      yg = Ee(b);
    } else a.effectTag |= 2, zg = !1, xg = a;
  }
}

function Dg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 18 !== a.tag;) {
    a = a.return;
  }

  xg = a;
}

function Eg(a) {
  if (a !== xg) return !1;
  if (!zg) return Dg(a), zg = !0, !1;
  var b = a.type;
  if (5 !== a.tag || "head" !== b && "body" !== b && !xe(b, a.memoizedProps)) for (b = yg; b;) {
    Ag(a, b), b = De(b);
  }
  Dg(a);
  yg = xg ? De(a.stateNode) : null;
  return !0;
}

function Fg() {
  yg = xg = null;
  zg = !1;
}

var Gg = Tb.ReactCurrentOwner,
    qg = !1;

function S(a, b, c, d) {
  b.child = null === a ? Ef(b, null, c, d) : Df(b, a.child, c, d);
}

function Hg(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  Ig(b, e);
  d = hg(a, b, c, d, f, e);
  if (null !== a && !qg) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), Jg(a, b, e);
  b.effectTag |= 1;
  S(a, b, d, e);
  return b.child;
}

function Kg(a, b, c, d, e, f) {
  if (null === a) {
    var g = c.type;
    if ("function" === typeof g && !Ve(g) && void 0 === g.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = g, Lg(a, b, g, d, e, f);
    a = Ye(c.type, null, d, null, b.mode, f);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }

  g = a.child;
  if (e < f && (e = g.memoizedProps, c = c.compare, c = null !== c ? c : dd, c(e, d) && a.ref === b.ref)) return Jg(a, b, f);
  b.effectTag |= 1;
  a = Xe(g, d, f);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}

function Lg(a, b, c, d, e, f) {
  return null !== a && dd(a.memoizedProps, d) && a.ref === b.ref && (qg = !1, e < f) ? Jg(a, b, f) : Mg(a, b, c, d, f);
}

function Ng(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c) b.effectTag |= 128;
}

function Mg(a, b, c, d, e) {
  var f = J(c) ? Ie : H.current;
  f = Je(b, f);
  Ig(b, e);
  c = hg(a, b, c, d, f, e);
  if (null !== a && !qg) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), Jg(a, b, e);
  b.effectTag |= 1;
  S(a, b, c, e);
  return b.child;
}

function Og(a, b, c, d, e) {
  if (J(c)) {
    var f = !0;
    Oe(b);
  } else f = !1;

  Ig(b, e);
  if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), vf(b, c, d, e), xf(b, c, d, e), d = !0;else if (null === a) {
    var g = b.stateNode,
        h = b.memoizedProps;
    g.props = h;
    var l = g.context,
        k = c.contextType;
    "object" === typeof k && null !== k ? k = M(k) : (k = J(c) ? Ie : H.current, k = Je(b, k));
    var m = c.getDerivedStateFromProps,
        p = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
    p || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || l !== k) && wf(b, g, d, k);
    Pg = !1;
    var t = b.memoizedState;
    l = g.state = t;
    var A = b.updateQueue;
    null !== A && (yf(b, A, d, g, e), l = b.memoizedState);
    h !== d || t !== l || I.current || Pg ? ("function" === typeof m && (kf(b, c, m, d), l = b.memoizedState), (h = Pg || uf(b, c, h, d, t, l, k)) ? (p || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.effectTag |= 4)) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = l), g.props = d, g.state = l, g.context = k, d = h) : ("function" === typeof g.componentDidMount && (b.effectTag |= 4), d = !1);
  } else g = b.stateNode, h = b.memoizedProps, g.props = b.type === b.elementType ? h : L(b.type, h), l = g.context, k = c.contextType, "object" === typeof k && null !== k ? k = M(k) : (k = J(c) ? Ie : H.current, k = Je(b, k)), m = c.getDerivedStateFromProps, (p = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || l !== k) && wf(b, g, d, k), Pg = !1, l = b.memoizedState, t = g.state = l, A = b.updateQueue, null !== A && (yf(b, A, d, g, e), t = b.memoizedState), h !== d || l !== t || I.current || Pg ? ("function" === typeof m && (kf(b, c, m, d), t = b.memoizedState), (m = Pg || uf(b, c, h, d, l, t, k)) ? (p || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, t, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, t, k)), "function" === typeof g.componentDidUpdate && (b.effectTag |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && l === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && l === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = t), g.props = d, g.state = t, g.context = k, d = m) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && l === a.memoizedState || (b.effectTag |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && l === a.memoizedState || (b.effectTag |= 256), d = !1);
  return Qg(a, b, c, d, f, e);
}

function Qg(a, b, c, d, e, f) {
  Ng(a, b);
  var g = 0 !== (b.effectTag & 64);
  if (!d && !g) return e && Pe(b, c, !1), Jg(a, b, f);
  d = b.stateNode;
  Gg.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.effectTag |= 1;
  null !== a && g ? (b.child = Df(b, a.child, null, f), b.child = Df(b, null, h, f)) : S(a, b, h, f);
  b.memoizedState = d.state;
  e && Pe(b, c, !0);
  return b.child;
}

function Rg(a) {
  var b = a.stateNode;
  b.pendingContext ? Me(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Me(a, b.context, !1);
  Jf(a, b.containerInfo);
}

function Sg(a, b, c) {
  var d = b.mode,
      e = b.pendingProps,
      f = b.memoizedState;

  if (0 === (b.effectTag & 64)) {
    f = null;
    var g = !1;
  } else f = {
    timedOutAt: null !== f ? f.timedOutAt : 0
  }, g = !0, b.effectTag &= -65;

  if (null === a) {
    if (g) {
      var h = e.fallback;
      a = Ze(null, d, 0, null);
      0 === (b.mode & 1) && (a.child = null !== b.memoizedState ? b.child.child : b.child);
      d = Ze(h, d, c, null);
      a.sibling = d;
      c = a;
      c.return = d.return = b;
    } else c = d = Ef(b, null, e.children, c);
  } else null !== a.memoizedState ? (d = a.child, h = d.sibling, g ? (c = e.fallback, e = Xe(d, d.pendingProps, 0), 0 === (b.mode & 1) && (g = null !== b.memoizedState ? b.child.child : b.child, g !== d.child && (e.child = g)), d = e.sibling = Xe(h, c, h.expirationTime), c = e, e.childExpirationTime = 0, c.return = d.return = b) : c = d = Df(b, d.child, e.children, c)) : (h = a.child, g ? (g = e.fallback, e = Ze(null, d, 0, null), e.child = h, 0 === (b.mode & 1) && (e.child = null !== b.memoizedState ? b.child.child : b.child), d = e.sibling = Ze(g, d, c, null), d.effectTag |= 2, c = e, e.childExpirationTime = 0, c.return = d.return = b) : d = c = Df(b, h, e.children, c)), b.stateNode = a.stateNode;
  b.memoizedState = f;
  b.child = c;
  return d;
}

function Jg(a, b, c) {
  null !== a && (b.contextDependencies = a.contextDependencies);
  if (b.childExpirationTime < c) return null;
  null !== a && b.child !== a.child ? x("153") : void 0;

  if (null !== b.child) {
    a = b.child;
    c = Xe(a, a.pendingProps, a.expirationTime);
    b.child = c;

    for (c.return = b; null !== a.sibling;) {
      a = a.sibling, c = c.sibling = Xe(a, a.pendingProps, a.expirationTime), c.return = b;
    }

    c.sibling = null;
  }

  return b.child;
}

function Tg(a, b, c) {
  var d = b.expirationTime;
  if (null !== a) {
    if (a.memoizedProps !== b.pendingProps || I.current) qg = !0;else {
      if (d < c) {
        qg = !1;

        switch (b.tag) {
          case 3:
            Rg(b);
            Fg();
            break;

          case 5:
            Lf(b);
            break;

          case 1:
            J(b.type) && Oe(b);
            break;

          case 4:
            Jf(b, b.stateNode.containerInfo);
            break;

          case 10:
            Ug(b, b.memoizedProps.value);
            break;

          case 13:
            if (null !== b.memoizedState) {
              d = b.child.childExpirationTime;
              if (0 !== d && d >= c) return Sg(a, b, c);
              b = Jg(a, b, c);
              return null !== b ? b.sibling : null;
            }

        }

        return Jg(a, b, c);
      }
    }
  } else qg = !1;
  b.expirationTime = 0;

  switch (b.tag) {
    case 2:
      d = b.elementType;
      null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
      a = b.pendingProps;
      var e = Je(b, H.current);
      Ig(b, c);
      e = hg(null, b, d, a, e, c);
      b.effectTag |= 1;

      if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
        b.tag = 1;
        lg();

        if (J(d)) {
          var f = !0;
          Oe(b);
        } else f = !1;

        b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
        var g = d.getDerivedStateFromProps;
        "function" === typeof g && kf(b, d, g, a);
        e.updater = tf;
        b.stateNode = e;
        e._reactInternalFiber = b;
        xf(b, d, a, c);
        b = Qg(null, b, d, !0, f, c);
      } else b.tag = 0, S(null, b, e, c), b = b.child;

      return b;

    case 16:
      e = b.elementType;
      null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
      f = b.pendingProps;
      a = hf(e);
      b.type = a;
      e = b.tag = We(a);
      f = L(a, f);
      g = void 0;

      switch (e) {
        case 0:
          g = Mg(null, b, a, f, c);
          break;

        case 1:
          g = Og(null, b, a, f, c);
          break;

        case 11:
          g = Hg(null, b, a, f, c);
          break;

        case 14:
          g = Kg(null, b, a, L(a.type, f), d, c);
          break;

        default:
          x("306", a, "");
      }

      return g;

    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : L(d, e), Mg(a, b, d, e, c);

    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : L(d, e), Og(a, b, d, e, c);

    case 3:
      Rg(b);
      d = b.updateQueue;
      null === d ? x("282") : void 0;
      e = b.memoizedState;
      e = null !== e ? e.element : null;
      yf(b, d, b.pendingProps, null, c);
      d = b.memoizedState.element;
      if (d === e) Fg(), b = Jg(a, b, c);else {
        e = b.stateNode;
        if (e = (null === a || null === a.child) && e.hydrate) yg = Ee(b.stateNode.containerInfo), xg = b, e = zg = !0;
        e ? (b.effectTag |= 2, b.child = Ef(b, null, d, c)) : (S(a, b, d, c), Fg());
        b = b.child;
      }
      return b;

    case 5:
      return Lf(b), null === a && Cg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, xe(d, e) ? g = null : null !== f && xe(d, f) && (b.effectTag |= 16), Ng(a, b), 1 !== c && b.mode & 1 && e.hidden ? (b.expirationTime = b.childExpirationTime = 1, b = null) : (S(a, b, g, c), b = b.child), b;

    case 6:
      return null === a && Cg(b), null;

    case 13:
      return Sg(a, b, c);

    case 4:
      return Jf(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Df(b, null, d, c) : S(a, b, d, c), b.child;

    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : L(d, e), Hg(a, b, d, e, c);

    case 7:
      return S(a, b, b.pendingProps, c), b.child;

    case 8:
      return S(a, b, b.pendingProps.children, c), b.child;

    case 12:
      return S(a, b, b.pendingProps.children, c), b.child;

    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        g = b.memoizedProps;
        f = e.value;
        Ug(b, f);

        if (null !== g) {
          var h = g.value;
          f = bd(h, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(h, f) : 1073741823) | 0;

          if (0 === f) {
            if (g.children === e.children && !I.current) {
              b = Jg(a, b, c);
              break a;
            }
          } else for (h = b.child, null !== h && (h.return = b); null !== h;) {
            var l = h.contextDependencies;

            if (null !== l) {
              g = h.child;

              for (var k = l.first; null !== k;) {
                if (k.context === d && 0 !== (k.observedBits & f)) {
                  1 === h.tag && (k = nf(c), k.tag = sf, pf(h, k));
                  h.expirationTime < c && (h.expirationTime = c);
                  k = h.alternate;
                  null !== k && k.expirationTime < c && (k.expirationTime = c);
                  k = c;

                  for (var m = h.return; null !== m;) {
                    var p = m.alternate;
                    if (m.childExpirationTime < k) m.childExpirationTime = k, null !== p && p.childExpirationTime < k && (p.childExpirationTime = k);else if (null !== p && p.childExpirationTime < k) p.childExpirationTime = k;else break;
                    m = m.return;
                  }

                  l.expirationTime < c && (l.expirationTime = c);
                  break;
                }

                k = k.next;
              }
            } else g = 10 === h.tag ? h.type === b.type ? null : h.child : h.child;

            if (null !== g) g.return = h;else for (g = h; null !== g;) {
              if (g === b) {
                g = null;
                break;
              }

              h = g.sibling;

              if (null !== h) {
                h.return = g.return;
                g = h;
                break;
              }

              g = g.return;
            }
            h = g;
          }
        }

        S(a, b, e.children, c);
        b = b.child;
      }

      return b;

    case 9:
      return e = b.type, f = b.pendingProps, d = f.children, Ig(b, c), e = M(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, S(a, b, d, c), b.child;

    case 14:
      return e = b.type, f = L(e, b.pendingProps), f = L(e.type, f), Kg(a, b, e, f, d, c);

    case 15:
      return Lg(a, b, b.type, b.pendingProps, d, c);

    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : L(d, e), null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, J(d) ? (a = !0, Oe(b)) : a = !1, Ig(b, c), vf(b, d, e, c), xf(b, d, e, c), Qg(null, b, d, !0, a, c);
  }

  x("156");
}

var Vg = {
  current: null
},
    Wg = null,
    Xg = null,
    Yg = null;

function Ug(a, b) {
  var c = a.type._context;
  G(Vg, c._currentValue, a);
  c._currentValue = b;
}

function Zg(a) {
  var b = Vg.current;
  F(Vg, a);
  a.type._context._currentValue = b;
}

function Ig(a, b) {
  Wg = a;
  Yg = Xg = null;
  var c = a.contextDependencies;
  null !== c && c.expirationTime >= b && (qg = !0);
  a.contextDependencies = null;
}

function M(a, b) {
  if (Yg !== a && !1 !== b && 0 !== b) {
    if ("number" !== typeof b || 1073741823 === b) Yg = a, b = 1073741823;
    b = {
      context: a,
      observedBits: b,
      next: null
    };
    null === Xg ? (null === Wg ? x("308") : void 0, Xg = b, Wg.contextDependencies = {
      first: b,
      expirationTime: 0
    }) : Xg = Xg.next = b;
  }

  return a._currentValue;
}

var $g = 0,
    rf = 1,
    sf = 2,
    ah = 3,
    Pg = !1;

function bh(a) {
  return {
    baseState: a,
    firstUpdate: null,
    lastUpdate: null,
    firstCapturedUpdate: null,
    lastCapturedUpdate: null,
    firstEffect: null,
    lastEffect: null,
    firstCapturedEffect: null,
    lastCapturedEffect: null
  };
}

function ch(a) {
  return {
    baseState: a.baseState,
    firstUpdate: a.firstUpdate,
    lastUpdate: a.lastUpdate,
    firstCapturedUpdate: null,
    lastCapturedUpdate: null,
    firstEffect: null,
    lastEffect: null,
    firstCapturedEffect: null,
    lastCapturedEffect: null
  };
}

function nf(a) {
  return {
    expirationTime: a,
    tag: $g,
    payload: null,
    callback: null,
    next: null,
    nextEffect: null
  };
}

function dh(a, b) {
  null === a.lastUpdate ? a.firstUpdate = a.lastUpdate = b : (a.lastUpdate.next = b, a.lastUpdate = b);
}

function pf(a, b) {
  var c = a.alternate;

  if (null === c) {
    var d = a.updateQueue;
    var e = null;
    null === d && (d = a.updateQueue = bh(a.memoizedState));
  } else d = a.updateQueue, e = c.updateQueue, null === d ? null === e ? (d = a.updateQueue = bh(a.memoizedState), e = c.updateQueue = bh(c.memoizedState)) : d = a.updateQueue = ch(e) : null === e && (e = c.updateQueue = ch(d));

  null === e || d === e ? dh(d, b) : null === d.lastUpdate || null === e.lastUpdate ? (dh(d, b), dh(e, b)) : (dh(d, b), e.lastUpdate = b);
}

function eh(a, b) {
  var c = a.updateQueue;
  c = null === c ? a.updateQueue = bh(a.memoizedState) : fh(a, c);
  null === c.lastCapturedUpdate ? c.firstCapturedUpdate = c.lastCapturedUpdate = b : (c.lastCapturedUpdate.next = b, c.lastCapturedUpdate = b);
}

function fh(a, b) {
  var c = a.alternate;
  null !== c && b === c.updateQueue && (b = a.updateQueue = ch(b));
  return b;
}

function gh(a, b, c, d, e, f) {
  switch (c.tag) {
    case rf:
      return a = c.payload, "function" === typeof a ? a.call(f, d, e) : a;

    case ah:
      a.effectTag = a.effectTag & -2049 | 64;

    case $g:
      a = c.payload;
      e = "function" === typeof a ? a.call(f, d, e) : a;
      if (null === e || void 0 === e) break;
      return n({}, d, e);

    case sf:
      Pg = !0;
  }

  return d;
}

function yf(a, b, c, d, e) {
  Pg = !1;
  b = fh(a, b);

  for (var f = b.baseState, g = null, h = 0, l = b.firstUpdate, k = f; null !== l;) {
    var m = l.expirationTime;
    m < e ? (null === g && (g = l, f = k), h < m && (h = m)) : (k = gh(a, b, l, k, c, d), null !== l.callback && (a.effectTag |= 32, l.nextEffect = null, null === b.lastEffect ? b.firstEffect = b.lastEffect = l : (b.lastEffect.nextEffect = l, b.lastEffect = l)));
    l = l.next;
  }

  m = null;

  for (l = b.firstCapturedUpdate; null !== l;) {
    var p = l.expirationTime;
    p < e ? (null === m && (m = l, null === g && (f = k)), h < p && (h = p)) : (k = gh(a, b, l, k, c, d), null !== l.callback && (a.effectTag |= 32, l.nextEffect = null, null === b.lastCapturedEffect ? b.firstCapturedEffect = b.lastCapturedEffect = l : (b.lastCapturedEffect.nextEffect = l, b.lastCapturedEffect = l)));
    l = l.next;
  }

  null === g && (b.lastUpdate = null);
  null === m ? b.lastCapturedUpdate = null : a.effectTag |= 32;
  null === g && null === m && (f = k);
  b.baseState = f;
  b.firstUpdate = g;
  b.firstCapturedUpdate = m;
  a.expirationTime = h;
  a.memoizedState = k;
}

function hh(a, b, c) {
  null !== b.firstCapturedUpdate && (null !== b.lastUpdate && (b.lastUpdate.next = b.firstCapturedUpdate, b.lastUpdate = b.lastCapturedUpdate), b.firstCapturedUpdate = b.lastCapturedUpdate = null);
  ih(b.firstEffect, c);
  b.firstEffect = b.lastEffect = null;
  ih(b.firstCapturedEffect, c);
  b.firstCapturedEffect = b.lastCapturedEffect = null;
}

function ih(a, b) {
  for (; null !== a;) {
    var c = a.callback;

    if (null !== c) {
      a.callback = null;
      var d = b;
      "function" !== typeof c ? x("191", c) : void 0;
      c.call(d);
    }

    a = a.nextEffect;
  }
}

function jh(a, b) {
  return {
    value: a,
    source: b,
    stack: jc(b)
  };
}

function kh(a) {
  a.effectTag |= 4;
}

var lh = void 0,
    mh = void 0,
    nh = void 0,
    oh = void 0;

lh = function lh(a, b) {
  for (var c = b.child; null !== c;) {
    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b) break;

    for (; null === c.sibling;) {
      if (null === c.return || c.return === b) return;
      c = c.return;
    }

    c.sibling.return = c.return;
    c = c.sibling;
  }
};

mh = function mh() {};

nh = function nh(a, b, c, d, e) {
  var f = a.memoizedProps;

  if (f !== d) {
    var g = b.stateNode;
    If(N.current);
    a = null;

    switch (c) {
      case "input":
        f = vc(g, f);
        d = vc(g, d);
        a = [];
        break;

      case "option":
        f = $d(g, f);
        d = $d(g, d);
        a = [];
        break;

      case "select":
        f = n({}, f, {
          value: void 0
        });
        d = n({}, d, {
          value: void 0
        });
        a = [];
        break;

      case "textarea":
        f = be(g, f);
        d = be(g, d);
        a = [];
        break;

      default:
        "function" !== typeof f.onClick && "function" === typeof d.onClick && (g.onclick = te);
    }

    qe(c, d);
    g = c = void 0;
    var h = null;

    for (c in f) {
      if (!d.hasOwnProperty(c) && f.hasOwnProperty(c) && null != f[c]) if ("style" === c) {
        var l = f[c];

        for (g in l) {
          l.hasOwnProperty(g) && (h || (h = {}), h[g] = "");
        }
      } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (ra.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
    }

    for (c in d) {
      var k = d[c];
      l = null != f ? f[c] : void 0;
      if (d.hasOwnProperty(c) && k !== l && (null != k || null != l)) if ("style" === c) {
        if (l) {
          for (g in l) {
            !l.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (h || (h = {}), h[g] = "");
          }

          for (g in k) {
            k.hasOwnProperty(g) && l[g] !== k[g] && (h || (h = {}), h[g] = k[g]);
          }
        } else h || (a || (a = []), a.push(c, h)), h = k;
      } else "dangerouslySetInnerHTML" === c ? (k = k ? k.__html : void 0, l = l ? l.__html : void 0, null != k && l !== k && (a = a || []).push(c, "" + k)) : "children" === c ? l === k || "string" !== typeof k && "number" !== typeof k || (a = a || []).push(c, "" + k) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (ra.hasOwnProperty(c) ? (null != k && se(e, c), a || l === k || (a = [])) : (a = a || []).push(c, k));
    }

    h && (a = a || []).push("style", h);
    e = a;
    (b.updateQueue = e) && kh(b);
  }
};

oh = function oh(a, b, c, d) {
  c !== d && kh(b);
};

var ph = "function" === typeof WeakSet ? WeakSet : Set;

function qh(a, b) {
  var c = b.source,
      d = b.stack;
  null === d && null !== c && (d = jc(c));
  null !== c && ic(c.type);
  b = b.value;
  null !== a && 1 === a.tag && ic(a.type);

  try {
    console.error(b);
  } catch (e) {
    setTimeout(function () {
      throw e;
    });
  }
}

function rh(a) {
  var b = a.ref;
  if (null !== b) if ("function" === typeof b) try {
    b(null);
  } catch (c) {
    sh(a, c);
  } else b.current = null;
}

function th(a, b, c) {
  c = c.updateQueue;
  c = null !== c ? c.lastEffect : null;

  if (null !== c) {
    var d = c = c.next;

    do {
      if ((d.tag & a) !== Nf) {
        var e = d.destroy;
        d.destroy = void 0;
        void 0 !== e && e();
      }

      (d.tag & b) !== Nf && (e = d.create, d.destroy = e());
      d = d.next;
    } while (d !== c);
  }
}

function uh(a, b) {
  for (var c = a;;) {
    if (5 === c.tag) {
      var d = c.stateNode;
      if (b) d.style.display = "none";else {
        d = c.stateNode;
        var e = c.memoizedProps.style;
        e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null;
        d.style.display = ne("display", e);
      }
    } else if (6 === c.tag) c.stateNode.nodeValue = b ? "" : c.memoizedProps;else if (13 === c.tag && null !== c.memoizedState) {
      d = c.child.sibling;
      d.return = c;
      c = d;
      continue;
    } else if (null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }

    if (c === a) break;

    for (; null === c.sibling;) {
      if (null === c.return || c.return === a) return;
      c = c.return;
    }

    c.sibling.return = c.return;
    c = c.sibling;
  }
}

function vh(a) {
  "function" === typeof Re && Re(a);

  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      var b = a.updateQueue;

      if (null !== b && (b = b.lastEffect, null !== b)) {
        var c = b = b.next;

        do {
          var d = c.destroy;

          if (void 0 !== d) {
            var e = a;

            try {
              d();
            } catch (f) {
              sh(e, f);
            }
          }

          c = c.next;
        } while (c !== b);
      }

      break;

    case 1:
      rh(a);
      b = a.stateNode;
      if ("function" === typeof b.componentWillUnmount) try {
        b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
      } catch (f) {
        sh(a, f);
      }
      break;

    case 5:
      rh(a);
      break;

    case 4:
      wh(a);
  }
}

function xh(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}

function yh(a) {
  a: {
    for (var b = a.return; null !== b;) {
      if (xh(b)) {
        var c = b;
        break a;
      }

      b = b.return;
    }

    x("160");
    c = void 0;
  }

  var d = b = void 0;

  switch (c.tag) {
    case 5:
      b = c.stateNode;
      d = !1;
      break;

    case 3:
      b = c.stateNode.containerInfo;
      d = !0;
      break;

    case 4:
      b = c.stateNode.containerInfo;
      d = !0;
      break;

    default:
      x("161");
  }

  c.effectTag & 16 && (ke(b, ""), c.effectTag &= -17);

  a: b: for (c = a;;) {
    for (; null === c.sibling;) {
      if (null === c.return || xh(c.return)) {
        c = null;
        break a;
      }

      c = c.return;
    }

    c.sibling.return = c.return;

    for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
      if (c.effectTag & 2) continue b;
      if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
    }

    if (!(c.effectTag & 2)) {
      c = c.stateNode;
      break a;
    }
  }

  for (var e = a;;) {
    if (5 === e.tag || 6 === e.tag) {
      if (c) {
        if (d) {
          var f = b,
              g = e.stateNode,
              h = c;
          8 === f.nodeType ? f.parentNode.insertBefore(g, h) : f.insertBefore(g, h);
        } else b.insertBefore(e.stateNode, c);
      } else d ? (g = b, h = e.stateNode, 8 === g.nodeType ? (f = g.parentNode, f.insertBefore(h, g)) : (f = g, f.appendChild(h)), g = g._reactRootContainer, null !== g && void 0 !== g || null !== f.onclick || (f.onclick = te)) : b.appendChild(e.stateNode);
    } else if (4 !== e.tag && null !== e.child) {
      e.child.return = e;
      e = e.child;
      continue;
    }
    if (e === a) break;

    for (; null === e.sibling;) {
      if (null === e.return || e.return === a) return;
      e = e.return;
    }

    e.sibling.return = e.return;
    e = e.sibling;
  }
}

function wh(a) {
  for (var b = a, c = !1, d = void 0, e = void 0;;) {
    if (!c) {
      c = b.return;

      a: for (;;) {
        null === c ? x("160") : void 0;

        switch (c.tag) {
          case 5:
            d = c.stateNode;
            e = !1;
            break a;

          case 3:
            d = c.stateNode.containerInfo;
            e = !0;
            break a;

          case 4:
            d = c.stateNode.containerInfo;
            e = !0;
            break a;
        }

        c = c.return;
      }

      c = !0;
    }

    if (5 === b.tag || 6 === b.tag) {
      a: for (var f = b, g = f;;) {
        if (vh(g), null !== g.child && 4 !== g.tag) g.child.return = g, g = g.child;else {
          if (g === f) break;

          for (; null === g.sibling;) {
            if (null === g.return || g.return === f) break a;
            g = g.return;
          }

          g.sibling.return = g.return;
          g = g.sibling;
        }
      }

      e ? (f = d, g = b.stateNode, 8 === f.nodeType ? f.parentNode.removeChild(g) : f.removeChild(g)) : d.removeChild(b.stateNode);
    } else if (4 === b.tag) {
      if (null !== b.child) {
        d = b.stateNode.containerInfo;
        e = !0;
        b.child.return = b;
        b = b.child;
        continue;
      }
    } else if (vh(b), null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }

    if (b === a) break;

    for (; null === b.sibling;) {
      if (null === b.return || b.return === a) return;
      b = b.return;
      4 === b.tag && (c = !1);
    }

    b.sibling.return = b.return;
    b = b.sibling;
  }
}

function zh(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      th(Pf, Qf, b);
      break;

    case 1:
      break;

    case 5:
      var c = b.stateNode;

      if (null != c) {
        var d = b.memoizedProps;
        a = null !== a ? a.memoizedProps : d;
        var e = b.type,
            f = b.updateQueue;
        b.updateQueue = null;
        null !== f && Ce(c, f, e, a, d, b);
      }

      break;

    case 6:
      null === b.stateNode ? x("162") : void 0;
      b.stateNode.nodeValue = b.memoizedProps;
      break;

    case 3:
      break;

    case 12:
      break;

    case 13:
      c = b.memoizedState;
      d = void 0;
      a = b;
      null === c ? d = !1 : (d = !0, a = b.child, 0 === c.timedOutAt && (c.timedOutAt = lf()));
      null !== a && uh(a, d);
      c = b.updateQueue;

      if (null !== c) {
        b.updateQueue = null;
        var g = b.stateNode;
        null === g && (g = b.stateNode = new ph());
        c.forEach(function (a) {
          var c = Ah.bind(null, b, a);
          g.has(a) || (g.add(a), a.then(c, c));
        });
      }

      break;

    case 17:
      break;

    default:
      x("163");
  }
}

var Bh = "function" === typeof WeakMap ? WeakMap : Map;

function Ch(a, b, c) {
  c = nf(c);
  c.tag = ah;
  c.payload = {
    element: null
  };
  var d = b.value;

  c.callback = function () {
    Dh(d);
    qh(a, b);
  };

  return c;
}

function Eh(a, b, c) {
  c = nf(c);
  c.tag = ah;
  var d = a.type.getDerivedStateFromError;

  if ("function" === typeof d) {
    var e = b.value;

    c.payload = function () {
      return d(e);
    };
  }

  var f = a.stateNode;
  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
    "function" !== typeof d && (null === Fh ? Fh = new Set([this]) : Fh.add(this));
    var c = b.value,
        e = b.stack;
    qh(a, b);
    this.componentDidCatch(c, {
      componentStack: null !== e ? e : ""
    });
  });
  return c;
}

function Gh(a) {
  switch (a.tag) {
    case 1:
      J(a.type) && Ke(a);
      var b = a.effectTag;
      return b & 2048 ? (a.effectTag = b & -2049 | 64, a) : null;

    case 3:
      return Kf(a), Le(a), b = a.effectTag, 0 !== (b & 64) ? x("285") : void 0, a.effectTag = b & -2049 | 64, a;

    case 5:
      return Mf(a), null;

    case 13:
      return b = a.effectTag, b & 2048 ? (a.effectTag = b & -2049 | 64, a) : null;

    case 18:
      return null;

    case 4:
      return Kf(a), null;

    case 10:
      return Zg(a), null;

    default:
      return null;
  }
}

var Hh = Tb.ReactCurrentDispatcher,
    Ih = Tb.ReactCurrentOwner,
    Jh = 1073741822,
    Kh = !1,
    T = null,
    Lh = null,
    U = 0,
    Mh = -1,
    Nh = !1,
    V = null,
    Oh = !1,
    Ph = null,
    Qh = null,
    Rh = null,
    Fh = null;

function Sh() {
  if (null !== T) for (var a = T.return; null !== a;) {
    var b = a;

    switch (b.tag) {
      case 1:
        var c = b.type.childContextTypes;
        null !== c && void 0 !== c && Ke(b);
        break;

      case 3:
        Kf(b);
        Le(b);
        break;

      case 5:
        Mf(b);
        break;

      case 4:
        Kf(b);
        break;

      case 10:
        Zg(b);
    }

    a = a.return;
  }
  Lh = null;
  U = 0;
  Mh = -1;
  Nh = !1;
  T = null;
}

function Th() {
  for (; null !== V;) {
    var a = V.effectTag;
    a & 16 && ke(V.stateNode, "");

    if (a & 128) {
      var b = V.alternate;
      null !== b && (b = b.ref, null !== b && ("function" === typeof b ? b(null) : b.current = null));
    }

    switch (a & 14) {
      case 2:
        yh(V);
        V.effectTag &= -3;
        break;

      case 6:
        yh(V);
        V.effectTag &= -3;
        zh(V.alternate, V);
        break;

      case 4:
        zh(V.alternate, V);
        break;

      case 8:
        a = V, wh(a), a.return = null, a.child = null, a.memoizedState = null, a.updateQueue = null, a = a.alternate, null !== a && (a.return = null, a.child = null, a.memoizedState = null, a.updateQueue = null);
    }

    V = V.nextEffect;
  }
}

function Uh() {
  for (; null !== V;) {
    if (V.effectTag & 256) a: {
      var a = V.alternate,
          b = V;

      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          th(Of, Nf, b);
          break a;

        case 1:
          if (b.effectTag & 256 && null !== a) {
            var c = a.memoizedProps,
                d = a.memoizedState;
            a = b.stateNode;
            b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : L(b.type, c), d);
            a.__reactInternalSnapshotBeforeUpdate = b;
          }

          break a;

        case 3:
        case 5:
        case 6:
        case 4:
        case 17:
          break a;

        default:
          x("163");
      }
    }
    V = V.nextEffect;
  }
}

function Vh(a, b) {
  for (; null !== V;) {
    var c = V.effectTag;

    if (c & 36) {
      var d = V.alternate,
          e = V,
          f = b;

      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          th(Rf, Sf, e);
          break;

        case 1:
          var g = e.stateNode;
          if (e.effectTag & 4) if (null === d) g.componentDidMount();else {
            var h = e.elementType === e.type ? d.memoizedProps : L(e.type, d.memoizedProps);
            g.componentDidUpdate(h, d.memoizedState, g.__reactInternalSnapshotBeforeUpdate);
          }
          d = e.updateQueue;
          null !== d && hh(e, d, g, f);
          break;

        case 3:
          d = e.updateQueue;

          if (null !== d) {
            g = null;
            if (null !== e.child) switch (e.child.tag) {
              case 5:
                g = e.child.stateNode;
                break;

              case 1:
                g = e.child.stateNode;
            }
            hh(e, d, g, f);
          }

          break;

        case 5:
          f = e.stateNode;
          null === d && e.effectTag & 4 && we(e.type, e.memoizedProps) && f.focus();
          break;

        case 6:
          break;

        case 4:
          break;

        case 12:
          break;

        case 13:
          break;

        case 17:
          break;

        default:
          x("163");
      }
    }

    c & 128 && (e = V.ref, null !== e && (f = V.stateNode, "function" === typeof e ? e(f) : e.current = f));
    c & 512 && (Ph = a);
    V = V.nextEffect;
  }
}

function Wh(a, b) {
  Rh = Qh = Ph = null;
  var c = W;
  W = !0;

  do {
    if (b.effectTag & 512) {
      var d = !1,
          e = void 0;

      try {
        var f = b;
        th(Uf, Nf, f);
        th(Nf, Tf, f);
      } catch (g) {
        d = !0, e = g;
      }

      d && sh(b, e);
    }

    b = b.nextEffect;
  } while (null !== b);

  W = c;
  c = a.expirationTime;
  0 !== c && Xh(a, c);
  X || W || Yh(1073741823, !1);
}

function of() {
  null !== Qh && Be(Qh);
  null !== Rh && Rh();
}

function Zh(a, b) {
  Oh = Kh = !0;
  a.current === b ? x("177") : void 0;
  var c = a.pendingCommitExpirationTime;
  0 === c ? x("261") : void 0;
  a.pendingCommitExpirationTime = 0;
  var d = b.expirationTime,
      e = b.childExpirationTime;
  ef(a, e > d ? e : d);
  Ih.current = null;
  d = void 0;
  1 < b.effectTag ? null !== b.lastEffect ? (b.lastEffect.nextEffect = b, d = b.firstEffect) : d = b : d = b.firstEffect;
  ue = Bd;
  ve = Pd();
  Bd = !1;

  for (V = d; null !== V;) {
    e = !1;
    var f = void 0;

    try {
      Uh();
    } catch (h) {
      e = !0, f = h;
    }

    e && (null === V ? x("178") : void 0, sh(V, f), null !== V && (V = V.nextEffect));
  }

  for (V = d; null !== V;) {
    e = !1;
    f = void 0;

    try {
      Th();
    } catch (h) {
      e = !0, f = h;
    }

    e && (null === V ? x("178") : void 0, sh(V, f), null !== V && (V = V.nextEffect));
  }

  Qd(ve);
  ve = null;
  Bd = !!ue;
  ue = null;
  a.current = b;

  for (V = d; null !== V;) {
    e = !1;
    f = void 0;

    try {
      Vh(a, c);
    } catch (h) {
      e = !0, f = h;
    }

    e && (null === V ? x("178") : void 0, sh(V, f), null !== V && (V = V.nextEffect));
  }

  if (null !== d && null !== Ph) {
    var g = Wh.bind(null, a, d);
    Qh = r.unstable_runWithPriority(r.unstable_NormalPriority, function () {
      return Ae(g);
    });
    Rh = g;
  }

  Kh = Oh = !1;
  "function" === typeof Qe && Qe(b.stateNode);
  c = b.expirationTime;
  b = b.childExpirationTime;
  b = b > c ? b : c;
  0 === b && (Fh = null);
  $h(a, b);
}

function ai(a) {
  for (;;) {
    var b = a.alternate,
        c = a.return,
        d = a.sibling;

    if (0 === (a.effectTag & 1024)) {
      T = a;

      a: {
        var e = b;
        b = a;
        var f = U;
        var g = b.pendingProps;

        switch (b.tag) {
          case 2:
            break;

          case 16:
            break;

          case 15:
          case 0:
            break;

          case 1:
            J(b.type) && Ke(b);
            break;

          case 3:
            Kf(b);
            Le(b);
            g = b.stateNode;
            g.pendingContext && (g.context = g.pendingContext, g.pendingContext = null);
            if (null === e || null === e.child) Eg(b), b.effectTag &= -3;
            mh(b);
            break;

          case 5:
            Mf(b);
            var h = If(Hf.current);
            f = b.type;
            if (null !== e && null != b.stateNode) nh(e, b, f, g, h), e.ref !== b.ref && (b.effectTag |= 128);else if (g) {
              var l = If(N.current);

              if (Eg(b)) {
                g = b;
                e = g.stateNode;
                var k = g.type,
                    m = g.memoizedProps,
                    p = h;
                e[Fa] = g;
                e[Ga] = m;
                f = void 0;
                h = k;

                switch (h) {
                  case "iframe":
                  case "object":
                    E("load", e);
                    break;

                  case "video":
                  case "audio":
                    for (k = 0; k < ab.length; k++) {
                      E(ab[k], e);
                    }

                    break;

                  case "source":
                    E("error", e);
                    break;

                  case "img":
                  case "image":
                  case "link":
                    E("error", e);
                    E("load", e);
                    break;

                  case "form":
                    E("reset", e);
                    E("submit", e);
                    break;

                  case "details":
                    E("toggle", e);
                    break;

                  case "input":
                    wc(e, m);
                    E("invalid", e);
                    se(p, "onChange");
                    break;

                  case "select":
                    e._wrapperState = {
                      wasMultiple: !!m.multiple
                    };
                    E("invalid", e);
                    se(p, "onChange");
                    break;

                  case "textarea":
                    ce(e, m), E("invalid", e), se(p, "onChange");
                }

                qe(h, m);
                k = null;

                for (f in m) {
                  m.hasOwnProperty(f) && (l = m[f], "children" === f ? "string" === typeof l ? e.textContent !== l && (k = ["children", l]) : "number" === typeof l && e.textContent !== "" + l && (k = ["children", "" + l]) : ra.hasOwnProperty(f) && null != l && se(p, f));
                }

                switch (h) {
                  case "input":
                    Rb(e);
                    Ac(e, m, !0);
                    break;

                  case "textarea":
                    Rb(e);
                    ee(e, m);
                    break;

                  case "select":
                  case "option":
                    break;

                  default:
                    "function" === typeof m.onClick && (e.onclick = te);
                }

                f = k;
                g.updateQueue = f;
                g = null !== f ? !0 : !1;
                g && kh(b);
              } else {
                m = b;
                p = f;
                e = g;
                k = 9 === h.nodeType ? h : h.ownerDocument;
                l === fe.html && (l = ge(p));
                l === fe.html ? "script" === p ? (e = k.createElement("div"), e.innerHTML = "<script>\x3c/script>", k = e.removeChild(e.firstChild)) : "string" === typeof e.is ? k = k.createElement(p, {
                  is: e.is
                }) : (k = k.createElement(p), "select" === p && (p = k, e.multiple ? p.multiple = !0 : e.size && (p.size = e.size))) : k = k.createElementNS(l, p);
                e = k;
                e[Fa] = m;
                e[Ga] = g;
                lh(e, b, !1, !1);
                p = e;
                k = f;
                m = g;
                var t = h,
                    A = re(k, m);

                switch (k) {
                  case "iframe":
                  case "object":
                    E("load", p);
                    h = m;
                    break;

                  case "video":
                  case "audio":
                    for (h = 0; h < ab.length; h++) {
                      E(ab[h], p);
                    }

                    h = m;
                    break;

                  case "source":
                    E("error", p);
                    h = m;
                    break;

                  case "img":
                  case "image":
                  case "link":
                    E("error", p);
                    E("load", p);
                    h = m;
                    break;

                  case "form":
                    E("reset", p);
                    E("submit", p);
                    h = m;
                    break;

                  case "details":
                    E("toggle", p);
                    h = m;
                    break;

                  case "input":
                    wc(p, m);
                    h = vc(p, m);
                    E("invalid", p);
                    se(t, "onChange");
                    break;

                  case "option":
                    h = $d(p, m);
                    break;

                  case "select":
                    p._wrapperState = {
                      wasMultiple: !!m.multiple
                    };
                    h = n({}, m, {
                      value: void 0
                    });
                    E("invalid", p);
                    se(t, "onChange");
                    break;

                  case "textarea":
                    ce(p, m);
                    h = be(p, m);
                    E("invalid", p);
                    se(t, "onChange");
                    break;

                  default:
                    h = m;
                }

                qe(k, h);
                l = void 0;
                var v = k,
                    R = p,
                    u = h;

                for (l in u) {
                  if (u.hasOwnProperty(l)) {
                    var q = u[l];
                    "style" === l ? oe(R, q) : "dangerouslySetInnerHTML" === l ? (q = q ? q.__html : void 0, null != q && je(R, q)) : "children" === l ? "string" === typeof q ? ("textarea" !== v || "" !== q) && ke(R, q) : "number" === typeof q && ke(R, "" + q) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ra.hasOwnProperty(l) ? null != q && se(t, l) : null != q && tc(R, l, q, A));
                  }
                }

                switch (k) {
                  case "input":
                    Rb(p);
                    Ac(p, m, !1);
                    break;

                  case "textarea":
                    Rb(p);
                    ee(p, m);
                    break;

                  case "option":
                    null != m.value && p.setAttribute("value", "" + uc(m.value));
                    break;

                  case "select":
                    h = p;
                    h.multiple = !!m.multiple;
                    p = m.value;
                    null != p ? ae(h, !!m.multiple, p, !1) : null != m.defaultValue && ae(h, !!m.multiple, m.defaultValue, !0);
                    break;

                  default:
                    "function" === typeof h.onClick && (p.onclick = te);
                }

                (g = we(f, g)) && kh(b);
                b.stateNode = e;
              }

              null !== b.ref && (b.effectTag |= 128);
            } else null === b.stateNode ? x("166") : void 0;
            break;

          case 6:
            e && null != b.stateNode ? oh(e, b, e.memoizedProps, g) : ("string" !== typeof g && (null === b.stateNode ? x("166") : void 0), e = If(Hf.current), If(N.current), Eg(b) ? (g = b, f = g.stateNode, e = g.memoizedProps, f[Fa] = g, (g = f.nodeValue !== e) && kh(b)) : (f = b, g = (9 === e.nodeType ? e : e.ownerDocument).createTextNode(g), g[Fa] = b, f.stateNode = g));
            break;

          case 11:
            break;

          case 13:
            g = b.memoizedState;

            if (0 !== (b.effectTag & 64)) {
              b.expirationTime = f;
              T = b;
              break a;
            }

            g = null !== g;
            f = null !== e && null !== e.memoizedState;
            null !== e && !g && f && (e = e.child.sibling, null !== e && (h = b.firstEffect, null !== h ? (b.firstEffect = e, e.nextEffect = h) : (b.firstEffect = b.lastEffect = e, e.nextEffect = null), e.effectTag = 8));
            if (g || f) b.effectTag |= 4;
            break;

          case 7:
            break;

          case 8:
            break;

          case 12:
            break;

          case 4:
            Kf(b);
            mh(b);
            break;

          case 10:
            Zg(b);
            break;

          case 9:
            break;

          case 14:
            break;

          case 17:
            J(b.type) && Ke(b);
            break;

          case 18:
            break;

          default:
            x("156");
        }

        T = null;
      }

      b = a;

      if (1 === U || 1 !== b.childExpirationTime) {
        g = 0;

        for (f = b.child; null !== f;) {
          e = f.expirationTime, h = f.childExpirationTime, e > g && (g = e), h > g && (g = h), f = f.sibling;
        }

        b.childExpirationTime = g;
      }

      if (null !== T) return T;
      null !== c && 0 === (c.effectTag & 1024) && (null === c.firstEffect && (c.firstEffect = a.firstEffect), null !== a.lastEffect && (null !== c.lastEffect && (c.lastEffect.nextEffect = a.firstEffect), c.lastEffect = a.lastEffect), 1 < a.effectTag && (null !== c.lastEffect ? c.lastEffect.nextEffect = a : c.firstEffect = a, c.lastEffect = a));
    } else {
      a = Gh(a, U);
      if (null !== a) return a.effectTag &= 1023, a;
      null !== c && (c.firstEffect = c.lastEffect = null, c.effectTag |= 1024);
    }

    if (null !== d) return d;
    if (null !== c) a = c;else break;
  }

  return null;
}

function bi(a) {
  var b = Tg(a.alternate, a, U);
  a.memoizedProps = a.pendingProps;
  null === b && (b = ai(a));
  Ih.current = null;
  return b;
}

function ci(a, b) {
  Kh ? x("243") : void 0;
  of();
  Kh = !0;
  var c = Hh.current;
  Hh.current = kg;
  var d = a.nextExpirationTimeToWorkOn;
  if (d !== U || a !== Lh || null === T) Sh(), Lh = a, U = d, T = Xe(Lh.current, null, U), a.pendingCommitExpirationTime = 0;
  var e = !1;

  do {
    try {
      if (b) for (; null !== T && !di();) {
        T = bi(T);
      } else for (; null !== T;) {
        T = bi(T);
      }
    } catch (u) {
      if (Yg = Xg = Wg = null, lg(), null === T) e = !0, Dh(u);else {
        null === T ? x("271") : void 0;
        var f = T,
            g = f.return;
        if (null === g) e = !0, Dh(u);else {
          a: {
            var h = a,
                l = g,
                k = f,
                m = u;
            g = U;
            k.effectTag |= 1024;
            k.firstEffect = k.lastEffect = null;

            if (null !== m && "object" === typeof m && "function" === typeof m.then) {
              var p = m;
              m = l;
              var t = -1,
                  A = -1;

              do {
                if (13 === m.tag) {
                  var v = m.alternate;

                  if (null !== v && (v = v.memoizedState, null !== v)) {
                    A = 10 * (1073741822 - v.timedOutAt);
                    break;
                  }

                  v = m.pendingProps.maxDuration;
                  if ("number" === typeof v) if (0 >= v) t = 0;else if (-1 === t || v < t) t = v;
                }

                m = m.return;
              } while (null !== m);

              m = l;

              do {
                if (v = 13 === m.tag) v = void 0 === m.memoizedProps.fallback ? !1 : null === m.memoizedState;

                if (v) {
                  l = m.updateQueue;
                  null === l ? (l = new Set(), l.add(p), m.updateQueue = l) : l.add(p);

                  if (0 === (m.mode & 1)) {
                    m.effectTag |= 64;
                    k.effectTag &= -1957;
                    1 === k.tag && (null === k.alternate ? k.tag = 17 : (g = nf(1073741823), g.tag = sf, pf(k, g)));
                    k.expirationTime = 1073741823;
                    break a;
                  }

                  k = h;
                  l = g;
                  var R = k.pingCache;
                  null === R ? (R = k.pingCache = new Bh(), v = new Set(), R.set(p, v)) : (v = R.get(p), void 0 === v && (v = new Set(), R.set(p, v)));
                  v.has(l) || (v.add(l), k = ei.bind(null, k, p, l), p.then(k, k));
                  -1 === t ? h = 1073741823 : (-1 === A && (A = 10 * (1073741822 - gf(h, g)) - 5E3), h = A + t);
                  0 <= h && Mh < h && (Mh = h);
                  m.effectTag |= 2048;
                  m.expirationTime = g;
                  break a;
                }

                m = m.return;
              } while (null !== m);

              m = Error((ic(k.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + jc(k));
            }

            Nh = !0;
            m = jh(m, k);
            h = l;

            do {
              switch (h.tag) {
                case 3:
                  h.effectTag |= 2048;
                  h.expirationTime = g;
                  g = Ch(h, m, g);
                  eh(h, g);
                  break a;

                case 1:
                  if (t = m, A = h.type, k = h.stateNode, 0 === (h.effectTag & 64) && ("function" === typeof A.getDerivedStateFromError || null !== k && "function" === typeof k.componentDidCatch && (null === Fh || !Fh.has(k)))) {
                    h.effectTag |= 2048;
                    h.expirationTime = g;
                    g = Eh(h, t, g);
                    eh(h, g);
                    break a;
                  }

              }

              h = h.return;
            } while (null !== h);
          }

          T = ai(f);
          continue;
        }
      }
    }

    break;
  } while (1);

  Kh = !1;
  Hh.current = c;
  Yg = Xg = Wg = null;
  lg();
  if (e) Lh = null, a.finishedWork = null;else if (null !== T) a.finishedWork = null;else {
    c = a.current.alternate;
    null === c ? x("281") : void 0;
    Lh = null;

    if (Nh) {
      e = a.latestPendingTime;
      f = a.latestSuspendedTime;
      g = a.latestPingedTime;

      if (0 !== e && e < d || 0 !== f && f < d || 0 !== g && g < d) {
        ff(a, d);
        fi(a, c, d, a.expirationTime, -1);
        return;
      }

      if (!a.didError && b) {
        a.didError = !0;
        d = a.nextExpirationTimeToWorkOn = d;
        b = a.expirationTime = 1073741823;
        fi(a, c, d, b, -1);
        return;
      }
    }

    b && -1 !== Mh ? (ff(a, d), b = 10 * (1073741822 - gf(a, d)), b < Mh && (Mh = b), b = 10 * (1073741822 - lf()), b = Mh - b, fi(a, c, d, a.expirationTime, 0 > b ? 0 : b)) : (a.pendingCommitExpirationTime = d, a.finishedWork = c);
  }
}

function sh(a, b) {
  for (var c = a.return; null !== c;) {
    switch (c.tag) {
      case 1:
        var d = c.stateNode;

        if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Fh || !Fh.has(d))) {
          a = jh(b, a);
          a = Eh(c, a, 1073741823);
          pf(c, a);
          qf(c, 1073741823);
          return;
        }

        break;

      case 3:
        a = jh(b, a);
        a = Ch(c, a, 1073741823);
        pf(c, a);
        qf(c, 1073741823);
        return;
    }

    c = c.return;
  }

  3 === a.tag && (c = jh(b, a), c = Ch(a, c, 1073741823), pf(a, c), qf(a, 1073741823));
}

function mf(a, b) {
  var c = r.unstable_getCurrentPriorityLevel(),
      d = void 0;
  if (0 === (b.mode & 1)) d = 1073741823;else if (Kh && !Oh) d = U;else {
    switch (c) {
      case r.unstable_ImmediatePriority:
        d = 1073741823;
        break;

      case r.unstable_UserBlockingPriority:
        d = 1073741822 - 10 * (((1073741822 - a + 15) / 10 | 0) + 1);
        break;

      case r.unstable_NormalPriority:
        d = 1073741822 - 25 * (((1073741822 - a + 500) / 25 | 0) + 1);
        break;

      case r.unstable_LowPriority:
      case r.unstable_IdlePriority:
        d = 1;
        break;

      default:
        x("313");
    }

    null !== Lh && d === U && --d;
  }
  c === r.unstable_UserBlockingPriority && (0 === gi || d < gi) && (gi = d);
  return d;
}

function ei(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  if (null !== Lh && U === c) Lh = null;else if (b = a.earliestSuspendedTime, d = a.latestSuspendedTime, 0 !== b && c <= b && c >= d) {
    a.didError = !1;
    b = a.latestPingedTime;
    if (0 === b || b > c) a.latestPingedTime = c;
    df(c, a);
    c = a.expirationTime;
    0 !== c && Xh(a, c);
  }
}

function Ah(a, b) {
  var c = a.stateNode;
  null !== c && c.delete(b);
  b = lf();
  b = mf(b, a);
  a = hi(a, b);
  null !== a && (cf(a, b), b = a.expirationTime, 0 !== b && Xh(a, b));
}

function hi(a, b) {
  a.expirationTime < b && (a.expirationTime = b);
  var c = a.alternate;
  null !== c && c.expirationTime < b && (c.expirationTime = b);
  var d = a.return,
      e = null;
  if (null === d && 3 === a.tag) e = a.stateNode;else for (; null !== d;) {
    c = d.alternate;
    d.childExpirationTime < b && (d.childExpirationTime = b);
    null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);

    if (null === d.return && 3 === d.tag) {
      e = d.stateNode;
      break;
    }

    d = d.return;
  }
  return e;
}

function qf(a, b) {
  a = hi(a, b);
  null !== a && (!Kh && 0 !== U && b > U && Sh(), cf(a, b), Kh && !Oh && Lh === a || Xh(a, a.expirationTime), ii > ji && (ii = 0, x("185")));
}

function ki(a, b, c, d, e) {
  return r.unstable_runWithPriority(r.unstable_ImmediatePriority, function () {
    return a(b, c, d, e);
  });
}

var li = null,
    Y = null,
    mi = 0,
    ni = void 0,
    W = !1,
    oi = null,
    Z = 0,
    gi = 0,
    pi = !1,
    qi = null,
    X = !1,
    ri = !1,
    si = null,
    ti = r.unstable_now(),
    ui = 1073741822 - (ti / 10 | 0),
    vi = ui,
    ji = 50,
    ii = 0,
    wi = null;

function xi() {
  ui = 1073741822 - ((r.unstable_now() - ti) / 10 | 0);
}

function yi(a, b) {
  if (0 !== mi) {
    if (b < mi) return;
    null !== ni && r.unstable_cancelCallback(ni);
  }

  mi = b;
  a = r.unstable_now() - ti;
  ni = r.unstable_scheduleCallback(zi, {
    timeout: 10 * (1073741822 - b) - a
  });
}

function fi(a, b, c, d, e) {
  a.expirationTime = d;
  0 !== e || di() ? 0 < e && (a.timeoutHandle = ye(Ai.bind(null, a, b, c), e)) : (a.pendingCommitExpirationTime = c, a.finishedWork = b);
}

function Ai(a, b, c) {
  a.pendingCommitExpirationTime = c;
  a.finishedWork = b;
  xi();
  vi = ui;
  Bi(a, c);
}

function $h(a, b) {
  a.expirationTime = b;
  a.finishedWork = null;
}

function lf() {
  if (W) return vi;
  Ci();
  if (0 === Z || 1 === Z) xi(), vi = ui;
  return vi;
}

function Xh(a, b) {
  null === a.nextScheduledRoot ? (a.expirationTime = b, null === Y ? (li = Y = a, a.nextScheduledRoot = a) : (Y = Y.nextScheduledRoot = a, Y.nextScheduledRoot = li)) : b > a.expirationTime && (a.expirationTime = b);
  W || (X ? ri && (oi = a, Z = 1073741823, Di(a, 1073741823, !1)) : 1073741823 === b ? Yh(1073741823, !1) : yi(a, b));
}

function Ci() {
  var a = 0,
      b = null;
  if (null !== Y) for (var c = Y, d = li; null !== d;) {
    var e = d.expirationTime;

    if (0 === e) {
      null === c || null === Y ? x("244") : void 0;

      if (d === d.nextScheduledRoot) {
        li = Y = d.nextScheduledRoot = null;
        break;
      } else if (d === li) li = e = d.nextScheduledRoot, Y.nextScheduledRoot = e, d.nextScheduledRoot = null;else if (d === Y) {
        Y = c;
        Y.nextScheduledRoot = li;
        d.nextScheduledRoot = null;
        break;
      } else c.nextScheduledRoot = d.nextScheduledRoot, d.nextScheduledRoot = null;

      d = c.nextScheduledRoot;
    } else {
      e > a && (a = e, b = d);
      if (d === Y) break;
      if (1073741823 === a) break;
      c = d;
      d = d.nextScheduledRoot;
    }
  }
  oi = b;
  Z = a;
}

var Ei = !1;

function di() {
  return Ei ? !0 : r.unstable_shouldYield() ? Ei = !0 : !1;
}

function zi() {
  try {
    if (!di() && null !== li) {
      xi();
      var a = li;

      do {
        var b = a.expirationTime;
        0 !== b && ui <= b && (a.nextExpirationTimeToWorkOn = ui);
        a = a.nextScheduledRoot;
      } while (a !== li);
    }

    Yh(0, !0);
  } finally {
    Ei = !1;
  }
}

function Yh(a, b) {
  Ci();
  if (b) for (xi(), vi = ui; null !== oi && 0 !== Z && a <= Z && !(Ei && ui > Z);) {
    Di(oi, Z, ui > Z), Ci(), xi(), vi = ui;
  } else for (; null !== oi && 0 !== Z && a <= Z;) {
    Di(oi, Z, !1), Ci();
  }
  b && (mi = 0, ni = null);
  0 !== Z && yi(oi, Z);
  ii = 0;
  wi = null;
  if (null !== si) for (a = si, si = null, b = 0; b < a.length; b++) {
    var c = a[b];

    try {
      c._onComplete();
    } catch (d) {
      pi || (pi = !0, qi = d);
    }
  }
  if (pi) throw a = qi, qi = null, pi = !1, a;
}

function Bi(a, b) {
  W ? x("253") : void 0;
  oi = a;
  Z = b;
  Di(a, b, !1);
  Yh(1073741823, !1);
}

function Di(a, b, c) {
  W ? x("245") : void 0;
  W = !0;

  if (c) {
    var d = a.finishedWork;
    null !== d ? Fi(a, d, b) : (a.finishedWork = null, d = a.timeoutHandle, -1 !== d && (a.timeoutHandle = -1, ze(d)), ci(a, c), d = a.finishedWork, null !== d && (di() ? a.finishedWork = d : Fi(a, d, b)));
  } else d = a.finishedWork, null !== d ? Fi(a, d, b) : (a.finishedWork = null, d = a.timeoutHandle, -1 !== d && (a.timeoutHandle = -1, ze(d)), ci(a, c), d = a.finishedWork, null !== d && Fi(a, d, b));

  W = !1;
}

function Fi(a, b, c) {
  var d = a.firstBatch;

  if (null !== d && d._expirationTime >= c && (null === si ? si = [d] : si.push(d), d._defer)) {
    a.finishedWork = b;
    a.expirationTime = 0;
    return;
  }

  a.finishedWork = null;
  a === wi ? ii++ : (wi = a, ii = 0);
  r.unstable_runWithPriority(r.unstable_ImmediatePriority, function () {
    Zh(a, b);
  });
}

function Dh(a) {
  null === oi ? x("246") : void 0;
  oi.expirationTime = 0;
  pi || (pi = !0, qi = a);
}

function Gi(a, b) {
  var c = X;
  X = !0;

  try {
    return a(b);
  } finally {
    (X = c) || W || Yh(1073741823, !1);
  }
}

function Hi(a, b) {
  if (X && !ri) {
    ri = !0;

    try {
      return a(b);
    } finally {
      ri = !1;
    }
  }

  return a(b);
}

function Ii(a, b, c) {
  X || W || 0 === gi || (Yh(gi, !1), gi = 0);
  var d = X;
  X = !0;

  try {
    return r.unstable_runWithPriority(r.unstable_UserBlockingPriority, function () {
      return a(b, c);
    });
  } finally {
    (X = d) || W || Yh(1073741823, !1);
  }
}

function Ji(a, b, c, d, e) {
  var f = b.current;

  a: if (c) {
    c = c._reactInternalFiber;

    b: {
      2 === ed(c) && 1 === c.tag ? void 0 : x("170");
      var g = c;

      do {
        switch (g.tag) {
          case 3:
            g = g.stateNode.context;
            break b;

          case 1:
            if (J(g.type)) {
              g = g.stateNode.__reactInternalMemoizedMergedChildContext;
              break b;
            }

        }

        g = g.return;
      } while (null !== g);

      x("171");
      g = void 0;
    }

    if (1 === c.tag) {
      var h = c.type;

      if (J(h)) {
        c = Ne(c, h, g);
        break a;
      }
    }

    c = g;
  } else c = He;

  null === b.context ? b.context = c : b.pendingContext = c;
  b = e;
  e = nf(d);
  e.payload = {
    element: a
  };
  b = void 0 === b ? null : b;
  null !== b && (e.callback = b);
  of();
  pf(f, e);
  qf(f, d);
  return d;
}

function Ki(a, b, c, d) {
  var e = b.current,
      f = lf();
  e = mf(f, e);
  return Ji(a, b, c, e, d);
}

function Li(a) {
  a = a.current;
  if (!a.child) return null;

  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;

    default:
      return a.child.stateNode;
  }
}

function Mi(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: Wb,
    key: null == d ? null : "" + d,
    children: a,
    containerInfo: b,
    implementation: c
  };
}

Ab = function Ab(a, b, c) {
  switch (b) {
    case "input":
      yc(a, c);
      b = c.name;

      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode;) {
          c = c.parentNode;
        }

        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');

        for (b = 0; b < c.length; b++) {
          var d = c[b];

          if (d !== a && d.form === a.form) {
            var e = Ka(d);
            e ? void 0 : x("90");
            Sb(d);
            yc(d, e);
          }
        }
      }

      break;

    case "textarea":
      de(a, c);
      break;

    case "select":
      b = c.value, null != b && ae(a, !!c.multiple, b, !1);
  }
};

function Ni(a) {
  var b = 1073741822 - 25 * (((1073741822 - lf() + 500) / 25 | 0) + 1);
  b >= Jh && (b = Jh - 1);
  this._expirationTime = Jh = b;
  this._root = a;
  this._callbacks = this._next = null;
  this._hasChildren = this._didComplete = !1;
  this._children = null;
  this._defer = !0;
}

Ni.prototype.render = function (a) {
  this._defer ? void 0 : x("250");
  this._hasChildren = !0;
  this._children = a;
  var b = this._root._internalRoot,
      c = this._expirationTime,
      d = new Oi();
  Ji(a, b, null, c, d._onCommit);
  return d;
};

Ni.prototype.then = function (a) {
  if (this._didComplete) a();else {
    var b = this._callbacks;
    null === b && (b = this._callbacks = []);
    b.push(a);
  }
};

Ni.prototype.commit = function () {
  var a = this._root._internalRoot,
      b = a.firstBatch;
  this._defer && null !== b ? void 0 : x("251");

  if (this._hasChildren) {
    var c = this._expirationTime;

    if (b !== this) {
      this._hasChildren && (c = this._expirationTime = b._expirationTime, this.render(this._children));

      for (var d = null, e = b; e !== this;) {
        d = e, e = e._next;
      }

      null === d ? x("251") : void 0;
      d._next = e._next;
      this._next = b;
      a.firstBatch = this;
    }

    this._defer = !1;
    Bi(a, c);
    b = this._next;
    this._next = null;
    b = a.firstBatch = b;
    null !== b && b._hasChildren && b.render(b._children);
  } else this._next = null, this._defer = !1;
};

Ni.prototype._onComplete = function () {
  if (!this._didComplete) {
    this._didComplete = !0;
    var a = this._callbacks;
    if (null !== a) for (var b = 0; b < a.length; b++) {
      (0, a[b])();
    }
  }
};

function Oi() {
  this._callbacks = null;
  this._didCommit = !1;
  this._onCommit = this._onCommit.bind(this);
}

Oi.prototype.then = function (a) {
  if (this._didCommit) a();else {
    var b = this._callbacks;
    null === b && (b = this._callbacks = []);
    b.push(a);
  }
};

Oi.prototype._onCommit = function () {
  if (!this._didCommit) {
    this._didCommit = !0;
    var a = this._callbacks;
    if (null !== a) for (var b = 0; b < a.length; b++) {
      var c = a[b];
      "function" !== typeof c ? x("191", c) : void 0;
      c();
    }
  }
};

function Pi(a, b, c) {
  b = K(3, null, null, b ? 3 : 0);
  a = {
    current: b,
    containerInfo: a,
    pendingChildren: null,
    pingCache: null,
    earliestPendingTime: 0,
    latestPendingTime: 0,
    earliestSuspendedTime: 0,
    latestSuspendedTime: 0,
    latestPingedTime: 0,
    didError: !1,
    pendingCommitExpirationTime: 0,
    finishedWork: null,
    timeoutHandle: -1,
    context: null,
    pendingContext: null,
    hydrate: c,
    nextExpirationTimeToWorkOn: 0,
    expirationTime: 0,
    firstBatch: null,
    nextScheduledRoot: null
  };
  this._internalRoot = b.stateNode = a;
}

Pi.prototype.render = function (a, b) {
  var c = this._internalRoot,
      d = new Oi();
  b = void 0 === b ? null : b;
  null !== b && d.then(b);
  Ki(a, c, null, d._onCommit);
  return d;
};

Pi.prototype.unmount = function (a) {
  var b = this._internalRoot,
      c = new Oi();
  a = void 0 === a ? null : a;
  null !== a && c.then(a);
  Ki(null, b, null, c._onCommit);
  return c;
};

Pi.prototype.legacy_renderSubtreeIntoContainer = function (a, b, c) {
  var d = this._internalRoot,
      e = new Oi();
  c = void 0 === c ? null : c;
  null !== c && e.then(c);
  Ki(b, d, a, e._onCommit);
  return e;
};

Pi.prototype.createBatch = function () {
  var a = new Ni(this),
      b = a._expirationTime,
      c = this._internalRoot,
      d = c.firstBatch;
  if (null === d) c.firstBatch = a, a._next = null;else {
    for (c = null; null !== d && d._expirationTime >= b;) {
      c = d, d = d._next;
    }

    a._next = d;
    null !== c && (c._next = a);
  }
  return a;
};

function Qi(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}

Gb = Gi;
Hb = Ii;

Ib = function Ib() {
  W || 0 === gi || (Yh(gi, !1), gi = 0);
};

function Ri(a, b) {
  b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
  if (!b) for (var c; c = a.lastChild;) {
    a.removeChild(c);
  }
  return new Pi(a, !1, b);
}

function Si(a, b, c, d, e) {
  var f = c._reactRootContainer;

  if (f) {
    if ("function" === typeof e) {
      var g = e;

      e = function e() {
        var a = Li(f._internalRoot);
        g.call(a);
      };
    }

    null != a ? f.legacy_renderSubtreeIntoContainer(a, b, e) : f.render(b, e);
  } else {
    f = c._reactRootContainer = Ri(c, d);

    if ("function" === typeof e) {
      var h = e;

      e = function e() {
        var a = Li(f._internalRoot);
        h.call(a);
      };
    }

    Hi(function () {
      null != a ? f.legacy_renderSubtreeIntoContainer(a, b, e) : f.render(b, e);
    });
  }

  return Li(f._internalRoot);
}

function Ti(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  Qi(b) ? void 0 : x("200");
  return Mi(a, b, null, c);
}

var Vi = {
  createPortal: Ti,
  findDOMNode: function findDOMNode(a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b = a._reactInternalFiber;
    void 0 === b && ("function" === typeof a.render ? x("188") : x("268", Object.keys(a)));
    a = hd(b);
    a = null === a ? null : a.stateNode;
    return a;
  },
  hydrate: function hydrate(a, b, c) {
    Qi(b) ? void 0 : x("200");
    return Si(null, a, b, !0, c);
  },
  render: function render(a, b, c) {
    Qi(b) ? void 0 : x("200");
    return Si(null, a, b, !1, c);
  },
  unstable_renderSubtreeIntoContainer: function unstable_renderSubtreeIntoContainer(a, b, c, d) {
    Qi(c) ? void 0 : x("200");
    null == a || void 0 === a._reactInternalFiber ? x("38") : void 0;
    return Si(a, b, c, !1, d);
  },
  unmountComponentAtNode: function unmountComponentAtNode(a) {
    Qi(a) ? void 0 : x("40");
    return a._reactRootContainer ? (Hi(function () {
      Si(null, null, a, !1, function () {
        a._reactRootContainer = null;
      });
    }), !0) : !1;
  },
  unstable_createPortal: function unstable_createPortal() {
    return Ti.apply(void 0, arguments);
  },
  unstable_batchedUpdates: Gi,
  unstable_interactiveUpdates: Ii,
  flushSync: function flushSync(a, b) {
    W ? x("187") : void 0;
    var c = X;
    X = !0;

    try {
      return ki(a, b);
    } finally {
      X = c, Yh(1073741823, !1);
    }
  },
  unstable_createRoot: Ui,
  unstable_flushControlled: function unstable_flushControlled(a) {
    var b = X;
    X = !0;

    try {
      ki(a);
    } finally {
      (X = b) || W || Yh(1073741823, !1);
    }
  },
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    Events: [Ia, Ja, Ka, Ba.injectEventPluginsByName, pa, Qa, function (a) {
      ya(a, Pa);
    }, Eb, Fb, Dd, Da]
  }
};

function Ui(a, b) {
  Qi(a) ? void 0 : x("299", "unstable_createRoot");
  return new Pi(a, !0, null != b && !0 === b.hydrate);
}

(function (a) {
  var b = a.findFiberByHostInstance;
  return Te(n({}, a, {
    overrideProps: null,
    currentDispatcherRef: Tb.ReactCurrentDispatcher,
    findHostInstanceByFiber: function findHostInstanceByFiber(a) {
      a = hd(a);
      return null === a ? null : a.stateNode;
    },
    findFiberByHostInstance: function findFiberByHostInstance(a) {
      return b ? b(a) : null;
    }
  }));
})({
  findFiberByHostInstance: Ha,
  bundleType: 0,
  version: "16.8.6",
  rendererPackageName: "react-dom"
});

var Wi = {
  default: Vi
},
    Xi = Wi && Vi || Wi;
module.exports = Xi.default || Xi;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(38);
} else {}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** @license React v0.13.6
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


Object.defineProperty(exports, "__esModule", {
  value: !0
});
var d = null,
    e = !1,
    g = 3,
    k = -1,
    l = -1,
    m = !1,
    n = !1;

function p() {
  if (!m) {
    var a = d.expirationTime;
    n ? q() : n = !0;

    _r(t, a);
  }
}

function u() {
  var a = d,
      b = d.next;
  if (d === b) d = null;else {
    var c = d.previous;
    d = c.next = b;
    b.previous = c;
  }
  a.next = a.previous = null;
  c = a.callback;
  b = a.expirationTime;
  a = a.priorityLevel;
  var f = g,
      Q = l;
  g = a;
  l = b;

  try {
    var h = c();
  } finally {
    g = f, l = Q;
  }

  if ("function" === typeof h) if (h = {
    callback: h,
    priorityLevel: a,
    expirationTime: b,
    next: null,
    previous: null
  }, null === d) d = h.next = h.previous = h;else {
    c = null;
    a = d;

    do {
      if (a.expirationTime >= b) {
        c = a;
        break;
      }

      a = a.next;
    } while (a !== d);

    null === c ? c = d : c === d && (d = h, p());
    b = c.previous;
    b.next = c.previous = h;
    h.next = c;
    h.previous = b;
  }
}

function v() {
  if (-1 === k && null !== d && 1 === d.priorityLevel) {
    m = !0;

    try {
      do {
        u();
      } while (null !== d && 1 === d.priorityLevel);
    } finally {
      m = !1, null !== d ? p() : n = !1;
    }
  }
}

function t(a) {
  m = !0;
  var b = e;
  e = a;

  try {
    if (a) for (; null !== d;) {
      var c = exports.unstable_now();

      if (d.expirationTime <= c) {
        do {
          u();
        } while (null !== d && d.expirationTime <= c);
      } else break;
    } else if (null !== d) {
      do {
        u();
      } while (null !== d && !w());
    }
  } finally {
    m = !1, e = b, null !== d ? p() : n = !1, v();
  }
}

var x = Date,
    y = "function" === typeof setTimeout ? setTimeout : void 0,
    z = "function" === typeof clearTimeout ? clearTimeout : void 0,
    A = "function" === typeof requestAnimationFrame ? requestAnimationFrame : void 0,
    B = "function" === typeof cancelAnimationFrame ? cancelAnimationFrame : void 0,
    C,
    D;

function E(a) {
  C = A(function (b) {
    z(D);
    a(b);
  });
  D = y(function () {
    B(C);
    a(exports.unstable_now());
  }, 100);
}

if ("object" === typeof performance && "function" === typeof performance.now) {
  var F = performance;

  exports.unstable_now = function () {
    return F.now();
  };
} else exports.unstable_now = function () {
  return x.now();
};

var _r,
    q,
    w,
    G = null;

"undefined" !== typeof window ? G = window : "undefined" !== typeof global && (G = global);

if (G && G._schedMock) {
  var H = G._schedMock;
  _r = H[0];
  q = H[1];
  w = H[2];
  exports.unstable_now = H[3];
} else if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
  var I = null,
      J = function J(a) {
    if (null !== I) try {
      I(a);
    } finally {
      I = null;
    }
  };

  _r = function r(a) {
    null !== I ? setTimeout(_r, 0, a) : (I = a, setTimeout(J, 0, !1));
  };

  q = function q() {
    I = null;
  };

  w = function w() {
    return !1;
  };
} else {
  "undefined" !== typeof console && ("function" !== typeof A && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" !== typeof B && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
  var K = null,
      L = !1,
      M = -1,
      N = !1,
      O = !1,
      P = 0,
      R = 33,
      S = 33;

  w = function w() {
    return P <= exports.unstable_now();
  };

  var T = new MessageChannel(),
      U = T.port2;

  T.port1.onmessage = function () {
    L = !1;
    var a = K,
        b = M;
    K = null;
    M = -1;
    var c = exports.unstable_now(),
        f = !1;
    if (0 >= P - c) if (-1 !== b && b <= c) f = !0;else {
      N || (N = !0, E(V));
      K = a;
      M = b;
      return;
    }

    if (null !== a) {
      O = !0;

      try {
        a(f);
      } finally {
        O = !1;
      }
    }
  };

  var V = function V(a) {
    if (null !== K) {
      E(V);
      var b = a - P + S;
      b < S && R < S ? (8 > b && (b = 8), S = b < R ? R : b) : R = b;
      P = a + S;
      L || (L = !0, U.postMessage(void 0));
    } else N = !1;
  };

  _r = function _r(a, b) {
    K = a;
    M = b;
    O || 0 > b ? U.postMessage(void 0) : N || (N = !0, E(V));
  };

  q = function q() {
    K = null;
    L = !1;
    M = -1;
  };
}

exports.unstable_ImmediatePriority = 1;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_NormalPriority = 3;
exports.unstable_IdlePriority = 5;
exports.unstable_LowPriority = 4;

exports.unstable_runWithPriority = function (a, b) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;

    default:
      a = 3;
  }

  var c = g,
      f = k;
  g = a;
  k = exports.unstable_now();

  try {
    return b();
  } finally {
    g = c, k = f, v();
  }
};

exports.unstable_next = function (a) {
  switch (g) {
    case 1:
    case 2:
    case 3:
      var b = 3;
      break;

    default:
      b = g;
  }

  var c = g,
      f = k;
  g = b;
  k = exports.unstable_now();

  try {
    return a();
  } finally {
    g = c, k = f, v();
  }
};

exports.unstable_scheduleCallback = function (a, b) {
  var c = -1 !== k ? k : exports.unstable_now();
  if ("object" === typeof b && null !== b && "number" === typeof b.timeout) b = c + b.timeout;else switch (g) {
    case 1:
      b = c + -1;
      break;

    case 2:
      b = c + 250;
      break;

    case 5:
      b = c + 1073741823;
      break;

    case 4:
      b = c + 1E4;
      break;

    default:
      b = c + 5E3;
  }
  a = {
    callback: a,
    priorityLevel: g,
    expirationTime: b,
    next: null,
    previous: null
  };
  if (null === d) d = a.next = a.previous = a, p();else {
    c = null;
    var f = d;

    do {
      if (f.expirationTime > b) {
        c = f;
        break;
      }

      f = f.next;
    } while (f !== d);

    null === c ? c = d : c === d && (d = a, p());
    b = c.previous;
    b.next = c.previous = a;
    a.next = c;
    a.previous = b;
  }
  return a;
};

exports.unstable_cancelCallback = function (a) {
  var b = a.next;

  if (null !== b) {
    if (b === a) d = null;else {
      a === d && (d = b);
      var c = a.previous;
      c.next = b;
      b.previous = c;
    }
    a.next = a.previous = null;
  }
};

exports.unstable_wrapCallback = function (a) {
  var b = g;
  return function () {
    var c = g,
        f = k;
    g = b;
    k = exports.unstable_now();

    try {
      return a.apply(this, arguments);
    } finally {
      g = c, k = f, v();
    }
  };
};

exports.unstable_getCurrentPriorityLevel = function () {
  return g;
};

exports.unstable_shouldYield = function () {
  return !e && (null !== d && d.expirationTime < l || w());
};

exports.unstable_continueExecution = function () {
  null !== d && p();
};

exports.unstable_pauseExecution = function () {};

exports.unstable_getFirstCallbackNode = function () {
  return d;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(25)))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 46 */,
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(10);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__(39);

// EXTERNAL MODULE: ./src/demo/index.css
var demo = __webpack_require__(41);

// CONCATENATED MODULE: ./src/serviceWorker.ts
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost=Boolean(window.location.hostname==='localhost'||// [::1] is the IPv6 localhost address.
window.location.hostname==='[::1]'||// 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function register(config){if("production"==='production'&&'serviceWorker'in navigator){// The URL constructor is available in all browsers that support SW.
var publicUrl=new URL("/ncomponents-react",window.location.href);if(publicUrl.origin!==window.location.origin){// Our service worker won't work if PUBLIC_URL is on a different origin
// from what our page is served on. This might happen if a CDN is used to
// serve assets; see https://github.com/facebook/create-react-app/issues/2374
return;}window.addEventListener('load',function(){var swUrl="".concat("/ncomponents-react","/service-worker.js");if(isLocalhost){// This is running on localhost. Let's check if a service worker still exists or not.
checkValidServiceWorker(swUrl,config);// Add some additional logging to localhost, pointing developers to the
// service worker/PWA documentation.
navigator.serviceWorker.ready.then(function(){console.log('This web app is being served cache-first by a service '+'worker. To learn more, visit https://bit.ly/CRA-PWA');});}else{// Is not localhost. Just register service worker
registerValidSW(swUrl,config);}});}}function registerValidSW(swUrl,config){navigator.serviceWorker.register(swUrl).then(function(registration){registration.onupdatefound=function(){var installingWorker=registration.installing;if(installingWorker==null){return;}installingWorker.onstatechange=function(){if(installingWorker.state==='installed'){if(navigator.serviceWorker.controller){// At this point, the updated precached content has been fetched,
// but the previous service worker will still serve the older
// content until all client tabs are closed.
console.log('New content is available and will be used when all '+'tabs for this page are closed. See https://bit.ly/CRA-PWA.');// Execute callback
if(config&&config.onUpdate){config.onUpdate(registration);}}else{// At this point, everything has been precached.
// It's the perfect time to display a
// "Content is cached for offline use." message.
console.log('Content is cached for offline use.');// Execute callback
if(config&&config.onSuccess){config.onSuccess(registration);}}}};};}).catch(function(error){console.error('Error during service worker registration:',error);});}function checkValidServiceWorker(swUrl,config){// Check if the service worker can be found. If it can't reload the page.
fetch(swUrl).then(function(response){// Ensure service worker exists, and that we really are getting a JS file.
var contentType=response.headers.get('content-type');if(response.status===404||contentType!=null&&contentType.indexOf('javascript')===-1){// No service worker found. Probably a different app. Reload the page.
navigator.serviceWorker.ready.then(function(registration){registration.unregister().then(function(){window.location.reload();});});}else{// Service worker found. Proceed as normal.
registerValidSW(swUrl,config);}}).catch(function(){console.log('No internet connection found. App is running in offline mode.');});}function unregister(){if('serviceWorker'in navigator){navigator.serviceWorker.ready.then(function(registration){registration.unregister();});}}
// EXTERNAL MODULE: ./node_modules/popper.js/dist/esm/popper.js
var popper = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(6);

// EXTERNAL MODULE: ./src/demo/App.css
var demo_App = __webpack_require__(43);

// EXTERNAL MODULE: ./src/demo/content/lib.styles.scss
var lib_styles = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(18);

// CONCATENATED MODULE: ./src/demo/content/demoData.ts
var demoData_DemoAsyncItemsProvider=/*#__PURE__*/function(){function DemoAsyncItemsProvider(options){Object(classCallCheck["a" /* default */])(this,DemoAsyncItemsProvider);this.options=options;this.loadingFeedback="Wczytywanie pozycji...";this.errorFeddback="Błąd wczytywania pozycji, spróbuj później";this.enableSelectLocalFiltering=true;}Object(createClass["a" /* default */])(DemoAsyncItemsProvider,[{key:"getItems",value:function getItems(input){var _this=this;return new Promise(function(resolve,reject){var endFn=function endFn(){if(_this.options.rejectWithError)reject("Error");resolve(_this.options.items);};var delay=_this.options.delay||1000;setTimeout(endFn,delay);});}},{key:"getItemByKey",value:function getItemByKey(key){if(this.options.dontProvideItemByKey)return promiseResolveWithDelay(undefined,500);var item=this.options.items.filter(function(x){return x.id===key;})[0];return promiseResolveWithDelay(item,500);}}]);return DemoAsyncItemsProvider;}();function promiseResolveWithDelay(resolveValue,delay){return new Promise(function(resolve,reject){setTimeout(function(){return resolve(resolveValue);},delay||1000);});}var people=[{id:1,label:"Jan",lastName:"Kowal"},{id:2,label:"Grześ",lastName:"Hardy"},{id:3,label:"Krzyś",lastName:"Pyś"},{id:4,label:"Jerzy",lastName:"Leży"}];var strings=["test","dwa","trzy","cztery"];var demoData={people:people,strings:strings,asyncPeople:new demoData_DemoAsyncItemsProvider({items:people}),asyncPeopleError:new demoData_DemoAsyncItemsProvider({items:people,rejectWithError:true}),asyncPeopleNoGetByKey:new demoData_DemoAsyncItemsProvider({items:people,dontProvideItemByKey:true})};
// CONCATENATED MODULE: ./src/demo/content/BPanel.tsx
var BPanel_BPanel=function BPanel(props){return react_default.a.createElement("div",{className:"panel panel-default"},react_default.a.createElement("div",{className:"panel-heading"},react_default.a.createElement("h3",{className:"panel-title"},props.header)),react_default.a.createElement("div",{className:"panel-body"},props.children));};
// CONCATENATED MODULE: ./src/demo/content/demoUtils.ts
function toJson(obj){return JSON.stringify(obj);}
// EXTERNAL MODULE: ./src/lib/index.ts
var lib = __webpack_require__(7);

// CONCATENATED MODULE: ./src/demo/content/SelectDemo.tsx
var _personalStatusText;var PersonalStatus;(function(PersonalStatus){PersonalStatus[PersonalStatus["Single"]=1]="Single";PersonalStatus[PersonalStatus["Married"]=2]="Married";PersonalStatus[PersonalStatus["Divorced"]=3]="Divorced";})(PersonalStatus||(PersonalStatus={}));var personalStatusText=(_personalStatusText={},Object(defineProperty["a" /* default */])(_personalStatusText,PersonalStatus.Single,"Single"),Object(defineProperty["a" /* default */])(_personalStatusText,PersonalStatus.Married,"Married"),Object(defineProperty["a" /* default */])(_personalStatusText,PersonalStatus.Divorced,"Divorced"),_personalStatusText);var personalStatusDisplayFn=function personalStatusDisplayFn(value){return value&&personalStatusText[value];};var SelectDemo_SelectDemo=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(SelectDemo,_React$Component);function SelectDemo(props){var _this;Object(classCallCheck["a" /* default */])(this,SelectDemo);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(SelectDemo).call(this,props));_this.items=demoData.people;_this.strings=demoData.strings.slice();_this.numbers=[0,1,2,3,4];_this.personalStatuses=[PersonalStatus.Single,PersonalStatus.Married,PersonalStatus.Divorced];for(var i=0;i<50;i++){_this.strings.push("number ".concat(i));}_this.state={selectedItem:_this.items[0],selectedItemByKey:_this.items[0].id,selectedString:"test",selectedNumber:3};return _this;}Object(createClass["a" /* default */])(SelectDemo,[{key:"render",value:function render(){var _this2=this;var _this$state=this.state,selectedItem=_this$state.selectedItem,selectedItemByKey=_this$state.selectedItemByKey,selectedString=_this$state.selectedString,selectedNumber=_this$state.selectedNumber,selectedPersonalStatus=_this$state.selectedPersonalStatus;return react_default.a.createElement(BPanel_BPanel,{header:"Select"},react_default.a.createElement("div",null,react_default.a.createElement("div",null,"Model: ",toJson(selectedItem)),react_default.a.createElement(lib["SelectInput"],{items:this.items,value:selectedItem,onChange:function onChange(selectedItem){return _this2.setState({selectedItem:selectedItem});}}),react_default.a.createElement("button",{onClick:function onClick(){return _this2.setOutOfListValue();}},"Set out of list value"),react_default.a.createElement("button",{onClick:function onClick(){return _this2.setIncompatibleObjectValue();}},"Set incompatible object value")),react_default.a.createElement("div",null,react_default.a.createElement("div",null,"Custom display"),react_default.a.createElement(lib["SelectInput"],{items:this.items,value:selectedItem,onChange:function onChange(selectedItem){return _this2.setState({selectedItem:selectedItem});},display:"lastName"})),react_default.a.createElement("div",null,react_default.a.createElement("div",null,"Custom display fn"),react_default.a.createElement(lib["SelectInput"],{items:this.items,value:selectedItem,onChange:function onChange(selectedItem){return _this2.setState({selectedItem:selectedItem});},display:this.customItemFormat})),react_default.a.createElement("div",null,react_default.a.createElement("div",null,"Non strict"),react_default.a.createElement(lib["SelectInput"],{items:this.items,value:selectedItem,onChange:function onChange(selectedItem){return _this2.setState({selectedItem:selectedItem});},onChangeNonStrict:function onChangeNonStrict(val){return _this2.setState({selectedItem:val});},nonStrict:true})),react_default.a.createElement("div",null,react_default.a.createElement("div",null,"Item key as model",react_default.a.createElement("br",null),"Model: ",selectedItemByKey),react_default.a.createElement(lib["SelectInput"],{items:this.items,value:selectedItemByKey,onChange:function onChange(item){return _this2.setState({selectedItemByKey:item&&item.id});},itemKeyAsModel:true})),react_default.a.createElement("div",null,react_default.a.createElement("div",null,"Plain strings array",react_default.a.createElement("br",null),"Model: ",selectedString),react_default.a.createElement(lib["SelectInput"],{items:this.strings,value:selectedString,onChange:function onChange(val){return _this2.setState({selectedString:val});}})),react_default.a.createElement("div",null,react_default.a.createElement("div",null,"Plain numbers array",react_default.a.createElement("br",null),"Model: ",selectedNumber),react_default.a.createElement(lib["SelectInput"],{items:this.numbers,value:selectedNumber,onChange:function onChange(val){return _this2.setState({selectedNumber:val});}})),react_default.a.createElement("div",null,react_default.a.createElement("div",null,"Enum values with custom display fn",react_default.a.createElement("br",null),"Model: ",selectedPersonalStatus," / ",selectedPersonalStatus&&personalStatusText[selectedPersonalStatus]),react_default.a.createElement(lib["SelectInput"],{items:this.personalStatuses,value:selectedPersonalStatus,display:personalStatusDisplayFn,onChange:function onChange(val){return _this2.setState({selectedPersonalStatus:val});}})),react_default.a.createElement("div",null,react_default.a.createElement("div",null,"Async data provider"),react_default.a.createElement(lib["SelectInput"],{items:demoData.asyncPeople,value:selectedItem,onChange:function onChange(selectedItem){return _this2.setState({selectedItem:selectedItem});}})),react_default.a.createElement("div",null,react_default.a.createElement("div",null,"Async data provider with error"),react_default.a.createElement(lib["SelectInput"],{items:demoData.asyncPeopleError,value:selectedItem,onChange:function onChange(selectedItem){return _this2.setState({selectedItem:selectedItem});}})),react_default.a.createElement("div",null,react_default.a.createElement("div",null,"Async data provider item key as model"),react_default.a.createElement(lib["SelectInput"],{itemKeyAsModel:true,items:demoData.asyncPeople,value:selectedItemByKey,onChange:function onChange(selectedItem){return _this2.setState({selectedItemByKey:selectedItem?selectedItem.id:undefined});}})),react_default.a.createElement("div",null,react_default.a.createElement("div",null,"Async data provider item key as model no return for key request"),react_default.a.createElement(lib["SelectInput"],{itemKeyAsModel:true,items:demoData.asyncPeopleNoGetByKey,value:selectedItemByKey,onChange:function onChange(selectedItem){return _this2.setState({selectedItemByKey:selectedItem?selectedItem.id:undefined});}})),react_default.a.createElement("div",null,react_default.a.createElement("div",null,"No value, only onChange handler"),react_default.a.createElement(lib["SelectInput"],{items:this.items,value:undefined,onChange:function onChange(selectedItem){return _this2.setState({selectedItem:selectedItem});}})));}},{key:"customItemFormat",value:function customItemFormat(item){return"".concat(item.id,": ").concat(item.label.toUpperCase());}},{key:"setOutOfListValue",value:function setOutOfListValue(){var selectedItem={id:99,label:"Test",lastName:"Test 2"};this.setState({selectedItem:selectedItem});}},{key:"setIncompatibleObjectValue",value:function setIncompatibleObjectValue(){var selectedItem={age:29};this.setState({selectedItem:selectedItem});}}]);return SelectDemo;}(react_default.a.Component);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(1);

// CONCATENATED MODULE: ./src/demo/content/MultiselectDemo.tsx
var MultiselectDemo_MultiselectDemo=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(MultiselectDemo,_React$Component);function MultiselectDemo(props){var _this;Object(classCallCheck["a" /* default */])(this,MultiselectDemo);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(MultiselectDemo).call(this,props));_this.items=demoData.people;_this.state={selectedItems:[_this.items[0]],selectedNumber:[]};_this.numbers=[0,1,2,3,4];_this.clear=_this.clear.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));return _this;}Object(createClass["a" /* default */])(MultiselectDemo,[{key:"render",value:function render(){var _this2=this;return react_default.a.createElement(BPanel_BPanel,{header:"Multiselect"},react_default.a.createElement("div",{className:"mb-20"},"Model: ",toJson(this.state.selectedItems)),react_default.a.createElement("div",{className:"mb-20"},"Default selected template:",react_default.a.createElement("br",null),react_default.a.createElement(lib["Multiselect"],{value:this.state.selectedItems,items:this.items,filterable:true,disablePortalRender:true,onChange:function onChange(selectedItems){return _this2.setState({selectedItems:selectedItems});}})),react_default.a.createElement("div",{className:"mb-20"},"Default selected template with clear button:",react_default.a.createElement("br",null),react_default.a.createElement(lib["Multiselect"],{value:this.state.selectedItems,items:this.items,filterable:true,disablePortalRender:true,clearButton:true,onChange:function onChange(selectedItems){return _this2.setState({selectedItems:selectedItems});}})),react_default.a.createElement("div",{className:"mb-20"},"Custom selected template:",react_default.a.createElement("br",null),react_default.a.createElement(lib["Multiselect"],{value:this.state.selectedItems,items:this.items,onChange:function onChange(selectedItems){return _this2.setState({selectedItems:selectedItems});}},function(args){return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("ul",null,args.selectedItems.map(function(s){return react_default.a.createElement("li",{key:s.id},s.label);})),!args.selectedItems.length&&react_default.a.createElement("div",{"v-if":"!selected.length"},"Brak"),react_default.a.createElement("button",{onClick:_this2.clear,onMouseDown:stopPropagationAndPrevent},"Clear"));})),react_default.a.createElement("div",{className:"mb-20"},"Plain numbers array:",react_default.a.createElement("br",null),react_default.a.createElement(lib["Multiselect"],{value:this.state.selectedNumber,items:this.numbers,disablePortalRender:true,sortOnChange:true,onChange:function onChange(selectedNumber){return _this2.setState({selectedNumber:selectedNumber});}})));}},{key:"clear",value:function clear(ev){ev.preventDefault();ev.stopPropagation();this.setState({selectedItems:[]});}}]);return MultiselectDemo;}(react_default.a.Component);function stopPropagationAndPrevent(ev){ev.stopPropagation();ev.nativeEvent.stopImmediatePropagation();ev.preventDefault();}
// CONCATENATED MODULE: ./src/demo/content/DropdownDemo.tsx
var DropdownDemo_DropdownDemo=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(DropdownDemo,_React$Component);function DropdownDemo(props){var _this;Object(classCallCheck["a" /* default */])(this,DropdownDemo);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(DropdownDemo).call(this,props));_this.items=demoData.people;_this.state={selectedItem:_this.items[0]};_this.onSelect=_this.onSelect.bind(Object(assertThisInitialized["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this)));return _this;}Object(createClass["a" /* default */])(DropdownDemo,[{key:"render",value:function render(){return react_default.a.createElement(BPanel_BPanel,{header:"Dropdown"},react_default.a.createElement("div",null,react_default.a.createElement("div",null,"Model: ",toJson(this.state.selectedItem)),react_default.a.createElement("div",null,react_default.a.createElement(lib["Dropdown"],{items:this.items,onSelect:this.onSelect},react_default.a.createElement("button",null,"Dropdown on button"))),react_default.a.createElement("div",null,react_default.a.createElement(lib["Dropdown"],{items:this.items,onSelect:this.onSelect,contextMenu:true},react_default.a.createElement("div",{style:{height:"50px",width:"300px",border:"1px solid #000"}},"Right mouse bottom mode"))),react_default.a.createElement("div",null,react_default.a.createElement("div",{style:{height:"50px",width:"300px",border:"1px solid #000"}},"ADHoc mode"))));}},{key:"onSelect",value:function onSelect(item){this.setState({selectedItem:item});}}]);return DropdownDemo;}(react_default.a.Component);
// CONCATENATED MODULE: ./src/demo/content/DateAndTimeDemo.tsx
var DateAndTimeDemo_DateAndTimeDemo=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(DateAndTimeDemo,_React$Component);function DateAndTimeDemo(props){var _this;Object(classCallCheck["a" /* default */])(this,DateAndTimeDemo);_this=Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(DateAndTimeDemo).call(this,props));_this.state={date:"2018-05-09",time:"10:30",timeWithSeconds:"10:30:35",dateTimeIso:"2018-10-02T22:00:30.000+0200",unix:Math.floor(new Date().getTime()/1000)};return _this;}Object(createClass["a" /* default */])(DateAndTimeDemo,[{key:"render",value:function render(){var _this2=this;return react_default.a.createElement(BPanel_BPanel,{header:"Date and time"},react_default.a.createElement("div",null,"Model (date yyyy-MM-dd): ",this.state.date),react_default.a.createElement(lib["DatepickerInput"],{value:this.state.date,onChange:function onChange(date){return _this2.setState({date:date});},modelFormat:"yyyy-MM-dd"}),react_default.a.createElement("div",{className:"mt-10"},"Model (time HH:mm): ",this.state.time),react_default.a.createElement(lib["TimepickerInput"],{value:this.state.time,onChange:function onChange(time){return _this2.setState({time:time});},modelFormat:"HH:mm"}),react_default.a.createElement("div",{className:"mt-10"},"Model (time HH:mm:ss): ",this.state.timeWithSeconds),react_default.a.createElement(lib["TimepickerInput"],{value:this.state.timeWithSeconds,onChange:function onChange(timeWithSeconds){return _this2.setState({timeWithSeconds:timeWithSeconds});},modelFormat:"HH:mm:ss",viewFormat:"HH:mm:ss"}),react_default.a.createElement("div",{className:"mt-10"},"Model (date and time ISO): ",this.state.dateTimeIso),react_default.a.createElement(lib["DatepickerInput"],{value:this.state.dateTimeIso,onChange:function onChange(dateTimeIso){return _this2.setState({dateTimeIso:dateTimeIso});}}),react_default.a.createElement(lib["TimepickerInput"],{value:this.state.dateTimeIso,onChange:function onChange(dateTimeIso){return _this2.setState({dateTimeIso:dateTimeIso});},viewFormat:"HH:mm"}),react_default.a.createElement("div",{className:"mt-10"},"Model (date and time unix): ",this.state.unix),react_default.a.createElement(lib["DatepickerInput"],{modelFormat:"unix",value:this.state.unix,onChange:function onChange(unix){return _this2.setState({unix:unix});}}),react_default.a.createElement(lib["TimepickerInput"],{modelFormat:"unix",value:this.state.unix,onChange:function onChange(unix){return _this2.setState({unix:unix});},viewFormat:"HH:mm"}));}}]);return DateAndTimeDemo;}(react_default.a.Component);
// CONCATENATED MODULE: ./src/demo/content/TooltipDemo.tsx
var TooltipDemo_TooltipDemo=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(TooltipDemo,_React$Component);function TooltipDemo(){Object(classCallCheck["a" /* default */])(this,TooltipDemo);return Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(TooltipDemo).apply(this,arguments));}Object(createClass["a" /* default */])(TooltipDemo,[{key:"render",value:function render(){var placements=["top","right","bottom","left"];return react_default.a.createElement(BPanel_BPanel,{header:"Tooltip"},react_default.a.createElement("div",{className:"mb-20"},placements.map(function(x){return react_default.a.createElement(lib["Tooltip"],{key:x,content:"Some tooltip text",placement:x},react_default.a.createElement("button",{style:{marginRight:"5px"}},"Tooltip ",x));}),react_default.a.createElement(lib["Tooltip"],{content:"Some tooltip text",trigger:"click"},react_default.a.createElement("button",{style:{marginRight:"5px"}},"Tooltip on click"))),react_default.a.createElement("div",null,react_default.a.createElement(lib["Tooltip"],{content:"Some tooltip text",trigger:"focus"},react_default.a.createElement("input",{type:"text",placeholder:"Tooltip on focus"}))),react_default.a.createElement("div",null,react_default.a.createElement(lib["Tooltip"],{content:"Some tooltip text"},"Tooltip on static text (will be autowrapped in span)")));}}]);return TooltipDemo;}(react_default.a.Component);
// CONCATENATED MODULE: ./src/demo/content/PopoverDemo.tsx
var PopoverDemo_PopoverDemo=/*#__PURE__*/function(_React$Component){Object(inherits["a" /* default */])(PopoverDemo,_React$Component);function PopoverDemo(){Object(classCallCheck["a" /* default */])(this,PopoverDemo);return Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(PopoverDemo).apply(this,arguments));}Object(createClass["a" /* default */])(PopoverDemo,[{key:"render",value:function render(){var placements=["top","right","bottom","left"];return react_default.a.createElement(BPanel_BPanel,{header:"Popover"},react_default.a.createElement("div",{className:"mb-20"},placements.map(function(x){return react_default.a.createElement(lib["Popover"],{key:x,header:"Sample header",content:"Test content",placement:x},react_default.a.createElement("button",{style:{marginRight:"5px"}},"Popover ",x," on click"));})));}}]);return PopoverDemo;}(react_default.a.Component);
// CONCATENATED MODULE: ./src/demo/App.tsx
var App_App=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(App,_Component);function App(){Object(classCallCheck["a" /* default */])(this,App);return Object(possibleConstructorReturn["a" /* default */])(this,Object(getPrototypeOf["a" /* default */])(App).apply(this,arguments));}Object(createClass["a" /* default */])(App,[{key:"render",value:function render(){return react_default.a.createElement("div",{id:"app",className:"container"},react_default.a.createElement(DateAndTimeDemo_DateAndTimeDemo,null),react_default.a.createElement(MultiselectDemo_MultiselectDemo,null),react_default.a.createElement(SelectDemo_SelectDemo,null),react_default.a.createElement(DropdownDemo_DropdownDemo,null),react_default.a.createElement(TooltipDemo_TooltipDemo,null),react_default.a.createElement(PopoverDemo_PopoverDemo,null));}}]);return App;}(react["Component"]);/* harmony default export */ var src_demo_App = (App_App);
// CONCATENATED MODULE: ./src/index.tsx
popper["a" /* default */].Defaults.modifiers.preventOverflow.boundariesElement='window';react_dom_default.a.render(react_default.a.createElement(src_demo_App,null),document.getElementById('root'));// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
unregister();

/***/ })
/******/ ]);
});
//# sourceMappingURL=bundle.js.map