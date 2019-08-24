import { TestBed } from '@angular/core/testing';

import { GitHttpServiceService } from './git-http-service.service';

describe('GitHttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitHttpServiceService = TestBed.get(GitHttpServiceService);
    expect(service).toBeTruthy();
  });
});
