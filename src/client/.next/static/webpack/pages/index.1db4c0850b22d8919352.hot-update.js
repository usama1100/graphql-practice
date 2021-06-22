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
              console.log(e.target[0].value + " " + e.target[1].value);
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
              console.log("DAta after creating project : ", data); // alert('You are submitting ' + this.state.username);

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

  var myChangeHandler = function myChangeHandler(e) {
    console.log(e.target.value); //  this.setprojectFormData({ projectName: event.target.value });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
          lineNumber: 61,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),
        children: "Manage All your projects here "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Following are the Registered Projects"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
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
              lineNumber: 73,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: country.code
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this)]
          }, country.id, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Add New Project"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: mySubmitHandler,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Project Name:"
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Project Code:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            onChange: myChangeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this), console.log('Projects are', projects), projects && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().grid),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Employees registered to this project are"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, this), projects && projects.map(function (country) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().card),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: country.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: country.city
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 19
            }, _this)]
          }, country.projectId, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 17
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
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
          lineNumber: 110,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9qZWN0TmFtZSIsInByb2plY3RDb2RlIiwiY291bnRyaWVzIiwidXNlU3RhdGUiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwicHJvamVjdEZvcm1EYXRhIiwic2V0cHJvamVjdEZvcm1EYXRhIiwibXlTdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiY2xpZW50IiwibXV0YXRpb24iLCJncWwiLCJkYXRhIiwibXlDaGFuZ2VIYW5kbGVyIiwic3R5bGVzIiwibWFwIiwiY291bnRyeSIsInNldFByb2plY3RzVmFsdWUiLCJpZCIsIm5hbWUiLCJjb2RlIiwiZmlyc3ROYW1lIiwiY2l0eSIsInByb2plY3RJZCIsImxvZ28iLCJxdWVyeSIsImdldEFsbFByb2pFbXBsb3llZXMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRZSxTQUFTQSxJQUFULE9BRWJDLFdBRmEsRUFHYkMsV0FIYSxFQUliO0FBQUE7O0FBQUE7O0FBQUEsTUFIRUMsU0FHRixRQUhFQSxTQUdGOztBQUFBLGtCQUNnQ0MsK0NBQVEsRUFEeEM7QUFBQSxNQUNPQyxRQURQO0FBQUEsTUFDaUJDLFdBRGpCOztBQUFBLG1CQUU0Q0YsK0NBQVEsRUFGcEQ7QUFBQSxNQUVLRyxlQUZMO0FBQUEsTUFFc0JDLGtCQUZ0Qjs7QUFJQSxNQUFNQyxlQUFlO0FBQUEsc1ZBQUcsaUJBQU9DLENBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QkEsZUFBQyxDQUFDQyxjQUFGO0FBQ0FDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUgsQ0FBQyxDQUFDSSxNQUFGLENBQVMsQ0FBVCxFQUFZ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WUFsREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7O0FBbkNBLFdBbUdlUCxnQkFuR2Y7QUFBQTtBQUFBOztBQUFBO0FBQUEsOFZBbUdBLGtCQUFnQ2QsQ0FBaEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFRSxxQkFBTyxDQUFDQyxHQUFSLENBQVlILENBQVo7QUFERjtBQUFBLHFCQUd5Qk0seURBQUEsQ0FBYTtBQUNsQ2dCLHFCQUFLLEVBQUVkLG1EQUFGLHFCQUVnQ1IsQ0FGaEM7QUFENkIsZUFBYixDQUh6Qjs7QUFBQTtBQUFBO0FBR1VTLGtCQUhWLHVCQUdVQSxJQUhWO0FBY0VQLHFCQUFPLENBQUNDLEdBQVIsQ0FBWU0sSUFBSSxDQUFDYyxtQkFBakI7QUFDQTNCLHlCQUFXLENBQUNhLElBQUksQ0FBQ2MsbUJBQU4sQ0FBWDtBQWZGLGdEQWdCUztBQUNMQyxxQkFBSyxFQUFFO0FBQ0wvQiwyQkFBUyxFQUFFZ0IsSUFBSSxDQUFDYztBQURYO0FBREYsZUFoQlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FuR0E7QUFBQTtBQUFBO0FBeUhEOztHQTdIdUJqQyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFkYjRjMDg1MGIyMmQ4OTE5MzUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEVtcGxveWVlQ3JlYXRlRHRvIH0gZnJvbSAnLi4vLi4vc2VydmVyL2VtcGxveWVlL2R0by9jcmVhdGUtZW1wbG95ZWUuaW5wdXQnO1xyXG5cclxuaW50ZXJmYWNlIHByb2plY3REYXRhIHtcclxuICBwcm9qZWN0TmFtZTogc3RyaW5nO1xyXG4gIHByb2plY3RDb2RlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoXHJcbiAgeyBjb3VudHJpZXMgfSxcclxuICBwcm9qZWN0TmFtZTogcHJvamVjdERhdGEsXHJcbiAgcHJvamVjdENvZGU6IHByb2plY3REYXRhLFxyXG4pIHtcclxuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlPEVtcGxveWVlQ3JlYXRlRHRvW10+KCk7XHJcbmNvbnN0IFtwcm9qZWN0Rm9ybURhdGEsIHNldHByb2plY3RGb3JtRGF0YV0gPSB1c2VTdGF0ZTxwcm9qZWN0RGF0YT4oKVxyXG5cclxuICBjb25zdCBteVN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXRbMF0udmFsdWUgK1wiIFwiICsgZS50YXJnZXRbMV0udmFsdWUpO1xyXG4gICAgcHJvamVjdE5hbWU9ZS50YXJnZXRbMF0udmFsdWU7XHJcbiAgICBwcm9qZWN0Q29kZT1lLnRhcmdldFsxXS52YWx1ZTtcclxuICAgIC8vIHNldHByb2plY3RGb3JtRGF0YSh7cHJvamVjdE5hbWUscHJvamVjdENvZGV9KTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lLHByb2plY3RDb2RlKTtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XHJcbiAgICAgICAgbXV0YXRpb246IGdxbGBcclxuICAgICAgICBtdXRhdGlvbntcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0OntcclxuICAgICAgICAgICAgICBuYW1lOlwiJHtwcm9qZWN0TmFtZX1cIlxyXG4gICAgICAgICAgICAgIGNvZGU6JHtwcm9qZWN0Q29kZX1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgY29kZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGAsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkRBdGEgYWZ0ZXIgY3JlYXRpbmcgcHJvamVjdCA6IFwiLGRhdGEpO1xyXG4gICAgLy8gYWxlcnQoJ1lvdSBhcmUgc3VibWl0dGluZyAnICsgdGhpcy5zdGF0ZS51c2VybmFtZSk7XHJcbiAgfTtcclxuICBjb25zdCBteUNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgLy8gIHRoaXMuc2V0cHJvamVjdEZvcm1EYXRhKHsgcHJvamVjdE5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICBXZWxjb21lIHRvIDxhIGhyZWY9XCIjXCI+UHJvamVjdCBNYW5hZ2VyPC9hPlxyXG4gICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5NYW5hZ2UgQWxsIHlvdXIgcHJvamVjdHMgaGVyZSA8L3A+XHJcbiAgICAgICAgPGgyPkZvbGxvd2luZyBhcmUgdGhlIFJlZ2lzdGVyZWQgUHJvamVjdHM8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7Y291bnRyaWVzLm1hcCgoY291bnRyeSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtjb3VudHJ5LmlkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UHJvamVjdHNWYWx1ZShjb3VudHJ5LmlkKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMz57Y291bnRyeS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgPHA+e2NvdW50cnkuY29kZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMz5BZGQgTmV3IFByb2plY3Q8L2gzPlxyXG5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtteVN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICA8cD5Qcm9qZWN0IE5hbWU6PC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17bXlDaGFuZ2VIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICA8cD5Qcm9qZWN0IENvZGU6PC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17bXlDaGFuZ2VIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2NvbnNvbGUubG9nKCdQcm9qZWN0cyBhcmUnLCBwcm9qZWN0cyl9XHJcbiAgICAgICAge3Byb2plY3RzICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgIDxoMz5FbXBsb3llZXMgcmVnaXN0ZXJlZCB0byB0aGlzIHByb2plY3QgYXJlPC9oMz5cclxuICAgICAgICAgICAge3Byb2plY3RzICYmXHJcbiAgICAgICAgICAgICAgcHJvamVjdHMubWFwKChjb3VudHJ5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y291bnRyeS5wcm9qZWN0SWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e2NvdW50cnkuZmlyc3ROYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntjb3VudHJ5LmNpdHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUG93ZXJlZCBieXsnICd9XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzZXRQcm9qZWN0c1ZhbHVlKGU6IGFueSkge1xyXG4gICAgY29uc29sZS5sb2coZSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xyXG4gICAgICBxdWVyeTogZ3FsYFxyXG4gICAgICBxdWVyeXtcclxuICAgICAgICAgIGdldEFsbFByb2pFbXBsb3llZXMocHJvamVjdElkOlwiJHtlfVwiKXtcclxuICAgICAgICAgICAgZmlyc3ROYW1lXHJcbiAgICAgICAgICAgIGNpdHlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGAsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLmdldEFsbFByb2pFbXBsb3llZXMpO1xyXG4gICAgc2V0UHJvamVjdHMoZGF0YS5nZXRBbGxQcm9qRW1wbG95ZWVzKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgY291bnRyaWVzOiBkYXRhLmdldEFsbFByb2pFbXBsb3llZXMsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcclxuICAgIHF1ZXJ5OiBncWxgXHJcbiAgICAgIHF1ZXJ5IHtcclxuICAgICAgICBnZXRBbGxQcm9qZWN0cyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY29kZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYCxcclxuICB9KTtcclxuICBjb25zb2xlLmxvZygnRGF0YSBpcyA6ICcsIGRhdGEuZ2V0QWxsUHJvamVjdHMpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBjb3VudHJpZXM6IGRhdGEuZ2V0QWxsUHJvamVjdHMsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==