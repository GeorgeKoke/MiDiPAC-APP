export class Usuario{
    constructor(
        public ID_USUARIO:number,
        public username:string,
        public password:string,
        public email:string,
        public rut: string,
        public nombre: string,
        public apPaterno: string,
        public apMaterno: string,
        public fechaNacimiento: Date,
        public profesion: string,
        public ID_ROL: number,
        public fechaRegistro: Date

    ){}
}