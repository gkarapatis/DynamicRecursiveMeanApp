import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

//import { QuestionBase }              from './question-base';
//import { QuestionControlService }    from './question-control.service';

@Component({
      moduleId: module.id,
  selector: 'grid-config',
  templateUrl: 'grid-config.component.html',
})
export class GridConfigComponent implements OnInit {

  @Input() element : any;

  ngOnInit() {
    this.element.key = ''; 
    this.element.elements = [];
  }

  onSubmit() {
   
  }
}
