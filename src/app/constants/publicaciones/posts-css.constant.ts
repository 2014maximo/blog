import { DatosPost, EstilosPost, RefImg } from '../../shared/models/categorias.model';

export const ESTILO_CSS: EstilosPost = {
    color: 'c-Css',
    colorFondo: 'bg-Css'
}

export const CSS: DatosPost[] = [
    {
        id: '2234145591',
        nombre: 'CSS',
        referenciaBusqueda:'',
        descripcion: ['Cuando empezamos a desarrollar en web solo con HTML, sentimos nos hace falta poder mostrar cada elemento con otro color o con un mejor estilo'],
        descripcionCorta: '',
        ruta: 'css',
        componente: 'CssComponent',
        categoria: 'css',
        mostrarEnPostHome: false,
        estilos: ESTILO_CSS,
        fechaCreacion: '2021-01-01',
        fechaActualizacion: '2021-01-01',
        imgHorizontal:new RefImg(),
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-2',
        estado: 'inactivo'
    },
    {
        id: 'ffee0fb8-9e0d-49f2-80ac-afdcf115f92f',
        nombre: 'Elementos CSS',
        referenciaBusqueda:'',
        descripcion: [
            'Siendo un principio común, algunos de los que iniciamos en la programación arrancamos en la Web y es indudable que para algunos fue enredado entender como aplicar una clase o cada opción que el DOM pone a disposición con los estilos CSS.'
        ],
        descripcionCorta: 'Explicación detallada para los estilos de las clases CSS. Particularmente fue la manera como siempre espere encontrarme una explicación en las búsquedas de google.',
        ruta: 'css-atributos',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_CSS,
        fechaCreacion: '2023-09-14',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/css/elementos.jpg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'css',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: undefined
    }
]