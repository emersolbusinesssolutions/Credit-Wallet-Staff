import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelloanComponent } from './cancelloan.component';

describe('CancelloanComponent', () => {
  let component: CancelloanComponent;
  let fixture: ComponentFixture<CancelloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
