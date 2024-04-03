import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaElementosComponent } from './java-elementos.component';

describe('JavaElementosComponent', () => {
  let component: JavaElementosComponent;
  let fixture: ComponentFixture<JavaElementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaElementosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
