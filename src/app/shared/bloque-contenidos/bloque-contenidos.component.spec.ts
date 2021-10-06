import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueContenidosComponent } from './bloque-contenidos.component';

describe('BloqueContenidosComponent', () => {
  let component: BloqueContenidosComponent;
  let fixture: ComponentFixture<BloqueContenidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloqueContenidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqueContenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
