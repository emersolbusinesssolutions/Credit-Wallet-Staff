import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecomplaintsComponent } from './createcomplaints.component';

describe('CreatecomplaintsComponent', () => {
  let component: CreatecomplaintsComponent;
  let fixture: ComponentFixture<CreatecomplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecomplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
