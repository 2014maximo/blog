import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevGlosarioComponent } from './dev-glosario.component';

describe('DevGlosarioComponent', () => {
  let component: DevGlosarioComponent;
  let fixture: ComponentFixture<DevGlosarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevGlosarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevGlosarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
