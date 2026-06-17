import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPicsumImage } from "@models";

@Injectable({
  providedIn: 'root'
})
export class PlaceholderPhotosService {
  private apiUrl = 'https://picsum.photos/v2/list?limit=100&page=1';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<IPicsumImage[]> {
    return this.http.get<IPicsumImage[]>(this.apiUrl);
  }

  getImage(id: string): Observable<Blob> {
    return this.http.get(`https://picsum.photos/id/${id}/300/300`, { responseType: 'blob' });
  }
}
