import { GlosarioModel } from '../../shared/models/categorias.model';


export const TERMINOS_DEVELOPER: GlosarioModel [] = [
    {
        id: '30a65b08-641d-4ae4-914d-e283d5f774d6',
        titulo: 'Servicios SOAP',
        fechaActualizacion: '2023-07-25',
        mostrar:true,
        linksReferencia: [],
        descripcion: {
            listaTexto: [
                '(protocolo simple de acceso a objetos) Protocolo estándar que define cómo dos objetos en diferentes procesos pueden comunicarse por medio de intercambio de datos XML.',
                'Los servicios SOAP funcionan por lo general por el protocolo HTTP que es lo más común cuando invocamos un Web Services, sin embargo, SOAP no está limitado a este protocolo, si no que puede ser enviado por FTP, POP3, TCP, Colas de mensajería (JMS, MQ, etc)'
            ]
        }

    },
    {
        id: 'f0d6a106-e823-4659-b6f7-dbdcd4d9d687',
        titulo: 'CÓDIGOS HTTP',
        fechaActualizacion: '2023-07-26',
        mostrar:true,
        linksReferencia: [],
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
                {
                    titulo: ['Redirecciones (300–399):'],
                    descripciones: [
                        '300 Multiple Choices',
                        '301 Movido Permanentemente',
                        '302 Found',
                        '303 See Other',
                        '304 Not Modified',
                        '307 Temporary Redirect',
                        '308 Permanent Redirect'
                    ]
                },
                {
                    titulo: ['Errores de los clientes (400–499):'],
                    descripciones: [
                        '400 Petición mala',
                        '401 Unauthorized',
                        '402 Payment Required',
                        '403 Forbidden',
                        '404 Not Found',
                        '405 Method Not Allowed',
                        '406 Not Acceptable',
                        '407 Proxy Authentication Required',
                        '408 Request Timeout',
                        '409 Conflict',
                        '410 Gone',
                        '411 Length Required',
                        '412 Precondition Failed',
                        '413 Payload Too Large',
                        '414 URI Too Long',
                        '416 Range Not Satisfiable',
                        '415 Unsupported Media Type',
                        '417 Expectation Failed',
                        '418 Soy una tetera',
                        '422 Unprocessable Entity',
                        '425 Too Early',
                        '426 Upgrade Required',
                        '428 Precondition Required',
                        '429 Too Many Requests',
                        '431 Request Header Fields Too Large',
                        '451 Unavailable For Legal Reasons'
                    ]
                },
                {
                    titulo: ['Errores de los servidores (500–599):'],
                    descripciones: [
                        '500 Internal Server Error',
                        '501 Not Implemented',
                        '502 Puerta de enlace no válida',
                        '503 Servicio No Disponible',
                        '504 Gateway Timeout',
                        '505 HTTP Version Not Supported',
                        '506 Variant Also Negotiates',
                        '507 Insufficient Storage',
                        '508 Loop Detected',
                        '510 Not Extended',
                        '511 Network Authentication Required'
                    ]
                }
            ]
        }

    },
    {
        id:'31f37ed0-50de-4595-9cf8-c64580261951',
        titulo: 'Polimorfismo',
        fechaActualizacion: '2023-07-26',
        mostrar: true,
        linksReferencia: [],
        descripcion: {
            listaTexto: ['Por lo general diremos que existen 3 tipos de polimorfismo:'],
            listaTituloTexto: [
                {
                    titulo: ['Sobrecarga:'],
                    descripciones: ['El más conocido y se aplica cuando existen funciones con el mismo nombre en clases que son completamente independientes una de la otra.']
                },
                {
                    titulo: ['Paramétrico:'],
                    descripciones:['Existen funciones con el mismo nombre pero se usan diferentes parámetros (nombre o tipo). Se selecciona el método dependiendo del tipo de datos que se envíe.']
                },
                {
                    titulo: ['Inclusión:'],
                    descripciones: ['Es cuando se puede llamar a un método sin tener que conocer su tipo, así no se toma en cuenta los detalles de las clases especializadas, utilizando una interfaz común.']
                }
            ]
        },


    },
    {
        id: '09bdf9b3-104a-412e-abd7-0d083abad6b9',
        titulo: 'Modificadores de acceso',
        fechaActualizacion: '2023-07-26',
        mostrar: true,
        linksReferencia: [],
        descripcion: {
            listaTituloTexto: [
                {
                    titulo: ['público:'],
                    descripciones: ['Se puede acceder al tipo o miembro mediante cualquier otro código en el mismo conjunto u otro conjunto que lo haga referencia.']
                },
                {
                    titulo: ['privado:'],
                    descripciones: ['El tipo o miembro solo se puede acceder por código en la misma clase o estructura.']
                },
                {
                    titulo: ['protegido:'],
                    descripciones: ['Solo se puede acceder al tipo o miembro mediante código en la misma clase o estructura, o en una clase derivada.']
                }
            ]
        }
    },
    {
        id:'10fc20c5-a6d8-4860-94b7-36e52fa5f926',
        titulo: 'PATRONES',
        fechaActualizacion: '2023-07-26',
        mostrar: true,
        linksReferencia: [],
        descripcion: {
            listaTexto: [
                'Se definen como patrones de diseño software que ofrecen soluciones respecto a la interacción y responsabilidades entre clases y objetos, así como los algoritmos que encapsulan.'
            ],
            listaTituloTexto: [
                {
                    titulo: ['Patrones Creacionales:'],
                    descripciones: ['Procuran independizar al sistema de como sus objetos son creados y/o representados.']
                },
                {
                    titulo: ['Patrones Estructurales:'],
                    descripciones: ['Se refieren a cómo las clases y los objetos son organizados para conformar estructuras más complejas.']
                },
                {
                    titulo: ['Patrones de comportamiento:'],
                    descripciones: ['Se centran en los algoritmos y en la asignación de responsabilidades entre los objetos.']
                }
            ]
        }
    },
    {
        id: '2326e34b-1854-4ad4-966e-34c5026b21d8',
        titulo: 'Patrones de creación',
        fechaActualizacion: '2023-07-26',
        mostrar: true,
        linksReferencia: [],
        descripcion: {
            listaTituloTexto: [
                {
                    titulo: ['Abstract Factory:'],
                    descripciones: ['permite trabajar con objetos de diferentes familias de manera que no se mezclen entre sí. De esa manera se consigue que el tipo de familia que se esté utilizando sea transparente.']
                },
                {
                    titulo: ['Builder:'],
                    descripciones: ['abstrae el proceso de creación de los objetos complejos, centralizando en un punto.']
                },
                {
                    titulo: ['Factory Method:'],
                    descripciones:['centraliza en una clase constructora la creación de objetos de un tipo determinado. Ocultando al invocante la necesidad de indicar un tipo u otro.']
                },
                {
                    titulo: ['Prototype:'],
                    descripciones: ['crea un objeto a partir de la clonación de un objeto ya existente.']
                },
                {
                    titulo: ['Singleton:'],
                    descripciones: ['garantiza que solo exista una instancia de un objeto y que la forma de acceder a dicha instancia sea general.']
                }
            ]
        }
    },
    {
        id: 'da634ea1-e151-4cca-875b-26ce6116b821',
        titulo: 'Patrones de comportamiento',
        fechaActualizacion: '2023-07-26',
        mostrar: true,
        linksReferencia: [],
        descripcion: {
            listaTituloTexto: [
                {
                    titulo: ['Chain of Responsibility (Cadena de responsabilidad): '],
                    descripciones: ['Permite establecer la línea que deben llevar los mensajes para que los objetos realicen la tarea indicada.']
                },
                {
                    titulo: ['Command (Orden):'],
                    descripciones: ['Encapsula una operación en un objeto, permitiendo ejecutar dicha operación sin necesidad de conocer el contenido de la misma.']
                },
                {
                    titulo: ['Interpreter (Intérprete):'],
                    descripciones: ['Dado un lenguaje, define una gramática para dicho lenguaje, así como las herramientas necesarias para interpretarlo.']
                },
                {
                    titulo: ['Iterator (Iterador):'],
                    descripciones: ['Permite realizar recorridos sobre objetos compuestos independientemente de la implementación de estos.']
                },
                {
                    titulo: ['Mediator (Mediador): '],
                    descripciones: ['Define un objeto que coordine la comunicación entre objetos de distintas clases, pero que funcionan como un conjunto.']
                },
                {
                    titulo: ['Memento (Recuerdo):'],
                    descripciones: ['Permite volver a estados anteriores del sistema.']
                },
                {
                    titulo: ['Observer (Observador): '],
                    descripciones: ['Define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambie de estado se notifique y actualicen automáticamente todos los objetos que dependen de él.']
                },
                {
                    titulo: ['State (Estado): '],
                    descripciones: ['Permite que un objeto modifique su comportamiento cada vez que cambie su estado interno.']
                },
                {
                    titulo: ['Strategy (Estrategia): '],
                    descripciones: ['Permite disponer de varios métodos para resolver un problema y elegir cuál utilizar en tiempo de ejecución.']
                },
                {
                    titulo: ['Template Method (Método plantilla): '],
                    descripciones: ['Define en una operación el esqueleto de un algoritmo, delegando en las subclases algunos de sus pasos, esto permite que las subclases redefinan ciertos pasos de un algoritmo sin cambiar su estructura.']
                },
                {
                    titulo: ['Visitor (Visitante): '],
                    descripciones: ['Permite definir nuevas operaciones sobre una jerarquía de clases sin modificar las clases sobre las que opera.']
                }
            ]
        }
    },
    {
        id: 'd020111b-13a6-4fda-8234-8f5a388e2f66',
        titulo: 'Patrones estructurales',
        fechaActualizacion: '2023-07-26',
        mostrar: true,
        linksReferencia: [],
        descripcion: {
            listaTituloTexto: [
                {
                    titulo: ['Adapter o Wrapper (Adaptador o Envoltorio): '],
                    descripciones: ['Adapta una interfaz para que pueda ser utilizada por una clase que de otro modo no podría utilizarla.']
                },
                {
                    titulo: ['Bridge (Puente): '],
                    descripciones: ['Desacopla una abstracción de su implementación.']
                },
                {
                    titulo: ['Composite (Objeto compuesto): '],
                    descripciones: ['Permite tratar objetos compuestos como si de uno simple se tratase.']
                },
                {
                    titulo: ['Decorator (Decorador): '],
                    descripciones: ['Añade funcionalidad a una clase dinámicamente.']
                },
                {
                    titulo: ['Facade (Fachada): '],
                    descripciones: ['Provee de una interfaz unificada simple para acceder a una interfaz o grupo de interfaces de un subsistema.']
                },
                {
                    titulo: ['Flyweight (Peso ligero): '],
                    descripciones: ['Reduce la redundancia cuando gran cantidad de objetos poseen idéntica información.']
                },
                {
                    titulo: ['Proxy: Proporciona un intermediario de un objeto para controlar su acceso.']
                }
            ]
        }
    },
    {
        id: '13365d8f-c2cd-4f05-b427-6816a5ea1fa6',
        titulo: 'ERPs (Enterprise Resource Planning)',
        fechaActualizacion: '2023-08-25',
        mostrar: true,
        linksReferencia: [],
        descripcion: {
            listaTexto: [
                'Sistemas de Planificación de Recursos Empresariales',
                'Se refiere a programas y herramientas que permiten realizar procesos de organización, gestión, administración, etc. Como por ejemplo: "Splunk" para revisar logs y el funcionamiento de peticiones, "Postman" como plataforma API.'
            ]
        }
    }
]