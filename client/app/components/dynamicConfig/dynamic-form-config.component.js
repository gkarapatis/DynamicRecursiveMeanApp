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
var DynamicFormConfigComponent = (function () {
    function DynamicFormConfigComponent(_dynamicsConfigFormService) {
        this._dynamicsConfigFormService = _dynamicsConfigFormService;
        this.elements = [];
        this.formID = "";
    }
    DynamicFormConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dynamicsConfigFormService.getDynamicConfigForms()
            .subscribe(function (forms) {
            _this.forms = forms;
        });
        // this.form = this.qcs.toFormGroup(this.questions);
    };
    DynamicFormConfigComponent.prototype.addTextbox = function (event) {
        var row = this.elements.length;
        this.elements[row] = {};
        this.elements[row].controlType = 'textbox';
        this.elements[row].order = this.elements.length + 1;
    };
    DynamicFormConfigComponent.prototype.addTable = function (event) {
        var row = this.elements.length;
        this.elements[row] = {};
        this.elements[row].controlType = 'grid';
        this.elements[row].order = this.elements.length + 1;
    };
    DynamicFormConfigComponent.prototype.addDropDown = function (event) {
        var row = this.elements.length;
        this.elements[row] = {};
        this.elements[row].controlType = 'dropdown';
        this.elements[row].order = this.elements.length + 1;
    };
    DynamicFormConfigComponent.prototype.addForm = function (formID) {
        var row = this.elements.length;
        this.elements[row] = {};
        this.elements[row].controlType = 'form';
        this.elements[row].key = formID;
        this.elements[row].order = this.elements.length + 1;
        this.elements[row].formID = formID;
    };
    DynamicFormConfigComponent.prototype.submitForm = function (event) {
        var ooo = {};
        ooo['formID'] = this.formID;
        ooo['elements'] = this.elements;
        this._dynamicsConfigFormService.addDynamicConfigForm(ooo)
            .subscribe(function (dynamicForm) {
            console.log(dynamicForm);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DynamicFormConfigComponent.prototype, "elements", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DynamicFormConfigComponent.prototype, "formID", void 0);
    DynamicFormConfigComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dynamic-form-config',
            templateUrl: 'dynamic-form-config.component.html',
            providers: [dynamics_config_service_1.DynamicsConfigFormService]
        }), 
        __metadata('design:paramtypes', [dynamics_config_service_1.DynamicsConfigFormService])
    ], DynamicFormConfigComponent);
    return DynamicFormConfigComponent;
}());
exports.DynamicFormConfigComponent = DynamicFormConfigComponent;
//# sourceMappingURL=dynamic-form-config.component.js.map