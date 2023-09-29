import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Alimento } from 'src/app/model/alimento.model';
import { CentroSalud } from 'src/app/model/centroSalud.model';
import { Comuna } from 'src/app/model/comuna.model';
import { EstadoNutricional } from 'src/app/model/estadoNutricional.model';
import { Fonasa } from 'src/app/model/fonasa.model';
import { GrupoEtareo } from 'src/app/model/grupoEtareo.model';
import { HistorialEntrega } from 'src/app/model/historialEntrega.model';
import { Persona } from 'src/app/model/persona.model';
import { Programa } from 'src/app/model/programa.model';
import { Sector } from 'src/app/model/sector.model';
import { AlimentoService } from 'src/services/alimento.service';
import { CentroService } from 'src/services/centroSalud.service';
import { ComunaService } from 'src/services/comuna.service';
import { EstadoNutricionalService } from 'src/services/estadoNutricional.service';
import { FonasaService } from 'src/services/fonasa.service';
import { GrupoEtareoService } from 'src/services/grupoEtareo.service';
import { HistorialService } from 'src/services/historial.service';
import { PersonaService } from 'src/services/persona.service';
import { ProgramaService } from 'src/services/programa.service';
import { SectorService } from 'src/services/sector.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-entrega-card',
  templateUrl: './entrega-card.component.html',
  styleUrls: ['./entrega-card.component.css']
})
export class EntregaCardComponent {
  public entrega: HistorialEntrega;
  public persona: Persona;
  public comuna: Comuna;
  public centro: CentroSalud;
  public sector: Sector;
  public fonasa: Fonasa;
  public programa: Programa;
  public historial: HistorialEntrega[] = [];
  public dataSource: any;
  public placeholders: any;

  public grupos: GrupoEtareo[] = [];
  public listgrupos:any;
  public estados: EstadoNutricional[] = [];
  public listestados:any
  public alimentos: Alimento[]=[];
  public listalimentos: any;


  constructor(
    private historialServ: HistorialService,
    private personaServ: PersonaService,
    private comunaServ: ComunaService,
    private centroServ: CentroService,
    private programaServ: ProgramaService,
    private sectorServ: SectorService,
    private estadoServ: EstadoNutricionalService,
    private grupoServ: GrupoEtareoService,
    private alimentoServ: AlimentoService,
    private snackBar: MatSnackBar,

  ) {
    this.placeholders = [
      { centro: "" },
      { sector: "" },
      { nombre: "" },
      { apPaterno: "" },
      { apMaterno: "" },
      { numFicha: "" },
      { edad: "" },
      { rut: "" },
      { dir: "" },
      { comuna: "" },
      { prog: "" },
      { fecha: "" },
    ];
    this.entrega = new HistorialEntrega(
         0,//ID_ENTREGA: number,
         "",//RUT: string,
         new Date(),//fechaEntrega: Date,
         0,//ID_GRUPOETAREO: number,
         0,//ID_ESTADONUTRICIONAL: number,
         0,//ID_ALIMENTO: number,
         0,//cantidadEntregada: number,
         new Date(),//fechaProximaEntrega: Date
    )
  }

  ngOnInit(): void {
    this.getSelects();
  }

  nuevaEntrega(form: NgForm) {
    console.log(this.persona);
    this.entrega.RUT = this.persona.RUT;
    this.entrega.fechaEntrega = form.value.inpFechaEntrega;  
    this.entrega.ID_GRUPOETAREO = form.value.inpGrupo;  
    this.entrega.ID_ESTADONUTRICIONAL = form.value.inpEstadoNutricional;  
    this.entrega.ID_ALIMENTO = form.value.inpAlimento;
    this.entrega.cantidadEntregada = form.value.inpCantidad;
    this.entrega.fechaProximaEntrega = form.value.inpFechaProxima;

    console.log(this.entrega);
    

    this.historialServ.create(this.entrega).subscribe(
      (res)=>{
        console.log('Respuesta API', res);
        this.snackBar.open('Entrega Registrada Correctamente','✅',{duration:3000})
      },(error)=>{
        console.error('Error',error);
      }
    );
    form.reset();
    this.getByRut(this.persona.RUT);
  };

  getSelects(){
    this.grupoServ.getAll().subscribe(
      (res) => {
        console.log(res);
        this.grupos = res;
        this.listgrupos = this.grupos;
      }, (error) => {
        console.error('Error', error);
      }
    );
    this.estadoServ.getAll().subscribe(
      (res) => {
        console.log(res);
        this.estados = res;
        this.listestados = this.estados;
      }, (error) => {
        console.error('Error', error);
      }
    );
    this.alimentoServ.getAll().subscribe(
      (res) => {
        console.log(res);
        this.alimentos = res;
        this.listalimentos = this.alimentos;
      }, (error) => {
        console.error('Error', error);
      }
    );
  }

buscarTodos(persona: Persona) {
  this.comunaServ.getOne(this.persona.ID_COMUNA).subscribe(
    (res) => {
      this.comuna = res;
      console.log(this.comuna);
      this.placeholders.comuna = this.comuna.nombreComuna;

    }, (error) => {
      console.error('Error', error);
    }
  );
  this.centroServ.getOne(this.persona.ID_CENTROSALUD).subscribe(
    (res) => {
      this.centro = res;
      console.log(this.centro);
      this.placeholders.centro = this.centro.nombreCentroSalud;
    }, (error) => {
      console.error('Error', error);
    }
  );
  this.sectorServ.getOne(this.persona.ID_SECTOR).subscribe(
    (res) => {
      this.sector = res;
      console.log(this.sector);
      this.placeholders.sector = this.sector.nombreSector;
    }, (error) => {
      console.error('Error', error);
    }
  );
  this.programaServ.getOne(this.persona.ID_PROGRAMA).subscribe(
    (res) => {
      this.programa = res;
      console.log(this.programa);
      this.placeholders.prog = this.programa.nombrePrograma;
    }, (error) => {
      console.error('Error', error);
    }
  );

}

buscarRut(form: NgForm) {
  console.log(this.persona);
  this.personaServ.getOne(form.value.inpBuscar).subscribe(
    (res) => {
      this.persona = res;
      console.log(this.persona);
      this.placeholders.nombre = this.persona.nombre;
      this.placeholders.apPaterno = this.persona.apPaterno;
      this.placeholders.apMaterno = this.persona.apMaterno;
      this.placeholders.numFicha = this.persona.numFicha;
      this.placeholders.edad = this.persona.edad;
      this.placeholders.rut = this.persona.RUT;
      this.placeholders.dir = this.persona.direccion;
      this.placeholders.fecha = this.persona.fechaIngresoProgram.toString();

      this.buscarTodos(this.persona);
      this.getByRut(this.persona.RUT);

    }, (error) => {
      console.error('Error', error);
    }
  );


  form.reset();
};

getByRut(params: any) {
  this.historialServ.getByRut(params).subscribe(
    (res) => {
      this.historial = res;
      this.dataSource = this.historial;
      console.log(this.dataSource);
      
    }, (error) => {
      console.error('Error', error);

    }
  );
};

columnsToDisplay = ['fechaEntrega', 'ID_GRUPOETAREO', 'ID_ESTADONUTRICIONAL', 'ID_ALIMENTO', 'cantidadEntregada', 'fechaProximaEntrega'];


}
