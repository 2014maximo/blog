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
        id: '8627267684',
        titulo: 'Instalación Android Studio - Alternativas que no se tienen en cuenta',
        descripcion: 'Al buscar instalar Android Studio, vamos directamente a la página principal de la fuente, suelen perderse de vista características que no quieren mostrarte de entrada, y, fuera de eso, tus intereses pueden ser diferentes de los que buscan los creadores originales, miremos en detalle de que se trata.',
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
            alt: 'Instalemos Android Studio',
            height: '600',
            id: '1',
            ruta: 'https://plantillas_dev.gitlab.io/assets/img/posts/android/instalacion-android-studio.jpg',
            width: 'auto',
            post: 'andr-android-studio'
        }
    }
]