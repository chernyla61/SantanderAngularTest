import { createReducer, on } from '@ngrx/store';
import * as PhotoActions from './photo.actions';
import { IPhoto } from '@models';
import { PhotoState, initialState } from './photo.state';

export const photoReducer = createReducer(
  initialState,
  on(PhotoActions.loadPhotos, state => ({ ...state, loading: true })),
  on(PhotoActions.loadPhotosSuccess, (state, { photos }) => ({
    ...state,
    photos,
    loading: false,
  })),
  on(PhotoActions.loadPhotosFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);