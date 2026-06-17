import { Injectable } from '@angular/core';
import { Observable, of, tap, filter } from 'rxjs';
import { StoreBase, IListStore } from './_store-base';
import { IPicsumImage } from '@models';
import { PlaceholderPhotosService } from '@services';

@Injectable({
    providedIn: 'root'
})

export class PhotoListStore extends StoreBase<IPicsumImage[]> implements IListStore<IPicsumImage[]> {
    private _reqSubmitted: boolean = false;
    constructor(
        private _photoApi: PlaceholderPhotosService
    ) {
        super();

    }

    getList$(): Observable<IPicsumImage[]> {
        if (!this._reqSubmitted) {
            this._reqSubmitted = true;
            return this._photoApi.getPhotos().pipe(
                tap(arr => {
                    // Map to include thumbnail URLs (Picsum.photos provides direct image URLs)
                    const photosWithUrls = arr.map(photo => ({
                        ...photo,
                    }));
                    this.setState(photosWithUrls);
                })
            )
        }
        return this.stateChanged$
    }



}