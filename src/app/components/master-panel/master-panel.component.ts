import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap, Subscription } from 'rxjs';
import { IPhoto } from '@models';
import { PhotoListStore, PhotoItemStore } from '@stores';
import { GridOptions, ColDef, GridApi, GridReadyEvent, RowSelectedEvent } from 'ag-grid-community'

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

  constructor(
    private _photoListStore: PhotoListStore,
    private _photoItemStore: PhotoItemStore,
  ) { }

  ngOnInit(): void {
    this.colDefs = this.getColDefs();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(s => s.unsubscribe());
  }

  gridReady($event: GridReadyEvent) {
    this.gridApi = $event.api;

    this._subscriptions.push(
      this._photoListStore.getList$().pipe(
        tap(arr => {
          this.items = arr;
          console.debug("Got Array from API:", arr);
        }),

      ).subscribe(),
    )

  }

  rowSelected($event: RowSelectedEvent) {

  }

  getColDefs(): ColDef[] {
    return [
      { headerName: 'Album ID', field: 'albumId' },
      { headerName: 'Photo ID', field: 'id' },
      { headerName: 'Title', field: 'title' },
      { headerName: 'thumbnail', field: 'thumbnai' }
    ]
  }


}
