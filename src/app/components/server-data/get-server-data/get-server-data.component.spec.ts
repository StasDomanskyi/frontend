import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetServerDataComponent } from './get-server-data.component';

describe('GetServerDataComponent', () => {
  let component: GetServerDataComponent;
  let fixture: ComponentFixture<GetServerDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetServerDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetServerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
