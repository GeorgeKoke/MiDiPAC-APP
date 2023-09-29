import Global from "src/environments/Global";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AlimentoService{
    public url: string;

    constructor(private http:HttpClient){
        this.url = Global.API;
    }

    create(alimento:any):Observable<any>{
        let params = JSON.stringify(alimento);
        let headers = new HttpHeaders().set('Content-type','application/json');
        return this.http.post(this.url+'post-alimento',params,{headers:headers})
    }

    getAll():Observable<any>{
        return this.http.get(this.url+'get-alimentos');
    }

    getOne(params:any):Observable<any>{
        return this.http.get(`${this.url}get-alimento/${params}`)
    }

    
}