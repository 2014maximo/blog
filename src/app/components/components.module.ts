import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { And001Component } from './ANDROID/and001/and001.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { InstalacionAngularComponent } from './ANGULAR/instalacion-angular/instalacion-angular.component';
import { PruebasUnitariasComponent } from './ANGULAR/pruebas-unitarias/pruebas-unitarias.component';



@NgModule({
  declarations: [
    And001Component,
    HomeComponent,
    InstalacionAngularComponent,
    PruebasUnitariasComponent
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