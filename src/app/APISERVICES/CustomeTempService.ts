import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomTempService{
    private apiUrl = "/api/CustomizeTemplates";

    constructor(private http: HttpClient) {}

    postTemp(data: any): Observable<any> {
        return this.http.post(this.apiUrl, data, {observe : 'response'});
    }
}
