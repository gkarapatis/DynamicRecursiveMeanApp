import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';
import { RouterModule }     from '@angular/router';

import { TextBoxConfigComponent }         from './text-box-config.component';
import { DropDownConfigComponent }         from './drop-down-config.component';
import { GridConfigComponent }         from './grid-config.component';
import { DynamicFormConfigComponent } from './dynamic-form-config.component';
import { DynamicsConfigFormService }  from  '../../services/dynamics.config.service';



@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  declarations: [
    DropDownConfigComponent,
    TextBoxConfigComponent, 
    DynamicFormConfigComponent, 
    GridConfigComponent,
    ],
  exports:[DynamicFormConfigComponent]
})



//export default class DynamicFormConfigModule {
export class DynamicFormConfigModule {
  constructor() {
  }
}
