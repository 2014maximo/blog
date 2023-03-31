import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoPublicacionComponent } from './encabezado-publicacion.component';

describe('EncabezadoPublicacionComponent', () => {
  let component: EncabezadoPublicacionComponent;
  let fixture: ComponentFixture<EncabezadoPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadoPublicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncabezadoPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
