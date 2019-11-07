import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestpaymentComponent } from './interestpayment.component';

describe('InterestpaymentComponent', () => {
  let component: InterestpaymentComponent;
  let fixture: ComponentFixture<InterestpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
