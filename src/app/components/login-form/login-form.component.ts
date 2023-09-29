import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  login(form:NgForm){
    console.log("Login...");
    console.log(`Usuario: ${form.value.inpRut}
    Password: ${form.value.inpPsw}`);
    form.reset()
  }
}
