import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetInstalacionComponent } from './net-instalacion.component';

describe('NetInstalacionComponent', () => {
  let component: NetInstalacionComponent;
  let fixture: ComponentFixture<NetInstalacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetInstalacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetInstalacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
