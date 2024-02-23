import { Component } from '@angular/core';
import { ListAsideCategoriesComponent } from './list-aside-categories/list-aside-categories.component';

@Component({
  selector: 'list-aside',
  standalone: true,
  imports: [ListAsideCategoriesComponent],
  templateUrl: './list-aside.component.html',
  styleUrl: './list-aside.component.css'
})
export class ListAsideComponent {

}
