import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { DynamicsService }  from  '../../services/dynamics.service';
import {  DynamicsConfigFormService }  from  '../../services/dynamics.config.service';

import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'forms-records',
    templateUrl: 'forms-records.component.html',
    providers: [DynamicsService,DynamicsConfigFormService]
})

export class FormsRecordsComponent   {

    records:any[];
    formID:any;
    constructor(private http: Http,private _dynamicsService: DynamicsService,
    private _router: Router,
    private _dynamicsConfigFormService: DynamicsConfigFormService,
    private _route: ActivatedRoute) 
    {
        
    }



    ngOnInit() { 

        this.formID=this._route.snapshot.params['formID'];

        this._dynamicsService.getDynamics(this.formID)
        .subscribe(records => {
                    this.records = records;
                    });

        //this._dynamicsConfigFormService.getDynamicConfigForms()
        //              .subscribe(forms => {
        //                this.forms = forms;
        //              });
        }
    


//  addDynamic(): void{
//    let p = this.data;
//    //Object.assign({}, this.task, this.productForm.value); 
////console.log(p);
//console.log(this.data);
// this._dynamicsService.addDynamic(p)
//                   .subscribe(dynamic => {
//                     console.log(dynamic);
//                     //this.tasks.push(JSON.stringify(this.data));
//                    // this.productForm.reset();
//                   });
//  }
   addNewItem(formID:any): void {
       this._router.navigate(['an/form?formID='+formID]);
   }

}
