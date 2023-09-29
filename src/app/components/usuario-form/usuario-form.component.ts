import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/services/usuario.service';
import { RolService } from 'src/services/rol.service';
import { Rol } from 'src/app/model/rol.model';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  public roles: Rol[] = [];
  public listRoles:any;
  public usuario: Usuario;
  public status: string;
  public header: string;
  public nombre:string;
  // @Input() usuarioBuscado:Usuario;


  ngOnInit(): void {
    this.cargarRoles();
  }



  constructor(
    private usuarioServ: UsuarioService,
    private rolServ: RolService
    ) {
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
    this.header = 'Nuevo Usuario';
    this.status = '';
    
  }

  cargarRoles(){
    this.rolServ.getAll().subscribe(
      (res) => {
        console.log(res);
        this.roles = res;
        this.listRoles = this.roles;
        console.log(this.listRoles);

      }, (error) => {
        console.error('Error', error);
      }
    );
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
      },
      (error)=>{
        console.error('Error', error);
      }
    );
    form.reset();
  }

  cargarDatosAlForm(usuario:Usuario){
     this.usuario = usuario;
    
  }
  

}
