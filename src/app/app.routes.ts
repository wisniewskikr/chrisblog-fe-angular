import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'about', component: AboutComponent }
];
