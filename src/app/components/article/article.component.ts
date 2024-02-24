import { Component } from '@angular/core';
import { ArticleEntity } from '../../entities/article-entity';
import { TemplateEnum } from '../../enums/template-enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

  article: ArticleEntity = {
    id: 1,
    author: 'Author 1',
    category: {
      id: 1,
      name: 'Category 1',
      articles: []
    },
    content: 'Content 1',
    date: 'Date 1',
    description: 'Description 1',
    pageDescription: 'Page Description 1',
    tags: [],
    template: TemplateEnum.LINK_DOCUMENT,
    title: 'Title 1',
    url: 'Url 1'
  };

}
