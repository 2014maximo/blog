import { DatosPost, EstilosPost, RefImg } from '@shared/models/categorias.model';

export const ESTILO_HTML: EstilosPost = {
    color: 'c-Html',
    colorFondo: 'bg-Html'
}

export const HTML: DatosPost[] = [
    {
        id: '8825362007',
        nombre: 'HTML.html.nombre',
        referenciaBusqueda:'HTML.html.referenciaBusqueda',
        descripcion: [
            'HTML.html.descripcion.tx1',
            'HTML.html.descripcion.tx2',
            'HTML.html.descripcion.tx3',
            'HTML.html.descripcion.tx4',
            'HTML.html.descripcion.tx5',
            'HTML.html.descripcion.tx6',
            'HTML.html.descripcion.tx7',
            'HTML.html.descripcion.tx8',
            'HTML.html.descripcion.tx9',
            'HTML.html.descripcion.tx10',
            'HTML.html.descripcion.tx11'
        ],
        descripcionCorta: 'HTML.html.descripcionCorta',
        ruta: 'html',
        componente: 'HtmlComponent',
        categoria: 'html',
        mostrarEnPostHome: false,
        estilos: ESTILO_HTML,
        fechaCreacion: '2021-09-09',
        fechaActualizacion: '2021-09-09',
        imgHorizontal: new RefImg(),
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'inactivo'
    },
    {
        id: '2b9d0c67-2262-4f96-8179-483d21f71967',
        nombre: 'HTML.html-etiquetas.nombre',
        referenciaBusqueda:'HTML.html-etiquetas.referenciaBusqueda',
        descripcion: [
            'HTML.html-etiquetas.descripcion.tx1'
        ],
        descripcionCorta: 'HTML.html-etiquetas.descripcionCorta',
        ruta: 'html-etiquetas',
        componente: '',
        mostrarEnPostHome: false,
        estilos: ESTILO_HTML,
        fechaCreacion: '2023-09-14',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'html',
        posicion: 'rot-2',
        estado: 'inactivo',
        imgSlider: undefined
    },
    {
        id: '4ca90899-3cfc-455d-a4e3-9b529d80e06f',
        nombre: 'Elementos HTML',
        referenciaBusqueda:'elementos, html, etiquetas',
        descripcion: [
            'Tan importante como las columnas de un edificio, hace parte primordial en la elaboración de aplicaciones. Existen propiedades, incluso etiquetas que suelen estar disponibles y se pasan por alto. Aquí estan lo más detallada posible cada uno de los elementos que hacen parte de los elementos HTML.'
        ],
        descripcionCorta: 'Una chequeo detallado a las etiquetas html y propiedades que no se suelen utilizar',
        ruta: 'html-elementos',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_HTML,
        fechaCreacion: '2023-09-14',
        fechaActualizacion: '2024-06-10',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/html/etiquetas-html.jpg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'html',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: undefined
    }
]