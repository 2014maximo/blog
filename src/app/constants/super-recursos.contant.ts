import { BloqueContenidoModel } from '../models/bloque-contenidos.model';


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
                        rutaRecurso: 'https://gitlab.com/',
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
                        img: '/assets/img/icons/google-favicon.png',
                        nombreRecurso: '',
                        height: '55',
                        rutaRecurso: 'https://get.google.com/albumarchive/',
                        descripcion: 'Archivo de albumnes de la cuenta.',
                        red: ''
                    },
                    {
                        img: '/assets/img/icons/google-adsense.png',
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
                        img: '/assets/img/icons/google-pagespeed-insights.png',
                        nombreRecurso: '',
                        height: '55',
                        rutaRecurso: 'https://developers.google.com/speed/pagespeed/insights/?hl=es',
                        descripcion: 'Mejora la velocidad de tus páginas web en todos los dispositivos.',
                        red: ''
                    },
                    {
                        img: '/assets/img/icons/googlesearchconsole.png',
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
                        img: '/assets/img/icons/solarwinds-pingdom.png',
                        nombreRecurso: '',
                        height: '55',
                        rutaRecurso: 'https://tools.pingdom.com',
                        descripcion: 'Prueba de velocidad de páginas.',
                        red: ''
                    },
                    {
                        img: '/assets/img/icons/blogger-templates.png',
                        nombreRecurso: '',
                        height: '35',
                        rutaRecurso: 'https://btemplates.com',
                        descripcion: 'Plantillas gratuitas y profesionales para tu blog.',
                        red: ''
                    },
                    {
                        img: '/assets/img/icons/web-dev.png',
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
                        img: '/assets/img/icons/lawebera.png',
                        nombreRecurso: '',
                        height: '35',
                        rutaRecurso: 'https://www.lawebera.es',
                        descripcion: 'Explora nuestras secciones más populares para aprender todo lo necesario para hacer tus páginas webs desde cero. Con el control y la tranquilidad que te da tener los conocimientos para elegir lo que es mejor para tu site.',
                        red: ''
                    },
                    {
                        img: '/assets/img/icons/waybackmachine.png',
                        nombreRecurso: '',
                        height: '55',
                        rutaRecurso: 'https://web.archive.org',
                        descripcion: 'A través de este sitio puedes ver otras webs en el pasado, como eran en diferentes puntos del tiempo.',
                        red: ''
                    },
                    {
                        img: '/assets/img/icons/dnswatch.png',
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
                        img: '/assets/img/icons/caniuse.png',
                        nombreRecurso: '',
                        height: '40',
                        rutaRecurso: 'https://www.caniuse.com',
                        descripcion: 'Herramienta para comprobar compatibilidades web.',
                        red: ''
                    },
                    {
                        img: '/assets/img/icons/mxtoolbox.png',
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
                        height: '40',
                        rutaRecurso: 'https://www.responsinator.com',
                        descripcion: 'Esta página muestra como queda la versión responsive de la url que le ingresemos.',
                        red: ''
                    },
                    {
                        img: '/assets/img/icons/unminify.png',
                        nombreRecurso: '',
                        height: '60',
                        rutaRecurso: 'https://unminify.com',
                        descripcion: 'Ingresa tu código JavaScript, CSS, HTML, XML y JSON minificado y desminifícalo.',
                        red: ''
                    },

                ]
            },

        ]
    },

]