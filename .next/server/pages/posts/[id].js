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
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./lib/posts.tsx":
/*!***********************!*\
  !*** ./lib/posts.tsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPost\": () => (/* binding */ getPost),\n/* harmony export */   \"getPostIds\": () => (/* binding */ getPostIds),\n/* harmony export */   \"getPosts\": () => (/* binding */ getPosts)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ \"marked\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_3__]);\nmarked__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst markdown = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"markdown\");\nconst getPosts = async ()=>{\n    const filename = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readdir(markdown);\n    const posts = filename.map((filename)=>{\n        const fullPath = path__WEBPACK_IMPORTED_MODULE_0___default().join(markdown, filename);\n        const id = filename.replace(/\\.md$/, \"\");\n        const text = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(fullPath, \"utf-8\");\n        const { data: { title , date  } , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(text);\n        return {\n            id,\n            date,\n            title\n        };\n    });\n    console.log(posts);\n    return posts;\n};\nconst getPost = async (id)=>{\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_0___default().join(markdown, id + \".md\");\n    const text = fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(fullPath, \"utf-8\");\n    const { data: { title , date  } , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(text);\n    const htmlContent = (0,marked__WEBPACK_IMPORTED_MODULE_3__.marked)(content);\n    return JSON.parse(JSON.stringify({\n        id,\n        date,\n        title,\n        content,\n        htmlContent\n    }));\n};\nconst getPostIds = async ()=>{\n    const filename = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readdir(markdown);\n    return filename.map((r)=>r.replace(/\\.md$/g, \"\"));\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcG9zdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDa0I7QUFDakI7QUFDUTtBQUNEO0FBRWhDLE1BQU1NLFFBQVEsR0FBR04sZ0RBQVMsQ0FBQ1EsT0FBTyxDQUFDQyxHQUFHLEVBQUUsRUFBRSxVQUFVLENBQUM7QUFFOUMsTUFBTUMsUUFBUSxHQUFHLFVBQVk7SUFDaEMsTUFBTUMsUUFBUSxHQUFHLE1BQU1ULGdEQUFrQixDQUFDSSxRQUFRLENBQUM7SUFDbkQsTUFBTU8sS0FBSyxHQUFHRixRQUFRLENBQUNHLEdBQUcsQ0FBQ0gsQ0FBQUEsUUFBUSxHQUFJO1FBQ25DLE1BQU1JLFFBQVEsR0FBR2YsZ0RBQVMsQ0FBQ00sUUFBUSxFQUFFSyxRQUFRLENBQUM7UUFDOUMsTUFBTUssRUFBRSxHQUFHTCxRQUFRLENBQUNNLE9BQU8sVUFBVSxFQUFFLENBQUM7UUFDeEMsTUFBTUMsSUFBSSxHQUFHZiw0Q0FBZSxDQUFDWSxRQUFRLEVBQUUsT0FBTyxDQUFDO1FBQy9DLE1BQU0sRUFBQ0ssSUFBSSxFQUFFLEVBQUNDLEtBQUssR0FBRUMsSUFBSSxHQUFDLEdBQUVDLE9BQU8sR0FBQyxHQUFHbkIsa0RBQU0sQ0FBQ2MsSUFBSSxDQUFDO1FBQ25ELE9BQU87WUFBQ0YsRUFBRTtZQUFFTSxJQUFJO1lBQUVELEtBQUs7U0FBQztJQUM1QixDQUFDLENBQUM7SUFDRkcsT0FBTyxDQUFDQyxHQUFHLENBQUNaLEtBQUssQ0FBQyxDQUFDO0lBQ25CLE9BQU9BLEtBQUs7QUFDaEIsQ0FBQztBQUVNLE1BQU1hLE9BQU8sR0FBRyxPQUFPVixFQUFTLEdBQUs7SUFDeEMsTUFBTUQsUUFBUSxHQUFHZixnREFBUyxDQUFDTSxRQUFRLEVBQUVVLEVBQUUsR0FBQyxLQUFLLENBQUM7SUFDOUMsTUFBTUUsSUFBSSxHQUFHZiw0Q0FBZSxDQUFDWSxRQUFRLEVBQUUsT0FBTyxDQUFDO0lBQy9DLE1BQU0sRUFBQ0ssSUFBSSxFQUFFLEVBQUNDLEtBQUssR0FBRUMsSUFBSSxHQUFDLEdBQUVDLE9BQU8sR0FBQyxHQUFHbkIsa0RBQU0sQ0FBQ2MsSUFBSSxDQUFDO0lBQ25ELE1BQU1TLFdBQVcsR0FBR3RCLDhDQUFNLENBQUNrQixPQUFPLENBQUM7SUFDbkMsT0FBT0ssSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDO1FBQUNkLEVBQUU7UUFBRU0sSUFBSTtRQUFFRCxLQUFLO1FBQUNFLE9BQU87UUFBQ0ksV0FBVztLQUFDLENBQUMsQ0FBQztBQUM1RSxDQUFDO0FBRU0sTUFBTUksVUFBVSxHQUFDLFVBQVU7SUFDOUIsTUFBTXBCLFFBQVEsR0FBRyxNQUFNVCxnREFBa0IsQ0FBQ0ksUUFBUSxDQUFDO0lBQ25ELE9BQU9LLFFBQVEsQ0FBQ0csR0FBRyxDQUFDa0IsQ0FBQUEsQ0FBQyxHQUFFQSxDQUFDLENBQUNmLE9BQU8sV0FBVSxFQUFFLENBQUMsQ0FBQztBQUVsRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1ibG9nLy4vbGliL3Bvc3RzLnRzeD8yYjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQge3Byb21pc2VzIGFzIGZzUHJvbWlzZXN9IGZyb20gXCJmc1wiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xuaW1wb3J0IHsgbWFya2VkIH0gZnJvbSBcIm1hcmtlZFwiO1xuXG5jb25zdCBtYXJrZG93biA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnbWFya2Rvd24nKTtcblxuZXhwb3J0IGNvbnN0IGdldFBvc3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGZpbGVuYW1lID0gYXdhaXQgZnNQcm9taXNlcy5yZWFkZGlyKG1hcmtkb3duKVxuICAgIGNvbnN0IHBvc3RzID0gZmlsZW5hbWUubWFwKGZpbGVuYW1lID0+IHtcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4obWFya2Rvd24sIGZpbGVuYW1lKVxuICAgICAgICBjb25zdCBpZCA9IGZpbGVuYW1lLnJlcGxhY2UoL1xcLm1kJC8sICcnKVxuICAgICAgICBjb25zdCB0ZXh0ID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCAndXRmLTgnKVxuICAgICAgICBjb25zdCB7ZGF0YToge3RpdGxlLCBkYXRlfSwgY29udGVudH0gPSBtYXR0ZXIodGV4dClcbiAgICAgICAgcmV0dXJuIHtpZCwgZGF0ZSwgdGl0bGV9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhwb3N0cyk7XG4gICAgcmV0dXJuIHBvc3RzXG59XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0ID0gYXN5bmMgKGlkOnN0cmluZykgPT4ge1xuICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aC5qb2luKG1hcmtkb3duLCBpZCsnLm1kJylcbiAgICBjb25zdCB0ZXh0ID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCAndXRmLTgnKVxuICAgIGNvbnN0IHtkYXRhOiB7dGl0bGUsIGRhdGV9LCBjb250ZW50fSA9IG1hdHRlcih0ZXh0KVxuICAgIGNvbnN0IGh0bWxDb250ZW50ID0gbWFya2VkKGNvbnRlbnQpXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoe2lkLCBkYXRlLCB0aXRsZSxjb250ZW50LGh0bWxDb250ZW50fSkpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0SWRzPWFzeW5jICgpPT57XG4gICAgY29uc3QgZmlsZW5hbWUgPSBhd2FpdCBmc1Byb21pc2VzLnJlYWRkaXIobWFya2Rvd24pXG4gICAgcmV0dXJuIGZpbGVuYW1lLm1hcChyPT5yLnJlcGxhY2UoL1xcLm1kJC9nLCcnKSlcblxufSJdLCJuYW1lcyI6WyJwYXRoIiwicHJvbWlzZXMiLCJmc1Byb21pc2VzIiwiZnMiLCJtYXR0ZXIiLCJtYXJrZWQiLCJtYXJrZG93biIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZ2V0UG9zdHMiLCJmaWxlbmFtZSIsInJlYWRkaXIiLCJwb3N0cyIsIm1hcCIsImZ1bGxQYXRoIiwiaWQiLCJyZXBsYWNlIiwidGV4dCIsInJlYWRGaWxlU3luYyIsImRhdGEiLCJ0aXRsZSIsImRhdGUiLCJjb250ZW50IiwiY29uc29sZSIsImxvZyIsImdldFBvc3QiLCJodG1sQ29udGVudCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImdldFBvc3RJZHMiLCJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/posts.tsx\n");

/***/ }),

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lib_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/posts */ \"./lib/posts.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_posts__WEBPACK_IMPORTED_MODULE_1__]);\nlib_posts__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst postsShow = (props)=>{\n    const { post  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: post.title\n            }, void 0, false, {\n                fileName: \"/Users/songen/songFiles/2022/next-blog/pages/posts/[id].tsx\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                dangerouslySetInnerHTML: {\n                    __html: post.htmlContent\n                }\n            }, void 0, false, {\n                fileName: \"/Users/songen/songFiles/2022/next-blog/pages/posts/[id].tsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/songen/songFiles/2022/next-blog/pages/posts/[id].tsx\",\n        lineNumber: 8,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postsShow);\nconst getStaticPaths = async ()=>{\n    const idList = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_1__.getPostIds)();\n    return {\n        paths: idList.map((id)=>({\n                params: {\n                    id: id\n                }\n            })),\n        fallback: false\n    };\n};\nconst getStaticProps = async (content)=>{\n    const id = content.params.id;\n    const post = await (0,lib_posts__WEBPACK_IMPORTED_MODULE_1__.getPost)(id);\n    return {\n        props: {\n            post: post\n        }\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFnRDtBQUtoRCxNQUFNRSxTQUFTLEdBQW9CLENBQUNDLEtBQUssR0FBSztJQUM1QyxNQUFNLEVBQUVDLElBQUksR0FBRSxHQUFHRCxLQUFLO0lBQ3RCLHFCQUFPLDhEQUFDRSxLQUFHOzswQkFDVCw4REFBQ0MsSUFBRTswQkFBRUYsSUFBSSxDQUFDRyxLQUFLOzs7Ozt5QkFBTTswQkFDckIsOERBQUNDLFNBQU87Z0JBQUNDLHVCQUF1QixFQUFHO29CQUFFQyxNQUFNLEVBQUNOLElBQUksQ0FBQ08sV0FBVztpQkFBRTs7Ozs7eUJBQWE7Ozs7OztpQkFDdkUsQ0FBQztBQUNULENBQUM7QUFDRCxpRUFBZVQsU0FBUyxFQUFDO0FBRWxCLE1BQU1VLGNBQWMsR0FBRyxVQUFZO0lBQ3hDLE1BQU1DLE1BQU0sR0FBRyxNQUFNWixxREFBVSxFQUFFO0lBQ2pDLE9BQU87UUFDTGEsS0FBSyxFQUFHRCxNQUFNLENBQUNFLEdBQUcsQ0FBQ0MsQ0FBQUEsRUFBRSxHQUFFLENBQUM7Z0JBQUNDLE1BQU0sRUFBQztvQkFBQ0QsRUFBRSxFQUFDQSxFQUFFO2lCQUFDO2FBQUMsQ0FBQyxDQUFDO1FBQzFDRSxRQUFRLEVBQUMsS0FBSztLQUNmLENBQUM7QUFDSixDQUFDLENBQUM7QUFFSyxNQUFNQyxjQUFjLEdBQUcsT0FBT0MsT0FBWSxHQUFLO0lBQ3BELE1BQU1KLEVBQUUsR0FBR0ksT0FBTyxDQUFDSCxNQUFNLENBQUNELEVBQUU7SUFDNUIsTUFBTVosSUFBSSxHQUFHLE1BQU1KLGtEQUFPLENBQUNnQixFQUFFLENBQUM7SUFDOUIsT0FBTztRQUNMYixLQUFLLEVBQUU7WUFDTEMsSUFBSSxFQUFFQSxJQUFJO1NBQ1g7S0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1ibG9nLy4vcGFnZXMvcG9zdHMvW2lkXS50c3g/MjFlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQb3N0LCBnZXRQb3N0SWRzIH0gZnJvbSBcImxpYi9wb3N0c1wiO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xudHlwZSBQcm9wcz17XG4gIHBvc3Q6UG9zdHNcbn1cbmNvbnN0IHBvc3RzU2hvdzogTmV4dFBhZ2U8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcG9zdCB9ID0gcHJvcHM7XG4gIHJldHVybiA8ZGl2PlxuICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxuICAgIDxhcnRpY2xlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6cG9zdC5odG1sQ29udGVudCB9IH0+PC9hcnRpY2xlPlxuICA8L2Rpdj47XG59O1xuZXhwb3J0IGRlZmF1bHQgcG9zdHNTaG93O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGlkTGlzdCA9IGF3YWl0IGdldFBvc3RJZHMoKVxuICByZXR1cm4ge1xuICAgIHBhdGhzOiAgaWRMaXN0Lm1hcChpZD0+KHtwYXJhbXM6e2lkOmlkfX0pKSxcbiAgICBmYWxsYmFjazpmYWxzZVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRlbnQ6IGFueSkgPT4ge1xuICBjb25zdCBpZCA9IGNvbnRlbnQucGFyYW1zLmlkO1xuICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0UG9zdChpZCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IHBvc3QgLFxuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImdldFBvc3QiLCJnZXRQb3N0SWRzIiwicG9zdHNTaG93IiwicHJvcHMiLCJwb3N0IiwiZGl2IiwiaDEiLCJ0aXRsZSIsImFydGljbGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImh0bWxDb250ZW50IiwiZ2V0U3RhdGljUGF0aHMiLCJpZExpc3QiLCJwYXRocyIsIm1hcCIsImlkIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[id].tsx\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("marked");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].tsx"));
module.exports = __webpack_exports__;

})();