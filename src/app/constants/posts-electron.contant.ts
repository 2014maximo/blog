import { DatosCategoria, DatosPost } from '../models/categorias.model';


const DATOS_CATEGORIA: DatosCategoria = {
    nombre: 'ELECTRON',
    color: 'c-Electron',
    fondo:'',
    ruta: 'electron',
    rutaIcono:'https://plantillas_dev.gitlab.io/assets/img/logos/logo-electron.png'
}

export const ELECTRON: DatosPost[] = [
    {
        id: '4219350459',
        titulo: 'Electrón',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'electron',
        componente: 'ElectronComponent',
        mostrarEnPostHome: false,
        estilos: {
            color: ''
        },
        fechaCreacion: '2020-08-02',
        fechaActualizacion: '2020-08-02',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        categoria: DATOS_CATEGORIA
    },
    {
        id: '8761793782',
        titulo: 'Cómo instalar el framework electron con algunas recomendaciones',
        descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        descripcionCorta: '',
        ruta: 'etron-instalacion',
        componente: 'ElectronComponent',
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '2023-07-07',
        fechaActualizacion: '2023-07-07',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/electron/instalacion-electron-web.jpg',
        imgVertical:'',
        imgCuadro:'',
        categoria: DATOS_CATEGORIA
    },
]