import { Injectable } from '@angular/core';
import { Observable, of, tap, filter } from 'rxjs';
import { StoreBase, IListStore } from './_store-base';
import { IPhoto } from '@models';
import { PlaceholderPhotosService } from '@services';

@Injectable({
    providedIn: 'root'
})

export class PhotoListStore extends StoreBase<IPhoto[]> implements IListStore<IPhoto[]> {
    private _reqSubmitted: boolean = false;
    constructor(
        private _photoApi: PlaceholderPhotosService
    ) {
        super();

    }

    getList$(): Observable<IPhoto[]> {
        if (!this._reqSubmitted) {
            this._reqSubmitted = true;
            return this._photoApi.getPhotos().pipe(
                tap(arr => {
                    this.setState(arr);
                })
            )
        }
        return this.stateChanged$
    }



}