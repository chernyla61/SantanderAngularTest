import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap, Subscription } from 'rxjs';
import { IPhoto } from '@models';
import { PhotoItemStore } from '@stores';

@Component({
  selector: 'app-detail-panel',
  templateUrl: './detail-panel.component.html',
  styleUrl: './detail-panel.component.scss'
})
export class DetailPanelComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  
  public photo:IPhoto
  
  constructor(
    private _photoItemStore: PhotoItemStore,
  ) { }

  ngOnInit(): void {
    this._subscriptions.push(
      this._photoItemStore.stateChanged$.pipe(
        tap(obj => {
          this.photo = obj;
          console.debug("Got Photo Object:", obj);
        }),

      ).subscribe(),
    )
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(s => s.unsubscribe());
  }


}
