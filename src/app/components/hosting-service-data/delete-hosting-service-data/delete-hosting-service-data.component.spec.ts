import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHostingServiceDataComponent } from './delete-hosting-service-data.component';

describe('DeleteHostingServiceDataComponent', () => {
  let component: DeleteHostingServiceDataComponent;
  let fixture: ComponentFixture<DeleteHostingServiceDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteHostingServiceDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHostingServiceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
