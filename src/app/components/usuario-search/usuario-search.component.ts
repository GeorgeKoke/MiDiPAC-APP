import { Component, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/services/usuario.service';
import { UsuarioFormComponent } from '../usuario-form/usuario-form.component';

@Component({
  selector: 'app-usuario-search',
  templateUrl: './usuario-search.component.html',
  styleUrls: ['./usuario-search.component.css']
})
export class UsuarioSearchComponent {
  public usuario: Usuario;
  @ViewChild(UsuarioFormComponent) usuarioForm: UsuarioFormComponent;

  constructor(private usuarioServ:UsuarioService){
    this.usuario = new Usuario(
      0,               // ID_USUARIO
      '',              // username
      '',              // password
      '',              // email
      '',              // rut
      '',              // nombre
      '',              // apPaterno
      '',              // apMaterno
      new Date(),      // fechaNacimiento (usamos la fecha actual como valor predeterminado)
      '',              // profesion
      0,               // ID_ROL
      new Date()       //fechaRegistro (se usa fecha actual como valor predeterminado)
    );
  }

  search(form:NgForm){
    this.usuarioServ.search(form.value.inpSearch).subscribe(
      (res)=>{
        console.log('Respuesta de la API', res);
        this.usuario = res;
        this.usuarioForm.cargarDatosAlForm(this.usuario);
        // console.log(this.usuario.nombre);
      },
      (error)=>{
        console.error('Error', error);
      }
    );
    form.reset();
    
  }

}
