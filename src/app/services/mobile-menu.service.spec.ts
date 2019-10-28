import { TestBed } from '@angular/core/testing';

import { MobileMenuService } from './mobile-menu.service';

describe('MobileMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileMenuService = TestBed.get(MobileMenuService);
    expect(service).toBeTruthy();
  });
});
