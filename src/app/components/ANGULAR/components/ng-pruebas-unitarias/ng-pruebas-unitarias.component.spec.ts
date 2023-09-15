import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPruebasUnitariasComponent } from './ng-pruebas-unitarias.component';

describe('NgPruebasUnitariasComponent', () => {
  let component: NgPruebasUnitariasComponent;
  let fixture: ComponentFixture<NgPruebasUnitariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgPruebasUnitariasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPruebasUnitariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
