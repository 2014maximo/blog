import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgArquitecturasComponent } from './ng-arquitecturas.component';

describe('NgArquitecturasComponent', () => {
  let component: NgArquitecturasComponent;
  let fixture: ComponentFixture<NgArquitecturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgArquitecturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgArquitecturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
