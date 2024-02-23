import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMainPaginationComponent } from './list-main-pagination.component';

describe('ListMainPaginationComponent', () => {
  let component: ListMainPaginationComponent;
  let fixture: ComponentFixture<ListMainPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMainPaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMainPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
