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
import { AccordeonComponent } from './accordeon/accordeon.component';
import { IndiceContenidosComponent } from './indice-contenidos/indice-contenidos.component';
import { BloqueContenidosComponent } from './bloque-contenidos/bloque-contenidos.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SliderHomeComponent,
    HeaderPostComponent,
    HeaderHomeComponent,
    FrasesComponent,
    MenuHomeComponent,
    FooterHomeComponent,
    HeaderPostComponent,
    AccordeonComponent,
    IndiceContenidosComponent,
    BloqueContenidosComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    SliderHomeComponent,
    HeaderPostComponent,
    HeaderHomeComponent,
    FrasesComponent,
    FooterHomeComponent,
    MenuHomeComponent,
    AccordeonComponent,
    IndiceContenidosComponent,
    BloqueContenidosComponent,
  ]
})
export class SharedModule { }
