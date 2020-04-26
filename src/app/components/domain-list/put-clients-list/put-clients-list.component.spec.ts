import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutClientsListComponent } from './put-clients-list.component';

describe('PutClientsListComponent', () => {
  let component: PutClientsListComponent;
  let fixture: ComponentFixture<PutClientsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutClientsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutClientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
