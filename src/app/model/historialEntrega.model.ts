export class HistorialEntrega {
    constructor(
        public ID_ENTREGA: number,
        public RUT: string,
        public fechaEntrega: Date,
        public ID_GRUPOETAREO: number,
        public ID_ESTADONUTRICIONAL: number,
        public ID_ALIMENTO: number,
        public cantidadEntregada: number,
        public fechaProximaEntrega: Date
    ) { }
}