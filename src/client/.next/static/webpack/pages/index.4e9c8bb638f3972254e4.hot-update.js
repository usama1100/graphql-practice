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
  var data = (0,J_office_work_graphql_practice_graphql_practice_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n        mutation{\n            createProject(project:{\n              name:\"project1\"\n              code:200\n            })\n            {\n                error\n                status\n              }\n          }\n        "]);

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
                mutation: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject())
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
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
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
          lineNumber: 60,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),
        children: "Manage All your projects here "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Following are the Registered Projects"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
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
              lineNumber: 72,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: country.code
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this)]
          }, country.id, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Add New Project"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: mySubmitHandler,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Project Name:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            onChange: myChangeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Project Code:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            onChange: myChangeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), console.log('Projects are', projects), projects && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().grid),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Employees registered to this project are"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, this), projects && projects.map(function (country) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().card),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: country.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: country.city
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 19
            }, _this)]
          }, country.projectId, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 17
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
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
          lineNumber: 109,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9qZWN0TmFtZSIsInByb2plY3RDb2RlIiwiY291bnRyaWVzIiwidXNlU3RhdGUiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwicHJvamVjdEZvcm1EYXRhIiwic2V0cHJvamVjdEZvcm1EYXRhIiwibXlTdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiY2xpZW50IiwibXV0YXRpb24iLCJncWwiLCJkYXRhIiwibXlDaGFuZ2VIYW5kbGVyIiwic3R5bGVzIiwibWFwIiwiY291bnRyeSIsInNldFByb2plY3RzVmFsdWUiLCJpZCIsIm5hbWUiLCJjb2RlIiwiZmlyc3ROYW1lIiwiY2l0eSIsInByb2plY3RJZCIsImxvZ28iLCJxdWVyeSIsImdldEFsbFByb2pFbXBsb3llZXMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRZSxTQUFTQSxJQUFULE9BRWJDLFdBRmEsRUFHYkMsV0FIYSxFQUliO0FBQUE7O0FBQUE7O0FBQUEsTUFIRUMsU0FHRixRQUhFQSxTQUdGOztBQUFBLGtCQUNnQ0MsK0NBQVEsRUFEeEM7QUFBQSxNQUNPQyxRQURQO0FBQUEsTUFDaUJDLFdBRGpCOztBQUFBLG1CQUU0Q0YsK0NBQVEsRUFGcEQ7QUFBQSxNQUVLRyxlQUZMO0FBQUEsTUFFc0JDLGtCQUZ0Qjs7QUFJQSxNQUFNQyxlQUFlO0FBQUEsc1ZBQUcsaUJBQU9DLENBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QkEsZUFBQyxDQUFDQyxjQUFGO0FBQ0FDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUgsQ0FBQyxDQUFDSSxNQUFGLENBQVMsQ0FBVCxFQUFZ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O0FBQUEsVUFERjs7QUFsQ0EsV0FrR2VQLGdCQWxHZjtBQUFBO0FBQUE7O0FBQUE7QUFBQSw4VkFrR0Esa0JBQWdDZCxDQUFoQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VFLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUgsQ0FBWjtBQURGO0FBQUEscUJBR3lCTSx5REFBQSxDQUFhO0FBQ2xDZ0IscUJBQUssRUFBRWQsbURBQUYscUJBRWdDUixDQUZoQztBQUQ2QixlQUFiLENBSHpCOztBQUFBO0FBQUE7QUFHVVMsa0JBSFYsdUJBR1VBLElBSFY7QUFjRVAscUJBQU8sQ0FBQ0MsR0FBUixDQUFZTSxJQUFJLENBQUNjLG1CQUFqQjtBQUNBM0IseUJBQVcsQ0FBQ2EsSUFBSSxDQUFDYyxtQkFBTixDQUFYO0FBZkYsZ0RBZ0JTO0FBQ0xDLHFCQUFLLEVBQUU7QUFDTC9CLDJCQUFTLEVBQUVnQixJQUFJLENBQUNjO0FBRFg7QUFERixlQWhCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWxHQTtBQUFBO0FBQUE7QUF3SEQ7O0dBNUh1QmpDLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGU5YzhiYjYzOGYzOTcyMjU0ZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9hcG9sbG8tY2xpZW50JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRW1wbG95ZWVDcmVhdGVEdG8gfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZW1wbG95ZWUvZHRvL2NyZWF0ZS1lbXBsb3llZS5pbnB1dCc7XHJcblxyXG5pbnRlcmZhY2UgcHJvamVjdERhdGEge1xyXG4gIHByb2plY3ROYW1lOiBzdHJpbmc7XHJcbiAgcHJvamVjdENvZGU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShcclxuICB7IGNvdW50cmllcyB9LFxyXG4gIHByb2plY3ROYW1lOiBwcm9qZWN0RGF0YSxcclxuICBwcm9qZWN0Q29kZTogcHJvamVjdERhdGEsXHJcbikge1xyXG4gIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGU8RW1wbG95ZWVDcmVhdGVEdG9bXT4oKTtcclxuY29uc3QgW3Byb2plY3RGb3JtRGF0YSwgc2V0cHJvamVjdEZvcm1EYXRhXSA9IHVzZVN0YXRlPHByb2plY3REYXRhPigpXHJcblxyXG4gIGNvbnN0IG15U3VibWl0SGFuZGxlciA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldFswXS52YWx1ZSArXCIgXCIgKyBlLnRhcmdldFsxXS52YWx1ZSk7XHJcbiAgICBwcm9qZWN0TmFtZT1lLnRhcmdldFswXS52YWx1ZTtcclxuICAgIHByb2plY3RDb2RlPWUudGFyZ2V0WzFdLnZhbHVlO1xyXG4gICAgLy8gc2V0cHJvamVjdEZvcm1EYXRhKHtwcm9qZWN0TmFtZSxwcm9qZWN0Q29kZX0pO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdE5hbWUscHJvamVjdENvZGUpO1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcclxuICAgICAgICBtdXRhdGlvbjogZ3FsYFxyXG4gICAgICAgIG11dGF0aW9ue1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3Q6e1xyXG4gICAgICAgICAgICAgIG5hbWU6XCJwcm9qZWN0MVwiXHJcbiAgICAgICAgICAgICAgY29kZToyMDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICAgIHN0YXR1c1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJEQXRhIGFmdGVyIGNyZWF0aW5nIHByb2plY3QgOiBcIixkYXRhKTtcclxuICAgIC8vIGFsZXJ0KCdZb3UgYXJlIHN1Ym1pdHRpbmcgJyArIHRoaXMuc3RhdGUudXNlcm5hbWUpO1xyXG4gIH07XHJcbiAgY29uc3QgbXlDaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgIC8vICB0aGlzLnNldHByb2plY3RGb3JtRGF0YSh7IHByb2plY3ROYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgV2VsY29tZSB0byA8YSBocmVmPVwiI1wiPlByb2plY3QgTWFuYWdlcjwvYT5cclxuICAgICAgICA8L2gxPlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+TWFuYWdlIEFsbCB5b3VyIHByb2plY3RzIGhlcmUgPC9wPlxyXG4gICAgICAgIDxoMj5Gb2xsb3dpbmcgYXJlIHRoZSBSZWdpc3RlcmVkIFByb2plY3RzPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAge2NvdW50cmllcy5tYXAoKGNvdW50cnkpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17Y291bnRyeS5pZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFByb2plY3RzVmFsdWUoY291bnRyeS5pZCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDM+e2NvdW50cnkubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxwPntjb3VudHJ5LmNvZGV9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDM+QWRkIE5ldyBQcm9qZWN0PC9oMz5cclxuXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17bXlTdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgPHA+UHJvamVjdCBOYW1lOjwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e215Q2hhbmdlSGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgPHA+UHJvamVjdCBDb2RlOjwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e215Q2hhbmdlSGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtjb25zb2xlLmxvZygnUHJvamVjdHMgYXJlJywgcHJvamVjdHMpfVxyXG4gICAgICAgIHtwcm9qZWN0cyAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgICA8aDM+RW1wbG95ZWVzIHJlZ2lzdGVyZWQgdG8gdGhpcyBwcm9qZWN0IGFyZTwvaDM+XHJcbiAgICAgICAgICAgIHtwcm9qZWN0cyAmJlxyXG4gICAgICAgICAgICAgIHByb2plY3RzLm1hcCgoY291bnRyeSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NvdW50cnkucHJvamVjdElkfSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgPGgzPntjb3VudHJ5LmZpcnN0TmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cD57Y291bnRyeS5jaXR5fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2V0UHJvamVjdHNWYWx1ZShlOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcclxuICAgICAgcXVlcnk6IGdxbGBcclxuICAgICAgcXVlcnl7XHJcbiAgICAgICAgICBnZXRBbGxQcm9qRW1wbG95ZWVzKHByb2plY3RJZDpcIiR7ZX1cIil7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgICAgICBjaXR5XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YS5nZXRBbGxQcm9qRW1wbG95ZWVzKTtcclxuICAgIHNldFByb2plY3RzKGRhdGEuZ2V0QWxsUHJvakVtcGxveWVlcyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIGNvdW50cmllczogZGF0YS5nZXRBbGxQcm9qRW1wbG95ZWVzLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XHJcbiAgICBxdWVyeTogZ3FsYFxyXG4gICAgICBxdWVyeSB7XHJcbiAgICAgICAgZ2V0QWxsUHJvamVjdHMge1xyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIGNvZGVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGAsXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coJ0RhdGEgaXMgOiAnLCBkYXRhLmdldEFsbFByb2plY3RzKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY291bnRyaWVzOiBkYXRhLmdldEFsbFByb2plY3RzLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=