import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { InstalacionAngularComponent } from './ANGULAR/instalacion-angular/instalacion-angular.component';
import { PruebasUnitariasComponent } from './ANGULAR/pruebas-unitarias/pruebas-unitarias.component';
import { SuperRecursosInternetComponent } from './DEVELOPER/super-recursos-internet/super-recursos-internet.component';
import { InicioComponent } from './ESTADISTICA/inicio/inicio.component';
import { Primeng7DescripcionElementosComponent } from './ANGULAR/primeng7-descripcion-elementos/primeng7-descripcion-elementos.component';
import { AngularDescripcionElementosComponent } from './ANGULAR/angular-descripcion-elementos/angular-descripcion-elementos.component';
import { NetInstalacionComponent } from './NET/net-instalacion/net-instalacion.component';
import { FichaActualComponent } from './SENA/ficha-actual/ficha-actual.component';
import { RecursosInformativosComponent } from './SENA/recursos-informativos/recursos-informativos.component';
import { AndroidStudioComponent } from './ANDROID/android-studio/android-studio.component';
import { CssComponent } from './CSS/css/css.component';
import { AngularComponent } from './ANGULAR/angular/angular.component';
import { DartComponent } from './DART/dart/dart.component';
import { DeveloperComponent } from './DEVELOPER/developer/developer.component';
import { FlutterComponent } from './FLUTTER/flutter/flutter.component';
import { FlutterInstalacionComponent } from './FLUTTER/flutter-instalacion/flutter-instalacion.component';
import { GitComponent } from './GIT/git/git.component';
import { HtmlComponent } from './HTML/html/html.component';
import { JavaComponent } from './JAVA/java/java.component';
import { JavascriptComponent } from './JAVASCRIPT/javascript/javascript.component';
import { LinuxComponent } from './LINUX/linux/linux.component';
import { NetFrameworkComponent } from './NET/net-framework/net-framework.component';
import { ElectronComponent } from './ELECTRON/electron/electron.component';
import { KotlinComponent } from './KOTLIN/kotlin/kotlin.component';
import { EstadisticaComponent } from './ESTADISTICA/estadistica/estadistica.component';
import { AstroSIngresoComponent } from './ESTADISTICA/astro-s-ingreso/astro-s-ingreso.component';
import { NetDescripcionElementosComponent } from './NET/net-descripcion-elementos/net-descripcion-elementos.component';
import { SqlComponent } from './SQL/sql/sql.component';
import { SqlServerQuerysComponent } from './SQL/sql-server-querys/sql-server-querys.component';
import { SenaComponent } from './SENA/sena/sena.component';
import { ReactComponent } from './REACT/react/react.component';
import { JsTrabajoFechasComponent } from './JAVASCRIPT/js-trabajo-fechas/js-trabajo-fechas.component';
import { JsRecorrerArraysObjetosComponent } from './JAVASCRIPT/js-recorrer-arrays-objetos/js-recorrer-arrays-objetos.component';
import { PhpComponent } from './PHP/php/php.component';
import { WordpressComponent } from './WORDPRESS/wordpress/wordpress.component';
import { JsElementosComponent } from './JAVASCRIPT/js-elementos/js-elementos.component';
import { KubernetesComponent } from './KUBERNETES/kubernetes/kubernetes.component';
import { Primeng7TablecheckboxComponent } from './ANGULAR/primeng7-tablecheckbox/primeng7-tablecheckbox.component';



@NgModule({
  declarations: [
    HomeComponent,
    InstalacionAngularComponent,
    PruebasUnitariasComponent,
    SuperRecursosInternetComponent,
    InicioComponent,
    Primeng7DescripcionElementosComponent,
    AngularDescripcionElementosComponent,
    NetInstalacionComponent,
    FichaActualComponent,
    RecursosInformativosComponent,
    AndroidStudioComponent,
    CssComponent,
    AngularComponent,
    DartComponent,
    DeveloperComponent,
    FlutterComponent,
    FlutterInstalacionComponent,
    GitComponent,
    HtmlComponent,
    JavaComponent,
    JavascriptComponent,
    LinuxComponent,
    NetFrameworkComponent,
    ElectronComponent,
    KotlinComponent,
    EstadisticaComponent,
    AstroSIngresoComponent,
    NetDescripcionElementosComponent,
    SqlComponent,
    SqlServerQuerysComponent,
    SenaComponent,
    ReactComponent,
    JsTrabajoFechasComponent,
    JsRecorrerArraysObjetosComponent,
    PhpComponent,
    WordpressComponent,
    JsElementosComponent,
    KubernetesComponent,
    Primeng7TablecheckboxComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ComponentsModule { }
