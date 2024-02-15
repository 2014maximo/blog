import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsInstalacionComponent } from './ts-instalacion.component';

describe('TsInstalacionComponent', () => {
  let component: TsInstalacionComponent;
  let fixture: ComponentFixture<TsInstalacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsInstalacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsInstalacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
