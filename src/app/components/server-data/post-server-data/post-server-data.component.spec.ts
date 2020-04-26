import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostServerDataComponent } from './post-server-data.component';

describe('PostServerDataComponent', () => {
  let component: PostServerDataComponent;
  let fixture: ComponentFixture<PostServerDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostServerDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostServerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
