import { DatosPost, EstilosPost } from '../../shared/models/categorias.model';

export const ESTILO_GIT: EstilosPost = {
    color: 'c-Git',
    colorFondo: 'bg-Git'
}

export const GIT: DatosPost[] = [
    {
        id: 'b72262ee-1257-4b4d-a980-d56190506dfe',
        nombre: 'GIT',
        descripcion: [],
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
        estado: 'activo'
    },
    {
        id: '4871cb38-9831-4099-bd70-c0b540bf47a1',
        nombre: 'ERRORES GIT',
        descripcion: ['Errores comunes que nos ponen a patinar un rato buscado la solución.'],
        descripcionCorta: 'Errores comunes que nos ponen a patinar un rato buscado la solución.',
        ruta: 'git-errores',
        componente: 'GitErroresComponent',
        categoria: 'git',
        mostrarEnPostHome: false,
        estilos: ESTILO_GIT,
        fechaCreacion: '2023-25-07',
        fechaActualizacion: '2023-23-08',
        imgHorizontal:'',
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'activo'
    }
]