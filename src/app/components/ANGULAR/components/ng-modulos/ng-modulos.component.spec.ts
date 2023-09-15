import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModulosComponent } from './ng-modulos.component';

describe('NgModulosComponent', () => {
  let component: NgModulosComponent;
  let fixture: ComponentFixture<NgModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgModulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
