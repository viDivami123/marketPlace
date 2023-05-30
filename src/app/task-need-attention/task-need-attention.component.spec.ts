import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskNeedAttentionComponent } from './task-need-attention.component';

describe('TaskNeedAttentionComponent', () => {
  let component: TaskNeedAttentionComponent;
  let fixture: ComponentFixture<TaskNeedAttentionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskNeedAttentionComponent]
    });
    fixture = TestBed.createComponent(TaskNeedAttentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
