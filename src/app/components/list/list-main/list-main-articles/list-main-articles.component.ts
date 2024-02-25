import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleEntity } from '../../../../entities/article-entity';
import { TemplateEnum } from '../../../../enums/template-enum';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ArticleService } from '../../../../services/article.service';
import { ArticleRequest } from '../../../../dtos/article-request';

@Component({
  selector: 'list-main-articles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-main-articles.component.html',
  styleUrl: './list-main-articles.component.css'
})
export class ListMainArticlesComponent implements OnInit {

  // articles: ArticleEntity[] = [
  //   {
  //     id: 1, 
  //     pageDescription: 'Page description 1',
  //     author: 'Author 1',
  //     content: 'Content 1',
  //     date: 'Date 1',
  //     description: 'Description 1',
  //     template: TemplateEnum.CONTENT,
  //     title: 'Title 1',
  //     url: 'Url 1',
  //     category: {
  //       id: 1,
  //       name: 'Category 1',
  //       articles: []
  //     },
  //     tags: [
  //       {
  //         id: 1,
  //         name: 'Tag 1',
  //         articles: []
  //       }
  //     ]
  //   },
  //   {
  //     id: 2, 
  //     pageDescription: 'Page description 2',
  //     author: 'Author 2',
  //     content: 'Content 2',
  //     date: 'Date 2',
  //     description: 'Description 2',
  //     template: TemplateEnum.CONTENT,
  //     title: 'Title 2',
  //     url: 'Url 2',
  //     category: {
  //       id: 2,
  //       name: 'Category 2',
  //       articles: []
  //     },
  //     tags: [
  //       {
  //         id: 2,
  //         name: 'Tag 2',
  //         articles: []
  //       }
  //     ]
  //   }
  // ];

  articles: ArticleEntity[] = [];
  categoryId: number|null = null;
  tagId: number|null = null;
  page: number|null = null;
  sorting: string|null = null;
  searchText: string|null = null;

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
    });

  }

}
