import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetDescripcionElementosComponent } from './net-descripcion-elementos.component';

describe('NetDescripcionElementosComponent', () => {
  let component: NetDescripcionElementosComponent;
  let fixture: ComponentFixture<NetDescripcionElementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetDescripcionElementosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetDescripcionElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
