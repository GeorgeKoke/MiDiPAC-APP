import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroUsuarioComponent } from './pages/registro-usuario/registro-usuario.component';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';
import { RegistroPacienteComponent } from './pages/registro-paciente/registro-paciente.component';
import { EntregaCardComponent } from './components/entrega-card/entrega-card.component';
import { RegistroEntregaComponent } from './pages/registro-entrega/registro-entrega.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'paciente/entrega',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'usuario/listar', component: ListarUsuariosComponent },
  { path: 'usuario/registro', component: RegistroUsuarioComponent },
  { path: 'paciente/registro', component: RegistroPacienteComponent },
  { path: 'paciente/entrega', component: RegistroEntregaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
