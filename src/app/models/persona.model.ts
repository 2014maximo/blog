export class PersonaModel {
    id?: number = 0;
    name?: string = '';
    email?: string = '';
    gender?: string = '';
    status?: string = '';
}

export class DataModel {
    data?: PersonaModel = {};
    meta?: any;
}

export class Usuario {
/*  public id: number = 0;
    public first_name: string = '';
    public last_name: string = '';
    public avatar: string = ''; */

    constructor(
        public id: number,
        public first_name: string,
        public last_name: string,
        public avatar: string
    ) {}
}