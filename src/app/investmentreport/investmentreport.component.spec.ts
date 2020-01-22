import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentreportComponent } from './investmentreport.component';

describe('InvestmentreportComponent', () => {
  let component: InvestmentreportComponent;
  let fixture: ComponentFixture<InvestmentreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
