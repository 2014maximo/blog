import { DatosPost, EstilosPost } from '../models/categorias.model';

export const ESTILO_ANDROID: EstilosPost = {
    color: 'c-Android',
    colorFondo: 'bg-Android'
}


export const ANDROID: DatosPost[] = [
    {
        id: '7084156673',
        nombre: 'Android',
        descripcion: '',
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
        activo: false,
    },
    {
        id: '7ea51cec-4d81-44f7-a4b4-7debe4c5a42e',
        nombre: 'Instalación Android Studio - Alternativas que no se tienen en cuenta',
        descripcion: 'En Windows y en linux tenemos el privilegio de contar con este IDE para desarrollo nativo de ANDROID.',
        descripcionCorta: '',
        ruta: 'andr-android-studio',
        componente: 'AndrAndroidStudioComponent',
        categoria: 'android',
        imgCuadro: '',
        imgHorizontal: 'https://plantillas_dev.gitlab.io/assets/img/posts/android/instalar-android-studio.png',
        imgVertical: '',
        mostrarEnPostHome: true,
        estilos: ESTILO_ANDROID,
        fechaCreacion: '2023-02-12',
        fechaActualizacion: '2021-06-02',
        imgSlider: {
            alt: 'Instalación Android Studio',
            height: '600',
            id: '1',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/android/instalacion-android-studio.jpg',
            width: 'auto',
            post: 'andr-android-studio'
        },
        posicion: 'rot-1',
        activo: true
    }
]