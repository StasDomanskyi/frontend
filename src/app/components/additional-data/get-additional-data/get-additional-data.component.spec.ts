import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAdditionalDataComponent } from './get-additional-data.component';

describe('GetAdditionalDataComponent', () => {
  let component: GetAdditionalDataComponent;
  let fixture: ComponentFixture<GetAdditionalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAdditionalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAdditionalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
