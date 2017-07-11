import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

//import { QuestionBase }              from './question-base';
//import { QuestionControlService }    from './question-control.service';

@Component({
      moduleId: module.id,
  selector: 'text-box-config',
  templateUrl: 'text-box-config.component.html',
})
export class TextBoxConfigComponent implements OnInit {

  @Input() element : any;

  ngOnInit() {
    this.element.key='';
    this.element.label='';
    this.element.required= false;
    this.element.showColumn= true;
  }

  onSubmit() {
   
  }
}
