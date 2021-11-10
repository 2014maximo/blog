import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaActualComponent } from './ficha-actual.component';

describe('FichaActualComponent', () => {
  let component: FichaActualComponent;
  let fixture: ComponentFixture<FichaActualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaActualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
