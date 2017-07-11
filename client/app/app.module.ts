import { NgModule }       from  '@angular/core';
import { BrowserModule }  from  '@angular/platform-browser';
import { HttpModule }     from  '@angular/http';
import { RouterModule }     from '@angular/router';

import { MDL }  from  './MaterialDesignLiteUpgradeElement.directive';

import { AppComponent }   from  './app.component';
import { TasksModule } from  './components/tasks/tasks.module';
import { DynamicModule } from  './components/dynamic/dynamic.module';
import { DynamicFormConfigModule } from  './components/dynamicConfig/dynamic-form-config.module';

import { DynamicFormComponent }   from  './components/dynamic/dynamicForm.component';
import { DynamicFormConfigComponent }   from  './components/dynamicConfig/dynamic-form-config.component';
import { FormsDisplayComponent }   from  './components/dynamic/forms-display.component';


import { AuthenticateService }  from  './services/authenticate.service';




@NgModule({
  imports:  [
    BrowserModule,
    HttpModule,
    TasksModule,
    DynamicModule,
    DynamicFormConfigModule,
    RouterModule.forRoot([
      { 
        path: 'an/form',
        component: DynamicFormComponent
      },
      { 
        path: 'an/formConfig',
        component: DynamicFormConfigComponent
      },
      { 
        path: 'an/forms',
        component: FormsDisplayComponent
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
    AppComponent,
    MDL
  ],
  bootstrap:    [ AppComponent ],
  providers: [AuthenticateService]

})

export class AppModule { }
