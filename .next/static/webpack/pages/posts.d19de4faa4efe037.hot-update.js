"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./pages/posts/index.tsx":
/*!*******************************!*\
  !*** ./pages/posts/index.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar PostsIndex = function(props) {\n    var posts = props.posts;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"文章列表\"\n            }, void 0, false, {\n                fileName: \"/Users/songen/songFiles/2022/next-blog/pages/posts/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, _this),\n            posts.map(function(post) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/posts/[id]\",\n                        as: \"/posts/\".concat(post.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"/Users/songen/songFiles/2022/next-blog/pages/posts/index.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/songen/songFiles/2022/next-blog/pages/posts/index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, _this)\n                }, post.id, false, {\n                    fileName: \"/Users/songen/songFiles/2022/next-blog/pages/posts/index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 30\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/songen/songFiles/2022/next-blog/pages/posts/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, _this);\n};\n_c = PostsIndex;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostsIndex);\nvar _c;\n$RefreshReg$(_c, \"PostsIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUM2QjtBQUNIO0FBTTFCLElBQU1FLFVBQVUsR0FBa0IsU0FBQ0MsS0FBSyxFQUFHO0lBQ3ZDLElBQU0sS0FBTSxHQUFJQSxLQUFLLENBQWRDLEtBQUs7SUFFWixxQkFDSSw4REFBQ0MsS0FBRzs7MEJBQ0EsOERBQUNDLElBQUU7MEJBQUMsTUFBSTs7Ozs7cUJBQUs7WUFDWkYsS0FBSyxDQUFDRyxHQUFHLENBQUNDLFNBQUFBLElBQUk7cUNBQUUsOERBQUNILEtBQUc7OEJBQ2pCLDRFQUFDTCxrREFBSTt3QkFBQ1MsSUFBSSxFQUFDLGFBQWE7d0JBQUNDLEVBQUUsRUFBRSxTQUFRLENBQVUsT0FBUkYsSUFBSSxDQUFDRyxFQUFFLENBQUU7a0NBQzVDLDRFQUFDQyxHQUFDO3NDQUFFSixJQUFJLENBQUNLLEtBQUs7Ozs7O2lDQUFLOzs7Ozs2QkFDaEI7bUJBSGdCTCxJQUFJLENBQUNHLEVBQUU7Ozs7eUJBSzVCO2FBQUEsQ0FBQzs7Ozs7O2FBQ0wsQ0FDVDtBQUNMLENBQUM7QUFkS1QsS0FBQUEsVUFBVTs7QUFnQmhCLCtEQUFlQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL2luZGV4LnRzeD83Mjg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dFBhZ2V9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZVBvc3RzfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlUG9zdHNcIjtcbmltcG9ydCB7Z2V0UG9zdHN9IGZyb20gXCIuLi8uLi9saWIvcG9zdHNcIjtcbmludGVyZmFjZSBQcm9wc3tcbiAgICBwb3N0czpQb3N0c1tdXG59XG5jb25zdCBQb3N0c0luZGV4Ok5leHRQYWdlPFByb3BzPiA9KHByb3BzKT0+e1xuICAgIGNvbnN0IHtwb3N0c30gPSBwcm9wc1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPuaWh+eroOWIl+ihqDwvaDE+XG4gICAgICAgICAgICB7cG9zdHMubWFwKHBvc3Q9PjxkaXYga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3RzL1tpZF1cIiBhcz17YC9wb3N0cy8ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDwvZGl2Pil9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdHNJbmRleFxuXG4vLyBTU0dcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpPT57XG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRQb3N0cygpXG4gICAgcmV0dXJue1xuICAgICAgICBwcm9wczp7XG4gICAgICAgICAgICBwb3N0czpKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHBvc3RzKSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIlBvc3RzSW5kZXgiLCJwcm9wcyIsInBvc3RzIiwiZGl2IiwiaDEiLCJtYXAiLCJwb3N0IiwiaHJlZiIsImFzIiwiaWQiLCJhIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/index.tsx\n"));

/***/ })

});