import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutDomainListComponent } from './put-domain-list.component';

describe('PutClientsListComponent', () => {
  let component: PutDomainListComponent;
  let fixture: ComponentFixture<PutDomainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutDomainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutDomainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
