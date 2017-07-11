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
var router_1 = require('@angular/router');
var FormsRecordsComponent = (function () {
    function FormsRecordsComponent(http, _dynamicsService, _router, _dynamicsConfigFormService, _route) {
        this.http = http;
        this._dynamicsService = _dynamicsService;
        this._router = _router;
        this._dynamicsConfigFormService = _dynamicsConfigFormService;
        this._route = _route;
    }
    FormsRecordsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formID = this._route.snapshot.params['formID'];
        this._dynamicsService.getDynamics(this.formID)
            .subscribe(function (records) {
            _this.records = records;
        });
        //this._dynamicsConfigFormService.getDynamicConfigForms()
        //              .subscribe(forms => {
        //                this.forms = forms;
        //              });
    };
    //  addDynamic(): void{
    //    let p = this.data;
    //    //Object.assign({}, this.task, this.productForm.value); 
    ////console.log(p);
    //console.log(this.data);
    // this._dynamicsService.addDynamic(p)
    //                   .subscribe(dynamic => {
    //                     console.log(dynamic);
    //                     //this.tasks.push(JSON.stringify(this.data));
    //                    // this.productForm.reset();
    //                   });
    //  }
    FormsRecordsComponent.prototype.addNewItem = function (formID) {
        this._router.navigate(['an/form?formID=' + formID]);
    };
    FormsRecordsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'forms-records',
            templateUrl: 'forms-records.component.html',
            providers: [dynamics_service_1.DynamicsService, dynamics_config_service_1.DynamicsConfigFormService]
        }), 
        __metadata('design:paramtypes', [http_1.Http, dynamics_service_1.DynamicsService, router_1.Router, dynamics_config_service_1.DynamicsConfigFormService, router_1.ActivatedRoute])
    ], FormsRecordsComponent);
    return FormsRecordsComponent;
}());
exports.FormsRecordsComponent = FormsRecordsComponent;
//# sourceMappingURL=forms-records.component.js.map