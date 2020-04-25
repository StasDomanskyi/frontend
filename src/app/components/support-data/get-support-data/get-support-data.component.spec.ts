import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSupportDataComponent } from './get-support-data.component';

describe('GetSupportDataComponent', () => {
  let component: GetSupportDataComponent;
  let fixture: ComponentFixture<GetSupportDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSupportDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSupportDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
