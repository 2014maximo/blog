import { DatosPost, EstilosPost } from '../models/categorias.model';

export const ESTILO_LINUX: EstilosPost = {
    color: 'c-Linux',
    colorFondo: 'bg-Linux'
}


export const LINUX: DatosPost[] = [
    {
        id: '3574124706',
        nombre: 'LINUX',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'linux',
        componente: 'LinuxComponent',
        categoria: 'linux',
        mostrarEnPostHome: false,
        estilos: ESTILO_LINUX,
        fechaCreacion: '2020-04-04',
        fechaActualizacion: '2020-04-04',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'inactivo'
    }
]