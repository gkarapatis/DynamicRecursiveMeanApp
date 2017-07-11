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
var dynamics_service_1 = require('../../services/dynamics.service');
var dynamics_config_service_1 = require('../../services/dynamics.config.service');
var FormsDisplayComponent = (function () {
    function FormsDisplayComponent(http, _dynamicsService, _dynamicsConfigFormService) {
        this.http = http;
        this._dynamicsService = _dynamicsService;
        this._dynamicsConfigFormService = _dynamicsConfigFormService;
    }
    FormsDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dynamicsConfigFormService.getDynamicConfigForms()
            .subscribe(function (forms) {
            _this.forms = forms;
        });
    };
    FormsDisplayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dynamic-form',
            templateUrl: 'dynamicForm.component.html',
            providers: [dynamics_service_1.DynamicsService, dynamics_config_service_1.DynamicsConfigFormService]
        }), 
        __metadata('design:paramtypes', [http_1.Http, dynamics_service_1.DynamicsService, dynamics_config_service_1.DynamicsConfigFormService])
    ], FormsDisplayComponent);
    return FormsDisplayComponent;
}());
exports.FormsDisplayComponent = FormsDisplayComponent;
//# sourceMappingURL=forms-display.component.js.map