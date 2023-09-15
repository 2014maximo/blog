import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactElementosComponent } from './react-elementos.component';

describe('ReactElementosComponent', () => {
  let component: ReactElementosComponent;
  let fixture: ComponentFixture<ReactElementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactElementosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
