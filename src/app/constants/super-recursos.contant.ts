import { BloqueContenidoModel } from '../models/bloque-contenidos.model';
import { repositorioContenidoImagenes } from './globales.constant';


export const LINKS: BloqueContenidoModel[] = [
    {
        id: 'redes',
        titulo: 'Redes Sociales',
        contenidoIcons: true,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: '',
                        nombreRecurso: 'telegram',
                        height: '',
                        rutaRecurso: 'https://web.telegram.org/',
                        descripcion: '',
                        red: 'telegram'
                    },
                    {
                        img: '',
                        nombreRecurso: 'whatsapp',
                        height: '',
                        rutaRecurso: 'https://web.whatsapp.com/',
                        descripcion: '',
                        red: 'whatsapp'
                    },
                    {
                        img: '',
                        nombreRecurso: 'youtube',
                        height: '',
                        rutaRecurso: 'https://www.youtube.com/',
                        descripcion: '',
                        red: 'youtube'
                    },
                    {
                        img: '',
                        nombreRecurso: 'skype',
                        height: '',
                        rutaRecurso: 'https://www.skype.com/es/',
                        descripcion: '',
                        red: 'skype'
                    },
                    {
                        img: '',
                        nombreRecurso: 'facebook',
                        height: '',
                        rutaRecurso: 'https://www.facebook.com/',
                        descripcion: '',
                        red: 'facebook'
                    },
                ]
            },
            {
                index: '2',
                links: [
                    {
                        img: '',
                        nombreRecurso: 'twitter',
                        height: '',
                        rutaRecurso: 'https://twitter.com/home',
                        descripcion: '',
                        red: 'twitter'
                    },
                    {
                        img: '',
                        nombreRecurso: 'instagram',
                        height: '',
                        rutaRecurso: 'https://www.instagram.com/?hl=es-la',
                        descripcion: '',
                        red: 'instagram'
                    },
                    {
                        img: '',
                        nombreRecurso: 'messenger',
                        height: '',
                        rutaRecurso: 'https://www.messenger.com/',
                        descripcion: '',
                        red: 'user'
                    },
                ]
            }

        ]
    },
    {
        id: 'redes-dev',
        titulo: 'Redes Dev',
        contenidoIcons: true,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: '',
                        nombreRecurso: 'github',
                        height: '',
                        rutaRecurso: 'https://github.com/',
                        descripcion: '',
                        red: 'github'
                    },
                    {
                        img: '',
                        nombreRecurso: 'gitlab',
                        height: '',
                        rutaRecurso: 'https://gitlab.com/users/sign_in',
                        descripcion: '',
                        red: 'gitlab'
                    },
                    {
                        img: '',
                        nombreRecurso: 'trello',
                        height: '',
                        rutaRecurso: 'https://trello.com/',
                        descripcion: '',
                        red: 'trello'
                    },
                    {
                        img: '',
                        nombreRecurso: 'slack',
                        height: '',
                        rutaRecurso: 'https://slack.com/intl/es-co/',
                        descripcion: '',
                        red: 'slack'
                    },
                ]
            }

        ]
    },
    {
        id: 'google-avanzados',
        titulo: 'Google avanzados',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: 'assets/img/icons/google-favicon.png',
                        nombreRecurso: '',
                        height: '55',
                        rutaRecurso: 'https://get.google.com/albumarchive/',
                        descripcion: 'Archivo de albumnes de la cuenta.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/google-adsense.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://www.google.com/adsense/',
                        descripcion: 'Anuncios más relevantes y más espacios publicitarios llenos...',
                        red: ''
                    },
                ]
            },
            {
                index: '2',
                links: [
                    {
                        img: 'assets/img/icons/google-pagespeed-insights.png',
                        nombreRecurso: '',
                        height: '55',
                        rutaRecurso: 'https://developers.google.com/speed/pagespeed/insights/?hl=es',
                        descripcion: 'Mejora la velocidad de tus páginas web en todos los dispositivos.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/googlesearchconsole.png',
                        nombreRecurso: '',
                        height: '55',
                        rutaRecurso: 'https://search.google.com/search-console/about',
                        descripcion: 'Gracias a las herramientas y los informes de Search Console, podrás medir el rendimiento y el tráfico de búsqueda de tu sitio web, corregir problemas y conseguir que tu sitio web destaque en los resultados de la Búsqueda de Google.',
                        red: ''
                    },

                ]
            },

        ]
    },
    {
        id: 'herramientas-desarrollo',
        titulo: 'Herramientas Desarrollo y Web',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: 'assets/img/icons/solarwinds-pingdom.png',
                        nombreRecurso: '',
                        height: '55',
                        rutaRecurso: 'https://tools.pingdom.com',
                        descripcion: 'Prueba de velocidad de páginas.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/blogger-templates.png',
                        nombreRecurso: '',
                        height: '35',
                        rutaRecurso: 'https://btemplates.com',
                        descripcion: 'Plantillas gratuitas y profesionales para tu blog.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/web-dev.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://web.dev',
                        descripcion: 'Obtenga las capacidades modernas de la web en sus propios sitios y aplicaciones con orientación y análisis útiles de web dev.',
                        red: ''
                    },
                ]
            },
            {
                index: '2',
                links: [
                    {
                        img: 'assets/img/icons/lawebera.png',
                        nombreRecurso: '',
                        height: '35',
                        rutaRecurso: 'https://www.lawebera.es',
                        descripcion: 'Explora nuestras secciones más populares para aprender todo lo necesario para hacer tus páginas webs desde cero. Con el control y la tranquilidad que te da tener los conocimientos para elegir lo que es mejor para tu site.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/waybackmachine.png',
                        nombreRecurso: '',
                        height: '55',
                        rutaRecurso: 'https://web.archive.org',
                        descripcion: 'A través de este sitio puedes ver otras webs en el pasado, como eran en diferentes puntos del tiempo.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/dnswatch.png',
                        nombreRecurso: '',
                        height: '40',
                        rutaRecurso: 'https://dnswatch.info',
                        descripcion: 'Servicio basado en la nube que se integra con su Firefox. DNSWatch supervisa las solicitudes de DNS a través de Firefox para evitar conexiones a dominios maliciosos conocidos.',
                        red: ''
                    },

                ]
            },
            {
                index: '3',
                links: [
                    {
                        img: 'assets/img/icons/caniuse.png',
                        nombreRecurso: '',
                        height: '40',
                        rutaRecurso: 'https://www.caniuse.com',
                        descripcion: 'Herramienta para comprobar compatibilidades web.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/mxtoolbox.png',
                        nombreRecurso: '',
                        height: '55',
                        rutaRecurso: 'https://mxtoolbox.com',
                        descripcion: 'Listará los registros MX de un dominio en orden de prioridad. La búsqueda de MX se realiza directamente contra el servidor de nombres autorizado del dominio, por lo que los cambios en los registros MX deberían aparecer al instrante. Puedes hacer clic en Diagnóstico, que se conectará al servidor de correo, verificará los registros DNS inversos, realizará una simple comprobación de Open Relay y medirá el rendimiento del tiempo de respuesta. También puede comprobar cada registro MX (Dirección IP) contra 105 listas negras basadas en DNS.',
                        red: ''
                    },

                ]
            },
            {
                index: '4',
                links: [
                    {
                        img: '',
                        nombreRecurso: 'Responsinator',
                        height: '',
                        rutaRecurso: 'https://www.responsinator.com',
                        descripcion: 'Esta página muestra como queda la versión responsive de la url que le ingresemos.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/unminify.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://unminify.com',
                        descripcion: 'Ingresa tu código JavaScript, CSS, HTML, XML y JSON minificado y desminifícalo.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/whois.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://www.whois.com',
                        descripcion: 'Ingresa un dominio para ver si esta disponible, sino te sugiere nombres y posibles dominios disponibles.',
                        red: ''
                    },

                ]
            },
            {
                index: '5',
                links: [
                    {
                        img: '',
                        nombreRecurso: 'Closing Tag Checker',
                        height: '',
                        rutaRecurso: 'https://www.aliciaramirez.com/closing-tags-checker',
                        descripcion: 'Esta herramienta permite ver si falta cerrar una etiqueta HTML.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/ascii-art-generator.png',
                        nombreRecurso: '',
                        height: '30',
                        rutaRecurso: 'https://www.ascii-art-generator.org',
                        descripcion: 'Convierte texto en arte ASCII, con este editor online.',
                        red: '',
                        mediaQuery: 'alturaQuery'

                    },

                ]
            },
            {
                index: '6',
                links: [
                    {
                        img: 'assets/img/icons/IlovePDF.png',
                        nombreRecurso: '',
                        height: '40',
                        rutaRecurso: 'https://www.ilovepdf.com/es',
                        descripcion: 'Todo lo que te imagines se pueda hacer con un PDF, desde quitarle contraseña, hasta colocarle números de página.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/gulpjs.png',
                        nombreRecurso: '',
                        height: '90',
                        rutaRecurso: 'https://gulpjs.com',
                        descripcion: 'Herramienta en forma de script en NodeJS, que te ayuda a automatizar tareas comunes en el desarrollo de una aplicación.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/surge-logo.svg',
                        nombreRecurso: '',
                        height: '90',
                        rutaRecurso: 'https://surge.sh',
                        descripcion: 'Surge es un servicio para implementar y alojar sitios web y aplicaciones estáticos. ... Su plan gratuito es óptimo para casi cualquier sitio estático, y la configuración del servicio se puede realizar con solo unas pocas teclas en la línea de comandos.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/gorest.png',
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://gorest.co.in/',
                        descripcion: 'API REST en línea para pruebas y creación de prototipos.',
                        red: ''
                    },

                ]
            },
            {
                index: '7',
                links: [
                    {
                        img: '',
                        nombreRecurso: 'reqres',
                        height: '',
                        rutaRecurso: 'https://reqres.in/',
                        descripcion: 'Pruebe su front-end contra una API real.',
                        red: ''
                    },
                ]
            },
        ]
    },
    {
        id: 'diseno-estilo',
        titulo: 'Diseño - Estilo - Web',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: 'assets/img/icons/mozilla-developer.png',
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://developer.mozilla.org/es',
                        descripcion: 'Recursos de desarrolladores, para desarrolladores.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/codrops-logo.png',
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://tympanus.net/codrops/',
                        descripcion: 'Tutoriales, Centro de interacción, artículos, referencias CSS.',
                        red: ''
                    },
                    {
                        img: '',
                        nombreRecurso: 'Cybmeta',
                        height: '',
                        rutaRecurso: 'https://cybmeta.com',
                        descripcion: 'Tutoriales y explicación de elementos para Wordpress, PHP, HTML, Javascript, CSS y hasta SEO.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/envato-tuts.png',
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://code.tutsplus.com/es/tutorials',
                        descripcion: 'Descubre miles de tutoriales de código gratuitos para ayudarte a aprender desarrollo web y móvil. Puedes aprender a desarrollar aplicaciones para Android, dominar React Native, convertirte en un mejor desarrollador de WordPress y mucho más.',
                        red: ''
                    },
                ]
            },


        ]
    },
    {
        id: 'hostings-dominios-servidores',
        titulo: 'Hostings - Dominios - Servidores',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: '',
                        nombreRecurso: 'RENDER',
                        height: '45',
                        rutaRecurso: 'https://render.com/',
                        descripcion: 'La forma más rápida de alojar todas sus web apps - APIs - databases - workers - static sites - containers - cron jobs.',
                        red: ''
                    },
                    {
                        img: `${repositorioContenidoImagenes}assets/icon/railway-white.png`,
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://railway.app/',
                        descripcion: 'Hecho para cualquier idioma, para proyectos grandes y pequeños. Railway es la nube que elimina la complejidad del envío de software.',
                        red: ''
                    },
                    {
                        img: `${repositorioContenidoImagenes}assets/icon/netlify-white.png`,
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://www.netlify.com/',
                        descripcion: 'Construir el futuro de la web, Netlify une todo un ecosistema de herramientas y servicios modernos en un único y sencillo flujo de trabajo para construir sitios y aplicaciones de alto rendimiento.',
                        red: ''
                    }
                ]
            },
            {
                index: '2',
                links: [
                    {
                        img: `${repositorioContenidoImagenes}assets/icon/cloudflare-workers-white.png`,
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://workers.cloudflare.com/',
                        descripcion: 'Usted escribe el código. Nosotros nos encargamos del resto. Despliegue el código sin servidor al instante en todo el mundo para darle un rendimiento, una fiabilidad y una escala excepcionales.',
                        red: ''
                    },
                    {
                        img: `${repositorioContenidoImagenes}assets/icon/firebase.png`,
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://firebase.google.com/',
                        descripcion: 'Firebase te ayuda a compilar y ejecutar apps exitosas.',
                        red: ''
                    },
                    {
                        img: `${repositorioContenidoImagenes}assets/icon/amazon-aws.png`,
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://aws.amazon.com/es/',
                        descripcion: ' Comience a crear con AWS hoy mismo. Independientemente de si necesita potencia de cómputo, almacenamiento para bases de datos, entrega de contenido u otra funcionalidad, AWS cuenta con los servicios necesarios para ayudarlo a crear aplicaciones sofisticadas con mayor flexibilidad, escalabilidad y fiabilidad.',
                        red: ''
                    },
                ]
            },
            {
                index: '3',
                links: [
                    {
                        img: `${repositorioContenidoImagenes}assets/icon/godaddy.png`,
                        nombreRecurso: '',
                        height: '40',
                        rutaRecurso: 'https://www.godaddy.com/',
                        descripcion: 'Ponga su negocio en línea con un .com',
                        red: ''
                    },
                    {
                        img: `${repositorioContenidoImagenes}assets/icon/hostinger.png`,
                        nombreRecurso: '',
                        height: '40',
                        rutaRecurso: 'https://www.hostinger.co/',
                        descripcion: 'Proveedor de alojamiento web y dominios web.',
                        red: ''
                    },
                    {
                        img: `${repositorioContenidoImagenes}assets/icon/siteground.png`,
                        nombreRecurso: '',
                        height: '40',
                        rutaRecurso: 'https://es.siteground.com/',
                        descripcion: 'Soluciones de hosting diseñadas para una fácil gestión del sitio web',
                        red: ''
                    },
                ]
            },
            {
                index: '4',
                links: [
                    {
                        img: `${repositorioContenidoImagenes}assets/icon/interserver.png`,
                        nombreRecurso: '',
                        height: '40',
                        rutaRecurso: 'https://www.interserver.net/',
                        descripcion: 'Ponga su negocio en línea con un .com',
                        red: ''
                    },
                    {
                        img: `${repositorioContenidoImagenes}assets/icon/hostgator.png`,
                        nombreRecurso: '',
                        height: '40',
                        rutaRecurso: 'https://www.hostgator.co/',
                        descripcion: 'Crea un sitio web que crezca contigo, todas las facilidades para transformar tu idea en un proyecto digital exitoso',
                        red: ''
                    },
                ]
            },


        ]
    },
    {
        id: 'php-wordpress',
        titulo: 'PHP y Wordpress',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: 'assets/img/icons/php-manual.png',
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://www.php.net/manual/es/indexes.functions.php',
                        descripcion: 'Listado de Funciones y Métodos. Excelentes y completas explicaciones en español.',
                        red: ''
                    },
                    {
                        img: '',
                        nombreRecurso: 'Tutorial PDO',
                        height: '',
                        rutaRecurso: 'https://diego.com.es/tutorial-de-pdo',
                        descripcion: 'Tutorial para conectar nuestro código PHP con base de datos.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/worpress-org.png',
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://developer.wordpress.org',
                        descripcion: 'Referencias de código, estandares de código, editor de código, aplicaciones comunes, temas, plugins, entre otras cosas.',
                        red: ''
                    },
                ]
            },
            {
                index: '2',
                links: [
                    {
                        img: '',
                        nombreRecurso: 'Jerarquía Wordpress',
                        height: '',
                        rutaRecurso: 'https://wphierarchy.com',
                        descripcion: 'Mira la jerarquía de las plantillas de Wordpress.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/underscores.png',
                        nombreRecurso: '',
                        height: '120',
                        rutaRecurso: 'https://underscores.me',
                        descripcion: 'Crea una plantilla básica de Wordpress con todo lo necesario.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/woocommerce-docs.png',
                        nombreRecurso: '',
                        height: '35',
                        rutaRecurso: 'https://docs.woocommerce.com/document/woocommerce-shortcodes/',
                        descripcion: 'Documentación para la creación de comercios en Wordpress.',
                        red: ''
                    },
                ]
            },
            {
                index: '3',
                links: [
                    {
                        img: 'assets/img/icons/placetopay.png',
                        nombreRecurso: '',
                        height: '50',
                        rutaRecurso: 'https://www.placetopay.com/web/',
                        descripcion: 'Plataforma de pagos a través de un botón.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/slider-revolution.png',
                        nombreRecurso: '',
                        height: '70',
                        rutaRecurso: 'https://www.sliderrevolution.com',
                        descripcion: 'Slider para Wordpress supercompleto.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/woodemia.png',
                        nombreRecurso: '',
                        height: '70',
                        rutaRecurso: 'https://woodemia.com',
                        descripcion: 'Conviértete en un profesional del ecommerce.',
                        red: ''
                    },
                ]
            },
            {
                index: '4',
                links: [
                    {
                        img: 'assets/img/icons/AdvanceCustomFields.png',
                        nombreRecurso: '',
                        height: '50',
                        rutaRecurso: 'https://www.advancedcustomfields.com',
                        descripcion: 'Documentación para plugin Wordpress que permite crear campos personalizados.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/plantilla-stack.png',
                        nombreRecurso: '',
                        height: '50',
                        rutaRecurso: 'https://elements.envato.com/es/stack-multi-purpose-responsive-wordpress-theme-WK3A4E8',
                        descripcion: 'Plantilla Wordpress.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/hooks-woocommerce.png',
                        nombreRecurso: '',
                        height: '50',
                        rutaRecurso: 'http://hookr.io/plugins/woocommerce/#index=a',
                        descripcion: 'Ganchos Woocommerce Wordpress.',
                        red: ''
                    },
                ]
            },


        ]
    },
    {
        id: 'css',
        titulo: 'CSS',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: '',
                        nombreRecurso: 'Clean CSS',
                        height: '',
                        rutaRecurso: 'https://www.cleancss.com/css-beautify/',
                        descripcion: 'Embellece tu código CSS.',
                        red: ''
                    },
                    {
                        img: '',
                        nombreRecurso: 'HTML Color codes',
                        height: '',
                        rutaRecurso: 'https://htmlcolorcodes.com/es/',
                        descripcion: 'Obtener códigos de color HTML, códigos de color Hex, RGB y HSL valores con nuestra selección de colores, tablas de colores y nombres de colores HTML. ¡Vamonos!.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/cssminifier.png',
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://cssminifier.com',
                        descripcion: 'Compresor de CSS.',
                        red: ''
                    },
                ]
            },
            {
                index: '2',
                links: [
                    {
                        img: '',
                        nombreRecurso: 'CSS 3.0 MAKER',
                        height: '',
                        rutaRecurso: 'https://www.css3maker.com/index.html',
                        descripcion: 'Esta herramienta facilita realizar "border-radius", "flexbox", "gradient", "transform", "animation", "transition", "RGBA", "text-shadow", "box-shadow", "text-rotation".',
                        red: ''
                    },
                    {
                        img: '',
                        nombreRecurso: '*CSS-TRICKS',
                        height: '',
                        rutaRecurso: 'https://css-tricks.com',
                        descripcion: 'Documentación y referencia CSS con Flexbox y Web.',
                        red: ''
                    },
                    {
                        img: '',
                        nombreRecurso: 'Simple CSS',
                        height: '',
                        rutaRecurso: 'https://simplecss.eu/pxtoems.html',
                        descripcion: 'Convertir entre px, ems, pts, porcentaje.',
                        red: ''
                    },
                ]
            },
            {
                index: '3',
                links: [
                    {
                        img: 'assets/img/icons/w3schools.png',
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://www.w3schools.com/colors/colors_converter.asp',
                        descripcion: 'Convertidor de colores CSS de la w3schools.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/w3schools.png',
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://www.w3schools.com/colors/colors_picker.asp',
                        descripcion: 'Mostrario de colores de la w3schools.',
                        red: ''
                    },
                    {
                        img: '',
                        nombreRecurso: 'CSS ICON Space',
                        height: '',
                        rutaRecurso: 'https://cssicon.space/#/',
                        descripcion: 'Paquete de íconos básicos.',
                        red: ''
                    },
                ]
            },
            {
                index: '4',
                links: [
                    {
                        img: '',
                        nombreRecurso: 'Creative Link Effects',
                        height: '',
                        rutaRecurso: 'https://tympanus.net/Development/CreativeLinkEffects/',
                        descripcion: 'Excelentes diseños de muestra para links.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/csslab.png',
                        nombreRecurso: '',
                        height: '100',
                        rutaRecurso: 'http://www.csslab.cl',
                        descripcion: 'Tutoriales y explicaciones CSS.',
                        red: ''
                    },
                    {
                        img: '',
                        nombreRecurso: 'Hover.css',
                        height: '',
                        rutaRecurso: 'https://cssicon.space/#/',
                        descripcion: 'Una colección de efectos de desplazamiento impulsados ​​por CSS3 que se aplicarán a enlaces, botones, logotipos, SVG, imágenes destacadas, etc. Aplíquelo fácilmente a sus propios elementos, modifíquelos o simplemente úselos como inspiración. Disponible en CSS, Sass y LESS.',
                        red: ''
                    },
                ]
            },
            {
                index: '5',
                links: [
                    {
                        img: 'assets/img/icons/css-shake.png',
                        nombreRecurso: '',
                        height: '100',
                        rutaRecurso: 'https://elrumordelaluz.github.io/csshake/',
                        descripcion: 'Algunas clases de CSS para mover tu DOM!.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/Animate-css.png',
                        nombreRecurso: '',
                        height: '30',
                        rutaRecurso: 'https://animate.style/',
                        descripcion: 'Librería CSS de animaciones.',
                        red: ''
                    },
                ]
            },


        ]
    },
    {
        id: 'librerias-frameworks',
        titulo: 'Librerías y Frameworks',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: 'assets/img/icons/bootstrap3.3.7.png',
                        nombreRecurso: '',
                        height: '65',
                        rutaRecurso: 'https://getbootstrap.com/docs/3.3/getting-started/',
                        descripcion: 'Versión 3.3.7',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/bootstrap-4.png',
                        nombreRecurso: '',
                        height: '100',
                        rutaRecurso: 'https://getbootstrap.com/docs/4.6/getting-started/introduction/',
                        descripcion: 'Versión 4.6',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/bootstrap5.png',
                        nombreRecurso: '',
                        height: '65',
                        rutaRecurso: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
                        descripcion: 'Versión 5.0',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/cssminifier.png',
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://cssminifier.com',
                        descripcion: 'Compresor de CSS.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/owl-carousel.png',
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://owlcarousel2.github.io/OwlCarousel2/',
                        descripcion: 'OWL CAROUSEL 2" librería para crear sliders.',
                        red: ''
                    },
                ]
            },
            {
                index: '2',
                links: [
                    {
                        img: '',
                        nombreRecurso: 'AOS',
                        height: '',
                        rutaRecurso: 'https://michalsnik.github.io/aos/',
                        descripcion: 'Librería de animaciones con scroll.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/normalize.png',
                        nombreRecurso: '',
                        height: '65',
                        rutaRecurso: 'https://necolas.github.io/normalize.css/',
                        descripcion: 'NORMALIZE, Framework CSS, actualmente en la versión 8',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/faticon.png',
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://www.flaticon.com',
                        descripcion: 'Acceso a 4,716,000 vectores e íconos.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/font-awesome.png',
                        nombreRecurso: '',
                        height: '30',
                        rutaRecurso: 'https://fontawesome.com/v4.7/icons/',
                        descripcion: 'Version 4.7.0 con 675 íconos.',
                        red: '',
                        clipBoard: '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">'
                    },
                ]
            },
            {
                index: '3',
                links: [
                    {
                        img: '',
                        nombreRecurso: 'Mínimamente',
                        height: '',
                        rutaRecurso: 'https://www.minimamente.com/project/magic/',
                        descripcion: 'Efectos de animación para botones.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/select2.png',
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://select2.org/',
                        descripcion: 'El reemplazo de jQuery para cajas de selección.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/angular-nav.png',
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://angular.io/cli',
                        descripcion: 'Framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/ngrx.svg',
                        nombreRecurso: 'Redux',
                        height: '80',
                        rutaRecurso: 'https://ngrx.io/',
                        descripcion: '"NGRX" Es el estándar de facto para implementar Redux en Angular. Está basada en RxJS y es una librería modular con todo lo necesario para crear grandes aplicaciones.',
                        red: ''
                    },
                ]
            },
            {
                index: '4',
                links: [
                    {
                        img: 'assets/img/icons/RXJS.png',
                        nombreRecurso: 'RXJS',
                        height: '80',
                        rutaRecurso: 'https://rxjs.dev/',
                        descripcion: 'RxJS es una biblioteca para programación reactiva que utiliza Observables, para facilitar la composición de código asincrónico o basado en devolución de llamada. Este proyecto es una reescritura de Reactive-Extensions / RxJS con mejor rendimiento, mejor modularidad, mejores pilas de llamadas depurables, mientras se mantiene en su mayoría compatible con versiones anteriores, con algunos cambios importantes que reducen la superficie de la API.',
                        red: ''
                    },
                    {
                        img: `${repositorioContenidoImagenes}assets/icon/SweetAlert2.png`,
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://sweetalert2.github.io/',
                        descripcion: 'Un reemplazo hermoso, receptivo, personalizable y accesible (WAI-ARIA) para los cuadros emergentes de JavaScript Cero dependencias.',
                        red: ''
                    },
                ]
            },
        ]
    },
    {
        id: 'editores-online',
        titulo: 'Editores online',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: 'assets/img/icons/codepen.png',
                        nombreRecurso: '',
                        height: '35',
                        rutaRecurso: 'https://codepen.io',
                        descripcion: 'Este editor online presenta 4 pantallas, 1 que es la presentación diseñada, las otras 3 son HTML, CSS Y JAVASCRIPT para el código que da forma al diseño.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/w3schools.png',
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://www.w3schools.com/default.asp',
                        descripcion: 'Plataforma de aprendizaje de programación recien actualizaron la plataforma con más lenguajes.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/liveweave.png',
                        nombreRecurso: '',
                        height: '35',
                        rutaRecurso: 'https://liveweave.com',
                        descripcion: 'Plataforma de desarrollo HTML, CSS y JavaScript para diseñadores y desarrolladores web.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/typescript.png',
                        nombreRecurso: '',
                        height: '30',
                        rutaRecurso: 'https://www.typescriptlang.org/play',
                        descripcion: 'Este es un sitio web que te da la oportunidad de escribir, compartir y aprender TypeScript.',
                        red: ''
                    },
                ]
            },
            {
                index: '2',
                links: [
                    {
                        img: 'assets/img/icons/layoutit.png',
                        nombreRecurso: '',
                        height: '30',
                        rutaRecurso: 'https://www.layoutit.com/build',
                        descripcion: 'Este sitio es un constructor de interfaces para CSS Grid y Bootstrap que quiere ser el la gran plataforma de salida para tus desarrollos frontales.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/jsbin.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://jsbin.com/',
                        descripcion: 'Servicio web que ofrece un espacio de experimentación y desarrollo para HTML, JavaScript y CSS.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/stackBlitzWhite.png',
                        nombreRecurso: '',
                        height: '50',
                        rutaRecurso: 'https://stackblitz.com/',
                        descripcion: 'El entorno de desarrollo más rápido y seguro del planeta. Para: Next JS, Graphql, Servidor Http NodeJs, Node Js, Angular, React, React TS, Vue, Svelte, RXJS, Ionic, Angular JS, Static HTML, JavaScript, Typescript.',
                        red: ''
                    },
                ]
            },
        ]
    },
    {
        id: 'plataformas-aprendizaje',
        titulo: 'Plataformas de aprendizaje',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: 'assets/img/icons/code-avengers.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://www.codeavengers.com',
                        descripcion: 'CODE AVENGERS, aprende a programar jugando.',
                        red: '',
                        clipBoard: ''
                    },
                    {
                        img: 'assets/img/icons/medium-white.png',
                        nombreRecurso: '',
                        height: '35',
                        rutaRecurso: 'https://medium.com',
                        descripcion: 'Medium es un lugar para escribir, leer y conectarse, plataforma de aprendizaje a través publicación de desarrolladores y autores de contenidos.',
                        red: '',
                        clipBoard: ''
                    },
                ]
            },
            {
                index: '2',
                links: [
                    {
                        img: 'assets/img/icons/cesarcancino.png',
                        nombreRecurso: '',
                        height: '80',
                        rutaRecurso: 'https://www.cesarcancino.com/home',
                        descripcion: 'Cesar Cansino. Talleres prácticos Javascript, PHP, Java, Python, Net, Android.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/udemy.png',
                        nombreRecurso: '',
                        height: '50',
                        rutaRecurso: 'https://www.udemy.com/',
                        descripcion: 'plataforma de aprendizaje en línea. Está dirigido a adultos profesionales.​ A diferencia de los programas académicos MOOC conducidos por tradicionales cursos de trabajo creados por las universidades, Udemy utiliza contenido de creadores en línea para vender y así conseguir ganancias.​.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/hackeRank.svg',
                        nombreRecurso: '',
                        height: '30',
                        rutaRecurso: 'https://www.hackerrank.com/',
                        descripcion: 'Compañía tecnológica que se enfoca en desafíos de programación competitivos tanto para consumidores como para empresas, donde los desarrolladores compiten al tratar de programar de acuerdo con las especificaciones proporcionadas',
                        red: ''
                    },
                ]
            },
        ]
    },
    {
        id: 'recursos',
        titulo: 'Recursos y documentación',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: 'assets/img/icons/w3c.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://www.w3c.es',
                        descripcion: 'El World Wide Web Consortium (W3C) es una comunidad internacional que desarrolla estándares que aseguran el crecimiento de la Web a largo plazo.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/w3c-docs.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://w3c.github.io/aria/',
                        descripcion: 'El World Wide Web Consortium (W3C) documentación al 2022.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/freepik.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://www.freepik.es',
                        descripcion: 'Recurso de imágenes, vectores gratis, fotos y PSD para descargar.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/manualsbrain.png',
                        nombreRecurso: '',
                        height: '40',
                        rutaRecurso: 'https://manualsbrain.com/es/',
                        descripcion: 'Aquí se puede encontrar miles de guías de usuarios diferentes a casi todos los electrodomésticos fabricados por los mas populares fabricantes del mundo. Desde la nevera en su cosina hasta la placa base del PC. Todos los archivos que usted puede encontrar en nuestro portal son totalmente gratuitos para descargar.',
                        red: '',
                        clipBoard: ''
                    },
                ]
            },
            {
                index: '2',
                links: [
                    {
                        img: 'assets/img/icons/richmond-front.png',
                        nombreRecurso: '',
                        height: '150',
                        rutaRecurso: 'https://www.tomrichmond.com/art/illustration/',
                        descripcion: 'Caricaturas artísticas de famosos, tipo cómicas. Del creador de la famosa revista MAD.',
                            red: ''
                    },
                    {
                        img: 'assets/img/icons/pixabay.png',
                        nombreRecurso: '',
                        height: '85',
                        rutaRecurso: 'https://pixabay.com',
                        descripcion: 'Puedes copiar, modificar, distribuir y usar las imágenes, incluso para fines profesionales o comerciales, sin solicitar permiso ni atribuir su autoría. Sin embargo, el contenido mostrado puede estar protegido por marcas registradas, publicidad o por el derecho a la intimidad.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/emmet.png',
                        nombreRecurso: '',
                        height: '40',
                        rutaRecurso: 'https://docs.emmet.io/cheat-sheet/',
                        descripcion: 'Simplificación para escribir extructuras de código.',
                        red: '',
                        clipBoard: ''
                    },
                ]
            },
            {
                index: '3',
                links: [
                    {
                        img: '',
                        nombreRecurso: 'Java™ Platform Standard Ed. 7',
                        height: '',
                        rutaRecurso: 'https://docs.oracle.com/javase/7/docs/api/',
                        descripcion: 'Documentación para la especificación API para Java ™ Platform, Standard Edition.',
                        red: '',
                        clipBoard: ''
                    },
                    {
                        img: '',
                        nombreRecurso: 'Artbreeder',
                        height: '',
                        rutaRecurso: 'https://www.artbreeder.com',
                        descripcion: 'Simplemente siga seleccionando la imagen más interesante para descubrir imágenes totalmente nuevas. A partir de cada imagen se crean infinitamente nuevos "hijos" aleatorios. Artbreeder convierte el simple acto de exploración en creatividad.',
                        red: '',
                        clipBoard: ''
                    },
                ]
            },
        ]
    },
    {
        id: 'programas',
        titulo: 'Programas - Descargas',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: 'assets/img/icons/firefox-developer.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://www.mozilla.org/es-ES/firefox/66.0a2/whatsnew/all/',
                        descripcion: 'Navegador especializado para desarrolladores.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/firefox-beta.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://www.mozilla.org/en-US/firefox/channel/desktop/#beta',
                        descripcion: 'Consigue las últimas versiones de Firefox.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/sublime-text.png',
                        nombreRecurso: '',
                        height: '30',
                        rutaRecurso: 'https://www.sublimetext.com',
                        descripcion: 'editor de texto avanzado que soporta multitud de lenguajes como ASP, C, C++, C#, CSS, D, Erlang, Groovy, Haskell, HTML, Java, Javascript, LaText, Lisp, Lua, Markdown, Matlab, Ocaml, Pascal, Perl, Perl, PHP, Python, R, Ruby, SQL, TCL, Textile y XML entre otros.',
                        red: '',
                        clipBoard: ''
                    },
                    {
                        img: 'assets/img/icons/package-control.png',
                        nombreRecurso: '',
                        height: '30',
                        rutaRecurso: 'https://packagecontrol.io',
                        descripcion: 'Complemento de Sublime Text para agregar extensiones. La versión 4 de sublime text lo incluye por defecto.',
                        red: '',
                        clipBoard: ''
                    },
                ]
            },
            {
                index: '2',
                links: [

                    {
                        img: 'assets/img/icons/visual_studio_code_text_white.png',
                        nombreRecurso: '',
                        height: '90',
                        rutaRecurso: 'https://code.visualstudio.com/download',
                        descripcion: 'Dedique más tiempo a programar y menos tiempo a cambiar de una herramienta a otra. Use las características y extensiones que se integran con Azure y GitHub para desarrollar, depurar e implementar todas sus soluciones desde un mismo lugar.',
                        red: '',
                        clipBoard: ''
                    },
                    {
                        img: '',
                        nombreRecurso: 'Marketplace',
                        height: '90',
                        rutaRecurso: 'https://marketplace.visualstudio.com/VSCode',
                        descripcion: 'Extensiones para la familia de productos de Visual Studio.',
                        red: '',
                        clipBoard: ''
                    },
                    {
                        img: 'assets/img/icons/insiders.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://code.visualstudio.com/insiders/',
                        descripcion: 'Versión beta. Incluye las últimas funciones y correcciones de errores, pero las nuevas funciones pueden o no ser estables.',
                        red: '',
                        clipBoard: ''
                    },
                ]
            },
            {
                index: '3',
                links: [

                    {
                        img: 'assets/img/icons/atom3.png',
                        nombreRecurso: '',
                        height: '90',
                        rutaRecurso: 'https://atom.io',
                        descripcion: 'Atom editor de texto muy completo con actualizaciones constantes.',
                        red: '',
                        clipBoard: ''
                    },
                    {
                        img: 'assets/img/icons/Eclipse-foundation.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://www.eclipse.org/downloads/',
                        descripcion: 'Plataforma de software compuesto por un conjunto de herramientas de programación de código abierto multiplataforma para desarrollar lo que el proyecto llama "Aplicaciones de Cliente Enriquecido", opuesto a las aplicaciones "Cliente-liviano" basadas en navegadores. Esta plataforma, típicamente ha sido usada para desarrollar entornos de desarrollo integrados (del inglés IDE), como el IDE de Java llamado Java Development Toolkit (JDT) y el compilador (ECJ) que se entrega como parte de Eclipse (y que son usados también para desarrollar el mismo Eclipse).',
                        red: '',
                        clipBoard: ''
                    },
                    {
                        img: 'assets/img/icons/apacheTomcat.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://tomcat.apache.org/',
                        descripcion: 'Software desarrollado con Java (con lo cual puede funcionar en cualquier sistema operativo, con su máquina virtual java correspondiente) que sirve como servidor web con soporte de servlets y JSPs.',
                        red: '',
                        clipBoard: ''
                    },
                ]
            },
            {
                index: '4',
                links: [

                    {
                        img: 'assets/img/icons/android-studio_text_white.png',
                        nombreRecurso: '',
                        height: '90',
                        rutaRecurso: 'https://developer.android.com/studio',
                        descripcion: 'proporciona las herramientas más rápidas para crear aplicaciones en todo tipo de dispositivo Android.',
                        red: '',
                        clipBoard: ''
                    },
                    {
                        img: 'https://plantillas_dev.gitlab.io/styles/assets/icon/descargasnsn-white.png',
                        nombreRecurso: '',
                        height: '90',
                        rutaRecurso: 'https://descargasnsn.to/',
                        descripcion: 'Documentales - Cursos - Revistas y Libros - Películas - Series - Software - Juegos',
                        red: '',
                        clipBoard: ''
                    },
                    {
                        img: 'assets/img/icons/GitHub-Logo.png',
                        nombreRecurso: '',
                        height: '90',
                        rutaRecurso: 'https://github.com/FaisalUmair/udemy-downloader-gui',
                        descripcion: 'UDELER | UDEMY COURSE DOWNLOADER (GUI), una aplicación de escritorio multiplataforma (Windows, Mac, Linux) para descargar cursos Udemy.',
                        red: '',
                        clipBoard: ''
                    },
                ]
            }
        ]
    },
    {
        id: 'linux',
        titulo: 'Linux',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: 'assets/img/icons/distrowatch.png',
                        nombreRecurso: '',
                        height: '25',
                        rutaRecurso: 'https://distrowatch.com/',
                        descripcion: 'Sitio web que proporciona noticias, clasificaciones de popularidad y otra información general sobre varios sistemas operativos de código abierto, como distribuciones GNU/Linux y otros sistemas libres (como BSD y OpenSolaris), así como noticias sobre software libre en general.',
                        red: ''
                    }
                ]
            }
        ]
    },
    {
        id: 'comercio',
        titulo: 'Comercio',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: 'assets/img/icons/mercado_libre.png',
                        nombreRecurso: '',
                        height: '40',
                        rutaRecurso: 'https://www.mercadolibre.com.co/',
                        descripcion: 'Empresa argentina dedicada al comercio electrónico. Cuenta con operaciones en Argentina, Bolivia, Brasil, Chile, Colombia, Costa Rica, Ecuador, El Salvador, Guatemala, Honduras, México, Nicaragua, Panamá, Paraguay, Perú, República Dominicana, Uruguay y Venezuela.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/aliexpress.png',
                        nombreRecurso: '',
                        height: '40',
                        rutaRecurso: 'https://best.aliexpress.com/?lan=en&gclid=Cj0KCQjwktKFBhCkARIsAJeDT0j7NplddkgvWDqwqDXghptKTSuCfruyPz7FUMplVbaeEvjgRGGGOuoaAq8dEALw_wcB',
                        descripcion: 'AliExpress es una plataforma de ventas on-line fundada en el año 2010 por pequeñas empresas de China y de otros lugares que ofrece productos para compradores internacionales. Es propiedad de Alibaba Group.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/olx.png',
                        nombreRecurso: '',
                        height: '40',
                        rutaRecurso: 'https://www.olx.com.co/',
                        descripcion: 'Plataforma líder mundial de avisos clasificados que sirve a las comunidades locales en mercados de alto potencial de crecimiento con vibrantes mercados en línea: OLX conecta la comunidad local para vender, comprar e intercambiar sus bienes usados y servicios haciéndolo rápido y fácil para que cualquier persona publique un anuncio desde su celular o en el sitio web.',
                        red: ''
                    },
                ]
            },
            {
                index: '2',
                links: [
                    {
                        img: 'assets/img/icons/amazon.png',
                        nombreRecurso: '',
                        height: '40',
                        rutaRecurso: 'https://www.amazon.com/',
                        descripcion: 'Compañía estadounidense de comercio electrónico y servicios de computación en la nube a todos los niveles.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/alkosto.png',
                        nombreRecurso: '',
                        height: '50',
                        rutaRecurso: 'https://www.alkosto.com/',
                        descripcion: 'Cadena de almacenes colombiana, comercializadora de electrodomésticos, mercado, llantas, tecnología, motos y productos del hogar, de propiedad del Grupo Corbeta.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/falabella.png',
                        nombreRecurso: '',
                        height: '40',
                        rutaRecurso: 'https://www.falabella.com.co/falabella-co',
                        descripcion: 'Tienda por departamentos chilena fundada en 1889 por una familia italiana radicada en Chile, perteneciente al grupo del mismo nombre.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/jbl.png',
                        nombreRecurso: '',
                        height: '120',
                        rutaRecurso: 'https://co.jbl.com/',
                        descripcion: 'JBL es una compañía de audio y electrónica Estadounidense bajo el mando de Harman International Industries que se fundó en 1946 por James Bullough Lansing. Sus principales productos son altavoces y cualquier tipo de electrónicos asociados..',
                        red: ''
                    },
                ]
            },
            {
                index: '3',
                links: [
                    {
                        img: 'assets/img/icons/pg.png',
                        nombreRecurso: '',
                        height: '80',
                        rutaRecurso: 'https://tiendapg.com/',
                        descripcion: '2022 Tienda P&G.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/tms.png',
                        nombreRecurso: '',
                        height: '80',
                        rutaRecurso: 'https://tmsmusic.co/',
                        descripcion: 'Tienda especializada en comercio de instrumentos y partes de música.',
                        red: ''
                    },
                    {
                        img: 'https://plantillas_dev.gitlab.io/styles/assets/icon/lava-music.png',
                        nombreRecurso: '',
                        height: '50',
                        rutaRecurso: 'https://www.lavamusic.com/es',
                        descripcion: 'Guitarra del futuro.',
                        red: ''
                    },
                    {
                        img: '',
                        nombreRecurso: 'P A C I F I K A',
                        height: '',
                        rutaRecurso: 'https://www.pacifika.com.co/',
                        descripcion: 'Ropa, catalogos y compras.',
                        red: ''
                    },
                ]
            },
        ]
    },
    {
        id: 'libros',
        titulo: 'Libros',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: '',
                        nombreRecurso: 'Library genesis',
                        height: '',
                        rutaRecurso: 'https://libgen.is/',
                        descripcion: 'Esta página suele ser temporal, pero es una excelente alternativa para conseguir recursos y libros.',
                        red: ''
                    },
                    {
                        img: '',
                        nombreRecurso: 'Letmeread',
                        height: '',
                        rutaRecurso: 'https://www.letmeread.net/',
                        descripcion: 'Libros por categorías.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/elejandria.png',
                        nombreRecurso: '',
                        height: '50',
                        rutaRecurso: 'https://www.elejandria.com/',
                        descripcion: 'Descargar libros gratis de dominio público.',
                        red: ''
                    },
                ]
            },

        ]
    },
    {
        id: 'almacenamiento',
        titulo: 'Almacenamiento',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: 'assets/img/icons/mega.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://mega.nz/',
                        descripcion: 'Nube con 50gb gratuitos y 6gb de trasferencias al mes.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/onedrive.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://onedrive.live.com/',
                        descripcion: 'Nube de Microsoft con 5gb gratis.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/dropbox.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://www.dropbox.com/',
                        descripcion: 'Nube de google con 1gb gratis.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/icloud.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://www.icloud.com',
                        descripcion: 'Nube de Apple con 5gb gratis.',
                        red: ''
                    },
                ]
            },

        ]
    },
    {
        id: 'traductores',
        titulo: 'Traductores y herramientas',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: 'assets/img/icons/deepl.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://www.deepl.com/es/translator',
                        descripcion: 'Traductor con excelente sintaxis.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/curso_ingles.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://www.curso-ingles.com/',
                        descripcion: '',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/linguee.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://www.linguee.es/espanol-ingles/',
                        descripcion: 'Diccionario de inglés.',
                        red: ''
                    },
                    {
                        img: '',
                        nombreRecurso: 'To phonetics',
                        height: '',
                        rutaRecurso: 'https://tophonetics.com/',
                        descripcion: 'Pronuncación Británica y Americana del inglés.',
                        red: ''
                    },
                ]
            },

        ]
    },
    {
        id: 'sena',
        titulo: 'SENA',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: 'assets/img/icons/sena-sofia.png',
                        nombreRecurso: '',
                        height: '35',
                        rutaRecurso: 'http://oferta.senasofiaplus.edu.co/sofia-oferta/',
                        descripcion: 'Principal plataforma del SENA.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/territorio-sena2.png',
                        nombreRecurso: '',
                        height: '40',
                        rutaRecurso: 'https://sena.territorio.la/init.php',
                        descripcion: 'Entorno de administración de recursos educativos.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/blog-sena.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'http://centrodeserviciosygestionempresarial.blogspot.com/',
                        descripcion: 'BLOG de contenidos actuales, noticias y muchas más cosas.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/cisco.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://id.cisco.com/',
                        descripcion: 'Cursos de CISCO en asociación con el SENA.',
                        red: ''
                    },
                ]
            },
            {
                index: '2',
                links: [
                    {
                        img: 'assets/img/icons/sena.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'http://sis.senavirtual.edu.co/cuentas_misena/restablecer/consulta.php',
                        descripcion: 'Para restablecer contraseña.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/agencia-publica-empleo.png',
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://agenciapublicadeempleo.sena.edu.co/Paginas/inicio.aspx',
                        descripcion: 'Agencia pública de empleo del SENA.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/sigti-sena.png',
                        nombreRecurso: '',
                        height: '150',
                        rutaRecurso: 'http://181.57.135.132/sigti/',
                        descripcion: 'Gestión de tiempos.',
                        red: ''
                    }
                ]
            },

        ]
    },
    {
        id: 'pagos',
        titulo: 'Pagos',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: 'assets/img/icons/epm.svg',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://www.epm.com.co/site/home/paga-tu-factura',
                        descripcion: 'Paga la factura de energía de Medellín',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/claroletras.png',
                        nombreRecurso: '',
                        height: '90',
                        rutaRecurso: 'https://portalpagos.claro.com.co/',
                        descripcion: 'Portal de PAGOS Y RECARGAS',
                        red: ''
                    }
                ]
            }
        ]
    },
    {
        id: 'legales',
        titulo: 'Legales',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: 'assets/img/icons/simit.svg',
                        nombreRecurso: 'Comparendos',
                        height: '130',
                        rutaRecurso: 'https://www.fcm.org.co/simit/#/home-public',
                        descripcion: 'Consulta de ESTADO de Simit por documento de identidad. Consulta aquí comparendos, multas y acuerdos de pago',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/simit.svg',
                        nombreRecurso: 'Fotomultas',
                        height: '130',
                        rutaRecurso: 'https://medellin.gov.co/portal-movilidad/#/public',
                        descripcion: 'Consulta de Movilidad Simit por documento de identidad. Consulta aquí fotodetecciones, multas y acuerdos de pago',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/runt.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://www.runt.com.co/consultaCiudadana/#/consultaVehiculo',
                        descripcion: 'Información que reposa en el RUNT sobre su vehículo o motocicleta.',
                        red: ''
                    }
                ]
            }
        ]
    },
    {
        id: 'videos-peliculas',
        titulo: 'Video y audio',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: 'assets/img/icons/animeflv.png',
                        nombreRecurso: '',
                        height: '45',
                        rutaRecurso: 'https://www3.animeflv.net/',
                        descripcion: 'Anime Online - Ningún vídeo se encuentra alojado en nuestros servidores.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/movie-circle.png',
                        nombreRecurso: '',
                        height: '80',
                        rutaRecurso: 'https://devxploit.xyz/descargas.html#',
                        descripcion: 'Red de películas y series.',
                        red: ''
                    },
                    {
                        img: 'assets/img/icons/telelatino.png',
                        nombreRecurso: '',
                        height: '80',
                        rutaRecurso: 'https://telelatinoapk.com/',
                        descripcion: 'Con esta aplicación vas a poder ver canales de televisión, películas y series completamente gratis, cuenta con canales latinos y españoles.',
                        red: ''
                    },
                ]
            },
            {
                index: '2',
                links: [
                    {
                        img: '',
                        nombreRecurso: 'Vocal Remover',
                        height: '45',
                        rutaRecurso: 'https://vocalremover.org/',
                        descripcion: 'Separe la voz de la música de una canción gratis con potentes algoritmos de IA.',
                        red: ''
                    },
                    {
                        img: '',
                        nombreRecurso: 'Melody',
                        height: '80',
                        rutaRecurso: 'https://melody.ml/',
                        descripcion: 'Separe las pistas de música usando el aprendizaje automático.',
                        red: ''
                    },
                ]
            },
        ]
    },
    {
        id: 'juegos',
        titulo: 'Juegos',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: 'assets/img/icons/game-torrens.png',
                        nombreRecurso: '',
                        height: '30',
                        rutaRecurso: 'https://www.gamestorrents.fm/juegos-pc/',
                        descripcion: 'Descarga de juegos gratis.',
                        red: '',
                        mediaQuery: 'img-fluid'
                    }
                ]
            }
        ]
    },
    {
        id: 'utilidades',
        titulo: 'Utilidades',
        contenidoIcons: false,
        bloque: [
            {
                index: '1',
                links: [
                    {
                        img: 'assets/img/icons/siata.png',
                        nombreRecurso: '',
                        height: '90',
                        rutaRecurso: 'https://siata.gov.co/siata_nuevo/',
                        descripcion: 'Estado del clima en Antioquia - Colombia.',
                        red: ''
                    }
                ]
            }
        ]
    },

]