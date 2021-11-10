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


export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent },
// ANGULAR
    { path: 'angular-instalacion', component: InstalacionAngularComponent },
    { path: 'p-ng-descripcion-elementos', component: Primeng7DescripcionElementosComponent },
    { path: 'angular-descripcion-elementos', component: AngularDescripcionElementosComponent },
// DEVELOPER
    { path: 'super-recursos-internet', component: SuperRecursosInternetComponent },
// ESTADISTICA
    { path: 'estadistica-inicio', component: InicioComponent },
// NET-FRAMEWORKS
        { path: 'net-instalacion', component: NetInstalacionComponent },
// SENA
    { path: 'ficha-actual', component: FichaActualComponent },
    { path: 'recursos-informativos', component: RecursosInformativosComponent },
];
