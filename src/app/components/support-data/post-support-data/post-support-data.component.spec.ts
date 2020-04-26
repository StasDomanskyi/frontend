import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSupportDataComponent } from './post-support-data.component';

describe('PostClientsListComponent', () => {
  let component: PostSupportDataComponent;
  let fixture: ComponentFixture<PostSupportDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSupportDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSupportDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
