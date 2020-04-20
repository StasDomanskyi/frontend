import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingServiceDataComponent } from './hosting-service-data.component';

describe('HostingServiceDataComponent', () => {
  let component: HostingServiceDataComponent;
  let fixture: ComponentFixture<HostingServiceDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostingServiceDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostingServiceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
