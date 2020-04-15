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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/array.ts":
/*!**********************!*\
  !*** ./src/array.ts ***!
  \**********************/
/*! exports provided: chunk, compact, concat, difference, differenceBy, drop, dropRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return chunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return compact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return difference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "differenceBy", function() { return differenceBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return drop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropRight", function() { return dropRight; });
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var chunk = function (array, size) {
    var s = size || 1;
    var result = new Array();
    for (var i = 0; i < array.length; i++) {
        if (i % s === 0) {
            result = __spreadArrays(result, [array.slice(i, i + s)]);
        }
    }
    return result;
};
var compact = function (array) {
    return array.filter(function (item) {
        return Boolean(item);
    });
};
var concat = function (array) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return values.reduce(function (acc, cur) {
        return acc.concat(cur);
    }, array);
};
var difference = function (array, values) {
    return array.filter(function (element) { return !values.includes(element); });
};
var differenceBy = function (array, values, iteratee) {
    return array.filter(function (element) {
        return values.every(function (value) {
            return iteratee(value) != iteratee(element);
        });
    });
};
// TODO: add differenceWith method
var drop = function (array, n) {
    if (n === void 0) { n = 1; }
    array.splice(0, n);
    return array;
};
var dropRight = function (array, n) {
    if (n === void 0) { n = 1; }
    n ? array.splice(-n) : null;
    return array;
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./src/array.ts");

/*
 ** chunk
 */
// console.log(chunk(["a", "b", "c", "d"], 2)); // => [['a', 'b'], ['c', 'd']]
// console.log(chunk(["a", "b", "c", "d"], 3)); // => [['a', 'b', 'c'], ['d']]
/*
 ** compact
 */
// console.log(compact([0, 1, false, 2, "", 3])); // => [1, 2, 3]
/*
 ** concat
 */
// var array = [1];
// var other = concat(array, 2, [3], [[4]]);
// console.log(other); // => [1, 2, 3, [4]]
// console.log(array); // => [1]
/*
 ** difference
 */
// console.log(difference([2, 1], [2, 3])); // => [1]
/*
 ** differenceBy
 */
// console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)); // => [1.2]
/*
 ** drop
 */
// console.log(drop([1, 2, 3])); // => [2, 3]
// console.log(drop([1, 2, 3], 2)); // => [3]
// console.log(drop([1, 2, 3], 5)); // => []
// console.log(drop([1, 2, 3], 0)); // => [1, 2, 3]
/*
 ** dropRight
 */
console.log(Object(_array__WEBPACK_IMPORTED_MODULE_0__["dropRight"])([1, 2, 3])); // => [1, 2]
console.log(Object(_array__WEBPACK_IMPORTED_MODULE_0__["dropRight"])([1, 2, 3], 2)); // => [1]
console.log(Object(_array__WEBPACK_IMPORTED_MODULE_0__["dropRight"])([1, 2, 3], 5)); // => []
console.log(Object(_array__WEBPACK_IMPORTED_MODULE_0__["dropRight"])([1, 2, 3], 0)); // => [1, 2, 3]


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FycmF5LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZPLElBQU0sS0FBSyxHQUFHLFVBQWEsS0FBVSxFQUFFLElBQVk7SUFDeEQsSUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztJQUNwQixJQUFJLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBRXpCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDZixNQUFNLGtCQUFP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QyxRQUFRO0FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0RBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgY29uc3QgY2h1bmsgPSBmdW5jdGlvbiA8VD4oYXJyYXk6IFRbXSwgc2l6ZTogbnVtYmVyKTogVFtdIHtcclxuICBjb25zdCBzID0gc2l6ZSB8fCAxO1xyXG4gIGxldCByZXN1bHQgPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKGkgJSBzID09PSAwKSB7XHJcbiAgICAgIHJlc3VsdCA9IFsuLi5yZXN1bHQsIGFycmF5LnNsaWNlKGksIGkgKyBzKV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbXBhY3QgPSBmdW5jdGlvbiA8VD4oYXJyYXk6IFRbXSk6IFRbXSB7XHJcbiAgcmV0dXJuIGFycmF5LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIEJvb2xlYW4oaXRlbSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29uY2F0ID0gZnVuY3Rpb24gPFQsIFUgZXh0ZW5kcyBhbnlbXT4oYXJyYXk6IFRbXSwgLi4udmFsdWVzOiBVKSB7XHJcbiAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoKGFjYywgY3VyKSA9PiB7XHJcbiAgICByZXR1cm4gYWNjLmNvbmNhdChjdXIpO1xyXG4gIH0sIGFycmF5KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkaWZmZXJlbmNlID0gZnVuY3Rpb24gPFQ+KGFycmF5OiBUW10sIHZhbHVlczogVFtdKSB7XHJcbiAgcmV0dXJuIGFycmF5LmZpbHRlcigoZWxlbWVudCkgPT4gIXZhbHVlcy5pbmNsdWRlcyhlbGVtZW50KSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGlmZmVyZW5jZUJ5ID0gZnVuY3Rpb24gPFQ+KFxyXG4gIGFycmF5OiBUW10sXHJcbiAgdmFsdWVzOiBUW10sXHJcbiAgaXRlcmF0ZWU6IGFueVxyXG4pIHtcclxuICByZXR1cm4gYXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiB7XHJcbiAgICByZXR1cm4gdmFsdWVzLmV2ZXJ5KCh2YWx1ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gaXRlcmF0ZWUodmFsdWUpICE9IGl0ZXJhdGVlKGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyBUT0RPOiBhZGQgZGlmZmVyZW5jZVdpdGggbWV0aG9kXHJcblxyXG5leHBvcnQgY29uc3QgZHJvcCA9IDxUPihhcnJheTogVFtdLCBuOiBudW1iZXIgPSAxKSA9PiB7XHJcbiAgYXJyYXkuc3BsaWNlKDAsIG4pO1xyXG4gIHJldHVybiBhcnJheTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkcm9wUmlnaHQgPSA8VD4oYXJyYXk6IFRbXSwgbjogbnVtYmVyID0gMSkgPT4ge1xyXG4gIG4gPyBhcnJheS5zcGxpY2UoLW4pIDogbnVsbDtcclxuICByZXR1cm4gYXJyYXk7XHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgY2h1bmssXHJcbiAgY29tcGFjdCxcclxuICBjb25jYXQsXHJcbiAgZGlmZmVyZW5jZSxcclxuICBkaWZmZXJlbmNlQnksXHJcbiAgZHJvcCxcclxuICBkcm9wUmlnaHQsXHJcbn0gZnJvbSBcIi4vYXJyYXlcIjtcclxuXHJcbi8qXHJcbiAqKiBjaHVua1xyXG4gKi9cclxuLy8gY29uc29sZS5sb2coY2h1bmsoW1wiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiXSwgMikpOyAvLyA9PiBbWydhJywgJ2InXSwgWydjJywgJ2QnXV1cclxuLy8gY29uc29sZS5sb2coY2h1bmsoW1wiYVwiLCBcImJcIiwgXCJjXCIsIFwiZFwiXSwgMykpOyAvLyA9PiBbWydhJywgJ2InLCAnYyddLCBbJ2QnXV1cclxuXHJcbi8qXHJcbiAqKiBjb21wYWN0XHJcbiAqL1xyXG4vLyBjb25zb2xlLmxvZyhjb21wYWN0KFswLCAxLCBmYWxzZSwgMiwgXCJcIiwgM10pKTsgLy8gPT4gWzEsIDIsIDNdXHJcblxyXG4vKlxyXG4gKiogY29uY2F0XHJcbiAqL1xyXG4vLyB2YXIgYXJyYXkgPSBbMV07XHJcbi8vIHZhciBvdGhlciA9IGNvbmNhdChhcnJheSwgMiwgWzNdLCBbWzRdXSk7XHJcbi8vIGNvbnNvbGUubG9nKG90aGVyKTsgLy8gPT4gWzEsIDIsIDMsIFs0XV1cclxuLy8gY29uc29sZS5sb2coYXJyYXkpOyAvLyA9PiBbMV1cclxuXHJcbi8qXHJcbiAqKiBkaWZmZXJlbmNlXHJcbiAqL1xyXG4vLyBjb25zb2xlLmxvZyhkaWZmZXJlbmNlKFsyLCAxXSwgWzIsIDNdKSk7IC8vID0+IFsxXVxyXG5cclxuLypcclxuICoqIGRpZmZlcmVuY2VCeVxyXG4gKi9cclxuLy8gY29uc29sZS5sb2coZGlmZmVyZW5jZUJ5KFsyLjEsIDEuMl0sIFsyLjMsIDMuNF0sIE1hdGguZmxvb3IpKTsgLy8gPT4gWzEuMl1cclxuXHJcbi8qXHJcbiAqKiBkcm9wXHJcbiAqL1xyXG4vLyBjb25zb2xlLmxvZyhkcm9wKFsxLCAyLCAzXSkpOyAvLyA9PiBbMiwgM11cclxuLy8gY29uc29sZS5sb2coZHJvcChbMSwgMiwgM10sIDIpKTsgLy8gPT4gWzNdXHJcbi8vIGNvbnNvbGUubG9nKGRyb3AoWzEsIDIsIDNdLCA1KSk7IC8vID0+IFtdXHJcbi8vIGNvbnNvbGUubG9nKGRyb3AoWzEsIDIsIDNdLCAwKSk7IC8vID0+IFsxLCAyLCAzXVxyXG5cclxuLypcclxuICoqIGRyb3BSaWdodFxyXG4gKi9cclxuY29uc29sZS5sb2coZHJvcFJpZ2h0KFsxLCAyLCAzXSkpOyAvLyA9PiBbMSwgMl1cclxuY29uc29sZS5sb2coZHJvcFJpZ2h0KFsxLCAyLCAzXSwgMikpOyAvLyA9PiBbMV1cclxuY29uc29sZS5sb2coZHJvcFJpZ2h0KFsxLCAyLCAzXSwgNSkpOyAvLyA9PiBbXVxyXG5jb25zb2xlLmxvZyhkcm9wUmlnaHQoWzEsIDIsIDNdLCAwKSk7IC8vID0+IFsxLCAyLCAzXVxyXG4iXSwic291cmNlUm9vdCI6IiJ9