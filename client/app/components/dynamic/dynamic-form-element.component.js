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
var dynamics_config_service_1 = require('../../services/dynamics.config.service');
var DynamicFormElementComponent = (function () {
    function DynamicFormElementComponent(_dynamicsConfigFormService) {
        this._dynamicsConfigFormService = _dynamicsConfigFormService;
        this.elements = [];
        this.data = {};
    }
    DynamicFormElementComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.formID) {
            console.log(this.formID);
            console.log(this.formID);
            console.log(this.formID);
            this._dynamicsConfigFormService.getDynamicConfigForm(this.formID)
                .subscribe(function (form) {
                _this.elements = form.elements;
                console.log(_this.elements);
                _this.elements.forEach(function (element) {
                    if (!_this.data.hasOwnProperty(element.key)) {
                        if (element.controlType == "form")
                            _this.data[element.key] = {};
                        else
                            _this.data[element.key] = element.controlType == "grid" ? [] : "";
                    }
                });
            });
        }
        else {
            this.elements.forEach(function (element) {
                if (!_this.data.hasOwnProperty(element.key)) {
                    if (element.controlType == "form")
                        _this.data[element.key] = {};
                    else
                        _this.data[element.key] = element.controlType == "grid" ? [] : "";
                }
            });
        }
    };
    DynamicFormElementComponent.prototype.generateModel = function () { };
    //isValid(elementKey: string) { return this.form.controls[elementKey].valid; }
    DynamicFormElementComponent.prototype.isValid = function (elementKey) { return true; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DynamicFormElementComponent.prototype, "elements", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DynamicFormElementComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DynamicFormElementComponent.prototype, "formID", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DynamicFormElementComponent.prototype, "key", void 0);
    DynamicFormElementComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'df-element',
            templateUrl: 'dynamic-form-element.component.html',
            providers: [dynamics_config_service_1.DynamicsConfigFormService]
        }), 
        __metadata('design:paramtypes', [dynamics_config_service_1.DynamicsConfigFormService])
    ], DynamicFormElementComponent);
    return DynamicFormElementComponent;
}());
exports.DynamicFormElementComponent = DynamicFormElementComponent;
//# sourceMappingURL=dynamic-form-element.component.js.map