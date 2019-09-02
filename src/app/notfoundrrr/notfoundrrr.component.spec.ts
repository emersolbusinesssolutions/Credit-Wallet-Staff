import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundrrrComponent } from './notfoundrrr.component';

describe('NotfoundrrrComponent', () => {
  let component: NotfoundrrrComponent;
  let fixture: ComponentFixture<NotfoundrrrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotfoundrrrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundrrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
