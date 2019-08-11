import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdeductionsComponent } from './newdeductions.component';

describe('NewdeductionsComponent', () => {
  let component: NewdeductionsComponent;
  let fixture: ComponentFixture<NewdeductionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdeductionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdeductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
