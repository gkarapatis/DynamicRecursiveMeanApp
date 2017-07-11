import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ElementBase } from './element-base';

@Injectable()
export class ElementControlService {
    constructor() { }

    bindData(elements: ElementBase<any>[], data) {
        elements.forEach(element => {
            if (element.controlType != 'layout') {
                element.value = data[element.key];
            }
            else {
                this.bindData(element.elements, data[element.key]);
            }
        });
    }

    toFormGroup1(elements: ElementBase<any>[],data) {
        let group: any = {};

        elements.forEach(element => {
            if (element.controlType == 'layout') {
                group[element.key] = this.toFormGroup1(element.elements, data[element.key]);
                
            }
            else if (element.controlType == 'grid') {
                let id = 0;  
                console.log(data)               
                data[element.key].forEach(row => {
                    group[element.key] = this.toFormGroup1(element.elements, row);

                });
                //group[element.key] = element.required ? new FormControl(data[element.key] || '', Validators.required)
                //    : new FormControl(data[element.key] || '');
            }
            else {
                //console.log(data[element.key]);
                group[element.key] = element.required ? new FormControl(data[element.key] || '', Validators.required)
                    : new FormControl(data[element.key] || '');
            }
        });
        return new FormGroup(group);
    }

    toFormGroup(elements: ElementBase<any>[]) {
        let group: any = {};

        elements.forEach(element => {
            if (element.controlType == 'layout') {
                group[element.key] = this.toFormGroup(element.elements);

            }
            else {
                group[element.key] = element.required ? new FormControl(element.value || '', Validators.required)
                    : new FormControl(element.value || '');
            }
        });
        return new FormGroup(group);
    }
}
