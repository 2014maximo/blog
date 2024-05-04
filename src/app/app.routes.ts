import * as Ruta from './components';
import { Routes } from '@angular/router';
import { HomeComponent } from '@components/home/home.component';
import { LoginComponent } from '@shared/components/login/login.component';


export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },

// ANDROID STUDIO
    { path: 'android', component: Ruta.AndroidComponent },
    { path: 'andr-elementos-android-studio', component: Ruta.ElementosAndroidStudioComponent },

// ANGULAR
    { path: 'angular', component: Ruta.AngularComponent },
    { path: 'ng-instalacion', component: Ruta.NgInstalacionComponent },
    { path: 'ng-rxjs-first-value-from', component: Ruta.NgRxjsFirstValueFromComponent },
    { path: 'ng-descripcion-elementos', component: Ruta.NgDescripcionElementosComponent },
    { path: 'ng-comunicacion-componentes', component: Ruta.NgComunicacionEntreComponentesComponent },
    { path: 'ng-arquitecturas', component: Ruta.NgArquitecturasComponent },
    { path: 'ng-manejo-rutas', component: Ruta.NgManejoRutasComponent },
    { path: 'ng-microservicios', component: Ruta.NgMicroserviciosComponent },
    { path: 'ng-modulos', component: Ruta.NgModulosComponent },
    { path: 'ng-pruebas-unitarias', component: Ruta.NgPruebasUnitariasComponent },
    { path: 'ng-gh-pages', component: Ruta.NgGhPagesComponent },

// CSS
    { path: 'css', component: Ruta.CssComponent },
    { path: 'css-atributos', component: Ruta.CssAtributosComponent },

// DART
    { path: 'dart', component: Ruta.DartComponent },
    { path: 'dart-elementos', component: Ruta.DartElementosComponent },

// DB
    { path: 'db', component: Ruta.DbComponent },
    { path: 'db-firebase', component: Ruta.DbFirebaseComponent },
    { path: 'db-sql', component: Ruta.DbSqlComponent },
    { path: 'db-sql-server', component: Ruta.DbSqlServerComponent },

// DEVELOPER
    { path: 'developer', component: Ruta.DeveloperComponent },
    { path: 'dev-super-recursos', component:Ruta.DevSuperRecursosComponent },
    { path: 'dev-principios-solid', component:Ruta.DevPrincipiosSolidComponent },
    { path: 'dev-algoritmos-clave', component:Ruta.DevAlgoritmosClaveComponent },
    { path: 'dev-controles-visual', component:Ruta.DevControlesVisualStudioCodeComponent },
    { path: 'dev-diagramas-secuencia', component:Ruta.DevDiagramasSecuenciaComponent},
    { path: 'dev-algoritmos-clave', component:Ruta.DevAlgoritmosClaveComponent },
    { path: 'dev-patrones', component:Ruta.DevPatronesComponent },
    { path: 'dev-algoritmos-clave', component:Ruta.DevAlgoritmosClaveComponent },
    { path: 'dev-busqueda-empleo', component:Ruta.DevBusquedaEmpleoComponent },
    { path: 'dev-glosario-general', component: Ruta.DevGlosarioComponent },

// ELECTRON
    { path: 'electron', component: Ruta.ElectronComponent },
    { path: 'etron-instalacion', component: Ruta.EtronInstalacionComponent },
    { path: 'etron-elementos', component: Ruta.EtronElementosComponent },


// FLUTTER
    { path: 'flutter', component: Ruta.FlutterComponent },
    { path: 'flutter-instalacion', component: Ruta.FlutterInstalacionComponent },
    { path: 'flutter-elementos', component: Ruta.FlutterElementosComponent },

// GIT
    { path: 'git', component: Ruta.GitComponent },
    { path: 'git-instalacion', component: Ruta.GitInstalacionComponent },
    { path: 'git-errores', component: Ruta.GitErroresComponent },

// HTML
    { path: 'html', component: Ruta.HtmlComponent },
    { path: 'html-etiquetas', component: Ruta.HtmlEtiquetasComponent },

// JAVA
    { path: 'java', component: Ruta.JavaComponent},
    { path: 'java-instalacion', component: Ruta.JavaInstalacionComponent},
    { path: 'java-glassfish', component: Ruta.JavaGlassfishComponent},
    { path: 'java-elementos', component: Ruta.JavaElementosComponent},

// JAVASCRIPT
    { path: 'javascript', component: Ruta.JavascriptComponent },
    { path: 'js-elementos', component: Ruta.JsElementosComponent},
    { path: 'js-recorrer-arrays-objetos', component: Ruta.JsRecorrerArraysObjetosComponent },
    { path: 'js-trabajo-fechas', component: Ruta.JsTrabajoFechasComponent },

// LINUX
    { path: 'linux', component: Ruta.LinuxComponent },
    { path: 'lx-co-m-u', component: Ruta.LxComandosMUsadosComponent },

// KOTLIN
    { path: 'kotlin', component: Ruta.KotlinComponent },
    { path: 'kotlin-elementos', component: Ruta.KotlinElementosComponent },


// KUBERNETES
    { path: 'kubernetes', component: Ruta.KubernetesComponent },

// NET-FRAMEWORKS
    { path: 'net', component: Ruta.NetComponent},
    { path: 'net-instalacion', component: Ruta.NetInstalacionComponent },
    { path: 'net-descripcion-elementos', component: Ruta.NetDescripcionElementosComponent },

// PHP
    { path: 'php', component: Ruta.PhpComponent },
    { path: 'php-elementos', component: Ruta.PhpElementosComponent },

// REACT
    { path: 'react', component: Ruta.ReactComponent },
    { path: 'react-elementos', component: Ruta.ReactElementosComponent },

// TYPESCRIPT
    { path: 'typescript', component: Ruta.TypescriptComponent },
    { path: 'ts-elementos', component: Ruta.TsElementosComponent },
    { path: 'ts-instalacion', component: Ruta.TsInstalacionComponent },

// WORDPRESS
    { path: 'wordpress', component: Ruta.WordpressComponent },
    { path: 'wordpress-elementos', component: Ruta.WordpressElementosComponent },
];

