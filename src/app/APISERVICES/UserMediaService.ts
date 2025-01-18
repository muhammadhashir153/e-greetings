import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserMediaService {
  private apiUrl = 'http://greetify.somee.com/api/CardMedias';

  constructor(private http: HttpClient) {}

  createMedia(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  getAllMedia(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getMediaById(id: any): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}`);
  }

  updateMedia(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }
}
