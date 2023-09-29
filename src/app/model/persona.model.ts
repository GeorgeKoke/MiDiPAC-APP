export class Persona {
    constructor(
        public ID_PERSONA:number,
        public RUT: string,
        public nombre: string,
        public apPaterno: string,
        public apMaterno: string,
        public nombreSocial: string,
        public fechaNacimiento: Date,
        public edad: number,
        public telefono: number,
        public direccion: string,
        public ID_COMUNA: number,
        public ID_CENTROSALUD: number,
        public ID_SECTOR: number,
        public numFicha: number,
        public ID_FONASA: number,
        public ID_PROGRAMA: number,
        public fechaIngresoProgram: Date,
    ) { }
}