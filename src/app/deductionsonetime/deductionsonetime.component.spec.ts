import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductionsonetimeComponent } from './deductionsonetime.component';

describe('DeductionsonetimeComponent', () => {
  let component: DeductionsonetimeComponent;
  let fixture: ComponentFixture<DeductionsonetimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeductionsonetimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeductionsonetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
