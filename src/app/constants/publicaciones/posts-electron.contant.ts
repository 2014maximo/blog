import { DatosPost, EstilosPost } from '../../shared/models/categorias.model';

export const ESTILO_ELECTRON: EstilosPost = {
    color: 'c-Electron',
    colorFondo: 'bg-Electron'
}

export const ELECTRON: DatosPost[] = [
    {
        id: '4219350459',
        nombre: 'Electrón',
        descripcion: [],
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
        estado: 'inactivo'
    }
]