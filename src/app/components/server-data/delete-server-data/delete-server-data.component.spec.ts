import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteServerDataComponent } from './delete-server-data.component';

describe('DeleteServerDataComponent', () => {
  let component: DeleteServerDataComponent;
  let fixture: ComponentFixture<DeleteServerDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteServerDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteServerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
