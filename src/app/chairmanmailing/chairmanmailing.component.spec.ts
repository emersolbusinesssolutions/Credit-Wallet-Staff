import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairmanmailingComponent } from './chairmanmailing.component';

describe('ChairmanmailingComponent', () => {
  let component: ChairmanmailingComponent;
  let fixture: ComponentFixture<ChairmanmailingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChairmanmailingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChairmanmailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
