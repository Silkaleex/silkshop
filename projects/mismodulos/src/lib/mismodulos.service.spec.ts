import { TestBed } from '@angular/core/testing';

import { MismodulosService } from './mismodulos.service';

describe('MismodulosService', () => {
  let service: MismodulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MismodulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
