import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDomainListComponent } from './delete-domain-list.component';

describe('DeleteDomainListComponent', () => {
  let component: DeleteDomainListComponent;
  let fixture: ComponentFixture<DeleteDomainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDomainListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDomainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
