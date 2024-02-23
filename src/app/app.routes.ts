import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

export const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'about', component: AboutMeComponent }
];
