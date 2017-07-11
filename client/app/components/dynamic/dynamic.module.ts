import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
//import { UniversalModule } from 'angular2-universal';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { ElementControlService }  from  './element-control.service';
import { ElementService }  from  './element.service';
import { DynamicsService }  from  '../../services/Dynamics.service';
import { DynamicsConfigFormService }  from  '../../services/dynamics.config.service';


import { DynamicFormComponent }   from  './dynamicForm.component';
import { DynamicFormElementComponent } from './dynamic-form-element.component';
import { DynamicGridComponent } from './dynamic-grid.component';
import { FormsDisplayComponent } from './forms-display.component';
import { FormsRecordsComponent } from './forms-records.component';

@NgModule({
  imports: [ BrowserModule,
        //AgGridModule,
  //      UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        ReactiveFormsModule,
        FormsModule,

    BrowserModule,
    ReactiveFormsModule,
        RouterModule.forRoot([
      { 
        path: 'an/forms/form/:formID',
        component: DynamicFormComponent
      },
      { 
        path: 'an/forms',
        component: FormsDisplayComponent
      },

      { 
        path: 'an/forms/formRecords/:formID/form/:objectID',
        component: DynamicFormComponent
      },
      { 
        path: 'an/forms/formRecords/:formID',
        component: FormsRecordsComponent
      },
      { 
        path: '**',
        redirectTo: 'form',
        pathMatch: 'full'
      }
    ])
 ],
  exports: [
    DynamicFormComponent,
    FormsDisplayComponent,
    FormsRecordsComponent,
  ],
  declarations: [ 
    DynamicFormComponent,
    DynamicFormElementComponent,
    DynamicGridComponent,
    FormsDisplayComponent,
    FormsRecordsComponent,
  ],
  providers: [ DynamicsService, ElementControlService,ElementService ]
  
})

export class DynamicModule { }