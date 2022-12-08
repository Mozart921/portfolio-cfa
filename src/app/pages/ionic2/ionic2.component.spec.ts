import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ionic2Component } from './ionic2.component';

describe('Ionic2Component', () => {
  let component: Ionic2Component;
  let fixture: ComponentFixture<Ionic2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ionic2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ionic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
