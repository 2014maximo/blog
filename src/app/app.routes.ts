import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InstalacionAngularComponent } from './components/ANGULAR/instalacion-angular/instalacion-angular.component';
import { SuperRecursosInternetComponent } from './components/DEVELOPER/super-recursos-internet/super-recursos-internet.component';
import { InicioComponent } from './components/ESTADISTICA/inicio/inicio.component';
import { Primeng7DescripcionElementosComponent } from './components/ANGULAR/primeng7-descripcion-elementos/primeng7-descripcion-elementos.component';
import { AngularDescripcionElementosComponent } from './components/ANGULAR/angular-descripcion-elementos/angular-descripcion-elementos.component';
import { NetInstalacionComponent } from './components/NET-FRAMEWORK/net-instalacion/net-instalacion.component';
import { FichaActualComponent } from './components/SENA/ficha-actual/ficha-actual.component';
import { RecursosInformativosComponent } from './components/SENA/recursos-informativos/recursos-informativos.component';
import { RecorrerArraysObjetosComponent } from './components/JAVASCRIPT/recorrer-arrays-objetos/recorrer-arrays-objetos.component';
import { AndroidStudioComponent } from './components/ANDROID/android-studio/android-studio.component';
import { AngularComponent } from './components/ANGULAR/angular/angular.component';
import { CssComponent } from './components/CSS/css/css.component';
import { DartComponent } from './components/DART/dart/dart.component';
import { DeveloperComponent } from './components/DEVELOPER/developer/developer.component';


export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent },
// ANDROID STUDIO
    { path: 'android-studio', component: AndroidStudioComponent },
// ANGULAR
    { path: 'angular', component: AngularComponent },
    { path: 'angular-instalacion', component: InstalacionAngularComponent },
    { path: 'p-ng-descripcion-elementos', component: Primeng7DescripcionElementosComponent },
    { path: 'angular-descripcion-elementos', component: AngularDescripcionElementosComponent },
// CSS
    { path: 'css', component: CssComponent },
// DART
    { path: 'dart', component: DartComponent },
// DEVELOPER
    { path: 'developer', component: DeveloperComponent },
    { path: 'super-recursos-internet', component: SuperRecursosInternetComponent },
// ESTADISTICA
    { path: 'estadistica-inicio', component: InicioComponent },
// JAVASCRIPT
    { path: 'recorrer-arrays-objetos', component: RecorrerArraysObjetosComponent },
// NET-FRAMEWORKS
        { path: 'net-instalacion', component: NetInstalacionComponent },
// SENA
    { path: 'ficha-actual', component: FichaActualComponent },
    { path: 'recursos-informativos', component: RecursosInformativosComponent },
];
