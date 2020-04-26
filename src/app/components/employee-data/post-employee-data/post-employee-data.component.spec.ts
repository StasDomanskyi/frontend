import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEmployeeDataComponent } from './post-employee-data.component';

describe('PostEmployeeDataComponent', () => {
  let component: PostEmployeeDataComponent;
  let fixture: ComponentFixture<PostEmployeeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEmployeeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEmployeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
