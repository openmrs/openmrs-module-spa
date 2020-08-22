(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
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

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
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

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

var cookie = {
  create: function create(name, value, minutes, domain) {
    var cookieOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
      path: '/'
    };
    var expires;

    if (minutes) {
      var date = new Date();
      date.setTime(date.getTime() + minutes * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    } else expires = '';

    domain = domain ? 'domain=' + domain + ';' : '';
    cookieOptions = Object.keys(cookieOptions).reduce(function (acc, key) {
      return acc + ';' + key.replace(/([A-Z])/g, function ($1) {
        return '-' + $1.toLowerCase();
      }) + '=' + cookieOptions[key];
    }, '');
    document.cookie = name + '=' + encodeURIComponent(value) + expires + ';' + domain + cookieOptions;
  },
  read: function read(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }

      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }

    return null;
  },
  remove: function remove(name) {
    this.create(name, '', -1);
  }
};
var cookie$1 = {
  name: 'cookie',
  lookup: function lookup(options) {
    var found;

    if (options.lookupCookie && typeof document !== 'undefined') {
      var c = cookie.read(options.lookupCookie);
      if (c) found = c;
    }

    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupCookie && typeof document !== 'undefined') {
      cookie.create(options.lookupCookie, lng, options.cookieMinutes, options.cookieDomain, options.cookieOptions);
    }
  }
};

var querystring = {
  name: 'querystring',
  lookup: function lookup(options) {
    var found;

    if (typeof window !== 'undefined') {
      var query = window.location.search.substring(1);
      var params = query.split('&');

      for (var i = 0; i < params.length; i++) {
        var pos = params[i].indexOf('=');

        if (pos > 0) {
          var key = params[i].substring(0, pos);

          if (key === options.lookupQuerystring) {
            found = params[i].substring(pos + 1);
          }
        }
      }
    }

    return found;
  }
};

var hasLocalStorageSupport;

try {
  hasLocalStorageSupport = window !== 'undefined' && window.localStorage !== null;
  var testKey = 'i18next.translate.boo';
  window.localStorage.setItem(testKey, 'foo');
  window.localStorage.removeItem(testKey);
} catch (e) {
  hasLocalStorageSupport = false;
}

var localStorage = {
  name: 'localStorage',
  lookup: function lookup(options) {
    var found;

    if (options.lookupLocalStorage && hasLocalStorageSupport) {
      var lng = window.localStorage.getItem(options.lookupLocalStorage);
      if (lng) found = lng;
    }

    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupLocalStorage && hasLocalStorageSupport) {
      window.localStorage.setItem(options.lookupLocalStorage, lng);
    }
  }
};

var hasSessionStorageSupport;

try {
  hasSessionStorageSupport = window !== 'undefined' && window.sessionStorage !== null;
  var testKey$1 = 'i18next.translate.boo';
  window.sessionStorage.setItem(testKey$1, 'foo');
  window.sessionStorage.removeItem(testKey$1);
} catch (e) {
  hasSessionStorageSupport = false;
}

var sessionStorage = {
  name: 'sessionStorage',
  lookup: function lookup(options) {
    var found;

    if (options.lookupsessionStorage && hasSessionStorageSupport) {
      var lng = window.sessionStorage.getItem(options.lookupsessionStorage);
      if (lng) found = lng;
    }

    return found;
  },
  cacheUserLanguage: function cacheUserLanguage(lng, options) {
    if (options.lookupsessionStorage && hasSessionStorageSupport) {
      window.sessionStorage.setItem(options.lookupsessionStorage, lng);
    }
  }
};

var navigator$1 = {
  name: 'navigator',
  lookup: function lookup(options) {
    var found = [];

    if (typeof navigator !== 'undefined') {
      if (navigator.languages) {
        // chrome only; not an array, so can't use .push.apply instead of iterating
        for (var i = 0; i < navigator.languages.length; i++) {
          found.push(navigator.languages[i]);
        }
      }

      if (navigator.userLanguage) {
        found.push(navigator.userLanguage);
      }

      if (navigator.language) {
        found.push(navigator.language);
      }
    }

    return found.length > 0 ? found : undefined;
  }
};

var htmlTag = {
  name: 'htmlTag',
  lookup: function lookup(options) {
    var found;
    var htmlTag = options.htmlTag || (typeof document !== 'undefined' ? document.documentElement : null);

    if (htmlTag && typeof htmlTag.getAttribute === 'function') {
      found = htmlTag.getAttribute('lang');
    }

    return found;
  }
};

var path = {
  name: 'path',
  lookup: function lookup(options) {
    var found;

    if (typeof window !== 'undefined') {
      var language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);

      if (language instanceof Array) {
        if (typeof options.lookupFromPathIndex === 'number') {
          if (typeof language[options.lookupFromPathIndex] !== 'string') {
            return undefined;
          }

          found = language[options.lookupFromPathIndex].replace('/', '');
        } else {
          found = language[0].replace('/', '');
        }
      }
    }

    return found;
  }
};

var subdomain = {
  name: 'subdomain',
  lookup: function lookup(options) {
    var found;

    if (typeof window !== 'undefined') {
      var language = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);

      if (language instanceof Array) {
        if (typeof options.lookupFromSubdomainIndex === 'number') {
          found = language[options.lookupFromSubdomainIndex].replace('http://', '').replace('https://', '').replace('.', '');
        } else {
          found = language[0].replace('http://', '').replace('https://', '').replace('.', '');
        }
      }
    }

    return found;
  }
};

function getDefaults() {
  return {
    order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    // cache user language
    caches: ['localStorage'],
    excludeCacheFor: ['cimode'],
    //cookieMinutes: 10,
    //cookieDomain: 'myDomain'
    checkWhitelist: true,
    checkForSimilarInWhitelist: false
  };
}

var Browser =
/*#__PURE__*/
function () {
  function Browser(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Browser);

    this.type = 'languageDetector';
    this.detectors = {};
    this.init(services, options);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Browser, [{
    key: "init",
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i18nOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.services = services;
      this.options = defaults(options, this.options || {}, getDefaults()); // if checking for similar, user needs to check whitelist

      if (this.options.checkForSimilarInWhitelist) this.options.checkWhitelist = true; // backwards compatibility

      if (this.options.lookupFromUrlIndex) this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
      this.i18nOptions = i18nOptions;
      this.addDetector(cookie$1);
      this.addDetector(querystring);
      this.addDetector(localStorage);
      this.addDetector(sessionStorage);
      this.addDetector(navigator$1);
      this.addDetector(htmlTag);
      this.addDetector(path);
      this.addDetector(subdomain);
    }
  }, {
    key: "addDetector",
    value: function addDetector(detector) {
      this.detectors[detector.name] = detector;
    }
  }, {
    key: "detect",
    value: function detect(detectionOrder) {
      var _this = this;

      if (!detectionOrder) detectionOrder = this.options.order;
      var detected = [];
      detectionOrder.forEach(function (detectorName) {
        if (_this.detectors[detectorName]) {
          var lookup = _this.detectors[detectorName].lookup(_this.options);

          if (lookup && typeof lookup === 'string') lookup = [lookup];
          if (lookup) detected = detected.concat(lookup);
        }
      });
      var found;
      detected.forEach(function (lng) {
        if (found) return;

        var cleanedLng = _this.services.languageUtils.formatLanguageCode(lng);

        if (!_this.options.checkWhitelist || _this.services.languageUtils.isWhitelisted(cleanedLng)) found = cleanedLng;

        if (!found && _this.options.checkForSimilarInWhitelist) {
          found = _this.getSimilarInWhitelist(cleanedLng);
        }
      });

      if (!found) {
        var fallbacks = this.i18nOptions.fallbackLng;
        if (typeof fallbacks === 'string') fallbacks = [fallbacks];
        if (!fallbacks) fallbacks = [];

        if (Object.prototype.toString.apply(fallbacks) === '[object Array]') {
          found = fallbacks[0];
        } else {
          found = fallbacks[0] || fallbacks["default"] && fallbacks["default"][0];
        }
      }

      return found;
    }
  }, {
    key: "cacheUserLanguage",
    value: function cacheUserLanguage(lng, caches) {
      var _this2 = this;

      if (!caches) caches = this.options.caches;
      if (!caches) return;
      if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1) return;
      caches.forEach(function (cacheName) {
        if (_this2.detectors[cacheName]) _this2.detectors[cacheName].cacheUserLanguage(lng, _this2.options);
      });
    }
  }, {
    key: "getSimilarInWhitelist",
    value: function getSimilarInWhitelist(cleanedLng) {
      var _this3 = this;

      if (!this.i18nOptions.whitelist) return;

      if (cleanedLng.includes('-')) {
        // i.e. es-MX should check if es is in whitelist
        var prefix = cleanedLng.split('-')[0];
        var cleanedPrefix = this.services.languageUtils.formatLanguageCode(prefix);
        if (this.services.languageUtils.isWhitelisted(cleanedPrefix)) return cleanedPrefix; // if reached here, nothing found. continue to search for similar using only prefix

        cleanedLng = cleanedPrefix;
      } // i.e. 'pt' should return 'pt-BR'. If multiple in whitelist with 'pt-', then use first one in whitelist


      var similar = this.i18nOptions.whitelist.find(function (whitelistLng) {
        var cleanedWhitelistLng = _this3.services.languageUtils.formatLanguageCode(whitelistLng);

        if (cleanedWhitelistLng.startsWith(cleanedLng)) return cleanedWhitelistLng;
      });
      if (similar) return similar;
    }
  }]);

  return Browser;
}();

Browser.type = 'languageDetector';

/* harmony default export */ __webpack_exports__["default"] = (Browser);


/***/ }),

/***/ "./node_modules/i18next-icu/dist/commonjs/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/i18next-icu/dist/commonjs/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var utils = _interopRequireWildcard(__webpack_require__(/*! ./utils.js */ "./node_modules/i18next-icu/dist/commonjs/utils.js"));

var _intlMessageformat = _interopRequireDefault(__webpack_require__(/*! intl-messageformat */ "./node_modules/intl-messageformat/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function getDefaults() {
  return {
    memoize: true,
    memoizeFallback: false,
    bindI18n: '',
    bindI18nStore: '',
    parseErrorHandler: function parseErrorHandler(err, key, res, options) {
      return res;
    }
  };
}

var ICU = /*#__PURE__*/function () {
  function ICU(options) {
    _classCallCheck(this, ICU);

    this.type = 'i18nFormat';
    this.mem = {};
    this.init(null, options);
  }

  _createClass(ICU, [{
    key: "init",
    value: function init(i18next, options) {
      var _this = this;

      var i18nextOptions = i18next && i18next.options && i18next.options.i18nFormat || {};
      this.options = utils.defaults(i18nextOptions, options, this.options || {}, getDefaults());
      this.formats = this.options.formats;

      if (i18next) {
        var _this$options = this.options,
            bindI18n = _this$options.bindI18n,
            bindI18nStore = _this$options.bindI18nStore,
            memoize = _this$options.memoize;
        i18next.IntlMessageFormat = _intlMessageformat["default"];
        i18next.ICU = this;

        if (memoize) {
          if (bindI18n) {
            i18next.on(bindI18n, function () {
              return _this.clearCache();
            });
          }

          if (bindI18nStore) {
            i18next.store.on(bindI18nStore, function () {
              return _this.clearCache();
            });
          }
        }
      }

      if (this.options.localeData) {
        if (Object.prototype.toString.apply(this.options.localeData) === '[object Array]') {
          this.options.localeData.forEach(function (ld) {
            return _this.addLocaleData(ld);
          });
        } else {
          this.addLocaleData(this.options.localeData);
        }
      }
    }
  }, {
    key: "addLocaleData",
    value: function addLocaleData(data) {
      var locales = Object.prototype.toString.apply(data) === '[object Array]' ? data : [data];
      locales.forEach(function (localeData) {
        if (localeData && localeData.locale) {
          _intlMessageformat["default"].__addLocaleData(localeData); // IntlRelativeFormat.__addLocaleData(localeData);

        }
      });
    }
  }, {
    key: "addUserDefinedFormats",
    value: function addUserDefinedFormats(formats) {
      this.formats = this.formats ? _objectSpread({}, this.formats, {}, formats) : formats;
    }
  }, {
    key: "parse",
    value: function parse(res, options, lng, ns, key, info) {
      var hadSuccessfulLookup = info && info.resolved && info.resolved.res;
      var memKey = this.options.memoize && "".concat(lng, ".").concat(ns, ".").concat(key.replace(/\./g, '###'));
      var fc;

      if (this.options.memoize) {
        fc = utils.getPath(this.mem, memKey);
      }

      try {
        if (!fc) {
          fc = new _intlMessageformat["default"](res, lng, this.formats);
          if (this.options.memoize && (this.options.memoizeFallback || !info || hadSuccessfulLookup)) utils.setPath(this.mem, memKey, fc);
        }

        return fc.format(options);
      } catch (err) {
        return this.options.parseErrorHandler(err, key, res, options);
      }
    }
  }, {
    key: "addLookupKeys",
    value: function addLookupKeys(finalKeys, key, code, ns, options) {
      // no additional keys needed for select or plural
      // so there is no need to add keys to that finalKeys array
      return finalKeys;
    }
  }, {
    key: "clearCache",
    value: function clearCache() {
      this.mem = {};
    }
  }]);

  return ICU;
}();

ICU.type = 'i18nFormat';
var _default = ICU;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/i18next-icu/dist/commonjs/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/i18next-icu/dist/commonjs/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPath = setPath;
exports.pushPath = pushPath;
exports.getPath = getPath;
exports.defaults = defaults;
exports.extend = extend;

function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }

  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }

  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');

  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();
    object = object[key];
  }

  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}

function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;

  obj[k] = newValue;
}

function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
      obj = _getLastOfPath2.obj,
      k = _getLastOfPath2.k;

  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}

function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;

  if (!obj) return undefined;
  return obj[k];
}

var arr = [];
var each = arr.forEach;
var slice = arr.slice;

function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

function extend(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

/***/ }),

/***/ "./node_modules/i18next-icu/index.js":
/*!*******************************************!*\
  !*** ./node_modules/i18next-icu/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/commonjs/index.js */ "./node_modules/i18next-icu/dist/commonjs/index.js").default;


/***/ }),

/***/ "./node_modules/i18next-xhr-backend/dist/esm/i18nextXHRBackend.js":
/*!************************************************************************!*\
  !*** ./node_modules/i18next-xhr-backend/dist/esm/i18nextXHRBackend.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");





var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

function addQueryString(url, params) {
  if (params && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(params) === 'object') {
    var queryString = '',
        e = encodeURIComponent; // Must encode data

    for (var paramName in params) {
      queryString += '&' + e(paramName) + '=' + e(params[paramName]);
    }

    if (!queryString) {
      return url;
    }

    url = url + (url.indexOf('?') !== -1 ? '&' : '?') + queryString.slice(1);
  }

  return url;
} // https://gist.github.com/Xeoncross/7663273


function ajax(url, options, callback, data, cache) {
  if (data && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(data) === 'object') {
    if (!cache) {
      data['_t'] = new Date();
    } // URL encoded form data must be in querystring format


    data = addQueryString('', data).slice(1);
  }

  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }

  try {
    var x;

    if (XMLHttpRequest) {
      x = new XMLHttpRequest();
    } else {
      x = new ActiveXObject('MSXML2.XMLHTTP.3.0');
    }

    x.open(data ? 'POST' : 'GET', url, 1);

    if (!options.crossDomain) {
      x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    }

    x.withCredentials = !!options.withCredentials;

    if (data) {
      x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }

    if (x.overrideMimeType) {
      x.overrideMimeType("application/json");
    }

    var h = options.customHeaders;
    h = typeof h === 'function' ? h() : h;

    if (h) {
      for (var i in h) {
        x.setRequestHeader(i, h[i]);
      }
    }

    x.onreadystatechange = function () {
      x.readyState > 3 && callback && callback(x.responseText, x);
    };

    x.send(data);
  } catch (e) {
    console && console.log(e);
  }
}

function getDefaults() {
  return {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    addPath: '/locales/add/{{lng}}/{{ns}}',
    allowMultiLoading: false,
    parse: JSON.parse,
    parsePayload: function parsePayload(namespace, key, fallbackValue) {
      return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, key, fallbackValue || '');
    },
    crossDomain: false,
    ajax: ajax
  };
}

var Backend =
/*#__PURE__*/
function () {
  function Backend(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Backend);

    this.init(services, options);
    this.type = 'backend';
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Backend, [{
    key: "init",
    value: function init(services) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.services = services;
      this.options = defaults(options, this.options || {}, getDefaults());
    }
  }, {
    key: "readMulti",
    value: function readMulti(languages, namespaces, callback) {
      var loadPath = this.options.loadPath;

      if (typeof this.options.loadPath === 'function') {
        loadPath = this.options.loadPath(languages, namespaces);
      }

      var url = this.services.interpolator.interpolate(loadPath, {
        lng: languages.join('+'),
        ns: namespaces.join('+')
      });
      this.loadUrl(url, callback);
    }
  }, {
    key: "read",
    value: function read(language, namespace, callback) {
      var loadPath = this.options.loadPath;

      if (typeof this.options.loadPath === 'function') {
        loadPath = this.options.loadPath([language], [namespace]);
      }

      var url = this.services.interpolator.interpolate(loadPath, {
        lng: language,
        ns: namespace
      });
      this.loadUrl(url, callback);
    }
  }, {
    key: "loadUrl",
    value: function loadUrl(url, callback) {
      var _this = this;

      this.options.ajax(url, this.options, function (data, xhr) {
        if (xhr.status >= 500 && xhr.status < 600) return callback('failed loading ' + url, true
        /* retry */
        );
        if (xhr.status >= 400 && xhr.status < 500) return callback('failed loading ' + url, false
        /* no retry */
        );
        var ret, err;

        try {
          ret = _this.options.parse(data, url);
        } catch (e) {
          err = 'failed parsing ' + url + ' to json';
        }

        if (err) return callback(err, false);
        callback(null, ret);
      });
    }
  }, {
    key: "create",
    value: function create(languages, namespace, key, fallbackValue) {
      var _this2 = this;

      if (typeof languages === 'string') languages = [languages];
      var payload = this.options.parsePayload(namespace, key, fallbackValue);
      languages.forEach(function (lng) {
        var url = _this2.services.interpolator.interpolate(_this2.options.addPath, {
          lng: lng,
          ns: namespace
        });

        _this2.options.ajax(url, _this2.options, function (data, xhr) {//const statusCode = xhr.status.toString();
          // TODO: if statusCode === 4xx do log
        }, payload);
      });
    }
  }]);

  return Backend;
}();

Backend.type = 'backend';

/* harmony default export */ __webpack_exports__["default"] = (Backend);


/***/ }),

/***/ "./node_modules/import-map-overrides/dist/import-map-overrides.js":
/*!************************************************************************!*\
  !*** ./node_modules/import-map-overrides/dist/import-map-overrides.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* import-map-overrides@1.15.2 */
!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e,t,n){return(u=a()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&l(o,n.prototype),o}).apply(null,arguments)}function s(e){var t="function"==typeof Map?new Map:void 0;return(s=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return u(e,arguments,i(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),l(r,e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?d(e):t}function c(e){return function(){var t,n=i(e);if(a()){var r=i(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return p(this,t)}}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=e[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h,g=/^\d+$/g,_=document.querySelector('meta[name="importmap-type"]'),y={},b=_?_.getAttribute("content"):"importmap",w=!!_&&_.hasAttribute("server-cookie"),x=!!_&&_.hasAttribute("server-only");window.importMapOverrides={addOverride:function(e,t){g.test(t)&&(t=M.getUrlFromPort(e,t));var n="import-map-override:"+e;return localStorage.setItem(n,t),w&&(document.cookie="".concat(n,"=").concat(t)),O(),M.getOverrideMap()},getOverrideMap:function(){for(var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t={imports:{},scopes:{}},n=M.getDisabledOverrides(),r=0;r<localStorage.length;r++){var o=localStorage.key(r);if(0===o.indexOf("import-map-override:")){var i=o.slice("import-map-override:".length);(e||!n.indexOf(i)>=0)&&(t.imports[i]=localStorage.getItem(o))}}return t},removeOverride:function(e){var t="import-map-override:"+e,n=null!==localStorage.getItem(t);return localStorage.removeItem(t),w&&(document.cookie="".concat(t,"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;")),M.enableOverride(e),O(),n},resetOverrides:function(){return Object.keys(M.getOverrideMap(!0).imports).forEach((function(e){M.removeOverride(e)})),localStorage.removeItem("import-map-overrides-disabled"),localStorage.removeItem("import-map-overrides-external-maps"),O(),M.getOverrideMap()},hasOverrides:function(){return Object.keys(M.getOverrideMap().imports).length>0},getUrlFromPort:function(e,t){var n=e.replace(/@/g,"").replace(/\//g,"-");return"//localhost:".concat(t,"/").concat(n,".js")},enableUI:function(){var e=document.querySelector("import-map-overrides-full");e||((e=document.createElement("import-map-overrides-full")).setAttribute("show-when-local-storage","true"),document.body.appendChild(e));var t=e.getAttribute("show-when-local-storage");t&&(localStorage.setItem(t,!0),e.renderWithPreact())},mergeImportMap:function(e,t){var n={imports:{},scopes:{}};for(var r in e.imports)n.imports[r]=e.imports[r];for(var o in t.imports)n.imports[o]=t.imports[o];for(var i in e.scopes)n.scopes[i]=e.scopes[i];for(var l in t.scopes)n.scopes[l]=t.scopes[l];return n},getDefaultMap:function(){return h||(h=Array.prototype.reduce.call(document.querySelectorAll('script[type="'.concat(b,'"], script[type="overridable-importmap"]')),(function(e,t){return t.hasAttribute("data-is-importmap-override")?e:(n=t.src?D(t.src):Promise.resolve(JSON.parse(t.textContent)),Promise.all([e,n]).then((function(e){var t=m(e,2),n=t[0],r=t[1];return M.mergeImportMap(n,r)})));var n}),Promise.resolve({imports:{},scopes:{}})))},getCurrentPageMap:function(){return Promise.all([M.getDefaultMap(),M.getExternalOverrideMap(M.getCurrentPageExternalOverrides())]).then((function(e){var t=m(e,2),n=t[0],r=t[1];return M.mergeImportMap(M.mergeImportMap(n,r),E)}))},getCurrentPageExternalOverrides:function(){var e=[];return document.querySelectorAll("[".concat("data-is-importmap-override",']:not([id="import-map-overrides"])')).forEach((function(t){e.push(t.src)})),e},getNextPageMap:function(){return Promise.all([M.getDefaultMap(),M.getExternalOverrideMap()]).then((function(e){var t=m(e,2),n=t[0],r=t[1];return M.mergeImportMap(M.mergeImportMap(n,r),M.getOverrideMap())}))},disableOverride:function(e){var t=M.getDisabledOverrides();return!t.includes(e)&&(localStorage.setItem("import-map-overrides-disabled",JSON.stringify(t.concat(e))),O(),!0)},enableOverride:function(e){var t=M.getDisabledOverrides(),n=t.indexOf(e);return n>=0&&(t.splice(n,1),localStorage.setItem("import-map-overrides-disabled",JSON.stringify(t)),O(),!0)},getDisabledOverrides:function(){var e=localStorage.getItem("import-map-overrides-disabled");return e?JSON.parse(e):[]},isDisabled:function(e){return M.getDisabledOverrides().includes(e)},getExternalOverrides:function(){var e=localStorage.getItem("import-map-overrides-external-maps");return e?JSON.parse(e).sort():[]},addExternalOverride:function(e){e=new URL(e,document.baseURI).href;var t=M.getExternalOverrides();return!t.includes(e)&&(localStorage.setItem("import-map-overrides-external-maps",JSON.stringify(t.concat(e))),O(),!0)},removeExternalOverride:function(e){var t=M.getExternalOverrides();return!!t.includes(e)&&(localStorage.setItem("import-map-overrides-external-maps",JSON.stringify(t.filter((function(t){return t!==e})))),O(),!0)},getExternalOverrideMap:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M.getExternalOverrides();return e.reduce((function(e,t){var n=y[t]||(y[t]=D(t));return Promise.all([e,n]).then((function(e){var t=m(e,2),n=t[0],r=t[1];return M.mergeImportMap(n,r)}))}),Promise.resolve({imports:{},scopes:{}}))},isExternalMapValid:function(e){return(y[e]||(y[e]=D(e))).then((function(){return invalidExternalMaps.includes(e)}))},invalidExternalMaps:[]};var M=window.importMapOverrides,k=!0;try{CustomEvent?new CustomEvent("a"):k=!1}catch(e){k=!1}function O(){setTimeout((function(){k&&window.dispatchEvent(new CustomEvent("import-map-overrides:change"))}))}var N,E=M.getOverrideMap(),S=M.getExternalOverrides();if(!x){var U=document.querySelector('script[type="overridable-importmap"]');if(!(N=U)){var C=document.querySelectorAll('script[type="'.concat(b,'"]'));N=C?C[C.length-1]:null}if(U){if(U.src)throw Error('import-map-overrides: external import maps with type="overridable-importmap" are not supported');var I;try{I=JSON.parse(U.textContent)}catch(z){throw Error('Invalid <script type="overridable-importmap"> - text content must be json')}N=P(M.mergeImportMap(I,E),"import-map-overrides",N),A()}else A(),Object.keys(E.imports).length>0&&(N=P(E,"import-map-overrides",N))}function P(e,t,n){var r=document.createElement("script");return r.type=b,r.id=t,r.setAttribute("data-is-importmap-override",""),"string"==typeof e?r.src=e:r.textContent=JSON.stringify(e,null,2),n?n.insertAdjacentElement("afterend",r):document.head.appendChild(r),r}function D(e){return fetch(e).then((function(e){return e.ok?e.json().catch((function(t){return console.warn(Error("External override import map contained invalid json, at url ".concat(e.url,". ").concat(t))),M.invalidExternalMaps.push(e.url),{imports:{},scopes:{}}})):(console.warn(Error("Unable to download external override import map from url ".concat(e.url,". Server responded with status ").concat(e.status))),M.invalidExternalMaps.push(e.url),{imports:{},scopes:{}})}),(function(){return console.warn(Error("Unable to download external import map at url '".concat(e,"'"))),M.invalidExternalMaps.push(new URL(e,document.baseURI).href),{imports:{},scopes:{}}}))}function A(){S.length>0&&S.forEach((function(e,t){N=P(e,"import-map-overrides-external-".concat(t))}))}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}('.imo-unstyled {\n  border: none;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  cursor: pointer;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  -webkit-appearance: none;\n}\n\n.imo-unstyled::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.imo-trigger {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin: 10px;\n  border-radius: 5px;\n  background-color: navajowhite;\n  height: 50px;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-family: sans-serif;\n  z-index: 10500;\n}\n\n.imo-popup {\n  box-sizing: border-box;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  z-index: 10000;\n  background-color: black;\n  color: white;\n  font-family: sans-serif;\n  padding: 24px;\n  overflow-y: auto;\n}\n\n.imo-popup a:visited,\nimo-popup a {\n  color: white;\n}\n\n.imo-popup .imo-module-dialog {\n  left: calc(50% - 200px);\n}\n\n.imo-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.imo-list {\n  margin-left: 16px;\n}\n\n.imo-list > *:not(:last-child) {\n  margin-bottom: 8px;\n}\n\n.imo-list-container *,\n.imo-modal-container * {\n  font-family: sans-serif;\n  box-sizing: border-box;\n}\n\n.imo-module-dialog {\n  position: fixed;\n  z-index: 30000000;\n  top: 30%;\n  max-width: 600px;\n  margin: 0 auto;\n  border: 4px solid navajowhite;\n}\n\n.imo-module-dialog input {\n  width: 100%;\n  font-size: 16px;\n  box-sizing: border-box;\n  padding-right: 20px;\n}\n\n.imo-module-dialog table {\n  margin-bottom: 16px;\n}\n\n.imo-module-dialog table td:first-child {\n  text-align: right;\n  padding-right: 16px;\n  word-break: keep-all;\n}\n\n.imo-module-dialog table td {\n  word-break: break-all;\n}\n\n.imo-module-dialog.imo-overridden {\n  border: 4px solid salmon;\n}\n\n.imo-table-header-actions {\n  display: flex;\n  align-items: center;\n}\n\n.imo-overrides-table {\n  border-collapse: collapse;\n  margin-top: 32px;\n}\n\n.imo-overrides-table tr td:first-child {\n  display: flex;\n  align-items: center;\n  padding-right: 32px;\n  position: relative;\n}\n\n.imo-needs-refresh {\n  position: absolute;\n  right: 8px;\n  font-size: 32px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.imo-needs-refresh::before {\n  content: "\\27F2";\n}\n\n.imo-status {\n  height: 16px;\n  width: 16px;\n  border-radius: 8px;\n  border: 1px solid white;\n  margin-right: 8px;\n}\n\n.imo-disabled-override {\n  background-color: lightblue;\n}\n\n.imo-next-override {\n  background-color: darkred;\n}\n\n.imo-current-override {\n  background-color: salmon;\n}\n\n.imo-default-module {\n  background-color: lightgoldenrodyellow;\n}\n\n.imo-external-override {\n  background-color: orange;\n}\n\n.imo-next-default {\n  background-color: darkgoldenrod;\n}\n\n.imo-dev-lib-override {\n  background-color: lightpink;\n}\n\n.imo-overrides-table tbody tr:hover {\n  cursor: pointer;\n  background-color: #404040;\n}\n\n.imo-overrides-table td,\n.imo-overrides-table th {\n  line-height: 18px;\n  padding: 16px;\n  border: 1px solid white;\n}\n\n.imo-add-new {\n  margin-left: 16px;\n}\n\n.imo-clear-input {\n  position: absolute;\n  top: 0;\n  right: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n\n.imo-modal-container {\n  font-family: sans-serif;\n}\n\n.imo-modal {\n  background-color: rgba(61, 70, 77, 0.6);\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 20000000;\n}\n\n.imo-list-search,\n.imo-list-container button,\n.imo-modal-container button {\n  font-size: 14px;\n  height: 27px;\n  line-height: 27px;\n}\n\n.imo-list-search {\n  line-height: 22px;\n  border: none;\n  padding: 5px;\n}\n');var j,L,R,T,F,W,z={},q=[],J=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function V(e,t){for(var n in t)e[n]=t[n];return e}function B(e){var t=e.parentNode;t&&t.removeChild(e)}function H(e,t,n){var r,o=arguments,i={};for(r in t)"key"!==r&&"ref"!==r&&(i[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===i[r]&&(i[r]=e.defaultProps[r]);return $(e,i,t&&t.key,t&&t.ref,null)}function $(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(i.__v=i),j.vnode&&j.vnode(i),i}function G(e){return e.children}function K(e,t){this.props=e,this.context=t}function Q(e,t){if(null==t)return e.__?Q(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?Q(e):null}function X(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return X(e)}}function Y(e){(!e.__d&&(e.__d=!0)&&L.push(e)&&!R++||F!==j.debounceRendering)&&((F=j.debounceRendering)||T)(Z)}function Z(){for(var e;R=L.length;)e=L.sort((function(e,t){return e.__v.__b-t.__v.__b})),L=[],e.some((function(e){var t,n,r,o,i,l,a;e.__d&&(l=(i=(t=e).__v).__e,(a=t.__P)&&(n=[],(r=V({},i)).__v=r,o=ie(a,i,r,t.__n,void 0!==a.ownerSVGElement,null,n,null==l?Q(i):l),le(n,i),o!=l&&X(i)))}))}function ee(e,t,n,r,o,i,l,a,u){var s,d,p,c,m,f,v,h=n&&n.__k||q,g=h.length;if(a==z&&(a=null!=i?i[0]:g?Q(n,0):null),s=0,t.__k=te(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(p=h[s])||p&&n.key==p.key&&n.type===p.type)h[s]=void 0;else for(d=0;d<g;d++){if((p=h[d])&&n.key==p.key&&n.type===p.type){h[d]=void 0;break}p=null}if(c=ie(e,n,p=p||z,r,o,i,l,a,u),(d=n.ref)&&p.ref!=d&&(v||(v=[]),p.ref&&v.push(p.ref,null,n),v.push(d,n.__c||c,n)),null!=c){var _;if(null==f&&(f=c),void 0!==n.__d)_=n.__d,n.__d=void 0;else if(i==p||c!=a||null==c.parentNode){e:if(null==a||a.parentNode!==e)e.appendChild(c),_=null;else{for(m=a,d=0;(m=m.nextSibling)&&d<g;d+=2)if(m==c)break e;e.insertBefore(c,a),_=a}"option"==t.type&&(e.value="")}a=void 0!==_?_:c.nextSibling,"function"==typeof t.type&&(t.__d=a)}else a&&p.__e==a&&a.parentNode!=e&&(a=Q(p))}return s++,n})),t.__e=f,null!=i&&"function"!=typeof t.type)for(s=i.length;s--;)null!=i[s]&&B(i[s]);for(s=g;s--;)null!=h[s]&&se(h[s],h[s]);if(v)for(s=0;s<v.length;s++)ue(v[s],v[++s],v[++s])}function te(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)te(e[r],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?$(null,e,null,null,e):null!=e.__e||null!=e.__c?$(e.type,e.props,e.key,null,e.__v):e):e);return n}function ne(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===J.test(t)?n+"px":null==n?"":n}function re(e,t,n,r,o){var i,l,a,u,s;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(i=e.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(u in r)n&&u in n||ne(i,u,"");if(n)for(s in n)r&&n[s]===r[s]||ne(i,s,n[s])}else"o"===t[0]&&"n"===t[1]?(l=t!==(t=t.replace(/Capture$/,"")),a=t.toLowerCase(),t=(a in e?a:t).slice(2),n?(r||e.addEventListener(t,oe,l),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,oe,l)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function oe(e){this.l[e.type](j.event?j.event(e):e)}function ie(e,t,n,r,o,i,l,a,u){var s,d,p,c,m,f,v,h,g,_,y=t.type;if(void 0!==t.constructor)return null;(s=j.__b)&&s(t);try{e:if("function"==typeof y){if(h=t.props,g=(s=y.contextType)&&r[s.__c],_=s?g?g.props.value:s.__:r,n.__c?v=(d=t.__c=n.__c).__=d.__E:("prototype"in y&&y.prototype.render?t.__c=d=new y(h,_):(t.__c=d=new K(h,_),d.constructor=y,d.render=de),g&&g.sub(d),d.props=h,d.state||(d.state={}),d.context=_,d.__n=r,p=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=y.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=V({},d.__s)),V(d.__s,y.getDerivedStateFromProps(h,d.__s))),c=d.props,m=d.state,p)null==y.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==y.getDerivedStateFromProps&&h!==c&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(h,_),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(h,d.__s,_)||t.__v===n.__v&&!d.__){for(d.props=h,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,d.__h.length&&l.push(d),s=0;s<t.__k.length;s++)t.__k[s]&&(t.__k[s].__=t);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(h,d.__s,_),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(c,m,f)}))}d.context=_,d.props=h,d.state=d.__s,(s=j.__r)&&s(t),d.__d=!1,d.__v=t,d.__P=e,s=d.render(d.props,d.state,d.context),t.__k=null!=s&&s.type==G&&null==s.key?s.props.children:Array.isArray(s)?s:[s],null!=d.getChildContext&&(r=V(V({},r),d.getChildContext())),p||null==d.getSnapshotBeforeUpdate||(f=d.getSnapshotBeforeUpdate(c,m)),ee(e,t,n,r,o,i,l,a,u),d.base=t.__e,d.__h.length&&l.push(d),v&&(d.__E=d.__=null),d.__e=!1}else null==i&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=ae(n.__e,t,n,r,o,i,l,u);(s=j.diffed)&&s(t)}catch(e){t.__v=null,j.__e(e,t,n)}return t.__e}function le(e,t){j.__c&&j.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){j.__e(e,t.__v)}}))}function ae(e,t,n,r,o,i,l,a){var u,s,d,p,c,m=n.props,f=t.props;if(o="svg"===t.type||o,null!=i)for(u=0;u<i.length;u++)if(null!=(s=i[u])&&((null===t.type?3===s.nodeType:s.localName===t.type)||e==s)){e=s,i[u]=null;break}if(null==e){if(null===t.type)return document.createTextNode(f);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,f.is&&{is:f.is}),i=null,a=!1}if(null===t.type)m!==f&&e.data!=f&&(e.data=f);else{if(null!=i&&(i=q.slice.call(e.childNodes)),d=(m=n.props||z).dangerouslySetInnerHTML,p=f.dangerouslySetInnerHTML,!a){if(m===z)for(m={},c=0;c<e.attributes.length;c++)m[e.attributes[c].name]=e.attributes[c].value;(p||d)&&(p&&d&&p.__html==d.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||re(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||re(e,i,t[i],n[i],r)})(e,f,m,o,a),t.__k=t.props.children,p||ee(e,t,n,r,"foreignObject"!==t.type&&o,i,l,z,a),a||("value"in f&&void 0!==f.value&&f.value!==e.value&&(e.value=null==f.value?"":f.value),"checked"in f&&void 0!==f.checked&&f.checked!==e.checked&&(e.checked=f.checked))}return e}function ue(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){j.__e(e,n)}}function se(e,t,n){var r,o,i;if(j.unmount&&j.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ue(r,null,t)),n||"function"==typeof e.type||(n=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){j.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&se(r[i],t,n);null!=o&&B(o)}function de(e,t,n){return this.constructor(e,n)}function pe(e,t,n){var r,o,i;j.__&&j.__(e,t),o=(r=n===W)?null:n&&n.__k||t.__k,e=H(G,null,[e]),i=[],ie(t,(r?t:n||t).__k=e,o||z,z,void 0!==t.ownerSVGElement,n&&!r?[n]:o?null:q.slice.call(t.childNodes),i,n||z,r),le(i,e)}j={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return Y(n.__E=n)}catch(t){e=t}throw e}},K.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=V({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&V(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),Y(this))},K.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Y(this))},K.prototype.render=G,L=[],R=0,T="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,W=z;var ce=function(t){o(l,t);var i=c(l);function l(){var t;e(this,l);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return r(d(t=i.call.apply(i,[this].concat(o))),"getInitialOverrideUrl",(function(){var e=new RegExp("//localhost:([0-9]+)/").exec(t.props.module.overrideUrl);return e&&t.props.module.overrideUrl===window.importMapOverrides.getUrlFromPort(t.props.module.moduleName,e[1])?e[1]:t.props.module.overrideUrl?t.props.module.overrideUrl:""})),r(d(t),"state",{overrideUrl:t.getInitialOverrideUrl(),moduleName:""}),r(d(t),"inputEl",null),r(d(t),"moduleNameEl",null),r(d(t),"handleInputRef",(function(e){t.inputEl=e})),r(d(t),"handleModuleNameRef",(function(e){t.moduleNameEl=e})),r(d(t),"dialogRef",(function(e){t.dialogEl=e})),r(d(t),"handleSubmit",(function(e){e.preventDefault(),t.props.module.moduleName&&window.importMapOverrides.isDisabled(t.props.module.moduleName)&&window.importMapOverrides.enableOverride(t.props.module.moduleName),t.props.module.isNew?t.props.addNewModule(t.state.moduleName,t.state.overrideUrl):t.props.updateModuleUrl(t.state.overrideUrl)})),r(d(t),"getDerivedUrl",(function(){var e=t.props.module.isNew?t.state.moduleName:t.props.module.moduleName;return me.test(t.state.overrideUrl)?window.importMapOverrides.getUrlFromPort(e,t.state.overrideUrl):t.state.overrideUrl})),r(d(t),"keyDown",(function(e){"Escape"===e.key&&(e.stopPropagation(),t.props.cancel())})),r(d(t),"focusFirstInput",(function(){(t.moduleNameEl||t.inputEl).select()})),r(d(t),"clearModuleName",(function(){t.setState({moduleName:""},(function(){t.focusFirstInput()}))})),r(d(t),"clearInput",(function(){t.setState({overrideUrl:""},(function(){t.focusFirstInput()}))})),t}return n(l,[{key:"componentDidMount",value:function(){this.focusFirstInput(),this.dialogEl.addEventListener("keydown",this.keyDown)}},{key:"componentDidUpdate",value:function(e,t){var n=this;this.props.module!==e.module&&this.setState({overrideUrl:this.props.module.overrideUrl||""},(function(){n.focusFirstInput()}))}},{key:"componentWillUnmount",value:function(){this.dialogEl.removeEventListener("keydown",this.keyDown)}},{key:"render",value:function(e){var t=this,n=e.module;return H("div",{className:"imo-modal-container"},H("div",{className:"imo-modal"}),H("dialog",{className:"imo-module-dialog ".concat(this.state.overrideUrl.length>0?"imo-overridden":"imo-default"),open:!0,ref:this.dialogRef},H("form",{method:"dialog",onSubmit:this.handleSubmit},H("h3",{style:{marginTop:0}},n.moduleName),H("table",null,H("tbody",null,!n.isNew&&H("tr",null,H("td",null,"Default URL:"),H("td",null,n.defaultUrl)),n.isNew&&H("tr",null,H("td",null,H("span",{id:"module-name-label"},"Module Name:")),H("td",{style:{position:"relative"}},H("input",{type:"text",tabIndex:1,value:this.state.moduleName,"aria-labelledby":"module-name-label",onInput:function(e){return t.setState({moduleName:e.target.value})},ref:this.handleModuleNameRef,required:!0}),H("div",{role:"button",tabIndex:3,className:"imo-clear-input",onClick:this.clearModuleName},H("div",null,"ⓧ")))),H("tr",null,H("td",null,H("span",{id:"override-url-label"},"Override URL:")),H("td",{style:{position:"relative"}},H("input",{ref:this.handleInputRef,type:"text",value:this.state.overrideUrl,"aria-labelledby":"override-url-label",tabIndex:2,onInput:function(e){return t.setState({overrideUrl:e.target.value})}}),H("div",{role:"button",tabIndex:4,className:"imo-clear-input",onClick:this.clearInput},H("div",null,"ⓧ")))),me.test(this.state.overrideUrl)&&H("tr",null,H("td",null,"Derived url:"),H("td",null,this.getDerivedUrl())))),H("div",{className:"imo-dialog-actions"},H("button",{type:"button",tabIndex:5,onClick:this.props.cancel,style:{marginRight:"16px"}},"Cancel"),this.props.module.overrideUrl&&!this.props.module.disabled&&H("button",{type:"button",onClick:function(){t.props.module.disabled?window.importMapOverrides.enableOverride(t.props.module.moduleName):window.importMapOverrides.disableOverride(t.props.module.moduleName),t.props.cancel()},tabIndex:6,style:{marginRight:"16px"}},this.props.module.disabled?"Enable":"Disable"," Override"),H("button",{type:"submit",tabIndex:7,className:this.state.overrideUrl?"imo-overridden":"imo-default"},this.state.overrideUrl?"Apply override":"Reset to default")))))}}]),l}(K),me=/^\d+$/,fe=function(t){o(l,t);var i=c(l);function l(){var t;e(this,l);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return r(d(t=i.call.apply(i,[this].concat(o))),"state",{url:t.props.dialogExternalMap.isNew?"":t.props.dialogExternalMap.url}),r(d(t),"inputEl",null),r(d(t),"handleSubmit",(function(e){e.preventDefault(),t.props.dialogExternalMap.isNew||window.importMapOverrides.removeExternalOverride(t.props.dialogExternalMap.url),t.state.url&&window.importMapOverrides.addExternalOverride(t.state.url),t.props.cancel()})),r(d(t),"keyDown",(function(e){"Escape"===e.key&&(e.stopPropagation(),t.props.cancel())})),t}return n(l,[{key:"componentDidMount",value:function(){this.inputEl.focus(),this.dialogEl.addEventListener("keydown",this.keyDown)}},{key:"componentWillUnmount",value:function(){this.dialogEl.removeEventListener("keydown",this.keyDown)}},{key:"render",value:function(){var e=this;return H("div",{className:"imo-modal-container"},H("div",{className:"imo-modal"}),H("dialog",{className:"imo-module-dialog",open:!0,ref:function(t){return e.dialogEl=t}},H("form",{method:"dialog",onSubmit:this.handleSubmit},H("h3",{style:{marginTop:0}},this.props.dialogExternalMap.isNew?"Add External Import Map":"Edit External Import Map"),H("div",{style:{marginBottom:"20px"}},H("label",{htmlFor:"external-importmap-url"},"URL to import map:"),H("span",{style:{position:"relative"}},H("input",{id:"external-importmap-url",type:"text",value:this.state.url,onInput:function(t){return e.setState({url:t.target.value})},ref:function(t){return e.inputEl=t},required:this.props.dialogExternalMap.isNew}),H("div",{role:"button",tabIndex:0,className:"imo-clear-input",onClick:function(){return e.setState({url:""})}},H("div",null,"ⓧ")))),H("div",{className:"imo-dialog-actions"},H("button",{type:"button",onClick:this.props.cancel,style:{marginRight:"16px"}},"Cancel"),H("button",{type:"submit",className:this.state.url?"imo-overridden":"imo-default"},this.state.url||this.props.dialogExternalMap.isNew?"Apply override":"Remove override")))))}}]),l}(K),ve=function(t){o(i,t);var r=c(i);function i(){return e(this,i),r.apply(this,arguments)}return n(i,[{key:"componentDidMount",value:function(){window.importMapOverrides.getCurrentPageMap().then(_e)}},{key:"render",value:function(){return null}}]),i}(K),he=function(e){return e.replace(".min.js",".js")},ge={react:function(e){return e.replace("production.min","development")},"react-dom":function(e){return e.replace("production.min","development")},"single-spa":function(e){return e.replace("single-spa.min.js","single-spa.dev.js")},vue:he,"vue-router":he,"@angular/core":he,"@angular/common":he,"@angular/router":he,"@angular/platform-browser":he};function _e(e){Object.keys(e.imports).filter((function(e){return ge[e]})).forEach((function(t){window.importMapOverrides.addOverride(t,ge[t](e.imports[t]))}))}function ye(){return Object.keys(window.importMapOverrides.getOverrideMap().imports).filter((function(e){return!ge[e]})).length>0}var be=function(t){o(l,t);var i=c(l);function l(){var t;e(this,l);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return r(d(t=i.call.apply(i,[this].concat(o))),"state",{notOverriddenMap:{imports:{}},currentPageMap:{imports:{}},nextPageMap:{imports:{}},dialogModule:null,dialogExternalMap:null,searchVal:""}),r(d(t),"cancel",(function(){t.setState({dialogModule:null,dialogExternalMap:null})})),r(d(t),"updateModuleUrl",(function(e){null===(e=e||null)?window.importMapOverrides.removeOverride(t.state.dialogModule.moduleName):window.importMapOverrides.addOverride(t.state.dialogModule.moduleName,e),t.setState({dialogModule:null})})),r(d(t),"doUpdate",(function(){t.forceUpdate(),window.importMapOverrides.getNextPageMap().then((function(e){t.setState({nextPageMap:e})}))})),r(d(t),"addNewModule",(function(e,n){e&&n&&window.importMapOverrides.addOverride(e,n),t.setState({dialogModule:null})})),r(d(t),"filterModuleNames",(function(e){return!(t.state.searchVal.trim().length>0)||e.includes(t.state.searchVal)})),t}return n(l,[{key:"componentDidMount",value:function(){var e=this;window.importMapOverrides.getDefaultMap().then((function(t){e.setState({notOverriddenMap:t})})),window.importMapOverrides.getCurrentPageMap().then((function(t){e.setState({currentPageMap:t})})),window.importMapOverrides.getNextPageMap().then((function(t){e.setState({nextPageMap:t})})),window.addEventListener("import-map-overrides:change",this.doUpdate),this.inputRef.focus()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("import-map-overrides:change",this.doUpdate)}},{key:"componentDidUpdate",value:function(e,t){!t.dialogModule&&this.state.dialogModule?(this.dialogContainer=document.createElement("div"),document.body.appendChild(this.dialogContainer),pe(H(ce,{module:this.state.dialogModule,cancel:this.cancel,updateModuleUrl:this.updateModuleUrl,addNewModule:this.addNewModule}),this.dialogContainer)):t.dialogModule&&!this.state.dialogModule&&(pe(null,this.dialogContainer),this.dialogContainer.remove(),delete this.dialogContainer),!t.dialogExternalMap&&this.state.dialogExternalMap?(this.dialogContainer=document.createElement("div"),document.body.appendChild(this.dialogContainer),pe(H(fe,{dialogExternalMap:this.state.dialogExternalMap,cancel:this.cancel}),this.dialogContainer)):t.dialogExternalMap&&!this.state.dialogExternalMap&&(pe(null,this.dialogContainer),this.dialogContainer.remove(),delete this.dialogContainer)}},{key:"render",value:function(){var e=this,t=[],n=[],r=[],o=[],i=[],l=[],a=[],u=window.importMapOverrides.getOverrideMap(!0).imports,s=Object.keys(this.state.notOverriddenMap.imports),d=window.importMapOverrides.getDisabledOverrides();s.filter(this.filterModuleNames).forEach((function(s){var p={moduleName:s,defaultUrl:e.state.notOverriddenMap.imports[s],overrideUrl:u[s],disabled:d.includes(s)};p.disabled?r.push(p):u[s]?e.state.currentPageMap.imports[s]===u[s]?ge[s]&&ge[s](e.state.currentPageMap.imports[s])===u[s]?a.push(p):t.push(p):n.push(p):e.state.notOverriddenMap.imports[s]===e.state.currentPageMap.imports[s]?o.push(p):e.state.notOverriddenMap.imports[s]===e.state.nextPageMap.imports[s]?l.push(p):i.push(p)})),Object.keys(u).filter(this.filterModuleNames).forEach((function(o){if(!s.includes(o)){var i={moduleName:o,defaultUrl:null,overrideUrl:u[o],disabled:d.includes(o)};i.disabled?r.push(i):e.state.currentPageMap.imports[o]===u[o]?t.push(i):n.push(i)}})),t.sort(we),o.sort(we),n.sort(we);var p=function(){var e,t=window.importMapOverrides.getExternalOverrides(),n=window.importMapOverrides.getCurrentPageExternalOverrides(),r=[],o=[],i=[],l=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=f(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}(t);try{for(l.s();!(e=l.n()).done;){var a=e.value;window.importMapOverrides.invalidExternalMaps.includes(a)?r.push(a):n.includes(a)?o.push(a):i.push(a)}}catch(e){l.e(e)}finally{l.f()}return{brokenMaps:r,workingCurrentPageMaps:o,workingNextPageMaps:i}}(),c=p.brokenMaps,m=p.workingCurrentPageMaps,v=p.workingNextPageMaps;return H("div",{className:"imo-list-container"},H("div",{className:"imo-table-header-actions"},H("input",{className:"imo-list-search","aria-label":"Search modules",placeholder:"Search modules",value:this.state.searchVal,onInput:function(t){return e.setState({searchVal:t.target.value})},ref:function(t){return e.inputRef=t}}),H("div",{className:"imo-add-new"},H("button",{onClick:function(){return e.setState({dialogModule:{moduleName:"New module",isNew:!0}})}},"Add new module")),H("div",{className:"imo-add-new"},H("button",{onClick:function(){e.setState({dialogExternalMap:{url:"",isNew:!0}})}},"Add import map")),H("div",{className:"imo-add-new"},H("button",{onClick:function(){return window.importMapOverrides.resetOverrides()}},"Reset all overrides"))),H("table",{className:"imo-overrides-table"},H("thead",null,H("tr",null,H("th",null,"Module Status"),H("th",null,"Module Name"),H("th",null,"Domain"),H("th",null,"Filename"))),H("tbody",null,n.map((function(t){return H("tr",{role:"button",tabIndex:0,onClick:function(){return e.setState({dialogModule:t})},key:t.moduleName},H("td",null,H("div",{className:"imo-status imo-next-override"}),H("div",null,"Inline Override"),H("div",{className:"imo-needs-refresh"})),H("td",null,t.moduleName),H("td",null,Me(t)),H("td",null,ke(t)))})),l.map((function(t){return H("tr",{role:"button",tabIndex:0,onClick:function(){return e.setState({dialogModule:t})},key:t.moduleName},H("td",{style:{position:"relative"}},H("div",{className:"imo-status imo-next-default"}),H("div",null,"Default"),H("div",{className:"imo-needs-refresh"})),H("td",null,t.moduleName),H("td",null,Me(t)),H("td",null,ke(t)))})),r.map((function(t){return H("tr",{role:"button",tabIndex:0,onClick:function(){return e.setState({dialogModule:t})},key:t.moduleName},H("td",null,H("div",{className:"imo-status imo-disabled-override"}),H("div",null,"Override disabled")),H("td",null,t.moduleName),H("td",null,Me(t)),H("td",null,ke(t)))})),t.map((function(t){return H("tr",{role:"button",tabIndex:0,onClick:function(){return e.setState({dialogModule:t})},key:t.moduleName},H("td",null,H("div",{className:"imo-status imo-current-override"}),H("div",null,"Inline Override")),H("td",null,t.moduleName),H("td",null,Me(t)),H("td",null,ke(t)))})),i.map((function(t){return H("tr",{role:"button",tabIndex:0,onClick:function(){return e.setState({dialogModule:t})},key:t.moduleName},H("td",null,H("div",{className:"imo-status imo-external-override"}),H("div",null,"External Override")),H("td",null,t.moduleName),H("td",null,Me(t)),H("td",null,ke(t)))})),a.map((function(t){return H("tr",{role:"button",tabIndex:0,onClick:function(){return e.setState({dialogModule:t})},key:t.moduleName,title:"Automatically use dev version of certain npm libs"},H("td",null,H("div",{className:"imo-status imo-dev-lib-override"}),H("div",null,"Dev Lib Override")),H("td",null,t.moduleName),H("td",null,Me(t)),H("td",null,ke(t)))})),o.map((function(t){return H("tr",{role:"button",tabIndex:0,onClick:function(){return e.setState({dialogModule:t})},key:t.moduleName},H("td",null,H("div",{className:"imo-status imo-default-module"}),H("div",null,"Default")),H("td",null,t.moduleName),H("td",null,Me(t)),H("td",null,ke(t)))})))),(c.length>0||m.length>0||v.length>0)&&H("table",{className:"imo-overrides-table"},H("thead",null,H("th",null,"Import Map Status"),H("th",null,"URL")),H("tbody",null,c.map((function(t){return H("tr",{role:"button",tabIndex:0,onClick:function(){return e.setState({dialogExternalMap:{isNew:!1,url:t}})},key:t},H("td",null,H("div",{className:"imo-status imo-disabled-override"}),H("div",null,"Invalid")),H("td",null,t))})),v.map((function(t){return H("tr",{role:"button",tabIndex:0,onClick:function(){return e.setState({dialogExternalMap:{isNew:!1,url:t}})},key:t},H("td",null,H("div",{className:"imo-status imo-next-override"}),H("div",null,"Pending refresh")),H("td",null,t))})),m.map((function(t){return H("tr",{role:"button",tabIndex:0,onClick:function(){return e.setState({dialogExternalMap:{isNew:!1,url:t}})},key:t},H("td",null,H("div",{className:"imo-status imo-current-override"}),H("div",null,"Override")),H("td",null,t))})))))}}]),l}(K);function we(e,t){return e.moduleName>t.moduleName}var xe=document.querySelector("base")&&document.querySelector("base").href||location.origin+"/";function Me(e){var t=Oe(e),n=Ne(t);return n?n.host:t}function ke(e){var t=Oe(e),n=Ne(t);return n?n.pathname.slice(n.pathname.lastIndexOf("/")+1):t}function Oe(e){return e.overrideUrl||e.defaultUrl}function Ne(e){try{return new URL(e,xe)}catch(e){return null}}var Ee=function(t){o(l,t);var i=c(l);function l(){var t;e(this,l);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return r(d(t=i.call.apply(i,[this].concat(o))),"doUpdate",(function(){return t.forceUpdate()})),r(d(t),"keydownListener",(function(e){"Escape"===e.key&&t.props.close&&t.props.close()})),t}return n(l,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.keydownListener),window.addEventListener("import-map-overrides:change",this.doUpdate)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.keydownListener),window.removeEventListener("import-map-overrides:change",this.doUpdate)}},{key:"render",value:function(e){return H("div",{className:"imo-popup"},H("div",{className:"imo-header"},H("div",null,H("h1",null,"Import Map Overrides"),H("p",null,"This developer tool allows you to view and override your import maps. Start by clicking on a module that you'd like to override."," ",H("a",{target:"_blank",href:"https://github.com/joeldenning/import-map-overrides"},"See documentation for more info"),".")),H("button",{className:"imo-unstyled",onClick:e.close},"ⓧ")),H(be,{importMapChanged:this.props.importMapChanged}))}}]),l}(K),Se=function(t){o(l,t);var i=c(l);function l(){var t;e(this,l);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return r(d(t=i.call.apply(i,[this].concat(o))),"state",{showingPopup:!1}),r(d(t),"doUpdate",(function(){return t.forceUpdate()})),r(d(t),"toggleTrigger",(function(){t.setState((function(e){return{showingPopup:!e.showingPopup}}))})),r(d(t),"importMapChanged",(function(){t.forceUpdate()})),r(d(t),"useDevLibs",(function(){var e=localStorage.getItem("import-map-overrides-dev-libs");return e?"true"===e:t.props.customElement.hasAttribute("dev-libs")})),r(d(t),"atLeastOneOverride",(function(){return t.useDevLibs()?ye():Object.keys(window.importMapOverrides.getOverrideMap().imports).length>0})),t}return n(l,[{key:"componentDidMount",value:function(){window.addEventListener("import-map-overrides:change",this.doUpdate)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("import-map-overrides:change",this.doUpdate)}},{key:"render",value:function(e,t){return e.customElement.hasAttribute("show-when-local-storage")&&"true"!==localStorage.getItem(e.customElement.getAttribute("show-when-local-storage"))?null:H("div",null,H("button",{onClick:this.toggleTrigger,className:"imo-unstyled imo-trigger ".concat(this.atLeastOneOverride()?"imo-current-override":"")},"{···}"),this.useDevLibs()&&H(ve,null),t.showingPopup&&H(Ee,{close:this.toggleTrigger,importMapChanged:this.importMapChanged}))}}]),l}(K);function Ue(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(function(i){o(a,i);var l=c(a);function a(){return e(this,a),l.apply(this,arguments)}return n(a,[{key:"connectedCallback",value:function(){this.renderWithPreact()}},{key:"disconnectedCallback",value:function(){pe(null,this),this.renderedEl=null}},{key:"attributeChangedCallback",value:function(){this.renderWithPreact()}},{key:"renderWithPreact",value:function(){this.renderedEl=pe(H(t,{customElement:this}),this,this.renderedEl)}}],[{key:"observedAttributes",get:function(){return r}}]),a}(s(HTMLElement)))}window.customElements&&(window.customElements.define("import-map-overrides-full",Ue(Se,["show-when-local-storage"])),window.customElements.define("import-map-overrides-popup",Ue(Ee)),window.customElements.define("import-map-overrides-list",Ue(be)))}();
//# sourceMappingURL=import-map-overrides.js.map


/***/ }),

/***/ "./node_modules/intl-messageformat-parser/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/intl-messageformat-parser/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports = module.exports = __webpack_require__(/*! ./lib/parser */ "./node_modules/intl-messageformat-parser/lib/parser.js")['default'];
exports['default'] = exports;


/***/ }),

/***/ "./node_modules/intl-messageformat-parser/lib/parser.js":
/*!**************************************************************!*\
  !*** ./node_modules/intl-messageformat-parser/lib/parser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports["default"] = (function() {
  "use strict";

  /*
   * Generated by PEG.js 0.9.0.
   *
   * http://pegjs.org/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.location = location;
    this.name     = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  function peg$parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},
        parser  = this,

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = function(elements) {
                return {
                    type    : 'messageFormatPattern',
                    elements: elements,
                    location: location()
                };
            },
        peg$c1 = function(text) {
                var string = '',
                    i, j, outerLen, inner, innerLen;

                for (i = 0, outerLen = text.length; i < outerLen; i += 1) {
                    inner = text[i];

                    for (j = 0, innerLen = inner.length; j < innerLen; j += 1) {
                        string += inner[j];
                    }
                }

                return string;
            },
        peg$c2 = function(messageText) {
                return {
                    type : 'messageTextElement',
                    value: messageText,
                    location: location()
                };
            },
        peg$c3 = /^[^ \t\n\r,.+={}#]/,
        peg$c4 = { type: "class", value: "[^ \\t\\n\\r,.+={}#]", description: "[^ \\t\\n\\r,.+={}#]" },
        peg$c5 = "{",
        peg$c6 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c7 = ",",
        peg$c8 = { type: "literal", value: ",", description: "\",\"" },
        peg$c9 = "}",
        peg$c10 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c11 = function(id, format) {
                return {
                    type  : 'argumentElement',
                    id    : id,
                    format: format && format[2],
                    location: location()
                };
            },
        peg$c12 = "number",
        peg$c13 = { type: "literal", value: "number", description: "\"number\"" },
        peg$c14 = "date",
        peg$c15 = { type: "literal", value: "date", description: "\"date\"" },
        peg$c16 = "time",
        peg$c17 = { type: "literal", value: "time", description: "\"time\"" },
        peg$c18 = function(type, style) {
                return {
                    type : type + 'Format',
                    style: style && style[2],
                    location: location()
                };
            },
        peg$c19 = "plural",
        peg$c20 = { type: "literal", value: "plural", description: "\"plural\"" },
        peg$c21 = function(pluralStyle) {
                return {
                    type   : pluralStyle.type,
                    ordinal: false,
                    offset : pluralStyle.offset || 0,
                    options: pluralStyle.options,
                    location: location()
                };
            },
        peg$c22 = "selectordinal",
        peg$c23 = { type: "literal", value: "selectordinal", description: "\"selectordinal\"" },
        peg$c24 = function(pluralStyle) {
                return {
                    type   : pluralStyle.type,
                    ordinal: true,
                    offset : pluralStyle.offset || 0,
                    options: pluralStyle.options,
                    location: location()
                }
            },
        peg$c25 = "select",
        peg$c26 = { type: "literal", value: "select", description: "\"select\"" },
        peg$c27 = function(options) {
                return {
                    type   : 'selectFormat',
                    options: options,
                    location: location()
                };
            },
        peg$c28 = "=",
        peg$c29 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c30 = function(selector, pattern) {
                return {
                    type    : 'optionalFormatPattern',
                    selector: selector,
                    value   : pattern,
                    location: location()
                };
            },
        peg$c31 = "offset:",
        peg$c32 = { type: "literal", value: "offset:", description: "\"offset:\"" },
        peg$c33 = function(number) {
                return number;
            },
        peg$c34 = function(offset, options) {
                return {
                    type   : 'pluralFormat',
                    offset : offset,
                    options: options,
                    location: location()
                };
            },
        peg$c35 = { type: "other", description: "whitespace" },
        peg$c36 = /^[ \t\n\r]/,
        peg$c37 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
        peg$c38 = { type: "other", description: "optionalWhitespace" },
        peg$c39 = /^[0-9]/,
        peg$c40 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c41 = /^[0-9a-f]/i,
        peg$c42 = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
        peg$c43 = "0",
        peg$c44 = { type: "literal", value: "0", description: "\"0\"" },
        peg$c45 = /^[1-9]/,
        peg$c46 = { type: "class", value: "[1-9]", description: "[1-9]" },
        peg$c47 = function(digits) {
            return parseInt(digits, 10);
        },
        peg$c48 = /^[^{}\\\0-\x1F \t\n\r]/,
        peg$c49 = { type: "class", value: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]", description: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]" },
        peg$c50 = "\\\\",
        peg$c51 = { type: "literal", value: "\\\\", description: "\"\\\\\\\\\"" },
        peg$c52 = function() { return '\\'; },
        peg$c53 = "\\#",
        peg$c54 = { type: "literal", value: "\\#", description: "\"\\\\#\"" },
        peg$c55 = function() { return '\\#'; },
        peg$c56 = "\\{",
        peg$c57 = { type: "literal", value: "\\{", description: "\"\\\\{\"" },
        peg$c58 = function() { return '\u007B'; },
        peg$c59 = "\\}",
        peg$c60 = { type: "literal", value: "\\}", description: "\"\\\\}\"" },
        peg$c61 = function() { return '\u007D'; },
        peg$c62 = "\\u",
        peg$c63 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
        peg$c64 = function(digits) {
                return String.fromCharCode(parseInt(digits, 16));
            },
        peg$c65 = function(chars) { return chars.join(''); },

        peg$currPos          = 0,
        peg$savedPos         = 0,
        peg$posDetailsCache  = [{ line: 1, column: 1, seenCR: false }],
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function error(message) {
      throw peg$buildException(
        message,
        null,
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos],
          p, ch;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line:   details.line,
          column: details.column,
          seenCR: details.seenCR
        };

        while (p < pos) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line:   startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line:   endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, found, location) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0100-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1000-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new peg$SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$parsestart() {
      var s0;

      s0 = peg$parsemessageFormatPattern();

      return s0;
    }

    function peg$parsemessageFormatPattern() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsemessageFormatElement();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsemessageFormatElement();
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c0(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsemessageFormatElement() {
      var s0;

      s0 = peg$parsemessageTextElement();
      if (s0 === peg$FAILED) {
        s0 = peg$parseargumentElement();
      }

      return s0;
    }

    function peg$parsemessageText() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$parse_();
      if (s3 !== peg$FAILED) {
        s4 = peg$parsechars();
        if (s4 !== peg$FAILED) {
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            s3 = [s3, s4, s5];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$currPos;
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsechars();
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s3 = [s3, s4, s5];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsews();
        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }
      }

      return s0;
    }

    function peg$parsemessageTextElement() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parsemessageText();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c2(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseargument() {
      var s0, s1, s2;

      s0 = peg$parsenumber();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        if (peg$c3.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            if (peg$c3.test(input.charAt(peg$currPos))) {
              s2 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }
      }

      return s0;
    }

    function peg$parseargumentElement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c5;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c6); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseargument();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 44) {
                s6 = peg$c7;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c8); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseelementFormat();
                  if (s8 !== peg$FAILED) {
                    s6 = [s6, s7, s8];
                    s5 = s6;
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
              if (s5 === peg$FAILED) {
                s5 = null;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 125) {
                    s7 = peg$c9;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c10); }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c11(s3, s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseelementFormat() {
      var s0;

      s0 = peg$parsesimpleFormat();
      if (s0 === peg$FAILED) {
        s0 = peg$parsepluralFormat();
        if (s0 === peg$FAILED) {
          s0 = peg$parseselectOrdinalFormat();
          if (s0 === peg$FAILED) {
            s0 = peg$parseselectFormat();
          }
        }
      }

      return s0;
    }

    function peg$parsesimpleFormat() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c12) {
        s1 = peg$c12;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c13); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c14) {
          s1 = peg$c14;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c15); }
        }
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 4) === peg$c16) {
            s1 = peg$c16;
            peg$currPos += 4;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c17); }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 44) {
            s4 = peg$c7;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              s6 = peg$parsechars();
              if (s6 !== peg$FAILED) {
                s4 = [s4, s5, s6];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c18(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsepluralFormat() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c19) {
        s1 = peg$c19;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c20); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c7;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsepluralStyle();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c21(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseselectOrdinalFormat() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 13) === peg$c22) {
        s1 = peg$c22;
        peg$currPos += 13;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c23); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c7;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsepluralStyle();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c24(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseselectFormat() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c25) {
        s1 = peg$c25;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c26); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c7;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$parseoptionalFormatPattern();
              if (s6 !== peg$FAILED) {
                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  s6 = peg$parseoptionalFormatPattern();
                }
              } else {
                s5 = peg$FAILED;
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c27(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseselector() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 61) {
        s2 = peg$c28;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c29); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsenumber();
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parsechars();
      }

      return s0;
    }

    function peg$parseoptionalFormatPattern() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseselector();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s4 = peg$c5;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c6); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsemessageFormatPattern();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s8 = peg$c9;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c10); }
                    }
                    if (s8 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c30(s2, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseoffset() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c31) {
        s1 = peg$c31;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c32); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsenumber();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c33(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsepluralStyle() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseoffset();
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseoptionalFormatPattern();
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parseoptionalFormatPattern();
            }
          } else {
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c34(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsews() {
      var s0, s1;

      peg$silentFails++;
      s0 = [];
      if (peg$c36.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c37); }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (peg$c36.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c37); }
          }
        }
      } else {
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c35); }
      }

      return s0;
    }

    function peg$parse_() {
      var s0, s1, s2;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsews();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsews();
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c38); }
      }

      return s0;
    }

    function peg$parsedigit() {
      var s0;

      if (peg$c39.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c40); }
      }

      return s0;
    }

    function peg$parsehexDigit() {
      var s0;

      if (peg$c41.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c42); }
      }

      return s0;
    }

    function peg$parsenumber() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 48) {
        s1 = peg$c43;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c44); }
      }
      if (s1 === peg$FAILED) {
        s1 = peg$currPos;
        s2 = peg$currPos;
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsedigit();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsedigit();
          }
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s1 = input.substring(s1, peg$currPos);
        } else {
          s1 = s2;
        }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c47(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsechar() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      if (peg$c48.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c49); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c50) {
          s1 = peg$c50;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c51); }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c52();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c53) {
            s1 = peg$c53;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c54); }
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c55();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c56) {
              s1 = peg$c56;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c57); }
            }
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c58();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c59) {
                s1 = peg$c59;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c60); }
              }
              if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c61();
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 2) === peg$c62) {
                  s1 = peg$c62;
                  peg$currPos += 2;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c63); }
                }
                if (s1 !== peg$FAILED) {
                  s2 = peg$currPos;
                  s3 = peg$currPos;
                  s4 = peg$parsehexDigit();
                  if (s4 !== peg$FAILED) {
                    s5 = peg$parsehexDigit();
                    if (s5 !== peg$FAILED) {
                      s6 = peg$parsehexDigit();
                      if (s6 !== peg$FAILED) {
                        s7 = peg$parsehexDigit();
                        if (s7 !== peg$FAILED) {
                          s4 = [s4, s5, s6, s7];
                          s3 = s4;
                        } else {
                          peg$currPos = s3;
                          s3 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                  if (s3 !== peg$FAILED) {
                    s2 = input.substring(s2, peg$currPos);
                  } else {
                    s2 = s3;
                  }
                  if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c64(s2);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parsechars() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsechar();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsechar();
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c65(s1);
      }
      s0 = s1;

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(
        null,
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  return {
    SyntaxError: peg$SyntaxError,
    parse:       peg$parse
  };
})();

//# sourceMappingURL=parser.js.map

/***/ }),

/***/ "./node_modules/intl-messageformat/index.js":
/*!**************************************************!*\
  !*** ./node_modules/intl-messageformat/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint node:true */



var IntlMessageFormat = __webpack_require__(/*! ./lib/main */ "./node_modules/intl-messageformat/lib/main.js")['default'];

// Add all locale data to `IntlMessageFormat`. This module will be ignored when
// bundling for the browser with Browserify/Webpack.
__webpack_require__(/*! ./lib/locales */ 0);

// Re-export `IntlMessageFormat` as the CommonJS default exports with all the
// locale data registered, and with English set as the default locale. Define
// the `default` prop for use with other compiled ES6 Modules.
exports = module.exports = IntlMessageFormat;
exports['default'] = exports;


/***/ }),

/***/ "./node_modules/intl-messageformat/lib/compiler.js":
/*!*********************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/compiler.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */


exports["default"] = Compiler;

function Compiler(locales, formats, pluralFn) {
    this.locales  = locales;
    this.formats  = formats;
    this.pluralFn = pluralFn;
}

Compiler.prototype.compile = function (ast) {
    this.pluralStack        = [];
    this.currentPlural      = null;
    this.pluralNumberFormat = null;

    return this.compileMessage(ast);
};

Compiler.prototype.compileMessage = function (ast) {
    if (!(ast && ast.type === 'messageFormatPattern')) {
        throw new Error('Message AST is not of type: "messageFormatPattern"');
    }

    var elements = ast.elements,
        pattern  = [];

    var i, len, element;

    for (i = 0, len = elements.length; i < len; i += 1) {
        element = elements[i];

        switch (element.type) {
            case 'messageTextElement':
                pattern.push(this.compileMessageText(element));
                break;

            case 'argumentElement':
                pattern.push(this.compileArgument(element));
                break;

            default:
                throw new Error('Message element does not have a valid type');
        }
    }

    return pattern;
};

Compiler.prototype.compileMessageText = function (element) {
    // When this `element` is part of plural sub-pattern and its value contains
    // an unescaped '#', use a `PluralOffsetString` helper to properly output
    // the number with the correct offset in the string.
    if (this.currentPlural && /(^|[^\\])#/g.test(element.value)) {
        // Create a cache a NumberFormat instance that can be reused for any
        // PluralOffsetString instance in this message.
        if (!this.pluralNumberFormat) {
            this.pluralNumberFormat = new Intl.NumberFormat(this.locales);
        }

        return new PluralOffsetString(
                this.currentPlural.id,
                this.currentPlural.format.offset,
                this.pluralNumberFormat,
                element.value);
    }

    // Unescape the escaped '#'s in the message text.
    return element.value.replace(/\\#/g, '#');
};

Compiler.prototype.compileArgument = function (element) {
    var format = element.format;

    if (!format) {
        return new StringFormat(element.id);
    }

    var formats  = this.formats,
        locales  = this.locales,
        pluralFn = this.pluralFn,
        options;

    switch (format.type) {
        case 'numberFormat':
            options = formats.number[format.style];
            return {
                id    : element.id,
                format: new Intl.NumberFormat(locales, options).format
            };

        case 'dateFormat':
            options = formats.date[format.style];
            return {
                id    : element.id,
                format: new Intl.DateTimeFormat(locales, options).format
            };

        case 'timeFormat':
            options = formats.time[format.style];
            return {
                id    : element.id,
                format: new Intl.DateTimeFormat(locales, options).format
            };

        case 'pluralFormat':
            options = this.compileOptions(element);
            return new PluralFormat(
                element.id, format.ordinal, format.offset, options, pluralFn
            );

        case 'selectFormat':
            options = this.compileOptions(element);
            return new SelectFormat(element.id, options);

        default:
            throw new Error('Message element does not have a valid format type');
    }
};

Compiler.prototype.compileOptions = function (element) {
    var format      = element.format,
        options     = format.options,
        optionsHash = {};

    // Save the current plural element, if any, then set it to a new value when
    // compiling the options sub-patterns. This conforms the spec's algorithm
    // for handling `"#"` syntax in message text.
    this.pluralStack.push(this.currentPlural);
    this.currentPlural = format.type === 'pluralFormat' ? element : null;

    var i, len, option;

    for (i = 0, len = options.length; i < len; i += 1) {
        option = options[i];

        // Compile the sub-pattern and save it under the options's selector.
        optionsHash[option.selector] = this.compileMessage(option.value);
    }

    // Pop the plural stack to put back the original current plural value.
    this.currentPlural = this.pluralStack.pop();

    return optionsHash;
};

// -- Compiler Helper Classes --------------------------------------------------

function StringFormat(id) {
    this.id = id;
}

StringFormat.prototype.format = function (value) {
    if (!value && typeof value !== 'number') {
        return '';
    }

    return typeof value === 'string' ? value : String(value);
};

function PluralFormat(id, useOrdinal, offset, options, pluralFn) {
    this.id         = id;
    this.useOrdinal = useOrdinal;
    this.offset     = offset;
    this.options    = options;
    this.pluralFn   = pluralFn;
}

PluralFormat.prototype.getOption = function (value) {
    var options = this.options;

    var option = options['=' + value] ||
            options[this.pluralFn(value - this.offset, this.useOrdinal)];

    return option || options.other;
};

function PluralOffsetString(id, offset, numberFormat, string) {
    this.id           = id;
    this.offset       = offset;
    this.numberFormat = numberFormat;
    this.string       = string;
}

PluralOffsetString.prototype.format = function (value) {
    var number = this.numberFormat.format(value - this.offset);

    return this.string
            .replace(/(^|[^\\])#/g, '$1' + number)
            .replace(/\\#/g, '#');
};

function SelectFormat(id, options) {
    this.id      = id;
    this.options = options;
}

SelectFormat.prototype.getOption = function (value) {
    var options = this.options;
    return options[value] || options.other;
};

//# sourceMappingURL=compiler.js.map

/***/ }),

/***/ "./node_modules/intl-messageformat/lib/core.js":
/*!*****************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/core.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */


var src$utils$$ = __webpack_require__(/*! ./utils */ "./node_modules/intl-messageformat/lib/utils.js"), src$es5$$ = __webpack_require__(/*! ./es5 */ "./node_modules/intl-messageformat/lib/es5.js"), src$compiler$$ = __webpack_require__(/*! ./compiler */ "./node_modules/intl-messageformat/lib/compiler.js"), intl$messageformat$parser$$ = __webpack_require__(/*! intl-messageformat-parser */ "./node_modules/intl-messageformat-parser/index.js");
exports["default"] = MessageFormat;

// -- MessageFormat --------------------------------------------------------

function MessageFormat(message, locales, formats) {
    // Parse string messages into an AST.
    var ast = typeof message === 'string' ?
            MessageFormat.__parse(message) : message;

    if (!(ast && ast.type === 'messageFormatPattern')) {
        throw new TypeError('A message must be provided as a String or AST.');
    }

    // Creates a new object with the specified `formats` merged with the default
    // formats.
    formats = this._mergeFormats(MessageFormat.formats, formats);

    // Defined first because it's used to build the format pattern.
    src$es5$$.defineProperty(this, '_locale',  {value: this._resolveLocale(locales)});

    // Compile the `ast` to a pattern that is highly optimized for repeated
    // `format()` invocations. **Note:** This passes the `locales` set provided
    // to the constructor instead of just the resolved locale.
    var pluralFn = this._findPluralRuleFunction(this._locale);
    var pattern  = this._compilePattern(ast, locales, formats, pluralFn);

    // "Bind" `format()` method to `this` so it can be passed by reference like
    // the other `Intl` APIs.
    var messageFormat = this;
    this.format = function (values) {
      try {
        return messageFormat._format(pattern, values);
      } catch (e) {
        if (e.variableId) {
          throw new Error(
            'The intl string context variable \'' + e.variableId + '\'' +
            ' was not provided to the string \'' + message + '\''
          );
        } else {
          throw e;
        }
      }
    };
}

// Default format options used as the prototype of the `formats` provided to the
// constructor. These are used when constructing the internal Intl.NumberFormat
// and Intl.DateTimeFormat instances.
src$es5$$.defineProperty(MessageFormat, 'formats', {
    enumerable: true,

    value: {
        number: {
            'currency': {
                style: 'currency'
            },

            'percent': {
                style: 'percent'
            }
        },

        date: {
            'short': {
                month: 'numeric',
                day  : 'numeric',
                year : '2-digit'
            },

            'medium': {
                month: 'short',
                day  : 'numeric',
                year : 'numeric'
            },

            'long': {
                month: 'long',
                day  : 'numeric',
                year : 'numeric'
            },

            'full': {
                weekday: 'long',
                month  : 'long',
                day    : 'numeric',
                year   : 'numeric'
            }
        },

        time: {
            'short': {
                hour  : 'numeric',
                minute: 'numeric'
            },

            'medium':  {
                hour  : 'numeric',
                minute: 'numeric',
                second: 'numeric'
            },

            'long': {
                hour        : 'numeric',
                minute      : 'numeric',
                second      : 'numeric',
                timeZoneName: 'short'
            },

            'full': {
                hour        : 'numeric',
                minute      : 'numeric',
                second      : 'numeric',
                timeZoneName: 'short'
            }
        }
    }
});

// Define internal private properties for dealing with locale data.
src$es5$$.defineProperty(MessageFormat, '__localeData__', {value: src$es5$$.objCreate(null)});
src$es5$$.defineProperty(MessageFormat, '__addLocaleData', {value: function (data) {
    if (!(data && data.locale)) {
        throw new Error(
            'Locale data provided to IntlMessageFormat is missing a ' +
            '`locale` property'
        );
    }

    MessageFormat.__localeData__[data.locale.toLowerCase()] = data;
}});

// Defines `__parse()` static method as an exposed private.
src$es5$$.defineProperty(MessageFormat, '__parse', {value: intl$messageformat$parser$$["default"].parse});

// Define public `defaultLocale` property which defaults to English, but can be
// set by the developer.
src$es5$$.defineProperty(MessageFormat, 'defaultLocale', {
    enumerable: true,
    writable  : true,
    value     : undefined
});

MessageFormat.prototype.resolvedOptions = function () {
    // TODO: Provide anything else?
    return {
        locale: this._locale
    };
};

MessageFormat.prototype._compilePattern = function (ast, locales, formats, pluralFn) {
    var compiler = new src$compiler$$["default"](locales, formats, pluralFn);
    return compiler.compile(ast);
};

MessageFormat.prototype._findPluralRuleFunction = function (locale) {
    var localeData = MessageFormat.__localeData__;
    var data       = localeData[locale.toLowerCase()];

    // The locale data is de-duplicated, so we have to traverse the locale's
    // hierarchy until we find a `pluralRuleFunction` to return.
    while (data) {
        if (data.pluralRuleFunction) {
            return data.pluralRuleFunction;
        }

        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
    }

    throw new Error(
        'Locale data added to IntlMessageFormat is missing a ' +
        '`pluralRuleFunction` for :' + locale
    );
};

MessageFormat.prototype._format = function (pattern, values) {
    var result = '',
        i, len, part, id, value, err;

    for (i = 0, len = pattern.length; i < len; i += 1) {
        part = pattern[i];

        // Exist early for string parts.
        if (typeof part === 'string') {
            result += part;
            continue;
        }

        id = part.id;

        // Enforce that all required values are provided by the caller.
        if (!(values && src$utils$$.hop.call(values, id))) {
          err = new Error('A value must be provided for: ' + id);
          err.variableId = id;
          throw err;
        }

        value = values[id];

        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if (part.options) {
            result += this._format(part.getOption(value), values);
        } else {
            result += part.format(value);
        }
    }

    return result;
};

MessageFormat.prototype._mergeFormats = function (defaults, formats) {
    var mergedFormats = {},
        type, mergedType;

    for (type in defaults) {
        if (!src$utils$$.hop.call(defaults, type)) { continue; }

        mergedFormats[type] = mergedType = src$es5$$.objCreate(defaults[type]);

        if (formats && src$utils$$.hop.call(formats, type)) {
            src$utils$$.extend(mergedType, formats[type]);
        }
    }

    return mergedFormats;
};

MessageFormat.prototype._resolveLocale = function (locales) {
    if (typeof locales === 'string') {
        locales = [locales];
    }

    // Create a copy of the array so we can push on the default locale.
    locales = (locales || []).concat(MessageFormat.defaultLocale);

    var localeData = MessageFormat.__localeData__;
    var i, len, localeParts, data;

    // Using the set of locales + the default locale, we look for the first one
    // which that has been registered. When data does not exist for a locale, we
    // traverse its ancestors to find something that's been registered within
    // its hierarchy of locales. Since we lack the proper `parentLocale` data
    // here, we must take a naive approach to traversal.
    for (i = 0, len = locales.length; i < len; i += 1) {
        localeParts = locales[i].toLowerCase().split('-');

        while (localeParts.length) {
            data = localeData[localeParts.join('-')];
            if (data) {
                // Return the normalized locale string; e.g., we return "en-US",
                // instead of "en-us".
                return data.locale;
            }

            localeParts.pop();
        }
    }

    var defaultLocale = locales.pop();
    throw new Error(
        'No locale data has been added to IntlMessageFormat for: ' +
        locales.join(', ') + ', or the default locale: ' + defaultLocale
    );
};

//# sourceMappingURL=core.js.map

/***/ }),

/***/ "./node_modules/intl-messageformat/lib/en.js":
/*!***************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/en.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// GENERATED FILE

exports["default"] = {"locale":"en","pluralRuleFunction":function (n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"}};

//# sourceMappingURL=en.js.map

/***/ }),

/***/ "./node_modules/intl-messageformat/lib/es5.js":
/*!****************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/es5.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */


var src$utils$$ = __webpack_require__(/*! ./utils */ "./node_modules/intl-messageformat/lib/utils.js");

// Purposely using the same implementation as the Intl.js `Intl` polyfill.
// Copyright 2013 Andy Earnshaw, MIT License

var realDefineProp = (function () {
    try { return !!Object.defineProperty({}, 'a', {}); }
    catch (e) { return false; }
})();

var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

var defineProperty = realDefineProp ? Object.defineProperty :
        function (obj, name, desc) {

    if ('get' in desc && obj.__defineGetter__) {
        obj.__defineGetter__(name, desc.get);
    } else if (!src$utils$$.hop.call(obj, name) || 'value' in desc) {
        obj[name] = desc.value;
    }
};

var objCreate = Object.create || function (proto, props) {
    var obj, k;

    function F() {}
    F.prototype = proto;
    obj = new F();

    for (k in props) {
        if (src$utils$$.hop.call(props, k)) {
            defineProperty(obj, k, props[k]);
        }
    }

    return obj;
};

exports.defineProperty = defineProperty, exports.objCreate = objCreate;

//# sourceMappingURL=es5.js.map

/***/ }),

/***/ "./node_modules/intl-messageformat/lib/main.js":
/*!*****************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/main.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jslint esnext: true */


var src$core$$ = __webpack_require__(/*! ./core */ "./node_modules/intl-messageformat/lib/core.js"), src$en$$ = __webpack_require__(/*! ./en */ "./node_modules/intl-messageformat/lib/en.js");

src$core$$["default"].__addLocaleData(src$en$$["default"]);
src$core$$["default"].defaultLocale = 'en';

exports["default"] = src$core$$["default"];

//# sourceMappingURL=main.js.map

/***/ }),

/***/ "./node_modules/intl-messageformat/lib/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/utils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */


exports.extend = extend;
var hop = Object.prototype.hasOwnProperty;

function extend(obj) {
    var sources = Array.prototype.slice.call(arguments, 1),
        i, len, source, key;

    for (i = 0, len = sources.length; i < len; i += 1) {
        source = sources[i];
        if (!source) { continue; }

        for (key in source) {
            if (hop.call(source, key)) {
                obj[key] = source[key];
            }
        }
    }

    return obj;
}
exports.hop = hop;

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/systemjs/dist/extras/amd.js":
/*!**************************************************!*\
  !*** ./node_modules/systemjs/dist/extras/amd.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(){function errMsg(errCode, msg) {
  return (msg || "") + " (SystemJS Error#" + errCode + " " + "https://git.io/JvFET#" + errCode + ")";
}/*
 * Support for AMD loading
 */
(function (global) {
  var systemPrototype = global.System.constructor.prototype;

  var emptyInstantiation = [[], function () { return {} }];

  function unsupportedRequire () {
    throw Error( errMsg(5, 'AMD require not supported.'));
  }

  var tmpRegister, firstNamedDefine;

  function emptyFn () {}

  var requireExportsModule = ['require', 'exports', 'module'];

  function createAMDRegister (amdDefineDeps, amdDefineExec) {
    var exports = {};
    var module = { exports: exports };
    var depModules = [];
    var setters = [];
    var splice = 0;
    for (var i = 0; i < amdDefineDeps.length; i++) {
      var id = amdDefineDeps[i];
      var index = setters.length;
      if (id === 'require') {
        depModules[i] = unsupportedRequire;
        splice++;
      }
      else if (id === 'module') {
        depModules[i] = module;
        splice++;
      }
      else if (id === 'exports') {
        depModules[i] = exports;
        splice++;
      }
      else {
        createSetter(i);
      }
      if (splice)
        amdDefineDeps[index] = id;
    }
    if (splice)
      amdDefineDeps.length -= splice;
    var amdExec = amdDefineExec;
    return [amdDefineDeps, function (_export) {
      _export({ default: exports, __useDefault: true });
      return {
        setters: setters,
        execute: function () {
          var amdResult = amdExec.apply(exports, depModules);
          if (amdResult !== undefined)
            module.exports = amdResult;
          if (exports !== module.exports)
            _export('default', module.exports);
        }
      };
    }];

    // needed to avoid iteration scope issues
    function createSetter(idx) {
      setters.push(function (ns) {
        depModules[idx] = ns.__useDefault ? ns.default : ns;
      });
    }
  }

  // hook System.register to know the last declaration binding
  var lastRegisterDeclare;
  var systemRegister = systemPrototype.register;
  systemPrototype.register = function (name, deps, declare) {
    lastRegisterDeclare = typeof name === 'string' ? declare : deps;
    systemRegister.apply(this, arguments);
  };

  var instantiate = systemPrototype.instantiate;
  systemPrototype.instantiate = function() {
    // Reset "currently executing script"
    amdDefineDeps = null;
    return instantiate.apply(this, arguments);
  };

  var getRegister = systemPrototype.getRegister;
  systemPrototype.getRegister = function () {
    if (tmpRegister)
      return tmpRegister;

    var _firstNamedDefine = firstNamedDefine;
    firstNamedDefine = null;

    var register = getRegister.call(this);
    // if its an actual System.register leave it
    if (register && register[1] === lastRegisterDeclare)
      return register;

    var _amdDefineDeps = amdDefineDeps;
    amdDefineDeps = null;

    // If the script registered a named module, return that module instead of re-instantiating it.
    if (_firstNamedDefine)
      return _firstNamedDefine;

    // otherwise AMD takes priority
    // no registration -> attempt AMD detection
    if (!_amdDefineDeps)
      return register || emptyInstantiation;

    return createAMDRegister(_amdDefineDeps, amdDefineExec);
  };
  var amdDefineDeps, amdDefineExec;
  global.define = function (name, deps, execute) {
    var depsAndExec;
    // define('', [], function () {})
    if (typeof name === 'string') {
      depsAndExec = getDepsAndExec(deps, execute);
      if (amdDefineDeps) {
        if (!System.registerRegistry) {
          throw Error( errMsg(6, 'Include the named register extension for SystemJS named AMD support.'));
        }
        addToRegisterRegistry(name, createAMDRegister(depsAndExec[0], depsAndExec[1]));
        amdDefineDeps = [];
        amdDefineExec = emptyFn;
        return;
      }
      else {
        if (System.registerRegistry)
          addToRegisterRegistry(name, createAMDRegister([].concat(depsAndExec[0]), depsAndExec[1]));
        name = deps;
        deps = execute;
      }
    }
    depsAndExec = getDepsAndExec(name, deps);
    amdDefineDeps = depsAndExec[0];
    amdDefineExec = depsAndExec[1];
  };
  global.define.amd = {};

  function getDepsAndExec(arg1, arg2) {
    // define([], function () {})
    if (arg1 instanceof Array) {
      return [arg1, arg2];
    }
    // define({})
    else if (typeof arg1 === 'object') {
      return [[], function () { return arg1 }];
    }
    // define(function () {})
    else if (typeof arg1 === 'function') {
      return [requireExportsModule, arg1];
    }
  }

  function addToRegisterRegistry(name, define) {
    if (!firstNamedDefine) {
      firstNamedDefine = define;
      Promise.resolve().then(function () {
        firstNamedDefine = null;
      });
    }

    // We must call System.getRegister() here to give other extras, such as the named-exports extra,
    // a chance to modify the define before it's put into the registerRegistry.
    // See https://github.com/systemjs/systemjs/issues/2073
    tmpRegister = define;
    System.registerRegistry[name] = System.getRegister();
    tmpRegister = null;
  }
})(typeof self !== 'undefined' ? self : global);}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/systemjs/dist/extras/named-exports.js":
/*!************************************************************!*\
  !*** ./node_modules/systemjs/dist/extras/named-exports.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(){/*
 * Named exports support for legacy module formats in SystemJS 2.0
 */
(function (global) {
  var systemJSPrototype = global.System.constructor.prototype;

  // hook System.register to know the last declaration binding
  var lastRegisterDeclare;
  var systemRegister = systemJSPrototype.register;
  systemJSPrototype.register = function (name, deps, declare) {
    lastRegisterDeclare = typeof name === 'string' ? declare : deps;
    systemRegister.apply(this, arguments);
  };

  var getRegister = systemJSPrototype.getRegister;
  systemJSPrototype.getRegister = function () {
    var register = getRegister.call(this);
    // if it is an actual System.register call, then its ESM
    // -> dont add named exports
    if (!register || register[1] === lastRegisterDeclare || register[1].length === 0)
      return register;

    // otherwise it was provided by a custom instantiator
    // -> extend the registration with named exports support
    var registerDeclare = register[1];
    register[1] = function (_export, _context) {
      // hook the _export function to note the default export
      var defaultExport, hasDefaultExport = false;
      var declaration = registerDeclare.call(this, function (name, value) {
        if (typeof name === 'object' && name.__useDefault)
          defaultExport = name.default, hasDefaultExport = true;
        else if (name === 'default')
          defaultExport = value;
        else if (name === '__useDefault')
          hasDefaultExport = true;
        _export(name, value);
      }, _context);
      // hook the execute function
      var execute = declaration.execute;
      if (execute)
        declaration.execute = function () {
          execute.call(this);
          // do a bulk export of the default export object
          // to export all its names as named exports

          if (hasDefaultExport)
            for (var exportName in defaultExport) {
              if (
                Object.prototype.hasOwnProperty.call(defaultExport,  exportName) // Check if epoxrt name is not inherited, safe for Object.create(null)
                && exportName !== 'default' // default is not a named export
              ) {
                _export(exportName, defaultExport[exportName]);
              }
            }
        };
      return declaration;
    };
    return register;
  };
})(typeof self !== 'undefined' ? self : global);}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/systemjs/dist/extras/named-register.js":
/*!*************************************************************!*\
  !*** ./node_modules/systemjs/dist/extras/named-register.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(){/*
 * SystemJS named register extension
 * Supports System.register('name', [..deps..], function (_export, _context) { ... })
 * 
 * Names are written to the registry as-is
 * System.register('x', ...) can be imported as System.import('x')
 */
(function (global) {
  var System = global.System;
  setRegisterRegistry(System);
  var systemJSPrototype = System.constructor.prototype;
  var constructor = System.constructor;
  var SystemJS = function () {
    constructor.call(this);
    setRegisterRegistry(this);
  };
  SystemJS.prototype = systemJSPrototype;
  System.constructor = SystemJS;

  var firstNamedDefine;

  function setRegisterRegistry(systemInstance) {
    systemInstance.registerRegistry = Object.create(null);
  }

  var register = systemJSPrototype.register;
  systemJSPrototype.register = function (name, deps, declare) {
    if (typeof name !== 'string')
      return register.apply(this, arguments);
    var define = [deps, declare];
    this.registerRegistry[name] = define;
    if (!firstNamedDefine) {
      firstNamedDefine = define;
      Promise.resolve().then(function () {
        firstNamedDefine = null;
      });
    }
    return register.apply(this, arguments);
  };

  var resolve = systemJSPrototype.resolve;
  systemJSPrototype.resolve = function (id, parentURL) {
    try {
      // Prefer import map (or other existing) resolution over the registerRegistry
      return resolve.call(this, id, parentURL);
    } catch (err) {
      if (id in this.registerRegistry) {
        return id;
      }
      throw err;
    }
  };

  var instantiate = systemJSPrototype.instantiate;
  systemJSPrototype.instantiate = function (url, firstParentUrl) {
    var result = this.registerRegistry[url];
    if (result) {
      this.registerRegistry[url] = null;
      return result;
    } else {
      return instantiate.call(this, url, firstParentUrl);
    }
  };

  var getRegister = systemJSPrototype.getRegister;
  systemJSPrototype.getRegister = function () {
    // Calling getRegister() because other extras need to know it was called so they can perform side effects
    var register = getRegister.call(this);

    var result = firstNamedDefine || register;
    firstNamedDefine = null;
    return result;
  };
})(typeof self !== 'undefined' ? self : global);}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/systemjs/dist/extras/use-default.js":
/*!**********************************************************!*\
  !*** ./node_modules/systemjs/dist/extras/use-default.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(){/*
 * Interop for AMD modules to return the direct AMD binding instead of a
 * `{ default: amdModule }` object from `System.import`
 */
(function (global) {
  var systemJSPrototype = global.System.constructor.prototype;
  var originalImport = systemJSPrototype.import;

  systemJSPrototype.import = function () {
    return originalImport.apply(this, arguments).then(function (ns) {
      return ns.__useDefault ? ns.default : ns;
    });
  };
})(typeof self !== 'undefined' ? self : global);}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/systemjs/dist/system.js":
/*!**********************************************!*\
  !*** ./node_modules/systemjs/dist/system.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*
* SystemJS 6.3.3
*/
(function () {
  function errMsg(errCode, msg) {
    return (msg || "") + " (SystemJS Error#" + errCode + " " + "https://git.io/JvFET#" + errCode + ")";
  }

  var hasSymbol = typeof Symbol !== 'undefined';
  var hasSelf = typeof self !== 'undefined';
  var hasDocument = typeof document !== 'undefined';

  var envGlobal = hasSelf ? self : global;

  var baseUrl;

  if (hasDocument) {
    var baseEl = document.querySelector('base[href]');
    if (baseEl)
      baseUrl = baseEl.href;
  }

  if (!baseUrl && typeof location !== 'undefined') {
    baseUrl = location.href.split('#')[0].split('?')[0];
    var lastSepIndex = baseUrl.lastIndexOf('/');
    if (lastSepIndex !== -1)
      baseUrl = baseUrl.slice(0, lastSepIndex + 1);
  }

  var backslashRegEx = /\\/g;
  function resolveIfNotPlainOrUrl (relUrl, parentUrl) {
    if (relUrl.indexOf('\\') !== -1)
      relUrl = relUrl.replace(backslashRegEx, '/');
    // protocol-relative
    if (relUrl[0] === '/' && relUrl[1] === '/') {
      return parentUrl.slice(0, parentUrl.indexOf(':') + 1) + relUrl;
    }
    // relative-url
    else if (relUrl[0] === '.' && (relUrl[1] === '/' || relUrl[1] === '.' && (relUrl[2] === '/' || relUrl.length === 2 && (relUrl += '/')) ||
        relUrl.length === 1  && (relUrl += '/')) ||
        relUrl[0] === '/') {
      var parentProtocol = parentUrl.slice(0, parentUrl.indexOf(':') + 1);
      // Disabled, but these cases will give inconsistent results for deep backtracking
      //if (parentUrl[parentProtocol.length] !== '/')
      //  throw Error('Cannot resolve');
      // read pathname from parent URL
      // pathname taken to be part after leading "/"
      var pathname;
      if (parentUrl[parentProtocol.length + 1] === '/') {
        // resolving to a :// so we need to read out the auth and host
        if (parentProtocol !== 'file:') {
          pathname = parentUrl.slice(parentProtocol.length + 2);
          pathname = pathname.slice(pathname.indexOf('/') + 1);
        }
        else {
          pathname = parentUrl.slice(8);
        }
      }
      else {
        // resolving to :/ so pathname is the /... part
        pathname = parentUrl.slice(parentProtocol.length + (parentUrl[parentProtocol.length] === '/'));
      }

      if (relUrl[0] === '/')
        return parentUrl.slice(0, parentUrl.length - pathname.length - 1) + relUrl;

      // join together and split for removal of .. and . segments
      // looping the string instead of anything fancy for perf reasons
      // '../../../../../z' resolved to 'x/y' is just 'z'
      var segmented = pathname.slice(0, pathname.lastIndexOf('/') + 1) + relUrl;

      var output = [];
      var segmentIndex = -1;
      for (var i = 0; i < segmented.length; i++) {
        // busy reading a segment - only terminate on '/'
        if (segmentIndex !== -1) {
          if (segmented[i] === '/') {
            output.push(segmented.slice(segmentIndex, i + 1));
            segmentIndex = -1;
          }
        }

        // new segment - check if it is relative
        else if (segmented[i] === '.') {
          // ../ segment
          if (segmented[i + 1] === '.' && (segmented[i + 2] === '/' || i + 2 === segmented.length)) {
            output.pop();
            i += 2;
          }
          // ./ segment
          else if (segmented[i + 1] === '/' || i + 1 === segmented.length) {
            i += 1;
          }
          else {
            // the start of a new segment as below
            segmentIndex = i;
          }
        }
        // it is the start of a new segment
        else {
          segmentIndex = i;
        }
      }
      // finish reading out the last segment
      if (segmentIndex !== -1)
        output.push(segmented.slice(segmentIndex));
      return parentUrl.slice(0, parentUrl.length - pathname.length) + output.join('');
    }
  }

  /*
   * Import maps implementation
   *
   * To make lookups fast we pre-resolve the entire import map
   * and then match based on backtracked hash lookups
   *
   */

  function resolveUrl (relUrl, parentUrl) {
    return resolveIfNotPlainOrUrl(relUrl, parentUrl) || (relUrl.indexOf(':') !== -1 ? relUrl : resolveIfNotPlainOrUrl('./' + relUrl, parentUrl));
  }

  function objectAssign (to, from) {
    for (var p in from)
      to[p] = from[p];
    return to;
  }

  function resolveAndComposePackages (packages, outPackages, baseUrl, parentMap, parentUrl) {
    for (var p in packages) {
      var resolvedLhs = resolveIfNotPlainOrUrl(p, baseUrl) || p;
      var rhs = packages[p];
      // package fallbacks not currently supported
      if (typeof rhs !== 'string')
        continue;
      var mapped = resolveImportMap(parentMap, resolveIfNotPlainOrUrl(rhs, baseUrl) || rhs, parentUrl);
      if (!mapped) {
        targetWarning('W1', p, rhs, 'bare specifier did not resolve');
      }
      else
        outPackages[resolvedLhs] = mapped;
    }
  }

  function resolveAndComposeImportMap (json, baseUrl, parentMap) {
    var outMap = { imports: objectAssign({}, parentMap.imports), scopes: objectAssign({}, parentMap.scopes) };

    if (json.imports)
      resolveAndComposePackages(json.imports, outMap.imports, baseUrl, parentMap, null);

    if (json.scopes)
      for (var s in json.scopes) {
        var resolvedScope = resolveUrl(s, baseUrl);
        resolveAndComposePackages(json.scopes[s], outMap.scopes[resolvedScope] || (outMap.scopes[resolvedScope] = {}), baseUrl, parentMap, resolvedScope);
      }

    return outMap;
  }

  function getMatch (path, matchObj) {
    if (matchObj[path])
      return path;
    var sepIndex = path.length;
    do {
      var segment = path.slice(0, sepIndex + 1);
      if (segment in matchObj)
        return segment;
    } while ((sepIndex = path.lastIndexOf('/', sepIndex - 1)) !== -1)
  }

  function applyPackages (id, packages) {
    var pkgName = getMatch(id, packages);
    if (pkgName) {
      var pkg = packages[pkgName];
      if (pkg === null) return;
      if (id.length > pkgName.length && pkg[pkg.length - 1] !== '/') {
        targetWarning('W2', pkgName, pkg, "should have a trailing '/'");
      }
      else
        return pkg + id.slice(pkgName.length);
    }
  }

  function targetWarning (code, match, target, msg) {
    console.warn(errMsg(code,  "Package target " + msg + ", resolving target '" + target + "' for " + match));
  }

  function resolveImportMap (importMap, resolvedOrPlain, parentUrl) {
    var scopes = importMap.scopes;
    var scopeUrl = parentUrl && getMatch(parentUrl, scopes);
    while (scopeUrl) {
      var packageResolution = applyPackages(resolvedOrPlain, scopes[scopeUrl]);
      if (packageResolution)
        return packageResolution;
      scopeUrl = getMatch(scopeUrl.slice(0, scopeUrl.lastIndexOf('/')), scopes);
    }
    return applyPackages(resolvedOrPlain, importMap.imports) || resolvedOrPlain.indexOf(':') !== -1 && resolvedOrPlain;
  }

  /*
   * SystemJS Core
   * 
   * Provides
   * - System.import
   * - System.register support for
   *     live bindings, function hoisting through circular references,
   *     reexports, dynamic import, import.meta.url, top-level await
   * - System.getRegister to get the registration
   * - Symbol.toStringTag support in Module objects
   * - Hookable System.createContext to customize import.meta
   * - System.onload(err, id, deps) handler for tracing / hot-reloading
   * 
   * Core comes with no System.prototype.resolve or
   * System.prototype.instantiate implementations
   */

  var toStringTag = hasSymbol && Symbol.toStringTag;
  var REGISTRY = hasSymbol ? Symbol() : '@';

  function SystemJS () {
    this[REGISTRY] = {};
  }

  var systemJSPrototype = SystemJS.prototype;

  systemJSPrototype.import = function (id, parentUrl) {
    var loader = this;
    return Promise.resolve(loader.prepareImport())
    .then(function() {
      return loader.resolve(id, parentUrl);
    })
    .then(function (id) {
      var load = getOrCreateLoad(loader, id);
      return load.C || topLevelLoad(loader, load);
    });
  };

  // Hookable createContext function -> allowing eg custom import meta
  systemJSPrototype.createContext = function (parentId) {
    return {
      url: parentId
    };
  };

  // onLoad(err, id, deps) provided for tracing / hot-reloading
  systemJSPrototype.onload = function () {};
  function loadToId (load) {
    return load.id;
  }
  function triggerOnload (loader, load, err) {
    loader.onload(err, load.id, load.d && load.d.map(loadToId));
    if (err)
      throw err;
  }

  var lastRegister;
  systemJSPrototype.register = function (deps, declare) {
    lastRegister = [deps, declare];
  };

  /*
   * getRegister provides the last anonymous System.register call
   */
  systemJSPrototype.getRegister = function () {
    var _lastRegister = lastRegister;
    lastRegister = undefined;
    return _lastRegister;
  };

  function getOrCreateLoad (loader, id, firstParentUrl) {
    var load = loader[REGISTRY][id];
    if (load)
      return load;

    var importerSetters = [];
    var ns = Object.create(null);
    if (toStringTag)
      Object.defineProperty(ns, toStringTag, { value: 'Module' });
    
    var instantiatePromise = Promise.resolve()
    .then(function () {
      return loader.instantiate(id, firstParentUrl);
    })
    .then(function (registration) {
      if (!registration)
        throw Error(errMsg(2,  'Module ' + id + ' did not instantiate'));
      function _export (name, value) {
        // note if we have hoisted exports (including reexports)
        load.h = true;
        var changed = false;
        if (typeof name !== 'object') {
          if (!(name in ns) || ns[name] !== value) {
            ns[name] = value;
            changed = true;
          }
        }
        else {
          for (var p in name) {
            var value = name[p];
            if (!(p in ns) || ns[p] !== value) {
              ns[p] = value;
              changed = true;
            }
          }

          if (name.__esModule) {
            ns.__esModule = name.__esModule;
          }
        }
        if (changed)
          for (var i = 0; i < importerSetters.length; i++) {
            var setter = importerSetters[i];
            if (setter) setter(ns);
          }
        return value;
      }
      var declared = registration[1](_export, registration[1].length === 2 ? {
        import: function (importId) {
          return loader.import(importId, id);
        },
        meta: loader.createContext(id)
      } : undefined);
      load.e = declared.execute || function () {};
      return [registration[0], declared.setters || []];
    });

    instantiatePromise = instantiatePromise.catch(function (err) {
        triggerOnload(loader, load, err);
      });

    var linkPromise = instantiatePromise
    .then(function (instantiation) {
      return Promise.all(instantiation[0].map(function (dep, i) {
        var setter = instantiation[1][i];
        return Promise.resolve(loader.resolve(dep, id))
        .then(function (depId) {
          var depLoad = getOrCreateLoad(loader, depId, id);
          // depLoad.I may be undefined for already-evaluated
          return Promise.resolve(depLoad.I)
          .then(function () {
            if (setter) {
              depLoad.i.push(setter);
              // only run early setters when there are hoisted exports of that module
              // the timing works here as pending hoisted export calls will trigger through importerSetters
              if (depLoad.h || !depLoad.I)
                setter(depLoad.n);
            }
            return depLoad;
          });
        })
      }))
      .then(function (depLoads) {
        load.d = depLoads;
      });
    });

    linkPromise.catch(function (err) {
      load.e = null;
      load.er = err;
    });

    // Capital letter = a promise function
    return load = loader[REGISTRY][id] = {
      id: id,
      // importerSetters, the setters functions registered to this dependency
      // we retain this to add more later
      i: importerSetters,
      // module namespace object
      n: ns,

      // instantiate
      I: instantiatePromise,
      // link
      L: linkPromise,
      // whether it has hoisted exports
      h: false,

      // On instantiate completion we have populated:
      // dependency load records
      d: undefined,
      // execution function
      // set to NULL immediately after execution (or on any failure) to indicate execution has happened
      // in such a case, C should be used, and E, I, L will be emptied
      e: undefined,

      // On execution we have populated:
      // the execution error if any
      er: undefined,
      // in the case of TLA, the execution promise
      E: undefined,

      // On execution, L, I, E cleared

      // Promise for top-level completion
      C: undefined
    };
  }

  function instantiateAll (loader, load, loaded) {
    if (!loaded[load.id]) {
      loaded[load.id] = true;
      // load.L may be undefined for already-instantiated
      return Promise.resolve(load.L)
      .then(function () {
        return Promise.all(load.d.map(function (dep) {
          return instantiateAll(loader, dep, loaded);
        }));
      })
    }
  }

  function topLevelLoad (loader, load) {
    return load.C = instantiateAll(loader, load, {})
    .then(function () {
      return postOrderExec(loader, load, {});
    })
    .then(function () {
      return load.n;
    });
  }

  // the closest we can get to call(undefined)
  var nullContext = Object.freeze(Object.create(null));

  // returns a promise if and only if a top-level await subgraph
  // throws on sync errors
  function postOrderExec (loader, load, seen) {
    if (seen[load.id])
      return;
    seen[load.id] = true;

    if (!load.e) {
      if (load.er)
        throw load.er;
      if (load.E)
        return load.E;
      return;
    }

    // deps execute first, unless circular
    var depLoadPromises;
    load.d.forEach(function (depLoad) {
      if (true) {
        try {
          var depLoadPromise = postOrderExec(loader, depLoad, seen);
          if (depLoadPromise) {
            depLoadPromise.catch(function (err) {
              triggerOnload(loader, load, err);
            });
            (depLoadPromises = depLoadPromises || []).push(depLoadPromise);
          }
        }
        catch (err) {
          triggerOnload(loader, load, err);
        }
      }
      else { var depLoadPromise; }
    });
    if (depLoadPromises)
      return Promise.all(depLoadPromises).then(doExec);

    return doExec();

    function doExec () {
      try {
        var execPromise = load.e.call(nullContext);
        if (execPromise) {
          if (true)
            execPromise = execPromise.then(function () {
              load.C = load.n;
              load.E = null; // indicates completion
              triggerOnload(loader, load, null);
            }, function (err) {
              triggerOnload(loader, load, err);
            });
          else
            {}
          return load.E = load.E || execPromise;
        }
        // (should be a promise, but a minify optimization to leave out Promise.resolve)
        load.C = load.n;
        if (true) triggerOnload(loader, load, null);
      }
      catch (err) {
        load.er = err;
        triggerOnload(loader, load, err);
      }
      finally {
        load.L = load.I = undefined;
        load.e = null;
      }
    }
  }

  envGlobal.System = new SystemJS();

  /*
   * Import map support for SystemJS
   * 
   * <script type="systemjs-importmap">{}</script>
   * OR
   * <script type="systemjs-importmap" src=package.json></script>
   * 
   * Only those import maps available at the time of SystemJS initialization will be loaded
   * and they will be loaded in DOM order.
   * 
   * There is no support for dynamic import maps injection currently.
   */

  var IMPORT_MAP = hasSymbol ? Symbol() : '#';
  var IMPORT_MAP_PROMISE = hasSymbol ? Symbol() : '$';

  iterateDocumentImportMaps(function (script) {
    script._t = fetch(script.src).then(function (res) {
      return res.text();
    });
  }, '[src]');

  systemJSPrototype.prepareImport = function () {
    var loader = this;
    if (!loader[IMPORT_MAP_PROMISE]) {
      loader[IMPORT_MAP] = { imports: {}, scopes: {} };
      loader[IMPORT_MAP_PROMISE] = Promise.resolve();
      iterateDocumentImportMaps(function (script) {
        loader[IMPORT_MAP_PROMISE] = loader[IMPORT_MAP_PROMISE].then(function () {
          return (script._t || script.src && fetch(script.src).then(function (res) { return res.text(); }) || Promise.resolve(script.innerHTML))
          .then(function (text) {
            try {
              return JSON.parse(text);
            } catch (err) {
              throw Error( errMsg(1, "systemjs-importmap contains invalid JSON"));
            }
          })
          .then(function (newMap) {
            loader[IMPORT_MAP] = resolveAndComposeImportMap(newMap, script.src || baseUrl, loader[IMPORT_MAP]);
          });
        });
      }, '');
    }
    return loader[IMPORT_MAP_PROMISE];
  };

  systemJSPrototype.resolve = function (id, parentUrl) {
    parentUrl = parentUrl || !true  || baseUrl;
    return resolveImportMap(this[IMPORT_MAP], resolveIfNotPlainOrUrl(id, parentUrl) || id, parentUrl) || throwUnresolved(id, parentUrl);
  };

  function throwUnresolved (id, parentUrl) {
    throw Error(errMsg(8,  "Unable to resolve bare specifier '" + id + (parentUrl ? "' from " + parentUrl : "'")));
  }

  function iterateDocumentImportMaps(cb, extraSelector) {
    if (hasDocument)
      [].forEach.call(document.querySelectorAll('script[type="systemjs-importmap"]' + extraSelector), cb);
  }

  /*
   * Supports loading System.register via script tag injection
   */

  var systemRegister = systemJSPrototype.register;
  systemJSPrototype.register = function (deps, declare) {
    systemRegister.call(this, deps, declare);
  };

  systemJSPrototype.createScript = function (url) {
    var script = document.createElement('script');
    script.charset = 'utf-8';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.src = url;
    return script;
  };

  var lastWindowErrorUrl, lastWindowError;
  systemJSPrototype.instantiate = function (url, firstParentUrl) {
    var loader = this;
    return new Promise(function (resolve, reject) {
      var script = systemJSPrototype.createScript(url);
      script.addEventListener('error', function () {
        reject(Error(errMsg(3,  'Error loading ' + url + (firstParentUrl ? ' from ' + firstParentUrl : ''))));
      });
      script.addEventListener('load', function () {
        document.head.removeChild(script);
        // Note that if an error occurs that isn't caught by this if statement,
        // that getRegister will return null and a "did not instantiate" error will be thrown.
        if (lastWindowErrorUrl === url) {
          reject(lastWindowError);
        }
        else {
          resolve(loader.getRegister());
        }
      });
      document.head.appendChild(script);
    });
  };

  if (hasDocument) {
    window.addEventListener('error', function (evt) {
      lastWindowErrorUrl = evt.filename;
      lastWindowError = evt.error;
    });

    window.addEventListener('DOMContentLoaded', loadScriptModules);
    loadScriptModules();
  }


  function loadScriptModules() {
    [].forEach.call(
      document.querySelectorAll('script[type=systemjs-module]'), function (script) {
        if (script.src) {
          System.import(script.src.slice(0, 7) === 'import:' ? script.src.slice(7) : resolveUrl(script.src, baseUrl));
        }
      });
  }

  /*
   * Supports loading System.register in workers
   */

  if (hasSelf && typeof importScripts === 'function')
    systemJSPrototype.instantiate = function (url) {
      var loader = this;
      return Promise.resolve().then(function () {
        importScripts(url);
        return loader.getRegister();
      });
    };

  /*
   * SystemJS global script loading support
   * Extra for the s.js build only
   * (Included by default in system.js build)
   */
  (function (global) {
    var systemJSPrototype = System.constructor.prototype;

    // safari unpredictably lists some new globals first or second in object order
    var firstGlobalProp, secondGlobalProp, lastGlobalProp;
    function getGlobalProp () {
      var cnt = 0;
      var lastProp;
      for (var p in global) {
        // do not check frames cause it could be removed during import
        if (shouldSkipProperty(p))
          continue;
        if (cnt === 0 && p !== firstGlobalProp || cnt === 1 && p !== secondGlobalProp)
          return p;
        cnt++;
        lastProp = p;
      }
      if (lastProp !== lastGlobalProp)
        return lastProp;
    }

    function noteGlobalProps () {
      // alternatively Object.keys(global).pop()
      // but this may be faster (pending benchmarks)
      firstGlobalProp = secondGlobalProp = undefined;
      for (var p in global) {
        // do not check frames cause it could be removed during import
        if (shouldSkipProperty(p))
          continue;
        if (!firstGlobalProp)
          firstGlobalProp = p;
        else if (!secondGlobalProp)
          secondGlobalProp = p;
        lastGlobalProp = p;
      }
      return lastGlobalProp;
    }

    var impt = systemJSPrototype.import;
    systemJSPrototype.import = function (id, parentUrl) {
      noteGlobalProps();
      return impt.call(this, id, parentUrl);
    };

    var emptyInstantiation = [[], function () { return {} }];

    var getRegister = systemJSPrototype.getRegister;
    systemJSPrototype.getRegister = function () {
      var lastRegister = getRegister.call(this);
      if (lastRegister)
        return lastRegister;

      // no registration -> attempt a global detection as difference from snapshot
      // when multiple globals, we take the global value to be the last defined new global object property
      // for performance, this will not support multi-version / global collisions as previous SystemJS versions did
      // note in Edge, deleting and re-adding a global does not change its ordering
      var globalProp = getGlobalProp();
      if (!globalProp)
        return emptyInstantiation;

      var globalExport;
      try {
        globalExport = global[globalProp];
      }
      catch (e) {
        return emptyInstantiation;
      }

      return [[], function (_export) {
        return {
          execute: function () {
            _export({ default: globalExport, __useDefault: true });
          }
        };
      }];
    };

    var isIE11 = typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Trident') !== -1;

    function shouldSkipProperty(p) {
      return !global.hasOwnProperty(p)
        || !isNaN(p) && p < global.length
        || isIE11 && global[p] && typeof window !== 'undefined' && global[p].parent === window;
    }
  })(typeof self !== 'undefined' ? self : global);

  /*
   * Loads JSON, CSS, Wasm module types based on file extensions
   * Supports application/javascript falling back to JS eval
   */
  (function(global) {
    var systemJSPrototype = global.System.constructor.prototype;
    var instantiate = systemJSPrototype.instantiate;

    var moduleTypesRegEx = /\.(css|html|json|wasm)$/;
    systemJSPrototype.shouldFetch = function (url) {
      var path = url.split('?')[0].split('#')[0];
      var ext = path.slice(path.lastIndexOf('.'));
      return ext.match(moduleTypesRegEx);
    };
    systemJSPrototype.fetch = function (url) {
      return fetch(url);
    };

    systemJSPrototype.instantiate = function (url, parent) {
      var loader = this;
      if (this.shouldFetch(url)) {
        return this.fetch(url)
        .then(function (res) {
          if (!res.ok)
            throw Error(errMsg(7,  res.status + ' ' + res.statusText + ', loading ' + url + (parent ? ' from ' + parent : '')));
          var contentType = res.headers.get('content-type');
          if (!contentType)
            throw Error(errMsg(4,  'Missing header "Content-Type", loading ' + url + (parent ? ' from ' + parent : '')));
          if (contentType.match(/^(text|application)\/(x-)?javascript(;|$)/)) {
            return res.text().then(function (source) {
              (0, eval)(source);
              return loader.getRegister();
            });
          }
          else if (contentType.match(/^application\/json(;|$)/)) {
            return res.text().then(function (source) {
              return [[], function (_export) {
                return {
                  execute: function () {
                    _export('default', JSON.parse(source));
                  }
                };
              }];
            });
          }
          else if (contentType.match(/^text\/css(;|$)/)) {
            return res.text().then(function (source) {
              return [[], function (_export) {
                return {
                  execute: function () {
                    // Relies on a Constructable Stylesheet polyfill
                    var stylesheet = new CSSStyleSheet();
                    stylesheet.replaceSync(source);
                    _export('default', stylesheet);
                  }
                };
              }];
            }); 
          }
          else if (contentType.match(/^application\/wasm(;|$)/)) {
            return (WebAssembly.compileStreaming ? WebAssembly.compileStreaming(res) : res.arrayBuffer().then(WebAssembly.compile))
            .then(function (module) {
              var deps = [];
              var setters = [];
              var importObj = {};
          
              // we can only set imports if supported (eg early Safari doesnt support)
              if (WebAssembly.Module.imports)
                WebAssembly.Module.imports(module).forEach(function (impt) {
                  var key = impt.module;
                  if (deps.indexOf(key) === -1) {
                    deps.push(key);
                    setters.push(function (m) {
                      importObj[key] = m;
                    });
                  }
                });
          
              return [deps, function (_export) {
                return {
                  setters: setters,
                  execute: function () {
                    return WebAssembly.instantiate(module, importObj)
                    .then(function (instance) {
                      _export(instance.exports);
                    });
                  }
                };
              }];
            });
          }
          else {
            throw Error(errMsg(4,  'Unknown module type "' + contentType + '"'));
          }
        });
      }
      return instantiate.apply(this, arguments);
    };
  })(typeof self !== 'undefined' ? self : global);

  var toStringTag$1 = typeof Symbol !== 'undefined' && Symbol.toStringTag;

  systemJSPrototype.get = function (id) {
    var load = this[REGISTRY][id];
    if (load && load.e === null && !load.E) {
      if (load.er)
        return null;
      return load.n;
    }
  };

  systemJSPrototype.set = function (id, module) {
    {
      try {
        // No page-relative URLs allowed
        new URL(id);
      } catch (err) {
        console.warn(Error(errMsg('W3', '"' + id + '" is not a valid URL to set in the module registry')));
      }
    }
    var ns;
    if (toStringTag$1 && module[toStringTag$1] === 'Module') {
      ns = module;
    }
    else {
      ns = Object.assign(Object.create(null), module);
      if (toStringTag$1)
        Object.defineProperty(ns, toStringTag$1, { value: 'Module' });
    }

    var done = Promise.resolve(ns);

    var load = this[REGISTRY][id] || (this[REGISTRY][id] = {
      id: id,
      i: [],
      h: false,
      d: [],
      e: null,
      er: undefined,
      E: undefined
    });

    if (load.e || load.E)
      return false;
    
    Object.assign(load, {
      n: ns,
      I: undefined,
      L: undefined,
      C: done
    });
    return ns;
  };

  systemJSPrototype.has = function (id) {
    var load = this[REGISTRY][id];
    return !!load;
  };

  // Delete function provided for hot-reloading use cases
  systemJSPrototype.delete = function (id) {
    var registry = this[REGISTRY];
    var load = registry[id];
    // in future we can support load.E case by failing load first
    // but that will require TLA callbacks to be implemented
    if (!load || load.e !== null || load.E)
      return false;

    var importerSetters = load.i;
    // remove from importerSetters
    // (release for gc)
    if (load.d)
      load.d.forEach(function (depLoad) {
        var importerIndex = depLoad.i.indexOf(load);
        if (importerIndex !== -1)
          depLoad.i.splice(importerIndex, 1);
      });
    delete registry[id];
    return function () {
      var load = registry[id];
      if (!load || !importerSetters || load.e !== null || load.E)
        return false;
      // add back the old setters
      importerSetters.forEach(function (setter) {
        load.i.push(setter);
        setter(load.n);
      });
      importerSetters = null;
    };
  };

  var iterator = typeof Symbol !== 'undefined' && Symbol.iterator;

  systemJSPrototype.entries = function () {
    var loader = this, keys = Object.keys(loader[REGISTRY]);
    var index = 0, ns, key;
    var result = {
      next: function () {
        while (
          (key = keys[index++]) !== undefined && 
          (ns = loader.get(key)) === undefined
        );
        return {
          done: key === undefined,
          value: key !== undefined && [key, ns]
        };
      }
    };

    result[iterator] = function() { return this };

    return result;
  };

}());

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! exports provided: routePrefix, routeRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routePrefix", function() { return routePrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeRegex", function() { return routeRegex; });
function routePrefix(prefix, location) {
    return location.pathname.startsWith(window.getOpenmrsSpaBase() + prefix);
}
function routeRegex(regex, location) {
    const result = regex.test(location.pathname.replace(window.getOpenmrsSpaBase(), ""));
    return result;
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: initializeSpa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeSpa", function() { return initializeSpa; });
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system */ "./src/system.ts");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale */ "./src/locale.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");



/**
 * Gets the microfrontend modules (apps). These are entries
 * in the import maps that end with "-app".
 * @param maps The value of the "imports" property of the
 * import maps.
 */
function getApps(maps) {
    return Object.keys(maps).filter((m) => m.endsWith("-app"));
}
/**
 * Loads the microfrontends (apps). Should be done *after* the
 * import maps initialized, i.e., after modules loaded.
 */
function loadApps() {
    return Object(_system__WEBPACK_IMPORTED_MODULE_0__["loadModules"])(getApps(Object(_system__WEBPACK_IMPORTED_MODULE_0__["getImportMaps"])()));
}
/**
 * Normalizes the activator function, i.e., if we receive a
 * string we'll prepend the SPA base (prefix). We'll also handle
 * the case of a supplied array.
 * @param activator The activator to preprocess.
 */
function preprocessActivator(activator) {
    if (Array.isArray(activator)) {
        const activators = activator.map(preprocessActivator);
        return (location) => activators.some((activator) => activator(location));
    }
    else if (typeof activator === "string") {
        return (location) => Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["routePrefix"])(activator, location);
    }
    else if (activator instanceof RegExp) {
        return (location) => Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["routeRegex"])(activator, location);
    }
    else {
        return activator;
    }
}
/**
 * Sets up the microfrontends (apps). Uses the defined export
 * from the root modules of the apps, which should export a
 * special function called "setupOpenMRS".
 * This function returns an object that is used to feed Single
 * SPA.
 */
function setupApps(modules) {
    for (const [appName, appExports] of modules) {
        const setup = appExports.setupOpenMRS;
        if (typeof setup === "function") {
            const result = setup();
            if (result && typeof result === "object") {
                System.import("single-spa").then(({ registerApplication }) => {
                    System.import("@openmrs/esm-extension-manager").then(({ registerExtension }) => {
                        var _a;
                        const availableExtensions = (_a = result.extensions) !== null && _a !== void 0 ? _a : [];
                        for (const { name, load } of availableExtensions) {
                            registerExtension({ name, load, appName });
                        }
                        registerApplication(appName, result.lifecycle, preprocessActivator(result.activate));
                    });
                });
            }
        }
    }
}
/**
 * Runs the shell by importing the translations and starting single SPA.
 */
function runShell() {
    return System.import("single-spa").then(({ start }) => {
        return Object(_locale__WEBPACK_IMPORTED_MODULE_1__["setupI18n"])()
            .catch((err) => console.error(`Failed to initialize translations`, err))
            .then(start);
    });
}
/**
 * Initializes the OpenMRS Microfrontend App Shell.
 * @param config The global configuration to apply.
 */
function initializeSpa(config) {
    const libs = [
        "single-spa",
        "@openmrs/esm-styleguide",
        "@openmrs/esm-extension-manager"
    ];
    window.openmrsBase = config.openmrsBase;
    window.spaBase = config.spaBase;
    window.getOpenmrsSpaBase = () => `${window.openmrsBase}${window.spaBase}/`;
    return Object(_system__WEBPACK_IMPORTED_MODULE_0__["loadModules"])(libs)
        .then(loadApps)
        .then(setupApps)
        .then(runShell);
}


/***/ }),

/***/ "./src/locale.ts":
/*!***********************!*\
  !*** ./src/locale.ts ***!
  \***********************/
/*! exports provided: setupI18n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupI18n", function() { return setupI18n; });
/* harmony import */ var i18next_icu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next-icu */ "./node_modules/i18next-icu/index.js");
/* harmony import */ var i18next_icu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(i18next_icu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next-xhr-backend */ "./node_modules/i18next-xhr-backend/dist/esm/i18nextXHRBackend.js");
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next-browser-languagedetector */ "./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js");



const languageChangeObserver = new MutationObserver(() => {
    const reDetect = undefined;
    window.i18next.changeLanguage(reDetect).catch((e) => {
        console.error("i18next failed to re-detect language");
        console.error(e);
    });
});
languageChangeObserver.observe(document.documentElement, {
    attributeFilter: ["lang"],
    attributes: true,
});
function decodeHtmlEntity(html) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = html;
    return textArea.value;
}
function setupI18n() {
    return Promise.all([
        System.import("i18next"),
        System.import("react-i18next"),
    ]).then(([i18next, { initReactI18next }]) => {
        window.i18next = i18next.default || i18next;
        return window.i18next
            .use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__["default"])
            .use(i18next_xhr_backend__WEBPACK_IMPORTED_MODULE_1__["default"])
            .use(initReactI18next)
            .use(i18next_icu__WEBPACK_IMPORTED_MODULE_0___default.a)
            .init({
            backend: {
                parse: (data) => data,
                loadPath: "{{lng}}|{{ns}}",
                ajax(url, _, callback) {
                    const [language, namespace] = url.split("|");
                    if (namespace === "translation") {
                        callback(null, { status: 404 });
                    }
                    else {
                        System.import(decodeHtmlEntity(namespace))
                            .then((m) => {
                            if (typeof m.importTranslation !== "function") {
                                throw Error(`Module ${namespace} does not export an importTranslation function`);
                            }
                            const importPromise = m.importTranslation(`./${language}.json`);
                            if (!(importPromise instanceof Promise)) {
                                throw Error(`Module ${namespace} exports an importTranslation function that does not return a promise. Did you forget to set require.context mode to 'lazy'?`);
                            }
                            return importPromise;
                        })
                            .then((json) => callback(json, { status: 200 }))
                            .catch((err) => {
                            console.error(err);
                            callback(null, { status: 404 });
                        });
                    }
                },
            },
            detection: {
                order: ["querystring", "htmlTag", "localStorage", "navigator"],
            },
            fallbackLng: "en",
        });
    });
}


/***/ }),

/***/ "./src/system.ts":
/*!***********************!*\
  !*** ./src/system.ts ***!
  \***********************/
/*! exports provided: getImportMaps, loadModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImportMaps", function() { return getImportMaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModules", function() { return loadModules; });
/* harmony import */ var import_map_overrides_dist_import_map_overrides__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! import-map-overrides/dist/import-map-overrides */ "./node_modules/import-map-overrides/dist/import-map-overrides.js");
/* harmony import */ var import_map_overrides_dist_import_map_overrides__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(import_map_overrides_dist_import_map_overrides__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var systemjs_dist_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! systemjs/dist/system */ "./node_modules/systemjs/dist/system.js");
/* harmony import */ var systemjs_dist_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(systemjs_dist_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var systemjs_dist_extras_amd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! systemjs/dist/extras/amd */ "./node_modules/systemjs/dist/extras/amd.js");
/* harmony import */ var systemjs_dist_extras_amd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(systemjs_dist_extras_amd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var systemjs_dist_extras_named_exports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! systemjs/dist/extras/named-exports */ "./node_modules/systemjs/dist/extras/named-exports.js");
/* harmony import */ var systemjs_dist_extras_named_exports__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(systemjs_dist_extras_named_exports__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var systemjs_dist_extras_named_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! systemjs/dist/extras/named-register */ "./node_modules/systemjs/dist/extras/named-register.js");
/* harmony import */ var systemjs_dist_extras_named_register__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(systemjs_dist_extras_named_register__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var systemjs_dist_extras_use_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! systemjs/dist/extras/use-default */ "./node_modules/systemjs/dist/extras/use-default.js");
/* harmony import */ var systemjs_dist_extras_use_default__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(systemjs_dist_extras_use_default__WEBPACK_IMPORTED_MODULE_5__);






/**
 * Gets the loaded import maps from SystemJS.
 * TODO: Once there is an official API for this we should
 * replace this function with the official API.
 */
function getImportMaps() {
    return Object.getOwnPropertySymbols(System)
        .map((sym) => System[sym])
        .filter((m) => typeof m.imports !== "undefined")
        .map((m) => m.imports)
        .pop();
}
/**
 * Loads all provided modules by their name. Performs a
 * SystemJS import.
 * @param modules The names of the modules to resolve.
 */
function loadModules(modules) {
    return Promise.all(modules.map((name) => System.import(name).then((value) => [
        name,
        value,
    ])));
}


/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** ./lib/locales (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ })));
//# sourceMappingURL=openmrs.js.map