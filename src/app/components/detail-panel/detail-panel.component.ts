import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tap, Subscription } from 'rxjs';
import { IPhoto } from '@models';
import { PhotoItemStore } from '@stores';

@Component({
  selector: 'app-detail-panel',
  templateUrl: './detail-panel.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./detail-panel.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DetailPanelComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  
  public photo:IPhoto;
  
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
