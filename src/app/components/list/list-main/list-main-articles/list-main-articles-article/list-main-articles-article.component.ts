import { AfterViewInit, Component, Input } from '@angular/core';
import { ArticleEntity } from '../../../../../entities/article-entity';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'list-main-articles-article',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-main-articles-article.component.html',
  styleUrl: './list-main-articles-article.component.css'
})
export class ListMainArticlesArticleComponent implements AfterViewInit {

  @Input() article: ArticleEntity|null = null;

  ngAfterViewInit(): void {
    $.getScript('./../../../../../assets/js/main.js');
  }

}
