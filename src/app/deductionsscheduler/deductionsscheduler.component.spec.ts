import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductionsschedulerComponent } from './deductionsscheduler.component';

describe('DeductionsschedulerComponent', () => {
  let component: DeductionsschedulerComponent;
  let fixture: ComponentFixture<DeductionsschedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeductionsschedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeductionsschedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
