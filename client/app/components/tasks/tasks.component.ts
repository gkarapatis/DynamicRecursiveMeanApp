import { Component, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, FormBuilder, Validators }   from    '@angular/forms';

import { TasksService }  from  '../../services/tasks.service';

import { ITasks }  from  './tasks';

declare var componentHandler: any;

@Component({
    moduleId: module.id,
    selector: 'tasks',
    templateUrl: 'tasks.component.html',
})

export class TasksComponent implements OnInit {
  pageTitle: string = 'My Tasks List';
 

  productForm: FormGroup;

  task: ITasks;
  tasks: ITasks[];

  constructor(
          private _formBuilder: FormBuilder,
          private _tasksService: TasksService){    
  }
   
  ngAfterViewInit() {
    var dialog:any = document.querySelector('dialog');
    var showDialogButton = document.querySelector('#show-dialog');
    

    // if (!dialog.showModal) {
    //  dialogPolyfill.registerDialog(dialog);
    // }

    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });

    dialog.querySelector('.save').addEventListener('click', function() {
       dialog.close();
    });

    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });

}

  ngOnInit(): void{
    this.productForm = this._formBuilder.group({
      title: ['', Validators.required ],
      description: '',
      isDone: false
    });

    this._tasksService.getTasks()
                      .subscribe(tasks => {
                        this.tasks = tasks;
                      });
  }

  addTask(): void{
    let p = Object.assign({}, this.task, this.productForm.value); 
console.log(p);
    this._tasksService.addTask(p)
                      .subscribe(task => {
                        this.tasks.push(task);
                        this.productForm.reset();
                      });
  }

  deleteTask(id: string){
    let tasks = this.tasks;

    this._tasksService.deleteTask(id)
                      .subscribe( data => {
                        if(data.n == 1) {
                          for(let i = 0; i < tasks.length; i++){
                            if(tasks[i]._id == id) {
                              tasks.splice(i, 1);
                            }
                          }
                        }                        
                      });
  }

  edit(task: ITasks){
    console.log("Edit...");
    this.task = task;

    // var _task = {
    //   _id: this.task._id,
    //   title: this.task.title,
    //   description: this.task.description,
    //   isDone: this.task.isDone
    // }

    this._tasksService.updateTask(task);
    console.log(task);
                        
                      // .subscribe( data => {
                      //   task._id = _task._id;
                      //   task.title = _task.title;
                      //   task.description = _task.description;
                      //   task.isDone = _task.isDone;
                      // });

  }

  cancel(): void{
    this.productForm.reset();
  }





}