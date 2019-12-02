import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisbursementreconcillationComponent } from './disbursementreconcillation.component';

describe('DisbursementreconcillationComponent', () => {
  let component: DisbursementreconcillationComponent;
  let fixture: ComponentFixture<DisbursementreconcillationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisbursementreconcillationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisbursementreconcillationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
