import { Component } from '@angular/core';
import { ArticleContentComponent } from './article-content/article-content.component';

@Component({
  selector: 'article',
  standalone: true,
  imports: [ArticleContentComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

}
