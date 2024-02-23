import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAsideFooterComponent } from './list-aside-footer.component';

describe('ListAsideFooterComponent', () => {
  let component: ListAsideFooterComponent;
  let fixture: ComponentFixture<ListAsideFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAsideFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAsideFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
