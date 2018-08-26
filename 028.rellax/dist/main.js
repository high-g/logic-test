/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/style.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/sass-loader/lib/loader.js??ref--5-2!./src/style.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"* {\\n  padding: 0;\\n  margin: 0; }\\n\\n.ball {\\n  width: 100px;\\n  height: 100px;\\n  border-radius: 50px;\\n  position: absolute; }\\n\\n.bg-red {\\n  background: red; }\\n\\n.bg-blue {\\n  background: blue; }\\n\\n.bg-yellow {\\n  background: yellow; }\\n\\n.obj1 {\\n  top: 10px;\\n  left: 50px; }\\n\\n.obj2 {\\n  top: 10px;\\n  left: 130px; }\\n\\n.obj3 {\\n  top: 10px;\\n  left: 250px; }\\n\", \"\", {\"version\":3,\"sources\":[\"/Users/1-10tani/logic_test/028.rellax/src/src/style.scss\"],\"names\":[],\"mappings\":\"AAAA;EACC,WAAU;EACV,UAAS,EACT;;AAED;EACC,aAAY;EACZ,cAAa;EACb,oBAAmB;EACnB,mBAAkB,EAClB;;AAED;EAAS,gBAAe,EAAG;;AAC3B;EAAU,iBAAgB,EAAG;;AAC7B;EAAY,mBAAkB,EAAG;;AAEjC;EACC,UAAS;EACT,WAAU,EACV;;AACD;EACC,UAAS;EACT,YAAW,EACX;;AACD;EACC,UAAS;EACT,YAAW,EACX\",\"file\":\"style.scss\",\"sourcesContent\":[\"* {\\n\\tpadding: 0;\\n\\tmargin: 0;\\n}\\n\\n.ball {\\n\\twidth: 100px;\\n\\theight: 100px;\\n\\tborder-radius: 50px;\\n\\tposition: absolute;\\n}\\n\\n.bg-red {background: red;}\\n.bg-blue {background: blue;}\\n.bg-yellow {background: yellow;}\\n\\n.obj1 {\\n\\ttop: 10px;\\n\\tleft: 50px;\\n}\\n.obj2 {\\n\\ttop: 10px;\\n\\tleft: 130px;\\n}\\n.obj3 {\\n\\ttop: 10px;\\n\\tleft: 250px;\\n}\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader??ref--5-1!./node_modules/sass-loader/lib/loader.js??ref--5-2");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif (item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function (modules, mediaQuery) {\n\t\tif (typeof modules === \"string\") modules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor (var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif (typeof id === \"number\") alreadyImportedModules[id] = true;\n\t\t}\n\t\tfor (i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif (typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif (mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if (mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/rellax/rellax.js":
/*!***************************************!*\
  !*** ./node_modules/rellax/rellax.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n// ------------------------------------------\n// Rellax.js\n// Buttery smooth parallax library\n// Copyright (c) 2016 Moe Amaya (@moeamaya)\n// MIT license\n//\n// Thanks to Paraxify.js and Jaime Cabllero\n// for parallax concepts\n// ------------------------------------------\n\n(function (root, factory) {\n  if (true) {\n    // AMD. Register as an anonymous module.\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n})(this, function () {\n  var Rellax = function Rellax(el, options) {\n    \"use strict\";\n\n    var self = Object.create(Rellax.prototype);\n\n    var posY = 0;\n    var screenY = 0;\n    var posX = 0;\n    var screenX = 0;\n    var blocks = [];\n    var pause = true;\n\n    // check what requestAnimationFrame to use, and if\n    // it's not supported, use the onscroll event\n    var loop = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {\n      setTimeout(callback, 1000 / 60);\n    };\n\n    // check which transform property to use\n    var transformProp = window.transformProp || function () {\n      var testEl = document.createElement('div');\n      if (testEl.style.transform === null) {\n        var vendors = ['Webkit', 'Moz', 'ms'];\n        for (var vendor in vendors) {\n          if (testEl.style[vendors[vendor] + 'Transform'] !== undefined) {\n            return vendors[vendor] + 'Transform';\n          }\n        }\n      }\n      return 'transform';\n    }();\n\n    // Default Settings\n    self.options = {\n      speed: -2,\n      center: false,\n      wrapper: null,\n      round: true,\n      vertical: true,\n      horizontal: false,\n      callback: function callback() {}\n    };\n\n    // User defined options (might have more in the future)\n    if (options) {\n      Object.keys(options).forEach(function (key) {\n        self.options[key] = options[key];\n      });\n    }\n\n    // By default, rellax class\n    if (!el) {\n      el = '.rellax';\n    }\n\n    // check if el is a className or a node\n    var elements = typeof el === 'string' ? document.querySelectorAll(el) : [el];\n\n    // Now query selector\n    if (elements.length > 0) {\n      self.elems = elements;\n    }\n\n    // The elements don't exist\n    else {\n        throw new Error(\"The elements you're trying to select don't exist.\");\n      }\n\n    // Has a wrapper and it exists\n    if (self.options.wrapper) {\n      if (!self.options.wrapper.nodeType) {\n        var wrapper = document.querySelector(self.options.wrapper);\n\n        if (wrapper) {\n          self.options.wrapper = wrapper;\n        } else {\n          throw new Error(\"The wrapper you're trying to use don't exist.\");\n        }\n      }\n    }\n\n    // Get and cache initial position of all elements\n    var cacheBlocks = function cacheBlocks() {\n      for (var i = 0; i < self.elems.length; i++) {\n        var block = createBlock(self.elems[i]);\n        blocks.push(block);\n      }\n    };\n\n    // Let's kick this script off\n    // Build array for cached element values\n    var init = function init() {\n      for (var i = 0; i < blocks.length; i++) {\n        self.elems[i].style.cssText = blocks[i].style;\n      }\n\n      blocks = [];\n\n      screenY = window.innerHeight;\n      screenX = window.innerWidth;\n      setPosition();\n\n      cacheBlocks();\n\n      // If paused, unpause and set listener for window resizing events\n      if (pause) {\n        window.addEventListener('resize', init);\n        pause = false;\n      }\n      animate();\n    };\n\n    // We want to cache the parallax blocks'\n    // values: base, top, height, speed\n    // el: is dom object, return: el cache values\n    var createBlock = function createBlock(el) {\n      var dataPercentage = el.getAttribute('data-rellax-percentage');\n      var dataSpeed = el.getAttribute('data-rellax-speed');\n      var dataZindex = el.getAttribute('data-rellax-zindex') || 0;\n\n      // initializing at scrollY = 0 (top of browser), scrollX = 0 (left of browser)\n      // ensures elements are positioned based on HTML layout.\n      //\n      // If the element has the percentage attribute, the posY and posX needs to be\n      // the current scroll position's value, so that the elements are still positioned based on HTML layout\n      var wrapperPosY = self.options.wrapper ? self.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;\n      var posY = self.options.vertical ? dataPercentage || self.options.center ? wrapperPosY : 0 : 0;\n      var posX = self.options.horizontal ? dataPercentage || self.options.center ? window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;\n\n      var blockTop = posY + el.getBoundingClientRect().top;\n      var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;\n\n      var blockLeft = posX + el.getBoundingClientRect().left;\n      var blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth;\n\n      // apparently parallax equation everyone uses\n      var percentageY = dataPercentage ? dataPercentage : (posY - blockTop + screenY) / (blockHeight + screenY);\n      var percentageX = dataPercentage ? dataPercentage : (posX - blockLeft + screenX) / (blockWidth + screenX);\n      if (self.options.center) {\n        percentageX = 0.5;percentageY = 0.5;\n      }\n\n      // Optional individual block speed as data attr, otherwise global speed\n      var speed = dataSpeed ? dataSpeed : self.options.speed;\n\n      var bases = updatePosition(percentageX, percentageY, speed);\n\n      // ~~Store non-translate3d transforms~~\n      // Store inline styles and extract transforms\n      var style = el.style.cssText;\n      var transform = '';\n\n      // Check if there's an inline styled transform\n      if (style.indexOf('transform') >= 0) {\n        // Get the index of the transform\n        var index = style.indexOf('transform');\n\n        // Trim the style to the transform point and get the following semi-colon index\n        var trimmedStyle = style.slice(index);\n        var delimiter = trimmedStyle.indexOf(';');\n\n        // Remove \"transform\" string and save the attribute\n        if (delimiter) {\n          transform = \" \" + trimmedStyle.slice(11, delimiter).replace(/\\s/g, '');\n        } else {\n          transform = \" \" + trimmedStyle.slice(11).replace(/\\s/g, '');\n        }\n      }\n\n      return {\n        baseX: bases.x,\n        baseY: bases.y,\n        top: blockTop,\n        left: blockLeft,\n        height: blockHeight,\n        width: blockWidth,\n        speed: speed,\n        style: style,\n        transform: transform,\n        zindex: dataZindex\n      };\n    };\n\n    // set scroll position (posY, posX)\n    // side effect method is not ideal, but okay for now\n    // returns true if the scroll changed, false if nothing happened\n    var setPosition = function setPosition() {\n      var oldY = posY;\n      var oldX = posX;\n\n      posY = self.options.wrapper ? self.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;\n      posX = self.options.wrapper ? self.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;\n\n      if (oldY != posY && self.options.vertical) {\n        // scroll changed, return true\n        return true;\n      }\n\n      if (oldX != posX && self.options.horizontal) {\n        // scroll changed, return true\n        return true;\n      }\n\n      // scroll did not change\n      return false;\n    };\n\n    // Ahh a pure function, gets new transform value\n    // based on scrollPosition and speed\n    // Allow for decimal pixel values\n    var updatePosition = function updatePosition(percentageX, percentageY, speed) {\n      var result = {};\n      var valueX = speed * (100 * (1 - percentageX));\n      var valueY = speed * (100 * (1 - percentageY));\n\n      result.x = self.options.round ? Math.round(valueX) : Math.round(valueX * 100) / 100;\n      result.y = self.options.round ? Math.round(valueY) : Math.round(valueY * 100) / 100;\n\n      return result;\n    };\n\n    // Loop\n    var update = function update() {\n      if (setPosition() && pause === false) {\n        animate();\n      }\n\n      // loop again\n      loop(update);\n    };\n\n    // Transform3d on parallax element\n    var animate = function animate() {\n      var positions;\n      for (var i = 0; i < self.elems.length; i++) {\n        var percentageY = (posY - blocks[i].top + screenY) / (blocks[i].height + screenY);\n        var percentageX = (posX - blocks[i].left + screenX) / (blocks[i].width + screenX);\n\n        // Subtracting initialize value, so element stays in same spot as HTML\n        positions = updatePosition(percentageX, percentageY, blocks[i].speed); // - blocks[i].baseX;\n        var positionY = positions.y - blocks[i].baseY;\n        var positionX = positions.x - blocks[i].baseX;\n\n        var zindex = blocks[i].zindex;\n\n        // Move that element\n        // (Set the new translation and append initial inline transforms.)\n        var translate = 'translate3d(' + (self.options.horizontal ? positionX : '0') + 'px,' + (self.options.vertical ? positionY : '0') + 'px,' + zindex + 'px) ' + blocks[i].transform;\n        self.elems[i].style[transformProp] = translate;\n      }\n      self.options.callback(positions);\n    };\n\n    self.destroy = function () {\n      for (var i = 0; i < self.elems.length; i++) {\n        self.elems[i].style.cssText = blocks[i].style;\n      }\n\n      // Remove resize event listener if not pause, and pause\n      if (!pause) {\n        window.removeEventListener('resize', init);\n        pause = true;\n      }\n    };\n\n    // Init\n    init();\n\n    // Start the loop\n    update();\n\n    // Allow to recalculate the initial values whenever we want\n    self.refresh = init;\n\n    return self;\n  };\n  return Rellax;\n});\n\n//# sourceURL=webpack:///./node_modules/rellax/rellax.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n\t// get current location\n\tvar location = typeof window !== \"undefined\" && window.location;\n\n\tif (!location) {\n\t\tthrow new Error(\"fixUrls requires window.location\");\n\t}\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t\treturn css;\n\t}\n\n\tvar baseUrl = location.protocol + \"//\" + location.host;\n\tvar currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n This regular expression is just a way to recursively match brackets within\n a string.\n \t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n    (  = Start a capturing group\n      (?:  = Start a non-capturing group\n          [^)(]  = Match anything that isn't a parentheses\n          |  = OR\n          \\(  = Match a start parentheses\n              (?:  = Start another non-capturing groups\n                  [^)(]+  = Match anything that isn't a parentheses\n                  |  = OR\n                  \\(  = Match a start parentheses\n                      [^)(]*  = Match anything that isn't a parentheses\n                  \\)  = Match a end parentheses\n              )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n  \\)  = Match a close parens\n \t /gi  = Get all matches, not the first.  Be case insensitive.\n  */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function (fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl.trim().replace(/^\"(.*)\"$/, function (o, $1) {\n\t\t\treturn $1;\n\t\t}).replace(/^'(.*)'$/, function (o, $1) {\n\t\t\treturn $1;\n\t\t});\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t\treturn fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t\t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rellax */ \"./node_modules/rellax/rellax.js\");\n/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar rellax = new rellax__WEBPACK_IMPORTED_MODULE_0___default.a('.rellax', {\n\tcenter: true\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader??ref--5-1!../node_modules/sass-loader/lib/loader.js??ref--5-2!./style.scss */ \"./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });