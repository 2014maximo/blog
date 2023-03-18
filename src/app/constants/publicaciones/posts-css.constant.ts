import { DatosPost, EstilosPost } from '../../models/categorias.model';

export const ESTILO_CSS: EstilosPost = {
    color: 'c-Css',
    colorFondo: 'bg-Css'
}

export const CSS: DatosPost[] = [
    {
        id: '2234145591',
        nombre: 'CSS',
        descripcion: 'Cuando empezamos a desarrollar en web solo con HTML, sentimos nos hace falta poder mostrar cada elemento con otro color o con un mejor estilo',
        descripcionCorta: '',
        ruta: 'css',
        componente: 'CssComponent',
        categoria: 'css',
        mostrarEnPostHome: false,
        estilos: ESTILO_CSS,
        fechaCreacion: '2021-01-01',
        fechaActualizacion: '2021-01-01',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-2',
        estado: 'inactivo'
    }
]