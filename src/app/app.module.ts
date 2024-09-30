import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { AgGridModule } from 'ag-grid-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterPanelComponent } from './components/master-panel/master-panel.component';
import { DetailPanelComponent } from './components/detail-panel/detail-panel.component';
import { photoReducer } from './store-ngrx/photos/photo.reducer';
import { PhotoEffects } from './store-ngrx/photos/photo.effects';

@NgModule({
  declarations: [
    AppComponent,
    MasterPanelComponent,
    DetailPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
    StoreModule.forRoot({ photos: photoReducer }),
    EffectsModule.forRoot([PhotoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
