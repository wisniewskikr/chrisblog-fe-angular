import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAsideSearchComponent } from './list-aside-search.component';

describe('ListAsideSearchComponent', () => {
  let component: ListAsideSearchComponent;
  let fixture: ComponentFixture<ListAsideSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAsideSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAsideSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
