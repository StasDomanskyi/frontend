import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSupportDataComponent } from './delete-support-data.component';

describe('DeleteSupportDataComponent', () => {
  let component: DeleteSupportDataComponent;
  let fixture: ComponentFixture<DeleteSupportDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSupportDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSupportDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
