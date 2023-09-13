import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlutterInstalacionComponent } from './flutter-instalacion.component';

describe('FlutterInstalacionComponent', () => {
  let component: FlutterInstalacionComponent;
  let fixture: ComponentFixture<FlutterInstalacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlutterInstalacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlutterInstalacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
