export class PreguntasModel {
    categoria: string;
    pregunta: PreguntaModel[];

    constructor(){
        this.pregunta = [],
        this.categoria = '';
    }
}

export class PreguntaModel {
    id: number;
    pregunta: string;
    sugerencia: string;
    respuestaEjemplo: string;

    
    constructor(){
        this.id = 0;
        this.pregunta = '',
        this.sugerencia = '';
        this.respuestaEjemplo = '';
    }
}