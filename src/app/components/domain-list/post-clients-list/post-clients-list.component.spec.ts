import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostClientsListComponent } from './post-clients-list.component';

describe('PostClientsListComponent', () => {
  let component: PostClientsListComponent;
  let fixture: ComponentFixture<PostClientsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostClientsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostClientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
