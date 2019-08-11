import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedLoanComponent } from './complete-loan.component';

describe('CompletedLoanComponent', () => {
  let component: CompletedLoanComponent;
  let fixture: ComponentFixture<CompletedLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
