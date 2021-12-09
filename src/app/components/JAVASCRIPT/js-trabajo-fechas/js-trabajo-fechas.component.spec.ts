import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTrabajoFechasComponent } from './js-trabajo-fechas.component';

describe('JsTrabajoFechasComponent', () => {
  let component: JsTrabajoFechasComponent;
  let fixture: ComponentFixture<JsTrabajoFechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsTrabajoFechasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsTrabajoFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
