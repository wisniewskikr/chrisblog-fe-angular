import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMainSortingComponent } from './list-main-sorting/list-main-sorting.component';
import { ListMainPaginationComponent } from './list-main-pagination/list-main-pagination.component';
import { ListMainArticlesComponent } from './list-main-articles/list-main-articles.component';
import { ArticleEntity } from '../../../entities/article-entity';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../services/article.service';
import { PaginationService } from '../../../services/pagination.service';
import { ArticleRequest } from '../../../dtos/article-request';
import { PaginationDto } from '../../../dtos/pagination-dto';

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

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService, 
    private paginationService: PaginationService) {}

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

      if (this.page == null) {
        throw new Error("Attribute 'page' is required.");
      }
      this.paginationService.updatePagination(new PaginationDto(this.page, data.pages, data.disablePrevious, data.disableNext));

    });

  }

}
