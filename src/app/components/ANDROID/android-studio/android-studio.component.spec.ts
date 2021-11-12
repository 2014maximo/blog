import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidStudioComponent } from './android-studio.component';

describe('AndroidStudioComponent', () => {
  let component: AndroidStudioComponent;
  let fixture: ComponentFixture<AndroidStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroidStudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
