import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevBusquedaEmpleoComponent } from './dev-busqueda-empleo.component';

describe('DevBusquedaEmpleoComponent', () => {
  let component: DevBusquedaEmpleoComponent;
  let fixture: ComponentFixture<DevBusquedaEmpleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevBusquedaEmpleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevBusquedaEmpleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
