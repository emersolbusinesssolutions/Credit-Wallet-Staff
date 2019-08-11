import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewverificationComponent } from './viewverification.component';

describe('ViewverificationComponent', () => {
  let component: ViewverificationComponent;
  let fixture: ComponentFixture<ViewverificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewverificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
