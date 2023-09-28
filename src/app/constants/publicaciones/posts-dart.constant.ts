import { DatosPost, EstilosPost, RefImg } from '../../shared/models/categorias.model';

export const ESTILO_DART: EstilosPost = {
    color: 'c-Dart',
    colorFondo: 'bg-Dart'
}

export const DART: DatosPost[] = [
    {
        id: '2288525419',
        nombre: 'Dart',
        descripcion: ['Dart con sus altibajos, entra de nuevo al ruedo con Flutter, sin embargo es importante saber que ventajas nos ofrece sobre otros lenguajes para poder elegirlo.'],
        descripcionCorta: 'Dart con sus altibajos, entra de nuevo al ruedo con Flutter, sin embargo es importante saber que ventajas nos ofrece sobre otros lenguajes para poder elegirlo.',
        ruta: '',
        componente: '',
        categoria: 'dart',
        mostrarEnPostHome: false,
        estilos: ESTILO_DART,
        fechaCreacion: '2021-02-02',
        fechaActualizacion: '2022-10-02',
        imgHorizontal: new RefImg(),
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-2',
        estado: 'inactivo'
    },
    {
        id: 'abca9c03-f685-47df-aa15-8c52051955c2',
        nombre: 'Elementos dart',
        descripcion: [
            'Famoso por Flutter, la estructura de Dart permite crear aplicaciones de muchos tipos enfocados a desarrollos web con mucha potencia.'
        ],
        descripcionCorta: 'Descripción de los elementos que hacen parte de Dart. Sugerencias adicionales para otra clase de aplicaciones.',
        ruta: 'dart-elementos',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_DART,
        fechaCreacion: '2023-09-11',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/dart/elementos-dart2.jpg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'dart',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: {
            alt: 'Elementos dart',
            height: '600',
            id: '2',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/dart/elementos-dartSlider.jpg',
            width: 'auto',
            post: 'dart-elementos'
        }
    }
]