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

]