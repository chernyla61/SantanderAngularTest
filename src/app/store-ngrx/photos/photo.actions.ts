import { createAction, props } from '@ngrx/store';
import { IPhoto } from '@models';

export const loadPhotos = createAction('[Photos] Load Photos');
export const loadPhotosSuccess = createAction('[Photos] Load Photos Success', props<{ photos: IPhoto[] }>());
export const loadPhotosFailure = createAction('[Photos] Load Photos Failure', props<{ error: any }>());