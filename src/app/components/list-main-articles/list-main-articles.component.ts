import { Component } from '@angular/core';
import { ArticleEntity } from '../../entities/article-entity';
import { TemplateEnum } from '../../enums/template-enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'list-main-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-main-articles.component.html',
  styleUrl: './list-main-articles.component.css'
})
export class ListMainArticlesComponent {

  articles: ArticleEntity[] = [
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
