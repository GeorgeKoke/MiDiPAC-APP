import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent {

  nuevoUsuario(form:NgForm){
    const password = form.value.inpPsw;
    const email = form.value.inpEmail;
    const rut = form.value.inpRut;

    alert(`rut: ${rut} - email: ${email}`);
  }
}
