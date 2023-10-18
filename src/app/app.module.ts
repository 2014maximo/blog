import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './components/ESTADISTICA/store/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './components/ESTADISTICA/store/effects/index';
import { AngularFireModule } from '@angular/fire/compat';

// Translate
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function HttpLoaderFactory (httpClient:HttpClient){
  return new TranslateHttpLoader(httpClient,'assets/i18n/','.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ComponentsModule,
    AngularFireModule.initializeApp(environment.firebase, 'trucos-pa-desarrollo'),
    RouterModule.forRoot (ROUTES),
    StoreModule.forRoot( appReducers ),
    EffectsModule.forRoot( EffectsArray ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
