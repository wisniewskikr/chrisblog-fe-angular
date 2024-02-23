import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAsideTagComponent } from './list-aside-tag.component';

describe('ListAsideTagComponent', () => {
  let component: ListAsideTagComponent;
  let fixture: ComponentFixture<ListAsideTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAsideTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAsideTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
