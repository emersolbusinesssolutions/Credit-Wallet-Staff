import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendersviewComponent } from './lendersview.component';

describe('LendersviewComponent', () => {
  let component: LendersviewComponent;
  let fixture: ComponentFixture<LendersviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendersviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendersviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
