import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  ngOnInit(): void { }

  public usuario: Usuario;
  public status: string;
  public header: string;

  constructor(private usuarioServ: UsuarioService) {
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
      0               // ID_ROL
    );
    this.header = 'Nuevo Usuario';
    this.status = '';
  }

  nuevoUsuario(form: NgForm) {
    this.usuario.username = form.value.inpRut;
    this.usuario.password = form.value.inpPsw;
    this.usuario.email = form.value.inpEmail;
    this.usuario.rut = form.value.inpRut;
    this.usuario.nombre = form.value.inpNombre;
    this.usuario.apPaterno = form.value.inpApPaterno;
    this.usuario.apMaterno = form.value.inpApMaterno;
    this.usuario.fechaNacimiento = form.value.inpFechaNac;
    this.usuario.profesion = form.value.inpProfesion;
    this.usuario.ID_ROL = form.value.inpRol;

    this.usuarioServ.create(this.usuario).subscribe(
      (res)=>{
        console.log('Respuesta de la API', res);
        
        // if(res.status == 'success'){
        //   this.status = 'success';
        //   this.usuario = res.nuevoUsuario;
        //   console.log(this.usuario);
        // }else{
        //   this.status = 'error';
        // }
      },
      (error)=>{
        console.error('Error', error);
      }
    );

  }
}
