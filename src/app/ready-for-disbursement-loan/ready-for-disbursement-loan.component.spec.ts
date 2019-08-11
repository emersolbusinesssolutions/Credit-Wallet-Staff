import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyForDisbursementLoanComponent } from './ready-for-disbursement-loan.component';

describe('ReadyForDisbursementLoanComponent', () => {
  let component: ReadyForDisbursementLoanComponent;
  let fixture: ComponentFixture<ReadyForDisbursementLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyForDisbursementLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyForDisbursementLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
