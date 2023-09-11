import { Injectable, Inject } from '@angular/core';
import { getUsuario } from './login.db.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  user:string;
  pass:string;
  constructor(@Inject(String)username:string, @Inject(String)password:string) {
    this.user = username
    this.pass = password
  }
  getUsuario():string{
    var result = getUsuario(this.user, this.pass)
    return result.toString();
  }
}
