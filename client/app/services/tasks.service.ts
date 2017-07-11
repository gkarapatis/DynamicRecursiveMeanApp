import { Injectable }       from    '@angular/core';
import { Http, Headers, RequestOptions }    from    '@angular/http';

import { ITasks }   from    '../components/tasks/tasks';

import 'rxjs/add/operator/map';

@Injectable()
export class TasksService{
    constructor(private _http: Http){

    }

    getTasks() {
        console.log('!!!!!!!!');
        return this._http.get('api/tasks')
                        .map(res => res.json());
    }

    addTask(newTask: ITasks){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options =  new RequestOptions ({ headers: headers });

        return this._http.post('api/task', JSON.stringify(newTask), options)
                         .map(res => res.json());
    }

    deleteTask(taskId: string) {
        return this._http.delete('api/task/' + taskId)
                        .map(res => res.json());
                        
                        
    }

    updateTask(task: ITasks) {
        console.log("Update...");
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options =  new RequestOptions ({ headers: headers });

         return this._http.put('api/task/' + task._id, JSON.stringify(task), options)
                         .map(res => res.json());
                
        
    }
}