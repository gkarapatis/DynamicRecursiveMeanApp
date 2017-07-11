import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule }  from    '@angular/forms';

import { TasksService }  from  '../../services/tasks.service';

import { TasksComponent }   from  './tasks.component';

@NgModule({
  imports: [ 
    BrowserModule,
    ReactiveFormsModule
    // RouterModule.forChild([
    //     { 
    //         path: '/',
    //         component: TasksComponent
    //     }
    // ])
 ],
  exports: [
    TasksComponent
  ],
  declarations: [ 
    TasksComponent
  ],
  providers: [ TasksService ]
  
})

export class TasksModule { }