import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxjsFirstValueFromComponent } from './ng-rxjs-first-value-from.component';

describe('NgRxjsFirstValueFromComponent', () => {
  let component: NgRxjsFirstValueFromComponent;
  let fixture: ComponentFixture<NgRxjsFirstValueFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgRxjsFirstValueFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRxjsFirstValueFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
