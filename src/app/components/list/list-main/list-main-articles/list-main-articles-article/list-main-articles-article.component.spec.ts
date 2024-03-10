import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMainArticlesArticleComponent } from './list-main-articles-article.component';

describe('ListMainArticlesArticleComponent', () => {
  let component: ListMainArticlesArticleComponent;
  let fixture: ComponentFixture<ListMainArticlesArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMainArticlesArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMainArticlesArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
