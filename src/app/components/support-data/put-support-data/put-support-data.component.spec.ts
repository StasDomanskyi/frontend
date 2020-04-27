import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutSupportDataComponent } from './put-support-data.component';

describe('PutSupportDataComponent', () => {
  let component: PutSupportDataComponent;
  let fixture: ComponentFixture<PutSupportDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutSupportDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutSupportDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
