"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\n\n\n\n\n\n\n\nvar CampaignIndex = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(CampaignIndex, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(CampaignIndex);\n    function CampaignIndex() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, CampaignIndex);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(CampaignIndex, [\n        {\n            key: \"renderCampaigns\",\n            value: function renderCampaigns() {\n                var _this = this;\n                var items = this.props.campaigns.map(function(address) {\n                    return {\n                        header: address,\n                        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: \"View Campaign\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kevin\\\\Documents\\\\ComputerScience\\\\UdemySolidityCourse\\\\Section6\\\\kickstart\\\\pages\\\\index.js\",\n                            lineNumber: 16,\n                            columnNumber: 30\n                        }, _this),\n                        fluid: true\n                    };\n                });\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Kevin\\\\Documents\\\\ComputerScience\\\\UdemySolidityCourse\\\\Section6\\\\kickstart\\\\pages\\\\index.js\",\n                    lineNumber: 21,\n                    columnNumber: 16\n                }, this);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return;\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            async: true,\n                            rel: \"stylesheet\",\n                            href: \"https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Kevin\\\\Documents\\\\ComputerScience\\\\UdemySolidityCourse\\\\Section6\\\\kickstart\\\\pages\\\\index.js\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        }, this),\n                        this.renderCampaigns()\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Kevin\\\\Documents\\\\ComputerScience\\\\UdemySolidityCourse\\\\Section6\\\\kickstart\\\\pages\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(function() {\n                    var campaigns;\n                    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(this, function(_state) {\n                        switch(_state.label){\n                            case 0:\n                                return [\n                                    4,\n                                    _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.getDeployedCampaigns().call()\n                                ];\n                            case 1:\n                                campaigns = _state.sent();\n                                return [\n                                    2,\n                                    {\n                                        campaigns: campaigns\n                                    }\n                                ];\n                        }\n                    });\n                })();\n            }\n        }\n    ]);\n    return CampaignIndex;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignIndex);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFBdUM7QUFDRztBQUNIO0FBRXZDLGlCQUFtQixpQkFnQ2xCOzs4RUFoQ0tJLGFBQWE7K0ZBQWJBLGFBQWE7YUFBYkEsYUFBYTtnR0FBYkEsYUFBYTs7O2tGQUFiQSxhQUFhOztZQU9mQyxHQUFlLEVBQWZBLGlCQUFlO21CQUFmQSxTQUFBQSxlQUFlLEdBQUU7O2dCQUNiLElBQU1DLEtBQUssR0FBRyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUNDLFNBQUFBLE9BQU8sRUFBSTtvQkFDOUMsT0FBTzt3QkFDSEMsTUFBTSxFQUFFRCxPQUFPO3dCQUNmRSxXQUFXLGdCQUFFLDhEQUFDQyxHQUFDO3NDQUFDLGVBQWE7Ozs7O2lDQUFJO3dCQUNqQ0MsS0FBSyxFQUFFLElBQUk7cUJBQ2QsQ0FBQztnQkFDTixDQUFDLENBQUM7Z0JBRUYscUJBQU8sOERBQUNYLHlEQUFVO29CQUFDRyxLQUFLLEVBQUVBLEtBQUs7Ozs7O3dCQUFJLENBQUM7WUFDeEMsQ0FBQzs7O1lBRURVLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFFO2dCQUNKLE9BQU07OEJBQ0YsOERBQUNDLEtBQUc7O3NDQUNBLDhEQUFDQyxNQUFJOzRCQUNEQyxLQUFLOzRCQUNMQyxHQUFHLEVBQUMsWUFBWTs0QkFDaEJDLElBQUksRUFBQyxrRUFBa0U7Ozs7O2dDQUN6RTt3QkFDRCxJQUFJLENBQUNoQixlQUFlLEVBQUU7Ozs7Ozt3QkFDckIsQ0FBQztZQUNmLENBQUM7Ozs7WUE1QllpQixHQUFlLEVBQWZBLGlCQUFlO21CQUE1QixTQUFhQSxlQUFlO3VCQUE1QiwrRkFBOEI7d0JBQ3BCZCxTQUFTOzs7O2dDQUFHOztvQ0FBTU4sc0ZBQW9DLEVBQUUsQ0FBQ3VCLElBQUksRUFBRTtrQ0FBQTs7Z0NBQS9EakIsU0FBUyxHQUFHLGFBQW1EO2dDQUVyRTs7b0NBQU87d0NBQUNBLFNBQVMsRUFBVEEsU0FBUztxQ0FBQztrQ0FBQzs7O2dCQUN2QixDQUFDO2FBQUE7OztXQUxDSixhQUFhO0NBOEJsQixDQTlCMkJILDRDQUFTLENBOEJwQztBQUVELCtEQUFlRyxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZhY290cnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XHJcbmltcG9ydCB7Q2FyZH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5cclxuY2xhc3MgQ2FtcGFpZ25JbmRleCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKXtcclxuICAgICAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWNvdHJ5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7Y2FtcGFpZ25zfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDYW1wYWlnbnMoKXtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuY2FtcGFpZ25zLm1hcChhZGRyZXNzID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiA8YT5WaWV3IENhbXBhaWduPC9hPixcclxuICAgICAgICAgICAgICAgIGZsdWlkOiB0cnVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgICAgICBhc3luY1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDYW1wYWlnbnMoKX1cclxuICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY290cnkiLCJDYXJkIiwiQ2FtcGFpZ25JbmRleCIsInJlbmRlckNhbXBhaWducyIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJhZGRyZXNzIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJhIiwiZmx1aWQiLCJHcm91cCIsInJlbmRlciIsImRpdiIsImxpbmsiLCJhc3luYyIsInJlbCIsImhyZWYiLCJnZXRJbml0aWFsUHJvcHMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});