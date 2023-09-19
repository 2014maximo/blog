import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './ESTADISTICA/inicio/inicio.component';
import { JsNodeJsComponent } from './JAVASCRIPT/js-node-js/js-node-js.component';
import { JsInstalandoNodeConNvmComponent } from './JAVASCRIPT/js-instalando-node-con-nvm/js-instalando-node-con-nvm.component';
import { DevControlesVisualStudioCodeComponent } from './DEVELOPER/components/dev-controles-visual-studio-code/dev-controles-visual-studio-code.component';

import * as Ruta from '@app/components';
import { KotlinElementosComponent } from './KOTLIN/components/kotlin-elementos/kotlin-elementos.component';
import { ReactElementosComponent } from './REACT/components/react-elementos/react-elementos.component';
import { WordpressElementosComponent } from './WORDPRESS/components/wordpress-elementos/wordpress-elementos.component';
import { NgArquitecturasComponent } from './ANGULAR/components/ng-arquitecturas/ng-arquitecturas.component';
import { NgManejoRutasComponent } from './ANGULAR/components/ng-manejo-rutas/ng-manejo-rutas.component';
import { NgModulosComponent } from './ANGULAR/components/ng-modulos/ng-modulos.component';
import { NgMicroserviciosComponent } from './ANGULAR/components/ng-microservicios/ng-microservicios.component';
import { NgPruebasUnitariasComponent } from './ANGULAR/components/ng-pruebas-unitarias/ng-pruebas-unitarias.component';
import { DevAlgoritmosClaveComponent } from './DEVELOPER/components/dev-algoritmos-clave/dev-algoritmos-clave.component';
import { DevPatronesComponent } from './DEVELOPER/components/dev-patrones/dev-patrones.component';
import { DevBusquedaEmpleoComponent } from './DEVELOPER/components/dev-busqueda-empleo/dev-busqueda-empleo.component';


@NgModule({
  declarations: [
    HomeComponent,
    InicioComponent,
    JsNodeJsComponent,
    JsInstalandoNodeConNvmComponent,
    DevControlesVisualStudioCodeComponent,
    Ruta.NetInstalacionComponent,
    Ruta.CssComponent,
    Ruta.AngularComponent,
    Ruta.DartComponent,
    Ruta.DeveloperComponent,
    Ruta.FlutterComponent,
    Ruta.FlutterInstalacionComponent,
    Ruta.GitComponent,
    Ruta.HtmlComponent,
    Ruta.JavaComponent,
    Ruta.JavascriptComponent,
    Ruta.LinuxComponent,
    Ruta.NetFrameworkComponent,
    Ruta.ElectronComponent,
    Ruta.KotlinComponent,
    Ruta.NetDescripcionElementosComponent,
    Ruta.ReactComponent,
    Ruta.JsTrabajoFechasComponent,
    Ruta.JsRecorrerArraysObjetosComponent,
    Ruta.PhpComponent,
    Ruta.WordpressComponent,
    Ruta.JsElementosComponent,
    Ruta.KubernetesComponent,
    Ruta.DbComponent,
    Ruta.HtmlEtiquetasComponent,
    Ruta.JavaInstalacionComponent,
    Ruta.NgDescripcionElementosComponent,
    Ruta.NgInstalacionComponent,
    Ruta.AndroidComponent,
    Ruta.DbFirebaseComponent,
    Ruta.DbSqlComponent,
    Ruta.DbSqlServerComponent,
    Ruta.DevSuperRecursosComponent,
    Ruta.JavaGlassfishComponent,
    Ruta.PhpElementosComponent,
    Ruta.NgComunicacionEntreComponentesComponent,
    Ruta.DevDiagramasSecuenciaComponent,
    Ruta.DartElementosComponent,
    Ruta.FlutterElementosComponent,
    Ruta.EtronInstalacionComponent,
    Ruta.GitInstalacionComponent,
    Ruta.DevPrincipiosSolidComponent,
    Ruta.NgRxjsFirstValueFromComponent,
    Ruta.GitErroresComponent,
    Ruta.LxComandosMUsadosComponent,
    Ruta.TypescriptComponent,
    Ruta.TsElementosComponent,
    Ruta.ElementosAndroidStudioComponent,
    Ruta.CssAtributosComponent,
    Ruta.EtronElementosComponent,
    KotlinElementosComponent,
    ReactElementosComponent,
    WordpressElementosComponent,
    NgArquitecturasComponent,
    NgManejoRutasComponent,
    NgModulosComponent,
    NgMicroserviciosComponent,
    NgPruebasUnitariasComponent,
    DevAlgoritmosClaveComponent,
    DevPatronesComponent,
    DevBusquedaEmpleoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class ComponentsModule { }
