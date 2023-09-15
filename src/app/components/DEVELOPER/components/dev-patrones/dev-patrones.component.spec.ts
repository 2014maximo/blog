import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevPatronesComponent } from './dev-patrones.component';

describe('DevPatronesComponent', () => {
  let component: DevPatronesComponent;
  let fixture: ComponentFixture<DevPatronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevPatronesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevPatronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
