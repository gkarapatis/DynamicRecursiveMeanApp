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
var element_control_service_1 = require('./element-control.service');
var element_service_1 = require('./element.service');
var http_1 = require('@angular/http');
var dynamics_service_1 = require('../../services/dynamics.service');
var dynamics_config_service_1 = require('../../services/dynamics.config.service');
var router_1 = require('@angular/router');
var DynamicFormComponent = (function () {
    //formID : string = "";
    function DynamicFormComponent(qcs, service, http, _dynamicsService, _dynamicsConfigFormService, activatedRoute, _route) {
        //todo: uncomment
        //this.elements = service.getElements();
        //this.data = service.getData();
        this.qcs = qcs;
        this.http = http;
        this._dynamicsService = _dynamicsService;
        this._dynamicsConfigFormService = _dynamicsConfigFormService;
        this.activatedRoute = activatedRoute;
        this._route = _route;
        this.elements = [];
        this.formID = "";
        this.payLoad = '';
        this.data = {};
        this.ok = true;
        this.showElement = false;
        //http.get('/api/SampleData/UserData').subscribe(result => {
        //    this.data = result.json();
        //    //this.form = this.qcs.toFormGroup1(this.elements, this.data);
        //    console.log(this.form);
        //    console.log(this.data['emailAddress']);
        //    this.ok = true;
        //});
    }
    DynamicFormComponent.prototype.fetchEvent = function () {
        var _this = this;
        return this.http.get('/api/SampleData/UserData').subscribe(function (result) {
            _this.data = result.json();
            // this.form = this.qcs.toFormGroup1(this.elements, this.data);
            console.log(_this.data['emailAddress']);
            _this.ok = true;
        });
    };
    DynamicFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.activatedRoute.queryParams.subscribe((params: Params) => {
        //  this.formID = params['formID'];
        //  console.log(this.formID);
        //}); 
        this.formID = this._route.snapshot.params['formID'];
        console.log(this.formID);
        this.objectID = this._route.snapshot.params['objectID'];
        console.log(this.objectID);
        if (this.objectID) {
            this._dynamicsService.getDynamic(this.formID, this.objectID)
                .subscribe(function (data) {
                console.log(data);
                _this.data = data;
            });
        }
        //this.http.get('api/dynamicForms')
        //               .map((res) => {
        //                   console.log(res);
        //                   this.payLoad1 = res.json();
        //                   console.log(this.payLoad1);
        //                   }
        //               );
        //this.payLoad1.subscribe(form=>{return 1;});
        //let qqq=[];
        if (this.elements != [] && false) {
        }
        else {
            this._dynamicsConfigFormService.getDynamicConfigForm(this.formID)
                .subscribe(function (form) {
                _this.elements = form.elements;
                _this.showElement = true;
            });
        }
        //if(this.formID!=""){
        //
        //}
        //this.http.get('/api/SampleData/UserData').subscribe(result => {
        //    this.data = result.json();
        //    this.form = this.qcs.toFormGroup1(this.elements, this.data);
        //    //this.form = this.qcs.toFormGroup1(this.elements, this.data);
        //    //console.log(this.form);
        //    //console.log(this.data['emailAddress']);
        //    //this.ok = true;
        //});
        //console.log(this.data);
        //this.form = this.qcs.toFormGroup1(this.elements, this.data);
        //this.fetchEvent().then(() =>
        //    console.log(this.ev));
        //
        //console.log(event);
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.data);
        console.log(this.data);
        this.addDynamic();
    };
    DynamicFormComponent.prototype.addDynamic = function () {
        var p = this.data;
        //Object.assign({}, this.task, this.productForm.value); 
        //console.log(p);
        console.log(this.data);
        if (this.objectID) {
            console.log('qqqqqqqqqq');
            console.log(p);
            this._dynamicsService.updateDynamic(p, this.formID)
                .subscribe(function (dynamic) {
                console.log('!!!!!!!!!!!!!');
                console.log(dynamic);
                //this.tasks.push(JSON.stringify(this.data));
                // this.productForm.reset();
            });
        }
        else {
            this._dynamicsService.addDynamic(p, this.formID)
                .subscribe(function (dynamic) {
                console.log(dynamic);
                //this.tasks.push(JSON.stringify(this.data));
                // this.productForm.reset();
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DynamicFormComponent.prototype, "elements", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DynamicFormComponent.prototype, "formID", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DynamicFormComponent.prototype, "data", void 0);
    DynamicFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dynamic-form',
            templateUrl: 'dynamicForm.component.html',
            providers: [dynamics_service_1.DynamicsService, dynamics_config_service_1.DynamicsConfigFormService]
        }), 
        __metadata('design:paramtypes', [element_control_service_1.ElementControlService, element_service_1.ElementService, http_1.Http, dynamics_service_1.DynamicsService, dynamics_config_service_1.DynamicsConfigFormService, router_1.ActivatedRoute, router_1.ActivatedRoute])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());
exports.DynamicFormComponent = DynamicFormComponent;
//# sourceMappingURL=dynamicForm.component.js.map