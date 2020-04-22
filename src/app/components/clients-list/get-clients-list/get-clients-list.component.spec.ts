import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClientsListComponent } from './get-clients-list.component';

describe('GetClientsListComponent', () => {
  let component: GetClientsListComponent;
  let fixture: ComponentFixture<GetClientsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetClientsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetClientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
