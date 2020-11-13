(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web-interface-web-interface-module"],{

/***/ "FvRK":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/web-interface/web-interface.module.ts ***!
  \*****************************************************************/
/*! exports provided: WebInterfaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebInterfaceModule", function() { return WebInterfaceModule; });
/* harmony import */ var _directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../_directives/drag-drop.directive */ "eA2E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _web_interface_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-interface-routing.module */ "NVO1");
/* harmony import */ var _web_interface_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-interface.component */ "aiLU");
/* harmony import */ var _wi_file_upload_wi_file_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wi-file-upload/wi-file-upload.component */ "aemR");







class WebInterfaceModule {
    constructor() {
        console.log('wi module loaded');
    }
}
WebInterfaceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: WebInterfaceModule });
WebInterfaceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function WebInterfaceModule_Factory(t) { return new (t || WebInterfaceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _web_interface_routing_module__WEBPACK_IMPORTED_MODULE_3__["WebInterfaceRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WebInterfaceModule, { declarations: [_web_interface_component__WEBPACK_IMPORTED_MODULE_4__["WebInterfaceComponent"],
        _wi_file_upload_wi_file_upload_component__WEBPACK_IMPORTED_MODULE_5__["WiFileUploadComponent"],
        _directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_0__["DragDropDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _web_interface_routing_module__WEBPACK_IMPORTED_MODULE_3__["WebInterfaceRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WebInterfaceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _web_interface_component__WEBPACK_IMPORTED_MODULE_4__["WebInterfaceComponent"],
                    _wi_file_upload_wi_file_upload_component__WEBPACK_IMPORTED_MODULE_5__["WiFileUploadComponent"],
                    _directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_0__["DragDropDirective"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _web_interface_routing_module__WEBPACK_IMPORTED_MODULE_3__["WebInterfaceRoutingModule"],
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "NVO1":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/web-interface/web-interface-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: WebInterfaceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebInterfaceRoutingModule", function() { return WebInterfaceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _web_interface_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-interface.component */ "aiLU");





const routes = [
    {
        path: '',
        component: _web_interface_component__WEBPACK_IMPORTED_MODULE_2__["WebInterfaceComponent"]
    }
];
class WebInterfaceRoutingModule {
}
WebInterfaceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WebInterfaceRoutingModule });
WebInterfaceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WebInterfaceRoutingModule_Factory(t) { return new (t || WebInterfaceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WebInterfaceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebInterfaceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aemR":
/*!************************************************************************************!*\
  !*** ./src/app/dashboard/web-interface/wi-file-upload/wi-file-upload.component.ts ***!
  \************************************************************************************/
/*! exports provided: WiFileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WiFileUploadComponent", function() { return WiFileUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk/clients/s3 */ "tegk");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_directives/drag-drop.directive */ "eA2E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function WiFileUploadComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WiFileUploadComponent_div_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteAttachment(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", file_r2, " ");
} }
class WiFileUploadComponent {
    constructor(uiLoader, toastr) {
        this.uiLoader = uiLoader;
        this.toastr = toastr;
        this.files = [];
        this.fileNames = [];
        this.onImageUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
            // this.toastr.warning('One file can be choosen at a time!');
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
                self.uiLoader.stop();
                self.toastr.warning("Failed to upload image.. Please Try Again");
                return false;
            }
            console.log('Successfully uploaded file.', data);
            // self.productModel.image = data.Location;
            self.uiLoader.stop();
            self.onImageUpload.emit(data);
            self.fileNames = [];
            self.files = [];
            // self.ngOnInit();
            return data;
        });
    }
    deleteAttachment(index) {
        this.files.splice(index, 1);
    }
}
WiFileUploadComponent.ɵfac = function WiFileUploadComponent_Factory(t) { return new (t || WiFileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
WiFileUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WiFileUploadComponent, selectors: [["app-wi-file-upload"]], outputs: { onImageUpload: "onImageUpload" }, decls: 4, vars: 1, consts: [["appDragDrop", "", 1, "uploadfilecontainer", 3, "click", "onFileDropped"], ["hidden", "", "type", "file", 3, "change"], ["fileInput", ""], ["class", "files-list", 4, "ngFor", "ngForOf"], [1, "files-list"], [1, "delete-file", 3, "click"], ["src", "../../../../../assets/images/bin.png"]], template: function WiFileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WiFileUploadComponent_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.click(); })("onFileDropped", function WiFileUploadComponent_Template_div_onFileDropped_0_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function WiFileUploadComponent_Template_input_change_1_listener($event) { return ctx.uploadFile($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WiFileUploadComponent_div_3_Template, 5, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fileNames);
    } }, directives: [_directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_4__["DragDropDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".uploadfilecontainer[_ngcontent-%COMP%] {\n  background-image: url('upload_icon.png');\n  background-repeat: no-repeat;\n  background-size: 100px;\n  background-position: center;\n  height: 200px;\n  width: 80%;\n  margin: 20px auto;\n  border: 2px dashed #1C8ADB;\n  border-radius: 10px;\n}\n\n.uploadfilecontainer[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #9ecbec !important;\n  opacity: 0.8;\n}\n\n.files-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n  margin: 10px auto;\n  background: #ffffff;\n  border: 1px dashed;\n  border-radius: 12px;\n  padding: 5px;\n  color: #1c8adb;\n}\n\n.files-list[_ngcontent-%COMP%]   .delete-file[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n\n.files-list[_ngcontent-%COMP%]   .delete-file[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.upload-btn[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #131432;\n  border: 0;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3dlYi1pbnRlcmZhY2Uvd2ktZmlsZS11cGxvYWQvd2ktZmlsZS11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvd2ViLWludGVyZmFjZS93aS1maWxlLXVwbG9hZC93aS1maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWRmaWxlY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdXBsb2FkX2ljb24ucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICMxQzhBREI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4udXBsb2FkZmlsZWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVjYmVjICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5maWxlcy1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOiAjMWM4YWRiO1xyXG59XHJcblxyXG4uZmlsZXMtbGlzdCAuZGVsZXRlLWZpbGUge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5maWxlcy1saXN0IC5kZWxldGUtZmlsZSBpbWcge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbn1cclxuLnVwbG9hZC1idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTMxNDMyO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WiFileUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wi-file-upload',
                templateUrl: './wi-file-upload.component.html',
                styleUrls: ['./wi-file-upload.component.scss']
            }]
    }], function () { return [{ type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["NgxUiLoaderService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, { onImageUpload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "aiLU":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/web-interface/web-interface.component.ts ***!
  \********************************************************************/
/*! exports provided: WebInterfaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebInterfaceComponent", function() { return WebInterfaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_web_interface_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/web-interface.service */ "cOeb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _wi_file_upload_wi_file_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wi-file-upload/wi-file-upload.component */ "aemR");





function WebInterfaceComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebInterfaceComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.updateHomeBanner(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WebInterfaceComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.homepageBanner, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WebInterfaceComponent_app_wi_file_upload_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-wi-file-upload", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onImageUpload", function WebInterfaceComponent_app_wi_file_upload_6_Template_app_wi_file_upload_onImageUpload_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.uploadBanner($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WebInterfaceComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebInterfaceComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.updateProductBanner(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WebInterfaceComponent_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.productpageBanner, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function WebInterfaceComponent_app_wi_file_upload_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-wi-file-upload", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onImageUpload", function WebInterfaceComponent_app_wi_file_upload_12_Template_app_wi_file_upload_onImageUpload_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.uploadBanner($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WebInterfaceComponent {
    constructor(webinterfaceService) {
        this.webinterfaceService = webinterfaceService;
        this.homepageBanner = '';
        this.productpageBanner = '';
        this.updateModeHomepage = false;
        this.updateModeProductpage = false;
    }
    ngOnInit() {
        this.getHomepageBanner();
        this.getProductpageBanner();
    }
    getHomepageBanner() {
        this.webinterfaceService.getHomepageBanner().subscribe((data) => {
            this.homepageBanner = data.data[0];
            console.log('getHomepageBanner ', this.homepageBanner);
        }, (error) => {
            console.log(error);
        });
    }
    getProductpageBanner() {
        this.webinterfaceService.getProductpageBanner().subscribe((data) => {
            this.productpageBanner = data.data[0];
            console.log('getProductpageBanner ', this.productpageBanner);
        }, (error) => {
            console.log(error);
        });
    }
    uploadBanner(event) {
        console.log(event);
        if (this.updateModeHomepage) {
            let model = {
                "type": "1",
                "image": event.Location
            };
            this.webinterfaceService.updateBanner(model).subscribe((data) => {
                console.log(data);
                this.updateModeHomepage = false;
                this.homepageBanner = data.data.image;
            }, (error) => {
                console.log(error);
            });
        }
        else if (this.updateModeProductpage) {
            let model = {
                "type": "2",
                "image": event.Location
            };
            this.webinterfaceService.updateBanner(model).subscribe((data) => {
                console.log(data);
                this.updateModeProductpage = false;
                this.productpageBanner = data.data.image;
            }, (error) => {
                console.log(error);
            });
        }
    }
    updateHomeBanner() {
        this.updateModeHomepage = true;
    }
    updateProductBanner() {
        this.updateModeProductpage = true;
    }
}
WebInterfaceComponent.ɵfac = function WebInterfaceComponent_Factory(t) { return new (t || WebInterfaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_web_interface_service__WEBPACK_IMPORTED_MODULE_1__["WebInterfaceService"])); };
WebInterfaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebInterfaceComponent, selectors: [["app-web-interface"]], decls: 13, vars: 6, consts: [[1, "m-40"], [1, "homepage-banner", "text-center"], [1, "text-center"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["alt", "", "class", "w-100", "style", "height: 500px;", 3, "src", 4, "ngIf"], [3, "onImageUpload", 4, "ngIf"], [1, "productpage-banner", "text-center"], [1, "btn", "btn-primary", 3, "click"], ["alt", "", 1, "w-100", 2, "height", "500px", 3, "src"], [3, "onImageUpload"]], template: function WebInterfaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home page banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WebInterfaceComponent_button_4_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WebInterfaceComponent_img_5_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WebInterfaceComponent_app_wi_file_upload_6_Template, 1, 0, "app-wi-file-upload", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Product page banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WebInterfaceComponent_button_10_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WebInterfaceComponent_img_11_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WebInterfaceComponent_app_wi_file_upload_12_Template, 1, 0, "app-wi-file-upload", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.updateModeHomepage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.updateModeHomepage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateModeHomepage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.updateModeProductpage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.updateModeProductpage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateModeProductpage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _wi_file_upload_wi_file_upload_component__WEBPACK_IMPORTED_MODULE_3__["WiFileUploadComponent"]], styles: [".m-40[_ngcontent-%COMP%] {\n  margin: 40px;\n}\n\n.card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 300px;\n  height: 300px;\n  margin: -150px;\n  float: left;\n  perspective: 500px;\n}\n\n.content[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n  transition: transform 1s;\n  transform-style: preserve-3d;\n}\n\n.card[_ngcontent-%COMP%]:hover   .content[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n  transition: transform 0.5s;\n}\n\n.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: white;\n  line-height: 300px;\n  color: #03446A;\n  text-align: center;\n  font-size: 60px;\n  border-radius: 5px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.back[_ngcontent-%COMP%] {\n  background: #03446A;\n  color: white;\n  transform: rotateY(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3dlYi1pbnRlcmZhY2Uvd2ViLWludGVyZmFjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUVBLHdCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFRTtFQUNFLDBCQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFRTs7RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvd2ViLWludGVyZmFjZS93ZWItaW50ZXJmYWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm0tNDB7XHJcbiAgICBtYXJnaW46IDQwcHg7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAtMTUwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBlcnNwZWN0aXZlOiA1MDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgXHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIH1cclxuICBcclxuICAuY2FyZDpob3ZlciAuY29udGVudCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZyApIDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gIH1cclxuICBcclxuICAuZnJvbnQsXHJcbiAgLmJhY2sge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMDBweDtcclxuICAgIGNvbG9yOiAjMDM0NDZBO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDM0NDZBO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcgKTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebInterfaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-web-interface',
                templateUrl: './web-interface.component.html',
                styleUrls: ['./web-interface.component.scss']
            }]
    }], function () { return [{ type: src_app_services_web_interface_service__WEBPACK_IMPORTED_MODULE_1__["WebInterfaceService"] }]; }, null); })();


/***/ }),

/***/ "cOeb":
/*!***************************************************!*\
  !*** ./src/app/services/web-interface.service.ts ***!
  \***************************************************/
/*! exports provided: WebInterfaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebInterfaceService", function() { return WebInterfaceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators/map */ "q3Kh");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class WebInterfaceService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    getHomepageBanner() {
        return this.http.get(this.baseUrl + 'banner/home-page-list').pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__["map"])(Response => {
            return Response;
        }));
    }
    getProductpageBanner() {
        return this.http.get(this.baseUrl + 'banner/product-page-list').pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__["map"])(Response => {
            return Response;
        }));
    }
    updateBanner(model) {
        return this.http.post(this.baseUrl + 'banner/add-edit', model).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__["map"])(Response => {
            return Response;
        }));
    }
}
WebInterfaceService.ɵfac = function WebInterfaceService_Factory(t) { return new (t || WebInterfaceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
WebInterfaceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebInterfaceService, factory: WebInterfaceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebInterfaceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "eA2E":
/*!****************************************************!*\
  !*** ./src/app/_directives/drag-drop.directive.ts ***!
  \****************************************************/
/*! exports provided: DragDropDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropDirective", function() { return DragDropDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DragDropDirective {
    constructor() {
        this.onFileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.background = '#f5fcff';
        this.opacity = '1';
    }
    //Dragover listener
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#9ecbec';
        this.opacity = '0.8';
    }
    //Dragleave listener
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
    }
    //Drop listener
    ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
        let files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
        }
    }
}
DragDropDirective.ɵfac = function DragDropDirective_Factory(t) { return new (t || DragDropDirective)(); };
DragDropDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DragDropDirective, selectors: [["", "appDragDrop", ""]], hostVars: 4, hostBindings: function DragDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function DragDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DragDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DragDropDirective_drop_HostBindingHandler($event) { return ctx.ondrop($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.background)("opacity", ctx.opacity);
    } }, outputs: { onFileDropped: "onFileDropped" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DragDropDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appDragDrop]'
            }]
    }], null, { onFileDropped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], background: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.background-color']
        }], opacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.opacity']
        }], onDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragover', ['$event']]
        }], onDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dragleave', ['$event']]
        }], ondrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['drop', ['$event']]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=web-interface-web-interface-module.js.map