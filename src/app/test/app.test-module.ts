import {NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core'
import { AppModule } from '../app.module';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing';
import { PlaceholderPhotosService } from '@services'
import { PhotoItemStore, PhotoListStore } from '@stores'



@NgModule({
  imports: [
    AppModule,
    RouterTestingModule,
    HttpClientTestingModule,
  ],
  providers: [
    PlaceholderPhotosService,
    PhotoItemStore,
    PhotoListStore,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ]
})
export class AppTestModule { }
