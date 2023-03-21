import { Component, OnInit } from '@angular/core';
import { copiarAlPortapapeles } from 'src/app/shared/constants/funciones/portapapeles';
import { CategoriaModel, AccordeonModel, PostModel } from '../../../../models/post.model';
import { postActual } from '../../../../shared/constants/funciones/funciones-globales';
import { DatosPost } from '../../../../models/categorias.model';

@Component({
  selector: 'app-ng-instalacion',
  templateUrl: './ng-instalacion.component.html',
  styles: [
  ]
})
export class NgInstalacionComponent implements OnInit {

  public idPublicacion = '8618eb718b-655b-49a8-9e6e-f3732922b2df';

  public cabeceraPost = new PostModel();

  public breadcrumb: CategoriaModel = {
    activo: true,
    categoria: 'ANGULAR',
    colorText: 'tc-red-one',
    ruta: 'angular'
  }

  public accordeonContend: AccordeonModel [] = [
    {
      elemento: '',
      nClass: '',
    }
  ]
  
  constructor() { 
    this.inicializarVariables();
  }

  ngOnInit(): void {
  }

  private inicializarVariables(){
    
    this.accordeonContend = [
        {
          elemento: 'ANGULAR JS (El inicio)',
          nClass: 'motrarUno',
          mostrarlo: false,
          contenido: 'El punto de partida de angular 20 de octubre de 2010'
        },
        {
          elemento: 'ANGULAR 2',
          nClass: 'motrarDos',
          mostrarlo: false,
          contenido: '',
          contenidoLista: [
            {
              contenido: 'Utiliza un sistema de inyección de dependencias jerárquico impulsando su rendimiento de forma brutal.'
            },
            {
              contenido: 'Implementa la detección de cambios basados en árboles unidireccionales, que también incrementa el rendimiento. Según algunos datos oficiales, Angular puede llegar a ser 5 veces más rápido que AngularJS.'
            },
            {
              contenido: 'Orientado a móviles.'
            },
          ]

        },
        {
          elemento: 'ANGULAR 10',
          nClass: 'motrarDos',
          mostrarlo: false,
          contenido: '',
          contenidoLista: [
            {
              contenido: 'RELEASED: Jun 24, 2020'
            },
          ]

        },
        {
          elemento: 'ANGULAR 11',
          nClass: 'motrarDos',
          mostrarlo: false,
          contenido: '',
          contenidoLista: [
            {
              contenido: 'RELEASED: Nov 11, 2020'
            },
          ]

        },
        {
          elemento: 'ANGULAR 12',
          nClass: 'motrarDos',
          mostrarlo: false,
          contenido: '',
          contenidoLista: [
            {
              contenido: 'RELEASED: May 12, 2021'
            },
          ]

        },
        {
          elemento: 'ANGULAR 13',
          nClass: 'motrarDos',
          mostrarlo: false,
          contenido: '',
          contenidoLista: [
            {
              contenido: 'RELEASED: Nov 04, 2021'
            },
            {
              contenido: 'Eliminación de View Engine, requiere que todas las aplicaciones y bibliotecas se compilen con Ivy.'
            },
            {
              contenido: 'Modernización del formato de paquete angular (APF), se eliminaron los formatos de salida más antiguos, incluidos los metadatos específicos de View Engine.'
            },
            {
              contenido: 'Fin del soporte IE11.'
            },
            {
              contenido: 'Desmontaje del módulo del banco de pruebas, agrega la opción "initTestEnvironment" para eliminar completamente los entornos de prueba de una aplicación. '
            },
            {
              contenido: 'Caché de disco, habilita la caché de compilación persistente de forma predeterminada para todas las aplicaciones. '
            },
            {
              contenido: 'Las versiones de TypeScript anteriores a las 4.4.2ya no son compatibles. '
            },
            {
              contenido: 'Las versiones de NodeJS anteriores a las v12.20.0ya no son compatibles. Los paquetes Angular ahora usan la función de exportación de paquetes NodeJS con patrones de subrutas y requieren una versión NodeJS superior 14.15.0o 16.10.0. '
            },
            {
              contenido: 'Anteriormente, el serializador de URL predeterminado eliminaba todo lo que estaba después de incluir un signo de interrogación en los parámetros de consulta. Es decir, para una navegación /path?q=hello?&other=123, los parámetros de consulta analizados solo {q: "hello"}. Esto es incorrecto, porque la especificación URI permite caracteres de signo de interrogación en los datos de la consulta. Este cambio ahora analiza correctamente los parámetros de consulta /path?q=hello?&other=123como {v: "hello?", other: "123"}. '
            },
            {
              contenido: 'El comportamiento del "SpyLocation" utilizado por el "RouterTestingModule" ha cambiado para coincidir con el comportamiento de los navegadores. Ya no emite un "popstate" evento cuando "Location.go" se llama. Además, "simulateHashChange" ahora activa tanto un "hashchange" evento como un "popstate" evento. Las pruebas que usan "location.go" y esperan que los cambios sean recogidos por el "Router" deberían migrar a "simulateHashChange". Cada prueba es diferente en lo que intenta afirmar, por lo que no existe un único cambio que funcione para todas las pruebas. Cada prueba que utiliza "SpyLocation" para simular cambios en la URL del navegador debe evaluarse caso por caso.'
            },
            {
              contenido: '"FormControlStatus" ha introducido un nuevo tipo llamado , que es una unión de todas las cadenas de estado posibles para los controles de formulario. "AbstractControl.status" se ha reducido de "string" a "FormControlStatus" y "statusChanges" se ha reducido de "Observable<any>" a . La mayoría de las aplicaciones deberían consumir los nuevos tipos sin problemas. Es probable que cualquier rotura causada por este cambio se deba a uno de los dos problemas siguientes:Observable<FormControlStatus>La aplicación se compara "AbstractControl.status" con una cadena que no es un estado válido. La aplicación usa "statusChanges" eventos como si fueran algo más que cadenas.'
            },
            {
              contenido: 'Anteriormente, "null" y "undefined" entradas para "routerLink" equivalían a cadena vacía y no había manera de desactivar la navegación del enlace. Además, "href" se cambia de una propiedad "HostBinding()" a un atributo vinculante ( HostBinding("attr.href")). El efecto de este cambio es que DebugElement.properties["href"] ahora devuelve el "href" valor devuelto por el elemento nativo, que es la URL completa en lugar del valor interno de "RouterLink" "href" propiedad.'
            },
            {
              contenido: '	El enrutador ya no reemplaza la URL del navegador cuando una nueva navegación cancela una navegación en curso. El reemplazo de la URL del navegador a menudo provocaba un parpadeo de la URL y solo estaba disponible para admitir algunas aplicaciones híbridas de AngularJS. Las aplicaciones híbridas que dependen de la presencia de "navigationId" en cada navegación inicial manejada por el enrutador angular deben suscribirse a los "NavigationCancel" eventos y realizar manualmente la "location.replaceState" adición "navigationId" al estado del enrutador.Además, las pruebas que afirman "urlChanges" sobre el "SpyLocation" deben ajustarse para tener en cuenta la falta del "replaceState" disparador..'
            },
            {
              contenido: 'La "WrappedValue" clase ya no se importa de @angular/core. Este cambio puede resultar en errores de compilación o fallas en tiempo de ejecución, si se utilizan bibliotecas obsoletas que dependen de WrappedValue. La dependencia de "WrappedValue" debe eliminarse ya que no hay reemplazo disponible.'
            },
            {
              contenido: 'Ya no es posible usar Route.loadChildrencon un valor de cadena. Las siguientes clases de apoyo se eliminaron de @angular/core: "ngModuleFactoryLoader", "SystemJsNgModuleFactoryLoader". El "@angular/router" paquete ya no exporta los siguientes símbolos:  "SpyNgModuleFactoryLoader", "DeprecatedLoadChildren". Se cambió la firma de la "setupTestingRouter"función de "@angular/core/testing" para eliminar el "NgModuleFactoryLoader" parámetro, ya que no se puede crear un valor para ese parámetro.'
            },
            {
              contenido: 'El tipo de retorno de SwUpdate#activateUpdatey SwUpdate#checkForUpdatecambiado a Promise<boolean>. Aunque es poco probable, este cambio puede hacer que la verificación de tipos de TypeScript falle en algunos casos. Si es necesario, actualice sus tipos para tener en cuenta el nuevo tipo de devolución.'
            },
            {
              contenido: 'Los scripts que se cargan de forma dinámica "import()" ahora se tratan como módulos ES (lo que significa que deben ser estrictamente compatibles con el modo).'
            },
          ]

        }
      ]
    
      this.cabeceraPost = {
        nombre: '',
        id_post: '',
        categoria: '',
        fechaActualizacion: new Date(2020,7,30),
        fechaCreacion: new Date(2020,7,30),
        incluirFondo: false,
        ruta: '',
        rutaImagen: '',
        sombra: '',
        alturaImagen: '',
        mostrarBreadcrumb: false,
        colorText: ''
      };
    
    
  }

  public copiarAlPortapapeles(cadenaAlclipboard: string) {
    copiarAlPortapapeles(cadenaAlclipboard);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  private traerPublicacionId(id: string):DatosPost{
    let publicacion: DatosPost[] = postActual(id);
    return publicacion[0]
  }

}
