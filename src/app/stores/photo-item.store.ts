import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { StoreBase, IItemStore } from './_store-base';
import { PhotoListStore } from './photo-list.store';
import { IPhoto } from '@models';
import { PlaceholderPhotosService } from '@services';

@Injectable({
    providedIn: 'root'
})

export class PhotoItemStore extends StoreBase<IPhoto> implements  IItemStore<IPhoto>{
    private _reqSubmitted: boolean = false;
    constructor(
        private _photoApi: PlaceholderPhotosService
    ){
        super();

    }

    setItem$(item:IPhoto):Observable<IPhoto>{
        this.setState(item);
        return this.stateChanged$
    }



}