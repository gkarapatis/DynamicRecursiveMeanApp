import { Injectable }       from    '@angular/core';
import { Http, Headers, RequestOptions }    from    '@angular/http';

//import { IDynamics }   from    '../components/dynamics/dynamics';

import 'rxjs/add/operator/map';

@Injectable()
export class DynamicsConfigFormService{
    constructor(private _http: Http){

    }

    getDynamicConfigForms() {
        return this._http.get('api/dynamicForms')
                        .map(res => res.json());
    }

    getDynamicConfigForm(formID:string) {
        return this._http.get('api/dynamicForm/'+formID)
                        .map(res => res.json());
    }

    addDynamicConfigForm(newDynamic: any){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options =  new RequestOptions ({ headers: headers });

        return this._http.post('api/dynamicForm', JSON.stringify(newDynamic), options)
                         .map(res => res.json());
    }

    deleteDynamicConfigForm(dynamicId: string) {
        return this._http.delete('api/dynamicConfigForm/' + dynamicId)
                        .map(res => res.json());
                        
                        
    }

    updateDynamicConfigForm(dynamic: any) {
        console.log("Update...");
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options =  new RequestOptions ({ headers: headers });

         return this._http.put('api/DynamicConfigForm/' + dynamic._id, JSON.stringify(dynamic), options)
                         .map(res => res.json());
                
        
    }
}