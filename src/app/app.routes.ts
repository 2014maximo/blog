import { Routes } from '@angular/router';
import { And001Component } from './components/ANDROID/and001/and001.component';
import { HomeComponent } from './components/home/home.component';


export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: HomeComponent },
    { path: 'and001', component: And001Component }
];
