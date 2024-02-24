import { Component } from '@angular/core';
import { ArticleContentComponent } from './article-content/article-content.component';
import { ArticleEntity } from '../../entities/article-entity';
import { TemplateEnum } from '../../enums/template-enum';

@Component({
  selector: 'article',
  standalone: true,
  imports: [ArticleContentComponent],
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
    template: TemplateEnum.CONTENT,
    title: 'Title 1',
    url: 'Url 1'
  };

}
