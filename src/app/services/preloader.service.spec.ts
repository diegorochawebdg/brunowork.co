import { TestBed } from '@angular/core/testing';

import { PreloaderService } from './preloader.service';

describe('PreloaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreloaderService = TestBed.get(PreloaderService);
    expect(service).toBeTruthy();
  });
});
