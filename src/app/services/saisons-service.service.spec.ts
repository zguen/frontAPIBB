import { TestBed } from '@angular/core/testing';

import { SaisonsServiceService } from './saisons-service.service';

describe('SaisonsServiceService', () => {
  let service: SaisonsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaisonsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
