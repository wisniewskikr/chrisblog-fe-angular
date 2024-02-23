import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAsideCategoriesComponent } from './list-aside-categories.component';

describe('ListAsideCategoriesComponent', () => {
  let component: ListAsideCategoriesComponent;
  let fixture: ComponentFixture<ListAsideCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAsideCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAsideCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
