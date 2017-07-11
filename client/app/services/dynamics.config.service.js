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
var http_1 = require('@angular/http');
//import { IDynamics }   from    '../components/dynamics/dynamics';
require('rxjs/add/operator/map');
var DynamicsConfigFormService = (function () {
    function DynamicsConfigFormService(_http) {
        this._http = _http;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    //token = this.currentUser.token.token;
    //this.http.
    DynamicsConfigFormService.prototype.getDynamicConfigForms = function () {
        return this._http.get('api/dynamicForms', { headers: this.currentUser })
            .map(function (res) { return res.json(); });
    };
    DynamicsConfigFormService.prototype.getDynamicConfigForm = function (formID) {
        return this._http.get('api/dynamicForm/' + formID)
            .map(function (res) { return res.json(); });
    };
    DynamicsConfigFormService.prototype.addDynamicConfigForm = function (newDynamic) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post('api/dynamicForm', JSON.stringify(newDynamic), options)
            .map(function (res) { return res.json(); });
    };
    DynamicsConfigFormService.prototype.deleteDynamicConfigForm = function (dynamicId) {
        return this._http.delete('api/dynamicConfigForm/' + dynamicId)
            .map(function (res) { return res.json(); });
    };
    DynamicsConfigFormService.prototype.updateDynamicConfigForm = function (dynamic) {
        console.log("Update...");
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put('api/DynamicConfigForm/' + dynamic._id, JSON.stringify(dynamic), options)
            .map(function (res) { return res.json(); });
    };
    DynamicsConfigFormService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DynamicsConfigFormService);
    return DynamicsConfigFormService;
}());
exports.DynamicsConfigFormService = DynamicsConfigFormService;
//# sourceMappingURL=dynamics.config.service.js.map