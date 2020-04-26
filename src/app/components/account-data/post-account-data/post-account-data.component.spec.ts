import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAccountDataComponent } from './post-account-data.component';

describe('PostAccountDataComponent', () => {
  let component: PostAccountDataComponent;
  let fixture: ComponentFixture<PostAccountDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAccountDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAccountDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
