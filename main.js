(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n\r\n<router-outlet></router-outlet>\r\n<ngx-ui-loader></ngx-ui-loader>\r\n\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth-comp/auth-comp.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth-comp/auth-comp.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"row\" style=\"\r\nheight: 100%;\r\n\">\r\n  <div class=\"col-5 test\" >\r\n    <h3>Login</h3>\r\n    <p>Get access to your Orders, Wishlist and Recommendations</p>\r\n    <!-- <img src=\"../../../assets/s-bag.svg\" class=\"shopping-bag\" alt=\"\"> -->\r\n  </div>\r\n  <div class=\"col-7 auth-area\">\r\n    <app-login *ngIf=\"!isnewUser\" (userStatus)=\"doSomething($event)\"></app-login>\r\n    <app-register *ngIf=\"isnewUser\"  (userStatus)=\"doSomething($event)\"></app-register>\r\n  </div>\r\n</div>\r\n<!-- \r\n<div style=\"height: 100% ;width: 100%; background: #6f6f6f;\">\r\n    <p>hi</p>\r\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth-comp/login/login.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth-comp/login/login.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Enter Email</mat-label>\r\n    <input matInput [(ngModel)]=\"userObj.email\"  [ngModelOptions]=\"{standalone: true}\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Enter Password</mat-label>\r\n    <input matInput placeholder=\"\" [(ngModel)]=\"userObj.password\"  [ngModelOptions]=\"{standalone: true}\">\r\n  </mat-form-field>\r\n\r\n  <button mat-raised-button text-center color=\"primary\" (click)=\"login()\" >Login</button>\r\n  <!-- <p class=\"sub\"><a href=\"Forgot Password?\">Forgot Password?</a></p> -->\r\n\r\n</form>\r\n\r\n<div class=\"allign-bottom\">\r\n  <p class=\"sub1\" (click)=\"newUser()\">\r\n    New to Tulip? Create an account</p>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth-comp/register/register.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth-comp/register/register.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Enter Name</mat-label>\r\n    <input matInput value=\"\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Enter Email</mat-label>\r\n    <input matInput value=\"\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Enter Phone</mat-label>\r\n    <input matInput value=\"\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Enter Password</mat-label>\r\n    <input matInput placeholder=\"\" value=\"\">\r\n  </mat-form-field>\r\n    \r\n  <button mat-raised-button text-center color=\"primary\">Submit</button>\r\n  <!-- <p class=\"sub\"><a href=\"Forgot Password?\">Forgot Password?</a></p> -->\r\n\r\n</form>\r\n\r\n<div class=\"allign-bottom\">\r\n  <p  class=\"sub1\"  (click)=\"oldUser()\">Already have an account? Login</p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/all-products/all-products.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/all-products/all-products.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <ol class=\"carousel-indicators\">\r\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"carousel-item active\">\r\n      <img class=\"d-block w-100\" src=\"../../../../assets/slider/slide1.jpg\" alt=\"First slide\">\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img class=\"d-block w-100\" src=\"../../../../assets/slider/slide2.jpg\" alt=\"Second slide\">\r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <img class=\"d-block w-100\" src=\"../../../../assets/slider/slide3.jpg\" alt=\"Third slide\">\r\n    </div>\r\n  </div>\r\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row text-center\">\r\n    <div class=\"col-lg-3 col-md-4 col-sm-6 col-xs-6\" *ngFor=\"let product of allProducts\">\r\n        <img [src]=\"product.images\" class=\"w-100\" alt=\"\">\r\n        <p  class=\"m-0 p-desc\">{{product.name}}</p>\r\n        <p  class=\"m-0 price\">{{product.price}}</p>\r\n        <button class=\"btn btn-success buy-btn\" type=\"button\">Buy Now</button>\r\n    </div>   \r\n  </div>\r\n</div>\r\n<!-- owl -->\r\n<!-- <div class='container-fluid'>    \r\n<owl-carousel [options]=\"SlideOptions\" [items]=\"Images\" [carouselClasses]=\"['owl-theme', 'sliding']\" >  \r\n  <div class=\"item\" *ngFor=\"let product of products\" >  \r\n    <div class=\"text-center\">  \r\n      <img class=\"product-img\" src={{product.images}} (click)=\"productDetails(product)\"/>\r\n      <p class=\"m-0 p-desc\">{{product.name}}</p>  \r\n      <p class=\"m-0 price\">{{product.price}}</p>\r\n      <button type=\"button\" class=\"btn btn-success buy-btn\" (click)=\"buyNow(product)\">Buy Now</button>\r\n    </div>  \r\n  </div>  \r\n  </owl-carousel>  \r\n</div>  -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/footer/footer.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/footer/footer.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12 footer\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-sm-12 col-md-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n          <div class=\"_3qd5C5\">\r\n            <div class=\"_18wTSA\">ABOUT</div>\r\n            <a href=\"/helpcentre?otracker=undefined_footer_navlinks\"\r\n              class=\"_287FRX\">Contact Us</a>\r\n              <a href=\"#\" class=\"_287FRX\">About\r\n              Us</a><a href=\"#\"\r\n              class=\"_287FRX\">Careers</a>\r\n              <a href=\"#\"\r\n              class=\"_287FRX\">Flipkart Stories</a>\r\n              <a href=\"#\"\r\n              class=\"_287FRX\">Press</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n          <div class=\"_3qd5C5\">\r\n            <div class=\"_18wTSA\">HELP</div>\r\n            <a href=\"#\" class=\"_287FRX\">Payments</a><a\r\n              href=\"#\" class=\"_287FRX\">Shipping</a><a\r\n              href=\"#\" class=\"_287FRX\">Cancellation &amp;\r\n              Returns</a><a href=\"#\"\r\n              class=\"_287FRX\">FAQ</a>\r\n              <a href=\"#\"\r\n              class=\"_287FRX\">Report Infringement</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n          <div class=\"_3qd5C5\">\r\n            <div class=\"_18wTSA\">POLICY</div>\r\n            <a href=\"#\"\r\n              class=\"_287FRX\">Return Policy</a>\r\n              <a href=\"#\"\r\n              class=\"_287FRX\">Terms Of Use</a>\r\n              <a href=\"#\"\r\n              class=\"_287FRX\">Security</a>\r\n              <a href=\"#\"\r\n              class=\"_287FRX\">Privacy</a>\r\n              <a href=\"#\"\r\n              class=\"_287FRX\">Sitemap</a>\r\n              <a href=\"#\"\r\n              class=\"_287FRX\">EPR Compliance</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3 col-sm-6\">\r\n          <div class=\"_3qd5C5\">\r\n            <div class=\"_18wTSA\">SOCIAL</div>\r\n            <a href=\"#\" class=\"_287FRX\">Facebook</a><a\r\n              href=\"#\" class=\"_287FRX\">Twitter</a><a\r\n              href=\"#\" class=\"_287FRX\">YouTube</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6 col-sm-12 col-md-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 col-sm-12 col-md-6\">\r\n          <div class=\"_3qd5C5\">\r\n            <div class=\"_18wTSA\">Mail Us:</div>\r\n            <a href=\"#\"\r\n              class=\"_287FRX\">Flipkart Internet Private Limited,\r\n\r\n              Buildings Alyssa, Begonia &\r\n              \r\n              Clove Embassy Tech Village,\r\n              \r\n              Outer Ring Road, Devarabeesanahalli Village,\r\n              \r\n              Bengaluru, 560103,\r\n              \r\n              Karnataka, India</a>\r\n              \r\n              \r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 col-sm-12 col-md-6\">\r\n          <div class=\"_3qd5C5\">\r\n            <div class=\"_18wTSA\">Registered Office Address:\r\n            </div>\r\n            <a href=\"#\"\r\n              class=\"_287FRX\">Flipkart Internet Private Limited,\r\n\r\n              Buildings Alyssa, Begonia &\r\n              \r\n              Clove Embassy Tech Village,\r\n              \r\n              Outer Ring Road, Devarabeesanahalli Village,\r\n              \r\n              Bengaluru, 560103,\r\n              \r\n              Karnataka, India</a>\r\n              \r\n              \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<hr>\r\n  <div class=\"row\">\r\n    <p class=\"last-row\">© 2007-2020 Tulip.com </p>\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/header/cart/cart.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/header/cart/cart.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12 card-container\">\r\n  <div class=\"row\"  *ngIf=\"isLoggedin\">\r\n\r\n\r\n    <div class=\"col-8\">\r\n      <div class=\"card\">\r\n        <div class=\"cart-head-div\">\r\n          My cart\r\n        </div>\r\n\r\n\r\n        <hr class=\"m-0\">\r\n\r\n\r\n        <div class=\"each-row\">\r\n          <div class=\"row\">\r\n            <div class=\"col-2\">\r\n              <img src=\"../../../../../assets/products/3.jpeg\" alt=\"\" class=\"w-100\">\r\n            </div>\r\n            <div class=\"col-6 p-20-0\">\r\n              <a href=\"#\" class=\"product-name-link\">\r\n                Tulip premium pan masala\r\n              </a>\r\n              <div class=\"product-dec-ic\">\r\n                Brown, Pack of 1\r\n              </div>\r\n              <div class=\"product-dec-ic\">\r\n                Seller: OmniTechRetail </div>\r\n              <span class=\"price-ic\">$544</span>\r\n              <span class=\"price-st-ic\">$554</span>\r\n            </div>\r\n            <div class=\"col-4 p-20-0\">\r\n              <div class=\"d-by\">\r\n                Delivery by Fri Jun 12\r\n              </div>\r\n              <div class=\"product-dec-ic\">\r\n                10 Days Replacement Policy\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"each-row\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"qty-container\">\r\n                <button class=\"qty-btn\" (click)=\"decreaseCart()\">\r\n                  –\r\n                </button>\r\n                <div class=\"qty-input-container\">\r\n                  <input type=\"text\" class=\"qty-input\" [(ngModel)]=\"cartCount\">\r\n                </div>\r\n                <button class=\"qty-btn\" (click)=\"increaseCart()\">\r\n                  +\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"col action-texts\">\r\n            </div>\r\n            <div class=\"col action-texts\">\r\n\r\n            </div>\r\n            <div class=\"col action-texts\"> remove\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <div class=\"card\">\r\n        <span class=\"p-detail\">\r\n          Price details\r\n        </span>\r\n        <hr class=\"m-0\">\r\n        <div class=\"price-detals\">\r\n          <div class=\"row p-10-0\">\r\n            <div class=\"col-8\">\r\n              Price (1 item)\r\n            </div>\r\n            <div class=\"col-4\">\r\n              ₹3,747\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-10-0 striked-border\">\r\n            <div class=\"col-8\">\r\n              Delivery Fee </div>\r\n            <div class=\"col-4\">\r\n              <span class=\"free\">Free</span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row p-10-0 fw-500 striked-border\">\r\n            <div class=\"col-8\">\r\n              Total Amount </div>\r\n            <div class=\"col-4\">\r\n              ₹3,747\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row order-btn\">\r\n            <button mat-flat-button color=\"primary\" class=\"place-order\">PLACE ORDER</button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!isLoggedin\">\r\n    <p>Login to view your cart</p>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/header/header.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/header/header.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\"\r\n    aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <!-- <a class=\"navbar-brand\" href=\"#\">Navbar</a> -->\r\n  <img src=\"../../../../assets/tulip-logo.svg\" class=\"logo-img\" alt=\"\" onclick=\"window.location.href = '/';\">\r\n  <!-- <img src=\"../../../../assets/tulip-logo.svg\" class=\"logo-img\" alt=\"\" onclick=\"window.location.href = '/';\" > -->\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n    \r\n      <!-- <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n      </li> -->\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n\r\n      <!-- <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button> -->\r\n    </form>\r\n    <!-- <p class=\"m-0 \">\r\n      <span class=\"material-icons\">\r\n        shopping_cart\r\n        </span>\r\n        Cart\r\n      </p> -->\r\n    <button class=\"btn btn-warning my-2 my-sm-0\" *ngIf=\"!isLoggedin\"\r\n     (click)=\"logmeIn()\">Login</button>\r\n\r\n    <p  *ngIf=\"isLoggedin\" class=\"m-0 header-name\">Hi, {{userName}}</p>\r\n    \r\n\r\n    <button mat-button [matMenuTriggerFor]=\"menu\"  class=\"top-menu-item\">More \r\n      <span class=\"material-icons\">\r\n        arrow_drop_down\r\n        </span>\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n    \r\n       <div class=\"p-10-9\" routerLink=\"/profile\">\r\n        <img \r\n        src=\"assets/icons/user.svg\" class=\"w-24\">\r\n        \r\n          <span class=\"p-0-7\">Profile</span>\r\n       \r\n      </div>\r\n       <div class=\"p-10-9\">\r\n        <img \r\n        src=\"assets/icons/product.svg\" class=\"w-24\">\r\n          <span class=\"p-0-7\">Orders</span>\r\n        \r\n      </div>\r\n       <div class=\"p-10-9\" (click)=\"logOut()\">\r\n        <img \r\n        src=\"assets/icons/exit.svg\" class=\"w-24\">\r\n        <span class=\"m-0 p-0-7\">Log out</span>\r\n       \r\n      </div>\r\n\r\n\r\n    </mat-menu>\r\n\r\n\r\n  </div>\r\n  <a routerLink=\"/viewcart\">    \r\n    <p class=\"top-menu-item\">\r\n      <mat-icon matBadge=\"{{cartCount}}\" matBadgeColor=\"warn\">shopping_cart</mat-icon>\r\n      \r\n      <!-- Include text description of the icon's meaning for screen-readers -->\r\n      <span class=\"cdk-visually-hidden\">\r\n        Cart </span>\r\n    </p>  \r\n  </a>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/home.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/home.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-all-products></app-all-products>\r\n<app-product-intro></app-product-intro>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/product-details/product-details.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/product-details/product-details.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"col-12\">\r\n  <div class=\"row\">\r\n    <div class=\"col-4\">\r\n      <div class=\"product-slider\">\r\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n          <div class=\"carousel-inner\">\r\n            <div class=\"carousel-item active\">\r\n              <img class=\"d-block w-100\" src=\"../../../../assets/products/3.jpeg\" alt=\"First slide\">\r\n            </div>\r\n            <div class=\"carousel-item\">\r\n              <img class=\"d-block w-100\" src=\"../../../../assets/products/4.jpeg\" alt=\"Second slide\">\r\n            </div>\r\n           \r\n          </div>\r\n          <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Previous</span>\r\n          </a>\r\n          <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n            <span class=\"sr-only\">Next</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"action-btns\">\r\n        <button mat-flat-button color=\"accent\" class=\"action-btn\" >\r\n          <span class=\"material-icons\">\r\n            add_shopping_cart\r\n            </span>\r\n          Add to cart</button>\r\n        <button mat-flat-button color=\"warn\" class=\"action-btn\">\r\n          <span class=\"material-icons\">\r\n            flash_on\r\n            </span>\r\n          Buy now</button>\r\n\r\n      </div>\r\n      <!-- <img src=\"../../../../assets/products/3.jpeg\" alt=\"\"> -->\r\n\r\n    </div>\r\n    <div class=\"col-8 desc\">\r\n      <div class=\"conatiner\">\r\n        <h1 class=\"_9E25nV\">\r\n          <span class=\"_35KyD6\"> Tulip premium pan masala packet (Pack of 10 pouches)</span></h1>\r\n  \r\n        <div class=\"price-div\">\r\n          <p class=\"price\">₹1,399</p>\r\n          <span class=\"ofr\">30% off</span>         \r\n        </div>\r\n\r\n        <div class=\"product-desc\">\r\n          <div class=\"row\">\r\n            <div class=\"col-2\">\r\n              <p class=\"desc-text\">Delivery</p>\r\n            </div>\r\n            <div class=\"col-10\">\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Enter pin code to check Delivery\" value=\"\">\r\n              </mat-form-field>\r\n                \r\n\r\n            </div>\r\n          </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-2\">\r\n                <p class=\"desc-text\">Description</p>\r\n              </div>\r\n              <div class=\"col-10\">\r\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi atque nisi corrupti placeat est culpa, sit aperiam sint earum ipsa accusamus omnis, sed maiores in tempore nostrum quis architecto.</p>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/product-intro/product-intro.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/product-intro/product-intro.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-12\">\r\n  <!-- heading -->\r\n  <div class=\"row\">\r\n    <div class=\"module-title\">\r\n      <h2>\r\n        Try Siggnature\r\n      </h2>\r\n      <div class=\"module-description\">\r\n        You can order siggnature pan masala Sitting at your home by ordering it online.\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-sm-12 col-md-6\">\r\n        <div class=\"image-area\">\r\n          <img class=\"img-responsive\" src=\"https://www.dbsiggnature.com/image/catalog/cmsblock/Banner9.jpg\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6 col-sm-12 col-md-6\">\r\n        <div class=\"text-area\">\r\n    \r\n          <span class=\"text-heading\">\r\n            Come, Taste the Freshness <br> of DB Siggnature and <br> you would know why <br> we call it the\r\n            finest.\r\n          </span>\r\n\r\n          <p> The Freshness of 30+ Spices &amp; Herbs with Richness <br> of Over Forty Years of Our Expertise\r\n            and Experience <br> would surely make DB Siggnature Your first Choice. </p>\r\n\r\n          <div class=\"buy-button\">\r\n\r\n\r\n            <button onclick=\"location.href = 'index.php?route=product/category&amp;path=177';\"\r\n              class=\"btn btn-default\">\r\n              BUY NOW\r\n            </button>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    \r\n  </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"container\">\r\n\r\n  </div>\r\n  \r\n</div>\r\n\r\n<!-- \r\n<div class=\"col-12\">\r\n  <div class=\"row\">\r\n    <div class=\"main-col col-sm-12 col-md-12\">\r\n      <div class=\"row sub-row\">\r\n        <div class=\"sub-col col-sm-12 col-md-12\">\r\n          <div>\r\n            <div class=\"description\">\r\n              <div class=\"module-title\">\r\n                <h2>\r\n                  Try Siggnature\r\n                </h2>\r\n                <div class=\"module-description\">\r\n                  You can order siggnature pan masala Sitting at your home by ordering it online.\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div>\r\n                  \r\n                    <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                      <div class=\"image-area\">\r\n                        <img class=\"img-responsive\" src=\"https://www.dbsiggnature.com/image/catalog/cmsblock/Banner9.jpg\">\r\n                      </div>\r\n                    </div>\r\n    \r\n                    <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                      <div class=\"text-area\">\r\n    \r\n                        <span class=\"text-heading\">\r\n                          Come, Taste the Freshness <br> of DB Siggnature and <br> you would know why <br> we call it the\r\n                          finest.\r\n                        </span>\r\n    \r\n                        <p> The Freshness of 30+ Spices &amp; Herbs with Richness <br> of Over Forty Years of Our Expertise\r\n                          and Experience <br> would surely make DB Siggnature Your first Choice. </p>\r\n    \r\n                        <div class=\"buy-button\">\r\n    \r\n    \r\n                          <button onclick=\"location.href = 'index.php?route=product/category&amp;path=177';\"\r\n                            class=\"btn btn-default\">\r\n                            BUY NOW\r\n                          </button>\r\n    \r\n                        </div>\r\n                      </div>\r\n                    </div>    \r\n                  \r\n                </div>\r\n               \r\n              </div>\r\n            </div>\r\n          </div>\r\n  \r\n          <div id=\"cmsblock-68\" class=\"cmsblock\">\r\n            <div class=\"description\">\r\n              <div class=\"containera\">\r\n                <div class=\"myimg\">\r\n                  <img src=\"https://www.dbsiggnature.com/image/packed.jpg\">\r\n                </div>\r\n                <div class=\"container my-power\">\r\n  \r\n                  <p class=\"heading_super1 firstline\"> The Taste of Richness and Success Packed</p>\r\n                  <p class=\"heading_super1\"> in a Can for you.</p>\r\n                  <p class=\"content-super1 custom-min-text\">Come taste the Freshness and Goddess of DB Siggnature</p>\r\n                  <p>\r\n                    <button class=\"btn btn-default\"\r\n                      onclick=\"location.href = 'index.php?route=product/category&amp;path=177';\"\r\n                      style=\"padding: 9px 39px; background: #1e1e6e; color: white; border:none;\"> Buy Now\r\n                    </button>\r\n                  </p>\r\n                </div>\r\n  \r\n  \r\n              </div>\r\n  \r\n            </div>\r\n          </div>\r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/user-profile/user-profile.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/user-profile/user-profile.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid \">\r\n  <div class=\"row\" *ngIf=\"isLoggedin\">\r\n    <div class=\"col-lg-4 col-md-4 col-sm-12 p-20\">\r\n      <div class=\"card p-20\">\r\n        <h3>Hi!</h3>\r\n        <p>{{profileModel.firstName}} {{profileModel.lastName}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-8 col-md-8 col-sm-12 p-20\" >\r\n      <form class=\"example-form\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <mat-label>Email</mat-label>\r\n          <input matInput disabled [(ngModel)]=\"profileModel.email\" name=\"email\">\r\n        </mat-form-field>\r\n      \r\n        <mat-form-field class=\"example-full-width\">\r\n          <mat-label>Phone</mat-label>\r\n          <input matInput  [(ngModel)]=\"profileModel.phone\" name=\"phone\">\r\n        </mat-form-field>\r\n      \r\n        <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n          <td><mat-form-field class=\"example-full-width\">\r\n            <mat-label>First name</mat-label>\r\n            <input matInput [(ngModel)]=\"profileModel.firstName\" name=\"firstName\">\r\n          </mat-form-field></td>\r\n          <td><mat-form-field class=\"example-full-width\">\r\n            <mat-label>Last name</mat-label>\r\n            <input matInput [(ngModel)]=\"profileModel.lastName\" name=\"lastName\">\r\n          </mat-form-field></td>\r\n       \r\n        </tr></table>\r\n      \r\n        <p>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-label>Address</mat-label>\r\n            <textarea matInput placeholder=\"Ex. 100 Main St\">1600 Amphitheatre Pkwy</textarea>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"example-full-width\">\r\n            <mat-label>Address 2</mat-label>\r\n            <textarea matInput></textarea>\r\n          </mat-form-field>\r\n        </p>\r\n      \r\n      </form>\r\n      \r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"!isLoggedin\">\r\n<p>Please Login to continue</p>\r\n<br>\r\n<br>\r\n<br>\r\n  </div>\r\n</div>");

/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_store_service_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_store_service_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/toolbar.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _auth_comp_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-comp/login/login.component */ "./src/app/auth-comp/login/login.component.ts");
/* harmony import */ var _auth_comp_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-comp/register/register.component */ "./src/app/auth-comp/register/register.component.ts");
/* harmony import */ var _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _dashboard_home_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/home/product-details/product-details.component */ "./src/app/dashboard/home/product-details/product-details.component.ts");
/* harmony import */ var _dashboard_home_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/home/header/header.component */ "./src/app/dashboard/home/header/header.component.ts");
/* harmony import */ var _dashboard_home_all_products_all_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/home/all-products/all-products.component */ "./src/app/dashboard/home/all-products/all-products.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var _auth_comp_auth_comp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth-comp/auth-comp.component */ "./src/app/auth-comp/auth-comp.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _dashboard_home_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/home/footer/footer.component */ "./src/app/dashboard/home/footer/footer.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/badge.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/menu.js");
/* harmony import */ var _dashboard_home_header_cart_cart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/home/header/cart/cart.component */ "./src/app/dashboard/home/header/cart/cart.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _dashboard_home_product_intro_product_intro_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/home/product-intro/product-intro.component */ "./src/app/dashboard/home/product-intro/product-intro.component.ts");
/* harmony import */ var _dashboard_home_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/home/user-profile/user-profile.component */ "./src/app/dashboard/home/user-profile/user-profile.component.ts");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./graphql.module */ "./src/app/graphql.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
/* harmony import */ var _services_store_service_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/store-service.service */ "./src/app/services/store-service.service.ts");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
                _dashboard_home_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_26__["UserProfileComponent"]
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
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_30__["NgxUiLoaderModule"]
            ],
            providers: [_services_store_service_service__WEBPACK_IMPORTED_MODULE_31__["StoreService"]],
            entryComponents: [_auth_comp_auth_comp_component__WEBPACK_IMPORTED_MODULE_15__["AuthCompComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-comp/auth-comp.component.scss":
/*!****************************************************!*\
  !*** ./src/app/auth-comp/auth-comp.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".test {\n  background-image: url(https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_dec4bf.png);\n  background-position: center 85%;\n  background-repeat: no-repeat;\n  background-color: #e4a50b;\n  color: #fff;\n  padding: 40px 33px;\n  font-size: 15px;\n}\n\n.auth-area {\n  padding: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC1jb21wL2F1dGgtY29tcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLGtHQUFrRztFQUNsRywrQkFBK0I7RUFDL0IsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7QUFKbkI7O0FBTUE7RUFDSSxhQUFhO0FBSGpCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC1jb21wL2F1dGgtY29tcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5zaG9wcGluZy1iYWd7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gfVxyXG5cclxuLnRlc3Qge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1nMWEuZmxpeGNhcnQuY29tL3d3dy9saW5jaHBpbi9may1jcC16aW9uL2ltZy9sb2dpbl9pbWdfZGVjNGJmLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgODUlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGE1MGI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDQwcHggMzNweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uYXV0aC1hcmVhe1xyXG4gICAgcGFkZGluZzogMzBweDtcclxufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



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
    AuthCompComponent.ctorParameters = function () { return [
        { type: _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"] }
    ]; };
    AuthCompComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-auth-comp',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auth-comp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth-comp/auth-comp.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./auth-comp.component.scss */ "./src/app/auth-comp/auth-comp.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"]])
    ], AuthCompComponent);
    return AuthCompComponent;
}());



/***/ }),

/***/ "./src/app/auth-comp/login/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/auth-comp/login/login.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.sub {\n  font-size: 12px;\n  text-align: center;\n}\n\n.sub1 {\n  font-size: 15px;\n  text-align: center;\n  cursor: pointer;\n  color: #a77704;\n}\n\na {\n  color: #e4a50b;\n}\n\nform {\n  text-align: center;\n}\n\n.allign-bottom {\n  position: absolute;\n  bottom: 8px;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC1jb21wL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2Y7O0FBRUE7RUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0FBRXRCOztBQUFBO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztBQUdsQjs7QUFEQTtFQUNJLGNBQWM7QUFJbEI7O0FBRkE7RUFDSSxrQkFBa0I7QUFLdEI7O0FBSEE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE9BQU87RUFDUCxRQUFRO0VBQ1Isa0JBQWtCO0FBTXRCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC1jb21wL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zdWIge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zdWIxIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjYTc3NzA0O1xyXG59XHJcbmEge1xyXG4gICAgY29sb3I6ICNlNGE1MGI7XHJcbn1cclxuZm9ybSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFsbGlnbi1ib3R0b20ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA4cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_store_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/store-service.service */ "./src/app/services/store-service.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");









var localDbStorage = __webpack_require__(/*! localStorage */ "./node_modules/localStorage/lib/localStorage.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataService, apollo, storage, ngxService, toastr, dialogRef, data) {
        var _this = this;
        this.dataService = dataService;
        this.apollo = apollo;
        this.storage = storage;
        this.ngxService = ngxService;
        this.toastr = toastr;
        this.dialogRef = dialogRef;
        this.data = data;
        this.userObj = {
            email: '',
            password: ''
        };
        //emit user status to parent
        this.userStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.doLogin = function () {
            return new Promise(function (res, rej) {
                var email = _this.userObj.email;
                // santosh@gmail.com
                var pass = _this.userObj.password;
                //123456
                var loginQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      query login($email: String!,$pass:String!) {\n        login(password:$pass,email:$email){\n          id,\n          email,phone,userProfile{id,firstName,lastName,gender,dob},\n          userAddress{id,userId,name,pinCode,address,district,state}\n        }\n      }\n    "], ["\n      query login($email: String!,$pass:String!) {\n        login(password:$pass,email:$email){\n          id,\n          email,phone,userProfile{id,firstName,lastName,gender,dob},\n          userAddress{id,userId,name,pinCode,address,district,state}\n        }\n      }\n    "])));
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var result, err_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.ngxService.start();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.doLogin()];
                    case 2:
                        result = _a.sent();
                        localDbStorage.setItem('user', JSON.stringify(result));
                        localDbStorage.setItem("isLoggedIn", "true");
                        this.dataService.isLoggedin = true;
                        console.log(result);
                        this.user = result;
                        this.ngxService.stop();
                        this.onNoClick();
                        //reload this page
                        //this is temp fix
                        location.reload();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.ngxService.stop();
                        this.toastr.error(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"] },
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"] },
        { type: src_app_services_store_service_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"] },
        { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DATA"],] }] }
    ]; };
    LoginComponent.propDecorators = {
        userStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth-comp/login/login.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/auth-comp/login/login.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"],
            apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"],
            src_app_services_store_service_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"], Object])
    ], LoginComponent);
    return LoginComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/auth-comp/register/register.component.scss":
/*!************************************************************!*\
  !*** ./src/app/auth-comp/register/register.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.allign-bottom {\n  position: absolute;\n  bottom: 4px;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n\n.sub1 {\n  font-size: 15px;\n  text-align: center;\n  cursor: pointer;\n  color: #a77704;\n}\n\nform {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC1jb21wL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2Y7O0FBRUE7RUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE9BQU87RUFDUCxRQUFRO0VBQ1Isa0JBQWtCO0FBRXRCOztBQUFBO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztBQUdsQjs7QUFEQTtFQUNJLGtCQUFrQjtBQUl0QiIsImZpbGUiOiJzcmMvYXBwL2F1dGgtY29tcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYWxsaWduLWJvdHRvbSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDRweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3ViMSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2E3NzcwNDtcclxufVxyXG5mb3Jte1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



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
    RegisterComponent.ctorParameters = function () { return [
        { type: _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"] }
    ]; };
    RegisterComponent.propDecorators = {
        userStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth-comp/register/register.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.component.scss */ "./src/app/auth-comp/register/register.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/all-products/all-products.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/home/all-products/all-products.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-img {\n  height: 260px;\n  width: 75% !important;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.item {\n  margin: 20px;\n  padding: 23px 0px;\n  background: #f3f3f3;\n}\n\n.item:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.buy-btn {\n  background-image: linear-gradient(to bottom, #f4b61a, #b18c34);\n  border: 1px solid #ce892a;\n}\n\n.price {\n  color: #eeb21d;\n  padding: 0px 0px 5px 0px;\n  font-weight: 500;\n}\n\n.p-desc {\n  padding: 14px 0px 0px 0px;\n}\n\n.w-265p {\n  width: 265px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvYWxsLXByb2R1Y3RzL2FsbC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFHQTtFQUNJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQXZCOztBQUVBO0VBQ0ksMENBQXVDO0VBQ3ZDLGdCQUFnQjtFQUNoQixlQUFlO0FBQ25COztBQUNBO0VBQ0ksOERBQStEO0VBQy9ELHlCQUF5QjtBQUU3Qjs7QUFBQTtFQUNJLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBR3BCOztBQURBO0VBQ0kseUJBQXlCO0FBSTdCOztBQUZBO0VBQ0ksdUJBQXVCO0FBSzNCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvYWxsLXByb2R1Y3RzL2FsbC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWltZ3tcclxuICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLy8gb3ZlcnJpZGUgb3dsIGNzcyBwcm9kdWN0IGNhcm91c2FsXHJcbi5pdGVte1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjNweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzOyAgIFxyXG59XHJcbi5pdGVtOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYnV5LWJ0bntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmNGI2MWEgLCAjYjE4YzM0KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZTg5MmE7XHJcbn1cclxuLnByaWNle1xyXG4gICAgY29sb3I6ICNlZWIyMWQ7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDVweCAwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5wLWRlc2N7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDBweCAwcHggMHB4O1xyXG59XHJcbi53LTI2NXB7XHJcbiAgICB3aWR0aDogMjY1cHggIWltcG9ydGFudDtcclxufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");







 // Import NgxUiLoaderService
var AllProductsComponent = /** @class */ (function () {
    function AllProductsComponent(router, apollo, toastr, ngxService, dataService) {
        this.router = router;
        this.apollo = apollo;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this.dataService = dataService;
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getAllProducts()];
                    case 1:
                        _a.products = _b.sent();
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
        this.router.navigate(['/product-details', product]);
    };
    AllProductsComponent.prototype.buyNow = function (product) {
        this.dataService.cartCount++;
        this.toastr.success('Item added to Cart');
    };
    AllProductsComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.ngxService.start();
        return new Promise(function (res, rej) {
            _this.apollo.query({
                query: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          {\n          allProducts{\n              id\n              name\n              price\n              images\n            }\n          }"], ["\n          {\n          allProducts{\n              id\n              name\n              price\n              images\n            }\n          }"])))
            }).subscribe(function (data) {
                _this.ngxService.stop();
                // this.toastr.success('Products Fetched');
                res(data["data"]["allProducts"]);
                _this.allProducts = data.data.allProducts;
                console.log('all products are', _this.allProducts);
            });
        });
    };
    AllProductsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderService"] },
        { type: _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"] }
    ]; };
    AllProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-all-products',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./all-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/all-products/all-products.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./all-products.component.scss */ "./src/app/dashboard/home/all-products/all-products.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderService"],
            _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"]])
    ], AllProductsComponent);
    return AllProductsComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/dashboard/home/footer/footer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/home/footer/footer.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  background: #333131;\n  color: #c9ae6c;\n  padding: 30px 40px;\n}\n\n._18wTSA {\n  color: #878787;\n  font-size: 12px;\n  font-weight: 400;\n  margin-bottom: 9px;\n}\n\n._287FRX {\n  line-height: 2;\n  font-size: 13px;\n  font-weight: 500;\n  color: #fff;\n  display: block;\n  font-weight: 400;\n  font-size: 12px;\n}\n\n.last-row {\n  margin: 0;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 11px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3RCOztBQUNBO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUVuQjs7QUFDQTtFQUNJLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFFbkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvaG9tZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMTMxO1xyXG4gICAgY29sb3I6ICNjOWFlNmM7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDQwcHg7XHJcbn1cclxuXHJcbi5fMTh3VFNBIHtcclxuICAgIGNvbG9yOiAjODc4Nzg3O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxufVxyXG4uXzI4N0ZSWCB7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmxhc3Qtcm93e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuIl19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/footer/footer.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.scss */ "./src/app/dashboard/home/footer/footer.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/header/cart/cart.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/home/header/cart/cart.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  /* Add shadows to create the \"card\" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n}\n\n/* On mouse-over, add a deeper shadow */\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.card-container {\n  padding: 35px 33px;\n}\n\n.each-row {\n  padding: 20px;\n}\n\n.product-name-link {\n  font-size: 16px;\n  color: #212121;\n  line-height: 1;\n  display: inline;\n}\n\n.p-20-0 {\n  padding: 20px 0px;\n}\n\n.product-dec-ic {\n  display: block;\n  color: #878787;\n  font-size: 14px;\n  height: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.price-ic {\n  font-size: 18px;\n  font-weight: 500;\n  color: #212121;\n  display: inline-block;\n  margin-right: 8px;\n  margin-top: 10px;\n}\n\n.price-st-ic {\n  color: #878787;\n  text-decoration: line-through;\n  font-size: 14px;\n  margin-right: 10px;\n}\n\n.d-y {\n  font-size: 14px;\n  color: #212121;\n  line-height: 1.4;\n}\n\n.cart-head-div {\n  font-size: 18px;\n  line-height: 56px;\n  padding: 0 24px;\n  font-weight: 500;\n}\n\n.action-texts {\n  display: inline-block;\n  text-transform: uppercase;\n  box-shadow: none;\n  outline: 0;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  margin-right: 25px;\n}\n\n.qty-container {\n  display: flex;\n  color: #212121;\n  align-items: center;\n}\n\n.qty-btn {\n  width: 28px;\n  height: 28px;\n  background: linear-gradient(#fff, #f9f9f9);\n  display: inline-block;\n  border: 1px solid #c2c2c2;\n  cursor: pointer;\n  font-size: 16px;\n  border-radius: 50%;\n  padding-top: 1px;\n  line-height: 1;\n}\n\n.qty-input-container {\n  display: inline-block;\n  padding: 1px 6px;\n  width: calc(100% - 60px);\n  height: 100%;\n  width: 46px;\n  height: 28px;\n  border-radius: 2px;\n  background-color: #fff;\n  border: 1px solid #c2c2c2;\n  margin: 0 5px;\n}\n\n.qty-input {\n  border: none;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 500;\n  vertical-align: middle;\n  text-align: center;\n}\n\n.qty-input:focus {\n  outline: none;\n}\n\n.p-detail {\n  display: block;\n  text-transform: uppercase;\n  padding: 13px 24px;\n  font-weight: 500;\n  color: #878787;\n  min-height: 47px;\n  border-radius: 2px 2px 0 0;\n}\n\n.price-detals {\n  padding: 15px;\n}\n\n.free {\n  color: #388e3c;\n  text-transform: uppercase;\n}\n\n.p-10-0 {\n  padding: 10px 0px;\n}\n\n.striked-border {\n  border-bottom: 1px dashed #e0e0e0;\n}\n\n.fw-500 {\n  font-weight: 500;\n}\n\n.order-btn {\n  text-align: center;\n  padding: 26px 0px;\n}\n\n.place-order {\n  margin-left: auto;\n  margin-right: auto;\n  padding: 3px 43px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvaGVhZGVyL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0VBQ0EsMENBQTBDO0VBQzFDLGdCQUFnQjtBQUNwQjs7QUFFQSx1Q0FBQTs7QUFDQTtFQUNJLDJDQUEyQztBQUMvQzs7QUFDQTtFQUNJLGtCQUFrQjtBQUV0Qjs7QUFBQTtFQUNJLGFBQWE7QUFHakI7O0FBREE7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0FBSW5COztBQUZBO0VBQ0ksaUJBQWlCO0FBS3JCOztBQUhBO0VBQ0ksY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBTXZCOztBQUpBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFPcEI7O0FBTEE7RUFDSSxjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixrQkFBa0I7QUFRdEI7O0FBTkE7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQVNwQjs7QUFQQTtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtBQVVwQjs7QUFSQTtFQUNJLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7QUFXdEI7O0FBVEE7RUFHSSxhQUFhO0VBQ2IsY0FBYztFQUdkLG1CQUFtQjtBQVl2Qjs7QUFWQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFhbEI7O0FBWEE7RUFDSSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixhQUFhO0FBY2pCOztBQVpBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFldEI7O0FBYkE7RUFDSSxhQUFhO0FBZ0JqQjs7QUFkQTtFQUNJLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQWlCOUI7O0FBZkE7RUFDSSxhQUFhO0FBa0JqQjs7QUFmQTtFQUNJLGNBQWM7RUFDZCx5QkFBeUI7QUFrQjdCOztBQWhCQTtFQUNJLGlCQUFpQjtBQW1CckI7O0FBakJBO0VBQ0ksaUNBQWlDO0FBb0JyQzs7QUFqQkE7RUFDSSxnQkFBZ0I7QUFvQnBCOztBQWxCQTtFQUNJLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFxQnJCOztBQW5CQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBc0JyQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL2hlYWRlci9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICAvKiBBZGQgc2hhZG93cyB0byBjcmVhdGUgdGhlIFwiY2FyZFwiIGVmZmVjdCAqL1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZGVlcGVyIHNoYWRvdyAqL1xyXG4uY2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcbi5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzNXB4IDMzcHg7XHJcbn1cclxuLmVhY2gtcm93IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLnByb2R1Y3QtbmFtZS1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLnAtMjAtMCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxufVxyXG4ucHJvZHVjdC1kZWMtaWMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzg3ODc4NztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnByaWNlLWljIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ucHJpY2Utc3QtaWMge1xyXG4gICAgY29sb3I6ICM4Nzg3ODc7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uZC15IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxufVxyXG4uY2FydC1oZWFkLWRpdiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTZweDtcclxuICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmFjdGlvbi10ZXh0cyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcbi5xdHktY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnF0eS1idG4ge1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiwgI2Y5ZjlmOSk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzJjMmMyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbi5xdHktaW5wdXQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDFweCA2cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNDZweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzJjMmMyO1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxufVxyXG4ucXR5LWlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnF0eS1pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5wLWRldGFpbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM4Nzg3ODc7XHJcbiAgICBtaW4taGVpZ2h0OiA0N3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7XHJcbn1cclxuLnByaWNlLWRldGFscyB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uZnJlZSB7XHJcbiAgICBjb2xvcjogIzM4OGUzYztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLnAtMTAtMHtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcbi5zdHJpa2VkLWJvcmRlcntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2UwZTBlMDtcclxuXHJcbn1cclxuLmZ3LTUwMHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLm9yZGVyLWJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDI2cHggMHB4O1xyXG59XHJcbi5wbGFjZS1vcmRlcntcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogM3B4IDQzcHg7XHJcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var CartComponent = /** @class */ (function () {
    function CartComponent() {
        this.cartCount = 3;
        this.isLoggedin = JSON.parse(localStorage.getItem('isLoggedIn'));
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.decreaseCart = function () {
        this.cartCount--;
    };
    CartComponent.prototype.increaseCart = function () {
        this.cartCount++;
    };
    CartComponent.ctorParameters = function () { return []; };
    CartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/header/cart/cart.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cart.component.scss */ "./src/app/dashboard/home/header/cart/cart.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/header/header.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/home/header/header.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-logo {\n  width: 5%;\n}\n\n.logo-img {\n  width: 5%;\n  cursor: pointer;\n}\n\n.mat-dialog-container {\n  padding: 0px !important;\n  overflow-x: hidden !important;\n}\n\n.top-menu-item {\n  color: #ffc107;\n  padding: 0px 20px;\n  margin: 0;\n}\n\n.header-name {\n  color: #fff;\n}\n\n.new-nav {\n  position: absolute;\n  top: 0;\n  z-index: 9999;\n  width: 100%;\n  border-bottom: 1px solid;\n  background: transparent !important;\n}\n\n._1DXv5h ._1Dwg_s {\n  color: #fff;\n  margin-left: 8px;\n}\n\n.w-24 {\n  width: 24px;\n}\n\n.p-0-7 {\n  padding: 0px 7px;\n}\n\n.mat-menu-content {\n  padding: 11px 10px !important;\n  text-align: center  !important;\n}\n\n.p-10-9 {\n  padding: 10px 9px;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQVM7QUFDYjs7QUFDQTtFQUNJLFNBQVM7RUFDVCxlQUFlO0FBRW5COztBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLDZCQUE2QjtBQUdqQzs7QUFEQTtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsU0FBUztBQUliOztBQUVBO0VBQ0ksV0FBVztBQUNmOztBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixhQUFhO0VBQ2IsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixrQ0FBa0M7QUFFdEM7O0FBQUE7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCO0FBR3BCOztBQURBO0VBQ0ksV0FDSjtBQUdBOztBQUZBO0VBQ0ksZ0JBQWdCO0FBS3BCOztBQUhBO0VBQ0ksNkJBQTZCO0VBQzdCLDhCQUE4QjtBQU1sQzs7QUFKQTtFQUNJLGlCQUFpQjtFQUNqQixlQUFlO0FBT25CIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWxvZ28ge1xyXG4gICAgd2lkdGg6IDUlO1xyXG59XHJcbi5sb2dvLWltZyB7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRvcC1tZW51LWl0ZW17XHJcbiAgICBjb2xvcjogI2ZmYzEwNztcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5iZy1kYXJre1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvb3RoZXJzL3RvcC1iYW5uZXIuanBnJyk7XHJcbiAgICAvLyBzcmNcXGFzc2V0c1xcb3RoZXJzXHJcbn1cclxuLmhlYWRlci1uYW1le1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLm5ldy1uYXZ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5fMURYdjVoIC5fMUR3Z19zIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG4udy0yNHtcclxuICAgIHdpZHRoOiAyNHB4XHJcbn1cclxuLnAtMC03e1xyXG4gICAgcGFkZGluZzogMHB4IDdweDtcclxufVxyXG4ubWF0LW1lbnUtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDExcHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICAhaW1wb3J0YW50O1xyXG59XHJcbi5wLTEwLTl7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDlweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */");

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
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/dialog.js");
/* harmony import */ var src_app_auth_comp_auth_comp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth-comp/auth-comp.component */ "./src/app/auth-comp/auth-comp.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");







 // Import NgxUiLoaderService
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dialog, toastr, ngxService, dataService) {
        this.dialog = dialog;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this.dataService = dataService;
        this.cartCount = this.dataService.cartCount;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var myData = JSON.parse(localStorage.getItem('user'));
        if (myData) {
            this.userName = myData.login.userProfile.firstName;
            console.log('from local storage i got user', myData);
            this.isLoggedin = JSON.parse(localStorage.getItem('isLoggedIn'));
            // this.isLoggedin =  this.dataService.isLoggedin ;
            console.log('from local storage is login', this.isLoggedin);
        }
    };
    HeaderComponent.prototype.logmeIn = function () {
        console.log('log in');
        var dialogRef = this.dialog.open(src_app_auth_comp_auth_comp_component__WEBPACK_IMPORTED_MODULE_4__["AuthCompComponent"], {
            width: '600px',
            height: '400px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
            var myData = JSON.parse(localStorage.getItem('user'));
            console.log('from local storage i got user', myData);
            var isLog = JSON.parse(localStorage.getItem('isLoggedIn'));
            console.log('from local storage is login', isLog);
        });
    };
    HeaderComponent.prototype.logOut = function () {
        this.ngxService.start();
        console.log('log out clicked');
        localStorage.removeItem('user');
        this.isLoggedin = false;
        this.ngxService.stop();
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
        { type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"] },
        { type: _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"] }
    ]; };
    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-header',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/header/header.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.scss */ "./src/app/dashboard/home/header/header.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"],
            _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/home.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.ctorParameters = function () { return []; };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/home.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.scss */ "./src/app/dashboard/home/home.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/product-details/product-details.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/home/product-details/product-details.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("._9E25nV {\n  color: #212121;\n  font-size: 24px;\n  font-weight: 400;\n  display: contents;\n}\n\n._9E25nV ._35KyD6 {\n  padding: 0;\n  line-height: 1.4;\n  font-size: inherit;\n  font-weight: inherit;\n  display: inline-block;\n}\n\n.action-btn {\n  margin: 10px;\n  padding: 6px 46px;\n}\n\n.action-btns {\n  text-align: center;\n  padding: 8px;\n}\n\n.desc {\n  padding: 51px 30px;\n}\n\n.price-div {\n  padding: 15px 0px;\n}\n\n.price {\n  font-size: 26px;\n  color: #525151;\n  font-weight: 500;\n}\n\n.ofr {\n  color: green;\n  font-size: 18px;\n  padding: 0px 11px;\n}\n\n.desc-text {\n  color: #343a40b0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNyQjs7QUFDQTtFQUNJLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFFekI7O0FBQUE7RUFDSSxZQUFZO0VBQ1osaUJBQWlCO0FBR3JCOztBQURBO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7QUFJaEI7O0FBREE7RUFDSSxrQkFBa0I7QUFJdEI7O0FBRkE7RUFDSSxpQkFBaUI7QUFLckI7O0FBSEE7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQU1wQjs7QUFKQTtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBT3JCOztBQUxBO0VBQ0ksZ0JBQWdCO0FBUXBCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5fOUUyNW5WIHtcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG59XHJcbi5fOUUyNW5WIC5fMzVLeUQ2IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmFjdGlvbi1idG4ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDQ2cHg7XHJcbn1cclxuLmFjdGlvbi1idG5zIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLmRlc2Mge1xyXG4gICAgcGFkZGluZzogNTFweCAzMHB4O1xyXG59XHJcbi5wcmljZS1kaXYge1xyXG4gICAgcGFkZGluZzogMTVweCAwcHg7XHJcbn1cclxuLnByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiAjNTI1MTUxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ub2ZyIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDBweCAxMXB4O1xyXG59XHJcbi5kZXNjLXRleHR7XHJcbiAgICBjb2xvcjogIzM0M2E0MGIwO1xyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(router) {
        this.router = router;
        this.selectedProducts = {};
        var data = history;
        // this.selectedProducts = 
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
    };
    ProductDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProductDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/product-details/product-details.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-details.component.scss */ "./src/app/dashboard/home/product-details/product-details.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/product-intro/product-intro.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/home/product-intro/product-intro.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-col {\n  padding: 0;\n}\n\n.sub-row {\n  margin: 0;\n}\n\n.sub-col {\n  padding: 0;\n}\n\n.module-title {\n  text-align: center;\n  margin: 0 0 30px;\n  margin-top: 80px;\n}\n\n.module-title {\n  padding-bottom: 35px;\n  background: url(https://www.dbsiggnature.com/catalog/view/theme/tt_belly2/image/bg-title.png) no-repeat 50% 100%;\n  width: 100%;\n}\n\n.module-title .module-description {\n  margin: 0 0 30px;\n  font-size: 14px;\n  color: #5b5b5b;\n  font-weight: 300;\n  font-style: italic;\n}\n\n.block-section-try .image-area {\n  padding: 0px;\n  height: 550px;\n  margin: 55px 70px;\n}\n\n.carousel-inner > .item > a > img, .carousel-inner > .item > img, .img-responsive, .thumbnail a > img, .thumbnail > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.text-area {\n  padding: 100px 0px;\n}\n\n.text-heading {\n  font-size: 30px;\n  color: #1b47b0;\n  font-family: 'Prata', serif;\n  margin: 10px 0px;\n  text-transform: capitalize;\n  font-weight: 100;\n  line-height: 45px;\n}\n\n.text-area .buy-button button {\n  line-height: 42px;\n  height: 45px;\n  width: auto;\n  border-radius: 3px;\n  padding: 0 35px;\n  margin: 0;\n  position: relative;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: 500;\n  display: inline-block;\n  font-size: 12px;\n  color: #a9a9a9;\n  background: none;\n  background-image: none;\n  background-image: none;\n  border: 2px solid #123075;\n  box-shadow: none;\n  cursor: pointer;\n  font-family: 'Rubik', sans-serif;\n  transition: ease .5s all;\n  background-image: linear-gradient(to bottom, #123075, #092056);\n  color: white;\n}\n\n.my-power {\n  text-align: center;\n  margin-top: -30%;\n  height: 404px;\n}\n\n.heading_super1 {\n  font-size: 30px;\n  color: #1a1aa4;\n  padding: 13px;\n  font-family: 'Prata', serif;\n}\n\n.content-super1 {\n  font-size: 16px;\n  font-family: 'Rubik', sans-serif !important;\n  font-weight: 100;\n  color: #555555;\n  margin-bottom: 26px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvcHJvZHVjdC1pbnRyby9wcm9kdWN0LWludHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtBQUNkOztBQUNDO0VBQ0csU0FBUztBQUViOztBQUFDO0VBQ0csVUFBVTtBQUdkOztBQURBO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFJcEI7O0FBRkE7RUFDSSxvQkFBb0I7RUFDcEIsZ0hBQWdIO0VBQ2hILFdBQVc7QUFLZjs7QUFIQTtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFNdEI7O0FBSkE7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtBQU9yQjs7QUFMQTtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtBQVFoQjs7QUFOQTtFQUNJLGtCQUFrQjtBQVN0Qjs7QUFQQTtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQVVyQjs7QUFSQTtFQUNJLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsU0FBUztFQUNULGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQ0FBZ0M7RUFHaEMsd0JBQXdCO0VBQ3hCLDhEQUErRDtFQUMvRCxZQUFZO0FBV2hCOztBQVRBO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0FBWWpCOztBQVZBO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxhQUFhO0VBQ2IsMkJBQTJCO0FBYS9COztBQVhBO0VBQ0ksZUFBZTtFQUNmLDJDQUEyQztFQUMzQyxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDhCQUE4QjtBQWNsQyIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL3Byb2R1Y3QtaW50cm8vcHJvZHVjdC1pbnRyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbiAuc3ViLXJvdyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuIC5zdWItY29sIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLm1vZHVsZS10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG4ubW9kdWxlLXRpdGxlIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vd3d3LmRic2lnZ25hdHVyZS5jb20vY2F0YWxvZy92aWV3L3RoZW1lL3R0X2JlbGx5Mi9pbWFnZS9iZy10aXRsZS5wbmcpIG5vLXJlcGVhdCA1MCUgMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tb2R1bGUtdGl0bGUgLm1vZHVsZS1kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM1YjViNWI7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbi5ibG9jay1zZWN0aW9uLXRyeSAuaW1hZ2UtYXJlYSB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDU1MHB4O1xyXG4gICAgbWFyZ2luOiA1NXB4IDcwcHg7XHJcbn1cclxuLmNhcm91c2VsLWlubmVyPi5pdGVtPmE+aW1nLCAuY2Fyb3VzZWwtaW5uZXI+Lml0ZW0+aW1nLCAuaW1nLXJlc3BvbnNpdmUsIC50aHVtYm5haWwgYT5pbWcsIC50aHVtYm5haWw+aW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi50ZXh0LWFyZWEge1xyXG4gICAgcGFkZGluZzogMTAwcHggMHB4O1xyXG59XHJcbi50ZXh0LWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICMxYjQ3YjA7XHJcbiAgICBmb250LWZhbWlseTogJ1ByYXRhJywgc2VyaWY7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbn1cclxuLnRleHQtYXJlYSAuYnV5LWJ1dHRvbiBidXR0b24ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDAgMzVweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNhOWE5YTk7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTIzMDc1O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlIC41cyBhbGw7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGVhc2UgLjVzIGFsbDtcclxuICAgIHRyYW5zaXRpb246IGVhc2UgLjVzIGFsbDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxMjMwNzUgLCAjMDkyMDU2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubXktcG93ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTMwJTtcclxuICAgIGhlaWdodDogNDA0cHg7XHJcbn1cclxuLmhlYWRpbmdfc3VwZXIxIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjMWExYWE0O1xyXG4gICAgcGFkZGluZzogMTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJhdGEnLCBzZXJpZjtcclxufVxyXG4uY29udGVudC1zdXBlcjEge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI2cHggIWltcG9ydGFudDtcclxufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var ProductIntroComponent = /** @class */ (function () {
    function ProductIntroComponent() {
    }
    ProductIntroComponent.prototype.ngOnInit = function () {
    };
    ProductIntroComponent.ctorParameters = function () { return []; };
    ProductIntroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-intro',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-intro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/product-intro/product-intro.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-intro.component.scss */ "./src/app/dashboard/home/product-intro/product-intro.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProductIntroComponent);
    return ProductIntroComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/user-profile/user-profile.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/home/user-profile/user-profile.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\ntd {\n  padding-right: 8px;\n}\n\n.p-20 {\n  padding: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2hvbWUvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNmOztBQUVFO0VBQ0UsV0FBVztBQUNmOztBQUVFO0VBQ0Usa0JBQWtCO0FBQ3RCOztBQUNFO0VBQ0ksYUFBYTtBQUVuQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIHRkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICB9XHJcbiAgLnAtMjB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfSJdfQ== */");

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
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(dataService) {
        this.dataService = dataService;
        this.profileModel = {
            email: "",
            id: "",
            phone: "",
            firstName: "",
            lastName: "",
            dob: "",
            userAddress: []
        };
        this.isLoggedin = JSON.parse(localStorage.getItem('isLoggedIn'));
        // this.isLoggedin = this.dataService.isLoggedin;
        console.log('login statis is ', this.isLoggedin);
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var myData = JSON.parse(localStorage.getItem('user'));
        this.user = myData;
        if (myData) {
            this.profileModel.firstName = myData.login.userProfile.firstName;
            this.profileModel.lastName = myData.login.userProfile.lastName;
            this.profileModel.email = myData.login.email;
            this.profileModel.phone = myData.login.phone;
            console.log('from local storage i got user', myData);
        }
    };
    UserProfileComponent.ctorParameters = function () { return [
        { type: _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"] }
    ]; };
    UserProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user-profile',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/home/user-profile/user-profile.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/dashboard/home/user-profile/user-profile.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataServiceService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/__ivy_ngcc__/fesm2015/ngApolloLinkHttp.js");
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
    GraphQLModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var DataServiceService = /** @class */ (function () {
    function DataServiceService() {
        this.isnewUser = false;
        this.isLoggedin = false;
    }
    DataServiceService.ctorParameters = function () { return []; };
    DataServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DataServiceService);
    return DataServiceService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


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
    StoreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! G:\Projects\Tulip\Tulip-PanMasala\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map