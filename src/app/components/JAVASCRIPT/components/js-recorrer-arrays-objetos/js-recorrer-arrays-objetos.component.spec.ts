import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsRecorrerArraysObjetosComponent } from './js-recorrer-arrays-objetos.component';

describe('JsRecorrerArraysObjetosComponent', () => {
  let component: JsRecorrerArraysObjetosComponent;
  let fixture: ComponentFixture<JsRecorrerArraysObjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsRecorrerArraysObjetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsRecorrerArraysObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
