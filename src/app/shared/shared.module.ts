import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderHomeComponent } from './slider-home/slider-home.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { FrasesComponent } from './frases/frases.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';

@NgModule({
  declarations: [
    SliderHomeComponent,
    HeaderHomeComponent,
    FrasesComponent,
    MenuHomeComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  exports: [
    SliderHomeComponent,
    HeaderHomeComponent,
    FrasesComponent,
    MenuHomeComponent
  ]
})
export class SharedModule { }
