import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './ESTADISTICA/inicio/inicio.component';
import { NetInstalacionComponent } from './NET/net-instalacion/net-instalacion.component';
import { DartComponent } from './DART/dart/dart.component';
import { DeveloperComponent } from './DEVELOPER/developer/developer.component';
import { FlutterComponent } from './FLUTTER/flutter/flutter.component';
import { FlutterInstalacionComponent } from './FLUTTER/components/flutter-instalacion/flutter-instalacion.component';
import { GitComponent } from './GIT/git/git.component';
import { HtmlComponent } from './HTML/html/html.component';
import { JavaComponent } from './JAVA/java/java.component';
import { JavascriptComponent } from './JAVASCRIPT/javascript/javascript.component';
import { LinuxComponent } from './LINUX/linux/linux.component';
import { NetFrameworkComponent } from './NET/net-framework/net-framework.component';
import { ElectronComponent } from './ELECTRON/electron/electron.component';
import { KotlinComponent } from './KOTLIN/kotlin/kotlin.component';
import { EstadisticaComponent } from './ESTADISTICA/components/estadistica/estadistica.component';
import { AstroSIngresoComponent } from './ESTADISTICA/components/astro-s-ingreso/astro-s-ingreso.component';
import { NetDescripcionElementosComponent } from './NET/net-descripcion-elementos/net-descripcion-elementos.component';
import { SenaComponent } from './SENA/sena/sena.component';
import { ReactComponent } from './REACT/react/react.component';
import { JsTrabajoFechasComponent } from './JAVASCRIPT/js-trabajo-fechas/js-trabajo-fechas.component';
import { JsRecorrerArraysObjetosComponent } from './JAVASCRIPT/js-recorrer-arrays-objetos/js-recorrer-arrays-objetos.component';
import { PhpComponent } from './PHP/php/php.component';
import { WordpressComponent } from './WORDPRESS/wordpress/wordpress.component';
import { JsElementosComponent } from './JAVASCRIPT/components/js-elementos/js-elementos.component';
import { KubernetesComponent } from './KUBERNETES/kubernetes/kubernetes.component';
import { DbComponent } from './DB/db/db.component';
import { HtmlEtiquetasComponent } from './HTML/components/html-etiquetas/html-etiquetas.component';
import { DevGlosarioComponent } from './DEVELOPER/dev-glosario/dev-glosario.component';
import { JavaInstalacionComponent } from './JAVA/components/java-instalacion/java-instalacion.component';
import { JsNodeJsComponent } from './JAVASCRIPT/js-node-js/js-node-js.component';
import { JsInstalandoNodeConNvmComponent } from './JAVASCRIPT/js-instalando-node-con-nvm/js-instalando-node-con-nvm.component';
import { DevControlesVisualStudioCodeComponent } from './DEVELOPER/components/dev-controles-visual-studio-code/dev-controles-visual-studio-code.component';
import { NgDescripcionElementosComponent } from './ANGULAR/components/ng-descripcion-elementos/ng-descripcion-elementos.component';
import { DevSuperRecursosComponent } from './DEVELOPER/components/dev-super-recursos/dev-super-recursos.component';
import { SenaFichaActualComponent } from './SENA/sena-ficha-actual/sena-ficha-actual.component';
import { SenaRecursosInformativosComponent } from './SENA/sena-recursos-informativos/sena-recursos-informativos.component';
import { JavaGlassfishComponent } from './JAVA/components/java-glassfish/java-glassfish.component';
import { JsTypescriptElementosComponent } from './JAVASCRIPT/js-typescript-elementos/js-typescript-elementos.component';
import { PhpElementosComponent } from './PHP/php-elementos/php-elementos.component';
import { NgComunicacionEntreComponentesComponent } from './ANGULAR/components/ng-comunicacion-entre-componentes/ng-comunicacion-entre-componentes.component';
import { DevDiagramasSecuenciaComponent } from './DEVELOPER/components/dev-diagramas-secuencia/dev-diagramas-secuencia.component';
import { GestionFormularioComponent } from './ESTADISTICA/gestion-formulario/gestion-formulario.component';
import { DartElementosComponent } from './DART/components/dart-elementos/dart-elementos.component';
import { FlutterElementosComponent } from './FLUTTER/components/flutter-elementos/flutter-elementos.component';
import { EtronInstalacionComponent } from './ELECTRON/components/etron-instalacion/etron-instalacion.component';
import { GitInstalacionComponent } from './GIT/components/git-instalacion/git-instalacion.component';
import { DevPrincipiosSolidComponent } from './DEVELOPER/components/dev-principios-solid/dev-principios-solid.component';
import { NgRxjsFirstValueFromComponent } from './ANGULAR/components/ng-rxjs-first-value-from/ng-rxjs-first-value-from.component';
import { GitErroresComponent } from './GIT/components/git-errores/git-errores.component';
import { LxComandosMUsadosComponent } from './LINUX/components/lx-comandos-m-usados/lx-comandos-m-usados.component';
import { TypescriptComponent } from './TYPESCRIPT/typescript/typescript.component';
import { TsElementosComponent } from './TYPESCRIPT/components/ts-elementos/ts-elementos.component';

import { AndroidComponent, ElementosAndroidStudioComponent } from '@app/components';
// ANGULAR
import { AngularComponent, NgInstalacionComponent } from '@app/components';
// DB
import { DbFirebaseComponent, DbSqlServerComponent, DbSqlComponent } from '@app/components';
// CSS
import { CssComponent, CssAtributosComponent } from '@app/components';
import { EtronElementosComponent } from './ELECTRON/components/etron-elementos/etron-elementos.component';


@NgModule({
  declarations: [
    HomeComponent,
    InicioComponent,
    NetInstalacionComponent,
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
    SenaComponent,
    ReactComponent,
    JsTrabajoFechasComponent,
    JsRecorrerArraysObjetosComponent,
    PhpComponent,
    WordpressComponent,
    JsElementosComponent,
    KubernetesComponent,
    DbComponent,
    HtmlEtiquetasComponent,
    DevGlosarioComponent,
    JavaInstalacionComponent,
    JsNodeJsComponent,
    JsInstalandoNodeConNvmComponent,
    DevControlesVisualStudioCodeComponent,
    NgDescripcionElementosComponent,
    NgInstalacionComponent,
    AndroidComponent,
    DbFirebaseComponent,
    DbSqlComponent,
    DbSqlServerComponent,
    DevSuperRecursosComponent,
    SenaFichaActualComponent,
    SenaRecursosInformativosComponent,
    JavaGlassfishComponent,
    JsTypescriptElementosComponent,
    PhpElementosComponent,
    NgComunicacionEntreComponentesComponent,
    DevDiagramasSecuenciaComponent,
    GestionFormularioComponent,
    DartElementosComponent,
    FlutterElementosComponent,
    EtronInstalacionComponent,
    GitInstalacionComponent,
    DevPrincipiosSolidComponent,
    NgRxjsFirstValueFromComponent,
    GitErroresComponent,
    LxComandosMUsadosComponent,
    TypescriptComponent,
    TsElementosComponent,
    ElementosAndroidStudioComponent,
    CssAtributosComponent,
    EtronElementosComponent
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
