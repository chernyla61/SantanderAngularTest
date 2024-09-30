import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap, Subscription, Observable } from 'rxjs';
import { IPhoto } from '@models';
import { PhotoListStore, PhotoItemStore } from '@stores';
import { GridOptions, ColDef, GridApi, GridReadyEvent, RowClickedEvent } from 'ag-grid-community'
import { Store } from '@ngrx/store';
import * as PhotoActions from './../../store-ngrx/photos/photo.actions';
import { selectAllPhotos, selectPhotosLoading, selectPhotosError } from './../../store-ngrx/photos/photo.selectors';


@Component({
  selector: 'app-master-panel',
  templateUrl: './master-panel.component.html',
  styleUrl: './master-panel.component.scss'
})
export class MasterPanelComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];

  public items: IPhoto[] = [];
  public colDefs: ColDef[] = [];
  public gridApi: GridApi;

  photos$: Observable<IPhoto[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  public   defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    floatingFilter: true,
  };


  constructor(
    private store: Store,
    private _photoItemStore: PhotoItemStore
  ) { 
    this.photos$ = this.store.select(selectAllPhotos);
    this.loading$ = this.store.select(selectPhotosLoading);
    this.error$ = this.store.select(selectPhotosError);

  }

  ngOnInit(): void {
    this.colDefs = this.getColDefs();

  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(s => s.unsubscribe());
  }

  gridReady($event: GridReadyEvent) {
    this.gridApi = $event.api;

    this.store.dispatch(PhotoActions.loadPhotos());
  
    this._subscriptions.push(
      this.photos$.pipe(
        tap(arr => {
          this.items = arr;
          console.debug("Got Array from API:", arr);
        }),

      ).subscribe(),
    )

  }

  rowClicked($event: RowClickedEvent) {
    this._photoItemStore.setItem$($event.data);
  }

  getColDefs(): ColDef[] {
    return [
      { headerName: 'Album ID', field: 'albumId', width:120},
      { headerName: 'Photo ID', field: 'id', width:120 },
      { headerName: 'Thumbnail', 
        field: 'thumbnailUrl', 
        cellRenderer: (params: any) => `<img src="${params.value}" alt="${params.data.title}" style="height: 50px; width: auto;">`,
        width: 120
      },
      { headerName: 'Title', field: 'title', flex: 1 },
    ]
  }


}
