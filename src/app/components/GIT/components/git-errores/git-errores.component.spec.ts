import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitErroresComponent } from './git-errores.component';

describe('GitErroresComponent', () => {
  let component: GitErroresComponent;
  let fixture: ComponentFixture<GitErroresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitErroresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitErroresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
