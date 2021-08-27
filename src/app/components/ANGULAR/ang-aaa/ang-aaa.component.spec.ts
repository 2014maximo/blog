import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngAaaComponent } from './ang-aaa.component';

describe('AngAaaComponent', () => {
  let component: AngAaaComponent;
  let fixture: ComponentFixture<AngAaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngAaaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngAaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
