import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressElementosComponent } from './wordpress-elementos.component';

describe('WordpressElementosComponent', () => {
  let component: WordpressElementosComponent;
  let fixture: ComponentFixture<WordpressElementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpressElementosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpressElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
