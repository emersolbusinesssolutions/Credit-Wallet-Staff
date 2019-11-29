import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentoneComponent } from './investmentone.component';

describe('InvestmentoneComponent', () => {
  let component: InvestmentoneComponent;
  let fixture: ComponentFixture<InvestmentoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
