import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevPrincipiosSolidComponent } from './dev-principios-solid.component';

describe('DevPrincipiosSolidComponent', () => {
  let component: DevPrincipiosSolidComponent;
  let fixture: ComponentFixture<DevPrincipiosSolidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevPrincipiosSolidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevPrincipiosSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
