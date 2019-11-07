import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyfordeductionsComponent } from './readyfordeductions.component';

describe('ReadyfordeductionsComponent', () => {
  let component: ReadyfordeductionsComponent;
  let fixture: ComponentFixture<ReadyfordeductionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyfordeductionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyfordeductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
