// photo.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PhotoState } from './photo.reducer';

export const selectPhotoState = createFeatureSelector<PhotoState>('photos');

export const selectAllPhotos = createSelector(
  selectPhotoState,
  (state: PhotoState) => state.photos
);

export const selectPhotosLoading = createSelector(
  selectPhotoState,
  (state: PhotoState) => state.loading
);

export const selectPhotosError = createSelector(
  selectPhotoState,
  (state: PhotoState) => state.error
);
