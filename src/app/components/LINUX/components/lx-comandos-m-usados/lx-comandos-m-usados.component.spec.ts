import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LxComandosMUsadosComponent } from './lx-comandos-m-usados.component';

describe('LxComandosMUsadosComponent', () => {
  let component: LxComandosMUsadosComponent;
  let fixture: ComponentFixture<LxComandosMUsadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LxComandosMUsadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LxComandosMUsadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
