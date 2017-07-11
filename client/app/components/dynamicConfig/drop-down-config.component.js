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
//import { QuestionBase }              from './question-base';
//import { QuestionControlService }    from './question-control.service';
var DropDownConfigComponent = (function () {
    function DropDownConfigComponent() {
        this.payLoad = '';
    }
    //constructor(private qcs: QuestionControlService) {  }
    DropDownConfigComponent.prototype.ngOnInit = function () {
        this.element.key = '';
        this.element.label = '';
        this.element.required = false;
        this.element.showColumn = true;
        this.element.options = []; //array  of object with key & value 
    };
    DropDownConfigComponent.prototype.addItem = function (event) {
        var x = this.element.options.length;
        this.element.options[x] = { key: '', value: '' };
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DropDownConfigComponent.prototype, "element", void 0);
    DropDownConfigComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'drop-down-config',
            templateUrl: 'drop-down-config.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], DropDownConfigComponent);
    return DropDownConfigComponent;
}());
exports.DropDownConfigComponent = DropDownConfigComponent;
//# sourceMappingURL=drop-down-config.component.js.map