import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidationcreateComponent } from './liquidationcreate.component';

describe('LiquidationcreateComponent', () => {
  let component: LiquidationcreateComponent;
  let fixture: ComponentFixture<LiquidationcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidationcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidationcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
