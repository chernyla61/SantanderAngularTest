import { TestBed } from '@angular/core/testing';

import { PlaceholderPhotosService } from './placeholder-photos.service';

describe('PlaceholderPhotosService', () => {
  let service: PlaceholderPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceholderPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
