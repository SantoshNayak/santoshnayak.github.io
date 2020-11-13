(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["judgement-judgement-module"],{

/***/ "+vvk":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/judgement/judgement-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: JudgementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JudgementRoutingModule", function() { return JudgementRoutingModule; });
/* harmony import */ var _top_participants_top_participants_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./top-participants/top-participants.component */ "Bx6o");
/* harmony import */ var _judgement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./judgement.component */ "YzX8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






const routes = [
    {
        path: '',
        component: _judgement_component__WEBPACK_IMPORTED_MODULE_1__["JudgementComponent"],
    },
    {
        path: 'top-participants',
        component: _top_participants_top_participants_component__WEBPACK_IMPORTED_MODULE_0__["TopParticipantsComponent"],
    }
];
class JudgementRoutingModule {
}
JudgementRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: JudgementRoutingModule });
JudgementRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function JudgementRoutingModule_Factory(t) { return new (t || JudgementRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](JudgementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](JudgementRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "/Ho+":
/*!************************************************!*\
  !*** ./src/app/services/middleware.service.ts ***!
  \************************************************/
/*! exports provided: MiddlewareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddlewareService", function() { return MiddlewareService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class MiddlewareService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.cartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.CartState = this.cartSubject.asObservable();
        this.Products = [];
        this.tickets = [];
        this.loggedInUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.loggedState = this.loggedInUser.asObservable();
        this.isOpen = false;
        this.refreshTokenExpired = true;
        this.baseUrl = "http://ec2-13-234-238-28.ap-south-1.compute.amazonaws.com:3000";
    }
    ngOnInit() {
        // this.loaderService.show();
    }
    createAuthrorizationHeader() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        const token = localStorage.getItem("access_token");
        headers = headers.set("access_token", token);
        return headers;
    }
    addProduct(_product) {
        let headers = this.createAuthrorizationHeader();
        let product = this.Products.filter(_item => _item.car_id == _product.car_id);
        let body;
        if (product[0]) {
            body = {
                number_of_tickets: product[0].number_of_tickets + 1,
                car_id: product[0].car_id
            };
        }
        else {
            body = {
                number_of_tickets: 1,
                car_id: _product.car_id
            };
        }
        let items = this.http.post(this.baseUrl + "/carts", body, {
            headers: headers
        });
        items.subscribe(res => {
            this.getData();
        });
    }
    getData() {
        const headers = this.createAuthrorizationHeader();
        let cartData = this.http.get(this.baseUrl + "/carts", {
            headers
        });
        cartData.subscribe(res => {
            this.Products = res["tickets"];
            this.getTickets();
            this.cartSubject.next({
                loaded: true,
                products: this.Products,
                tickets: this.tickets,
                total_tickets: res["total_tickets"]
            });
        });
    }
    addQuantity(id) {
        let headers = this.createAuthrorizationHeader();
        let product = this.Products.filter(_item => _item.car_id == id);
        let body = {
            number_of_tickets: product[0].number_of_tickets + 1,
            car_id: product[0].car_id
        };
        let items = this.http.post(this.baseUrl + "/carts", body, {
            headers: headers
        });
        items.subscribe(res => {
            this.getData();
        });
    }
    subtractQuantity(id) {
        let headers = this.createAuthrorizationHeader();
        let product = this.Products.filter(_item => _item.car_id == id);
        let count;
        product[0].number_of_tickets === 1
            ? (count = 0)
            : (count = product[0].number_of_tickets - 1);
        let body = {
            number_of_tickets: count,
            car_id: product[0].car_id
        };
        let items = this.http.post(this.baseUrl + "/carts", body, {
            headers: headers
        });
        items.subscribe(res => {
            this.getData();
        });
    }
    getTotalItems() {
        let totalItems = this.Products.reduce((sum, item) => sum + item.number_of_tickets, 0);
        return totalItems;
    }
    getTickets() {
        this.tickets = [];
        this.Products.forEach(ele => {
            let tickets = ele.number_of_tickets;
            let counter = 0;
            while (tickets--) {
                let element = Object.assign(Object.assign({}, ele), { index: ++counter });
                this.tickets.push(element);
            }
        });
    }
    addPoint(p) {
        try {
            // Make a request object
            const body = {
                cart_id: p.cart_id,
                ticket_id: p.ticket_id,
                index: p.carIndex,
                x_coord: p.x,
                y_coord: p.y
            };
            const headers = this.createAuthrorizationHeader();
            const result = this.http.post(this.baseUrl + "/game/coordinate", body, {
                headers
            });
            result.subscribe(res => {
                if (res["statusCode"] && res["statusCode"] === 200) {
                    this.getData();
                }
            });
        }
        catch (error) {
            console.log("Error in adding point");
        }
    }
    /**
     * @todo
     */
    removePoint(ticketId, i) {
        const requestObject = {
            ticket_id: ticketId,
            index: i
        };
        const headers = this.createAuthrorizationHeader();
        const result = this.http.post(`${this.baseUrl}/game/coordinate`, requestObject, {
            headers
        });
        result.subscribe(res => {
            console.log("res", res);
            if (res["statusCode"] && res["statusCode"] === 200) {
                this.getData();
            }
        });
    }
    removeProduct(id) {
        let headers = this.createAuthrorizationHeader();
        let product = this.Products.filter(_item => _item.car_id == id);
        let body = {
            number_of_tickets: 0,
            car_id: product[0].car_id
        };
        let items = this.http.post(this.baseUrl + "/carts", body, {
            headers: headers
        });
        items.subscribe(res => {
            this.getData();
        });
    }
    getCartState() {
        return this.CartState;
    }
    register(value) {
        this.clearLocalStorage();
        let body;
        if (this.isSocialLogin) {
            let name = value.name.split(" ");
            body = {
                first_name: name[0],
                last_name: name[1],
                email_id: value.email,
                phone1: "123456789",
                phone2: "123456789",
                country: "India",
                age_consent: true,
                terms_and_conditions: true
            };
            localStorage.setItem("userImage", value.image);
        }
        else {
            body = {
                first_name: value.firstname,
                last_name: value.lastname,
                email_id: value.email,
                phone1: value.phone1,
                phone2: value.phone2,
                country: value.country,
                age_consent: true,
                terms_and_conditions: true,
                password: value.password
            };
        }
        return this.http.post(this.baseUrl + "/user/register", body);
    }
    // refreshToken(): Observable<any> {
    //   const httpOptions = {
    //     headers: new HttpHeaders()
    //   };
    //   this.clearLocalStorage();
    //   return this.http.post<Observable<any>>(
    //     this.baseUrl + "",
    //     null,
    //     httpOptions
    //   );
    // }
    setToken(res) {
        localStorage.setItem("access_token", res.access_token);
        localStorage.setItem("refresh_token", res.refresh_token);
        localStorage.setItem("user", JSON.stringify(res));
        // const expiresAt = moment().add(res.expires_in, "second");
        // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
        this.refreshTokenExpired = false;
        this.loggedInUser.next(JSON.parse(localStorage.getItem("user")));
    }
    logout() {
        let headers = this.createAuthrorizationHeader();
        this.refreshTokenExpired = true;
        this.clearLocalStorage();
        this.Products = [];
        this.cartSubject.next({ loaded: true, products: this.Products });
        return this.http.post(this.baseUrl + "/user/logout", null, {
            headers: headers
        });
    }
    clearLocalStorage() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        // localStorage.removeItem("expires_at");
        localStorage.removeItem("user");
        localStorage.removeItem("userImage");
        this.refreshTokenExpired = true;
        this.loggedInUser.next(null);
    }
    getToken() {
        return localStorage.getItem("access_token");
    }
    getRefreshToken() {
        return localStorage.getItem("refresh_token");
    }
    login(value) {
        // const headers = new HttpHeaders();
        let body = {
            email_id: value.email,
            password: value.password
        };
        this.clearLocalStorage();
        return this.http.post(this.baseUrl + "/user/login", body);
    }
    socialLogin(value) {
        let body = {
            email_id: value.email
        };
        this.clearLocalStorage();
        localStorage.setItem("userImage", value.image);
        return this.http.post(this.baseUrl + "/user/login/social", body);
    }
    homeData() {
        return this.http.get(this.baseUrl + "/home"
        // { headers: headers }
        );
    }
    carData() {
        return this.http.get(this.baseUrl + "/cars"
        // { headers: headers }
        );
    }
    getUserDetails() {
        if (localStorage.getItem("user")) {
            let user = JSON.parse(localStorage.getItem("user"));
            this.loggedInUser.next(user);
            if (user.image) {
                this.isSocialLogin = true;
            }
            this.refreshTokenExpired = false;
        }
        return this.loggedState;
    }
    socialLogout() {
        // this.OAuth.signOut();
        this.isSocialLogin = false;
        this.refreshTokenExpired = true;
        this.Products = [];
        this.cartSubject.next({ loaded: true, products: this.Products });
    }
    // addProduct(item) {
    //   this.productAdded.emit(item);
    // }
    togglemodel() {
        this.isOpen = !this.isOpen;
    }
    createOrder(token) {
        let headers = this.createAuthrorizationHeader();
        let user = JSON.parse(localStorage.getItem("user"));
        let body = {
            name: user.first_name + " " + user.last_name,
            email_id: user.email_id,
            source: "tok_visa"
        };
        return this.http.post(this.baseUrl + "/order", body, {
            headers
        });
    }
    searchEmail(email) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers = headers.set("email_id", email);
        return this.http.get(this.baseUrl + "/user/lookup", {
            headers
        });
    }
    resetPassword(email, password, confpassword) {
        let body = {
            email_id: email,
            new_password: password,
            confirm_password: confpassword
        };
        return this.http.post(this.baseUrl + "/user/forgot_password", body);
    }
}
MiddlewareService.ɵfac = function MiddlewareService_Factory(t) { return new (t || MiddlewareService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MiddlewareService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MiddlewareService, factory: MiddlewareService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MiddlewareService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "7RD9":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/judgement/judgement.module.ts ***!
  \*********************************************************/
/*! exports provided: JudementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JudementModule", function() { return JudementModule; });
/* harmony import */ var _judgement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./judgement-routing.module */ "+vvk");
/* harmony import */ var _judgement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./judgement.component */ "YzX8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./canvas/canvas.component */ "B0p7");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popup/popup.component */ "HlY+");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _top_participants_top_participants_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./top-participants/top-participants.component */ "Bx6o");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");



















class JudementModule {
    constructor() {
        console.log('judgement module loaded');
    }
}
JudementModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: JudementModule });
JudementModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function JudementModule_Factory(t) { return new (t || JudementModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _judgement_routing_module__WEBPACK_IMPORTED_MODULE_0__["JudgementRoutingModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_14__["TableModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](JudementModule, { declarations: [_judgement_component__WEBPACK_IMPORTED_MODULE_1__["JudgementComponent"], _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_10__["CanvasComponent"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_11__["PopupComponent"], _top_participants_top_participants_component__WEBPACK_IMPORTED_MODULE_13__["TopParticipantsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _judgement_routing_module__WEBPACK_IMPORTED_MODULE_0__["JudgementRoutingModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_14__["TableModule"],
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](JudementModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _judgement_routing_module__WEBPACK_IMPORTED_MODULE_0__["JudgementRoutingModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_14__["TableModule"],
                    primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"]
                ],
                declarations: [_judgement_component__WEBPACK_IMPORTED_MODULE_1__["JudgementComponent"], _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_10__["CanvasComponent"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_11__["PopupComponent"], _top_participants_top_participants_component__WEBPACK_IMPORTED_MODULE_13__["TopParticipantsComponent"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "B0p7":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/judgement/canvas/canvas.component.ts ***!
  \****************************************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../popup/popup.component */ "HlY+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_middleware_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/middleware.service */ "/Ho+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_judges_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/judges.service */ "xQmN");
/* harmony import */ var _services_weekly_games_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/weekly-games.service */ "kZQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");











function CanvasComponent_mat_progress_spinner_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-spinner", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("strokeWidth", 5)("diameter", 240);
} }
const _c0 = function (a1) { return { "click-again-snack-message": true, draw: a1 }; };
const _c1 = function (a0) { return { display: a0 }; };
const _c2 = function (a0) { return { "option-disabled": a0 }; };
class CanvasComponent {
    constructor(service, dialog, router, toastr, judgeService, weeklyGamesService) {
        this.service = service;
        this.dialog = dialog;
        this.router = router;
        this.toastr = toastr;
        this.judgeService = judgeService;
        this.weeklyGamesService = weeklyGamesService;
        // Always keep the aspect ratio of 3:2 for the calculation of zooming
        // Always edit this for scaling up/down
        this.MULTIPLIER_CONSTANT = 1.25;
        // Constants used for the size of image and canvas
        this.DISPLAY_WIDTH = 600 * this.MULTIPLIER_CONSTANT;
        this.DISPLAY_HEIGHT = 400 * this.MULTIPLIER_CONSTANT;
        this.loading = false;
        this.points = []; // canvas points
        this.products = [];
        this.tickets = []; // previous page
        this.coordinates = [];
        this.initialResponse = true;
        this.currentCarIndex = 1;
        this.currentItemSelected = null;
        this.totalTickets = 0;
        this.judgeCoords = [];
        this.disabled = false;
        this.linepoints = [];
        this.draw = true;
        this.counter = 0;
        this.plusIcon = new Image();
        this.renderLines = false;
        this.initialDrawLineMethodCalled = false;
        this.totalPointsCount = 0;
        this.subscription = this.service.getCartState().subscribe(state => {
            this.products = state['products'];
            this.points = state['tickets'];
            this.renderCanvas();
        });
    }
    ngOnInit() {
        // this.judgeService.getJudgeCoords().subscribe(data=>{
        //   console.log('ss',data);
        //   this.judgeCoords = data.data
        // },error=>{
        //   console.log(error);
        // })
        this.weeklyGamesService.getCurrentWeekGame().subscribe((data) => {
            console.log('getCurrentWeekGame1', data);
            if (data.status === 200) {
                this.currentWeekImage = data.data[0].image;
                this.drawbackground();
                this.renderCanvas();
                this.judgeService.getJudgeCoords().subscribe((data) => {
                    console.log('getJudgeCoords', data);
                    this.judgeCoords = data.data;
                }, (error) => {
                    console.log(error);
                });
                // this.judgeCoords = [
                //   {
                //     created_on: "2020-10-20T17:07:29.000Z",
                //     email: "judge@gmail.com",
                //     game_id: 1,
                //     id: 2,
                //     is_blocked: 0,
                //     is_deleted: 0,
                //     judge_id: 2,
                //     name: "testing",
                //     password: "$2a$10$J6.FCU5ZVO08my4Uedhg1ONSQmgpJBTsQ4TxAp8XRB2N5F6kWgXRm",
                //     profile_pic: "https://peepdoapp.s3.us-east-2.amazonaws.com/user.png",
                //     x: "23.4354",
                //     y: "213.34567"
                //   },
                // ];
                this.toggle();
            }
        }, (error) => {
            console.log(error);
        });
        // this.subscription = this.service.getCartState().subscribe(state => {
        //   this.products = state['products'];
        //   this.points = state['tickets'];
        //   this.totalTickets = state['total_tickets'];
        //   console.log('this.total ticket', this.totalTickets);
        //   let total = 0;
        //   this.products.forEach(element => {
        //     total = total + Number(element.net_ticket_amount);
        //   });
        //   this.total = total;
        //   this.setCarIndexes();
        //   this.renderCanvas();
        // });
    }
    toggle() {
        if (this.draw) {
            this.magnify(2, this.canvas, this.ctx);
        }
        else {
            if (this.initialDrawLineMethodCalled) {
                const glass = document.getElementById('magnifier');
                glass && glass.remove();
            }
            else {
                this.drawLine(this.canvas, this.ctx);
                this.initialDrawLineMethodCalled = true;
            }
        }
        this.draw = !this.draw;
    }
    drawbackground() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        var ctx = this.ctx;
        let canvas = this.canvas;
        this.canvas.width = this.DISPLAY_WIDTH;
        this.canvas.height = this.DISPLAY_HEIGHT;
        var background = new Image();
        background.src = this.currentWeekImage;
        // background.src = '../../assets/game.png';
        background.onload = function () {
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        };
    }
    drawLine(canvas, ctx) {
        //add event listner to canvas
        var plusIcon = new Image();
        plusIcon.src = '../../assets/plus.svg';
        var points = this.points;
        const glass = document.getElementById('magnifier');
        glass && glass.remove();
        this.counter++;
        canvas.removeEventListener('mousedown', mouseDown, false);
        canvas.removeEventListener('mousemove', mouseMove, false);
        canvas.removeEventListener('mouseup', mouseUp, false);
        canvas.addEventListener('mousedown', mouseDown, false);
        canvas.addEventListener('mousemove', mouseMove, false);
        canvas.addEventListener('mouseup', mouseUp, false);
        var mouseDowncur = false;
        // var linePoint = this.linepoints;
        var stPoint;
        var endPoint;
        var imageObj = new Image();
        imageObj.src = this.currentWeekImage;
        // imageObj.src = '../../assets/game.png';
        imageObj.alt = 'game-image';
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        function lineP(stPoint, endPoint) {
            this.stPoint = stPoint;
            this.endPoint = endPoint;
        }
        function mouseDown(e) {
            mouseDowncur = true;
            stPoint = new Point(e.layerX, e.layerY); //get start point for line
        }
        const _self = this;
        function mouseMove(e) {
            if (!mouseDowncur)
                return;
            //clear canvas
            _self.ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
            // Points
            points.forEach(point => {
                if (point.coords)
                    plotPoint(point.coords.x, point.coords.y);
            });
            //redraw image
            drawLines(); //draw previous lines
            _self.ctx.beginPath();
            _self.ctx.moveTo(stPoint.x, stPoint.y);
            _self.ctx.lineTo(e.layerX, e.layerY);
            _self.ctx.stroke();
            _self.ctx.closePath();
        }
        function mouseUp(e) {
            mouseDowncur = false;
            endPoint = null;
            endPoint = new Point(e.layerX, e.layerY); //get end point
            _self.linepoints.push(new lineP(stPoint, endPoint)); //store line points for next draw
        }
        //draw all lines from stored point
        function drawLines() {
            _self.linepoints.forEach(function (item) {
                ctx.beginPath();
                ctx.moveTo(item['stPoint'].x, item['stPoint'].y);
                ctx.lineTo(item['endPoint'].x, item['endPoint'].y);
                ctx.stroke();
                ctx.closePath();
            });
        }
        function plotPoint(x, y) {
            ctx.drawImage(plusIcon, x - 6, y - 6, 12, 12);
            var markerText = 'Postion (X:' + x + ', Y:' + y + ')';
            // Draw a simple boxtext so you can see the position
            ctx.fillStyle = '#666';
            // Draw position above
            ctx.fillStyle = '#000';
            // ctx.fillText(markerText, x - 10, y - 5);
        }
    }
    magnify(zoom, canvas, ctx) {
        // aspect ratio is 3:2 for the below logic
        var img, glass, w, h, bw, ctx;
        img = canvas;
        var points = this.points;
        const serviceToCall = this.service;
        var data = canvas.toDataURL('image/png');
        var background = new Image(this.DISPLAY_WIDTH, this.DISPLAY_HEIGHT);
        background.src = this.currentWeekImage;
        // background.src = '../../assets/game.png';
        var plusIcon = new Image();
        plusIcon.src = '../../assets/plus.svg';
        /*create magnifier glass:*/
        glass = document.createElement('DIV');
        glass.setAttribute('class', 'img-magnifier-glass');
        glass.setAttribute('id', 'magnifier');
        /*insert magnifier glass:*/
        img.parentElement.insertBefore(glass, img);
        /*set background properties for the magnifier glass:*/
        if (this.counter == 0)
            glass.style.backgroundImage = "url('" + background.src + "')";
        else
            glass.style.backgroundImage = "url('" + data + "')";
        glass.style.backgroundRepeat = 'no-repeat';
        glass.style.backgroundSize =
            img.width * zoom + 'px ' + img.height * zoom + 'px';
        bw = 3;
        // glass.style.cursor = "crosshair";
        w = glass.offsetWidth / 2;
        h = glass.offsetHeight / 2;
        /*execute a function when someone moves the magnifier glass over the image:*/
        glass.addEventListener('mousemove', moveMagnifier);
        img.addEventListener('mousemove', moveMagnifier);
        /*and also for touch screens:*/
        glass.addEventListener('touchmove', moveMagnifier);
        img.addEventListener('touchmove', moveMagnifier);
        const _globalThis = this;
        function moveMagnifier(e) {
            var pos, x, y;
            /*prevent any other actions that may occur when moving over the image*/
            e.preventDefault();
            /*get the cursor's x and y positions:*/
            pos = getCursorPos(e);
            x = pos.x;
            y = pos.y;
            glass.onclick = function () {
                console.log('currentItem selected', _globalThis.currentItemSelected);
                // Make request object
                // const {
                //   cart_id,
                //   ticket_id,
                //   carIndex,
                //   ticketsPlayed
                // } = _globalThis.currentItemSelected;
                // if (ticketsPlayed >= 1 && ticketsPlayed == _globalThis.totalTickets) {
                //   // show modal
                //   _globalThis.dialog.open(PopupComponent, {
                //     data: {
                //       message:
                //         "You have exhausted the tickets , Please Add More Tickets to Play",
                //       button: "OK"
                //     }
                //   });
                //   return;
                // }
                // const requestObject = {
                //   cart_id,
                //   ticket_id,
                //   carIndex,
                //   x,
                //   y
                // };
                // // Call Add point API
                // serviceToCall.addPoint(requestObject);
                plotPoint(x - 0.671875, y);
            };
            function plotPoint(x, y) {
                _globalThis.judge_x_coordinate = x;
                _globalThis.judge_y_coordinate = y;
                console.log('new plot point', x, y);
                ctx.drawImage(plusIcon, x - 6, y - 6, 12, 12);
                var markerText = 'Postion (X:' + x + ', Y:' + y + ')';
                // Draw a simple boxtext so you can see the position
                ctx.fillStyle = '#666';
                // Draw position above
                ctx.fillStyle = '#000';
                // ctx.fillText(markerText, x - 10, y - 5);
            }
            show(x - 0.671875, y);
            /*prevent the magnifier glass from being positioned outside the image:*/
            if (x > img.width - w / zoom) {
                x = img.width - w / zoom;
            }
            if (x < w / zoom) {
                x = w / zoom;
            }
            if (y > img.height - h / zoom) {
                y = img.height - h / zoom;
            }
            if (y < h / zoom) {
                y = h / zoom;
            }
            /*set the position of the magnifier glass:*/
            glass.style.left = x - w + 'px';
            glass.style.top = y - h + 'px';
            /*display what the magnifier glass "sees":*/
            glass.style.backgroundPosition =
                '-' + (x * zoom - w + bw) + 'px -' + (y * zoom - h + bw) + 'px';
        }
        function show(x, y) {
            // var coords = document.getElementById("coords");
            // coords.innerHTML = "(" + x + "," + y + ")";
            return { x: x, y: y };
        }
        function getCursorPos(e) {
            var a, x = 0, y = 0;
            e = e || window.event;
            /*get the x and y positions of the image:*/
            a = img.getBoundingClientRect();
            /*calculate the cursor's x and y coordinates, relative to the image:*/
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return { x, y };
        }
    }
    checkout() {
        if (this.totalTickets == this.currentItemSelected.ticketsPlayed) {
            // const dialogRef = this.dialog.open(StripePaymentComponent, {
            //   // opening dialog here which will give us back stripeToken
            //   data: { totalAmount: this.total }
            // });
            // dialogRef
            //   .afterClosed()
            //   // waiting for stripe token that will be given back
            //   .subscribe((result: any) => {
            //     this.loading = true;
            //     if (result) {
            //       this.service.createOrder(result.token.id).subscribe(res => {
            //         console.log(res);
            //         if (res["status"] && res["status"] === 200) {
            //           this.loading = false;
            //           this.router.navigate(["/"]);
            //         } else {
            //           this.dialog.open(PopupComponent, {
            //             data: {
            //               message: "Something Went Wrong.",
            //               button: "OK"
            //             }
            //           });
            //         }
            //       });
            //     }
            //   });
        }
        else {
            console.log(this.totalTickets + ' ' + this.currentItemSelected.ticketsPlayed);
            this.dialog.open(_popup_popup_component__WEBPACK_IMPORTED_MODULE_0__["PopupComponent"], {
                data: {
                    message: 'Please Play All the tickets before checkout',
                    button: 'OK'
                }
            });
        }
    }
    navigateToCars() {
        this.router.navigate(['/cars']);
    }
    setCarIndexes() {
        console.log('inside car indexes function', this.points);
        const products = this.products;
        let currentItem = null;
        let numberOfTickets;
        let i;
        let resultIndex = 1;
        let currentCoordsLength = 0;
        let item = {};
        outerLoop: for (i = 0; i < products.length; i++) {
            currentItem = products[i];
            numberOfTickets = currentItem.number_of_tickets;
            if ('coordinates' in currentItem) {
                currentCoordsLength =
                    currentCoordsLength + currentItem.coordinates.length;
                if (currentItem.coordinates.length < numberOfTickets) {
                    resultIndex = currentItem.coordinates.length + 1;
                    break outerLoop;
                }
                else
                    continue;
            }
            else {
                // coords not found
                resultIndex = 1;
                currentCoordsLength += 1;
                break outerLoop;
            }
        }
        this.currentItemSelected = Object.assign(Object.assign({}, currentItem), { ticketsPlayed: currentCoordsLength, carIndex: resultIndex });
    }
    /**
     * @description Erase background
     * Redraw image
     * Re-render points
     */
    renderCanvas() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        try {
            // Erase canvas
            this.ctx &&
                this.ctx.clearRect(0, 0, this.DISPLAY_WIDTH, this.DISPLAY_HEIGHT);
            // Redraw background
            const imageObj = new Image();
            imageObj.src = this.currentWeekImage;
            // imageObj.src = '../../assets/game.png';
            imageObj.alt = 'game-background-image';
            imageObj.onload = () => {
                this.ctx.drawImage(imageObj, 0, 0, this.DISPLAY_WIDTH, this.DISPLAY_HEIGHT);
                const plusIcon = new Image();
                plusIcon.src = '../../assets/plus.svg';
                plusIcon.alt = 'plus-icon';
                plusIcon.onload = () => {
                    console.log('plus incon loaded');
                    this.judgeCoords.forEach(coord => {
                        this.ctx.drawImage(plusIcon, coord.x, coord.y, 12, 12);
                    });
                };
            };
            // Re-render / Re-draw the cursor or plus points
            // const ctx = this.ctx;
        }
        catch (error) {
            console.log('Error in rendering canvas');
        }
    }
    handleClose() {
        this.renderCanvas();
        this.linepoints = [];
    }
    handleLines() {
        if (this.renderLines) {
            // If lines are not rendered, then render them
            const _self = this;
            this.linepoints.forEach(function (item) {
                const ctx = _self.ctx;
                ctx.beginPath();
                ctx.moveTo(item['stPoint'].x, item['stPoint'].y);
                ctx.lineTo(item['endPoint'].x, item['endPoint'].y);
                ctx.stroke();
                ctx.closePath();
            });
        }
        else {
            // If lines are already rendered, clear them
            this.renderCanvas();
        }
        this.renderLines = !this.renderLines;
    }
    popLastLine() {
        const _self = this;
        _self.renderCanvas();
        if (_self.linepoints.length) {
            _self.linepoints.pop();
            _self.linepoints.forEach(function (item) {
                if (item &&
                    item['stPoint'] &&
                    item['stPoint'].x &&
                    item['stPoint'] &&
                    item['stPoint'].y) {
                    _self.ctx.beginPath();
                    _self.ctx.moveTo(item['stPoint'].x, item['stPoint'].y);
                    _self.ctx.lineTo(item['endPoint'].x, item['endPoint'].y);
                    _self.ctx.stroke();
                    _self.ctx.closePath();
                }
            });
        }
    }
    replay(item, itemIndex) {
        // // Call delete API
        this.service.removePoint(item.ticket_id, itemIndex);
    }
    displayinfo() {
        this.dialog.open(_popup_popup_component__WEBPACK_IMPORTED_MODULE_0__["PopupComponent"], {
            data: {
                message: 'Please Note:',
                paragraph: 'Exact pixel mapping can be viewed through the magnifier. Other (lower resolution) views are for reference only, and the exact coordinates you choose will be recorded in your basket and in your order.The behaviour of the line drawing tools may not be consistent across all devices, browsers and screen resolutions, and are provided only to assist with your coordinate selection on desktop (non-touch screen) devices.',
                button: 'OK'
            }
        });
    }
}
CanvasComponent.ɵfac = function CanvasComponent_Factory(t) { return new (t || CanvasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_middleware_service__WEBPACK_IMPORTED_MODULE_2__["MiddlewareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_judges_service__WEBPACK_IMPORTED_MODULE_6__["JudgesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_weekly_games_service__WEBPACK_IMPORTED_MODULE_7__["WeeklyGamesService"])); };
CanvasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CanvasComponent, selectors: [["app-canvas"]], decls: 18, vars: 16, consts: [[1, "app-canvas-container"], ["id", "click-again-snack-message", 1, "click-again-snack-message", 3, "ngClass"], [2, "width", "100%", "text-align", "center", "padding-top", "25px", "color", "#ff0000"], ["id", "canvas-wrapper", 1, "canvas-wrapper", 2, "padding", "16px", 3, "ngStyle"], ["id", "options-container", 1, "options-container"], [1, "fa", "fa-pencil", "icon", 3, "click"], [1, "fa", "fa-undo", "icon", 3, "ngClass", "click"], [1, "fa", "fa-eye-slash", "icon", 3, "ngClass", "click"], [1, "fa", "fa-times", "icon", 3, "ngClass", "click"], [1, "fa", "fa-info-circle", "icon", 3, "click"], [1, "img-magnifier-container", 2, "display", "flex", "max-height", "720px"], ["id", "canvas", 1, "canvas-container", 2, "cursor", "crosshair"], ["canvas", ""], [1, "col-3", 2, "display", "flex", "flex-direction", "column", "justify-content", "space-between", "align-items", "stretch"], ["mode", "indeterminate", "color", "warn", "style", "margin: 100px auto;", 3, "strokeWidth", "diameter", 4, "ngIf"], ["mode", "indeterminate", "color", "warn", 2, "margin", "100px auto", 3, "strokeWidth", "diameter"]], template: function CanvasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Click Again on Draw To Plot Points ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " SPOT THE BALL - DREAM CAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CanvasComponent_Template_i_click_8_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CanvasComponent_Template_i_click_9_listener() { return ctx.popLastLine(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CanvasComponent_Template_i_click_10_listener() { return ctx.handleLines(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CanvasComponent_Template_i_click_11_listener() { return ctx.handleClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CanvasComponent_Template_i_click_12_listener() { return ctx.displayinfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "canvas", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CanvasComponent_mat_progress_spinner_17_Template, 1, 2, "mat-progress-spinner", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.draw));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, ctx.loading ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c2, !ctx.draw));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c2, !ctx.draw));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c2, !ctx.draw));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinner"]], styles: ["p[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.app-canvas-container[_ngcontent-%COMP%] {\n  color: dimgray;\n}\n.img-magnifier-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n  .img-magnifier-glass {\n  position: absolute;\n  border: 2px solid #ff0000;\n  border-radius: 50%;\n  cursor: crosshair;\n  width: 75px;\n  height: 75px;\n}\n  .img-magnifier-glass > i {\n  position: relative;\n  top: calc(50% - 10px);\n  \n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: auto auto;\n}\n.options-container[_ngcontent-%COMP%] {\n  margin: 0 16px 16px 16px;\n  width: 50px;\n  height: 320px;\n  display: grid;\n  \n  border-radius: 8px;\n  \n}\n.canvas-container[_ngcontent-%COMP%] {\n  padding: 0;\n  border-radius: 8px;\n  box-shadow: 0px 0px 4px #adacab;\n}\n.canvas-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n}\n.click-again-snack-message[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 26px;\n  text-align: center;\n  border-radius: 4px;\n  background-color: lightsalmon;\n  padding: 12px;\n  visibility: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.draw[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.button[_ngcontent-%COMP%] {\n  background-color: #ff0000;\n  color: #ffffff;\n}\n.replay-button[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 300;\n}\n.ticket-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  transition: 0.2s ease-out background-color;\n}\n.top-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 74px auto auto;\n}\n.bottom-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.ticket-wrapper[_ngcontent-%COMP%]:hover {\n  background-color: #C7C7C7;\n  cursor: pointer;\n}\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: stretch;\n}\n.option-disabled[_ngcontent-%COMP%] {\n  color: #dbdbdb;\n  pointer-events: none;\n}\ni[_ngcontent-%COMP%] {\n  border: 1px solid lightgray;\n  border-radius: 50%;\n  padding: 8px;\n}\n.submit-btn-container[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 20px 0pc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2p1ZGdlbWVudC9jYW52YXMvY2FudmFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Y0FBQTtBQVFBO0VBQ0kscUJBQUE7QUFBSjtBQUdFO0VBQ0Usc0JBQUE7QUFBSjtBQUdFO0VBQ0UsY0FBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtBQUFKO0FBR0U7Ozs7R0FBQTtBQU1BO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFESjtBQUlFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBREo7QUFJRTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0FBREo7QUFJRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUlFO0VBQ0UsbUJBQUE7QUFESjtBQUlFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBREo7QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7QUFESjtBQUlFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFESjtBQUlFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7QUFESjtBQUlFO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBREo7QUFJRTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBREo7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9qdWRnZW1lbnQvY2FudmFzL2NhbnZhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHNpbHZlciAtIEM3QzdDN1xyXG5cclxud2hpdGUgLSBmZmZmZmZcclxuXHJcbmRhcmsgYmx1ZSAtIDVlNmY4MlxyXG5cclxucmVkIC0gZmYwMDAwICovXHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICB9XHJcbiAgXHJcbiAgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICAuYXBwLWNhbnZhcy1jb250YWluZXIge1xyXG4gICAgY29sb3I6IGRpbWdyYXk7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWctbWFnbmlmaWVyLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qICNteWltYWdlIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgaGVpZ2h0OiA2MDBweFxyXG4gIH0gKi9cclxuICBcclxuICA6Om5nLWRlZXAgLmltZy1tYWduaWZpZXItZ2xhc3Mge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmMDAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAuaW1nLW1hZ25pZmllci1nbGFzcz5pIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgIC8qIDUwJSAtIDMvNCBvZiBpY29uIGhlaWdodCAqL1xyXG4gIH1cclxuICBcclxuICAuaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLm9wdGlvbnMtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMCAxNnB4IDE2cHggMTZweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAzMjBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDRweCAjYWRhY2FiOyAqL1xyXG4gIH1cclxuICBcclxuICAuY2FudmFzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggI2FkYWNhYjtcclxuICB9XHJcbiAgXHJcbiAgLmNhbnZhcy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuY2xpY2stYWdhaW4tc25hY2stbWVzc2FnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMjZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2FsbW9uO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcmF3IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICBcclxuICAucmVwbGF5LWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC50aWNrZXQtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0IGJhY2tncm91bmQtY29sb3I7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3AtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc0cHggYXV0byBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuYm90dG9tLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnRpY2tldC13cmFwcGVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDN0M3Qzc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcHRpb24tZGlzYWJsZWQge1xyXG4gICAgY29sb3I6ICNkYmRiZGI7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgaSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG4gIC5zdWJtaXQtYnRuLWNvbnRhaW5lcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMjBweCAwcGM7XHJcblxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CanvasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-canvas',
                templateUrl: './canvas.component.html',
                styleUrls: ['./canvas.component.scss']
            }]
    }], function () { return [{ type: _services_middleware_service__WEBPACK_IMPORTED_MODULE_2__["MiddlewareService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: _services_judges_service__WEBPACK_IMPORTED_MODULE_6__["JudgesService"] }, { type: _services_weekly_games_service__WEBPACK_IMPORTED_MODULE_7__["WeeklyGamesService"] }]; }, null); })();


/***/ }),

/***/ "Bx6o":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/judgement/top-participants/top-participants.component.ts ***!
  \************************************************************************************/
/*! exports provided: TopParticipantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopParticipantsComponent", function() { return TopParticipantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_weekly_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/weekly-games.service */ "kZQG");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









function TopParticipantsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Current Game Nearest Participants");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopParticipantsComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Total Tickets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "X Coord");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Y Coord");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TopParticipantsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "emoji_events");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const participant_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", participant_r4.first_name, " ", participant_r4.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", participant_r4.phone1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](participant_r4.total_tickets);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](participant_r4.x_coord);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](participant_r4.y_coord);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", ctx_r2.position.value);
} }
function TopParticipantsComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" In total there are ", ctx_r3.nearestParticipants ? ctx_r3.nearestParticipants.length : 0, " Nearest Participants. ");
} }
const _c0 = function () { return [10, 25, 50]; };
class TopParticipantsComponent {
    constructor(weeklyGamesService) {
        this.weeklyGamesService = weeklyGamesService;
        this.nearestParticipants = [{
                created_on: "2020-10-25T15:33:41.000Z",
                id: 6,
                is_blocked: 0,
                is_deleted: 0,
                name: "judge name",
                password: "$2a$10$v20ijNaC4HQXkNSJFMRQBezd90ibxyInFY2pfHXKJYv8805Z3R/FG",
                profile_pic: "https://botb.s3.ap-south-1.amazonaws.com/WhatsApp%20Image%202020-10-16%20at%208.26.18%20PM.jpeg"
            }];
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.positionOptions[0]);
    }
    ngOnInit() {
        this.getCurrentGameNearestParticipants();
    }
    getCurrentGameNearestParticipants() {
        this.weeklyGamesService.getCurrentGameNearestParticipants().subscribe((data) => {
            console.log(data);
            this.nearestParticipants = data.data;
        }, (error) => {
            console.log(error);
        });
    }
}
TopParticipantsComponent.ɵfac = function TopParticipantsComponent_Factory(t) { return new (t || TopParticipantsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_weekly_games_service__WEBPACK_IMPORTED_MODULE_2__["WeeklyGamesService"])); };
TopParticipantsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopParticipantsComponent, selectors: [["app-top-participants"]], decls: 7, vars: 6, consts: [[1, "m-40"], [1, "w-100"], ["currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rows", "showCurrentPageReport", "rowsPerPageOptions", "paginator"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "summary"], [1, "row"], [1, "col-12"], ["mat-mini-fab", "", "color", "primary", "matTooltip", "Select as winner", "aria-label", "Example icon button with a menu icon", 3, "matTooltipPosition"], [1, "p-d-flex", "p-ai-center", "p-jc-between"]], template: function TopParticipantsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopParticipantsComponent_ng_template_3_Template, 4, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TopParticipantsComponent_ng_template_4_Template, 13, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TopParticipantsComponent_ng_template_5_Template, 15, 7, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TopParticipantsComponent_ng_template_6_Template, 2, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.nearestParticipants)("rows", 6)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("paginator", true);
    } }, directives: [primeng_table__WEBPACK_IMPORTED_MODULE_3__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: [".m-40[_ngcontent-%COMP%] {\n  margin: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2p1ZGdlbWVudC90b3AtcGFydGljaXBhbnRzL3RvcC1wYXJ0aWNpcGFudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvanVkZ2VtZW50L3RvcC1wYXJ0aWNpcGFudHMvdG9wLXBhcnRpY2lwYW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tLTQwe1xyXG4gICAgbWFyZ2luOiA0MHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopParticipantsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-participants',
                templateUrl: './top-participants.component.html',
                styleUrls: ['./top-participants.component.scss']
            }]
    }], function () { return [{ type: _services_weekly_games_service__WEBPACK_IMPORTED_MODULE_2__["WeeklyGamesService"] }]; }, null); })();


/***/ }),

/***/ "HlY+":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/judgement/popup/popup.component.ts ***!
  \**************************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PopupComponent {
    constructor() { }
    ngOnInit() {
    }
}
PopupComponent.ɵfac = function PopupComponent_Factory(t) { return new (t || PopupComponent)(); };
PopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupComponent, selectors: [["app-popup"]], decls: 2, vars: 0, template: function PopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "popup works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9qdWRnZW1lbnQvcG9wdXAvcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popup',
                templateUrl: './popup.component.html',
                styleUrls: ['./popup.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "YzX8":
/*!************************************************************!*\
  !*** ./src/app/dashboard/judgement/judgement.component.ts ***!
  \************************************************************/
/*! exports provided: JudgementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JudgementComponent", function() { return JudgementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_judges_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/judges.service */ "xQmN");
/* harmony import */ var _services_weekly_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/weekly-games.service */ "kZQG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./canvas/canvas.component */ "B0p7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");









function JudgementComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const judge_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", judge_r1.name, " ");
} }
class JudgementComponent {
    // @ViewChild(CanvasComponent) private canvasComp: CanvasComponent;
    constructor(judgeService, weeklyGamesService, toastr, router) {
        this.judgeService = judgeService;
        this.weeklyGamesService = weeklyGamesService;
        this.toastr = toastr;
        this.router = router;
        this.judgeList = [];
        this.getCurrentWeekGame();
    }
    ngOnInit() {
        this.getJudgeCoords();
    }
    getJudgeCoords() {
        this.judgeService.getJudgeCoords().subscribe((data) => {
            console.log('getJudgeCoords', data);
            this.judgeList = data.data;
            //  this.canvasComp.judgeCoords = this.judgeList;
            //  console.log('getJudgeCoords assigned',this.canvasComp.judgeCoords);
        }, (error) => {
            console.log(error);
        });
    }
    getCurrentWeekGame() {
        this.weeklyGamesService.getCurrentWeekGame().subscribe((data) => {
            console.log('getCurrentWeekGame', data);
            if (data.status === 200) {
                this.currentGameId = data.data[0].id;
                // this.canvasComp.currentWeekImage = data.data[0].image;
            }
        }, (error) => {
            console.log(error);
        });
    }
    showAverage() {
        console.log('showAverage', this.currentGameId);
        this.judgeService.getJudgeAveragePoint(this.currentGameId).subscribe((data) => {
            console.log(data);
            if (data.status === 200) {
                this.toastr.success(data.message);
            }
        }, (error) => {
            console.log(error);
        });
    }
    submitAverage() {
        console.log('submitAverage');
        this.router.navigateByUrl('/dashboard/judgement/top-participants');
    }
}
JudgementComponent.ɵfac = function JudgementComponent_Factory(t) { return new (t || JudgementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_judges_service__WEBPACK_IMPORTED_MODULE_1__["JudgesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_weekly_games_service__WEBPACK_IMPORTED_MODULE_2__["WeeklyGamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
JudgementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JudgementComponent, selectors: [["app-judgement"]], decls: 11, vars: 1, consts: [[1, "col-12"], [1, "row"], [1, "col-8"], [1, "col-4", "judge-list-container"], [1, "judge-list"], ["class", "judge-card", 4, "ngFor", "ngForOf"], [1, "botb-btn", "bg-red", 3, "click"], [1, "judge-card"], [1, "d-flex"], [1, "box", 2, "background-color", "#84ff5b"], [1, "judge-name"]], template: function JudgementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-canvas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, JudgementComponent_div_6_Template, 6, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JudgementComponent_Template_div_click_7_listener() { return ctx.showAverage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Show Average Point ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JudgementComponent_Template_div_click_9_listener() { return ctx.submitAverage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.judgeList);
    } }, directives: [_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_5__["CanvasComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"]], styles: [".judge-list-container[_ngcontent-%COMP%] {\n  padding: 30px 10px;\n}\n\n.checkbox-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 4px;\n}\n\n.box[_ngcontent-%COMP%] {\n  padding: 5px 5px 0px 5px;\n  text-align: center;\n  margin-right: 6px;\n}\n\n.bg-red[_ngcontent-%COMP%] {\n  background: #d50000;\n}\n\n.bg-blue[_ngcontent-%COMP%] {\n  background: blue;\n}\n\n.bg-green[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n.judge-card[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n}\n\n.botb-btn[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n  color: white;\n  margin: 4px 0px;\n  cursor: pointer;\n}\n\n.bg-rebeccapurple[_ngcontent-%COMP%] {\n  background: rebeccapurple;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2p1ZGdlbWVudC9qdWRnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0U7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBRTtFQUNFLG1CQUFBO0FBR0o7O0FBQUE7RUFDSSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksdUJBQUE7QUFJSjs7QUFGQTtFQUNNLGVBQUE7QUFLTjs7QUFIRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpFO0VBQ0kseUJBQUE7QUFPTiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9qdWRnZW1lbnQvanVkZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1ZGdlLWxpc3QtY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMzBweCAxMHB4O1xyXG59XHJcbi5jaGVja2JveC1saXN0e1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG4gIC5ib3h7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4IDBweCA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICB9XHJcbiAgLmJnLXJlZHtcclxuICAgIGJhY2tncm91bmQ6ICNkNTAwMDA7XHJcblxyXG4gIH1cclxuLmJnLWJsdWV7XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xyXG59XHJcbi5iZy1ncmVlbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcbi5qdWRnZS1jYXJke1xyXG4gICAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgfVxyXG4gIC5ib3RiLWJ0bntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDRweCAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5iZy1yZWJlY2NhcHVycGxle1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZWJlY2NhcHVycGxlO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JudgementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-judgement',
                templateUrl: './judgement.component.html',
                styleUrls: ['./judgement.component.scss']
            }]
    }], function () { return [{ type: _services_judges_service__WEBPACK_IMPORTED_MODULE_1__["JudgesService"] }, { type: _services_weekly_games_service__WEBPACK_IMPORTED_MODULE_2__["WeeklyGamesService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=judgement-judgement-module.js.map