import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutEmployeeDataComponent } from './put-employee-data.component';

describe('PutEmployeeDataComponent', () => {
  let component: PutEmployeeDataComponent;
  let fixture: ComponentFixture<PutEmployeeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutEmployeeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutEmployeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
