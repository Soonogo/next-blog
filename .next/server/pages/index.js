"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ua-parser-js */ \"ua-parser-js\");\n/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Index = (props)=>{\n    const { browser  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            background: \"lightblue\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\n                \"浏览器是\",\n                browser.name\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/songen/songFiles/2022/next-blog/pages/index.tsx\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/songen/songFiles/2022/next-blog/pages/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n// SSR\nconst getServerSideProps = async (context)=>{\n    const ua = context.req.headers[\"user-agent\"];\n    const result = new (ua_parser_js__WEBPACK_IMPORTED_MODULE_1___default())(ua).getBrowser();\n    console.log(result);\n    return {\n        props: {\n            browser: result\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDb0M7QUFRcEMsTUFBTUMsS0FBSyxHQUFrQixDQUFDQyxLQUFLLEdBQUk7SUFDbkMsTUFBTSxFQUFDQyxPQUFPLEdBQUMsR0FBQ0QsS0FBSztJQUN2QixxQkFDRSw4REFBQ0UsS0FBRztRQUFFQyxLQUFLLEVBQUU7WUFBQ0MsVUFBVSxFQUFDLFdBQVc7U0FBQztrQkFDakMsNEVBQUNDLElBQUU7O2dCQUFDLE1BQUk7Z0JBQUNKLE9BQU8sQ0FBQ0ssSUFBSTs7Ozs7O3FCQUFNOzs7OztpQkFFekIsQ0FDUDtBQUNILENBQUM7QUFDRCxpRUFBZVAsS0FBSztBQUVwQixNQUFNO0FBQ0MsTUFBTVEsa0JBQWtCLEdBQW9CLE9BQU9DLE9BQU8sR0FBRztJQUNoRSxNQUFNQyxFQUFFLEdBQUdELE9BQU8sQ0FBQ0UsR0FBRyxDQUFDQyxPQUFPLENBQUMsWUFBWSxDQUFDO0lBQzVDLE1BQU1DLE1BQU0sR0FBRyxJQUFJZCxxREFBUSxDQUFDVyxFQUFFLENBQUMsQ0FBQ0ksVUFBVSxFQUFFO0lBQzVDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDLENBQUM7SUFDcEIsT0FBTTtRQUNGWixLQUFLLEVBQUM7WUFDRkMsT0FBTyxFQUFDVyxNQUFNO1NBQ2pCO0tBQ0o7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1ibG9nLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHZXRTZXJ2ZXJTaWRlUHJvcHMsIE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgVUFQYXJzZXIgZnJvbSAndWEtcGFyc2VyLWpzJztcbmludGVyZmFjZSBQcm9wc3tcbiAgICBicm93c2VyOntcbiAgICAgICAgbmFtZTpzdHJpbmdcbiAgICAgICAgdmVyc2lvbjpzdHJpbmdcbiAgICAgICAgbWFqb3I6c3RyaW5nXG4gICAgfVxufVxuY29uc3QgSW5kZXg6TmV4dFBhZ2U8UHJvcHM+ID0ocHJvcHMpPT4ge1xuICAgIGNvbnN0IHticm93c2VyfT1wcm9wc1xuICByZXR1cm4gKFxuICAgIDxkaXYgIHN0eWxlPXt7YmFja2dyb3VuZDpcImxpZ2h0Ymx1ZVwifX0+XG4gICAgICAgIDxoMT7mtY/op4jlmajmmK97YnJvd3Nlci5uYW1lfTwvaDE+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuLy8gU1NSXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOkdldFNlcnZlclNpZGVQcm9wcz1hc3luYyAoY29udGV4dCk9PntcbiAgICBjb25zdCB1YSA9IGNvbnRleHQucmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXVxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVQVBhcnNlcih1YSkuZ2V0QnJvd3NlcigpXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICByZXR1cm57XG4gICAgICAgIHByb3BzOntcbiAgICAgICAgICAgIGJyb3dzZXI6cmVzdWx0XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbIlVBUGFyc2VyIiwiSW5kZXgiLCJwcm9wcyIsImJyb3dzZXIiLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmQiLCJoMSIsIm5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwidWEiLCJyZXEiLCJoZWFkZXJzIiwicmVzdWx0IiwiZ2V0QnJvd3NlciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "ua-parser-js":
/*!*******************************!*\
  !*** external "ua-parser-js" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("ua-parser-js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();