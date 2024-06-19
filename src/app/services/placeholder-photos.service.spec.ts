import { TestBed } from '@angular/core/testing';
import { AppTestModule } from '@test';
import { PlaceholderPhotosService } from './placeholder-photos.service';

describe('PlaceholderPhotosService', () => {
  let service: PlaceholderPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppTestModule
      ],
    });
    service = TestBed.inject(PlaceholderPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
