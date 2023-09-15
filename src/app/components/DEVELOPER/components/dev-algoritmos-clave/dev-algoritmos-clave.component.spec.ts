import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevAlgoritmosClaveComponent } from './dev-algoritmos-clave.component';

describe('DevAlgoritmosClaveComponent', () => {
  let component: DevAlgoritmosClaveComponent;
  let fixture: ComponentFixture<DevAlgoritmosClaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevAlgoritmosClaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevAlgoritmosClaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
