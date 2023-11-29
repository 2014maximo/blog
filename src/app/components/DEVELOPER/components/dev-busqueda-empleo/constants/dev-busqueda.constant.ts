import { PreguntasModel } from "@components/DEVELOPER/models/dev-busqueda.model";
import { IAgencia } from "../models/empleo.model";
import { IndiceDeContenidosModel } from "@shared/models/indice.model";
import { BloqueContenidoModel } from "@shared/models/bloque-contenidos.model";

export const MARKETING = [
    'Ampliar la red con contactos de valor, según mi perfil y lo que busco.',
    'Se necesita estar publicando contenido de valor.',
    'Comentar, hacer comentarios fuertes propositivos ejemplo: "guau" que buen artículo porque...',
    'Escribir un resumen atractivo que destaquen logro y propuestas de valor.',
    'Añadir mensaje personalizado al enviar solicitudes de conexión, para explicar porque deseas conectarte.',
    'Seguir a las empresas que me interesen y a los reclutadores de las empresas.',
    'Unirme a grupos relacionados con tu industria o área de interes, en ellos participa en convesaciones, comparte conocimientos y establece conexiones valiosas.'
];

export const AGENCIAS: IAgencia[] = [
    {
        titulo: 'cv1',
        imagen: 'https://plantillas_dev.gitlab.io/assets/img/posts/developer/workface-white.png',
        altura: '70',
        ancho:'auto',
        link: 'https://2014maximo.github.io/workface/',
        alt:'logo workface'
    },
    {
        titulo: 'cv2',
        imagen: 'https://plantillas_dev.gitlab.io/assets/img/posts/developer/logo-novoresume.png',
        altura: 'auto',
        ancho:'100%',
        link: 'https://novoresume.com/?noRedirect=true',
        alt:'logo novoresume'
    },
    {
        titulo: 'cv3',
        imagen: 'https://plantillas_dev.gitlab.io/assets/img/posts/developer/logo-zety.png',
        altura: 'auto',
        ancho:'100%',
        link: 'https://zety.es/',
        alt:'logo zety'
    },
    {
        titulo: 'cv4',
        imagen: 'https://plantillas_dev.gitlab.io/assets/img/posts/developer/logo-cvmaker.png',
        altura: 'auto',
        ancho:'100%',
        link: 'https://www.cvmaker.es/',
        alt:'logo cvmaker'
    },
    {
        titulo: 'cv5',
        imagen: 'https://plantillas_dev.gitlab.io/assets/img/posts/developer/logo-visualcv.png',
        altura: 'auto',
        ancho:'100%',
        link: 'https://www.visualcv.com/',
        alt:'logo visualcv'
    },
    {
        titulo: 'cv6',
        imagen: 'https://plantillas_dev.gitlab.io/assets/img/posts/developer/logo-canva.png',
        altura: 'auto',
        ancho:'100%',
        link: 'https://www.canva.com/create/resumes/',
        alt:'logo canva'
    },
    {
        titulo: 'cv7',
        imagen: 'https://plantillas_dev.gitlab.io/assets/img/posts/developer/logo-kickresume.png',
        altura: 'auto',
        ancho:'100%',
        link: 'https://www.kickresume.com/es/',
        alt:'logo kickresume'
    },
]

export const PREGUNTAS: PreguntasModel[] = [
    {
        categoria: 'PERSONALES',
        pregunta:[
            {
                id:1,
                pregunta:'Cuéntame sobre ti',
                sugerencia:'Esta es una pregunta abierta que te da la oportunidad de hablar sobre tu experiencia, intereses y objetivos personales y profesionales.',
                respuestaEjemplo:''
            },
            {
                id:2,
                pregunta:'¿Por qué estás interesado en trabajar en nuestra empresa?',
                sugerencia:'Los entrevistadores quieren saber si has investigado sobre la empresa y si compartes sus valores y objetivos.',
                respuestaEjemplo:''
            },
            {
                id:3,
                pregunta:'¿Cuál es tu experiencia trabajando en equipos de desarrollo de software?',
                sugerencia:'Aquí pueden preguntarte sobre tus habilidades de comunicación, colaboración y adaptación a dinámicas de equipo.',
                respuestaEjemplo:''
            },
            {
                id:4,
                pregunta:'¿Puedes describir un proyecto desafiante en el que hayas trabajado y cómo lo superaste? ',
                sugerencia:'Esta pregunta evalúa tus habilidades para resolver problemas y tu capacidad de afrontar desafíos.',
                respuestaEjemplo:''
            },
            {
                id:5,
                pregunta:'¿Cómo te mantienes actualizado con las últimas tendencias y tecnologías en desarrollo de software?',
                sugerencia:'Los entrevistadores quieren saber si eres un profesional que sigue aprendiendo y se mantiene actualizado.',
                respuestaEjemplo:''
            },
            {
                id:6,
                pregunta:'¿Tienes alguna experiencia en trabajar en proyectos ágiles o metodologías de desarrollo específicas?',
                sugerencia:'Pueden preguntarte sobre tu adaptabilidad y experiencia en entornos de desarrollo específicos.',
                respuestaEjemplo:''
            },
            {
                id:7,
                pregunta:'¿Qué te motiva en tu carrera como desarrollador de software?',
                sugerencia:'Aquí puedes hablar sobre tus metas profesionales y lo que te entusiasma en el desarrollo de software.',
                respuestaEjemplo:''
            },
            {
                id:8,
                pregunta:'¿Cómo manejas el estrés y los plazos ajustados?',
                sugerencia:'Esta pregunta evalúa tu capacidad para lidiar con situaciones de alta presión.',
                respuestaEjemplo:''
            },
            {
                id:9,
                pregunta:'¿Tienes experiencia en liderazgo o gestión de equipos de desarrollo?',
                sugerencia:'Esto podría explorar tu potencial para asumir roles de liderazgo en el futuro.',
                respuestaEjemplo:''
            },
            {
                id:10,
                pregunta:'¿Cuál es tu enfoque en cuanto a la calidad del código y las prácticas de desarrollo sostenible?',
                sugerencia:' Los entrevistadores pueden estar interesados en tu compromiso con la calidad y la mejora continua.',
                respuestaEjemplo:''
            }

        ]
    },
    {
        categoria: 'LABORALES',
        pregunta:[
            {
                id:1,
                pregunta:'Cual fue la última empresa donde laboraste?',
                sugerencia:'',
                respuestaEjemplo:''
            },
            {
                id:2,
                pregunta:'Cuéntanos como fue tu experiencia en la última empresa?',
                sugerencia:'',
                respuestaEjemplo:''
            },
            {
                id:3,
                pregunta:'Cual fue tu mayor reto en esta empresa y porque?',
                sugerencia:'',
                respuestaEjemplo:''
            },
        ]
    },
    {
        categoria: 'ESTUDIOS',
        pregunta:[
            {
                id:1,
                pregunta:'Hasta que nivel estudiaste?',
                sugerencia:'',
                respuestaEjemplo:''
            },
            {
                id:2,
                pregunta:'Tienes maestrías o diplomados?',
                sugerencia:'',
                respuestaEjemplo:''
            },
        ]
    },
    {
        categoria: 'DESARROLLO FRONTEND',
        pregunta:[ 
            {
                id:1,
                pregunta:'Tiene experiencia en patrones de diseño Typescript y JavaScript?',
                sugerencia:'',
                respuestaEjemplo:''
            },
            {
                id:2,
                pregunta:'Tiene experiencia en la arquitectura de Atomic Design?',
                sugerencia:'',
                respuestaEjemplo:''
            },
        ]
    },
    {
        categoria: 'HTML, CSS Y JAVASCRIPT',
        pregunta:[
            {
                id:1,
                pregunta:'¿Qué atributo de HTML se emplea para definir los estilos en línea?',
                sugerencia:'',
                respuestaEjemplo:'Es el atributo style.'
            },
            {
                id:2,
                pregunta:'¿Qué etiqueta de HTML se emplea para definir una hoja de estilo externa?',
                sugerencia:'',
                respuestaEjemplo:'Es la etiqueta link y se agrega la ruta en el atributo src.'
            },
            {
                id:3,
                pregunta:'¿Qué pseudo clase se emplea para definir una propiedad cuando el cursor del ratón se sitúa sobre un elemento?',
                sugerencia:'',
                respuestaEjemplo:'La pseudo clase hover antecedido de dos puntos.'
            },
            {
                id:4,
                pregunta:'En CSS ¿ Cuál es la diferencia entre las propiedades margin y padding?',
                sugerencia:'',
                respuestaEjemplo:'Margin es el espacio fuera del elemento DOM y padding se aplica dentro del cuerpo del elemento DOM al cual se le esta aplicando la clase.'
            },
            {
                id:5,
                pregunta:'¿Qué significan las siglas CSS?',
                sugerencia:'',
                respuestaEjemplo:'Cascade Style Sheet'
            },
            {
                id:6,
                pregunta:'En CSS3 ¿Qué significan la "A" en RGBA?',
                sugerencia:'',
                respuestaEjemplo:'Las 4 significan R:red, G:green, B:blue, A:alpha (transparencia)'
            },
            {
                id:7,
                pregunta:'¿Cómo asignas estilos para distintos dispositivos y resoluciones?',
                sugerencia:'',
                respuestaEjemplo:'A través de la propiedad @media dentro de los estilos en cascada.'
            },
            {
                id:8,
                pregunta:'¿Qué estaría definiendo al utilizar flex-direction: column; en un elemento con display: flex;?',
                sugerencia:'',
                respuestaEjemplo:'que los elementos dentro del display: flex se formen en forma de columna.'
            },
            {
                id:9,
                pregunta:'Explica cuál es la función de @import en SASS',
                sugerencia:'',
                respuestaEjemplo:'El objetivo de la directiva @import es conectar varios archivos SASS o SCSS a un archivo del tipo SASS o SCSS, con la finalidad de ordenar separadamente el código.'
            },
            {
                id:10,
                pregunta:'Explica cuál es la función de @extend en SASS',
                sugerencia:'',
                respuestaEjemplo:'Esta directiva tiene una cualidad especial al permitir heredar características de una clase o selector a otro selector, evitando la repetición de estilos.'
            },
            {
                id:11,
                pregunta:'Explica cuando puedes utilizar el % placeholder en SASS',
                sugerencia:'',
                respuestaEjemplo:'Se utiliza al crear un grupo de estilos %nombre {caracteristicas css}, luego de crearse funciona dentro de una clase cuando se hace referencia a la herencia de %nombre y por lo tanto hereda los estilos, de esta forma: .clase { @extend %nombre;}'
            },
            {
                id:12,
                pregunta:'Explica con tus propias palabras cómo los Mixins (@mixin) de SASS pueden ser útiles',
                sugerencia:'',
                respuestaEjemplo:'Permite reutilizar estilos y propiedades CSS en tus hojas de estilo de una manera modular y eficiente. Una gran utilidad es poder pasar parámetros a un @mixin creado anteriormente y utilizar todas las características de ese @mixin con el parámetro que se envía.'
            },
            {
                id:13,
                pregunta:'En HTML, el atributo title se emplea para:',
                sugerencia:'',
                respuestaEjemplo:'Es para proporcionar información adicional sobre un elemento cuando el usuario pasa el cursor sobre él.'
            },
            {
                id:14,
                pregunta:'En HTML, para incluir código de script que se encuentra en otro archivo (externo) se emplea el tag:',
                sugerencia:'',
                respuestaEjemplo:'<script> con el src="" y la ruta del archivo.'
            },
            {
                id:15,
                pregunta:'EN HTML para definir una linea horizontal de separación se emplea:',
                sugerencia:'',
                respuestaEjemplo:'Se usa la etiqueta <hr>.'
            },

            {
                id:16,
                pregunta:'En HTML para definir que el idioma principal de una página es el español se emplea',
                sugerencia:'',
                respuestaEjemplo:'Dentro de la etiqueta HTML se emplea un atributo llamado lang="es", adicional es recomendable usar también la misma propiedad en etiquetas como "header", "main", "section", "footer", para ayudar a las herramientas de traducción.'
            },
            {
                id:17,
                pregunta:'En HTML, rowspan y colspan son atributos de la etiqueta',
                sugerencia:'',
                respuestaEjemplo:'Etiqueta <td>, son para controlar la fusión de celdas, lo que permite que una celda ocupe múltiples filas "rowspan" o múltiples columnas "colspan".'
            },
            {
                id:18,
                pregunta:'¿Qué etiqueta de HTML se emplea para definir una hoja de estilo interna?',
                sugerencia:'',
                respuestaEjemplo:'<style> '
            },
            {
                id:19,
                pregunta:'En HTML, el atributo alt se emplea para:',
                sugerencia:'',
                respuestaEjemplo:'3 principales beneficios como: -Descripción de accesiblidad en imágenes para personas con poca visiblidad, - Cuando las imágenes no se cargan correctamente proporcionan información del contenido, - En el SEO de búsqueda permiten una mejor indexación en los resultados. En las etiquetas <img>, <audio> y <video>.'
            },
            {
                id:20,
                pregunta:'En HTML la forma correcta de crear un comentario es:',
                sugerencia:'',
                respuestaEjemplo:'<---- comentario ---->'
            },
            {
                id:21,
                pregunta:'¿Qué estructura sigue el DOM?',
                sugerencia:'',
                respuestaEjemplo:''
            },
            {
                id:22,
                pregunta:'Nombra todos los elementos que conozcas que fueron introducidos en HTML 5',
                sugerencia:'',
                respuestaEjemplo:''
            },
            {
                id:23,
                pregunta:'¿Cuál es la diferencia entre var, let y const? ',
                sugerencia:'',
                respuestaEjemplo:''
            },
            {
                id:24,
                pregunta:'¿Qué es ECMA y/o que define?',
                sugerencia:'',
                respuestaEjemplo:''
            },
            {
                id:25,
                pregunta:'Menciona al menos dos frameworks de test unitarios para javascript',
                sugerencia:'',
                respuestaEjemplo:''
            },
            {
                id:26,
                pregunta:'¿Cuál es la diferencia entre una clase y un objeto en programación?',
                sugerencia:'',
                respuestaEjemplo:''
            },
            {
                id:27,
                pregunta:'¿Qué formas hay para obtener las variables del siguiente objeto usando ES5 y ES6 const user = {name: username, age: 99}',
                sugerencia:'',
                respuestaEjemplo:''
            },
            {
                id:28,
                pregunta:'Explica qué hace la siguiente línea considerando que months es un array de meses: months.splice(1, 0, "Feb");',
                sugerencia:'',
                respuestaEjemplo:''
            },
            {
                id:29,
                pregunta:'Describe en detalle todo lo que puedas observar de la siguiente función: "(() ⇒ {console.log("Hola Mundo");})()"',
                sugerencia:'',
                respuestaEjemplo:''
            },
            {
                id:30,
                pregunta:'Crea una petición HTTP básica de tipo GET utilizando JavaScript a un dominio de tu elección',
                sugerencia:'',
                respuestaEjemplo:''
            },
            {
                id:31,
                pregunta:'¿Cuál es la diferencia entre un test unitario, test de integración y un test de aceptación?',
                sugerencia:'',
                respuestaEjemplo:''
            },
            {
                id:32,
                pregunta:'¿Qué características debe tener un buen test unitario?',
                sugerencia:'',
                respuestaEjemplo:''
            },
            {
                id:33,
                pregunta:'En el ciclo de vida de Vue, cual sería la diferencia entre "created" y "mounted"',
                sugerencia:'',
                respuestaEjemplo:''
            }
        ]
    }
]

export const BLOQUE_LINKS: IndiceDeContenidosModel[] = [
    {
        rutaExterna:'https://www.recruiter.com/',
        nombre:'Recruiter',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://www.getonbrd.com/',
        nombre:'GetOnBoard',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://www.klimbup.com/',
        nombre:'KLIMBUP',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://www.freelancer.com/',
        nombre:'Freelancer',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://talentbox.la/',
        nombre:'TalentBox',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://www.sihaytrabajo.com.co/',
        nombre:'Si hay Trabajo',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://co.indeed.com/',
        nombre:'Indeed',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://co.computrabajo.com/',
        nombre:'Computrabajo',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://www.michaelpage.com.co/',
        nombre:'Michael Page',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://thinkus.io/es/',
        nombre:'ThinkUS',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://developers.turing.com/',
        nombre:'Turing',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://sophilabs.com/',
        nombre:'Sophi Labs',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://devsu.com/',
        nombre:'DevSu',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://www.caseware.com/',
        nombre:'CaseWare',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://stefanini.com/es',
        nombre:'Stefanini',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://periferiaitgroup.com/',
        nombre:'Periferia IT Group',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://www.accenture.com/co-es',
        nombre:'Accenture',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://www.sophossolutions.com/es/',
        nombre:'Softlogic',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://andela.com/',
        nombre:'Andela',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://www.fastdolphin.com/',
        nombre:'Fast Dolphin',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://www.encora.com/es/',
        nombre:'Encora',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://www.nivelics.com/es',
        nombre:'Nivelics',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://www.signifytechnology.com/?source=google.com',
        nombre:'Signify Technologies',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        rutaExterna:'https://www.tektonlabs.com/',
        nombre: 'TektonLabs',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:''
    },
    {
        nombre: 'TektonLabs',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:'',
        rutaExterna:'https://www.tektonlabs.com/'
    },
    {
        nombre: 'Personal Soft',
        posicion: 'rot-3',
        ruta: '',
        colorFondo: 'bg-Developer',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:'',
        rutaExterna:'https://personalsoft.com/co/'
    },
    {
        nombre: 'MBC Group',
        posicion: 'rot-3',
        ruta: '',
        colorFondo: 'bg-white',
        color: 'text-dark',
        estado: 'activo',
        rutaInterna:'',
        rutaExterna:'https://mbcgroup.co/'
    },
    {
        nombre: 'Chumi Jobs',
        posicion: 'post-z',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:'',
        rutaExterna:'https://www.chumijobs.com/'
    },
    {
        nombre: 'CESDE',
        posicion: 'rot-1',
        ruta: '',
        colorFondo: 'bg-Developer',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:'',
        rutaExterna:'https://cesde.hiringroom.com/jobs'
    },
    {
        nombre: 'Kibernum',
        posicion: 'rot-3',
        ruta: '',
        colorFondo: 'bg-white',
        color: 'text-dark',
        estado: 'activo',
        rutaInterna:'',
        rutaExterna:'https://www.kibernum.com/'
    },
    {
        nombre: 'Deel',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-Linux',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:'',
        rutaExterna:'https://www.deel.com/es/'
    },
    {
        nombre: 'Solvo Global',
        posicion: 'rot-1',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:'',
        rutaExterna:'https://solvoglobal.com/'
    },
    {
        nombre: 'SolveDex',
        posicion: 'rot-3',
        ruta: '',
        colorFondo: 'bg-Developer',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:'',
        rutaExterna:'https://solvedex.com/'
    },
    {
        nombre: 'CCO Systems',
        posicion: 'post-z',
        ruta: '',
        colorFondo: 'bg-dark',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:'',
        rutaExterna:'https://www.cco.systems/'
    },
    {
        nombre: 'Epam Systems',
        posicion: 'rot-1',
        ruta: '',
        colorFondo: 'bg-Developer',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:'',
        rutaExterna:'https://www.epam.com/'
    },
    {
        nombre: 'Talenty Tech',
        posicion: 'rot-1',
        ruta: '',
        colorFondo: 'bg-Linux',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:'',
        rutaExterna:'https://www.linkedin.com/school/talentlytech/'
    },
    {
        nombre: 'Talent Pitch',
        posicion: 'post-z',
        ruta: '',
        colorFondo: 'bg-white',
        color: 'text-dark',
        estado: 'activo',
        rutaInterna:'',
        rutaExterna:'https://website.talentpitch.co/'
    },
    {
        nombre: 'PRAXIS',
        posicion: 'rot-1',
        ruta: '',
        colorFondo: 'bg-Linux',
        color: 'text-light',
        estado: 'activo',
        rutaInterna:'',
        rutaExterna:'https://praxis.edu.co/'
    },
    {
        nombre: 'Servigui BPO',
        posicion: 'rot-2',
        ruta: '',
        colorFondo: 'bg-white',
        color: 'text-dark',
        estado: 'activo',
        rutaInterna:'',
        rutaExterna:'https://www.serviguidebpo.com/'
    },
    {
        nombre: 'Hoy trabajas',
        posicion: 'rot-3',
        ruta: '',
        colorFondo: 'bg-white',
        color: 'text-dark',
        estado: 'activo',
        rutaInterna:'',
        rutaExterna:'https://hoytrabajas.com/'
    },
    {
        nombre: 'Unosquare',
        posicion: 'rot-1',
        ruta: '',
        colorFondo: 'bg-Developer',
        color: 'text-dark',
        estado: 'activo',
        rutaInterna:'',
        rutaExterna:'https://www.unosquare.com/'
    },
    {
        nombre: 'Neoris',
        posicion: 'rot-1',
        ruta: '',
        colorFondo: 'bg-Developer',
        color: 'text-dark',
        estado: 'activo',
        rutaInterna:'',
        rutaExterna:'https://neoris.com/'
    },
]

export const TEST = [
    {
        prueba1:"DEV.be.eje",
    },
    {
        prueba2:"prueba2",
    },
    {
        prueba3:"prueba2",
    },
    {
        prueba4:"prueba2",
    }
]