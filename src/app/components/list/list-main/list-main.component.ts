import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMainSortingComponent } from './list-main-sorting/list-main-sorting.component';
import { ListMainPaginationComponent } from './list-main-pagination/list-main-pagination.component';
import { ListMainArticlesComponent } from './list-main-articles/list-main-articles.component';
import { ArticleEntity } from '../../../entities/article-entity';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { ArticleRequest } from '../../../dtos/article-request';

@Component({
  selector: 'list-main',
  standalone: true,
  imports: [CommonModule, ListMainArticlesComponent, ListMainSortingComponent, ListMainPaginationComponent],
  templateUrl: './list-main.component.html',
  styleUrl: './list-main.component.css'
})
export class ListMainComponent implements OnInit {

  articles: ArticleEntity[] = [];
  categoryId: number|null = null;
  tagId: number|null = null;
  page: number|null = null;
  sorting: string|null = null;
  searchText: string|null = null;
  pages: number[] = [];
  disablePrevious: boolean = false; 
  disableNext: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) {}

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {

      this.categoryId = Number(params['categoryId']);
      this.sorting = params['sorting'];
      this.page = Number(params['page']);

      if (this.categoryId == null || this.page == null || this.sorting == null) {
        throw new Error("Atributes 'categoryId', 'page' and 'sorting' are required.");
      }

      this.handleArtilceApi(new ArticleRequest(this.categoryId, this.tagId, this.page, this.sorting, this.searchText));
            
    });

    this.activatedRoute.queryParams.subscribe(params => {

      const searchTextParam = params['searchtext'];
      const tagIdParam = params['tagid'];

      if (searchTextParam == undefined && tagIdParam == undefined &&
        this.searchText == null && this.tagId == null) {
          return;
      }

      this.searchText = searchTextParam ?? null;
      this.tagId = (tagIdParam != undefined) ? Number(tagIdParam) : null;

      if (this.categoryId == null || this.page == null || this.sorting == null) {
        throw new Error("Atributes 'categoryId', 'page' and 'sorting' are required.");
      }

      this.handleArtilceApi(new ArticleRequest(this.categoryId, this.tagId, this.page, this.sorting, this.searchText));
      
    });    

  }

  handleArtilceApi(articleRequest: ArticleRequest): void {

    let response = this.articleService.findArticles(articleRequest);
    response.subscribe((data)=>{      
      
      this.articles = data.articles;
      this.pages = data.pages;
      this.disablePrevious = data.disablePrevious;
      this.disableNext = data.disableNext;

    });

  }

}
