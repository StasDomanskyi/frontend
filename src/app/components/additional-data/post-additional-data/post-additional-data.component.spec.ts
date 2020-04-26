import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAdditionalDataComponent } from './post-additional-data.component';

describe('PostAdditionalDataComponent', () => {
  let component: PostAdditionalDataComponent;
  let fixture: ComponentFixture<PostAdditionalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAdditionalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAdditionalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
