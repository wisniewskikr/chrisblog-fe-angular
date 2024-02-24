import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AboutComponent } from './components/about/about.component';
import { ArticleComponent } from './components/article/article.component';

export const routes: Routes = [
    { path: '', redirectTo: 'category/home/sorting/date_decreasing/page/1', pathMatch: 'full' },
    { path: 'category/:category/sorting/:sorting/page/:page', component: ListComponent },
    { path: 'about', component: AboutComponent },
    { path: 'article/:id', component: ArticleComponent }
];
