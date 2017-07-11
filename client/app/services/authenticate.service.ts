import { Injectable }       from    '@angular/core';
import { Http, Headers, RequestOptions }    from    '@angular/http';


import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticateService{
    constructor(private _http: Http){

    }

    getToken(role: string) {
        return this._http.get('api/getToken/'+role)
                        .map(res => res.json());
    }

    
}