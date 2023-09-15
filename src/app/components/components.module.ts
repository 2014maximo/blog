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
    KotlinElementosComponent
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
