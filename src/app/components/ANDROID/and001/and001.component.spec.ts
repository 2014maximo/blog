import { ComponentFixture, TestBed } from '@angular/core/testing';

import { And001Component } from './and001.component';

describe('And001Component', () => {
  let component: And001Component;
  let fixture: ComponentFixture<And001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ And001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(And001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
