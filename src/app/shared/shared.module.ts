import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderHomeComponent } from './slider-home/slider-home.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { FrasesComponent } from './frases/frases.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { FooterHomeComponent } from './footer-home/footer-home.component';
import { HeaderPostComponent } from './header-post/header-post.component';

@NgModule({
  declarations: [
    SliderHomeComponent,
    HeaderPostComponent,
    HeaderHomeComponent,
    FrasesComponent,
    MenuHomeComponent,
    FooterHomeComponent,
    HeaderPostComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  exports: [
    SliderHomeComponent,
    HeaderPostComponent,
    HeaderHomeComponent,
    FrasesComponent,
    FooterHomeComponent,
    MenuHomeComponent
  ]
})
export class SharedModule { }
