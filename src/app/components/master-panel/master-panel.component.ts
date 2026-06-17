import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { tap, Subscription } from 'rxjs';
import { IPhoto } from '@models';
import { PhotoListStore, PhotoItemStore } from '@stores';
import { GridOptions, ColDef, GridApi, GridReadyEvent, RowClickedEvent } from 'ag-grid-community'

@Component({
  selector: 'app-master-panel',
  templateUrl: './master-panel.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./master-panel.component.scss'],
  standalone: true,
  imports: [CommonModule, AgGridModule]
})
export class MasterPanelComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];

  public items: IPhoto[] = [];
  public colDefs: ColDef[] = [];
  public gridApi: GridApi;

  public   defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    floatingFilter: true,
  };


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
