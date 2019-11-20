import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryoverviewComponent } from './recoveryoverview.component';

describe('RecoveryoverviewComponent', () => {
  let component: RecoveryoverviewComponent;
  let fixture: ComponentFixture<RecoveryoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
