(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["judge-list-judgelist-module"],{

/***/ "/tLr":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/judge-list/judgelist.module.ts ***!
  \**********************************************************/
/*! exports provided: JudgelistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JudgelistModule", function() { return JudgelistModule; });
/* harmony import */ var _judgelist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./judgelist-routing.module */ "D74T");
/* harmony import */ var _judge_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./judge-list.component */ "jEWh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var _add_judge_add_judge_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-judge/add-judge.component */ "s2ke");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");



















class JudgelistModule {
    constructor() {
        console.log('judgement list module loaded');
    }
}
JudgelistModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: JudgelistModule });
JudgelistModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function JudgelistModule_Factory(t) { return new (t || JudgelistModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _judgelist_routing_module__WEBPACK_IMPORTED_MODULE_0__["JudgeListRoutingModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_16__["ConfirmDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](JudgelistModule, { declarations: [_judge_list_component__WEBPACK_IMPORTED_MODULE_1__["JudgeListComponent"], _add_judge_add_judge_component__WEBPACK_IMPORTED_MODULE_11__["AddJudgeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _judgelist_routing_module__WEBPACK_IMPORTED_MODULE_0__["JudgeListRoutingModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_16__["ConfirmDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](JudgelistModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _judgelist_routing_module__WEBPACK_IMPORTED_MODULE_0__["JudgeListRoutingModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_16__["ConfirmDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"]
                ],
                declarations: [_judge_list_component__WEBPACK_IMPORTED_MODULE_1__["JudgeListComponent"], _add_judge_add_judge_component__WEBPACK_IMPORTED_MODULE_11__["AddJudgeComponent"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "D74T":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/judge-list/judgelist-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: JudgeListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JudgeListRoutingModule", function() { return JudgeListRoutingModule; });
/* harmony import */ var _judge_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./judge-list.component */ "jEWh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    {
        path: '',
        component: _judge_list_component__WEBPACK_IMPORTED_MODULE_0__["JudgeListComponent"],
    }
];
class JudgeListRoutingModule {
}
JudgeListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: JudgeListRoutingModule });
JudgeListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function JudgeListRoutingModule_Factory(t) { return new (t || JudgeListRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](JudgeListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JudgeListRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jEWh":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/judge-list/judge-list.component.ts ***!
  \**************************************************************/
/*! exports provided: JudgeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JudgeListComponent", function() { return JudgeListComponent; });
/* harmony import */ var _add_judge_add_judge_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-judge/add-judge.component */ "s2ke");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _services_judges_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/judges.service */ "xQmN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");












function JudgeListComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "All Judges");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JudgeListComponent_ng_template_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.openAddJudge(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Add Judge");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function JudgeListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Profile pic");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function JudgeListComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JudgeListComponent_ng_template_5_Template_i_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const judge_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.deleteJudgeConfirmation(judge_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const judge_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](judge_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", judge_r6.profile_pic, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", judge_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](judge_r6.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltipPosition", ctx_r2.tooltipPosition.value);
} }
function JudgeListComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" In total there are ", ctx_r3.judges ? ctx_r3.judges.length : 0, " Judges. ");
} }
const _c0 = function () { return { width: "50vw" }; };
class JudgeListComponent {
    constructor(judgeService, dialog, confirmationService, toastr) {
        this.judgeService = judgeService;
        this.dialog = dialog;
        this.confirmationService = confirmationService;
        this.toastr = toastr;
        this.judges = [];
        this.positionOptions = ['below', 'above', 'left', 'right'];
        this.tooltipPosition = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.positionOptions[0]);
    }
    ngOnInit() {
        this.getJudges();
    }
    getJudges() {
        this.judgeService.getAllJudges().subscribe((data) => {
            console.log(data);
            this.judges = data.data;
        }, (error) => {
            console.log(error);
        });
    }
    openAddJudge() {
        const dialogRef = this.dialog.open(_add_judge_add_judge_component__WEBPACK_IMPORTED_MODULE_0__["AddJudgeComponent"], {
            width: '600px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.getJudges();
            // this.animal = result;
        });
    }
    deleteJudgeConfirmation(judge) {
        console.log('delete this', judge);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                console.log('accepted');
                this.judgeService.deleteJudge(judge.id).subscribe((data) => {
                    console.log(data);
                    this.toastr.success(data.message);
                    if (data.status === 200) {
                        this.getJudges();
                    }
                }, (error) => {
                    console.log(error);
                    this.toastr.error(error.message);
                });
            },
            reject: () => {
                console.log('rejected');
            }
        });
    }
}
JudgeListComponent.ɵfac = function JudgeListComponent_Factory(t) { return new (t || JudgeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_judges_service__WEBPACK_IMPORTED_MODULE_4__["JudgesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
JudgeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JudgeListComponent, selectors: [["app-judge-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]])], decls: 8, vars: 5, consts: [[1, "m-40"], [1, "w-100"], [3, "value"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "summary"], [3, "baseZIndex"], [1, "row"], [1, "col-9"], [1, "col-3"], [1, "btn", "btn-primary", 3, "click"], ["width", "100", 1, "p-shadow-4", 3, "src", "alt"], [1, "action-icon"], ["matTooltip", "Delete Judge", 1, "material-icons", "action-ico-style", "block-btn", "cursorPointer", 3, "matTooltipPosition", "click"], [1, "p-d-flex", "p-ai-center", "p-jc-between"]], template: function JudgeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, JudgeListComponent_ng_template_3_Template, 7, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, JudgeListComponent_ng_template_4_Template, 9, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, JudgeListComponent_ng_template_5_Template, 11, 5, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, JudgeListComponent_ng_template_6_Template, 2, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p-confirmDialog", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.judges);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseZIndex", 10000);
    } }, directives: [primeng_table__WEBPACK_IMPORTED_MODULE_7__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialog"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"]], styles: [".m-40[_ngcontent-%COMP%] {\n  margin: 40px;\n}\n\n.action-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  page-break-after: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2p1ZGdlLWxpc3QvanVkZ2UtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2p1ZGdlLWxpc3QvanVkZ2UtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tLTQwe1xyXG4gICAgbWFyZ2luOiA0MHB4O1xyXG59XHJcbi5hY3Rpb24taWNvbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZ2UtYnJlYWstYWZ0ZXI6IDhweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JudgeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-judge-list',
                templateUrl: './judge-list.component.html',
                styleUrls: ['./judge-list.component.scss'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]]
            }]
    }], function () { return [{ type: _services_judges_service__WEBPACK_IMPORTED_MODULE_4__["JudgesService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "s2ke":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/judge-list/add-judge/add-judge.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddJudgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddJudgeComponent", function() { return AddJudgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk/clients/s3 */ "tegk");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_judges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/judges.service */ "xQmN");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");










function AddJudgeComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Judge Name Can't be Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddJudgeComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email Can't be Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddJudgeComponent {
    constructor(toastr, judgeService, dialogRef) {
        this.toastr = toastr;
        this.judgeService = judgeService;
        this.dialogRef = dialogRef;
        this.judgeModel = {
            "name": "",
            "profile_pic": "",
            "email": ""
        };
        this.files = [];
        this.fileNames = [];
    }
    ngOnInit() {
    }
    uploadFile(event) {
        // this.uiLoader.start();
        console.log('event is', event);
        if (this.files.length === 0) {
            for (let index = 0; index < event.length; index++) {
                const element = event[index];
                this.files.push(element);
            }
            for (let index = 0; index < event.length; index++) {
                const element = event[index];
                this.fileNames.push(element.name);
            }
            console.log('final files ', this.files);
            this.upload();
        }
        else {
            this.toastr.warning('One file can be choosen at a time!');
            console.log('one file only');
        }
    }
    upload() {
        const file = this.files[0];
        // const file = this.files.item(0);
        //  let status =await this.uploadService.uploadFile(file);
        this.uploadImage(file);
        console.log('status is', status);
    }
    uploadImage(file) {
        if (typeof (file) == 'undefined') {
            this.toastr.warning('Please choose a file');
        }
        const contentType = file.type;
        const bucket = new aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__({
            accessKeyId: 'AKIAYKBPCJIJPR26HL7T',
            secretAccessKey: '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',
            region: 'ap-south-1',
        });
        const params = {
            Bucket: 'botb',
            // Key: this.FOLDER + file.name,
            Key: file.name,
            Body: file,
            ACL: 'public-read',
            ContentType: contentType,
        };
        let self = this;
        bucket.upload(params, function (err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
            }
            console.log('Successfully uploaded file.', data);
            self.judgeModel.profile_pic = data.Location;
            // self.productModel.image = data.Location;
            // self.onImageUpload.emit(data);
            self.fileNames = [];
            self.files = [];
            // self.ngOnInit();
            return data;
        });
    }
    addJudge() {
        console.log(this.judgeModel);
        this.judgeService.addJudge(this.judgeModel).subscribe((data) => {
            console.log(data);
            this.toastr.success(data.message);
            this.dialogRef.close();
        }, (error) => {
            console.log(error);
        });
    }
}
AddJudgeComponent.ɵfac = function AddJudgeComponent_Factory(t) { return new (t || AddJudgeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_judges_service__WEBPACK_IMPORTED_MODULE_3__["JudgesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"])); };
AddJudgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddJudgeComponent, selectors: [["app-add-judge"]], decls: 31, vars: 4, consts: [[1, "campaign-details-div"], [1, "container-fluid"], [1, "col-md-12"], [1, "card"], [1, "card-header", "campaign-card-header"], [1, "card-title"], [1, "card-body"], [1, "row"], [1, "group", "bmd-form-group"], ["type", "text", "name", "name", "id", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [4, "ngIf"], ["type", "text", "name", "email", "id", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [1, "form-group", "bmd-form-group"], [1, "bmd-label-floating"], ["type", "file", 1, "form-control", 3, "change"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "click"]], template: function AddJudgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Judge Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Judge Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddJudgeComponent_Template_input_ngModelChange_13_listener($event) { return ctx.judgeModel.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AddJudgeComponent_mat_error_15_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddJudgeComponent_Template_input_ngModelChange_20_listener($event) { return ctx.judgeModel.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddJudgeComponent_mat_error_22_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddJudgeComponent_Template_input_change_28_listener($event) { return ctx.uploadFile($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddJudgeComponent_Template_button_click_29_listener() { return ctx.addJudge(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.judgeModel.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.invalid && _r0.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.judgeModel.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.invalid && _r2.touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: [".main-panel[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  padding: 30px 15px;\n  min-height: calc(100vh - 123px);\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: 0;\n  margin-bottom: 30px;\n  margin-top: 30px;\n  border-radius: 6px;\n  color: #333;\n  background: #fff;\n  width: 100%;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n}\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n}\n\n.card[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  padding: 0;\n  position: relative;\n}\n\n.card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  background-color: #999;\n  padding: 15px;\n  margin-top: -25px;\n  margin-right: 15px;\n  float: left;\n}\n\n.card-stats[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-category[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 14px;\n}\n\n.card[_ngcontent-%COMP%]   .card-header.card-header-icon[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header.card-header-text[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  color: #3c4858;\n}\n\n.small[_ngcontent-%COMP%], small[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\n.card-stats[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]    + .card-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #eee;\n  margin-top: 0px;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]    + .card-footer[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  padding: 10px 0 0;\n  margin: 0 15px 10px;\n  border-radius: 0;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: transparent;\n  border: 0;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]    + .card-footer[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 12px;\n  line-height: 22px;\n}\n\n.card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]    + .card-footer[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  position: relative;\n  top: 4px;\n  font-size: 16px;\n}\n\n.card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  margin-right: 3px;\n  margin-left: 3px;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: #f44336 !important;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  background-color: transparent;\n  color: #9c27b0;\n}\n\n.card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]:not(.card-header-icon):not(.card-header-text) {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n  background-color: rgba(255, 255, 255, 0.03) !important;\n}\n\n.card-stats[_ngcontent-%COMP%]   .card-header.card-header-icon[_ngcontent-%COMP%], .card-stats[_ngcontent-%COMP%]   .card-header.card-header-text[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.card-stats[_ngcontent-%COMP%]   .card-header.card-header-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 36px;\n  line-height: 56px;\n  width: 56px;\n  height: 56px;\n  text-align: center;\n  color: white;\n}\n\n.card[_ngcontent-%COMP%]   .card-header-success[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-success[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-success[_ngcontent-%COMP%]:not(.card-header-icon):not(.card-header-text), .card.bg-success[_ngcontent-%COMP%], .card.card-rotate.bg-success[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .card.card-rotate.bg-success[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #66bb6a, #43a047);\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);\n}\n\n.card[_ngcontent-%COMP%]   .card-header-danger[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-danger[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-danger[_ngcontent-%COMP%]:not(.card-header-icon):not(.card-header-text), .card.bg-danger[_ngcontent-%COMP%], .card.card-rotate.bg-danger[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .card.card-rotate.bg-danger[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #ef5350, #e53935);\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);\n}\n\n.card[_ngcontent-%COMP%]   .card-header-info[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-info[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-info[_ngcontent-%COMP%]:not(.card-header-icon):not(.card-header-text), .card.bg-info[_ngcontent-%COMP%], .card.card-rotate.bg-info[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .card.card-rotate.bg-info[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #26c6da, #00acc1);\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);\n}\n\n.card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]:not(.card-header-icon):not(.card-header-text), .card.bg-warning[_ngcontent-%COMP%], .card.card-rotate.bg-warning[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .card.card-rotate.bg-warning[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #ffa726, #fb8c00);\n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 600px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.width100[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.margin-60-15[_ngcontent-%COMP%] {\n  margin: 60px 15px;\n}\n\n.action-ico-style[_ngcontent-%COMP%] {\n  margin: 0px 5px 0px 5px;\n  font-size: 15px;\n}\n\n.edit-icon-color[_ngcontent-%COMP%] {\n  color: #0015ae;\n}\n\n.block-btn[_ngcontent-%COMP%] {\n  color: #c60303;\n}\n\n.edit-user-dialog-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  vertical-align: sub;\n  color: #434343;\n  margin-right: 6px;\n}\n\n.font20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.cursorPointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.vertical-align[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.inputFieldIcon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #8d8b8b;\n  margin: 0px 5px 2px 0px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 80%;\n}\n\n.padding0-15[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\n.filterClassp[_ngcontent-%COMP%] {\n  float: right;\n  padding: 0px 9px;\n  margin-top: 25px;\n}\n\n.cursorPointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.font21[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n\n.margin12-0[_ngcontent-%COMP%] {\n  margin: 12px 0px;\n}\n\n.background-white[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.mat-dialog-actions[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.floatRit[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.successClr[_ngcontent-%COMP%] {\n  color: #6de500;\n}\n\n.disabledBackground[_ngcontent-%COMP%] {\n  background-color: #d9e4ff;\n}\n\n.permissionSection[_ngcontent-%COMP%] {\n  background-color: #d5d5d5;\n  padding: 3px 3px;\n}\n\n.perBorder[_ngcontent-%COMP%] {\n  border: 1px solid #c9c4c4;\n  margin-bottom: 10px;\n}\n\n.margin0-5[_ngcontent-%COMP%] {\n  margin: 0px 5px;\n}\n\n.checkboxPAraMArgin[_ngcontent-%COMP%] {\n  margin: 7px 14px;\n  width: 100%;\n}\n\n.permissionAuto[_ngcontent-%COMP%] {\n  height: 100px;\n  overflow: auto;\n}\n\n.card-date[_ngcontent-%COMP%] {\n  font-size: 15px;\n  display: inline-block;\n  padding: 8px 0px 1px 0px;\n}\n\n.campaign-details-div[_ngcontent-%COMP%] {\n  margin: 10px 10px 0px 10px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 0;\n}\n\n.card-desc[_ngcontent-%COMP%] {\n  color: #f9f9f9;\n  margin-bottom: 0;\n  font-size: 13px;\n  margin-top: 3px;\n}\n\n.campaign-card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #1b1e73, #131432);\n  margin: -21px 18px 0px 18px;\n  box-shadow: -1px 1px 20px 0 rgba(0, 0, 0, 0.14), 1px 4px 10px -5px #b7b7b7;\n}\n\n.text-head[_ngcontent-%COMP%] {\n  color: #b54a2b;\n}\n\n.card-avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: -6px 6px 11px 0px #a7a1a1, 0 4px 20px 0 rgba(0, 0, 0, 0.12), -8px 8px 0px -5px rgba(0, 0, 0, 0.2);\n  margin: -55px auto 0;\n}\n\n.product-card-body[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n\n.expired-image[_ngcontent-%COMP%] {\n  width: 79px;\n  height: 67px;\n  position: absolute;\n  right: 105px;\n  top: 48px;\n}\n\n.float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.text-warn[_ngcontent-%COMP%] {\n  color: #d45542;\n}\n\n.login100-form-btn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.5;\n  color: #fff;\n  text-transform: uppercase;\n  width: 100px;\n  height: 50px;\n  float: right;\n  border-radius: 4px;\n  background: linear-gradient(-135deg, #c850c0, #4158d0);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 25px;\n  transition: all 0.4s;\n}\n\n.add_address_button[_ngcontent-%COMP%] {\n  color: white;\n  float: right;\n}\n\n.address_container[_ngcontent-%COMP%] {\n  padding: 4px;\n  background: linear-gradient(60deg, #460f08, #da6c0f);\n  border-radius: 14px;\n}\n\n.address-card-name[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 5px 5px;\n  margin: 0;\n}\n\n.address-card-phone-number[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 0;\n  padding: 5px 10px;\n}\n\n.address-card-address[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 5px 10px;\n  margin: 0;\n}\n\n.horizontal-line[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #f07a23;\n  width: 89%;\n}\n\n.edit-address-card-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 9px 0px 0px 31px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.no-padding-left[_ngcontent-%COMP%] {\n  padding-left: 0px;\n}\n\n.no-padding-right[_ngcontent-%COMP%] {\n  padding-right: 0px;\n}\n\n.address-icon[_ngcontent-%COMP%] {\n  color: white;\n  padding: 6px 0px 0px 5px;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2p1ZGdlLWxpc3QvYWRkLWp1ZGdlL2FkZC1qdWRnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLCtHQUFBO0VBQ0EsMkNBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBSUo7O0FBREE7RUFDSSxtQkFBQTtBQUlKOztBQURBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFNSjs7QUFKQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQU9KOztBQUxBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBUUo7O0FBTkE7RUFDSSwwQkFBQTtFQUNBLGVBQUE7QUFTSjs7QUFQQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFVSjs7QUFSQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtBQVdKOztBQVRBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVlKOztBQVZBO0VBQ0ksb0JBQUE7QUFhSjs7QUFYQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFjSjs7QUFaQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFlSjs7QUFiQTtFQUNJLHlCQUFBO0FBZ0JKOztBQWRBO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUFpQko7O0FBZEE7RUFDSSxvRkFBQTtBQWlCSjs7QUFiQTtFQUNJLDhCQUFBO0VBQ0Esc0RBQUE7QUFnQko7O0FBZEE7RUFDSSxpQkFBQTtBQWlCSjs7QUFkQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBaUJKOztBQWZBO0VBQ0ksb0RBQUE7RUFDQSxvRkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxvREFBQTtFQUNBLG9GQUFBO0FBbUJKOztBQWpCQTtFQUNJLG9EQUFBO0VBQ0Esb0ZBQUE7QUFvQko7O0FBbEJBO0VBQ0ksb0RBQUE7QUFxQko7O0FBbEJBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFxQko7O0FBbEJFO0VBQ0UsV0FBQTtBQXFCSjs7QUFsQkU7RUFDRixzQkFBQTtBQXFCQTs7QUFsQkU7RUFDRSxpQkFBQTtBQXFCSjs7QUFuQkU7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUFzQko7O0FBbkJFO0VBQ0UsY0FBQTtBQXNCSjs7QUFwQkU7RUFDRSxjQUFBO0FBdUJKOztBQXJCRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQXdCSjs7QUFyQkU7RUFDRSxlQUFBO0FBd0JKOztBQXJCRTtFQUNJLGVBQUE7QUF3Qk47O0FBdEJFO0VBQ0Usc0JBQUE7QUF5Qko7O0FBdEJFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQXlCSjs7QUF0QkU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQXlCSjs7QUF0QkU7RUFDRSxpQkFBQTtBQXlCSjs7QUF0QkU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQXlCSjs7QUF0QkU7RUFDRSxlQUFBO0FBeUJKOztBQXRCRTtFQUNFLHdCQUFBO0FBeUJKOztBQXRCRTtFQUNJLGVBQUE7QUF5Qk47O0FBdEJFO0VBQ0UsZ0JBQUE7QUF5Qko7O0FBdkJFO0VBQ0UsdUJBQUE7QUEwQko7O0FBdkJBO0VBRUkseUJBQUE7QUF5Qko7O0FBdEJBO0VBQ0ksWUFBQTtBQXlCSjs7QUF0QkE7RUFDSSxjQUFBO0FBeUJKOztBQXRCQTtFQUNJLHlCQUFBO0FBeUJKOztBQXRCQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUF5Qko7O0FBdEJBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQXlCSjs7QUF0QkE7RUFDSSxlQUFBO0FBeUJKOztBQXRCQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQXlCSjs7QUF0QkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQXlCSjs7QUF2QkE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQTBCSjs7QUF4QkE7RUFDSSwwQkFBQTtBQTJCSjs7QUF6QkE7RUFDSSxXQUFBO0VBQ0EsU0FBQTtBQTRCSjs7QUExQkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQTZCSjs7QUEzQkE7RUFDSSxvREFBQTtFQUNELDJCQUFBO0VBQ0EsMEVBQUE7QUE4Qkg7O0FBNUJBO0VBQ0ksY0FBQTtBQStCSjs7QUE3QkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkdBQUE7RUFDQSxvQkFBQTtBQWdDSjs7QUE5QkE7RUFDSSxrQkFBQTtBQWlDSjs7QUEvQkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQWtDSjs7QUFoQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFtQ0o7O0FBakNBO0VBQ0ksWUFBQTtBQW9DSjs7QUFsQ0E7RUFDSSxjQUFBO0FBcUNKOztBQXZCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0RBQUE7RUFLQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFJQSxvQkFBQTtBQTBCSjs7QUF4QkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQTJCSjs7QUF6QkE7RUFDSSxZQUFBO0VBRUEsb0RBQUE7RUFDQSxtQkFBQTtBQTJCSjs7QUF6QkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBNEJKOztBQTFCQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUE2Qko7O0FBM0JBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQThCSjs7QUE1QkE7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBK0JKOztBQTdCQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWdDSjs7QUE5QkE7RUFDSSxnQkFBQTtBQWlDSjs7QUEvQkE7RUFDSSxpQkFBQTtBQWtDSjs7QUFoQ0E7RUFDSSxrQkFBQTtBQW1DSjs7QUFqQ0E7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBb0NKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2p1ZGdlLWxpc3QvYWRkLWp1ZGdlL2FkZC1qdWRnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXBhbmVsIC5tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgIHBhZGRpbmc6IDMwcHggMTVweDtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjNweCk7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4uY2FyZCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwuMTQpO1xyXG59XHJcbi5jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBmb250LXNpemU6IC44NzVyZW07XHJcbn1cclxuXHJcbi5jYXJkICB7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNhcmQgLmNhcmQtaWNvbiwgLmNhcmQgLmNhcmQtdGV4dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyIC5jYXJkLWNhdGVnb3J5e1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmNhcmQgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLWljb24gLmNhcmQtdGl0bGUsIC5jYXJkIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci10ZXh0IC5jYXJkLXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBjb2xvcjogIzNjNDg1ODtcclxufVxyXG4uc21hbGwsIHNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIrLmNhcmQtZm9vdGVyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5jYXJkIC5jYXJkLWJvZHkrLmNhcmQtZm9vdGVyLCAuY2FyZCAuY2FyZC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAwIDA7XHJcbiAgICBtYXJnaW46IDAgMTVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNhcmQgLmNhcmQtZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuLmNhcmQgLmNhcmQtYm9keSsuY2FyZC1mb290ZXIgLnN0YXRzLCAuY2FyZCAuY2FyZC1mb290ZXIgLnN0YXRzIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuLmNhcmQgLmNhcmQtZm9vdGVyIC5hdXRob3IsIC5jYXJkIC5jYXJkLWZvb3RlciAuc3RhdHMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuLmNhcmQgLmNhcmQtYm9keSsuY2FyZC1mb290ZXIgLnN0YXRzIC5tYXRlcmlhbC1pY29ucywgLmNhcmQgLmNhcmQtZm9vdGVyIC5zdGF0cyAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmNhcmQgLmNhcmQtZm9vdGVyIC5zdGF0cyAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogI2Y0NDMzNiFpbXBvcnRhbnQ7XHJcbn1cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjOWMyN2IwO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1oZWFkZXItd2FybmluZyAuY2FyZC1pY29uLCAuY2FyZCAuY2FyZC1oZWFkZXItd2FybmluZyAuY2FyZC10ZXh0LCAuY2FyZCAuY2FyZC1oZWFkZXItd2FybmluZzpub3QoLmNhcmQtaGVhZGVyLWljb24pOm5vdCguY2FyZC1oZWFkZXItdGV4dCkge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoMjU1LDE1MiwwLC40KTtcclxufVxyXG5cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLWljb24sIC5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItaWNvbiBpIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gICAgd2lkdGg6IDU2cHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG4uY2FyZCAuY2FyZC1oZWFkZXItc3VjY2VzcyAuY2FyZC1pY29uLCAuY2FyZCAuY2FyZC1oZWFkZXItc3VjY2VzcyAuY2FyZC10ZXh0LCAuY2FyZCAuY2FyZC1oZWFkZXItc3VjY2Vzczpub3QoLmNhcmQtaGVhZGVyLWljb24pOm5vdCguY2FyZC1oZWFkZXItdGV4dCksIC5jYXJkLmJnLXN1Y2Nlc3MsIC5jYXJkLmNhcmQtcm90YXRlLmJnLXN1Y2Nlc3MgLmJhY2ssIC5jYXJkLmNhcmQtcm90YXRlLmJnLXN1Y2Nlc3MgLmZyb250IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywjNjZiYjZhLCM0M2EwNDcpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoMjU1LDE1MiwwLC40KTtcclxufVxyXG4uY2FyZCAuY2FyZC1oZWFkZXItZGFuZ2VyIC5jYXJkLWljb24sIC5jYXJkIC5jYXJkLWhlYWRlci1kYW5nZXIgLmNhcmQtdGV4dCwgLmNhcmQgLmNhcmQtaGVhZGVyLWRhbmdlcjpub3QoLmNhcmQtaGVhZGVyLWljb24pOm5vdCguY2FyZC1oZWFkZXItdGV4dCksIC5jYXJkLmJnLWRhbmdlciwgLmNhcmQuY2FyZC1yb3RhdGUuYmctZGFuZ2VyIC5iYWNrLCAuY2FyZC5jYXJkLXJvdGF0ZS5iZy1kYW5nZXIgLmZyb250IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywjZWY1MzUwLCNlNTM5MzUpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoMjU1LDE1MiwwLC40KTtcclxufVxyXG4uY2FyZCAuY2FyZC1oZWFkZXItaW5mbyAuY2FyZC1pY29uLCAuY2FyZCAuY2FyZC1oZWFkZXItaW5mbyAuY2FyZC10ZXh0LCAuY2FyZCAuY2FyZC1oZWFkZXItaW5mbzpub3QoLmNhcmQtaGVhZGVyLWljb24pOm5vdCguY2FyZC1oZWFkZXItdGV4dCksIC5jYXJkLmJnLWluZm8sIC5jYXJkLmNhcmQtcm90YXRlLmJnLWluZm8gLmJhY2ssIC5jYXJkLmNhcmQtcm90YXRlLmJnLWluZm8gLmZyb250IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywjMjZjNmRhLCMwMGFjYzEpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoMjU1LDE1MiwwLC40KTtcclxufVxyXG4uY2FyZCAuY2FyZC1oZWFkZXItd2FybmluZyAuY2FyZC1pY29uLCAuY2FyZCAuY2FyZC1oZWFkZXItd2FybmluZyAuY2FyZC10ZXh0LCAuY2FyZCAuY2FyZC1oZWFkZXItd2FybmluZzpub3QoLmNhcmQtaGVhZGVyLWljb24pOm5vdCguY2FyZC1oZWFkZXItdGV4dCksIC5jYXJkLmJnLXdhcm5pbmcsIC5jYXJkLmNhcmQtcm90YXRlLmJnLXdhcm5pbmcgLmJhY2ssIC5jYXJkLmNhcmQtcm90YXRlLmJnLXdhcm5pbmcgLmZyb250IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywjZmZhNzI2LCNmYjhjMDApO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC53aWR0aDEwMHtcclxud2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXJnaW4tNjAtMTV7XHJcbiAgICBtYXJnaW46IDYwcHggMTVweDtcclxuICB9XHJcbiAgLmFjdGlvbi1pY28tc3R5bGV7XHJcbiAgICBtYXJnaW46IDBweCA1cHggMHB4IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG4gIC5lZGl0LWljb24tY29sb3J7XHJcbiAgICBjb2xvcjogIzAwMTVhZTtcclxuICB9XHJcbiAgLmJsb2NrLWJ0bntcclxuICAgIGNvbG9yOiAjYzYwMzAzO1xyXG4gIH1cclxuICAuZWRpdC11c2VyLWRpYWxvZy1pY29ue1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHN1YjtcclxuICAgIGNvbG9yOiAjNDM0MzQzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgfVxyXG5cclxuICAuZm9udDIwe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmN1cnNvclBvaW50ZXJ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnZlcnRpY2FsLWFsaWdue1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcblxyXG4gIC5pbnB1dEZpZWxkSWNvbntcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjOGQ4YjhiO1xyXG4gICAgbWFyZ2luOiAwcHggNXB4IDJweCAwcHg7XHJcbiAgfVxyXG5cclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcblxyXG4gIC5wYWRkaW5nMC0xNXtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlckNsYXNzcHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDBweCA5cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmN1cnNvclBvaW50ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBidXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmZvbnQyMXtcclxuICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gIH1cclxuXHJcbiAgLm1hcmdpbjEyLTB7XHJcbiAgICBtYXJnaW46IDEycHggMHB4O1xyXG4gIH1cclxuICAuYmFja2dyb3VuZC13aGl0ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuXHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxvYXRSaXR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5zdWNjZXNzQ2xye1xyXG4gICAgY29sb3I6ICM2ZGU1MDA7XHJcbn1cclxuXHJcbi5kaXNhYmxlZEJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllNGZmO1xyXG59XHJcblxyXG4ucGVybWlzc2lvblNlY3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNWQ1O1xyXG4gICAgcGFkZGluZzogM3B4IDNweDtcclxufVxyXG5cclxuLnBlckJvcmRlcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOWM0YzQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubWFyZ2luMC01e1xyXG4gICAgbWFyZ2luOiAwcHggNXB4O1xyXG59XHJcblxyXG4uY2hlY2tib3hQQXJhTUFyZ2lue1xyXG4gICAgbWFyZ2luOiA3cHggMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGVybWlzc2lvbkF1dG97XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmNhcmQtZGF0ZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDhweCAwcHggMXB4IDBweDtcclxufVxyXG4uY2FtcGFpZ24tZGV0YWlscy1kaXZ7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweCAwcHggMTBweDtcclxufVxyXG4uY2FyZC10aXRsZXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5jYXJkLWRlc2N7XHJcbiAgICBjb2xvcjogI2Y5ZjlmOTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuLmNhbXBhaWduLWNhcmQtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWIxZTczLCAjMTMxNDMyKTtcclxuICAgbWFyZ2luOiAtMjFweCAxOHB4IDBweCAxOHB4O1xyXG4gICBib3gtc2hhZG93OiAtMXB4IDFweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMXB4IDRweCAxMHB4IC01cHggI2I3YjdiNztcclxufVxyXG4udGV4dC1oZWFke1xyXG4gICAgY29sb3I6ICNiNTRhMmI7XHJcbn1cclxuLmNhcmQtYXZhdGFye1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IC02cHggNnB4IDExcHggMHB4IHJnYigxNjcsIDE2MSwgMTYxKSwgMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsLjEyKSwgLThweCA4cHggMHB4IC01cHggcmdiYSgwLDAsMCwuMik7XHJcbiAgICBtYXJnaW46IC01NXB4IGF1dG8gMDtcclxufVxyXG4ucHJvZHVjdC1jYXJkLWJvZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmltZ3tcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuLmV4cGlyZWQtaW1hZ2V7XHJcbiAgICB3aWR0aDogNzlweDtcclxuICAgIGhlaWdodDogNjdweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMDVweDtcclxuICAgIHRvcDogNDhweDtcclxufVxyXG4uZmxvYXQtcmlnaHR7XHJcbiAgICBmbG9hdDpyaWdodDtcclxufVxyXG4udGV4dC13YXJue1xyXG4gICAgY29sb3I6ICNkNDU1NDI7XHJcbn1cclxuLy8gI215UHJvZ3Jlc3Mge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAjbXlCYXIge1xyXG4vLyAgICAgd2lkdGg6IDElO1xyXG4vLyAgICAgaGVpZ2h0OiAzMHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuLy8gICB9XHJcblxyXG5cclxuLmxvZ2luMTAwLWZvcm0tYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgI2M4NTBjMCwgIzQxNThkMCk7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAyNXB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjRzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC40cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC40cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XHJcbn1cclxuLmFkZF9hZGRyZXNzX2J1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4uYWRkcmVzc19jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNzM4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjNDYwZjA4LCAjZGE2YzBmKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbn1cclxuLmFkZHJlc3MtY2FyZC1uYW1le1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5hZGRyZXNzLWNhcmQtcGhvbmUtbnVtYmVye1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG4uYWRkcmVzcy1jYXJkLWFkZHJlc3N7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5ob3Jpem9udGFsLWxpbmV7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA3YTIzO1xyXG4gICAgd2lkdGg6IDg5JTtcclxufVxyXG4uZWRpdC1hZGRyZXNzLWNhcmQtaWNvbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogOXB4IDBweCAwcHggMzFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1hcmdpbi10b3B7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5uby1wYWRkaW5nLWxlZnR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MHB4XHJcbn1cclxuLm5vLXBhZGRpbmctcmlnaHR7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjBweFxyXG59XHJcbi5hZGRyZXNzLWljb257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA2cHggMHB4IDBweCA1cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddJudgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-judge',
                templateUrl: './add-judge.component.html',
                styleUrls: ['./add-judge.component.scss']
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _services_judges_service__WEBPACK_IMPORTED_MODULE_3__["JudgesService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=judge-list-judgelist-module.js.map