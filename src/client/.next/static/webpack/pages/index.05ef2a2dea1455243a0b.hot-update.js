self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var J_office_work_graphql_practice_graphql_practice_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/next/node_modules/@babel/runtime/regenerator */ "../../node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var J_office_work_graphql_practice_graphql_practice_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(J_office_work_graphql_practice_graphql_practice_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var J_office_work_graphql_practice_graphql_practice_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "../../node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var J_office_work_graphql_practice_graphql_practice_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "../../node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Home.module.css */ "../styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "../../node_modules/@apollo/client/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../apollo-client */ "../apollo-client.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "J:\\office_work\\graphql-practice\\graphql-practice\\src\\client\\pages\\index.tsx",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = (0,J_office_work_graphql_practice_graphql_practice_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n      query{\n          getAllProjEmployees(projectId:\"", "\"){\n            firstName\n            city\n          }\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,J_office_work_graphql_practice_graphql_practice_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n        mutation{\n            createProject(project:{\n              name:\"", "\"\n              code:", "\n            })\n           {\n            name\n            id\n            code\n          }\n          }\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var __N_SSG = true;
function Home(_ref, projectName, projectCode) {
  _s();

  var _this = this;

  var countries = _ref.countries;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(),
      projects = _useState[0],
      setProjects = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(),
      projectFormData = _useState2[0],
      setprojectFormData = _useState2[1];

  var mySubmitHandler = /*#__PURE__*/function () {
    var _ref2 = (0,J_office_work_graphql_practice_graphql_practice_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/J_office_work_graphql_practice_graphql_practice_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var _yield$client$mutate, data;

      return J_office_work_graphql_practice_graphql_practice_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              console.log(e.target[0].value + ' ' + e.target[1].value);
              projectName = e.target[0].value;
              projectCode = e.target[1].value; // setprojectFormData({projectName,projectCode});

              console.log(projectName, projectCode);
              _context.next = 7;
              return _apollo_client__WEBPACK_IMPORTED_MODULE_5__.default.mutate({
                mutation: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject(), projectName, projectCode)
              });

            case 7:
              _yield$client$mutate = _context.sent;
              data = _yield$client$mutate.data;
              alert('You are submitting ' + "Project Name: " + projectName + "and Code: " + projectCode);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function mySubmitHandler(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var myChangeHandler = function myChangeHandler(e) {//   console.log(e.target.value);
    //  this.setprojectFormData({ projectName: event.target.value });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().title),
        children: ["Welcome to ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "#",
          children: "Project Manager"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),
        children: "Manage All your projects here "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Following are the Registered Projects"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().grid),
        children: countries.map(function (country) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().card),
            onClick: function onClick() {
              return setProjectsValue(country.id);
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: country.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: country.code
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this)]
          }, country.id, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Add New Project"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: mySubmitHandler,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Project Name:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            onChange: myChangeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Project Code:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            onChange: myChangeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), console.log('Projects are', projects), projects && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().grid),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Employees registered to this project are"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, this), projects && projects.map(function (country) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().card),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: country.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: country.city
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 19
            }, _this)]
          }, country.projectId, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 17
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().footer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        target: "_blank",
        rel: "noopener noreferrer",
        children: ["Powered by", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/vercel.svg",
          alt: "Vercel Logo",
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().logo)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);

  function setProjectsValue(_x2) {
    return _setProjectsValue.apply(this, arguments);
  }

  function _setProjectsValue() {
    _setProjectsValue = (0,J_office_work_graphql_practice_graphql_practice_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/J_office_work_graphql_practice_graphql_practice_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {
      var _yield$client$query, data;

      return J_office_work_graphql_practice_graphql_practice_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(e);
              _context2.next = 3;
              return _apollo_client__WEBPACK_IMPORTED_MODULE_5__.default.query({
                query: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject2(), e)
              });

            case 3:
              _yield$client$query = _context2.sent;
              data = _yield$client$query.data;
              console.log(data.getAllProjEmployees);
              setProjects(data.getAllProjEmployees);
              return _context2.abrupt("return", {
                props: {
                  countries: data.getAllProjEmployees
                }
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _setProjectsValue.apply(this, arguments);
  }
}

_s(Home, "i6VUwQlvYGUmLTeiLUQxu5DzP6s=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9qZWN0TmFtZSIsInByb2plY3RDb2RlIiwiY291bnRyaWVzIiwidXNlU3RhdGUiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwicHJvamVjdEZvcm1EYXRhIiwic2V0cHJvamVjdEZvcm1EYXRhIiwibXlTdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiY2xpZW50IiwibXV0YXRpb24iLCJncWwiLCJkYXRhIiwiYWxlcnQiLCJteUNoYW5nZUhhbmRsZXIiLCJzdHlsZXMiLCJtYXAiLCJjb3VudHJ5Iiwic2V0UHJvamVjdHNWYWx1ZSIsImlkIiwibmFtZSIsImNvZGUiLCJmaXJzdE5hbWUiLCJjaXR5IiwicHJvamVjdElkIiwibG9nbyIsInF1ZXJ5IiwiZ2V0QWxsUHJvakVtcGxveWVlcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFlLFNBQVNBLElBQVQsT0FFYkMsV0FGYSxFQUdiQyxXQUhhLEVBSWI7QUFBQTs7QUFBQTs7QUFBQSxNQUhFQyxTQUdGLFFBSEVBLFNBR0Y7O0FBQUEsa0JBQ2dDQywrQ0FBUSxFQUR4QztBQUFBLE1BQ09DLFFBRFA7QUFBQSxNQUNpQkMsV0FEakI7O0FBQUEsbUJBRThDRiwrQ0FBUSxFQUZ0RDtBQUFBLE1BRU9HLGVBRlA7QUFBQSxNQUV3QkMsa0JBRnhCOztBQUlBLE1BQU1DLGVBQWU7QUFBQSxzVkFBRyxpQkFBT0MsQ0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3RCQSxlQUFDLENBQUNDLGNBQUY7QUFDQUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxDQUFDLENBQUNJLE1BQUYsQ0FBUyxD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O0FBakNBLFdBaUdlUCxnQkFqR2Y7QUFBQTtBQUFBOztBQUFBO0FBQUEsOFZBaUdBLGtCQUFnQ2YsQ0FBaEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFRSxxQkFBTyxDQUFDQyxHQUFSLENBQVlILENBQVo7QUFERjtBQUFBLHFCQUd5Qk0seURBQUEsQ0FBYTtBQUNsQ2lCLHFCQUFLLEVBQUVmLG1EQUFGLHFCQUVnQ1IsQ0FGaEM7QUFENkIsZUFBYixDQUh6Qjs7QUFBQTtBQUFBO0FBR1VTLGtCQUhWLHVCQUdVQSxJQUhWO0FBY0VQLHFCQUFPLENBQUNDLEdBQVIsQ0FBWU0sSUFBSSxDQUFDZSxtQkFBakI7QUFDQTVCLHlCQUFXLENBQUNhLElBQUksQ0FBQ2UsbUJBQU4sQ0FBWDtBQWZGLGdEQWdCUztBQUNMQyxxQkFBSyxFQUFFO0FBQ0xoQywyQkFBUyxFQUFFZ0IsSUFBSSxDQUFDZTtBQURYO0FBREYsZUFoQlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FqR0E7QUFBQTtBQUFBO0FBdUhEOztHQTNIdUJsQyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA1ZWYyYTJkZWExNDU1MjQzYTBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEVtcGxveWVlQ3JlYXRlRHRvIH0gZnJvbSAnLi4vLi4vc2VydmVyL2VtcGxveWVlL2R0by9jcmVhdGUtZW1wbG95ZWUuaW5wdXQnO1xyXG5cclxuaW50ZXJmYWNlIHByb2plY3REYXRhIHtcclxuICBwcm9qZWN0TmFtZTogc3RyaW5nO1xyXG4gIHByb2plY3RDb2RlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoXHJcbiAgeyBjb3VudHJpZXMgfSxcclxuICBwcm9qZWN0TmFtZTogcHJvamVjdERhdGEsXHJcbiAgcHJvamVjdENvZGU6IHByb2plY3REYXRhLFxyXG4pIHtcclxuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlPEVtcGxveWVlQ3JlYXRlRHRvW10+KCk7XHJcbiAgY29uc3QgW3Byb2plY3RGb3JtRGF0YSwgc2V0cHJvamVjdEZvcm1EYXRhXSA9IHVzZVN0YXRlPHByb2plY3REYXRhPigpO1xyXG5cclxuICBjb25zdCBteVN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXRbMF0udmFsdWUgKyAnICcgKyBlLnRhcmdldFsxXS52YWx1ZSk7XHJcbiAgICBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0WzBdLnZhbHVlO1xyXG4gICAgcHJvamVjdENvZGUgPSBlLnRhcmdldFsxXS52YWx1ZTtcclxuICAgIC8vIHNldHByb2plY3RGb3JtRGF0YSh7cHJvamVjdE5hbWUscHJvamVjdENvZGV9KTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lLCBwcm9qZWN0Q29kZSk7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5tdXRhdGUoe1xyXG4gICAgICBtdXRhdGlvbjogZ3FsYFxyXG4gICAgICAgIG11dGF0aW9ue1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3Q6e1xyXG4gICAgICAgICAgICAgIG5hbWU6XCIke3Byb2plY3ROYW1lfVwiXHJcbiAgICAgICAgICAgICAgY29kZToke3Byb2plY3RDb2RlfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBjb2RlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYCxcclxuICAgIH0pO1xyXG4gICAgIGFsZXJ0KCdZb3UgYXJlIHN1Ym1pdHRpbmcgJyArIFwiUHJvamVjdCBOYW1lOiBcIiArIHByb2plY3ROYW1lICsgXCJhbmQgQ29kZTogXCIrIHByb2plY3RDb2RlKTtcclxuICB9O1xyXG4gIGNvbnN0IG15Q2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIC8vICB0aGlzLnNldHByb2plY3RGb3JtRGF0YSh7IHByb2plY3ROYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgV2VsY29tZSB0byA8YSBocmVmPVwiI1wiPlByb2plY3QgTWFuYWdlcjwvYT5cclxuICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+TWFuYWdlIEFsbCB5b3VyIHByb2plY3RzIGhlcmUgPC9wPlxyXG4gICAgICAgIDxoMj5Gb2xsb3dpbmcgYXJlIHRoZSBSZWdpc3RlcmVkIFByb2plY3RzPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAge2NvdW50cmllcy5tYXAoKGNvdW50cnkpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17Y291bnRyeS5pZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFByb2plY3RzVmFsdWUoY291bnRyeS5pZCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDM+e2NvdW50cnkubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxwPntjb3VudHJ5LmNvZGV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDM+QWRkIE5ldyBQcm9qZWN0PC9oMz5cclxuXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17bXlTdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgPHA+UHJvamVjdCBOYW1lOjwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e215Q2hhbmdlSGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgPHA+UHJvamVjdCBDb2RlOjwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e215Q2hhbmdlSGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtjb25zb2xlLmxvZygnUHJvamVjdHMgYXJlJywgcHJvamVjdHMpfVxyXG4gICAgICAgIHtwcm9qZWN0cyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgICA8aDM+RW1wbG95ZWVzIHJlZ2lzdGVyZWQgdG8gdGhpcyBwcm9qZWN0IGFyZTwvaDM+XHJcbiAgICAgICAgICAgIHtwcm9qZWN0cyAmJlxyXG4gICAgICAgICAgICAgIHByb2plY3RzLm1hcCgoY291bnRyeSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NvdW50cnkucHJvamVjdElkfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgPGgzPntjb3VudHJ5LmZpcnN0TmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cD57Y291bnRyeS5jaXR5fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2V0UHJvamVjdHNWYWx1ZShlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcclxuICAgICAgcXVlcnk6IGdxbGBcclxuICAgICAgcXVlcnl7XHJcbiAgICAgICAgICBnZXRBbGxQcm9qRW1wbG95ZWVzKHByb2plY3RJZDpcIiR7ZX1cIil7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgICAgICBjaXR5XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YS5nZXRBbGxQcm9qRW1wbG95ZWVzKTtcclxuICAgIHNldFByb2plY3RzKGRhdGEuZ2V0QWxsUHJvakVtcGxveWVlcyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIGNvdW50cmllczogZGF0YS5nZXRBbGxQcm9qRW1wbG95ZWVzLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XHJcbiAgICBxdWVyeTogZ3FsYFxyXG4gICAgICBxdWVyeSB7XHJcbiAgICAgICAgZ2V0QWxsUHJvamVjdHMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNvZGVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGAsXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coJ0RhdGEgaXMgOiAnLCBkYXRhLmdldEFsbFByb2plY3RzKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY291bnRyaWVzOiBkYXRhLmdldEFsbFByb2plY3RzLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=