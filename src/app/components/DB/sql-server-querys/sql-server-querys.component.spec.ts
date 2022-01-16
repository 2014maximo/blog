import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlServerQuerysComponent } from './sql-server-querys.component';

describe('SqlServerQuerysComponent', () => {
  let component: SqlServerQuerysComponent;
  let fixture: ComponentFixture<SqlServerQuerysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlServerQuerysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlServerQuerysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
