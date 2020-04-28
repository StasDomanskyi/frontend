import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccountDataComponent } from './delete-account-data.component';

describe('DeleteAccountDataComponent', () => {
  let component: DeleteAccountDataComponent;
  let fixture: ComponentFixture<DeleteAccountDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAccountDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAccountDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
