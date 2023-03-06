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
exports.id = "pages/auth/signIn";
exports.ids = ["pages/auth/signIn"];
exports.modules = {

/***/ "./src/pages/auth/signIn.tsx":
/*!***********************************!*\
  !*** ./src/pages/auth/signIn.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SignIn),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// Custom Sign-In page to avoid listing all providers\nfunction SignIn({ providers  }) {\n    const { status: sessionStatus  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { callbackUrl  } = router.query;\n    return Object.values(providers).map((provider)=>{\n        const name = provider.name;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    children: sessionStatus === \"authenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        \"http-equiv\": \"Refresh\",\n                        content: `0; url='${callbackUrl}'`\n                    }, void 0, false, {\n                        fileName: \"/Users/RajaAhmedEffandi/Desktop/CODEBASE /src/pages/auth/signIn.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, this) : null\n                }, void 0, false, {\n                    fileName: \"/Users/RajaAhmedEffandi/Desktop/CODEBASE /src/pages/auth/signIn.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-blue-700 text-white rounded-md w-[400px] py-4 my-5 mx-5\",\n                    onClick: ()=>void (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(provider.id),\n                    children: [\n                        \"Sign in with \",\n                        name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/RajaAhmedEffandi/Desktop/CODEBASE /src/pages/auth/signIn.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, name, true, {\n            fileName: \"/Users/RajaAhmedEffandi/Desktop/CODEBASE /src/pages/auth/signIn.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this);\n    });\n}\nconst getServerSideProps = async ()=>{\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getProviders)();\n    // This is where we choose the providers we want listed on the signIn page\n    return {\n        props: {\n            providers: {\n                google: providers?.google,\n                facebook: providers?.facebook\n            }\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXV0aC9zaWduSW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFtRTtBQUMzQjtBQUNQO0FBVWpDLHFEQUFxRDtBQUN0QyxTQUFTSyxPQUFPLEVBQUVDLFVBQVMsRUFBYSxFQUFFO0lBQ3ZELE1BQU0sRUFBRUMsUUFBUUMsY0FBYSxFQUFFLEdBQUdOLDJEQUFVQTtJQUM1QyxNQUFNTyxTQUFTTixzREFBU0E7SUFDeEIsTUFBTSxFQUFFTyxZQUFXLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUVwQyxPQUFPQyxPQUFPQyxNQUFNLENBQUNQLFdBQVdRLEdBQUcsQ0FBQyxDQUFDQyxXQUFhO1FBQ2hELE1BQU1DLE9BQU9ELFNBQVNDLElBQUk7UUFDMUIscUJBQ0UsOERBQUNDOzs4QkFDQyw4REFBQ2Isa0RBQVFBOzhCQUVOSSxrQkFBa0IsZ0NBQ2pCLDhEQUFDVTt3QkFBS0MsY0FBVzt3QkFBVUMsU0FBUyxDQUFDLFFBQVEsRUFBRVYsWUFBc0IsQ0FBQyxDQUFDOzs7OzsrQkFDckUsSUFBSTs7Ozs7OzhCQUVWLDhEQUFDVztvQkFBT0MsV0FBVTtvQkFBOERDLFNBQVMsSUFBTSxLQUFLdEIsdURBQU1BLENBQUNjLFNBQVNTLEVBQUU7O3dCQUFhO3dCQUNuSFI7Ozs7Ozs7O1dBUlJBOzs7OztJQVlkO0FBQ0YsQ0FBQztBQUVNLE1BQU1TLHFCQUF5QyxVQUFZO0lBQ2hFLE1BQU1uQixZQUFZLE1BQU1OLDZEQUFZQTtJQUVwQywwRUFBMEU7SUFDMUUsT0FBTztRQUNMMEIsT0FBTztZQUNMcEIsV0FBVztnQkFDVHFCLFFBQVFyQixXQUFXcUI7Z0JBQ25CQyxVQUFVdEIsV0FBV3NCO1lBQ3ZCO1FBQ0Y7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vYXV0aC1wcm92aWRlci1kZW1vcy8uL3NyYy9wYWdlcy9hdXRoL3NpZ25Jbi50c3g/ZTgwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm92aWRlcnMsIHNpZ25JbiwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE5leHRIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCB0eXBlIHsgQnVpbHRJblByb3ZpZGVyVHlwZSB9IGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCI7XG5pbXBvcnQgdHlwZSB7IENsaWVudFNhZmVQcm92aWRlciwgTGl0ZXJhbFVuaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdC90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuXG5leHBvcnQgdHlwZSBQcm9wc1R5cGUgPSB7XG4gIHByb3ZpZGVyczogUmVjb3JkPExpdGVyYWxVbmlvbjxCdWlsdEluUHJvdmlkZXJUeXBlLCBzdHJpbmc+LCBDbGllbnRTYWZlUHJvdmlkZXI+XG59O1xuXG4vLyBDdXN0b20gU2lnbi1JbiBwYWdlIHRvIGF2b2lkIGxpc3RpbmcgYWxsIHByb3ZpZGVyc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluKHsgcHJvdmlkZXJzIH06IFByb3BzVHlwZSkge1xuICBjb25zdCB7IHN0YXR1czogc2Vzc2lvblN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBjYWxsYmFja1VybCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIHJldHVybiBPYmplY3QudmFsdWVzKHByb3ZpZGVycykubWFwKChwcm92aWRlcikgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBwcm92aWRlci5uYW1lO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGtleT17bmFtZX0+XG4gICAgICAgIDxOZXh0SGVhZD5cbiAgICAgICAgICB7LyogV2hlbiBTaWduSW4gaXMgY29tcGxldGVkLCByZWRpcmVjdCB0byB0aGUgY2FsbGJhY2sgVVJMICovfVxuICAgICAgICAgIHtzZXNzaW9uU3RhdHVzID09PSBcImF1dGhlbnRpY2F0ZWRcIiA/IChcbiAgICAgICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJSZWZyZXNoXCIgY29udGVudD17YDA7IHVybD0nJHtjYWxsYmFja1VybCBhcyBzdHJpbmd9J2B9IC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvTmV4dEhlYWQ+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS03MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kIHctWzQwMHB4XSBweS00ICBteS01IG14LTVcIiBvbkNsaWNrPXsoKSA9PiB2b2lkIHNpZ25Jbihwcm92aWRlci5pZCBhcyBzdHJpbmcpfT5cbiAgICAgICAgICBTaWduIGluIHdpdGgge25hbWV9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcHJvdmlkZXJzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKClcblxuICAvLyBUaGlzIGlzIHdoZXJlIHdlIGNob29zZSB0aGUgcHJvdmlkZXJzIHdlIHdhbnQgbGlzdGVkIG9uIHRoZSBzaWduSW4gcGFnZVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm92aWRlcnM6IHtcbiAgICAgICAgZ29vZ2xlOiBwcm92aWRlcnM/Lmdvb2dsZSxcbiAgICAgICAgZmFjZWJvb2s6IHByb3ZpZGVycz8uZmFjZWJvb2ssXG4gICAgICB9XG4gICAgfSxcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJnZXRQcm92aWRlcnMiLCJzaWduSW4iLCJ1c2VTZXNzaW9uIiwidXNlUm91dGVyIiwiTmV4dEhlYWQiLCJTaWduSW4iLCJwcm92aWRlcnMiLCJzdGF0dXMiLCJzZXNzaW9uU3RhdHVzIiwicm91dGVyIiwiY2FsbGJhY2tVcmwiLCJxdWVyeSIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInByb3ZpZGVyIiwibmFtZSIsImRpdiIsIm1ldGEiLCJodHRwLWVxdWl2IiwiY29udGVudCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpZCIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIiwiZ29vZ2xlIiwiZmFjZWJvb2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/auth/signIn.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/auth/signIn.tsx"));
module.exports = __webpack_exports__;

})();