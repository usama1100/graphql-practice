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
              projectCode = e.target[1].value;
              _context.next = 6;
              return _apollo_client__WEBPACK_IMPORTED_MODULE_5__.default.mutate({
                mutation: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject(), projectName, projectCode)
              });

            case 6:
              _yield$client$mutate = _context.sent;
              data = _yield$client$mutate.data;
              alert('You are submitting ' + 'Project Name: ' + projectName + ' and Code: ' + projectCode);

            case 9:
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
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
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
          lineNumber: 64,
          columnNumber: 22
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().description),
        children: "Manage All your projects here "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Following are the Registered Projects"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
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
              lineNumber: 76,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: country.code
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this)]
          }, country.id, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Add New Project"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: mySubmitHandler,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Project Name:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            onChange: myChangeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Project Code:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            onChange: myChangeHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this), projects && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().grid),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Employees registered to this project are"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, this), projects && projects.map(function (country) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().card),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: country.firstName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: country.city
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 19
            }, _this)]
          }, country.projectId, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 17
          }, _this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().footer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        target: "_blank",
        rel: "noopener noreferrer",
        children: ["Powered by", 'TECHNOVE']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
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
              _context2.next = 2;
              return _apollo_client__WEBPACK_IMPORTED_MODULE_5__.default.query({
                query: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject2(), e)
              });

            case 2:
              _yield$client$query = _context2.sent;
              data = _yield$client$query.data;
              setProjects(data.getAllProjEmployees);
              return _context2.abrupt("return", {
                props: {
                  countries: data.getAllProjEmployees
                }
              });

            case 6:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9qZWN0TmFtZSIsInByb2plY3RDb2RlIiwiY291bnRyaWVzIiwidXNlU3RhdGUiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwicHJvamVjdEZvcm1EYXRhIiwic2V0cHJvamVjdEZvcm1EYXRhIiwibXlTdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiY2xpZW50IiwibXV0YXRpb24iLCJncWwiLCJkYXRhIiwiYWxlcnQiLCJteUNoYW5nZUhhbmRsZXIiLCJzdHlsZXMiLCJtYXAiLCJjb3VudHJ5Iiwic2V0UHJvamVjdHNWYWx1ZSIsImlkIiwibmFtZSIsImNvZGUiLCJmaXJzdE5hbWUiLCJjaXR5IiwicHJvamVjdElkIiwicXVlcnkiLCJnZXRBbGxQcm9qRW1wbG95ZWVzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUWUsU0FBU0EsSUFBVCxPQUViQyxXQUZhLEVBR2JDLFdBSGEsRUFJYjtBQUFBOztBQUFBOztBQUFBLE1BSEVDLFNBR0YsUUFIRUEsU0FHRjs7QUFBQSxrQkFDZ0NDLCtDQUFRLEVBRHhDO0FBQUEsTUFDT0MsUUFEUDtBQUFBLE1BQ2lCQyxXQURqQjs7QUFBQSxtQkFFOENGLCtDQUFRLEVBRnREO0FBQUEsTUFFT0csZUFGUDtBQUFBLE1BRXdCQyxrQkFGeEI7O0FBSUEsTUFBTUMsZUFBZTtBQUFBLHNWQUFHLGlCQUFPQyxDQUFQO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdEJBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlILENBQUMsQ0FBQ0ksTUFBRixDQUFTLENBQVQsRUFB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QUksQ0FBQ2MsbUJBQU4sQ0FBWDtBQVpGLGdEQWFTO0FBQ0xDLHFCQUFLLEVBQUU7QUFDTC9CLDJCQUFTLEVBQUVnQixJQUFJLENBQUNjO0FBRFg7QUFERixlQWJUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBckdBO0FBQUE7QUFBQTtBQXdIRDs7R0E1SHVCakMsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNjE5NGU1NjljZDQxNDdjY2VjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gJy4uLy4uL2Fwb2xsby1jbGllbnQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBFbXBsb3llZUNyZWF0ZUR0byB9IGZyb20gJy4uLy4uL3NlcnZlci9lbXBsb3llZS9kdG8vY3JlYXRlLWVtcGxveWVlLmlucHV0JztcclxuXHJcbmludGVyZmFjZSBwcm9qZWN0RGF0YSB7XHJcbiAgcHJvamVjdE5hbWU6IHN0cmluZztcclxuICBwcm9qZWN0Q29kZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKFxyXG4gIHsgY291bnRyaWVzIH0sXHJcbiAgcHJvamVjdE5hbWU6IHByb2plY3REYXRhLFxyXG4gIHByb2plY3RDb2RlOiBwcm9qZWN0RGF0YSxcclxuKSB7XHJcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZTxFbXBsb3llZUNyZWF0ZUR0b1tdPigpO1xyXG4gIGNvbnN0IFtwcm9qZWN0Rm9ybURhdGEsIHNldHByb2plY3RGb3JtRGF0YV0gPSB1c2VTdGF0ZTxwcm9qZWN0RGF0YT4oKTtcclxuXHJcbiAgY29uc3QgbXlTdWJtaXRIYW5kbGVyID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0WzBdLnZhbHVlICsgJyAnICsgZS50YXJnZXRbMV0udmFsdWUpO1xyXG4gICAgcHJvamVjdE5hbWUgPSBlLnRhcmdldFswXS52YWx1ZTtcclxuICAgIHByb2plY3RDb2RlID0gZS50YXJnZXRbMV0udmFsdWU7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQubXV0YXRlKHtcclxuICAgICAgbXV0YXRpb246IGdxbGBcclxuICAgICAgICBtdXRhdGlvbntcclxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdChwcm9qZWN0OntcclxuICAgICAgICAgICAgICBuYW1lOlwiJHtwcm9qZWN0TmFtZX1cIlxyXG4gICAgICAgICAgICAgIGNvZGU6JHtwcm9qZWN0Q29kZX1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgY29kZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGAsXHJcbiAgICB9KTtcclxuICAgIGFsZXJ0KFxyXG4gICAgICAnWW91IGFyZSBzdWJtaXR0aW5nICcgK1xyXG4gICAgICAgICdQcm9qZWN0IE5hbWU6ICcgK1xyXG4gICAgICAgIHByb2plY3ROYW1lICtcclxuICAgICAgICAnIGFuZCBDb2RlOiAnICtcclxuICAgICAgICBwcm9qZWN0Q29kZSxcclxuICAgICk7XHJcbiAgfTtcclxuICBjb25zdCBteUNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyAgdGhpcy5zZXRwcm9qZWN0Rm9ybURhdGEoeyBwcm9qZWN0TmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgIFdlbGNvbWUgdG8gPGEgaHJlZj1cIiNcIj5Qcm9qZWN0IE1hbmFnZXI8L2E+XHJcbiAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259Pk1hbmFnZSBBbGwgeW91ciBwcm9qZWN0cyBoZXJlIDwvcD5cclxuICAgICAgICA8aDI+Rm9sbG93aW5nIGFyZSB0aGUgUmVnaXN0ZXJlZCBQcm9qZWN0czwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIHtjb3VudHJpZXMubWFwKChjb3VudHJ5KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2NvdW50cnkuaWR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQcm9qZWN0c1ZhbHVlKGNvdW50cnkuaWQpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGgzPntjb3VudHJ5Lm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICA8cD57Y291bnRyeS5jb2RlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgzPkFkZCBOZXcgUHJvamVjdDwvaDM+XHJcblxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e215U3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgIDxwPlByb2plY3QgTmFtZTo8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtteUNoYW5nZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgIDxwPlByb2plY3QgQ29kZTo8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtteUNoYW5nZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7cHJvamVjdHMgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgICAgPGgzPkVtcGxveWVlcyByZWdpc3RlcmVkIHRvIHRoaXMgcHJvamVjdCBhcmU8L2gzPlxyXG4gICAgICAgICAgICB7cHJvamVjdHMgJiZcclxuICAgICAgICAgICAgICBwcm9qZWN0cy5tYXAoKGNvdW50cnkpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb3VudHJ5LnByb2plY3RJZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz57Y291bnRyeS5maXJzdE5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+e2NvdW50cnkuY2l0eX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBQb3dlcmVkIGJ5eydURUNITk9WRSd9XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2V0UHJvamVjdHNWYWx1ZShlOiBhbnkpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcclxuICAgICAgcXVlcnk6IGdxbGBcclxuICAgICAgcXVlcnl7XHJcbiAgICAgICAgICBnZXRBbGxQcm9qRW1wbG95ZWVzKHByb2plY3RJZDpcIiR7ZX1cIil7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgICAgICBjaXR5XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0UHJvamVjdHMoZGF0YS5nZXRBbGxQcm9qRW1wbG95ZWVzKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgY291bnRyaWVzOiBkYXRhLmdldEFsbFByb2pFbXBsb3llZXMsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcclxuICAgIHF1ZXJ5OiBncWxgXHJcbiAgICAgIHF1ZXJ5IHtcclxuICAgICAgICBnZXRBbGxQcm9qZWN0cyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY29kZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYCxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNvdW50cmllczogZGF0YS5nZXRBbGxQcm9qZWN0cyxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9