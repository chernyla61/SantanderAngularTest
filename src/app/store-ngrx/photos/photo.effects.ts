// photo.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PlaceholderPhotosService } from '@services';
import * as PhotoActions from './photo.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PhotoEffects {
    
    constructor(
        private actions$: Actions,
        private photosService: PlaceholderPhotosService
      ) {}



    loadPhotos$ = createEffect(() =>
        this.actions$.pipe(
        ofType(PhotoActions.loadPhotos),
        mergeMap(() =>
            this.photosService.getPhotos().pipe(
            map(photos => PhotoActions.loadPhotosSuccess({ photos })),
            catchError(error => of(PhotoActions.loadPhotosFailure({ error })))
            )
        )
        )
    );


}
