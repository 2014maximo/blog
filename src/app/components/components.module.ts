import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { And001Component } from './ANDROID/and001/and001.component';
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



@NgModule({
  declarations: [
    And001Component,
    HomeComponent,
    InstalacionAngularComponent,
    PruebasUnitariasComponent,
    SuperRecursosInternetComponent,
    InicioComponent,
    Primeng7DescripcionElementosComponent,
    AngularDescripcionElementosComponent,
    NetInstalacionComponent,
    FichaActualComponent,
    RecursosInformativosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    And001Component,
    HomeComponent
  ]
})
export class ComponentsModule { }
