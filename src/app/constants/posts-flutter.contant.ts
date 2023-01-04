import { DatosCategoria, DatosPost } from '../models/categorias.model';


const DATOS_CATEGORIA: DatosCategoria = {
    nombre: 'FLUTTER',
    color: 'c-Flutter',
    fondo:'',
    path: 'flutter',
    rutaIcono:'assets/img/icons/flutter_text_white.png'
}

export const FLUTTER: DatosPost[] = [
    {
        id: '9249441409',
        titulo: 'Flutter',
        descripcion: '',
        descripcionCorta: '',
        path: 'flutter',
        componente: 'FlutterComponent',
        mostrarEnPostHome: false,
        estilos: {
            color: ''
        },
        fechaCreacion: '02-08-2021',
        fechaActualizacion: '',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        categoria: DATOS_CATEGORIA
    },
    {
        id: '6805705269',
        titulo: 'Cómo instalar flutter más recomendaciones',
        descripcion: '',
        descripcionCorta: '',
        path: 'flutter-instalacion',
        componente: 'FlutterInstalacionComponent',
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '02-08-2021',
        fechaActualizacion: '',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        categoria: DATOS_CATEGORIA
    },
]