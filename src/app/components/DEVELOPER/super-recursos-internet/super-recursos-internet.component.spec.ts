import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperRecursosInternetComponent } from './super-recursos-internet.component';

describe('SuperRecursosInternetComponent', () => {
  let component: SuperRecursosInternetComponent;
  let fixture: ComponentFixture<SuperRecursosInternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperRecursosInternetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperRecursosInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
