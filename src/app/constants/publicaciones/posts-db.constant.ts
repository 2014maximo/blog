import { DatosPost, EstilosPost } from '../../shared/models/categorias.model';

export const ESTILO_DB: EstilosPost = {
    color: 'c-Db',
    colorFondo: 'bg-Db'
}

export const DB: DatosPost[] = [
    {
        id: '6569240889',
        nombre: 'DB',
        descripcion: [],
        descripcionCorta: '',
        ruta: 'db',
        componente: 'DbComponent',
        categoria: 'db',
        mostrarEnPostHome: false,
        estilos: ESTILO_DB,
        fechaCreacion: '2021-01-05',
        fechaActualizacion: '2021-01-05',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-2',
        estado: 'inactivo'
    }
]