import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitingDisbursementLoanComponent } from './awaiting-disbursement-loan.component';

describe('AwaitingDisbursementLoanComponent', () => {
  let component: AwaitingDisbursementLoanComponent;
  let fixture: ComponentFixture<AwaitingDisbursementLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwaitingDisbursementLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwaitingDisbursementLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
