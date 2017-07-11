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
var forms_1 = require('@angular/forms');
var tasks_service_1 = require('../../services/tasks.service');
var TasksComponent = (function () {
    function TasksComponent(_formBuilder, _tasksService) {
        this._formBuilder = _formBuilder;
        this._tasksService = _tasksService;
        this.pageTitle = 'My Tasks List';
    }
    TasksComponent.prototype.ngAfterViewInit = function () {
        var dialog = document.querySelector('dialog');
        var showDialogButton = document.querySelector('#show-dialog');
        // if (!dialog.showModal) {
        //  dialogPolyfill.registerDialog(dialog);
        // }
        showDialogButton.addEventListener('click', function () {
            dialog.showModal();
        });
        dialog.querySelector('.save').addEventListener('click', function () {
            dialog.close();
        });
        dialog.querySelector('.close').addEventListener('click', function () {
            dialog.close();
        });
    };
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productForm = this._formBuilder.group({
            title: ['', forms_1.Validators.required],
            description: '',
            isDone: false
        });
        this._tasksService.getTasks()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    };
    TasksComponent.prototype.addTask = function () {
        var _this = this;
        var p = Object.assign({}, this.task, this.productForm.value);
        console.log(p);
        this._tasksService.addTask(p)
            .subscribe(function (task) {
            _this.tasks.push(task);
            _this.productForm.reset();
        });
    };
    TasksComponent.prototype.deleteTask = function (id) {
        var tasks = this.tasks;
        this._tasksService.deleteTask(id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i]._id == id) {
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    };
    TasksComponent.prototype.edit = function (task) {
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
    };
    TasksComponent.prototype.cancel = function () {
        this.productForm.reset();
    };
    TasksComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tasks',
            templateUrl: 'tasks.component.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, tasks_service_1.TasksService])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map