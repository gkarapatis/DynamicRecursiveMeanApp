import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ElementBase } from './element-base';

import {  DynamicsConfigFormService }  from  '../../services/dynamics.config.service';


@Component({
    moduleId: module.id,
    selector: 'df-element',
    templateUrl: 'dynamic-form-element.component.html',
    providers: [DynamicsConfigFormService]
})

export class DynamicFormElementComponent {
    @Input() elements: ElementBase<any>[]=[];
    @Input() data: any={};
    @Input() formID: any;
    @Input() key: any;

    constructor(private _dynamicsConfigFormService: DynamicsConfigFormService) 
    {
        
    }


    ngOnInit() {

        if(this.formID){
            console.log(this.formID);
            console.log(this.formID);
            console.log(this.formID);
            this._dynamicsConfigFormService.getDynamicConfigForm(this.formID)
                        .subscribe(form => {
                            this.elements = form.elements;
                            console.log(this.elements);
                            

                            this.elements.forEach(element => {
                                if (!this.data.hasOwnProperty(element.key)){
                                    if(element.controlType=="form")
                                        this.data[element.key]={}
                                    else
                                        this.data[element.key] = element.controlType == "grid"?[]:""
                                }
                                    });

                        });            
        }
        else{
             this.elements.forEach(element => {
                 if (!this.data.hasOwnProperty(element.key)){
                     if(element.controlType=="form")
                         this.data[element.key]={}
                     else
                         this.data[element.key] = element.controlType == "grid"?[]:""
                 }
                     });
        }
    }

    generateModel(){}

    //isValid(elementKey: string) { return this.form.controls[elementKey].valid; }
    isValid(elementKey: string) { return true; }
}
