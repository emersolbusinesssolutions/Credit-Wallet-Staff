import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaaspaymentComponent } from './plaaspayment.component';

describe('PlaaspaymentComponent', () => {
  let component: PlaaspaymentComponent;
  let fixture: ComponentFixture<PlaaspaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaaspaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaaspaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
