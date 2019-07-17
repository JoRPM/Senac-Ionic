import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoaodoidaoPage } from './joaodoidao.page';

describe('JoaodoidaoPage', () => {
  let component: JoaodoidaoPage;
  let fixture: ComponentFixture<JoaodoidaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoaodoidaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoaodoidaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
