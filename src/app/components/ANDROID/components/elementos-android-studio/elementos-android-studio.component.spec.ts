import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosAndroidStudioComponent } from './elementos-android-studio.component';

describe('ElementosAndroidStudioComponent', () => {
  let component: ElementosAndroidStudioComponent;
  let fixture: ComponentFixture<ElementosAndroidStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementosAndroidStudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementosAndroidStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
