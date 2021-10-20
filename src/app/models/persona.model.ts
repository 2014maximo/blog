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