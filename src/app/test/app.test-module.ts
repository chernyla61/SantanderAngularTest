import {NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core'
import { AppModule } from '../app.module';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { PlaceholderPhotosService } from '@services'
import { PhotoItemStore, PhotoListStore } from '@stores'

@NgModule({
  imports: [
    AppModule,
  ],
  providers: [
    provideHttpClientTesting(),
    PlaceholderPhotosService,
    PhotoItemStore,
    PhotoListStore,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ]
})
export class AppTestModule { }
