import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgComunicacionEntreComponentesComponent } from './ng-comunicacion-entre-componentes.component';

describe('NgComunicacionEntreComponentesComponent', () => {
  let component: NgComunicacionEntreComponentesComponent;
  let fixture: ComponentFixture<NgComunicacionEntreComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgComunicacionEntreComponentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgComunicacionEntreComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
