import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElementBase } from './element-base';
import { ElementControlService } from './element-control.service';
import { ElementService } from './element.service';
import { Http } from '@angular/http';
import { DynamicsService }  from  '../../services/dynamics.service';
import {  DynamicsConfigFormService }  from  '../../services/dynamics.config.service';

import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'dynamic-form',
    templateUrl: 'dynamicForm.component.html',
    providers: [DynamicsService,DynamicsConfigFormService]
})

export class DynamicFormComponent   {

    @Input() elements: ElementBase<any>[] = [];
    @Input() formID: string ="";
    payLoad = '';
    payLoad1 :any;
    objectID : any;
    @Input() data:any={};
    form: FormGroup;
    ok=true;
    showElement:boolean=false;
    //formID : string = "";
    constructor(private qcs: ElementControlService, 
                service: ElementService,
    private http: Http,private _dynamicsService: DynamicsService
    ,private _dynamicsConfigFormService: DynamicsConfigFormService,
    private activatedRoute: ActivatedRoute,
    private _route: ActivatedRoute
    ) 
    {
        //todo: uncomment
        //this.elements = service.getElements();
        //this.data = service.getData();

        //http.get('/api/SampleData/UserData').subscribe(result => {
        //    this.data = result.json();

        //    //this.form = this.qcs.toFormGroup1(this.elements, this.data);
        //    console.log(this.form);
        //    console.log(this.data['emailAddress']);
        //    this.ok = true;
        //});
        
    }

    fetchEvent() {
        return this.http.get('/api/SampleData/UserData').subscribe(result => {
            this.data = result.json();

            // this.form = this.qcs.toFormGroup1(this.elements, this.data);
            console.log(this.data['emailAddress']);
            this.ok = true;
        });
    }

    ngOnInit() { 

      //this.activatedRoute.queryParams.subscribe((params: Params) => {
      //  this.formID = params['formID'];
      //  console.log(this.formID);
      //}); 
        this.formID = this._route.snapshot.params['formID'];
        console.log(this.formID);
        this.objectID = this._route.snapshot.params['objectID'];
        console.log(this.objectID);

        if(this.objectID)
        {
            this._dynamicsService.getDynamic(this.formID, this.objectID)
                        .subscribe(data => {
                            console.log(data);
                            this.data = data;
                        });
        }



        //this.http.get('api/dynamicForms')
        //               .map((res) => {
        //                   console.log(res);
        //                   this.payLoad1 = res.json();
        //                   console.log(this.payLoad1);
        //                   }
        //               );
        //this.payLoad1.subscribe(form=>{return 1;});
        //let qqq=[];
        if(this.elements!=[] && false){
           // this.showElement = true;
        }
        else
        {
        this._dynamicsConfigFormService.getDynamicConfigForm(this.formID)
                      .subscribe(form => {
                        this.elements = form.elements;
                        this.showElement = true;
                      });
        }
        //if(this.formID!=""){
        //
        //}
        
        //this.http.get('/api/SampleData/UserData').subscribe(result => {
        //    this.data = result.json();
        //    this.form = this.qcs.toFormGroup1(this.elements, this.data);
        //    //this.form = this.qcs.toFormGroup1(this.elements, this.data);
        //    //console.log(this.form);
        //    //console.log(this.data['emailAddress']);
        //    //this.ok = true;
        //});

        //console.log(this.data);
        //this.form = this.qcs.toFormGroup1(this.elements, this.data);

        //this.fetchEvent().then(() =>
        //    console.log(this.ev));
        
        //
        //console.log(event);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.data);

        console.log(this.data);
        this.addDynamic();
    }


  addDynamic(): void{
    let p = this.data;
    //Object.assign({}, this.task, this.productForm.value); 
//console.log(p);
console.log(this.data);
if(this.objectID)
{
    console.log('qqqqqqqqqq')
    console.log(p)
    this._dynamicsService.updateDynamic(p,this.formID)
                       .subscribe(dynamic => {
                     console.log('!!!!!!!!!!!!!');
                     console.log(dynamic);
                     //this.tasks.push(JSON.stringify(this.data));
                    // this.productForm.reset();
                   });
}
else{
    this._dynamicsService.addDynamic(p,this.formID)
                   .subscribe(dynamic => {
                     console.log(dynamic);
                     //this.tasks.push(JSON.stringify(this.data));
                    // this.productForm.reset();
                   });
    }
  }
}