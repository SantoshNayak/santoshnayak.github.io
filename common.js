(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "kZQG":
/*!**************************************************!*\
  !*** ./src/app/services/weekly-games.service.ts ***!
  \**************************************************/
/*! exports provided: WeeklyGamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyGamesService", function() { return WeeklyGamesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class WeeklyGamesService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    getgameImages() {
        return this.http.get(this.baseUrl + 'game/image-list').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(Response => {
            return Response;
        }));
    }
    getCurrentWeekGame() {
        return this.http.get(this.baseUrl + 'common/current-week-game').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(Response => {
            return Response;
        }));
    }
    uploadgameImages(imageData) {
        return this.http.post(this.baseUrl + 'game/add-edit', imageData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(Response => {
            return Response;
        }));
    }
    getParticipantsByGameId(gameId) {
        return this.http.get(this.baseUrl + 'auth/participants-by-game/' + gameId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(Response => {
            return Response;
        }));
    }
    getCurrentGameNearestParticipants() {
        return this.http.get(this.baseUrl + 'auth/current-game-nearest-participants').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(Response => {
            return Response;
        }));
    }
}
WeeklyGamesService.ɵfac = function WeeklyGamesService_Factory(t) { return new (t || WeeklyGamesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
WeeklyGamesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WeeklyGamesService, factory: WeeklyGamesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeeklyGamesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "xQmN":
/*!********************************************!*\
  !*** ./src/app/services/judges.service.ts ***!
  \********************************************/
/*! exports provided: JudgesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JudgesService", function() { return JudgesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators/map */ "q3Kh");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class JudgesService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    getJudgeCoords() {
        return this.http.get(this.baseUrl + 'auth/current-game-judgements').pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__["map"])(Response => {
            return Response;
        }));
    }
    getAllJudges() {
        return this.http.get(this.baseUrl + 'judge/list').pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__["map"])(Response => {
            return Response;
        }));
    }
    addJudge(judgeModel) {
        return this.http.post(this.baseUrl + 'judge/add-edit', judgeModel).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__["map"])(Response => {
            return Response;
        }));
    }
    deleteJudge(judgeId) {
        return this.http.delete(this.baseUrl + 'judge/delete/' + judgeId).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__["map"])(Response => {
            return Response;
        }));
    }
    getJudgeAveragePoint(gameId) {
        return this.http.get(this.baseUrl + 'auth/set-average/' + gameId).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__["map"])(Response => {
            return Response;
        }));
    }
}
JudgesService.ɵfac = function JudgesService_Factory(t) { return new (t || JudgesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
JudgesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JudgesService, factory: JudgesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JudgesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map