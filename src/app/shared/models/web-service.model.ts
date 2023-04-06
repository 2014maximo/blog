export interface AstroSolModel {
    fecha?: string;
    uno?: number;
    dos?: number;
    tres?: number;
    cuatro?: number;
    signo?: number;
}

export class FrasesModel {
    frase: string;
    autor: string;
    borde: string;
    colorText: string;
    id: number;

    constructor(){
        this.frase = '';
        this.autor = '';
        this.borde = '';
        this.colorText = '';
        this.id = 0;
    }
}