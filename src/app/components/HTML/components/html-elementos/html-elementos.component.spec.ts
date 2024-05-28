import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlElementosComponent } from './html-elementos.component';

describe('HtmlElementosComponent', () => {
  let component: HtmlElementosComponent;
  let fixture: ComponentFixture<HtmlElementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlElementosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
