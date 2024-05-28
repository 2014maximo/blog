import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssElementosComponent } from './css-elementos.component';

describe('CssElementosComponent', () => {
  let component: CssElementosComponent;
  let fixture: ComponentFixture<CssElementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssElementosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
