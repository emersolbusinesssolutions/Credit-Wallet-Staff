import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursepaystackComponent } from './disbursepaystack.component';

describe('DisbursepaystackComponent', () => {
  let component: DisbursepaystackComponent;
  let fixture: ComponentFixture<DisbursepaystackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisbursepaystackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisbursepaystackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
