import { DatosPost, EstilosPost } from '../../models/categorias.model';

export const ESTILO_GIT: EstilosPost = {
    color: 'c-Git',
    colorFondo: 'bg-Git'
}

export const GIT: DatosPost[] = [
    {
        id: '4635803514',
        nombre: 'GIT',
        descripcion: '',
        descripcionCorta: '',
        ruta: 'git',
        componente: 'GitComponent',
        categoria: 'git',
        mostrarEnPostHome: false,
        estilos: ESTILO_GIT,
        fechaCreacion: '2021-05-02',
        fechaActualizacion: '2021-05-02',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'inactivo'
        
    }
]