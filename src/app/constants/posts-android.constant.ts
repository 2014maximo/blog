import { DatosPost, DatosCategoria } from '../models/categorias.model';

const DATOS_CATEGORIA: DatosCategoria = {
    nombre: 'ANDROID',
    color: 'c-Android',
    fondo:'',
    path: 'android',
    rutaIcono:'assets/img/categorias/android.png'
}

export const ANDROID: DatosPost[] = [
    {
        id: '7084156673',
        titulo: 'Android',
        descripcion: '',
        descripcionCorta: '',
        path: 'android',
        componente: 'AndroidComponent',
        categoria: DATOS_CATEGORIA,
        imgCuadro:'',
        imgHorizontal:'',
        imgVertical: '',
        mostrarEnPostHome: false,
        estilos: {
            color: ''
        },
        fechaCreacion: '2021-04-02',
        fechaActualizacion: '2021-04-02'
    },
    {
        id: '7ea51cec-4d81-44f7-a4b4-7debe4c5a42e',
        titulo: 'Instalación Android Studio - Alternativas que no se tienen en cuenta',
        descripcion: 'En Windows y en linux tenemos el privilegio de contar con este IDE para desarrollo nativo de ANDROID.',
        descripcionCorta: '',
        path: 'andr-android-studio',
        componente: 'AndrAndroidStudioComponent',
        categoria: DATOS_CATEGORIA,
        imgCuadro: '',
        imgHorizontal: 'https://plantillas_dev.gitlab.io/assets/img/posts/android/instalar-android-studio.png',
        imgVertical: '',
        mostrarEnPostHome: true,
        estilos: {
            color: ''
        },
        fechaCreacion: '2023-02-12',
        fechaActualizacion: '2021-06-02',
        imgSlider: {
            alt: 'Instalación Android Studio',
            height: '600',
            id: '1',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/android/instalacion-android-studio.jpg',
            width: 'auto',
            post: 'andr-android-studio'
        }
    }
]