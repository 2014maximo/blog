import { DatosPost, EstilosPost } from '../../models/categorias.model';

export const ESTILO_ANDROID: EstilosPost = {
    color: 'c-Android',
    colorFondo: 'bg-Android'
}


export const ANDROID: DatosPost[] = [
    {
        id: '7084156673',
        nombre: 'Android',
        descripcion: [],
        descripcionCorta: '',
        ruta: 'android',
        componente: 'AndroidComponent',
        categoria: 'android',
        imgCuadro:'',
        posicion: 'rot-2',
        imgHorizontal:'',
        imgVertical: '',
        mostrarEnPostHome: false,
        estilos: ESTILO_ANDROID,
        fechaCreacion: '2021-04-02',
        fechaActualizacion: '2021-04-02',
        estado: 'inactivo',
    }
]