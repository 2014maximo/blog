import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtronElementosComponent } from './etron-elementos.component';

describe('EtronElementosComponent', () => {
  let component: EtronElementosComponent;
  let fixture: ComponentFixture<EtronElementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtronElementosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtronElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
