import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomTempService{
    private apiUrl = "http://greetify.somee.com/api/CustomizeTemplates";

    constructor(private http: HttpClient) {}

    postTemp(data: any): Observable<any> {
        return this.http.post(this.apiUrl, data, {observe : 'response'});
    }

    checkTemp(userId: any, tempId: any): Observable<any> {
      return this.http.get(`${this.apiUrl}/search?userId=${userId}&tempId=${tempId}`);
    }
    
    updateTemp(id: any, data: any): Observable<any> {
      return this.http.put(`${this.apiUrl}/${id}`, data);
    }
}
