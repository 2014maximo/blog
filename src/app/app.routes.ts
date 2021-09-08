import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InstalacionAngularComponent } from './components/ANGULAR/instalacion-angular/instalacion-angular.component';


export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent },
    { path: 'angular-instalacion', component: InstalacionAngularComponent }
];
