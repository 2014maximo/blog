import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGhPagesComponent } from './ng-gh-pages.component';

describe('NgGhPagesComponent', () => {
  let component: NgGhPagesComponent;
  let fixture: ComponentFixture<NgGhPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgGhPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGhPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
