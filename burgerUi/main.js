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

module.exports = "\r\n.header-search {\r\n  margin-top: 12px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"header-search\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search by Full Name\" [(ngModel)]=\"searchtext\">\r\n            <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-default\" type=\"button\" (click)=\"child.searchBurger(searchtext)\">\r\n                  <span class=\"glyphicon glyphicon-search\"></span>\r\n                </button>\r\n              </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-home></app-home>\r\n\r\n<!-- <app-order-details></app-order-details> -->\r\n"

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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]),
        __metadata("design:type", _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"])
    ], AppComponent.prototype, "child", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_apiHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/apiHandler */ "./src/app/services/apiHandler.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [_services_apiHandler__WEBPACK_IMPORTED_MODULE_5__["ApiHandler"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.btn1{\r\n  margin: 8px;\r\n  border-radius: 8px;\r\n  background: transparent;\r\n  box-shadow: none;\r\n  border: 1px solid black;\r\n  font-size: 14px;\r\n  padding: 4px 8px;\r\n  outline: 0;\r\n}\r\n.btn1.active{\r\n  color:#fff;\r\n  background: #000;\r\n  border-color: #ffffff;\r\n}\r\n.product-item {\r\n  text-align: center;\r\n  margin: 8px;\r\n}\r\n.shoppingCart {\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n  z-index: 10;\r\n  background: #333369;\r\n  padding: 14px;\r\n  letter-spacing: 4px;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n.shoppingCartMenu{\r\n  position: fixed;\r\n  bottom: 70px;\r\n  right: 20px;\r\n  border: 1px solid #eee;\r\n  width: 200px;\r\n  height: 300px;\r\n  z-index: 9;\r\n  background: #fff;\r\n}\r\n.cartContainer{\r\n  overflow: auto;\r\n  height: 200px;\r\n}\r\n.cartItem{\r\n  text-align: center;\r\n  padding: 4px;\r\n  border-top: 1px solid #eee;\r\n}\r\n.text-center{\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-9 col-md-10 col-sm-12 \">\r\n      <div class=\"section-left\">\r\n        <div class=\"sidebox\">\r\n            <div class=\"title\">Category</div>\r\n              <button *ngFor=\"let item of foodCategory\" class=\"btn1\" (click)=\"onFilterChange(item,'category')\"\r\n                      [ngClass]=\"{'active':selectedType==item}\">\r\n                {{item}}\r\n              </button>\r\n          </div>\r\n        <div class=\"sidebox\">\r\n          <div class=\"title\">Price(in Rs.)</div>\r\n          <button *ngFor=\"let price of priceRange\" (click)=\"onFilterChange(price,'price')\" class=\"btn1\"\r\n                  [ngClass]=\"{'active':selectedType==price}\">\r\n            {{price}}\r\n          </button>\r\n        </div>\r\n        <div class=\"sidebox\">\r\n          <div class=\"title\">Ratings</div>\r\n          <button *ngFor=\"let rating of ratings\" (click)=\"onFilterChange(rating,'rating')\" class=\"btn1\"\r\n                  [ngClass]=\"{'active':selectedType==rating}\">\r\n            {{rating}} star\r\n          </button>\r\n        </div>\r\n\r\n        <button class=\"btn1\" (click)=\"clearFilters()\"> Clear Filters</button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"row \">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n          <h4 class=\"text-center\">List Of Burgers</h4>\r\n          <div class=\"row\">\r\n            <div *ngFor=\"let item of burgerlist\" class=\"col-sm-4 col-md-3 col-lg-3\">\r\n              <div class=\"product-item\">\r\n                <div class=\"product-name\">Name: {{item.name}}</div>\r\n                <div class=\"content_price\">\r\n                  <div class=\"product-price\">New Price: {{item.discountedPrice}}</div>\r\n                  <div class=\"old-price\">Old Price: {{item.price}}</div>\r\n                </div>\r\n                <div class=\"btn btn-primary\" title=\"Add to Cart\" (click)=\"addItem(item)\">\r\n                  Add\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"burgerlist.length==0\" class=\"text-center\">\r\n              No data Found\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"shoppingCart\" (click)=\"showCart=!showCart\">\r\n    <span>CART</span>\r\n  </div>\r\n  <div class=\"shoppingCartMenu\" *ngIf=\"showCart==true\">\r\n    <h4 class=\"text-center\">ITEMS in cart: {{orderListLength}} </h4>\r\n   <div class=\"cartContainer\">\r\n     <div class=\"cartItem\" *ngFor=\"let item of orderList \"> {{item.name}}</div>\r\n   </div>\r\n    <div *ngIf=\"orderListLength==0\" >Nothing in cart</div>\r\n\r\n    <div *ngIf=\"orderListLength>1\"   class=\"text-center\" (click)=\"placeOrder()\">\r\n      <button class=\"btn1\">Place Order</button>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_apiHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/apiHandler */ "./src/app/services/apiHandler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(restService) {
        this.restService = restService;
        this.burgerlist = [];
        this.burgerOriginalList = [];
        this.selectedType = '';
        this.orderList = [];
        this.showCart = false;
        this.orderListLength = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.priceRange = ['50-100', '100-200', '300-400', '400-500'];
        this.ratings = [5, 4, 3, 2, 1];
        this.foodCategory = ['veg', 'non veg'];
        this.restService.getBurgetList().subscribe(function (response) {
            console.log(response);
            _this.burgerlist = response;
            _this.burgerOriginalList = response;
        }, function (err) {
            console.log(err);
            alert("Internal server error");
        });
    };
    HomeComponent.prototype.onFilterChange = function (data, filterType) {
        this.selectedType = data;
        var arr;
        if (filterType === 'category') {
            arr = this.burgerOriginalList.filter(function (item) {
                if (item.category === data)
                    return item;
            });
        }
        else if (filterType === 'price') {
            var amount_1 = data.split('-');
            arr = this.burgerOriginalList.filter(function (item) {
                if (parseFloat(item.discountedPrice) >= parseFloat(amount_1[0]) && parseFloat(item.discountedPrice) <= parseFloat(amount_1[1]))
                    return item;
            });
        }
        else if (filterType === 'rating') {
            arr = this.burgerOriginalList.filter(function (item) {
                if (item.rating === data.toString())
                    return item;
            });
        }
        this.burgerlist = arr;
    };
    HomeComponent.prototype.clearFilters = function () {
        this.selectedType = '';
        this.burgerlist = this.burgerOriginalList;
    };
    HomeComponent.prototype.searchBurger = function (str) {
        if (str && this.burgerlist.length) {
            var arr = this.burgerOriginalList.filter(function (item) {
                if (item.name.toLowerCase() === str.toLowerCase())
                    return item;
            });
            console.log(arr);
            this.burgerlist = arr;
        }
        else {
            this.burgerlist = this.burgerOriginalList;
        }
    };
    HomeComponent.prototype.addItem = function (item) {
        this.orderList.push(item);
        this.orderListLength = this.orderList.length;
    };
    HomeComponent.prototype.placeOrder = function () {
        alert('Order Placed');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_apiHandler__WEBPACK_IMPORTED_MODULE_1__["ApiHandler"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/apiHandler.ts":
/*!****************************************!*\
  !*** ./src/app/services/apiHandler.ts ***!
  \****************************************/
/*! exports provided: ApiHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiHandler", function() { return ApiHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiHandler = /** @class */ (function () {
    function ApiHandler(http) {
        this.http = http;
        this.orderList = [];
    }
    ApiHandler.prototype.getBurgetList = function () {
        return this.http.get('https://demo5250948.mockable.io/allBurgersList');
    };
    ApiHandler.prototype.pushDataInOrderList = function (item) {
        this.orderList.push(item);
    };
    ApiHandler.prototype.getOrderList = function () {
        return this.orderList;
    };
    ApiHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiHandler);
    return ApiHandler;
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

module.exports = __webpack_require__(/*! F:\burger\burgerApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map