import { TestBed, inject } from '@angular/core/testing';

import { VoteStorageService } from './vote-storage.service';

describe('VoteStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoteStorageService]
    });
  });

  it('should be created', inject([VoteStorageService], (service: VoteStorageService) => {
    expect(service).toBeTruthy();
  }));
});
