(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-content {\n  background-color: white;\n  padding: 10px;\n}\n\na:link.social {\n  color: black;\n}\n\na:visited.social {\n  color: black;\n}\n\na:hover.social {\n  color: black;\n}\n\na:focus.social {\n  color: black;\n}\n\na:active.social {\n  color: black;\n}\n\na.social {\n  text-decoration: none !important;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\n  <div fxFlex=\"20\" fxFlex.xs=\"0\"></div>\n  <div fxFlex=\"60\" fxFlex.xs=\"100\" id=\"main-content\">\n    <div style=\"text-align:center\">\n      <img fxFlex=\"30\" fxFlex.xs=\"100\" alt=\"Angular Logo\" src=\"../assets/OpenChennai_logo.png\">\n    </div>\n    <div style=\"text-align:center\">\n      Follow us on\n    </div>\n    <br>\n    <div fxFlex=\"100\" fxLayout=\"row\" style=\"text-align:center\">\n      <div fxFlex=\"25\">\n        <a target=\"_blank\" rel=\"noopener\" class=\"social\" href=\"https://twitter.com/openchennai\">\n          <div>\n            <fa-icon [icon]=\"['fab', 'twitter']\"></fa-icon>\n          </div>\n          <div>Twitter</div>\n        </a>\n      </div>\n      <div fxFlex=\"25\">\n        <a target=\"_blank\" rel=\"noopener\" class=\"social\" href=\"https://www.facebook.com/openchennai\">\n          <div>\n            <fa-icon [icon]=\"['fab', 'facebook']\"></fa-icon>\n          </div>\n          <div>Facebook</div>\n        </a>\n      </div><div fxFlex=\"25\">\n        <a target=\"_blank\" rel=\"noopener\" class=\"social\" href=\"https://www.instagram.com/openchennai\">\n          <div>\n            <fa-icon [icon]=\"['fab', 'instagram']\"></fa-icon>\n          </div>\n          <div>Instagram</div>\n        </a>\n      </div><div fxFlex=\"25\">\n        <a target=\"_blank\" rel=\"noopener\" class=\"social\" href=\"https://github.com/OpenChennai\">\n          <div>\n            <fa-icon [icon]=\"['fab', 'github']\"></fa-icon>\n          </div>\n          <div>GitHub</div>\n        </a>\n      </div>\n    </div>\n    <br>\n    <h2>FAQ</h2>\n    <h3>What is Open Chennai?</h3>\n    <div>Open Chennai is a collective effort by the citizens of Chennai to make our city better. We report and keep\n      track\n      of\n      civic issues within the city.\n    </div>\n\n    <h3>What do we gain by reporting and tracking issues? Is any action guaranteed to fix the reported issues?</h3>\n    <div>Our initial aim is to bring concerns of the citizens into the limelight and never lose track of them. When we\n      report and track issues together, we reach a larger audience.\n      The sum of our efforts becomes larger than its parts. This would be equivalent to something like Wikipedia, but\n      for\n      the city's civic issues. We hope to get involved in taking action as well, but no promises for now.\n    </div>\n\n    <h3>Where do I view already reported issues?</h3>\n    <div>\n      <div>We are currently using GitHub to track issues. Follow the links to find issues under different sections.\n      </div>\n      <ul>\n        <li>\n          <a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/OpenChennai/Roads/issues\">Roads</a>\n        </li>\n        <li>\n          <a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/OpenChennai/Water-and-Sanitation/issues\">Water and\n            Sanitation</a>\n        </li>\n        <li>\n          <a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/OpenChennai/Electricity/issues\">Electricity</a>\n        </li>\n        <li>\n          <a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/OpenChennai/Garbage/issues\">Garbage</a>\n        </li>\n        <li>\n          <a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/OpenChennai/Public-Transport/issues\">Public\n            Transport</a>\n        </li>\n        <li>\n          <a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/OpenChennai/Traffic/issues\">Traffic</a>\n        </li>\n        <li>\n          <a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/OpenChennai/Trees/issues\">Trees</a>\n        </li>\n        <li>\n          <a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/OpenChennai/Parks-and-Playgrounds/issues\">Parks and\n            Playgrounds</a>\n        </li>\n      </ul>\n    </div>\n\n    <h3>How do I report issues?</h3>\n    <div>\n      <h4>The easy way</h4>\n      <div>Report issues to us on\n        <a target=\"_blank\" rel=\"noopener\" href=\"https://twitter.com/openchennai\">Twitter</a>,\n        <a target=\"_blank\" rel=\"noopener\" href=\"https://www.facebook.com/openchennai/\">Facebook</a>\n        or on\n        <a target=\"_blank\" rel=\"noopener\" href=\"https://www.instagram.com/openchennai\">Instagram</a>.\n      </div>\n      <h4>The better way</h4>\n      <div>\n        Raise GitHub issues on the respective repositories. If you are not familiar with raising GitHub\n        issues,\n        <a target=\"_blank\" rel=\"noopener\" href=\"https://help.github.com/articles/signing-up-for-a-new-github-account\">create\n          a GitHub account</a>\n        and find out how to create issues\n        <a target=\"_blank\" rel=\"noopener\" href=\"https://help.github.com/articles/creating-an-issue\">here</a>.\n      </div>\n    </div>\n\n\n    <h3>Are there general guidelines for reporting an issue?</h3>\n    <div>Please be as detailed as possible and add photos, links to the geographical location of the issue, if possible.\n    </div>\n\n    <h3>Who is running this effort? What are your motivations?</h3>\n    <div>We are just a group of individuals coming together to solve our own problems. We have no affiliations to any\n      political entity and our intention is to build a community of like-minded citizens to solve our city's problems.\n    </div>\n  </div>\n  <div fxFlex=\"20\" fxFlex.xs=\"0\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/@fortawesome/angular-fontawesome.es5.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTwitter"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFacebook"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faInstagram"]);
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_5__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faGithub"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anirudh/workspace/openchennai/openchennai.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map