import Global from "src/environments/Global";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class RolService{
    public url: string;

    constructor(private http:HttpClient){
        this.url = Global.API;
    }

    create(rol:any):Observable<any>{
        let params = JSON.stringify(rol);
        let headers = new HttpHeaders().set('Content-type','application/json');
        return this.http.post(this.url+'post-rol',params,{headers:headers})
    }

    getAll():Observable<any>{
        return this.http.get(this.url+'get-roles');
    }

    search(params:string):Observable<any>{
        return this.http.get(`${this.url}get-rol/${params}`)
    }

    
}