import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceLinksComponent } from './indice-links.component';

describe('IndiceLinksComponent', () => {
  let component: IndiceLinksComponent;
  let fixture: ComponentFixture<IndiceLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
