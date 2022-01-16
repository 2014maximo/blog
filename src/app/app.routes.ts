import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InstalacionAngularComponent } from './components/ANGULAR/instalacion-angular/instalacion-angular.component';
import { SuperRecursosInternetComponent } from './components/DEVELOPER/super-recursos-internet/super-recursos-internet.component';
import { InicioComponent } from './components/ESTADISTICA/inicio/inicio.component';
import { Primeng7DescripcionElementosComponent } from './components/ANGULAR/primeng7-descripcion-elementos/primeng7-descripcion-elementos.component';
import { AngularDescripcionElementosComponent } from './components/ANGULAR/angular-descripcion-elementos/angular-descripcion-elementos.component';
import { NetInstalacionComponent } from './components/NET/net-instalacion/net-instalacion.component';
import { FichaActualComponent } from './components/SENA/ficha-actual/ficha-actual.component';
import { RecursosInformativosComponent } from './components/SENA/recursos-informativos/recursos-informativos.component';
import { AndroidStudioComponent } from './components/ANDROID/android-studio/android-studio.component';
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
import { SqlComponent } from './components/DB/sql/sql.component';
import { SqlServerQuerysComponent } from './components/DB/sql-server-querys/sql-server-querys.component';
import { SenaComponent } from './components/SENA/sena/sena.component';
import { ReactComponent } from './components/REACT/react/react.component';
import { JsRecorrerArraysObjetosComponent } from './components/JAVASCRIPT/js-recorrer-arrays-objetos/js-recorrer-arrays-objetos.component';
import { JsTrabajoFechasComponent } from './components/JAVASCRIPT/js-trabajo-fechas/js-trabajo-fechas.component';
import { PhpComponent } from './components/PHP/php/php.component';
import { WordpressComponent } from './components/WORDPRESS/wordpress/wordpress.component';
import { JsElementosComponent } from './components/JAVASCRIPT/js-elementos/js-elementos.component';
import { KubernetesComponent } from './components/KUBERNETES/kubernetes/kubernetes.component';
import { Primeng7TablecheckboxComponent } from './components/ANGULAR/primeng7-tablecheckbox/primeng7-tablecheckbox.component';
import { FirebaseComponent } from './components/DB/firebase/firebase.component';
import { DbComponent } from './components/DB/db/db.component';


export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent },
// ANDROID STUDIO
    { path: 'android-studio', component: AndroidStudioComponent },
// ANGULAR
    { path: 'angular', component: AngularComponent },
    { path: 'ng-instalacion', component: InstalacionAngularComponent },
    { path: 'ng-descripcion-elementos', component: AngularDescripcionElementosComponent },
    // ANGULAR-PRIMENG7
    { path: 'primeng-descripcion-elementos', component: Primeng7DescripcionElementosComponent },
    { path: 'primeng7-tablecheckbox', component: Primeng7TablecheckboxComponent },
// CSS
    { path: 'css', component: CssComponent },
// DART
    { path: 'dart', component: DartComponent },
// DEVELOPER
    { path: 'developer', component: DeveloperComponent },
    { path: 'super-recursos-internet', component: SuperRecursosInternetComponent },
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
// JAVA
    { path: 'java', component: JavaComponent},
// JAVASCRIPT
    { path: 'javascript', component: JavascriptComponent },
    { path: 'js-elementos', component: JsElementosComponent},
    { path: 'js-recorrer-arrays-objetos', component: JsRecorrerArraysObjetosComponent },
    { path: 'js-trabajo-fechas', component: JsTrabajoFechasComponent },
// LINUX
    { path: 'linux', component: LinuxComponent },
// KOTLIN
    { path: 'kotlin', component: KotlinComponent },
// KUBERNETES
    { path: 'kubernetes', component: KubernetesComponent },
// NET-FRAMEWORKS
    { path: 'net-framework', component: NetFrameworkComponent},
    { path: 'net-instalacion', component: NetInstalacionComponent },
    { path: 'net-descripcion-elementos', component: NetDescripcionElementosComponent },
// SENA
    { path: 'sena', component: SenaComponent },
    { path: 'ficha-actual', component: FichaActualComponent },
    { path: 'recursos-informativos', component: RecursosInformativosComponent },
// REACT
    { path: 'react', component: ReactComponent },
// SQL
    { path: 'db', component: DbComponent },
    { path: 'db-firebase', component: FirebaseComponent },
    { path: 'db-sql', component: SqlComponent },
    { path: 'db-sql-server-querys', component: SqlServerQuerysComponent },
// PHP
    { path: 'php', component: PhpComponent },
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
