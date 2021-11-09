import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Primeng7DescripcionElementosComponent } from './primeng7-descripcion-elementos.component';

describe('Primeng7DescripcionElementosComponent', () => {
  let component: Primeng7DescripcionElementosComponent;
  let fixture: ComponentFixture<Primeng7DescripcionElementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Primeng7DescripcionElementosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Primeng7DescripcionElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
