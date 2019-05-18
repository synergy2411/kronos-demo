import { User } from './../model/user';
import { USER_DATA } from './../model/mocks';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { map } from 'rxjs/operators';

@Injectable()
export class DataService{
    constructor(private httpClient : HttpClient){}
    getData(){
        return USER_DATA;
    }
    getApiData(){
        return this.httpClient.get("https://kronos-app-ng.firebaseio.com/userdata.json")
                // .map(response => <User[]> response)
                
            .pipe(map(response => {
                console.log(response)
                return response;
            }))
    }
}