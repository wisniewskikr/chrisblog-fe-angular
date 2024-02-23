import { Component } from '@angular/core';
import { Article } from '../../entities/article-entity';
import { CommonModule } from '@angular/common';
import { TemplateEnum } from '../../enums/template-enum';
import { ListMainSortingComponent } from '../list-main-sorting/list-main-sorting.component';
import { ListMainPaginationComponent } from '../list-main-pagination/list-main-pagination.component';

@Component({
  selector: 'list-main',
  standalone: true,
  imports: [CommonModule, ListMainSortingComponent, ListMainPaginationComponent],
  templateUrl: './list-main.component.html',
  styleUrl: './list-main.component.css'
})
export class ListMainComponent {

  articles: Article[] = [
    {
      id: 1, 
      pageDescription: 'Page description 1',
      author: 'Author 1',
      content: 'Content 1',
      date: 'Date 1',
      description: 'Description 1',
      template: TemplateEnum.CONTENT,
      title: 'Title 1',
      url: 'Url 1',
      category: {
        id: 1,
        name: 'Category 1',
        articles: []
      },
      tags: [
        {
          id: 1,
          name: 'Tag 1',
          articles: []
        }
      ]
    },
    // {
    //   id: 2, 
    //   pageDescription: 'Page description 2',
    //   author: 'Author 2',
    //   content: 'Content 2',
    //   date: 'Date 2',
    //   description: 'Description 2',
    //   template: TemplateEnum.CONTENT,
    //   title: 'Title 2',
    //   url: 'Url 2',
    //   category: {
    //     id: 2,
    //     name: 'Category 2',
    //     articles: []
    //   },
    //   tags: [
    //     {
    //       id: 2,
    //       name: 'Tag 2',
    //       articles: []
    //     }
    //   ]
    // }
  ];

}
