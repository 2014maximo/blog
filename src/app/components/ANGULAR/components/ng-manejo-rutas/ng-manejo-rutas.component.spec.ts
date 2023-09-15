import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgManejoRutasComponent } from './ng-manejo-rutas.component';

describe('NgManejoRutasComponent', () => {
  let component: NgManejoRutasComponent;
  let fixture: ComponentFixture<NgManejoRutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgManejoRutasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgManejoRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
