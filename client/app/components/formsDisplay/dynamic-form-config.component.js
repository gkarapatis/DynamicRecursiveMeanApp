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
//import { QuestionBase }              from './question-base';
//import { QuestionControlService }    from './question-control.service';
var DynamicFormConfigComponent = (function () {
    //elements[]: any[];
    function DynamicFormConfigComponent(_dynamicsConfigFormService) {
        this._dynamicsConfigFormService = _dynamicsConfigFormService;
        this.elements = [];
        this.formID = "";
    }
    DynamicFormConfigComponent.prototype.ngOnInit = function () {
        // this.form = this.qcs.toFormGroup(this.questions);
    };
    DynamicFormConfigComponent.prototype.addTextbox = function (event) {
        var obj = {};
        obj['controlType'] = 'textbox';
        obj['order'] = this.elements.length + 1;
        obj['key'] = ''; //key'+this.elements.length;
        obj['label'] = '';
        obj['value'] = '';
        obj['required'] = false;
        obj['controlType'] = 'textbox';
        obj['showColumn'] = true;
        this.elements[this.elements.length] = obj;
        console.log(this.elements);
    };
    DynamicFormConfigComponent.prototype.addTable = function (event) {
        var obj = {};
        obj.controlType = 'grid';
        obj.key = '';
        //obj.
        obj.elements = [];
        //obj.order = this.elements.length+1;
        //obj.key='';
        //obj.label='';
        this.elements[this.elements.length] = obj;
        console.log(this.elements);
    };
    DynamicFormConfigComponent.prototype.submitForm = function (event) {
        var ooo = {};
        ooo['formID'] = this.formID;
        ooo['elements'] = this.elements;
        //Object.assign({}, this.task, this.productForm.value); 
        //console.log(p);
        this._dynamicsConfigFormService.addDynamicConfigForm(ooo)
            .subscribe(function (dynamicForm) {
            console.log(dynamicForm);
            //this.tasks.push(JSON.stringify(this.data));
            // this.productForm.reset();
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DynamicFormConfigComponent.prototype, "elements", void 0);
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