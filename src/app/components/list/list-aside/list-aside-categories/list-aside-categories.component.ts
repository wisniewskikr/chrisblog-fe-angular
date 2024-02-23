import { Component } from '@angular/core';
import { CategoryEntity } from '../../../../entities/category-entity';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'list-aside-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-aside-categories.component.html',
  styleUrl: './list-aside-categories.component.css'
})
export class ListAsideCategoriesComponent {

  categories: CategoryEntity[] = [
    {
      id: 2,
      name: 'Category 2',
      articles: []
    },
    {
      id: 3,
      name: 'Category 3',
      articles: []
    }
  ];

  selectedCategory: number = 1;

}
