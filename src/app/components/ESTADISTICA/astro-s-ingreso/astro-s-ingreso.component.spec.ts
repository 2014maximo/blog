import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroSIngresoComponent } from './astro-s-ingreso.component';

describe('AstroSIngresoComponent', () => {
  let component: AstroSIngresoComponent;
  let fixture: ComponentFixture<AstroSIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstroSIngresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroSIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
