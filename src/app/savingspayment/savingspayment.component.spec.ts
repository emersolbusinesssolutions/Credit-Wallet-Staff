import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingspaymentComponent } from './savingspayment.component';

describe('SavingspaymentComponent', () => {
  let component: SavingspaymentComponent;
  let fixture: ComponentFixture<SavingspaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingspaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingspaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
