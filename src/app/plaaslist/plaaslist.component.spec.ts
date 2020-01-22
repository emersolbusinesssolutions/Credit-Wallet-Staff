import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaaslistComponent } from './plaaslist.component';

describe('PlaaslistComponent', () => {
  let component: PlaaslistComponent;
  let fixture: ComponentFixture<PlaaslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaaslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
