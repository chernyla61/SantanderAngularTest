import {Observable, BehaviorSubject } from 'rxjs';

export class StoreBase<T> {
    public stateChanged$: Observable<T>;
    private _state$:BehaviorSubject<T>;

    protected constructor(){
        this._state$ = new BehaviorSubject<T>(undefined);
        this.stateChanged$ = this._state$.asObservable();
    }

    public setState(newState: T): void {
        this._state$.next(newState);
    }

    // Method to get the current state
    public getState(): T {
        return this._state$.getValue();
    }
    
}

export interface IListStore<T>{
    getList$(): Observable<T>;
}

export interface IItemStore<T>{
    setItem$(item:T): Observable<T>;
}