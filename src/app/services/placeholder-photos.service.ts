import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPhoto } from "@models";

@Injectable({
  providedIn: 'root'
})
export class PlaceholderPhotosService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(this.apiUrl);
  }

  getBlob(url: string): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' });
  }
}
