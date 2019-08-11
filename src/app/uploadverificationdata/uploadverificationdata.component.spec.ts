import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadverificationdataComponent } from './uploadverificationdata.component';

describe('UploadverificationdataComponent', () => {
  let component: UploadverificationdataComponent;
  let fixture: ComponentFixture<UploadverificationdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadverificationdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadverificationdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
