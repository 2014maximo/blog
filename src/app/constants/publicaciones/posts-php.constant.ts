import { DatosPost, EstilosPost, RefImg } from '@shared/models/categorias.model';

export const ESTILO_PHP: EstilosPost = {
    color: 'c-Php',
    colorFondo: 'bg-Php'
}


export const PHP: DatosPost[] = [
    {
        id: 'b7cfec07-e492-400f-9238-f6cf3daba5e9',
        nombre: 'PHP.php.nombre',
        referenciaBusqueda:'PHP.php.referenciaBusqueda',
        descripcion: ['PHP.php.descripcion.tx1'],
        descripcionCorta: 'PHP.php.descripcionCorta',
        ruta: 'php',
        componente: 'PhpComponent',
        categoria: 'php',
        mostrarEnPostHome: false,
        estilos: ESTILO_PHP,
        fechaCreacion: '2020-09-15',
        fechaActualizacion: '',
        imgHorizontal: new RefImg(),
        imgVertical:'',
        imgCuadro:'',
        posicion: 'rot-1',
        estado: 'inactivo'
    },
    {
        id: '0bac147d-348c-48c4-976a-b1c83e4a0237',
        nombre: 'PHP.php-elementos.nombre',
        referenciaBusqueda:'PHP.php-elementos.referenciaBusqueda',
        descripcion: [
            'PHP.php-elementos.descripcion.tx1'
        ],
        descripcionCorta: 'PHP.php-elementos.descripcionCorta',
        ruta: 'php-elementos',
        componente: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_PHP,
        fechaCreacion: '2023-09-15',
        fechaActualizacion: '',
        imgHorizontal: new RefImg('https://plantillas_dev.gitlab.io/assets/img/posts/angular/instalacion-angular-horizontal.jpg'),
        imgVertical:'',
        imgCuadro:'',
        categoria: 'php',
        posicion: 'rot-2',
        estado: 'activo',
        imgSlider: undefined
    }
]