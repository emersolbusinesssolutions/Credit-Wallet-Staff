import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutodeductionsComponent } from './autodeductions.component';

describe('AutodeductionsComponent', () => {
  let component: AutodeductionsComponent;
  let fixture: ComponentFixture<AutodeductionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutodeductionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutodeductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
