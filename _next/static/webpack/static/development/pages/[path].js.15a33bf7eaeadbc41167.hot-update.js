webpackHotUpdate("static\\development\\pages\\[path].js",{

/***/ "./pages/[path].jsx":
/*!**************************!*\
  !*** ./pages/[path].jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var _components_CardContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CardContainer */ \"./components/CardContainer.jsx\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ \"./pages/index.jsx\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"D:\\\\Web Development\\\\Projects\\\\Personal\\\\ritiksr25.github.io\\\\pages\\\\[path].jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar Pages = function Pages(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var path = router.query.path;\n  var allowedPaths = [\"experience\", \"projects\", \"skills\", \"activities\"];\n\n  if (allowedPaths.indexOf(path) === -1) {\n    return __jsx(_index__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 12\n      }\n    });\n  } else {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      path: path,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 7\n      }\n    }, __jsx(_components_CardContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      path: path.toUpperCase(),\n      data: props.data,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }\n    }));\n  }\n};\n\n_s(Pages, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Pages;\n\nPages.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n    var pathName, path, origin, allowedPaths, res, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            pathName = _ref.pathName;\n            //   const path = context.req.url.split(\"/\")[2];\n            path = pathName;\n            console.log([path]);\n            origin = \"https://ritiksr25.now.sh\";\n            allowedPaths = [\"experience\", \"projects\", \"skills\", \"activities\"];\n\n            if (!(allowedPaths.indexOf(path) === -1)) {\n              _context.next = 7;\n              break;\n            }\n\n            return _context.abrupt(\"return\", {\n              data: []\n            });\n\n          case 7:\n            _context.next = 9;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()(\"\".concat(origin, \"/api/projects\"));\n\n          case 9:\n            res = _context.sent;\n            _context.next = 12;\n            return res.json();\n\n          case 12:\n            data = _context.sent;\n            return _context.abrupt(\"return\", {\n              data: data\n            });\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pages);\n\nvar _c;\n\n$RefreshReg$(_c, \"Pages\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bcGF0aF0uanN4PzFmOTAiXSwibmFtZXMiOlsiUGFnZXMiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGgiLCJxdWVyeSIsImFsbG93ZWRQYXRocyIsImluZGV4T2YiLCJ0b1VwcGVyQ2FzZSIsImRhdGEiLCJnZXRJbml0aWFsUHJvcHMiLCJwYXRoTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJvcmlnaW4iLCJmZXRjaCIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN2QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRHVCLE1BRWZDLElBRmUsR0FFTkYsTUFBTSxDQUFDRyxLQUZELENBRWZELElBRmU7QUFHdkIsTUFBTUUsWUFBWSxHQUFHLENBQUMsWUFBRCxFQUFlLFVBQWYsRUFBMkIsUUFBM0IsRUFBcUMsWUFBckMsQ0FBckI7O0FBQ0EsTUFBSUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCSCxJQUFyQixNQUErQixDQUFDLENBQXBDLEVBQXVDO0FBQ3JDLFdBQU8sTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRCxHQUZELE1BRU87QUFDTCxXQUNFLE1BQUMsMERBQUQ7QUFBUSxVQUFJLEVBQUVBLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsaUVBQUQ7QUFBZSxVQUFJLEVBQUVBLElBQUksQ0FBQ0ksV0FBTCxFQUFyQjtBQUF5QyxVQUFJLEVBQUVQLEtBQUssQ0FBQ1EsSUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREY7QUFLRDtBQUNGLENBYkQ7O0dBQU1ULEs7VUFDV0cscUQ7OztLQURYSCxLOztBQWVOQSxLQUFLLENBQUNVLGVBQU47QUFBQSwrTEFBd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVFDLG9CQUFSLFFBQVFBLFFBQVI7QUFDeEI7QUFDTVAsZ0JBRmtCLEdBRVhPLFFBRlc7QUFHeEJDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUFDVCxJQUFELENBQVo7QUFDTVUsa0JBSmtCLEdBSVQsMEJBSlM7QUFLaEJSLHdCQUxnQixHQUtELENBQUMsWUFBRCxFQUFlLFVBQWYsRUFBMkIsUUFBM0IsRUFBcUMsWUFBckMsQ0FMQzs7QUFBQSxrQkFNbEJBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkgsSUFBckIsTUFBK0IsQ0FBQyxDQU5kO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQU9iO0FBQUVLLGtCQUFJLEVBQUU7QUFBUixhQVBhOztBQUFBO0FBQUE7QUFBQSxtQkFVSk0seURBQUssV0FBSUQsTUFBSixtQkFWRDs7QUFBQTtBQVVoQkUsZUFWZ0I7QUFBQTtBQUFBLG1CQVdIQSxHQUFHLENBQUNDLElBQUosRUFYRzs7QUFBQTtBQVdoQlIsZ0JBWGdCO0FBQUEsNkNBYWY7QUFDTEEsa0JBQUksRUFBSkE7QUFESyxhQWJlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtCZVQsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9bcGF0aF0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBDYXJkQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRDb250YWluZXJcIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuXHJcbmNvbnN0IFBhZ2VzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBwYXRoIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgYWxsb3dlZFBhdGhzID0gW1wiZXhwZXJpZW5jZVwiLCBcInByb2plY3RzXCIsIFwic2tpbGxzXCIsIFwiYWN0aXZpdGllc1wiXTtcclxuICBpZiAoYWxsb3dlZFBhdGhzLmluZGV4T2YocGF0aCkgPT09IC0xKSB7XHJcbiAgICByZXR1cm4gPEhvbWUgLz47XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQgcGF0aD17cGF0aH0+XHJcbiAgICAgICAgPENhcmRDb250YWluZXIgcGF0aD17cGF0aC50b1VwcGVyQ2FzZSgpfSBkYXRhPXtwcm9wcy5kYXRhfSAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuUGFnZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHtwYXRoTmFtZX0pID0+IHtcclxuLy8gICBjb25zdCBwYXRoID0gY29udGV4dC5yZXEudXJsLnNwbGl0KFwiL1wiKVsyXTtcclxuY29uc3QgcGF0aCA9IHBhdGhOYW1lO1xyXG5jb25zb2xlLmxvZyhbcGF0aF0pOyAgXHJcbmNvbnN0IG9yaWdpbiA9IFwiaHR0cHM6Ly9yaXRpa3NyMjUubm93LnNoXCI7XHJcbiAgY29uc3QgYWxsb3dlZFBhdGhzID0gW1wiZXhwZXJpZW5jZVwiLCBcInByb2plY3RzXCIsIFwic2tpbGxzXCIsIFwiYWN0aXZpdGllc1wiXTtcclxuICBpZiAoYWxsb3dlZFBhdGhzLmluZGV4T2YocGF0aCkgPT09IC0xKSB7XHJcbiAgICByZXR1cm4geyBkYXRhOiBbXSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7b3JpZ2lufS9hcGkvcHJvamVjdHNgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[path].jsx\n");

/***/ })

})