import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDescripcionElementosComponent } from './angular-descripcion-elementos.component';

describe('AngularDescripcionElementosComponent', () => {
  let component: AngularDescripcionElementosComponent;
  let fixture: ComponentFixture<AngularDescripcionElementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDescripcionElementosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDescripcionElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
