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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var text_box_config_component_1 = require('./text-box-config.component');
var drop_down_config_component_1 = require('./drop-down-config.component');
var grid_config_component_1 = require('./grid-config.component');
var dynamic_form_config_component_1 = require('./dynamic-form-config.component');
var DynamicFormConfigModule = (function () {
    function DynamicFormConfigModule() {
    }
    DynamicFormConfigModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, forms_1.FormsModule],
            declarations: [
                drop_down_config_component_1.DropDownConfigComponent,
                text_box_config_component_1.TextBoxConfigComponent,
                dynamic_form_config_component_1.DynamicFormConfigComponent,
                grid_config_component_1.GridConfigComponent,
            ],
            exports: [dynamic_form_config_component_1.DynamicFormConfigComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DynamicFormConfigModule);
    return DynamicFormConfigModule;
}());
exports.DynamicFormConfigModule = DynamicFormConfigModule;
//# sourceMappingURL=dynamic-form-config.module.js.map