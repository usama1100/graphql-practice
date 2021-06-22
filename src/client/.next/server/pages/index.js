(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Home.module.css */ "../styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../apollo-client */ "../apollo-client.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "J:\\office_work\\graphql-practice\\graphql-practice\\src\\client\\pages\\index.tsx";





function Home({
  countries
}, projectName, projectCode) {
  const {
    0: projects,
    1: setProjects
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
  const {
    0: projectFormData,
    1: setprojectFormData
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();

  const mySubmitHandler = async e => {
    e.preventDefault();
    console.log(e.target[0].value + ' ' + e.target[1].value);
    projectName = e.target[0].value;
    projectCode = e.target[1].value;
    const {
      data
    } = await _apollo_client__WEBPACK_IMPORTED_MODULE_3__.default.mutate({
      mutation: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
        mutation{
            createProject(project:{
              name:"${projectName}"
              code:${projectCode}
            })
           {
            name
            id
            code
          }
          }
        `
    });
    alert('You are submitting ' + 'Project Name: ' + projectName + ' and Code: ' + projectCode);
  };

  const myChangeHandler = e => {//   console.log(e.target.value);
    //  this.setprojectFormData({ projectName: event.target.value });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
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
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
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
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().description),
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
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().grid),
        children: countries.map(country => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),
          onClick: () => setProjectsValue(country.id),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: country.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: country.code
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 15
          }, this)]
        }, country.id, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, this))
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
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().grid),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "Employees registered to this project are"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, this), projects && projects.map(country => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
            children: country.firstName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 19
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: country.city
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 19
          }, this)]
        }, country.projectId, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 17
        }, this))]
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
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer),
      children: ["Powered by ", 'TECHNOVE']
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);

  async function setProjectsValue(e) {
    const {
      data
    } = await _apollo_client__WEBPACK_IMPORTED_MODULE_3__.default.query({
      query: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
      query{
          getAllProjEmployees(projectId:"${e}"){
            firstName
            city
          }
        }
      `
    });
    setProjects(data.getAllProjEmployees);
    return {
      props: {
        countries: data.getAllProjEmployees
      }
    };
  }
}
async function getStaticProps() {
  const {
    data
  } = await _apollo_client__WEBPACK_IMPORTED_MODULE_3__.default.query({
    query: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`
      query {
        getAllProjects {
          id
          name
          code
        }
      }
    `
  });
  return {
    props: {
      countries: data.getAllProjects
    }
  };
}

/***/ }),

/***/ "../styles/Home.module.css":
/*!*********************************!*\
  !*** ../styles/Home.module.css ***!
  \*********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Home_container__1jV_4",
	"main": "Home_main__3fqCf",
	"footer": "Home_footer__3k5hC",
	"title": "Home_title__opuLn",
	"description": "Home_description__bcJmn",
	"code": "Home_code__1fywn",
	"grid": "Home_grid__2_R6k",
	"card": "Home_card__pnhcP",
	"logo": "Home_logo__2l5Sk"
};


/***/ }),

/***/ "../apollo-client.js":
/*!***************************!*\
  !*** ../apollo-client.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
// ./apollo-client.js



const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    uri: "http://localhost:3002/graphql",
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache(),
});

/* harmony default export */ __webpack_exports__["default"] = (client);

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL2Fwb2xsby1jbGllbnQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkhvbWUiLCJjb3VudHJpZXMiLCJwcm9qZWN0TmFtZSIsInByb2plY3RDb2RlIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsInVzZVN0YXRlIiwicHJvamVjdEZvcm1EYXRhIiwic2V0cHJvamVjdEZvcm1EYXRhIiwibXlTdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiZGF0YSIsImNsaWVudCIsIm11dGF0aW9uIiwiZ3FsIiwiYWxlcnQiLCJteUNoYW5nZUhhbmRsZXIiLCJzdHlsZXMiLCJtYXAiLCJjb3VudHJ5Iiwic2V0UHJvamVjdHNWYWx1ZSIsImlkIiwibmFtZSIsImNvZGUiLCJmaXJzdE5hbWUiLCJjaXR5IiwicHJvamVjdElkIiwicXVlcnkiLCJnZXRBbGxQcm9qRW1wbG95ZWVzIiwicHJvcHMiLCJnZXRTdGF0aWNQcm9wcyIsImdldEFsbFByb2plY3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFlLFNBQVNBLElBQVQsQ0FDYjtBQUFFQztBQUFGLENBRGEsRUFFYkMsV0FGYSxFQUdiQyxXQUhhLEVBSWI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLCtDQUFRLEVBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NGLCtDQUFRLEVBQXREOztBQUVBLFFBQU1HLGVBQWUsR0FBRyxNQUFPQyxDQUFQLElBQWE7QUFDbkNBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsQ0FBQyxDQUFDSSxNQUFGLENBQVMsQ0FBVCxFQUFZQyxLQUFaLEdBQW9CLEdBQXBCLEdBQTBCTCxDQUFDLENBQUNJLE1BQUYsQ0FBUyxDQUFULEVBQVlDLEtBQWxEO0FBQ0FiLGVBQVcsR0FBR1EsQ0FBQyxDQUFDSSxNQUFGLENBQVMsQ0FBVCxFQUFZQyxLQUExQjtBQUNBWixlQUFXLEdBQUdPLENBQUMsQ0FBQ0ksTUFBRixDQUFTLENBQVQsRUFBWUMsS0FBMUI7QUFFQSxVQUFNO0FBQUVDO0FBQUYsUUFBVyxNQUFNQywwREFBQSxDQUFjO0FBQ25DQyxjQUFRLEVBQUVDLCtDQUFJO0FBQ3BCO0FBQ0E7QUFDQSxzQkFBc0JqQixXQUFZO0FBQ2xDLHFCQUFxQkMsV0FBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYnlDLEtBQWQsQ0FBdkI7QUFlQWlCLFNBQUssQ0FDSCx3QkFDRSxnQkFERixHQUVFbEIsV0FGRixHQUdFLGFBSEYsR0FJRUMsV0FMQyxDQUFMO0FBT0QsR0E1QkQ7O0FBNkJBLFFBQU1rQixlQUFlLEdBQUlYLENBQUQsSUFBTyxDQUM3QjtBQUNBO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVksMEVBQWhCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBTSxlQUFTLEVBQUVBLHFFQUFqQjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBRUEsc0VBQWY7QUFBQSwrQ0FDYTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBRyxpQkFBUyxFQUFFQSw0RUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQU9FO0FBQUssaUJBQVMsRUFBRUEscUVBQWhCO0FBQUEsa0JBQ0dyQixTQUFTLENBQUNzQixHQUFWLENBQWVDLE9BQUQsaUJBQ2I7QUFFRSxtQkFBUyxFQUFFRixxRUFGYjtBQUdFLGlCQUFPLEVBQUUsTUFBTUcsZ0JBQWdCLENBQUNELE9BQU8sQ0FBQ0UsRUFBVCxDQUhqQztBQUFBLGtDQUtFO0FBQUEsc0JBQUtGLE9BQU8sQ0FBQ0c7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGLGVBTUU7QUFBQSxzQkFBSUgsT0FBTyxDQUFDSTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQSxXQUNPSixPQUFPLENBQUNFLEVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQW1CRTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBR0U7QUFBTSxrQkFBUSxFQUFFakIsZUFBaEI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLG9CQUFRLEVBQUVZO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRixlQUlFO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLG9CQUFRLEVBQUVBO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFLRTtBQUFPLGdCQUFJLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQkYsRUE4QkdqQixRQUFRLGlCQUNQO0FBQUssaUJBQVMsRUFBRWtCLHFFQUFoQjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUdsQixRQUFRLElBQ1BBLFFBQVEsQ0FBQ21CLEdBQVQsQ0FBY0MsT0FBRCxpQkFDWDtBQUE2QixtQkFBUyxFQUFFRixxRUFBeEM7QUFBQSxrQ0FDRTtBQUFBLHNCQUFLRSxPQUFPLENBQUNLO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUEsc0JBQUlMLE9BQU8sQ0FBQ007QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUEsV0FBVU4sT0FBTyxDQUFDTyxTQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBaURFO0FBQVEsZUFBUyxFQUFFVCx1RUFBbkI7QUFBQSxnQ0FFZ0IsVUFGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGOztBQTJEQSxpQkFBZUcsZ0JBQWYsQ0FBZ0NmLENBQWhDLEVBQXdDO0FBQ3RDLFVBQU07QUFBRU07QUFBRixRQUFXLE1BQU1DLHlEQUFBLENBQWE7QUFDbENlLFdBQUssRUFBRWIsK0NBQUk7QUFDakI7QUFDQSwyQ0FBMkNULENBQUU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJ3QyxLQUFiLENBQXZCO0FBV0FMLGVBQVcsQ0FBQ1csSUFBSSxDQUFDaUIsbUJBQU4sQ0FBWDtBQUNBLFdBQU87QUFDTEMsV0FBSyxFQUFFO0FBQ0xqQyxpQkFBUyxFQUFFZSxJQUFJLENBQUNpQjtBQURYO0FBREYsS0FBUDtBQUtEO0FBQ0Y7QUFFTSxlQUFlRSxjQUFmLEdBQWdDO0FBQ3JDLFFBQU07QUFBRW5CO0FBQUYsTUFBVyxNQUFNQyx5REFBQSxDQUFhO0FBQ2xDZSxTQUFLLEVBQUViLCtDQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRzQyxHQUFiLENBQXZCO0FBWUEsU0FBTztBQUNMZSxTQUFLLEVBQUU7QUFDTGpDLGVBQVMsRUFBRWUsSUFBSSxDQUFDb0I7QUFEWDtBQURGLEdBQVA7QUFLRCxDOzs7Ozs7Ozs7O0FDeEpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7O0FBRTZEOztBQUU3RCxtQkFBbUIsd0RBQVk7QUFDL0I7QUFDQSxlQUFlLHlEQUFhO0FBQzVCLENBQUM7O0FBRUQsK0RBQWUsTUFBTSxFOzs7Ozs7Ozs7OztBQ1RyQiw0Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9hcG9sbG8tY2xpZW50JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRW1wbG95ZWVDcmVhdGVEdG8gfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZW1wbG95ZWUvZHRvL2NyZWF0ZS1lbXBsb3llZS5pbnB1dCc7XHJcblxyXG5pbnRlcmZhY2UgcHJvamVjdERhdGEge1xyXG4gIHByb2plY3ROYW1lOiBzdHJpbmc7XHJcbiAgcHJvamVjdENvZGU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShcclxuICB7IGNvdW50cmllcyB9LFxyXG4gIHByb2plY3ROYW1lOiBwcm9qZWN0RGF0YSxcclxuICBwcm9qZWN0Q29kZTogcHJvamVjdERhdGEsXHJcbikge1xyXG4gIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGU8RW1wbG95ZWVDcmVhdGVEdG9bXT4oKTtcclxuICBjb25zdCBbcHJvamVjdEZvcm1EYXRhLCBzZXRwcm9qZWN0Rm9ybURhdGFdID0gdXNlU3RhdGU8cHJvamVjdERhdGE+KCk7XHJcblxyXG4gIGNvbnN0IG15U3VibWl0SGFuZGxlciA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldFswXS52YWx1ZSArICcgJyArIGUudGFyZ2V0WzFdLnZhbHVlKTtcclxuICAgIHByb2plY3ROYW1lID0gZS50YXJnZXRbMF0udmFsdWU7XHJcbiAgICBwcm9qZWN0Q29kZSA9IGUudGFyZ2V0WzFdLnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7XHJcbiAgICAgIG11dGF0aW9uOiBncWxgXHJcbiAgICAgICAgbXV0YXRpb257XHJcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QocHJvamVjdDp7XHJcbiAgICAgICAgICAgICAgbmFtZTpcIiR7cHJvamVjdE5hbWV9XCJcclxuICAgICAgICAgICAgICBjb2RlOiR7cHJvamVjdENvZGV9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGNvZGVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgLFxyXG4gICAgfSk7XHJcbiAgICBhbGVydChcclxuICAgICAgJ1lvdSBhcmUgc3VibWl0dGluZyAnICtcclxuICAgICAgICAnUHJvamVjdCBOYW1lOiAnICtcclxuICAgICAgICBwcm9qZWN0TmFtZSArXHJcbiAgICAgICAgJyBhbmQgQ29kZTogJyArXHJcbiAgICAgICAgcHJvamVjdENvZGUsXHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgbXlDaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIC8vICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgLy8gIHRoaXMuc2V0cHJvamVjdEZvcm1EYXRhKHsgcHJvamVjdE5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICBXZWxjb21lIHRvIDxhIGhyZWY9XCIjXCI+UHJvamVjdCBNYW5hZ2VyPC9hPlxyXG4gICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5NYW5hZ2UgQWxsIHlvdXIgcHJvamVjdHMgaGVyZSA8L3A+XHJcbiAgICAgICAgPGgyPkZvbGxvd2luZyBhcmUgdGhlIFJlZ2lzdGVyZWQgUHJvamVjdHM8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7Y291bnRyaWVzLm1hcCgoY291bnRyeSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtjb3VudHJ5LmlkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UHJvamVjdHNWYWx1ZShjb3VudHJ5LmlkKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMz57Y291bnRyeS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgPHA+e2NvdW50cnkuY29kZX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMz5BZGQgTmV3IFByb2plY3Q8L2gzPlxyXG5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtteVN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICA8cD5Qcm9qZWN0IE5hbWU6PC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17bXlDaGFuZ2VIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICA8cD5Qcm9qZWN0IENvZGU6PC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17bXlDaGFuZ2VIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Byb2plY3RzICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgIDxoMz5FbXBsb3llZXMgcmVnaXN0ZXJlZCB0byB0aGlzIHByb2plY3QgYXJlPC9oMz5cclxuICAgICAgICAgICAge3Byb2plY3RzICYmXHJcbiAgICAgICAgICAgICAgcHJvamVjdHMubWFwKChjb3VudHJ5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y291bnRyeS5wcm9qZWN0SWR9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e2NvdW50cnkuZmlyc3ROYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntjb3VudHJ5LmNpdHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICBcclxuICAgICAgICAgIFBvd2VyZWQgYnkgeydURUNITk9WRSd9XHJcbiAgICAgICAgICBcclxuICAgICAgXHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gc2V0UHJvamVjdHNWYWx1ZShlOiBhbnkpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcclxuICAgICAgcXVlcnk6IGdxbGBcclxuICAgICAgcXVlcnl7XHJcbiAgICAgICAgICBnZXRBbGxQcm9qRW1wbG95ZWVzKHByb2plY3RJZDpcIiR7ZX1cIil7XHJcbiAgICAgICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgICAgICBjaXR5XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0UHJvamVjdHMoZGF0YS5nZXRBbGxQcm9qRW1wbG95ZWVzKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgY291bnRyaWVzOiBkYXRhLmdldEFsbFByb2pFbXBsb3llZXMsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcclxuICAgIHF1ZXJ5OiBncWxgXHJcbiAgICAgIHF1ZXJ5IHtcclxuICAgICAgICBnZXRBbGxQcm9qZWN0cyB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgY29kZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYCxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNvdW50cmllczogZGF0YS5nZXRBbGxQcm9qZWN0cyxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMWpWXzRcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18zZnFDZlwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18zazVoQ1wiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fb3B1TG5cIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fX2JjSm1uXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fMWZ5d25cIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX18yX1I2a1wiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfX3BuaGNQXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMmw1U2tcIlxufTtcbiIsIi8vIC4vYXBvbGxvLWNsaWVudC5qc1xyXG5cclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIHVyaTogXCJodHRwOi8vbG9jYWxob3N0OjMwMDIvZ3JhcGhxbFwiLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=