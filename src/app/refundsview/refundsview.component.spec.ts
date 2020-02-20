import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundsviewComponent } from './refundsview.component';

describe('RefundsviewComponent', () => {
  let component: RefundsviewComponent;
  let fixture: ComponentFixture<RefundsviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundsviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
