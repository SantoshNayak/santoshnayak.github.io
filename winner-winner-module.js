(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["winner-winner-module"],{

/***/ "0mYi":
/*!******************************************************!*\
  !*** ./src/app/dashboard/winner/winner.component.ts ***!
  \******************************************************/
/*! exports provided: WinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnerComponent", function() { return WinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_weekly_games_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/weekly-games.service */ "kZQG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function WinnerComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SELECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WinnerComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "NOT SELECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WinnerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WinnerComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const week_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.winnerDetails(week_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WinnerComponent_div_3_div_4_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WinnerComponent_div_3_div_5_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const week_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", week_r1.is_winner_selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !week_r1.is_winner_selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("WEEK ", week_r1.week_id, "");
} }
class WinnerComponent {
    constructor(weeklyGameService, toastr) {
        this.weeklyGameService = weeklyGameService;
        this.toastr = toastr;
        this.weekList = [];
    }
    ngOnInit() {
        this.getGames();
    }
    getGames() {
        this.weeklyGameService.getgameImages().subscribe((data) => {
            console.log('winner', data);
            if (data.status === 200) {
                this.weekList = data.data;
            }
        }, (error) => {
            console.log(error);
        });
    }
    winnerDetails(week) {
        console.log('clicked on ', week);
        if (week.is_winner_selected == 0) {
            this.toastr.warning('Please choose winner in Judgement page first');
        }
    }
}
WinnerComponent.ɵfac = function WinnerComponent_Factory(t) { return new (t || WinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_weekly_games_service__WEBPACK_IMPORTED_MODULE_1__["WeeklyGamesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
WinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WinnerComponent, selectors: [["app-winner"]], decls: 4, vars: 1, consts: [[1, "m-40"], [1, "col-12"], [1, "row"], ["class", "col-4", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-4", 3, "click"], [1, "week-card"], [1, "front"], ["class", "ribbon-wrapper", 4, "ngIf"], ["class", "ribbon-wrapper-warning", 4, "ngIf"], [1, "m-0"], [1, "ribbon-wrapper"], [1, "ribbon"], [1, "ribbon-wrapper-warning"]], template: function WinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WinnerComponent_div_3_Template, 8, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.weekList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".m-40[_ngcontent-%COMP%] {\n  margin: 40px;\n}\n\n.week-card[_ngcontent-%COMP%] {\n  padding: 40px;\n  text-align: center;\n  background: #EDEEFF;\n  border-radius: 30px;\n  cursor: pointer;\n}\n\n.flip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin-right: 2px;\n  margin-bottom: 1em;\n  width: 250px;\n}\n\n.flip[_ngcontent-%COMP%]    > .front[_ngcontent-%COMP%], .flip[_ngcontent-%COMP%]    > .back[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  width: inherit;\n  background-size: cover !important;\n  background-position: center !important;\n  height: 150px;\n  padding: 0.3em;\n  background: #f1f1f1;\n  border-radius: 10px;\n}\n\n.flip[_ngcontent-%COMP%]    > .front[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .flip[_ngcontent-%COMP%]    > .back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9125rem;\n  line-height: 160%;\n  color: #999;\n}\n\n.ribbon-wrapper[_ngcontent-%COMP%] {\n  width: 82px;\n  height: 85px;\n  overflow: hidden;\n  position: absolute;\n  top: 1px;\n  left: 15px;\n}\n\n.ribbon-wrapper[_ngcontent-%COMP%]   .ribbon[_ngcontent-%COMP%] {\n  font: bold 7px sans-serif;\n  color: #333;\n  text-align: center;\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  position: relative;\n  padding: 7px 0;\n  top: 15px;\n  left: -30px;\n  width: 120px;\n  background-color: green;\n  color: #fff;\n}\n\n.ribbon-wrapper-warning[_ngcontent-%COMP%] {\n  width: 82px;\n  height: 85px;\n  overflow: hidden;\n  position: absolute;\n  top: 1px;\n  left: 15px;\n}\n\n.ribbon-wrapper-warning[_ngcontent-%COMP%]   .ribbon[_ngcontent-%COMP%] {\n  font: bold 7px sans-serif;\n  color: #333;\n  text-align: center;\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  position: relative;\n  padding: 7px 0;\n  top: 15px;\n  left: -30px;\n  width: 120px;\n  background-color: red;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3dpbm5lci93aW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtBQUFKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQUk7O0VBRUUsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUVOOztBQURNOztFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBSVI7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUdKOztBQUZJO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUlOOztBQURBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFJSjs7QUFISTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFLTiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC93aW5uZXIvd2lubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm0tNDB7XHJcbiAgICBtYXJnaW46IDQwcHg7XHJcbn1cclxuXHJcbi53ZWVrLWNhcmR7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0VERUVGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAvLyBtYXJnaW46IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZsaXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICA+LmZyb250LFxyXG4gICAgPi5iYWNrIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBwYWRkaW5nOiAwLjNlbSA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45MTI1cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNjAlO1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnJpYmJvbi13cmFwcGVyIHtcclxuICAgIHdpZHRoOiA4MnB4O1xyXG4gICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIC5yaWJib24ge1xyXG4gICAgICBmb250OiBib2xkIDdweCBzYW5zLXNlcmlmO1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiAgICByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogICAgIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAtby10cmFuc2Zvcm06ICAgICAgcm90YXRlKC00NWRlZyk7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZzogN3B4IDA7XHJcbiAgICAgIHRvcDogMTVweDtcclxuICAgICAgbGVmdDogLTMwcHg7XHJcbiAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxuLnJpYmJvbi13cmFwcGVyLXdhcm5pbmcge1xyXG4gICAgd2lkdGg6IDgycHg7XHJcbiAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxcHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgLnJpYmJvbiB7XHJcbiAgICAgIGZvbnQ6IGJvbGQgN3B4IHNhbnMtc2VyaWY7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06ICAgIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiAgICAgcm90YXRlKC00NWRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogICAgICByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nOiA3cHggMDtcclxuICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICBsZWZ0OiAtMzBweDtcclxuICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-winner',
                templateUrl: './winner.component.html',
                styleUrls: ['./winner.component.scss']
            }]
    }], function () { return [{ type: _services_weekly_games_service__WEBPACK_IMPORTED_MODULE_1__["WeeklyGamesService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "fLD2":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/winner/winner-details/winner-details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WinnerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnerDetailsComponent", function() { return WinnerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WinnerDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
WinnerDetailsComponent.ɵfac = function WinnerDetailsComponent_Factory(t) { return new (t || WinnerDetailsComponent)(); };
WinnerDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WinnerDetailsComponent, selectors: [["app-winner-details"]], decls: 19, vars: 0, consts: [[1, "m-40"], [1, "col-12"], [1, "row"], [1, "week-heading"], [1, "winner-img"], ["src", "../../../../assets/images/winnerimg.jpg", "alt", "", 1, "w-100"], [1, "winner-title"], [1, "col-6"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/X1b3C2081-Q", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""]], template: function WinnerDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "WEEK 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Winner Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum eligendi inventore iure saepe! Explicabo, ullam inventore. Distinctio, odio ex voluptatem ducimus reprehenderit cum! Vitae nisi omnis totam cumque, veniam obcaecati! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "iframe", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "iframe", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".week-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #131432;\n  width: 20%;\n  margin-left: auto;\n  margin-right: auto;\n  color: white;\n  padding: 18px;\n  border-radius: 22px;\n}\n\n.m-40[_ngcontent-%COMP%] {\n  margin: 40px;\n}\n\n.winner-img[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n\n.winner-title[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3dpbm5lci93aW5uZXItZGV0YWlscy93aW5uZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7QUFHSjs7QUFEQTtFQUNJLGFBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC93aW5uZXIvd2lubmVyLWRldGFpbHMvd2lubmVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2Vlay1oZWFkaW5ne1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzEzMTQzMjtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG59XHJcbi5tLTQwe1xyXG4gICAgbWFyZ2luOiA0MHB4O1xyXG59XHJcbi53aW5uZXItaW1ne1xyXG4gICAgcGFkZGluZzogMzJweDtcclxufVxyXG4ud2lubmVyLXRpdGxle1xyXG4gICAgcGFkZGluZzogMzJweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WinnerDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-winner-details',
                templateUrl: './winner-details.component.html',
                styleUrls: ['./winner-details.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "l1wy":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/winner/winner-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: WinnerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnerRoutingModule", function() { return WinnerRoutingModule; });
/* harmony import */ var _winner_details_winner_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./winner-details/winner-details.component */ "fLD2");
/* harmony import */ var _winner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./winner.component */ "0mYi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






const routes = [
    {
        path: '',
        component: _winner_component__WEBPACK_IMPORTED_MODULE_1__["WinnerComponent"],
    },
    {
        path: 'winner-details',
        component: _winner_details_winner_details_component__WEBPACK_IMPORTED_MODULE_0__["WinnerDetailsComponent"],
    },
];
class WinnerRoutingModule {
}
WinnerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WinnerRoutingModule });
WinnerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function WinnerRoutingModule_Factory(t) { return new (t || WinnerRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WinnerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](WinnerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "phXH":
/*!***************************************************!*\
  !*** ./src/app/dashboard/winner/winner.module.ts ***!
  \***************************************************/
/*! exports provided: WinnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnerModule", function() { return WinnerModule; });
/* harmony import */ var _winner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./winner.component */ "0mYi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _winner_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./winner-routing.module */ "l1wy");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var _winner_details_winner_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./winner-details/winner-details.component */ "fLD2");







class WinnerModule {
    constructor() {
        console.log('winner module loaded');
    }
}
WinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WinnerModule });
WinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function WinnerModule_Factory(t) { return new (t || WinnerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _winner_routing_module__WEBPACK_IMPORTED_MODULE_3__["WinnerRoutingModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WinnerModule, { declarations: [_winner_component__WEBPACK_IMPORTED_MODULE_0__["WinnerComponent"], _winner_details_winner_details_component__WEBPACK_IMPORTED_MODULE_5__["WinnerDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _winner_routing_module__WEBPACK_IMPORTED_MODULE_3__["WinnerRoutingModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WinnerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_winner_component__WEBPACK_IMPORTED_MODULE_0__["WinnerComponent"], _winner_details_winner_details_component__WEBPACK_IMPORTED_MODULE_5__["WinnerDetailsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _winner_routing_module__WEBPACK_IMPORTED_MODULE_3__["WinnerRoutingModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
                ]
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=winner-winner-module.js.map