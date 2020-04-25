import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportDataComponent } from './support-data.component';

describe('SupportDataComponent', () => {
  let component: SupportDataComponent;
  let fixture: ComponentFixture<SupportDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
