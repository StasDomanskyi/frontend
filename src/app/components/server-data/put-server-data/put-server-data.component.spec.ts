import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutServerDataComponent } from './put-server-data.component';

describe('PutClientsListComponent', () => {
  let component: PutServerDataComponent;
  let fixture: ComponentFixture<PutServerDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutServerDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutServerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
