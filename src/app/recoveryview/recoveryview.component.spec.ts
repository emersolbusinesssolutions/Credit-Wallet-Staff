import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryviewComponent } from './recoveryview.component';

describe('RecoveryviewComponent', () => {
  let component: RecoveryviewComponent;
  let fixture: ComponentFixture<RecoveryviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
