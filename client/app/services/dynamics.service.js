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
var DynamicsService = (function () {
    function DynamicsService(_http) {
        this._http = _http;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = this.currentUser.token;
        this.headers = new http_1.Headers({ 'x-access-token': this.token }); //{ headers: {'x-access-token': this.token} };//new Headers({ 'x-access-token':this.token });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    DynamicsService.prototype.getDynamics = function (tableName) {
        return this._http.get('api/dynamics/' + tableName, this.options)
            .map(function (res) { return res.json(); });
    };
    DynamicsService.prototype.getDynamic = function (tableName, objectID) {
        return this._http.get('api/dynamic/' + tableName + '/' + objectID, this.options)
            .map(function (res) { return res.json(); });
    };
    DynamicsService.prototype.addDynamic = function (newDynamic, tableName) {
        var headers = new http_1.Headers({ 'x-access-token': this.token }); //{ headers: {'x-access-token': this.token} };//new Headers({ 'x-access-token':this.token });
        //let headers = { headers: {'x-access-token': this.token} };//new Headers({ 'x-access-token':this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post('api/dynamics/' + tableName, JSON.stringify(newDynamic), this.options)
            .map(function (res) { return res.json(); });
    };
    DynamicsService.prototype.deleteDynamic = function (dynamicId) {
        return this._http.delete('api/dynamic/' + dynamicId, this.options)
            .map(function (res) { return res.json(); });
    };
    DynamicsService.prototype.updateDynamic = function (dynamic, formID) {
        return this._http.put('api/dynamic/' + formID + '/' + dynamic._id, JSON.stringify(dynamic), this.options)
            .map(function (res) { return res.json(); });
    };
    DynamicsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DynamicsService);
    return DynamicsService;
}());
exports.DynamicsService = DynamicsService;
//# sourceMappingURL=Dynamics.service.js.map