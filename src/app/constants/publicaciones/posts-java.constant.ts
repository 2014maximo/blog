import { DatosPost, EstilosPost } from '../../models/categorias.model';

export const ESTILO_JAVA: EstilosPost = {
    color: 'c-Javascript',
    colorFondo: 'bg-Javascript'
}


export const JAVA: DatosPost[] = [
    {
        id: 'd0210005-c92c-4f2a-8b57-cb22429c3aac',
        nombre: 'JAVA',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'java',
        componente: 'JavasComponent',
        categoria: 'java',
        mostrarEnPostHome: false,
        estilos: ESTILO_JAVA,
        fechaCreacion: '',
        fechaActualizacion: '',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'inactivo'
    }
]