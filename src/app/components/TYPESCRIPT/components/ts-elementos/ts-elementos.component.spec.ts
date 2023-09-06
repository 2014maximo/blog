import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsElementosComponent } from './ts-elementos.component';

describe('TsElementosComponent', () => {
  let component: TsElementosComponent;
  let fixture: ComponentFixture<TsElementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsElementosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
