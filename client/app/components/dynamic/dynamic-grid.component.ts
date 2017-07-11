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

    getValueDes(element:any,row:any):string
    {
        //return element.controlType=='dropdown'?element.options.find(option => option.key == row[element.key]).value:row[element.key];
        return row[element.key];
    }
    //onSubmit() {
    //    this.payLoad = JSON.stringify(this.grid.value);
    //}

    clicked(event:any) {
        this.editMode = !this.editMode;
    }
    addItem(event:any) {
        let newItem=JSON.parse(JSON.stringify(this.addedItem));
        this.addedItem={};
        //for (let prop in this.addedItem){
        //    newItem[prop]=this.addedItem[prop];
        //}
        this.data.push(newItem);
        
//        this.data.push(this.addedItem);
        //alert("");
        //this.data.shift();
        this.editMode = !this.editMode;
    }

}   