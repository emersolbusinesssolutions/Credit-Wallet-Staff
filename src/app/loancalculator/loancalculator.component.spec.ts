import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoancalculatorComponent } from './loancalculator.component';

describe('LoancalculatorComponent', () => {
  let component: LoancalculatorComponent;
  let fixture: ComponentFixture<LoancalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoancalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoancalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
