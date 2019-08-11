import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductionspaidComponent } from './deductionspaid.component';

describe('DeductionspaidComponent', () => {
  let component: DeductionspaidComponent;
  let fixture: ComponentFixture<DeductionspaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeductionspaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeductionspaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
