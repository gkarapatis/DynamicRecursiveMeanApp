import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
//import { gridGroup } from '@angular/grids';

//import { ElementBase } from './element-base';

//import { ElementControlService } from './element-control.service';
//import { ElementService } from './element.service';

@Component({
    moduleId: module.id,
    selector: 'dynamic-grid',
    templateUrl:'dynamic-grid.component.html',
   // providers: [ElementControlService, ElementService]
})
export class DynamicGridComponent implements OnInit {

    @Input() elements:any[];
    @Input() data:any[]=[];
    @Input() key:string;
    addedItem: any={};
    editMode:boolean=false;

    editIndex: number=-1;
    showDialog: any;
    closeDialog: any;

    constructor() {
    }

    //constructor(private qcs: ElementControlService, service: ElementService)
    //{
    //    this.elements = ElementService.getElements();
    //}

    getColumnElements():any[]
    {
        return this.elements.filter(x => x.showColumn == true);
    }

    ngOnInit() {
        //this.grid = this.qcs.togridGroup(this.elements);
    }

  ngAfterViewInit() {
    var dialog:any = document.querySelector('dialog');
    //var showDialogButton = document.querySelector('#show-dialog');
    // if (!dialog.showModal) {
    //  dialogPolyfill.registerDialog(dialog);
    // }
    this.showDialog = function() {
      dialog.showModal();
    }
    this.closeDialog = function() {
      dialog.close();
    }
    }

    getValueDes(element:any,row:any):string
    {
        //return element.controlType=='dropdown'?element.options.find(option => option.key == row[element.key]).value:row[element.key];
        return row[element.key];
    }
    //onSubmit() {
    //    this.payLoad = JSON.stringify(this.grid.value);
    //}

    addNew(event:any) {
        this.showDialog();
        this.editIndex = -1;
        this.addedItem={};
        this.editMode = !this.editMode;
    }
    addItem(event:any) {
       this.closeDialog();
        let newItem=JSON.parse(JSON.stringify(this.addedItem));
        this.addedItem={};
        //for (let prop in this.addedItem){
        //    newItem[prop]=this.addedItem[prop];
        //}
        if(this.editIndex==-1)
        {
            this.data.push(newItem);
        }
        else
            this.data[this.editIndex]=newItem;
        
//        this.data.push(this.addedItem);
        //this.data.shift();
        this.editMode = !this.editMode;
    }
   cancel(event:any) {
       this.closeDialog();
        this.editMode = false;
    }    
    edit(index: any){
        this.showDialog();
        this.editIndex = index;
        //this.editMode = true;            
        
        this.addedItem = JSON.parse(JSON.stringify(this.data[index]));
    }
    delete(index: any){
        //this.editMode = false;                  
        this.data.splice(index,1);
        }

}   