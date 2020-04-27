import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutAccountDataComponent } from './put-account-data.component';

describe('PutAccountDataComponent', () => {
  let component: PutAccountDataComponent;
  let fixture: ComponentFixture<PutAccountDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutAccountDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutAccountDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
