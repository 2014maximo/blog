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
        code: 'Hello World'
    }
]

export const TS_INSTALACION_TEMPLATE_3 = `
console.log('Hello World')`;

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

export const TS_INSTALACION_TEMPLATE_5: CodeModel []=[
    {
        mostrarRuta:true,
        code:'node app.ts',
        textRuta:'C:/Users/Dev/Documents/Typescript> '
    },
    {
        mostrarRuta:false,
        code:'77'
    }
]

export const TS_INSTALACION_TEMPLATE_6 = `
function added (numOne, numTwo){
    return numOne + numTwo
}
let add = added(70,7)
console.log(add);
`;