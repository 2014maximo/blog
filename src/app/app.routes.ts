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
import { RecorrerArraysObjetosComponent } from './components/JAVASCRIPT/recorrer-arrays-objetos/recorrer-arrays-objetos.component';
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
import { SqlComponent } from './components/SQL/sql/sql.component';
import { SqlServerQuerysComponent } from './components/SQL/sql-server-querys/sql-server-querys.component';
import { SenaComponent } from './components/SENA/sena/sena.component';


export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent },
// ANDROID STUDIO
    { path: 'android-studio', component: AndroidStudioComponent },
// ANGULAR
    { path: 'angular', component: AngularComponent },
    { path: 'angular-instalacion', component: InstalacionAngularComponent },
    { path: 'p-ng-descripcion-elementos', component: Primeng7DescripcionElementosComponent },
    { path: 'angular-descripcion-elementos', component: AngularDescripcionElementosComponent },
// CSS
    { path: 'css', component: CssComponent },
// DART
    { path: 'dart', component: DartComponent },
// DEVELOPER
    { path: 'developer', component: DeveloperComponent },
    { path: 'super-recursos-internet', component: SuperRecursosInternetComponent },
// ESTADISTICA
    { path: 'astro-sol-ingreso', component: AstroSIngresoComponent },
    { path: 'estadistica-inicio', component: InicioComponent },
    { path: 'estadistica', component: EstadisticaComponent },
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
    { path: 'recorrer-arrays-objetos', component: RecorrerArraysObjetosComponent },
    { path: 'javascript', component: JavascriptComponent },
// LINUX
    { path: 'linux', component: LinuxComponent },
// KOTLIN
    { path: 'kotlin', component: KotlinComponent },
// NET-FRAMEWORKS
    { path: 'net-framework', component: NetFrameworkComponent},
    { path: 'net-instalacion', component: NetInstalacionComponent },
    { path: 'net-descripcion-elementos', component: NetDescripcionElementosComponent },
// SENA
    { path: 'sena', component: SenaComponent },
    { path: 'ficha-actual', component: FichaActualComponent },
    { path: 'recursos-informativos', component: RecursosInformativosComponent },
// SQL
    { path: 'sql', component: SqlComponent },
    { path: 'sql-server-querys', component: SqlServerQuerysComponent },

];

function recorrerComponentes(array: any) {
    
    let lista;

    for(let i=0; i> array.length; i++){
        lista = [{ path: array.ruta, component: array.componente },]
    }
    return lista
}
