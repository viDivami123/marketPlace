import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyVisitedItemsComponent } from './recently-visited-items.component';

describe('RecentlyVisitedItemsComponent', () => {
  let component: RecentlyVisitedItemsComponent;
  let fixture: ComponentFixture<RecentlyVisitedItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentlyVisitedItemsComponent]
    });
    fixture = TestBed.createComponent(RecentlyVisitedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
