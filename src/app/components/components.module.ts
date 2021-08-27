import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { And001Component } from './ANDROID/and001/and001.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AngAaaComponent } from './ANGULAR/ang-aaa/ang-aaa.component';
import { InstalacionComponent } from './ANGULAR/instalacion/instalacion.component';



@NgModule({
  declarations: [
    And001Component,
    HomeComponent,
    AngAaaComponent,
    InstalacionComponent
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
