import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidationviewComponent } from './liquidationview.component';

describe('LiquidationviewComponent', () => {
  let component: LiquidationviewComponent;
  let fixture: ComponentFixture<LiquidationviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidationviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidationviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
