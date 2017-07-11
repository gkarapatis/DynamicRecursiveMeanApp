import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

//import { QuestionBase }              from './question-base';
//import { QuestionControlService }    from './question-control.service';

@Component({
  moduleId: module.id,
  selector: 'drop-down-config',
  templateUrl: 'drop-down-config.component.html',
})
export class DropDownConfigComponent implements OnInit {

  @Input() element : any;
  payLoad = '';

  //constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {  
    this.element.key='';
    this.element.label='';
    this.element.required= false;
    this.element.showColumn= true;
    this.element.options=[]//array  of object with key & value 
  }

    addItem(event:any) {
      let x = this.element.options.length;
      this.element.options[x]={key:'',value:''};        
    }

}
