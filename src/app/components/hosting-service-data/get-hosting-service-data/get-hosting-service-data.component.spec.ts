import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHostingServiceDataComponent } from './get-hosting-service-data.component';

describe('GetHostingServiceDataComponent', () => {
  let component: GetHostingServiceDataComponent;
  let fixture: ComponentFixture<GetHostingServiceDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetHostingServiceDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHostingServiceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
