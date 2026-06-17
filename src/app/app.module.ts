import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MasterPanelComponent } from './components/master-panel/master-panel.component';
import { DetailPanelComponent } from './components/detail-panel/detail-panel.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasterPanelComponent,
    DetailPanelComponent,
  ],
  providers: [
    provideHttpClient(),
  ]
})
export class AppModule { }
