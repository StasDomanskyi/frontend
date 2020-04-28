import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAdditionalDataComponent } from './delete-additional-data.component';

describe('DeleteAdditionalDataComponent', () => {
  let component: DeleteAdditionalDataComponent;
  let fixture: ComponentFixture<DeleteAdditionalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAdditionalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAdditionalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
