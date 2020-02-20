import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidationlistComponent } from './liquidationlist.component';

describe('LiquidationlistComponent', () => {
  let component: LiquidationlistComponent;
  let fixture: ComponentFixture<LiquidationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
