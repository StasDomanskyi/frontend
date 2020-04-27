import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutAdditionalDataComponent } from './put-additional-data.component';

describe('PutAdditionalDataComponent', () => {
  let component: PutAdditionalDataComponent;
  let fixture: ComponentFixture<PutAdditionalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutAdditionalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutAdditionalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
