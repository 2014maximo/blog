import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Primeng7TablecheckboxComponent } from './primeng7-tablecheckbox.component';

describe('Primeng7TablecheckboxComponent', () => {
  let component: Primeng7TablecheckboxComponent;
  let fixture: ComponentFixture<Primeng7TablecheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Primeng7TablecheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Primeng7TablecheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
