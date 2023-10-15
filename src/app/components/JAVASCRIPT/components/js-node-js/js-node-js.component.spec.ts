import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsNodeJsComponent } from './js-node-js.component';

describe('JsNodeJsComponent', () => {
  let component: JsNodeJsComponent;
  let fixture: ComponentFixture<JsNodeJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsNodeJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsNodeJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
