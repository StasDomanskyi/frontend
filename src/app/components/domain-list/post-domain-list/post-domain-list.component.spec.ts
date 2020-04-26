import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDomainListComponent } from './post-domain-list.component';

describe('PostDomainListComponent', () => {
  let component: PostDomainListComponent;
  let fixture: ComponentFixture<PostDomainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDomainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDomainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
