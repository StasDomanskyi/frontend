import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClientsListComponent } from './delete-clients-list.component';

describe('DeleteClientsListComponent', () => {
  let component: DeleteClientsListComponent;
  let fixture: ComponentFixture<DeleteClientsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteClientsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteClientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
