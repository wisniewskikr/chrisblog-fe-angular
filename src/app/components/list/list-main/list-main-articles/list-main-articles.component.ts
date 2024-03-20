import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleEntity } from '../../../../entities/article-entity';
import { ListMainArticlesArticleComponent } from './list-main-articles-article/list-main-articles-article.component';

@Component({
  selector: 'list-main-articles',
  standalone: true,
  imports: [CommonModule, ListMainArticlesArticleComponent],
  templateUrl: './list-main-articles.component.html',
  styleUrl: './list-main-articles.component.css'
})
export class ListMainArticlesComponent {

  @Input() articles: ArticleEntity[] = [];  

}
