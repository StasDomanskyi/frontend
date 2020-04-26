import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHostingServiceDataComponent } from './post-hosting-service-data.component';

describe('PostHostingServiceDataComponent', () => {
  let component: PostHostingServiceDataComponent;
  let fixture: ComponentFixture<PostHostingServiceDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostHostingServiceDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostHostingServiceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
