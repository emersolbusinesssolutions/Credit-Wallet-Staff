import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisburselendersComponent } from './disburselenders.component';

describe('DisburselendersComponent', () => {
  let component: DisburselendersComponent;
  let fixture: ComponentFixture<DisburselendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisburselendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisburselendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
