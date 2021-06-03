import { TestBed } from '@angular/core/testing';

import { TicketapiService } from './ticketapi.service';

describe('TicketapiService', () => {
  let service: TicketapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
