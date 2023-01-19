/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sliders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliders */ \"./src/js/sliders.js\");\n/* harmony import */ var _mobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobileMenu */ \"./src/js/mobileMenu.js\");\n\n\n\nfunction headerScroll() {\n  var header = document.querySelector('.header');\n  document.addEventListener('scroll', function () {\n    if (window.scrollY > 0) {\n      header.classList.add('header--scroll');\n    } else {\n      header.classList.remove('header--scroll');\n    }\n  });\n}\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  headerScroll();\n  Object(_sliders__WEBPACK_IMPORTED_MODULE_0__[\"initMainSlider\"])();\n  Object(_sliders__WEBPACK_IMPORTED_MODULE_0__[\"initReviewsSlider\"])();\n  Object(_mobileMenu__WEBPACK_IMPORTED_MODULE_1__[\"toggleMobileMenu\"])();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzPzVmY2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdE1haW5TbGlkZXIsIGluaXRSZXZpZXdzU2xpZGVyIH0gZnJvbSBcIi4vc2xpZGVyc1wiO1xuaW1wb3J0IHsgdG9nZ2xlTW9iaWxlTWVudSB9IGZyb20gXCIuL21vYmlsZU1lbnVcIjtcblxuZnVuY3Rpb24gaGVhZGVyU2Nyb2xsKCkge1xuICB2YXIgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMCkge1xuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci0tc2Nyb2xsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItLXNjcm9sbCcpO1xuICAgIH1cbiAgfSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIGhlYWRlclNjcm9sbCgpO1xuICBpbml0TWFpblNsaWRlcigpO1xuICBpbml0UmV2aWV3c1NsaWRlcigpO1xuICB0b2dnbGVNb2JpbGVNZW51KCk7XG59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/js/mobileMenu.js":
/*!******************************!*\
  !*** ./src/js/mobileMenu.js ***!
  \******************************/
/*! exports provided: toggleMobileMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleMobileMenu\", function() { return toggleMobileMenu; });\nfunction toggleMobileMenu() {\n  var burger = document.querySelector('.header__burger');\n  var mobileMenu = document.querySelector('.mobile-menu');\n  var mobileMenuClose = document.querySelector('.mobile-menu__close');\n  var mobileMenuCover = document.querySelector('.mobile-menu__cover');\n  var mobileWrapper = document.querySelector('.mobile-menu__wrapper');\n  burger.addEventListener('click', openMenu);\n  mobileMenuClose.addEventListener('click', closeMenu);\n  mobileMenuCover.addEventListener('click', closeMenu);\n\n  function openMenu() {\n    mobileMenu.classList.add('mobile-menu--active');\n    setTimeout(function () {\n      mobileWrapper.classList.add('mobile-menu__wrapper--active');\n    }, 1);\n    document.body.style.overflow = 'hidden';\n  }\n\n  function closeMenu() {\n    mobileMenu.classList.remove('mobile-menu--active');\n    mobileWrapper.classList.remove('mobile-menu__wrapper--active');\n    document.body.removeAttribute('style');\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbW9iaWxlTWVudS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9tb2JpbGVNZW51LmpzPzg5OGQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZU1vYmlsZU1lbnUoKSB7XG4gIHZhciBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idXJnZXInKTtcbiAgdmFyIG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW1lbnUnKTtcbiAgdmFyIG1vYmlsZU1lbnVDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbWVudV9fY2xvc2UnKTtcbiAgdmFyIG1vYmlsZU1lbnVDb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUtbWVudV9fY292ZXInKTtcbiAgdmFyIG1vYmlsZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9iaWxlLW1lbnVfX3dyYXBwZXInKTtcbiAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1lbnUpO1xuICBtb2JpbGVNZW51Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpO1xuICBtb2JpbGVNZW51Q292ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpO1xuXG4gIGZ1bmN0aW9uIG9wZW5NZW51KCkge1xuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZCgnbW9iaWxlLW1lbnUtLWFjdGl2ZScpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgbW9iaWxlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdtb2JpbGUtbWVudV9fd3JhcHBlci0tYWN0aXZlJyk7XG4gICAgfSwgMSk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbW9iaWxlLW1lbnUtLWFjdGl2ZScpO1xuICAgIG1vYmlsZVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnbW9iaWxlLW1lbnVfX3dyYXBwZXItLWFjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICB9XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/mobileMenu.js\n");

/***/ }),

/***/ "./src/js/sliders.js":
/*!***************************!*\
  !*** ./src/js/sliders.js ***!
  \***************************/
/*! exports provided: initMainSlider, initReviewsSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initMainSlider\", function() { return initMainSlider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initReviewsSlider\", function() { return initReviewsSlider; });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n\nfunction initMainSlider() {\n  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.main-slider', {\n    slidesPerView: 'auto'\n  });\n  document.querySelector('.main-slider .swiper-button-next').addEventListener('click', function () {\n    return swiper.slideNext();\n  });\n  document.querySelector('.main-slider .swiper-button-prev').addEventListener('click', function () {\n    return swiper.slidePrev();\n  });\n}\nfunction initReviewsSlider() {\n  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.reviews__slider', {\n    slidesPerView: 'auto'\n  });\n  document.querySelector('.reviews .swiper-button-next').addEventListener('click', function () {\n    return swiper.slideNext();\n  });\n  document.querySelector('.reviews .swiper-button-prev').addEventListener('click', function () {\n    return swiper.slidePrev();\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2xpZGVycy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9zbGlkZXJzLmpzPzFlNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRNYWluU2xpZGVyKCkge1xuICB2YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLm1haW4tc2xpZGVyJywge1xuICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJ1xuICB9KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc3dpcGVyLnNsaWRlTmV4dCgpO1xuICB9KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXYnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc3dpcGVyLnNsaWRlUHJldigpO1xuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbml0UmV2aWV3c1NsaWRlcigpIHtcbiAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5yZXZpZXdzX19zbGlkZXInLCB7XG4gICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nXG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV2aWV3cyAuc3dpcGVyLWJ1dHRvbi1uZXh0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHN3aXBlci5zbGlkZU5leHQoKTtcbiAgfSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXZpZXdzIC5zd2lwZXItYnV0dG9uLXByZXYnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc3dpcGVyLnNsaWRlUHJldigpO1xuICB9KTtcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/sliders.js\n");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL21haW4uc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzP2U0NTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/main.scss\n");

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/main.js ./src/styles/main.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/dmitry/Projects/Haron/src/js/main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! /home/dmitry/Projects/Haron/src/styles/main.scss */"./src/styles/main.scss");


/***/ })

/******/ });