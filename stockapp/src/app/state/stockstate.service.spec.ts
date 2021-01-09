import { TestBed } from '@angular/core/testing';

import { StockstateService } from './stockstate.service';

describe('StockstateService', () => {
  let service: StockstateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockstateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
