import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveLoanComponent } from './active-loan.component';

describe('ActiveLoanComponent', () => {
  let component: ActiveLoanComponent;
  let fixture: ComponentFixture<ActiveLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
