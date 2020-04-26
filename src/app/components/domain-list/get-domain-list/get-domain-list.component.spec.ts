import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDomainListComponent } from './get-domain-list.component';

describe('GetDomainListComponent', () => {
  let component: GetDomainListComponent;
  let fixture: ComponentFixture<GetDomainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDomainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDomainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
