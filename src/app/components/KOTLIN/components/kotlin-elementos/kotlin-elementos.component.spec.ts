import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KotlinElementosComponent } from './kotlin-elementos.component';

describe('KotlinElementosComponent', () => {
  let component: KotlinElementosComponent;
  let fixture: ComponentFixture<KotlinElementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KotlinElementosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KotlinElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
