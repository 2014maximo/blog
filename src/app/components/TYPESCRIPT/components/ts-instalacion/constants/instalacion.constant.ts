import { CodeModel } from "@shared/components/print-code/models/ts-instalacion.model";

export const TS_INSTALACION_TEMPLATE_1: CodeModel[] = [
    {
        mostrarRuta:true,
        code:'sudo apt install node-typescript'
    }
]

export const TS_INSTALACION_TEMPLATE_2: CodeModel[]=[
    {
        code: 'node app.ts',
        mostrarRuta:true
    },
    {
        mostrarRuta: false,
        code: 'Hola Mundo'
    }
]

export const TS_INSTALACION_TEMPLATE_3 = `
console.log('Hola Mundo')`;

export const TS_INSTALACION_TEMPLATE_4: CodeModel [] = [
    {
        code:'npm install -g typescript',
        mostrarRuta:true,
        textRuta:'C:/Users/Dev/Documents/Typescript> '
    },
    {
        code:'changed 1 package in 8s',
        mostrarRuta:false
    }
]