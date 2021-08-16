import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderHomeComponent } from './shared/header-home/header-home.component';
import { SliderHomeComponent } from './shared/slider-home/slider-home.component';
import { HomeComponent } from './components/home/home.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { And001Component } from './components/ANDROID/and001/and001.component';
import { FrasesComponent } from './shared/frases/frases.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderHomeComponent,
    SliderHomeComponent,
    HomeComponent,
    And001Component,
    FrasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot (ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
