import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingLoanComponent } from './processing-loan.component';

describe('ProcessingLoanComponent', () => {
  let component: ProcessingLoanComponent;
  let fixture: ComponentFixture<ProcessingLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
