import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetFrameworkComponent } from './net-framework.component';

describe('NetFrameworkComponent', () => {
  let component: NetFrameworkComponent;
  let fixture: ComponentFixture<NetFrameworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetFrameworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
