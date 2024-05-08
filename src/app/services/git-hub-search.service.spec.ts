import { TestBed } from '@angular/core/testing';

import { GitHubSearchService } from './git-hub-search.service';

describe('GitHubSearchService', () => {
  let service: GitHubSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitHubSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
