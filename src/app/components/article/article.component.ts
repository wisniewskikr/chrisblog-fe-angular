import { Component, OnInit } from '@angular/core';
import { ArticleEntity } from '../../entities/article-entity';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {

  article: ArticleEntity|null = null;

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) {}

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      
      let response = this.articleService.findArticleById(Number(params['id']));
      response.subscribe((data)=>{  
        this.article = data;
      });

    });

  }

}
