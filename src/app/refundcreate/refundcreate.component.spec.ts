import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundcreateComponent } from './refundcreate.component';

describe('RefundcreateComponent', () => {
  let component: RefundcreateComponent;
  let fixture: ComponentFixture<RefundcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
