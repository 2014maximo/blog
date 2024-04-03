import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '@shared/shared.module';
import { InicioComponent } from './ESTADISTICA/inicio/inicio.component';
import { JsNodeJsComponent } from './JAVASCRIPT/components/js-node-js/js-node-js.component';
import { JsInstalandoNodeConNvmComponent } from './JAVASCRIPT/components/js-instalando-node-con-nvm/js-instalando-node-con-nvm.component';

import * as Ruta from '@app/components';
import { KotlinElementosComponent } from './KOTLIN/components/kotlin-elementos/kotlin-elementos.component';
import { ReactElementosComponent } from './REACT/components/react-elementos/react-elementos.component';
import { WordpressElementosComponent } from './WORDPRESS/components/wordpress-elementos/wordpress-elementos.component';
import { NgManejoRutasComponent } from './ANGULAR/components/ng-manejo-rutas/ng-manejo-rutas.component';
import { NgModulosComponent } from './ANGULAR/components/ng-modulos/ng-modulos.component';
import { NgMicroserviciosComponent } from './ANGULAR/components/ng-microservicios/ng-microservicios.component';
import { NgPruebasUnitariasComponent } from './ANGULAR/components/ng-pruebas-unitarias/ng-pruebas-unitarias.component';
import { NetComponent } from './NET/net/net.component';
import { DevContentComponent } from './DEVELOPER/components/dev-content/dev-content.component';

// Translate
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TsInstalacionComponent } from './TYPESCRIPT/components/ts-instalacion/ts-instalacion.component';
import { JavaElementosComponent } from './JAVA/components/java-elementos/java-elementos.component';



export function HttpLoaderFactory (httpClient:HttpClient){
  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    HomeComponent,
    InicioComponent,
    JsNodeJsComponent,
    JsInstalandoNodeConNvmComponent,
    Ruta.AngularComponent,
    Ruta.NgDescripcionElementosComponent,
    Ruta.NgInstalacionComponent,
    Ruta.NgComunicacionEntreComponentesComponent,
    Ruta.NgRxjsFirstValueFromComponent,
    Ruta.NgArquitecturasComponent,
    Ruta.NetInstalacionComponent,
    Ruta.CssComponent,
    Ruta.DartComponent,
    Ruta.DeveloperComponent,
    Ruta.DevControlesVisualStudioCodeComponent,
    Ruta.DevAlgoritmosClaveComponent,
    Ruta.DevPatronesComponent,
    Ruta.DevBusquedaEmpleoComponent,
    Ruta.FlutterComponent,
    Ruta.FlutterInstalacionComponent,
    Ruta.GitComponent,
    Ruta.HtmlComponent,
    Ruta.JavaComponent,
    Ruta.JavascriptComponent,
    Ruta.LinuxComponent,
    Ruta.DevGlosarioComponent,
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
    Ruta.AndroidComponent,
    Ruta.DbFirebaseComponent,
    Ruta.DbSqlComponent,
    Ruta.DbSqlServerComponent,
    Ruta.DevSuperRecursosComponent,
    Ruta.JavaGlassfishComponent,
    Ruta.PhpElementosComponent,
    Ruta.DevDiagramasSecuenciaComponent,
    Ruta.DartElementosComponent,
    Ruta.FlutterElementosComponent,
    Ruta.EtronInstalacionComponent,
    Ruta.GitInstalacionComponent,
    Ruta.DevPrincipiosSolidComponent,
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
    NgManejoRutasComponent,
    NgModulosComponent,
    NgMicroserviciosComponent,
    NgPruebasUnitariasComponent,
    NetComponent,
    DevContentComponent,
    TsInstalacionComponent,
    JavaElementosComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  exports: [
    HomeComponent
  ]
})
export class ComponentsModule { }
