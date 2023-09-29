import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav-items',
  templateUrl: './sidenav-items.component.html',
  styleUrls: ['./sidenav-items.component.css']
})
export class SidenavItemsComponent {
  public linkList =[
    {title: 'Nuevo Paciente', url: '/paciente/registro',icon:'person_add'},
    {title: 'Nuevo Usuario', url: '/usuario/registro',icon:'badge'},
    {title: 'Listar Usuarios', url: '/usuario/listar',icon:'recent_actors'},
    {title: 'Registro de Entregas', url: '/paciente/entrega',icon:'topic'},
  ];
}
