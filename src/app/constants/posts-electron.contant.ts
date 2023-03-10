import { DatosPost, EstilosPost } from '../models/categorias.model';

export const ESTILO_ELECTRON: EstilosPost = {
    color: 'c-Electron',
    colorFondo: 'bg-Electron'
}

export const ELECTRON: DatosPost[] = [
    {
        id: '4219350459',
        nombre: 'Electrón',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'electron',
        componente: 'ElectronComponent',
        mostrarEnPostHome: false,
        estilos: ESTILO_ELECTRON,
        fechaCreacion: '2020-08-02',
        fechaActualizacion: '2020-08-02',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        categoria: 'electron',
        posicion: 'rot-1',
        activo: false
    },
    {
        id: '8761793782',
        nombre: 'Cómo instalar el framework electron con algunas recomendaciones',
        descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        descripcionCorta: '',
        ruta: 'etron-instalacion',
        componente: 'ElectronComponent',
        mostrarEnPostHome: true,
        estilos: ESTILO_ELECTRON,
        fechaCreacion: '2023-07-07',
        fechaActualizacion: '2023-07-07',
        imgHorizontal:'https://plantillas_dev.gitlab.io/assets/img/posts/electron/instalacion-electron-web.jpg',
        imgVertical:'',
        imgCuadro:'',
        categoria:'electron',
        posicion: 'rot-2',
        activo: true
    },
]