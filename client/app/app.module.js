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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var MaterialDesignLiteUpgradeElement_directive_1 = require('./MaterialDesignLiteUpgradeElement.directive');
var app_component_1 = require('./app.component');
var tasks_module_1 = require('./components/tasks/tasks.module');
var dynamic_module_1 = require('./components/dynamic/dynamic.module');
var dynamic_form_config_module_1 = require('./components/dynamicConfig/dynamic-form-config.module');
var dynamicForm_component_1 = require('./components/dynamic/dynamicForm.component');
var dynamic_form_config_component_1 = require('./components/dynamicConfig/dynamic-form-config.component');
var forms_display_component_1 = require('./components/dynamic/forms-display.component');
var tasks_component_1 = require('./components/tasks/tasks.component');
var authenticate_service_1 = require('./services/authenticate.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                tasks_module_1.TasksModule,
                dynamic_module_1.DynamicModule,
                dynamic_form_config_module_1.DynamicFormConfigModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'an/form',
                        component: dynamicForm_component_1.DynamicFormComponent
                    },
                    {
                        path: 'an/formConfig',
                        component: dynamic_form_config_component_1.DynamicFormConfigComponent
                    },
                    {
                        path: 'an/forms',
                        component: forms_display_component_1.FormsDisplayComponent
                    },
                    {
                        path: 'an/tasks',
                        component: tasks_component_1.TasksComponent
                    },
                    //{ 
                    //  path: 'an/',
                    //  redirectTo: 'an/formConfig',
                    //},
                    {
                        path: '**',
                        redirectTo: 'form',
                        pathMatch: 'full'
                    }
                ]),
            ],
            declarations: [
                app_component_1.AppComponent,
                MaterialDesignLiteUpgradeElement_directive_1.MDL
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [authenticate_service_1.AuthenticateService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map