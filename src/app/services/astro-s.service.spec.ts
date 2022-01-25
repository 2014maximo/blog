import { TestBed } from '@angular/core/testing';

import { AstroSService } from './astro-s.service';

describe('AstroSService', () => {
  let service: AstroSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AstroSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
