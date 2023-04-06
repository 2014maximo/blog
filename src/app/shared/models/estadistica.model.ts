export class ClasificacionModel {
    public id: any;
    public sorteo: number;
    public fecha: string;
    public signo: string;
    public nUno: ConteoModel;
    public nDos: ConteoModel;
    public nTres: ConteoModel;
    public nCuatro: ConteoModel;

    constructor(){
        this.sorteo = 0;
        this.fecha = '';
        this.signo = '';
        this.nUno = new ConteoModel();
        this.nDos = new ConteoModel();
        this.nTres = new ConteoModel();
        this.nCuatro = new ConteoModel();
    }
}

export class ConteoModel {
    // base
    public numero: number = 0;

    // numbers
    public nCero: number = 0;
    public nUno: number = 0;
    public nDos: number = 0;
    public nTres: number = 0;
    public nCuatro: number = 0;
    public nCinco: number = 0;
    public nSeis: number = 0;
    public nSiete: number = 0;
    public nOcho: number = 0;
    public nNueve: number = 0;

    // strings
    public cCero: string;
    public cUno: string;
    public cDos: string;
    public cTres: string;
    public cCuatro: string;
    public cCinco: string;
    public cSeis: string;
    public cSiete: string;
    public cOcho: string;
    public cNueve: string;

    constructor() {
       this.cCero = 'frio';
       this.cUno = 'frio';
       this.cDos = 'frio';
       this.cTres = 'frio';
       this.cCuatro = 'frio';
       this.cCinco = 'frio';
       this.cSeis = 'frio';
       this.cSiete = 'frio';
       this.cOcho = 'frio';
       this.cNueve = 'frio';
    }
}