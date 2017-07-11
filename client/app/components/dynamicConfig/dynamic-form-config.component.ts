import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { DynamicsConfigFormService }  from  '../../services/dynamics.config.service';

@Component({
      moduleId: module.id,
  selector: 'dynamic-form-config',
  templateUrl: 'dynamic-form-config.component.html',
  providers: [ DynamicsConfigFormService ]
})
export class DynamicFormConfigComponent implements OnInit {

  @Input() elements: any[]=[];
  @Input() formID: string = "";
  forms:any[];

  constructor(private _dynamicsConfigFormService: DynamicsConfigFormService) {  }

  ngOnInit() {

      this._dynamicsConfigFormService.getDynamicConfigForms()
                      .subscribe(forms => {
                        this.forms = forms;
                      });

   // this.form = this.qcs.toFormGroup(this.questions);
  }

  addTextbox(event: any) {
    let row = this.elements.length;
    this.elements[row]={};
    this.elements[row].controlType = 'textbox'; 
    this.elements[row].order = this.elements.length+1;
  }

  addTable(event: any) {
    let row = this.elements.length;
    this.elements[row]={};
    this.elements[row].controlType = 'grid';
    this.elements[row].order = this.elements.length+1;
  }

  addDropDown(event: any) {
    let row = this.elements.length;
    this.elements[row]={};
    this.elements[row].controlType = 'dropdown';
    this.elements[row].order = this.elements.length+1;
  }

  addForm(formID: string){
    let row = this.elements.length;
    this.elements[row]={};
    this.elements[row].controlType = 'form';
    this.elements[row].key = formID;
    this.elements[row].order = this.elements.length+1;
    this.elements[row].formID  = formID;
  }

  submitForm(event: any) {
    var ooo = {}
    ooo['formID'] = this.formID;
    ooo['elements'] = this.elements;

   this._dynamicsConfigFormService.addDynamicConfigForm(ooo)
                   .subscribe(dynamicForm => {
                     console.log(dynamicForm);
                   });


  }
}
