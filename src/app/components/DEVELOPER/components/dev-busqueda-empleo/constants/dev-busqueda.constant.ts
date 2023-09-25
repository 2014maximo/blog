import { PreguntasModel } from "@components/DEVELOPER/models/dev-busqueda.model";

export const MARKETING = [
    'Ampliar la red con contactos de valor, según mi perfil y lo que busco.',
    'Se necesita estar publicando contenido de valor.',
    'Comentar, hacer comentarios fuertes propositivos ejemplo: "guau" que buen artículo porque...',
    'Escribir un resumen atractivo que destaquen logro y propuestas de valor.',
    'Añadir mensaje personalizado al enviar solicitudes de conexión, para explicar porque deseas conectarte.',
    'Seguir a las empresas que me interesen y a los reclutadores de las empresas.',
    'Unirme a grupos relacionados con tu industria o área de interes, en ellos participa en convesaciones, comparte conocimientos y establece conexiones valiosas.'
];

export const PREGUNTAS: PreguntasModel[] = [
    {
        categoria: 'PERSONALES',
        pregunta:[
            {
                id:1,
                pregunta:'',
                respuestaSugerida:''
            }
        ]
    },
    {
        categoria: 'LABORALES',
        pregunta:[]
    },
    {
        categoria: 'ESTUDIOS',
        pregunta:[]
    },
    {
        categoria: 'TÉCNICAS HTML, CSS Y JAVASCRIPT',
        pregunta:[
            {
                id:1,
                pregunta:'¿Qué atributo de HTML se emplea para definir los estilos en línea?',
                respuestaSugerida:'Es el atributo style.'
            },
            {
                id:2,
                pregunta:'¿Qué etiqueta de HTML se emplea para definir una hoja de estilo externa?',
                respuestaSugerida:'Es la etiqueta link y se agrega la ruta en el atributo src.'
            },
            {
                id:3,
                pregunta:'¿Qué pseudo clase se emplea para definir una propiedad cuando el cursor del ratón se sitúa sobre un elemento?',
                respuestaSugerida:'La pseudo clase hover antecedido de dos puntos.'
            },
            {
                id:4,
                pregunta:'En CSS ¿ Cuál es la diferencia entre las propiedades margin y padding?',
                respuestaSugerida:'Margin es el espacio fuera del elemento DOM y padding se aplica dentro del cuerpo del elemento DOM al cual se le esta aplicando la clase.'
            },
            {
                id:5,
                pregunta:'¿Qué significan las siglas CSS?',
                respuestaSugerida:'Cascade Style Sheet'
            },
            {
                id:6,
                pregunta:'En CSS3 ¿Qué significan la "A" en RGBA?',
                respuestaSugerida:'Las 4 significan R:red, G:green, B:blue, A:alpha (transparencia)'
            },
            {
                id:7,
                pregunta:'¿Cómo asignas estilos para distintos dispositivos y resoluciones?',
                respuestaSugerida:'A través de la propiedad @media dentro de los estilos en cascada.'
            },
            {
                id:8,
                pregunta:'¿Qué estaría definiendo al utilizar flex-direction: column; en un elemento con display: flex;?',
                respuestaSugerida:'que los elementos dentro del display: flex se formen en forma de columna.'
            },
            {
                id:9,
                pregunta:'Explica cuál es la función de @import en SASS',
                respuestaSugerida:'El objetivo de la directiva @import es conectar varios archivos SASS o SCSS a un archivo del tipo SASS o SCSS, con la finalidad de ordenar separadamente el código.'
            },
            {
                id:10,
                pregunta:'Explica cuál es la función de @extend en SASS',
                respuestaSugerida:'Esta directiva tiene una cualidad especial al permitir heredar características de una clase o selector a otro selector, evitando la repetición de estilos.'
            },
            {
                id:11,
                pregunta:'Explica cuando puedes utilizar el % placeholder en SASS',
                respuestaSugerida:'Se utiliza al crear un grupo de estilos %nombre {caracteristicas css}, luego de crearse funciona dentro de una clase cuando se hace referencia a la herencia de %nombre y por lo tanto hereda los estilos, de esta forma: .clase { @extend %nombre;}'
            },
            {
                id:12,
                pregunta:'Explica con tus propias palabras cómo los Mixins (@mixin) de SASS pueden ser útiles',
                respuestaSugerida:'Permite reutilizar estilos y propiedades CSS en tus hojas de estilo de una manera modular y eficiente. Una gran utilidad es poder pasar parámetros a un mixin anterior y utilizar todas las características de ese mixin con el parámetro que se envía.'
            },
            {
                id:13,
                pregunta:'En HTML, el atributo title se emplea para:',
                respuestaSugerida:''
            },
            {
                id:14,
                pregunta:'En HTML, para incluir código de script que se encuentra en otro archivo (externo) se emplea el tag:',
                respuestaSugerida:''
            },
            {
                id:15,
                pregunta:'EN HTML para definir una linea horizontal de separación se emplea:',
                respuestaSugerida:''
            },

            {
                id:16,
                pregunta:'En HTML para definir que el idioma principal de una página es el español se emplea',
                respuestaSugerida:''
            },
            {
                id:17,
                pregunta:'¿A dónde se dirige el siguiente enlace?',
                respuestaSugerida:''
            },
            {
                id:18,
                pregunta:'En HTML, rowspan y colspan son atributos de la etiqueta ',
                respuestaSugerida:''
            },
            {
                id:19,
                pregunta:'¿Qué etiqueta de HTML se emplea para definir una hoja de estilo interna?',
                respuestaSugerida:''
            },
            {
                id:20,
                pregunta:'En HTML, el atributo alt se emplea para:',
                respuestaSugerida:''
            },
            {
                id:21,
                pregunta:'En HTML la forma correcta de crear un comentario es:',
                respuestaSugerida:''
            },
            {
                id:22,
                pregunta:'¿Qué estructura sigue el DOM?',
                respuestaSugerida:''
            },
            {
                id:23,
                pregunta:'Nombra todos los elementos que conozcas que fueron introducidos en HTML 5',
                respuestaSugerida:''
            },
            {
                id:24,
                pregunta:'¿Cuál es la diferencia entre var, let y const? ',
                respuestaSugerida:''
            },
            {
                id:25,
                pregunta:'¿Qué es ECMA y/o que define?',
                respuestaSugerida:''
            },
            {
                id:26,
                pregunta:'Menciona al menos dos frameworks de test unitarios para javascript',
                respuestaSugerida:''
            },
            {
                id:27,
                pregunta:'¿Cuál es la diferencia entre una clase y un objeto en programación?',
                respuestaSugerida:''
            },
            {
                id:28,
                pregunta:'¿Qué formas hay para obtener las variables del siguiente objeto usando ES5 y ES6 const user = {name: username, age: 99}',
                respuestaSugerida:''
            },
            {
                id:29,
                pregunta:'Explica qué hace la siguiente línea considerando que months es un array de meses: months.splice(1, 0, "Feb");',
                respuestaSugerida:''
            },
            {
                id:30,
                pregunta:'Describe en detalle todo lo que puedas observar de la siguiente función: "(() ⇒ {console.log("Hola Mundo");})()"',
                respuestaSugerida:''
            },
            {
                id:31,
                pregunta:'Crea una petición HTTP básica de tipo GET utilizando JavaScript a un dominio de tu elección',
                respuestaSugerida:''
            },
            {
                id:32,
                pregunta:'¿Cuál es la diferencia entre un test unitario, test de integración y un test de aceptación?',
                respuestaSugerida:''
            },
            {
                id:33,
                pregunta:'¿Qué características debe tener un buen test unitario?',
                respuestaSugerida:''
            },
            {
                id:4,
                pregunta:'En el ciclo de vida de Vue, cual sería la diferencia entre "created" y "mounted"',
                respuestaSugerida:''
            }
        ]
    }
]
    