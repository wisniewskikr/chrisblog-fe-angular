import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMainSortingComponent } from './list-main-sorting.component';

describe('ListMainSortingComponent', () => {
  let component: ListMainSortingComponent;
  let fixture: ComponentFixture<ListMainSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMainSortingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMainSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
