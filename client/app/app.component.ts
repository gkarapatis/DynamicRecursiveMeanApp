import { Component, ViewEncapsulation } from '@angular/core';
import {  AuthenticateService }  from  './services/authenticate.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [AuthenticateService]

})

export class AppComponent  {
  pageTitle: string = 'MongoDB ExpressJS Angular NodeJS App';
  showForm:boolean = false;
  elements: any[]=[];
    constructor(private _authenticateService: AuthenticateService) 
    {}

    showForm1(event: any) 
    {
      this.showForm = !this.showForm;
    }

    login(role: string){
        this._authenticateService.getToken(role)
          .subscribe(token => {
            localStorage.setItem('currentUser', JSON.stringify(token));
                        //this.token = token;
                        //console.log(token);
                      });
    }

    logout(){
        localStorage.removeItem('currentUser');
    }

}
