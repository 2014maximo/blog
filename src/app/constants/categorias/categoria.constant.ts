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
import { KOTLIN } from '@constants/publicaciones/posts-kotlin.constant';
import { PHP } from '@constants/publicaciones/posts-php.constant';
import { REACT } from '@constants/publicaciones/posts-react.constant';
import { WORDPRESS } from '@constants/publicaciones/posts-wordpress.constant';
import { TERMINOS_LINUX } from '@constants/glosarios/terminos.linux.constant';

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
        descripcion: [
            {
                autor: '',
                linkAlAutor:'',
                descripciones: [
                    'Tanto el nombre Android (androide en español) como Nexus One hacen alusión a la novela de Philip K. Dick ¿Sueñan los androides con ovejas eléctricas?, que posteriormente fue adaptada al cine como Blade Runner.',
                    'Tanto el libro como la película se centran en un grupo de androides llamados replicantes del modelo Nexus-6. El logotipo es el robot “Andy”.',
                    'Android comenzó en octubre del año 2008 cuando vio por primera vez la luz el primer smartphone equipado con este sistema operativo, T-Mobile G1, un smartphone fabricado por HTC y desarrollado junto con Google.',
                    'Días antes de este lanzamiento comercial, el 23 de septiembre del 2008, Google celebraba una rueda de prensa donde se presentaba este dispositivo junto con la versión 1.0 de Android.',
                    'Android era un sistema operativo que estaba desarrollando una compañía de nombre Android Inc. y que fue adquirida por Google en julio del año 2005. Desde entonces siempre que se habla de este sistema operativo se hace referencia a la compañía del buscador aunque es la Open Handset Alliance.',
                    'ADQUISICIÓN POR PARTE DE GOOGLE',
                    'En julio de 2005, Google adquirió Android Inc., una pequeña compañía de Palo Alto, California fundada en 2003.',
                    'Entre los cofundadores de Android que se fueron a trabajar a Google están Andy Rubin (co-fundador de Danger), Rich Miner (co-fundador de Wildfire Communications, Inc.), Nick Sears (alguna vez VP en T-Mobile), y Chris White (quien encabezó el diseño y el desarrollo de la interfaz en WebTV).',
                    'En aquel entonces, poco se sabía de las funciones de Android Inc. fuera de que desarrollaban software para teléfonos móviles. Esto dio pie a rumores de que Google estaba planeando entrar en el mercado de los teléfonos móviles.',
                    'En Google, el equipo liderado por Rubin desarrolló una plataforma para dispositivos móviles basada en el kernel de Linux que fue promocionado a fabricantes de dispositivos y operadores con la promesa de proveer un sistema flexible y actualizable. La especulación sobre que el sistema Android de Google entraría en el mercado de la telefonía móvil se incrementó en diciembre de 2006.'
                ]
            }
        ],
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
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/kotlin-white.png',
        alturaIcono: '60',
        estado:'activo',
        ruta: 'kotlin',
        glosario: [],
        colorFondo: 'bg-Kotlin',
        color: 'c-Kotlin',
        descripcion: [
            {
                autor:'',
                linkAlAutor:'',
                descripciones: [
                    'UN POCO DE HISTORIA SOBRE KOTLIN, PODEMOS DESTACAR ESTOS DATOS:',
                    'Su nombre proviene del nombre de una isla.',
                    'Fue creado en 2010 por JetBrains, que es la empresa detrás de IntelliJ IDEA, uno de los mejores IDE de desarrollo para Java.',
                    'Todos los IDE de JetBrains están escritos en Java y su mayor problema era que su base de datos era muy grande, porque Java es un lenguaje genérico y poco conciso, y pensaron en qué características de otros lenguajes modernos podrían ayudarles.',
                    'Su mejor opción era Scala, pero lo descartaron por cuestiones de eficiencia y por ser demasiado potente o pesado para la solución que buscaban.',
                    'Una vez descartado Java, no querían salir del mundo de JVM y decidieron que la mejor opción era crear su propia versión mejorada de Java: Kotlin.',
                    'Inicialmente fue creado para aplicaciones de escritorio (que era el mercado de JetBrains), pero ahora mismo es el multiplataforma más potente, además del lenguaje oficial de Android.'
                ]
            }
        ],
        descripcionCorta: '',
        post: KOTLIN,
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
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/linux-white.png',
        alturaIcono: '60',
        estado:'activo',
        glosario: TERMINOS_LINUX,
        ruta: 'linux',
        colorFondo: 'bg-Linux',
        color: 'c-Linux',
        descripcion: [
            {
                autor:'',
                linkAlAutor:'',
                descripciones:[
                    'En 1992 habían solo 100 personas trabajando en el desarrollo Kernel de Linux, pero en el 2010 ya eran 1000 personas los que trabajaban en el. Estos permitieron que lo que eran 250.000 líneas de código (1995) pasaran a ser 14.000.000 (2.010). Estos. Mas datos y curiosidades se encuentran en este trabajo, donde explicamos cosas sobre Linux, y todo lo que le rodea, y permite ver como una idea se puede convertir en algo muy grande.',
                    'ORIGEN DE LINUX',
                    'Para entender correctamente a Linux y lo que supone es necesario tener claro su origen.',
                    'La historia de Linux comenzó mucho antes de lo que la mayoría de gente piensa, ya que en 1969, Ken Thompson, de AT&T Bell Laboratories, desarrolló el sistema operativo Unix, adaptándolo a las necesidades de un entorno de investigación, sin saber la importancia que llegaría a tener su trabajo. Un año después Dennis Ritchie (creador del lenguaje de programación C), colaboró con Ken Thompson para pasar el código del sistema Unix a C. Lo que convierto a Unix en un sistema operativo transportable.',
                    'Unix creció gradualmente hasta convertirse en un producto de software estándar, distribuido por muchos vendedores tales como Novell e IBM. Sus primeras versiones fueron distribuidas de forma gratuita a los departamentos científicos de informática de muchas universidades de renombre. En 1972, los laboratorios Bell empezaron a emitir versiones oficiales de Unix y a otorgar licencias del sistema a distintos usuarios. En 1975, Berkeley lanzó su propia versión de Unix (BSD). Esta versión de Unix se convirtió en la principal competidora de la versión de los laboratorios Bell de ATT&T, pero no era la única ya que en 1980, Microsoft desarrolló una versión de Unix para PC llamada Xenix.',
                    'En 1991 esta organización desarrolló el SistemaV versión4, que incorporaba casi todas las características que se encuentran en el SistemaV versión3, BSDversión4.3, SunOS y Xenix. Como respuesta a esta nueva versión, varias compañías, tales como IBM y Hewlett Packard, establecieron la Open Software Foundation (OSF) para crear su propia versión estándar del Unix. Debido a la proliferación de versiones de Unix en las décadas anteriores, el Instituto de Ingenieros Eléctricos y Electrónicos (IIEE) desarrollo un estándar del Unix independiente para el American National Institute (ANSI). Este nuevo estándar ANSI del Unix se llama Portable Operating System Interface for Computer Environments (POSIX). Este estándar define una norma universal a la cual se deben adherir todas las versiones de Unix.',
                    'En esa época, los estudiantes utilizaban un programa llamado Minix, que incorporaba diferentes características de Unix. Minix fue creado por el profesor Andrew Tannenbaum. Director del Departamento de Sistemas de la Universidad de Vrije, Amsterdam.',
                    'Profesor de Arquitectura de Ordenadores y Sistemas Operativos. Licenciado en el MIT, y doctorado en la Universidad de Berkeley, California. En 1992 participó debate con Linus sobre la idea de este utilizar un núcleo monolítico en vez de los basados en un micro núcleo que Tanenbaum creía que serían la base de los sistemas operativos futuros.',
                    'Era el año 1991 y Linus Torvalds ,que en aquel entonces era un estudiante de informática de la Universidad de Helsinki, empezó a programar las primeras líneas de código de un sistema operativo(finalmente llamado LINUX ) como una afición y sin poderse imaginar la gran repercusión que traería.',
                    'Hubo una primera versión no oficial de Linux 0.01, pero esta solo incluía el comienzo del núcleo, estaba escrita en lenguaje ensamblador y asumía que uno tenía acceso a un sistema Minix para su compilación.',
                    'El 5 de octubre de 1991, Linus anuncio la primera versión oficial de Linux (versión 0.02). Con esta versión Linus pudo ejecutar Bash (GNU Bourne Again Shell) y gcc (El compilador GNU de C).Desde aquel entonces se han hecho muchísimas versiones con ayuda de programadores de todo el mundo.',
                    'Linux es un sistema operativo compatible con Unix, sus dos características principales y que los diferencian del resto de los sistemas operativos que encontramos en el mercado son: 1. Es software libre, esto significa que no tenemos que pagar por el uso del mismo. 2. El sistema viene acompañado del código fuente (el sistema lo forman el núcleo del sistema (kernel) mas un gran numero de librerías que hacen posible su utilización). Las plataformas en las que en un principio se puede utilizar Linux son: Pentium, Pentium Pro, Pentium II/III/IV, Amiga y Atari, también existen versiones para su utilización en otras plataformas, como Alpha, ARM, MIPS, PowerPC y SPARC.',
                    'En los últimos tiempos, ciertas casas de software comercial han empezado a distribuir sus productos para Linux y la presencia del mismo en empresas aumenta rápidamente por la excelente relación calidad-precio que se consigue con Linux.',
                    'Tux es el nombre de la mascota oficial de Linux. Creado por Larry Ewing en 1996, es un pequeño pingüino de aspecto risueño y cómico. La idea de que la mascota de kernel Linux fuera un pingüino provino del mismo Linus Torvalds, creador de kernel Linux.',
                    'Existen dos versiones sobre el origen de su nombre:',
                    '1. Los pingüinos parecen vestir un esmoquin (que en inglés es tuxedo max, abreviado tux).',
                    '2. Las letras que componen Tux provienen de las palabras Torvalds y Unix.',
                    'Hay quien dice que Tux era el nombre de un peluche que tenia Linus que era un pingüino llamado Tux. El logotipo se puede usar y modificar sin restricciones, siempre que se reconozca la autoría de Larry Ewing, ya que es su trabajo y se debe reconocer su autoría tal y como se indica en su página.',
                    'LINUS TORVALDS',
                    'Nació el 28 de diciembre de 1969 en Finlandia, es un ingeniero de software conocido por iniciar y mantener el desarrollo del «kernel» de Linux, basándose en el sistema operativo libre Minix y en algunas herramientas, varias utilidades y los compiladores desarrollados por el proyecto GNU. En la actualidad es responsable de la coordinación del proyecto.',
                    'Su vida Con tan solo 11 años y la ayuda de su abuelo que era un matemático y estadístico de la época, el cual al comprarse un Commodore enseño al joven Linus a manejarlo.',
                    'En 1988 entro en la Universidad de Helsinki en donde aprendió sobre las ciencias de la computación y conoció a Andew S.Tanenbaum el cual ese mismo año creo el sistema operativo Minix.',
                    'Aprendió a programar en C y después de varios años adquiriendo experiencia y tomar prestadas algunas ideas, creó en 1991 el primer Linux capaz de ejecutar BASH y disponer del compilador GCC.',
                    'Le llamo Linux, debido a su apodo de la universidad.',
                    'Un año más tarde Linux adopto GPL, una licencia que le añadía libertades para poder manipular y redistribuir su código de manera totalmente libre, lo que ha permitido que Linux se mantenga estable hasta nuestros días.',
                    'Después de estar diez años estudiando y e investigando, entro a trabajar en Transmeta, una empresa dedicada a la fabricación de microprocesadores para portátiles; más tarde decidió abandonarla para poder dedicarse completamente al sueño que había creado, el desarrollo del kernel Linux. En la actualidad trabaja en los laboratorios Open Source Development Labs en Oregón, con la intención de seguir desarrollando su pasión, el kernel de Linux. Torvalds posee la marca registrada «Linux» y supervisa el uso de la marca a través de la organización sin ánimo de lucro Linux International, que se encarga de difundir por el mundo los beneficios del S.O.',
                    'A pesar de todo, Linus, con sus 36 años, está felizmente casado con Tove y actualmente vive en Portland con sus tres hijas: Patricia, Daniela y Celeste, un lugar mucho más tranquilo para vivir con su familia.',
                    'Algunas de las curiosidades que conocemos de Linus Torvalds es una persona como otra cualquiera y a la que le encanta la cerveza, conducir, y estar disfrutando con su familia.',
                    'En 2001 lanzo su primer y único libro, su propio autobiografía, titulada “Just For Fun: The Story of an Accidental Revolutionary”, que traducido al castellano es muy curioso y significa: Sólo por diversión: la historia de un revolucionario accidental.',
                    'CREACIÓN DE LINUX',
                    'Los motivos que llevaron a este genio a desarrollar su propio sistema operativo fueron varias. Normalmente, Linus utilizaba un computador que usaba para tener acceso por línea telefónica a la red informática de su Universidad, pero debido a que este utilizaba Minix y este no era de su agrado, decidió crear uno él mismo. En los primeros intentos hizo un programa que arrancaba desde un disquete, y consiguió arrancar el computador y ejecutar dos procesos que mostraban la cadena de caracteres AAAAABBBBB. Uno lo utilizaría para leer desde el módem y escribir en la pantalla, mientras que el otro escribiría al módem y leería desde el teclado.',
                    'El otro motivo que le llevo a el desarrollo de su S.O fue, la necesidad que tenia de poder descargar y subir archivos de su universidad, pero para implementar esta funcionalidad en el software, era necesario crear un controlador de disco. Así que después de un trabajo continuo y duro, creó un controlador compatible con el sistema de archivos de Minix.',
                    'Podríamos decir que por error decidió crear Linux partiendo desde cero al darse cuenta, de que estaba creando algo más que un simple emulador de terminal. En un principio Linux se iba a llamar Freax (free+ freak + x), aunque después se le siguió conociendo como lo conocemos hoy en día. Después de decidir seguir desarrollando su sistema para construir un remplazo de Minix, sube al servidor de su universidad Linux con 10.000 líneas de código. A partir de ese momento Linux empezó a evolucionar rápidamente y hasta día de hoy no ha dejado de avanzar, ganando terreno a otros sistemas operativos que no son de código abierto. Linux hoy en día sigue ganando adeptos en todas las partes del mundo debido a ser gratuito y cada vez más personas anónimas contribuyen a su desarrollo y a convertirse en el sistema más estable y seguro.',
                    'La frase que utilizo al subir Linux al servidor fue:',
                    '"Si suspiras al recordar aquellos días cuando los hombres eran hombres y escribían sus propios drivers". Si te encuentras sin ningún proyecto interesante y te gustaría tener un verdadero sistema operativo que pudieras modificar a tu gusto, si te resulta frustrante tener solo Minix. Entonces este artículo es para ti». Lo que la gente desconoce es que Linus Torvalds solo escribe el 2% del sistema operativo Linux, es decir unas 50.000 líneas de código. El resto, se encarga de escribirlo los millones de personas que por vocación deciden mejorar este sistema, aunque Linus se encarga personalmente de supervisarlo. Torvalds siempre se ha mostrado ingenioso en sus respuestas sobre su rival, Microsoft. En una de sus últimas declaraciones explicaba que “el caso antimonopolio contra Microsoft no ha representado una gran diferencia o una ayuda para Linux, pero lo que sí ha conseguido es que la gente compruebe que Microsoft no representa el sueño americano de la informática; que tiene muchos huecos por cubrir, muchas cosas que mejorar y un grave problema de marketing. Probablemente esto nos ha abierto muchas puertas”. Otra de las cualidades a destacar de Torvalds quizá es que sea uno de los pocos miembros del movimiento OPENSOURCE que se preocupa más por el código que por las leyes.'
                ]
            }
        ],
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
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/php.png',
        alturaIcono: '70',
        estado:'activo',
        glosario: [],
        ruta: 'php',
        colorFondo: 'bg-Php',
        color: 'c-Php',
        descripcion: [
            {
                autor:'',
                linkAlAutor:'',
                descripciones:[
                    'PHP tal y como se conoce hoy en día es en realidad el sucesor de un producto llamado PHP/FI. Creado en 1994 por Rasmus Lerdorf, la primera encarnación de PHP era un conjunto simple de ficheros binarios Common Gateway Interface (CGI) escritos en el lenguaje de programación C. Originalmente utilizado para rastrear visitas de su currículum online, llamó al conjunto de scripts "Personal Home Page Tools", más frecuentemente referenciado como "PHP Tools". Con el paso del tiempo se quiso más funcionalidad, y Rasmus reescribió PHP Tools, produciendo una implementación más grande y rica. Este nuevo modelo fue capaz de interaccionar con bases de datos, y mucho más, proporcionando un entorno de trabajo sobre cuyos usuarios podían desarrollar aplicaciones web dinámicas sencillas tales como libros de visitas. En junio de 1995, Rasmus » publicó el código fuente de PHP Tools, lo que permitió a los desarrolladores usarlo como considerasen apropiado. Esto también permitió -y animó- a los usuarios a proporcionar soluciones a los errores del código, y generalmente a mejorarlo.',
                    'En septiembre de ese mismo año, Rasmus amplió PHP y -por un corto periodo de tiempo- abandonó el nombre de PHP. Ahora, refiriéndose a las herramientas como FI (abreviatura de "Forms Interpreter"), la nueva implementación incluía algunas de las funciones básicas de PHP tal y como la conocemos hoy. Tenía variables como las de Perl, interpretación automática de variables de formulario y sintaxis incrustada HTML. La sintaxis por sí misma era similar a la de Perl, aunque mucho más limitada, simple y algo inconsistente. De hecho, para embeber el código en un fichero HTML, los desarrolladores tenían que usar comentarios de HTML. Aunque este método no era completamente bien recibido, FI continuó gozando de expansión y aceptación como una herramienta CGI --- pero todavía no completamente como lenguaje. Sin embargo, esto comenzó a cambiar al mes siguiente; en octubre de 1995 Rasmus publicó una versión nueva del código. Recordando el nombre PHP, ahora era llamado (resumidamente) "Personal Home Page Construction Kit," y fue la primera versión que presumía de ser, en aquel momento, considerada como una interfaz de scripts avanzada. El lenguaje fue deliberadamente diseñado para asemejarse a C en estructura, haciéndolo una adopción sencilla para desarrolladores familiarizados con C, Perl, y lenguajes similares. Habiendo sido así bastante limitado a sistemas UNIX y compatibles con POSIX, el potencial para una implementación de Windows NT estaba siendo explorada.',
                    'El código fue completamente rehecho de nuevo, y en abril de 1996, combinando los nombres de versiones anteriores, Rasmus introdujo PHP/FI. Esta implementación de segunda generación comenzó realmente a desarrollar PHP desde un conjunto de herramientas dentro de un lenguaje de programación de derecho propio. Incluía soporte interno para DBM, mSQL, y bases de datos Postgres95, cookies, soporte para funciones definidas por el usuario, y mucho más. Ese mes de junio, PHP/FI brindó una versión 2.0. Sin embargo, un interesante hecho sobre esto, es que sólo había una única versión completa de PHP 2.0. Cuando finalmente pasó de la versión beta en noviembre de 1997, el motor de análisis subyacente ya estaba siendo reescrito por completo.',
                    'Aunque vivió una corta vida de desarrollo, continuó gozando de un crecimiento de popularidad en el aún joven mundo del desarrollo. En 1997 y 1998, PHP/FI tenía un culto de varios miles de usuarios en todo el mundo. Una encuesta de Netcraft en mayo de 1998 indicó que cerca de 60,000 dominios reportaron que tenían cabeceras que contenían "PHP", indicando en efecto que el servidor host lo tenía instalado. Este número se correspondía con aproximadamente el 1% de todos los dominios de Internet del momento. A pesar de estas impresionantes cifras, la maduración de PHP/FI estaba condenada por limitaciones; mientras habían varios contribuidores menores, aún era desarrollado principalmente por un individuo.'
                ]
            }
        ],
        descripcionCorta: '',
        post: PHP,
        subcategorias: []
    },
    {
        id:16,
        nombre: 'react',
        posicion: 'rot-2',
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/react.png',
        alturaIcono: '100',
        estado:'activo',
        glosario: [],
        ruta: 'react',
        colorFondo: 'bg-React',
        color: ' c-React',
        descripcion: [
            {
                autor:'',
                linkAlAutor:'',
                descripciones:[
                    'React fue creado por Jordan Walke, un ingeniero de software en Facebook, que lanzó un primer prototipo de React llamado “FaxJS”. Fue influenciado por XHP , una biblioteca de componentes HTML para PHP. Se implementó por primera vez en las Noticias de Facebook en 2011 y luego en Instagram en 2012. Fue de código abierto en JSConf US en mayo de 2013.',
                    'React Native, que permite el desarrollo nativo de Android, iOS y UWP con React, se anunció en React Conf de Facebook en febrero de 2015 y de código abierto en marzo de 2015.',
                    'El 18 de abril de 2017, Facebook anunció React Fiber , un nuevo algoritmo central de la biblioteca React para construir interfaces de usuario. React Fiber se convertiría en la base de cualquier mejora futura y desarrollo de características de la biblioteca React.',
                    'El 26 de septiembre de 2017, React 16.0 fue lanzado al público. El 16 de febrero de 2019, React 16.8 fue lanzado al público. El lanzamiento introdujo React Hooks.'
                ]
            }
        ],
        descripcionCorta: '',
        post: REACT,
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
        abertura: '80%',
        rutaIcono: 'assets/img/categorias/wordpress2.png',
        alturaIcono: '80',
        estado:'activo',
        glosario: [],
        ruta: 'wordpress',
        colorFondo: 'bg-Wordpress',
        color: 'c-Wordpress',
        descripcion: [
            {
                autor: '',
                linkAlAutor:'',
                descripciones:[
                    'La historia de WordPress comienza cuando, en 2002, el francés Michel Valdrighi, programador de una plataforma de blogs de código abierto existente llamada “b2/cafelog”, dejó de dar soporte a dicha plataforma que el mismo creó en 2001. En realidad, WordPress es la evolución de esta plataforma, un antiguo CMS desarrollado y lanzado en el 2001.',
                    'Fue entonces cuando, el 24 de enero de 2003, un universitario llamado Matt Mullenweg publicó en el blog donde colgaba fotos de su viaje a Washington D.C. que estaba dispuesto a crear una nueva branch o rama del proyecto de b2 aprovechando su licencia GPL de código abierto motivado por la falta de opciones y soporte del autor original.',
                    'Tan sólo 1 día después, el 25 de enero de 2003 a las 3:58pm, Mike Little, hoy día colaborador de WordPress y director de la compañía Zed1, comentó que, si el comentario de Matt era en serio, él estaría dispuesto a colaborar en el proyecto de la creación de una nueva plataforma. Es así como se creó la primera versión de WordPress. Más tarde el creador de b2/cafelog Michel Valdrighi se une al nuevo proyecto WordPress. La historia de WordPress y su nombre viene dada de una amiga de Mullenweg, Christine Tremoulet que sugirió llamar WordPress a lo que hoy conocemos como el mayor sistema de gestión de contenidos de todo internet.',
                    'En definitiva, la plataforma nació del deseo de un elegante y bien diseñado sistema de publicación personal basado en PHP y MySQL y bajo la licencia GPL. Es el sucesor oficial de b2/cafelog. Es un producto maduro y estable. Principalmente, el nacimiento de WordPress se centra en las normas y la experiencia del usuario para crear una herramienta diferente.',
                    'En la actualidad el desarrollo de WordPress es mantenido por toda la comunidad a nivel mundial, pero al final las decisiones las toma una sola persona: Matt Mullenweg.',
                    'WordPress se creó con un fin en mente el cual luego de más de 10 años se sigue manteniendo y teniendo el éxito que todos conocemos.'
                ]
            }
        ],
        descripcionCorta: '',
        post: WORDPRESS,
        subcategorias: []
    },
]