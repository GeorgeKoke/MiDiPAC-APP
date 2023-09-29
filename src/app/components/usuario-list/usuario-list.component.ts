import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})

export class UsuarioListComponent {
  public usuarios: Usuario[] = [];
  public dataSource: any;

  constructor(
    private usuarioServ: UsuarioService
  ) { }

  ngOnInit():void {
    this.getAll();
  }

  getAll() {
    this.usuarioServ.getAll().subscribe(
      (res) => {
        console.log(res);
        this.usuarios = res;
        this.dataSource = this.usuarios;
        console.log(this.dataSource);

      }, (error) => {
        console.error('Error', error);
      }
    )
  }


  columnsToDisplay = ['ID_USUARIO', 'rut', 'password', 'nombre', 'apPaterno', 'apMaterno', 'profesion', 'ID_ROL'];
}
