import { Injectable }       from    '@angular/core';
import { Http, Headers, RequestOptions }    from    '@angular/http';

//import { IDynamics }   from    '../components/dynamics/dynamics';

import 'rxjs/add/operator/map';

@Injectable()
export class DynamicsService{
    constructor(private _http: Http){

    }


    getDynamics(tableName: any) {

       return this._http.get('api/dynamics/'+tableName)
                       .map(res => res.json());
    }

    getDynamic(tableName: any, objectID: any) {        
        return this._http.get('api/dynamic/'+tableName+'/'+objectID)
                        .map(res => res.json());
    }

    addDynamic(newDynamic: any,tableName: any){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options =  new RequestOptions ({ headers: headers });
        return this._http.post('api/dynamics/'+tableName, JSON.stringify(newDynamic), options)
                         .map(res => res.json());
    }

    deleteDynamic(dynamicId: string) {
        return this._http.delete('api/dynamic/' + dynamicId)
                        .map(res => res.json());
                        
                        
    }

    updateDynamic(dynamic: any, formID: any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options =  new RequestOptions ({ headers: headers });
         return this._http.put('api/dynamic/'+formID+'/' + dynamic._id, JSON.stringify(dynamic), options)
                         .map(res => res.json());
                
        
    }
}