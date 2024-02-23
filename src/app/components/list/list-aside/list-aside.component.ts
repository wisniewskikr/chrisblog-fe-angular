import { Component } from '@angular/core';
import { ListAsideCategoriesComponent } from './list-aside-categories/list-aside-categories.component';
import { ListAsideSortingComponent } from './list-aside-sorting/list-aside-sorting.component';

@Component({
  selector: 'list-aside',
  standalone: true,
  imports: [ListAsideCategoriesComponent, ListAsideSortingComponent],
  templateUrl: './list-aside.component.html',
  styleUrl: './list-aside.component.css'
})
export class ListAsideComponent {

}
