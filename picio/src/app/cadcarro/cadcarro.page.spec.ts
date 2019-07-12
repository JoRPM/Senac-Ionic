import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadcarroPage } from './cadcarro.page';

describe('CadcarroPage', () => {
  let component: CadcarroPage;
  let fixture: ComponentFixture<CadcarroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadcarroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadcarroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
