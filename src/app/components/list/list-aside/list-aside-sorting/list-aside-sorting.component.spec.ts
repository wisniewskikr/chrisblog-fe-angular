import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAsideSortingComponent } from './list-aside-sorting.component';

describe('ListAsideSortingComponent', () => {
  let component: ListAsideSortingComponent;
  let fixture: ComponentFixture<ListAsideSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAsideSortingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAsideSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
