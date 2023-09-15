import { ANGULAR } from '../publicaciones/posts-angular.constant';
import { ANDROID } from '../publicaciones/posts-android.constant';
import { CSS } from '../publicaciones/posts-css.constant';
import { DART } from '../publicaciones/posts-dart.constant';
import { DEVELOPER } from '../publicaciones/posts-developer.constant';
import { ELECTRON } from '../publicaciones/posts-electron.contant';
import { FLUTTER } from '../publicaciones/posts-flutter.contant';
import { GIT } from '../publicaciones/posts-git.constant';
import { HTML } from '../publicaciones/posts-html.constant';
import { JAVASCRIPT } from '../publicaciones/posts-javascript.constant';
import { DB } from '../publicaciones/posts-db.constant';
import { CategoriaPostModel } from '../../shared/models/categorias.model';
import { JAVA } from '../publicaciones/posts-java.constant';
import { LINUX } from '../publicaciones/posts-linux.constant';
import { TERMINOS_ANGULAR } from '../glosarios/terminos.angular.constant';
import { SUB_NG } from '../subcategorias/subcategorias-angular.constant';
import { TERMINOS_DEVELOPER } from '../glosarios/terminos.developer.constant';
import { TYPESCRIPT } from '../publicaciones/posts-typescript.constant';

export const CATEGORIA: CategoriaPostModel[] = [
    {
        id:1,
        nombre: 'android',
        posicion: 'pos-z',
        abertura: '',
        rutaIcono: 'assets/img/categorias/android.png',
        alturaIcono: '80%',
        estado:'inactivo',
        ruta: 'android',
        glosario: [],
        colorFondo: 'bg-Android',
        color: 'c-Android',
        descripcion: [],
        descripcionCorta: '',
        post: ANDROID,
        subcategorias: []
    },
    {
        id:2,
        nombre: 'angular',
        posicion: 'rot-2',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/angular.png',
        alturaIcono: '80',
        estado:'activo',
        ruta: 'angular',
        colorFondo: 'bg-Angular',
        glosario: TERMINOS_ANGULAR,
        color: 'c-Angular',
        descripcion: [
            {
                autor: 'Alex M.',
                linkAlAutor: '',
                descripciones: [
                    'AngularJS comenzó a ser desarrollado en 2009 por Miško Hevery originalmente era un servicio de almacenamiento online de archivos JSON donde el cobro dependía del peso en     megabytes de cada archivo. Tiempo después abandonó el proyecto y re lanzó angular como un proyecto open-source.',
                    'Angular comenzó con la primera versión de AngularJS, que estaba escrito en puro JavaScript, y con el que era bastante sencillo crear una aplicación.',
                    'AngularJS ofrecía un concepto muy novedoso, como era el two-way data binding, que era una forma de interactuar entre la vista y el modelo, lo que se conoce como view model.',
                    'Gracias al mismo, indicando en ciertas propiedades de HTML la directiva ng-model se podía interactuar con las propiedades del modelo, y se actualizaban tanto desde la vista como','desde el modelo, es decir, era totalmente bidireccional.',
                    'Esto revolucionó todo lo que hasta ese momento había en el frontend.'
                ]
            }
        ],
        descripcionCorta: '',
        post: ANGULAR,
        subcategorias: SUB_NG
    },
    {
        id:3,
        nombre: 'css',
        posicion: 'pos-z',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/css.png',
        alturaIcono: '80',
        estado:'activo',
        glosario: [],
        ruta: 'css',
        colorFondo: 'bg-Css',
        color: 'c-Css',
        descripcion: [{
            autor:'',
            linkAlAutor:'',
            descripciones: [
                'Las hojas de estilos aparecieron poco después que el lenguaje de etiquetas SGML, alrededor del año 1970. Desde la creación de SGML, se observó la necesidad de definir un mecanismo que permitiera aplicar de forma consistente diferentes estilos a los documentos electrónicos.',
                'El gran impulso de los lenguajes de hojas de estilos se produjo con el boom de Internet y el crecimiento exponencial del lenguaje HTML para la creación de documentos electrónicos. La guerra de navegadores y la falta de un estándar para la definición de los estilos dificultaban la creación de documentos con la misma apariencia en diferentes navegadores.',
                'El organismo W3C (World Wide Web Consortium), encargado de crear todos los estándares relacionados con la web, propuso la creación de un lenguaje de hojas de estilos específico para el lenguaje HTML y se presentaron nueve propuestas. Las dos propuestas que se tuvieron en cuenta fueron la CHSS (Cascading HTML Style Sheets) y la SSP (Stream-based Style Sheet Proposal).',
                'La propuesta CHSS fue realizada por Håkon Wium Lie y SSP fue propuesto por Bert Bos. Entre finales de 1994 y 1995 Lie y Bos se unieron para definir un nuevo lenguaje que tomaba lo mejor de cada propuesta y lo llamaron CSS (Cascading Style Sheets).',
                'En 1995, el W3C decidió apostar por el desarrollo y estandarización de CSS y lo añadió a su grupo de trabajo de HTML. A finales de 1996, el W3C publicó la primera recomendación oficial, conocida como "CSS nivel 1".',
                'A principios de 1997, el W3C decide separar los trabajos del grupo de HTML en tres secciones: el grupo de trabajo de HTML, el grupo de trabajo de DOM y el grupo de trabajo de CSS.']
        }],
        descripcionCorta: '',
        post: CSS,
        subcategorias: []
    },
    {
        id:4,
        nombre: 'dart',
        posicion: 'rot-2',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/dart_text_white.png',
        alturaIcono: '40',
        estado:'activo',
        glosario: [],
        ruta: 'dart',
        colorFondo: 'bg-Dart',
        color: 'c-Dart',
        descripcion: [
            {
                autor:'',
                linkAlAutor:'',
                descripciones: ['El lenguaje de programación Dart nació en 2011 con el modesto objetivo de arreglar la web. En otras palabras, intentar reemplazar JavaScript en el navegador. Sin embargo, fracasó miserablemente en aquel entonces.',
                'Esto quedó claro cuando Google anunció en marzo de 2015 que no incluiría la VM de Dart en Chrome, sino que se centraría en el compilador de Dart-to-JS.',
                'Esto le pareció un golpe mortal a Dart. Después de todo, ahora estaba relegado a un mero lenguaje de compilación a JS, sólo uno de muchos.',
                'Para la mayoría de la gente, el lenguaje estaba en camino de desaparecer rápidamente y convertirse en una pequeña nota a pie de página en la historia de los lenguajes de programación. Pero el lenguaje sobrevivió y, al menos en Google, continuó prosperando.',
                'En mayo de 2017, Google lanzó la primera versión alfa pública del lenguaje Dart Flutter, un marco de desarrollo de interfaz de usuario multiplataforma, que utiliza Dart para crear aplicaciones móviles tanto para iOS como para Android. Con el tiempo, Flutter empezó a ser muy popular.',
                'Eso dio nueva vida al proyecto Dart, y con los lanzamientos de Dart 2 en agosto de 2018, y Flutter 1.0 poco después, quedó claro que Dart está absolutamente de vuelta en la ciudad, y podemos decir que va a ser una de las tecnologías de más rápido crecimiento actualmente.']
            }
        ],
        descripcionCorta: '',
        post: DART,
        subcategorias: []
    },
    {
        id:5,
        nombre: 'db',
        posicion: 'rot-2',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/sql.png',
        alturaIcono: '55',
        estado:'activo',
        glosario: [],
        ruta: 'db',
        colorFondo: 'bg-Sql',
        color: 'c-Sql',
        descripcion: [
            {
                autor:'Dataprix',
                linkAlAutor: 'https://www.dataprix.com/',
                descripciones:[
                    'El término Base de Datos fue acuñado por primera vez en 1963, en un simposio celebrado en California.',
                    'En la década del 70 Edgar Frank Codd definió el modelo relacional y publicó una serie de reglas para la evaluación de administradores de sistemas de datos relacionales y asi nacieron las bases de datos relacionales.',
                    'A partir de los aportes de Codd el multimillonario Larry Ellison desarrolló la base de datos Oracle, la cual es un sistema de administración de Base de Datos, que se destaca por sus transacciones, estabilidad, escalabilidad y multiplataforma.',
                    'Inicialmente no se usó el Modelo Relacional debido a que tenía inconvenientes por el rendimiento, ya que no podían ser competitivas con las bases de datos Jerárquicas y de Red. Ésta tendencia cambio por un proyecto de IBM el cual desarrolló técnicas para la construcción de un sistema de bases de datos relacionales eficientes, llamado System R.',
                    'En la década del 80 las Bases de Datos Relacionales con su sistema de Tablas, Filas y Columnas, pudieron competir con las Bases de Datos Jerárquicas y de Red, ya que su nivel de programación era bajo y su uso muy sencillo.',
                    'En esta década el Modelo Relacional ha conseguido posicionarse en el mercado de las Bases de Datos. Y también en este tiempo se iniciaron grandes investigaciones, como las Sistemas de Gestión de Bases de Datos Orientadas a Objetos SGBDOO (System Management Object Oriented Databases).',
                    'Principios década de los 90 para la toma de decisiones se crea el lenguaje SQL (Structured Query Language) , que es un lenguaje programado para consultas. El programa de alto nivel SQL es un lenguaje de consulta estructurado que analiza grandes cantidades de información, el cual permite especificar diversos tipos de operaciones frente a la misma información, a diferencia de las bases de datos de los 80 que eran diseñadas para las aplicaciones de procesamiento de transacciones. Los grandes distribuidores de bases de datos incursionaron con la venta de bases de datos orientadas a objetos.',
                    'Finales de la década de los 90 el boom de esta década fue la aparición de la WWW “Word Wide Web” ya que por este medio se facilitaba la consulta de las bases de datos. Actualmente tienen una amplia capacidad de almacenamiento de información, también una de las ventajas es el servicio de siete días a la semana las veinticuatro horas del día, sin interrupciones a menos que haya planificaciones de mantenimiento de las plataformas o el software.'
                ]
            }
        ],
        descripcionCorta: '',
        post: DB,
        subcategorias: []
    },
    {
        id:6,
        nombre: 'developer',
        posicion: 'rot-2',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/developer.png',
        alturaIcono: '90',
        estado:'activo',
        ruta: 'developer',
        glosario: TERMINOS_DEVELOPER,
        colorFondo: 'bg-Developer',
        color: 'c-Developer',
        descripcion: [
            {
                autor: 'Alex M.',
                linkAlAutor: '',
                descripciones: [
                    'En la década entre 1950 y 1960 aparecen los términos de ingeniería del software.'
                ]
            }
        ],
        descripcionCorta: '',
        post: DEVELOPER,
        subcategorias: []
    },
    {
        id:7,
        nombre: 'electron',
        posicion: 'pos-z',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/electron.png',
        alturaIcono: '90',
        estado:'activo',
        ruta: 'electron',
        glosario: [],
        colorFondo: 'bg-Electron',
        color: 'c-Electron',
        descripcion: [
            {
                autor:'',
                linkAlAutor:'',
                descripciones:[
                    'Electron (anteriormente conocido como Atom Shell​) es un marco de trabajo de código abierto creado por Cheng Zhao, y desarrollado en la actualidad por GitHub.)Éste permite desarrollar aplicaciones GUI de escritorio usando componentes de front-end y back-end originalmente creados para aplicaciones web: el entorno en tiempo de ejecución, Node.js para el back-end y Chromium para el front-end. Electron es el marco GUI principal detrás de varios proyectos notables de código abierto, incluyendo los editores de código fuente: Atom y Visual Studio Code,​ desarrollados por GitHub y Microsoft respectivamente, el entorno de desarrollo integrado (IDE) Light Table; además del cliente de escritorio gratuito para el servicio de chat de Discord.'
                ]
            }
        ],
        descripcionCorta: '',
        post: ELECTRON,
        subcategorias: []
    },
    {
        id:8,
        nombre: 'flutter',
        posicion: 'rot-1',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/flutter_text_white.png',
        alturaIcono: '80',
        estado:'activo',
        glosario: [],
        ruta: 'flutter',
        colorFondo: 'bg-Flutter',
        color: 'c-Flutter',
        descripcion: [
            {
                autor:'',
                linkAlAutor:'',
                descripciones:[
                    'La primera versión de Flutter fue conocida bajo el nombre Sky y solo funcionaba para Android. Fue lanzado en la Dart developer summit de 2015. Su versión alfa data de mayo 2017, el 11 de diciembre del 2019, Flutter 2.12 salió en el evento Flutter Interactive. Estamos hablando de una herramienta muy reciente. Sin embargo ya está teniendo un enorme éxito.'
                ]
            }
        ],
        descripcionCorta: '',
        post: FLUTTER,
        subcategorias: []
    },
    {
        id:9,
        nombre: 'git',
        posicion: 'rot-3',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/git-light.png',
        alturaIcono: '60',
        estado:'activo',
        glosario: [],
        ruta: 'git',
        colorFondo: 'bg-Git',
        color: 'c-Git',
        descripcion: [],
        descripcionCorta: '',
        post: GIT,
        subcategorias: []
    },
    {
        id:10,
        nombre: 'html',
        posicion: 'pos-z',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/html-white.png',
        alturaIcono: '80',
        estado:'activo',
        ruta: 'html',
        glosario: [],
        colorFondo: 'bg-Html',
        color: 'c-Html',
        descripcion: [{
            autor:'',
            descripciones:[
                'La historia completa de HTML es tan interesante como larga, por lo que a continuación se muestra su historia resumida a partir de la información que se puede encontrar en la Wikipedia.',
                'El origen de HTML se remonta a 1980, cuando el físico Tim Berners-Lee, trabajador del CERN (Organización Europea para la Investigación Nuclear) propuso un nuevo sistema de "hipertexto" para compartir documentos.',
                'Los sistemas de "hipertexto" habían sido desarrollados años antes. En el ámbito de la informática, el "hipertexto" permitía que los usuarios accedieran a la información relacionada con los documentos electrónicos que estaban visualizando. De cierta manera, los primitivos sistemas de "hipertexto" podrían asimilarse a los enlaces de las páginas web actuales.',
                'Tras finalizar el desarrollo de su sistema de "hipertexto", Tim Berners-Lee lo presentó a una convocatoria organizada para desarrollar un sistema de "hipertexto" para Internet. Después de unir sus fuerzas con el ingeniero de sistemas Robert Cailliau, presentaron la propuesta ganadora llamada WorldWideWeb (W3).',
                'El primer documento formal con la descripción de HTML se publicó en 1991 bajo el nombre HTML Tags (Etiquetas HTML) y todavía hoy puede ser consultado online a modo de reliquia informática.',
                'La primera propuesta oficial para convertir HTML en un estándar se realizó en 1993 por parte del organismo IETF (Internet Engineering Task Force). Aunque se consiguieron avances significativos (en esta época se definieron las etiquetas para imágenes, tablas y formularios) ninguna de las dos propuestas de estándar, llamadas HTML y HTML+ consiguieron convertirse en estándar oficial.',
                'En 1995, el organismo IETF organiza un grupo de trabajo de HTML y consigue publicar, el 22 de septiembre de ese mismo año, el estándar HTML 2.0. A pesar de su nombre, HTML 2.0 es el primer estándar oficial de HTML.',
                'A partir de 1996, los estándares de HTML los publica otro organismo de estandarización llamado W3C (World Wide Web Consortium). La versión HTML 3.2 se publicó el 14 de Enero de 1997 y es la primera recomendación de HTML publicada por el W3C. Esta revisión incorpora los últimos avances de las páginas web desarrolladas hasta 1996, como applets de Java y texto que fluye alrededor de las imágenes.',
                'HTML 4.0 se publicó el 24 de Abril de 1998 (siendo una versión corregida de la publicación original del 18 de Diciembre de 1997) y supone un gran salto desde las versiones anteriores. Entre sus novedades más destacadas se encuentran las hojas de estilos CSS, la posibilidad de incluir pequeños programas o scripts en las páginas web, mejora de la accesibilidad de las páginas diseñadas, tablas complejas y mejoras en los formularios.',
                'La última especificación oficial de HTML se publicó el 24 de diciembre de 1999 y se denomina HTML 4.01. Se trata de una revisión y actualización de la versión HTML 4.0, por lo que no incluye novedades significativas.',
                'Desde la publicación de HTML 4.01, la actividad de estandarización de HTML se detuvo y el W3C se centró en el desarrollo del estándar XHTML. Por este motivo, en el año 2004, las empresas Apple, Mozilla y Opera mostraron su preocupación por la falta de interés del W3C en HTML y decidieron organizarse en una nueva asociación llamada WHATWG (Web Hypertext Application Technology Working Group).',
                'La actividad actual del WHATWG se centra en el futuro estándar HTML 5, cuyo primer borrador oficial se publicó el 22 de enero de 2008. Debido a la fuerza de las empresas que forman el grupo WHATWG y a la publicación de los borradores de HTML 5.0, en marzo de 2007 el W3C decidió retomar la actividad estandarizadora de HTML.',
                'De forma paralela a su actividad con HTML, W3C ha continuado con la estandarización de XHTML, una versión avanzada de HTML y basada en XML. La primera versión de XHTML se denomina XHTML 1.0 y se publicó el 26 de Enero de 2000 (y posteriormente se revisó el 1 de Agosto de 2002).',
                'XHTML 1.0 es una adaptación de HTML 4.01 al lenguaje XML, por lo que mantiene casi todas sus etiquetas y características, pero añade algunas restricciones y elementos propios de XML. La versión XHTML 1.1 ya ha sido publicada en forma de borrador y pretende modularizar XHTML. También ha sido publicado el borrador de XHTML 2.0, que supondrá un cambio muy importante respecto de las anteriores versiones de XHTML.'
            ],
            linkAlAutor: ''
        }],
        descripcionCorta: '',
        post: HTML,
        subcategorias: []
    },
    {
        id:11,
        nombre: 'java',
        posicion: 'rot-2',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/logo-java.png',
        alturaIcono: '100',
        estado:'activo',
        glosario: [],
        ruta: 'java',
        colorFondo: 'bg-Java',
        color: 'c-Java',
        descripcion: [
            {
                linkAlAutor:'',
                autor:'',
                descripciones:[
                    'Para hablar de la historia de java, primero debemos remontarnos a los años 80s, donde C podía considerarse el lenguaje de programación por excelencia. Era un lenguaje versátil, que podía actuar a bajo nivel y resolvían problemas muy complejos. Era la cima de la programación estructurada, para resolver estos complejos algoritmos, se generaban grandes procedimientos con un código muy complicado de mantener a largo plazo. Por ello empezó a surgir como alternativa la programación orientada a objetos, y con ella nació C++.',
                    'Java nace en 1991 con el nombre “OAK”, posteriormente cambiado por Green por problemas legales, y finalmente con la denominación actual JAVA.',
                    'El objetivo de java era crear un lenguaje de programación parecido a C++ en estructura y sintaxis, fuertemente orientado a objetos, pero con una máquina virtual propia. Esto se hizo bajo el principio, de poder ser usado bajo cualquier arquitectura “Write Once, Run Anywhere (escríbelo una vez, ejecútalo en cualquier sitio)”.',
                    'En 1992 se presenta el proyecto verde, con los prototipos a bajo nivel. Entre 1993 y 1994 se trabaja para poder presentar un prototipo funcional (hotJava) donde se ve todo el potencial que JAVA puede ofrecer.',
                    'En 1995, es presentada la versión alpha de java, y un año después en 1996 es lanzado el primer JDK (JDK 1.0). El desarrollo de java a partir de entonces es imparable, se van presentando nuevos paquetes y librerías hasta la actualidad.'
                ]
            }
        ],
        descripcionCorta: '',
        post: JAVA,
        subcategorias: []
    },
    {
        id:12,
        nombre: 'javascript',
        abertura: '80%',
        posicion: 'rot-2',
        rutaIcono: 'assets/img/categorias/javascript.png',
        alturaIcono: '80',
        estado:'activo',
        ruta: 'javascript',
        glosario: [],
        colorFondo: 'bg-Javascript',
        color: 'c-Javascript',
        descripcion: [
            {
                linkAlAutor:'',
                autor:'',
                descripciones:[
                    'JavaScript fue desarrollado originalmente por Brendan Eich de Netscape con el nombre de Mocha, el cual fue renombrado posteriormente a LiveScript, para finalmente quedar como JavaScript. El cambio de nombre coincidió aproximadamente con el momento en que Netscape agregó compatibilidad con la tecnología Java en su navegador web Netscape Navigator en la versión 2002 en diciembre de 1995. La denominación produjo confusión, dando la impresión de que el lenguaje es una prolongación de Java, y se ha caracterizado por muchos como una estrategia de mercadotecnia de Netscape para obtener prestigio e innovar en el ámbito de los nuevos lenguajes de programación web.',
                    'JAVASCRIPT» es una marca registrada de Oracle Corporation.9​ Es usada con licencia por los productos creados por Netscape Communications y entidades actuales como la Fundación Mozilla.',
                    'Microsoft dio como nombre a su dialecto de JavaScript «JScript», para evitar problemas relacionadas con la marca. JScript fue adoptado en la versión 3.0 de Internet Explorer, liberado en agosto de 1996, e incluyó compatibilidad con el Efecto 2000 con las funciones de fecha, una diferencia de los que se basaban en ese momento. Los dialectos pueden parecer tan similares que los términos «JavaScript» y «JScript» a menudo se utilizan indistintamente, pero la especificación de JScript es incompatible con la de ECMA en muchos aspectos.',
                    'Para evitar estas incompatibilidades, el World Wide Web Consortium diseñó el estándar Document Object Model (DOM, o Modelo de Objetos del Documento en español), que incorporan Konqueror, las versiones 6 de Internet Explorer y Netscape Navigator, Opera la versión 7, Mozilla Application Suite y Mozilla Firefox desde su primera versión.',
                    'En 1997 los autores propusieron12​ JavaScript para que fuera adoptado como estándar de la European Computer Manufacturers "Association ECMA", que a pesar de su nombre no es europeo sino internacional, con sede en Ginebra. En junio de 1997 fue adoptado como un estándar ECMA, con el nombre de ECMAScript. Poco después también como un estándar ISO.',
                    'Netscape introdujo una implementación de script del lado del servidor con Netscape Enterprise Server, lanzada en diciembre de 1994 (poco después del lanzamiento de JavaScript para navegadores web).13​14​A partir de mediados de la década de los 2000, ha habido una proliferación de implementaciones de JavaScript para el lado servidor. Node.js es uno de los notables ejemplos de JavaScript en el lado del servidor, siendo usado en proyectos importantes.',
                    'JavaScript se ha convertido en uno de los lenguajes de programación más populares en internet y poco usados. Al principio, sin embargo, muchos desarrolladores renegaban del lenguaje porque el público al que va dirigido lo formaban publicadores de artículos y demás aficionados, entre otras razones.17​ La llegada de Ajax devolvió JavaScript a la fama y atrajo la atención de muchos otros programadores. Como resultado de esto hubo una proliferación de un conjunto de frameworks y bibliotecas de ámbito general, mejorando las prácticas de programación con JavaScript, y aumentado el uso de JavaScript fuera de los navegadores web, como se ha visto con la proliferación de entornos JavaScript del lado del servidor. En enero de 2009, el proyecto CommonJS fue inaugurado con el objetivo de especificar una librería para uso de tareas comunes principalmente para el desarrollo fuera del navegador web.',
                    'En junio de 2015 se cerró y publicó el estándar ECMAScript 619​20​ con un soporte irregular entre navegadores21​ y que dota a JavaScript de características avanzadas que se echaban de menos y que son de uso habitual en otros lenguajes como, por ejemplo, módulos para organización del código, verdaderas clases para programación orientada a objetos, expresiones de flecha, iteradores, generadores o promesas para programación asíncrona.',
                    'La versión 7 de ECMAScript se conoce como ECMAScript 2016,22​ y es la última versión disponible, publicada en junio de 2016. Se trata de la primera versión para la que se usa un nuevo procedimiento de publicación anual y un proceso de desarrollo abierto.'
                ]
            }
        ],
        descripcionCorta: '',
        post: JAVASCRIPT,
        subcategorias: []
    },
    {
        id:13,
        nombre: 'kotlin',
        posicion: 'pos-z',
        abertura: '',
        rutaIcono: 'assets/img/categorias/kotlin.png',
        alturaIcono: '60',
        estado:'inactivo',
        ruta: 'kotlin',
        glosario: [],
        colorFondo: 'bg-Kotlin',
        color: 'c-Kotlin',
        descripcion: [],
        descripcionCorta: '',
        post: JAVASCRIPT,
        subcategorias: []
    },
    {
        id:14,
        nombre: 'kubernetes',
        posicion: 'pos-z',
        abertura: '',
        rutaIcono: 'assets/img/categorias/kubernetes.png',
        alturaIcono: '100',
        estado:'inactivo',
        glosario: [],
        ruta: 'kubernetes',
        colorFondo: 'bg-Kubernetes',
        color: 'c-Kubernetes',
        descripcion: [],
        descripcionCorta: '',
        post: JAVASCRIPT,
        subcategorias: []
    },
    {
        id:13,
        nombre: 'linux',
        posicion: 'rot-2',
        abertura: '',
        rutaIcono: 'assets/img/categorias/linux-white.png',
        alturaIcono: '60',
        estado:'inactivo',
        glosario: [],
        ruta: 'linux',
        colorFondo: 'bg-Linux',
        color: 'c-Linux',
        descripcion: [],
        descripcionCorta: '',
        post: LINUX,
        subcategorias: []
    },
    {
        id:14,
        nombre: 'net',
        posicion: 'rot-2',
        abertura: '',
        rutaIcono: 'assets/img/categorias/net-framework.png',
        alturaIcono: '80',
        glosario: [],
        estado:'inactivo',
        ruta: 'net',
        colorFondo: 'bg-NetFramework',
        color: 'c-NetFramework',
        descripcion: [],
        descripcionCorta: '',
        post: JAVASCRIPT,
        subcategorias: []
    },
    {
        id:15,
        nombre: 'php',
        posicion: 'rot-2',
        abertura: '',
        rutaIcono: 'assets/img/categorias/php.png',
        alturaIcono: '70',
        estado:'inactivo',
        glosario: [],
        ruta: 'php',
        colorFondo: 'bg-Php',
        color: 'c-Php',
        descripcion: [],
        descripcionCorta: '',
        post: JAVASCRIPT,
        subcategorias: []
    },
    {
        id:16,
        nombre: 'react',
        posicion: 'rot-2',
        abertura: '',
        rutaIcono: 'assets/img/categorias/react.png',
        alturaIcono: '100',
        estado:'inactivo',
        glosario: [],
        ruta: 'react',
        colorFondo: 'bg-React',
        color: ' c-React',
        descripcion: [],
        descripcionCorta: '',
        post: JAVASCRIPT,
        subcategorias: []
    },
    {
        id:17,
        nombre: 'typescript',
        posicion: 'rot-2',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/typescript.png',
        alturaIcono: '40',
        estado:'activo',
        glosario: [],
        ruta: 'typescript',
        colorFondo: 'bg-Typescript',
        color: ' c-Typescript',
        descripcion: [],
        descripcionCorta: '',
        post: TYPESCRIPT,
        subcategorias: []
    },
    {
        id:18,
        nombre: 'wordpress',
        posicion: 'rot-2',
        abertura: '',
        rutaIcono: 'assets/img/categorias/wordpress2.png',
        alturaIcono: '80',
        estado:'inactivo',
        glosario: [],
        ruta: 'wordpress',
        colorFondo: 'bg-Wordpress',
        color: 'c-Wordpress',
        descripcion: [],
        descripcionCorta: '',
        post: JAVASCRIPT,
        subcategorias: []
    },
]