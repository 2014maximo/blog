import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsElementosComponent } from './js-elementos.component';

describe('JsElementosComponent', () => {
  let component: JsElementosComponent;
  let fixture: ComponentFixture<JsElementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsElementosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
