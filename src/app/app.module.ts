import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterPanelComponent } from './components/master-panel/master-panel.component';
import { DetailPanelComponent } from './components/detail-panel/detail-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterPanelComponent,
    DetailPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
