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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/chakra/theme.ts":
/*!*****************************!*\
  !*** ./src/chakra/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: false\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    config\n}, {\n    colors: {\n        brand: {\n            100: \"#3D84F7\"\n        }\n    },\n    styles: {\n        global: ()=>({\n                body: {\n                    bg: \"whiteAlpha.200\"\n                }\n            })\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2hha3JhL3RoZW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRTtBQUVqRSxNQUFNQyxTQUFzQjtJQUMxQkMsa0JBQWtCO0lBQ2xCQyxvQkFBb0IsS0FBSztBQUMzQjtBQUVPLE1BQU1DLFFBQVFKLDZEQUFXQSxDQUM5QjtJQUFFQztBQUFPLEdBQ1Q7SUFDRUksUUFBUTtRQUNOQyxPQUFPO1lBQ0wsS0FBSztRQUNQO0lBQ0Y7SUFDQUMsUUFBUTtRQUNOQyxRQUFRLElBQU87Z0JBQ2JDLE1BQU07b0JBQ0pDLElBQUk7Z0JBQ047WUFDRjtJQUNGO0FBQ0YsR0FDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltZXNzYWdlLWdyYXBocWwvLi9zcmMvY2hha3JhL3RoZW1lLnRzP2E5ZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUsIHR5cGUgVGhlbWVDb25maWcgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5jb25zdCBjb25maWc6IFRoZW1lQ29uZmlnID0ge1xuICBpbml0aWFsQ29sb3JNb2RlOiBcImRhcmtcIixcbiAgdXNlU3lzdGVtQ29sb3JNb2RlOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKFxuICB7IGNvbmZpZyB9LFxuICB7XG4gICAgY29sb3JzOiB7XG4gICAgICBicmFuZDoge1xuICAgICAgICAxMDA6IFwiIzNEODRGN1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHN0eWxlczoge1xuICAgICAgZ2xvYmFsOiAoKSA9PiAoe1xuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgYmc6IFwid2hpdGVBbHBoYS4yMDBcIixcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIH0sXG4gIH1cbik7XG4iXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJjb25maWciLCJpbml0aWFsQ29sb3JNb2RlIiwidXNlU3lzdGVtQ29sb3JNb2RlIiwidGhlbWUiLCJjb2xvcnMiLCJicmFuZCIsInN0eWxlcyIsImdsb2JhbCIsImJvZHkiLCJiZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/chakra/theme.ts\n");

/***/ }),

/***/ "./src/graphql/apollo-client.ts":
/*!**************************************!*\
  !*** ./src/graphql/apollo-client.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client_link_subscriptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/link/subscriptions */ \"@apollo/client/link/subscriptions\");\n/* harmony import */ var _apollo_client_link_subscriptions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_subscriptions__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/utilities */ \"@apollo/client/utilities\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_ws__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-ws */ \"graphql-ws\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([graphql_ws__WEBPACK_IMPORTED_MODULE_3__]);\ngraphql_ws__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst wsLink =  false ? 0 : null;\nconst httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.HttpLink({\n    uri: `http://localhost:4000/graphql`,\n    credentials: \"include\"\n});\nconst link =  false ? 0 : httpLink;\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    link,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9hcG9sbG8tY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEU7QUFDWjtBQUNMO0FBQ25CO0FBQ0c7QUFFN0MsTUFBTVEsU0FDSixNQUE2QixHQUN6QixDQU1FLEdBRUYsSUFBSTtBQUVWLE1BQU1JLFdBQVcsSUFBSVgsb0RBQVFBLENBQUM7SUFDNUJZLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQztJQUNwQ0MsYUFBYTtBQUNmO0FBRUEsTUFBTUMsT0FDSixNQUErQyxHQUMzQ1osQ0FTRVMsR0FFRkEsUUFBUTtBQUVQLE1BQU1RLFNBQVMsSUFBSXBCLHdEQUFZQSxDQUFDO0lBQ3JDZTtJQUNBTSxPQUFPLElBQUluQix5REFBYUE7QUFDMUIsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2ltZXNzYWdlLWdyYXBocWwvLi9zcmMvZ3JhcGhxbC9hcG9sbG8tY2xpZW50LnRzPzU2NTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBIdHRwTGluaywgSW5NZW1vcnlDYWNoZSwgc3BsaXQgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IEdyYXBoUUxXc0xpbmsgfSBmcm9tIFwiQGFwb2xsby9jbGllbnQvbGluay9zdWJzY3JpcHRpb25zXCI7XG5pbXBvcnQgeyBnZXRNYWluRGVmaW5pdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC91dGlsaXRpZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJncmFwaHFsLXdzXCI7XG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5jb25zdCB3c0xpbmsgPVxuICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXG4gICAgPyBuZXcgR3JhcGhRTFdzTGluayhcbiAgICAgICAgY3JlYXRlQ2xpZW50KHtcbiAgICAgICAgICB1cmw6IFwid3M6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsL3N1YnNjcmlwdGlvbnNcIixcbiAgICAgICAgICBjb25uZWN0aW9uUGFyYW1zOiBhc3luYyAoKSA9PiAoe1xuICAgICAgICAgICAgc2Vzc2lvbjogYXdhaXQgZ2V0U2Vzc2lvbigpLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgIDogbnVsbDtcblxuY29uc3QgaHR0cExpbmsgPSBuZXcgSHR0cExpbmsoe1xuICB1cmk6IGBodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbGAsXG4gIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbn0pO1xuXG5jb25zdCBsaW5rID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3c0xpbmsgIT0gbnVsbFxuICAgID8gc3BsaXQoXG4gICAgICAgICh7IHF1ZXJ5IH0pID0+IHtcbiAgICAgICAgICBjb25zdCBkZWYgPSBnZXRNYWluRGVmaW5pdGlvbihxdWVyeSk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGRlZi5raW5kID09PSBcIk9wZXJhdGlvbkRlZmluaXRpb25cIiAmJlxuICAgICAgICAgICAgZGVmLm9wZXJhdGlvbiA9PT0gXCJzdWJzY3JpcHRpb25cIlxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIHdzTGluayxcbiAgICAgICAgaHR0cExpbmtcbiAgICAgIClcbiAgICA6IGh0dHBMaW5rO1xuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIGxpbmssXG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxufSk7XG4iXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiSHR0cExpbmsiLCJJbk1lbW9yeUNhY2hlIiwic3BsaXQiLCJHcmFwaFFMV3NMaW5rIiwiZ2V0TWFpbkRlZmluaXRpb24iLCJjcmVhdGVDbGllbnQiLCJnZXRTZXNzaW9uIiwid3NMaW5rIiwidXJsIiwiY29ubmVjdGlvblBhcmFtcyIsInNlc3Npb24iLCJodHRwTGluayIsInVyaSIsImNyZWRlbnRpYWxzIiwibGluayIsInF1ZXJ5IiwiZGVmIiwia2luZCIsIm9wZXJhdGlvbiIsImNsaWVudCIsImNhY2hlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/graphql/apollo-client.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var _chakra_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chakra/theme */ \"./src/chakra/theme.ts\");\n/* harmony import */ var _graphql_apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../graphql/apollo-client */ \"./src/graphql/apollo-client.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _graphql_apollo_client__WEBPACK_IMPORTED_MODULE_6__]);\n([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _graphql_apollo_client__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n        client: _graphql_apollo_client__WEBPACK_IMPORTED_MODULE_6__.client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n            session: session,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {\n                theme: _chakra_theme__WEBPACK_IMPORTED_MODULE_5__.theme,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/Новая папка/imessage-graphql/frontend/src/pages/_app.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {}, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/Новая папка/imessage-graphql/frontend/src/pages/_app.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/Новая папка/imessage-graphql/frontend/src/pages/_app.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/admin/Desktop/Новая папка/imessage-graphql/frontend/src/pages/_app.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/Новая папка/imessage-graphql/frontend/src/pages/_app.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFDRTtBQUNBO0FBRVI7QUFDRjtBQUNVO0FBRWxELFNBQVNNLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxXQUFXLEVBQUVDLFFBQU8sRUFBRSxHQUFHRCxXQUFXLEdBQVksRUFBRTtJQUM1RSxxQkFDRSw4REFBQ1IsMERBQWNBO1FBQUNLLFFBQVFBLDBEQUFNQTtrQkFDNUIsNEVBQUNILDREQUFlQTtZQUFDTyxTQUFTQTtzQkFDeEIsNEVBQUNSLDREQUFjQTtnQkFBQ0csT0FBT0EsZ0RBQUtBOztrQ0FDMUIsOERBQUNHO3dCQUFXLEdBQUdDLFNBQVM7Ozs7OztrQ0FDeEIsOERBQUNMLG9EQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCO0FBRUEsaUVBQWVHLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWVzc2FnZS1ncmFwaHFsLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCIuLi9jaGFrcmEvdGhlbWVcIjtcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gXCIuLi9ncmFwaHFsL2Fwb2xsby1jbGllbnRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wczogeyBzZXNzaW9uLCAuLi5wYWdlUHJvcHMgfSB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgICA8Q2hha3JhUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPFRvYXN0ZXIgLz5cbiAgICAgICAgPC9DaGFrcmFQcm92aWRlcj5cbiAgICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkFwb2xsb1Byb3ZpZGVyIiwiQ2hha3JhUHJvdmlkZXIiLCJTZXNzaW9uUHJvdmlkZXIiLCJUb2FzdGVyIiwidGhlbWUiLCJjbGllbnQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/subscriptions":
/*!****************************************************!*\
  !*** external "@apollo/client/link/subscriptions" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("@apollo/client/link/subscriptions");

/***/ }),

/***/ "@apollo/client/utilities":
/*!*******************************************!*\
  !*** external "@apollo/client/utilities" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "graphql-ws":
/*!*****************************!*\
  !*** external "graphql-ws" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("graphql-ws");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();