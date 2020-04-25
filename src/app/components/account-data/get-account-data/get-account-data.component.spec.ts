import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAccountDataComponent } from './get-account-data.component';

describe('GetAccountDataComponent', () => {
  let component: GetAccountDataComponent;
  let fixture: ComponentFixture<GetAccountDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAccountDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAccountDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
