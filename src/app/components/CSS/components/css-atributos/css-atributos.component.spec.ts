import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssAtributosComponent } from './css-atributos.component';

describe('CssAtributosComponent', () => {
  let component: CssAtributosComponent;
  let fixture: ComponentFixture<CssAtributosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssAtributosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssAtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
