import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TempService{
    private apiUrl = "/api/Templates";

    constructor(private http: HttpClient) {}

    getService(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
}
