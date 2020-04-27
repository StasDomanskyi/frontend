import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutHostingServiceDataComponent } from './put-hosting-service-data.component';

describe('PutHostingServiceDataComponent', () => {
  let component: PutHostingServiceDataComponent;
  let fixture: ComponentFixture<PutHostingServiceDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutHostingServiceDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutHostingServiceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
