import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceContenidosComponent } from './indice-contenidos.component';

describe('IndiceContenidosComponent', () => {
  let component: IndiceContenidosComponent;
  let fixture: ComponentFixture<IndiceContenidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceContenidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceContenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
