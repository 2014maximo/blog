import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevContentComponent } from './dev-content.component';

describe('DevContentComponent', () => {
  let component: DevContentComponent;
  let fixture: ComponentFixture<DevContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
