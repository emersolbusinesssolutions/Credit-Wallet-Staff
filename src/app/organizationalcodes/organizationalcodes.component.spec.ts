import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalcodesComponent } from './organizationalcodes.component';

describe('OrganizationalcodesComponent', () => {
  let component: OrganizationalcodesComponent;
  let fixture: ComponentFixture<OrganizationalcodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationalcodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationalcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
