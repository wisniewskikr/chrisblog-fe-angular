import { Component } from '@angular/core';
import { ListAsideCategoriesComponent } from './list-aside-categories/list-aside-categories.component';
import { ListAsideSortingComponent } from './list-aside-sorting/list-aside-sorting.component';
import { ListAsideSearchComponent } from './list-aside-search/list-aside-search.component';
import { ListAsideTagComponent } from './list-aside-tag/list-aside-tag.component';

@Component({
  selector: 'list-aside',
  standalone: true,
  imports: [ListAsideCategoriesComponent, ListAsideSortingComponent, ListAsideSearchComponent, ListAsideTagComponent],
  templateUrl: './list-aside.component.html',
  styleUrl: './list-aside.component.css'
})
export class ListAsideComponent {

}
