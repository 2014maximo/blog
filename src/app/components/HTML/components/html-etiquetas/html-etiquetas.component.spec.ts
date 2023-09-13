import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlEtiquetasComponent } from './html-etiquetas.component';

describe('HtmlEtiquetasComponent', () => {
  let component: HtmlEtiquetasComponent;
  let fixture: ComponentFixture<HtmlEtiquetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlEtiquetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlEtiquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
