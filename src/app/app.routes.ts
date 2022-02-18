import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/ESTADISTICA/inicio/inicio.component';
import { NetInstalacionComponent } from './components/NET/net-instalacion/net-instalacion.component';
import { AngularComponent } from './components/ANGULAR/angular/angular.component';
import { CssComponent } from './components/CSS/css/css.component';
import { DartComponent } from './components/DART/dart/dart.component';
import { DeveloperComponent } from './components/DEVELOPER/developer/developer.component';
import { FlutterComponent } from './components/FLUTTER/flutter/flutter.component';
import { FlutterInstalacionComponent } from './components/FLUTTER/flutter-instalacion/flutter-instalacion.component';
import { GitComponent } from './components/GIT/git/git.component';
import { HtmlComponent } from './components/HTML/html/html.component';
import { JavaComponent } from './components/JAVA/java/java.component';
import { JavascriptComponent } from './components/JAVASCRIPT/javascript/javascript.component';
import { LinuxComponent } from './components/LINUX/linux/linux.component';
import { NetFrameworkComponent } from './components/NET/net-framework/net-framework.component';
import { ElectronComponent } from './components/ELECTRON/electron/electron.component';
import { KotlinComponent } from './components/KOTLIN/kotlin/kotlin.component';
import { EstadisticaComponent } from './components/ESTADISTICA/estadistica/estadistica.component';
import { AstroSIngresoComponent } from './components/ESTADISTICA/astro-s-ingreso/astro-s-ingreso.component';
import { NetDescripcionElementosComponent } from './components/NET/net-descripcion-elementos/net-descripcion-elementos.component';
import { SenaComponent } from './components/SENA/sena/sena.component';
import { ReactComponent } from './components/REACT/react/react.component';
import { JsRecorrerArraysObjetosComponent } from './components/JAVASCRIPT/js-recorrer-arrays-objetos/js-recorrer-arrays-objetos.component';
import { JsTrabajoFechasComponent } from './components/JAVASCRIPT/js-trabajo-fechas/js-trabajo-fechas.component';
import { PhpComponent } from './components/PHP/php/php.component';
import { WordpressComponent } from './components/WORDPRESS/wordpress/wordpress.component';
import { JsElementosComponent } from './components/JAVASCRIPT/js-elementos/js-elementos.component';
import { KubernetesComponent } from './components/KUBERNETES/kubernetes/kubernetes.component';
import { DbComponent } from './components/DB/db/db.component';
import { HtmlEtiquetasComponent } from './components/HTML/html-etiquetas/html-etiquetas.component';
import { DevGlosarioComponent } from './components/DEVELOPER/dev-glosario/dev-glosario.component';
import { JavaInstalacionComponent } from './components/JAVA/java-instalacion/java-instalacion.component';
import { JsNodeJsComponent } from './components/JAVASCRIPT/js-node-js/js-node-js.component';
import { JsInstalandoNodeConNvmComponent } from './components/JAVASCRIPT/js-instalando-node-con-nvm/js-instalando-node-con-nvm.component';
import { DevControlesVisualStudioCodeComponent } from './components/DEVELOPER/dev-controles-visual-studio-code/dev-controles-visual-studio-code.component';
import { NgDescripcionElementosComponent } from './components/ANGULAR/ng-descripcion-elementos/ng-descripcion-elementos.component';
import { NgInstalacionComponent } from './components/ANGULAR/ng-instalacion/ng-instalacion.component';
import { Prime7DescripcionElementosComponent } from './components/ANGULAR/prime7-descripcion-elementos/prime7-descripcion-elementos.component';
import { Prime7TablecheckboxComponent } from './components/ANGULAR/prime7-tablecheckbox/prime7-tablecheckbox.component';
import { AndroidComponent } from './components/ANDROID/android/android.component';
import { AndrAndroidStudioComponent } from './components/ANDROID/andr-android-studio/andr-android-studio.component';
import { DbFirebaseComponent } from './components/DB/db-firebase/db-firebase.component';
import { DbSqlComponent } from './components/DB/db-sql/db-sql.component';
import { DbSqlServerComponent } from './components/DB/db-sql-server/db-sql-server.component';
import { DevSuperRecursosComponent } from './components/DEVELOPER/dev-super-recursos/dev-super-recursos.component';
import { SenaFichaActualComponent } from './components/SENA/sena-ficha-actual/sena-ficha-actual.component';
import { SenaRecursosInformativosComponent } from './components/SENA/sena-recursos-informativos/sena-recursos-informativos.component';
import { JavaGlassfishComponent } from './components/JAVA/java-glassfish/java-glassfish.component';
import { JsTypescriptElementosComponent } from './components/JAVASCRIPT/js-typescript-elementos/js-typescript-elementos.component';
import { PhpElementosComponent } from './components/PHP/php-elementos/php-elementos.component';


export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent },

// ANDROID STUDIO
    { path: 'android', component: AndroidComponent },
    { path: 'andr-android-studio', component: AndrAndroidStudioComponent },

// ANGULAR
    { path: 'angular', component: AngularComponent },
    { path: 'ng-instalacion', component: NgInstalacionComponent },
    { path: 'ng-descripcion-elementos', component: NgDescripcionElementosComponent },
// PRIMENG7
    { path: 'prime7-descripcion-elementos', component: Prime7DescripcionElementosComponent },
    { path: 'prime7-tablecheckbox', component: Prime7TablecheckboxComponent },

// CSS
    { path: 'css', component: CssComponent },

// DART
    { path: 'dart', component: DartComponent },

// DB
    { path: 'db', component: DbComponent },
    { path: 'db-firebase', component: DbFirebaseComponent },
    { path: 'db-sql', component: DbSqlComponent },
    { path: 'db-sql-server', component: DbSqlServerComponent },

// DEVELOPER
    { path: 'developer', component: DeveloperComponent },
    { path: 'dev-super-recursos', component: DevSuperRecursosComponent },
    { path: 'dev-glosario', component: DevGlosarioComponent },
    { path: 'dev-controles-visual-studio-code', component: DevControlesVisualStudioCodeComponent },

// ESTADISTICA
    { path: 'estadistica', component: EstadisticaComponent },
    { path: 'astro-sol-ingreso', component: AstroSIngresoComponent },
    { path: 'estadistica-inicio', component: InicioComponent },

// ELECTRON
    { path: 'electron', component: ElectronComponent },

// FLUTTER
    { path: 'flutter', component: FlutterComponent },
    { path: 'flutter-instalacion', component: FlutterInstalacionComponent },

// GIT
    { path: 'git', component: GitComponent },

// HTML
    { path: 'html', component: HtmlComponent },
    { path: 'html-etiquetas', component: HtmlEtiquetasComponent },

// JAVA
    { path: 'java', component: JavaComponent},
    { path: 'java-instalacion', component: JavaInstalacionComponent},
    { path: 'java-glassfish', component: JavaGlassfishComponent},

// JAVASCRIPT
    { path: 'javascript', component: JavascriptComponent },
    { path: 'js-elementos', component: JsElementosComponent},
    { path: 'js-recorrer-arrays-objetos', component: JsRecorrerArraysObjetosComponent },
    { path: 'js-trabajo-fechas', component: JsTrabajoFechasComponent },
    { path: 'js-node-js', component: JsNodeJsComponent },
    { path: 'js-instalando-node-con-nvm', component: JsInstalandoNodeConNvmComponent },
    { path: 'js-typescript-elementos', component: JsTypescriptElementosComponent },

// LINUX
    { path: 'linux', component: LinuxComponent },

// KOTLIN
    { path: 'kotlin', component: KotlinComponent },

// KUBERNETES
    { path: 'kubernetes', component: KubernetesComponent },

// NET-FRAMEWORKS
    { path: 'net', component: NetFrameworkComponent},
    { path: 'net-instalacion', component: NetInstalacionComponent },
    { path: 'net-descripcion-elementos', component: NetDescripcionElementosComponent },

// SENA
    { path: 'sena', component: SenaComponent },
    { path: 'sena-ficha-actual', component: SenaFichaActualComponent },
    { path: 'sena-recursos-informativos', component: SenaRecursosInformativosComponent },

// REACT
    { path: 'react', component: ReactComponent },

// PHP
    { path: 'php', component: PhpComponent },
    { path: 'php-elementos', component: PhpElementosComponent },

// WORDPRESS
    { path: 'wordpress', component: WordpressComponent },
];

function recorrerComponentes(array: any) {
    
    let lista;

    for(let i=0; i> array.length; i++){
        lista = [{ path: array.ruta, component: array.componente },]
    }
    return lista
}
