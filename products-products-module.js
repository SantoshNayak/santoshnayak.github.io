(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "Gdn9":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ProductService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    getProducts() {
        return this.http.get(this.baseUrl + 'product/list').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(Response => {
            return Response;
        }));
    }
    addProduct(productModel) {
        return this.http.post(this.baseUrl + 'product/add-edit', productModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(Response => {
            return Response;
        }));
    }
    deleteProduct(productId) {
        return this.http.delete(this.baseUrl + 'product/delete/' + productId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(Response => {
            return Response;
        }));
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "HObf":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/products/product-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.component */ "vONB");





const routes = [
    {
        path: '',
        component: _products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"],
    }
];
class ProductRoutingModule {
}
ProductRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductRoutingModule });
ProductRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductRoutingModule_Factory(t) { return new (t || ProductRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "M2sK":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/products/add-product/add-product.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk/clients/s3 */ "tegk");
/* harmony import */ var aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_s3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/product.service */ "Gdn9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");













function AddProductComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Product Name Can't be Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProductComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Product Title Can't be Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProductComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Current Product Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Choose another image below if you want to replace this image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.productModel.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AddProductComponent_div_36_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Retail Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProductComponent_div_36_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Numbers only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProductComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddProductComponent_div_36_mat_error_1_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddProductComponent_div_36_mat_error_2_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.pattern);
} }
function AddProductComponent_div_43_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Numbers only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProductComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddProductComponent_div_43_mat_error_1_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.pattern);
} }
function AddProductComponent_div_51_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ticket one Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProductComponent_div_51_mat_error_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Numbers only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProductComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddProductComponent_div_51_mat_error_1_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddProductComponent_div_51_mat_error_2_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.pattern);
} }
function AddProductComponent_div_58_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Numbers only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProductComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddProductComponent_div_58_mat_error_1_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.errors.pattern);
} }
function AddProductComponent_div_66_mat_error_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Numbers only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProductComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddProductComponent_div_66_mat_error_1_Template, 2, 0, "mat-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r13.errors.pattern);
} }
class AddProductComponent {
    constructor(uiLoader, toastr, productService, dialogRef, data) {
        this.uiLoader = uiLoader;
        this.toastr = toastr;
        this.productService = productService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isEdit = false;
        this.productModel = {
            "name": "",
            "image": "",
            "title": "",
            "retail_price": '',
            "alternate_price": '',
            "is_special": false,
            "ticket_one_price": "",
            "ticket_five_price": "",
            "ticket_ten_price": ""
        };
        this.files = [];
        this.fileNames = [];
    }
    ngOnInit() {
        console.log('edit data is', this.data);
        if (this.data !== null) {
            this.isEdit = true;
            this.productModel = this.data.product;
            this.productModel["productId"] = this.data.product.id;
        }
    }
    uploadFile(event) {
        this.uiLoader.start();
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
                self.uiLoader.stop();
                self.toastr.warning("Failed to upload image.. Please Try Again");
                return false;
            }
            console.log('Successfully uploaded file.', data);
            self.productModel.image = data.Location;
            self.uiLoader.stop();
            // self.onImageUpload.emit(data);
            self.fileNames = [];
            self.files = [];
            // self.ngOnInit();
            return data;
        });
    }
    productOperation() {
        // if(this.isEdit !== null){
        // }
        // else{
        this.addProduct();
        // }
    }
    addProduct() {
        if (this.productModel.image == "") {
            this.toastr.warning("Please wait while we upload the Profile image");
        }
        else {
            console.log("p model is", this.productModel);
            this.productService.addProduct(this.productModel).subscribe((data) => {
                console.log(data);
                this.toastr.success(data.message);
                this.dialogRef.close();
            }, (error) => {
                console.log(error);
            });
        }
    }
}
AddProductComponent.ɵfac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
AddProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddProductComponent, selectors: [["app-add-product"]], decls: 74, vars: 17, consts: [[1, "campaign-details-div"], [1, "container-fluid"], [1, "col-md-12"], [1, "card"], [1, "card-header", "campaign-card-header"], [1, "card-title"], [1, "card-body"], [1, "row"], [1, "col-md-6"], [1, "group", "bmd-form-group"], ["type", "text", "name", "name", "id", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [4, "ngIf"], ["type", "text", "name", "title", "id", "title", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["title", "ngModel"], ["class", "col-md-12", 4, "ngIf"], [1, "form-group", "bmd-form-group"], [1, "bmd-label-floating"], ["type", "file", "name", "image", 1, "form-control", 3, "change"], ["type", "text", "pattern", "\\d*", "required", "", "name", "retail_price", "id", "retail_price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["retail_price", "ngModel"], ["type", "text", "pattern", "\\d*", "name", "alternate_price", "id", "alternate_price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["alternate_price", "ngModel"], ["type", "text", "pattern", "\\d*", "required", "", "name", "ticket_one_price", "id", "ticket_one_price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ticket_one_price", "ngModel"], ["type", "text", "pattern", "\\d*", "name", "ticket_five_price", "id", "ticket_five_price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ticket_five_price", "ngModel"], ["type", "text", "pattern", "\\d*", "name", "ticket_ten_price", "id", "ticket_ten_price", 1, "form-control", 3, "ngModel", "ngModelChange"], ["ticket_ten_price", "ngModel"], [1, "col-12"], ["name", "is_special ", "id", "is_special ", 2, "font-size", "17px", 3, "ngModel", "ngModelChange"], ["is_special", "ngModel"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "click"], ["alt", "", 1, "edit-image-preview", 3, "src"], [1, "m-0", "notice-text"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Product Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_13_listener($event) { return ctx.productModel.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AddProductComponent_mat_error_15_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Product Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_19_listener($event) { return ctx.productModel.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddProductComponent_mat_error_21_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AddProductComponent_div_23_Template, 7, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Product Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddProductComponent_Template_input_change_28_listener($event) { return ctx.uploadFile($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Retail Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_34_listener($event) { return ctx.productModel.retail_price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AddProductComponent_div_36_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Alternate Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_41_listener($event) { return ctx.productModel.alternate_price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AddProductComponent_div_43_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Ticket one Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_49_listener($event) { return ctx.productModel.ticket_one_price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AddProductComponent_div_51_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Ticket Five Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_56_listener($event) { return ctx.productModel.ticket_five_price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, AddProductComponent_div_58_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Ticket Five Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_input_ngModelChange_64_listener($event) { return ctx.productModel.ticket_ten_price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, AddProductComponent_div_66_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-checkbox", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddProductComponent_Template_mat_checkbox_ngModelChange_69_listener($event) { return ctx.productModel.is_special = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Is Special ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProductComponent_Template_button_click_72_listener() { return ctx.productOperation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productModel.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.invalid && _r0.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productModel.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.invalid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productModel.retail_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productModel.alternate_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.invalid && (_r7.dirty || _r7.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productModel.ticket_one_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.invalid && (_r9.dirty || _r9.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productModel.ticket_five_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.invalid && (_r11.dirty || _r11.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productModel.ticket_ten_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r13.invalid && (_r13.dirty || _r13.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.productModel.is_special);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isEdit ? "Update" : "Add");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]], styles: [".main-panel[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  padding: 30px 15px;\n  min-height: calc(100vh - 123px);\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: 0;\n  margin-bottom: 30px;\n  margin-top: 30px;\n  border-radius: 6px;\n  color: #333;\n  background: #fff;\n  width: 100%;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n}\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n}\n\n.card[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  padding: 0;\n  position: relative;\n}\n\n.card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  background-color: #999;\n  padding: 15px;\n  margin-top: -25px;\n  margin-right: 15px;\n  float: left;\n}\n\n.card-stats[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-category[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 14px;\n}\n\n.card[_ngcontent-%COMP%]   .card-header.card-header-icon[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header.card-header-text[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  color: #3c4858;\n}\n\n.small[_ngcontent-%COMP%], small[_ngcontent-%COMP%] {\n  font-size: 80%;\n  font-weight: 400;\n}\n\n.card-stats[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]    + .card-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #eee;\n  margin-top: 0px;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]    + .card-footer[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  padding: 10px 0 0;\n  margin: 0 15px 10px;\n  border-radius: 0;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: transparent;\n  border: 0;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]    + .card-footer[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 12px;\n  line-height: 22px;\n}\n\n.card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]    + .card-footer[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  position: relative;\n  top: 4px;\n  font-size: 16px;\n}\n\n.card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  margin-right: 3px;\n  margin-left: 3px;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: #f44336 !important;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  background-color: transparent;\n  color: #9c27b0;\n}\n\n.card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]:not(.card-header-icon):not(.card-header-text) {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  border-bottom: none !important;\n  background-color: rgba(255, 255, 255, 0.03) !important;\n}\n\n.card-stats[_ngcontent-%COMP%]   .card-header.card-header-icon[_ngcontent-%COMP%], .card-stats[_ngcontent-%COMP%]   .card-header.card-header-text[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.card-stats[_ngcontent-%COMP%]   .card-header.card-header-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 36px;\n  line-height: 56px;\n  width: 56px;\n  height: 56px;\n  text-align: center;\n  color: white;\n}\n\n.card[_ngcontent-%COMP%]   .card-header-success[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-success[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-success[_ngcontent-%COMP%]:not(.card-header-icon):not(.card-header-text), .card.bg-success[_ngcontent-%COMP%], .card.card-rotate.bg-success[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .card.card-rotate.bg-success[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #66bb6a, #43a047);\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);\n}\n\n.card[_ngcontent-%COMP%]   .card-header-danger[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-danger[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-danger[_ngcontent-%COMP%]:not(.card-header-icon):not(.card-header-text), .card.bg-danger[_ngcontent-%COMP%], .card.card-rotate.bg-danger[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .card.card-rotate.bg-danger[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #ef5350, #e53935);\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);\n}\n\n.card[_ngcontent-%COMP%]   .card-header-info[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-info[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-info[_ngcontent-%COMP%]:not(.card-header-icon):not(.card-header-text), .card.bg-info[_ngcontent-%COMP%], .card.card-rotate.bg-info[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .card.card-rotate.bg-info[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #26c6da, #00acc1);\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);\n}\n\n.card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]:not(.card-header-icon):not(.card-header-text), .card.bg-warning[_ngcontent-%COMP%], .card.card-rotate.bg-warning[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .card.card-rotate.bg-warning[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #ffa726, #fb8c00);\n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 600px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.width100[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.margin-60-15[_ngcontent-%COMP%] {\n  margin: 60px 15px;\n}\n\n.action-ico-style[_ngcontent-%COMP%] {\n  margin: 0px 5px 0px 5px;\n  font-size: 15px;\n}\n\n.edit-icon-color[_ngcontent-%COMP%] {\n  color: #0015ae;\n}\n\n.block-btn[_ngcontent-%COMP%] {\n  color: #c60303;\n}\n\n.edit-user-dialog-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  vertical-align: sub;\n  color: #434343;\n  margin-right: 6px;\n}\n\n.font20[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.cursorPointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.vertical-align[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.inputFieldIcon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #8d8b8b;\n  margin: 0px 5px 2px 0px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 80%;\n}\n\n.padding0-15[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n}\n\n.filterClassp[_ngcontent-%COMP%] {\n  float: right;\n  padding: 0px 9px;\n  margin-top: 25px;\n}\n\n.cursorPointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.font21[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n\n.margin12-0[_ngcontent-%COMP%] {\n  margin: 12px 0px;\n}\n\n.background-white[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.mat-dialog-actions[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.floatRit[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.successClr[_ngcontent-%COMP%] {\n  color: #6de500;\n}\n\n.disabledBackground[_ngcontent-%COMP%] {\n  background-color: #d9e4ff;\n}\n\n.permissionSection[_ngcontent-%COMP%] {\n  background-color: #d5d5d5;\n  padding: 3px 3px;\n}\n\n.perBorder[_ngcontent-%COMP%] {\n  border: 1px solid #c9c4c4;\n  margin-bottom: 10px;\n}\n\n.margin0-5[_ngcontent-%COMP%] {\n  margin: 0px 5px;\n}\n\n.checkboxPAraMArgin[_ngcontent-%COMP%] {\n  margin: 7px 14px;\n  width: 100%;\n}\n\n.permissionAuto[_ngcontent-%COMP%] {\n  height: 100px;\n  overflow: auto;\n}\n\n.card-date[_ngcontent-%COMP%] {\n  font-size: 15px;\n  display: inline-block;\n  padding: 8px 0px 1px 0px;\n}\n\n.campaign-details-div[_ngcontent-%COMP%] {\n  margin: 10px 10px 0px 10px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 0;\n}\n\n.card-desc[_ngcontent-%COMP%] {\n  color: #f9f9f9;\n  margin-bottom: 0;\n  font-size: 13px;\n  margin-top: 3px;\n}\n\n.campaign-card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(60deg, #1b1e73, #131432);\n  margin: -21px 18px 0px 18px;\n  box-shadow: -1px 1px 20px 0 rgba(0, 0, 0, 0.14), 1px 4px 10px -5px #b7b7b7;\n}\n\n.text-head[_ngcontent-%COMP%] {\n  color: #b54a2b;\n}\n\n.card-avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: -6px 6px 11px 0px #a7a1a1, 0 4px 20px 0 rgba(0, 0, 0, 0.12), -8px 8px 0px -5px rgba(0, 0, 0, 0.2);\n  margin: -55px auto 0;\n}\n\n.product-card-body[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n\n.expired-image[_ngcontent-%COMP%] {\n  width: 79px;\n  height: 67px;\n  position: absolute;\n  right: 105px;\n  top: 48px;\n}\n\n.float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.text-warn[_ngcontent-%COMP%] {\n  color: #d45542;\n}\n\n.login100-form-btn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.5;\n  color: #fff;\n  text-transform: uppercase;\n  width: 100px;\n  height: 50px;\n  float: right;\n  border-radius: 4px;\n  background: linear-gradient(-135deg, #c850c0, #4158d0);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 25px;\n  transition: all 0.4s;\n}\n\n.add_address_button[_ngcontent-%COMP%] {\n  color: white;\n  float: right;\n}\n\n.address_container[_ngcontent-%COMP%] {\n  padding: 4px;\n  background: linear-gradient(60deg, #460f08, #da6c0f);\n  border-radius: 14px;\n}\n\n.address-card-name[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 5px 5px;\n  margin: 0;\n}\n\n.address-card-phone-number[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 0;\n  padding: 5px 10px;\n}\n\n.address-card-address[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 5px 10px;\n  margin: 0;\n}\n\n.horizontal-line[_ngcontent-%COMP%] {\n  margin: 0;\n  background-color: #f07a23;\n  width: 89%;\n}\n\n.edit-address-card-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 9px 0px 0px 31px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.no-padding-left[_ngcontent-%COMP%] {\n  padding-left: 0px;\n}\n\n.no-padding-right[_ngcontent-%COMP%] {\n  padding-right: 0px;\n}\n\n.address-icon[_ngcontent-%COMP%] {\n  color: white;\n  padding: 6px 0px 0px 5px;\n  font-size: 22px;\n}\n\n.edit-image-preview[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  padding: 14px;\n}\n\n.notice-text[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2R1Y3RzL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsK0dBQUE7RUFDQSwyQ0FBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFJSjs7QUFEQTtFQUNJLG1CQUFBO0FBSUo7O0FBREE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBT0o7O0FBTEE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFRSjs7QUFOQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtBQVNKOztBQVBBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVVKOztBQVJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0FBV0o7O0FBVEE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBWUo7O0FBVkE7RUFDSSxvQkFBQTtBQWFKOztBQVhBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQWNKOztBQVpBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQWVKOztBQWJBO0VBQ0kseUJBQUE7QUFnQko7O0FBZEE7RUFDSSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQWlCSjs7QUFkQTtFQUNJLG9GQUFBO0FBaUJKOztBQWJBO0VBQ0ksOEJBQUE7RUFDQSxzREFBQTtBQWdCSjs7QUFkQTtFQUNJLGlCQUFBO0FBaUJKOztBQWRBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFpQko7O0FBZkE7RUFDSSxvREFBQTtFQUNBLG9GQUFBO0FBa0JKOztBQWhCQTtFQUNJLG9EQUFBO0VBQ0Esb0ZBQUE7QUFtQko7O0FBakJBO0VBQ0ksb0RBQUE7RUFDQSxvRkFBQTtBQW9CSjs7QUFsQkE7RUFDSSxvREFBQTtBQXFCSjs7QUFsQkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQXFCSjs7QUFsQkU7RUFDRSxXQUFBO0FBcUJKOztBQWxCRTtFQUNGLHNCQUFBO0FBcUJBOztBQWxCRTtFQUNFLGlCQUFBO0FBcUJKOztBQW5CRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBQXNCSjs7QUFuQkU7RUFDRSxjQUFBO0FBc0JKOztBQXBCRTtFQUNFLGNBQUE7QUF1Qko7O0FBckJFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBd0JKOztBQXJCRTtFQUNFLGVBQUE7QUF3Qko7O0FBckJFO0VBQ0ksZUFBQTtBQXdCTjs7QUF0QkU7RUFDRSxzQkFBQTtBQXlCSjs7QUF0QkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBeUJKOztBQXRCRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBeUJKOztBQXRCRTtFQUNFLGlCQUFBO0FBeUJKOztBQXRCRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBeUJKOztBQXRCRTtFQUNFLGVBQUE7QUF5Qko7O0FBdEJFO0VBQ0Usd0JBQUE7QUF5Qko7O0FBdEJFO0VBQ0ksZUFBQTtBQXlCTjs7QUF0QkU7RUFDRSxnQkFBQTtBQXlCSjs7QUF2QkU7RUFDRSx1QkFBQTtBQTBCSjs7QUF2QkE7RUFFSSx5QkFBQTtBQXlCSjs7QUF0QkE7RUFDSSxZQUFBO0FBeUJKOztBQXRCQTtFQUNJLGNBQUE7QUF5Qko7O0FBdEJBO0VBQ0kseUJBQUE7QUF5Qko7O0FBdEJBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQXlCSjs7QUF0QkE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FBeUJKOztBQXRCQTtFQUNJLGVBQUE7QUF5Qko7O0FBdEJBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBeUJKOztBQXRCQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBeUJKOztBQXZCQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FBMEJKOztBQXhCQTtFQUNJLDBCQUFBO0FBMkJKOztBQXpCQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0FBNEJKOztBQTFCQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBNkJKOztBQTNCQTtFQUNJLG9EQUFBO0VBQ0QsMkJBQUE7RUFDQSwwRUFBQTtBQThCSDs7QUE1QkE7RUFDSSxjQUFBO0FBK0JKOztBQTdCQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2R0FBQTtFQUNBLG9CQUFBO0FBZ0NKOztBQTlCQTtFQUNJLGtCQUFBO0FBaUNKOztBQS9CQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBa0NKOztBQWhDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQW1DSjs7QUFqQ0E7RUFDSSxZQUFBO0FBb0NKOztBQWxDQTtFQUNJLGNBQUE7QUFxQ0o7O0FBdkJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzREFBQTtFQUtBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUlBLG9CQUFBO0FBMEJKOztBQXhCQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBMkJKOztBQXpCQTtFQUNJLFlBQUE7RUFFQSxvREFBQTtFQUNBLG1CQUFBO0FBMkJKOztBQXpCQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUE0Qko7O0FBMUJBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQTZCSjs7QUEzQkE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBOEJKOztBQTVCQTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUErQko7O0FBN0JBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBZ0NKOztBQTlCQTtFQUNJLGdCQUFBO0FBaUNKOztBQS9CQTtFQUNJLGlCQUFBO0FBa0NKOztBQWhDQTtFQUNJLGtCQUFBO0FBbUNKOztBQWpDQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFvQ0o7O0FBbENBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBcUNKOztBQW5DQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQXNDSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wcm9kdWN0cy9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXBhbmVsIC5tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgIHBhZGRpbmc6IDMwcHggMTVweDtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjNweCk7XHJcbn1cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4uY2FyZCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwuMTQpO1xyXG59XHJcbi5jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBmb250LXNpemU6IC44NzVyZW07XHJcbn1cclxuXHJcbi5jYXJkICB7XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNhcmQgLmNhcmQtaWNvbiwgLmNhcmQgLmNhcmQtdGV4dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyIC5jYXJkLWNhdGVnb3J5e1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmNhcmQgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLWljb24gLmNhcmQtdGl0bGUsIC5jYXJkIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci10ZXh0IC5jYXJkLXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBjb2xvcjogIzNjNDg1ODtcclxufVxyXG4uc21hbGwsIHNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIrLmNhcmQtZm9vdGVyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5jYXJkIC5jYXJkLWJvZHkrLmNhcmQtZm9vdGVyLCAuY2FyZCAuY2FyZC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAwIDA7XHJcbiAgICBtYXJnaW46IDAgMTVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNhcmQgLmNhcmQtZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuLmNhcmQgLmNhcmQtYm9keSsuY2FyZC1mb290ZXIgLnN0YXRzLCAuY2FyZCAuY2FyZC1mb290ZXIgLnN0YXRzIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuLmNhcmQgLmNhcmQtZm9vdGVyIC5hdXRob3IsIC5jYXJkIC5jYXJkLWZvb3RlciAuc3RhdHMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuLmNhcmQgLmNhcmQtYm9keSsuY2FyZC1mb290ZXIgLnN0YXRzIC5tYXRlcmlhbC1pY29ucywgLmNhcmQgLmNhcmQtZm9vdGVyIC5zdGF0cyAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmNhcmQgLmNhcmQtZm9vdGVyIC5zdGF0cyAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogI2Y0NDMzNiFpbXBvcnRhbnQ7XHJcbn1cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjOWMyN2IwO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1oZWFkZXItd2FybmluZyAuY2FyZC1pY29uLCAuY2FyZCAuY2FyZC1oZWFkZXItd2FybmluZyAuY2FyZC10ZXh0LCAuY2FyZCAuY2FyZC1oZWFkZXItd2FybmluZzpub3QoLmNhcmQtaGVhZGVyLWljb24pOm5vdCguY2FyZC1oZWFkZXItdGV4dCkge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoMjU1LDE1MiwwLC40KTtcclxufVxyXG5cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQtc3RhdHMgLmNhcmQtaGVhZGVyLmNhcmQtaGVhZGVyLWljb24sIC5jYXJkLXN0YXRzIC5jYXJkLWhlYWRlci5jYXJkLWhlYWRlci10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uY2FyZC1zdGF0cyAuY2FyZC1oZWFkZXIuY2FyZC1oZWFkZXItaWNvbiBpIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gICAgd2lkdGg6IDU2cHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG4uY2FyZCAuY2FyZC1oZWFkZXItc3VjY2VzcyAuY2FyZC1pY29uLCAuY2FyZCAuY2FyZC1oZWFkZXItc3VjY2VzcyAuY2FyZC10ZXh0LCAuY2FyZCAuY2FyZC1oZWFkZXItc3VjY2Vzczpub3QoLmNhcmQtaGVhZGVyLWljb24pOm5vdCguY2FyZC1oZWFkZXItdGV4dCksIC5jYXJkLmJnLXN1Y2Nlc3MsIC5jYXJkLmNhcmQtcm90YXRlLmJnLXN1Y2Nlc3MgLmJhY2ssIC5jYXJkLmNhcmQtcm90YXRlLmJnLXN1Y2Nlc3MgLmZyb250IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywjNjZiYjZhLCM0M2EwNDcpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoMjU1LDE1MiwwLC40KTtcclxufVxyXG4uY2FyZCAuY2FyZC1oZWFkZXItZGFuZ2VyIC5jYXJkLWljb24sIC5jYXJkIC5jYXJkLWhlYWRlci1kYW5nZXIgLmNhcmQtdGV4dCwgLmNhcmQgLmNhcmQtaGVhZGVyLWRhbmdlcjpub3QoLmNhcmQtaGVhZGVyLWljb24pOm5vdCguY2FyZC1oZWFkZXItdGV4dCksIC5jYXJkLmJnLWRhbmdlciwgLmNhcmQuY2FyZC1yb3RhdGUuYmctZGFuZ2VyIC5iYWNrLCAuY2FyZC5jYXJkLXJvdGF0ZS5iZy1kYW5nZXIgLmZyb250IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywjZWY1MzUwLCNlNTM5MzUpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoMjU1LDE1MiwwLC40KTtcclxufVxyXG4uY2FyZCAuY2FyZC1oZWFkZXItaW5mbyAuY2FyZC1pY29uLCAuY2FyZCAuY2FyZC1oZWFkZXItaW5mbyAuY2FyZC10ZXh0LCAuY2FyZCAuY2FyZC1oZWFkZXItaW5mbzpub3QoLmNhcmQtaGVhZGVyLWljb24pOm5vdCguY2FyZC1oZWFkZXItdGV4dCksIC5jYXJkLmJnLWluZm8sIC5jYXJkLmNhcmQtcm90YXRlLmJnLWluZm8gLmJhY2ssIC5jYXJkLmNhcmQtcm90YXRlLmJnLWluZm8gLmZyb250IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywjMjZjNmRhLCMwMGFjYzEpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoMjU1LDE1MiwwLC40KTtcclxufVxyXG4uY2FyZCAuY2FyZC1oZWFkZXItd2FybmluZyAuY2FyZC1pY29uLCAuY2FyZCAuY2FyZC1oZWFkZXItd2FybmluZyAuY2FyZC10ZXh0LCAuY2FyZCAuY2FyZC1oZWFkZXItd2FybmluZzpub3QoLmNhcmQtaGVhZGVyLWljb24pOm5vdCguY2FyZC1oZWFkZXItdGV4dCksIC5jYXJkLmJnLXdhcm5pbmcsIC5jYXJkLmNhcmQtcm90YXRlLmJnLXdhcm5pbmcgLmJhY2ssIC5jYXJkLmNhcmQtcm90YXRlLmJnLXdhcm5pbmcgLmZyb250IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywjZmZhNzI2LCNmYjhjMDApO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC53aWR0aDEwMHtcclxud2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXJnaW4tNjAtMTV7XHJcbiAgICBtYXJnaW46IDYwcHggMTVweDtcclxuICB9XHJcbiAgLmFjdGlvbi1pY28tc3R5bGV7XHJcbiAgICBtYXJnaW46IDBweCA1cHggMHB4IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcblxyXG4gIC5lZGl0LWljb24tY29sb3J7XHJcbiAgICBjb2xvcjogIzAwMTVhZTtcclxuICB9XHJcbiAgLmJsb2NrLWJ0bntcclxuICAgIGNvbG9yOiAjYzYwMzAzO1xyXG4gIH1cclxuICAuZWRpdC11c2VyLWRpYWxvZy1pY29ue1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHN1YjtcclxuICAgIGNvbG9yOiAjNDM0MzQzO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgfVxyXG5cclxuICAuZm9udDIwe1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmN1cnNvclBvaW50ZXJ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnZlcnRpY2FsLWFsaWdue1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcblxyXG4gIC5pbnB1dEZpZWxkSWNvbntcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjOGQ4YjhiO1xyXG4gICAgbWFyZ2luOiAwcHggNXB4IDJweCAwcHg7XHJcbiAgfVxyXG5cclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcblxyXG4gIC5wYWRkaW5nMC0xNXtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlckNsYXNzcHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDBweCA5cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmN1cnNvclBvaW50ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBidXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmZvbnQyMXtcclxuICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gIH1cclxuXHJcbiAgLm1hcmdpbjEyLTB7XHJcbiAgICBtYXJnaW46IDEycHggMHB4O1xyXG4gIH1cclxuICAuYmFja2dyb3VuZC13aGl0ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuXHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxvYXRSaXR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5zdWNjZXNzQ2xye1xyXG4gICAgY29sb3I6ICM2ZGU1MDA7XHJcbn1cclxuXHJcbi5kaXNhYmxlZEJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllNGZmO1xyXG59XHJcblxyXG4ucGVybWlzc2lvblNlY3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNWQ1O1xyXG4gICAgcGFkZGluZzogM3B4IDNweDtcclxufVxyXG5cclxuLnBlckJvcmRlcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOWM0YzQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubWFyZ2luMC01e1xyXG4gICAgbWFyZ2luOiAwcHggNXB4O1xyXG59XHJcblxyXG4uY2hlY2tib3hQQXJhTUFyZ2lue1xyXG4gICAgbWFyZ2luOiA3cHggMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGVybWlzc2lvbkF1dG97XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmNhcmQtZGF0ZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDhweCAwcHggMXB4IDBweDtcclxufVxyXG4uY2FtcGFpZ24tZGV0YWlscy1kaXZ7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweCAwcHggMTBweDtcclxufVxyXG4uY2FyZC10aXRsZXtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5jYXJkLWRlc2N7XHJcbiAgICBjb2xvcjogI2Y5ZjlmOTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuLmNhbXBhaWduLWNhcmQtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjMWIxZTczLCAjMTMxNDMyKTtcclxuICAgbWFyZ2luOiAtMjFweCAxOHB4IDBweCAxOHB4O1xyXG4gICBib3gtc2hhZG93OiAtMXB4IDFweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMXB4IDRweCAxMHB4IC01cHggI2I3YjdiNztcclxufVxyXG4udGV4dC1oZWFke1xyXG4gICAgY29sb3I6ICNiNTRhMmI7XHJcbn1cclxuLmNhcmQtYXZhdGFye1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IC02cHggNnB4IDExcHggMHB4IHJnYigxNjcsIDE2MSwgMTYxKSwgMCA0cHggMjBweCAwIHJnYmEoMCwwLDAsLjEyKSwgLThweCA4cHggMHB4IC01cHggcmdiYSgwLDAsMCwuMik7XHJcbiAgICBtYXJnaW46IC01NXB4IGF1dG8gMDtcclxufVxyXG4ucHJvZHVjdC1jYXJkLWJvZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmltZ3tcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuLmV4cGlyZWQtaW1hZ2V7XHJcbiAgICB3aWR0aDogNzlweDtcclxuICAgIGhlaWdodDogNjdweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMDVweDtcclxuICAgIHRvcDogNDhweDtcclxufVxyXG4uZmxvYXQtcmlnaHR7XHJcbiAgICBmbG9hdDpyaWdodDtcclxufVxyXG4udGV4dC13YXJue1xyXG4gICAgY29sb3I6ICNkNDU1NDI7XHJcbn1cclxuLy8gI215UHJvZ3Jlc3Mge1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICAjbXlCYXIge1xyXG4vLyAgICAgd2lkdGg6IDElO1xyXG4vLyAgICAgaGVpZ2h0OiAzMHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuLy8gICB9XHJcblxyXG5cclxuLmxvZ2luMTAwLWZvcm0tYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTEzNWRlZywgI2M4NTBjMCwgIzQxNThkMCk7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAyNXB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjRzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC40cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC40cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XHJcbn1cclxuLmFkZF9hZGRyZXNzX2J1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4uYWRkcmVzc19jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNzM4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjNDYwZjA4LCAjZGE2YzBmKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbn1cclxuLmFkZHJlc3MtY2FyZC1uYW1le1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5hZGRyZXNzLWNhcmQtcGhvbmUtbnVtYmVye1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG4uYWRkcmVzcy1jYXJkLWFkZHJlc3N7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5ob3Jpem9udGFsLWxpbmV7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA3YTIzO1xyXG4gICAgd2lkdGg6IDg5JTtcclxufVxyXG4uZWRpdC1hZGRyZXNzLWNhcmQtaWNvbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogOXB4IDBweCAwcHggMzFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1hcmdpbi10b3B7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5uby1wYWRkaW5nLWxlZnR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MHB4XHJcbn1cclxuLm5vLXBhZGRpbmctcmlnaHR7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjBweFxyXG59XHJcbi5hZGRyZXNzLWljb257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA2cHggMHB4IDBweCA1cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLmVkaXQtaW1hZ2UtcHJldmlld3tcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNHB4O1xyXG59XHJcbi5ub3RpY2UtdGV4dHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiBibHVlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-product',
                templateUrl: './add-product.component.html',
                styleUrls: ['./add-product.component.scss']
            }]
    }], function () { return [{ type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "OaSA":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/table.js ***!
  \**********************************************************/
/*! exports provided: MatCell, MatCellDef, MatColumnDef, MatFooterCell, MatFooterCellDef, MatFooterRow, MatFooterRowDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatNoDataRow, MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule, MatTextColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCell", function() { return MatCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCellDef", function() { return MatCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatColumnDef", function() { return MatColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterCell", function() { return MatFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterCellDef", function() { return MatFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterRow", function() { return MatFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFooterRowDef", function() { return MatFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCell", function() { return MatHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderCellDef", function() { return MatHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRow", function() { return MatHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHeaderRowDef", function() { return MatHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNoDataRow", function() { return MatNoDataRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRow", function() { return MatRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRowDef", function() { return MatRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTable", function() { return MatTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableDataSource", function() { return MatTableDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTableModule", function() { return MatTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTextColumn", function() { return MatTextColumn; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Wrapper for the CdkTable with Material design styles.
 */



const _c0 = [[["caption"]], [["colgroup"], ["col"]]];
const _c1 = ["caption", "colgroup, col"];
function MatTextColumn_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
} }
function MatTextColumn_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-align", ctx_r1.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
} }
class MatTable extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"] {
    constructor() {
        super(...arguments);
        /** Overrides the sticky CSS class set by the `CdkTable`. */
        this.stickyCssClass = 'mat-table-sticky';
        /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */
        this.needsPositionStickyOnElement = false;
    }
}
MatTable.ɵfac = function MatTable_Factory(t) { return ɵMatTable_BaseFactory(t || MatTable); };
MatTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatTable, selectors: [["mat-table"], ["table", "mat-table", ""]], hostAttrs: [1, "mat-table"], exportAs: ["matTable"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
            //  is only included in the build if used.
            { provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"], useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_DisposeViewRepeaterStrategy"] },
            { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"], useExisting: MatTable },
            { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE"], useExisting: MatTable },
            { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["_COALESCED_STYLE_SCHEDULER"], useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["_CoalescedStyleScheduler"] },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 6, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]], template: function MatTable_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 3);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["HeaderRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["NoDataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["FooterRowOutlet"]], styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky;position:sticky}\n"], encapsulation: 2 });
const ɵMatTable_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTable);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-table, table[mat-table]',
                exportAs: 'matTable',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE_TEMPLATE"],
                host: {
                    'class': 'mat-table'
                },
                providers: [
                    // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
                    //  is only included in the build if used.
                    { provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"], useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_DisposeViewRepeaterStrategy"] },
                    { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"], useExisting: MatTable },
                    { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_TABLE"], useExisting: MatTable },
                    { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["_COALESCED_STYLE_SCHEDULER"], useClass: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["_CoalescedStyleScheduler"] },
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                styles: ["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:\"\"}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:-webkit-sticky;position:sticky}\n"]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Cell definition for the mat-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
class MatCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"] {
}
MatCellDef.ɵfac = function MatCellDef_Factory(t) { return ɵMatCellDef_BaseFactory(t || MatCellDef); };
MatCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCellDef, selectors: [["", "matCellDef", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"], useExisting: MatCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatCellDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCellDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matCellDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"], useExisting: MatCellDef }]
            }]
    }], null, null); })();
/**
 * Header cell definition for the mat-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
class MatHeaderCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"] {
}
MatHeaderCellDef.ɵfac = function MatHeaderCellDef_Factory(t) { return ɵMatHeaderCellDef_BaseFactory(t || MatHeaderCellDef); };
MatHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHeaderCellDef, selectors: [["", "matHeaderCellDef", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"], useExisting: MatHeaderCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatHeaderCellDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCellDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matHeaderCellDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"], useExisting: MatHeaderCellDef }]
            }]
    }], null, null); })();
/**
 * Footer cell definition for the mat-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
class MatFooterCellDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"] {
}
MatFooterCellDef.ɵfac = function MatFooterCellDef_Factory(t) { return ɵMatFooterCellDef_BaseFactory(t || MatFooterCellDef); };
MatFooterCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatFooterCellDef, selectors: [["", "matFooterCellDef", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"], useExisting: MatFooterCellDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatFooterCellDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCellDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matFooterCellDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCellDef"], useExisting: MatFooterCellDef }]
            }]
    }], null, null); })();
/**
 * Column definition for the mat-table.
 * Defines a set of cells available for a table column.
 */
class MatColumnDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"] {
    /** Unique name for this column. */
    get name() { return this._name; }
    set name(name) { this._setNameInput(name); }
    /**
     * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
     * In the future, this will only add "mat-column-" and columnCssClassName
     * will change from type string[] to string.
     * @docs-private
     */
    _updateColumnCssClassName() {
        super._updateColumnCssClassName();
        this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
    }
}
MatColumnDef.ɵfac = function MatColumnDef_Factory(t) { return ɵMatColumnDef_BaseFactory(t || MatColumnDef); };
MatColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatColumnDef, selectors: [["", "matColumnDef", ""]], inputs: { sticky: "sticky", name: ["matColumnDef", "name"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"], useExisting: MatColumnDef },
            { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
MatColumnDef.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matColumnDef',] }]
};
const ɵMatColumnDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatColumnDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatColumnDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matColumnDef]',
                inputs: ['sticky'],
                providers: [
                    { provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"], useExisting: MatColumnDef },
                    { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: MatColumnDef }
                ]
            }]
    }], null, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['matColumnDef']
        }] }); })();
/** Header cell template container that adds the right classes and role. */
class MatHeaderCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCell"] {
}
MatHeaderCell.ɵfac = function MatHeaderCell_Factory(t) { return ɵMatHeaderCell_BaseFactory(t || MatHeaderCell); };
MatHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHeaderCell, selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "mat-header-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatHeaderCell_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderCell);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-header-cell, th[mat-header-cell]',
                host: {
                    'class': 'mat-header-cell',
                    'role': 'columnheader'
                }
            }]
    }], null, null); })();
/** Footer cell template container that adds the right classes and role. */
class MatFooterCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterCell"] {
}
MatFooterCell.ɵfac = function MatFooterCell_Factory(t) { return ɵMatFooterCell_BaseFactory(t || MatFooterCell); };
MatFooterCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatFooterCell, selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-footer-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatFooterCell_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterCell);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-footer-cell, td[mat-footer-cell]',
                host: {
                    'class': 'mat-footer-cell',
                    'role': 'gridcell'
                }
            }]
    }], null, null); })();
/** Cell template container that adds the right classes and role. */
class MatCell extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCell"] {
}
MatCell.ɵfac = function MatCell_Factory(t) { return ɵMatCell_BaseFactory(t || MatCell); };
MatCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatCell, selectors: [["mat-cell"], ["td", "mat-cell", ""]], hostAttrs: ["role", "gridcell", 1, "mat-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatCell_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCell);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-cell, td[mat-cell]',
                host: {
                    'class': 'mat-cell',
                    'role': 'gridcell'
                }
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Header row definition for the mat-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
class MatHeaderRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"] {
}
MatHeaderRowDef.ɵfac = function MatHeaderRowDef_Factory(t) { return ɵMatHeaderRowDef_BaseFactory(t || MatHeaderRowDef); };
MatHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatHeaderRowDef, selectors: [["", "matHeaderRowDef", ""]], inputs: { columns: ["matHeaderRowDef", "columns"], sticky: ["matHeaderRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"], useExisting: MatHeaderRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatHeaderRowDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRowDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matHeaderRowDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"], useExisting: MatHeaderRowDef }],
                inputs: ['columns: matHeaderRowDef', 'sticky: matHeaderRowDefSticky']
            }]
    }], null, null); })();
/**
 * Footer row definition for the mat-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
class MatFooterRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"] {
}
MatFooterRowDef.ɵfac = function MatFooterRowDef_Factory(t) { return ɵMatFooterRowDef_BaseFactory(t || MatFooterRowDef); };
MatFooterRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatFooterRowDef, selectors: [["", "matFooterRowDef", ""]], inputs: { columns: ["matFooterRowDef", "columns"], sticky: ["matFooterRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"], useExisting: MatFooterRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatFooterRowDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRowDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matFooterRowDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRowDef"], useExisting: MatFooterRowDef }],
                inputs: ['columns: matFooterRowDef', 'sticky: matFooterRowDefSticky']
            }]
    }], null, null); })();
/**
 * Data row definition for the mat-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
class MatRowDef extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"] {
}
MatRowDef.ɵfac = function MatRowDef_Factory(t) { return ɵMatRowDef_BaseFactory(t || MatRowDef); };
MatRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatRowDef, selectors: [["", "matRowDef", ""]], inputs: { columns: ["matRowDefColumns", "columns"], when: ["matRowDefWhen", "when"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"], useExisting: MatRowDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatRowDef_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRowDef);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matRowDef]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"], useExisting: MatRowDef }],
                inputs: ['columns: matRowDefColumns', 'when: matRowDefWhen']
            }]
    }], null, null); })();
/** Header template container that contains the cell outlet. Adds the right class and role. */
class MatHeaderRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"] {
}
MatHeaderRow.ɵfac = function MatHeaderRow_Factory(t) { return ɵMatHeaderRow_BaseFactory(t || MatHeaderRow); };
MatHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatHeaderRow, selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]], hostAttrs: ["role", "row", 1, "mat-header-row"], exportAs: ["matHeaderRow"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"], useExisting: MatHeaderRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatHeaderRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], encapsulation: 2 });
const ɵMatHeaderRow_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatHeaderRow);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatHeaderRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-header-row, tr[mat-header-row]',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
                host: {
                    'class': 'mat-header-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                exportAs: 'matHeaderRow',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"], useExisting: MatHeaderRow }]
            }]
    }], null, null); })();
/** Footer template container that contains the cell outlet. Adds the right class and role. */
class MatFooterRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"] {
}
MatFooterRow.ɵfac = function MatFooterRow_Factory(t) { return ɵMatFooterRow_BaseFactory(t || MatFooterRow); };
MatFooterRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatFooterRow, selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]], hostAttrs: ["role", "row", 1, "mat-footer-row"], exportAs: ["matFooterRow"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"], useExisting: MatFooterRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatFooterRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], encapsulation: 2 });
const ɵMatFooterRow_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatFooterRow);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatFooterRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-footer-row, tr[mat-footer-row]',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
                host: {
                    'class': 'mat-footer-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                exportAs: 'matFooterRow',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkFooterRow"], useExisting: MatFooterRow }]
            }]
    }], null, null); })();
/** Data row template container that contains the cell outlet. Adds the right class and role. */
class MatRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"] {
}
MatRow.ɵfac = function MatRow_Factory(t) { return ɵMatRow_BaseFactory(t || MatRow); };
MatRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatRow, selectors: [["mat-row"], ["tr", "mat-row", ""]], hostAttrs: ["role", "row", 1, "mat-row"], exportAs: ["matRow"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"], useExisting: MatRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function MatRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellOutlet"]], encapsulation: 2 });
const ɵMatRow_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatRow);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-row, tr[mat-row]',
                template: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CDK_ROW_TEMPLATE"],
                host: {
                    'class': 'mat-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                exportAs: 'matRow',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"], useExisting: MatRow }]
            }]
    }], null, null); })();
/** Row that can be used to display a message when no data is shown in the table. */
class MatNoDataRow extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"] {
}
MatNoDataRow.ɵfac = function MatNoDataRow_Factory(t) { return ɵMatNoDataRow_BaseFactory(t || MatNoDataRow); };
MatNoDataRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatNoDataRow, selectors: [["ng-template", "matNoDataRow", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"], useExisting: MatNoDataRow }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
const ɵMatNoDataRow_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatNoDataRow);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatNoDataRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'ng-template[matNoDataRow]',
                providers: [{ provide: _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkNoDataRow"], useExisting: MatNoDataRow }]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */
class MatTextColumn extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTextColumn"] {
}
MatTextColumn.ɵfac = function MatTextColumn_Factory(t) { return ɵMatTextColumn_BaseFactory(t || MatTextColumn); };
MatTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatTextColumn, selectors: [["mat-text-column"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 0, consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]], template: function MatTextColumn_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatTextColumn_th_1_Template, 2, 3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } }, directives: [MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderCell, MatCell], encapsulation: 2 });
const ɵMatTextColumn_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatTextColumn);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTextColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-text-column',
                template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                // Change detection is intentionally not set to OnPush. This component's template will be provided
                // to the table to be inserted into its view. This is problematic when change detection runs since
                // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                // mean's the template in the table's view will not have the updated value (and in fact will cause
                // an ExpressionChangedAfterItHasBeenCheckedError).
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const EXPORTED_DECLARATIONS = [
    // Table
    MatTable,
    // Template defs
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatColumnDef,
    MatCellDef,
    MatRowDef,
    MatFooterCellDef,
    MatFooterRowDef,
    // Cell directives
    MatHeaderCell,
    MatCell,
    MatFooterCell,
    // Row directives
    MatHeaderRow,
    MatRow,
    MatFooterRow,
    MatNoDataRow,
    MatTextColumn,
];
class MatTableModule {
}
MatTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatTableModule });
MatTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatTableModule_Factory(t) { return new (t || MatTableModule)(); }, imports: [[
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatTableModule, { declarations: function () { return [MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn]; }, imports: function () { return [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]; }, exports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatFooterCellDef, MatFooterRowDef, MatHeaderCell, MatCell, MatFooterCell, MatHeaderRow, MatRow, MatFooterRow, MatNoDataRow, MatTextColumn]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                ],
                exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], EXPORTED_DECLARATIONS],
                declarations: EXPORTED_DECLARATIONS
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Corresponds to `Number.MAX_SAFE_INTEGER`. Moved out into a variable here due to
 * flaky browser support and the value not being defined in Closure's typings.
 */
const MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Data source that accepts a client-side data array and includes native support of filtering,
 * sorting (using MatSort), and pagination (using MatPaginator).
 *
 * Allows for sort customization by overriding sortingDataAccessor, which defines how data
 * properties are accessed. Also allows for filter customization by overriding filterTermAccessor,
 * which defines how row data is converted to a string for filter matching.
 *
 * **Note:** This class is meant to be a simple data source to help you get started. As such
 * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
 * interactions. If your app needs to support more advanced use cases, consider implementing your
 * own `DataSource`.
 */
class MatTableDataSource extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["DataSource"] {
    constructor(initialData = []) {
        super();
        /** Stream emitting render data to the table (depends on ordered data changes). */
        this._renderData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        /** Stream that emits when a new filter string is set on the data source. */
        this._filter = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        /** Used to react to internal changes of the paginator that are made by the data source itself. */
        this._internalPageChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Subscription to the changes that should trigger an update to the table's rendered rows, such
         * as filtering, sorting, pagination, or base data changes.
         */
        this._renderChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Data accessor function that is used for accessing data properties for sorting through
         * the default sortData function.
         * This default function assumes that the sort header IDs (which defaults to the column name)
         * matches the data's properties (e.g. column Xyz represents data['Xyz']).
         * May be set to a custom function for different behavior.
         * @param data Data object that is being accessed.
         * @param sortHeaderId The name of the column that represents the data.
         */
        this.sortingDataAccessor = (data, sortHeaderId) => {
            const value = data[sortHeaderId];
            if (Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["_isNumberValue"])(value)) {
                const numberValue = Number(value);
                // Numbers beyond `MAX_SAFE_INTEGER` can't be compared reliably so we
                // leave them as strings. For more info: https://goo.gl/y5vbSg
                return numberValue < MAX_SAFE_INTEGER ? numberValue : value;
            }
            return value;
        };
        /**
         * Gets a sorted copy of the data array based on the state of the MatSort. Called
         * after changes are made to the filtered data or when sort changes are emitted from MatSort.
         * By default, the function retrieves the active sort and its direction and compares data
         * by retrieving data using the sortingDataAccessor. May be overridden for a custom implementation
         * of data ordering.
         * @param data The array of data that should be sorted.
         * @param sort The connected MatSort that holds the current sort state.
         */
        this.sortData = (data, sort) => {
            const active = sort.active;
            const direction = sort.direction;
            if (!active || direction == '') {
                return data;
            }
            return data.sort((a, b) => {
                let valueA = this.sortingDataAccessor(a, active);
                let valueB = this.sortingDataAccessor(b, active);
                // If there are data in the column that can be converted to a number,
                // it must be ensured that the rest of the data
                // is of the same type so as not to order incorrectly.
                const valueAType = typeof valueA;
                const valueBType = typeof valueB;
                if (valueAType !== valueBType) {
                    if (valueAType === 'number') {
                        valueA += '';
                    }
                    if (valueBType === 'number') {
                        valueB += '';
                    }
                }
                // If both valueA and valueB exist (truthy), then compare the two. Otherwise, check if
                // one value exists while the other doesn't. In this case, existing value should come last.
                // This avoids inconsistent results when comparing values to undefined/null.
                // If neither value exists, return 0 (equal).
                let comparatorResult = 0;
                if (valueA != null && valueB != null) {
                    // Check if one value is greater than the other; if equal, comparatorResult should remain 0.
                    if (valueA > valueB) {
                        comparatorResult = 1;
                    }
                    else if (valueA < valueB) {
                        comparatorResult = -1;
                    }
                }
                else if (valueA != null) {
                    comparatorResult = 1;
                }
                else if (valueB != null) {
                    comparatorResult = -1;
                }
                return comparatorResult * (direction == 'asc' ? 1 : -1);
            });
        };
        /**
         * Checks if a data object matches the data source's filter string. By default, each data object
         * is converted to a string of its properties and returns true if the filter has
         * at least one occurrence in that string. By default, the filter string has its whitespace
         * trimmed and the match is case-insensitive. May be overridden for a custom implementation of
         * filter matching.
         * @param data Data object used to check against the filter.
         * @param filter Filter string that has been set on the data source.
         * @returns Whether the filter matches against the data
         */
        this.filterPredicate = (data, filter) => {
            // Transform the data into a lowercase string of all property values.
            const dataStr = Object.keys(data).reduce((currentTerm, key) => {
                // Use an obscure Unicode character to delimit the words in the concatenated string.
                // This avoids matches where the values of two columns combined will match the user's query
                // (e.g. `Flute` and `Stop` will match `Test`). The character is intended to be something
                // that has a very low chance of being typed in by somebody in a text field. This one in
                // particular is "White up-pointing triangle with dot" from
                // https://en.wikipedia.org/wiki/List_of_Unicode_characters
                return currentTerm + data[key] + '◬';
            }, '').toLowerCase();
            // Transform the filter by converting it to lowercase and removing whitespace.
            const transformedFilter = filter.trim().toLowerCase();
            return dataStr.indexOf(transformedFilter) != -1;
        };
        this._data = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](initialData);
        this._updateChangeSubscription();
    }
    /** Array of data that should be rendered by the table, where each object represents one row. */
    get data() { return this._data.value; }
    set data(data) { this._data.next(data); }
    /**
     * Filter term that should be used to filter out objects from the data array. To override how
     * data objects match to this filter string, provide a custom function for filterPredicate.
     */
    get filter() { return this._filter.value; }
    set filter(filter) { this._filter.next(filter); }
    /**
     * Instance of the MatSort directive used by the table to control its sorting. Sort changes
     * emitted by the MatSort will trigger an update to the table's rendered data.
     */
    get sort() { return this._sort; }
    set sort(sort) {
        this._sort = sort;
        this._updateChangeSubscription();
    }
    /**
     * Instance of the MatPaginator component used by the table to control what page of the data is
     * displayed. Page changes emitted by the MatPaginator will trigger an update to the
     * table's rendered data.
     *
     * Note that the data source uses the paginator's properties to calculate which page of data
     * should be displayed. If the paginator receives its properties as template inputs,
     * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
     * initialized before assigning it to this data source.
     */
    get paginator() { return this._paginator; }
    set paginator(paginator) {
        this._paginator = paginator;
        this._updateChangeSubscription();
    }
    /**
     * Subscribe to changes that should trigger an update to the table's rendered rows. When the
     * changes occur, process the current state of the filter, sort, and pagination along with
     * the provided base data and send it to the table for rendering.
     */
    _updateChangeSubscription() {
        // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
        // The events should emit whenever the component emits a change or initializes, or if no
        // component is provided, a stream with just a null event should be provided.
        // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
        // pipeline can progress to the next step. Note that the value from these streams are not used,
        // they purely act as a signal to progress in the pipeline.
        const sortChange = this._sort ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._sort.sortChange, this._sort.initialized) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        const pageChange = this._paginator ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._paginator.page, this._internalPageChanges, this._paginator.initialized) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        const dataStream = this._data;
        // Watch for base data or filter changes to provide a filtered set of data.
        const filteredData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([dataStream, this._filter])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([data]) => this._filterData(data)));
        // Watch for filtered data or sort changes to provide an ordered set of data.
        const orderedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([filteredData, sortChange])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([data]) => this._orderData(data)));
        // Watch for ordered data or page changes to provide a paged set of data.
        const paginatedData = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([orderedData, pageChange])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([data]) => this._pageData(data)));
        // Watched for paged data changes and send the result to the table to render.
        this._renderChangesSubscription.unsubscribe();
        this._renderChangesSubscription = paginatedData.subscribe(data => this._renderData.next(data));
    }
    /**
     * Returns a filtered data array where each filter object contains the filter string within
     * the result of the filterTermAccessor function. If no filter is set, returns the data array
     * as provided.
     */
    _filterData(data) {
        // If there is a filter string, filter out data that does not contain it.
        // Each data object is converted to a string using the function defined by filterTermAccessor.
        // May be overridden for customization.
        this.filteredData =
            !this.filter ? data : data.filter(obj => this.filterPredicate(obj, this.filter));
        if (this.paginator) {
            this._updatePaginator(this.filteredData.length);
        }
        return this.filteredData;
    }
    /**
     * Returns a sorted copy of the data if MatSort has a sort applied, otherwise just returns the
     * data array as provided. Uses the default data accessor for data lookup, unless a
     * sortDataAccessor function is defined.
     */
    _orderData(data) {
        // If there is no active sort or direction, return the data without trying to sort.
        if (!this.sort) {
            return data;
        }
        return this.sortData(data.slice(), this.sort);
    }
    /**
     * Returns a paged slice of the provided data array according to the provided MatPaginator's page
     * index and length. If there is no paginator provided, returns the data array as provided.
     */
    _pageData(data) {
        if (!this.paginator) {
            return data;
        }
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.slice(startIndex, startIndex + this.paginator.pageSize);
    }
    /**
     * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
     * index does not exceed the paginator's last page. Values are changed in a resolved promise to
     * guard against making property changes within a round of change detection.
     */
    _updatePaginator(filteredDataLength) {
        Promise.resolve().then(() => {
            const paginator = this.paginator;
            if (!paginator) {
                return;
            }
            paginator.length = filteredDataLength;
            // If the page index is set beyond the page, reduce it to the last page.
            if (paginator.pageIndex > 0) {
                const lastPageIndex = Math.ceil(paginator.length / paginator.pageSize) - 1 || 0;
                const newPageIndex = Math.min(paginator.pageIndex, lastPageIndex);
                if (newPageIndex !== paginator.pageIndex) {
                    paginator.pageIndex = newPageIndex;
                    // Since the paginator only emits after user-generated changes,
                    // we need our own stream so we know to should re-render the data.
                    this._internalPageChanges.next();
                }
            }
        });
    }
    /**
     * Used by the MatTable. Called when it connects to the data source.
     * @docs-private
     */
    connect() { return this._renderData; }
    /**
     * Used by the MatTable. Called when it is destroyed. No-op.
     * @docs-private
     */
    disconnect() { }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=table.js.map

/***/ }),

/***/ "dts7":
/*!************************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-messages.js ***!
  \************************************************************************/
/*! exports provided: Messages, MessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesModule", function() { return MessagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ "Q4Mo");











function Messages_ng_container_1_div_1_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 11);
} if (rf & 2) {
    const msg_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", msg_r4.summary, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function Messages_ng_container_1_div_1_ng_container_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
} if (rf & 2) {
    const msg_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", msg_r4.detail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function Messages_ng_container_1_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Messages_ng_container_1_div_1_ng_container_3_span_1_Template, 1, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Messages_ng_container_1_div_1_ng_container_3_span_2_Template, 1, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const msg_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r4.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r4.detail);
} }
function Messages_ng_container_1_div_1_ng_template_4_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r4.summary);
} }
function Messages_ng_container_1_div_1_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](msg_r4.detail);
} }
function Messages_ng_container_1_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Messages_ng_container_1_div_1_ng_template_4_span_0_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Messages_ng_container_1_div_1_ng_template_4_span_1_Template, 2, 1, "span", 14);
} if (rf & 2) {
    const msg_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r4.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", msg_r4.detail);
} }
function Messages_ng_container_1_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Messages_ng_container_1_div_1_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.removeMessage(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
const _c1 = function (a1) { return { value: "visible", params: a1 }; };
const _c2 = function (a0, a1, a2, a3) { return { "pi-info-circle": a0, "pi-check": a1, "pi-exclamation-triangle": a2, "pi-times-circle": a3 }; };
function Messages_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Messages_ng_container_1_div_1_ng_container_3_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Messages_ng_container_1_div_1_ng_template_4_Template, 2, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Messages_ng_container_1_div_1_button_6_Template, 2, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r4 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-message p-message-" + msg_r4.severity)("@messageAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx_r3.showTransitionOptions, ctx_r3.hideTransitionOptions)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](11, _c2, msg_r4.severity === "info", msg_r4.severity === "success", msg_r4.severity === "warn", msg_r4.severity === "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.escape)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.closable);
} }
function Messages_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Messages_ng_container_1_div_1_Template, 7, 16, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.value);
} }
function Messages_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function Messages_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Messages_ng_template_2_ng_container_2_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-message p-message-" + ctx_r2.severity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.contentTemplate);
} }
class Messages {
    constructor(messageService, el, cd) {
        this.messageService = messageService;
        this.el = el;
        this.cd = cd;
        this.closable = true;
        this.enableService = true;
        this.escape = true;
        this.showTransitionOptions = '300ms ease-out';
        this.hideTransitionOptions = '200ms cubic-bezier(0.86, 0, 0.07, 1)';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
        if (this.messageService && this.enableService && !this.contentTemplate) {
            this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
                if (messages) {
                    if (messages instanceof Array) {
                        let filteredMessages = messages.filter(m => this.key === m.key);
                        this.value = this.value ? [...this.value, ...filteredMessages] : [...filteredMessages];
                    }
                    else if (this.key === messages.key) {
                        this.value = this.value ? [...this.value, ...[messages]] : [messages];
                    }
                    this.cd.markForCheck();
                }
            });
            this.clearSubscription = this.messageService.clearObserver.subscribe(key => {
                if (key) {
                    if (this.key === key) {
                        this.value = null;
                    }
                }
                else {
                    this.value = null;
                }
                this.cd.markForCheck();
            });
        }
    }
    hasMessages() {
        let parentEl = this.el.nativeElement.parentElement;
        if (parentEl && parentEl.offsetParent) {
            return this.contentTemplate != null || this.value && this.value.length > 0;
        }
        return false;
    }
    clear() {
        this.value = [];
        this.valueChange.emit(this.value);
    }
    removeMessage(i) {
        this.value = this.value.filter((msg, index) => index !== i);
    }
    get icon() {
        const severity = this.severity || (this.hasMessages() ? this.value[0].severity : null);
        if (this.hasMessages()) {
            switch (severity) {
                case 'success':
                    return 'pi-check';
                    break;
                case 'info':
                    return 'pi-info-circle';
                    break;
                case 'error':
                    return 'pi-times';
                    break;
                case 'warn':
                    return 'pi-exclamation-triangle';
                    break;
                default:
                    return 'pi-info-circle';
                    break;
            }
        }
        return null;
    }
    ngOnDestroy() {
        if (this.messageSubscription) {
            this.messageSubscription.unsubscribe();
        }
        if (this.clearSubscription) {
            this.clearSubscription.unsubscribe();
        }
    }
}
Messages.ɵfac = function Messages_Factory(t) { return new (t || Messages)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
Messages.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Messages, selectors: [["p-messages"]], contentQueries: function Messages_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    } }, inputs: { closable: "closable", enableService: "enableService", escape: "escape", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", value: "value", style: "style", styleClass: "styleClass", key: "key", severity: "severity" }, outputs: { valueChange: "valueChange" }, decls: 4, vars: 5, consts: [["role", "alert", 1, "p-messages", "p-component", 3, "ngStyle"], [4, "ngIf", "ngIfElse"], ["staticMessage", ""], ["role", "alert", 3, "ngClass", 4, "ngFor", "ngForOf"], ["role", "alert", 3, "ngClass"], [1, "p-message-wrapper"], [1, "p-message-icon", "pi", 3, "ngClass"], ["escapeOut", ""], ["class", "p-message-close p-link", "type", "button", "pRipple", "", 3, "click", 4, "ngIf"], ["class", "p-message-summary", 3, "innerHTML", 4, "ngIf"], ["class", "p-message-detail", 3, "innerHTML", 4, "ngIf"], [1, "p-message-summary", 3, "innerHTML"], [1, "p-message-detail", 3, "innerHTML"], ["class", "p-message-summary", 4, "ngIf"], ["class", "p-message-detail", 4, "ngIf"], [1, "p-message-summary"], [1, "p-message-detail"], ["type", "button", "pRipple", "", 1, "p-message-close", "p-link", 3, "click"], [1, "p-message-close-icon", "pi", "pi-times"], [4, "ngTemplateOutlet"]], template: function Messages_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Messages_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Messages_ng_template_2_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.contentTemplate)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], primeng_ripple__WEBPACK_IMPORTED_MODULE_4__["Ripple"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], styles: [".p-message-close,.p-message-wrapper{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-message-close{-ms-flex-pack:center;justify-content:center}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}"], encapsulation: 2, data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('messageAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-25%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{showTransitionParams}}')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{hideTransitionParams}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: 0, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, overflow: 'hidden', opacity: 0 }))
                ])
            ])
        ] }, changeDetection: 0 });
Messages.ctorParameters = () => [
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
Messages.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    closable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    styleClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    enableService: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    severity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showTransitionOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hideTransitionOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"],] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Messages, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'p-messages',
                template: `
        <div class="p-messages p-component" role="alert" [ngStyle]="style" [class]="styleClass">
            <ng-container *ngIf="!contentTemplate; else staticMessage">
                <div *ngFor="let msg of value; let i=index" [ngClass]="'p-message p-message-' + msg.severity" role="alert" 
                    [@messageAnimation]="{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}">
                    <div class="p-message-wrapper">
                        <span class="p-message-icon pi" [ngClass]="{'pi-info-circle': msg.severity === 'info', 
                            'pi-check': msg.severity === 'success',
                            'pi-exclamation-triangle': msg.severity === 'warn',
                            'pi-times-circle': msg.severity === 'error'}"></span>
                        <ng-container *ngIf="!escape; else escapeOut">
                            <span *ngIf="msg.summary" class="p-message-summary" [innerHTML]="msg.summary"></span>
                            <span *ngIf="msg.detail" class="p-message-detail" [innerHTML]="msg.detail"></span>
                        </ng-container>
                        <ng-template #escapeOut>
                            <span *ngIf="msg.summary" class="p-message-summary">{{msg.summary}}</span>
                            <span *ngIf="msg.detail" class="p-message-detail">{{msg.detail}}</span>
                        </ng-template>
                        <button class="p-message-close p-link" (click)="removeMessage(i)" *ngIf="closable" type="button" pRipple>
                            <i class="p-message-close-icon pi pi-times"></i>
                        </button>
                    </div>
                </div>
            </ng-container>
            <ng-template #staticMessage>
                <div [ngClass]="'p-message p-message-' + severity" role="alert">
                    <div class="p-message-wrapper">
                        <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                    </div>
                </div>
            </ng-template>
            </div>
    `,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('messageAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-25%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{showTransitionParams}}')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{hideTransitionParams}}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: 0, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, overflow: 'hidden', opacity: 0 }))
                        ])
                    ])
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".p-message-close,.p-message-wrapper{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.p-message-close{-ms-flex-pack:center;justify-content:center}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}"]
            }]
    }], function () { return [{ type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { closable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], enableService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showTransitionOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideTransitionOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], styleClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], severity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"]]
        }] }); })();
class MessagesModule {
}
MessagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MessagesModule });
MessagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MessagesModule_Factory(t) { return new (t || MessagesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_4__["RippleModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MessagesModule, { declarations: function () { return [Messages]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_4__["RippleModule"]]; }, exports: function () { return [Messages]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_4__["RippleModule"]],
                exports: [Messages],
                declarations: [Messages]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=primeng-messages.js.map

/***/ }),

/***/ "f6nW":
/*!******************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js ***!
  \******************************************************************/
/*! exports provided: DataSource, BaseCdkCell, BaseRowDef, CDK_ROW_TEMPLATE, CDK_TABLE, CDK_TABLE_TEMPLATE, CdkCell, CdkCellDef, CdkCellOutlet, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkFooterRow, CdkFooterRowDef, CdkHeaderCell, CdkHeaderCellDef, CdkHeaderRow, CdkHeaderRowDef, CdkNoDataRow, CdkRow, CdkRowDef, CdkTable, CdkTableModule, CdkTextColumn, DataRowOutlet, FooterRowOutlet, HeaderRowOutlet, NoDataRowOutlet, STICKY_DIRECTIONS, StickyStyler, TEXT_COLUMN_OPTIONS, _COALESCED_STYLE_SCHEDULER, _CoalescedStyleScheduler, _Schedule, mixinHasStickyInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCdkCell", function() { return BaseCdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRowDef", function() { return BaseRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_ROW_TEMPLATE", function() { return CDK_ROW_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE", function() { return CDK_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_TABLE_TEMPLATE", function() { return CDK_TABLE_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCell", function() { return CdkCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellDef", function() { return CdkCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkCellOutlet", function() { return CdkCellOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkColumnDef", function() { return CdkColumnDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCell", function() { return CdkFooterCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterCellDef", function() { return CdkFooterCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRow", function() { return CdkFooterRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFooterRowDef", function() { return CdkFooterRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCell", function() { return CdkHeaderCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderCellDef", function() { return CdkHeaderCellDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRow", function() { return CdkHeaderRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkHeaderRowDef", function() { return CdkHeaderRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkNoDataRow", function() { return CdkNoDataRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRow", function() { return CdkRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkRowDef", function() { return CdkRowDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTable", function() { return CdkTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTableModule", function() { return CdkTableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTextColumn", function() { return CdkTextColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRowOutlet", function() { return DataRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterRowOutlet", function() { return FooterRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderRowOutlet", function() { return HeaderRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoDataRowOutlet", function() { return NoDataRowOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STICKY_DIRECTIONS", function() { return STICKY_DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyStyler", function() { return StickyStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_COLUMN_OPTIONS", function() { return TEXT_COLUMN_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_COALESCED_STYLE_SCHEDULER", function() { return _COALESCED_STYLE_SCHEDULER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CoalescedStyleScheduler", function() { return _CoalescedStyleScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Schedule", function() { return _Schedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinHasStickyInput", function() { return mixinHasStickyInput; });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");







const _c0 = [[["caption"]], [["colgroup"], ["col"]]];
const _c1 = ["caption", "colgroup, col"];
function CdkTextColumn_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r0.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.headerText, " ");
} }
function CdkTextColumn_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("text-align", ctx_r1.justify);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.dataAccessor(data_r2, ctx_r1.name), " ");
} }








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Mixin to provide a directive with a function that checks if the sticky input has been
 * changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * @docs-private
 */
function mixinHasStickyInput(base) {
    return class extends base {
        constructor(...args) {
            super(...args);
            this._sticky = false;
            /** Whether the sticky input has changed since it was last checked. */
            this._hasStickyChanged = false;
        }
        /** Whether sticky positioning should be applied. */
        get sticky() { return this._sticky; }
        set sticky(v) {
            const prevValue = this._sticky;
            this._sticky = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
            this._hasStickyChanged = prevValue !== this._sticky;
        }
        /** Whether the sticky value has changed since this was last called. */
        hasStickyChanged() {
            const hasStickyChanged = this._hasStickyChanged;
            this._hasStickyChanged = false;
            return hasStickyChanged;
        }
        /** Resets the dirty check for cases where the sticky state has been used without checking. */
        resetStickyChanged() {
            this._hasStickyChanged = false;
        }
    };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used to provide a table to some of the sub-components without causing a circular dependency.
 * @docs-private
 */
const CDK_TABLE = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_TABLE');
/** Injection token that can be used to specify the text column options. */
const TEXT_COLUMN_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('text-column-options');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
class CdkCellDef {
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkCellDef.ɵfac = function CdkCellDef_Factory(t) { return new (t || CdkCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
CdkCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCellDef, selectors: [["", "cdkCellDef", ""]] });
CdkCellDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkCellDef]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
class CdkHeaderCellDef {
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) { return new (t || CdkHeaderCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
CdkHeaderCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderCellDef, selectors: [["", "cdkHeaderCellDef", ""]] });
CdkHeaderCellDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkHeaderCellDef]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
class CdkFooterCellDef {
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) { return new (t || CdkFooterCellDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
CdkFooterCellDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterCellDef, selectors: [["", "cdkFooterCellDef", ""]] });
CdkFooterCellDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterCellDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkFooterCellDef]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();
// Boilerplate for applying mixins to CdkColumnDef.
/** @docs-private */
class CdkColumnDefBase {
}
const _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
class CdkColumnDef extends _CdkColumnDefBase {
    constructor(_table) {
        super();
        this._table = _table;
        this._stickyEnd = false;
    }
    /** Unique name for this column. */
    get name() { return this._name; }
    set name(name) { this._setNameInput(name); }
    /**
     * Whether this column should be sticky positioned on the end of the row. Should make sure
     * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
     * has been changed.
     */
    get stickyEnd() {
        return this._stickyEnd;
    }
    set stickyEnd(v) {
        const prevValue = this._stickyEnd;
        this._stickyEnd = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
        this._hasStickyChanged = prevValue !== this._stickyEnd;
    }
    /**
     * Overridable method that sets the css classes that will be added to every cell in this
     * column.
     * In the future, columnCssClassName will change from type string[] to string and this
     * will set a single string value.
     * @docs-private
     */
    _updateColumnCssClassName() {
        this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
    }
    /**
     * This has been extracted to a util because of TS 4 and VE.
     * View Engine doesn't support property rename inheritance.
     * TS 4.0 doesn't allow properties to override accessors or vice-versa.
     * @docs-private
     */
    _setNameInput(value) {
        // If the directive is set without a name (updated programatically), then this setter will
        // trigger with an empty string and should not overwrite the programatically set value.
        if (value) {
            this._name = value;
            this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/ig, '-');
            this._updateColumnCssClassName();
        }
    }
}
CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) { return new (t || CdkColumnDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
CdkColumnDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkColumnDef, selectors: [["", "cdkColumnDef", ""]], contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkCellDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderCellDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterCellDef, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.footerCell = _t.first);
    } }, inputs: { sticky: "sticky", name: ["cdkColumnDef", "name"], stickyEnd: "stickyEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
CdkColumnDef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
CdkColumnDef.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkColumnDef',] }],
    stickyEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['stickyEnd',] }],
    cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkCellDef,] }],
    headerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkHeaderCellDef,] }],
    footerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkFooterCellDef,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkColumnDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkColumnDef]',
                inputs: ['sticky'],
                providers: [{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [CDK_TABLE]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['cdkColumnDef']
        }], stickyEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['stickyEnd']
        }], cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkCellDef]
        }], headerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkHeaderCellDef]
        }], footerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkFooterCellDef]
        }] }); })();
/** Base class for the cells. Adds a CSS classname that identifies the column it renders in. */
class BaseCdkCell {
    constructor(columnDef, elementRef) {
        // If IE 11 is dropped before we switch to setting a single class name, change to multi param
        // with destructuring.
        const classList = elementRef.nativeElement.classList;
        for (const className of columnDef._columnCssClassName) {
            classList.add(className);
        }
    }
}
/** Header cell template container that adds the right classes and role. */
class CdkHeaderCell extends BaseCdkCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) { return new (t || CdkHeaderCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
CdkHeaderCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderCell, selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
CdkHeaderCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'cdk-header-cell, th[cdk-header-cell]',
                host: {
                    'class': 'cdk-header-cell',
                    'role': 'columnheader'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/** Footer cell template container that adds the right classes and role. */
class CdkFooterCell extends BaseCdkCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) { return new (t || CdkFooterCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
CdkFooterCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterCell, selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-footer-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
CdkFooterCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'cdk-footer-cell, td[cdk-footer-cell]',
                host: {
                    'class': 'cdk-footer-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/** Cell template container that adds the right classes and role. */
class CdkCell extends BaseCdkCell {
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkCell.ɵfac = function CdkCell_Factory(t) { return new (t || CdkCell)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkColumnDef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
CdkCell.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCell, selectors: [["cdk-cell"], ["td", "cdk-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-cell"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
CdkCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCell, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'cdk-cell, td[cdk-cell]',
                host: {
                    'class': 'cdk-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @docs-private
 */
class _Schedule {
    constructor() {
        this.tasks = [];
        this.endTasks = [];
    }
}
/** Injection token used to provide a coalesced style scheduler. */
const _COALESCED_STYLE_SCHEDULER = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('_COALESCED_STYLE_SCHEDULER');
/**
 * Allows grouping up CSSDom mutations after the current execution context.
 * This can significantly improve performance when separate consecutive functions are
 * reading from the CSSDom and then mutating it.
 *
 * @docs-private
 */
class _CoalescedStyleScheduler {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        this._currentSchedule = null;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    /**
     * Schedules the specified task to run at the end of the current VM turn.
     */
    schedule(task) {
        this._createScheduleIfNeeded();
        this._currentSchedule.tasks.push(task);
    }
    /**
     * Schedules the specified task to run after other scheduled tasks at the end of the current
     * VM turn.
     */
    scheduleEnd(task) {
        this._createScheduleIfNeeded();
        this._currentSchedule.endTasks.push(task);
    }
    /** Prevent any further tasks from running. */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    _createScheduleIfNeeded() {
        if (this._currentSchedule) {
            return;
        }
        this._currentSchedule = new _Schedule();
        this._getScheduleObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(() => {
            while (this._currentSchedule.tasks.length || this._currentSchedule.endTasks.length) {
                const schedule = this._currentSchedule;
                // Capture new tasks scheduled by the current set of tasks.
                this._currentSchedule = new _Schedule();
                for (const task of schedule.tasks) {
                    task();
                }
                for (const task of schedule.endTasks) {
                    task();
                }
            }
            this._currentSchedule = null;
        });
    }
    _getScheduleObservable() {
        // Use onStable when in the context of an ongoing change detection cycle so that we
        // do not accidentally trigger additional cycles.
        return this._ngZone.isStable ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(Promise.resolve(undefined)) :
            this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1));
    }
}
_CoalescedStyleScheduler.ɵfac = function _CoalescedStyleScheduler_Factory(t) { return new (t || _CoalescedStyleScheduler)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
_CoalescedStyleScheduler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: _CoalescedStyleScheduler, factory: _CoalescedStyleScheduler.ɵfac });
_CoalescedStyleScheduler.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_CoalescedStyleScheduler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 */
const CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 */
class BaseRowDef {
    constructor(
    /** @docs-private */ template, _differs) {
        this.template = template;
        this._differs = _differs;
    }
    ngOnChanges(changes) {
        // Create a new columns differ if one does not yet exist. Initialize it based on initial value
        // of the columns property or an empty array if none is provided.
        if (!this._columnsDiffer) {
            const columns = (changes['columns'] && changes['columns'].currentValue) || [];
            this._columnsDiffer = this._differs.find(columns).create();
            this._columnsDiffer.diff(columns);
        }
    }
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     */
    getColumnsDiff() {
        return this._columnsDiffer.diff(this.columns);
    }
    /** Gets this row def's relevant cell template from the provided column def. */
    extractCellTemplate(column) {
        if (this instanceof CdkHeaderRowDef) {
            return column.headerCell.template;
        }
        if (this instanceof CdkFooterRowDef) {
            return column.footerCell.template;
        }
        else {
            return column.cell.template;
        }
    }
}
BaseRowDef.ɵfac = function BaseRowDef_Factory(t) { return new (t || BaseRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"])); };
BaseRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: BaseRowDef, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
BaseRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BaseRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }]; }, null); })();
// Boilerplate for applying mixins to CdkHeaderRowDef.
/** @docs-private */
class CdkHeaderRowDefBase extends BaseRowDef {
}
const _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
class CdkHeaderRowDef extends _CdkHeaderRowDefBase {
    constructor(template, _differs, _table) {
        super(template, _differs);
        this._table = _table;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) { return new (t || CdkHeaderRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
CdkHeaderRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkHeaderRowDef, selectors: [["", "cdkHeaderRowDef", ""]], inputs: { columns: ["cdkHeaderRowDef", "columns"], sticky: ["cdkHeaderRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
CdkHeaderRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkHeaderRowDef]',
                inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [CDK_TABLE]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, null); })();
// Boilerplate for applying mixins to CdkFooterRowDef.
/** @docs-private */
class CdkFooterRowDefBase extends BaseRowDef {
}
const _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
/**
 * Footer row definition for the CDK table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
class CdkFooterRowDef extends _CdkFooterRowDefBase {
    constructor(template, _differs, _table) {
        super(template, _differs);
        this._table = _table;
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) { return new (t || CdkFooterRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
CdkFooterRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkFooterRowDef, selectors: [["", "cdkFooterRowDef", ""]], inputs: { columns: ["cdkFooterRowDef", "columns"], sticky: ["cdkFooterRowDefSticky", "sticky"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
CdkFooterRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkFooterRowDef]',
                inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [CDK_TABLE]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, null); })();
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
class CdkRowDef extends BaseRowDef {
    // TODO(andrewseguin): Add an input for providing a switch function to determine
    //   if this template should be used.
    constructor(template, _differs, _table) {
        super(template, _differs);
        this._table = _table;
    }
}
CdkRowDef.ɵfac = function CdkRowDef_Factory(t) { return new (t || CdkRowDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_TABLE, 8)); };
CdkRowDef.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkRowDef, selectors: [["", "cdkRowDef", ""]], inputs: { columns: ["cdkRowDefColumns", "columns"], when: ["cdkRowDefWhen", "when"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
CdkRowDef.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_TABLE,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkRowDef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[cdkRowDef]',
                inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [CDK_TABLE]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, null); })();
/**
 * Outlet for rendering cells inside of a row or header row.
 * @docs-private
 */
class CdkCellOutlet {
    constructor(_viewContainer) {
        this._viewContainer = _viewContainer;
        CdkCellOutlet.mostRecentCellOutlet = this;
    }
    ngOnDestroy() {
        // If this was the last outlet being rendered in the view, remove the reference
        // from the static property after it has been destroyed to avoid leaking memory.
        if (CdkCellOutlet.mostRecentCellOutlet === this) {
            CdkCellOutlet.mostRecentCellOutlet = null;
        }
    }
}
CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) { return new (t || CdkCellOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"])); };
CdkCellOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkCellOutlet, selectors: [["", "cdkCellOutlet", ""]] });
/**
 * Static property containing the latest constructed instance of this class.
 * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
 * createEmbeddedView. After one of these components are created, this property will provide
 * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
 * construct the cells with the provided context.
 */
CdkCellOutlet.mostRecentCellOutlet = null;
CdkCellOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkCellOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[cdkCellOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }]; }, null); })();
/** Header template container that contains the cell outlet. Adds the right class and role. */
class CdkHeaderRow {
}
CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) { return new (t || CdkHeaderRow)(); };
CdkHeaderRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkHeaderRow, selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]], hostAttrs: ["role", "row", 1, "cdk-header-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkHeaderRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkHeaderRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-header-row, tr[cdk-header-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-header-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
            }]
    }], null, null); })();
/** Footer template container that contains the cell outlet. Adds the right class and role. */
class CdkFooterRow {
}
CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) { return new (t || CdkFooterRow)(); };
CdkFooterRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkFooterRow, selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]], hostAttrs: ["role", "row", 1, "cdk-footer-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkFooterRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkFooterRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-footer-row, tr[cdk-footer-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-footer-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
            }]
    }], null, null); })();
/** Data row template container that contains the cell outlet. Adds the right class and role. */
class CdkRow {
}
CdkRow.ɵfac = function CdkRow_Factory(t) { return new (t || CdkRow)(); };
CdkRow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkRow, selectors: [["cdk-row"], ["tr", "cdk-row", ""]], hostAttrs: ["role", "row", 1, "cdk-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkRow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-row, tr[cdk-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
            }]
    }], null, null); })();
/** Row that can be used to display a message when no data is shown in the table. */
class CdkNoDataRow {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
CdkNoDataRow.ɵfac = function CdkNoDataRow_Factory(t) { return new (t || CdkNoDataRow)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])); };
CdkNoDataRow.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: CdkNoDataRow, selectors: [["ng-template", "cdkNoDataRow", ""]] });
CdkNoDataRow.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkNoDataRow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'ng-template[cdkNoDataRow]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * List of all possible directions that can be used for sticky positioning.
 * @docs-private
 */
const STICKY_DIRECTIONS = ['top', 'bottom', 'left', 'right'];
/**
 * Applies and removes sticky positioning styles to the `CdkTable` rows and columns cells.
 * @docs-private
 */
class StickyStyler {
    /**
     * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
     *     that uses the native `<table>` element.
     * @param _stickCellCss The CSS class that will be applied to every row/cell that has
     *     sticky positioning applied.
     * @param direction The directionality context of the table (ltr/rtl); affects column positioning
     *     by reversing left/right positions.
     * @param _isBrowser Whether the table is currently being rendered on the server or the client.
     * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
     *     using inline styles. If false, it is assumed that position: sticky is included in
     *     the component stylesheet for _stickCellCss.
     */
    constructor(_isNativeHtmlTable, _stickCellCss, direction, 
    /**
     * @deprecated `_coalescedStyleScheduler` parameter to become required.
     * @breaking-change 11.0.0
     */
    _coalescedStyleScheduler, _isBrowser = true, _needsPositionStickyOnElement = true) {
        this._isNativeHtmlTable = _isNativeHtmlTable;
        this._stickCellCss = _stickCellCss;
        this.direction = direction;
        this._coalescedStyleScheduler = _coalescedStyleScheduler;
        this._isBrowser = _isBrowser;
        this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
    }
    /**
     * Clears the sticky positioning styles from the row and its cells by resetting the `position`
     * style, setting the zIndex to 0, and unsetting each provided sticky direction.
     * @param rows The list of rows that should be cleared from sticking in the provided directions
     * @param stickyDirections The directions that should no longer be set as sticky on the rows.
     */
    clearStickyPositioning(rows, stickyDirections) {
        const elementsToClear = [];
        for (const row of rows) {
            // If the row isn't an element (e.g. if it's an `ng-container`),
            // it won't have inline styles or `children` so we skip it.
            if (row.nodeType !== row.ELEMENT_NODE) {
                continue;
            }
            elementsToClear.push(row);
            for (let i = 0; i < row.children.length; i++) {
                elementsToClear.push(row.children[i]);
            }
        }
        // Coalesce with sticky row/column updates (and potentially other changes like column resize).
        this._scheduleStyleChanges(() => {
            for (const element of elementsToClear) {
                this._removeStickyStyle(element, stickyDirections);
            }
        });
    }
    /**
     * Applies sticky left and right positions to the cells of each row according to the sticky
     * states of the rendered column definitions.
     * @param rows The rows that should have its set of cells stuck according to the sticky states.
     * @param stickyStartStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the start of the row.
     * @param stickyEndStates A list of boolean states where each state represents whether the cell
     *     in this index position should be stuck to the end of the row.
     */
    updateStickyColumns(rows, stickyStartStates, stickyEndStates) {
        if (!rows.length || !this._isBrowser || !(stickyStartStates.some(state => state) ||
            stickyEndStates.some(state => state))) {
            return;
        }
        const firstRow = rows[0];
        const numCells = firstRow.children.length;
        const cellWidths = this._getCellWidths(firstRow);
        const startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
        const endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
        // Coalesce with sticky row updates (and potentially other changes like column resize).
        this._scheduleStyleChanges(() => {
            const isRtl = this.direction === 'rtl';
            const start = isRtl ? 'right' : 'left';
            const end = isRtl ? 'left' : 'right';
            for (const row of rows) {
                for (let i = 0; i < numCells; i++) {
                    const cell = row.children[i];
                    if (stickyStartStates[i]) {
                        this._addStickyStyle(cell, start, startPositions[i]);
                    }
                    if (stickyEndStates[i]) {
                        this._addStickyStyle(cell, end, endPositions[i]);
                    }
                }
            }
        });
    }
    /**
     * Applies sticky positioning to the row's cells if using the native table layout, and to the
     * row itself otherwise.
     * @param rowsToStick The list of rows that should be stuck according to their corresponding
     *     sticky state and to the provided top or bottom position.
     * @param stickyStates A list of boolean states where each state represents whether the row
     *     should be stuck in the particular top or bottom position.
     * @param position The position direction in which the row should be stuck if that row should be
     *     sticky.
     *
     */
    stickRows(rowsToStick, stickyStates, position) {
        // Since we can't measure the rows on the server, we can't stick the rows properly.
        if (!this._isBrowser) {
            return;
        }
        // If positioning the rows to the bottom, reverse their order when evaluating the sticky
        // position such that the last row stuck will be "bottom: 0px" and so on. Note that the
        // sticky states need to be reversed as well.
        const rows = position === 'bottom' ? rowsToStick.slice().reverse() : rowsToStick;
        const states = position === 'bottom' ? stickyStates.slice().reverse() : stickyStates;
        // Measure row heights all at once before adding sticky styles to reduce layout thrashing.
        const stickyHeights = [];
        const elementsToStick = [];
        for (let rowIndex = 0, stickyHeight = 0; rowIndex < rows.length; rowIndex++) {
            stickyHeights[rowIndex] = stickyHeight;
            if (!states[rowIndex]) {
                continue;
            }
            const row = rows[rowIndex];
            elementsToStick[rowIndex] = this._isNativeHtmlTable ?
                Array.from(row.children) : [row];
            if (rowIndex !== rows.length - 1) {
                stickyHeight += row.getBoundingClientRect().height;
            }
        }
        // Coalesce with other sticky row updates (top/bottom), sticky columns updates
        // (and potentially other changes like column resize).
        this._scheduleStyleChanges(() => {
            for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
                if (!states[rowIndex]) {
                    continue;
                }
                const height = stickyHeights[rowIndex];
                for (const element of elementsToStick[rowIndex]) {
                    this._addStickyStyle(element, position, height);
                }
            }
        });
    }
    /**
     * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
     * footer rows is to apply sticky styling to the tfoot container. This should only be done if
     * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
     * the tfoot element.
     */
    updateStickyFooterContainer(tableElement, stickyStates) {
        if (!this._isNativeHtmlTable) {
            return;
        }
        const tfoot = tableElement.querySelector('tfoot');
        // Coalesce with other sticky updates (and potentially other changes like column resize).
        this._scheduleStyleChanges(() => {
            if (stickyStates.some(state => !state)) {
                this._removeStickyStyle(tfoot, ['bottom']);
            }
            else {
                this._addStickyStyle(tfoot, 'bottom', 0);
            }
        });
    }
    /**
     * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
     * the zIndex, removing each of the provided sticky directions, and removing the
     * sticky position if there are no more directions.
     */
    _removeStickyStyle(element, stickyDirections) {
        for (const dir of stickyDirections) {
            element.style[dir] = '';
        }
        // If the element no longer has any more sticky directions, remove sticky positioning and
        // the sticky CSS class.
        // Short-circuit checking element.style[dir] for stickyDirections as they
        // were already removed above.
        const hasDirection = STICKY_DIRECTIONS.some(dir => stickyDirections.indexOf(dir) === -1 && element.style[dir]);
        if (hasDirection) {
            element.style.zIndex = this._getCalculatedZIndex(element);
        }
        else {
            // When not hasDirection, _getCalculatedZIndex will always return ''.
            element.style.zIndex = '';
            if (this._needsPositionStickyOnElement) {
                element.style.position = '';
            }
            element.classList.remove(this._stickCellCss);
        }
    }
    /**
     * Adds the sticky styling to the element by adding the sticky style class, changing position
     * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
     * direction and value.
     */
    _addStickyStyle(element, dir, dirValue) {
        element.classList.add(this._stickCellCss);
        element.style[dir] = `${dirValue}px`;
        element.style.zIndex = this._getCalculatedZIndex(element);
        if (this._needsPositionStickyOnElement) {
            element.style.cssText += 'position: -webkit-sticky; position: sticky; ';
        }
    }
    /**
     * Calculate what the z-index should be for the element, depending on what directions (top,
     * bottom, left, right) have been set. It should be true that elements with a top direction
     * should have the highest index since these are elements like a table header. If any of those
     * elements are also sticky in another direction, then they should appear above other elements
     * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
     * (e.g. footer rows) should then be next in the ordering such that they are below the header
     * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
     * should minimally increment so that they are above non-sticky elements but below top and bottom
     * elements.
     */
    _getCalculatedZIndex(element) {
        const zIndexIncrements = {
            top: 100,
            bottom: 10,
            left: 1,
            right: 1,
        };
        let zIndex = 0;
        // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
        // loses the array generic type in the `for of`. But we *also* have to use `Array` because
        // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
        for (const dir of STICKY_DIRECTIONS) {
            if (element.style[dir]) {
                zIndex += zIndexIncrements[dir];
            }
        }
        return zIndex ? `${zIndex}` : '';
    }
    /** Gets the widths for each cell in the provided row. */
    _getCellWidths(row) {
        const cellWidths = [];
        const firstRowCells = row.children;
        for (let i = 0; i < firstRowCells.length; i++) {
            let cell = firstRowCells[i];
            cellWidths.push(cell.getBoundingClientRect().width);
        }
        return cellWidths;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     */
    _getStickyStartColumnPositions(widths, stickyStates) {
        const positions = [];
        let nextPosition = 0;
        for (let i = 0; i < widths.length; i++) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    }
    /**
     * Determines the left and right positions of each sticky column cell, which will be the
     * accumulation of all sticky column cell widths to the left and right, respectively.
     * Non-sticky cells do not need to have a value set since their positions will not be applied.
     */
    _getStickyEndColumnPositions(widths, stickyStates) {
        const positions = [];
        let nextPosition = 0;
        for (let i = widths.length; i > 0; i--) {
            if (stickyStates[i]) {
                positions[i] = nextPosition;
                nextPosition += widths[i];
            }
        }
        return positions;
    }
    /**
     * Schedules styles to be applied when the style scheduler deems appropriate.
     * @breaking-change 11.0.0 This method can be removed in favor of calling
     * `CoalescedStyleScheduler.schedule` directly once the scheduler is a required parameter.
     */
    _scheduleStyleChanges(changes) {
        if (this._coalescedStyleScheduler) {
            this._coalescedStyleScheduler.schedule(changes);
        }
        else {
            changes();
        }
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an error to be thrown when attempting to find an unexisting column.
 * @param id Id whose lookup failed.
 * @docs-private
 */
function getTableUnknownColumnError(id) {
    return Error(`Could not find column with id "${id}".`);
}
/**
 * Returns an error to be thrown when two column definitions have the same name.
 * @docs-private
 */
function getTableDuplicateColumnNameError(name) {
    return Error(`Duplicate column definition name provided: "${name}".`);
}
/**
 * Returns an error to be thrown when there are multiple rows that are missing a when function.
 * @docs-private
 */
function getTableMultipleDefaultRowDefsError() {
    return Error(`There can only be one default row without a when predicate function.`);
}
/**
 * Returns an error to be thrown when there are no matching row defs for a particular set of data.
 * @docs-private
 */
function getTableMissingMatchingRowDefError(data) {
    return Error(`Could not find a matching row definition for the` +
        `provided row data: ${JSON.stringify(data)}`);
}
/**
 * Returns an error to be thrown when there is no row definitions present in the content.
 * @docs-private
 */
function getTableMissingRowDefsError() {
    return Error('Missing definitions for header, footer, and row; ' +
        'cannot determine which columns should be rendered.');
}
/**
 * Returns an error to be thrown when the data source does not match the compatible types.
 * @docs-private
 */
function getTableUnknownDataSourceError() {
    return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
/**
 * Returns an error to be thrown when the text column cannot find a parent table to inject.
 * @docs-private
 */
function getTableTextColumnMissingParentTableError() {
    return Error(`Text column could not find a parent table for registration.`);
}
/**
 * Returns an error to be thrown when a table text column doesn't have a name.
 * @docs-private
 */
function getTableTextColumnMissingNameError() {
    return Error(`Table text column must have a name.`);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * @docs-private
 */
class DataRowOutlet {
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
DataRowOutlet.ɵfac = function DataRowOutlet_Factory(t) { return new (t || DataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
DataRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: DataRowOutlet, selectors: [["", "rowOutlet", ""]] });
DataRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DataRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[rowOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * @docs-private
 */
class HeaderRowOutlet {
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
HeaderRowOutlet.ɵfac = function HeaderRowOutlet_Factory(t) { return new (t || HeaderRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
HeaderRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: HeaderRowOutlet, selectors: [["", "headerRowOutlet", ""]] });
HeaderRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HeaderRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[headerRowOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the footer.
 * @docs-private
 */
class FooterRowOutlet {
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
FooterRowOutlet.ɵfac = function FooterRowOutlet_Factory(t) { return new (t || FooterRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
FooterRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: FooterRowOutlet, selectors: [["", "footerRowOutlet", ""]] });
FooterRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FooterRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[footerRowOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/**
 * Provides a handle for the table to grab the view
 * container's ng-container to insert the no data row.
 * @docs-private
 */
class NoDataRowOutlet {
    constructor(viewContainer, elementRef) {
        this.viewContainer = viewContainer;
        this.elementRef = elementRef;
    }
}
NoDataRowOutlet.ɵfac = function NoDataRowOutlet_Factory(t) { return new (t || NoDataRowOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])); };
NoDataRowOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: NoDataRowOutlet, selectors: [["", "noDataRowOutlet", ""]] });
NoDataRowOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NoDataRowOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{ selector: '[noDataRowOutlet]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }]; }, null); })();
/**
 * The table template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * @docs-private
 */
const CDK_TABLE_TEMPLATE = 
// Note that according to MDN, the `caption` element has to be projected as the **first**
// element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
`
  <ng-content select="caption"></ng-content>
  <ng-content select="colgroup, col"></ng-content>
  <ng-container headerRowOutlet></ng-container>
  <ng-container rowOutlet></ng-container>
  <ng-container noDataRowOutlet></ng-container>
  <ng-container footerRowOutlet></ng-container>
`;
/**
 * Class used to conveniently type the embedded view ref for rows with a context.
 * @docs-private
 */
class RowViewRef extends _angular_core__WEBPACK_IMPORTED_MODULE_3__["EmbeddedViewRef"] {
}
/**
 * A data table that can render a header row, data rows, and a footer row.
 * Uses the dataSource input to determine the data to be rendered. The data can be provided either
 * as a data array, an Observable stream that emits the data array to render, or a DataSource with a
 * connect function that will return an Observable stream that emits the data array to render.
 */
class CdkTable {
    constructor(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform, 
    /**
     * @deprecated `_coalescedStyleScheduler`, `_viewRepeater` and `_viewportRuler`
     *    parameters to become required.
     * @breaking-change 11.0.0
     */
    _viewRepeater, _coalescedStyleScheduler) {
        this._differs = _differs;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._dir = _dir;
        this._platform = _platform;
        this._viewRepeater = _viewRepeater;
        this._coalescedStyleScheduler = _coalescedStyleScheduler;
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Map of all the user's defined columns (header, data, and footer cell template) identified by
         * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
         * any custom column definitions added to `_customColumnDefs`.
         */
        this._columnDefsByName = new Map();
        /**
         * Column definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * column definitions as *its* content child.
         */
        this._customColumnDefs = new Set();
        /**
         * Data row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in data rows as *its* content child.
         */
        this._customRowDefs = new Set();
        /**
         * Header row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has
         * built-in header rows as *its* content child.
         */
        this._customHeaderRowDefs = new Set();
        /**
         * Footer row definitions that were defined outside of the direct content children of the table.
         * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
         * built-in footer row as *its* content child.
         */
        this._customFooterRowDefs = new Set();
        /**
         * Whether the header row definition has been changed. Triggers an update to the header row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._headerRowDefChanged = true;
        /**
         * Whether the footer row definition has been changed. Triggers an update to the footer row after
         * content is checked. Initialized as true so that the table renders the initial set of rows.
         */
        this._footerRowDefChanged = true;
        /**
         * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
         * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
         * the cached `RenderRow` objects when possible, the row identity is preserved when the data
         * and row template matches, which allows the `IterableDiffer` to check rows by reference
         * and understand which rows are added/moved/removed.
         *
         * Implemented as a map of maps where the first key is the `data: T` object and the second is the
         * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
         * contains an array of created pairs. The array is necessary to handle cases where the data
         * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
         * stored.
         */
        this._cachedRenderRowsMap = new Map();
        /**
         * CSS class added to any row or cell that has sticky positioning applied. May be overriden by
         * table subclasses.
         */
        this.stickyCssClass = 'cdk-table-sticky';
        /**
         * Whether to manually add positon: sticky to all sticky cell elements. Not needed if
         * the position is set in a selector associated with the value of stickyCssClass. May be
         * overridden by table subclasses
         */
        this.needsPositionStickyOnElement = true;
        /** Whether the no data row is currently showing anything. */
        this._isShowingNoDataRow = false;
        this._multiTemplateDataRows = false;
        // TODO(andrewseguin): Remove max value as the end index
        //   and instead calculate the view on init and scroll.
        /**
         * Stream containing the latest information on what rows are being displayed on screen.
         * Can be used by the data source to as a heuristic of what data should be provided.
         *
         * @docs-private
         */
        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]({ start: 0, end: Number.MAX_VALUE });
        if (!role) {
            this._elementRef.nativeElement.setAttribute('role', 'grid');
        }
        this._document = _document;
        this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === 'TABLE';
    }
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
     * relative to the function to know if a row should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     */
    get trackBy() {
        return this._trackByFn;
    }
    set trackBy(fn) {
        if ((typeof ngDevMode === 'undefined' || ngDevMode) && fn != null && typeof fn !== 'function') {
            console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
        }
        this._trackByFn = fn;
    }
    /**
     * The table's source of data, which can be provided in three ways (in order of complexity):
     *   - Simple data array (each object represents one table row)
     *   - Stream that emits a data array each time the array changes
     *   - `DataSource` object that implements the connect/disconnect interface.
     *
     * If a data array is provided, the table must be notified when the array's objects are
     * added, removed, or moved. This can be done by calling the `renderRows()` function which will
     * render the diff since the last table render. If the data array reference is changed, the table
     * will automatically trigger an update to the rows.
     *
     * When providing an Observable stream, the table will trigger an update automatically when the
     * stream emits a new array of data.
     *
     * Finally, when providing a `DataSource` object, the table will use the Observable stream
     * provided by the connect function and trigger updates when that stream emits new data array
     * values. During the table's ngOnDestroy or when the data source is removed from the table, the
     * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
     * subscriptions registered during the connect process).
     */
    get dataSource() {
        return this._dataSource;
    }
    set dataSource(dataSource) {
        if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
        }
    }
    /**
     * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
     * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
     * dataobject will render the first row that evaluates its when predicate to true, in the order
     * defined in the table, or otherwise the default row which does not have a when predicate.
     */
    get multiTemplateDataRows() {
        return this._multiTemplateDataRows;
    }
    set multiTemplateDataRows(v) {
        this._multiTemplateDataRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(v);
        // In Ivy if this value is set via a static attribute (e.g. <table multiTemplateDataRows>),
        // this setter will be invoked before the row outlet has been defined hence the null check.
        if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
            this._forceRenderDataRows();
            this.updateStickyColumnStyles();
        }
    }
    ngOnInit() {
        this._setupStickyStyler();
        if (this._isNativeHtmlTable) {
            this._applyNativeTableSections();
        }
        // Set up the trackBy function so that it uses the `RenderRow` as its identity by default. If
        // the user has provided a custom trackBy, return the result of that function as evaluated
        // with the values of the `RenderRow`'s data and index.
        this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
            return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
        });
    }
    ngAfterContentChecked() {
        // Cache the row and column definitions gathered by ContentChildren and programmatic injection.
        this._cacheRowDefs();
        this._cacheColumnDefs();
        // Make sure that the user has at least added header, footer, or data row def.
        if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableMissingRowDefsError();
        }
        // Render updates if the list of columns have been changed for the header, row, or footer defs.
        const columnsChanged = this._renderUpdatedColumns();
        const stickyColumnStyleUpdateNeeded = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged;
        // If the header row definition has been changed, trigger a render to the header row.
        if (this._headerRowDefChanged) {
            this._forceRenderHeaderRows();
            this._headerRowDefChanged = false;
        }
        // If the footer row definition has been changed, trigger a render to the footer row.
        if (this._footerRowDefChanged) {
            this._forceRenderFooterRows();
            this._footerRowDefChanged = false;
        }
        // If there is a data source and row definitions, connect to the data source unless a
        // connection has already been made.
        if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
            this._observeRenderChanges();
        }
        else if (stickyColumnStyleUpdateNeeded) {
            // In the above case, _observeRenderChanges will result in updateStickyColumnStyles being
            // called when it row data arrives. Otherwise, we need to call it proactively.
            this.updateStickyColumnStyles();
        }
        this._checkStickyStates();
    }
    ngOnDestroy() {
        this._rowOutlet.viewContainer.clear();
        this._noDataRowOutlet.viewContainer.clear();
        this._headerRowOutlet.viewContainer.clear();
        this._footerRowOutlet.viewContainer.clear();
        this._cachedRenderRowsMap.clear();
        this._onDestroy.next();
        this._onDestroy.complete();
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
    }
    /**
     * Renders rows based on the table's latest set of data, which was either provided directly as an
     * input or retrieved through an Observable stream (directly or from a DataSource).
     * Checks for differences in the data since the last diff to perform only the necessary
     * changes (add/remove/move rows).
     *
     * If the table's data source is a DataSource or Observable, this will be invoked automatically
     * each time the provided Observable stream emits a new data array. Otherwise if your data is
     * an array, this function will need to be called to render any changes.
     */
    renderRows() {
        this._renderRows = this._getAllRenderRows();
        const changes = this._dataDiffer.diff(this._renderRows);
        if (!changes) {
            this._updateNoDataRow();
            return;
        }
        const viewContainer = this._rowOutlet.viewContainer;
        // @breaking-change 11.0.0 Remove null check for `_viewRepeater` and the
        // `else` clause once `_viewRepeater` is turned into a required parameter.
        if (this._viewRepeater) {
            this._viewRepeater.applyChanges(changes, viewContainer, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record.item, currentIndex), (record) => record.item.data, (change) => {
                if (change.operation === 1 /* INSERTED */ && change.context) {
                    this._renderCellTemplateForItem(change.record.item.rowDef, change.context);
                }
            });
        }
        else {
            changes.forEachOperation((record, prevIndex, currentIndex) => {
                if (record.previousIndex == null) {
                    const renderRow = record.item;
                    const rowDef = renderRow.rowDef;
                    const context = { $implicit: renderRow.data };
                    this._renderRow(this._rowOutlet, rowDef, currentIndex, context);
                }
                else if (currentIndex == null) {
                    viewContainer.remove(prevIndex);
                }
                else {
                    const view = viewContainer.get(prevIndex);
                    viewContainer.move(view, currentIndex);
                }
            });
        }
        // Update the meta context of a row's context data (index, count, first, last, ...)
        this._updateRowIndexContext();
        // Update rows that did not get added/removed/moved but may have had their identity changed,
        // e.g. if trackBy matched data on some property but the actual data reference changed.
        changes.forEachIdentityChange((record) => {
            const rowView = viewContainer.get(record.currentIndex);
            rowView.context.$implicit = record.item.data;
        });
        this._updateNoDataRow();
        this.updateStickyColumnStyles();
    }
    /** Adds a column definition that was not included as part of the content children. */
    addColumnDef(columnDef) {
        this._customColumnDefs.add(columnDef);
    }
    /** Removes a column definition that was not included as part of the content children. */
    removeColumnDef(columnDef) {
        this._customColumnDefs.delete(columnDef);
    }
    /** Adds a row definition that was not included as part of the content children. */
    addRowDef(rowDef) {
        this._customRowDefs.add(rowDef);
    }
    /** Removes a row definition that was not included as part of the content children. */
    removeRowDef(rowDef) {
        this._customRowDefs.delete(rowDef);
    }
    /** Adds a header row definition that was not included as part of the content children. */
    addHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.add(headerRowDef);
        this._headerRowDefChanged = true;
    }
    /** Removes a header row definition that was not included as part of the content children. */
    removeHeaderRowDef(headerRowDef) {
        this._customHeaderRowDefs.delete(headerRowDef);
        this._headerRowDefChanged = true;
    }
    /** Adds a footer row definition that was not included as part of the content children. */
    addFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.add(footerRowDef);
        this._footerRowDefChanged = true;
    }
    /** Removes a footer row definition that was not included as part of the content children. */
    removeFooterRowDef(footerRowDef) {
        this._customFooterRowDefs.delete(footerRowDef);
        this._footerRowDefChanged = true;
    }
    /**
     * Updates the header sticky styles. First resets all applied styles with respect to the cells
     * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
     * automatically called when the header row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    updateStickyHeaderRowStyles() {
        const headerRows = this._getRenderedRows(this._headerRowOutlet);
        const tableElement = this._elementRef.nativeElement;
        // Hide the thead element if there are no header rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        const thead = tableElement.querySelector('thead');
        if (thead) {
            thead.style.display = headerRows.length ? '' : 'none';
        }
        const stickyStates = this._headerRowDefs.map(def => def.sticky);
        this._stickyStyler.clearStickyPositioning(headerRows, ['top']);
        this._stickyStyler.stickRows(headerRows, stickyStates, 'top');
        // Reset the dirty state of the sticky input change since it has been used.
        this._headerRowDefs.forEach(def => def.resetStickyChanged());
    }
    /**
     * Updates the footer sticky styles. First resets all applied styles with respect to the cells
     * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
     * automatically called when the footer row changes its displayed set of columns, or if its
     * sticky input changes. May be called manually for cases where the cell content changes outside
     * of these events.
     */
    updateStickyFooterRowStyles() {
        const footerRows = this._getRenderedRows(this._footerRowOutlet);
        const tableElement = this._elementRef.nativeElement;
        // Hide the tfoot element if there are no footer rows. This is necessary to satisfy
        // overzealous a11y checkers that fail because the `rowgroup` element does not contain
        // required child `row`.
        const tfoot = tableElement.querySelector('tfoot');
        if (tfoot) {
            tfoot.style.display = footerRows.length ? '' : 'none';
        }
        const stickyStates = this._footerRowDefs.map(def => def.sticky);
        this._stickyStyler.clearStickyPositioning(footerRows, ['bottom']);
        this._stickyStyler.stickRows(footerRows, stickyStates, 'bottom');
        this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
        // Reset the dirty state of the sticky input change since it has been used.
        this._footerRowDefs.forEach(def => def.resetStickyChanged());
    }
    /**
     * Updates the column sticky styles. First resets all applied styles with respect to the cells
     * sticking to the left and right. Then sticky styles are added for the left and right according
     * to the column definitions for each cell in each row. This is automatically called when
     * the data source provides a new set of data or when a column definition changes its sticky
     * input. May be called manually for cases where the cell content changes outside of these events.
     */
    updateStickyColumnStyles() {
        const headerRows = this._getRenderedRows(this._headerRowOutlet);
        const dataRows = this._getRenderedRows(this._rowOutlet);
        const footerRows = this._getRenderedRows(this._footerRowOutlet);
        // Clear the left and right positioning from all columns in the table across all rows since
        // sticky columns span across all table sections (header, data, footer)
        this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ['left', 'right']);
        // Update the sticky styles for each header row depending on the def's sticky state
        headerRows.forEach((headerRow, i) => {
            this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
        });
        // Update the sticky styles for each data row depending on its def's sticky state
        this._rowDefs.forEach(rowDef => {
            // Collect all the rows rendered with this row definition.
            const rows = [];
            for (let i = 0; i < dataRows.length; i++) {
                if (this._renderRows[i].rowDef === rowDef) {
                    rows.push(dataRows[i]);
                }
            }
            this._addStickyColumnStyles(rows, rowDef);
        });
        // Update the sticky styles for each footer row depending on the def's sticky state
        footerRows.forEach((footerRow, i) => {
            this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
        });
        // Reset the dirty state of the sticky input change since it has been used.
        Array.from(this._columnDefsByName.values()).forEach(def => def.resetStickyChanged());
    }
    /**
     * Get the list of RenderRow objects to render according to the current list of data and defined
     * row definitions. If the previous list already contained a particular pair, it should be reused
     * so that the differ equates their references.
     */
    _getAllRenderRows() {
        const renderRows = [];
        // Store the cache and create a new one. Any re-used RenderRow objects will be moved into the
        // new cache while unused ones can be picked up by garbage collection.
        const prevCachedRenderRows = this._cachedRenderRowsMap;
        this._cachedRenderRowsMap = new Map();
        // For each data object, get the list of rows that should be rendered, represented by the
        // respective `RenderRow` object which is the pair of `data` and `CdkRowDef`.
        for (let i = 0; i < this._data.length; i++) {
            let data = this._data[i];
            const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
            if (!this._cachedRenderRowsMap.has(data)) {
                this._cachedRenderRowsMap.set(data, new WeakMap());
            }
            for (let j = 0; j < renderRowsForData.length; j++) {
                let renderRow = renderRowsForData[j];
                const cache = this._cachedRenderRowsMap.get(renderRow.data);
                if (cache.has(renderRow.rowDef)) {
                    cache.get(renderRow.rowDef).push(renderRow);
                }
                else {
                    cache.set(renderRow.rowDef, [renderRow]);
                }
                renderRows.push(renderRow);
            }
        }
        return renderRows;
    }
    /**
     * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
     * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
     * `(T, CdkRowDef)` pair.
     */
    _getRenderRowsForData(data, dataIndex, cache) {
        const rowDefs = this._getRowDefs(data, dataIndex);
        return rowDefs.map(rowDef => {
            const cachedRenderRows = (cache && cache.has(rowDef)) ? cache.get(rowDef) : [];
            if (cachedRenderRows.length) {
                const dataRow = cachedRenderRows.shift();
                dataRow.dataIndex = dataIndex;
                return dataRow;
            }
            else {
                return { data, rowDef, dataIndex };
            }
        });
    }
    /** Update the map containing the content's column definitions. */
    _cacheColumnDefs() {
        this._columnDefsByName.clear();
        const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
        columnDefs.forEach(columnDef => {
            if (this._columnDefsByName.has(columnDef.name) &&
                (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableDuplicateColumnNameError(columnDef.name);
            }
            this._columnDefsByName.set(columnDef.name, columnDef);
        });
    }
    /** Update the list of all available row definitions that can be used. */
    _cacheRowDefs() {
        this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
        this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
        this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
        // After all row definitions are determined, find the row definition to be considered default.
        const defaultRowDefs = this._rowDefs.filter(def => !def.when);
        if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableMultipleDefaultRowDefsError();
        }
        this._defaultRowDef = defaultRowDefs[0];
    }
    /**
     * Check if the header, data, or footer rows have changed what columns they want to display or
     * whether the sticky states have changed for the header or footer. If there is a diff, then
     * re-render that section.
     */
    _renderUpdatedColumns() {
        const columnsDiffReducer = (acc, def) => acc || !!def.getColumnsDiff();
        // Force re-render data rows if the list of column definitions have changed.
        const dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);
        if (dataColumnsChanged) {
            this._forceRenderDataRows();
        }
        // Force re-render header/footer rows if the list of column definitions have changed.
        const headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);
        if (headerColumnsChanged) {
            this._forceRenderHeaderRows();
        }
        const footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);
        if (footerColumnsChanged) {
            this._forceRenderFooterRows();
        }
        return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
    }
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row outlet. Otherwise start listening for new data.
     */
    _switchDataSource(dataSource) {
        this._data = [];
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            this.dataSource.disconnect(this);
        }
        // Stop listening for data from the previous data source.
        if (this._renderChangeSubscription) {
            this._renderChangeSubscription.unsubscribe();
            this._renderChangeSubscription = null;
        }
        if (!dataSource) {
            if (this._dataDiffer) {
                this._dataDiffer.diff([]);
            }
            this._rowOutlet.viewContainer.clear();
        }
        this._dataSource = dataSource;
    }
    /** Set up a subscription for the data provided by the data source. */
    _observeRenderChanges() {
        // If no data source has been set, there is nothing to observe for changes.
        if (!this.dataSource) {
            return;
        }
        let dataStream;
        if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["isDataSource"])(this.dataSource)) {
            dataStream = this.dataSource.connect(this);
        }
        else if (Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["isObservable"])(this.dataSource)) {
            dataStream = this.dataSource;
        }
        else if (Array.isArray(this.dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.dataSource);
        }
        if (dataStream === undefined && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableUnknownDataSourceError();
        }
        this._renderChangeSubscription = dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy))
            .subscribe(data => {
            this._data = data || [];
            this.renderRows();
        });
    }
    /**
     * Clears any existing content in the header row outlet and creates a new embedded view
     * in the outlet using the header row definition.
     */
    _forceRenderHeaderRows() {
        // Clear the header row outlet if any content exists.
        if (this._headerRowOutlet.viewContainer.length > 0) {
            this._headerRowOutlet.viewContainer.clear();
        }
        this._headerRowDefs.forEach((def, i) => this._renderRow(this._headerRowOutlet, def, i));
        this.updateStickyHeaderRowStyles();
    }
    /**
     * Clears any existing content in the footer row outlet and creates a new embedded view
     * in the outlet using the footer row definition.
     */
    _forceRenderFooterRows() {
        // Clear the footer row outlet if any content exists.
        if (this._footerRowOutlet.viewContainer.length > 0) {
            this._footerRowOutlet.viewContainer.clear();
        }
        this._footerRowDefs.forEach((def, i) => this._renderRow(this._footerRowOutlet, def, i));
        this.updateStickyFooterRowStyles();
    }
    /** Adds the sticky column styles for the rows according to the columns' stick states. */
    _addStickyColumnStyles(rows, rowDef) {
        const columnDefs = Array.from(rowDef.columns || []).map(columnName => {
            const columnDef = this._columnDefsByName.get(columnName);
            if (!columnDef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableUnknownColumnError(columnName);
            }
            return columnDef;
        });
        const stickyStartStates = columnDefs.map(columnDef => columnDef.sticky);
        const stickyEndStates = columnDefs.map(columnDef => columnDef.stickyEnd);
        this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates);
    }
    /** Gets the list of rows that have been rendered in the row outlet. */
    _getRenderedRows(rowOutlet) {
        const renderedRows = [];
        for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
            const viewRef = rowOutlet.viewContainer.get(i);
            renderedRows.push(viewRef.rootNodes[0]);
        }
        return renderedRows;
    }
    /**
     * Get the matching row definitions that should be used for this row data. If there is only
     * one row definition, it is returned. Otherwise, find the row definitions that has a when
     * predicate that returns true with the data. If none return true, return the default row
     * definition.
     */
    _getRowDefs(data, dataIndex) {
        if (this._rowDefs.length == 1) {
            return [this._rowDefs[0]];
        }
        let rowDefs = [];
        if (this.multiTemplateDataRows) {
            rowDefs = this._rowDefs.filter(def => !def.when || def.when(dataIndex, data));
        }
        else {
            let rowDef = this._rowDefs.find(def => def.when && def.when(dataIndex, data)) || this._defaultRowDef;
            if (rowDef) {
                rowDefs.push(rowDef);
            }
        }
        if (!rowDefs.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableMissingMatchingRowDefError(data);
        }
        return rowDefs;
    }
    _getEmbeddedViewArgs(renderRow, index) {
        const rowDef = renderRow.rowDef;
        const context = { $implicit: renderRow.data };
        return {
            templateRef: rowDef.template,
            context,
            index,
        };
    }
    /**
     * Creates a new row template in the outlet and fills it with the set of cell templates.
     * Optionally takes a context to provide to the row and cells, as well as an optional index
     * of where to place the new row template in the outlet.
     */
    _renderRow(outlet, rowDef, index, context = {}) {
        // TODO(andrewseguin): enforce that one outlet was instantiated from createEmbeddedView
        const view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
        this._renderCellTemplateForItem(rowDef, context);
        return view;
    }
    _renderCellTemplateForItem(rowDef, context) {
        for (let cellTemplate of this._getCellTemplates(rowDef)) {
            if (CdkCellOutlet.mostRecentCellOutlet) {
                CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
            }
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     */
    _updateRowIndexContext() {
        const viewContainer = this._rowOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            const viewRef = viewContainer.get(renderIndex);
            const context = viewRef.context;
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            if (this.multiTemplateDataRows) {
                context.dataIndex = this._renderRows[renderIndex].dataIndex;
                context.renderIndex = renderIndex;
            }
            else {
                context.index = this._renderRows[renderIndex].dataIndex;
            }
        }
    }
    /** Gets the column definitions for the provided row def. */
    _getCellTemplates(rowDef) {
        if (!rowDef || !rowDef.columns) {
            return [];
        }
        return Array.from(rowDef.columns, columnId => {
            const column = this._columnDefsByName.get(columnId);
            if (!column && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getTableUnknownColumnError(columnId);
            }
            return rowDef.extractCellTemplate(column);
        });
    }
    /** Adds native table sections (e.g. tbody) and moves the row outlets into them. */
    _applyNativeTableSections() {
        const documentFragment = this._document.createDocumentFragment();
        const sections = [
            { tag: 'thead', outlets: [this._headerRowOutlet] },
            { tag: 'tbody', outlets: [this._rowOutlet, this._noDataRowOutlet] },
            { tag: 'tfoot', outlets: [this._footerRowOutlet] },
        ];
        for (const section of sections) {
            const element = this._document.createElement(section.tag);
            element.setAttribute('role', 'rowgroup');
            for (const outlet of section.outlets) {
                element.appendChild(outlet.elementRef.nativeElement);
            }
            documentFragment.appendChild(element);
        }
        // Use a DocumentFragment so we don't hit the DOM on each iteration.
        this._elementRef.nativeElement.appendChild(documentFragment);
    }
    /**
     * Forces a re-render of the data rows. Should be called in cases where there has been an input
     * change that affects the evaluation of which rows should be rendered, e.g. toggling
     * `multiTemplateDataRows` or adding/removing row definitions.
     */
    _forceRenderDataRows() {
        this._dataDiffer.diff([]);
        this._rowOutlet.viewContainer.clear();
        this.renderRows();
    }
    /**
     * Checks if there has been a change in sticky states since last check and applies the correct
     * sticky styles. Since checking resets the "dirty" state, this should only be performed once
     * during a change detection and after the inputs are settled (after content check).
     */
    _checkStickyStates() {
        const stickyCheckReducer = (acc, d) => {
            return acc || d.hasStickyChanged();
        };
        // Note that the check needs to occur for every definition since it notifies the definition
        // that it can reset its dirty state. Using another operator like `some` may short-circuit
        // remaining definitions and leave them in an unchecked state.
        if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyHeaderRowStyles();
        }
        if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
            this.updateStickyFooterRowStyles();
        }
        if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
            this.updateStickyColumnStyles();
        }
    }
    /**
     * Creates the sticky styler that will be used for sticky rows and columns. Listens
     * for directionality changes and provides the latest direction to the styler. Re-applies column
     * stickiness when directionality changes.
     */
    _setupStickyStyler() {
        const direction = this._dir ? this._dir.value : 'ltr';
        this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement);
        (this._dir ? this._dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._onDestroy))
            .subscribe(value => {
            this._stickyStyler.direction = value;
            this.updateStickyColumnStyles();
        });
    }
    /** Filters definitions that belong to this table from a QueryList. */
    _getOwnDefs(items) {
        return items.filter(item => !item._table || item._table === this);
    }
    /** Creates or removes the no data row, depending on whether any data is being shown. */
    _updateNoDataRow() {
        if (this._noDataRow) {
            const shouldShow = this._rowOutlet.viewContainer.length === 0;
            if (shouldShow !== this._isShowingNoDataRow) {
                const container = this._noDataRowOutlet.viewContainer;
                shouldShow ? container.createEmbeddedView(this._noDataRow.templateRef) : container.clear();
                this._isShowingNoDataRow = shouldShow;
            }
        }
    }
}
CdkTable.ɵfac = function CdkTable_Factory(t) { return new (t || CdkTable)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('role'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_COALESCED_STYLE_SCHEDULER, 8)); };
CdkTable.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkTable, selectors: [["cdk-table"], ["table", "cdk-table", ""]], contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkNoDataRow, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkColumnDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkRowDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkHeaderRowDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkFooterRowDef, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._noDataRow = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentColumnDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentRowDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentHeaderRowDefs = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._contentFooterRowDefs = _t);
    } }, viewQuery: function CdkTable_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](DataRowOutlet, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](HeaderRowOutlet, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](FooterRowOutlet, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](NoDataRowOutlet, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._rowOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._headerRowOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._footerRowOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._noDataRowOutlet = _t.first);
    } }, hostAttrs: [1, "cdk-table"], inputs: { trackBy: "trackBy", dataSource: "dataSource", multiTemplateDataRows: "multiTemplateDataRows" }, exportAs: ["cdkTable"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            { provide: CDK_TABLE, useExisting: CdkTable },
            { provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"], useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_DisposeViewRepeaterStrategy"] },
            { provide: _COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler },
        ])], ngContentSelectors: _c1, decls: 6, vars: 0, consts: [["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]], template: function CdkTable_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](5, 3);
    } }, directives: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet], encapsulation: 2 });
CdkTable.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"], args: ['role',] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"],] }] },
    { type: _CoalescedStyleScheduler, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_COALESCED_STYLE_SCHEDULER,] }] }
];
CdkTable.propDecorators = {
    trackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    multiTemplateDataRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    _rowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [DataRowOutlet, { static: true },] }],
    _headerRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [HeaderRowOutlet, { static: true },] }],
    _footerRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [FooterRowOutlet, { static: true },] }],
    _noDataRowOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [NoDataRowOutlet, { static: true },] }],
    _contentColumnDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkColumnDef, { descendants: true },] }],
    _contentRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkRowDef, { descendants: true },] }],
    _contentHeaderRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkHeaderRowDef, {
                    descendants: true
                },] }],
    _contentFooterRowDefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkFooterRowDef, {
                    descendants: true
                },] }],
    _noDataRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkNoDataRow,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-table, table[cdk-table]',
                exportAs: 'cdkTable',
                template: CDK_TABLE_TEMPLATE,
                host: {
                    'class': 'cdk-table'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
                // The view for `MatTable` consists entirely of templates declared in other views. As they are
                // declared elsewhere, they are checked when their declaration points are checked.
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
                providers: [
                    { provide: CDK_TABLE, useExisting: CdkTable },
                    { provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"], useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_DisposeViewRepeaterStrategy"] },
                    { provide: _COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler },
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
                args: ['role']
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["_VIEW_REPEATER_STRATEGY"]]
            }] }, { type: _CoalescedStyleScheduler, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_COALESCED_STYLE_SCHEDULER]
            }] }]; }, { trackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], multiTemplateDataRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], _rowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [DataRowOutlet, { static: true }]
        }], _headerRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [HeaderRowOutlet, { static: true }]
        }], _footerRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [FooterRowOutlet, { static: true }]
        }], _noDataRowOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [NoDataRowOutlet, { static: true }]
        }], _contentColumnDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkColumnDef, { descendants: true }]
        }], _contentRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkRowDef, { descendants: true }]
        }], _contentHeaderRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkHeaderRowDef, {
                    descendants: true
                }]
        }], _contentFooterRowDefs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [CdkFooterRowDef, {
                    descendants: true
                }]
        }], _noDataRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [CdkNoDataRow]
        }] }); })();
/** Utility function that gets a merged list of the entries in an array and values of a Set. */
function mergeArrayAndSet(array, set) {
    return array.concat(Array.from(set));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Column that simply shows text content for the header and row cells. Assumes that the table
 * is using the native table implementation (`<table>`).
 *
 * By default, the name of this column will be the header text and data property accessor.
 * The header text can be overridden with the `headerText` input. Cell values can be overridden with
 * the `dataAccessor` input. Change the text justification to the start or end using the `justify`
 * input.
 */
class CdkTextColumn {
    constructor(
    // `CdkTextColumn` is always requiring a table, but we just assert it manually
    // for better error reporting.
    // tslint:disable-next-line: lightweight-tokens
    _table, _options) {
        this._table = _table;
        this._options = _options;
        /** Alignment of the cell values. */
        this.justify = 'start';
        this._options = _options || {};
    }
    /** Column name that should be used to reference this column. */
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
        // With Ivy, inputs can be initialized before static query results are
        // available. In that case, we defer the synchronization until "ngOnInit" fires.
        this._syncColumnDefName();
    }
    ngOnInit() {
        this._syncColumnDefName();
        if (this.headerText === undefined) {
            this.headerText = this._createDefaultHeaderText();
        }
        if (!this.dataAccessor) {
            this.dataAccessor =
                this._options.defaultDataAccessor || ((data, name) => data[name]);
        }
        if (this._table) {
            // Provide the cell and headerCell directly to the table with the static `ViewChild` query,
            // since the columnDef will not pick up its content by the time the table finishes checking
            // its content and initializing the rows.
            this.columnDef.cell = this.cell;
            this.columnDef.headerCell = this.headerCell;
            this._table.addColumnDef(this.columnDef);
        }
        else if (typeof ngDevMode === 'undefined' || ngDevMode) {
            throw getTableTextColumnMissingParentTableError();
        }
    }
    ngOnDestroy() {
        if (this._table) {
            this._table.removeColumnDef(this.columnDef);
        }
    }
    /**
     * Creates a default header text. Use the options' header text transformation function if one
     * has been provided. Otherwise simply capitalize the column name.
     */
    _createDefaultHeaderText() {
        const name = this.name;
        if (!name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getTableTextColumnMissingNameError();
        }
        if (this._options && this._options.defaultHeaderTextTransform) {
            return this._options.defaultHeaderTextTransform(name);
        }
        return name[0].toUpperCase() + name.slice(1);
    }
    /** Synchronizes the column definition name with the text column name. */
    _syncColumnDefName() {
        if (this.columnDef) {
            this.columnDef.name = this.name;
        }
    }
}
CdkTextColumn.ɵfac = function CdkTextColumn_Factory(t) { return new (t || CdkTextColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTable, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](TEXT_COLUMN_OPTIONS, 8)); };
CdkTextColumn.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CdkTextColumn, selectors: [["cdk-text-column"]], viewQuery: function CdkTextColumn_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkColumnDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkCellDef, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](CdkHeaderCellDef, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.columnDef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.headerCell = _t.first);
    } }, inputs: { justify: "justify", name: "name", headerText: "headerText", dataAccessor: "dataAccessor" }, decls: 3, vars: 0, consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]], template: function CdkTextColumn_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CdkTextColumn_th_1_Template, 2, 3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    } }, directives: [CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderCell, CdkCell], encapsulation: 2 });
CdkTextColumn.ctorParameters = () => [
    { type: CdkTable, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [TEXT_COLUMN_OPTIONS,] }] }
];
CdkTextColumn.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    headerText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dataAccessor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    justify: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    columnDef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [CdkColumnDef, { static: true },] }],
    cell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [CdkCellDef, { static: true },] }],
    headerCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [CdkHeaderCellDef, { static: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTextColumn, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'cdk-text-column',
                template: `
    <ng-container cdkColumnDef>
      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td cdk-cell *cdkCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                // Change detection is intentionally not set to OnPush. This component's template will be provided
                // to the table to be inserted into its view. This is problematic when change detection runs since
                // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
                // mean's the template in the table's view will not have the updated value (and in fact will cause
                // an ExpressionChangedAfterItHasBeenCheckedError).
                // tslint:disable-next-line:validate-decorators
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default
            }]
    }], function () { return [{ type: CdkTable, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [TEXT_COLUMN_OPTIONS]
            }] }]; }, { justify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], headerText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], dataAccessor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], columnDef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkColumnDef, { static: true }]
        }], cell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkCellDef, { static: true }]
        }], headerCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [CdkHeaderCellDef, { static: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const EXPORTED_DECLARATIONS = [
    CdkTable,
    CdkRowDef,
    CdkCellDef,
    CdkCellOutlet,
    CdkHeaderCellDef,
    CdkFooterCellDef,
    CdkColumnDef,
    CdkCell,
    CdkRow,
    CdkHeaderCell,
    CdkFooterCell,
    CdkHeaderRow,
    CdkHeaderRowDef,
    CdkFooterRow,
    CdkFooterRowDef,
    DataRowOutlet,
    HeaderRowOutlet,
    FooterRowOutlet,
    CdkTextColumn,
    CdkNoDataRow,
    NoDataRowOutlet,
];
class CdkTableModule {
}
CdkTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CdkTableModule });
CdkTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function CdkTableModule_Factory(t) { return new (t || CdkTableModule)(); }, imports: [[_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CdkTableModule, { declarations: function () { return [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet]; }, imports: function () { return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]]; }, exports: function () { return [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, NoDataRowOutlet]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                exports: EXPORTED_DECLARATIONS,
                declarations: EXPORTED_DECLARATIONS,
                imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollingModule"]]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=table.js.map

/***/ }),

/***/ "vONB":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/products/products.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-product/add-product.component */ "M2sK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/product.service */ "Gdn9");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");












function ProductsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.addProductDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Add Product ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Alt Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_5_Template_i_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const product_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.editProduct(product_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_ng_template_5_Template_i_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const product_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.deleteProductConfirmation(product_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", product_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", product_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r6.retail_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r6.alternate_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltipPosition", ctx_r2.tooltipPosition.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltipPosition", ctx_r2.tooltipPosition.value);
} }
function ProductsComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" In total there are ", ctx_r3.products ? ctx_r3.products.length : 0, " products. ");
} }
const _c0 = function () { return [10, 25, 50]; };
const _c1 = function () { return { width: "50vw" }; };
class ProductsComponent {
    constructor(productService, dialog, dialogRef, confirmationService, primengConfig, toastr) {
        this.productService = productService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.confirmationService = confirmationService;
        this.primengConfig = primengConfig;
        this.toastr = toastr;
        this.products = [];
        this.positionOptions = ['below', 'above', 'left', 'right'];
        this.tooltipPosition = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.positionOptions[0]);
        this.msgs = [];
    }
    ngOnInit() {
        this.getProducts();
        this.primengConfig.ripple = true;
    }
    deleteProductConfirmation(product) {
        console.log('delete this', product);
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
                console.log('accepted');
                this.deleteProduct(product.id);
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
                console.log('rejected');
            }
        });
    }
    deleteProduct(productId) {
        this.productService.deleteProduct(productId).subscribe((data) => {
            console.log(data);
            this.toastr.success(data.message);
            if (data.status === 200)
                this.getProducts();
        }, (error) => {
            console.log(error);
            this.toastr.error(error.message);
        });
    }
    editProduct(product) {
        console.log('edit this', product);
        const dialogRef = this.dialog.open(_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_0__["AddProductComponent"], {
            width: '700px',
            data: { product: product }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.getProducts();
            // this.animal = result;
        });
    }
    getProducts() {
        this.productService.getProducts().subscribe((data) => {
            console.log(data);
            this.products = data.data;
        }, (error) => {
            console.log(error);
        });
    }
    addProductDialog() {
        const dialogRef = this.dialog.open(_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_0__["AddProductComponent"], {
            width: '600px',
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.getProducts();
            // this.animal = result;
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeNGConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]])], decls: 8, vars: 10, consts: [[1, "m-40"], [1, "w-100"], ["currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "value", "rows", "showCurrentPageReport", "rowsPerPageOptions", "paginator"], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "summary"], [3, "baseZIndex"], [1, "row"], [1, "col-9"], [1, "col-3"], [1, "btn", "btn-primary", 3, "click"], ["width", "100", 1, "p-shadow-4", 3, "src", "alt"], [1, "action-icon"], ["matTooltip", "Edit Product", 1, "material-icons", "action-ico-style", "block-btn", "cursorPointer", 3, "matTooltipPosition", "click"], ["matTooltip", "Delete Product", 1, "material-icons", "action-ico-style", "block-btn", "cursorPointer", 3, "matTooltipPosition", "click"], [1, "p-d-flex", "p-ai-center", "p-jc-between"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProductsComponent_ng_template_3_Template, 7, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProductsComponent_ng_template_4_Template, 11, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProductsComponent_ng_template_5_Template, 16, 7, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProductsComponent_ng_template_6_Template, 2, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p-confirmDialog", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.products)("rows", 5)("showCurrentPageReport", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0))("paginator", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseZIndex", 10000);
    } }, directives: [primeng_table__WEBPACK_IMPORTED_MODULE_7__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialog"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"]], styles: [".m-40[_ngcontent-%COMP%] {\n  margin: 40px;\n}\n\n.action-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  page-break-after: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubS00MHtcclxuICAgIG1hcmdpbjogNDBweDtcclxufVxyXG4uYWN0aW9uLWljb257XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiA4cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.scss'],
                providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]]
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"] }, { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeNGConfig"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "yKC2":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/products/products.module.ts ***!
  \*******************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-product/add-product.component */ "M2sK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-routing.module */ "HObf");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products.component */ "vONB");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/confirmdialog */ "Nf9I");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/messages */ "dts7");






















class ProductsModule {
    constructor() {
        console.log('product module loaded');
    }
}
ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ProductsModule_Factory(t) { return new (t || ProductsModule)(); }, providers: [
        {
            provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            useValue: {}
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _product_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductRoutingModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_12__["TableModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
            primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialogModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_20__["MessagesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_0__["AddProductComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _product_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductRoutingModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_12__["TableModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialogModule"],
        primeng_messages__WEBPACK_IMPORTED_MODULE_20__["MessagesModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _product_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductRoutingModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_12__["TableModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_13__["ButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
                    primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialogModule"],
                    primeng_messages__WEBPACK_IMPORTED_MODULE_20__["MessagesModule"]
                ],
                declarations: [_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_0__["AddProductComponent"]],
                providers: [
                    {
                        provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
                        useValue: {}
                    },
                ],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map