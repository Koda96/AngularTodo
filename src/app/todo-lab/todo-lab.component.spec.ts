import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLabComponent } from './todo-lab.component';

describe('TodoLabComponent', () => {
  let component: TodoLabComponent;
  let fixture: ComponentFixture<TodoLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
