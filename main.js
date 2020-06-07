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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dashboard_home_header_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/home/header/cart/cart.component */ "./src/app/dashboard/home/header/cart/cart.component.ts");
/* harmony import */ var _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_home_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/home/product-details/product-details.component */ "./src/app/dashboard/home/product-details/product-details.component.ts");






var routes = [
    {
        path: '',
        component: _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'product-details',
        component: _dashboard_home_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"]
    },
    {
        path: 'viewcart',
        component: _dashboard_home_header_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tulip-premium';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _auth_comp_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-comp/login/login.component */ "./src/app/auth-comp/login/login.component.ts");
/* harmony import */ var _auth_comp_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-comp/register/register.component */ "./src/app/auth-comp/register/register.component.ts");
/* harmony import */ var _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _dashboard_home_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/home/product-details/product-details.component */ "./src/app/dashboard/home/product-details/product-details.component.ts");
/* harmony import */ var _dashboard_home_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/home/header/header.component */ "./src/app/dashboard/home/header/header.component.ts");
/* harmony import */ var _dashboard_home_all_products_all_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/home/all-products/all-products.component */ "./src/app/dashboard/home/all-products/all-products.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _auth_comp_auth_comp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth-comp/auth-comp.component */ "./src/app/auth-comp/auth-comp.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _dashboard_home_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/home/footer/footer.component */ "./src/app/dashboard/home/footer/footer.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _dashboard_home_header_cart_cart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/home/header/cart/cart.component */ "./src/app/dashboard/home/header/cart/cart.component.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _auth_comp_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _auth_comp_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _dashboard_home_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailsComponent"],
                _dashboard_home_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _dashboard_home_all_products_all_products_component__WEBPACK_IMPORTED_MODULE_12__["AllProductsComponent"],
                _auth_comp_auth_comp_component__WEBPACK_IMPORTED_MODULE_15__["AuthCompComponent"],
                _dashboard_home_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                _dashboard_home_header_cart_cart_component__WEBPACK_IMPORTED_MODULE_23__["CartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__["MatBadgeModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_17__["OwlModule"]
            ],
            providers: [],
            entryComponents: [_auth_comp_auth_comp_component__WEBPACK_IMPORTED_MODULE_15__["AuthCompComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-comp/auth-comp.component.html":
/*!****************************************************!*\
  !*** ./src/app/auth-comp/auth-comp.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\" style=\"\r\nheight: 100%;\r\n\">\r\n  <div class=\"col-5 test\" >\r\n    <h3>Login</h3>\r\n    <p>Get access to your Orders, Wishlist and Recommendations</p>\r\n    <!-- <img src=\"../../../assets/s-bag.svg\" class=\"shopping-bag\" alt=\"\"> -->\r\n  </div>\r\n  <div class=\"col-7 auth-area\">\r\n    <app-login *ngIf=\"!isnewUser\" (userStatus)=\"doSomething($event)\"></app-login>\r\n    <app-register *ngIf=\"isnewUser\"  (userStatus)=\"doSomething($event)\"></app-register>\r\n  </div>\r\n</div>\r\n<!-- \r\n<div style=\"height: 100% ;width: 100%; background: #6f6f6f;\">\r\n    <p>hi</p>\r\n</div> -->"

/***/ }),

/***/ "./src/app/auth-comp/auth-comp.component.scss":
/*!****************************************************!*\
  !*** ./src/app/auth-comp/auth-comp.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test {\n  background-image: url(https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_dec4bf.png);\n  background-position: center 85%;\n  background-repeat: no-repeat;\n  background-color: #e4a50b;\n  color: #fff;\n  padding: 40px 33px;\n  font-size: 15px; }\n\n.auth-area {\n  padding: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC1jb21wL0Q6XFxTYW50b3NoXFxnaXRodWIgd2ViXFxUdWxpcFxcdHVsaXAtcHJlbWl1bS9zcmNcXGFwcFxcYXV0aC1jb21wXFxhdXRoLWNvbXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSxrR0FBa0c7RUFDbEcsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC1jb21wL2F1dGgtY29tcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5zaG9wcGluZy1iYWd7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gfVxyXG5cclxuLnRlc3Qge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1nMWEuZmxpeGNhcnQuY29tL3d3dy9saW5jaHBpbi9may1jcC16aW9uL2ltZy9sb2dpbl9pbWdfZGVjNGJmLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgODUlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGE1MGI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDQwcHggMzNweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uYXV0aC1hcmVhe1xyXG4gICAgcGFkZGluZzogMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth-comp/auth-comp.component.ts":
/*!**************************************************!*\
  !*** ./src/app/auth-comp/auth-comp.component.ts ***!
  \**************************************************/
/*! exports provided: AuthCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthCompComponent", function() { return AuthCompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AuthCompComponent = /** @class */ (function () {
    function AuthCompComponent(_dataService) {
        this._dataService = _dataService;
        this.isnewUser = this._dataService.isnewUser;
    }
    AuthCompComponent.prototype.ngOnInit = function () {
    };
    AuthCompComponent.prototype.doSomething = function (date) {
        this.isnewUser = date;
        console.log('Picked date: ', date);
    };
    AuthCompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-auth-comp',
            template: __webpack_require__(/*! ./auth-comp.component.html */ "./src/app/auth-comp/auth-comp.component.html"),
            styles: [__webpack_require__(/*! ./auth-comp.component.scss */ "./src/app/auth-comp/auth-comp.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"]])
    ], AuthCompComponent);
    return AuthCompComponent;
}());



/***/ }),

/***/ "./src/app/auth-comp/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/auth-comp/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Enter Email</mat-label>\n    <input matInput value=\"\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Enter Password</mat-label>\n    <input matInput placeholder=\"\" value=\"\">\n  </mat-form-field>\n\n  <button mat-raised-button text-center color=\"primary\">Login</button>\n  <!-- <p class=\"sub\"><a href=\"Forgot Password?\">Forgot Password?</a></p> -->\n\n</form>\n\n<div class=\"allign-bottom\">\n  <p class=\"sub1\" (click)=\"newUser()\">\n    New to Tulip? Create an account</p>\n</div>"

/***/ }),

/***/ "./src/app/auth-comp/login/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/auth-comp/login/login.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.sub {\n  font-size: 12px;\n  text-align: center; }\n\n.sub1 {\n  font-size: 15px;\n  text-align: center;\n  cursor: pointer;\n  color: #a77704; }\n\na {\n  color: #e4a50b; }\n\nform {\n  text-align: center; }\n\n.allign-bottom {\n  position: absolute;\n  bottom: 8px;\n  left: 0;\n  right: 0;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC1jb21wL2xvZ2luL0Q6XFxTYW50b3NoXFxnaXRodWIgd2ViXFxUdWxpcFxcdHVsaXAtcHJlbWl1bS9zcmNcXGFwcFxcYXV0aC1jb21wXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztFQUNQLFFBQVE7RUFDUixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgtY29tcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uc3ViIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3ViMSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2E3NzcwNDtcclxufVxyXG5hIHtcclxuICAgIGNvbG9yOiAjZTRhNTBiO1xyXG59XHJcbmZvcm0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hbGxpZ24tYm90dG9tIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogOHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth-comp/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/auth-comp/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataService) {
        this.dataService = dataService;
        //emit user status to parent
        this.userStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.newUser = function () {
        console.log('new user called');
        this.dataService.isnewUser = true;
        this.userStatus.emit(this.dataService.isnewUser);
        console.log(this.dataService.isnewUser);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], LoginComponent.prototype, "userStatus", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth-comp/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth-comp/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth-comp/register/register.component.html":
/*!************************************************************!*\
  !*** ./src/app/auth-comp/register/register.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Enter Name</mat-label>\n    <input matInput value=\"\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Enter Email</mat-label>\n    <input matInput value=\"\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Enter Phone</mat-label>\n    <input matInput value=\"\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Enter Password</mat-label>\n    <input matInput placeholder=\"\" value=\"\">\n  </mat-form-field>\n    \n  <button mat-raised-button text-center color=\"primary\">Submit</button>\n  <!-- <p class=\"sub\"><a href=\"Forgot Password?\">Forgot Password?</a></p> -->\n\n</form>\n\n<div class=\"allign-bottom\">\n  <p  class=\"sub1\"  (click)=\"oldUser()\">Already have an account? Login</p>\n</div>\n"

/***/ }),

/***/ "./src/app/auth-comp/register/register.component.scss":
/*!************************************************************!*\
  !*** ./src/app/auth-comp/register/register.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.allign-bottom {\n  position: absolute;\n  bottom: 4px;\n  left: 0;\n  right: 0;\n  text-align: center; }\n\n.sub1 {\n  font-size: 15px;\n  text-align: center;\n  cursor: pointer;\n  color: #a77704; }\n\nform {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC1jb21wL3JlZ2lzdGVyL0Q6XFxTYW50b3NoXFxnaXRodWIgd2ViXFxUdWxpcFxcdHVsaXAtcHJlbWl1bS9zcmNcXGFwcFxcYXV0aC1jb21wXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsT0FBTztFQUNQLFFBQVE7RUFDUixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoLWNvbXAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFsbGlnbi1ib3R0b20ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA0cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnN1YjEge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNhNzc3MDQ7XHJcbn1cclxuZm9ybXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth-comp/register/register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth-comp/register/register.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_data) {
        this._data = _data;
        this.userStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.isnewUser = this._data.isnewUser;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.oldUser = function () {
        this._data.isnewUser = false;
        this.userStatus.emit(this._data.isnewUser);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], RegisterComponent.prototype, "userStatus", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth-comp/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth-comp/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/all-products/all-products.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/home/all-products/all-products.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"../../../../assets/slider/slide1.jpg\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"../../../../assets/slider/slide2.jpg\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"../../../../assets/slider/slide3.jpg\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n\n\n<!-- owl -->\n<div class='container-fluid'>    \n<owl-carousel [options]=\"SlideOptions\" [items]=\"images\" [carouselClasses]=\"['owl-theme', 'sliding']\" >  \n  <div class=\"item\" *ngFor=\"let img of Images\" (click)=\"productDetails(img)\">  \n  <div class=\"text-center\">  \n  <img class=\"product-img\" src={{img}}/>\n  <p class=\"m-0\">Tulip Pan Masala</p>  \n  <p class=\"m-0 font-weight-bold\">$544</p>\n  <button type=\"button\" class=\"btn btn-success\">Buy Now</button>\n</div>  \n  </div>  \n  </owl-carousel>  \n</div> "

/***/ }),

/***/ "./src/app/dashboard/home/all-products/all-products.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/home/all-products/all-products.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-img {\n  height: 260px;\n  width: 50% !important;\n  margin-left: auto;\n  margin-right: auto; }\n\n.item {\n  margin: 20px;\n  padding: 23px 0px; }\n\n.item:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvYWxsLXByb2R1Y3RzL0Q6XFxTYW50b3NoXFxnaXRodWIgd2ViXFxUdWxpcFxcdHVsaXAtcHJlbWl1bS9zcmNcXGFwcFxcZGFzaGJvYXJkXFxob21lXFxhbGwtcHJvZHVjdHNcXGFsbC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUl0QjtFQUNJLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSwwQ0FBdUM7RUFDdkMsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL2FsbC1wcm9kdWN0cy9hbGwtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1pbWd7XHJcbiAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8vIG92ZXJyaWRlIG93bCBjc3MgcHJvZHVjdCBjYXJvdXNhbFxyXG4uaXRlbXtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBhZGRpbmc6IDIzcHggMHB4OyAgICBcclxufVxyXG4uaXRlbTpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/home/all-products/all-products.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/home/all-products/all-products.component.ts ***!
  \***********************************************************************/
/*! exports provided: AllProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProductsComponent", function() { return AllProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AllProductsComponent = /** @class */ (function () {
    function AllProductsComponent(router) {
        this.router = router;
        this.Images = ['../../../../assets/products/3.jpeg', '../../../../assets/products/4.jpeg',
            '../../../../assets/products/1.jpeg', '../../../../assets/products/2.jpeg',];
        this.SlideOptions = { items: 3, dots: true, nav: false };
        this.CarouselOptions = { items: 3, dots: true, nav: true };
    }
    AllProductsComponent.prototype.ngOnInit = function () {
    };
    AllProductsComponent.prototype.checkimg = function (img) {
        console.log(img);
    };
    AllProductsComponent.prototype.productDetails = function (img) {
        console.log('received ', img);
        this.router.navigate(['/product-details', { id: 1 }]);
    };
    AllProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-products',
            template: __webpack_require__(/*! ./all-products.component.html */ "./src/app/dashboard/home/all-products/all-products.component.html"),
            styles: [__webpack_require__(/*! ./all-products.component.scss */ "./src/app/dashboard/home/all-products/all-products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AllProductsComponent);
    return AllProductsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/footer/footer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/home/footer/footer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 footer\">\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <div class=\"row\">\n        <div class=\"col-3\">\n          <div class=\"_3qd5C5\">\n            <div class=\"_18wTSA\">ABOUT</div>\n            <a href=\"/helpcentre?otracker=undefined_footer_navlinks\"\n              class=\"_287FRX\">Contact Us</a>\n              <a href=\"#\" class=\"_287FRX\">About\n              Us</a><a href=\"#\"\n              class=\"_287FRX\">Careers</a>\n              <a href=\"#\"\n              class=\"_287FRX\">Flipkart Stories</a>\n              <a href=\"#\"\n              class=\"_287FRX\">Press</a>\n          </div>\n        </div>\n        <div class=\"col-3\">\n          <div class=\"_3qd5C5\">\n            <div class=\"_18wTSA\">HELP</div>\n            <a href=\"#\" class=\"_287FRX\">Payments</a><a\n              href=\"#\" class=\"_287FRX\">Shipping</a><a\n              href=\"#\" class=\"_287FRX\">Cancellation &amp;\n              Returns</a><a href=\"#\"\n              class=\"_287FRX\">FAQ</a>\n              <a href=\"#\"\n              class=\"_287FRX\">Report Infringement</a>\n          </div>\n        </div>\n        <div class=\"col-3\">\n          <div class=\"_3qd5C5\">\n            <div class=\"_18wTSA\">POLICY</div>\n            <a href=\"#\"\n              class=\"_287FRX\">Return Policy</a>\n              <a href=\"#\"\n              class=\"_287FRX\">Terms Of Use</a>\n              <a href=\"#\"\n              class=\"_287FRX\">Security</a>\n              <a href=\"#\"\n              class=\"_287FRX\">Privacy</a>\n              <a href=\"#\"\n              class=\"_287FRX\">Sitemap</a>\n              <a href=\"#\"\n              class=\"_287FRX\">EPR Compliance</a>\n          </div>\n        </div>\n        <div class=\"col-3\">\n          <div class=\"_3qd5C5\">\n            <div class=\"_18wTSA\">SOCIAL</div>\n            <a href=\"#\" class=\"_287FRX\">Facebook</a><a\n              href=\"#\" class=\"_287FRX\">Twitter</a><a\n              href=\"#\" class=\"_287FRX\">YouTube</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"_3qd5C5\">\n            <div class=\"_18wTSA\">Mail Us:</div>\n            <a href=\"#\"\n              class=\"_287FRX\">Flipkart Internet Private Limited,\n\n              Buildings Alyssa, Begonia &\n              \n              Clove Embassy Tech Village,\n              \n              Outer Ring Road, Devarabeesanahalli Village,\n              \n              Bengaluru, 560103,\n              \n              Karnataka, India</a>\n              \n              \n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"_3qd5C5\">\n            <div class=\"_18wTSA\">Registered Office Address:\n            </div>\n            <a href=\"#\"\n              class=\"_287FRX\">Flipkart Internet Private Limited,\n\n              Buildings Alyssa, Begonia &\n              \n              Clove Embassy Tech Village,\n              \n              Outer Ring Road, Devarabeesanahalli Village,\n              \n              Bengaluru, 560103,\n              \n              Karnataka, India</a>\n              \n              \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n<hr>\n  <div class=\"row\">\n    <p class=\"last-row\">© 2007-2020 Tulip.com </p>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/dashboard/home/footer/footer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/home/footer/footer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background: #333131;\n  color: #c9ae6c;\n  padding: 30px 40px; }\n\n._18wTSA {\n  color: #878787;\n  font-size: 12px;\n  font-weight: 400;\n  margin-bottom: 9px; }\n\n._287FRX {\n  line-height: 2;\n  font-size: 13px;\n  font-weight: 500;\n  color: #fff;\n  display: block;\n  font-weight: 400;\n  font-size: 12px; }\n\n.last-row {\n  margin: 0;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 11px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvZm9vdGVyL0Q6XFxTYW50b3NoXFxnaXRodWIgd2ViXFxUdWxpcFxcdHVsaXAtcHJlbWl1bS9zcmNcXGFwcFxcZGFzaGJvYXJkXFxob21lXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzMzMxMzE7XHJcbiAgICBjb2xvcjogI2M5YWU2YztcclxuICAgIHBhZGRpbmc6IDMwcHggNDBweDtcclxufVxyXG5cclxuLl8xOHdUU0Ege1xyXG4gICAgY29sb3I6ICM4Nzg3ODc7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG59XHJcbi5fMjg3RlJYIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubGFzdC1yb3d7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/home/footer/footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/home/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/dashboard/home/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/dashboard/home/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/header/cart/cart.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/home/header/cart/cart.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 card-container\">\n  <div class=\"row\">\n\n\n  <div class=\"col-8\">\n    <div class=\"card\">\n      <div class=\"cart-head-div\">\n        My cart\n      </div>\n\n\n      <hr class=\"m-0\">\n\n\n      <div class=\"each-row\">\n        <div class=\"row\">\n          <div class=\"col-2\">\n            <img src=\"../../../../../assets/products/3.jpeg\" alt=\"\" class=\"w-100\">\n          </div>\n          <div class=\"col-6 p-20-0\">\n            <a href=\"#\" class=\"product-name-link\">\n              Tulip premium pan masala\n            </a>\n            <div class=\"product-dec-ic\">\n              Brown, Pack of 1\n            </div>\n            <div class=\"product-dec-ic\">\n              Seller: OmniTechRetail </div>\n            <span class=\"price-ic\">$544</span>\n            <span class=\"price-st-ic\">$554</span>\n          </div>\n          <div class=\"col-4 p-20-0\">\n            <div class=\"d-by\">\n              Delivery by Fri Jun 12\n            </div>\n            <div class=\"product-dec-ic\">\n              10 Days Replacement Policy\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"each-row\">\n        <div class=\"row\">\n          <div class=\"col-3\">\n            <div class=\"qty-container\">\n              <button class=\"qty-btn\">\n                –\n              </button>\n              <div class=\"qty-input-container\">\n                <input type=\"text\" value=\"2\" class=\"qty-input\">\n              </div>\n              <button class=\"qty-btn\">\n                +\n              </button>\n            </div>\n          </div>\n          <div class=\"col-3 action-texts\">\n            Save for later\n          </div>\n          <div class=\"col-3 action-texts\">\n            Remove\n          </div>\n          <div class=\"col-3\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-4\">\n    <div class=\"card\">\n      <span class=\"p-detail\">\n        Price details\n      </span>\n      <hr class=\"m-0\">\n      <div class=\"price-detals\">\n        <div class=\"row p-10-0\">\n          <div class=\"col-8\">\n            Price (1 item)\n          </div>\n          <div class=\"col-4\">\n            ₹3,747\n          </div>\n        </div>\n        <div class=\"row p-10-0\">\n          <div class=\"col-8\">\n            Delivery Fee </div>\n          <div class=\"col-4\">\n            <span class=\"free\">Free</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/home/header/cart/cart.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/home/header/cart/cart.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s; }\n\n/* On mouse-over, add a deeper shadow */\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); }\n\n.card-container {\n  padding: 35px 33px; }\n\n.each-row {\n  padding: 20px; }\n\n.product-name-link {\n  font-size: 16px;\n  color: #212121;\n  line-height: 1;\n  display: inline; }\n\n.p-20-0 {\n  padding: 20px 0px; }\n\n.product-dec-ic {\n  display: block;\n  color: #878787;\n  font-size: 14px;\n  height: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.price-ic {\n  font-size: 18px;\n  font-weight: 500;\n  color: #212121;\n  display: inline-block;\n  margin-right: 8px;\n  margin-top: 10px; }\n\n.price-st-ic {\n  color: #878787;\n  text-decoration: line-through;\n  font-size: 14px;\n  margin-right: 10px; }\n\n.d-y {\n  font-size: 14px;\n  color: #212121;\n  line-height: 1.4; }\n\n.cart-head-div {\n  font-size: 18px;\n  line-height: 56px;\n  padding: 0 24px;\n  font-weight: 500; }\n\n.action-texts {\n  display: inline-block;\n  text-transform: uppercase;\n  box-shadow: none;\n  outline: 0;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  margin-right: 25px; }\n\n.qty-container {\n  display: flex;\n  color: #212121;\n  align-items: center; }\n\n.qty-btn {\n  width: 28px;\n  height: 28px;\n  background: linear-gradient(#fff, #f9f9f9);\n  display: inline-block;\n  border: 1px solid #c2c2c2;\n  cursor: pointer;\n  font-size: 16px;\n  border-radius: 50%;\n  padding-top: 1px;\n  line-height: 1; }\n\n.qty-input-container {\n  display: inline-block;\n  padding: 1px 6px;\n  width: calc(100% - 60px);\n  height: 100%;\n  width: 46px;\n  height: 28px;\n  border-radius: 2px;\n  background-color: #fff;\n  border: 1px solid #c2c2c2;\n  margin: 0 5px; }\n\n.qty-input {\n  border: none;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 500;\n  vertical-align: middle;\n  text-align: center; }\n\n.qty-input:focus {\n  outline: none; }\n\n.p-detail {\n  display: block;\n  text-transform: uppercase;\n  padding: 13px 24px;\n  font-weight: 500;\n  color: #878787;\n  min-height: 47px;\n  border-radius: 2px 2px 0 0; }\n\n.price-detals {\n  padding: 15px; }\n\n.free {\n  color: #388e3c;\n  text-transform: uppercase; }\n\n.p-10-0 {\n  padding: 10px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvaGVhZGVyL2NhcnQvRDpcXFNhbnRvc2hcXGdpdGh1YiB3ZWJcXFR1bGlwXFx0dWxpcC1wcmVtaXVtL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGhvbWVcXGhlYWRlclxcY2FydFxcY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0VBQ0EsMENBQTBDO0VBQzFDLGdCQUFnQixFQUFBOztBQUdwQix1Q0FBQTs7QUFDQTtFQUNJLDJDQUEyQyxFQUFBOztBQUUvQztFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFFdEI7RUFHSSxhQUFhO0VBQ2IsY0FBYztFQUdkLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsMEJBQTBCLEVBQUE7O0FBRTlCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWM7RUFDZCx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL2hlYWRlci9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICAvKiBBZGQgc2hhZG93cyB0byBjcmVhdGUgdGhlIFwiY2FyZFwiIGVmZmVjdCAqL1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZGVlcGVyIHNoYWRvdyAqL1xyXG4uY2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzNXB4IDMzcHg7XHJcbn1cclxuLmVhY2gtcm93IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLnByb2R1Y3QtbmFtZS1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLnAtMjAtMCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxufVxyXG4ucHJvZHVjdC1kZWMtaWMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzg3ODc4NztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnByaWNlLWljIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ucHJpY2Utc3QtaWMge1xyXG4gICAgY29sb3I6ICM4Nzg3ODc7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uZC15IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxufVxyXG4uY2FydC1oZWFkLWRpdiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTZweDtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmFjdGlvbi10ZXh0cyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcbi5xdHktY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnF0eS1idG4ge1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiwgI2Y5ZjlmOSk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzJjMmMyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbi5xdHktaW5wdXQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDFweCA2cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNDZweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzJjMmMyO1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxufVxyXG4ucXR5LWlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnF0eS1pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5wLWRldGFpbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM4Nzg3ODc7XHJcbiAgICBtaW4taGVpZ2h0OiA0N3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7XHJcbn1cclxuLnByaWNlLWRldGFscyB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uZnJlZSB7XHJcbiAgICBjb2xvcjogIzM4OGUzYztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLnAtMTAtMHtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/home/header/cart/cart.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/home/header/cart/cart.component.ts ***!
  \**************************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/dashboard/home/header/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/dashboard/home/header/cart/cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/header/header.component.html":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/home/header/header.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\"\n    aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <!-- <a class=\"navbar-brand\" href=\"#\">Navbar</a> -->\n  <img src=\"../../../../assets/tulip-logo.svg\" class=\"logo-img\" alt=\"\" onclick=\"window.location.href = '/';\">\n  <!-- <img src=\"../../../../assets/tulip-logo.svg\" class=\"logo-img\" alt=\"\" onclick=\"window.location.href = '/';\" > -->\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <!-- <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li> -->\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li> -->\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n\n      <!-- <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button> -->\n    </form>\n    <!-- <p class=\"m-0 \">\n      <span class=\"material-icons\">\n        shopping_cart\n        </span>\n        Cart\n      </p> -->\n    <button class=\"btn btn-warning my-2 my-sm-0\" (click)=\"logmeIn()\">Login</button>\n\n    <a routerLink=\"/viewcart\">\n    \n      <p class=\"top-menu-item\">\n        <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">shopping_cart</mat-icon>\n        Cart\n        <!-- Include text description of the icon's meaning for screen-readers -->\n        <span class=\"cdk-visually-hidden\">\n          Cart </span>\n      </p>\n  \n    \n    </a>\n    \n\n    <button mat-button [matMenuTriggerFor]=\"menu\"  class=\"top-menu-item\">More \n      <span class=\"material-icons\">\n        arrow_drop_down\n        </span>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item>Item 1</button>\n      <button mat-menu-item>Item 2</button>\n    </mat-menu>\n\n\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/dashboard/home/header/header.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/home/header/header.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-logo {\n  width: 5%; }\n\n.logo-img {\n  width: 5%;\n  cursor: pointer; }\n\n.mat-dialog-container {\n  padding: 0px !important;\n  overflow-x: hidden !important; }\n\n.top-menu-item {\n  color: #ffc107;\n  padding: 0px 20px;\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvaGVhZGVyL0Q6XFxTYW50b3NoXFxnaXRodWIgd2ViXFxUdWxpcFxcdHVsaXAtcHJlbWl1bS9zcmNcXGFwcFxcZGFzaGJvYXJkXFxob21lXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVMsRUFBQTs7QUFFYjtFQUNJLFNBQVM7RUFDVCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksdUJBQXVCO0VBQ3ZCLDZCQUE2QixFQUFBOztBQUVqQztFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWxvZ28ge1xyXG4gICAgd2lkdGg6IDUlO1xyXG59XHJcbi5sb2dvLWltZyB7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRvcC1tZW51LWl0ZW17XHJcbiAgICBjb2xvcjogI2ZmYzEwNztcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/home/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/home/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_auth_comp_auth_comp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth-comp/auth-comp.component */ "./src/app/auth-comp/auth-comp.component.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dialog) {
        this.dialog = dialog;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logmeIn = function () {
        console.log('log in');
        var dialogRef = this.dialog.open(src_app_auth_comp_auth_comp_component__WEBPACK_IMPORTED_MODULE_3__["AuthCompComponent"], {
            width: '600px',
            height: '400px',
            data: {
            // model: {
            //   "annot_name": 'n',
            //   "annot_value":"v"
            // },
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/dashboard/home/header/header.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/dashboard/home/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-all-products></app-all-products>\n"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/dashboard/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/product-details/product-details.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/home/product-details/product-details.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"col-12\">\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <div class=\"product-slider\">\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n          <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n              <img class=\"d-block w-100\" src=\"../../../../assets/products/3.jpeg\" alt=\"First slide\">\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block w-100\" src=\"../../../../assets/products/4.jpeg\" alt=\"Second slide\">\n            </div>\n           \n          </div>\n          <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </div>\n      </div>\n      <div class=\"action-btns\">\n        <button mat-flat-button color=\"accent\" class=\"action-btn\" >\n          <span class=\"material-icons\">\n            add_shopping_cart\n            </span>\n          Add to cart</button>\n        <button mat-flat-button color=\"warn\" class=\"action-btn\">\n          <span class=\"material-icons\">\n            flash_on\n            </span>\n          Buy now</button>\n\n      </div>\n      <!-- <img src=\"../../../../assets/products/3.jpeg\" alt=\"\"> -->\n\n    </div>\n    <div class=\"col-8 desc\">\n      <div class=\"conatiner\">\n        <h1 class=\"_9E25nV\">\n          <span class=\"_35KyD6\"> Tulip premium pan masala packet (Pack of 10 pouches)</span></h1>\n  \n        <div class=\"price-div\">\n          <p class=\"price\">₹1,399</p>\n          <span class=\"ofr\">30% off</span>         \n        </div>\n\n        <div class=\"product-desc\">\n          <div class=\"row\">\n            <div class=\"col-2\">\n              <p class=\"desc-text\">Delivery</p>\n            </div>\n            <div class=\"col-10\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Enter pin code to check Delivery\" value=\"\">\n              </mat-form-field>\n                \n\n            </div>\n          </div>\n            <div class=\"row\">\n              <div class=\"col-2\">\n                <p class=\"desc-text\">Description</p>\n              </div>\n              <div class=\"col-10\">\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi atque nisi corrupti placeat est culpa, sit aperiam sint earum ipsa accusamus omnis, sed maiores in tempore nostrum quis architecto.</p>\n              </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/dashboard/home/product-details/product-details.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/home/product-details/product-details.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "._9E25nV {\n  color: #212121;\n  font-size: 24px;\n  font-weight: 400;\n  display: contents; }\n\n._9E25nV ._35KyD6 {\n  padding: 0;\n  line-height: 1.4;\n  font-size: inherit;\n  font-weight: inherit;\n  display: inline-block; }\n\n.action-btn {\n  margin: 10px;\n  padding: 6px 46px; }\n\n.action-btns {\n  text-align: center;\n  padding: 8px; }\n\n.desc {\n  padding: 51px 30px; }\n\n.price-div {\n  padding: 15px 0px; }\n\n.price {\n  font-size: 26px;\n  color: #525151;\n  font-weight: 500; }\n\n.ofr {\n  color: green;\n  font-size: 18px;\n  padding: 0px 11px; }\n\n.desc-text {\n  color: #343a40b0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvcHJvZHVjdC1kZXRhaWxzL0Q6XFxTYW50b3NoXFxnaXRodWIgd2ViXFxUdWxpcFxcdHVsaXAtcHJlbWl1bS9zcmNcXGFwcFxcZGFzaGJvYXJkXFxob21lXFxwcm9kdWN0LWRldGFpbHNcXHByb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvaG9tZS9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLl85RTI1blYge1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZGlzcGxheTogY29udGVudHM7XHJcbn1cclxuLl85RTI1blYgLl8zNUt5RDYge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uYWN0aW9uLWJ0biB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHggNDZweDtcclxufVxyXG4uYWN0aW9uLWJ0bnMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uZGVzYyB7XHJcbiAgICBwYWRkaW5nOiA1MXB4IDMwcHg7XHJcbn1cclxuLnByaWNlLWRpdiB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxufVxyXG4ucHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgY29sb3I6ICM1MjUxNTE7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5vZnIge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDExcHg7XHJcbn1cclxuLmRlc2MtdGV4dHtcclxuICAgIGNvbG9yOiAjMzQzYTQwYjA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/home/product-details/product-details.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/home/product-details/product-details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent() {
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
    };
    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/dashboard/home/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.scss */ "./src/app/dashboard/home/product-details/product-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/services/data-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataServiceService = /** @class */ (function () {
    function DataServiceService() {
        this.isnewUser = false;
    }
    DataServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataServiceService);
    return DataServiceService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Santosh\github web\Tulip\tulip-premium\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map