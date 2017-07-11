"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var authenticate_service_1 = require('./services/authenticate.service');
var AppComponent = (function () {
    function AppComponent(_authenticateService) {
        this._authenticateService = _authenticateService;
        this.pageTitle = 'MongoDB ExpressJS Angular NodeJS App';
        this.showForm = false;
        this.elements = [];
    }
    AppComponent.prototype.showForm1 = function (event) {
        this.showForm = !this.showForm;
    };
    AppComponent.prototype.login = function (role) {
        this._authenticateService.getToken(role)
            .subscribe(function (token) {
            localStorage.setItem('currentUser', JSON.stringify(token));
            //this.token = token;
            //console.log(token);
        });
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            providers: [authenticate_service_1.AuthenticateService]
        }), 
        __metadata('design:paramtypes', [authenticate_service_1.AuthenticateService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map