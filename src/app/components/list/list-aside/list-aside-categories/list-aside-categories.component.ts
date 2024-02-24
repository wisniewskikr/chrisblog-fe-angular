import { Component } from '@angular/core';
import { CategoryEntity } from '../../../../entities/category-entity';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

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
      id: 1,
      name: 'Category 1',
      articles: []
    },
    {
      id: 2,
      name: 'Category 2',
      articles: []
    }
  ];

  categoryId: number|null = null;
  soring: string|null = null;
  page: string|null = null;
  searchText: string|null = null;
  tagId: string|null = null;
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    this.activatedRoute.params.subscribe(params => {
      this.categoryId = Number(params['categoryId']);
      this.soring = params['sorting'];
      this.page = params['page'];
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.searchText = params['searchtext'];
      this.tagId = params['tagid'];
    });

  }

  onClick(category: number) {
    this.categoryId = category;
    this.tagId = null;
    this.searchText = null;
    const path = `category/${this.categoryId}/sorting/${this.soring}/page/${this.page}`;
    this.router.navigate([path], { queryParams: { searchtext: this.searchText, tagid: this.tagId } });
  }

}
