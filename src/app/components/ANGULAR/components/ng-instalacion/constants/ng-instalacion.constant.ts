import { AccordeonModel } from '@shared/models';
export const COMANDOS_ANGULAR_CLI = [
    {
        id: 1,
        descripcion: 'Crear un proyecto Angular nuevo para empezar a desarrollar',
        comando: 'ng new nombre_aplicacion',
        gif: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/ng-instalacion/ng-new-project-base.gif'
    },
    {
        id: 2,
        descripcion: 'Crear un proyecto Angular nuevo en una versión específica, genera por defecto estilos para css',
        comando: 'npx -p @angular/cli@12.0.0 ng new nombre-aplicacion',
        gif: ''
    },
    {
        id: 3,
        descripcion: 'Crear un proyecto Angular nuevo con estilos scss',
        comando: 'ng new nombre-aplicacion --style=scss',
        gif: ''
    },
    {
        id: 4,
        descripcion: 'Ejecuta el proyecto compilándolo y poder visualizarlo en el navegador por el puerto local configurado en el archivo del paquete de angular package.json',
        comando: 'ng serve',
        gif: 'https://plantillas_dev.gitlab.io/assets/img/posts/angular/ng-instalacion/ng-serve.gif'
    },
    {
        id: 5,
        descripcion: 'Lo mismo que el comando anterior pero abre el proyecto automáticamente en el navegador',
        comando: 'ng serve -o',
        gif: ''
    },
    {
        id: 6,
        descripcion: 'Compila el proyecto en un puerto específico, en este caso saldría por el "localhost:4201"',
        comando: 'ng serve --port 4201',
        gif: ''
    },
    {
        id: 7,
        descripcion: 'Crea un conjunto de 3 tipos de archivos: nombredelcomponente.html, nombredelcomponente.ts, nombredelcomponente.spec.ts',
        comando: 'ng g component ruta/nombredelcomponente',
        gif: ''
    },
    {
        id: 8,
        descripcion: 'Lo mismo que lo anterior sin el archivo de pruebas.spec.ts',
        comando: 'ng g c nombre/componente --skip-tests || ng g c nombre/componente --spec=false',
        gif: ''
    },
    {
        id: 9,
        descripcion: 'Lo mismo que lo anterior sin el archivo de estilos',
        comando: 'ng g c nombre/componente --skip-tests --inline-style',
        gif: ''
    },
    {
        id: 10,
        descripcion: 'Crea un archivo.service.ts con la extructura de un archivo de servicios de Angular base para desarrollar',
        comando: 'ng g s ruta/nombreArchivoService',
        gif: ''
    },
    {
        id: 11,
        descripcion: 'Actualiza la version de "Angular CLI"',
        comando: 'ng update @angular/cli @angular/core',
        gif: ''
    },
    {
        id: 12,
        descripcion: 'Generar un guardia de ruta en el proyecto dado.',
        comando: 'ng generate guard guard-nombre',
        gif: ''
    },
    {
        id: 13,
        descripcion: 'Vista previa de lo que pasaria al ejecutar el comando sin crear.',
        comando: '--dry-run',
        gif: ''
    },
    {
        id: 14,
        descripcion: 'Cambiar los estilos globales a SCSS',
        comando: 'ng config --global defaults.styleExt=scss',
        gif: ''
    },
]

export const VERSIONES_ANGULAR: AccordeonModel[] = [
  /* ANGULAR JS */
    {
        elemento: 'ANGULAR JS (El inicio)  ✚',
        nClass: 'mostrar1',
        contenido: 'Fue desarrollado en el 2009 por Miško Hevery',
        contenidoLista: [
          {
            contenido: 'MVC (Model View Controller)',
            indice: ''
          },
          {
            contenido: 'ENLASE DEL MODELO DE DATOS: data binding, conexión directa entre la vista (html) y los datos (componente.ts).',
            indice: ''
          },
          {
            contenido: 'ESCRIBIR MENOS CÓDIGO: Se refiere a lo práctico del framework adaptado para generar desarrollos más ordenados.',
            indice: ''
          },
          {
            contenido: 'ORDENADO POR MÓDULOS: Los componentes deben pertenecer a un módulo y éste, permite centralizar la importación de librerías y recursos.',
            indice: ''
          },
          {
            contenido: 'SPA: Permite crear aplicaciones Simple Page Aplication.',
            indice: ''
          },
          {
            contenido: 'PRUEBAS UNITARIAS LISTAS: La librería karma para aplicar pruebas unitarias esta incluída por defecto en los paquetes.',
            indice: ''
          },
        ],
        mostrarlo: false,
    },
    /* ANGULAR 2 */
    {
        elemento: 'ANGULAR 2  ✚',
        nClass: 'mostrar2',
        contenido: 'RELEASED: May, 2016',
        contenidoLista: [
            {
              contenido: 'Apartir de éste, seguirá siendo "Angular" solamente, es un nuevo framework, escrito desde cero y con conceptos y formas de trabajar completamente distintos al primero.'
            },
            {
              contenido: 'Utiliza un sistema de inyección de dependencias jerárquico impulsando su rendimiento de forma brutal.'
            },
            {
              contenido: 'Implementa la detección de cambios basados en árboles unidireccionales, que también incrementa el rendimiento. Puede llegar a ser 5 veces más rápido que AngularJS.'
            },
            {
              contenido: 'Está orientado desde el principio a dar buen rendimiento y funcionar bien en dispositivos móviles.'
            },
            {
              contenido: 'Se renderiza el mismo código de forma distinta en navegadores web que en apps móviles.'
            },
            {
              contenido: 'Uso de typescript, formas especiales de utilizar el Javascript, ya es requerido su manejo.'
            },
            {
              contenido: 'la sintaxis de las directivas estructurales cambia ahora, ng-repeat se sustituye por *ngFor.'
            },
            {
              contenido: 'Se usan directamente las propiedades de los elementos y eventos del DOM, dado esto se retiran: ng-href, ng-src, ng-hide, ahora ya van href, src y hidden para lo mismo.'
            },
            {
              contenido: 'La directiva de datos enlazados en una sola dirección (one-way data binding) se sustituye por [property].'
            },
            {
              contenido: 'Cambia ng-model="prod.name" por [(ngModel)]="prod.name".'
            },
            {
              contenido: 'Cambia la sintaxis para hacer routing.'
            },
          ],
        mostrarlo: false,
    },
    /* ANGULAR 4 */
    {
        elemento: 'ANGULAR 4  ✚',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: 'RELEASED: Dic, 2016',
        contenidoLista: [
          {
            contenido: 'La primera gran actualización de Angular 2.'
          },
          {
            contenido: 'No se uso la versión 3 porque Igor Minar, líder del equipo de Angular en Google, explicó que paso de la versión 2 a la 4 ya que el módulo de Angular Router (el que permite las SPA) tenía versión 3.3.0 y los demás módulos de Angular el 2.3.0 y esto podría o generaba errores, por lo cual decidieron alinearlo todo con la versión 4.'
          },
          {
            contenido: 'Se agregó un nuevo paquete de funciones, incluida una biblioteca más eficiente y accesible para crear solicitudes HTTP, HttpClient.'
          },
        ]

    },
    /* ANGULAR 5 */
    {
        elemento: 'ANGULAR 5  ✚',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: 'RELEASED: Nov 1, 2017.',
        contenidoLista: [
          {
            contenido: 'Soporte para aplicaciones web progresivas.'
          },
          {
            contenido: 'AOT(AHead Of Time) será default. Este se refiere los bundles de compilación generados serán más pequeños eliminando espacios en blanco.'
          },
          {
            contenido: 'Chequeo de tipos en templates.'
          },
          {
            contenido: 'Metadata más flexible.'
          },
          {
            contenido: 'Se removerán los archivos .ngfactory.ts.'
          },
          {
            contenido: 'Mejores mensajes de error.'
          },
          {
            contenido: 'Mejoramiento de performance.'
          },
          {
            contenido: 'Nuevos eventos del ciclo de vida del enrutador: Se agregan nuevos eventos de ciclo de vida al "router", lo que permite a los desarrolladores rastrear el ciclo del enrutador desde el inicio de la ejecución hasta la finalización de la activación. En orden de lanzamiento serían: -GuardsCheckStart, -ChildActivationStart, -ActivationStart, -GuardsCheckEnd, -ResolveStart, ResolveEnd, -ActivationEnd, -ChildActivationEnd.'
          },
          {
            contenido: 'ServerTransferStateModule, se usa para instalar en el lado del servidor mientras se usa TransferState en una aplicación sin proporcionar este módulo.'
          },
        ]
    },
    /* ANGULAR 6 */
    {
        elemento: 'ANGULAR 6  ✚',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: 'RELEASED: May 4, 2018',
        contenidoLista: [
          {
            contenido: 'Herramientas pensadas para trabajo rápido con Angular: - ng update, - ng add, Angular Elements, Angular Material, CDK Components, Angular material starter components, CLI Workspaces, library support, Tree Shakable Providers, Animations performance improvements, RxJS v.6'
          },
        ]

    },
    /* ANGULAR 7 */
    {
        elemento: 'ANGULAR 7  ✚',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: 'RELEASED: Oct 18, 2018',
        contenidoLista: [
          {
            contenido: 'Node 10 (todavía soporta el Node 8)'
          },
          {
            contenido: 'RxJS 6.3'
          },
          {
            contenido: 'Ahora es compatible con la proyección de contenido usando el estándar web para elementos personalizados y las actualizaciones de dependencia con respecto a Typescript 3.1.'
          },
        ]

    },
    /* ANGULAR 8 */
    {
        elemento: 'ANGULAR 8  ✚',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: 'RELEASED: May 28, 2019',
        contenidoLista: [
          {
            contenido: 'Incluye carga diferencial para todo el código de la aplicación.'
          },
          {
            contenido: 'Importaciones dinámicas para "Lazy routes".'
          },
          {
            contenido: 'compatibilidad con TypeScript 3.4 y Angular Ivy como vista previa opcional.'
          },
          {
            contenido: 'La vista previa de suscripción de Angular Ivy incluye: -Código generado que es más fácil de leer y depurar en tiempo de ejecución. -Tiempo de reconstrucción más rápido. -Tamaño de carga útil mejorado. -Comprobación mejorada del tipo de plantilla. -Compatibilidad al revés.'
          },
        ]

    },
    /* ANGULAR 9 */
    {
        elemento: 'ANGULAR 9  ✚',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: 'RELEASED: Feb 6, 2020',
        contenidoLista: [
          {
            contenido: 'Todas las aplicaciones para usar el compilador y el tiempo de ejecución de Ivy de forma predeterminada.'
          },
          {
            contenido: 'Ahora para funcionar con TypeScript 3.6 y 3.7.'
          },
          {
            contenido: 'El compilador y tiempo de ejecución de Ivy ofrece numerosas ventajas: *Tamaños de paquetes más pequeños, *Pruebas más rápidas, *Mejor depuración, *Enlace de clase y estilo CSS mejorado, *Comprobación de tipos mejorada, *Errores de compilación mejorados, *Tiempos de compilación mejorados, *habilitando AOT de forma predeterminada, *Internacionalización mejorada.'
          },
        ]
    },
    /* ANGULAR 10 */
    {
        elemento: 'ANGULAR 10  ✚',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: 'RELEASED: Jun 24, 2020',
        contenidoLista: [
          {
            contenido: 'Nuevo selector de intervalo de fechas (IU Material library).'
          },
          {
            contenido: 'Advertencias sobre las importaciones de CommonJS.'
          },
        ]
    },
    /* ANGULAR 11 */
    {
        elemento: 'ANGULAR 11  ✚',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: 'RELEASED: Nov 11, 2020',
        contenidoLista: [
          {
            contenido: 'Actualizaciones sobre la Operación Byelog.'
          },
          {
            contenido: 'Incrustación automática de fuentes.'
          },
          {
            contenido: 'Arneses de prueba de componentes.'
          },
          {
            contenido: 'Informes y registros mejorados.'
          },
          {
            contenido: 'Vista previa del servicio de idiomas actualizado.'
          },
          {
            contenido: 'Soporte actualizado de reemplazo de módulo en caliente (HMR).'
          },
          {
            contenido: 'Construcciones más rápidas.'
          },
          {
            contenido: 'Paquete web experimental 5 Soporte.'
          },
          {
            contenido: 'mejoras en la compilación AOT (Ahead-of-Time) para acelerar el proceso de construcción de la aplicación y reducir el tamaño de los bundles.'
          },
          {
            contenido: 'Se introdujo la capacidad de aplicar directivas personalizadas a elementos de host mediante atributos en lugar de selectores, lo que brinda una mayor flexibilidad al desarrollar directivas personalizadas.'
          },
          {
            contenido: 'Se introdujeron mejoras en el marco de pruebas unitarias de Angular para facilitar la escritura y ejecución de pruebas de componentes y servicios.'
          }
        ]
    },
    /* ANGULAR 12 */
    {
        elemento: 'ANGULAR 12  ✚',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: 'RELEASED: May 12, 2021',
        contenidoLista: [
          {
            contenido: 'Soporte deprecado para IE11.'
          }
        ]
    },
    /* ANGULAR 13 */
    {
        elemento: 'ANGULAR 13  ✚',
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
    },
    /* ANGULAR 14 */
    {
        elemento: 'ANGULAR 14  ✚',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: 'RELEASED: Jun 2, 2022',
        contenidoLista: [
          {
            contenido: 'Formularios tipados.'
          },
          {
            contenido: 'Componentes independientes y nuevas primitivas en el Angular CDK (component dev kit).'
          },
          {
            contenido: 'Los componentes independientes funcionan en todo Angular, y ahora funcionan completamente en HttpClient, Angular Elements, router y más.'
          },
        ]
    },
    /* ANGULAR 15 */
    {
        elemento: 'ANGULAR 15  ✚',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: 'RELEASED: Nov 16, 2022',
        contenidoLista: [
          {
            contenido: 'Estabilidad a los componentes independientes.'
          },
          {
            contenido: 'La directiva "NgOptimizedImage" es estable.'
          },
          {
            contenido: 'Se pueden añadir directivas a los elementos host.'
          },
          {
            contenido: '"Stack traces" son más útiles.'
          },
          {
            contenido: 'Los componentes basados en MDC son estables.'
          },
        ]
    },
    /* ANGULAR 16 */
    {
        elemento: 'ANGULAR 16  ✚',
        nClass: 'motrarDos',
        mostrarlo: false,
        contenido: 'RELEASED: May 4, 2023',
        contenidoLista: [
          {
            contenido: 'SIGNALS: Un medio de comunicación de datos, similar al comportamiento de los observables de la libreria y fiel amiga de angular "RXJS"'
          },
          {
            contenido: 'DESTROYREF: Una manera más practica de parar los ciclos de vida que se quedan abriertos en los componentes.'
          },
          {
            contenido: 'HYDRATION API: Buscando una mejor eficacia en el renderizado de las aplicaciones ahora en lugar de limpiar y destruir todo el DOM para renderizarlo nuevamente, se "rehidratará" para renderizar tan solo lo solicitado y mantener lo estático.'
          },
        ]
    },
]