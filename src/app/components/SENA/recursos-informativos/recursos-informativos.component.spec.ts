import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosInformativosComponent } from './recursos-informativos.component';

describe('RecursosInformativosComponent', () => {
  let component: RecursosInformativosComponent;
  let fixture: ComponentFixture<RecursosInformativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursosInformativosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursosInformativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
