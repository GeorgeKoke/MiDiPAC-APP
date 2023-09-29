import { Component } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { Comuna } from 'src/app/model/comuna.model';
import { ComunaService } from 'src/services/comuna.service';
import { CentroSalud } from 'src/app/model/centroSalud.model';
import { Programa } from 'src/app/model/programa.model';
import { Sector } from 'src/app/model/sector.model';
import { Fonasa } from 'src/app/model/fonasa.model';
import { CentroService } from 'src/services/centroSalud.service';
import { ProgramaService } from 'src/services/programa.service';
import { SectorService } from 'src/services/sector.service';
import { FonasaService } from 'src/services/fonasa.service';
import { PersonaService } from 'src/services/persona.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent {
  public centroSelected: string = "0";
  public persona: Persona;
  public comunas: Comuna[] = [];
  public listcomunas: any;
  public centros: CentroSalud[] = [];
  public listcentros: any;
  public programas: Programa[] = [];
  public listprogramas: any;
  public sectores: Sector[] = [];
  public listsectores: any;
  public letras: Fonasa[] = [];
  public listletras: any;

  constructor(
    private personaServ: PersonaService,
    private comunaServ: ComunaService,
    private centroServ: CentroService,
    private programaServ: ProgramaService,
    private sectorServ: SectorService,
    private fonasaServ: FonasaService,
  ) {
    this.persona = new Persona(
      0,  //ID_PERSONA
      "", //RUT
      "", //nombre
      "", //apPaterno
      "", //apMaterno
      "", //nombreSocial
      new Date(), // fechaNacimiento
      0, // edad
      0, // teléfono
      "", //direccion
      0, // ID_COMUNA
      0, // ID_CENTROSALUD
      0, // ID_SECTOR
      0, // numFicha
      0, // ID_FONASA
      0, // ID_PROGRAMA
      new Date() // FechaIngresoPrograma
    );
  }

  ngOnInit(): void {
    this.getSelects();
  }

  getSelects() {
    this.comunaServ.getAll().subscribe(
      (res) => {
        console.log(res);
        this.comunas = res;
        this.listcomunas = this.comunas;
        console.log(this.listcomunas);

      }, (error) => {
        console.error('Error', error);
      }
    );
    this.centroServ.getAll().subscribe(
      (res) => {
        console.log(res);
        this.centros = res;
        this.listcentros = this.centros;
        console.log(this.listcentros);

      }, (error) => {
        console.error('Error', error);
      }
    );
    this.sectorServ.getAll().subscribe(
      (res) => {
        console.log(res);
        this.sectores = res;
        this.listsectores = this.sectores;
        console.log(this.listsectores);

      }, (error) => {
        console.error('Error', error);
      }
    );
    this.fonasaServ.getAll().subscribe(
      (res) => {
        console.log(res);
        this.letras = res;
        this.listletras = this.letras;
        console.log(this.listletras);

      }, (error) => {
        console.error('Error', error);
      }
    );
    this.programaServ.getAll().subscribe(
      (res) => {
        console.log(res);
        this.programas = res;
        this.listprogramas = this.programas;
        console.log(this.listprogramas);

      }, (error) => {
        console.error('Error', error);
      }
    );

  }

  nuevaPersona(form: NgForm){
    this.persona.RUT = form.value.inpRut;
    this.persona.nombre = form.value.inpNombre;
    this.persona.apPaterno = form.value.inpApPaterno;   
    this.persona.apMaterno = form.value.inpApMaterno; 
    this.persona.nombreSocial = form.value.inpNombreSocial;
    this.persona.fechaNacimiento = form.value.inpFechaNac;
    this.persona.edad = form.value.inpEdad;
    this.persona.telefono = form.value.inpTelefono;
    this.persona.direccion = form.value.inpDireccion;
    this.persona.ID_COMUNA = form.value.inpComuna;
    this.persona.ID_CENTROSALUD = form.value.inpCentro;
    this.persona.ID_SECTOR = form.value.inpSector;
    this.persona.numFicha = form.value.inpNumFicha;
    this.persona.ID_FONASA = form.value.inpFonasa;
    this.persona.ID_PROGRAMA = form.value.inpPrograma;
    this.persona.fechaIngresoProgram = form.value.inpFechaIngreso;

    // console.log(this.persona);
    this.personaServ.create(this.persona).subscribe(
      (res)=>{
        console.log('Respuesta API', res);
      },
      (error)=>{
        console.error('Error',error);
      }
    );
    form.reset();
  }
}
