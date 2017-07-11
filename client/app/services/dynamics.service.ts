import { Injectable }       from    '@angular/core';
import { Http, Headers, RequestOptions }    from    '@angular/http';

//import { IDynamics }   from    '../components/dynamics/dynamics';

import 'rxjs/add/operator/map';

@Injectable()
export class DynamicsService{
    constructor(private _http: Http){

    }

    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    token = this.currentUser.token;
    headers = new Headers({'x-access-token':this.token});//{ headers: {'x-access-token': this.token} };//new Headers({ 'x-access-token':this.token });
    options =  new RequestOptions ({ headers: this.headers });

    getDynamics(tableName: any) {

       return this._http.get('api/dynamics/'+tableName,this.options)
                       .map(res => res.json());
    }

    getDynamic(tableName: any, objectID: any) {        
        return this._http.get('api/dynamic/'+tableName+'/'+objectID,this.options)
                        .map(res => res.json());
    }

    addDynamic(newDynamic: any,tableName: any){
        let headers = new Headers({'x-access-token':this.token});//{ headers: {'x-access-token': this.token} };//new Headers({ 'x-access-token':this.token });
        //let headers = { headers: {'x-access-token': this.token} };//new Headers({ 'x-access-token':this.token });
        let options =  new RequestOptions ({ headers: headers });

        return this._http.post('api/dynamics/'+tableName, JSON.stringify(newDynamic), this.options)
                         .map(res => res.json());
    }

    deleteDynamic(dynamicId: string) {
        return this._http.delete('api/dynamic/' + dynamicId,this.options)
                        .map(res => res.json());
                        
                        
    }

    updateDynamic(dynamic: any, formID: any) {
         return this._http.put('api/dynamic/'+formID+'/' + dynamic._id, JSON.stringify(dynamic), this.options)
                         .map(res => res.json());
                
        
    }
}