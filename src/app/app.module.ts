import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';

//Material Modules
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { UsuarioService } from 'src/services/usuario.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import {MatTableModule} from '@angular/material/table';
import { UsuarioSearchComponent } from './components/usuario-search/usuario-search.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { LoginComponent } from './pages/login/login.component';
import { RegistroUsuarioComponent } from './pages/registro-usuario/registro-usuario.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';
import { PersonaFormComponent } from './components/persona-form/persona-form.component';
import { RegistroPacienteComponent } from './pages/registro-paciente/registro-paciente.component';
import { ComunaService } from 'src/services/comuna.service';
import { PersonaService } from 'src/services/persona.service';
import { CentroService } from 'src/services/centroSalud.service';
import { ProgramaService } from 'src/services/programa.service';
import { SectorService } from 'src/services/sector.service';
import { FonasaService } from 'src/services/fonasa.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioFormComponent,
    LoginFormComponent,
    UsuarioListComponent,
    UsuarioSearchComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    NavbarComponent,
    ListarUsuariosComponent,
    PersonaFormComponent,
    RegistroPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatSidenavModule,


  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
    UsuarioService, HttpClient,ComunaService,PersonaService,CentroService,ProgramaService,SectorService,
    FonasaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
