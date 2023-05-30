import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOrderedItemsComponent } from './top-ordered-items.component';

describe('TopOrderedItemsComponent', () => {
  let component: TopOrderedItemsComponent;
  let fixture: ComponentFixture<TopOrderedItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopOrderedItemsComponent]
    });
    fixture = TestBed.createComponent(TopOrderedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
