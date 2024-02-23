import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMainArticlesComponent } from './list-main-articles.component';

describe('ListMainArticlesComponent', () => {
  let component: ListMainArticlesComponent;
  let fixture: ComponentFixture<ListMainArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMainArticlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMainArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
