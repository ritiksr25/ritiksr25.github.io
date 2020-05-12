webpackHotUpdate("static\\development\\pages\\[path].js",{

/***/ "./pages/[path].jsx":
/*!**************************!*\
  !*** ./pages/[path].jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var _components_CardContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CardContainer */ \"./components/CardContainer.jsx\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ \"./pages/index.jsx\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"D:\\\\Web Development\\\\Projects\\\\Personal\\\\ritiksr25.github.io\\\\pages\\\\[path].jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar Pages = function Pages(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var path = router.query.path;\n  var allowedPaths = [\"experience\", \"projects\", \"skills\", \"activities\"];\n\n  if (allowedPaths.indexOf(path) === -1) {\n    return __jsx(_index__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 12\n      }\n    });\n  } else {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      path: path,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 7\n      }\n    }, __jsx(_components_CardContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      path: path.toUpperCase(),\n      data: props.data,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }\n    }));\n  }\n};\n\n_s(Pages, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Pages;\n\nPages.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n    var asPath, path, origin, allowedPaths, res, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            asPath = _ref.asPath;\n            path = asPath.split(\"/\")[1];\n            origin = \"https://ritiksr25.now.sh\";\n            allowedPaths = [\"experience\", \"projects\", \"skills\", \"activities\"];\n\n            if (!(allowedPaths.indexOf(path) === -1)) {\n              _context.next = 6;\n              break;\n            }\n\n            return _context.abrupt(\"return\", {\n              data: []\n            });\n\n          case 6:\n            _context.next = 8;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()(\"https://ritiksr25.now.sh/api/\".concat(path));\n\n          case 8:\n            res = _context.sent;\n            _context.next = 11;\n            return res.json();\n\n          case 11:\n            data = _context.sent;\n            return _context.abrupt(\"return\", {\n              data: data\n            });\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pages);\n\nvar _c;\n\n$RefreshReg$(_c, \"Pages\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bcGF0aF0uanN4PzFmOTAiXSwibmFtZXMiOlsiUGFnZXMiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGgiLCJxdWVyeSIsImFsbG93ZWRQYXRocyIsImluZGV4T2YiLCJ0b1VwcGVyQ2FzZSIsImRhdGEiLCJnZXRJbml0aWFsUHJvcHMiLCJhc1BhdGgiLCJzcGxpdCIsIm9yaWdpbiIsImZldGNoIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3ZCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEdUIsTUFFZkMsSUFGZSxHQUVORixNQUFNLENBQUNHLEtBRkQsQ0FFZkQsSUFGZTtBQUd2QixNQUFNRSxZQUFZLEdBQUcsQ0FBQyxZQUFELEVBQWUsVUFBZixFQUEyQixRQUEzQixFQUFxQyxZQUFyQyxDQUFyQjs7QUFDQSxNQUFJQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUJILElBQXJCLE1BQStCLENBQUMsQ0FBcEMsRUFBdUM7QUFDckMsV0FBTyxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNELEdBRkQsTUFFTztBQUNMLFdBQ0UsTUFBQywwREFBRDtBQUFRLFVBQUksRUFBRUEsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxpRUFBRDtBQUFlLFVBQUksRUFBRUEsSUFBSSxDQUFDSSxXQUFMLEVBQXJCO0FBQXlDLFVBQUksRUFBRVAsS0FBSyxDQUFDUSxJQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERjtBQUtEO0FBQ0YsQ0FiRDs7R0FBTVQsSztVQUNXRyxxRDs7O0tBRFhILEs7O0FBZU5BLEtBQUssQ0FBQ1UsZUFBTjtBQUFBLCtMQUF3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0Msa0JBQVQsUUFBU0EsTUFBVDtBQUNoQlAsZ0JBRGdCLEdBQ1RPLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhLEdBQWIsRUFBa0IsQ0FBbEIsQ0FEUztBQUVoQkMsa0JBRmdCLEdBRVAsMEJBRk87QUFJaEJQLHdCQUpnQixHQUlELENBQUMsWUFBRCxFQUFlLFVBQWYsRUFBMkIsUUFBM0IsRUFBcUMsWUFBckMsQ0FKQzs7QUFBQSxrQkFLbEJBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkgsSUFBckIsTUFBK0IsQ0FBQyxDQUxkO0FBQUE7QUFBQTtBQUFBOztBQUFBLDZDQU1iO0FBQUVLLGtCQUFJLEVBQUU7QUFBUixhQU5hOztBQUFBO0FBQUE7QUFBQSxtQkFTSksseURBQUssd0NBQWlDVixJQUFqQyxFQVREOztBQUFBO0FBU2hCVyxlQVRnQjtBQUFBO0FBQUEsbUJBVUhBLEdBQUcsQ0FBQ0MsSUFBSixFQVZHOztBQUFBO0FBVWhCUCxnQkFWZ0I7QUFBQSw2Q0FZZjtBQUNMQSxrQkFBSSxFQUFKQTtBQURLLGFBWmU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBaUJlVCxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1twYXRoXS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IENhcmRDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZENvbnRhaW5lclwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5cclxuY29uc3QgUGFnZXMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHBhdGggfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBhbGxvd2VkUGF0aHMgPSBbXCJleHBlcmllbmNlXCIsIFwicHJvamVjdHNcIiwgXCJza2lsbHNcIiwgXCJhY3Rpdml0aWVzXCJdO1xyXG4gIGlmIChhbGxvd2VkUGF0aHMuaW5kZXhPZihwYXRoKSA9PT0gLTEpIHtcclxuICAgIHJldHVybiA8SG9tZSAvPjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dCBwYXRoPXtwYXRofT5cclxuICAgICAgICA8Q2FyZENvbnRhaW5lciBwYXRoPXtwYXRoLnRvVXBwZXJDYXNlKCl9IGRhdGE9e3Byb3BzLmRhdGF9IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5QYWdlcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBhc1BhdGggfSkgPT4ge1xyXG4gIGNvbnN0IHBhdGggPSBhc1BhdGguc3BsaXQoXCIvXCIpWzFdO1xyXG4gIGNvbnN0IG9yaWdpbiA9IFwiaHR0cHM6Ly9yaXRpa3NyMjUubm93LnNoXCI7XHJcblxyXG4gIGNvbnN0IGFsbG93ZWRQYXRocyA9IFtcImV4cGVyaWVuY2VcIiwgXCJwcm9qZWN0c1wiLCBcInNraWxsc1wiLCBcImFjdGl2aXRpZXNcIl07XHJcbiAgaWYgKGFsbG93ZWRQYXRocy5pbmRleE9mKHBhdGgpID09PSAtMSkge1xyXG4gICAgcmV0dXJuIHsgZGF0YTogW10gfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3JpdGlrc3IyNS5ub3cuc2gvYXBpLyR7cGF0aH1gKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[path].jsx\n");

/***/ })

})