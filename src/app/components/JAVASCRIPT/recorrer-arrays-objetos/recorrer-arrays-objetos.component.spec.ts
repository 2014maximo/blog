import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorrerArraysObjetosComponent } from './recorrer-arrays-objetos.component';

describe('RecorrerArraysObjetosComponent', () => {
  let component: RecorrerArraysObjetosComponent;
  let fixture: ComponentFixture<RecorrerArraysObjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecorrerArraysObjetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecorrerArraysObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
