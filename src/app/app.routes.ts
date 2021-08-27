import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AngAaaComponent } from './components/ANGULAR/ang-aaa/ang-aaa.component';
import { InstalacionComponent } from './components/ANGULAR/instalacion/instalacion.component';


export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent },
    { path: 'angular-instalacion', component: InstalacionComponent }
];
