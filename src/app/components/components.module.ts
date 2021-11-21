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
import { NetInstalacionComponent } from './NET-FRAMEWORK/net-instalacion/net-instalacion.component';
import { FichaActualComponent } from './SENA/ficha-actual/ficha-actual.component';
import { RecursosInformativosComponent } from './SENA/recursos-informativos/recursos-informativos.component';
import { RecorrerArraysObjetosComponent } from './JAVASCRIPT/recorrer-arrays-objetos/recorrer-arrays-objetos.component';
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
    RecorrerArraysObjetosComponent,
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
    LinuxComponent
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
