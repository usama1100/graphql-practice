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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9qZWN0TmFtZSIsInByb2plY3RDb2RlIiwiY291bnRyaWVzIiwidXNlU3RhdGUiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwicHJvamVjdEZvcm1EYXRhIiwic2V0cHJvamVjdEZvcm1EYXRhIiwibXlTdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiY2xpZW50IiwibXV0YXRpb24iLCJncWwiLCJkYXRhIiwibXlDaGFuZ2VIYW5kbGVyIiwic3R5bGVzIiwibWFwIiwiY291bnRyeSIsInNldFByb2plY3RzVmFsdWUiLCJpZCIsIm5hbWUiLCJjb2RlIiwiZmlyc3ROYW1lIiwiY2l0eSIsInByb2plY3RJZCIsImxvZ28iLCJxdWVyeSIsImdldEFsbFByb2pFbXBsb3llZXMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRZSxTQUFTQSxJQUFULE9BRWJDLFdBRmEsRUFHYkMsV0FIYSxFQUliO0FBQUE7O0FBQUE7O0FBQUEsTUFIRUMsU0FHRixRQUhFQSxTQUdGOztBQUFBLGtCQUNnQ0MsK0NBQVEsRUFEeEM7QUFBQSxNQUNPQyxRQURQO0FBQUEsTUFDaUJDLFdBRGpCOztBQUFBLG1CQUU0Q0YsK0NBQVEsRUFGcEQ7QUFBQSxNQUVLRyxlQUZMO0FBQUEsTUFFc0JDLGtCQUZ0Qjs7QUFJQSxNQUFNQyxlQUFlO0FBQUEsc1ZBQUcsaUJBQU9DLENBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QkEsZUFBQyxDQUFDQyxjQUFGO0FBQ0FDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUgsQ0FBQyxDQUFDSSxNQUFGLENBQVMsQ0FBVCxFQUFZ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QUFBO0FBQUE7O0FBQUE7QUFBQSw4VkFtR0Esa0JBQWdDZCxDQUFoQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VFLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUgsQ0FBWjtBQURGO0FBQUEscUJBR3lCTSx5REFBQSxDQUFhO0FBQ2xDZ0IscUJBQUssRUFBRWQsbURBQUYscUJBRWdDUixDQUZoQztBQUQ2QixlQUFiLENBSHpCOztBQUFBO0FBQUE7QUFHVVMsa0JBSFYsdUJBR1VBLElBSFY7QUFjRVAscUJBQU8sQ0FBQ0MsR0FBUixDQUFZTSxJQUFJLENBQUNjLG1CQUFqQjtBQUNBM0IseUJBQVcsQ0FBQ2EsSUFBSSxDQUFDYyxtQkFBTixDQUFYO0FBZkYsZ0RBZ0JTO0FBQ0xDLHFCQUFLLEVBQUU7QUFDTC9CLDJCQUFTLEVBQUVnQixJQUFJLENBQUNjO0FBRFg7QUFERixlQWhCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQW5HQTtBQUFBO0FBQUE7QUF5SEQ7O0dBN0h1QmpDLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2IxNDU2OGRmYTZkOWVlMzE4NDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9hcG9sbG8tY2xpZW50JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRW1wbG95ZWVDcmVhdGVEdG8gfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZW1wbG95ZWUvZHRvL2NyZWF0ZS1lbXBsb3llZS5pbnB1dCc7XHJcblxyXG5pbnRlcmZhY2UgcHJvamVjdERhdGEge1xyXG4gIHByb2plY3ROYW1lOiBzdHJpbmc7XHJcbiAgcHJvamVjdENvZGU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShcclxuICB7IGNvdW50cmllcyB9LFxyXG4gIHByb2plY3ROYW1lOiBwcm9qZWN0RGF0YSxcclxuICBwcm9qZWN0Q29kZTogcHJvamVjdERhdGEsXHJcbikge1xyXG4gIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGU8RW1wbG95ZWVDcmVhdGVEdG9bXT4oKTtcclxuY29uc3QgW3Byb2plY3RGb3JtRGF0YSwgc2V0cHJvamVjdEZvcm1EYXRhXSA9IHVzZVN0YXRlPHByb2plY3REYXRhPigpXHJcblxyXG4gIGNvbnN0IG15U3VibWl0SGFuZGxlciA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldFswXS52YWx1ZSArXCIgXCIgKyBlLnRhcmdldFsxXS52YWx1ZSk7XHJcbiAgICBwcm9qZWN0TmFtZT1lLnRhcmdldFswXS52YWx1ZTtcclxuICAgIHByb2plY3RDb2RlPWUudGFyZ2V0WzFdLnZhbHVlO1xyXG4gICAgLy8gc2V0cHJvamVjdEZvcm1EYXRhKHtwcm9qZWN0TmFtZSxwcm9qZWN0Q29kZX0pO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdE5hbWUscHJvamVjdENvZGUpO1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcclxuICAgICAgICBtdXRhdGlvbjogZ3FsYFxyXG4gICAgICAgIG11dGF0aW9ue1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3Q6e1xyXG4gICAgICAgICAgICAgIG5hbWU6XCIke3Byb2plY3ROYW1lfVwiXHJcbiAgICAgICAgICAgICAgY29kZToke3Byb2plY3RDb2RlfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBjb2RlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYCxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiREF0YSBhZnRlciBjcmVhdGluZyBwcm9qZWN0IDogXCIsZGF0YSk7XHJcbiAgICAvLyBhbGVydCgnWW91IGFyZSBzdWJtaXR0aW5nICcgKyB0aGlzLnN0YXRlLnVzZXJuYW1lKTtcclxuICB9O1xyXG4gIGNvbnN0IG15Q2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAvLyAgdGhpcy5zZXRwcm9qZWN0Rm9ybURhdGEoeyBwcm9qZWN0TmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgIFdlbGNvbWUgdG8gPGEgaHJlZj1cIiNcIj5Qcm9qZWN0IE1hbmFnZXI8L2E+XHJcbiAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259Pk1hbmFnZSBBbGwgeW91ciBwcm9qZWN0cyBoZXJlIDwvcD5cclxuICAgICAgICA8aDI+Rm9sbG93aW5nIGFyZSB0aGUgUmVnaXN0ZXJlZCBQcm9qZWN0czwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIHtjb3VudHJpZXMubWFwKChjb3VudHJ5KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2NvdW50cnkuaWR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQcm9qZWN0c1ZhbHVlKGNvdW50cnkuaWQpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGgzPntjb3VudHJ5Lm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICA8cD57Y291bnRyeS5jb2RlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgzPkFkZCBOZXcgUHJvamVjdDwvaDM+XHJcblxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e215U3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgIDxwPlByb2plY3QgTmFtZTo8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtteUNoYW5nZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgIDxwPlByb2plY3QgQ29kZTo8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtteUNoYW5nZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Y29uc29sZS5sb2coJ1Byb2plY3RzIGFyZScsIHByb2plY3RzKX1cclxuICAgICAgICB7cHJvamVjdHMgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgICAgPGgzPkVtcGxveWVlcyByZWdpc3RlcmVkIHRvIHRoaXMgcHJvamVjdCBhcmU8L2gzPlxyXG4gICAgICAgICAgICB7cHJvamVjdHMgJiZcclxuICAgICAgICAgICAgICBwcm9qZWN0cy5tYXAoKGNvdW50cnkpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb3VudHJ5LnByb2plY3RJZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz57Y291bnRyeS5maXJzdE5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+e2NvdW50cnkuY2l0eX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBQb3dlcmVkIGJ5eycgJ31cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNldFByb2plY3RzVmFsdWUoZTogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XHJcbiAgICAgIHF1ZXJ5OiBncWxgXHJcbiAgICAgIHF1ZXJ5e1xyXG4gICAgICAgICAgZ2V0QWxsUHJvakVtcGxveWVlcyhwcm9qZWN0SWQ6XCIke2V9XCIpe1xyXG4gICAgICAgICAgICBmaXJzdE5hbWVcclxuICAgICAgICAgICAgY2l0eVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYCxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGEuZ2V0QWxsUHJvakVtcGxveWVlcyk7XHJcbiAgICBzZXRQcm9qZWN0cyhkYXRhLmdldEFsbFByb2pFbXBsb3llZXMpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBjb3VudHJpZXM6IGRhdGEuZ2V0QWxsUHJvakVtcGxveWVlcyxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xyXG4gICAgcXVlcnk6IGdxbGBcclxuICAgICAgcXVlcnkge1xyXG4gICAgICAgIGdldEFsbFByb2plY3RzIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBjb2RlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgLFxyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKCdEYXRhIGlzIDogJywgZGF0YS5nZXRBbGxQcm9qZWN0cyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNvdW50cmllczogZGF0YS5nZXRBbGxQcm9qZWN0cyxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9