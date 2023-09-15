import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMicroserviciosComponent } from './ng-microservicios.component';

describe('NgMicroserviciosComponent', () => {
  let component: NgMicroserviciosComponent;
  let fixture: ComponentFixture<NgMicroserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMicroserviciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMicroserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
