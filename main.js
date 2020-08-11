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
/* harmony import */ var _dashboard_home_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/home/user-profile/user-profile.component */ "./src/app/dashboard/home/user-profile/user-profile.component.ts");
/* harmony import */ var _dashboard_home_header_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/home/header/cart/cart.component */ "./src/app/dashboard/home/header/cart/cart.component.ts");
/* harmony import */ var _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_home_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/home/product-details/product-details.component */ "./src/app/dashboard/home/product-details/product-details.component.ts");







var routes = [
    {
        path: '',
        component: _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'product-details',
        component: _dashboard_home_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsComponent"]
    },
    {
        path: 'viewcart',
        component: _dashboard_home_header_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]
    },
    {
        path: 'profile',
        component: _dashboard_home_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
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

module.exports = "<app-header (cartChange)='fetchCart($event)'></app-header>\r\n<router-outlet></router-outlet>\r\n<ngx-ui-loader></ngx-ui-loader>\r\n\r\n<app-footer></app-footer>"

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
/* harmony import */ var _services_store_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/store-service.service */ "./src/app/services/store-service.service.ts");



var localDbStorage = __webpack_require__(/*! localStorage */ "./node_modules/localStorage/lib/localStorage.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(storage) {
        this.storage = storage;
        this.title = 'tulip-premium';
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log(this.storage.getData("isLoggedIn"));
        console.log(this.storage.getData('user'));
        console.log('age modal');
    };
    AppComponent.prototype.fetchCart = function (data) {
        console.log('fetch cart called', data);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_home_product_intro_product_intro_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/home/product-intro/product-intro.component */ "./src/app/dashboard/home/product-intro/product-intro.component.ts");
/* harmony import */ var _dashboard_home_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/home/user-profile/user-profile.component */ "./src/app/dashboard/home/user-profile/user-profile.component.ts");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./graphql.module */ "./src/app/graphql.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var _services_store_service_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/store-service.service */ "./src/app/services/store-service.service.ts");
/* harmony import */ var _services_loginheader_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/loginheader.service */ "./src/app/services/loginheader.service.ts");
/* harmony import */ var _dashboard_home_age_confirmation_age_confirmation_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dashboard/home/age-confirmation/age-confirmation.component */ "./src/app/dashboard/home/age-confirmation/age-confirmation.component.ts");


































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
                _dashboard_home_header_cart_cart_component__WEBPACK_IMPORTED_MODULE_23__["CartComponent"],
                _dashboard_home_product_intro_product_intro_component__WEBPACK_IMPORTED_MODULE_25__["ProductIntroComponent"],
                _dashboard_home_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_26__["UserProfileComponent"],
                _dashboard_home_age_confirmation_age_confirmation_component__WEBPACK_IMPORTED_MODULE_33__["AgeConfirmationComponent"]
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
                _graphql_module__WEBPACK_IMPORTED_MODULE_27__["GraphQLModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_17__["OwlModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_29__["ToastrModule"].forRoot(),
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_30__["NgxUiLoaderModule"],
            ],
            providers: [_services_store_service_service__WEBPACK_IMPORTED_MODULE_31__["StoreService"], _services_loginheader_service__WEBPACK_IMPORTED_MODULE_32__["LoginheaderService"]],
            entryComponents: [_auth_comp_auth_comp_component__WEBPACK_IMPORTED_MODULE_15__["AuthCompComponent"], _dashboard_home_age_confirmation_age_confirmation_component__WEBPACK_IMPORTED_MODULE_33__["AgeConfirmationComponent"]],
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

module.exports = "\r\n<div class=\"row\" style=\"\r\nheight: 100%;\r\n\">\r\n  <div class=\"col-lg-5  test\" >\r\n    <h3 *ngIf=\"!isnewUser\" >Login</h3>\r\n    <h3 *ngIf=\"isnewUser\">Register</h3>\r\n\r\n    <p>Get access to your Orders, Wishlist and Recommendations</p>\r\n    <!-- <img src=\"../../../assets/s-bag.svg\" class=\"shopping-bag\" alt=\"\"> -->\r\n  </div>\r\n  <div class=\"col-lg-7 col-sm-12 col-xs-12 col-md-12 auth-area\">\r\n    <app-login *ngIf=\"!isnewUser\" (userStatus)=\"doSomething($event)\"></app-login>\r\n    <app-register *ngIf=\"isnewUser\"  (userStatus)=\"doSomething($event)\"></app-register>\r\n  </div>\r\n</div>\r\n<!-- \r\n<div style=\"height: 100% ;width: 100%; background: #6f6f6f;\">\r\n    <p>hi</p>\r\n</div> -->"

/***/ }),

/***/ "./src/app/auth-comp/auth-comp.component.scss":
/*!****************************************************!*\
  !*** ./src/app/auth-comp/auth-comp.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test {\n  background-image: url('shopping.svg');\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-color: #e4a50b;\n  color: #fff;\n  padding: 40px 33px;\n  font-size: 15px;\n  background-size: 100%; }\n\n@media only screen and (max-width: 983px) {\n  .test {\n    background-image: none;\n    padding: 20px 33px; } }\n\n.auth-area {\n  padding: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC1jb21wL0c6XFxQcm9qZWN0c1xcVHVsaXAtUGFuTWFzYWxhXFxDb25zdW1lci9zcmNcXGFwcFxcYXV0aC1jb21wXFxhdXRoLWNvbXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDSSxxQ0FBb0Q7RUFDcEQsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0k7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCLEVBQUEsRUFFckI7O0FBR0w7RUFDSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoLWNvbXAvYXV0aC1jb21wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLnNob3BwaW5nLWJhZ3tcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyB9XHJcblxyXG4udGVzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL3N2Zy9zaG9wcGluZy5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGE1MGI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDQwcHggMzNweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODNweCkgIHtcclxuICAgIC50ZXN0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMzNweDtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5hdXRoLWFyZWF7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59Il19 */"

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

module.exports = "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Enter Email</mat-label>\r\n    <input matInput [(ngModel)]=\"userObj.email\"  [ngModelOptions]=\"{standalone: true}\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Enter Password</mat-label>\r\n    <input matInput placeholder=\"\" type=\"password\" [(ngModel)]=\"userObj.password\"  [ngModelOptions]=\"{standalone: true}\">\r\n  </mat-form-field>\r\n\r\n  <button mat-raised-button text-center color=\"primary\" (click)=\"login()\" >Login</button>\r\n  <!-- <p class=\"sub\"><a href=\"Forgot Password?\">Forgot Password?</a></p> -->\r\n\r\n</form>\r\n\r\n<div class=\"allign-bottom\">\r\n  <p class=\"sub1\" (click)=\"newUser()\">\r\n    New to Tulip? Create an account</p>\r\n</div>"

/***/ }),

/***/ "./src/app/auth-comp/login/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/auth-comp/login/login.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.sub {\n  font-size: 12px;\n  text-align: center; }\n\n.sub1 {\n  font-size: 15px;\n  text-align: center;\n  cursor: pointer;\n  color: #a77704; }\n\na {\n  color: #e4a50b; }\n\nform {\n  text-align: center; }\n\n.allign-bottom {\n  margin-top: 17px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC1jb21wL2xvZ2luL0c6XFxQcm9qZWN0c1xcVHVsaXAtUGFuTWFzYWxhXFxDb25zdW1lci9zcmNcXGFwcFxcYXV0aC1jb21wXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGdCQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoLWNvbXAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnN1YiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnN1YjEge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNhNzc3MDQ7XHJcbn1cclxuYSB7XHJcbiAgICBjb2xvcjogI2U0YTUwYjtcclxufVxyXG5mb3JtIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYWxsaWduLWJvdHRvbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxN3B4XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _services_loginheader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/loginheader.service */ "./src/app/services/loginheader.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_store_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/store-service.service */ "./src/app/services/store-service.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");










var localDbStorage = __webpack_require__(/*! localStorage */ "./node_modules/localStorage/lib/localStorage.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataService, apollo, storage, toastr, loader, dialog, loginstatusService) {
        var _this = this;
        this.dataService = dataService;
        this.apollo = apollo;
        this.storage = storage;
        this.toastr = toastr;
        this.loader = loader;
        this.dialog = dialog;
        this.loginstatusService = loginstatusService;
        this.userObj = {
            email: '',
            password: ''
        };
        //emit user status to parent
        this.userStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.doLogin = function () {
            return new Promise(function (res, rej) {
                var email = _this.userObj.email;
                // santosh@gmail.com
                var pass = _this.userObj.password;
                //123456
                var loginQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n      query login($email: String!,$pass:String!) {\n        login(password:$pass,email:$email){\n          id,\n          email,phone,userProfile{id,firstName,lastName,gender,dob},\n          userAddress{id,userId,name,pinCode,address,district,state}\n        }\n      }\n    "], ["\n      query login($email: String!,$pass:String!) {\n        login(password:$pass,email:$email){\n          id,\n          email,phone,userProfile{id,firstName,lastName,gender,dob},\n          userAddress{id,userId,name,pinCode,address,district,state}\n        }\n      }\n    "])));
                _this.apollo
                    .watchQuery({
                    query: loginQuery,
                    variables: {
                        email: email,
                        pass: pass
                    },
                })
                    .valueChanges.subscribe(function (_a) {
                    var data = _a.data;
                    res(data);
                }, function (err) {
                    rej(err);
                });
            });
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.newUser = function () {
        console.log('new user called');
        this.dataService.isnewUser = true;
        this.userStatus.emit(this.dataService.isnewUser);
        console.log('is new user', this.dataService.isnewUser);
    };
    LoginComponent.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader.start();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.doLogin()];
                    case 2:
                        result = _a.sent();
                        localDbStorage.setItem('user', JSON.stringify(result));
                        localDbStorage.setItem("isLoggedIn", "true");
                        console.log(result);
                        this.user = result;
                        this.loader.stop();
                        //close the modal
                        this.dialog.closeAll();
                        //broadcast by rxjs
                        this.loginstatusService.broadCastMessage('Message from Home Component to App Component!');
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        // alert(err);
                        this.loader.stop();
                        this.toastr.warning(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"])
    ], LoginComponent.prototype, "userStatus", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth-comp/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth-comp/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_4__["DataServiceService"],
            apollo_angular__WEBPACK_IMPORTED_MODULE_6__["Apollo"],
            src_app_services_store_service_service__WEBPACK_IMPORTED_MODULE_8__["StoreService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_loginheader_service__WEBPACK_IMPORTED_MODULE_1__["LoginheaderService"]])
    ], LoginComponent);
    return LoginComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/auth-comp/register/register.component.html":
/*!************************************************************!*\
  !*** ./src/app/auth-comp/register/register.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Enter Name</mat-label>\r\n    <input matInput value=\"\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Enter Email</mat-label>\r\n    <input matInput value=\"\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Enter Phone</mat-label>\r\n    <input matInput value=\"\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Enter Password</mat-label>\r\n    <input matInput  type=\"password\"  placeholder=\"\" value=\"\">\r\n  </mat-form-field>\r\n    \r\n  <button mat-raised-button text-center color=\"primary\">Submit</button>\r\n  <!-- <p class=\"sub\"><a href=\"Forgot Password?\">Forgot Password?</a></p> -->\r\n\r\n</form>\r\n\r\n<div class=\"allign-bottom\">\r\n  <p  class=\"sub1\"  (click)=\"oldUser()\">Already have an account? Login</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth-comp/register/register.component.scss":
/*!************************************************************!*\
  !*** ./src/app/auth-comp/register/register.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.allign-bottom {\n  margin-top: 17px; }\n\n.sub1 {\n  font-size: 15px;\n  text-align: center;\n  cursor: pointer;\n  color: #a77704; }\n\nform {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC1jb21wL3JlZ2lzdGVyL0c6XFxQcm9qZWN0c1xcVHVsaXAtUGFuTWFzYWxhXFxDb25zdW1lci9zcmNcXGFwcFxcYXV0aC1jb21wXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGdCQUNKLEVBQUE7O0FBQ0E7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoLWNvbXAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFsbGlnbi1ib3R0b20ge1xyXG4gICAgbWFyZ2luLXRvcDogMTdweFxyXG59XHJcbi5zdWIxIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjYTc3NzA0O1xyXG59XHJcbmZvcm17XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

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

/***/ "./src/app/dashboard/home/age-confirmation/age-confirmation.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/home/age-confirmation/age-confirmation.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  age-confirmation works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/dashboard/home/age-confirmation/age-confirmation.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/home/age-confirmation/age-confirmation.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL2FnZS1jb25maXJtYXRpb24vYWdlLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/home/age-confirmation/age-confirmation.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/home/age-confirmation/age-confirmation.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AgeConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgeConfirmationComponent", function() { return AgeConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AgeConfirmationComponent = /** @class */ (function () {
    function AgeConfirmationComponent() {
    }
    AgeConfirmationComponent.prototype.ngOnInit = function () {
    };
    AgeConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-age-confirmation',
            template: __webpack_require__(/*! ./age-confirmation.component.html */ "./src/app/dashboard/home/age-confirmation/age-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./age-confirmation.component.scss */ "./src/app/dashboard/home/age-confirmation/age-confirmation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AgeConfirmationComponent);
    return AgeConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/all-products/all-products.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/home/all-products/all-products.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <ol class=\"carousel-indicators\">\r\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"carousel-item active\">\r\n      <img class=\"d-block w-100\" src=\"../../../../assets/slider/Black Container.png\" alt=\"First slide\">\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img class=\"d-block w-100\" src=\"../../../../assets/slider/Blue Container.png\" alt=\"Second slide\">\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img class=\"d-block w-100\" src=\"../../../../assets/slider/slide3.jpg\" alt=\"Third slide\">\r\n    </div>\r\n  </div>\r\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n<!-- product intro -->\r\n<div class=\"\">\r\n  <div class=\"module-title\">\r\n    <h2>\r\n      WELCOME TO TULIP PAN MASALA\r\n    </h2>\r\n    <div class=\"module-description\">\r\n      Taste of leaders\r\n    </div>\r\n    <p class=\"about-company\">\r\n      We proudly design our products with the\r\nhighest perfection to touch the hearts of our customers. Presently we have created a special\r\nplace for ourselves in the market with a premium Pan Masala under the brand name, Tulip.\r\nWe prepare this premium product from some of the handpicked natural ingredients with state\r\nof the art manufacturing facilities. Keeping in mind the variety of tastes of the people, we\r\nmanufacture different types of flavors of Erawan's Tulip Pan Masala in packets and cans. There\r\ncan be one line that is 'Made with love' to describe the refreshing instinct of this great\r\nproduct\r\n    </p>\r\n  </div>\r\n</div>\r\n<!-- our products heading -->\r\n<div class=\"text-center\">\r\n  <h2 class=\"our-products\">Our Products</h2>\r\n</div>\r\n<!-- New product list -->\r\n<div class=\"container-fluid\" style=\"margin: 30px 0px;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-6 col-md-4 col-lg-3 text-center cp \" *ngFor=\"let product of products\" (click)=\"productDetails(product)\">\r\n      <div class=\"product-showcase\">\r\n        <img src=\"../../../../assets/others/new.png\" class=\"new-tag\" alt=\"\">\r\n        <img class=\"w-230\" [src]=\"product.images\" alt=\"\">\r\n        <p class=\"m-0 p-desc\">{{product.name}}</p>  \r\n        <p class=\"m-0 price\">₹{{product.price}}</p>\r\n        <button mat-stroked-button class=\"product-btn\">Check Details</button>\r\n  \r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/home/all-products/all-products.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/home/all-products/all-products.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-img {\n  height: 260px;\n  width: 75% !important;\n  margin-left: auto;\n  margin-right: auto; }\n\n.item {\n  margin: 20px;\n  padding: 23px 0px;\n  background: #f3f3f3; }\n\n.item:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  cursor: pointer; }\n\n.buy-btn {\n  background-image: linear-gradient(to bottom, #f4b61a, #b18c34);\n  border: 1px solid #ce892a; }\n\n.price {\n  color: #eeb21d;\n  padding: 0px 0px 5px 0px;\n  font-weight: 500; }\n\n.p-desc {\n  padding: 14px 0px 0px 0px; }\n\n.w-230 {\n  width: 230px !important; }\n\n.cp {\n  cursor: pointer; }\n\n@media only screen and (max-width: 983px) {\n  .w-230 {\n    width: 162px !important; } }\n\n.module-title {\n  text-align: center;\n  margin: 0 0 30px;\n  margin-top: 80px; }\n\n.module-title {\n  padding-bottom: 35px;\n  background: url(https://www.dbsiggnature.com/catalog/view/theme/tt_belly2/image/bg-title.png) no-repeat 50% 100%;\n  width: 100%; }\n\n.module-title .module-description {\n  margin: 0 0 30px;\n  font-size: 14px;\n  color: #5b5b5b;\n  font-weight: 300;\n  font-style: italic; }\n\n.our-products {\n  background: #de952f;\n  margin: 0px 32%;\n  border-radius: 55px 55px 10px 10px;\n  padding: 7px 0px;\n  color: white; }\n\n.new-tag {\n  position: absolute;\n  right: 69px; }\n\n.about-company {\n  padding: 4px 200px; }\n\n.product-showcase {\n  background: #de952f0f;\n  padding: 10px;\n  margin: 6px 0px; }\n\n.product-btn {\n  background-image: linear-gradient(90deg, #de952f, #865613);\n  color: white;\n  border: 1px solid white; }\n\n@media only screen and (max-width: 983px) {\n  .about-company {\n    padding: 4px 60px; }\n  .our-products {\n    background: #de952f;\n    margin: 0px 26%;\n    border-radius: 55px 55px 10px 10px;\n    padding: 7px 0px;\n    color: white;\n    font-size: 10px; }\n  .new-tag {\n    position: absolute;\n    right: 16px; } }\n\n@media only screen and (max-width: 1203px) {\n  .new-tag {\n    position: absolute;\n    right: 16px; } }\n\n@media only screen and (max-width: 360px) {\n  .new-tag {\n    position: absolute;\n    right: 0; } }\n\n.carousel .carousel-inner {\n  height: 500px; }\n\n.carousel-inner .carousel-item img {\n  min-height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n@media (max-width: 768px) {\n  .carousel .carousel-inner {\n    height: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvYWxsLXByb2R1Y3RzL0c6XFxQcm9qZWN0c1xcVHVsaXAtUGFuTWFzYWxhXFxDb25zdW1lci9zcmNcXGFwcFxcZGFzaGJvYXJkXFxob21lXFxhbGwtcHJvZHVjdHNcXGFsbC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUl0QjtFQUNJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksMENBQXVDO0VBQ3ZDLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksOERBQStEO0VBQy9ELHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJO0lBQ0ksdUJBQ0osRUFBQSxFQUFDOztBQUdMO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxvQkFBb0I7RUFDcEIsZ0hBQWdIO0VBQ2hILFdBQVcsRUFBQTs7QUFFZjtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBRWY7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSwwREFBMEQ7RUFDMUQsWUFBWTtFQUNaLHVCQUF1QixFQUFBOztBQUUzQjtFQUNJO0lBQ0ksaUJBQWlCLEVBQUE7RUFFckI7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWUsRUFBQTtFQUVuQjtJQUNJLGtCQUFrQjtJQUN0QixXQUFXLEVBQUEsRUFDVjs7QUFFTDtFQUVJO0lBQ0ksa0JBQWtCO0lBQ3RCLFdBQVcsRUFBQSxFQUNWOztBQUVMO0VBRUk7SUFDSSxrQkFBa0I7SUFDdEIsUUFBUSxFQUFBLEVBQ1A7O0FBR0w7RUFDSSxhQUNBLEVBQUE7O0FBQ0E7RUFDQSxpQkFBZ0I7RUFFaEIsb0JBQ0E7S0FEQSxpQkFDQSxFQUFBOztBQUVBO0VBQ0E7SUFFQSxZQUNDLEVBQUEsRUFBQyIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL2FsbC1wcm9kdWN0cy9hbGwtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1pbWd7XHJcbiAgICBoZWlnaHQ6IDI2MHB4O1xyXG4gICAgd2lkdGg6IDc1JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8vIG92ZXJyaWRlIG93bCBjc3MgcHJvZHVjdCBjYXJvdXNhbFxyXG4uaXRlbXtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBhZGRpbmc6IDIzcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmMzsgICBcclxufVxyXG4uaXRlbTpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJ1eS1idG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZjRiNjFhICwgI2IxOGMzNCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2U4OTJhO1xyXG59XHJcbi5wcmljZXtcclxuICAgIGNvbG9yOiAjZWViMjFkO1xyXG4gICAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ucC1kZXNje1xyXG4gICAgcGFkZGluZzogMTRweCAwcHggMHB4IDBweDtcclxufVxyXG4udy0yMzB7XHJcbiAgICB3aWR0aDogMjMwcHggIWltcG9ydGFudDtcclxufVxyXG4uY3B7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgzcHgpICB7XHJcbiAgICAudy0yMzB7XHJcbiAgICAgICAgd2lkdGg6IDE2MnB4ICFpbXBvcnRhbnRcclxuICAgIH1cclxufVxyXG5cclxuLm1vZHVsZS10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG4ubW9kdWxlLXRpdGxlIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vd3d3LmRic2lnZ25hdHVyZS5jb20vY2F0YWxvZy92aWV3L3RoZW1lL3R0X2JlbGx5Mi9pbWFnZS9iZy10aXRsZS5wbmcpIG5vLXJlcGVhdCA1MCUgMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tb2R1bGUtdGl0bGUgLm1vZHVsZS1kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM1YjViNWI7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbi5vdXItcHJvZHVjdHN7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGU5NTJmO1xyXG4gICAgbWFyZ2luOiAwcHggMzIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTVweCA1NXB4IDEwcHggMTBweDtcclxuICAgIHBhZGRpbmc6IDdweCAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG59XHJcbi5uZXctdGFne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDY5cHg7XHJcbn1cclxuLmFib3V0LWNvbXBhbnl7XHJcbiAgICBwYWRkaW5nOiA0cHggMjAwcHg7XHJcbn1cclxuLnByb2R1Y3Qtc2hvd2Nhc2V7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGU5NTJmMGY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA2cHggMHB4O1xyXG5cclxufVxyXG4ucHJvZHVjdC1idG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNkZTk1MmYsICM4NjU2MTMpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODNweCkgIHtcclxuICAgIC5hYm91dC1jb21wYW55e1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCA2MHB4O1xyXG4gICAgfVxyXG4gICAgLm91ci1wcm9kdWN0c3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZGU5NTJmO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDI2JTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1NXB4IDU1cHggMTBweCAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICAgIC5uZXctdGFne1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwM3B4KSAge1xyXG4gICBcclxuICAgIC5uZXctdGFne1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpICB7XHJcbiAgIFxyXG4gICAgLm5ldy10YWd7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtaW5uZXJ7XHJcbiAgICBoZWlnaHQ6NTAwcHhcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSBpbWd7XHJcbiAgICBtaW4taGVpZ2h0OjIwMHB4O1xyXG4gICAgLy9wcmV2ZW50IGl0IGZyb20gc3RyZXRjaCBpbiBzY3JlZW4gc2l6ZSA8IHRoYW4gNzY4cHhcclxuICAgIG9iamVjdC1maXQ6Y292ZXJcclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAuY2Fyb3VzZWwgLmNhcm91c2VsLWlubmVye1xyXG4gICAgLy9wcmV2ZW50IGl0IGZyb20gYWRkaW5nIGEgd2hpdGUgc3BhY2UgYmV0d2VlbiBjYXJvdXNlbCBhbmQgY29udGFpbmVyIGVsZW1lbnRzXHJcbiAgICBoZWlnaHQ6YXV0b1xyXG4gICAgIH1cclxuICAgIH0iXX0= */"

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
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");







 // Import NgxUiLoaderService
var AllProductsComponent = /** @class */ (function () {
    function AllProductsComponent(router, apollo, toastr, ngxService, dataService) {
        this.router = router;
        this.apollo = apollo;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this.dataService = dataService;
        this.cartChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.products = [];
        this.Images = ['../../../../assets/products/3.jpeg', '../../../../assets/products/4.jpeg',
            '../../../../assets/products/3.jpeg', '../../../../assets/products/4.jpeg',
            '../../../../assets/products/1.jpeg', '../../../../assets/products/2.jpeg',];
        this.SlideOptions = { items: 4, dots: true, nav: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: false
                }
            }
        };
        this.CarouselOptions = { items: 3, dots: true, nav: true };
    }
    AllProductsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getAllProducts()];
                    case 1:
                        _a.products = _b.sent();
                        console.log('product array', this.products);
                        return [2 /*return*/];
                }
            });
        });
    };
    AllProductsComponent.prototype.checkimg = function (img) {
        console.log(img);
    };
    AllProductsComponent.prototype.productDetails = function (product) {
        console.log('received ', product);
        this.router.navigate(['/product-details'], { state: { data: product } });
        // this.router.navigate(['/editcampaign'], { state: { data: model } });
    };
    AllProductsComponent.prototype.buyNow = function (product) {
        this.cartChange.emit(product);
        this.dataService.cartCount++;
        this.toastr.success('Item added to Cart');
    };
    AllProductsComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.ngxService.start();
        return new Promise(function (res, rej) {
            _this.apollo.query({
                query: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n          {\n          allProducts{\n              id\n              name\n              price\n              images\n            }\n          }"], ["\n          {\n          allProducts{\n              id\n              name\n              price\n              images\n            }\n          }"])))
            }).subscribe(function (data) {
                _this.ngxService.stop();
                // this.toastr.success('Products Fetched');
                console.log('all products from server', data);
                res(data["data"]["allProducts"]);
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AllProductsComponent.prototype, "cartChange", void 0);
    AllProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-all-products',
            template: __webpack_require__(/*! ./all-products.component.html */ "./src/app/dashboard/home/all-products/all-products.component.html"),
            styles: [__webpack_require__(/*! ./all-products.component.scss */ "./src/app/dashboard/home/all-products/all-products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderService"],
            _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"]])
    ], AllProductsComponent);
    return AllProductsComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/dashboard/home/footer/footer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/home/footer/footer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 footer\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md-3 col-lg-3 col-sm-6\">\r\n      <img src=\"../../../../assets/tulip-logo.svg\" class=\"footer-img\" alt=\"\">\r\n      <p>Tulip is Premium Pan Masala. It Has a Fresh Taste thanks to 76 years legacy and group's intrinsic unique expertise</p>\r\n    </div>\r\n\r\n    <div class=\"col-12 col-md-3 col-lg-3 col-sm-6\">\r\n      <div class=\"_3qd5C5\">\r\n        <div class=\"_18wTSA\">QUICK LINKS</div>\r\n        <a href=\"\" class=\"_287FRX\">Home</a>\r\n        <a href=\"#\" class=\"_287FRX\">About Us</a>          \r\n          <a href=\"#\" class=\"_287FRX\">Conditions</a>\r\n          <a href=\"#\" class=\"_287FRX\">Terms & Conditions</a>\r\n     \r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 col-md-3 col-lg-3 col-sm-6\">\r\n      <div class=\"_3qd5C5\">\r\n        <div class=\"_18wTSA\">PRIVACY POLICY</div>\r\n        <a href=\"\" class=\"_287FRX\">Contact Us</a>\r\n        <a href=\"#\" class=\"_287FRX\">About\r\n          Us</a><a href=\"#\" class=\"_287FRX\">Careers</a>\r\n        <a href=\"#\" class=\"_287FRX\">Flipkart Stories</a>\r\n        <a href=\"#\" class=\"_287FRX\">Press</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 col-md-3 col-lg-3 col-sm-6\">\r\n      <div class=\"mat-menu-content\">\r\n        <div class=\"_18wTSA\">GET IN TOUCH</div>\r\n\r\n        <p class=\"mat-menu-item cw m-0 p-0\" mat-menu-item=\"\" role=\"menuitem\"\r\n          tabindex=\"0\" aria-disabled=\"false\">\r\n          <mat-icon   aria-hidden=\"false\" style=\"color: white;\"\r\n            class=\"mat-icon  material-icons mat-icon-no-color cw m-0\" role=\"img\">room</mat-icon>\r\n          &nbsp;&nbsp;Address here</p>\r\n\r\n        <p class=\"mat-menu-item cw m-0 p-0\" mat-menu-item=\"\" role=\"menuitem\"\r\n          tabindex=\"0\" aria-disabled=\"false\">\r\n          <mat-icon   aria-hidden=\"false\" style=\"color: white;\"\r\n            class=\"mat-icon  material-icons mat-icon-no-color cw m-0\" role=\"img\">email</mat-icon>\r\n          &nbsp;&nbsp;Support@Tulip.com</p>\r\n          \r\n       \r\n        <p class=\"mat-menu-item cw m-0 p-0\" mat-menu-item=\"\" role=\"menuitem\"\r\n          tabindex=\"0\" aria-disabled=\"false\">\r\n          <mat-icon   aria-hidden=\"false\" style=\"color: white;\"\r\n            class=\"mat-icon  material-icons mat-icon-no-color cw m-0\" role=\"img\">call</mat-icon>\r\n          &nbsp;&nbsp;555555555</p>\r\n\r\n       \r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-9 col-md-9 col-12 footer-parent\">\r\n      <p class=\"last-row\">©  Copywrites Tulip Pan masala @2020. All rights reserved. </p>\r\n\r\n    </div>\r\n    <div class=\"col-lg-3 col-md-3 col-12 footer-parent\">\r\n      <i class=\"fab fa-facebook footer-sm-icon\"></i>\r\n      <i class=\"fab fa-twitter footer-sm-icon\"></i>\r\n      <i class=\"fab fa-linkedin footer-sm-icon\"></i>\r\n      <i class=\"fab fa-instagram footer-sm-icon\"></i>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/home/footer/footer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/home/footer/footer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  color: #c9ae6c;\n  padding: 30px 40px;\n  background-image: linear-gradient(45deg, #02175d, #1e1b1e); }\n\n._18wTSA {\n  color: #ffffff;\n  font-size: 17px;\n  font-weight: 400;\n  margin-bottom: 9px; }\n\n._287FRX {\n  line-height: 2;\n  color: #bbb;\n  display: block;\n  font-weight: 400;\n  font-size: 14px; }\n\n.last-row {\n  margin: 0;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 11px; }\n\n.footer-img {\n  width: 38%; }\n\n.cw {\n  color: white; }\n\n.footer-sm-icon {\n  padding: 2px 8px; }\n\n@media only screen and (max-width: 983px) {\n  .footer-parent {\n    text-align: center; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvZm9vdGVyL0c6XFxQcm9qZWN0c1xcVHVsaXAtUGFuTWFzYWxhXFxDb25zdW1lci9zcmNcXGFwcFxcZGFzaGJvYXJkXFxob21lXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsMERBQTBELEVBQUE7O0FBRzlEO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLGdCQUFnQixFQUFBOztBQUVoQjtFQUVJO0lBQ0ksa0JBQWtCLEVBQUEsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvaG9tZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBjb2xvcjogI2M5YWU2YztcclxuICAgIHBhZGRpbmc6IDMwcHggNDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAyMTc1ZCwgIzFlMWIxZSk7XHJcbn1cclxuXHJcbi5fMTh3VFNBIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxufVxyXG4uXzI4N0ZSWCB7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIGNvbG9yOiAjYmJiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubGFzdC1yb3d7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmZvb3Rlci1pbWd7XHJcbiAgICB3aWR0aDogMzglO1xyXG59XHJcbi5jd3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZm9vdGVyLXNtLWljb257XHJcbiAgICBwYWRkaW5nOiAycHggOHB4O31cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4M3B4KSAge1xyXG4gICBcclxuICAgICAgICAuZm9vdGVyLXBhcmVudHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICJdfQ== */"

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

module.exports = "<div class=\"col-12 card-container\">\r\n  <div class=\"row\">\r\n\r\n\r\n    <div class=\"col-lg-8 col-sm-12 col-xs-12\">\r\n      <div class=\"card\">\r\n        <div class=\"cart-head-div\">\r\n          My cart\r\n        </div>\r\n\r\n\r\n        <hr class=\"m-0\">\r\n\r\n\r\n        <div class=\"each-row\">\r\n          <div class=\"row\">\r\n            <div class=\"col-2\">\r\n              <img src=\"../../../../../assets/products/3.jpeg\" alt=\"\" class=\"w-100\">\r\n            </div>\r\n            <div class=\"col-6 p-20-0\">\r\n              <a href=\"#\" class=\"product-name-link\">\r\n                Tulip premium pan masala\r\n              </a>\r\n              <div class=\"product-dec-ic\">\r\n                Brown, Pack of 1\r\n              </div>\r\n              <div class=\"product-dec-ic\">\r\n                Seller: OmniTechRetail </div>\r\n              <span class=\"price-ic\">$544</span>\r\n              <span class=\"price-st-ic\">$554</span>\r\n            </div>\r\n            <div class=\"col-4 p-20-0\">\r\n              <div class=\"d-by\">\r\n                Delivery by Fri Jun 12\r\n              </div>\r\n              <div class=\"product-dec-ic\">\r\n                10 Days Replacement Policy\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"each-row\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-10 col-md-10 col-12\">\r\n              <div class=\"qty-container\">\r\n                <button class=\"qty-btn\" (click)=\"decreaseCart()\">\r\n                  –\r\n                </button>\r\n                <div class=\"qty-input-container\">\r\n                  <input type=\"text\" class=\"qty-input\" [(ngModel)]=\"cartCount\">\r\n                </div>\r\n                <button class=\"qty-btn\" (click)=\"increaseCart()\">\r\n                  +\r\n                </button>\r\n              </div>\r\n              \r\n            </div>\r\n            <div class=\"col-lg-2 col-md-2 col-12\">\r\n              <button class=\"btn btn-danger\" (click)=\"removefromCart()\">\r\n                Remove\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-sm-12 col-xs-12 cart-next-card\">\r\n      <div class=\"card\">\r\n        <span class=\"p-detail\">\r\n          Price details\r\n        </span>\r\n        <hr class=\"m-0\">\r\n        <div class=\"price-detals\">\r\n          <div class=\"row p-10-0\">\r\n            <div class=\"col-8\">\r\n              Price (1 item)\r\n            </div>\r\n            <div class=\"col-4\">\r\n              ₹3,747\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-10-0 striked-border\">\r\n            <div class=\"col-8\">\r\n              Delivery Fee </div>\r\n            <div class=\"col-4\">\r\n              <span class=\"free\">Free</span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row p-10-0 fw-500 striked-border\">\r\n            <div class=\"col-8\">\r\n              Total Amount </div>\r\n            <div class=\"col-4\">\r\n              ₹3,747\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row order-btn\">\r\n            <button mat-flat-button color=\"primary\" class=\"place-order\" (click)=\"placeOrder()\">PLACE ORDER</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/home/header/cart/cart.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/home/header/cart/cart.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s; }\n\n/* On mouse-over, add a deeper shadow */\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); }\n\n.card-container {\n  padding: 35px 33px; }\n\n.each-row {\n  padding: 20px; }\n\n.product-name-link {\n  font-size: 16px;\n  color: #212121;\n  line-height: 1;\n  display: inline; }\n\n.p-20-0 {\n  padding: 20px 0px; }\n\n.product-dec-ic {\n  display: block;\n  color: #878787;\n  font-size: 14px;\n  height: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.price-ic {\n  font-size: 18px;\n  font-weight: 500;\n  color: #212121;\n  display: inline-block;\n  margin-right: 8px;\n  margin-top: 10px; }\n\n.price-st-ic {\n  color: #878787;\n  text-decoration: line-through;\n  font-size: 14px;\n  margin-right: 10px; }\n\n.d-y {\n  font-size: 14px;\n  color: #212121;\n  line-height: 1.4; }\n\n.cart-head-div {\n  font-size: 18px;\n  line-height: 56px;\n  padding: 0 24px;\n  font-weight: 500; }\n\n.action-texts {\n  display: inline-block;\n  text-transform: uppercase;\n  box-shadow: none;\n  outline: 0;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  margin-right: 25px; }\n\n.qty-container {\n  display: flex;\n  color: #212121;\n  align-items: center; }\n\n.qty-btn {\n  width: 28px;\n  height: 28px;\n  background: linear-gradient(#fff, #f9f9f9);\n  display: inline-block;\n  border: 1px solid #c2c2c2;\n  cursor: pointer;\n  font-size: 16px;\n  border-radius: 50%;\n  padding-top: 1px;\n  line-height: 1; }\n\n.qty-input-container {\n  display: inline-block;\n  padding: 1px 6px;\n  width: calc(100% - 60px);\n  height: 100%;\n  width: 46px;\n  height: 28px;\n  border-radius: 2px;\n  background-color: #fff;\n  border: 1px solid #c2c2c2;\n  margin: 0 5px; }\n\n.qty-input {\n  border: none;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 500;\n  vertical-align: middle;\n  text-align: center; }\n\n.qty-input:focus {\n  outline: none; }\n\n.p-detail {\n  display: block;\n  text-transform: uppercase;\n  padding: 13px 24px;\n  font-weight: 500;\n  color: #878787;\n  min-height: 47px;\n  border-radius: 2px 2px 0 0; }\n\n.price-detals {\n  padding: 15px; }\n\n.free {\n  color: #388e3c;\n  text-transform: uppercase; }\n\n.p-10-0 {\n  padding: 10px 0px; }\n\n.striked-border {\n  border-bottom: 1px dashed #e0e0e0; }\n\n.fw-500 {\n  font-weight: 500; }\n\n.order-btn {\n  text-align: center;\n  padding: 26px 0px; }\n\n.place-order {\n  margin-left: auto;\n  margin-right: auto;\n  padding: 3px 43px; }\n\n@media only screen and (max-width: 988px) {\n  .cart-next-card {\n    margin-top: 12px; } }\n\n@media only screen and (max-width: 595px) {\n  .cart-next-card {\n    margin-top: 12px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvaGVhZGVyL2NhcnQvRzpcXFByb2plY3RzXFxUdWxpcC1QYW5NYXNhbGFcXENvbnN1bWVyL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGhvbWVcXGhlYWRlclxcY2FydFxcY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0VBQ0EsMENBQTBDO0VBQzFDLGdCQUFnQixFQUFBOztBQUdwQix1Q0FBQTs7QUFDQTtFQUNJLDJDQUEyQyxFQUFBOztBQUUvQztFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFFdEI7RUFHSSxhQUFhO0VBQ2IsY0FBYztFQUdkLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsMEJBQTBCLEVBQUE7O0FBRTlCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWM7RUFDZCx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxpQ0FBaUMsRUFBQTs7QUFHckM7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSTtJQUNJLGdCQUFnQixFQUFBLEVBQU07O0FBRTlCO0VBQ0k7SUFDSSxnQkFBZ0IsRUFBQSxFQUFNIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvaGVhZGVyL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIC8qIEFkZCBzaGFkb3dzIHRvIGNyZWF0ZSB0aGUgXCJjYXJkXCIgZWZmZWN0ICovXHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBkZWVwZXIgc2hhZG93ICovXHJcbi5jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDM1cHggMzNweDtcclxufVxyXG4uZWFjaC1yb3cge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4ucHJvZHVjdC1uYW1lLWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG4ucC0yMC0wIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG59XHJcbi5wcm9kdWN0LWRlYy1pYyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjODc4Nzg3O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4ucHJpY2UtaWMge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5wcmljZS1zdC1pYyB7XHJcbiAgICBjb2xvcjogIzg3ODc4NztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5kLXkge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG59XHJcbi5jYXJ0LWhlYWQtZGl2IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gICAgcGFkZGluZzogMCAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYWN0aW9uLXRleHRzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbn1cclxuLnF0eS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucXR5LWJ0biB7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmLCAjZjlmOWY5KTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMmMyYzI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuLnF0eS1pbnB1dC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMXB4IDZweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA0NnB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjMmMyYzI7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG59XHJcbi5xdHktaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucXR5LWlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnAtZGV0YWlsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDEzcHggMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzg3ODc4NztcclxuICAgIG1pbi1oZWlnaHQ6IDQ3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHggMnB4IDAgMDtcclxufVxyXG4ucHJpY2UtZGV0YWxzIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5mcmVlIHtcclxuICAgIGNvbG9yOiAjMzg4ZTNjO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4ucC0xMC0we1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuLnN0cmlrZWQtYm9yZGVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZTBlMGUwO1xyXG5cclxufVxyXG4uZnctNTAwe1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ub3JkZXItYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjZweCAwcHg7XHJcbn1cclxuLnBsYWNlLW9yZGVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAzcHggNDNweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODhweCkgIHtcclxuICAgIC5jYXJ0LW5leHQtY2FyZHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4OyAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTVweCkgIHtcclxuICAgIC5jYXJ0LW5leHQtY2FyZHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4OyAgICB9XHJcbn0iXX0= */"

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
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);




var CartComponent = /** @class */ (function () {
    function CartComponent(apollo) {
        var _this = this;
        this.apollo = apollo;
        this.cartCount = 1;
        this.getCartForUser = function (id) {
            return new Promise(function (res, rej) {
                var cartitemsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n      query cartitems($userId: String!) {\n        cartitems(userId:$userId){\n          totalAmount\n            product {\n              name,\n              price,\n              fullDesc,\n              images,\n              tags\n\n\n            }\n        }\n      }\n    "], ["\n      query cartitems($userId: String!) {\n        cartitems(userId:$userId){\n          totalAmount\n            product {\n              name,\n              price,\n              fullDesc,\n              images,\n              tags\n\n\n            }\n        }\n      }\n    "])));
                _this.apollo
                    .watchQuery({
                    query: cartitemsQuery,
                    variables: {
                        userId: id
                    },
                })
                    .valueChanges.subscribe(function (_a) {
                    var data = _a.data;
                    res(data);
                }, function (err) {
                    rej(err);
                });
            });
        };
    }
    CartComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = JSON.parse(localStorage.getItem("user"));
                        console.log('carttttt', user);
                        return [4 /*yield*/, this.getCartForUser(user.login.id)];
                    case 1:
                        res = _a.sent();
                        console.log('res is ', res);
                        this.cartCount = res["cartitems"].length;
                        console.log('aaaaaaaa', this.cartCount);
                        return [2 /*return*/];
                }
            });
        });
    };
    CartComponent.prototype.decreaseCart = function () {
        this.cartCount--;
    };
    CartComponent.prototype.increaseCart = function () {
        this.cartCount++;
    };
    CartComponent.prototype.placeOrder = function () {
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/dashboard/home/header/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/dashboard/home/header/cart/cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]])
    ], CartComponent);
    return CartComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/dashboard/home/header/header.component.html":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/home/header/header.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\"\r\n    aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <img src=\"../../../../assets/tulip-logo.svg\" class=\"logo-img\" alt=\"\" onclick=\"window.location.href = '/';\">\r\n\r\n\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">   \r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">    \r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0\">   \r\n    </form> \r\n\r\n    <div class=\"tulip-mobile-menu\" style=\"\r\n    display: table-caption;\r\n\">\r\n      <a class=\"cw\" mat-button style=\"color: white;\">ABOUT US</a>\r\n      <a  class=\"cw\" mat-button style=\"color: white;\">PRODUCTS</a>\r\n      <a  class=\"cw\" mat-button style=\"color: white;\">CONTACT US</a>\r\n    </div>\r\n\r\n    <button class=\"btn btn-warning my-2 my-sm-0\" *ngIf=\"!isLoggedin\"\r\n     (click)=\"logmeIn()\">Login</button>\r\n    <p  *ngIf=\"isLoggedin\" class=\"m-0 header-name\">Hi, {{userName}}</p>\r\n\r\n\r\n    <button mat-button [matMenuTriggerFor]=\"menu\"  *ngIf=\"isLoggedin\" class=\"top-menu-item\">More \r\n      <span class=\"material-icons\">\r\n        arrow_drop_down\r\n        </span>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <a mat-menu-item routerLink=\"/profile\">\r\n        <!-- <span class=\"material-icons dd-menu-icon\">\r\n          account_circle\r\n          </span> -->\r\n          <span> My Profile</span>\r\n       </a>\r\n      <a mat-menu-item>\r\n        <!-- <span class=\"material-icons dd-menu-icon\">\r\n          local_shipping\r\n          </span> -->\r\n          <span>Orders</span>\r\n        </a>\r\n      <a mat-menu-item>\r\n        <!-- <span class=\"material-icons dd-menu-icon\">\r\n          favorite          </span> -->\r\n          <span>Wishlist</span>\r\n          </a>\r\n      <a mat-menu-item (click)=\"logmeOut()\">\r\n        <!-- <span class=\"material-icons dd-menu-icon\">\r\n          favorite          </span> -->\r\n          <span>Logout</span>\r\n          </a>\r\n    </mat-menu>\r\n  </div>\r\n\r\n\r\n  <a routerLink=\"/viewcart\">    \r\n    <p class=\"top-menu-item\">\r\n      <mat-icon matBadge=\"{{cartCount}}\" matBadgeColor=\"warn\">shopping_cart</mat-icon>\r\n      \r\n      <span class=\"cdk-visually-hidden\">\r\n        Cart </span>\r\n       \r\n    </p>  \r\n  </a>\r\n</nav>"

/***/ }),

/***/ "./src/app/dashboard/home/header/header.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/home/header/header.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-logo {\n  width: 5%; }\n\n.logo-img {\n  width: 5%;\n  cursor: pointer;\n  margin-left: 16px; }\n\n@media only screen and (max-width: 983px) {\n  .logo-img {\n    width: 9%;\n    cursor: pointer;\n    margin-left: 0x; } }\n\n.mat-dialog-container {\n  padding: 0px !important;\n  overflow-x: hidden !important; }\n\n.top-menu-item {\n  color: #ffc107;\n  padding: 14px 20px 2px 20px;\n  margin: 0; }\n\n.header-name {\n  color: #fff; }\n\n.cw {\n  color: white; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n.mat-menu-content a {\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvaGVhZGVyL0c6XFxQcm9qZWN0c1xcVHVsaXAtUGFuTWFzYWxhXFxDb25zdW1lci9zcmNcXGFwcFxcZGFzaGJvYXJkXFxob21lXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVMsRUFBQTs7QUFFYjtFQUNJLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0k7SUFDSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLGVBQWUsRUFBQSxFQUNsQjs7QUFJTDtFQUNJLHVCQUF1QjtFQUN2Qiw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSSxjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLFNBQVMsRUFBQTs7QUFNYjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBRUkscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvaG9tZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tbG9nbyB7XHJcbiAgICB3aWR0aDogNSU7XHJcbn1cclxuLmxvZ28taW1nIHtcclxuICAgIHdpZHRoOiA1JTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4M3B4KSAge1xyXG4gICAgLmxvZ28taW1nIHtcclxuICAgICAgICB3aWR0aDogOSU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcbi50b3AtbWVudS1pdGVte1xyXG4gICAgY29sb3I6ICNmZmMxMDc7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHggMnB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmJnLWRhcmt7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9vdGhlcnMvdG9wLWJhbm5lci5qcGcnKTtcclxuICAgIC8vIHNyY1xcYXNzZXRzXFxvdGhlcnNcclxufVxyXG4uaGVhZGVyLW5hbWV7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uY3d7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlcntcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi5tYXQtbWVudS1jb250ZW50IGEge1xyXG4gICAgLy8gY29sb3I6IHJlZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _services_loginheader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/loginheader.service */ "./src/app/services/loginheader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_auth_comp_auth_comp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth-comp/auth-comp.component */ "./src/app/auth-comp/auth-comp.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var src_app_services_cart_count_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/cart-count.service */ "./src/app/services/cart-count.service.ts");









 // Import NgxUiLoaderService

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dialog, toastr, ngxService, dataService, router, loginstatusService, cartCountservice) {
        this.dialog = dialog;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this.dataService = dataService;
        this.router = router;
        this.loginstatusService = loginstatusService;
        this.cartCountservice = cartCountservice;
        this.cartCount = 0;
        // this.cartCount = this.dataService.cartCount;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var myData = JSON.parse(localStorage.getItem("user"));
        if (myData) {
            this.userName = myData.login.userProfile.firstName;
            console.log("from local storage i got user", myData);
            this.isLoggedin = JSON.parse(localStorage.getItem("isLoggedIn"));
            console.log("from local storage is login", this.isLoggedin);
        }
        // subscribe to home component messages
        this.subscription = this.loginstatusService
            .retriveMessage()
            .subscribe(function (message) {
            if (message) {
                _this.isLoggedin = true;
                myData = JSON.parse(localStorage.getItem("user"));
                if (myData) {
                    _this.userName = myData.login.userProfile.firstName;
                }
            }
            else {
                _this.isLoggedin = false;
            }
        });
        //cart count subscribe
        this.countSubscription = this.cartCountservice
            .retriveMessage()
            .subscribe(function (message) {
            _this.cartCount++;
        });
        //age dialog start
        // const agedialog = this.dialog.open(AgeConfirmationComponent, {
        //   width: "600px",
        //   height: "400px",
        //   data: {
        //   },
        // });
        //age dialog end
    };
    HeaderComponent.prototype.logmeIn = function () {
        console.log("log in");
        var dialogRef = this.dialog.open(src_app_auth_comp_auth_comp_component__WEBPACK_IMPORTED_MODULE_6__["AuthCompComponent"], {
            width: "600px",
            height: "400px",
            data: {
            // model: {
            //   "annot_name": 'n',
            //   "annot_value":"v"
            // },
            },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            var myData = JSON.parse(localStorage.getItem("user"));
            console.log("from local storage i got user", myData);
            var isLog = JSON.parse(localStorage.getItem("isLoggedIn"));
            console.log("from local storage is login", isLog);
        });
    };
    HeaderComponent.prototype.logmeOut = function () {
        localStorage.removeItem("user");
        localStorage.removeItem("isLoggedIn");
        this.router.navigate(["/"]);
        this.isLoggedin = false;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/dashboard/home/header/header.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/dashboard/home/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_8__["NgxUiLoaderService"],
            _services_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_loginheader_service__WEBPACK_IMPORTED_MODULE_1__["LoginheaderService"],
            src_app_services_cart_count_service__WEBPACK_IMPORTED_MODULE_9__["CartCountService"]])
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

module.exports = "\r\n<app-all-products></app-all-products>\r\n<!-- <p (cartChange)='fetchCart($event)'>hi</p> -->\r\n\r\n<app-product-intro></app-product-intro>"

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

module.exports = "\r\n<div class=\"col-12\">\r\n  <div class=\"row\" *ngIf=\"selectedProducts\">\r\n    <div class=\"col-lg-4 col-md-12 col-sm-12 col-xs-12\">\r\n      <div class=\"product-slider\">\r\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n          <div class=\"carousel-inner\">\r\n            <div class=\"carousel-item active\">\r\n              <img class=\"d-block w-100\" [src]=\"selectedProducts.images\" alt=\"First slide\">\r\n            </div>\r\n          \r\n           \r\n          </div>\r\n          <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Previous</span>\r\n          </a>\r\n          <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Next</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"action-btns\">\r\n        <button mat-flat-button color=\"accent\" class=\"action-btn\" (click)=\"addtoCart()\">\r\n          <span class=\"material-icons\">\r\n            add_shopping_cart\r\n            </span>\r\n          Add to cart</button>\r\n        <!-- <button mat-flat-button color=\"warn\" class=\"action-btn\">\r\n          <span class=\"material-icons\">\r\n            flash_on\r\n            </span>\r\n          Buy now</button> -->\r\n\r\n      </div>\r\n      <!-- <img src=\"../../../../assets/products/3.jpeg\" alt=\"\"> -->\r\n\r\n    </div>\r\n    <div class=\"col-lg-8  col-md-12 col-sm-12 col-xs-12 desc\">\r\n      <div class=\"conatiner\">\r\n        <h1 class=\"_9E25nV\">\r\n          <span class=\"_35KyD6\"> {{selectedProducts.name}}</span></h1>\r\n  \r\n        <div class=\"price-div\">\r\n          <p class=\"price\">₹{{selectedProducts.price}}</p>\r\n          <span class=\"ofr\">30% off</span>         \r\n        </div>\r\n\r\n        <div class=\"product-desc\">\r\n          <div class=\"row\">\r\n            <div class=\"col-4 self-center\">\r\n              <p class=\"desc-text m-0\">Delivery</p>\r\n            </div>\r\n            <div class=\"col-8 self-center\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput type=\"number\" placeholder=\"Enter pin code to check Delivery\" value=\"\">\r\n              </mat-form-field>\r\n                \r\n\r\n            </div>\r\n          </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\">\r\n                <p class=\"desc-text\">Description</p>\r\n              </div>\r\n              <div class=\"col-8\">\r\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi atque nisi corrupti placeat est culpa, sit aperiam sint earum ipsa accusamus omnis, sed maiores in tempore nostrum quis architecto.</p>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"!selectedProducts\">\r\n    <h2 class=\"text-center\">Please select a prduct to continue</h2>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/home/product-details/product-details.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/home/product-details/product-details.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "._9E25nV {\n  color: #212121;\n  font-size: 24px;\n  font-weight: 400;\n  display: contents; }\n\n._9E25nV ._35KyD6 {\n  padding: 0;\n  line-height: 1.4;\n  font-size: inherit;\n  font-weight: inherit;\n  display: inline-block; }\n\n.action-btn {\n  margin: 10px;\n  padding: 6px 46px; }\n\n.action-btns {\n  text-align: center;\n  padding: 8px; }\n\n.desc {\n  padding: 51px 30px; }\n\n.price-div {\n  padding: 15px 0px; }\n\n.price {\n  font-size: 26px;\n  color: #525151;\n  font-weight: 500; }\n\n.ofr {\n  color: green;\n  font-size: 18px;\n  padding: 0px 11px; }\n\n.desc-text {\n  color: #343a40b0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvcHJvZHVjdC1kZXRhaWxzL0c6XFxQcm9qZWN0c1xcVHVsaXAtUGFuTWFzYWxhXFxDb25zdW1lci9zcmNcXGFwcFxcZGFzaGJvYXJkXFxob21lXFxwcm9kdWN0LWRldGFpbHNcXHByb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvaG9tZS9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLl85RTI1blYge1xyXG4gICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZGlzcGxheTogY29udGVudHM7XHJcbn1cclxuLl85RTI1blYgLl8zNUt5RDYge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uYWN0aW9uLWJ0biB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHggNDZweDtcclxufVxyXG4uYWN0aW9uLWJ0bnMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uZGVzYyB7XHJcbiAgICBwYWRkaW5nOiA1MXB4IDMwcHg7XHJcbn1cclxuLnByaWNlLWRpdiB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxufVxyXG4ucHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgY29sb3I6ICM1MjUxNTE7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5vZnIge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDExcHg7XHJcbn1cclxuLmRlc2MtdGV4dHtcclxuICAgIGNvbG9yOiAjMzQzYTQwYjA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/home/product-details/product-details.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/home/product-details/product-details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UpvotePostGQL, ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpvotePostGQL", function() { return UpvotePostGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cart_count_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart-count.service */ "./src/app/services/cart-count.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");








var UpvotePostGQL = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UpvotePostGQL, _super);
    function UpvotePostGQL() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.document = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n  mutation addToCart($cartItemModel: CartItemModel!) {\n    addToCart(cartItemModel:$cartItemModel){\n      id          \n    }\n  }\n"], ["\n  mutation addToCart($cartItemModel: CartItemModel!) {\n    addToCart(cartItemModel:$cartItemModel){\n      id          \n    }\n  }\n"])));
        return _this;
    }
    UpvotePostGQL = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], UpvotePostGQL);
    return UpvotePostGQL;
}(apollo_angular__WEBPACK_IMPORTED_MODULE_6__["Mutation"]));

var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(router, cartCount, toastr, apollo, getCartitem, ngxService) {
        var _this = this;
        this.router = router;
        this.cartCount = cartCount;
        this.toastr = toastr;
        this.apollo = apollo;
        this.getCartitem = getCartitem;
        this.ngxService = ngxService;
        this.addCart = function () {
            return new Promise(function (res, rej) {
                var cartItemModel = {
                    userId: "5ef21c111632ecc321bebe70",
                    productId: "5ed8fc1fd75df774b2160d5a",
                    quantity: 1,
                    totalAmount: 20,
                    amountToBePaid: 20,
                    offerId: null
                };
                //send the query to server
                _this.getCartitem
                    .mutate({ cartItemModel: cartItemModel })
                    .subscribe(function (_a) {
                    var data = _a.data;
                    res(data);
                    console.log('mutation', data);
                }, function (err) {
                    rej(err);
                });
            });
        };
        var data = history.state.data;
        this.selectedProducts = data;
        console.log('history data is ', data);
        // this.selectedProducts = 
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
    };
    ProductDetailsComponent.prototype.addtoCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.ngxService.start();
                        return [4 /*yield*/, this.addCart()];
                    case 1:
                        result = _a.sent();
                        console.log('result isss', result);
                        if (result) {
                            this.ngxService.stop();
                            this.toastr.success('Added to cart');
                            this.cartCount.broadCastMessage('cart added');
                            console.log(this.selectedProducts);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/dashboard/home/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.scss */ "./src/app/dashboard/home/product-details/product-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_cart_count_service__WEBPACK_IMPORTED_MODULE_3__["CartCountService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            apollo_angular__WEBPACK_IMPORTED_MODULE_6__["Apollo"],
            UpvotePostGQL,
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderService"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/dashboard/home/product-intro/product-intro.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/home/product-intro/product-intro.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\r\n  <!-- heading -->\r\n \r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-sm-12 col-md-6\">\r\n        <div class=\"image-area\">\r\n          <img class=\"img-responsive\" \r\n          src=\"../../../../assets/webp/siggnature.webp\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6 col-sm-12 col-md-6\">\r\n        <div class=\"text-area\">\r\n    \r\n          <span class=\"text-heading\">\r\n            Come, Taste the Freshness <br> of Tulip Pan Masala and <br> you would know why <br> we call it the\r\n            finest.\r\n          </span>\r\n\r\n          <p> The Freshness of 30+ Spices &amp; Herbs with Richness <br> of Over Forty Years of Our Expertise\r\n            and Experience <br> would surely make Tulip Pan Masala Your first Choice. </p>\r\n\r\n          <div class=\"buy-button\">\r\n\r\n\r\n            <button onclick=\"location.href = 'index.php?route=product/category&amp;path=177';\"\r\n              class=\"btn btn-default\">\r\n              BUY NOW\r\n            </button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    \r\n  </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"\">\r\n    <div class=\"row hero-showcase\">\r\n      <img src=\"../../../../assets/webp/tulipherobaner.webp\" class=\"w-100 tulipherobaner d-none d-md-block d-lg-block\"  alt=\"\">\r\n     \r\n     \r\n      <div class=\"container\">\r\n        <div class=\"text-on-img\">\r\n          <h1 class=\"img-texts\"> The Taste of Richness and Success Packed</h1>\r\n          <p class=\"heading_super1\"> in a Can for you.</p>  \r\n          <p class=\"content-super1\">Come taste the Freshness and Goddess of Tulip Pan Masala</p>\r\n\r\n          <button class=\"btn btn-default\"  style=\"padding: 9px 39px; background: #1e1e6e; color: white; border:none;\"> Buy Now \r\n          </button>\r\n\r\n\r\n\r\n        </div>\r\n     </div>\r\n     \r\n    </div>\r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/home/product-intro/product-intro.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/home/product-intro/product-intro.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-col {\n  padding: 0; }\n\n.sub-row {\n  margin: 0; }\n\n.sub-col {\n  padding: 0; }\n\n.module-title {\n  text-align: center;\n  margin: 0 0 30px;\n  margin-top: 80px; }\n\n.module-title {\n  padding-bottom: 35px;\n  background: url(https://www.dbsiggnature.com/catalog/view/theme/tt_belly2/image/bg-title.png) no-repeat 50% 100%;\n  width: 100%; }\n\n.module-title .module-description {\n  margin: 0 0 30px;\n  font-size: 14px;\n  color: #5b5b5b;\n  font-weight: 300;\n  font-style: italic; }\n\n.image-area {\n  padding: 0px;\n  height: 550px;\n  margin: 55px 70px; }\n\n.carousel-inner > .item > a > img, .carousel-inner > .item > img, .img-responsive, .thumbnail a > img, .thumbnail > img {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n\n.text-area {\n  padding: 100px 0px; }\n\n.text-heading {\n  font-size: 30px;\n  color: #1b47b0;\n  font-family: 'Prata', serif;\n  margin: 10px 0px;\n  text-transform: capitalize;\n  font-weight: 100;\n  line-height: 45px; }\n\n.text-area .buy-button button {\n  line-height: 42px;\n  height: 45px;\n  width: auto;\n  border-radius: 3px;\n  padding: 0 35px;\n  margin: 0;\n  position: relative;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: 500;\n  display: inline-block;\n  font-size: 12px;\n  color: #a9a9a9;\n  background: none;\n  background-image: none;\n  background-image: none;\n  border: 2px solid #123075;\n  box-shadow: none;\n  cursor: pointer;\n  font-family: 'Rubik', sans-serif;\n  transition: ease .5s all;\n  background-image: linear-gradient(to bottom, #123075, #092056);\n  color: white; }\n\n.my-power {\n  text-align: center;\n  margin-top: -30%;\n  height: 404px; }\n\n.heading_super1 {\n  font-size: 30px;\n  color: #1a1aa4;\n  font-family: 'Prata', serif; }\n\n.content-super1 {\n  font-size: 16px;\n  font-family: 'Rubik', sans-serif !important;\n  font-weight: 100;\n  color: #555555;\n  margin-bottom: 26px !important; }\n\n.hero-showcase {\n  background: #eae8eb;\n  margin-top: 32px;\n  padding-top: 15px; }\n\n.text-on-img {\n  text-align: center;\n  margin-top: -38%;\n  height: 404px; }\n\n.img-texts {\n  font-size: 30px;\n  color: #1a1aa4;\n  font-family: 'Prata', serif; }\n\n@media only screen and (max-width: 763px) {\n  .text-on-img {\n    text-align: center;\n    margin-top: 0;\n    padding: 42px; }\n  .image-area {\n    padding: 0px;\n    height: 100%;\n    margin: 0;\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvcHJvZHVjdC1pbnRyby9HOlxcUHJvamVjdHNcXFR1bGlwLVBhbk1hc2FsYVxcQ29uc3VtZXIvc3JjXFxhcHBcXGRhc2hib2FyZFxcaG9tZVxccHJvZHVjdC1pbnRyb1xccHJvZHVjdC1pbnRyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVUsRUFBQTs7QUFFYjtFQUNHLFNBQVMsRUFBQTs7QUFFWjtFQUNHLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksb0JBQW9CO0VBQ3BCLGdIQUFnSDtFQUNoSCxXQUFXLEVBQUE7O0FBSWY7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0NBQWdDO0VBR2hDLHdCQUF3QjtFQUN4Qiw4REFBK0Q7RUFDL0QsWUFBWSxFQUFBOztBQUVoQjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUVqQjtFQUNJLGVBQWU7RUFDZixjQUFjO0VBRWQsMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0ksZUFBZTtFQUNmLDJDQUEyQztFQUMzQyxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDhCQUE4QixFQUFBOztBQUVsQztFQUNJLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFFZCwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYSxFQUFBO0VBRWpCO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1QsV0FBVyxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvaG9tZS9wcm9kdWN0LWludHJvL3Byb2R1Y3QtaW50cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb2wge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4gLnN1Yi1yb3cge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbiAuc3ViLWNvbCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5tb2R1bGUtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIDAgMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbn1cclxuLm1vZHVsZS10aXRsZSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzVweDtcclxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3d3dy5kYnNpZ2duYXR1cmUuY29tL2NhdGFsb2cvdmlldy90aGVtZS90dF9iZWxseTIvaW1hZ2UvYmctdGl0bGUucG5nKSBuby1yZXBlYXQgNTAlIDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5tb2R1bGUtdGl0bGUgLm1vZHVsZS1kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM1YjViNWI7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbi5pbWFnZS1hcmVhIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGhlaWdodDogNTUwcHg7XHJcbiAgICBtYXJnaW46IDU1cHggNzBweDtcclxufVxyXG4uY2Fyb3VzZWwtaW5uZXI+Lml0ZW0+YT5pbWcsIC5jYXJvdXNlbC1pbm5lcj4uaXRlbT5pbWcsIC5pbWctcmVzcG9uc2l2ZSwgLnRodW1ibmFpbCBhPmltZywgLnRodW1ibmFpbD5pbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLnRleHQtYXJlYSB7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwcHg7XHJcbn1cclxuLnRleHQtaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzFiNDdiMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJhdGEnLCBzZXJpZjtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBsaW5lLWhlaWdodDogNDVweDtcclxufVxyXG4udGV4dC1hcmVhIC5idXktYnV0dG9uIGJ1dHRvbiB7XHJcbiAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogMCAzNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2E5YTlhOTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxMjMwNzU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2UgLjVzIGFsbDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogZWFzZSAuNXMgYWxsO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZSAuNXMgYWxsO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzEyMzA3NSAsICMwOTIwNTYpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5teS1wb3dlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzAlO1xyXG4gICAgaGVpZ2h0OiA0MDRweDtcclxufVxyXG4uaGVhZGluZ19zdXBlcjEge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICMxYTFhYTQ7XHJcbiAgICAvLyBwYWRkaW5nOiAxM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQcmF0YScsIHNlcmlmO1xyXG59XHJcbi5jb250ZW50LXN1cGVyMSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjZweCAhaW1wb3J0YW50O1xyXG59XHJcbi5oZXJvLXNob3djYXNle1xyXG4gICAgYmFja2dyb3VuZDogI2VhZThlYjtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG4udGV4dC1vbi1pbWd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzglO1xyXG4gICAgaGVpZ2h0OiA0MDRweDtcclxufVxyXG4uaW1nLXRleHRze1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICMxYTFhYTQ7XHJcbiAgICAvLyBwYWRkaW5nOiAxM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQcmF0YScsIHNlcmlmO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2M3B4KSAge1xyXG4gICAgLnRleHQtb24taW1nIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBwYWRkaW5nOiA0MnB4O1xyXG4gICAgfVxyXG4gICAgLmltYWdlLWFyZWEge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/home/product-intro/product-intro.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/home/product-intro/product-intro.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductIntroComponent", function() { return ProductIntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductIntroComponent = /** @class */ (function () {
    function ProductIntroComponent() {
    }
    ProductIntroComponent.prototype.ngOnInit = function () {
    };
    ProductIntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-intro',
            template: __webpack_require__(/*! ./product-intro.component.html */ "./src/app/dashboard/home/product-intro/product-intro.component.html"),
            styles: [__webpack_require__(/*! ./product-intro.component.scss */ "./src/app/dashboard/home/product-intro/product-intro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductIntroComponent);
    return ProductIntroComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/user-profile/user-profile.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/home/user-profile/user-profile.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid \">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4 col-md-4 col-sm-12 p-20\">\r\n      <div class=\"card p-20\">\r\n        <h3>Hi!</h3>\r\n        <p>{{profileModel.firstName}} {{profileModel.lastName}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-8 col-md-8 col-sm-12 p-20\" >\r\n      <form class=\"example-form\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <mat-label>Email</mat-label>\r\n          <input matInput disabled [(ngModel)]=\"profileModel.email\" name=\"email\">\r\n        </mat-form-field>\r\n      \r\n        <mat-form-field class=\"example-full-width\">\r\n          <mat-label>Phone</mat-label>\r\n          <input matInput  [(ngModel)]=\"profileModel.phone\" name=\"phone\">\r\n        </mat-form-field>\r\n      \r\n        <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n          <td><mat-form-field class=\"example-full-width\">\r\n            <mat-label>First name</mat-label>\r\n            <input matInput [(ngModel)]=\"profileModel.firstName\" name=\"firstName\">\r\n          </mat-form-field></td>\r\n          <td><mat-form-field class=\"example-full-width\">\r\n            <mat-label>Last name</mat-label>\r\n            <input matInput [(ngModel)]=\"profileModel.lastName\" name=\"lastName\">\r\n          </mat-form-field></td>\r\n       \r\n        </tr></table>\r\n      \r\n        <button (click)=\"addAddress()\">+</button>\r\n        <p *ngFor=\"let address of profileModel.userAddress;index as addressindex\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-label>Address</mat-label>\r\n            <textarea matInput placeholder=\"Ex. 100 Main St\">1600 Amphitheatre Pkwy</textarea>\r\n          </mat-form-field>\r\n          \r\n         <button *ngIf=\"!address.id\" (click)=\"removeAddress(addressindex)\">-</button>\r\n        </p>\r\n      \r\n      </form>\r\n      \r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/home/user-profile/user-profile.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/home/user-profile/user-profile.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\ntd {\n  padding-right: 8px; }\n\n.p-20 {\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvdXNlci1wcm9maWxlL0c6XFxQcm9qZWN0c1xcVHVsaXAtUGFuTWFzYWxhXFxDb25zdW1lci9zcmNcXGFwcFxcZGFzaGJvYXJkXFxob21lXFx1c2VyLXByb2ZpbGVcXHVzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGQge1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gIH1cclxuICAucC0yMHtcclxuICAgICAgcGFkZGluZzogMjBweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/dashboard/home/user-profile/user-profile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/home/user-profile/user-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
        this.profileModel = {
            email: "",
            id: "",
            phone: "",
            firstName: "",
            lastName: "",
            dob: "",
            userAddress: []
        };
        this.index = 0;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var myData = JSON.parse(localStorage.getItem('user'));
        this.user = myData;
        this.profileModel.firstName = myData.login.userProfile.firstName;
        this.profileModel.lastName = myData.login.userProfile.lastName;
        this.profileModel.email = myData.login.email;
        this.profileModel.phone = myData.login.phone;
        console.log('from local storage i got user', myData);
    };
    UserProfileComponent.prototype.addAddress = function () {
        if (!this.profileModel.userAddress)
            this.profileModel.userAddress = [];
        this.profileModel.userAddress.push('xxx');
    };
    UserProfileComponent.prototype.removeAddress = function (i) {
        this.profileModel.userAddress = this.profileModel.userAddress.splice(i, 1);
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/dashboard/home/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/dashboard/home/user-profile/user-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/graphql.module.ts":
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ngApollo.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/fesm5/ngApolloLinkHttp.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");





var uri = 'https://tulippanmasala.herokuapp.com/graphql'; // <-- add the URL of the GraphQL server here
function createApollo(httpLink) {
    return {
        link: httpLink.create({ uri: uri }),
        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"](),
    };
}
var GraphQLModule = /** @class */ (function () {
    function GraphQLModule() {
    }
    GraphQLModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLinkModule"]],
            providers: [
                {
                    provide: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["APOLLO_OPTIONS"],
                    useFactory: createApollo,
                    deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]],
                },
            ],
        })
    ], GraphQLModule);
    return GraphQLModule;
}());



/***/ }),

/***/ "./src/app/services/cart-count.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/cart-count.service.ts ***!
  \************************************************/
/*! exports provided: CartCountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartCountService", function() { return CartCountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var CartCountService = /** @class */ (function () {
    function CartCountService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    CartCountService.prototype.broadCastMessage = function (message) {
        this.subject.next({ text: message });
    };
    CartCountService.prototype.removeMessages = function () {
        this.subject.next();
    };
    CartCountService.prototype.retriveMessage = function () {
        return this.subject.asObservable();
    };
    CartCountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartCountService);
    return CartCountService;
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

/***/ "./src/app/services/loginheader.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/loginheader.service.ts ***!
  \*************************************************/
/*! exports provided: LoginheaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginheaderService", function() { return LoginheaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var LoginheaderService = /** @class */ (function () {
    function LoginheaderService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    LoginheaderService.prototype.broadCastMessage = function (message) {
        this.subject.next({ text: message });
    };
    LoginheaderService.prototype.removeMessages = function () {
        this.subject.next();
    };
    LoginheaderService.prototype.retriveMessage = function () {
        return this.subject.asObservable();
    };
    LoginheaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginheaderService);
    return LoginheaderService;
}());



/***/ }),

/***/ "./src/app/services/store-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/store-service.service.ts ***!
  \***************************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ls = __webpack_require__(/*! local-storage */ "./node_modules/local-storage/local-storage.js");
var StoreService = /** @class */ (function () {
    function StoreService() {
    }
    StoreService.prototype.setData = function (key, data) {
        ls.set(key, data);
    };
    StoreService.prototype.getData = function (key) {
        return ls.get(key);
    };
    StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], StoreService);
    return StoreService;
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

module.exports = __webpack_require__(/*! G:\Projects\Tulip-PanMasala\Consumer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map