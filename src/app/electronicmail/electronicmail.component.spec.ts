import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicmailComponent } from './electronicmail.component';

describe('ElectronicmailComponent', () => {
  let component: ElectronicmailComponent;
  let fixture: ComponentFixture<ElectronicmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
