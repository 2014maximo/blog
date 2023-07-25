import { GlosarioModel } from '../../shared/models/categorias.model';


export const TERMINOS_DEVELOPER: GlosarioModel [] = [
    {
        id: '30a65b08-641d-4ae4-914d-e283d5f774d6',
        titulo: 'Servicios SOAP',
        fechaActualizacion: '2023-07-25',
        mostrar:true,
        linkReferencia: '',
        descripcion: {
            listaTexto: [
                'Protocolo estándar que define cómo dos objetos en diferentes procesos pueden comunicarse por medio de intercambio de datos XML.',
                'Los servicios SOAP funcionan por lo general por el protocolo HTTP que es lo más común cuando invocamos un Web Services, sin embargo, SOAP no está limitado a este protocolo, si no que puede ser enviado por FTP, POP3, TCP, Colas de mensajería (JMS, MQ, etc)'
            ]
        }

    },
    {
        id: 'f0d6a106-e823-4659-b6f7-dbdcd4d9d687',
        titulo: 'CÓDIGOS HTTP',
        fechaActualizacion: '2023-07-25',
        mostrar:true,
        linkReferencia: '',
        descripcion: {
            listaTituloTexto: [
                {
                    titulo: ['Respuestas informativas (100–199):'],
                    descripciones: [
                        '100 Continue',
                        '101 Switching Protocols',
                        '103 Early Hints'
                    ]
                },
                {
                    titulo: ['Respuestas satisfactorias (200–299):'],
                    descripciones: [
                        '200 OK',
                        '201 Created',
                        '203 Non-Authoritative Information',
                        '204 No Content ',
                        '205 Reset Content',
                        '206 Partial Content'
                    ]
                },
            ]
        }

    },
]