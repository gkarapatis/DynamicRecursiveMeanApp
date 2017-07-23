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
//import { gridGroup } from '@angular/grids';
//import { ElementBase } from './element-base';
//import { ElementControlService } from './element-control.service';
//import { ElementService } from './element.service';
var DynamicGridComponent = (function () {
    //showDialog: any;
    //closeDialog: any;
    function DynamicGridComponent() {
        this.data = [];
        this.addedItem = {};
        // editMode:boolean=false;
        this.editIndex = -1;
        this.dialog = {};
    }
    //constructor(private qcs: ElementControlService, service: ElementService)
    //{
    //    this.elements = ElementService.getElements();
    //}
    DynamicGridComponent.prototype.getColumnElements = function () {
        return this.elements.filter(function (x) { return x.showColumn == true; });
    };
    DynamicGridComponent.prototype.ngOnInit = function () {
        //this.grid = this.qcs.togridGroup(this.elements);
    };
    DynamicGridComponent.prototype.ngAfterViewInit = function () {
        this.dialog = document.querySelector('dialog');
        //var showDialogButton = document.querySelector('#show-dialog');
        // if (!dialog.showModal) {
        //  dialogPolyfill.registerDialog(dialog);
        // }
        //this.showDialog = function() {
        //  dialog.showModal();
        //}
        //this.closeDialog = function() {
        //  dialog.close();
        //}
    };
    DynamicGridComponent.prototype.getValueDes = function (element, row) {
        //return element.controlType=='dropdown'?element.options.find(option => option.key == row[element.key]).value:row[element.key];
        return row[element.key];
    };
    //onSubmit() {
    //    this.payLoad = JSON.stringify(this.grid.value);
    //}
    DynamicGridComponent.prototype.addNew = function (event) {
        this.dialog.showModal();
        this.editIndex = -1;
        this.addedItem = {};
        //this.editMode = !this.editMode;
    };
    DynamicGridComponent.prototype.addItem = function (event) {
        this.dialog.close();
        var newItem = JSON.parse(JSON.stringify(this.addedItem));
        this.addedItem = {};
        //for (let prop in this.addedItem){
        //    newItem[prop]=this.addedItem[prop];
        //}
        if (this.editIndex == -1) {
            this.data.push(newItem);
        }
        else
            this.data[this.editIndex] = newItem;
        //        this.data.push(this.addedItem);
        //this.data.shift();
        //  this.editMode = !this.editMode;
    };
    DynamicGridComponent.prototype.cancel = function (event) {
        this.dialog.close();
        //   this.editMode = false;
    };
    DynamicGridComponent.prototype.edit = function (index) {
        this.dialog.showModal();
        this.editIndex = index;
        //this.editMode = true;            
        this.addedItem = JSON.parse(JSON.stringify(this.data[index]));
    };
    DynamicGridComponent.prototype.delete = function (index) {
        //this.editMode = false;                  
        this.data.splice(index, 1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DynamicGridComponent.prototype, "elements", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DynamicGridComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DynamicGridComponent.prototype, "key", void 0);
    DynamicGridComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dynamic-grid',
            templateUrl: 'dynamic-grid.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], DynamicGridComponent);
    return DynamicGridComponent;
}());
exports.DynamicGridComponent = DynamicGridComponent;
//# sourceMappingURL=dynamic-grid.component.js.map