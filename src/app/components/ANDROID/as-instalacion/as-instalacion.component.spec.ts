import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsInstalacionComponent } from './as-instalacion.component';

describe('AsInstalacionComponent', () => {
  let component: AsInstalacionComponent;
  let fixture: ComponentFixture<AsInstalacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsInstalacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsInstalacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
