import { Component, OnInit } from '@angular/core';
import { CategoryEntity } from '../../../../entities/category-entity';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'list-aside-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-aside-categories.component.html',
  styleUrl: './list-aside-categories.component.css'
})
export class ListAsideCategoriesComponent implements OnInit {

  categories: CategoryEntity[] = [];
  categoryId: number|null = null;
  soring: string|null = null;
  page: string|null = null;
  searchText: string|null = null;
  tagId: string|null = null;
  
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private categoryService: CategoryService) {}
  
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.categoryId = Number(params['categoryId']);
      this.soring = params['sorting'];
      this.page = params['page'];
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.searchText = params['searchtext'];
      this.tagId = params['tagid'];
    });
    
    let response = this.categoryService.findCategories();
    response.subscribe((data)=>{      
      this.categories = data.categories;
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
