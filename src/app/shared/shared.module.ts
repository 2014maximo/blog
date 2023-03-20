import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderHomeComponent } from './components/slider-home/slider-home.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { FrasesComponent } from './components/frases/frases.component';
import { MenuHomeComponent } from './components/menu-home/menu-home.component';
import { FooterHomeComponent } from './components/footer-home/footer-home.component';
import { HeaderPostComponent } from './components/header-post/header-post.component';
import { AccordeonComponent } from './components/accordeon/accordeon.component';
import { IndiceContenidosComponent } from './components/indice-contenidos/indice-contenidos.component';
import { BloqueContenidosComponent } from './components/bloque-contenidos/bloque-contenidos.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GaleriaPostComponent } from './components/galeria-post/galeria-post.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { PrintCodeComponent } from './components/print-code/print-code.component';
import { PaginadorComponent } from './components/paginador/paginador.component';
import { EncabezadoCategoriaComponent } from './components/encabezado-categoria/encabezado-categoria.component';
import { GlosarioComponent } from './components/glosario/glosario.component';

@NgModule({
  declarations: [
    SliderHomeComponent,
    HeadlineComponent,
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
    GaleriaPostComponent,
    HeadlineComponent,
    PrintCodeComponent,
    PaginadorComponent,
    EncabezadoCategoriaComponent,
    GlosarioComponent,
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
    PrintCodeComponent,
    HeadlineComponent,
    HeaderPostComponent,
    HeaderHomeComponent,
    FrasesComponent,
    FooterHomeComponent,
    MenuHomeComponent,
    AccordeonComponent,
    IndiceContenidosComponent,
    BloqueContenidosComponent,
    GaleriaPostComponent,
    EncabezadoCategoriaComponent,
    PaginadorComponent,
    GlosarioComponent
  ]
})
export class SharedModule { }
