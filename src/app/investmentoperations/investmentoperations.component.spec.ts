import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentoperationsComponent } from './investmentoperations.component';

describe('InvestmentoperationsComponent', () => {
  let component: InvestmentoperationsComponent;
  let fixture: ComponentFixture<InvestmentoperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentoperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentoperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
