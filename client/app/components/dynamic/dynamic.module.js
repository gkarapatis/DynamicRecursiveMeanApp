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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
//import { UniversalModule } from 'angular2-universal';
var forms_1 = require('@angular/forms');
var element_control_service_1 = require('./element-control.service');
var element_service_1 = require('./element.service');
var Dynamics_service_1 = require('../../services/Dynamics.service');
var dynamicForm_component_1 = require('./dynamicForm.component');
var dynamic_form_element_component_1 = require('./dynamic-form-element.component');
var dynamic_grid_component_1 = require('./dynamic-grid.component');
var forms_display_component_1 = require('./forms-display.component');
var forms_records_component_1 = require('./forms-records.component');
var DynamicModule = (function () {
    function DynamicModule() {
    }
    DynamicModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                //AgGridModule,
                //      UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'an/forms/form/:formID',
                        component: dynamicForm_component_1.DynamicFormComponent
                    },
                    {
                        path: 'an/forms',
                        component: forms_display_component_1.FormsDisplayComponent
                    },
                    {
                        path: 'an/forms/formRecords/:formID/form/:objectID',
                        component: dynamicForm_component_1.DynamicFormComponent
                    },
                    {
                        path: 'an/forms/formRecords/:formID',
                        component: forms_records_component_1.FormsRecordsComponent
                    },
                    {
                        path: '**',
                        redirectTo: 'form',
                        pathMatch: 'full'
                    }
                ])
            ],
            exports: [
                dynamicForm_component_1.DynamicFormComponent,
                forms_display_component_1.FormsDisplayComponent,
                forms_records_component_1.FormsRecordsComponent,
            ],
            declarations: [
                dynamicForm_component_1.DynamicFormComponent,
                dynamic_form_element_component_1.DynamicFormElementComponent,
                dynamic_grid_component_1.DynamicGridComponent,
                forms_display_component_1.FormsDisplayComponent,
                forms_records_component_1.FormsRecordsComponent,
            ],
            providers: [Dynamics_service_1.DynamicsService, element_control_service_1.ElementControlService, element_service_1.ElementService]
        }), 
        __metadata('design:paramtypes', [])
    ], DynamicModule);
    return DynamicModule;
}());
exports.DynamicModule = DynamicModule;
//# sourceMappingURL=dynamic.module.js.map